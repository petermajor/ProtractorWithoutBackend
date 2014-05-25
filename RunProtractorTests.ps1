$basepath = Resolve-Path .
$webpath = Join-Path $basepath "JustPete.Web"
$testpath = Join-Path $basepath "tests\web"
$nodeModulesPath = Join-Path "$basePath" "node_modules"
$protractorCmd = Join-Path "$nodeModulesPath" ".bin\protractor.cmd"

Start-Process "iisexpress" "/path:$webpath /port:55555" -WorkingDirectory "C:\Program Files\IIS Express"
try {
	& "$protractorCmd" "$testpath\protractor.conf.js"
} finally {
	Stop-Process -Name "iisexpress"
}
