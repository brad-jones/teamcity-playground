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

import { AuditAction } from './AuditAction.ts';
import { RelatedEntities } from './RelatedEntities.ts';
import { User } from './User.ts';
import { HttpFile } from '../http/http.ts';

export class AuditEvent {
    'id'?: string;
    'timestamp'?: string;
    'comment'?: string;
    'action'?: AuditAction;
    'relatedEntities'?: RelatedEntities;
    'user'?: User;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "AuditAction",
            "format": ""
        },
        {
            "name": "relatedEntities",
            "baseName": "relatedEntities",
            "type": "RelatedEntities",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "User",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuditEvent.attributeTypeMap;
    }
    
    public constructor() {
    }
}

