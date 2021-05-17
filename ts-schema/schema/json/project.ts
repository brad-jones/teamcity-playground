import { VcsRoot } from "./vcs_root.ts";
import { Extension } from "./extension.ts";
import { Parameter } from "./parameter.ts";
import { BuildType } from "./build_type.ts";

/**
 * A project is the top level of this schema, start by creating a Project object.
 *
 * see: https://www.jetbrains.com/help/teamcity/2020.2/creating-and-editing-projects.html
 */
export interface Project {
  /**
   * This refers to the parent folder of the generated XML file stored in the
   * .teamcity folder of your repo & ultimately the server's Data Directory.
   * see: https://www.jetbrains.com/help/teamcity/teamcity-data-directory.html
   *
   * For example an id of `Foo_Bar_Baz` results in the file
   * `./.teamcity/Foo_Bar_Baz/project-config.xml` being generated.
   *
   * This id is also used as a reference in many places
   * throughout the rest of this schema & for URLs, etc...
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/identifier.html
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

  /**
   * An optional human friendly description of the project.
   */
  description?: string;

  /**
   * Projects can define configuration parameters which are recursively
   * inherited by all BuildTypes & SubProjects.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/configuring-build-parameters.html
   */
  parameters?: Parameter[];

  /**
   * Each project may define many VcsRoots.
   *
   * A VCS root in TeamCity defines a connection to a version control system.
   * It represents a set of parameters (paths to sources, username, password,
   * and other settings) that determine how TeamCity communicates with a VCS to
   * monitor changes and get sources for a build.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/configuring-vcs-roots.html
   */
  vcsRoots?: VcsRoot[];

  /**
   * Each project can be extended with many plugins and settings.
   *
   * All or most of the things that you see in the left hand side bar of a
   * project configuration page in the user interface of TeamCity, things like
   * Report Tabs, Connections, Shared Resources, Issue Trackers, Clean-Up Rules,
   * Nuget Feeds, etc... are all defined as extension nodes in the XML.
   *
   * In this schema the `Extension` type is a base type and there many other
   * types that better represent all those other things that extend the
   * `Extension` type which you can use here.
   */
  extensions?: Extension[];

  /**
   * A build configuration is a collection of settings used to start a build and
   * group the sequence of the builds in the UI. Examples of build configurations
   * are distribution, integration tests, prepare release distribution, "nightly" build.
   *
   * > HINT: The UI uses Build Configuration terminology but in the XML & Kotlin,
   * > the name Build Type is used instead, for reasons... seriously TeamCity
   * > sort your shit out.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/build-configuration.html
   */
  buildTypes?: BuildType[];

  /**
   * Sub projects can be used to group build configurations and define projects
   * hierarchy within a single project.
   *
   * see: https://www.jetbrains.com/help/teamcity/2020.2/project.html#Project+Hierarchy
   */
  subProjects?: Project[];
}
