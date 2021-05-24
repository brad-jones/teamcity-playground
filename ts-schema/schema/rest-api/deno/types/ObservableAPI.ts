import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { Agent } from '../models/Agent.ts';
import { AgentLocator } from '../models/AgentLocator.ts';
import { AgentPool } from '../models/AgentPool.ts';
import { AgentPoolLocator } from '../models/AgentPoolLocator.ts';
import { AgentPools } from '../models/AgentPools.ts';
import { AgentRequirement } from '../models/AgentRequirement.ts';
import { AgentRequirements } from '../models/AgentRequirements.ts';
import { Agents } from '../models/Agents.ts';
import { ArtifactDependencies } from '../models/ArtifactDependencies.ts';
import { ArtifactDependency } from '../models/ArtifactDependency.ts';
import { AuditAction } from '../models/AuditAction.ts';
import { AuditEvent } from '../models/AuditEvent.ts';
import { AuditEvents } from '../models/AuditEvents.ts';
import { AuditLocator } from '../models/AuditLocator.ts';
import { AuthorizedInfo } from '../models/AuthorizedInfo.ts';
import { Branch } from '../models/Branch.ts';
import { BranchLocator } from '../models/BranchLocator.ts';
import { BranchVersion } from '../models/BranchVersion.ts';
import { Branches } from '../models/Branches.ts';
import { Build } from '../models/Build.ts';
import { BuildCancelRequest } from '../models/BuildCancelRequest.ts';
import { BuildChange } from '../models/BuildChange.ts';
import { BuildChanges } from '../models/BuildChanges.ts';
import { BuildLocator } from '../models/BuildLocator.ts';
import { BuildQueueLocator } from '../models/BuildQueueLocator.ts';
import { BuildTriggeringOptions } from '../models/BuildTriggeringOptions.ts';
import { BuildType } from '../models/BuildType.ts';
import { BuildTypeLocator } from '../models/BuildTypeLocator.ts';
import { BuildTypes } from '../models/BuildTypes.ts';
import { Builds } from '../models/Builds.ts';
import { Change } from '../models/Change.ts';
import { ChangeLocator } from '../models/ChangeLocator.ts';
import { Changes } from '../models/Changes.ts';
import { CloudImage } from '../models/CloudImage.ts';
import { CloudImages } from '../models/CloudImages.ts';
import { CloudInstance } from '../models/CloudInstance.ts';
import { CloudInstances } from '../models/CloudInstances.ts';
import { CloudProfile } from '../models/CloudProfile.ts';
import { CloudProfiles } from '../models/CloudProfiles.ts';
import { Comment } from '../models/Comment.ts';
import { Compatibilities } from '../models/Compatibilities.ts';
import { Compatibility } from '../models/Compatibility.ts';
import { CompatibilityPolicy } from '../models/CompatibilityPolicy.ts';
import { Customizations } from '../models/Customizations.ts';
import { Datas } from '../models/Datas.ts';
import { EnabledInfo } from '../models/EnabledInfo.ts';
import { Entries } from '../models/Entries.ts';
import { Entry } from '../models/Entry.ts';
import { Environment } from '../models/Environment.ts';
import { Feature } from '../models/Feature.ts';
import { Features } from '../models/Features.ts';
import { File } from '../models/File.ts';
import { FileChange } from '../models/FileChange.ts';
import { FileChanges } from '../models/FileChanges.ts';
import { Files } from '../models/Files.ts';
import { Group } from '../models/Group.ts';
import { Groups } from '../models/Groups.ts';
import { Href } from '../models/Href.ts';
import { Investigation } from '../models/Investigation.ts';
import { InvestigationLocator } from '../models/InvestigationLocator.ts';
import { Investigations } from '../models/Investigations.ts';
import { Issue } from '../models/Issue.ts';
import { IssueUsage } from '../models/IssueUsage.ts';
import { Issues } from '../models/Issues.ts';
import { IssuesUsages } from '../models/IssuesUsages.ts';
import { Items } from '../models/Items.ts';
import { LicenseKey } from '../models/LicenseKey.ts';
import { LicenseKeys } from '../models/LicenseKeys.ts';
import { LicensingData } from '../models/LicensingData.ts';
import { Link } from '../models/Link.ts';
import { Links } from '../models/Links.ts';
import { MetaData } from '../models/MetaData.ts';
import { Metric } from '../models/Metric.ts';
import { MetricTag } from '../models/MetricTag.ts';
import { MetricTags } from '../models/MetricTags.ts';
import { MetricValue } from '../models/MetricValue.ts';
import { MetricValues } from '../models/MetricValues.ts';
import { Metrics } from '../models/Metrics.ts';
import { MultipleOperationResult } from '../models/MultipleOperationResult.ts';
import { Mute } from '../models/Mute.ts';
import { MuteLocator } from '../models/MuteLocator.ts';
import { Mutes } from '../models/Mutes.ts';
import { NewBuildTypeDescription } from '../models/NewBuildTypeDescription.ts';
import { NewProjectDescription } from '../models/NewProjectDescription.ts';
import { OperationResult } from '../models/OperationResult.ts';
import { ParsedTestName } from '../models/ParsedTestName.ts';
import { Permission } from '../models/Permission.ts';
import { PermissionAssignment } from '../models/PermissionAssignment.ts';
import { PermissionAssignments } from '../models/PermissionAssignments.ts';
import { PermissionRestriction } from '../models/PermissionRestriction.ts';
import { PermissionRestrictions } from '../models/PermissionRestrictions.ts';
import { PinInfo } from '../models/PinInfo.ts';
import { Plugin } from '../models/Plugin.ts';
import { Plugins } from '../models/Plugins.ts';
import { Problem } from '../models/Problem.ts';
import { ProblemLocator } from '../models/ProblemLocator.ts';
import { ProblemOccurrence } from '../models/ProblemOccurrence.ts';
import { ProblemOccurrenceLocator } from '../models/ProblemOccurrenceLocator.ts';
import { ProblemOccurrences } from '../models/ProblemOccurrences.ts';
import { ProblemScope } from '../models/ProblemScope.ts';
import { ProblemTarget } from '../models/ProblemTarget.ts';
import { Problems } from '../models/Problems.ts';
import { ProgressInfo } from '../models/ProgressInfo.ts';
import { Project } from '../models/Project.ts';
import { ProjectFeature } from '../models/ProjectFeature.ts';
import { ProjectFeatures } from '../models/ProjectFeatures.ts';
import { ProjectLocator } from '../models/ProjectLocator.ts';
import { Projects } from '../models/Projects.ts';
import { Properties } from '../models/Properties.ts';
import { Property } from '../models/Property.ts';
import { Related } from '../models/Related.ts';
import { RelatedEntities } from '../models/RelatedEntities.ts';
import { RelatedEntity } from '../models/RelatedEntity.ts';
import { RepositoryState } from '../models/RepositoryState.ts';
import { Requirements } from '../models/Requirements.ts';
import { Resolution } from '../models/Resolution.ts';
import { Revision } from '../models/Revision.ts';
import { Revisions } from '../models/Revisions.ts';
import { Role } from '../models/Role.ts';
import { Roles } from '../models/Roles.ts';
import { Server } from '../models/Server.ts';
import { SnapshotDependencies } from '../models/SnapshotDependencies.ts';
import { SnapshotDependency } from '../models/SnapshotDependency.ts';
import { StateField } from '../models/StateField.ts';
import { Step } from '../models/Step.ts';
import { Steps } from '../models/Steps.ts';
import { Tag } from '../models/Tag.ts';
import { TagLocator } from '../models/TagLocator.ts';
import { Tags } from '../models/Tags.ts';
import { Test } from '../models/Test.ts';
import { TestCounters } from '../models/TestCounters.ts';
import { TestLocator } from '../models/TestLocator.ts';
import { TestOccurrence } from '../models/TestOccurrence.ts';
import { TestOccurrenceLocator } from '../models/TestOccurrenceLocator.ts';
import { TestOccurrences } from '../models/TestOccurrences.ts';
import { TestRunMetadata } from '../models/TestRunMetadata.ts';
import { Tests } from '../models/Tests.ts';
import { Token } from '../models/Token.ts';
import { Tokens } from '../models/Tokens.ts';
import { Trigger } from '../models/Trigger.ts';
import { TriggeredBy } from '../models/TriggeredBy.ts';
import { Triggers } from '../models/Triggers.ts';
import { Type } from '../models/Type.ts';
import { TypedValue } from '../models/TypedValue.ts';
import { User } from '../models/User.ts';
import { UserGroupLocator } from '../models/UserGroupLocator.ts';
import { UserLocator } from '../models/UserLocator.ts';
import { Users } from '../models/Users.ts';
import { VcsCheckStatus } from '../models/VcsCheckStatus.ts';
import { VcsLabel } from '../models/VcsLabel.ts';
import { VcsLabels } from '../models/VcsLabels.ts';
import { VcsRoot } from '../models/VcsRoot.ts';
import { VcsRootEntries } from '../models/VcsRootEntries.ts';
import { VcsRootEntry } from '../models/VcsRootEntry.ts';
import { VcsRootInstance } from '../models/VcsRootInstance.ts';
import { VcsRootInstanceLocator } from '../models/VcsRootInstanceLocator.ts';
import { VcsRootInstances } from '../models/VcsRootInstances.ts';
import { VcsRootLocator } from '../models/VcsRootLocator.ts';
import { VcsRoots } from '../models/VcsRoots.ts';
import { VcsStatus } from '../models/VcsStatus.ts';

import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi.ts";
export class ObservableAgentApi {
    private requestFactory: AgentApiRequestFactory;
    private responseProcessor: AgentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentApiRequestFactory,
        responseProcessor?: AgentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AgentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AgentApiResponseProcessor();
    }

    /**
     * Delete an inactive agent.
     * @param agentLocator 
     */
    public deleteAgent(agentLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAgent(agentLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAgent(rsp)));
            }));
    }
 
    /**
     * Get agent matching the locator.
     * @param agentLocator 
     * @param fields 
     */
    public getAgent(agentLocator: string, fields?: string, options?: Configuration): Observable<Agent> {
        const requestContextPromise = this.requestFactory.getAgent(agentLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgent(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching agent.
     * @param agentLocator 
     * @param field 
     */
    public getAgentField(agentLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getAgentField(agentLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentField(rsp)));
            }));
    }
 
    /**
     * Get the agent pool of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getAgentPool(agentLocator: string, fields?: string, options?: Configuration): Observable<AgentPool> {
        const requestContextPromise = this.requestFactory.getAgentPool(agentLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentPool(rsp)));
            }));
    }
 
    /**
     * Get all known agents.
     * @param locator 
     * @param fields 
     */
    public getAllAgents(locator?: string, fields?: string, options?: Configuration): Observable<Agents> {
        const requestContextPromise = this.requestFactory.getAllAgents(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAgents(rsp)));
            }));
    }
 
    /**
     * Get the authorization info of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getAuthorizedInfo(agentLocator: string, fields?: string, options?: Configuration): Observable<AuthorizedInfo> {
        const requestContextPromise = this.requestFactory.getAuthorizedInfo(agentLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthorizedInfo(rsp)));
            }));
    }
 
    /**
     * Get the build configuration run policy of the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getBuildConfigurationRunPolicy(agentLocator: string, fields?: string, options?: Configuration): Observable<CompatibilityPolicy> {
        const requestContextPromise = this.requestFactory.getBuildConfigurationRunPolicy(agentLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildConfigurationRunPolicy(rsp)));
            }));
    }
 
    /**
     * Get build types compatible with the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getCompatibleBuildTypes(agentLocator: string, fields?: string, options?: Configuration): Observable<BuildTypes> {
        const requestContextPromise = this.requestFactory.getCompatibleBuildTypes(agentLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompatibleBuildTypes(rsp)));
            }));
    }
 
    /**
     * Check if the matching agent is enabled.
     * @param agentLocator 
     * @param fields 
     */
    public getEnabledInfo(agentLocator: string, fields?: string, options?: Configuration): Observable<EnabledInfo> {
        const requestContextPromise = this.requestFactory.getEnabledInfo(agentLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnabledInfo(rsp)));
            }));
    }
 
    /**
     * Get build types incompatible with the matching agent.
     * @param agentLocator 
     * @param fields 
     */
    public getIncompatibleBuildTypes(agentLocator: string, fields?: string, options?: Configuration): Observable<Compatibilities> {
        const requestContextPromise = this.requestFactory.getIncompatibleBuildTypes(agentLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIncompatibleBuildTypes(rsp)));
            }));
    }
 
    /**
     * Update a field of the matching agent.
     * @param agentLocator 
     * @param field 
     * @param body 
     */
    public setAgentField(agentLocator: string, field: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setAgentField(agentLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAgentField(rsp)));
            }));
    }
 
    /**
     * Assign the matching agent to the specified agent pool.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public setAgentPool(agentLocator: string, fields?: string, body?: AgentPool, options?: Configuration): Observable<AgentPool> {
        const requestContextPromise = this.requestFactory.setAgentPool(agentLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAgentPool(rsp)));
            }));
    }
 
    /**
     * Update the authorization info of the matching agent.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public setAuthorizedInfo(agentLocator: string, fields?: string, body?: AuthorizedInfo, options?: Configuration): Observable<AuthorizedInfo> {
        const requestContextPromise = this.requestFactory.setAuthorizedInfo(agentLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAuthorizedInfo(rsp)));
            }));
    }
 
    /**
     * Update build configuration run policy of agent matching locator.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public setBuildConfigurationRunPolicy(agentLocator: string, fields?: string, body?: CompatibilityPolicy, options?: Configuration): Observable<CompatibilityPolicy> {
        const requestContextPromise = this.requestFactory.setBuildConfigurationRunPolicy(agentLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildConfigurationRunPolicy(rsp)));
            }));
    }
 
    /**
     * Update the enablement status of the matching agent.
     * @param agentLocator 
     * @param fields 
     * @param body 
     */
    public setEnabledInfo(agentLocator: string, fields?: string, body?: EnabledInfo, options?: Configuration): Observable<EnabledInfo> {
        const requestContextPromise = this.requestFactory.setEnabledInfo(agentLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setEnabledInfo(rsp)));
            }));
    }
 
}

