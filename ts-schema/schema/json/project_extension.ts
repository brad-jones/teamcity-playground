import { AllXOR } from "../xor.ts";

export type ProjectExtension =
  | ProjectExtensionReportTab
  | ProjectExtensionOAuthProvider
  | ProjectExtensionIssueTracker
  | ProjectExtensionSharedResource
  | ProjectExtensionPackageRepository
  | ProjectExtensionKeepRules
  | ProjectExtensionVersionedSettings;

export interface ProjectExtensionBase {
  /**
   * This id is used as an attribute on the extension xml node.
   *
   * eg: `<extension id="foo">`
   *
   * It is not something you have access to in UI and
   * normally TeamCity will generate this value.
   *
   * eg: `PROJECT_EXT_1`, `PROJECT_EXT_2`, `PROJECT_EXT_3`, etc...
   */
  id: string;
}

export type ProjectExtensionReportTab =
  | ProjectExtensionBuildReportTab
  | ProjectExtensionProjectReportTab;

export interface ProjectExtensionReportTabBase extends ProjectExtensionBase {
  /**
   * see: https://www.jetbrains.com/help/teamcity/2020.2/including-third-party-reports-in-the-build-results.html
   */
  type: "ReportTab";

  /**
   * Specify a unique title of the report tab that will be displayed in the web UI.
   */
  title: string;

  /**
   * Specify the path to the artifacts to be displayed as the contents
   * of the report page. The path must be relative to the root of the
   * build artifact directory.
   *
   * To use a file from an archive, use the `path-to-archive!relative-path`
   * syntax, for example: `javadoc.zip!/index.html`.
   *
   * See the list of supported archives.
   * https://www.jetbrains.com/help/teamcity/2020.2/patterns-for-accessing-build-artifacts.html#Obtaining+Artifacts+from+a+Build+Script
   *
   * You can use the file browser next to the field to select artifacts.
   * Parameter references are supported here, for example,
   * `%parameter%.zip!index.htm`.
   */
  startPage: string;
}

export interface ProjectExtensionBuildReportTab
  extends ProjectExtensionReportTabBase {
  /**
   * Here you can define artifact-based tabs for build results.
   *
   * Appears on the Build Results page for each build that produced an artifact
   * with the specified name. These report tabs are defined in a project and are
   * inherited in its subprojects.
   *
   * To override an inherited Report tab in a subproject, create a new report
   * tab with the same name as the inherited one in the subproject.
   */
  subType: "BuildReportTab";
}

export interface ProjectExtensionProjectReportTab
  extends ProjectExtensionReportTabBase {
  /**
   * Here you can define custom artifact-based tabs for the Project Home page.
   *
   * Appears on the Project Home page for a particular project only if a build
   * within the project produces the specified reports' artifact.
   */
  subType: "ProjectReportTab";

  /**
   * Select the build configuration and specify the build whose artifacts will
   * be shown on the tab.
   */
  buildTypeId: string;

  /**
   * Select whether the report should be taken from the last successful,
   * pinned, finished build or the build with the specified build number
   * or the last build with the specified tag.
   */
  revisionRuleName:
    | "lastSuccessful"
    | "lastPinned"
    | "lastFinished"
    | "buildNumber"
    | "buildTag";

  /**
   * If `revisionRuleName=buildNumber` or `revisionRuleName=buildTag`
   * this is the value of the build number or tag.
   */
  revisionRuleValue?: string;
}

export type ProjectExtensionOAuthProvider =
  | ProjectExtensionOAuthProviderAmazonDocker
  | ProjectExtensionOAuthProviderBitBucketCloud
  | ProjectExtensionOAuthProviderDocker
  | ProjectExtensionOAuthProviderGithub
  | ProjectExtensionOAuthProviderGitlab
  | ProjectExtensionOAuthProviderJetBrainsSpace
  | ProjectExtensionOAuthProviderSlackConnection
  | ProjectExtensionOAuthProviderTfs;

export interface ProjectExtensionOAuthProviderBase
  extends ProjectExtensionBase {
  /**
   * This is another base type, it refers to the Connections page of a Project.
   */
  type: "OAuthProvider";

  /**
   * Provide some name to distinguish this connection from others.
   */
  displayName: string;
}

