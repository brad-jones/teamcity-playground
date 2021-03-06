import * as x from "../xml/mod.ts";
import * as j from "../json/mod.ts";

export function projectExtensionBuilder(
  input: j.ProjectExtension,
): x.ProjectExtension {
  let param: x.Parameter[];
  switch (input.type) {
    case "ReportTab":
      param = reportTab(input);
      break;
    case "OAuthProvider":
      param = oAuthProvider(input);
      break;
    case "IssueTracker":
      param = issueTracker(input);
      break;
    case "JetBrains.SharedResources":
      param = sharedResource(input);
      break;
    case "PackageRepository":
      param = packageRepository(input);
      break;
    case "keepRules":
      param = keepRule(input);
      break;
    case "versionedSettings":
      param = versionedSettings(input);
      break;
    default:
      throw new Error("unsupported project extension type");
  }

  return {
    "@id": input.id,
    "@type": input.type,
    parameters: {
      param,
    },
  };
}

function reportTab(input: j.ProjectExtensionReportTab): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "type",
    "@value": input.subType,
  });

  output.push({
    "@name": "title",
    "@value": input.title,
  });

  output.push({
    "@name": "startPage",
    "@value": input.startPage,
  });

  switch (input.subType) {
    case "BuildReportTab":
      // Nothing to do here
      break;
    case "ProjectReportTab":
      projectReportTab(input).forEach((_) => output.push(_));
      break;
    default:
      throw new Error("unsupported report tab sub type");
  }

  return output;
}

function projectReportTab(
  input: j.ProjectExtensionProjectReportTab,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "buildTypeId",
    "@value": input.buildTypeId,
  });

  output.push({
    "@name": "revisionRuleName",
    "@value": input.revisionRuleName,
  });

  if (input.revisionRuleName === "buildNumber") {
    if (typeof input.revisionRuleValue === "undefined") {
      throw new Error(
        "revisionRuleName=buildNumber but no value for revisionRuleValue",
      );
    }
    output.push({
      "@name": "revisionRuleBuildNumber",
      "@value": input.revisionRuleValue,
    });
  }

  if (input.revisionRuleName === "buildTag") {
    if (typeof input.revisionRuleValue === "undefined") {
      throw new Error(
        "revisionRuleName=buildTag but no value for revisionRuleValue",
      );
    }
    output.push({
      "@name": "revisionRuleBuildTag",
      "@value": input.revisionRuleValue,
    });
  }

  return output;
}

function oAuthProvider(input: j.ProjectExtensionOAuthProvider): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "displayName",
    "@value": input.displayName,
  });

  switch (input.providerType) {
    case "AmazonDocker":
      amazonDockerOAuthProvider(input).forEach((_) => output.push(_));
      break;
    case "BitBucketCloud":
      bitBucketCloudOAuthProvider(input).forEach((_) => output.push(_));
      break;
    case "Docker":
      dockerOAuthProvider(input).forEach((_) => output.push(_));
      break;
    case "Github":
      gitHubOAuthProvider(input).forEach((_) => output.push(_));
      break;
    case "Gitlab":
      gitLabOAuthProvider(input).forEach((_) => output.push(_));
      break;
    case "JetBrains Space":
      jetBrainsSpaceOAuthProvider(input).forEach((_) => output.push(_));
      break;
    case "slackConnection":
      slackConnectionOAuthProvider(input).forEach((_) => output.push(_));
      break;
    case "tfs":
      tfsOAuthProvider(input).forEach((_) => output.push(_));
      break;

    default:
      throw new Error("unsupported oAuth providerType");
  }

  return output;
}

