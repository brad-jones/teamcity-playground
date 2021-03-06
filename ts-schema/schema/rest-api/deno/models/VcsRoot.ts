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

import { Items } from './Items.ts';
import { Project } from './Project.ts';
import { Properties } from './Properties.ts';
import { VcsRootInstances } from './VcsRootInstances.ts';
import { HttpFile } from '../http/http.ts';

export class VcsRoot {
    'id'?: string;
    'internalId'?: string;
    'uuid'?: string;
    'name'?: string;
    'vcsName'?: string;
    'modificationCheckInterval'?: number;
    'href'?: string;
    'project'?: Project;
    'properties'?: Properties;
    'vcsRootInstances'?: VcsRootInstances;
    'repositoryIdStrings'?: Items;
    'projectLocator'?: string;
    'locator'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "internalId",
            "baseName": "internalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
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
            "name": "vcsName",
            "baseName": "vcsName",
            "type": "string",
            "format": ""
        },
        {
            "name": "modificationCheckInterval",
            "baseName": "modificationCheckInterval",
            "type": "number",
            "format": "int32"
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
            "name": "properties",
            "baseName": "properties",
            "type": "Properties",
            "format": ""
        },
        {
            "name": "vcsRootInstances",
            "baseName": "vcsRootInstances",
            "type": "VcsRootInstances",
            "format": ""
        },
        {
            "name": "repositoryIdStrings",
            "baseName": "repositoryIdStrings",
            "type": "Items",
            "format": ""
        },
        {
            "name": "projectLocator",
            "baseName": "projectLocator",
            "type": "string",
            "format": ""
        },
        {
            "name": "locator",
            "baseName": "locator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VcsRoot.attributeTypeMap;
    }
    
    public constructor() {
    }
}

