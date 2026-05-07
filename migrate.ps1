# migrate.ps1
Write-Host "Copying types.ts"
Copy-Item "c:\Users\mo\Desktop\ntav\myApp\components\drawing\types.ts" "c:\Users\mo\Desktop\ntav\gesture-kit\packages\canvas\src\gesture-kit-drawing\types.ts" -Force

Write-Host "Migrating Drawing Gestures"
Get-ChildItem -Path "c:\Users\mo\Desktop\ntav\myApp\components\drawing\gestures\*.tsx" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'export default (\w+);', 'export { $1 };'
    $dest = "c:\Users\mo\Desktop\ntav\gesture-kit\packages\canvas\src\gesture-kit-drawing\components\" + $_.Name
    Set-Content -Path $dest -Value $content -Encoding UTF8
}

Write-Host "Migrating Drawing Hooks"
Get-ChildItem -Path "c:\Users\mo\Desktop\ntav\myApp\components\drawing\hooks\*.ts" | ForEach-Object {
    Copy-Item $_.FullName "c:\Users\mo\Desktop\ntav\gesture-kit\packages\canvas\src\gesture-kit-drawing\hooks\" -Force
}

Write-Host "Migrating Proximity Gestures"
Get-ChildItem -Path "c:\Users\mo\Desktop\ntav\myApp\components\proximity\gestures\*.tsx" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'export default (\w+);', 'export { $1 };'
    $dest = "c:\Users\mo\Desktop\ntav\gesture-kit\packages\sensors\src\gesture-kit-proximity\components\" + $_.Name
    Set-Content -Path $dest -Value $content -Encoding UTF8
}

Write-Host "Migrating Proximity Hooks"
Get-ChildItem -Path "c:\Users\mo\Desktop\ntav\myApp\components\proximity\hooks\*.ts" | ForEach-Object {
    Copy-Item $_.FullName "c:\Users\mo\Desktop\ntav\gesture-kit\packages\sensors\src\gesture-kit-proximity\hooks\" -Force
}

Write-Host "Migration script completed."
