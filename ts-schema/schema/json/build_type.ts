import { AllXOR } from "../xor.ts";
import { Parameter } from "./parameter.ts";
import { ProjectCleanup } from "./project_cleanup.ts";
import { ProjectExtensionKeepRules } from "./project_extension.ts";

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

  /**
   * An optional set of options that configure how a Build Configuration works.
   */
  options?: BuildOptions;

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
   * Agent requirements are used in TeamCity to specify whether a build
   * configuration can run on a particular build agent besides agent pools
   * and specified build configuration restrictions.
   *
   * When a build agent registers on the TeamCity server, it provides information
   * about its configuration, including its environment variables, system properties,
   * and additional settings specified in the buildAgent.properties file.
   *
   * The administrator can specify required environment variables and system
   * properties for a build configuration on the Build Configuration Settings |
   * Agent Requirements page.
   *
   * For instance, if a particular build configuration must run on a build agent
   * running Windows, the administrator specifies this by adding a requirement
   * that the `teamcity.agent.jvm.os.name` system property on the build agent
   * must contain the `Windows` string.

   * see: https://www.jetbrains.com/help/teamcity/agent-requirements.html
   */
  requirements?: BuildRequirement[];

  /**
   * Once a build configuration is created, builds can be triggered manually by
   * clicking the Run button or initiated automatically with the help of triggers.
   *
   * A build trigger is a rule which initiates a new build on certain events.
   * The build is put into the build queue and is started when there are agents
   * available to run it.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-build-triggers.html
   */
  triggers?: BuildTrigger[];

  /**
   * When creating a build configuration, it is important to configure the
   * sequence of build steps to be executed.
   *
   * Each build step is represented by a build runner and provides integration
   * with a specific build or test tool. For example, call a NAnt script before
   * compiling VS solutions.
   *
   * You can add as many build steps to your build configuration as needed.
   *
   * Build steps are invoked sequentially.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-build-steps.html
   */
  runners?: BuildRunner[];

  /**
   * Each build can be extended with many plugins and settings.
   *
   * All or most of the things that you see in the left hand side bar of a
   * build configuration page in the user interface of TeamCity, things like
   * Build Features, Failure Conditions, etc... are all defined as extension
   * nodes in the XML.
   *
   * In this schema the `Extension` type is a base type and there many other
   * types that better represent all those other things that extend the
   * `BuildExtension` type which you can use here.
   */
  extensions?: BuildExtension[];

  /**
   * Base Clean Up configuration.
   *
   * > HINT: This can be combined with `BuildExtensionKeepRules` to cater
   * >       for more complex needs.
   *
   * see: https://www.jetbrains.com/help/teamcity/clean-up.html#Base+Rule
   */
  cleanUp?: BuildCleanup;
}

export interface BuildOptions {
  // START: General Settings

  /**
   * Builds of a regular build configuration can have build steps
   * and are executed on agents.
   *
   * Builds of a composite build configuration do not run on an agent.
   * The main purpose of composite build is to aggregate results from
   * snapshot dependencies in a single place.
   *
   * Deployment build configuration publishes / deploys artifacts of
   * other builds to some environment.
   *
   * Defaults to `REGULAR`.
   *
   * see: https://www.jetbrains.com/help/teamcity/deployment-build-configuration.html
   * also: https://www.jetbrains.com/help/teamcity/composite-build-configuration.html
   */
  buildConfigurationType?: "REGULAR" | "DEPLOYMENT" | "COMPOSITE";

  /**
   * A pattern which is resolved and assigned to the build number on the build start.
   *
   * The format may include `%build.counter%` as a placeholder for the build
   * counter value, for example, `1.%build.counter%`. It may also contain a
   * reference to any other available parameter, eg: `%build.vcs.number.VCSRootName%`.
   *
   * > HINT: The maximum length of a build number after all substitutions
   * >       is 256 characters.
   *
   * Defaults to `%build.counter%`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-general-settings.html#ConfiguringGeneralSettings-BuildNumberFormat
   */
  buildNumberFormat?: string;

  /**
   * Select when to publish artifacts:
   *
   * - EVEN_FAILURES: publish artifacts at the last step of a build if all
   *   previous steps have been completed, successfully or not.
   *
   * - SUCCESSFUL: publish artifacts at the last step of a build if all
   *   previous steps have been completed successfully. TeamCity checks
   *   the current build status on the server before publishing artifacts.
   *
   * - ALWAYS: publish artifacts for all builds, even for interrupted ones
   *   (for example, after the stop command was issued or after the time-out,
   *   specified in the build failure conditions).
   *
   * This setting does not affect artifacts publishing configured in a build script.
   *
   * > HINT: If the stop command is issued during the artifacts publishing,
   * >       the publishing operation will be stopped regardless of the
   * >       selected option.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-general-settings.html#ConfiguringGeneralSettings-PublishArtifacts
   */
  publishArtifacts?: "EVEN_FAILURES" | "SUCCESSFUL" | "ALWAYS";

  /**
   * Patterns to define artifacts of a build. After the first build is run,
   * you can browse the agent checkout directory to configure artifacts paths.
   *
   * Paths are in the form of `[+:]source [ => target]` to include and
   * `-:source [ => target]` to exclude files or directories to publish
   * as build artifacts.
   *
   * Ant-style wildcards are supported, e.g. use `**\/* => target_directory`,
   * `-: ** /folder1 => target_directory` to publish all files except for
   * folder1 into the target_directory.
   *
   * > HINT: `\/` should actually just be `/` in the above example
   * >       but that means this doc block comment breaks.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-general-settings.html#ConfiguringGeneralSettings-ArtifactPaths
   */
  artifactPaths?: string[];

  /**
   * Select the Enable hanging build detection option to detect probably "hanging" builds.
   *
   * A build is considered to be "hanging" if its run time significantly exceeds
   * the estimated average run time and if the build has not sent any messages
   * since the estimation was exceeded.
   *
   * To properly detect hanging builds, TeamCity has to estimate the average
   * time builds run based on several builds. Thus, if you have a new build
   * configuration, it may make sense to enable this feature after a couple
   * of builds have run, so that TeamCity would have enough information to
   * estimate the average run time.
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-general-settings.html#Hanging+Build+Detection
   */
  enableHangingBuildsDetection?: boolean;

  /**
   * To allow personal builds or not.
   *
   * A personal build is a build-out of the common build sequence which
   * typically uses the changes not yet committed into the version control.
   *
   * Personal builds are usually initiated from one of the supported IDEs via
   * the Remote Run procedure. You can also upload a patch with changes directly
   * to the server...
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-general-settings.html#Allow+Triggering+Personal+Builds
   * also: https://www.jetbrains.com/help/teamcity/personal-build.html
   */
  allowTriggeringPersonalBuilds?: boolean;

  /**
   * This option enables retrieving the status and basic details of the last
   * build in the build configuration without requiring any user authentication.
   *
   * Note that this also allows getting the status of any specific build in
   * the build configuration (however, builds cannot be listed and no other
   * information except the build status (success/failure/internal error/
   * cancelled) is available).
   *
   * The status can be retrieved via the HTML status widget described below,
   * or via a single icon: with the help of REST API or via the Actions menu
   * in Build Configuration Home.
   *
   * Defaults to `true`;

    * see: https://www.jetbrains.com/help/teamcity/configuring-general-settings.html#ConfiguringGeneralSettings-EnableStatusWidget
    */
  enableStatusWidget?: boolean;

