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

import { VcsRoot } from './VcsRoot.ts';
import { HttpFile } from '../http/http.ts';

export class VcsRoots {
    'count'?: number;
    'href'?: string;
    'nextHref'?: string;
    'prevHref'?: string;
    'vcsRoot'?: Array<VcsRoot>;

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
            "name": "nextHref",
            "baseName": "nextHref",
            "type": "string",
            "format": ""
        },
        {
            "name": "prevHref",
            "baseName": "prevHref",
            "type": "string",
            "format": ""
        },
        {
            "name": "vcsRoot",
            "baseName": "vcs-root",
            "type": "Array<VcsRoot>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VcsRoots.attributeTypeMap;
    }
    
    public constructor() {
    }
}

