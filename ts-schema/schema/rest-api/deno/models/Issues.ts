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

import { Issue } from './Issue.ts';
import { HttpFile } from '../http/http.ts';

export class Issues {
    'issues'?: Array<Issue>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "issues",
            "baseName": "issues",
            "type": "Array<Issue>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Issues.attributeTypeMap;
    }
    
    public constructor() {
    }
}