  /**
   * Limit Number of Simultaneously Running Builds
   *
   * Specify the number of builds of the same configuration that can run
   * simultaneously on all agents. This option helps avoid the situation,
   * when all the agents are busy with the builds of a single project.
   *
   * > HINT: Enter 0 to allow an unlimited number of builds to run simultaneously.
   *
   * Defaults to `0`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-general-settings.html#Limit+Number+of+Simultaneously+Running+Builds
   */
  maximumNumberOfBuilds?: number;

  // END: General Settings
  // START: Version Control Settings

  /**
   * The VCS Checkout mode is a setting that affects how project sources reach
   * an agent. This mode affects only sources checkout. The current revision
   * and changes data retrieving logic is executed by the TeamCity server,
   * and thus TeamCity server needs to access the VCS server in any mode.
   *
   * - **MANUAL**: TeamCity will not check out any sources automatically,
   *   the default build checkout directory will still be created so that
   *   you could use it to check out the sources via a build script.
   *
   *   Note that TeamCity will accurately report changes only if the checkout
   *   is performed on the revision specified by the `build.vcs.number.*`
   *   properties passed into the build.
   *
   *   The build checkout directory will not be cleaned automatically,
   *   unless the directory expiration period is configured.
   *
   * - **ON_SERVER**: The TeamCity server will export the sources and pass
   *   them to an agent before each build.
   *
   *   Since the sources are exported rather than checked out, no administrative
   *   data is stored in the agent's file system and version control operations
   *   (like check-in, label or update) cannot be performed from the agent.
   *
   *   TeamCity optimizes communications with the VCS servers by caching the
   *   sources and retrieving from the VCS server only the necessary changes.
   *
   *   Unless clean checkout is performed, the server sends to the agent
   *   incremental patches to update only the files changed since the last
   *   build on the agent in the given checkout directory.
   *
   * - **ON_AGENT**: The build agent will check out the sources before the build.
   *
   *   Agent-side checkout frees more server resources and provides the ability
   *   to access version-control-specific directories (.svn, CVS, .git ); that is,
   *   the build script can perform VCS operations (for example, check-ins into
   *   the version control) — in this case ensure the build script uses
   *   credentials necessary for the check-in.
   *
   *   VCS client software has to be installed on the agent
   *   (applicable to Perforce, Mercurial, Git).
   *
   * - **PREFER_ON_AGENT**: With this setting enabled, TeamCity will use the
   *   agent-side checkout (see `ON_AGENT`) if possible.
   *
   *   If the agent-side checkout is not possible, TeamCity will display a
   *   corresponding health report item and will use the server-side checkout
   *   (see the `ON_SERVER`).
   *
   *   TeamCity falls back to the server-side checkout in the following cases:
   *   - No Git or Mercurial client is found on the agent
   *   - The Git or Mercurial client is present on the agent, but is of the wrong version
   *   - The agent has no access to the repository
   *   - If a Perforce client cannot be found on the agent using the same rules
   *     as while performing actual checkout or if stream depot is used and the
   *     checkout rules are complex (other than `. => A`)
   *
   * Defaults to `ON_AGENT`.
   *
   * see: https://www.jetbrains.com/help/teamcity/vcs-checkout-mode.html
   */
  checkoutMode?: "MANUAL" | "ON_SERVER" | "ON_AGENT" | "PREFER_ON_AGENT";

  /**
   * The build checkout directory is a directory on the TeamCity agent machine
   * where all the sources of all builds are checked out into.
   *
   * > HINT: It is strongly advised to leave this value undefined and
   * >       let TeamCity automatically generate this for you.
   *
   * see: https://www.jetbrains.com/help/teamcity/build-checkout-directory.html
   */
  checkoutDirectory?: string;

  /**
   * Delete all files in the checkout directory before the build.
   *
   * Defaults to `true`.
   */
  cleanBuild?: boolean;

  /**
   * Show changes from snapshot dependencies.
   *
   * For a build configuration with snapshot dependencies, you can enable
   * showing of changes from these dependencies transitively.
   *
   * Enabling this setting affects pending changes of a build configuration,
   * builds changes in builds history, the change log and issue log.
   * Changes from dependencies are marked with deps_changes_marker.gif.
   *
   * With this setting enabled, the Schedule Trigger with a "Trigger build
   * only if there are pending changes" option will consider changes from
   * dependencies too.
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/build-dependencies-setup.html#BuildDependenciesSetup-ShowChangesfromDeps
   */
  showDependenciesChanges?: boolean;

  /**
   * Exclude default branch changes from other branches.
   *
   * By default, when displaying pending changes in a feature branch or
   * changes of a build on a branch, TeamCity includes changes in the
   * default branch (till a build in the default branch) as well.
   *
   * This allows tracking the cases when a commit that broke a build was
   * fixed in the default branch, but not in a feature branch.
   *
   * However, for large projects with multiple teams simultaneously working
   * on lots of different branches this means that all the project committers
   * (regardless of the branch they are committing to) will be notified when,
   * for example, a commit in the default branch broke the build or if a force
   * push was performed.
   *
   * If you want to see the changes in a feature branch only, check the box
   * to exclude changes in the default branch from being displayed in other
   * branches.
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-settings.html#ConfiguringVCSSettings-excludeDefaultBranch
   */
  excludeDefaultBranchChanges?: boolean;

  /**
   * Limit branches available in this build configuration.
   *
   * see: https://www.jetbrains.com/help/teamcity/branch-filter.html
   */
  branchFilter?: string[];

  // END: Version Control Settings
  // START: Failure Conditions

  /**
   * Fail build if it runs longer than the specified limit in minutes.
   *
   * > HINT: 0 means unlimited
   *
   * Defaults to `0`.
   *
   * see: https://www.jetbrains.com/help/teamcity/build-failure-conditions.html
   */
  executionTimeoutMin?: number;

  /**
   * One of build steps exited with an error.
   * e.g non-zero exit code in command line runner.
   *
   * Defaults to `true`.
   *
   * see: https://www.jetbrains.com/help/teamcity/build-failure-conditions.html
   */
  shouldFailBuildOnBadExitCode?: boolean;

  /**
   * At least one test failed.
   *
   * Defaults to `true`.
   *
   * see: https://www.jetbrains.com/help/teamcity/build-failure-conditions.html
   */
  shouldFailBuildIfTestsFailed?: boolean;

  /**
   * Support test retry: successful test run mutes previous test failure.
   *
   * Default to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/build-failure-conditions.html#test-retry
   */
  supportTestRetry?: boolean;

  /**
   * An error message is logged by build runner.
   *
   * > HINT: Some processes use stderr to output things like progress
   * >       information and other information which may not necessarily
   * >       mean the process failed.
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/build-failure-conditions.html
   */
  shouldFailBuildOnAnyErrorMessage?: boolean;

  /**
   * An out-of-memory or crash is detected (Java only).
   *
   * see: https://www.jetbrains.com/help/teamcity/build-failure-conditions.html
   */
  shouldFailBuildOnJavaCrash: boolean;
  // END: Failure Conditions
}

