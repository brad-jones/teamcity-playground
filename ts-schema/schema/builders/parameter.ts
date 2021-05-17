import * as x from "../xml/mod.ts";
import * as j from "../json/mod.ts";

export function parameterBuilder(input: j.Parameter): x.Parameter {
  const p: Partial<x.Parameter> = { "@name": input.name };

  // TeamCity often uses newlines as separators for lists of things, in such
  // cases we set the value to the XML nodes inner content instead of to a
  // value attribute. The XML Writer will insert CDATA tags as required.
  if (input.value.includes("\n")) {
    p["#text"] = input.value;
  } else {
    p["@value"] = input.value;
  }

  if (typeof input.spec !== "undefined") {
    p["@spec"] = specBuilder(input.spec);
  }

  return p as x.Parameter;
}

/** TODO: escape quotes??? */
function specBuilder(input: j.ParameterSpec): string {
  let output = `${input.type} `;

  if (typeof input.label === "string") {
    output += `label='${input.label}' `;
  }

  if (typeof input.display === "string") {
    output += `display='${input.display}' `;
  }

  if (typeof input.description === "string") {
    output += `description='${input.description}' `;
  }

  if (typeof input.readOnly === "boolean" && input.readOnly) {
    output += `readOnly='true' `;
  }

  switch (input.type) {
    case "password":
      // Nothing to do here
      break;
    case "text":
      output += `validationMode='${input?.validationMode ?? "any"}' `;

      if (typeof input.validationMessage === "string") {
        output += `validationMessage='${input.validationMessage}' `;
      }

      if (input?.validationMode === "regex") {
        if (typeof input?.regexp !== "string") {
          throw new Error("validationMode=regex but no regex has been set");
        }
        output += `regexp='${input.regexp}' `;
      }

      break;
    case "checkbox":
      output += `checkedValue='${input.checkedValue}' `;

      if (typeof input.uncheckedValue === "string") {
        output += `uncheckedValue='${input.uncheckedValue}' `;
      }

      break;
    case "select": {
      if (typeof input.multiple === "boolean" && input.multiple) {
        output += `multiple='true' `;
      }

      if (typeof input.valueSeparator === "string") {
        output += `valueSeparator='${input.valueSeparator}' `;
      }

      const data = Array.isArray(input.items)
        ? input.items
        : Object.values(input.items);
      data.forEach((v, i) => {
        output += `data_${i++}='${v}' `;
      });

      if (!Array.isArray(input.items)) {
        Object.keys(input.items).forEach((v, i) => {
          output += `label_${i++}='${v}' `;
        });
      }

      break;
    }
    default:
      throw new Error("unsupported parameter spec type");
  }

  return output.trimEnd();
}
