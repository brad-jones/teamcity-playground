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

  /**
   * An optional set of options that configure how a Build Configuration works.
   */
  options?: {
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
  checkOutRules: string[];
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
  quietPeriod: "DO_NOT_USE" | "USE_DEFAULT" | number;

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
  type: "retryBuildTrigger";
}

export interface BuildTriggerNuget extends BuildTriggerBase {
  type: "nuget.simple";
}

export interface BuildTriggerMavenArtifact extends BuildTriggerBase {
  type: "mavenArtifactDependencyTrigger";
}

export interface BuildTriggerMavenSnapshot extends BuildTriggerBase {
  type: "mavenSnapshotDependencyTrigger";
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
