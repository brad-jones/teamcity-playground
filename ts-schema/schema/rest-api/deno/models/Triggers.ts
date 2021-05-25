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

import { Trigger } from './Trigger.ts';
import { HttpFile } from '../http/http.ts';

export class Triggers {
    'count'?: number;
    'trigger'?: Array<Trigger>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "trigger",
            "baseName": "trigger",
            "type": "Array<Trigger>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Triggers.attributeTypeMap;
    }
    
    public constructor() {
    }
}
