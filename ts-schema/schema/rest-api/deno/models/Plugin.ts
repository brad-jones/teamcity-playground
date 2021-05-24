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

import { Properties } from './Properties.ts';
import { HttpFile } from '../http/http.ts';

export class Plugin {
    'name'?: string;
    'displayName'?: string;
    'version'?: string;
    'loadPath'?: string;
    'parameters'?: Properties;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "loadPath",
            "baseName": "loadPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Properties",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Plugin.attributeTypeMap;
    }
    
    public constructor() {
    }
}

