import { AllXOR } from "../xor.ts";

export type Parameter =
  & { "@name": string; "@spec"?: string }
  & AllXOR<[
    { "@value": string },
    { "#text": string },
  ]>;