function amazonDockerOAuthProvider(
  input: j.ProjectExtensionOAuthProviderAmazonDocker,
): x.Parameter[] {
  const output: x.Parameter[] = [{
    "@name": "providerType",
    "@value": "AmazonDocker",
  }];

  output.push({
    "@name": "aws.region.name",
    "@value": input.region,
  });

  output.push({
    "@name": "registryId",
    "@value": input.registryID,
  });

  output.push({
    "@name": "aws.use.default.credential.provider.chain",
    "@value": input.auth ? "false" : "true",
  });

  if (typeof input.auth !== "undefined") {
    output.push({
      "@name": "aws.access.key.id",
      "@value": input.auth.accessKeyId,
    });
    output.push({
      "@name": "secure:aws.secret.access.key",
      "@value": input.auth.secretAccessKey,
    });
  }

  output.push({
    "@name": "aws.credentials.type",
    "@value": input.role ? "aws.temp.credentials" : "aws.access.keys",
  });

  if (typeof input.role !== "undefined") {
    output.push({
      "@name": "aws.iam.role.arn",
      "@value": input.role.arn,
    });

    if (typeof input.role.externalID !== "undefined") {
      output.push({
        "@name": "aws.external.id",
        "@value": input.role.externalID,
      });
    }
  }

  return output;
}

function bitBucketCloudOAuthProvider(
  input: j.ProjectExtensionOAuthProviderBitBucketCloud,
): x.Parameter[] {
  const output: x.Parameter[] = [
    { "@name": "providerType", "@value": "BitBucketCloud" },
  ];

  output.push({ "@name": "clientId", "@value": input.key });
  output.push({ "@name": "secure:clientSecret", "@value": input.secret });

  return output;
}

function dockerOAuthProvider(
  input: j.ProjectExtensionOAuthProviderDocker,
): x.Parameter[] {
  const output: x.Parameter[] = [
    { "@name": "providerType", "@value": "Docker" },
  ];

  output.push({ "@name": "repositoryUrl", "@value": input.repositoryUrl });

  if (typeof input.auth !== "undefined") {
    output.push({ "@name": "userName", "@value": input.auth.username });
    output.push({ "@name": "secure:userPass", "@value": input.auth.password });
  }

  return output;
}

function gitHubOAuthProvider(
  input: j.ProjectExtensionOAuthProviderGithub,
): x.Parameter[] {
  const output: x.Parameter[] = [
    {
      "@name": "providerType",
      "@value": input.serverUrl ? "GHE" : "GitHub",
    },
  ];

  output.push({
    "@name": "gitHubUrl",
    "@value": input.serverUrl ?? "https://github.com/",
  });

  output.push({
    "@name": "clientId",
    "@value": input.clientId,
  });

  output.push({
    "@name": "secure:clientSecret",
    "@value": input.secret,
  });

  // NOTE: This parameter does not surface in the UI anywhere
  // & only appears for the github.com provider.
  if (typeof input.serverUrl === "undefined") {
    output.push({
      "@name": "defaultTokenScope",
      "@value": "public_repo,repo,repo:status,write:repo_hook",
    });
  }

  return output;
}

function gitLabOAuthProvider(
  input: j.ProjectExtensionOAuthProviderGitlab,
): x.Parameter[] {
  const output: x.Parameter[] = [
    {
      "@name": "providerType",
      "@value": input.serverUrl ? "GitLabCEorEE" : "GitLabCom",
    },
  ];

  if (typeof input.serverUrl !== "undefined") {
    output.push({ "@name": "gitLabUrl", "@value": input.serverUrl });
  }

  output.push({
    "@name": "clientId",
    "@value": input.clientId,
  });

  output.push({
    "@name": "secure:clientSecret",
    "@value": input.secret,
  });

  return output;
}

function jetBrainsSpaceOAuthProvider(
  input: j.ProjectExtensionOAuthProviderJetBrainsSpace,
): x.Parameter[] {
  const output: x.Parameter[] = [
    { "@name": "providerType", "@value": "JetBrains Space" },
  ];

  output.push({ "@name": "spaceServerUrl", "@value": input.serverUrl });
  output.push({ "@name": "spaceClientId", "@value": input.clientId });
  output.push({ "@name": "secure:spaceClientSecret", "@value": input.secret });

  return output;
}

