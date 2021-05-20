export interface ProjectCleanup {
  /**
   * Whether or not the defined clean-up policies are actually enabled or not.
   *
   * Defaults to `false`.
   */
  disableCleanupPolicies?: boolean;

  /**
   * This setting affects clean-up of artifacts in builds of the dependency
   * build configurations.
   *
   * - `undefined` = Use default
   * - `true` = Prevent clean-up
   * - `false` = Do not prevent clean-up
   */
  preventDependenciesArtifactsFromCleanup?: boolean;

  /**
   * A list of base policies to apply to this project.
   *
   * Base policies allows for preserving build data using simple settings.
   * The policies are applied considering branches, personal and canceled
   * builds, etc...
   *
   * > HINT: You can combine these with `ProjectExtensionKeepRules` to cater
   * >       for more complex needs.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/clean-up.html#Base+Rule
   */
  policies?: ProjectCleanupPolicy[];
}

export type ProjectCleanupPolicy =
  | ProjectCleanupPolicyEverything
  | ProjectCleanupPolicyArtifacts
  | ProjectCleanupPolicyHistory;

export interface ProjectCleanupPolicyBase {
  /**
   * Anything older than X days since the last build will be deleted.
   *
   * > HINT: This can be combined with `keepBuilds` but at least one
   * >       of these options must be defined.
   */
  keepDays?: number;

  /**
   * Only X number of successfully completed builds will be kept.
   */
  keepBuilds?: number;
}

export interface ProjectCleanupPolicyEverything
  extends ProjectCleanupPolicyBase {
  /**
   * Clean everything including artifacts, history, and statistical data.
   */
  cleanupLevel: "EVERYTHING";
}

export interface ProjectCleanupPolicyHistory extends ProjectCleanupPolicyBase {
  /**
   * Clean history and statistical data.
   */
  cleanupLevel: "HISTORY_ENTRY";
}

export interface ProjectCleanupPolicyArtifacts
  extends ProjectCleanupPolicyBase {
  /**
   * Clean published artifacts.
   */
  cleanupLevel: "ARTIFACTS";

  /**
   * An optional list of artifact patterns to match against.
   * In the form of `+:/-:` Ant-style pattern wildcard.
   *
   * > HINT: If left undefined any artifact that matches the `keepDays` /
   * >       `keepBuilds` properties will be deleted.
   */
  patterns?: string[];
}
