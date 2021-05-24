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

export class ProblemLocator {
    'affectedProject'?: string;
    'build'?: string;
    'count'?: number;
    'currentlyFailing'?: boolean;
    'currentlyInvestigated'?: boolean;
    'currentlyMuted'?: boolean;
    'id'?: number;
    'identity'?: string;
    'item'?: string;
    'lookupLimit'?: number;
    'start'?: number;
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affectedProject",
            "baseName": "affectedProject",
            "type": "string",
            "format": "ProjectLocator"
        },
        {
            "name": "build",
            "baseName": "build",
            "type": "string",
            "format": "BuildLocator"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currentlyFailing",
            "baseName": "currentlyFailing",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "currentlyInvestigated",
            "baseName": "currentlyInvestigated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "currentlyMuted",
            "baseName": "currentlyMuted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "string",
            "format": ""
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "string",
            "format": "item:(&lt;locator1&gt;),item:(&lt;locator2&gt;...)"
        },
        {
            "name": "lookupLimit",
            "baseName": "lookupLimit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProblemLocator.attributeTypeMap;
    }
    
    public constructor() {
    }
}

