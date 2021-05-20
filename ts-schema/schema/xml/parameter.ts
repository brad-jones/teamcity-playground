import { AllXOR } from "../xor.ts";

export interface Parameters {
  param: Parameter[];
}

export type Parameter =
  & { "@name": string; "@spec"?: string }
  & AllXOR<[
    { "@value": string },
    { "#text": string },
  ]>;
