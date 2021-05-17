import { Parameter } from "./parameter.ts";

export interface Project {
  "?xml": { "@version": "1.0"; "@encoding": "UTF-8" };
  project: {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
    "@xsi:noNamespaceSchemaLocation":
      "https://www.jetbrains.com/teamcity/schemas/2020.1/project-config.xsd";
    "@uuid": string;
    name: string;
    description?: string;
    parameters?: {
      param: Parameter[];
    };
    "project-extensions"?: {
      extension: ProjectExtension[];
    };
  };
}

export interface ProjectExtension {
  "@id": string;
  "@type": string;
  parameters: {
    param: Parameter[];
  };
}