export interface VcsSettings {
  /**
   * The ID of the VcsRoot to attach.
   */
  vcsRootId: string;

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
  checkOutRules?: string[];
}

export type BuildRequirement =
  | BuildRequirementWithValue
  | BuildRequirementWithoutValue;

export interface BuildRequirementBase {
  /**
   * This ID is not exposed in UI and is just an incrementing number.
   *
   * eg: `RQ_1`, `RQ_2`, `RQ_3`, etc...
   *
   * So if not set it will be set for you.
   */
  id?: string;

  /**
   * The name of some parameter to match against.
   *
   * eg: `teamcity.agent.jvm.os.name`
   *
   * > HINT: The left hand side of the expression.
   */
  name: string;
}

export interface BuildRequirementWithValue extends BuildRequirementBase {
  /**
   * A logical condition to apply to the parameter.
   */
  condition:
    | "equals"
    | "does-not-equal"
    | "more-than"
    | "no-more-than"
    | "less-than"
    | "no-less-than"
    | "starts-with"
    | "contains"
    | "does-not-contain"
    | "ends-with"
    | "matches"
    | "does-not-match"
    | "ver-more-than"
    | "ver-no-more-than"
    | "ver-less-than"
    | "ver-no-less-than";

  /**
   * The expected value for this build requirement to evaluate to true.
   *
   * > HINT: The right hand side of the expression.
   */
  value?: string;
}

export interface BuildRequirementWithoutValue extends BuildRequirementBase {
  /**
   * A logical condition to apply to the parameter.
   */
  condition:
    | "exists"
    | "not-exists";
}

export type BuildTrigger =
  | BuildTriggerVcs
  | BuildTriggerCron
  | BuildTriggerDependency
  | BuildTriggerRemoteBranch
  | BuildTriggerRetry
  | BuildTriggerNuget
  | BuildTriggerMavenArtifact
  | BuildTriggerMavenSnapshot;

export interface BuildTriggerBase {
  /**
   * This ID is not exposed in UI and is just an incrementing number.
   *
   * eg: `TRIGGER_1`, `TRIGGER_2`, `TRIGGER_3`, etc...
   *
   * So if not set it will be set for you.
   */
  id?: string;
}

export interface BuildTriggerVcs extends BuildTriggerBase {
  /**
   * VCS triggers automatically start a new build each time TeamCity detects
   * new changes in the configured VCS roots and displays the change in the
   * pending changes.
   *
   * Multiple VCS triggers can be added to a build configuration.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html
   */
  type: "vcsTrigger";

  /**
   * If you have a build chain (that is a number of builds interconnected by
   * snapshot dependencies), the triggers are to be configured in the final
   * build in the chain.
   *
   * The VCS build trigger has another option that alters triggering behavior
   * for a build chain. With this options enabled, the whole build chain will
   * be triggered even if changes are detected in dependencies, not in the
   * final build.
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html#ConfiguringVCSTriggers-Triggerabuildonchangesinsnapshotdependencies
   */
  watchChangesInDependencies?: boolean;

  /**
   * Trigger a build on each check-in.
   *
   * When this option is not enabled, several check-ins by different committers
   * can be made; and once they are detected, TeamCity will add only one build
   * to the queue with all of these changes.
   *
   * If you have fast builds and enough build agents, you can make TeamCity
   * launch a new build for each check-in ensuring that no other changes get
   * into the same build.
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html#Per-check-in+Triggering
   */
  perCheckinTriggering?: boolean | {
    /**
     * Include several check-ins in a build if they are from the same committer.
     *
     * If enabled, TeamCity will detect a number of pending changes,
     * it will group them by user and start builds having single user
     * changes only.
     *
     * This helps to figure out whose change broke a build or caused a new test
     * failure, should such issue arise.
     *
     * Defaults to `false`.
     *
     * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html#Per-check-in+Triggering
     */
    groupCheckinsByCommitter: boolean;
  };

  /**
   * By specifying the quiet period you can ensure the build is not triggered
   * in the middle of non-atomic check-ins consisting of several VCS check-ins.
   *
   * A quiet period is a period (in seconds) that TeamCity maintains between
   * the moment the last VCS change is detected and a build is added into the
   * queue.
   *
   * If new VCS change is detected in the Build Configuration within the period,
   * the period starts over from the new change detection time. The build is
   * added into the queue only if there were no new VCS changes detected within
   * the quiet period.
   *
   * Note that the actual quiet period will not be less than the maximum checking
   * for changes interval among the VCS roots of a build configuration, as TeamCity
   * must ensure that changes were collected at least once during the quiet period.
   *
   * The quiet period can be set to the default value (60 seconds, can be changed
   * globally at the Administration | Global Settings page) or to a custom value
   * for a build configuration.
   *
   * > HINT: When a build is triggered by a trigger with the VCS quiet period set,
   * > the build is put into the queue with fixed VCS revisions. This ensures the
   * > build will be started with only the specific changes included. Under certain
   * > circumstances this build can later become a History Build.

   * Defaults to `DO_NOT_USE`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html#ConfiguringVCSTriggers-quietPeriod
   */
  quietPeriod?: "DO_NOT_USE" | "USE_DEFAULT" | number;

  /**
   * Queued build can be replaced with a more recent build.
   *
   * Defaults to `true`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html#Build+Queue+Optimization+Settings
   */
  enableQueueOptimization?: boolean;

  /**
   * If no trigger rules are specified, a build is triggered upon any change
   * detected for the build configuration. You can control what changes are
   * detected by changing the VCS root settings and specifying Checkout Rules.
   *
   * To limit the changes that trigger the build, use the VCS trigger rules.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html#ConfiguringVCSTriggers-buildTriggerRules
   */
  triggerRules?: string[];

  /**
   * Limit the set of branches in which builds can be triggered by this VCS trigger.
   *
   * Trigger rules and branch filter are combined by **AND**, which means that
   * the build is triggered only when both conditions are satisfied.
   *
   * For example, if you specify a comment text in the trigger rules field and
   * provide the branch specification, the build will be triggered only if a
   * commit has the special text and is also in a branch matched by branch filter.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html#branch-filter-1
   */
  branchFilter?: string[];
}

export interface BuildTriggerCron extends BuildTriggerBase {
  /**
   * The schedule trigger allows you to set the time when a build of the
   * configuration will be run. Multiple schedule triggers can be added to
   * a build configuration.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-schedule-triggers.html
   */
  type: "schedulingTrigger";

  /**
   * You can specify advanced time settings using cron -like expressions.
   * This format provides more flexible scheduling options.
   *
   * TeamCity uses Quartz for working with cron expressions.
   * See these examples or consider using the CronMaker utility
   * to generate expressions based on the Quartz cron format.
   *
   * see: https://www.jetbrains.com/help/teamcity/cron-expressions-in-teamcity.html#Examples
   * also: https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/tutorial-lesson-06.html
   * also: http://www.cronmaker.com
   */
  cronExpression: {
    second: string;
    minute: string;
    hour: string;
    dayOfMonth: string;
    month: string;
    dayOfWeek: string;
    year?: string;
  };

