import { Parameter } from "./parameter.ts";

export interface BuildType {
  "?xml": { "@version": "1.0"; "@encoding": "UTF-8" };
  "build-type": {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
    "@xsi:noNamespaceSchemaLocation":
      "https://www.jetbrains.com/teamcity/schemas/2020.1/project-config.xsd";
    "@uuid": string;
    name: string;
    description?: string;
    settings: {
      options?: { option: Parameter[] };
      parameters?: {
        param: Parameter[];
      };
      "build-runners"?: {
        "runner": {
          "@id": string;
          "@name": string;
          "@type": string;
          conditions?: {
            [k: string]: { "@name": string; "@value"?: string }[];
          };
          parameters: {
            param: Parameter[];
          };
        }[];
      };
      "vcs-settings"?: {
        "vcs-entry-ref": {
          "@root-id": string;
          "checkout-rule": {
            "@rule": string;
          }[];
        }[];
      };
      requirements?: {
        [k: string]: { "@id": string; "@name": string; "@value"?: string }[];
      };
      "build-triggers"?: {
        "build-trigger": {
          "@id": string;
          "@type": string;
          parameters: {
            param: Parameter[];
          };
        }[];
      };
      "build-extensions"?: {
        "extension": {
          "@id": string;
          "@type": string;
          parameters: {
            param: Parameter[];
          };
        }[];
      };
    };
  };
}
