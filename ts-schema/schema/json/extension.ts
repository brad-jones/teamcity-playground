export type Extension =
  | ExtensionReportTab
  | ExtensionOAuthProvider;

export interface ExtensionBase {
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

export type ExtensionReportTab =
  | ExtensionBuildReportTab
  | ExtensionProjectReportTab;

export interface ExtensionReportTabBase extends ExtensionBase {
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

export interface ExtensionBuildReportTab extends ExtensionReportTabBase {
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

export interface ExtensionProjectReportTab extends ExtensionReportTabBase {
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

export type ExtensionOAuthProvider =
  | ExtensionOAuthProviderAmazonDocker
  | ExtensionOAuthProviderBitBucketCloud
  | ExtensionOAuthProviderDocker
  | ExtensionOAuthProviderGithub
  | ExtensionOAuthProviderGitlab
  | ExtensionOAuthProviderJetBrainsSpace
  | ExtensionOAuthProviderSlackConnection
  | ExtensionOAuthProviderTfs;

export interface ExtensionOAuthProviderBase extends ExtensionBase {
  /**
   * This is another base type, it refers to the Connections page of a Project.
   */
  type: "OAuthProvider";

  /**
   * Provide some name to distinguish this connection from others.
   */
  displayName: string;
}

export interface ExtensionOAuthProviderAmazonDocker
  extends ExtensionOAuthProviderBase {
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

export interface ExtensionOAuthProviderBitBucketCloud
  extends ExtensionOAuthProviderBase {
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

export interface ExtensionOAuthProviderDocker
  extends ExtensionOAuthProviderBase {
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

export interface ExtensionOAuthProviderGithub
  extends ExtensionOAuthProviderBase {
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

export interface ExtensionOAuthProviderGitlab
  extends ExtensionOAuthProviderBase {
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

export interface ExtensionOAuthProviderJetBrainsSpace
  extends ExtensionOAuthProviderBase {
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

export interface ExtensionOAuthProviderSlackConnection
  extends ExtensionOAuthProviderBase {
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

export interface ExtensionOAuthProviderTfs extends ExtensionOAuthProviderBase {
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

export interface ExtensionIssueTracker extends ExtensionBase {
  type: "IssueTracker";
}

export interface ExtensionSharedResource extends ExtensionBase {
  type: "JetBrains.SharedResources";
}

export interface ExtensionKeepRules extends ExtensionBase {
  type: "keepRules";
}

export interface ExtensionPackageRepository extends ExtensionBase {
  type: "PackageRepository";
}

export interface ExtensionVersionedSettings extends ExtensionBase {
  type: "versionedSettings";
}
