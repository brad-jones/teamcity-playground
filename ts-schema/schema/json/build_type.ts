import { Parameter } from "./parameter.ts";

export interface BuildType {
  id: string;
  uuid?: string;
  name: string;
  description?: string;
  allowExternalStatus: boolean;
  allowPersonalBuildTriggering: boolean;
  artifactRules: string[];
  branchFilter: string[];
  buildConfigurationType?: "DEPLOYMENT" | "COMPOSITE"; // the absense of this means it's a "REGULAR" type
  buildNumberPattern?: string; // defaults to "%build.counter%"
  checkoutDirectory: string;
  checkoutMode: "ON_SERVER" | "ON_AGENT" | "MANUAL";
  cleanBuild: boolean;
  enableHangingBuildsDetection: boolean;
  excludeDefaultBranchChanges: boolean;
  executionTimeoutMin: number;
  maximumNumberOfBuilds: number;
  publishArtifactCondition: "SUCCESSFUL" | "ALWAYS";
  shouldFailBuildIfTestsFailed: boolean;
  shouldFailBuildOnAnyErrorMessage: boolean;
  shouldFailBuildOnBadExitCode: boolean;
  shouldFailBuildOnOOMEOrCrash: boolean;
  showDependenciesChanges: boolean;
  supportTestRetry: boolean;
  parameters?: Parameter[];
  buildRunners?: BuildRunner[];
  vcsSettings?: VcsSettings[];
}

export interface VcsSettings {
  VcsRootId: string;
  CheckOutRules: string[];
}

export interface BuildRunner {
  id: string;
  name: string;
  type: "simpleRunner"; // TODO: We got lazy, need to go back and get the rest of these values
  conditions?: Condition[];
  parameters?: Record<string, string>; // TODO extend this type and create specfic types for each type of build runner
}

export interface Condition {}
