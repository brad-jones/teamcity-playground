import * as x from "../xml/mod.ts";
import * as j from "../json/mod.ts";
import * as uuid from "https://deno.land/std@0.96.0/uuid/mod.ts";

export function vcsRootBuilder(input: j.VcsRoot): x.VcsRoot {
  let param: x.Parameter[];
  switch (input.type) {
    case "jetbrains.git":
      param = gitVcsRoot(input);
      break;
    case "cvs":
      param = cvsVcsRoot(input);
      break;
    case "mercurial":
      param = mercurialVcsRoot(input);
      break;
    case "perforce":
      param = perforceVcsRoot(input);
      break;
    case "starteam":
      param = starteamVcsRoot(input);
      break;
    case "svn":
      param = svnVcsRoot(input);
      break;
    case "tfs":
      param = tfsVcsRoot(input);
      break;
    default:
      throw new Error("unsupported vcs root type");
  }

  return {
    "?xml": { "@version": "1.0", "@encoding": "UTF-8" },
    "vcs-root": {
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@xsi:noNamespaceSchemaLocation":
        "https://www.jetbrains.com/teamcity/schemas/2020.1/project-config.xsd",
      "@type": input.type,
      "@uuid": input.uuid ?? uuid.v4.generate(),
      "modification-check-interval": input.type === "jetbrains.git"
        ? input.modificationCheckInterval
        : undefined,
      name: input.name,
      param,
    },
  };
}

function gitVcsRoot(input: j.VcsRootGit): x.Parameter[] {
  const output: x.Parameter[] = [];

  output.push({
    "@name": "url",
    "@value": input.url,
  });

  if (typeof input.pushUrl !== "undefined") {
    output.push({
      "@name": "pushUrl",
      "@value": input.pushUrl,
    });
  }

  output.push({
    "@name": "branch",
    "@value": input.branch ?? "refs/heads/master",
  });

  if (typeof input.branchSpec !== "undefined") {
    output.push({
      "@name": "teamcity:branchSpec",
      "#text": input.branchSpec.join("\n"),
    });
  }

  output.push({
    "@name": "reportTagRevisions",
    "@value": input?.reportTagRevisions ? "true" : "false",
  });

  output.push({
    "@name": "usernameStyle",
    "@value": input?.usernameStyle ?? "USERID",
  });

  output.push({
    "@name": "submoduleCheckout",
    "@value": input?.submoduleCheckout ? "true" : "false",
  });

  if (typeof input.userForTags !== "undefined") {
    output.push({
      "@name": "userForTags",
      "@value": input.userForTags,
    });
  }

  output.push({
    "@name": "serverSideAutoCrlf",
    "@value": input?.serverSideAutoCrlf ? "true" : "false",
  });

  if (typeof input.agentGitPath !== "undefined") {
    output.push({
      "@name": "agentGitPath",
      "@value": input.agentGitPath,
    });
  }

  output.push({
    "@name": "agentCleanPolicy",
    "@value": input?.agentCleanPolicy ?? "ALWAYS",
  });

  output.push({
    "@name": "agentCleanFilesPolicy",
    "@value": input?.agentCleanFilesPolicy ?? "ALL_UNTRACKED",
  });

  if (typeof input.useAlternates !== "undefined") {
    output.push({
      "@name": "useAlternates",
      "@value": input.useAlternates ? "true" : "false",
    });
  } else {
    output.push({
      "@name": "useAlternates",
      "@value": "true",
    });
  }

  /**
   * TODO: Strange this appears in the XML but no where in the docs or in the
   * UI as far as I can tell. Perhaps an old deprecated feature? I mean who
   * would set this to true anyway...
   */
  output.push({
    "@name": "ignoreKnownHosts",
    "@value": input?.ignoreKnownHosts ? "true" : "false",
  });

  output.push({
    "@name": "authMethod",
    "@value": input.auth.type,
  });

  // deno-lint-ignore no-explicit-any
  const username = (input.auth as any).username as string | undefined;
  if (typeof username === "string") {
    output.push({
      "@name": "username",
      "@value": username,
    });
  }

  switch (input.auth.type) {
    case "ANONYMOUS":
    case "PRIVATE_KEY_DEFAULT":
      // nothing to do here
      break;
    case "PASSWORD":
      output.push({
        "@name": "secure:password",
        "@value": input.auth.secret,
      });
      break;
    case "PRIVATE_KEY_FILE":
      output.push({
        "@name": "privateKeyPath",
        "@value": input.auth.path,
      });

      if (typeof input.auth.passphrase !== "undefined") {
        output.push({
          "@name": "secure:passphrase",
          "@value": input.auth.passphrase,
        });
      }
      break;
    case "TEAMCITY_SSH_KEY":
      output.push({
        "@name": "teamcitySshKey",
        "@value": input.auth.keyName,
      });
      break;
    default:
      throw new Error("unsupported auth type");
  }

  return output;
}

/** TODO: placeholder for cvs converter */
function cvsVcsRoot(input: j.VcsRootCvs): x.Parameter[] {
  return [];
}

/** TODO: placeholder mercurial converter */
function mercurialVcsRoot(input: j.VcsRootMercurial): x.Parameter[] {
  return [];
}

/** TODO: placeholder for perforce converter */
function perforceVcsRoot(input: j.VcsRootPerforce): x.Parameter[] {
  return [];
}

/** TODO: placeholder for starteam converter */
function starteamVcsRoot(input: j.VcsRootStarTeam): x.Parameter[] {
  return [];
}

/** TODO: placeholder for svn converter */
function svnVcsRoot(input: j.VcsRootSvn): x.Parameter[] {
  return [];
}

/** TODO: placeholder for tfs converter */
function tfsVcsRoot(input: j.VcsRootTfs): x.Parameter[] {
  return [];
}
