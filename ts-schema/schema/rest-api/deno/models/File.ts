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

import { Files } from './Files.ts';
import { Href } from './Href.ts';
import { HttpFile } from '../http/http.ts';

export class File {
    'name'?: string;
    'fullName'?: string;
    'size'?: number;
    'modificationTime'?: string;
    'href'?: string;
    'parent'?: any;
    'content'?: Href;
    'children'?: Files;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "modificationTime",
            "baseName": "modificationTime",
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
            "name": "parent",
            "baseName": "parent",
            "type": "any",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "Href",
            "format": ""
        },
        {
            "name": "children",
            "baseName": "children",
            "type": "Files",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return File.attributeTypeMap;
    }
    
    public constructor() {
    }
}

