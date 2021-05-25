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

import { Agent } from './Agent.ts';
import { AgentPool } from './AgentPool.ts';
import { Build } from './Build.ts';
import { BuildType } from './BuildType.ts';
import { Change } from './Change.ts';
import { Group } from './Group.ts';
import { Problem } from './Problem.ts';
import { Project } from './Project.ts';
import { Test } from './Test.ts';
import { User } from './User.ts';
import { VcsRoot } from './VcsRoot.ts';
import { HttpFile } from '../http/http.ts';

export class RelatedEntity {
    'type'?: string;
    'unknown'?: boolean;
    'internalId'?: string;
    'text'?: string;
    'build'?: Build;
    'buildType'?: BuildType;
    'project'?: Project;
    'user'?: User;
    'group'?: Group;
    'test'?: Test;
    'problem'?: Problem;
    'agent'?: Agent;
    'vcsRoot'?: VcsRoot;
    'change'?: Change;
    'agentPool'?: AgentPool;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "unknown",
            "baseName": "unknown",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "internalId",
            "baseName": "internalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "build",
            "baseName": "build",
            "type": "Build",
            "format": ""
        },
        {
            "name": "buildType",
            "baseName": "buildType",
            "type": "BuildType",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "Project",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "User",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "Group",
            "format": ""
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "Test",
            "format": ""
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem",
            "format": ""
        },
        {
            "name": "agent",
            "baseName": "agent",
            "type": "Agent",
            "format": ""
        },
        {
            "name": "vcsRoot",
            "baseName": "vcsRoot",
            "type": "VcsRoot",
            "format": ""
        },
        {
            "name": "change",
            "baseName": "change",
            "type": "Change",
            "format": ""
        },
        {
            "name": "agentPool",
            "baseName": "agentPool",
            "type": "AgentPool",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelatedEntity.attributeTypeMap;
    }
    
    public constructor() {
    }
}
