#!/bin/sh

sh scripts/build-all-docker-images.sh
sh scripts/publish-images-to-k3d.sh
sh scripts/deploy-to-k3d.sh