import { AgentPoolApiRequestFactory, AgentPoolApiResponseProcessor} from "../apis/AgentPoolApi.ts";
export class ObservableAgentPoolApi {
    private requestFactory: AgentPoolApiRequestFactory;
    private responseProcessor: AgentPoolApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentPoolApiRequestFactory,
        responseProcessor?: AgentPoolApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AgentPoolApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AgentPoolApiResponseProcessor();
    }

    /**
     * Assign the agent to the matching agent pool.
     * @param agentPoolLocator 
     * @param fields 
     * @param body 
     */
    public addAgentToAgentPool(agentPoolLocator: string, fields?: string, body?: Agent, options?: Configuration): Observable<Agent> {
        const requestContextPromise = this.requestFactory.addAgentToAgentPool(agentPoolLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAgentToAgentPool(rsp)));
            }));
    }
 
    /**
     * Assign the project to the matching agent pool.
     * @param agentPoolLocator 
     * @param body 
     */
    public addProjectToAgentPool(agentPoolLocator: string, body?: Project, options?: Configuration): Observable<Project> {
        const requestContextPromise = this.requestFactory.addProjectToAgentPool(agentPoolLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addProjectToAgentPool(rsp)));
            }));
    }
 
    /**
     * Create a new agent pool.
     * @param body 
     */
    public createAgentPool(body?: AgentPool, options?: Configuration): Observable<AgentPool> {
        const requestContextPromise = this.requestFactory.createAgentPool(body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAgentPool(rsp)));
            }));
    }
 
    /**
     * Delete the agent pool matching the locator.
     * @param agentPoolLocator 
     */
    public deleteAgentPool(agentPoolLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAgentPool(agentPoolLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAgentPool(rsp)));
            }));
    }
 
    /**
     * Unassign all projects from the matching agent pool.
     * @param agentPoolLocator 
     */
    public deleteAllProjectsFromAgentPool(agentPoolLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllProjectsFromAgentPool(agentPoolLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllProjectsFromAgentPool(rsp)));
            }));
    }
 
    /**
     * Unassign the project from the matching agent pool.
     * @param agentPoolLocator 
     * @param projectLocator 
     */
    public deleteProjectFromAgentPool(agentPoolLocator: string, projectLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteProjectFromAgentPool(agentPoolLocator, projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProjectFromAgentPool(rsp)));
            }));
    }
 
    /**
     * Get the agent pool matching the locator.
     * @param agentPoolLocator 
     * @param fields 
     */
    public getAgentPoolOfAgentPool(agentPoolLocator: string, fields?: string, options?: Configuration): Observable<AgentPool> {
        const requestContextPromise = this.requestFactory.getAgentPoolOfAgentPool(agentPoolLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentPoolOfAgentPool(rsp)));
            }));
    }
 
    /**
     * Get all agent pools.
     * @param locator 
     * @param fields 
     */
    public getAllAgentPools(locator?: string, fields?: string, options?: Configuration): Observable<AgentPools> {
        const requestContextPromise = this.requestFactory.getAllAgentPools(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAgentPools(rsp)));
            }));
    }
 
    /**
     * Get the agent of the matching agent pool.
     * @param agentPoolLocator 
     * @param locator 
     * @param fields 
     */
    public getAllAgentsFromAgentPool(agentPoolLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<Agents> {
        const requestContextPromise = this.requestFactory.getAllAgentsFromAgentPool(agentPoolLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAgentsFromAgentPool(rsp)));
            }));
    }
 
    /**
     * Get all projects of the matching agent pool.
     * @param agentPoolLocator 
     * @param fields 
     */
    public getAllProjectsFromAgentPool(agentPoolLocator: string, fields?: string, options?: Configuration): Observable<Projects> {
        const requestContextPromise = this.requestFactory.getAllProjectsFromAgentPool(agentPoolLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllProjectsFromAgentPool(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching agent pool.
     * @param agentPoolLocator 
     * @param field 
     */
    public getFieldFromAgentPool(agentPoolLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getFieldFromAgentPool(agentPoolLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFieldFromAgentPool(rsp)));
            }));
    }
 
    /**
     * Update a field of the matching agent pool.
     * @param agentPoolLocator 
     * @param field 
     * @param body 
     */
    public setAgentPoolField(agentPoolLocator: string, field: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setAgentPoolField(agentPoolLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAgentPoolField(rsp)));
            }));
    }
 
    /**
     * Update projects of the matching agent pool.
     * @param agentPoolLocator 
     * @param body 
     */
    public setAgentPoolProjects(agentPoolLocator: string, body?: Projects, options?: Configuration): Observable<Projects> {
        const requestContextPromise = this.requestFactory.setAgentPoolProjects(agentPoolLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAgentPoolProjects(rsp)));
            }));
    }
 
}

import { AuditApiRequestFactory, AuditApiResponseProcessor} from "../apis/AuditApi.ts";
export class ObservableAuditApi {
    private requestFactory: AuditApiRequestFactory;
    private responseProcessor: AuditApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuditApiRequestFactory,
        responseProcessor?: AuditApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuditApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuditApiResponseProcessor();
    }

    /**
     * Get all audit events.
     * @param locator 
     * @param fields 
     */
    public getAllAuditEvents(locator?: string, fields?: string, options?: Configuration): Observable<AuditEvents> {
        const requestContextPromise = this.requestFactory.getAllAuditEvents(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAuditEvents(rsp)));
            }));
    }
 
    /**
     * Get audit event matching the locator.
     * @param auditEventLocator 
     * @param fields 
     */
    public getAuditEvent(auditEventLocator: string, fields?: string, options?: Configuration): Observable<AuditEvent> {
        const requestContextPromise = this.requestFactory.getAuditEvent(auditEventLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuditEvent(rsp)));
            }));
    }
 
}

import { BuildApiRequestFactory, BuildApiResponseProcessor} from "../apis/BuildApi.ts";
export class ObservableBuildApi {
    private requestFactory: BuildApiRequestFactory;
    private responseProcessor: BuildApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BuildApiRequestFactory,
        responseProcessor?: BuildApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BuildApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BuildApiResponseProcessor();
    }

    /**
     * Add a VCS label to the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     * @param body 
     */
    public addBuildVcsLabel(buildLocator: string, locator?: string, fields?: string, body?: string, options?: Configuration): Observable<VcsLabels> {
        const requestContextPromise = this.requestFactory.addBuildVcsLabel(buildLocator, locator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBuildVcsLabel(rsp)));
            }));
    }
 
    /**
     * Adds a message to the build log. Service messages are accepted.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public addLogMessageToBuild(buildLocator: string, fields?: string, body?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.addLogMessageToBuild(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addLogMessageToBuild(rsp)));
            }));
    }
 
    /**
     * Add a build problem to the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public addProblemToBuild(buildLocator: string, fields?: string, body?: string, options?: Configuration): Observable<ProblemOccurrence> {
        const requestContextPromise = this.requestFactory.addProblemToBuild(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addProblemToBuild(rsp)));
            }));
    }
 
    /**
     * Add tags to the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public addTagsToBuild(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Observable<Tags> {
        const requestContextPromise = this.requestFactory.addTagsToBuild(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addTagsToBuild(rsp)));
            }));
    }
 
    /**
     * Add tags to multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public addTagsToMultipleBuilds(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Observable<MultipleOperationResult> {
        const requestContextPromise = this.requestFactory.addTagsToMultipleBuilds(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addTagsToMultipleBuilds(rsp)));
            }));
    }
 
    /**
     * Delete build matching the locator.
     * @param buildLocator 
     */
    public deleteBuild(buildLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBuild(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuild(rsp)));
            }));
    }
 
    /**
     * Remove the build comment matching the locator.
     * @param buildLocator 
     */
    public deleteBuildComment(buildLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBuildComment(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuildComment(rsp)));
            }));
    }
 
    /**
     * Delete comments of multiple matching builds.
     * @param buildLocator 
     * @param fields 
     */
    public deleteMultipleBuildComments(buildLocator: string, fields?: string, options?: Configuration): Observable<MultipleOperationResult> {
        const requestContextPromise = this.requestFactory.deleteMultipleBuildComments(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMultipleBuildComments(rsp)));
            }));
    }
 
    /**
     * Delete multiple builds matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public deleteMultipleBuilds(buildLocator: string, fields?: string, options?: Configuration): Observable<MultipleOperationResult> {
        const requestContextPromise = this.requestFactory.deleteMultipleBuilds(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMultipleBuilds(rsp)));
            }));
    }
 
    /**
     * Download specific file.
     * @param path 
     * @param buildLocator 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public downloadFileOfBuild(path: string, buildLocator: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadFileOfBuild(path, buildLocator, resolveParameters, logBuildUsage, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadFileOfBuild(rsp)));
            }));
    }
 
    /**
     * Get the build status of aggregated matching builds.
     * @param buildLocator 
     */
    public getAggregatedBuildStatus(buildLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getAggregatedBuildStatus(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAggregatedBuildStatus(rsp)));
            }));
    }
 
    /**
     * Get the status icon (in specified format) of aggregated matching builds.
     * @param buildLocator 
     * @param suffix 
     */
    public getAggregatedBuildStatusIcon(buildLocator: string, suffix: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getAggregatedBuildStatusIcon(buildLocator, suffix, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAggregatedBuildStatusIcon(rsp)));
            }));
    }
 
    /**
     * Get all builds.
     * @param locator 
     * @param fields 
     */
    public getAllBuilds(locator?: string, fields?: string, options?: Configuration): Observable<Builds> {
        const requestContextPromise = this.requestFactory.getAllBuilds(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuilds(rsp)));
            }));
    }
 
    /**
     * Get artifact dependency changes of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getArtifactDependencyChanges(buildLocator: string, fields?: string, options?: Configuration): Observable<BuildChanges> {
        const requestContextPromise = this.requestFactory.getArtifactDependencyChanges(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtifactDependencyChanges(rsp)));
            }));
    }
 
    /**
     * Get the artifacts' directory of the matching build.
     * @param buildLocator 
     */
    public getArtifactsDirectory(buildLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getArtifactsDirectory(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtifactsDirectory(rsp)));
            }));
    }
 
    /**
     * Get build matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public getBuild(buildLocator: string, fields?: string, options?: Configuration): Observable<Build> {
        const requestContextPromise = this.requestFactory.getBuild(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuild(rsp)));
            }));
    }
 
    /**
     * Get actual build parameters of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildActualParameters(buildLocator: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getBuildActualParameters(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildActualParameters(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching build.
     * @param buildLocator 
     * @param field 
     */
    public getBuildField(buildLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildField(buildLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildField(rsp)));
            }));
    }
 
    /**
     * Get the finish date of the matching build.
     * @param buildLocator 
     */
    public getBuildFinishDate(buildLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildFinishDate(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildFinishDate(rsp)));
            }));
    }
 
    /**
     * Get the number of the matching build.
     * @param buildLocator 
     */
    public getBuildNumber(buildLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildNumber(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildNumber(rsp)));
            }));
    }
 
    /**
     * Check if the matching build is pinned.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildPinInfo(buildLocator: string, fields?: string, options?: Configuration): Observable<PinInfo> {
        const requestContextPromise = this.requestFactory.getBuildPinInfo(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildPinInfo(rsp)));
            }));
    }
 
    /**
     * Get build problems of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildProblems(buildLocator: string, fields?: string, options?: Configuration): Observable<ProblemOccurrences> {
        const requestContextPromise = this.requestFactory.getBuildProblems(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildProblems(rsp)));
            }));
    }
 
    /**
     * Get related issues of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildRelatedIssues(buildLocator: string, fields?: string, options?: Configuration): Observable<IssuesUsages> {
        const requestContextPromise = this.requestFactory.getBuildRelatedIssues(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildRelatedIssues(rsp)));
            }));
    }
 
    /**
     * Get the resolvement status of the matching build.
     * @param buildLocator 
     * @param value 
     */
    public getBuildResolved(buildLocator: string, value: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildResolved(buildLocator, value, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildResolved(rsp)));
            }));
    }
 
    /**
     * Update a build parameter of the matching build.
     * @param buildLocator 
     * @param propertyName 
     */
    public getBuildResultingProperties(buildLocator: string, propertyName: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildResultingProperties(buildLocator, propertyName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildResultingProperties(rsp)));
            }));
    }
 
    /**
     * Get a source file of the matching build.
     * @param buildLocator 
     * @param fileName 
     */
    public getBuildSourceFile(buildLocator: string, fileName: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getBuildSourceFile(buildLocator, fileName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildSourceFile(rsp)));
            }));
    }
 
    /**
     * Get a statistical value of the matching build.
     * @param buildLocator 
     * @param name 
     */
    public getBuildStatisticValue(buildLocator: string, name: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildStatisticValue(buildLocator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildStatisticValue(rsp)));
            }));
    }
 
    /**
     * Get all statistical values of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildStatisticValues(buildLocator: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getBuildStatisticValues(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildStatisticValues(rsp)));
            }));
    }
 
    /**
     * Get the status icon (in specified format) of the matching build.
     * @param buildLocator 
     * @param suffix 
     */
    public getBuildStatusIcon(buildLocator: string, suffix: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getBuildStatusIcon(buildLocator, suffix, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildStatusIcon(rsp)));
            }));
    }
 
    /**
     * Get the build status text of the matching build.
     * @param buildLocator 
     */
    public getBuildStatusText(buildLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildStatusText(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildStatusText(rsp)));
            }));
    }
 
    /**
     * Get tags of the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     */
    public getBuildTags(buildLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<Tags> {
        const requestContextPromise = this.requestFactory.getBuildTags(buildLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildTags(rsp)));
            }));
    }
 
    /**
     * Get test occurrences of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildTestOccurrences(buildLocator: string, fields?: string, options?: Configuration): Observable<TestOccurrences> {
        const requestContextPromise = this.requestFactory.getBuildTestOccurrences(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildTestOccurrences(rsp)));
            }));
    }
 
    /**
     * Get VCS labels of the matching build.
     * @param buildLocator 
     * @param fields 
     */
    public getBuildVcsLabels(buildLocator: string, fields?: string, options?: Configuration): Observable<VcsLabels> {
        const requestContextPromise = this.requestFactory.getBuildVcsLabels(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildVcsLabels(rsp)));
            }));
    }
 
    /**
     * Check if the matching build is canceled.
     * @param buildLocator 
     * @param fields 
     */
    public getCanceledInfo(buildLocator: string, fields?: string, options?: Configuration): Observable<Comment> {
        const requestContextPromise = this.requestFactory.getCanceledInfo(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCanceledInfo(rsp)));
            }));
    }
 
    /**
     * Get metadata of specific file.
     * @param path 
     * @param buildLocator 
     * @param fields 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public getFileMetadataOfBuild(path: string, buildLocator: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getFileMetadataOfBuild(path, buildLocator, fields, resolveParameters, logBuildUsage, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileMetadataOfBuild(rsp)));
            }));
    }
 
    /**
     * List files under this path.
     * @param path 
     * @param buildLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public getFilesListForSubpathOfBuild(path: string, buildLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Observable<Files> {
        const requestContextPromise = this.requestFactory.getFilesListForSubpathOfBuild(path, buildLocator, basePath, locator, fields, resolveParameters, logBuildUsage, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesListForSubpathOfBuild(rsp)));
            }));
    }
 
    /**
     * List all files.
     * @param buildLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public getFilesListOfBuild(buildLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Observable<Files> {
        const requestContextPromise = this.requestFactory.getFilesListOfBuild(buildLocator, basePath, locator, fields, resolveParameters, logBuildUsage, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesListOfBuild(rsp)));
            }));
    }
 
    /**
     * Get multiple builds matching the locator.
     * @param buildLocator 
     * @param fields 
     */
    public getMultipleBuilds(buildLocator: string, fields?: string, options?: Configuration): Observable<Builds> {
        const requestContextPromise = this.requestFactory.getMultipleBuilds(buildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMultipleBuilds(rsp)));
            }));
    }
 
    /**
     * Get specific file zipped.
     * @param path 
     * @param buildLocator 
     * @param basePath 
     * @param locator 
     * @param name 
     * @param resolveParameters 
     * @param logBuildUsage 
     */
    public getZippedFileOfBuild(path: string, buildLocator: string, basePath?: string, locator?: string, name?: string, resolveParameters?: boolean, logBuildUsage?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getZippedFileOfBuild(path, buildLocator, basePath, locator, name, resolveParameters, logBuildUsage, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getZippedFileOfBuild(rsp)));
            }));
    }
 
    /**
     * Starts the queued build as an agent-less build and returns the corresponding running build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public markBuildAsRunning(buildLocator: string, fields?: string, body?: string, options?: Configuration): Observable<Build> {
        const requestContextPromise = this.requestFactory.markBuildAsRunning(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.markBuildAsRunning(rsp)));
            }));
    }
 
    /**
     * Pin multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public pinMultipleBuilds(buildLocator: string, fields?: string, body?: PinInfo, options?: Configuration): Observable<MultipleOperationResult> {
        const requestContextPromise = this.requestFactory.pinMultipleBuilds(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pinMultipleBuilds(rsp)));
            }));
    }
 
    /**
     * Remove tags from multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public removeMultipleBuildTags(buildLocator: string, fields?: string, body?: Tags, options?: Configuration): Observable<MultipleOperationResult> {
        const requestContextPromise = this.requestFactory.removeMultipleBuildTags(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeMultipleBuildTags(rsp)));
            }));
    }
 
    /**
     * Remove build parameters from the matching build.
     * @param buildLocator 
     */
    public resetBuildFinishProperties(buildLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.resetBuildFinishProperties(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetBuildFinishProperties(rsp)));
            }));
    }
 
    /**
     * Update the comment on the matching build.
     * @param buildLocator 
     * @param body 
     */
    public setBuildComment(buildLocator: string, body?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.setBuildComment(buildLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildComment(rsp)));
            }));
    }
 
    /**
     * Marks the running build as finished by passing agent the current time of the build to finish.
     * @param buildLocator 
     * @param body 
     */
    public setBuildFinishDate(buildLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setBuildFinishDate(buildLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildFinishDate(rsp)));
            }));
    }
 
    /**
     * Update the number of the matching build.
     * @param buildLocator 
     * @param body 
     */
    public setBuildNumber(buildLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setBuildNumber(buildLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildNumber(rsp)));
            }));
    }
 
    /**
     * Update the pin info of the matching build.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public setBuildPinInfo(buildLocator: string, fields?: string, body?: PinInfo, options?: Configuration): Observable<PinInfo> {
        const requestContextPromise = this.requestFactory.setBuildPinInfo(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildPinInfo(rsp)));
            }));
    }
 
    /**
     * Update the build status of the matching build.
     * @param buildLocator 
     * @param body 
     */
    public setBuildStatusText(buildLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setBuildStatusText(buildLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildStatusText(rsp)));
            }));
    }
 
    /**
     * Update tags of the matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     * @param body 
     */
    public setBuildTags(buildLocator: string, locator?: string, fields?: string, body?: Tags, options?: Configuration): Observable<Tags> {
        const requestContextPromise = this.requestFactory.setBuildTags(buildLocator, locator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildTags(rsp)));
            }));
    }
 
    /**
     * Marks the running build as finished by passing agent the current time of the build to finish.
     * @param buildLocator 
     */
    public setFinishedTime(buildLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setFinishedTime(buildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setFinishedTime(rsp)));
            }));
    }
 
    /**
     * Update comments in multiple matching builds.
     * @param buildLocator 
     * @param fields 
     * @param body 
     */
    public setMultipleBuildComments(buildLocator: string, fields?: string, body?: string, options?: Configuration): Observable<MultipleOperationResult> {
        const requestContextPromise = this.requestFactory.setMultipleBuildComments(buildLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setMultipleBuildComments(rsp)));
            }));
    }
 
}