function slackConnectionOAuthProvider(
  input: j.ProjectExtensionOAuthProviderSlackConnection,
): x.Parameter[] {
  const output: x.Parameter[] = [
    { "@name": "providerType", "@value": "slackConnection" },
  ];

  output.push({ "@name": "clientId", "@value": input.clientId });
  output.push({ "@name": "secure:token", "@value": input.botToken });
  output.push({ "@name": "secure:clientSecret", "@value": input.clientSecret });

  return output;
}

function tfsOAuthProvider(
  input: j.ProjectExtensionOAuthProviderTfs,
): x.Parameter[] {
  const output: x.Parameter[] = [
    { "@name": "providerType", "@value": "tfs" },
    { "@name": "type", "@value": "token" }, // NOTE: This seemed to be hard coded thing in the XML
  ];

  output.push({ "@name": "serverUrl", "@value": input.serverUrl });
  output.push({ "@name": "secure:accessToken", "@value": input.accessToken });

  return output;
}

function issueTracker(input: j.ProjectExtensionIssueTracker): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "name",
    "@value": input.displayName,
  });

  output.push({
    "@name": "type",
    "@value": input.providerType,
  });

  switch (input.providerType) {
    case "BitBucketIssues":
      bitBucketIssueTracker(input).forEach((_) => output.push(_));
      break;
    case "bugzilla":
      bugzillaIssueTracker(input).forEach((_) => output.push(_));
      break;
    case "GithubIssues":
      githubIssueTracker(input).forEach((_) => output.push(_));
      break;
    case "jira":
      jiraIssueTracker(input).forEach((_) => output.push(_));
      break;
    case "tfs":
      tfsIssueTracker(input).forEach((_) => output.push(_));
      break;
    case "youtrack":
      youtrackIssueTracker(input).forEach((_) => output.push(_));
      break;
    default:
      throw new Error("unsupported issue tracker providerType");
  }

  return output;
}

function bitBucketIssueTracker(
  input: j.ProjectExtensionIssueTrackerBitBucket,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "repository",
    "@value": input.repositoryUrl,
  });

  output.push({
    "@name": "pattern",
    "@value": input.pattern ?? "#(\d+)",
  });

  output.push({
    "@name": "authType",
    "@value": input.auth ? "loginpassword" : "anonymous",
  });

  if (typeof input.auth !== "undefined") {
    output.push({ "@name": "username", "@value": input.auth.username });
    output.push({ "@name": "secure:password", "@value": input.auth.password });
  }

  return output;
}

function bugzillaIssueTracker(
  input: j.ProjectExtensionIssueTrackerBugzilla,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "host",
    "@value": input.serverUrl,
  });

  output.push({
    "@name": "pattern",
    "@value": input.pattern ?? "#(\d+)",
  });

  output.push({
    "@name": "authType",
    "@value": input.auth ? "loginpassword" : "anonymous",
  });

  if (typeof input.auth !== "undefined") {
    output.push({ "@name": "username", "@value": input.auth.username });
    output.push({ "@name": "secure:password", "@value": input.auth.password });
  }

  return output;
}

function githubIssueTracker(
  input: j.ProjectExtensionIssueTrackerGithub,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "repository",
    "@value": input.repositoryUrl,
  });

  output.push({
    "@name": "pattern",
    "@value": input.pattern ?? "#(\d+)",
  });

  output.push({
    "@name": "authType",
    "@value": input.auth
      ? (input.auth.token ? "accesstoken" : "loginpassword")
      : "anonymous",
  });

  if (typeof input.auth !== "undefined") {
    if (typeof input.auth.token !== "undefined") {
      output.push({
        "@name": "secure:accessToken",
        "@value": input.auth.token,
      });
    }
    if (
      typeof input.auth.username !== "undefined" &&
      typeof input.auth.password !== "undefined"
    ) {
      output.push({
        "@name": "username",
        "@value": input.auth.username,
      });
      output.push({
        "@name": "secure:password",
        "@value": input.auth.password,
      });
    }
  }

  return output;
}

