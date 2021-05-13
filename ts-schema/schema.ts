interface Project {
  id: string; // This is essentially the XML filename
  uuid: string; // This is an attribute on the root XML object
  name: string;
  description?: string;
  parameters?: Parameter[];
  extensions?: Extension[];
  vcsRoots?: VcsRoot[]; // Seperate XML file not actually part of the Project object
  buildTypes?: BuildType[]; // Seperate XML file not actually part of the Project object
}

interface Parameter {
  name: string;
  value: string;
  spec?: string; // TODO: create a spec type - TeamCity just has it as a string but we can do better.
}

interface Extension {
  id: string;
  type:
    | "OAuthProvider"
    | "IssueTracker"
    | "versionedSettings"
    | "JetBrains.SharedResources"
    | "ReportTab"
    | "PackageRepository"; // Even though there is a <cleanup> tag in XML, I think cleanup rules are another extension type need to double check in the history.
  parameters?: Record<string, string>; // TODO extend this type and create specfic types for each extension
}

interface VcsRoot {
  id: string;
  uuid: string;
  name: string;
  type: "jetbrains.git"; // TODO: create the other types of repos
  modificationCheckInterval: number;
  agentCleanFilesPolicy: "ALL_UNTRACKED" | "IGNORED_ONLY" | "NON_IGNORED_ONLY";
  agentCleanPolicy: "ALWAYS" | "NEVER" | "ON_BRANCH_CHANGE";
  agentGitPath: string;
  authMethod: "PASSWORD";
  branch: string;
  ignoreKnownHosts: boolean;
  reportTagRevisions: boolean;
  securePassword: string;
  serverSideAutoCrlf: boolean;
  submoduleCheckout: "IGNORE" | "CHECKOUT";
  teamcityBranchSpec: string[];
  url: string;
  userForTags: string;
  username: string;
  usernameStyle: "FULL" | "NAME" | "USERID" | "EMAIL";
}

interface BuildType {
  id: string;
  uuid: string;
  name: string;
  description?: string;
  allowExternalStatus: boolean;
  allowPersonalBuildTriggering: boolean;
  artifactRules: string[];
  branchFilter: string[];
  buildConfigurationType?: "DEPLOYMENT" | "COMPOSITE";
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

interface VcsSettings {
  VcsRootId: string;
  CheckOutRules: string[];
}

interface BuildRunner {
  id: string;
  name: string;
  type: "simpleRunner"; // TODO: We got lazy, need to go back and get the rest of these values
  conditions?: Condition[];
  parameters?: Record<string, string>; // TODO extend this type and create specfic types for each type of build runner
}

interface Condition {}
