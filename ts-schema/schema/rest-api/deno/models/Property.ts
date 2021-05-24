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

import { Type } from './Type.ts';
import { HttpFile } from '../http/http.ts';

export class Property {
    'name'?: string;
    'value'?: string;
    'inherited'?: boolean;
    'type'?: Type;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
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
            "name": "type",
            "baseName": "type",
            "type": "Type",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Property.attributeTypeMap;
    }
    
    public constructor() {
    }
}

