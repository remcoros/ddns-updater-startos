FROM qmcgaw/ddns-updater:2.8.2 AS build
FROM alpine:latest

# these are specified in Makefile
ARG PLATFORM
ARG YQ_VERSION
ARG YQ_SHA

RUN \
  # install yq
  wget -qO /tmp/yq https://github.com/mikefarah/yq/releases/download/v${YQ_VERSION}/yq_linux_${PLATFORM} && \
  echo "${YQ_SHA} /tmp/yq" | sha256sum -c || exit 1 && \ 
  mv /tmp/yq /usr/local/bin/yq && chmod +x /usr/local/bin/yq

COPY --from=build /updater /updater
ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh

# taken from https://github.com/qdm12/ddns-updater/blob/master/Dockerfile
ENV \
    # Core
    CONFIG= \
    PERIOD=5m \
    UPDATE_COOLDOWN_PERIOD=5m \
    PUBLICIP_FETCHERS=all \
    PUBLICIP_HTTP_PROVIDERS=all \
    PUBLICIPV4_HTTP_PROVIDERS=all \
    PUBLICIPV6_HTTP_PROVIDERS=all \
    PUBLICIP_DNS_PROVIDERS=all \
    PUBLICIP_DNS_TIMEOUT=3s \
    HTTP_TIMEOUT=10s \
    DATADIR=/updater/data \
    CONFIG_FILEPATH=/updater/data/config.json \
    RESOLVER_ADDRESS= \
    RESOLVER_TIMEOUT=5s \
    # Web UI
    SERVER_ENABLED=yes \
    LISTENING_ADDRESS=:8000 \
    ROOT_URL=/ \
    # Backup
    BACKUP_PERIOD=0 \
    BACKUP_DIRECTORY=/updater/data \
    # Other
    LOG_LEVEL=info \
    LOG_CALLER=hidden \
    SHOUTRRR_ADDRESSES= \
    SHOUTRRR_DEFAULT_TITLE="DDNS Updater" \
    TZ= \
    UMASK= \
    HEALTH_SERVER_ADDRESS=127.0.0.1:9999 \
    HEALTH_HEALTHCHECKSIO_BASE_URL=https://hc-ping.com \
    HEALTH_HEALTHCHECKSIO_UUID=
