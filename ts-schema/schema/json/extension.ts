export type Extension =
  | ExtensionBuildReportTab
  | ExtensionProjectReportTab;

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

export interface ExtensionReportTab extends ExtensionBase {
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

export interface ExtensionBuildReportTab extends ExtensionReportTab {
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

export interface ExtensionProjectReportTab extends ExtensionReportTab {
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

export interface ExtensionOAuthProvider extends ExtensionBase {
  /**
   * This is another base type, it refers to the Connections page of a Project.
   */
  type: "OAuthProvider";
}

export interface ExtensionAwsEcr extends ExtensionOAuthProvider {
  /**
   * Connect TeamCity to an AWS ECR docker registry to simplify docker operations.
   */
  providerType: "AmazonDocker";

  /**
   * A human friendly name for this Connection.
   */
  displayName: string;

  /**
   * Registry Id / AWS Account Id
   */
  registryID: string;

  /**
   * The AWS Region identifier for where the ECR registry resides.
   */
  awsRegionName: string;

  /**
   * If `awsUseDefaultCredentialProviderChain=false` you will need
   * to supply a AWS_ACCESS_KEY_ID
   */
  awsAccessKeyID?: string;

  /**
   * If `awsUseDefaultCredentialProviderChain=false` you will need
   * to supply a AWS_SECRET_ACCESS_KEY
   */
  awsSecretAccessKey?: string;

  /**
   * If `awsCredentialsType=aws.temp.credentials` set this to the ARN of the
   * role to assume.
   */
  awsIamRoleARN?: string;

  /**
   * External ID is strongly recommended to be used in role trust relationship condition.
   *
   * see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html
   */
  awsExternalID?: string;
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
