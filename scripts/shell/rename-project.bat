@echo off

IF "%1"=="" (
    echo FAILED rename-project: No project name given as an argument
    exit /b 1
)

SET PROJECT_NAME=%1

git checkout -b %PROJECT_NAME%
npx react-native-rename@latest %PROJECT_NAME%