  /**
   * A valid IANA time zone database "name".
   *
   * eg: `Australia/Melbourne`
   *
   * Defaults to `Etc/UTC`.
   *
   * see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
   */
  timezone?: string;

  /**
   * Trigger only if there are pending changes.
   *
   * Defaults to `false`.
   */
  triggerBuildWithPendingChangesOnly?: boolean;

  /**
   * If no trigger rules are specified, a build is triggered upon any change
   * detected for the build configuration. You can control what changes are
   * detected by changing the VCS root settings and specifying Checkout Rules.
   *
   * To limit the changes that trigger the build, use the VCS trigger rules.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-vcs-triggers.html#ConfiguringVCSTriggers-buildTriggerRules
   */
  triggerRules?: string[];

  /**
   * Trigger only if the watched build changes.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-schedule-triggers.html#ConfiguringScheduleTriggers-BuildChanges
   */
  watchBuild?: {
    /**
     * The ID of the BuildType to watch for changes.
     */
    buildTypeId: string;

    /**
     * Promote the watched build if there is a dependency (snapshot or artifact)
     * on its build configuration.
     *
     * Defaults to `true`.
     */
    promoteBuild?: boolean;

    /**
     * You can select which build to watch:
     * - Last finished build
     * - Last successful build
     * - Last pinned build
     * - Last finished build with a specified build tag.
     */
    for: "lastFinished" | "lastSuccessful" | "lastPinned" | "buildTag";

    /**
     * The tag to watch for.
     *
     * > HINT: If `for=buildTag` this must be set to a value.
     */
    tag?: string;
  };

  /**
   * Delete all files in the checkout directory before the build.
   *
   * Defaults to `false`.
   */
  enforceCleanCheckout?: boolean | {
    /**
     * Also apply to all snapshot dependencies?
     */
    forDependencies: boolean;
  };

  /**
   * Trigger build on all enabled and compatible agents.
   *
   * Defaults to `false`.
   */
  triggerBuildOnAllCompatibleAgents?: boolean;

  /**
   * Queued build can be replaced with an already started build
   * or a more recent queued build.
   *
   * Defaults to `true`.
   */
  enableQueueOptimization?: boolean;

  /**
   * By default, a schedule trigger works for all branches.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-schedule-triggers.html#Branch+Filter
   */
  branchFilter?: string[];
}

export interface BuildTriggerDependency extends BuildTriggerBase {
  /**
   * The finish build trigger starts a build of the current build configuration
   * when a build of the selected build configuration is finished.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-finish-build-trigger.html
   */
  type: "buildDependencyTrigger";

  /**
   * The ID of the BuildType that will fire this trigger when it finishes.
   */
  buildTypeId: string;

  /**
   * Trigger after successful build only.
   *
   * Defaults to `false`.
   */
  afterSuccessfulBuildOnly?: boolean;

  /**
   * In a build configuration with branches, you can use the branch filter to
   * limit the branches in which finished builds will trigger new builds of
   * the current configuration.
   *
   * Defaults to `+:<default>`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-finish-build-trigger.html#Triggering+Settings
   */
  branchFilter?: string[];
}

export interface BuildTriggerRemoteBranch extends BuildTriggerBase {
  /**
   * The branch remote run trigger automatically starts a new personal build
   * each time TeamCity detects changes in particular branches of the VCS roots
   * of the build configuration.
   *
   * Finished personal builds are listed in the build history, but only for the
   * users who initiated them.
   *
   * > HINT: At the moment, the branch remote run trigger supports only Git
   * >       and Mercurial VCSs.
   *
   * see: https://www.jetbrains.com/help/teamcity/branch-remote-run-trigger.html
   */
  type: "remoteRunOnBranch";

  /**
   * Pattern of Branches to Monitor.
   *
   * For git:
   * - Defaults to `refs/heads/remote-run/*`.
   *
   * For mercurial :
   * - Defaults to `remote-run/*`.
   */
  pattern?: string;
}

export interface BuildTriggerRetry extends BuildTriggerBase {
  /**
   * The retry build trigger automatically adds a new build to the queue if the
   * previous build of the current build configuration has failed.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-retry-build-trigger.html
   */
  type: "retryBuildTrigger";

  /**
   * Specify seconds to wait before adding a new build to the queue.
   */
  enqueueTimeout: number;

  /**
   * Specify how many times the trigger will try to rerun the failing build.
   *
   * > HINT: Leave undefined for unlimited number of retry attempts.
   */
  retryAttempts?: number;

  /**
   * With this option enabled, the retry trigger will rerun a failed build
   * using the same source revisions.
   *
   * This option helps identify build problems that do not depend on the build
   * code: for example, if there are flaky tests in the build configuration or
   * if there was some unforeseen agent compatibility issue.
   *
   * If the build with the trigger is a part of a build chain, all the successful
   * builds from the previous chain run will be reused and all the failed dependency
   * builds, that could have contributed to the failure of the dependent build,
   * will be rebuilt on the same revision.
   *
   * If any build parameters or comments are specified in the custom build settings,
   * they will be applied to the following build runs initiated by the retry trigger.
   *
   * Defaults to `true`.
   */
  useSameRevisions?: boolean;

  /**
   * With this option enabled, retried builds will always be put to the queue top.
   *
   * Defaults to `false`.
   */
  moveToTheQueueTop?: boolean;

  /**
   * Apply a branch filter to rerun failed builds only in branches that match
   * the specified criteria.
   *
   * Defaults to `+:*`.
   */
  branchFilter?: string[];
}

export interface BuildTriggerNuget extends BuildTriggerBase {
  /**
   * The NuGet dependency trigger allows starting a new build if a NuGet
   * packages update is detected in the NuGet repository.
   *
   * > HINT: Currently, the NuGet dependency trigger supports only API versions
   * >       1 and 2 due to specifics of the Nuget.CommandLine tool.
   *
   * see: https://www.jetbrains.com/help/teamcity/nuget-dependency-trigger.html
   */
  type: "nuget.simple";

  /**
   * The path to the nuget executable.
   *
   * > HINT: If left undefined then we assume it will be found on the `$PATH`.
   */
  nugetExe?: string;

  /**
   * Specify the NuGet packages feed URL to monitor packages changes.
   *
   * Defaults to `https://api.nuget.org/v3/index.json`.
   */
  source?: string;

  /**
   * Specify username to access NuGet feed, leave undefined if no authentication
   * is required.
   */
  username?: string;

  /**
   * Specify password to access NuGet feed, leave undefined if no authentication
   * is required.
   */
  password?: string;

  /**
   * Specify package Id to check for updates.
   */
  packageId: string;

  /**
   * Optionally, you can specify package version range to check for.
   * If not specified, TeamCity will check for latest version.
   *
   * > HINT: Supported only for TeamCity server is running under Windows with
   * >       Microsoft .NET Framework 4.0/4.5 installed.
   *
   * TODO: As per above note, I have not been able to model this into the XML
   *       layer as I have been running TeamCity with docker.
   *
   * see: https://docs.microsoft.com/en-us/nuget/concepts/package-versioning
   */
  //packageVersionSpec?: string;

  /**
   * Trigger build if pre-release package version is detected.
   *
   * Defaults to `false`.
   */
  triggerOnPreRelease?: boolean;
}

