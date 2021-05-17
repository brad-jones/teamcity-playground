export type VcsRoot =
  | VcsRootCvs
  | VcsRootGit
  | VcsRootMercurial
  | VcsRootPerforce
  | VcsRootStarTeam
  | VcsRootSvn
  | VcsRootTfs;

export interface VcsRootBase {
  /**
   * This refers to the filename of the generated XML file stored in the
   * .teamcity folder of your repo & ultimately the server's Data Directory.
   * see: https://www.jetbrains.com/help/teamcity/teamcity-data-directory.html
   *
   * For example an id of `Abc_Xyz123` results in the file
   * `./.teamcity/MyProject/vcsRoots/Abc_Xyz123.xml` being generated.
   *
   * This id is also used as a reference in many places
   * throughout the rest of this schema & for URLs, etc...
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/identifier.html
   *
   * > HINT: ID should start with a latin letter and contain only latin letters,
   *         digits and underscores (at most 225 characters).
   */
  id: string;

  /**
   * This value is used as an attribute on the root XML object. It only appears
   * to be used internally by TeamCity. Hence this is optional and will be
   * generated for you if you do not explicitly define a value.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/identifier.html#Universally+Unique+IDs
   *
   * > NOTE: Despite what the docs say, TeamCity does not appear to automatically
   * > populate the UUID field for you but also doesn't seem to mind that it
   * > doesn't exist, go figure...
   */
  uuid?: string;

  /**
   * A human friendly name for the project.
   */
  name: string;
}

export interface VcsRootGit extends VcsRootBase {
  /**
   * Uses git as the version control system.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/git.html
   */
  type: "jetbrains.git";

  /**
   * The URL of the remote Git repository used for fetching data from the repository.
   */
  url: string;

  /**
   * The URL of the target remote Git repository used for pushing annotated
   * tags created via VCS labeling build feature to the remote repository.
   * If blank, the fetch URL is used.
   */
  pushUrl?: string;

  /**
   * Configures default branch. Parameter references are supported here.
   *
   * Defaults to: `refs/heads/master`
   */
  branch?: string;

  /**
   * Lists the patterns for branch names, required for feature branches support.
   * The matched branches are monitored for changes in addition to the default branch.
   *
   * The syntax is similar to checkout rules: +|-:branch_name, where branch_name
   * is specific to the VCS, i.e. refs/heads/ in Git (with the optional * placeholder).
   */
  branchSpec?: string[];

  /**
   * Allows monitoring / checking out git tags as branches making branch
   * specification match tag names as well as branches.
   *
   * For example: `+|-:refs/tags/<tag_name>`
   *
   * Defaults to: `false`.
   */
  reportTagRevisions?: boolean;

  /**
   * Defines a way TeamCity reports username for a VCS change.
   *
   * Changing the username style will affect only newly collected changes.
   * Old changes will continue to be stored with the style that was active
   * at the time of collecting changes.
   *
   * Defaults to: `USERID`.
   */
  usernameStyle?: "FULL" | "NAME" | "USERID" | "EMAIL";

  /**
   * Select whether you want to ignore the submodules, or treat them as a part
   * of the source tree. Submodule repositories should either not require
   * authentication or use the same protocol and accept the same authentication
   * as configured in the VCS root.
   *
   * Defaults to: `false`.
   */
  submoduleCheckout?: boolean;

  /**
   * A custom username used for labeling.
   *
   * Format: `Username <email>`
   *
   * This is essentially setting: `user.name` & `user.email`
   * TeamCity will use this identity for any commits it
   * makes back to this repo.
   */
  userForTags?: string;

  /**
   * The authentication method that TeamCity will use to interact with the repo.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/git.html#Authentication+Settings
   */
  auth: AuthMethod;

  /**
   * Convert line-endings of all text files to CRLF (works as setting
   * `core.autocrlf=true` in a repository config).
   *
   * When not selected, no line-endings conversion is performed (works as
   * setting `core.autocrlf=false`).
   *
   * Affects the server-side checkout only.
   *
   * A change to this property causes a clean checkout.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/git.html#Server+Settings
   *
   * Defaults to: `false`.
   */
  serverSideAutoCrlf?: boolean;

  /**
   * Provide the path to a Git executable to be used on the agent.
   *
   * When set to `%env.TEAMCITY_GIT_PATH%`, the automatically detected
   * Git will be used.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/git.html#agentGitPath
   */
  agentGitPath?: string;

  /**
   * Specify here when the `git clean` command is to run on the agent,
   * and which files are to be removed.
   *
   * If a build configuration depends on multiple VCS roots, we suggest that
   * you configure separate agent checkout directories for each of these roots,
   * using VCS checkout rules.
   *
   * This way, `git clean` will never delete these checkout directories during cleaning.
   *
   * Defaults to: `ALWAYS`.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/git.html#GitAgentSettings
   */
  agentCleanPolicy?: "ALWAYS" | "NEVER" | "ON_BRANCH_CHANGE";

  /**
   * This option specifies which files will be removed when `git clean` command is run on agent.
   *
   * Defaults to: `ALL_UNTRACKED`.
   */
  agentCleanFilesPolicy?: "ALL_UNTRACKED" | "IGNORED_ONLY" | "NON_IGNORED_ONLY";

  /**
   * It is recommended to always leave this option enabled.
   *
   * When enabled (default), TeamCity clones the Git repository and creates its
   * mirror under the agent's `system\git` directory. TeamCity uses this mirror
   * as an alternate repository when updating the checkout directory for a build.
   *
   * This speeds up clean checkout (because only the build working directory is
   * cleaned) and saves disk space (as the mirror is the only clone of the given
   * Git repository on an agent).
   *
   * If you disable this option, TeamCity will clone the repository directly
   * under the build's working directory, unless the `teamcity.git.use.local.mirrors`
   * property is set to `true`.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/git.html#Git+mirrors+on+cloud+agents
   */
  useAlternates?: boolean;

