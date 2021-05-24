// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { Entries } from '../models/Entries.ts';
import { Files } from '../models/Files.ts';
import { Properties } from '../models/Properties.ts';
import { VcsRootInstance } from '../models/VcsRootInstance.ts';
import { VcsRootInstances } from '../models/VcsRootInstances.ts';

/**
 * no description
 */
export class VcsRootInstanceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Remove a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     */
    public async deleteVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling deleteVcsRootInstanceField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling deleteVcsRootInstanceField.');
        }


        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/{field}'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)))
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
     * Delete the last repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     */
    public async deleteVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling deleteVcsRootInstanceRepositoryState.');
        }


        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/repositoryState'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

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
     * Download specific file.
     * @param path 
     * @param vcsRootInstanceLocator 
     */
    public async downloadFile(path: string, vcsRootInstanceLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling downloadFile.');
        }


        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling downloadFile.');
        }


        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/files/latest/files{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

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
     * Get all VCS root instances.
     * @param locator 
     * @param fields 
     */
    public async getAllVcsRootInstances(locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "VcsRootInstanceLocator"));
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
     * Get metadata of specific file.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public async getFileMetadata(path: string, vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getFileMetadata.');
        }


        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getFileMetadata.');
        }



        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/files/latest/metadata{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

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
     * List all files.
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public async getFilesList(vcsRootInstanceLocator: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getFilesList.');
        }





        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/files/latest'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (basePath !== undefined) {
            requestContext.setQueryParam("basePath", ObjectSerializer.serialize(basePath, "string", ""));
        }
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
     * List files under this path.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public async getFilesListForSubpath(path: string, vcsRootInstanceLocator: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getFilesListForSubpath.');
        }


        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getFilesListForSubpath.');
        }





        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/files/latest/{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (basePath !== undefined) {
            requestContext.setQueryParam("basePath", ObjectSerializer.serialize(basePath, "string", ""));
        }
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
     * Get VCS root instance matching the locator.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public async getVcsRootInstance(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getVcsRootInstance.');
        }



        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

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
     * Get the creation date of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     */
    public async getVcsRootInstanceCreationDate(vcsRootInstanceLocator: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getVcsRootInstanceCreationDate.');
        }


        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/repositoryState/creationDate'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

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
     * Get a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     */
    public async getVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getVcsRootInstanceField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling getVcsRootInstanceField.');
        }


        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/{field}'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)))
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
     * Get all properties of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public async getVcsRootInstanceProperties(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getVcsRootInstanceProperties.');
        }



        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/properties'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

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
     * Get the repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public async getVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getVcsRootInstanceRepositoryState.');
        }



        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/repositoryState'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

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
     * Get specific file zipped.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param name 
     */
    public async getZippedFile(path: string, vcsRootInstanceLocator: string, basePath?: string, locator?: string, name?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError('Required parameter path was null or undefined when calling getZippedFile.');
        }


        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling getZippedFile.');
        }





        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/files/latest/archived{path}'
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)))
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (basePath !== undefined) {
            requestContext.setQueryParam("basePath", ObjectSerializer.serialize(basePath, "string", ""));
        }
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", ""));
        }
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
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
     * Check for the pending changes for all VCS root instances.
     * @param locator 
     * @param requestor 
     * @param fields 
     */
    public async requestPendingChangesCheck(locator?: string, requestor?: string, fields?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/checkingForChangesQueue';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "VcsRootInstanceLocator"));
        }
        if (requestor !== undefined) {
            requestContext.setQueryParam("requestor", ObjectSerializer.serialize(requestor, "string", ""));
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
     * Get a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     * @param body 
     */
    public async setVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, body?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling setVcsRootInstanceField.');
        }


        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new RequiredError('Required parameter field was null or undefined when calling setVcsRootInstanceField.');
        }



        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/{field}'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)))
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
     * Update the repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     * @param body 
     */
    public async setVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, fields?: string, body?: Entries, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'vcsRootInstanceLocator' is not null or undefined
        if (vcsRootInstanceLocator === null || vcsRootInstanceLocator === undefined) {
            throw new RequiredError('Required parameter vcsRootInstanceLocator was null or undefined when calling setVcsRootInstanceRepositoryState.');
        }




        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/{vcsRootInstanceLocator}/repositoryState'
            .replace('{' + 'vcsRootInstanceLocator' + '}', encodeURIComponent(String(vcsRootInstanceLocator)));

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
            ObjectSerializer.serialize(body, "Entries", ""),
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
     * Send the commit hook notification.
     * @param locator 
     * @param okOnNothingFound 
     */
    public async triggerCommitHookNotification(locator?: string, okOnNothingFound?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/app/rest/vcs-root-instances/commitHookNotification';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locator !== undefined) {
            requestContext.setQueryParam("locator", ObjectSerializer.serialize(locator, "string", "VcsRootInstanceLocator"));
        }
        if (okOnNothingFound !== undefined) {
            requestContext.setQueryParam("okOnNothingFound", ObjectSerializer.serialize(okOnNothingFound, "boolean", ""));
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

}

export class VcsRootInstanceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteVcsRootInstanceField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteVcsRootInstanceField(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to deleteVcsRootInstanceRepositoryState
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteVcsRootInstanceRepositoryState(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to downloadFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadFile(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to getAllVcsRootInstances
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllVcsRootInstances(response: ResponseContext): Promise<VcsRootInstances > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootInstances = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootInstances", ""
            ) as VcsRootInstances;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootInstances = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootInstances", ""
            ) as VcsRootInstances;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFileMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFileMetadata(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFilesList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFilesList(response: ResponseContext): Promise<Files > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Files = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Files", ""
            ) as Files;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Files = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Files", ""
            ) as Files;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFilesListForSubpath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFilesListForSubpath(response: ResponseContext): Promise<Files > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Files = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Files", ""
            ) as Files;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Files = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Files", ""
            ) as Files;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVcsRootInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVcsRootInstance(response: ResponseContext): Promise<VcsRootInstance > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootInstance = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootInstance", ""
            ) as VcsRootInstance;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootInstance = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootInstance", ""
            ) as VcsRootInstance;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getVcsRootInstanceCreationDate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVcsRootInstanceCreationDate(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getVcsRootInstanceField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVcsRootInstanceField(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getVcsRootInstanceProperties
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVcsRootInstanceProperties(response: ResponseContext): Promise<Properties > {
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
     * @params response Response returned by the server for a request to getVcsRootInstanceRepositoryState
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getVcsRootInstanceRepositoryState(response: ResponseContext): Promise<Entries > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Entries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entries", ""
            ) as Entries;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Entries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entries", ""
            ) as Entries;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getZippedFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getZippedFile(response: ResponseContext): Promise< void> {
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
     * @params response Response returned by the server for a request to requestPendingChangesCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async requestPendingChangesCheck(response: ResponseContext): Promise<VcsRootInstances > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VcsRootInstances = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootInstances", ""
            ) as VcsRootInstances;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VcsRootInstances = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VcsRootInstances", ""
            ) as VcsRootInstances;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setVcsRootInstanceField
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setVcsRootInstanceField(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to setVcsRootInstanceRepositoryState
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setVcsRootInstanceRepositoryState(response: ResponseContext): Promise<Entries > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Entries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entries", ""
            ) as Entries;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Entries = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entries", ""
            ) as Entries;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to triggerCommitHookNotification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async triggerCommitHookNotification(response: ResponseContext): Promise< void> {
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

}
