import { Parameter } from "./parameter.ts";
import { ProjectCleanup } from "./project_cleanup.ts";

/**
 * A build configuration is a collection of settings used to start a build and
 * group the sequence of the builds in the UI. Examples of build configurations
 * are distribution, integration tests, prepare release distribution,
 * "nightly" build.
 * 
 * A build configuration belongs to a project and contains builds.
 * 
 * It is recommended to have a separate build configuration for each sequence
 * of builds (that is performing a specified task in a dedicated environment).
 * This allows for proper features functioning, like detection of new problems/
 * failed tests, first failed in/fixed in tests status, automatically removed
 * investigations, and so on.
 * 
 * see: https://www.jetbrains.com/help/teamcity/build-configuration.html
 */
export interface BuildType {
  /**
   * This refers to the filename of the generated XML file stored in the
   * .teamcity folder of your repo & ultimately the server's Data Directory.
   * see: https://www.jetbrains.com/help/teamcity/teamcity-data-directory.html
   *
   * For example an id of `Foo_Bar_Baz` results in the file
   * `./.teamcity/MyProject/buildTypes/Foo_Bar_Baz.xml` being generated.
   *
   * This id is also used as a reference in many places
   * throughout the rest of this schema & for URLs, etc...
   *
   * see: https://www.jetbrains.com/help/teamcity/identifier.html
   */
  id: string;

  /**
   * This value is used as an attribute on the root XML object. It only appears
   * to be used internally by TeamCity. Hence this is optional and will be
   * generated for you if you do not explicitly define a value.
   *
   * see: https://www.jetbrains.com/help/teamcity/identifier.html#Universally+Unique+IDs
   *
   * > NOTE: Despite what the docs say, TeamCity does not appear to automatically
   * > populate the UUID field for you but also doesn't seem to mind that it
   * > doesn't exist, go figure...
   */
  uuid?: string;

  /**
   * A human friendly name for the build type.
   */
  name: string;

  /**
   * An optional human friendly description of the built type.
   */
  description?: string;

  options?: {
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
  };

  /**
   * Build Types can define configuration parameters which are inherited by all BuildRunners.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-build-parameters.html
   */
  parameters?: Parameter[];

  /**
   * Attach VcsRoot(s) defined at the Project level to a BuildType.
   * 
   * This will ensure the repositories are checked out before your
   * first build step runs.
   * 
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-settings.html#Attach+VCS+Root
   */
  vcsSettings?: VcsSettings[];

  /**
   * Base Clean Up configuration.
   *
   * > HINT: This can be combined with `BuildExtensionKeepRules` to cater
   * >       for more complex needs.
   *
   * see: https://www.jetbrains.com/help/teamcity/clean-up.html#Base+Rule
   */
  cleanUp?: BuildCleanup;

  buildRunners?: BuildRunner[];
}

export interface VcsSettings {
  /**
   * The ID of the VcsRoot to attach.
   */
  VcsRootId: string;

  /**
   * A list of rules in the form of `+|-:VCSPath[=>AgentPath]`
   * 
   * e.g. use `-:.` to exclude all, or `-:repository/path` to exclude only
   * the path from checkout or `+:repository/path => another/path` to map
   * to different path.
   * 
   * > HINT: Checkout rules can only be set to directories,
   * >       files are not supported.
   * 
   * see: https://www.jetbrains.com/help/teamcity/vcs-checkout-rules.html
   */
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

export type BuildCleanup = ProjectCleanup;