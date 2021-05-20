import * as x from "../xml/mod.ts";
import * as j from "../json/mod.ts";

export function projectCleanupBuilder(
  input: j.ProjectCleanup,
): x.ProjectCleanup {
  const cleanup: x.ProjectCleanup = {
    options: {
      option: [{
        "@name": "disableCleanupPolicies",
        "@value": (input.disableCleanupPolicies ?? false) ? "true" : "false",
      }],
    },
  };

  if (
    typeof input.preventDependenciesArtifactsFromCleanup !==
      "undefined"
  ) {
    cleanup.options?.option.push({
      "@name": "preventDependenciesArtifactsFromCleanup",
      "@value": input.preventDependenciesArtifactsFromCleanup
        ? "true"
        : "false",
    });
  }

  if (Array.isArray(input.policies) && input.policies.length > 0) {
    cleanup.policy = [];

    for (const jPolicy of input.policies) {
      const xPolicy: x.ProjectCleanupPolicy = {
        "@type": "daysAndBuilds",
        "@cleanup-level": jPolicy.cleanupLevel,
        parameters: {
          param: [],
        },
      };

      if (
        typeof jPolicy.keepDays === "undefined" &&
        typeof jPolicy.keepBuilds === "undefined"
      ) {
        throw new Error(
          "project cleanup policy needs to define at least one of `keepDays` or `keepBuilds`",
        );
      }

      if (typeof jPolicy.keepDays !== "undefined") {
        xPolicy.parameters.param.push({
          "@name": "keepDays.count",
          "@value": jPolicy.keepDays.toString(),
        });
      }

      if (typeof jPolicy.keepBuilds !== "undefined") {
        xPolicy.parameters.param.push({
          "@name": "keepBuilds.count",
          "@value": jPolicy.keepBuilds.toString(),
        });
      }

      if (jPolicy.cleanupLevel === "ARTIFACTS") {
        if (typeof jPolicy.patterns !== "undefined") {
          xPolicy.parameters.param.push({
            "@name": "artifactPatterns",
            "#text": jPolicy.patterns.join("\n"),
          });
        }
      }

      cleanup.policy.push(xPolicy);
    }
  }

  return cleanup;
}
