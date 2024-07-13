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
    default: "{ \"settings\": [{ \"provider\": \"READ INSTRUCTIONS!\", }] }",
    pattern: '^.*$',
    "pattern-description": "A valid DDNS Updater config json",
    masked: false,
    copyable: true,
  },
});
