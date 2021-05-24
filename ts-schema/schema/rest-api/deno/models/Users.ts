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

import { User } from './User.ts';
import { HttpFile } from '../http/http.ts';

export class Users {
    'count'?: number;
    'user'?: Array<User>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "Array<User>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Users.attributeTypeMap;
    }
    
    public constructor() {
    }
}

