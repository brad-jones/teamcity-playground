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
