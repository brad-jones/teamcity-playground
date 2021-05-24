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

import { ProjectFeature } from './ProjectFeature.ts';
import { HttpFile } from '../http/http.ts';

export class ProjectFeatures {
    'count'?: number;
    'href'?: string;
    'projectFeature'?: Array<ProjectFeature>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
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
            "name": "projectFeature",
            "baseName": "projectFeature",
            "type": "Array<ProjectFeature>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProjectFeatures.attributeTypeMap;
    }
    
    public constructor() {
    }
}

