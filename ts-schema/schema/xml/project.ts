import { Parameters } from "./parameter.ts";
import { ProjectCleanup } from "./project_cleanup.ts";
import { ProjectExtensions } from "./project_extension.ts";

export interface Project {
  "?xml": { "@version": string; "@encoding": string };
  project: {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
    "@xsi:noNamespaceSchemaLocation":
      "https://www.jetbrains.com/teamcity/schemas/2020.1/project-config.xsd";
    "@uuid": string;
    name: string;
    description?: string;
    parameters?: Parameters;
    "project-extensions"?: ProjectExtensions;
    cleanup?: ProjectCleanup;
  };
}
