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

import { HttpFile } from '../http/http.ts';

export class BuildQueueLocator {
    'singleValue'?: boolean;
    'agent'?: string;
    'buildType'?: string;
    'count'?: number;
    'id'?: number;
    'item'?: string;
    'personal'?: boolean;
    'pool'?: string;
    'project'?: string;
    'start'?: number;
    'taskId'?: string;
    'user'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "singleValue",
            "baseName": "$singleValue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "agent",
            "baseName": "agent",
            "type": "string",
            "format": "AgentLocator"
        },
        {
            "name": "buildType",
            "baseName": "buildType",
            "type": "string",
            "format": "BuildTypeLocator"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "string",
            "format": "item:(&lt;locator1&gt;),item:(&lt;locator2&gt;...)"
        },
        {
            "name": "personal",
            "baseName": "personal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pool",
            "baseName": "pool",
            "type": "string",
            "format": "AgentPoolLocator"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string",
            "format": "ProjectLocator"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "taskId",
            "baseName": "taskId",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": "UserLocator"
        }    ];

    static getAttributeTypeMap() {
        return BuildQueueLocator.attributeTypeMap;
    }
    
    public constructor() {
    }
}
