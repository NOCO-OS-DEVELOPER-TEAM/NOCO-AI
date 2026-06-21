/**
 * NOCO Boot / Exclusive — rainbow glass shard burst
 */
(function (global) {
  "use strict";

  var HUES = [12, 48, 120, 168, 210, 260, 300, 330];

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function traceShard(ctx, w, h, shape) {
    ctx.beginPath();
    if (shape === 1) {
      ctx.moveTo(-w * 0.44, -h * 0.1);
      ctx.lineTo(w * 0.4, -h * 0.48);
      ctx.lineTo(w * 0.48, h * 0.2);
      ctx.lineTo(-w * 0.1, h * 0.46);
      ctx.closePath();
    } else if (shape === 2) {
      ctx.moveTo(-w * 0.36, -h * 0.44);
      ctx.lineTo(w * 0.42, -h * 0.28);
      ctx.lineTo(w * 0.44, h * 0.36);
      ctx.lineTo(-w * 0.4, h * 0.38);
      ctx.closePath();
    } else if (shape === 3) {
      ctx.moveTo(-w * 0.48, -h * 0.04);
      ctx.lineTo(w * 0.12, -h * 0.5);
      ctx.lineTo(w * 0.46, h * 0.06);
      ctx.lineTo(-w * 0.38, h * 0.3);
      ctx.closePath();
    } else {
      ctx.moveTo(-w * 0.46, -h * 0.26);
      ctx.lineTo(w * 0.38, -h * 0.48);
      ctx.lineTo(w * 0.48, h * 0.2);
      ctx.lineTo(-w * 0.42, h * 0.34);
      ctx.closePath();
    }
  }

  function drawShard(ctx, x, y, size, rot, hue, alpha, shape) {
    var w = size * 1.05;
    var h = size * 0.88;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot * Math.PI / 180);
    ctx.globalAlpha = alpha;
    ctx.shadowColor = "hsla(" + hue + ", 100%, 72%, " + (alpha * 0.95) + ")";
    ctx.shadowBlur = size * 1.85;
    var g = ctx.createLinearGradient(-w * 0.5, -h * 0.5, w * 0.5, h * 0.5);
    g.addColorStop(0, "hsla(" + hue + ", 100%, 88%, " + alpha + ")");
    g.addColorStop(0.5, "hsla(" + ((hue + 40) % 360) + ", 95%, 62%, " + (alpha * 0.92) + ")");
    g.addColorStop(1, "hsla(" + ((hue + 100) % 360) + ", 90%, 52%, " + (alpha * 0.85) + ")");
    ctx.fillStyle = g;
    traceShard(ctx, w, h, shape);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255," + (alpha * 0.75) + ")";
    ctx.lineWidth = 1.3;
    ctx.stroke();
    ctx.restore();
  }

  function resizeCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    var ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  function drawHandoffWash(ctx, vw, vh, cx, cy, elapsed, duration) {
    var t = Math.min(1, elapsed / duration);
    var rise = t < 0.5 ? t / 0.5 : Math.max(0, 1 - (t - 0.5) / 0.5);
    var alpha = rise * 0.1;
    if (alpha < 0.01) return;
    var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(vw, vh) * 0.58);
    g.addColorStop(0, "rgba(129, 140, 248, " + alpha + ")");
    g.addColorStop(0.35, "rgba(94, 234, 212, " + (alpha * 0.65) + ")");
    g.addColorStop(0.65, "rgba(232, 121, 249, " + (alpha * 0.35) + ")");
    g.addColorStop(1, "rgba(8, 12, 26, 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, vw, vh);
  }

  function playShardBurst(opts, onDone) {
    opts = opts || {};
    var canvas = document.createElement("canvas");
    canvas.className = "rainbow-shard-burst-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    var ctx = resizeCanvas(canvas);
    if (!ctx) {
      if (onDone) onDone();
      return function () {};
    }

    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var cx = opts.x != null ? opts.x : vw * 0.5;
    var cy = opts.y != null ? opts.y : vh * 0.5;
    var count = opts.count || 72;
    var duration = opts.duration || 4200;
    var handoffAt = opts.handoffAt != null ? opts.handoffAt : 0.36;
    var handoffFired = false;
    var shards = [];
    var i;
    var animId = null;

    for (i = 0; i < count; i++) {
      var kind = i % 10;
      var ox = cx;
      var oy = cy;
      var sx = cx;
      var sy = cy;
      if (kind < 2) {
        sx = (i / count) * vw;
        sy = -50 - (i % 7) * 14;
        ox = sx;
        oy = sy;
      } else if (kind < 4) {
        sx = (i / count) * vw;
        sy = vh + 50 + (i % 7) * 14;
        ox = sx;
        oy = sy;
      } else if (kind < 5) {
        sx = -48;
        sy = (i / count) * vh;
        ox = sx;
        oy = sy;
      } else if (kind < 6) {
        sx = vw + 48;
        sy = (i / count) * vh;
        ox = sx;
        oy = sy;
      } else {
        var ang = (i / count) * Math.PI * 2 + (i % 5) * 0.15;
        ox = cx + Math.cos(ang) * 6;
        oy = cy + Math.sin(ang) * 6;
        sx = ox;
        sy = oy;
      }
      var outAng = Math.atan2(sy - cy, sx - cx);
      if (kind >= 6) outAng = (i / count) * Math.PI * 2;
      var dist = 260 + (i % 11) * 58 + (kind < 4 ? 90 : 0);
      shards.push({
        ox: ox,
        oy: oy,
        tx: ox + Math.cos(outAng) * dist,
        ty: oy + Math.sin(outAng) * dist,
        size: 11 + (i % 8) * 4,
        rot0: (i % 12) * 28,
        rot1: (i % 12) * 28 + 140 + (i % 4) * 24,
        hue: HUES[i % HUES.length] + (i % 18),
        shape: i % 4,
        delay: (i % 16) * 72,
        travel: 0.88 + (i % 5) * 0.06,
        kind: kind
      });
    }

    var start = performance.now();

    function frame(now) {
      var elapsed = now - start;
      ctx.clearRect(0, 0, vw, vh);
      drawHandoffWash(ctx, vw, vh, cx, cy, elapsed, duration);
      if (!handoffFired && elapsed >= duration * handoffAt) {
        handoffFired = true;
        if (opts.onHandoff) opts.onHandoff();
      }
      var allDone = true;
      for (i = 0; i < shards.length; i++) {
        var s = shards[i];
        var local = Math.max(0, elapsed - s.delay);
        var travelMs = duration * (s.travel || 0.9);
        var t = Math.min(1, local / travelMs);
        if (t < 1) allDone = false;
        var e = easeOutQuart(t);
        var x = s.ox + (s.tx - s.ox) * e;
        var y = s.oy + (s.ty - s.oy) * e;
        var alpha = t < 0.08 ? t / 0.08 : Math.max(0, 1 - Math.pow((t - 0.1) / 0.9, 1.35));
        var rot = s.rot0 + (s.rot1 - s.rot0) * e;
        if (alpha > 0.02) drawShard(ctx, x, y, s.size, rot, s.hue, alpha * 0.94, s.shape);
      }
      if (!allDone || elapsed < duration) {
        animId = requestAnimationFrame(frame);
      } else {
        clearTimeout(safety);
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
        if (onDone) onDone();
      }
    }

    animId = requestAnimationFrame(frame);

    var safety = setTimeout(function () {
      if (animId) cancelAnimationFrame(animId);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      if (!handoffFired) {
        handoffFired = true;
        if (opts.onHandoff) opts.onHandoff();
      }
      if (onDone) onDone();
    }, duration + 900);

    return function cancel() {
      clearTimeout(safety);
      if (animId) cancelAnimationFrame(animId);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }

  global.NocoBootFX = { playShardBurst: playShardBurst };
})(typeof window !== "undefined" ? window : this);