import { BuildQueueApiRequestFactory, BuildQueueApiResponseProcessor} from "../apis/BuildQueueApi.ts";
export class ObservableBuildQueueApi {
    private requestFactory: BuildQueueApiRequestFactory;
    private responseProcessor: BuildQueueApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BuildQueueApiRequestFactory,
        responseProcessor?: BuildQueueApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BuildQueueApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BuildQueueApiResponseProcessor();
    }

    /**
     * Add a new build to the queue.
     * @param moveToTop 
     * @param body 
     */
    public addBuildToQueue(moveToTop?: boolean, body?: Build, options?: Configuration): Observable<Build> {
        const requestContextPromise = this.requestFactory.addBuildToQueue(moveToTop, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBuildToQueue(rsp)));
            }));
    }
 
    /**
     * Add tags to the matching build.
     * @param buildLocator 
     * @param body 
     */
    public addTagsToBuildOfBuildQueue(buildLocator: string, body?: Tags, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.addTagsToBuildOfBuildQueue(buildLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addTagsToBuildOfBuildQueue(rsp)));
            }));
    }
 
    /**
     * Cancel a queued matching build.
     * @param queuedBuildLocator 
     * @param body 
     */
    public cancelQueuedBuild(queuedBuildLocator: string, body?: BuildCancelRequest, options?: Configuration): Observable<Build> {
        const requestContextPromise = this.requestFactory.cancelQueuedBuild(queuedBuildLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelQueuedBuild(rsp)));
            }));
    }
 
    /**
     * Delete all queued builds.
     * @param locator 
     * @param fields 
     */
    public deleteAllQueuedBuilds(locator?: string, fields?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllQueuedBuilds(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllQueuedBuilds(rsp)));
            }));
    }
 
    /**
     * Delete a queued matching build.
     * @param queuedBuildLocator 
     */
    public deleteQueuedBuild(queuedBuildLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteQueuedBuild(queuedBuildLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteQueuedBuild(rsp)));
            }));
    }
 
    /**
     * Get all queued builds.
     * @param locator 
     * @param fields 
     */
    public getAllQueuedBuilds(locator?: string, fields?: string, options?: Configuration): Observable<Builds> {
        const requestContextPromise = this.requestFactory.getAllQueuedBuilds(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllQueuedBuilds(rsp)));
            }));
    }
 
    /**
     * Get compatible agents for a queued matching build.
     * @param queuedBuildLocator 
     * @param fields 
     */
    public getCompatibleAgentsForBuild(queuedBuildLocator: string, fields?: string, options?: Configuration): Observable<Agents> {
        const requestContextPromise = this.requestFactory.getCompatibleAgentsForBuild(queuedBuildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompatibleAgentsForBuild(rsp)));
            }));
    }
 
    /**
     * Get a queued matching build.
     * @param queuedBuildLocator 
     * @param fields 
     */
    public getQueuedBuild(queuedBuildLocator: string, fields?: string, options?: Configuration): Observable<Build> {
        const requestContextPromise = this.requestFactory.getQueuedBuild(queuedBuildLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQueuedBuild(rsp)));
            }));
    }
 
    /**
     * Get the queue position of a queued matching build.
     * @param queuePosition 
     * @param fields 
     */
    public getQueuedBuildPosition(queuePosition: string, fields?: string, options?: Configuration): Observable<Build> {
        const requestContextPromise = this.requestFactory.getQueuedBuildPosition(queuePosition, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQueuedBuildPosition(rsp)));
            }));
    }
 
    /**
     * Get tags of the queued matching build.
     * @param buildLocator 
     * @param locator 
     * @param fields 
     */
    public getQueuedBuildTags(buildLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<Tags> {
        const requestContextPromise = this.requestFactory.getQueuedBuildTags(buildLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQueuedBuildTags(rsp)));
            }));
    }
 
    /**
     * Update the queue position of a queued matching build.
     * @param queuePosition 
     * @param fields 
     * @param body 
     */
    public setQueuedBuildPosition(queuePosition: string, fields?: string, body?: Build, options?: Configuration): Observable<Build> {
        const requestContextPromise = this.requestFactory.setQueuedBuildPosition(queuePosition, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setQueuedBuildPosition(rsp)));
            }));
    }
 
    /**
     * Update the build queue order.
     * @param fields 
     * @param body 
     */
    public setQueuedBuildsOrder(fields?: string, body?: Builds, options?: Configuration): Observable<Builds> {
        const requestContextPromise = this.requestFactory.setQueuedBuildsOrder(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setQueuedBuildsOrder(rsp)));
            }));
    }
 
}

