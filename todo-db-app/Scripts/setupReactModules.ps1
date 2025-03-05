Write-Host ""
Write-Host "==================== Setup: react ====================" -ForegroundColor Cyan

$command = "npm install @chakra-ui/react @emotion/react"
Write-Host ""
Write-Host $command -ForegroundColor DarkCyan
Invoke-Expression $command

$command = "npm install jotai"
Write-Host ""
Write-Host $command -ForegroundColor DarkCyan
Invoke-Expression $command

$command = "npm install vite-tsconfig-paths"
Write-Host ""
Write-Host $command -ForegroundColor DarkCyan
Invoke-Expression $command

$command = "npx @chakra-ui/cli snippet add --all"
Write-Host ""
Write-Host $command -ForegroundColor DarkCyan
Invoke-Expression $command

Write-Host ""
Write-Host "==================== Completed!! ====================" -ForegroundColor Green