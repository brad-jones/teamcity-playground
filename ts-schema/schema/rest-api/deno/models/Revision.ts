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

import { VcsRootInstance } from './VcsRootInstance.ts';
import { HttpFile } from '../http/http.ts';

export class Revision {
    'version'?: string;
    'internalVersion'?: string;
    'vcsBranchName'?: string;
    'vcsRootInstance'?: VcsRootInstance;
    'checkoutRules'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "internalVersion",
            "baseName": "internalVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "vcsBranchName",
            "baseName": "vcsBranchName",
            "type": "string",
            "format": ""
        },
        {
            "name": "vcsRootInstance",
            "baseName": "vcs-root-instance",
            "type": "VcsRootInstance",
            "format": ""
        },
        {
            "name": "checkoutRules",
            "baseName": "checkout-rules",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Revision.attributeTypeMap;
    }
    
    public constructor() {
    }
}

