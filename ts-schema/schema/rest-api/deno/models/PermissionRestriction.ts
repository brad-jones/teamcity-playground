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

import { Permission } from './Permission.ts';
import { Project } from './Project.ts';
import { HttpFile } from '../http/http.ts';

export class PermissionRestriction {
    'isGlobalScope'?: boolean;
    'project'?: Project;
    'permission'?: Permission;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isGlobalScope",
            "baseName": "isGlobalScope",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "Project",
            "format": ""
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "Permission",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PermissionRestriction.attributeTypeMap;
    }
    
    public constructor() {
    }
}