  /**
   * Specifies how often TeamCity polls the VCS repository for VCS changes.
   *
   * By default, the global predefined server setting is used that can be
   * modified on the `Administration | Global Settings` page.
   *
   * The interval time starts as soon as the last poll is finished on the
   * per-VCS root basis. Here you can specify a custom interval for the
   * current VCS root.
   *
   * Some public servers may block access if polled too frequently.
   *
   * If TeamCity detects that a VCS commit hook is used to trigger checking for
   * changes, this interval is automatically increased up to the predefined
   * value (4 hours).
   *
   * If the periodical check finds changes undetected via the commit hook,
   * the polling interval is reset to the specified minimum.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/configuring-vcs-roots.html#Common+VCS+Root+Properties
   * also: https://www.jetbrains.com/help/teamcity/2020.2/configuring-vcs-post-commit-hooks-for-teamcity.html
   */
  modificationCheckInterval?: number;

  /**
   * TODO: Strange this appears in the XML but no where in the docs or in the
   * UI as far as I can tell. Perhaps an old deprecated feature? I mean who
   * would set this to true anyway...
   */
  ignoreKnownHosts?: boolean;
}

export type AuthMethod =
  | AuthMethodAnonymous
  | AuthMethodPassword
  | AuthMethodSshKey
  | AuthMethodDefaultSshKey
  | AuthMethodCustomSshKey;

export interface AuthMethodAnonymous {
  /**
   * Select this option to clone a repository with anonymous read access.
   */
  type: "ANONYMOUS";
}

export interface AuthMethodPassword {
  /**
   * Specify a valid username (if there is no username in the clone URL; the
   * username specified here overrides the username from the URL) and a password
   * to be used to clone the repository.
   *
   * For the agent-side checkout, it is supported only if Git 1.7.3+ client is
   * installed on the agent. See TW-18711.
   *
   * For Git hosted from Team Foundation Server 2013, specify NTLM credentials here.
   *
   * You can use a personal access token instead of a password to authenticate
   * in GitHub, Azure DevOps Services, GitLab, and Bitbucket.
   *
   * Note that TeamCity does not support token authentication to hosted
   * Azure DevOps Server (formerly, Team Foundation Server) installations.
   *
   * Beginning August 13, 2021, GitHub will no longer accept passwords when
   * authenticating Git operations on GitHub.com. We highly recommend that you
   * use an access token or SSH key instead of password when configuring a
   * VCS root for a GitHub.com repository.
   */
  type: "PASSWORD";

  /**
   * Specify the username if there is no username in the clone URL.
   * The username specified here overrides the username from the URL.
   */
  username?: string;

  /**
   * This can be a password or a bearer token.
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  secret: `credentialsJSON:${string}`;
}

export interface AuthMethodSshKey {
  /**
   * This refers to an uploaded SSH key.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/ssh-keys-management.html#SSH+Key+Usage
   */
  type: "TEAMCITY_SSH_KEY";

  /**
   * Specify the username if there is no username in the clone URL.
   * The username specified here overrides the username from the URL.
   */
  username?: string;

  /**
   * The name of the uploaded SSH key.
   */
  keyName: string;
}

export interface AuthMethodDefaultSshKey {
  /**
   * Uses the keys available on the file system in the default locations used
   * by common ssh tools.
   *
   * The mapping specified in <USER_HOME>/.ssh/config if the file exists or
   * the private key file <USER_HOME>/.ssh/id_rsa.
   *
   * The files are required to be present on the server and
   * also on the agent if the agent-side checkout is used.
   */
  type: "PRIVATE_KEY_DEFAULT";

  /**
   * Specify the username if there is no username in the clone URL.
   * The username specified here overrides the username from the URL.
   */
  username?: string;
}

export interface AuthMethodCustomSshKey {
  /**
   * Supported only for server-side checkout.
   *
   * When this method is used, fill the Private Key Path field with an absolute
   * path to the private key file on the server machine. If required, specify
   * the passphrase to access your SSH key in the corresponding field.
   */
  type: "PRIVATE_KEY_FILE";

  /**
   * Specify the username if there is no username in the clone URL.
   * The username specified here overrides the username from the URL.
   */
  username?: string;

  /**
   * Specify the path to the private key on the TeamCity server host.
   */
  path: string;

  /**
   * An optional passphrase to upload the custom key.
   *
   * > HINT: If you really truly do not want to use a `credentialsJSON` pointer
   * > here, instead preferring a password parameter you can still do that but
   * > you will have to cast the string. This is hard on purpose, you should
   * > always prefer `credentialsJSON` over a parameter with a password spec.
   */
  passphrase?: `credentialsJSON:${string}`;
}

/** TODO: placeholder for cvs typings */
export interface VcsRootCvs extends VcsRootBase {
  type: "cvs";
}

/** TODO: placeholder for mercurial typings */
export interface VcsRootMercurial extends VcsRootBase {
  type: "mercurial";
}

/** TODO: placeholder for perforce typings */
export interface VcsRootPerforce extends VcsRootBase {
  type: "perforce";
}

/** TODO: placeholder for starteam typings */
export interface VcsRootStarTeam extends VcsRootBase {
  type: "starteam";
}

/** TODO: placeholder for svn typings */
export interface VcsRootSvn extends VcsRootBase {
  type: "svn";
}

/** TODO: placeholder for tfs typings */
export interface VcsRootTfs extends VcsRootBase {
  type: "tfs";
}