import { BuildTypeApiRequestFactory, BuildTypeApiResponseProcessor} from "../apis/BuildTypeApi.ts";
export class ObservableBuildTypeApi {
    private requestFactory: BuildTypeApiRequestFactory;
    private responseProcessor: BuildTypeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BuildTypeApiRequestFactory,
        responseProcessor?: BuildTypeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BuildTypeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BuildTypeApiResponseProcessor();
    }

    /**
     * Add an agent requirement to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addAgentRequirementToBuildType(btLocator: string, fields?: string, body?: AgentRequirement, options?: Configuration): Observable<AgentRequirement> {
        const requestContextPromise = this.requestFactory.addAgentRequirementToBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAgentRequirementToBuildType(rsp)));
            }));
    }
 
    /**
     * Add an artifact dependency to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addArtifactDependencyToBuildType(btLocator: string, fields?: string, body?: ArtifactDependency, options?: Configuration): Observable<ArtifactDependency> {
        const requestContextPromise = this.requestFactory.addArtifactDependencyToBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addArtifactDependencyToBuildType(rsp)));
            }));
    }
 
    /**
     * Add build feature to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addBuildFeatureToBuildType(btLocator: string, fields?: string, body?: Feature, options?: Configuration): Observable<Feature> {
        const requestContextPromise = this.requestFactory.addBuildFeatureToBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBuildFeatureToBuildType(rsp)));
            }));
    }
 
    /**
     * Add a build step to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addBuildStepToBuildType(btLocator: string, fields?: string, body?: Step, options?: Configuration): Observable<Step> {
        const requestContextPromise = this.requestFactory.addBuildStepToBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBuildStepToBuildType(rsp)));
            }));
    }
 
    /**
     * Add a build template to the matching build configuration.
     * @param btLocator 
     * @param optimizeSettings 
     * @param fields 
     * @param body 
     */
    public addBuildTemplate(btLocator: string, optimizeSettings?: boolean, fields?: string, body?: BuildType, options?: Configuration): Observable<BuildType> {
        const requestContextPromise = this.requestFactory.addBuildTemplate(btLocator, optimizeSettings, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBuildTemplate(rsp)));
            }));
    }
 
    /**
     * Update build feature parameter for the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param parameterName 
     * @param body 
     */
    public addParameterToBuildFeature(btLocator: string, featureId: string, parameterName: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.addParameterToBuildFeature(btLocator, featureId, parameterName, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addParameterToBuildFeature(rsp)));
            }));
    }
 
    /**
     * Add a parameter to a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param parameterName 
     * @param body 
     */
    public addParameterToBuildStep(btLocator: string, stepId: string, parameterName: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.addParameterToBuildStep(btLocator, stepId, parameterName, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addParameterToBuildStep(rsp)));
            }));
    }
 
    /**
     * Add a snapshot dependency to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addSnapshotDependencyToBuildType(btLocator: string, fields?: string, body?: SnapshotDependency, options?: Configuration): Observable<SnapshotDependency> {
        const requestContextPromise = this.requestFactory.addSnapshotDependencyToBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addSnapshotDependencyToBuildType(rsp)));
            }));
    }
 
    /**
     * Add a trigger to the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addTriggerToBuildType(btLocator: string, fields?: string, body?: Trigger, options?: Configuration): Observable<Trigger> {
        const requestContextPromise = this.requestFactory.addTriggerToBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addTriggerToBuildType(rsp)));
            }));
    }
 
    /**
     * Add a VCS root to the matching build.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public addVcsRootToBuildType(btLocator: string, fields?: string, body?: VcsRootEntry, options?: Configuration): Observable<VcsRootEntry> {
        const requestContextPromise = this.requestFactory.addVcsRootToBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addVcsRootToBuildType(rsp)));
            }));
    }
 
    /**
     * Create a build parameter.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public createBuildParameterOfBuildType(btLocator: string, fields?: string, body?: Property, options?: Configuration): Observable<Property> {
        const requestContextPromise = this.requestFactory.createBuildParameterOfBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBuildParameterOfBuildType(rsp)));
            }));
    }
 
    /**
     * Create a new build configuration.
     * @param fields 
     * @param body 
     */
    public createBuildType(fields?: string, body?: BuildType, options?: Configuration): Observable<BuildType> {
        const requestContextPromise = this.requestFactory.createBuildType(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBuildType(rsp)));
            }));
    }
 
    /**
     * Remove an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     */
    public deleteAgentRequirement(btLocator: string, agentRequirementLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAgentRequirement(btLocator, agentRequirementLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAgentRequirement(rsp)));
            }));
    }
 
    /**
     * Remove an artifact dependency from the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     */
    public deleteArtifactDependency(btLocator: string, artifactDepLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteArtifactDependency(btLocator, artifactDepLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteArtifactDependency(rsp)));
            }));
    }
 
    /**
     * Delete build parameter.
     * @param name 
     * @param btLocator 
     */
    public deleteBuildParameterOfBuildType(name: string, btLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBuildParameterOfBuildType(name, btLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuildParameterOfBuildType(rsp)));
            }));
    }
 
    /**
     * Delete all build parameters.
     * @param btLocator 
     */
    public deleteBuildParametersOfBuildType(btLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBuildParametersOfBuildType(btLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuildParametersOfBuildType(rsp)));
            }));
    }
 
    /**
     * Delete a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     */
    public deleteBuildStep(btLocator: string, stepId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBuildStep(btLocator, stepId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuildStep(rsp)));
            }));
    }
 
    /**
     * Update a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     * @param body 
     */
    public deleteBuildStepParameters(btLocator: string, stepId: string, fields?: string, body?: Properties, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.deleteBuildStepParameters(btLocator, stepId, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuildStepParameters(rsp)));
            }));
    }
 
    /**
     * Delete build configuration matching the locator.
     * @param btLocator 
     */
    public deleteBuildType(btLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBuildType(btLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuildType(rsp)));
            }));
    }
 
    /**
     * Remove a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     */
    public deleteFeatureOfBuildType(btLocator: string, featureId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteFeatureOfBuildType(btLocator, featureId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFeatureOfBuildType(rsp)));
            }));
    }
 
    /**
     * Delete a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     */
    public deleteSnapshotDependency(btLocator: string, snapshotDepLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSnapshotDependency(btLocator, snapshotDepLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSnapshotDependency(rsp)));
            }));
    }
 
    /**
     * Delete a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     */
    public deleteTrigger(btLocator: string, triggerLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteTrigger(btLocator, triggerLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTrigger(rsp)));
            }));
    }
 
    /**
     * Remove a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     */
    public deleteVcsRootOfBuildType(btLocator: string, vcsRootLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteVcsRootOfBuildType(btLocator, vcsRootLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVcsRootOfBuildType(rsp)));
            }));
    }
 
    /**
     * Download specific file.
     * @param path 
     * @param btLocator 
     * @param resolveParameters 
     */
    public downloadFileOfBuildType(path: string, btLocator: string, resolveParameters?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadFileOfBuildType(path, btLocator, resolveParameters, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadFileOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fields 
     */
    public getAgentRequirement(btLocator: string, agentRequirementLocator: string, fields?: string, options?: Configuration): Observable<AgentRequirement> {
        const requestContextPromise = this.requestFactory.getAgentRequirement(btLocator, agentRequirementLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentRequirement(rsp)));
            }));
    }
 
    /**
     * Get a setting of an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fieldName 
     */
    public getAgentRequirementParameter(btLocator: string, agentRequirementLocator: string, fieldName: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getAgentRequirementParameter(btLocator, agentRequirementLocator, fieldName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentRequirementParameter(rsp)));
            }));
    }
 
    /**
     * Get external IDs of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public getAliases(btLocator: string, field?: string, options?: Configuration): Observable<Items> {
        const requestContextPromise = this.requestFactory.getAliases(btLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliases(rsp)));
            }));
    }
 
    /**
     * Get all agent requirements of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllAgentRequirements(btLocator: string, fields?: string, options?: Configuration): Observable<AgentRequirements> {
        const requestContextPromise = this.requestFactory.getAllAgentRequirements(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAgentRequirements(rsp)));
            }));
    }
 
    /**
     * Get all artifact dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllArtifactDependencies(btLocator: string, fields?: string, options?: Configuration): Observable<ArtifactDependencies> {
        const requestContextPromise = this.requestFactory.getAllArtifactDependencies(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllArtifactDependencies(rsp)));
            }));
    }
 
    /**
     * Get all branches of the matching build configuration.
     * @param btLocator 
     * @param locator 
     * @param fields 
     */
    public getAllBranchesOfBuildType(btLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<Branches> {
        const requestContextPromise = this.requestFactory.getAllBranchesOfBuildType(btLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBranchesOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get all parameters of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     */
    public getAllBuildFeatureParameters(btLocator: string, featureId: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getAllBuildFeatureParameters(btLocator, featureId, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuildFeatureParameters(rsp)));
            }));
    }
 
    /**
     * Get all build features of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllBuildFeatures(btLocator: string, fields?: string, options?: Configuration): Observable<Features> {
        const requestContextPromise = this.requestFactory.getAllBuildFeatures(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuildFeatures(rsp)));
            }));
    }
 
    /**
     * Get all parameters of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     */
    public getAllBuildStepParameters(btLocator: string, stepId: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getAllBuildStepParameters(btLocator, stepId, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuildStepParameters(rsp)));
            }));
    }
 
    /**
     * Get all build steps of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllBuildSteps(btLocator: string, fields?: string, options?: Configuration): Observable<Steps> {
        const requestContextPromise = this.requestFactory.getAllBuildSteps(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuildSteps(rsp)));
            }));
    }
 
    /**
     * Get all build templates of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllBuildTemplates(btLocator: string, fields?: string, options?: Configuration): Observable<BuildTypes> {
        const requestContextPromise = this.requestFactory.getAllBuildTemplates(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuildTemplates(rsp)));
            }));
    }
 
    /**
     * Get all build configurations.
     * @param locator 
     * @param fields 
     */
    public getAllBuildTypes(locator?: string, fields?: string, options?: Configuration): Observable<BuildTypes> {
        const requestContextPromise = this.requestFactory.getAllBuildTypes(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuildTypes(rsp)));
            }));
    }
 
    /**
     * Get all investigations of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllInvestigationsOfBuildType(btLocator: string, fields?: string, options?: Configuration): Observable<Investigations> {
        const requestContextPromise = this.requestFactory.getAllInvestigationsOfBuildType(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInvestigationsOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get all snapshot dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllSnapshotDependencies(btLocator: string, fields?: string, options?: Configuration): Observable<SnapshotDependencies> {
        const requestContextPromise = this.requestFactory.getAllSnapshotDependencies(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllSnapshotDependencies(rsp)));
            }));
    }
 
    /**
     * Get all triggers of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllTriggers(btLocator: string, fields?: string, options?: Configuration): Observable<Triggers> {
        const requestContextPromise = this.requestFactory.getAllTriggers(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTriggers(rsp)));
            }));
    }
 
    /**
     * Get all VCS roots of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getAllVcsRootsOfBuildType(btLocator: string, fields?: string, options?: Configuration): Observable<VcsRootEntries> {
        const requestContextPromise = this.requestFactory.getAllVcsRootsOfBuildType(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllVcsRootsOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fields 
     */
    public getArtifactDependency(btLocator: string, artifactDepLocator: string, fields?: string, options?: Configuration): Observable<ArtifactDependency> {
        const requestContextPromise = this.requestFactory.getArtifactDependency(btLocator, artifactDepLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtifactDependency(rsp)));
            }));
    }
 
    /**
     * Get a parameter of an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fieldName 
     */
    public getArtifactDependencyParameter(btLocator: string, artifactDepLocator: string, fieldName: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getArtifactDependencyParameter(btLocator, artifactDepLocator, fieldName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getArtifactDependencyParameter(rsp)));
            }));
    }
 
    /**
     * Get a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     */
    public getBuildFeature(btLocator: string, featureId: string, fields?: string, options?: Configuration): Observable<Feature> {
        const requestContextPromise = this.requestFactory.getBuildFeature(btLocator, featureId, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildFeature(rsp)));
            }));
    }
 
    /**
     * Get a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param parameterName 
     */
    public getBuildFeatureParameter(btLocator: string, featureId: string, parameterName: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildFeatureParameter(btLocator, featureId, parameterName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildFeatureParameter(rsp)));
            }));
    }
 
    /**
     * Get the setting of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param name 
     */
    public getBuildFeatureSetting(btLocator: string, featureId: string, name: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildFeatureSetting(btLocator, featureId, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildFeatureSetting(rsp)));
            }));
    }
 
    /**
     * Get build parameter.
     * @param name 
     * @param btLocator 
     * @param fields 
     */
    public getBuildParameterOfBuildType(name: string, btLocator: string, fields?: string, options?: Configuration): Observable<Property> {
        const requestContextPromise = this.requestFactory.getBuildParameterOfBuildType(name, btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameterOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get build parameter specification.
     * @param name 
     * @param btLocator 
     */
    public getBuildParameterSpecificationOfBuildType(name: string, btLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildParameterSpecificationOfBuildType(name, btLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameterSpecificationOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get type of build parameter.
     * @param name 
     * @param btLocator 
     */
    public getBuildParameterTypeOfBuildType(name: string, btLocator: string, options?: Configuration): Observable<Type> {
        const requestContextPromise = this.requestFactory.getBuildParameterTypeOfBuildType(name, btLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameterTypeOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get value of build parameter.
     * @param name 
     * @param btLocator 
     */
    public getBuildParameterValueOfBuildType(name: string, btLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildParameterValueOfBuildType(name, btLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameterValueOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get build parameters.
     * @param btLocator 
     * @param locator 
     * @param fields 
     */
    public getBuildParametersOfBuildType(btLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getBuildParametersOfBuildType(btLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParametersOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     */
    public getBuildStep(btLocator: string, stepId: string, fields?: string, options?: Configuration): Observable<Step> {
        const requestContextPromise = this.requestFactory.getBuildStep(btLocator, stepId, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildStep(rsp)));
            }));
    }
 
    /**
     * Get a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param parameterName 
     */
    public getBuildStepParameter(btLocator: string, stepId: string, parameterName: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildStepParameter(btLocator, stepId, parameterName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildStepParameter(rsp)));
            }));
    }
 
    /**
     * Get the setting of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fieldName 
     */
    public getBuildStepSetting(btLocator: string, stepId: string, fieldName: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildStepSetting(btLocator, stepId, fieldName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildStepSetting(rsp)));
            }));
    }
 
    /**
     * Get a template of the matching build configuration.
     * @param btLocator 
     * @param templateLocator 
     * @param fields 
     */
    public getBuildTemplate(btLocator: string, templateLocator: string, fields?: string, options?: Configuration): Observable<BuildType> {
        const requestContextPromise = this.requestFactory.getBuildTemplate(btLocator, templateLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildTemplate(rsp)));
            }));
    }
 
    /**
     * Get build configuration matching the locator.
     * @param btLocator 
     * @param fields 
     */
    public getBuildType(btLocator: string, fields?: string, options?: Configuration): Observable<BuildType> {
        const requestContextPromise = this.requestFactory.getBuildType(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildType(rsp)));
            }));
    }
 
    /**
     * Get tags of builds of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public getBuildTypeBuildTags(btLocator: string, field?: string, options?: Configuration): Observable<Tags> {
        const requestContextPromise = this.requestFactory.getBuildTypeBuildTags(btLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildTypeBuildTags(rsp)));
            }));
    }
 
    /**
     * Get builds of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getBuildTypeBuilds(btLocator: string, fields?: string, options?: Configuration): Observable<Builds> {
        const requestContextPromise = this.requestFactory.getBuildTypeBuilds(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildTypeBuilds(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching build configuration.
     * @param btLocator 
     * @param field 
     */
    public getBuildTypeField(btLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildTypeField(btLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildTypeField(rsp)));
            }));
    }
 
    /**
     * Get the settings file of the matching build configuration.
     * @param btLocator 
     */
    public getBuildTypeSettingsFile(btLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildTypeSettingsFile(btLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildTypeSettingsFile(rsp)));
            }));
    }
 
    /**
     * Get metadata of specific file.
     * @param path 
     * @param btLocator 
     * @param fields 
     * @param resolveParameters 
     */
    public getFileMetadataOfBuildType(path: string, btLocator: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getFileMetadataOfBuildType(path, btLocator, fields, resolveParameters, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileMetadataOfBuildType(rsp)));
            }));
    }
 
    /**
     * List files under this path.
     * @param path 
     * @param btLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     */
    public getFilesListForSubpathOfBuildType(path: string, btLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Observable<Files> {
        const requestContextPromise = this.requestFactory.getFilesListForSubpathOfBuildType(path, btLocator, basePath, locator, fields, resolveParameters, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesListForSubpathOfBuildType(rsp)));
            }));
    }
 
    /**
     * List all files.
     * @param btLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     * @param resolveParameters 
     */
    public getFilesListOfBuildType(btLocator: string, basePath?: string, locator?: string, fields?: string, resolveParameters?: boolean, options?: Configuration): Observable<Files> {
        const requestContextPromise = this.requestFactory.getFilesListOfBuildType(btLocator, basePath, locator, fields, resolveParameters, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesListOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     * @param fields 
     */
    public getSnapshotDependency(btLocator: string, snapshotDepLocator: string, fields?: string, options?: Configuration): Observable<SnapshotDependency> {
        const requestContextPromise = this.requestFactory.getSnapshotDependency(btLocator, snapshotDepLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSnapshotDependency(rsp)));
            }));
    }
 
    /**
     * Get a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fields 
     */
    public getTrigger(btLocator: string, triggerLocator: string, fields?: string, options?: Configuration): Observable<Trigger> {
        const requestContextPromise = this.requestFactory.getTrigger(btLocator, triggerLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTrigger(rsp)));
            }));
    }
 
    /**
     * Get a parameter of a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fieldName 
     */
    public getTriggerParameter(btLocator: string, triggerLocator: string, fieldName: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getTriggerParameter(btLocator, triggerLocator, fieldName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTriggerParameter(rsp)));
            }));
    }
 
    /**
     * Get a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param fields 
     */
    public getVcsRoot(btLocator: string, vcsRootLocator: string, fields?: string, options?: Configuration): Observable<VcsRootEntry> {
        const requestContextPromise = this.requestFactory.getVcsRoot(btLocator, vcsRootLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRoot(rsp)));
            }));
    }
 
    /**
     * Get checkout rules of a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     */
    public getVcsRootCheckoutRules(btLocator: string, vcsRootLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getVcsRootCheckoutRules(btLocator, vcsRootLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootCheckoutRules(rsp)));
            }));
    }
 
    /**
     * Get all VCS root instances of the matching build configuration.
     * @param btLocator 
     * @param fields 
     */
    public getVcsRootInstancesOfBuildType(btLocator: string, fields?: string, options?: Configuration): Observable<VcsRootInstances> {
        const requestContextPromise = this.requestFactory.getVcsRootInstancesOfBuildType(btLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootInstancesOfBuildType(rsp)));
            }));
    }
 
    /**
     * Get specific file zipped.
     * @param path 
     * @param btLocator 
     * @param basePath 
     * @param locator 
     * @param name 
     * @param resolveParameters 
     */
    public getZippedFileOfBuildType(path: string, btLocator: string, basePath?: string, locator?: string, name?: string, resolveParameters?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getZippedFileOfBuildType(path, btLocator, basePath, locator, name, resolveParameters, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getZippedFileOfBuildType(rsp)));
            }));
    }
 
    /**
     * Detach all templates from the matching build configuration.
     * @param btLocator 
     * @param inlineSettings 
     */
    public removeAllTemplates(btLocator: string, inlineSettings?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeAllTemplates(btLocator, inlineSettings, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeAllTemplates(rsp)));
            }));
    }
 
    /**
     * Detach a template from the matching build configuration.
     * @param btLocator 
     * @param templateLocator 
     * @param inlineSettings 
     */
    public removeTemplate(btLocator: string, templateLocator: string, inlineSettings?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeTemplate(btLocator, templateLocator, inlineSettings, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeTemplate(rsp)));
            }));
    }
 
    /**
     * Update an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fields 
     * @param body 
     */
    public replaceAgentRequirement(btLocator: string, agentRequirementLocator: string, fields?: string, body?: AgentRequirement, options?: Configuration): Observable<AgentRequirement> {
        const requestContextPromise = this.requestFactory.replaceAgentRequirement(btLocator, agentRequirementLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceAgentRequirement(rsp)));
            }));
    }
 
    /**
     * Update all agent requirements of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllAgentRequirements(btLocator: string, fields?: string, body?: AgentRequirements, options?: Configuration): Observable<AgentRequirements> {
        const requestContextPromise = this.requestFactory.replaceAllAgentRequirements(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceAllAgentRequirements(rsp)));
            }));
    }
 
    /**
     * Update all artifact dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllArtifactDependencies(btLocator: string, fields?: string, body?: ArtifactDependencies, options?: Configuration): Observable<ArtifactDependencies> {
        const requestContextPromise = this.requestFactory.replaceAllArtifactDependencies(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceAllArtifactDependencies(rsp)));
            }));
    }
 
    /**
     * Update all build features of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllBuildFeatures(btLocator: string, fields?: string, body?: Features, options?: Configuration): Observable<Features> {
        const requestContextPromise = this.requestFactory.replaceAllBuildFeatures(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceAllBuildFeatures(rsp)));
            }));
    }
 
    /**
     * Update all build steps of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllBuildSteps(btLocator: string, fields?: string, body?: Steps, options?: Configuration): Observable<Steps> {
        const requestContextPromise = this.requestFactory.replaceAllBuildSteps(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceAllBuildSteps(rsp)));
            }));
    }
 
    /**
     * Update all snapshot dependencies of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllSnapshotDependencies(btLocator: string, fields?: string, body?: SnapshotDependencies, options?: Configuration): Observable<SnapshotDependencies> {
        const requestContextPromise = this.requestFactory.replaceAllSnapshotDependencies(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceAllSnapshotDependencies(rsp)));
            }));
    }
 
    /**
     * Update all triggers of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllTriggers(btLocator: string, fields?: string, body?: Triggers, options?: Configuration): Observable<Triggers> {
        const requestContextPromise = this.requestFactory.replaceAllTriggers(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceAllTriggers(rsp)));
            }));
    }
 
    /**
     * Update all VCS roots of the matching build configuration.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public replaceAllVcsRoots(btLocator: string, fields?: string, body?: VcsRootEntries, options?: Configuration): Observable<VcsRootEntries> {
        const requestContextPromise = this.requestFactory.replaceAllVcsRoots(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceAllVcsRoots(rsp)));
            }));
    }
 
    /**
     * Update an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fields 
     * @param body 
     */
    public replaceArtifactDependency(btLocator: string, artifactDepLocator: string, fields?: string, body?: ArtifactDependency, options?: Configuration): Observable<ArtifactDependency> {
        const requestContextPromise = this.requestFactory.replaceArtifactDependency(btLocator, artifactDepLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceArtifactDependency(rsp)));
            }));
    }
 
    /**
     * Update a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     * @param body 
     */
    public replaceBuildFeature(btLocator: string, featureId: string, fields?: string, body?: Feature, options?: Configuration): Observable<Feature> {
        const requestContextPromise = this.requestFactory.replaceBuildFeature(btLocator, featureId, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceBuildFeature(rsp)));
            }));
    }
 
    /**
     * Update a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param fields 
     * @param body 
     */
    public replaceBuildFeatureParameters(btLocator: string, featureId: string, fields?: string, body?: Properties, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.replaceBuildFeatureParameters(btLocator, featureId, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceBuildFeatureParameters(rsp)));
            }));
    }
 
    /**
     * Replace a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fields 
     * @param body 
     */
    public replaceBuildStep(btLocator: string, stepId: string, fields?: string, body?: Step, options?: Configuration): Observable<Step> {
        const requestContextPromise = this.requestFactory.replaceBuildStep(btLocator, stepId, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceBuildStep(rsp)));
            }));
    }
 
    /**
     * Update a snapshot dependency of the matching build configuration.
     * @param btLocator 
     * @param snapshotDepLocator 
     * @param fields 
     * @param body 
     */
    public replaceSnapshotDependency(btLocator: string, snapshotDepLocator: string, fields?: string, body?: SnapshotDependency, options?: Configuration): Observable<SnapshotDependency> {
        const requestContextPromise = this.requestFactory.replaceSnapshotDependency(btLocator, snapshotDepLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceSnapshotDependency(rsp)));
            }));
    }
 
    /**
     * Update a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fields 
     * @param body 
     */
    public replaceTrigger(btLocator: string, triggerLocator: string, fields?: string, body?: Trigger, options?: Configuration): Observable<Trigger> {
        const requestContextPromise = this.requestFactory.replaceTrigger(btLocator, triggerLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceTrigger(rsp)));
            }));
    }
 
    /**
     * Update a parameter of an agent requirement of the matching build configuration.
     * @param btLocator 
     * @param agentRequirementLocator 
     * @param fieldName 
     * @param body 
     */
    public setAgentRequirementParameter(btLocator: string, agentRequirementLocator: string, fieldName: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setAgentRequirementParameter(btLocator, agentRequirementLocator, fieldName, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAgentRequirementParameter(rsp)));
            }));
    }
 
    /**
     * Update a parameter of an artifact dependency of the matching build configuration.
     * @param btLocator 
     * @param artifactDepLocator 
     * @param fieldName 
     * @param body 
     */
    public setArtifactDependencyParameter(btLocator: string, artifactDepLocator: string, fieldName: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setArtifactDependencyParameter(btLocator, artifactDepLocator, fieldName, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setArtifactDependencyParameter(rsp)));
            }));
    }
 
    /**
     * Update a parameter of a build feature of the matching build configuration.
     * @param btLocator 
     * @param featureId 
     * @param name 
     * @param body 
     */
    public setBuildFeatureParameter(btLocator: string, featureId: string, name: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setBuildFeatureParameter(btLocator, featureId, name, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildFeatureParameter(rsp)));
            }));
    }
 
    /**
     * Update a parameter of a build step of the matching build configuration.
     * @param btLocator 
     * @param stepId 
     * @param fieldName 
     * @param body 
     */
    public setBuildStepParameter(btLocator: string, stepId: string, fieldName: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setBuildStepParameter(btLocator, stepId, fieldName, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildStepParameter(rsp)));
            }));
    }
 
    /**
     * Update a field of the matching build configuration.
     * @param btLocator 
     * @param field 
     * @param body 
     */
    public setBuildTypeField(btLocator: string, field: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setBuildTypeField(btLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildTypeField(rsp)));
            }));
    }
 
    /**
     * Update all templates of the matching build configuration.
     * @param btLocator 
     * @param optimizeSettings 
     * @param fields 
     * @param body 
     */
    public setBuildTypeTemplates(btLocator: string, optimizeSettings?: boolean, fields?: string, body?: BuildTypes, options?: Configuration): Observable<BuildTypes> {
        const requestContextPromise = this.requestFactory.setBuildTypeTemplates(btLocator, optimizeSettings, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildTypeTemplates(rsp)));
            }));
    }
 
    /**
     * Update a parameter of a trigger of the matching build configuration.
     * @param btLocator 
     * @param triggerLocator 
     * @param fieldName 
     * @param body 
     */
    public setTriggerParameter(btLocator: string, triggerLocator: string, fieldName: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setTriggerParameter(btLocator, triggerLocator, fieldName, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setTriggerParameter(rsp)));
            }));
    }
 
    /**
     * Update build parameter.
     * @param name 
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildParameterOfBuildType(name: string, btLocator: string, fields?: string, body?: Property, options?: Configuration): Observable<Property> {
        const requestContextPromise = this.requestFactory.updateBuildParameterOfBuildType(name, btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameterOfBuildType(rsp)));
            }));
    }
 
    /**
     * Update build parameter specification.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public updateBuildParameterSpecificationOfBuildType(name: string, btLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.updateBuildParameterSpecificationOfBuildType(name, btLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameterSpecificationOfBuildType(rsp)));
            }));
    }
 
    /**
     * Update type of build parameter.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public updateBuildParameterTypeOfBuildType(name: string, btLocator: string, body?: Type, options?: Configuration): Observable<Type> {
        const requestContextPromise = this.requestFactory.updateBuildParameterTypeOfBuildType(name, btLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameterTypeOfBuildType(rsp)));
            }));
    }
 
    /**
     * Update value of build parameter.
     * @param name 
     * @param btLocator 
     * @param body 
     */
    public updateBuildParameterValueOfBuildType(name: string, btLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.updateBuildParameterValueOfBuildType(name, btLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameterValueOfBuildType(rsp)));
            }));
    }
 
    /**
     * Update build parameters.
     * @param btLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildParametersOfBuildType(btLocator: string, fields?: string, body?: Properties, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.updateBuildParametersOfBuildType(btLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParametersOfBuildType(rsp)));
            }));
    }
 
    /**
     * Update a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildTypeVcsRoot(btLocator: string, vcsRootLocator: string, fields?: string, body?: VcsRootEntry, options?: Configuration): Observable<VcsRootEntry> {
        const requestContextPromise = this.requestFactory.updateBuildTypeVcsRoot(btLocator, vcsRootLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildTypeVcsRoot(rsp)));
            }));
    }
 
    /**
     * Update checkout rules of a VCS root of the matching build configuration.
     * @param btLocator 
     * @param vcsRootLocator 
     * @param body 
     */
    public updateBuildTypeVcsRootCheckoutRules(btLocator: string, vcsRootLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.updateBuildTypeVcsRootCheckoutRules(btLocator, vcsRootLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildTypeVcsRootCheckoutRules(rsp)));
            }));
    }
 
}

