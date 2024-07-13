#!/bin/sh
echo
echo "Starting DDNS Updater..."
echo

yq e '.config' /updater/data/start9/config.yaml > /updater/data/config.json

export PERIOD=$(yq e '.period' /updater/data/start9/config.yaml)
export LOG_LEVEL=$(yq e '.advanced.LOG_LEVEL' /updater/data/start9/config.yaml)
export UPDATE_COOLDOWN_PERIOD=$(yq e '.advanced.UPDATE_COOLDOWN_PERIOD' /updater/data/start9/config.yaml)
export PUBLICIP_FETCHERS=$(yq e '.advanced.PUBLICIP_FETCHERS' /updater/data/start9/config.yaml)
export PUBLICIP_HTTP_PROVIDERS=$(yq e '.advanced.PUBLICIP_HTTP_PROVIDERS' /updater/data/start9/config.yaml)
export PUBLICIPV4_HTTP_PROVIDERS=$(yq e '.advanced.PUBLICIPV4_HTTP_PROVIDERS' /updater/data/start9/config.yaml)
export PUBLICIPV6_HTTP_PROVIDERS=$(yq e '.advanced.PUBLICIPV6_HTTP_PROVIDERS' /updater/data/start9/config.yaml)
export PUBLICIP_DNS_PROVIDERS=$(yq e '.advanced.PUBLICIP_DNS_PROVIDERS' /updater/data/start9/config.yaml)
export PUBLICIP_DNS_TIMEOUT=$(yq e '.advanced.PUBLICIP_DNS_TIMEOUT' /updater/data/start9/config.yaml)
export HTTP_TIMEOUT=$(yq e '.advanced.HTTP_TIMEOUT' /updater/data/start9/config.yaml)
export RESOLVER_ADDRESS=$(yq e '.advanced.RESOLVER_ADDRESS //""' /updater/data/start9/config.yaml)
export RESOLVER_TIMEOUT=$(yq e '.advanced.RESOLVER_TIMEOUT' /updater/data/start9/config.yaml)
export SHOUTRRR_ADDRESSES=$(yq e '.shoutrrr.SHOUTRRR_ADDRESSES //""' /updater/data/start9/config.yaml)
export SHOUTRRR_DEFAULT_TITLE=$(yq e '.shoutrrr.SHOUTRRR_DEFAULT_TITLE' /updater/data/start9/config.yaml)

/updater/ddns-updater
