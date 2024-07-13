#!/bin/sh
echo
echo "Starting DDNS Updater..."
echo

yq e '.config' /updater/data/start9/config.yaml > /updater/data/config.json

export PERIOD=$(yq e '.period' /updater/data/start9/config.yaml)

/updater/ddns-updater
