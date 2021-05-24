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

export class TestCounters {
    'ignored'?: number;
    'failed'?: number;
    'muted'?: number;
    'success'?: number;
    'all'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ignored",
            "baseName": "ignored",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "muted",
            "baseName": "muted",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "all",
            "baseName": "all",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return TestCounters.attributeTypeMap;
    }
    
    public constructor() {
    }
}