function jiraIssueTracker(
  input: j.ProjectExtensionIssueTrackerJira,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "host",
    "@value": input.serverUrl,
  });

  const keys = input?.projectKeys ?? [];
  if (keys.length > 0) {
    output.push({ "@name": "autoSync", "@value": "false" });
    output.push({ "@name": "idPrefix", "@value": keys.join(" ") });
  } else {
    output.push({ "@name": "autoSync", "@value": "true" });
  }

  output.push({ "@name": "username", "@value": input.username });
  output.push({ "@name": "secure:password", "@value": input.password });

  if (typeof input.oAuth !== "undefined") {
    output.push({
      "@name": "jiraCloudClientId",
      "@value": input.oAuth.clientId,
    });
    output.push({
      "@name": "secure:jiraCloudServerSecret",
      "@value": input.oAuth.clientSecret,
    });
  }

  return output;
}

function youtrackIssueTracker(
  input: j.ProjectExtensionIssueTrackerYoutrack,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "host",
    "@value": input.serverUrl,
  });

  const ids = input?.projectIDs ?? [];
  if (ids.length > 0) {
    output.push({ "@name": "autoSync", "@value": "false" });
    output.push({ "@name": "idPrefix", "@value": ids.join(" ") });
  } else {
    output.push({ "@name": "autoSync", "@value": "true" });
  }

  output.push({
    "@name": "authType",
    "@value": input.auth.token ? "accesstoken" : "loginpassword",
  });

  if (typeof input.auth.token !== "undefined") {
    output.push({ "@name": "secure:accessToken", "@value": input.auth.token });
  }

  if (
    typeof input.auth.username !== "undefined" &&
    typeof input.auth.password !== "undefined"
  ) {
    output.push({ "@name": "username", "@value": input.auth.username });
    output.push({ "@name": "secure:password", "@value": input.auth.password });
  }

  return output;
}

function tfsIssueTracker(
  input: j.ProjectExtensionIssueTrackerTfs,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "host",
    "@value": input.serverUrl,
  });

  output.push({
    "@name": "pattern",
    "@value": input.pattern ?? "#(\d+)",
  });

  if (typeof input.auth.token !== "undefined") {
    output.push({ "@name": "secure:password", "@value": input.auth.token });
  } else {
    if (
      typeof input.auth.username !== "undefined" &&
      typeof input.auth.password !== "undefined"
    ) {
      output.push({
        "@name": "username",
        "@value": input.auth.username,
      });
      output.push({
        "@name": "secure:password",
        "@value": input.auth.password,
      });
    } else {
      throw new Error(
        "tfs issue tracker expects a single token for auth or a user/pass pair",
      );
    }
  }

  return output;
}

function sharedResource(
  input: j.ProjectExtensionSharedResource,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "name",
    "@value": input.name,
  });

  output.push({
    "@name": "enabled",
    "@value": (input.enabled ?? true) ? "true" : "false",
  });

  output.push({
    "@name": "type",
    "@value": input.quota ? "quoted" : "custom",
  });

  if (typeof input.quota !== "undefined") {
    output.push({
      "@name": "quota",
      "@value": `${input.quota}`,
    });
  }

  if (typeof input.values !== "undefined") {
    output.push({
      "@name": "values",
      "#text": input.values.join("\n"),
    });
  }

  return output;
}

function packageRepository(
  input: j.ProjectExtensionPackageRepository,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "type",
    "@value": input.providerType,
  });

  output.push({
    "@name": "name",
    "@value": input.displayName,
  });

  if (typeof input.description !== "undefined") {
    output.push({
      "@name": "description",
      "@value": input.description,
    });
  }

  switch (input.providerType) {
    case "nuget":
      nugetPackageRepository(input).forEach((_) => output.push(_));
      break;
    default:
      throw new Error("unsupported package repository providerType");
  }

  return output;
}

function nugetPackageRepository(
  input: j.ProjectExtensionPackageRepositoryNuget,
): x.Parameter[] {
  return [{
    "@name": "description",
    "@value": (input.indexPackages ?? false) ? "true" : "false",
  }];
}

