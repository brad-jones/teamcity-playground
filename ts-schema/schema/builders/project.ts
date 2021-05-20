import * as x from "../xml/mod.ts";
import * as j from "../json/mod.ts";
import { vcsRootBuilder } from "./vcs_root.ts";
import { buildTypeBuilder } from "./build_type.ts";
import { parameterBuilder } from "./parameter.ts";
import { projectCleanupBuilder } from "./project_cleanup.ts";
import { projectExtensionBuilder } from "./project_extension.ts";
import * as uuid from "https://deno.land/std@0.96.0/uuid/mod.ts";

export interface ProjectFiles {
  projectConfig: [string, x.Project];
  vcsRoots: Record<string, x.VcsRoot>;
  buildTypes: Record<string, x.BuildType>;
}

export function projectBuilder(input: j.Project): ProjectFiles {
  const vcsRoots: Record<string, x.VcsRoot> = {};
  for (const item of input.vcsRoots ?? []) {
    vcsRoots[`.teamcity/${input.id}/vcsRoots/${item.id}.xml`] = vcsRootBuilder(
      item,
    );
  }

  const buildTypes: Record<string, x.BuildType> = {};
  for (const item of input.buildTypes ?? []) {
    buildTypes[`.teamcity/${input.id}/buildTypes/${item.id}.xml`] =
      buildTypeBuilder(
        item,
      );
  }

  let parameters: x.Parameters | undefined = undefined;
  if (typeof input.parameters !== "undefined") {
    parameters = { param: [] };
    for (const p of input.parameters) {
      parameters.param.push(parameterBuilder(p));
    }
  }

  let extensions: x.ProjectExtensions | undefined = undefined;
  if (typeof input.extensions !== "undefined") {
    extensions = { extension: [] };
    for (const e of input.extensions) {
      extensions.extension.push(projectExtensionBuilder(e));
    }
  }

  let cleanup: x.ProjectCleanup | undefined = undefined;
  if (typeof input.cleanUp !== "undefined") {
    cleanup = projectCleanupBuilder(input.cleanUp);
  }

  return {
    projectConfig: [`.teamcity/${input.id}/project-config.xml`, {
      "?xml": { "@version": "1.0", "@encoding": "UTF-8" },
      project: {
        "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "@xsi:noNamespaceSchemaLocation":
          "https://www.jetbrains.com/teamcity/schemas/2020.1/project-config.xsd",
        "@uuid": input.uuid ?? uuid.v4.generate(),
        name: input.name,
        description: input.description,
        parameters,
        "project-extensions": extensions,
        cleanup,
      },
    }],
    vcsRoots,
    buildTypes,
  };
}