import { ChangeApiRequestFactory, ChangeApiResponseProcessor} from "../apis/ChangeApi.ts";
export class ObservableChangeApi {
    private requestFactory: ChangeApiRequestFactory;
    private responseProcessor: ChangeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChangeApiRequestFactory,
        responseProcessor?: ChangeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChangeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChangeApiResponseProcessor();
    }

    /**
     * Get all changes.
     * @param locator 
     * @param fields 
     */
    public getAllChanges(locator?: string, fields?: string, options?: Configuration): Observable<Changes> {
        const requestContextPromise = this.requestFactory.getAllChanges(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllChanges(rsp)));
            }));
    }
 
    /**
     * Get change matching the locator.
     * @param changeLocator 
     * @param fields 
     */
    public getChange(changeLocator: string, fields?: string, options?: Configuration): Observable<Change> {
        const requestContextPromise = this.requestFactory.getChange(changeLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChange(rsp)));
            }));
    }
 
    /**
     * Get attributes of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeAttributes(changeLocator: string, fields?: string, options?: Configuration): Observable<Entries> {
        const requestContextPromise = this.requestFactory.getChangeAttributes(changeLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeAttributes(rsp)));
            }));
    }
 
    /**
     * Get duplicates of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeDuplicates(changeLocator: string, fields?: string, options?: Configuration): Observable<Changes> {
        const requestContextPromise = this.requestFactory.getChangeDuplicates(changeLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeDuplicates(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching change.
     * @param changeLocator 
     * @param field 
     */
    public getChangeField(changeLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getChangeField(changeLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeField(rsp)));
            }));
    }
 
    /**
     * Get first builds of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeFirstBuilds(changeLocator: string, fields?: string, options?: Configuration): Observable<Builds> {
        const requestContextPromise = this.requestFactory.getChangeFirstBuilds(changeLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeFirstBuilds(rsp)));
            }));
    }
 
    /**
     * Get issues of the matching change.
     * @param changeLocator 
     */
    public getChangeIssue(changeLocator: string, options?: Configuration): Observable<Issues> {
        const requestContextPromise = this.requestFactory.getChangeIssue(changeLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeIssue(rsp)));
            }));
    }
 
    /**
     * Get parent changes of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeParentChanges(changeLocator: string, fields?: string, options?: Configuration): Observable<Changes> {
        const requestContextPromise = this.requestFactory.getChangeParentChanges(changeLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeParentChanges(rsp)));
            }));
    }
 
    /**
     * Get parent revisions of the matching change.
     * @param changeLocator 
     */
    public getChangeParentRevisions(changeLocator: string, options?: Configuration): Observable<Items> {
        const requestContextPromise = this.requestFactory.getChangeParentRevisions(changeLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeParentRevisions(rsp)));
            }));
    }
 
    /**
     * Get build configurations related to the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeRelatedBuildTypes(changeLocator: string, fields?: string, options?: Configuration): Observable<BuildTypes> {
        const requestContextPromise = this.requestFactory.getChangeRelatedBuildTypes(changeLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeRelatedBuildTypes(rsp)));
            }));
    }
 
    /**
     * Get a VCS root instance of the matching change.
     * @param changeLocator 
     * @param fields 
     */
    public getChangeVcsRoot(changeLocator: string, fields?: string, options?: Configuration): Observable<VcsRootInstance> {
        const requestContextPromise = this.requestFactory.getChangeVcsRoot(changeLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChangeVcsRoot(rsp)));
            }));
    }
 
}

import { CloudInstanceApiRequestFactory, CloudInstanceApiResponseProcessor} from "../apis/CloudInstanceApi.ts";
export class ObservableCloudInstanceApi {
    private requestFactory: CloudInstanceApiRequestFactory;
    private responseProcessor: CloudInstanceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudInstanceApiRequestFactory,
        responseProcessor?: CloudInstanceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CloudInstanceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CloudInstanceApiResponseProcessor();
    }

    /**
     * Get all cloud images.
     * @param locator 
     * @param fields 
     */
    public getAllCloudImages(locator?: string, fields?: string, options?: Configuration): Observable<CloudImages> {
        const requestContextPromise = this.requestFactory.getAllCloudImages(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllCloudImages(rsp)));
            }));
    }
 
    /**
     * Get all cloud instances.
     * @param locator 
     * @param fields 
     */
    public getAllCloudInstances(locator?: string, fields?: string, options?: Configuration): Observable<CloudInstances> {
        const requestContextPromise = this.requestFactory.getAllCloudInstances(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllCloudInstances(rsp)));
            }));
    }
 
    /**
     * Get all cloud profiles.
     * @param locator 
     * @param fields 
     */
    public getAllCloudProfiles(locator?: string, fields?: string, options?: Configuration): Observable<CloudProfiles> {
        const requestContextPromise = this.requestFactory.getAllCloudProfiles(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllCloudProfiles(rsp)));
            }));
    }
 
    /**
     * Get cloud image matching the locator.
     * @param imageLocator 
     * @param fields 
     */
    public getCloudImage(imageLocator: string, fields?: string, options?: Configuration): Observable<CloudImage> {
        const requestContextPromise = this.requestFactory.getCloudImage(imageLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCloudImage(rsp)));
            }));
    }
 
    /**
     * Get cloud instance matching the locator.
     * @param instanceLocator 
     * @param fields 
     */
    public getCloudInstance(instanceLocator: string, fields?: string, options?: Configuration): Observable<CloudInstance> {
        const requestContextPromise = this.requestFactory.getCloudInstance(instanceLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCloudInstance(rsp)));
            }));
    }
 
    /**
     * Get cloud profile matching the locator.
     * @param profileLocator 
     * @param fields 
     */
    public getCloudProfile(profileLocator: string, fields?: string, options?: Configuration): Observable<CloudProfile> {
        const requestContextPromise = this.requestFactory.getCloudProfile(profileLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCloudProfile(rsp)));
            }));
    }
 
    /**
     * Start a new cloud instance.
     * @param fields 
     * @param body 
     */
    public startInstance(fields?: string, body?: CloudInstance, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.startInstance(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startInstance(rsp)));
            }));
    }
 
    /**
     * Stop cloud instance matching the locator.
     * @param instanceLocator 
     */
    public stopInstance(instanceLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.stopInstance(instanceLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopInstance(rsp)));
            }));
    }
 
}

