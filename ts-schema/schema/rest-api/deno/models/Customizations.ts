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

import { HttpFile } from '../http/http.ts';

export class Customizations {
    'parameters'?: { [key: string]: string; };
    'changes'?: { [key: string]: string; };
    'artifactDependencies'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "changes",
            "baseName": "changes",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "artifactDependencies",
            "baseName": "artifactDependencies",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Customizations.attributeTypeMap;
    }
    
    public constructor() {
    }
}

