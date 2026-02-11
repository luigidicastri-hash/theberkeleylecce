@echo off
REM Go to ROOT folder
cd "C:\Users\luigi\My drive (luigidicastri@gmail.com) (1)\LDC_Drive_2023\#Berkeley\TheNewBerkeleyLecce"

REM Start Python server in the background
start /b python -m http.server 8000

REM Wait until the server is ready
:waitloop
timeout /t 1 /nobreak >nul
powershell -Command "try { $r=Invoke-WebRequest -Uri 'http://localhost:8000/index.html' -UseBasicParsing; exit 0 } catch { exit 1 }"
if errorlevel 1 goto waitloop

REM Open welcome page in default browser
start "" "http://localhost:8000/index.html"

REM Keep the batch window open with server running
pause