import { GroupApiRequestFactory, GroupApiResponseProcessor} from "../apis/GroupApi.ts";
export class ObservableGroupApi {
    private requestFactory: GroupApiRequestFactory;
    private responseProcessor: GroupApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupApiRequestFactory,
        responseProcessor?: GroupApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupApiResponseProcessor();
    }

    /**
     * Add a new user group.
     * @param fields 
     * @param body 
     */
    public addGroup(fields?: string, body?: Group, options?: Configuration): Observable<Group> {
        const requestContextPromise = this.requestFactory.addGroup(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addGroup(rsp)));
            }));
    }
 
    /**
     * Add a role with the specific scope to the matching user group.
     * @param groupLocator 
     * @param roleId 
     * @param scope 
     */
    public addRoleAtScopeToGroup(groupLocator: string, roleId: string, scope: string, options?: Configuration): Observable<Role> {
        const requestContextPromise = this.requestFactory.addRoleAtScopeToGroup(groupLocator, roleId, scope, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addRoleAtScopeToGroup(rsp)));
            }));
    }
 
    /**
     * Add a role to the matching user group.
     * @param groupLocator 
     * @param body 
     */
    public addRoleToGroup(groupLocator: string, body?: Role, options?: Configuration): Observable<Role> {
        const requestContextPromise = this.requestFactory.addRoleToGroup(groupLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addRoleToGroup(rsp)));
            }));
    }
 
    /**
     * Delete user group matching the locator.
     * @param groupLocator 
     */
    public deleteGroup(groupLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteGroup(groupLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteGroup(rsp)));
            }));
    }
 
    /**
     * Get all user groups.
     * @param fields 
     */
    public getAllGroups(fields?: string, options?: Configuration): Observable<Groups> {
        const requestContextPromise = this.requestFactory.getAllGroups(fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllGroups(rsp)));
            }));
    }
 
    /**
     * Get parent groups of the matching user group.
     * @param groupLocator 
     * @param fields 
     */
    public getGroupParentGroups(groupLocator: string, fields?: string, options?: Configuration): Observable<Groups> {
        const requestContextPromise = this.requestFactory.getGroupParentGroups(groupLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupParentGroups(rsp)));
            }));
    }
 
    /**
     * Get properties of the matching user group.
     * @param groupLocator 
     * @param fields 
     */
    public getGroupProperties(groupLocator: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getGroupProperties(groupLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupProperties(rsp)));
            }));
    }
 
    /**
     * Get a property of the matching user group.
     * @param groupLocator 
     * @param name 
     */
    public getGroupProperty(groupLocator: string, name: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getGroupProperty(groupLocator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupProperty(rsp)));
            }));
    }
 
    /**
     * Get a role with the specific scope of the matching user group.
     * @param groupLocator 
     * @param roleId 
     * @param scope 
     */
    public getGroupRoleAtScope(groupLocator: string, roleId: string, scope: string, options?: Configuration): Observable<Role> {
        const requestContextPromise = this.requestFactory.getGroupRoleAtScope(groupLocator, roleId, scope, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupRoleAtScope(rsp)));
            }));
    }
 
    /**
     * Get all roles of the matching user group.
     * @param groupLocator 
     */
    public getGroupRoles(groupLocator: string, options?: Configuration): Observable<Roles> {
        const requestContextPromise = this.requestFactory.getGroupRoles(groupLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupRoles(rsp)));
            }));
    }
 
    /**
     * Get user group matching the locator.
     * @param groupLocator 
     * @param fields 
     */
    public getUserGroupOfGroup(groupLocator: string, fields?: string, options?: Configuration): Observable<Group> {
        const requestContextPromise = this.requestFactory.getUserGroupOfGroup(groupLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserGroupOfGroup(rsp)));
            }));
    }
 
    /**
     * Remove a property of the matching user group.
     * @param groupLocator 
     * @param name 
     */
    public removeGroupProperty(groupLocator: string, name: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeGroupProperty(groupLocator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeGroupProperty(rsp)));
            }));
    }
 
    /**
     * Remove a role with the specific scope from the matching user group.
     * @param groupLocator 
     * @param roleId 
     * @param scope 
     */
    public removeRoleAtScopeFromGroup(groupLocator: string, roleId: string, scope: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeRoleAtScopeFromGroup(groupLocator, roleId, scope, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeRoleAtScopeFromGroup(rsp)));
            }));
    }
 
    /**
     * Update parent groups of the matching user group.
     * @param groupLocator 
     * @param fields 
     * @param body 
     */
    public setGroupParentGroups(groupLocator: string, fields?: string, body?: Groups, options?: Configuration): Observable<Groups> {
        const requestContextPromise = this.requestFactory.setGroupParentGroups(groupLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setGroupParentGroups(rsp)));
            }));
    }
 
    /**
     * Update a property of the matching user group.
     * @param groupLocator 
     * @param name 
     * @param body 
     */
    public setGroupProperty(groupLocator: string, name: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setGroupProperty(groupLocator, name, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setGroupProperty(rsp)));
            }));
    }
 
    /**
     * Update roles of the matching user group.
     * @param groupLocator 
     * @param body 
     */
    public setGroupRoles(groupLocator: string, body?: Roles, options?: Configuration): Observable<Roles> {
        const requestContextPromise = this.requestFactory.setGroupRoles(groupLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setGroupRoles(rsp)));
            }));
    }
 
}

import { InvestigationApiRequestFactory, InvestigationApiResponseProcessor} from "../apis/InvestigationApi.ts";
export class ObservableInvestigationApi {
    private requestFactory: InvestigationApiRequestFactory;
    private responseProcessor: InvestigationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvestigationApiRequestFactory,
        responseProcessor?: InvestigationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvestigationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvestigationApiResponseProcessor();
    }

    /**
     * Create a new investigation.
     * @param fields 
     * @param body 
     */
    public addInvestigation(fields?: string, body?: Investigation, options?: Configuration): Observable<Investigation> {
        const requestContextPromise = this.requestFactory.addInvestigation(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addInvestigation(rsp)));
            }));
    }
 
    /**
     * Create multiple new investigations.
     * @param fields 
     * @param body 
     */
    public addMultipleInvestigations(fields?: string, body?: Investigations, options?: Configuration): Observable<Investigations> {
        const requestContextPromise = this.requestFactory.addMultipleInvestigations(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMultipleInvestigations(rsp)));
            }));
    }
 
    /**
     * Delete investigation matching the locator.
     * @param investigationLocator 
     */
    public deleteInvestigation(investigationLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInvestigation(investigationLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInvestigation(rsp)));
            }));
    }
 
    /**
     * Get all investigations.
     * @param locator 
     * @param fields 
     */
    public getAllInvestigations(locator?: string, fields?: string, options?: Configuration): Observable<Investigations> {
        const requestContextPromise = this.requestFactory.getAllInvestigations(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInvestigations(rsp)));
            }));
    }
 
    /**
     * Get investigation matching the locator.
     * @param investigationLocator 
     * @param fields 
     */
    public getInvestigation(investigationLocator: string, fields?: string, options?: Configuration): Observable<Investigation> {
        const requestContextPromise = this.requestFactory.getInvestigation(investigationLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvestigation(rsp)));
            }));
    }
 
    /**
     * Update investigation matching the locator.
     * @param investigationLocator 
     * @param fields 
     * @param body 
     */
    public replaceInvestigation(investigationLocator: string, fields?: string, body?: Investigation, options?: Configuration): Observable<Investigation> {
        const requestContextPromise = this.requestFactory.replaceInvestigation(investigationLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceInvestigation(rsp)));
            }));
    }
 
}

import { MuteApiRequestFactory, MuteApiResponseProcessor} from "../apis/MuteApi.ts";
export class ObservableMuteApi {
    private requestFactory: MuteApiRequestFactory;
    private responseProcessor: MuteApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MuteApiRequestFactory,
        responseProcessor?: MuteApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MuteApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MuteApiResponseProcessor();
    }

    /**
     * Get all muted tests.
     * @param locator 
     * @param fields 
     */
    public getAllMutedTests(locator?: string, fields?: string, options?: Configuration): Observable<Mutes> {
        const requestContextPromise = this.requestFactory.getAllMutedTests(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMutedTests(rsp)));
            }));
    }
 
    /**
     * Get a muted test.
     * @param muteLocator 
     * @param fields 
     */
    public getMutedTest(muteLocator: string, fields?: string, options?: Configuration): Observable<Mute> {
        const requestContextPromise = this.requestFactory.getMutedTest(muteLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMutedTest(rsp)));
            }));
    }
 
    /**
     * Mute multiple tests.
     * @param fields 
     * @param body 
     */
    public muteMultipleTests(fields?: string, body?: Mutes, options?: Configuration): Observable<Mutes> {
        const requestContextPromise = this.requestFactory.muteMultipleTests(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.muteMultipleTests(rsp)));
            }));
    }
 
    /**
     * Mute a test.
     * @param fields 
     * @param body 
     */
    public muteTest(fields?: string, body?: Mute, options?: Configuration): Observable<Mute> {
        const requestContextPromise = this.requestFactory.muteTest(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.muteTest(rsp)));
            }));
    }
 
    /**
     * Unmute the matching test.
     * @param muteLocator 
     * @param body 
     */
    public unmuteTest(muteLocator: string, body?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.unmuteTest(muteLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unmuteTest(rsp)));
            }));
    }
 
}

import { ProblemApiRequestFactory, ProblemApiResponseProcessor} from "../apis/ProblemApi.ts";
export class ObservableProblemApi {
    private requestFactory: ProblemApiRequestFactory;
    private responseProcessor: ProblemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProblemApiRequestFactory,
        responseProcessor?: ProblemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProblemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProblemApiResponseProcessor();
    }

    /**
     * Get all build problems.
     * @param locator 
     * @param fields 
     */
    public getAllBuildProblems(locator?: string, fields?: string, options?: Configuration): Observable<Problems> {
        const requestContextPromise = this.requestFactory.getAllBuildProblems(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuildProblems(rsp)));
            }));
    }
 
    /**
     * Get a matching build problem.
     * @param problemLocator 
     * @param fields 
     */
    public getBuildProblem(problemLocator: string, fields?: string, options?: Configuration): Observable<Problem> {
        const requestContextPromise = this.requestFactory.getBuildProblem(problemLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildProblem(rsp)));
            }));
    }
 
}

import { ProblemOccurrenceApiRequestFactory, ProblemOccurrenceApiResponseProcessor} from "../apis/ProblemOccurrenceApi.ts";
export class ObservableProblemOccurrenceApi {
    private requestFactory: ProblemOccurrenceApiRequestFactory;
    private responseProcessor: ProblemOccurrenceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProblemOccurrenceApiRequestFactory,
        responseProcessor?: ProblemOccurrenceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProblemOccurrenceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProblemOccurrenceApiResponseProcessor();
    }

    /**
     * Get all build problem occurrences.
     * @param locator 
     * @param fields 
     */
    public getAllBuildProblemOccurrences(locator?: string, fields?: string, options?: Configuration): Observable<ProblemOccurrences> {
        const requestContextPromise = this.requestFactory.getAllBuildProblemOccurrences(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBuildProblemOccurrences(rsp)));
            }));
    }
 
    /**
     * Get a matching build problem occurrence.
     * @param problemLocator 
     * @param fields 
     */
    public getBuildProblemOccurrence(problemLocator: string, fields?: string, options?: Configuration): Observable<ProblemOccurrence> {
        const requestContextPromise = this.requestFactory.getBuildProblemOccurrence(problemLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildProblemOccurrence(rsp)));
            }));
    }
 
}

import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi.ts";
export class ObservableProjectApi {
    private requestFactory: ProjectApiRequestFactory;
    private responseProcessor: ProjectApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectApiRequestFactory,
        responseProcessor?: ProjectApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectApiResponseProcessor();
    }

    /**
     * Assign the matching project to the agent pool.
     * @param projectLocator 
     * @param body 
     */
    public addAgentPoolsProject(projectLocator: string, body?: AgentPool, options?: Configuration): Observable<AgentPool> {
        const requestContextPromise = this.requestFactory.addAgentPoolsProject(projectLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAgentPoolsProject(rsp)));
            }));
    }
 
    /**
     * Add a build configuration to the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public addBuildType(projectLocator: string, fields?: string, body?: NewBuildTypeDescription, options?: Configuration): Observable<BuildType> {
        const requestContextPromise = this.requestFactory.addBuildType(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBuildType(rsp)));
            }));
    }
 
    /**
     * Add a feature.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public addFeature(projectLocator: string, fields?: string, body?: ProjectFeature, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.addFeature(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addFeature(rsp)));
            }));
    }
 
    /**
     * Create a new project.
     * @param body 
     */
    public addProject(body?: NewProjectDescription, options?: Configuration): Observable<Project> {
        const requestContextPromise = this.requestFactory.addProject(body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addProject(rsp)));
            }));
    }
 
    /**
     * Create a new secure token for the matching project.
     * @param projectLocator 
     * @param body 
     */
    public addSecureToken(projectLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.addSecureToken(projectLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addSecureToken(rsp)));
            }));
    }
 
    /**
     * Add a build configuration template to the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public addTemplate(projectLocator: string, fields?: string, body?: NewBuildTypeDescription, options?: Configuration): Observable<BuildType> {
        const requestContextPromise = this.requestFactory.addTemplate(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addTemplate(rsp)));
            }));
    }
 
    /**
     * Create a build parameter.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public createBuildParameter(projectLocator: string, fields?: string, body?: Property, options?: Configuration): Observable<Property> {
        const requestContextPromise = this.requestFactory.createBuildParameter(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBuildParameter(rsp)));
            }));
    }
 
    /**
     * Delete build parameter.
     * @param name 
     * @param projectLocator 
     */
    public deleteBuildParameter(name: string, projectLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBuildParameter(name, projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuildParameter(rsp)));
            }));
    }
 
    /**
     * Delete all build parameters.
     * @param projectLocator 
     */
    public deleteBuildParameters(projectLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteBuildParameters(projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBuildParameters(rsp)));
            }));
    }
 
    /**
     * Delete a matching feature.
     * @param featureLocator 
     * @param projectLocator 
     */
    public deleteFeature(featureLocator: string, projectLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteFeature(featureLocator, projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFeature(rsp)));
            }));
    }
 
    /**
     * Delete project matching the locator.
     * @param projectLocator 
     */
    public deleteProject(projectLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteProject(projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProject(rsp)));
            }));
    }
 
    /**
     * Get agent pools appointed to the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public getAgentPoolsProject(projectLocator: string, fields?: string, options?: Configuration): Observable<AgentPools> {
        const requestContextPromise = this.requestFactory.getAgentPoolsProject(projectLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAgentPoolsProject(rsp)));
            }));
    }
 
    /**
     * Get all branches of the matching project.
     * @param projectLocator 
     * @param locator 
     * @param fields 
     */
    public getAllBranches(projectLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<Branches> {
        const requestContextPromise = this.requestFactory.getAllBranches(projectLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBranches(rsp)));
            }));
    }
 
    /**
     * Get all projects.
     * @param locator 
     * @param fields 
     */
    public getAllProjects(locator?: string, fields?: string, options?: Configuration): Observable<Projects> {
        const requestContextPromise = this.requestFactory.getAllProjects(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllProjects(rsp)));
            }));
    }
 
    /**
     * Get all subprojects ordered of the matching project.
     * @param projectLocator 
     * @param field 
     */
    public getAllSubprojectsOrdered(projectLocator: string, field?: string, options?: Configuration): Observable<Projects> {
        const requestContextPromise = this.requestFactory.getAllSubprojectsOrdered(projectLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllSubprojectsOrdered(rsp)));
            }));
    }
 
    /**
     * Get build parameter.
     * @param name 
     * @param projectLocator 
     * @param fields 
     */
    public getBuildParameter(name: string, projectLocator: string, fields?: string, options?: Configuration): Observable<Property> {
        const requestContextPromise = this.requestFactory.getBuildParameter(name, projectLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameter(rsp)));
            }));
    }
 
    /**
     * Get build parameter specification.
     * @param name 
     * @param projectLocator 
     */
    public getBuildParameterSpecification(name: string, projectLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildParameterSpecification(name, projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameterSpecification(rsp)));
            }));
    }
 
    /**
     * Get type of build parameter.
     * @param name 
     * @param projectLocator 
     */
    public getBuildParameterType(name: string, projectLocator: string, options?: Configuration): Observable<Type> {
        const requestContextPromise = this.requestFactory.getBuildParameterType(name, projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameterType(rsp)));
            }));
    }
 
    /**
     * Get value of build parameter.
     * @param name 
     * @param projectLocator 
     */
    public getBuildParameterValue(name: string, projectLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBuildParameterValue(name, projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameterValue(rsp)));
            }));
    }
 
    /**
     * Get build parameters.
     * @param projectLocator 
     * @param locator 
     * @param fields 
     */
    public getBuildParameters(projectLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getBuildParameters(projectLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBuildParameters(rsp)));
            }));
    }
 
    /**
     * Get the default template of the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public getDefaultTemplate(projectLocator: string, fields?: string, options?: Configuration): Observable<BuildType> {
        const requestContextPromise = this.requestFactory.getDefaultTemplate(projectLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDefaultTemplate(rsp)));
            }));
    }
 
    /**
     * Get a matching feature.
     * @param featureLocator 
     * @param projectLocator 
     * @param fields 
     */
    public getFeature(featureLocator: string, projectLocator: string, fields?: string, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getFeature(featureLocator, projectLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeature(rsp)));
            }));
    }
 
    /**
     * Get all features.
     * @param projectLocator 
     * @param locator 
     * @param fields 
     */
    public getFeatures(projectLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getFeatures(projectLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFeatures(rsp)));
            }));
    }
 
    /**
     * Get project matching the locator.
     * @param projectLocator 
     * @param fields 
     */
    public getProject(projectLocator: string, fields?: string, options?: Configuration): Observable<Project> {
        const requestContextPromise = this.requestFactory.getProject(projectLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProject(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching project.
     * @param projectLocator 
     * @param field 
     */
    public getProjectField(projectLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getProjectField(projectLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectField(rsp)));
            }));
    }
 
    /**
     * Get the parent project of the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public getProjectParentProject(projectLocator: string, fields?: string, options?: Configuration): Observable<Project> {
        const requestContextPromise = this.requestFactory.getProjectParentProject(projectLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectParentProject(rsp)));
            }));
    }
 
    /**
     * Get the settings file of the matching build configuration.
     * @param projectLocator 
     */
    public getProjectSettingsFile(projectLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getProjectSettingsFile(projectLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectSettingsFile(rsp)));
            }));
    }
 
    /**
     * Get all templates of the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public getProjectTemplates(projectLocator: string, fields?: string, options?: Configuration): Observable<BuildTypes> {
        const requestContextPromise = this.requestFactory.getProjectTemplates(projectLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectTemplates(rsp)));
            }));
    }
 
    /**
     * Get a secure token of the matching project.
     * @param projectLocator 
     * @param token 
     */
    public getSecureValue(projectLocator: string, token: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getSecureValue(projectLocator, token, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSecureValue(rsp)));
            }));
    }
 
    /**
     * Remove the default template from the matching project.
     * @param projectLocator 
     * @param fields 
     */
    public removeDefaultTemplate(projectLocator: string, fields?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeDefaultTemplate(projectLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeDefaultTemplate(rsp)));
            }));
    }
 
    /**
     * Unassign a project from the matching agent pool.
     * @param projectLocator 
     * @param agentPoolLocator 
     */
    public removeProjectFromAgentPool(projectLocator: string, agentPoolLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeProjectFromAgentPool(projectLocator, agentPoolLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeProjectFromAgentPool(rsp)));
            }));
    }
 
    /**
     * Update agent pools apppointed to the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public setAgentPoolsProject(projectLocator: string, fields?: string, body?: AgentPools, options?: Configuration): Observable<AgentPools> {
        const requestContextPromise = this.requestFactory.setAgentPoolsProject(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAgentPoolsProject(rsp)));
            }));
    }
 
    /**
     * Update all build configurations order of the matching project.
     * @param projectLocator 
     * @param field 
     * @param body 
     */
    public setBuildTypesOrder(projectLocator: string, field?: string, body?: BuildTypes, options?: Configuration): Observable<BuildTypes> {
        const requestContextPromise = this.requestFactory.setBuildTypesOrder(projectLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setBuildTypesOrder(rsp)));
            }));
    }
 
    /**
     * Update the default template of the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public setDefaultTemplate(projectLocator: string, fields?: string, body?: BuildType, options?: Configuration): Observable<BuildType> {
        const requestContextPromise = this.requestFactory.setDefaultTemplate(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setDefaultTemplate(rsp)));
            }));
    }
 
    /**
     * Update the parent project of the matching project.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public setParentProject(projectLocator: string, fields?: string, body?: Project, options?: Configuration): Observable<Project> {
        const requestContextPromise = this.requestFactory.setParentProject(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setParentProject(rsp)));
            }));
    }
 
    /**
     * Update a field of the matching project.
     * @param projectLocator 
     * @param field 
     * @param body 
     */
    public setProjectField(projectLocator: string, field: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setProjectField(projectLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setProjectField(rsp)));
            }));
    }
 
    /**
     * Update all subprojects order of the matching project.
     * @param projectLocator 
     * @param field 
     * @param body 
     */
    public setSubprojectsOrder(projectLocator: string, field?: string, body?: Projects, options?: Configuration): Observable<Projects> {
        const requestContextPromise = this.requestFactory.setSubprojectsOrder(projectLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setSubprojectsOrder(rsp)));
            }));
    }
 
    /**
     * Update build parameter.
     * @param name 
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildParameter(name: string, projectLocator: string, fields?: string, body?: Property, options?: Configuration): Observable<Property> {
        const requestContextPromise = this.requestFactory.updateBuildParameter(name, projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameter(rsp)));
            }));
    }
 
    /**
     * Update build parameter specification.
     * @param name 
     * @param projectLocator 
     * @param body 
     */
    public updateBuildParameterSpecification(name: string, projectLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.updateBuildParameterSpecification(name, projectLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameterSpecification(rsp)));
            }));
    }
 
    /**
     * Update type of build parameter.
     * @param name 
     * @param projectLocator 
     * @param body 
     */
    public updateBuildParameterType(name: string, projectLocator: string, body?: Type, options?: Configuration): Observable<Type> {
        const requestContextPromise = this.requestFactory.updateBuildParameterType(name, projectLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameterType(rsp)));
            }));
    }
 
    /**
     * Update value of build parameter.
     * @param name 
     * @param projectLocator 
     * @param body 
     */
    public updateBuildParameterValue(name: string, projectLocator: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.updateBuildParameterValue(name, projectLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameterValue(rsp)));
            }));
    }
 
    /**
     * Update build parameters.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public updateBuildParameters(projectLocator: string, fields?: string, body?: Properties, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.updateBuildParameters(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBuildParameters(rsp)));
            }));
    }
 
    /**
     * Update a matching feature.
     * @param featureLocator 
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public updateFeature(featureLocator: string, projectLocator: string, fields?: string, body?: ProjectFeature, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateFeature(featureLocator, projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFeature(rsp)));
            }));
    }
 
    /**
     * Update all features.
     * @param projectLocator 
     * @param fields 
     * @param body 
     */
    public updateFeatures(projectLocator: string, fields?: string, body?: ProjectFeatures, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateFeatures(projectLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFeatures(rsp)));
            }));
    }
 
}

