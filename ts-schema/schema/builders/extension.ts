import * as x from "../xml/mod.ts";
import * as j from "../json/mod.ts";

export function projectExtensionBuilder(
  input: j.Extension,
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

function reportTab(input: j.ExtensionReportTab): x.Parameter[] {
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

function projectReportTab(input: j.ExtensionProjectReportTab): x.Parameter[] {
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

function oAuthProvider(input: j.ExtensionOAuthProvider): x.Parameter[] {
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
  input: j.ExtensionOAuthProviderAmazonDocker,
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
  input: j.ExtensionOAuthProviderBitBucketCloud,
): x.Parameter[] {
  const output: x.Parameter[] = [
    { "@name": "providerType", "@value": "BitBucketCloud" },
  ];

  output.push({ "@name": "clientId", "@value": input.key });
  output.push({ "@name": "secure:clientSecret", "@value": input.secret });

  return output;
}

function dockerOAuthProvider(
  input: j.ExtensionOAuthProviderDocker,
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
  input: j.ExtensionOAuthProviderGithub,
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
  input: j.ExtensionOAuthProviderGitlab,
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
  input: j.ExtensionOAuthProviderJetBrainsSpace,
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
  input: j.ExtensionOAuthProviderSlackConnection,
): x.Parameter[] {
  const output: x.Parameter[] = [
    { "@name": "providerType", "@value": "slackConnection" },
  ];

  output.push({ "@name": "clientId", "@value": input.clientId });
  output.push({ "@name": "secure:token", "@value": input.botToken });
  output.push({ "@name": "secure:clientSecret", "@value": input.clientSecret });

  return output;
}

function tfsOAuthProvider(input: j.ExtensionOAuthProviderTfs): x.Parameter[] {
  const output: x.Parameter[] = [
    { "@name": "providerType", "@value": "tfs" },
    { "@name": "type", "@value": "token" }, // NOTE: This seemed to be hard coded thing in the XML
  ];

  output.push({ "@name": "serverUrl", "@value": input.serverUrl });
  output.push({ "@name": "secure:accessToken", "@value": input.accessToken });

  return output;
}

function issueTracker(input: j.ExtensionIssueTracker): x.Parameter[] {
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
  input: j.ExtensionIssueTrackerBitBucket,
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
  input: j.ExtensionIssueTrackerBugzilla,
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
  input: j.ExtensionIssueTrackerGithub,
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
  input: j.ExtensionIssueTrackerJira,
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
  input: j.ExtensionIssueTrackerYoutrack,
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
  input: j.ExtensionIssueTrackerTfs,
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

function sharedResource(input: j.ExtensionSharedResource): x.Parameter[] {
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

function packageRepository(input: j.ExtensionPackageRepository): x.Parameter[] {
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
  input: j.ExtensionPackageRepositoryNuget,
): x.Parameter[] {
  return [{
    "@name": "description",
    "@value": (input.indexPackages ?? false) ? "true" : "false",
  }];
}

function keepRule(input: j.ExtensionKeepRules): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "ruleDisabled",
    "@value": "true | false",
  });

  output.push({
    "@name": "keepData.X.type",
    "@value": "everything | statistics | artifacts | logs",
  });

  output.push({
    "@name": "limit.type",
    "@value":
      "all | lastNDays | lastNBuilds | NDaysSinceLastBuild | NDaysSinceLastSuccessfulBuild",
  });

  /*
  Apply rule: To each selected branch / To all branches as a set

  The filters can be applied per every matching branch, or to all builds in
  matching branches as one set. This affects how many builds are preserved:
  e.g. 30 last builds in each branch or 30 last builds among all branches.

  The absense of this means the second option
  */
  output.push({
    "@name": "partitions.1.type",
    "@value": "perBranch",
  });

  output.push({
    "@name": "preserveArtifacts",
    "@value": "true | false",
  });

  output.push({
    "@name": "filters.1.personal",
    "@value": "personal | not_personal",
  });

  output.push({
    "@name": "filters.1.type",
    "@value": "personalBuild | branchActivity |  branchPattern | buildStatus",
  });

  output.push({
    "@name": "filters.1.activity",
    "@value": "active | inactive",
  });

  output.push({
    "@name": "limit.daysCount",
    "@value": "30",
  });

  output.push({
    "@name": "limit.buildsCount",
    "@value": "30",
  });

  output.push({
    "@name": "keepData.1.artifactPatterns",
    "#text": "",
  });

  output.push({
    "@name": "filters.1.status",
    "@value": "successful | failed",
  });

  return output;
}
