#!/bin/sh

echo "gradle build"
./gradlew assemble

echo "docker build winery server"
docker build -f modules/winery/application/Dockerfile -t winery-server modules/winery/application

echo "docker build winecellar server"
docker build -f modules/winecellar/application/Dockerfile -t winecellar-server modules/winecellar/application