function keepRule(input: j.ProjectExtensionKeepRules): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "ruleDisabled",
    "@value": (input.enabled ?? true) ? "true" : "false",
  });

  if (input.keep.length === 0 && input.keep[0] === "everything") {
    input.keep = ["artifacts", "logs", "statistics"];
  }

  input.keep.forEach((v, i) => {
    i++;
    output.push({
      "@name": `keepData.${i}.type`,
      "@value": v,
    });
    if (v === "artifacts") {
      output.push({
        "@name": `keepData.${i}.artifactPatterns`,
        "#text": (input?.artifactPatterns ?? ["+:**/*"]).join("\n"),
      });
    }
  });

  output.push({
    "@name": "preserveArtifacts",
    "@value": (input?.keepDependantArtifacts ?? true) ? "true" : "false",
  });

  let filterCount = 0;

  const status = input.filter?.status ?? "successful";
  if (status !== "any") {
    filterCount++;
    output.push({
      "@name": `filters.${filterCount}.type`,
      "@value": "buildStatus",
    });
    output.push({
      "@name": `filters.${filterCount}.status`,
      "@value": status,
    });
  }

  if (typeof input.filter?.personal !== "undefined") {
    filterCount++;
    output.push({
      "@name": `filters.${filterCount}.type`,
      "@value": "personalBuild",
    });
    output.push({
      "@name": `filters.${filterCount}.personal`,
      "@value": input.filter.personal ? "personal" : "not_personal",
    });
  }

  if (typeof input.filter?.tags !== "undefined") {
    filterCount++;
    output.push({
      "@name": `filters.${filterCount}.type`,
      "@value": "tags",
    });
    output.push({
      "@name": `filters.${filterCount}.tagsList`,
      "#text": input.filter.tags.join("\n"),
    });
  }

  if (typeof input.filter?.branches !== "undefined") {
    filterCount++;
    output.push({
      "@name": `filters.${filterCount}.type`,
      "@value": "branchPattern",
    });
    output.push({
      "@name": `filters.${filterCount}.pattern`,
      "#text": input.filter.branches.join("\n"),
    });
  }

  if (typeof input.filter?.onlyActiveBranches !== "undefined") {
    filterCount++;
    output.push({
      "@name": `filters.${filterCount}.type`,
      "@value": "branchActivity",
    });
    output.push({
      "@name": `filters.${filterCount}.activity`,
      "@value": input.filter.onlyActiveBranches ? "active" : "inactive",
    });
  }

  output.push({
    "@name": "limit.type",
    "@value": input.range?.type ?? "all",
  });

  if (typeof input?.range !== "undefined") {
    output.push({
      "@name": `limit.${
        input.range.type === "lastNBuilds" ? "buildsCount" : "daysCount"
      }`,
      "@value": input.range.n.toString(),
    });
  }

  if (input.filter?.perBranch === true) {
    output.push({
      "@name": "partitions.1.type",
      "@value": "perBranch",
    });
  }

  return output;
}

function versionedSettings(
  input: j.ProjectExtensionVersionedSettings,
): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "enabled",
    "@value": (input.enabled ?? true) ? "true" : "false",
  });

  output.push({
    "@name": "rootId",
    "@value": input.vscRootID,
  });

  output.push({
    "@name": "buildSettings",
    "@value": input.mode ?? "PREFER_VCS",
  });

  output.push({
    "@name": "showChanges",
    "@value": (input.showChanges ?? true) ? "true" : "false",
  });

  if (input.useCredentialsJSON ?? true) {
    output.push({
      "@name": "credentialsStorageType",
      "@value": "credentialsJSON",
    });
  }

  const format = input.format ?? "xml";
  if (format === "kotlin") {
    output.push({ "@name": "format", "@value": "kotlin" });
    output.push({ "@name": "useRelativeIds", "@value": "true" });
  } else {
    if (typeof format === "object") {
      output.push({
        "@name": "format",
        "@value": "kotlin",
      });

      output.push({
        "@name": "useRelativeIds",
        "@value": (format.generatePortableDSL ?? true) ? "true" : "false",
      });

      for (const [k, v] of Object.entries(format.context ?? {})) {
        output.push({ "@name": `context.${k}`, "@value": v });
      }
    }
  }

  return output;
}
