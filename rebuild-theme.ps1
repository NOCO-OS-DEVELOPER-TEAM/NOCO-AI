# Run before GitHub upload: bundles all hub-exclusive-*.css into noco-theme.css
$dir = Join-Path $PSScriptRoot "css"
$out = Join-Path $dir "noco-theme.css"
$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine("/* NOCO AI theme bundle — auto-generated, do not edit */")
Get-ChildItem (Join-Path $dir "hub-exclusive-v*.css") | Sort-Object Name | ForEach-Object {
  [void]$sb.AppendLine("")
  [void]$sb.AppendLine("/* ===== $($_.Name) ===== */")
  [void]$sb.AppendLine([IO.File]::ReadAllText($_.FullName))
}
[IO.File]::WriteAllText($out, $sb.ToString())
Write-Host "OK: $out ($((Get-Item $out).Length) bytes)"