export interface BuildTriggerMavenArtifact extends BuildTriggerBase {
  /**
   * Maven artifact dependency trigger adds build to the queue when there is a
   * real modification of the dependency content which is detected by the
   * checksum change.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  type: "mavenArtifactDependencyTrigger";

  /**
   * Specify an identifier of a group the desired Maven artifact belongs to.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  groupId: string;

  /**
   * Specify the artifact's identifier.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  artifactId: string;

  /**
   * Specify a version or version range of the artifact.
   *
   * The version range syntax is described here:
   * https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Version+Ranges
   *
   * > HINT: SNAPSHOT versions can also be used.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  version: string;

  /**
   * Define explicitly the type of the specified artifact.
   *
   * Defaults to `jar`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  artifactType?: string;

  /**
   * (Optional) Specify the classifier of an artifact.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  classifier?: string;

  /**
   * Specify a URL to the Maven repository. Note that this parameter is optional.
   *
   * If the URL is not specified, then:
   *
   *  - For a Maven project, the repository URL is determined from the POM and
   *    the server-side Maven Settings.
   *
   *  - For a non-Maven project, the repository URL is determined from the
   *    server-side Maven Settings only.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  repoUrl?: string;

  /**
   * Allows using authorization from the effective Maven settings.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Advanced+Options
   */
  repoId?: string;

  /**
   * Allows selecting effective settings. The same as User Settings of the Maven runner.
   *
   * > HINT: If left undefined the standard Maven settings file location is used.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Advanced+Options
   */
  userSettingsPath?: string;

  /**
   * Select this option to trigger a build only after the build that produces
   * artifacts used here is finished.
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  skipIfRunning?: boolean;
}

export interface BuildTriggerMavenSnapshot extends BuildTriggerBase {
  /**
   * Maven snapshot dependency trigger adds a new build to the queue when there
   * is a real modification of the snapshot dependency content in the remote
   * repository which is detected by the checksum change.
   *
   * Dependency artifacts are resolved according to the POM and the server-side
   * Maven Settings.
   *
   * Since Maven deploys artifacts to remote repositories sequentially during a
   * build, not all artifacts may be up-to-date at the moment the snapshot
   * dependency trigger detects the first updated artifact.
   *
   * To avoid inconsistency, select the Do not trigger a build if currently
   * running builds can produce snapshot dependencies check box when adding
   * this trigger, which will ensure the build won't start while builds producing
   * snapshot dependencies are still running.
   *
   * Simultaneous usage of snapshot dependency and dependency trigger for a build
   * Assume build A depends on build B by both snapshot and trigger dependency.
   * Then, after the build B finishes, build A will be added into the queue,
   * only if build B is not a part of the build chain containing A.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Snapshot+Dependency+Trigger
   */
  type: "mavenSnapshotDependencyTrigger";

  /**
   * Select this option to trigger a build only after the build that produces
   * artifacts used here is finished.
   *
   * Defaults to `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-maven-triggers.html#Maven+Artifact+Dependency+Trigger
   */
  skipIfRunning?: boolean;
}

export type BuildRunner =
  | BuildRunnerCargo
  | BuildRunnerCommandLine
  | BuildRunnerDockerCommand
  | BuildRunnerDockerCompose
  | BuildRunnerDotnet
  | BuildRunnerDotnetDupfinder
  | BuildRunnerDotnetInspector
  | BuildRunnerDuplicator
  | BuildRunnerFtp
  | BuildRunnerFxCop
  | BuildRunnerGradle
  | BuildRunnerInspection
  | BuildRunnerJPS
  | BuildRunnerMaven2
  | BuildRunnerMspec
  | BuildRunnerNAnt
  | BuildRunnerNugetInstaller
  | BuildRunnerNugetPack
  | BuildRunnerNugetPublish
  | BuildRunnerNUnit
  | BuildRunnerPowershell
  | BuildRunnerPython
  | BuildRunnerRake
  | BuildRunnerSBT
  | BuildRunnerSmb
  | BuildRunnerSsh
  | BuildRunnerSshUpload
  | BuildRunnerXcode;

export interface BuildRunnerBase {
  /**
   * This ID is not exposed in UI and is just an incrementing number.
   *
   * eg: `RUNNER_1`, `RUNNER_2`, `RUNNER_3`, etc...
   *
   * So if not set it will be set for you.
   */
  id?: string;

  /**
   * A human friendly name for the runner.
   */
  name: string;

  /**
   * Determine if a build step should run based on the results of previous steps.
   *
   * - **default:** If all previous steps finished successfully: the build
   *   analyzes only the build step status on the build agent, and doesn't
   *   send a request to the server to check the build status and considers
   *   only important step failures.
   *
   * - **execute_if_success:** Only if build status is successful: before
   *   starting the step, the build agent requests the build status from the
   *   server, and skips the step if the status is failed. This considers the
   *   failure conditions processed by the server, like failure on test failures
   *   or on metric change.
   *
   *   Note that this still can be not exact as some failure conditions are
   *   processed on the server asynchronously (TW-17015)
   *
   * - **execute_if_failed:** Even if some of the previous steps failed: select
   *   to make TeamCity execute this step regardless of the status of previous
   *   steps and status of the build.
   *
   * - **execute_always:** Always, even if build stop command was issued: select
   *   to ensure this step is always executed, even if the build was canceled by
   *   a user. For example, if you have two steps with this option configured,
   *   stopping the build during the first step execution will interrupt this
   *   step, while the second step will still run. Issuing the stop command for
   *   the second time will result in ignoring the execution policy: the build
   *   will be terminated.
   *
   * Defaults to `default`.
   *
   * see: https://www.jetbrains.com/help/teamcity/configuring-build-steps.html#Execution+policy
   */
  executionPolicy?:
    | "default"
    | "execute_if_success"
    | "execute_if_failed"
    | "execute_always";

  /**
   * When configuring a build step, you can choose a general execution policy
   * and, since TeamCity 2020.1, add a parameter-based execution condition.
   *
   * Execution conditions make builds more flexible and address many common use
   * cases, such as:
   *
   * - running the step only in the default branch
   * - running the step only in the release branch
   * - skipping the step in personal builds
   *
   * see: https://www.jetbrains.com/help/teamcity/build-step-execution-conditions.html
   */
  conditions?: BuildCondition[];
}

