import * as x from "../xml/mod.ts";
import * as j from "../json/mod.ts";
import * as uuid from "https://deno.land/std@0.96.0/uuid/mod.ts";

export function buildTypeBuilder(input: j.BuildType): x.BuildType {
  return {
    "?xml": { "@version": "1.0", "@encoding": "UTF-8" },
    "build-type": {
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@xsi:noNamespaceSchemaLocation":
        "https://www.jetbrains.com/teamcity/schemas/2020.1/project-config.xsd",
      "@uuid": input.uuid ?? uuid.v4.generate(),
      name: input.name,
      description: input.description,
      settings: {},
    },
  };
}
