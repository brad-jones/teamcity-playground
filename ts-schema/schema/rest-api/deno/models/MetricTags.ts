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

import { MetricTag } from './MetricTag.ts';
import { HttpFile } from '../http/http.ts';

export class MetricTags {
    'count'?: number;
    'metricTag'?: Array<MetricTag>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "metricTag",
            "baseName": "metricTag",
            "type": "Array<MetricTag>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricTags.attributeTypeMap;
    }
    
    public constructor() {
    }
}