import { RootApiRequestFactory, RootApiResponseProcessor} from "../apis/RootApi.ts";
export class ObservableRootApi {
    private requestFactory: RootApiRequestFactory;
    private responseProcessor: RootApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RootApiRequestFactory,
        responseProcessor?: RootApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RootApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RootApiResponseProcessor();
    }

    /**
     * Get the API version.
     */
    public getApiVersion(options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getApiVersion(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiVersion(rsp)));
            }));
    }
 
    /**
     * Get the plugin info.
     * @param fields 
     */
    public getPluginInfo(fields?: string, options?: Configuration): Observable<Plugin> {
        const requestContextPromise = this.requestFactory.getPluginInfo(fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPluginInfo(rsp)));
            }));
    }
 
    /**
     * Get root endpoints.
     */
    public getRootEndpointsOfRoot(options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getRootEndpointsOfRoot(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRootEndpointsOfRoot(rsp)));
            }));
    }
 
    /**
     * Get the TeamCity server version.
     */
    public getVersion(options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getVersion(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVersion(rsp)));
            }));
    }
 
}

import { ServerApiRequestFactory, ServerApiResponseProcessor} from "../apis/ServerApi.ts";
export class ObservableServerApi {
    private requestFactory: ServerApiRequestFactory;
    private responseProcessor: ServerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ServerApiRequestFactory,
        responseProcessor?: ServerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServerApiResponseProcessor();
    }

    /**
     * Add license keys.
     * @param fields 
     * @param body 
     */
    public addLicenseKeys(fields?: string, body?: string, options?: Configuration): Observable<LicenseKeys> {
        const requestContextPromise = this.requestFactory.addLicenseKeys(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addLicenseKeys(rsp)));
            }));
    }
 
    /**
     * Delete a license key.
     * @param licenseKey 
     */
    public deleteLicenseKey(licenseKey: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteLicenseKey(licenseKey, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLicenseKey(rsp)));
            }));
    }
 
    /**
     * Download specific file.
     * @param path 
     * @param areaId 
     */
    public downloadFileOfServer(path: string, areaId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadFileOfServer(path, areaId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadFileOfServer(rsp)));
            }));
    }
 
    /**
     * Get metrics.
     * @param fields 
     */
    public getAllMetrics(fields?: string, options?: Configuration): Observable<Metrics> {
        const requestContextPromise = this.requestFactory.getAllMetrics(fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMetrics(rsp)));
            }));
    }
 
    /**
     * Get all plugins.
     * @param fields 
     */
    public getAllPlugins(fields?: string, options?: Configuration): Observable<Plugins> {
        const requestContextPromise = this.requestFactory.getAllPlugins(fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPlugins(rsp)));
            }));
    }
 
    /**
     * Get the latest backup status.
     */
    public getBackupStatus(options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getBackupStatus(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBackupStatus(rsp)));
            }));
    }
 
    /**
     * Get metadata of specific file.
     * @param path 
     * @param areaId 
     * @param fields 
     */
    public getFileMetadataOfServer(path: string, areaId: string, fields?: string, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getFileMetadataOfServer(path, areaId, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileMetadataOfServer(rsp)));
            }));
    }
 
    /**
     * List files under this path.
     * @param path 
     * @param areaId 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public getFilesListForSubpathOfServer(path: string, areaId: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Observable<Files> {
        const requestContextPromise = this.requestFactory.getFilesListForSubpathOfServer(path, areaId, basePath, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesListForSubpathOfServer(rsp)));
            }));
    }
 
    /**
     * List all files.
     * @param areaId 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public getFilesListOfServer(areaId: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Observable<Files> {
        const requestContextPromise = this.requestFactory.getFilesListOfServer(areaId, basePath, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesListOfServer(rsp)));
            }));
    }
 
    /**
     * Get a license key.
     * @param licenseKey 
     * @param fields 
     */
    public getLicenseKey(licenseKey: string, fields?: string, options?: Configuration): Observable<LicenseKey> {
        const requestContextPromise = this.requestFactory.getLicenseKey(licenseKey, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLicenseKey(rsp)));
            }));
    }
 
    /**
     * Get all license keys.
     * @param fields 
     */
    public getLicenseKeys(fields?: string, options?: Configuration): Observable<LicenseKeys> {
        const requestContextPromise = this.requestFactory.getLicenseKeys(fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLicenseKeys(rsp)));
            }));
    }
 
    /**
     * Get the licensing data.
     * @param fields 
     */
    public getLicensingData(fields?: string, options?: Configuration): Observable<LicensingData> {
        const requestContextPromise = this.requestFactory.getLicensingData(fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLicensingData(rsp)));
            }));
    }
 
    /**
     * Get a field of the server info.
     * @param field 
     */
    public getServerField(field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getServerField(field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerField(rsp)));
            }));
    }
 
    /**
     * Get the server info.
     * @param fields 
     */
    public getServerInfo(fields?: string, options?: Configuration): Observable<Server> {
        const requestContextPromise = this.requestFactory.getServerInfo(fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerInfo(rsp)));
            }));
    }
 
    /**
     * Get specific file zipped.
     * @param path 
     * @param areaId 
     * @param basePath 
     * @param locator 
     * @param name 
     */
    public getZippedFileOfServer(path: string, areaId: string, basePath?: string, locator?: string, name?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getZippedFileOfServer(path, areaId, basePath, locator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getZippedFileOfServer(rsp)));
            }));
    }
 
    /**
     * Start a new backup.
     * @param fileName 
     * @param addTimestamp 
     * @param includeConfigs 
     * @param includeDatabase 
     * @param includeBuildLogs 
     * @param includePersonalChanges 
     * @param includeRunningBuilds 
     * @param includeSupplimentaryData 
     */
    public startBackup(fileName?: string, addTimestamp?: boolean, includeConfigs?: boolean, includeDatabase?: boolean, includeBuildLogs?: boolean, includePersonalChanges?: boolean, includeRunningBuilds?: boolean, includeSupplimentaryData?: boolean, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.startBackup(fileName, addTimestamp, includeConfigs, includeDatabase, includeBuildLogs, includePersonalChanges, includeRunningBuilds, includeSupplimentaryData, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startBackup(rsp)));
            }));
    }
 
}

import { TestApiRequestFactory, TestApiResponseProcessor} from "../apis/TestApi.ts";
export class ObservableTestApi {
    private requestFactory: TestApiRequestFactory;
    private responseProcessor: TestApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TestApiRequestFactory,
        responseProcessor?: TestApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TestApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TestApiResponseProcessor();
    }

    /**
     * Get a matching test.
     * @param testLocator 
     * @param fields 
     */
    public getTest(testLocator: string, fields?: string, options?: Configuration): Observable<Test> {
        const requestContextPromise = this.requestFactory.getTest(testLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTest(rsp)));
            }));
    }
 
    /**
     * Get all tests.
     * @param locator 
     * @param fields 
     */
    public getTests(locator?: string, fields?: string, options?: Configuration): Observable<Tests> {
        const requestContextPromise = this.requestFactory.getTests(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTests(rsp)));
            }));
    }
 
}

