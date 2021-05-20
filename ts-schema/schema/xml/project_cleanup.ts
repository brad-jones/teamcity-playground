import { Parameter } from "./parameter.ts";

export interface ProjectCleanup {
  policy?: ProjectCleanupPolicy[];
  options?: {
    option: Parameter[];
  };
}

export interface ProjectCleanupPolicy {
  "@type": string;
  "@cleanup-level": string;
  parameters: {
    param: Parameter[];
  };
}
