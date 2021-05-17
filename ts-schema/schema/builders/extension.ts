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

function reportTab(
  input: j.ExtensionBuildReportTab | j.ExtensionProjectReportTab,
): x.Parameter[] {
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
