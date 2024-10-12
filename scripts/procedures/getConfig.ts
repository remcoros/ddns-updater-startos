import { compat, types as T } from "../deps.ts";

export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({
  period: {
    type: "string",
    name: "Update interval",
    description: "Default period of IP address check",
    nullable: false,
    default: "5m",
    pattern: "^([0-9]{1,2}h)?\s*([0-9]{1,2}m)?\s*([0-9]{1,2}s)?$",
    "pattern-description": "A duration string. Examples: 1h or 5m or 30s",
  },
  config: {
    type: "string",
    nullable: false,
    name: "DDNS Provider(s)",
    description:
      "DDNS Provider configuration, read the instructions for guidance.",
    default: '{ "settings": [{ "provider": "READ INSTRUCTIONS!", }] }',
    pattern: "^.*$",
    "pattern-description": "A valid DDNS Updater config json",
    masked: false,
    copyable: true,
  },
  advanced: {
    type: "object",
    name: "Advanced settings",
    description: "Advanced settings",
    spec: {
      LOG_LEVEL: {
        type: "string",
        name: "Level of logging",
        description: "Level of logging, debug, info, warning or error",
        nullable: false,
        default: "info",
        pattern: "^debug|info|warning|error$",
        "pattern-description": "debug, info, warning or error",
      },
      UPDATE_COOLDOWN_PERIOD: {
        type: "string",
        name: "Update cooldown period",
        description:
          "Duration to cooldown between updates for each record. This is useful to avoid being rate limited or banned.",
        nullable: false,
        default: "5m",
        pattern: "^([0-9]{1,2}h)?\s*([0-9]{1,2}m)?\s*([0-9]{1,2}s)?$",
        "pattern-description": "A duration string. Examples: 1h or 5m or 30s",
      },
      PUBLICIP_FETCHERS: {
        type: "string",
        name: "Public IP fetchers",
        description:
          "Comma separated fetcher types to obtain the public IP address from http and dns.",
        nullable: false,
        default: "all",
        pattern: "^.*$",
        "pattern-description": "Comma separated list or 'all'",
      },
      PUBLICIP_HTTP_PROVIDERS: {
        type: "string",
        name: "Public IP fetchers",
        description:
          "Comma separated providers to obtain the public IP address (ipv4 or ipv6).",
        nullable: false,
        default: "all",
        pattern: "^.*$",
        "pattern-description": "Comma separated list or 'all'",
      },
      PUBLICIPV4_HTTP_PROVIDERS: {
        type: "string",
        name: "Public IP fetchers",
        description:
          "Comma separated providers to obtain the public IPv4 address only.",
        nullable: false,
        default: "all",
        pattern: "^.*$",
        "pattern-description": "Comma separated list or 'all'",
      },
      PUBLICIPV6_HTTP_PROVIDERS: {
        type: "string",
        name: "Public IP fetchers",
        description:
          "Comma separated providers to obtain the public IPv6 address only.",
        nullable: false,
        default: "all",
        pattern: "^.*$",
        "pattern-description": "Comma separated list or 'all'",
      },
      PUBLICIP_DNS_PROVIDERS: {
        type: "string",
        name: "Public IP fetchers",
        description:
          "Comma separated providers to obtain the public IP address (IPv4 and/or IPv6).",
        nullable: false,
        default: "all",
        pattern: "^.*$",
        "pattern-description": "Comma separated list or 'all'",
      },
      PUBLICIP_DNS_TIMEOUT: {
        type: "string",
        name: "DNS query timeout",
        description: "Public IP DNS query timeout.",
        nullable: false,
        default: "3s",
        pattern: "^([0-9]{1,2}h)?\s*([0-9]{1,2}m)?\s*([0-9]{1,2}s)?$",
        "pattern-description": "A duration string. Examples: 1h or 5m or 30s",
      },
      HTTP_TIMEOUT: {
        type: "string",
        name: "HTTP request timeout",
        description: "Timeout for all HTTP requests.",
        nullable: false,
        default: "10s",
        pattern: "^([0-9]{1,2}h)?\s*([0-9]{1,2}m)?\s*([0-9]{1,2}s)?$",
        "pattern-description": "A duration string. Examples: 1h or 5m or 30s",
      },
      RESOLVER_ADDRESS: {
        type: "string",
        name: "Resolver address",
        description:
          "A plaintext DNS address to use to resolve your domain names defined in your settings only. For example it can be 1.1.1.1:53.",
        nullable: true,
        default: "",
        pattern: "^.*$",
        "pattern-description": "A plaintext DNS address",
      },
      RESOLVER_TIMEOUT: {
        type: "string",
        name: "Resolver timeout",
        description: "Resolver DNS query timeout.",
        nullable: false,
        default: "5s",
        pattern: "^([0-9]{1,2}h)?\s*([0-9]{1,2}m)?\s*([0-9]{1,2}s)?$",
        "pattern-description": "A duration string. Examples: 1h or 5m or 30s",
      },
    },
  },
  shoutrrr: {
    type: "object",
    name: "Shoutrrr (notification service)",
    description: "Shoutrrr settings",
    spec: {
      SHOUTRRR_ADDRESSES: {
        type: "string",
        name: "Shoutrrr address",
        description:
          "(optional) Comma separated list of Shoutrrr addresses (notification services)",
        nullable: true,
        default: "",
        pattern: "^.*$",
        "pattern-description": "Comma separated list of Shoutrrr addresses",
      },
      SHOUTRRR_DEFAULT_TITLE: {
        type: "string",
        name: "Notification title",
        description: "Default title for Shoutrrr notifications",
        nullable: false,
        default: "DDNS Updater",
        pattern: "^.*$",
        "pattern-description": "any string",
      },
    },
  },
});
