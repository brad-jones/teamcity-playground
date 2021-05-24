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

import { Comment } from './Comment.ts';
import { HttpFile } from '../http/http.ts';

export class EnabledInfo {
    'status'?: boolean;
    'comment'?: Comment;
    'statusSwitchTime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "Comment",
            "format": ""
        },
        {
            "name": "statusSwitchTime",
            "baseName": "statusSwitchTime",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnabledInfo.attributeTypeMap;
    }
    
    public constructor() {
    }
}