export interface ProjectExtensionOAuthProviderAmazonDocker
  extends ProjectExtensionOAuthProviderBase {
  /**
   * Connect TeamCity to an AWS ECR docker registry to simplify docker operations.
   */
  providerType: "AmazonDocker";

  /**
   * Registry Id / AWS Account Id
   */
  registryID: string;

  /**
   * The AWS Region identifier for where the ECR registry resides.
   */
  region: string;

  /**
   * The `AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY` to use otherwise the
   * default AWS Credential Provider Chain is used.
   */
  auth?: {
    accessKeyId: string;
    secretAccessKey: `credentialsJSON:${string}`;
  };

  /**
   * An IAM role to assume, using AWS STS temporary keys.
   *
   * If not supplied then the provided `AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY`
   * key pair or the default AWS Credential Provider Chain will be used directly.
   */
  role?: {
    arn: string;

    /**
     * External ID is strongly recommended to be used in role trust relationship condition.
     *
     * see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html
     */
    externalID?: string;
  };
}

export interface ProjectExtensionOAuthProviderBitBucketCloud
  extends ProjectExtensionOAuthProviderBase {
  /**
   * Connect TeamCity to https://bitbucket.org
   *
   * see: https://www.jetbrains.com/help/teamcity/integrating-teamcity-with-vcs-hosting-services.html#Connecting+to+Bitbucket+Cloud
   */
  providerType: "BitBucketCloud";

  /**
   * The Bitbucket API Key.
   */
  key: string;

  /**
   * The Bitbucket API Secret.
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  secret: `credentialsJSON:${string}`;
}

export interface ProjectExtensionOAuthProviderDocker
  extends ProjectExtensionOAuthProviderBase {
  /**
   * Connect TeamCity to a Docker Registry.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/configuring-connections-to-docker.html
   */
  providerType: "Docker";

  /**
   * The URL to the Docker Registry.
   *
   * Format: `[http(s)://]hostname[:port]`, by default `https://` is used.
   */
  repositoryUrl: string;

  /**
   * The username & password to authenticate against the Docker Registry.
   *
   * Leave blank for anonymous access.
   */
  auth?: {
    /**
     * The Docker Registry username.
     */
    username: string;

    /**
     * The Docker Registry password.
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    password: `credentialsJSON:${string}`;
  };
}

export interface ProjectExtensionOAuthProviderGithub
  extends ProjectExtensionOAuthProviderBase {
  /**
   * Connect TeamCity to https://github.com or a Github Enterprise server.
   *
   * see: https://www.jetbrains.com/help/teamcity/integrating-teamcity-with-vcs-hosting-services.html#Connecting+to+GitHub
   */
  providerType: "Github";

  /**
   * If using Github Enterprise, provide your servers URL.
   *
   * Defaults to: `https://github.com`.
   */
  serverUrl?: string;

  /**
   * The oAuth Client ID.
   */
  clientId: string;

  /**
   * The oAuth Client Secret.
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  secret: `credentialsJSON:${string}`;
}

export interface ProjectExtensionOAuthProviderGitlab
  extends ProjectExtensionOAuthProviderBase {
  /**
   * Connect TeamCity to https://gitlab.com or a Gitlab CE/EE server.
   *
   * see: https://www.jetbrains.com/help/teamcity/integrating-teamcity-with-vcs-hosting-services.html#Connecting+to+GitLab
   */
  providerType: "Gitlab";

  /**
   * If using Gitlab CE/EE, provide your servers URL.
   *
   * Defaults to: `https://gitlab.com`.
   */
  serverUrl?: string;

  /**
   * The oAuth Client ID.
   */
  clientId: string;

  /**
   * The oAuth Client Secret.
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  secret: `credentialsJSON:${string}`;
}

export interface ProjectExtensionOAuthProviderJetBrainsSpace
  extends ProjectExtensionOAuthProviderBase {
  /**
   * Connect TeamCity to https://www.jetbrains.com/space/
   *
   * see: https://www.jetbrains.com/help/space/ci-server-integration.html#configure-your-teamcity-project
   */
  providerType: "JetBrains Space";

  /**
   * Your space server URL.
   */
  serverUrl: string;

  /**
   * The oAuth Client ID.
   */
  clientId: string;

  /**
   * The oAuth Client Secret.
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  secret: `credentialsJSON:${string}`;
}

export interface ProjectExtensionOAuthProviderSlackConnection
  extends ProjectExtensionOAuthProviderBase {
  /**
   * This is used by the "Slack Notifier".
   *
   * see: https://www.jetbrains.com/help/teamcity/notifications.html#Configuring+Slack+Connection
   */
  providerType: "slackConnection";

  /**
   * The oAuth Client ID.
   */
  clientId: string;

  /**
   * The oAuth Client Secret.
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  clientSecret: `credentialsJSON:${string}`;

  /**
   * The bot user token.
   *
   * see: https://api.slack.com/docs/token-types#bot
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  botToken: `credentialsJSON:${string}`;
}

export interface ProjectExtensionOAuthProviderTfs
  extends ProjectExtensionOAuthProviderBase {
  /**
   * Connect TeamCity to Azure Devops or VSTS. aka: TFS.
   *
   * see: https://www.jetbrains.com/help/teamcity/integrating-teamcity-with-vcs-hosting-services.html#Connecting+to+Azure+DevOps+Services
   */
  providerType: "tfs";

  /**
   * URL format:
   * - Azure DevOps: `https://dev.azure.com/<organization>`
   * - VSTS: `https://<account>.visualstudio.com`
   */
  serverUrl: string;

  /**
   * The oAuth bearer token.
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  accessToken: `credentialsJSON:${string}`;
}

export type ProjectExtensionIssueTracker =
  | ProjectExtensionIssueTrackerBitBucket
  | ProjectExtensionIssueTrackerBugzilla
  | ProjectExtensionIssueTrackerGithub
  | ProjectExtensionIssueTrackerJira
  | ProjectExtensionIssueTrackerTfs
  | ProjectExtensionIssueTrackerYoutrack;

export interface ProjectExtensionIssueTrackerBase extends ProjectExtensionBase {
  /**
   * This is another base type, it refers to the Issue Trackers page of a Project.
   */
  type: "IssueTracker";

  /**
   * Provide some name to distinguish this tracker from others.
   */
  displayName: string;
}

export interface ProjectExtensionIssueTrackerBitBucket
  extends ProjectExtensionIssueTrackerBase {
  /**
   * Connect TeamCity to the Bitbucket Issue Tracker.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/bitbucket-cloud.html
   */
  providerType: "BitBucketIssues";

  /**
   * The url to your bit bucket repository.
   */
  repositoryUrl: string;

  /**
   * Issue ID Pattern: a Java Regular Expression pattern to find the issue ID
   * in the text. The matched text (or the first group if there are groups
   * defined) is used as the issue number.
   *
   * Defaults to: `#(\d+)`.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/integrating-teamcity-with-issue-tracker.html#Converting+Strings+into+Links+to+Issues
   * also: http://java.sun.com/j2se/1.5.0/docs/api/java/util/regex/Pattern.html
   */
  pattern?: string;

  /**
   * Credentials to log in to the issue tracker, if it requires authorization.
   */
  auth?: {
    /**
     * The username used to connect to BitBucket.
     *
     * > HINT: For Bitbucket Cloud team accounts, it is possible to use the
     * > team name as the username and the API key as the password.
     */
    username: string;

    /**
     * The password used to connect to Bitbucket
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    password: `credentialsJSON:${string}`;
  };
}

export interface ProjectExtensionIssueTrackerBugzilla
  extends ProjectExtensionIssueTrackerBase {
  /**
   * Connext TeamCity to a Bugzilla Issue Tracker.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/bugzilla.html
   */
  providerType: "bugzilla";

  /**
   * The url to your bugzilla server.
   */
  serverUrl: string;

  /**
   * Issue ID Pattern: a Java Regular Expression pattern to find the issue ID
   * in the text. The matched text (or the first group if there are groups
   * defined) is used as the issue number.
   *
   * Defaults to: `#(\d+)`.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/integrating-teamcity-with-issue-tracker.html#Converting+Strings+into+Links+to+Issues
   * also: http://java.sun.com/j2se/1.5.0/docs/api/java/util/regex/Pattern.html
   */
  pattern?: string;

  /**
   * Credentials to log in to the issue tracker, if it requires authorization.
   *
   * > HINT: If the username and password are specified, you need to have
   * > Bugzilla XML-RPC interface switched on. This is not required if you
   * > use anonymous access to Bugzilla without the username and password.
   */
  auth?: {
    /**
     * The username used to connect to Bugzilla.
     */
    username: string;

    /**
     * The password used to connect to Bugzilla
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    password: `credentialsJSON:${string}`;
  };
}

export interface ProjectExtensionIssueTrackerGithub
  extends ProjectExtensionIssueTrackerBase {
  /**
   * Connect TeamCity to a Github Issue Tracker.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/github.html
   */
  providerType: "GithubIssues";

  /**
   * The url to your Github repository.
   */
  repositoryUrl: string;

  /**
   * Issue ID Pattern: a Java Regular Expression pattern to find the issue ID
   * in the text. The matched text (or the first group if there are groups
   * defined) is used as the issue number.
   *
   * Defaults to: `#(\d+)`.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/integrating-teamcity-with-issue-tracker.html#Converting+Strings+into+Links+to+Issues
   * also: http://java.sun.com/j2se/1.5.0/docs/api/java/util/regex/Pattern.html
   */
  pattern?: string;

  /**
   * Credentials to log in to the issue tracker, if it requires authorization.
   *
   * > HINT: Authentication via login/password is deprecated by GitHub.
   * > We highly recommend that you authenticate with access tokens instead.
   */
  auth?: AllXOR<[{
    /**
     * A Github Token.
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    token: `credentialsJSON:${string}`;
  }, {
    /**
     * The github username.
     *
     * > HINT: Authentication via login/password is deprecated by GitHub.
     * > We highly recommend that you authenticate with access tokens instead.
     */
    username: string;

    /**
     * The github password for the given username.
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    password: `credentialsJSON:${string}`;
  }]>;
}

export interface ProjectExtensionIssueTrackerJira
  extends ProjectExtensionIssueTrackerBase {
  /**
   * Connect TeamCity to a Jira Issue Tracker.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/jira.html
   */
  providerType: "jira";

  /**
   * The url to your Jira server.
   *
   * > HINT: Using Jira Cloud, your URL will be something like:
   * > `https://<my-org>.atlassian.net`
   */
  serverUrl: string;

  /**
   * A list of Jira Project Keys to watch.
   *
   * If none provided then all keys will be automatically synchronized.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/integrating-teamcity-with-issue-tracker.html#Converting+Strings+into+Links+to+Issues
   */
  projectKeys?: string[];

  /**
   * Enter username for self-hosted Jira or email for Jira Cloud.
   */
  username: string;

  /**
   * Enter password for self-hosted Jira or access token for Jira Cloud
   */
  password: string;

  /**
   * OAuth credentials to send build/deploy information to Jira Cloud.
   *
   * Since version 2020.1, TeamCity can report build statuses directly to
   * Jira Cloud in real time. To configure this extra option, you need to
   * provide the Jira Client ID and Server secret when configuring a
   * connection and add a respective build feature.
   *
   * > HINT: This is applicable only to Jira Cloud.
   */
  oAuth?: {
    /**
     * The oAuth Client ID.
     */
    clientId: string;

    /**
     * The oAuth Client secret.
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    clientSecret: `credentialsJSON:${string}`;
  };
}

export interface ProjectExtensionIssueTrackerYoutrack
  extends ProjectExtensionIssueTrackerBase {
  /**
   * Connect TeamCity to a Jet Brains YouTrack Issue Tracker.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/youtrack.html
   */
  providerType: "youtrack";

  /**
   * The url to your YouTrack server.
   */
  serverUrl: string;

  /**
   * A list of Project IDs to watch.
   *
   * If none provided then all IDs will be automatically synchronized.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/integrating-teamcity-with-issue-tracker.html#Converting+Strings+into+Links+to+Issues
   */
  projectIDs?: string[];

  /**
   * Credentials to log in to the issue tracker.
   */
  auth: AllXOR<[{
    /**
     * A YouTrack Token.
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    token: `credentialsJSON:${string}`;
  }, {
    /**
     * The YouTrack username.
     *
     * > HINT: Authentication via login/password is deprecated by GitHub.
     * > We highly recommend that you authenticate with access tokens instead.
     */
    username: string;

    /**
     * The YouTrack password for the given username.
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    password: `credentialsJSON:${string}`;
  }]>;
}

export interface ProjectExtensionIssueTrackerTfs
  extends ProjectExtensionIssueTrackerBase {
  /**
   * Connect TeamCity to a TFS based Issue Tracker. aka: Azure DevOps
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/team-foundation-work-items.html
   */
  providerType: "tfs";

  /**
   * The url to your TFS server.
   *
   * URL format:
   * - TFS: `http[s]://<host>[:<port>]/tfs/<collection>/<project>`
   * - Azure DevOps: `https://dev.azure.com/<organization>/<project>`
   * - VSTS: `https://<account>.visualstudio.com/<project>`
   */
  serverUrl: string;

  /**
   * Issue ID Pattern: a Java Regular Expression pattern to find the issue ID
   * in the text. The matched text (or the first group if there are groups
   * defined) is used as the issue number.
   *
   * Defaults to: `#(\d+)`.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/integrating-teamcity-with-issue-tracker.html#Converting+Strings+into+Links+to+Issues
   * also: http://java.sun.com/j2se/1.5.0/docs/api/java/util/regex/Pattern.html
   */
  pattern?: string;

  /**
   * You should probably prefer token based auth.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/team-foundation-server.html#Authentication+Notes
   */
  auth: AllXOR<[{
    /**
     * A Personal Access Token.
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    token: `credentialsJSON:${string}`;
  }, {
    /**
     * To use the user/pass pair authentication, you have to enable alternate
     * credentials in your Azure DevOps account, where you can set a secondary
     * username and password to use when configuring a VCS root.
     *
     * > HINT: Azure DevOps stops supporting alternate credentials since March 2, 2020.
     * > To be able to authenticate in Azure DevOps, please use alternative methods
     * > instead (such as personal access tokens).
     */
    username: string;

    /**
     * The password for the given username.
     *
     * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
     * > here, instead preferring a password parameter you can still do that but
     * > you will have to cast the string. This is hard on purpose, you should
     * > always prefer `credentialsJSON` over a parameter with a password spec.
     */
    password: `credentialsJSON:${string}`;
  }]>;
}

export type ProjectExtensionSharedResource =
  & ProjectExtensionBase
  & {
    /**
     * The Shared Resources build feature allows limiting concurrently running
     * builds using a shared resource, such as an external (to the CI server)
     * resource, for example, a test database, or a server with a limited number
     * of connections.
     *
     * see: https://www.jetbrains.com/help/teamcity/2020.2/shared-resources.html
     */
    type: "JetBrains.SharedResources";

    /**
     * The name of the shared resource to distinguish it from others.
     */
    name: string;

    /**
     * If the resource is enabled or not.
     *
     * Defaults to `true`.
     */
    enabled?: boolean;
  }
  & AllXOR<[
    {
      /**
       * Quota is a number of concurrent read locks that can be acquired on the resource.
       *
       * Write locks are always exclusive, only a single running build with a
       * write lock is allowed.
       *
       * > HINT: Set this to -1 to get an infinite number of read locks.
       *
       * see: https://www.jetbrains.com/help/teamcity/2020.2/shared-resources.html#Locks+for+Resources+with+Quotas
       */
      quota: number;
    },
    {
      /**
       * Or a resource can represent a set of custom values, such as URLs.
       *
       * Resources with custom values support three types of locks:
       *
       * - Locks on any available value: a build that uses the resource will
       *   start if at least one of the values is available. If all values are
       *   being used at the moment, the build will wait in the queue.
       *
       * - Locks on all values: a build will lock all the values of the resource.
       *   No other builds that use this resource will start until the current
       *   one is finished.
       *
       * - Locks on a specific value: only a specific value of the resource will
       *   be passed to the build. If the value is already taken by a running build,
       *   the new build will wait in the queue until the value becomes available.
       *
       * see: https://www.jetbrains.com/help/teamcity/2020.2/shared-resources.html#Locks+for+Resources+with+Custom+Values
       */
      values: string[];
    },
  ]>;

export type ProjectExtensionPackageRepository =
  ProjectExtensionPackageRepositoryNuget;

export interface ProjectExtensionPackageRepositoryBase
  extends ProjectExtensionBase {
  /**
   * This is another base type, it refers to different types of built-in
   * Package Repositories/Feeds that TeamCity can be configured to provide.
   */
  type: "PackageRepository";

  /**
   * Provide some name to distinguish this repository from others.
   */
  displayName: string;

  /**
   * An optional human friendly description of the repository.
   */
  description?: string;
}

export interface ProjectExtensionPackageRepositoryNuget
  extends ProjectExtensionPackageRepositoryBase {
  /**
   * If you want to publish your NuGet packages to a limited audience,
   * for example, to use them internally, you can use TeamCity as a NuGet feed.
   * You can configure multiple NuGet feeds for a TeamCity project.
   *
   * The built-in TeamCity NuGet feed supports API v1/v2/v3.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/using-teamcity-as-nuget-feed.html
   */
  providerType: "nuget";

  /**
   * NuGet packages indexer is an internal TeamCity tool that can index NuGet
   * packages and add them to TeamCity remote private feeds, with no need for
   * additional authorization.
   *
   * When the NuGet packages indexer build feature is added to a build configuration,
   * all `.nupkg` files published as build artifacts will be indexed and added to
   * the selected NuGet feed. Indexing is performed on the agent side.
   *
   * Defaults to: `false`.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/nuget-packages-indexer.html
   */
  indexPackages?: boolean;
}

export interface ProjectExtensionKeepRules extends ProjectExtensionBase {
  /**
   * The clean-up rules define how to clean data in the current project,
   * its subprojects and build configurations.
   *
   * Keep rules define what data to preserve during the clean-up. They are very
   * flexible but take more effort to configure than base rules. Multiple keep
   * rules can be assigned to a project or build configuration. Read how to
   * configure a keep rule.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/clean-up.html#Clean-up+Rules
   */
  type: "keepRules";

  /**
   * Is the rule enabled or not?
   *
   * Default to: `true`.
   */
  enabled?: boolean;

  /**
   * Defines what build data to preserve. Provide one or more of these options.
   * Supplying the `everything` option is the same as supplying all the options.
   */
  keep: ("everything" | "artifacts" | "logs" | "statistics")[];

  /**
   * If keeping artifacts, which artifacts should we keep.
   *
   * > HINT: If none is provided all artifacts are kept.
   */
  artifactPatterns?: string[];

  /**
   * To keep artifacts in dependencies or not. This option controls if the
   * builds of the dependency build configurations are also cleaned up.
   *
   * With this option enabled, if some build is preserved by this rule, all
   * artifacts of its dependency builds will also be preserved.
   *
   * The option works similarly to the Dependencies option of a base rule.
   *
   * Defaults to `true`.
   */
  keepDependantArtifacts?: boolean;

  /**
   * Defines which builds this cleanup rule applies to.
   */
  filter: {
    /**
     * Whether to include failed builds or not.
     *
     * Defaults to `successful`.
     */
    status?: "any" | "successful" | "failed";

    /**
     * Whether to include personal builds or not.
     *
     * A personal build is a build-out of the common build sequence which
     * typically uses the changes not yet committed into the version control.
     *
     * Personal builds are usually initiated from one of the supported IDEs
     * via the Remote Run procedure. You can also upload a patch with changes
     * directly to the server...
     *
     * > HINT: If left undefined then both personal builds &
     * >       non personal builds will be matched by this filter.
     *
     * see: https://www.jetbrains.com/help/teamcity/personal-build.html
     */
    personal?: boolean;

    /**
     * Matches builds with any specified tag.
     */
    tags?: string[];

    /**
     * A list of branch patterns to match against.
     *
     * Defaults to `+:*`.
     */
    branches?: string[];

    /**
     * Matches only Active Branches.
     *
     * If left undefined then both active & inactive builds will be matched.
     *
     * > HINT: Yes this can be applied with custom branch patterns too.
     *
     * see: https://www.jetbrains.com/help/teamcity/working-with-feature-branches.html#Active+branches
     */
    onlyActiveBranches?: boolean;

    /**
     * The filter can be applied per every matching branch, or to all builds in
     * matching branches as one set. This affects how many builds are preserved:
     * e.g. 30 last builds in each branch or 30 last builds among all branches.
     *
     * Defaults to `true`;
     */
    perBranch?: boolean;
  };

  /**
   * Defines a quantity or time range for matching builds to be preserved.
   *
   * > HINT: If left undefined then all matching builds will be preserved.
   */
  range?: {
    type:
      | "lastNDays"
      | "lastNBuilds"
      | "NDaysSinceLastBuild"
      | "NDaysSinceLastSuccessfulBuild";
    n: number;
  };
}

export interface ProjectExtensionVersionedSettings
  extends ProjectExtensionBase {
  /**
   * TeamCity allows the two-way synchronization of the project settings with
   * the version control repository. Supported VCSs are Git, Mercurial, Perforce,
   * Subversion, and Azure DevOps Server (formerly TFS).
   *
   * You can store settings in the XML format or in the Kotlin language and
   * define settings programmatically using the Kotlin-based DSL.
   *
   * > HINT: Or in this case we will be keeping our settings in YAML/JSON
   * >       or maybe even TypeScript files & then generating that into XML.
   * >       The entire premise behind this very project.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/storing-project-settings-in-version-control.html
   */
  type: "versionedSettings";

  /**
   * Enable or disable synchronization.
   *
   * Defaults to `true`.
   */
  enabled?: boolean;

  /**
   * The ID of a VcsRoot that will be used to synchronize settings with.
   *
   * > HINT: Yes you could have a totally different repo or branch that
   * >       contained the `.teamcity` folder if so inclined...
   */
  vscRootID: string;

  /**
   * There are two possible sources of build settings:
   *
   * (1) the current settings on the TeamCity server, that is the latest settings'
   *     changes applied to the server (either made via the UI, or via a commit
   *     to the .teamcity directory in the VCS root), and
   *
   * (2) the settings in the VCS on the revision selected for a build.
   *
   * Therefore, it is possible to start builds with settings different from those
   * currently defined in the build configuration. For projects with enabled
   * versioned settings, you can instruct TeamCity which settings to take when
   * build starts.
   *
   * The 3 modes:
   *
   * `ALWAYS_USE_CURRENT`: all builds use current project settings from the
   * TeamCity server. Settings' changes in branches, history, and personal
   * builds are ignored. Users cannot run a build with custom project settings.
   *
   * `PREFER_CURRENT`: a build uses the latest project settings from the TeamCity
   * server. Users can run a build with older project settings via the custom
   * build dialog.
   *
   * `PREFER_VCS`: builds in branches and history builds, which use settings
   * from VCS, load settings from the versioned settings' revision calculated
   * for the build. Users can change configuration settings in personal builds
   * from IDE or can run a build with project settings current on the TeamCity
   * server via the custom build dialog.
   *
   * Defaults to `PREFER_VCS`.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/storing-project-settings-in-version-control.html#StoringProjectSettingsinVersionControl-DefiningSettingstoApplytoBuilds
   */
  mode?: "ALWAYS_USE_CURRENT" | "PREFER_CURRENT" | "PREFER_VCS";

  /**
   * Show settings changes in builds.
   *
   * Defaults to `true`.
   */
  showChanges?: boolean;

  /**
   * Store secure values (like passwords or API tokens) outside of VCS.
   *
   * Defaults to `true`.
   */
  useCredentialsJSON?: boolean;

  /**
   * The format in which the Settings are stored.
   *
   * Obviously this tool doesn't support kotlin in anyway shape or form.
   * None the less for the sake of completeness here is the property.
   *
   * Defaults to `xml`.
   */
  format?: "xml" | "kotlin" | {
    kotlin: true;

    /**
     * One of the advantages of the portable DSL script is that the script can
     * be used by more than one project on the same server or more than one
     * server (hence the name: portable).
     *
     * Defaults to `true`.
     *
     * see: https://www.jetbrains.com/help/teamcity/2020.2/kotlin-dsl.html#Sharing+Kotlin+DSL+Scripts
     * also: https://www.jetbrains.com/help/teamcity/2020.2/kotlin-dsl.html#Non-Portable+DSL
     */
    generatePortableDSL?: boolean;

    /**
     * Since TeamCity 2019.2, you can customize the DSL generation behavior using
     * context parameters configured in the TeamCity UI. Context parameters are
     * specified as a part of the project versioned settings in the UI.
     *
     * > HINT: Context parameters are a Kotlin only thing, XML configuration
     * > can not & does not need to use context parameters. And since this
     * > project generates XML this is also essentially useless but here for
     * > the sake of completeness.
     *
     * see: https://www.jetbrains.com/help/teamcity/2020.2/kotlin-dsl.html#Using+Context+Parameters+in+DSL
     */
    context?: Record<string, string>;
  };
}