export type BuildRunnerCommandLine =
  & BuildRunnerBase
  & {
    /**
     * Using the Command Line build runner, you can run any script
     * supported by the OS.
     *
     * see: https://www.jetbrains.com/help/teamcity/command-line.html
     */
    type: "simpleRunner";

    /**
     * Specify the working directory where the command is to be run
     * (if it differs from the build checkout directory).
     */
    cwd?: string;

    /**
     * Specify how the error output is handled by the runner:
     *
     * - `true`: any output to stderr is handled as an error
     * - `false`: any output to stderr is handled as a warning
     *
     * Defaults to `false`.
     */
    fmtStdErrAsErrors?: boolean;

    /**
     * In this section, you can specify a Docker image which will be used
     * to run this build step.
     *
     * see: https://www.jetbrains.com/help/teamcity/docker-wrapper.html
     */
    runInContainer?: {
      /**
       * The image to run the command inside of.
       */
      image: string;

      /**
       * Docker now supports Linux & Windows contains natively.
       * What type of container is it?
       *
       * Defaults to `linux`.
       */
      platform?: "linux" | "windows";

      /**
       * If enabled, the image will be pulled from the repository via
       * `docker pull <imageName>` before the `docker run` command is launched.
       */
      pull?: boolean;

      /**
       * Allows specifying additional options for the docker run command.
       *
       * The default argument is `--rm`, but you can provide more, for instance,
       * add an additional volume mapping.
       *
       * > HINT: In this field, you cannot reference environment variables using
       * > the `%env.FOO_BAR%` syntax because TeamCity does not pass environment
       * > variables from a build agent into a Docker container. If you need to
       * > reference an environment variable on an agent, define the configuration
       * > parameter `system.FOO_BAR=env_var_value` in `buildAgent.properties`
       * > and reference it via `%system.FOO_BAR%`.
       */
      args?: string[];
    };
  }
  & AllXOR<[{
    /**
     * Specify the path to an executable to be started.
     */
    cmd: string;

    /**
     * A list of command line arguments to pass to the executable.
     */
    args?: string[];
  }, {
    /**
     * A platform-specific script which will be executed as an executable script
     * in Unix-like environments and as a *.cmd batch file on Windows.
     *
     * Under Unix-like OS the script is saved with the executable bit set and is
     * then executed by OS. This defaults to /bin/sh interpreter on the most
     * systems.
     *
     * If you need a specific interpreter to be used, specify shebang
     * (for example, #!/bin/bash) as the first line of the script.
     *
     * > HINT: TeamCity treats a string surrounded by percentage signs `%` in
     * > the script as a parameter reference. To prevent TeamCity from treating
     * > the text in the percentage signs as a property reference, use double
     * > percentage signs to escape them: for example, if you want to pass
     * > `%Y%m%d%H%M%S` into the build, change it to `%%Y%%m%%d%%H%%M%%S`.
     */
    script: string;
  }]>;

/** TODO: placeholder for dotnet build runner */
export interface BuildRunnerDotnet extends BuildRunnerBase {
  type: "dotnet";
}

/** TODO: placeholder for Ant build runner */
export interface BuildRunnerAnt extends BuildRunnerBase {
  type: "Ant";
}

/** TODO: placeholder for cargo-deploy-runner build runner */
export interface BuildRunnerCargo extends BuildRunnerBase {
  type: "cargo-deploy-runner";
}

/** TODO: placeholder for DockerCommand build runner */
export interface BuildRunnerDockerCommand extends BuildRunnerBase {
  type: "DockerCommand";
}

/** TODO: placeholder for DockerCompose build runner */
export interface BuildRunnerDockerCompose extends BuildRunnerBase {
  type: "DockerCompose";
}

/** TODO: placeholder for Duplicator build runner */
export interface BuildRunnerDuplicator extends BuildRunnerBase {
  type: "Duplicator";
}

/** TODO: placeholder for dotnet-tools-dupfinder build runner */
export interface BuildRunnerDotnetDupfinder extends BuildRunnerBase {
  type: "dotnet-tools-dupfinder";
}

/** TODO: placeholder for ftp-deploy-runner build runner */
export interface BuildRunnerFtp extends BuildRunnerBase {
  type: "ftp-deploy-runner";
}

/** TODO: placeholder for FxCop build runner */
export interface BuildRunnerFxCop extends BuildRunnerBase {
  type: "FxCop";
}

/** TODO: placeholder for gradle-runner build runner */
export interface BuildRunnerGradle extends BuildRunnerBase {
  type: "gradle-runner";
}

/** TODO: placeholder for Inspection build runner */
export interface BuildRunnerInspection extends BuildRunnerBase {
  type: "Inspection";
}

/** TODO: placeholder for dotnet-tools-inspectcode build runner */
export interface BuildRunnerDotnetInspector extends BuildRunnerBase {
  type: "dotnet-tools-inspectcode";
}

/** TODO: placeholder for JPS build runner */
export interface BuildRunnerJPS extends BuildRunnerBase {
  type: "JPS";
}

/** TODO: placeholder for Maven2 build runner */
export interface BuildRunnerMaven2 extends BuildRunnerBase {
  type: "Maven2";
}

/** TODO: placeholder for jetbrains.mspec build runner */
export interface BuildRunnerMspec extends BuildRunnerBase {
  type: "jetbrains.mspec";
}

/** TODO: placeholder for NAnt build runner */
export interface BuildRunnerNAnt extends BuildRunnerBase {
  type: "NAnt";
}

/** TODO: placeholder for jb.nuget.installer build runner */
export interface BuildRunnerNugetInstaller extends BuildRunnerBase {
  type: "jb.nuget.installer";
}

/** TODO: placeholder for jb.nuget.pack build runner */
export interface BuildRunnerNugetPack extends BuildRunnerBase {
  type: "jb.nuget.pack";
}

/** TODO: placeholder for jb.nuget.publish build runner */
export interface BuildRunnerNugetPublish extends BuildRunnerBase {
  type: "jb.nuget.publish";
}

/** TODO: placeholder for NUnit build runner */
export interface BuildRunnerNUnit extends BuildRunnerBase {
  type: "NUnit";
}

/** TODO: placeholder for jetbrains_powershell build runner */
export interface BuildRunnerPowershell extends BuildRunnerBase {
  type: "jetbrains_powershell";
}

/** TODO: placeholder for python-runner build runner */
export interface BuildRunnerPython extends BuildRunnerBase {
  type: "python-runner";
}

/** TODO: placeholder for rake-runner build runner */
export interface BuildRunnerRake extends BuildRunnerBase {
  type: "rake-runner";
}

/** TODO: placeholder for SBT build runner */
export interface BuildRunnerSBT extends BuildRunnerBase {
  type: "SBT";
}

/** TODO: placeholder for smb-deploy-runner build runner */
export interface BuildRunnerSmb extends BuildRunnerBase {
  type: "smb-deploy-runner";
}

/** TODO: placeholder for ssh-exec-runner build runner */
export interface BuildRunnerSsh extends BuildRunnerBase {
  type: "ssh-exec-runner";
}

/** TODO: placeholder for ssh-deploy-runner build runner */
export interface BuildRunnerSshUpload extends BuildRunnerBase {
  type: "ssh-deploy-runner";
}

/** TODO: placeholder for Xcode build runner */
export interface BuildRunnerXcode extends BuildRunnerBase {
  type: "Xcode";
}

export type BuildCondition =
  | BuildConditionWithValue
  | BuildConditionWithoutValue;

export interface BuildConditionBase {
  /**
   * The name of some parameter to match against.
   *
   * eg: `teamcity.agent.jvm.os.name`
   *
   * > HINT: The left hand side of the expression.
   */
  name: string;
}

export interface BuildConditionWithValue extends BuildConditionBase {
  /**
   * A logical condition to apply to the parameter.
   */
  condition:
    | "equals"
    | "does-not-equal"
    | "more-than"
    | "no-more-than"
    | "less-than"
    | "no-less-than"
    | "starts-with"
    | "contains"
    | "does-not-contain"
    | "ends-with"
    | "matches"
    | "does-not-match"
    | "ver-more-than"
    | "ver-no-more-than"
    | "ver-less-than"
    | "ver-no-less-than";

