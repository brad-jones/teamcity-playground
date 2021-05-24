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

import { BuildType } from './BuildType.ts';
import { Properties } from './Properties.ts';
import { HttpFile } from '../http/http.ts';

export class NewBuildTypeDescription {
    'copyAllAssociatedSettings'?: boolean;
    'projectsIdsMap'?: Properties;
    'buildTypesIdsMap'?: Properties;
    'vcsRootsIdsMap'?: Properties;
    'name'?: string;
    'id'?: string;
    'sourceBuildTypeLocator'?: string;
    'sourceBuildType'?: BuildType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "copyAllAssociatedSettings",
            "baseName": "copyAllAssociatedSettings",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "projectsIdsMap",
            "baseName": "projectsIdsMap",
            "type": "Properties",
            "format": ""
        },
        {
            "name": "buildTypesIdsMap",
            "baseName": "buildTypesIdsMap",
            "type": "Properties",
            "format": ""
        },
        {
            "name": "vcsRootsIdsMap",
            "baseName": "vcsRootsIdsMap",
            "type": "Properties",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceBuildTypeLocator",
            "baseName": "sourceBuildTypeLocator",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceBuildType",
            "baseName": "sourceBuildType",
            "type": "BuildType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NewBuildTypeDescription.attributeTypeMap;
    }
    
    public constructor() {
    }
}

