@echo off
title Running TypeScript Tests
echo Starting execution: npx tsx --test *.test.ts...
echo -----------------------------------------------

:: รันคำสั่งเทส
call npx tsx --test *.test.ts

:: ตรวจสอบสถานะการทำงาน (Exit Code)
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Tests failed! 
    pause
) else (
    echo.
    echo [SUCCESS] All tests passed!
    timeout /t 5
)