  /**
   * The expected value for this build requirement to evaluate to true.
   *
   * > HINT: The right hand side of the expression.
   */
  value?: string;
}

export interface BuildConditionWithoutValue extends BuildConditionBase {
  /**
   * A logical condition to apply to the parameter.
   */
  condition:
    | "exists"
    | "not-exists";
}

export type BuildExtension =
  | BuildExtensionAgentFreeSpace
  | BuildExtensionAssemblyInfo
  | BuildExtensionAutoMergeFeature
  | BuildExtensionCommitStatusPublisher
  | BuildExtensionDockerSupport
  | BuildExtensionFailureOnMetric
  | BuildExtensionFileContentReplacer
  | BuildExtensionGolang
  | BuildExtensionInvestigationsAutoAssigner
  | BuildExtensionJiraCloud
  | BuildExtensionNotifications
  | BuildExtensionNugetAuth
  | BuildExtensionNuGetPackagesIndexer
  | BuildExtensionPerfmon
  | BuildExtensionPullRequests
  | BuildExtensionRubyEnvConfigurator
  | BuildExtensionSharedResources
  | BuildExtensionSshAgent
  | BuildExtensionSwabra
  | BuildExtensionVcsLabeling
  | BuildExtensionXmlReportPlugin
  | ProjectExtensionKeepRules;

export interface BuildExtensionBase {
  /**
   * This ID is not exposed in UI and is just an incrementing number.
   *
   * eg: `BUILD_EXT_1`, `BUILD_EXT_2`, `BUILD_EXT_3`, etc...
   *
   * So if not set it will be set for you.
   */
  id?: string;
}

export interface BuildExtensionAgentFreeSpace extends BuildExtensionBase {
  /**
   * The Free disk space build feature allows ensuring certain free disk space
   * on the agent before the build by deleting files managed by the TeamCity
   * agent (other build's checkout directories and various caches).
   *
   * When the feature is not configured, the default free space for a
   * build is 3 GB.
   *
   * see: https://www.jetbrains.com/help/teamcity/free-disk-space.html
   */
  type: "jetbrains.agent.free.space";

  /**
   * You can specify a custom free disk space value here (in bytes or using one
   * of the kb, mb, gb or tb suffixes).
   */
  requiredSpace?: string;

  /**
   * Fail build if sufficient disk space cannot be freed.
   *
   * Defaults to `true`.
   */
  failBuild?: boolean;
}

export interface BuildExtensionAssemblyInfo extends BuildExtensionBase {
  /**
   * The AssemblyInfo Patcher build feature allows setting a build number to an
   * assembly automatically, without having to patch the `AssemblyInfo.cs` files
   * manually.
   *
   * When adding this build feature, you only need to specify the version format.
   *
   * You can use TeamCity parameter references.
   *
   * see: https://www.jetbrains.com/help/teamcity/assemblyinfo-patcher.html
   */
  type: "JetBrains.AssemblyInfo";

  /**
   * Specify assembly version format to update `AssemblyVersion` attribute.
   *
   * Defaults to `%system.build.number%`.
   */
  versionFormat?: string;

  /**
   * Specify assembly file version format to update `AssemblyFileVersion` attribute.
   * Leave blank to use same version as specified in assembly version.
   */
  fileVersionFormat?: string;

  /**
   * Specify assembly informational version format to update `AssemblyInformationalVersion` attribute.
   * Leave blank to leave attribute unchanged.
   */
  infoVersionFormat?: string;

  /**
   * When checked, AssemblyInfoPatcher will attempt to patch GlobalAssemblyInfo files.
   *
   * Defaults to `false`.
   */
  patchGlobalAssemblyInfo?: boolean;
}

export interface BuildExtensionAutoMergeFeature extends BuildExtensionBase {
  /**
   * The Automatic Merge build feature tracks builds in branches matched by the
   * configured filter and merges them into a specified destination branch if
   * the build satisfies the condition configured (for example, the build is
   * successful).
   *
   * The feature is supported for Git and Mercurial VCS roots for build
   * configurations with enabled feature branches.
   *
   * see: https://www.jetbrains.com/help/teamcity/automatic-merge.html
   */
  type: "AutoMergeFeature";

  /**
   * Specify the branches whose builds' sources will be merged.
   *
   * see: https://www.jetbrains.com/help/teamcity/branch-filter.html
   */
  srcBranchFilter: string[];

  /**
   * A logical name of the destination branch the sources will be merged to.
   *
   * The branch must be present in a repository and included into the
   * Branch Specification.
   *
   * > HINT: Parameter references are supported here.
   */
  dstBranch: string;

  /**
   * A message for a merge commit.
   *
   * Defaults to `Merge branch '%teamcity.build.branch%'`.
   *
   * > HINT: Parameter references are supported here.
   */
  commitMsg?: string;

  /**
   * A condition defining when the merge will be performed (either for successful
   * builds only, or if build from the branch does not add new problems to
   * destination branch).
   *
   * Defaults to `successful`.
   */
  mergeIf?: "successful" | "noNewTests";

  /**
   * Select to create a merge commit or do a fast-forward merge.
   *
   * Defaults to `alwaysCreateMergeCommit`.
   */
  mergePolicy?: "alwaysCreateMergeCommit" | "fastForward";

  /**
   * Choose when to merge:
   *
   * - Merge after build finish: the build finishes, and then the merge starts.
   *   The build duration does not include the merging time. Dependent builds
   *   can start even if merging is still in process.
   *
   * - Merge before build finish: the build is considered finished only when the
   *   merge is completed. Dependent builds will start only after the merge is
   *   completed.
   *
   * Defaults to `runAfterBuildFinish`.
   */
  runPolicy?: "runAfterBuildFinish" | "runBeforeBuildFinish";
}

export type BuildExtensionCommitStatusPublisher =
  | BuildExtensionCommitStatusAtlassianStashPublisher
  | BuildExtensionCommitStatusBitbucketCloudPublisher
  | BuildExtensionCommitStatusGerritStatusPublisher
  | BuildExtensionCommitStatusGithubPublisher
  | BuildExtensionCommitStatusGitlabPublisher
  | BuildExtensionCommitStatusSpaceStatusPublisher
  | BuildExtensionCommitStatusTfsPublisher
  | BuildExtensionCommitStatusUpsourcePublisher;

export interface BuildExtensionCommitStatusPublisherBase
  extends BuildExtensionBase {
  /**
   * Commit Status Publisher is a build feature which allows TeamCity to
   * automatically send build statuses of your commits to an external system.
   *
   * see: https://www.jetbrains.com/help/teamcity/commit-status-publisher.html
   */
  type: "commit-status-publisher";

  /**
   * The VCSRoot to publish commits status to.
   *
   * > HINT: If left undefined the Commit Status Publisher will attempt
   * >       publishing statuses for commits in all attached VCS roots.
   */
  vcsRootId?: string;
}

