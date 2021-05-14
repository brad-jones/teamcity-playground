interface Project {
  /**
   * This refers to the parent folder of the generated XML file stored in the
   * .teamcity folder of your repo & ultimately the server's Data Directory.
   * see: https://www.jetbrains.com/help/teamcity/teamcity-data-directory.html
   * 
   * For example an id of `Foo_Bar_Baz` results in the file
   * `./.teamcity/Foo_Bar_Baz/project-config.xml` being generated.
   * 
   * This id is also used as a reference in many places
   * throughout the rest of this schema.
   */
  id: string;

  /**
   * This value is used as an attribute on the root XML object. It only appears
   * to be used internally by TeamCity. Hence this is optional and will be
   * generated for you if you do not explicitly define a value.
   * 
   * see: https://www.jetbrains.com/help/teamcity/2020.2/identifier.html#Universally+Unique+IDs
   */
  uuid?: string;

  /**
   * A human friendly name for the project.
   */
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

interface Condition { }
