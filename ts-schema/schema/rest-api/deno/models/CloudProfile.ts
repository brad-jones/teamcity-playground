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

import { CloudImages } from './CloudImages.ts';
import { Project } from './Project.ts';
import { HttpFile } from '../http/http.ts';

export class CloudProfile {
    'id'?: string;
    'name'?: string;
    'cloudProviderId'?: string;
    'href'?: string;
    'project'?: Project;
    'images'?: CloudImages;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "cloudProviderId",
            "baseName": "cloudProviderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "Project",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "CloudImages",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudProfile.attributeTypeMap;
    }
    
    public constructor() {
    }
}