export interface BuildExtensionCommitStatusGithubPublisher
  extends BuildExtensionCommitStatusPublisherBase {
  /**
   * Publish commit statuses to Github / Github Enterprise
   *
   * see: https://www.jetbrains.com/help/teamcity/commit-status-publisher.html#GitHub
   */
  publisherId: "githubStatusPublisher";

  /**
   * The URL of the Github API to talk to.
   *
   * Defaults to `https://api.github.com`.
   *
   * > HINT: `http[s]://<host>[:<port>]/api/v3` for GitHub Enterprise.
   */
  url?: string;

  /**
   * Use a personal access token or obtain a token through an OAuth connection.
   *
   * The token must have the following scopes:
   * - for public repositories: public_repo and repo:status
   * - for private repositories: repo
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  token: `credentialsJSON:${string}`;

  // NOTE: Not even going to bother modeling the Username/Password option.
}

/** TODO: placeholder for tfs commit status publisher */
export interface BuildExtensionCommitStatusTfsPublisher
  extends BuildExtensionCommitStatusPublisherBase {
  publisherId: "tfs";
}

/** TODO: placeholder for bitbucketCloudPublisher */
export interface BuildExtensionCommitStatusBitbucketCloudPublisher
  extends BuildExtensionCommitStatusPublisherBase {
  publisherId: "bitbucketCloudPublisher";
}

/** TODO: placeholder for atlassianStashPublisher */
export interface BuildExtensionCommitStatusAtlassianStashPublisher
  extends BuildExtensionCommitStatusPublisherBase {
  publisherId: "atlassianStashPublisher";
}

/** TODO: placeholder for gerritStatusPublisher */
export interface BuildExtensionCommitStatusGerritStatusPublisher
  extends BuildExtensionCommitStatusPublisherBase {
  publisherId: "gerritStatusPublisher";
}

/** TODO: placeholder for gitlabStatusPublisher */
export interface BuildExtensionCommitStatusGitlabPublisher
  extends BuildExtensionCommitStatusPublisherBase {
  publisherId: "gitlabStatusPublisher";
}

/** TODO: placeholder for spaceStatusPublisher */
export interface BuildExtensionCommitStatusSpaceStatusPublisher
  extends BuildExtensionCommitStatusPublisherBase {
  publisherId: "spaceStatusPublisher";
}

/** TODO: placeholder for upsourcePublisher */
export interface BuildExtensionCommitStatusUpsourcePublisher
  extends BuildExtensionCommitStatusPublisherBase {
  publisherId: "upsourcePublisher";
}

export interface BuildExtensionDockerSupport extends BuildExtensionBase {
  /**
   * The Docker Support build feature allows automatically signing in to a
   * Docker registry before the build start.
   *
   * Adding this feature:
   *
   * - enables the Docker events' monitoring: such operations as docker pull
   *   and docker run will be detected by TeamCity;
   *
   * - adds the Docker Info tab to the Build Results page. The tab provides
   *   information on Docker-related operations.
   *
   * The feature also allows:
   *
   * - cleaning up the Docker images;
   *
   * - automatically log in to an authenticated registry before the build and
   *   log out of it after the build.
   *
   * see: https://www.jetbrains.com/help/teamcity/docker-support.html
   */
  type: "DockerSupport";

  /**
   * On server clean-up, delete pushed Docker images from registry.
   *
   * If you have a build configuration which publishes images, you need to
   * remove them at some point. You can select the corresponding option and
   * instruct TeamCity to remove the images published by a certain build when
   * the build itself is cleaned up.
   *
   * It works as follows: when an image is published, TeamCity stores the
   * information about the registry of the images published by the build.
   *
   * When the server clean-up is run and it deletes the build, all the configured
   * connections are searched for the address of this registry, and the images
   * published by the build are cleaned up using the credentials specified in
   * the found connection.
   *
   * Default to `false`.
   *
   * > HINT: This sounds like it's actually going to delete images from a registry,
   * > the location that you pushed the image to. As opposed to deleting the image
   * > on an agent after pushing it to a registry. The latter I caa understand but
   * > the former just seems wrong... yet another WTF moment thanks to TeamCity.
   *
   * see: https://www.jetbrains.com/help/teamcity/docker-support.html#Docker+Images+Clean-up
   */
  cleanupPushed?: boolean;

  /**
   * To enable automatic login of a docker registry add it's ID here.
   *
   * Accepts `ProjectExtensionOAuthProviderDocker` &
   * `ProjectExtensionOAuthProviderAmazonDocker` IDs.
   *
   * see: https://www.jetbrains.com/help/teamcity/docker-support.html#Docker+Registry+Automatic+Login%2FLogout
   */
  registryIds?: string[];
}

/** TODO: placeholder for BuildFailureOnMetric build extension */
export interface BuildExtensionFailureOnMetric extends BuildExtensionBase {
  type: "BuildFailureOnMetric";

  // This is on The Failure Conditions page not Build Features.
}

/** TODO: placeholder for golang build extension */
export interface BuildExtensionGolang extends BuildExtensionBase {
  type: "golang";
}

/** TODO: placeholder for InvestigationsAutoAssigner build extension */
export interface BuildExtensionInvestigationsAutoAssigner
  extends BuildExtensionBase {
  type: "InvestigationsAutoAssigner";
}

/** TODO: placeholder for jb.nuget.auth build extension */
export interface BuildExtensionNugetAuth extends BuildExtensionBase {
  type: "jb.nuget.auth";
}

/** TODO: placeholder for JetBrains.FileContentReplacer build extension */
export interface BuildExtensionFileContentReplacer extends BuildExtensionBase {
  type: "JetBrains.FileContentReplacer";
}

/** TODO: placeholder for JetBrains.SharedResources build extension */
export interface BuildExtensionSharedResources extends BuildExtensionBase {
  type: "JetBrains.SharedResources";
}

/** TODO: placeholder for jiraCloud build extension */
export interface BuildExtensionJiraCloud extends BuildExtensionBase {
  type: "jiraCloud";
}

/** TODO: placeholder for notifications build extension */
export interface BuildExtensionNotifications extends BuildExtensionBase {
  type: "notifications";
}

/** TODO: placeholder for NuGetPackagesIndexer build extension */
export interface BuildExtensionNuGetPackagesIndexer extends BuildExtensionBase {
  type: "NuGetPackagesIndexer";
}

/** TODO: placeholder for perfmon build extension */
export interface BuildExtensionPerfmon extends BuildExtensionBase {
  type: "perfmon";
}

/** TODO: placeholder for pullRequests build extension */
export interface BuildExtensionPullRequests extends BuildExtensionBase {
  type: "pullRequests";
}

/** TODO: placeholder for ruby.env.configurator build extension */
export interface BuildExtensionRubyEnvConfigurator extends BuildExtensionBase {
  type: "ruby.env.configurator";
}

/** TODO: placeholder for ssh-agent-build-feature build extension */
export interface BuildExtensionSshAgent extends BuildExtensionBase {
  type: "ssh-agent-build-feature";
}

/** TODO: placeholder for swabra build extension */
export interface BuildExtensionSwabra extends BuildExtensionBase {
  type: "swabra";
}

/** TODO: placeholder for VcsLabeling build extension */
export interface BuildExtensionVcsLabeling extends BuildExtensionBase {
  type: "VcsLabeling";
}

/** TODO: placeholder for xml-report-plugin build extension */
export interface BuildExtensionXmlReportPlugin extends BuildExtensionBase {
  type: "xml-report-plugin";
}

export type BuildCleanup = ProjectCleanup;
