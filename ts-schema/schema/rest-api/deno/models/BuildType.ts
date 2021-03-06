/**
 * TeamCity REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2018.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AgentRequirements } from './AgentRequirements.ts';
import { Agents } from './Agents.ts';
import { ArtifactDependencies } from './ArtifactDependencies.ts';
import { Branches } from './Branches.ts';
import { BuildTypes } from './BuildTypes.ts';
import { Builds } from './Builds.ts';
import { Features } from './Features.ts';
import { Investigations } from './Investigations.ts';
import { Links } from './Links.ts';
import { Project } from './Project.ts';
import { Properties } from './Properties.ts';
import { SnapshotDependencies } from './SnapshotDependencies.ts';
import { Steps } from './Steps.ts';
import { Triggers } from './Triggers.ts';
import { VcsRootEntries } from './VcsRootEntries.ts';
import { VcsRootInstances } from './VcsRootInstances.ts';
import { HttpFile } from '../http/http.ts';

export class BuildType {
    'id'?: string;
    'internalId'?: string;
    'name'?: string;
    'templateFlag'?: boolean;
    'type'?: string;
    'paused'?: boolean;
    'uuid'?: string;
    'description'?: string;
    'projectName'?: string;
    'projectId'?: string;
    'projectInternalId'?: string;
    'href'?: string;
    'webUrl'?: string;
    'inherited'?: boolean;
    'links'?: Links;
    'project'?: Project;
    'templates'?: BuildTypes;
    'template'?: BuildType;
    'vcsRootEntries'?: VcsRootEntries;
    'settings'?: Properties;
    'parameters'?: Properties;
    'steps'?: Steps;
    'features'?: Features;
    'triggers'?: Triggers;
    'snapshotDependencies'?: SnapshotDependencies;
    'artifactDependencies'?: ArtifactDependencies;
    'agentRequirements'?: AgentRequirements;
    'branches'?: Branches;
    'builds'?: Builds;
    'investigations'?: Investigations;
    'compatibleAgents'?: Agents;
    'vcsRootInstances'?: VcsRootInstances;
    'locator'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "internalId",
            "baseName": "internalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateFlag",
            "baseName": "templateFlag",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "paused",
            "baseName": "paused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectInternalId",
            "baseName": "projectInternalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": ""
        },
        {
            "name": "webUrl",
            "baseName": "webUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "inherited",
            "baseName": "inherited",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Links",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "Project",
            "format": ""
        },
        {
            "name": "templates",
            "baseName": "templates",
            "type": "BuildTypes",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "BuildType",
            "format": ""
        },
        {
            "name": "vcsRootEntries",
            "baseName": "vcs-root-entries",
            "type": "VcsRootEntries",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "Properties",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Properties",
            "format": ""
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "Steps",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Features",
            "format": ""
        },
        {
            "name": "triggers",
            "baseName": "triggers",
            "type": "Triggers",
            "format": ""
        },
        {
            "name": "snapshotDependencies",
            "baseName": "snapshot-dependencies",
            "type": "SnapshotDependencies",
            "format": ""
        },
        {
            "name": "artifactDependencies",
            "baseName": "artifact-dependencies",
            "type": "ArtifactDependencies",
            "format": ""
        },
        {
            "name": "agentRequirements",
            "baseName": "agent-requirements",
            "type": "AgentRequirements",
            "format": ""
        },
        {
            "name": "branches",
            "baseName": "branches",
            "type": "Branches",
            "format": ""
        },
        {
            "name": "builds",
            "baseName": "builds",
            "type": "Builds",
            "format": ""
        },
        {
            "name": "investigations",
            "baseName": "investigations",
            "type": "Investigations",
            "format": ""
        },
        {
            "name": "compatibleAgents",
            "baseName": "compatibleAgents",
            "type": "Agents",
            "format": ""
        },
        {
            "name": "vcsRootInstances",
            "baseName": "vcsRootInstances",
            "type": "VcsRootInstances",
            "format": ""
        },
        {
            "name": "locator",
            "baseName": "locator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BuildType.attributeTypeMap;
    }
    
    public constructor() {
    }
}

