// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { Group } from '../models/Group.ts';
import { Groups } from '../models/Groups.ts';
import { PermissionAssignments } from '../models/PermissionAssignments.ts';
import { Properties } from '../models/Properties.ts';
import { Role } from '../models/Role.ts';
import { Roles } from '../models/Roles.ts';
import { Token } from '../models/Token.ts';
import { Tokens } from '../models/Tokens.ts';
import { User } from '../models/User.ts';
import { Users } from '../models/Users.ts';

/**
 * no description
 */
export class UserApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add a role to the matching user.
     * @param userLocator 
     * @param body 
     */
    public async addRoleToUser(userLocator: string, body?: Role, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling addRoleToUser.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/roles'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Role", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add a role with the specific scope to the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public async addRoleToUserAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling addRoleToUserAtScope.');
        }


        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new RequiredError('Required parameter roleId was null or undefined when calling addRoleToUserAtScope.');
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError('Required parameter scope was null or undefined when calling addRoleToUserAtScope.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/roles/{roleId}/{scope}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new user.
     * @param fields 
     * @param body 
     */
    public async addUser(fields?: string, body?: User, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/users';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "User", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new authentication token for the matching user.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public async addUserToken(userLocator: string, fields?: string, body?: Token, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling addUserToken.');
        }




        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/tokens'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Token", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete user matching the locator.
     * @param userLocator 
     */
    public async deleteUser(userLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling deleteUser.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove a property of the matching user.
     * @param userLocator 
     * @param field 
     */
    public async deleteUserField(userLocator: string, field: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling deleteUserField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling deleteUserField.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/{field}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'field' + '}', encodeURIComponent(String(field)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove an authentication token from the matching user.
     * @param userLocator 
     * @param name 
     */
    public async deleteUserToken(userLocator: string, name: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling deleteUserToken.');
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling deleteUserToken.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/tokens/{name}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a field of the matching user.
     * @param userLocator 
     * @param field 
     */
    public async gerUserField(userLocator: string, field: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling gerUserField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling gerUserField.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/{field}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'field' + '}', encodeURIComponent(String(field)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all groups of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public async getAllUserGroups(userLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getAllUserGroups.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/groups'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all user roles of the matching user.
     * @param userLocator 
     */
    public async getAllUserRoles(userLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getAllUserRoles.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/roles'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all users.
     * @param locator 
     * @param fields 
     */
    public async getAllUsers(locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/users';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", ""));
        }
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get user matching the locator.
     * @param userLocator 
     * @param fields 
     */
    public async getUser(userLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getUser.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a user group of the matching user.
     * @param userLocator 
     * @param groupLocator 
     * @param fields 
     */
    public async getUserGroup(userLocator: string, groupLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getUserGroup.');
        }


        // verify required parameter 'groupLocator' is not null or undefined
        if (groupLocator === null || groupLocator === undefined) {
            throw new RequiredError('Required parameter groupLocator was null or undefined when calling getUserGroup.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/groups/{groupLocator}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'groupLocator' + '}', encodeURIComponent(String(groupLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all permissions effective for the matching user.
     * @param userLocator 
     * @param locator 
     * @param fields 
     */
    public async getUserPermissions(userLocator: string, locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getUserPermissions.');
        }




        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/permissions'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", ""));
        }
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all properties of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public async getUserProperties(userLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getUserProperties.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/properties'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a property of the matching user.
     * @param userLocator 
     * @param name 
     */
    public async getUserProperty(userLocator: string, name: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getUserProperty.');
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getUserProperty.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/properties/{name}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a user role with the specific scope from the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public async getUserRolesAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getUserRolesAtScope.');
        }


        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new RequiredError('Required parameter roleId was null or undefined when calling getUserRolesAtScope.');
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError('Required parameter scope was null or undefined when calling getUserRolesAtScope.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/roles/{roleId}/{scope}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all authentication tokens of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public async getUserTokens(userLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling getUserTokens.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/tokens'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove the matching user from the specific group.
     * @param userLocator 
     * @param groupLocator 
     * @param fields 
     */
    public async removeUserFromGroup(userLocator: string, groupLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling removeUserFromGroup.');
        }


        // verify required parameter 'groupLocator' is not null or undefined
        if (groupLocator === null || groupLocator === undefined) {
            throw new RequiredError('Required parameter groupLocator was null or undefined when calling removeUserFromGroup.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/groups/{groupLocator}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'groupLocator' + '}', encodeURIComponent(String(groupLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove a property of the matching user.
     * @param userLocator 
     * @param name 
     */
    public async removeUserProperty(userLocator: string, name: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling removeUserProperty.');
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling removeUserProperty.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/properties/{name}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove the RememberMe data of the matching user.
     * @param userLocator 
     */
    public async removeUserRememberMe(userLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling removeUserRememberMe.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/debug/rememberMe'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove a role with the specific scope from the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public async removeUserRoleAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling removeUserRoleAtScope.');
        }


        // verify required parameter 'roleId' is not null or undefined
        if (roleId === null || roleId === undefined) {
            throw new RequiredError('Required parameter roleId was null or undefined when calling removeUserRoleAtScope.');
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError('Required parameter scope was null or undefined when calling removeUserRoleAtScope.');
        }


        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/roles/{roleId}/{scope}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update user matching the locator.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public async replaceUser(userLocator: string, fields?: string, body?: User, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling replaceUser.');
        }




        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "User", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a field of the matching user.
     * @param userLocator 
     * @param field 
     * @param body 
     */
    public async setUserField(userLocator: string, field: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling setUserField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling setUserField.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/{field}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'field' + '}', encodeURIComponent(String(field)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update groups of the matching user.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public async setUserGroups(userLocator: string, fields?: string, body?: Groups, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling setUserGroups.');
        }




        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/groups'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fields !== undefined) {
            requestContext.setQueryParam("fields", ObjectSerializer.serialize(fields, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Groups", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a property of the matching user.
     * @param userLocator 
     * @param name 
     * @param body 
     */
    public async setUserProperty(userLocator: string, name: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling setUserProperty.');
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling setUserProperty.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/properties/{name}'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/plain"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update user roles of the matching user.
     * @param userLocator 
     * @param body 
     */
    public async setUserRoles(userLocator: string, body?: Roles, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'userLocator' is not null or undefined
        if (userLocator === null || userLocator === undefined) {
            throw new RequiredError('Required parameter userLocator was null or undefined when calling setUserRoles.');
        }



        // Path Params
        const localVarPath = '/app/rest/users/{userLocator}/roles'
            .replace('{' + 'userLocator' + '}', encodeURIComponent(String(userLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/xml",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Roles", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class UserApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRoleToUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addRoleToUser(response: ResponseContext): Promise<Role > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Role", ""
            ) as Role;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Role", ""
            ) as Role;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addRoleToUserAtScope
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addRoleToUserAtScope(response: ResponseContext): Promise<Role > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Role", ""
            ) as Role;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Role", ""
            ) as Role;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addUser(response: ResponseContext): Promise<User > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUserToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addUserToken(response: ResponseContext): Promise<Token > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Token = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Token", ""
            ) as Token;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Token = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Token", ""
            ) as Token;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUser(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUserField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUserField(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUserToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUserToken(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gerUserField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gerUserField(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllUserGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllUserGroups(response: ResponseContext): Promise<Groups > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Groups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Groups", ""
            ) as Groups;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Groups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Groups", ""
            ) as Groups;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllUserRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllUserRoles(response: ResponseContext): Promise<Roles > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Roles = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Roles", ""
            ) as Roles;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Roles = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Roles", ""
            ) as Roles;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllUsers(response: ResponseContext): Promise<Users > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Users = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Users", ""
            ) as Users;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Users = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Users", ""
            ) as Users;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUser(response: ResponseContext): Promise<User > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserGroup(response: ResponseContext): Promise<Group > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Group = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Group", ""
            ) as Group;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Group = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Group", ""
            ) as Group;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserPermissions(response: ResponseContext): Promise<PermissionAssignments > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PermissionAssignments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PermissionAssignments", ""
            ) as PermissionAssignments;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PermissionAssignments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PermissionAssignments", ""
            ) as PermissionAssignments;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserProperties(response: ResponseContext): Promise<Properties > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Properties = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Properties", ""
            ) as Properties;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Properties = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Properties", ""
            ) as Properties;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserProperty(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserRolesAtScope
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserRolesAtScope(response: ResponseContext): Promise<Role > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Role", ""
            ) as Role;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Role = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Role", ""
            ) as Role;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserTokens(response: ResponseContext): Promise<Tokens > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Tokens = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tokens", ""
            ) as Tokens;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Tokens = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Tokens", ""
            ) as Tokens;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeUserFromGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeUserFromGroup(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeUserProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeUserProperty(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeUserRememberMe
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeUserRememberMe(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeUserRoleAtScope
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeUserRoleAtScope(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "successful operation");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceUser(response: ResponseContext): Promise<User > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: User = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "User", ""
            ) as User;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setUserField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setUserField(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setUserGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setUserGroups(response: ResponseContext): Promise<Groups > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Groups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Groups", ""
            ) as Groups;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Groups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Groups", ""
            ) as Groups;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setUserProperty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setUserProperty(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setUserRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setUserRoles(response: ResponseContext): Promise<Roles > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Roles = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Roles", ""
            ) as Roles;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Roles = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Roles", ""
            ) as Roles;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