import { TestOccurrenceApiRequestFactory, TestOccurrenceApiResponseProcessor} from "../apis/TestOccurrenceApi.ts";
export class ObservableTestOccurrenceApi {
    private requestFactory: TestOccurrenceApiRequestFactory;
    private responseProcessor: TestOccurrenceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TestOccurrenceApiRequestFactory,
        responseProcessor?: TestOccurrenceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TestOccurrenceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TestOccurrenceApiResponseProcessor();
    }

    /**
     * Get all test occurrences.
     * @param locator 
     * @param fields 
     */
    public getAllTestOccurrences(locator?: string, fields?: string, options?: Configuration): Observable<TestOccurrences> {
        const requestContextPromise = this.requestFactory.getAllTestOccurrences(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTestOccurrences(rsp)));
            }));
    }
 
    /**
     * Get a matching test occurrence.
     * @param testLocator 
     * @param fields 
     */
    public getTestOccurrence(testLocator: string, fields?: string, options?: Configuration): Observable<TestOccurrence> {
        const requestContextPromise = this.requestFactory.getTestOccurrence(testLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestOccurrence(rsp)));
            }));
    }
 
}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi.ts";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Add a role to the matching user.
     * @param userLocator 
     * @param body 
     */
    public addRoleToUser(userLocator: string, body?: Role, options?: Configuration): Observable<Role> {
        const requestContextPromise = this.requestFactory.addRoleToUser(userLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addRoleToUser(rsp)));
            }));
    }
 
    /**
     * Add a role with the specific scope to the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public addRoleToUserAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Observable<Role> {
        const requestContextPromise = this.requestFactory.addRoleToUserAtScope(userLocator, roleId, scope, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addRoleToUserAtScope(rsp)));
            }));
    }
 
    /**
     * Create a new user.
     * @param fields 
     * @param body 
     */
    public addUser(fields?: string, body?: User, options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.addUser(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUser(rsp)));
            }));
    }
 
    /**
     * Create a new authentication token for the matching user.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public addUserToken(userLocator: string, fields?: string, body?: Token, options?: Configuration): Observable<Token> {
        const requestContextPromise = this.requestFactory.addUserToken(userLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUserToken(rsp)));
            }));
    }
 
    /**
     * Delete user matching the locator.
     * @param userLocator 
     */
    public deleteUser(userLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteUser(userLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUser(rsp)));
            }));
    }
 
    /**
     * Remove a property of the matching user.
     * @param userLocator 
     * @param field 
     */
    public deleteUserField(userLocator: string, field: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteUserField(userLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserField(rsp)));
            }));
    }
 
    /**
     * Remove an authentication token from the matching user.
     * @param userLocator 
     * @param name 
     */
    public deleteUserToken(userLocator: string, name: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteUserToken(userLocator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserToken(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching user.
     * @param userLocator 
     * @param field 
     */
    public gerUserField(userLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.gerUserField(userLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gerUserField(rsp)));
            }));
    }
 
    /**
     * Get all groups of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public getAllUserGroups(userLocator: string, fields?: string, options?: Configuration): Observable<Groups> {
        const requestContextPromise = this.requestFactory.getAllUserGroups(userLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllUserGroups(rsp)));
            }));
    }
 
    /**
     * Get all user roles of the matching user.
     * @param userLocator 
     */
    public getAllUserRoles(userLocator: string, options?: Configuration): Observable<Roles> {
        const requestContextPromise = this.requestFactory.getAllUserRoles(userLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllUserRoles(rsp)));
            }));
    }
 
    /**
     * Get all users.
     * @param locator 
     * @param fields 
     */
    public getAllUsers(locator?: string, fields?: string, options?: Configuration): Observable<Users> {
        const requestContextPromise = this.requestFactory.getAllUsers(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllUsers(rsp)));
            }));
    }
 
    /**
     * Get user matching the locator.
     * @param userLocator 
     * @param fields 
     */
    public getUser(userLocator: string, fields?: string, options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.getUser(userLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUser(rsp)));
            }));
    }
 
    /**
     * Get a user group of the matching user.
     * @param userLocator 
     * @param groupLocator 
     * @param fields 
     */
    public getUserGroup(userLocator: string, groupLocator: string, fields?: string, options?: Configuration): Observable<Group> {
        const requestContextPromise = this.requestFactory.getUserGroup(userLocator, groupLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserGroup(rsp)));
            }));
    }
 
    /**
     * Get all permissions effective for the matching user.
     * @param userLocator 
     * @param locator 
     * @param fields 
     */
    public getUserPermissions(userLocator: string, locator?: string, fields?: string, options?: Configuration): Observable<PermissionAssignments> {
        const requestContextPromise = this.requestFactory.getUserPermissions(userLocator, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserPermissions(rsp)));
            }));
    }
 
    /**
     * Get all properties of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public getUserProperties(userLocator: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getUserProperties(userLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserProperties(rsp)));
            }));
    }
 
    /**
     * Get a property of the matching user.
     * @param userLocator 
     * @param name 
     */
    public getUserProperty(userLocator: string, name: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getUserProperty(userLocator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserProperty(rsp)));
            }));
    }
 
    /**
     * Get a user role with the specific scope from the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public getUserRolesAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Observable<Role> {
        const requestContextPromise = this.requestFactory.getUserRolesAtScope(userLocator, roleId, scope, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserRolesAtScope(rsp)));
            }));
    }
 
    /**
     * Get all authentication tokens of the matching user.
     * @param userLocator 
     * @param fields 
     */
    public getUserTokens(userLocator: string, fields?: string, options?: Configuration): Observable<Tokens> {
        const requestContextPromise = this.requestFactory.getUserTokens(userLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserTokens(rsp)));
            }));
    }
 
    /**
     * Remove the matching user from the specific group.
     * @param userLocator 
     * @param groupLocator 
     * @param fields 
     */
    public removeUserFromGroup(userLocator: string, groupLocator: string, fields?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeUserFromGroup(userLocator, groupLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeUserFromGroup(rsp)));
            }));
    }
 
    /**
     * Remove a property of the matching user.
     * @param userLocator 
     * @param name 
     */
    public removeUserProperty(userLocator: string, name: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeUserProperty(userLocator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeUserProperty(rsp)));
            }));
    }
 
    /**
     * Remove the RememberMe data of the matching user.
     * @param userLocator 
     */
    public removeUserRememberMe(userLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeUserRememberMe(userLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeUserRememberMe(rsp)));
            }));
    }
 
    /**
     * Remove a role with the specific scope from the matching user.
     * @param userLocator 
     * @param roleId 
     * @param scope 
     */
    public removeUserRoleAtScope(userLocator: string, roleId: string, scope: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeUserRoleAtScope(userLocator, roleId, scope, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeUserRoleAtScope(rsp)));
            }));
    }
 
    /**
     * Update user matching the locator.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public replaceUser(userLocator: string, fields?: string, body?: User, options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.replaceUser(userLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceUser(rsp)));
            }));
    }
 
    /**
     * Update a field of the matching user.
     * @param userLocator 
     * @param field 
     * @param body 
     */
    public setUserField(userLocator: string, field: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setUserField(userLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setUserField(rsp)));
            }));
    }
 
    /**
     * Update groups of the matching user.
     * @param userLocator 
     * @param fields 
     * @param body 
     */
    public setUserGroups(userLocator: string, fields?: string, body?: Groups, options?: Configuration): Observable<Groups> {
        const requestContextPromise = this.requestFactory.setUserGroups(userLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setUserGroups(rsp)));
            }));
    }
 
    /**
     * Update a property of the matching user.
     * @param userLocator 
     * @param name 
     * @param body 
     */
    public setUserProperty(userLocator: string, name: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setUserProperty(userLocator, name, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setUserProperty(rsp)));
            }));
    }
 
    /**
     * Update user roles of the matching user.
     * @param userLocator 
     * @param body 
     */
    public setUserRoles(userLocator: string, body?: Roles, options?: Configuration): Observable<Roles> {
        const requestContextPromise = this.requestFactory.setUserRoles(userLocator, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setUserRoles(rsp)));
            }));
    }
 
}

import { VcsRootApiRequestFactory, VcsRootApiResponseProcessor} from "../apis/VcsRootApi.ts";
export class ObservableVcsRootApi {
    private requestFactory: VcsRootApiRequestFactory;
    private responseProcessor: VcsRootApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VcsRootApiRequestFactory,
        responseProcessor?: VcsRootApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VcsRootApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VcsRootApiResponseProcessor();
    }

    /**
     * Add a new VCS root.
     * @param fields 
     * @param body 
     */
    public addVcsRoot(fields?: string, body?: VcsRoot, options?: Configuration): Observable<VcsRoot> {
        const requestContextPromise = this.requestFactory.addVcsRoot(fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addVcsRoot(rsp)));
            }));
    }
 
    /**
     * Delete all properties of the matching VCS root.
     * @param vcsRootLocator 
     */
    public deleteAllVcsRootProperties(vcsRootLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllVcsRootProperties(vcsRootLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllVcsRootProperties(rsp)));
            }));
    }
 
    /**
     * Remove VCS root matching the locator.
     * @param vcsRootLocator 
     */
    public deleteVcsRoot(vcsRootLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteVcsRoot(vcsRootLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVcsRoot(rsp)));
            }));
    }
 
    /**
     * Delete a property of the matching VCS root.
     * @param vcsRootLocator 
     * @param name 
     */
    public deleteVcsRootProperty(vcsRootLocator: string, name: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteVcsRootProperty(vcsRootLocator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVcsRootProperty(rsp)));
            }));
    }
 
    /**
     * Get all properties of the matching VCS root.
     * @param vcsRootLocator 
     * @param fields 
     */
    public getAllVcsRootProperties(vcsRootLocator: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getAllVcsRootProperties(vcsRootLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllVcsRootProperties(rsp)));
            }));
    }
 
    /**
     * Get all VCS roots.
     * @param locator 
     * @param fields 
     */
    public getAllVcsRoots(locator?: string, fields?: string, options?: Configuration): Observable<VcsRoots> {
        const requestContextPromise = this.requestFactory.getAllVcsRoots(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllVcsRoots(rsp)));
            }));
    }
 
    /**
     * Get root endpoints.
     * @param vcsRootLocator 
     * @param fields 
     */
    public getRootEndpoints(vcsRootLocator: string, fields?: string, options?: Configuration): Observable<VcsRoot> {
        const requestContextPromise = this.requestFactory.getRootEndpoints(vcsRootLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRootEndpoints(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching VCS root.
     * @param vcsRootLocator 
     * @param field 
     */
    public getVcsRootField(vcsRootLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getVcsRootField(vcsRootLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootField(rsp)));
            }));
    }
 
    /**
     * Get all VCS root instances of the matching VCS root.
     * @param vcsRootLocator 
     * @param fields 
     */
    public getVcsRootInstances(vcsRootLocator: string, fields?: string, options?: Configuration): Observable<VcsRootInstances> {
        const requestContextPromise = this.requestFactory.getVcsRootInstances(vcsRootLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootInstances(rsp)));
            }));
    }
 
    /**
     * Get a property on the matching VCS root.
     * @param vcsRootLocator 
     * @param name 
     */
    public getVcsRootProperty(vcsRootLocator: string, name: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getVcsRootProperty(vcsRootLocator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootProperty(rsp)));
            }));
    }
 
    /**
     * Get the settings file of the matching VCS root.
     * @param vcsRootLocator 
     */
    public getVcsRootSettingsFile(vcsRootLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getVcsRootSettingsFile(vcsRootLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootSettingsFile(rsp)));
            }));
    }
 
    /**
     * Update a field of the matching VCS root.
     * @param vcsRootLocator 
     * @param field 
     * @param body 
     */
    public setVcsRootField(vcsRootLocator: string, field: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setVcsRootField(vcsRootLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setVcsRootField(rsp)));
            }));
    }
 
    /**
     * Update all properties of the matching VCS root.
     * @param vcsRootLocator 
     * @param fields 
     * @param body 
     */
    public setVcsRootProperties(vcsRootLocator: string, fields?: string, body?: Properties, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.setVcsRootProperties(vcsRootLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setVcsRootProperties(rsp)));
            }));
    }
 
    /**
     * Update a property of the matching VCS root.
     * @param vcsRootLocator 
     * @param name 
     * @param body 
     */
    public setVcsRootProperty(vcsRootLocator: string, name: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setVcsRootProperty(vcsRootLocator, name, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setVcsRootProperty(rsp)));
            }));
    }
 
}

import { VcsRootInstanceApiRequestFactory, VcsRootInstanceApiResponseProcessor} from "../apis/VcsRootInstanceApi.ts";
export class ObservableVcsRootInstanceApi {
    private requestFactory: VcsRootInstanceApiRequestFactory;
    private responseProcessor: VcsRootInstanceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VcsRootInstanceApiRequestFactory,
        responseProcessor?: VcsRootInstanceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VcsRootInstanceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VcsRootInstanceApiResponseProcessor();
    }

    /**
     * Remove a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     */
    public deleteVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteVcsRootInstanceField(vcsRootInstanceLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVcsRootInstanceField(rsp)));
            }));
    }
 
    /**
     * Delete the last repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     */
    public deleteVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteVcsRootInstanceRepositoryState(vcsRootInstanceLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteVcsRootInstanceRepositoryState(rsp)));
            }));
    }
 
    /**
     * Download specific file.
     * @param path 
     * @param vcsRootInstanceLocator 
     */
    public downloadFile(path: string, vcsRootInstanceLocator: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadFile(path, vcsRootInstanceLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadFile(rsp)));
            }));
    }
 
    /**
     * Get all VCS root instances.
     * @param locator 
     * @param fields 
     */
    public getAllVcsRootInstances(locator?: string, fields?: string, options?: Configuration): Observable<VcsRootInstances> {
        const requestContextPromise = this.requestFactory.getAllVcsRootInstances(locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllVcsRootInstances(rsp)));
            }));
    }
 
    /**
     * Get metadata of specific file.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public getFileMetadata(path: string, vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getFileMetadata(path, vcsRootInstanceLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileMetadata(rsp)));
            }));
    }
 
    /**
     * List all files.
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public getFilesList(vcsRootInstanceLocator: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Observable<Files> {
        const requestContextPromise = this.requestFactory.getFilesList(vcsRootInstanceLocator, basePath, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesList(rsp)));
            }));
    }
 
    /**
     * List files under this path.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param fields 
     */
    public getFilesListForSubpath(path: string, vcsRootInstanceLocator: string, basePath?: string, locator?: string, fields?: string, options?: Configuration): Observable<Files> {
        const requestContextPromise = this.requestFactory.getFilesListForSubpath(path, vcsRootInstanceLocator, basePath, locator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesListForSubpath(rsp)));
            }));
    }
 
    /**
     * Get VCS root instance matching the locator.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public getVcsRootInstance(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Observable<VcsRootInstance> {
        const requestContextPromise = this.requestFactory.getVcsRootInstance(vcsRootInstanceLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootInstance(rsp)));
            }));
    }
 
    /**
     * Get the creation date of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     */
    public getVcsRootInstanceCreationDate(vcsRootInstanceLocator: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getVcsRootInstanceCreationDate(vcsRootInstanceLocator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootInstanceCreationDate(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     */
    public getVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getVcsRootInstanceField(vcsRootInstanceLocator, field, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootInstanceField(rsp)));
            }));
    }
 
    /**
     * Get all properties of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public getVcsRootInstanceProperties(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Observable<Properties> {
        const requestContextPromise = this.requestFactory.getVcsRootInstanceProperties(vcsRootInstanceLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootInstanceProperties(rsp)));
            }));
    }
 
    /**
     * Get the repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     */
    public getVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, fields?: string, options?: Configuration): Observable<Entries> {
        const requestContextPromise = this.requestFactory.getVcsRootInstanceRepositoryState(vcsRootInstanceLocator, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVcsRootInstanceRepositoryState(rsp)));
            }));
    }
 
    /**
     * Get specific file zipped.
     * @param path 
     * @param vcsRootInstanceLocator 
     * @param basePath 
     * @param locator 
     * @param name 
     */
    public getZippedFile(path: string, vcsRootInstanceLocator: string, basePath?: string, locator?: string, name?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.getZippedFile(path, vcsRootInstanceLocator, basePath, locator, name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getZippedFile(rsp)));
            }));
    }
 
    /**
     * Check for the pending changes for all VCS root instances.
     * @param locator 
     * @param requestor 
     * @param fields 
     */
    public requestPendingChangesCheck(locator?: string, requestor?: string, fields?: string, options?: Configuration): Observable<VcsRootInstances> {
        const requestContextPromise = this.requestFactory.requestPendingChangesCheck(locator, requestor, fields, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestPendingChangesCheck(rsp)));
            }));
    }
 
    /**
     * Get a field of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param field 
     * @param body 
     */
    public setVcsRootInstanceField(vcsRootInstanceLocator: string, field: string, body?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.setVcsRootInstanceField(vcsRootInstanceLocator, field, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setVcsRootInstanceField(rsp)));
            }));
    }
 
    /**
     * Update the repository state of the matching VCS root instance.
     * @param vcsRootInstanceLocator 
     * @param fields 
     * @param body 
     */
    public setVcsRootInstanceRepositoryState(vcsRootInstanceLocator: string, fields?: string, body?: Entries, options?: Configuration): Observable<Entries> {
        const requestContextPromise = this.requestFactory.setVcsRootInstanceRepositoryState(vcsRootInstanceLocator, fields, body, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setVcsRootInstanceRepositoryState(rsp)));
            }));
    }
 
    /**
     * Send the commit hook notification.
     * @param locator 
     * @param okOnNothingFound 
     */
    public triggerCommitHookNotification(locator?: string, okOnNothingFound?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.triggerCommitHookNotification(locator, okOnNothingFound, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.triggerCommitHookNotification(rsp)));
            }));
    }
 
}
