import { Parameter } from "./parameter.ts";

export interface VcsRoot {
  "?xml": { "@version": string; "@encoding": string };
  "vcs-root": {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
    "@xsi:noNamespaceSchemaLocation":
      "https://www.jetbrains.com/teamcity/schemas/2020.1/project-config.xsd";
    "@uuid": string;
    "@type": string;
    "modification-check-interval"?: number;
    name: string;
    param: Parameter[];
  };
}
