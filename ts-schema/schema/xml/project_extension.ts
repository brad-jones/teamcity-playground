import { Parameters } from "./parameter.ts";

export interface ProjectExtensions {
  extension: ProjectExtension[];
}

export interface ProjectExtension {
  "@id": string;
  "@type": string;
  parameters: Parameters;
}
