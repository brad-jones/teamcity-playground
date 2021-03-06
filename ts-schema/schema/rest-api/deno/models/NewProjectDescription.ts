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

import { Project } from './Project.ts';
import { Properties } from './Properties.ts';
import { HttpFile } from '../http/http.ts';

export class NewProjectDescription {
    'copyAllAssociatedSettings'?: boolean;
    'projectsIdsMap'?: Properties;
    'buildTypesIdsMap'?: Properties;
    'vcsRootsIdsMap'?: Properties;
    'name'?: string;
    'id'?: string;
    'sourceProjectLocator'?: string;
    'sourceProject'?: Project;
    'parentProject'?: Project;

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
            "name": "sourceProjectLocator",
            "baseName": "sourceProjectLocator",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceProject",
            "baseName": "sourceProject",
            "type": "Project",
            "format": ""
        },
        {
            "name": "parentProject",
            "baseName": "parentProject",
            "type": "Project",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NewProjectDescription.attributeTypeMap;
    }
    
    public constructor() {
    }
}

