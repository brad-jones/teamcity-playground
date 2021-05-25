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

import { Build } from './Build.ts';
import { HttpFile } from '../http/http.ts';

export class BuildChange {
    'nextBuild'?: Build;
    'prevBuild'?: Build;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nextBuild",
            "baseName": "nextBuild",
            "type": "Build",
            "format": ""
        },
        {
            "name": "prevBuild",
            "baseName": "prevBuild",
            "type": "Build",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BuildChange.attributeTypeMap;
    }
    
    public constructor() {
    }
}
