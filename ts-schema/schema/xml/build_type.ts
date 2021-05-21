import { Parameter, Parameters } from "./parameter.ts";
import { ProjectCleanup, ProjectCleanupPolicy } from "./project_cleanup.ts";
import { ProjectExtension, ProjectExtensions } from "./project_extension.ts";

export interface BuildType {
  "?xml": { "@version": string; "@encoding": string };
  "build-type": {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
    "@xsi:noNamespaceSchemaLocation":
      "https://www.jetbrains.com/teamcity/schemas/2020.1/project-config.xsd";
    "@uuid": string;
    name: string;
    description?: string;
    settings: {
      options?: BuildOptions;
      parameters?: Parameters;
      "vcs-settings"?: VcsSettings;
      requirements?: BuildRequirements;
      "build-triggers"?: BuildTriggers;
      "build-runners"?: BuildRunners;
      "build-extensions"?: BuildExtensions;
      cleanup?: BuildCleanup;
    };
  };
}

export interface BuildOptions {
  option: Parameter[];
}

export interface VcsSettings {
  "vcs-entry-ref": {
    "@root-id": string;
    "checkout-rule": {
      "@rule": string;
    }[];
  }[];
}

export interface BuildRequirements {
  [k: string]: BuildRequirement[];
}

export interface BuildRequirement {
  "@id": string;
  "@name": string;
  "@value"?: string;
}

export interface BuildTriggers {
  "build-trigger": BuildTrigger[];
}

export interface BuildTrigger {
  "@id": string;
  "@type": string;
  parameters: {
    param: Parameter[];
  };
}

export interface BuildRunners {
  "runner": BuildRunner[];
}

export interface BuildRunner {
  "@id": string;
  "@name": string;
  "@type": string;
  conditions?: BuildConditions;
  parameters?: Parameters;
}

export interface BuildConditions {
  [k: string]: BuildCondition[];
}

export interface BuildCondition {
  "@name": string;
  "@value"?: string;
}

export type BuildExtensions = ProjectExtensions;
export type BuildExtension = ProjectExtension;

export type BuildCleanup = ProjectCleanup;
export type BuildCleanupPolicy = ProjectCleanupPolicy;
