import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

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

import { ObservableAgentApi } from "./ObservableAPI.ts";
import { AgentApiRequestFactory, AgentApiResponseProcessor} from "../apis/AgentApi.ts";

export interface AgentApiDeleteAgentRequest {
    /**
     * 
     * @type string
     * @memberof AgentApideleteAgent
     */
    agentLocator: string
}

export interface AgentApiGetAgentRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetAgent
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApigetAgent
     */
    fields?: string
}

export interface AgentApiGetAgentFieldRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetAgentField
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApigetAgentField
     */
    field: string
}

export interface AgentApiGetAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetAgentPool
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApigetAgentPool
     */
    fields?: string
}

export interface AgentApiGetAllAgentsRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetAllAgents
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof AgentApigetAllAgents
     */
    fields?: string
}

export interface AgentApiGetAuthorizedInfoRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetAuthorizedInfo
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApigetAuthorizedInfo
     */
    fields?: string
}

export interface AgentApiGetBuildConfigurationRunPolicyRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetBuildConfigurationRunPolicy
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApigetBuildConfigurationRunPolicy
     */
    fields?: string
}

export interface AgentApiGetCompatibleBuildTypesRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetCompatibleBuildTypes
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApigetCompatibleBuildTypes
     */
    fields?: string
}

export interface AgentApiGetEnabledInfoRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetEnabledInfo
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApigetEnabledInfo
     */
    fields?: string
}

export interface AgentApiGetIncompatibleBuildTypesRequest {
    /**
     * 
     * @type string
     * @memberof AgentApigetIncompatibleBuildTypes
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApigetIncompatibleBuildTypes
     */
    fields?: string
}

export interface AgentApiSetAgentFieldRequest {
    /**
     * 
     * @type string
     * @memberof AgentApisetAgentField
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApisetAgentField
     */
    field: string
    /**
     * 
     * @type string
     * @memberof AgentApisetAgentField
     */
    body?: string
}

export interface AgentApiSetAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentApisetAgentPool
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApisetAgentPool
     */
    fields?: string
    /**
     * 
     * @type AgentPool
     * @memberof AgentApisetAgentPool
     */
    body?: AgentPool
}

export interface AgentApiSetAuthorizedInfoRequest {
    /**
     * 
     * @type string
     * @memberof AgentApisetAuthorizedInfo
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApisetAuthorizedInfo
     */
    fields?: string
    /**
     * 
     * @type AuthorizedInfo
     * @memberof AgentApisetAuthorizedInfo
     */
    body?: AuthorizedInfo
}

export interface AgentApiSetBuildConfigurationRunPolicyRequest {
    /**
     * 
     * @type string
     * @memberof AgentApisetBuildConfigurationRunPolicy
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApisetBuildConfigurationRunPolicy
     */
    fields?: string
    /**
     * 
     * @type CompatibilityPolicy
     * @memberof AgentApisetBuildConfigurationRunPolicy
     */
    body?: CompatibilityPolicy
}

export interface AgentApiSetEnabledInfoRequest {
    /**
     * 
     * @type string
     * @memberof AgentApisetEnabledInfo
     */
    agentLocator: string
    /**
     * 
     * @type string
     * @memberof AgentApisetEnabledInfo
     */
    fields?: string
    /**
     * 
     * @type EnabledInfo
     * @memberof AgentApisetEnabledInfo
     */
    body?: EnabledInfo
}

export class ObjectAgentApi {
    private api: ObservableAgentApi

    public constructor(configuration: Configuration, requestFactory?: AgentApiRequestFactory, responseProcessor?: AgentApiResponseProcessor) {
        this.api = new ObservableAgentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an inactive agent.
     * @param param the request object
     */
    public deleteAgent(param: AgentApiDeleteAgentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAgent(param.agentLocator,  options).toPromise();
    }

    /**
     * Get agent matching the locator.
     * @param param the request object
     */
    public getAgent(param: AgentApiGetAgentRequest, options?: Configuration): Promise<Agent> {
        return this.api.getAgent(param.agentLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a field of the matching agent.
     * @param param the request object
     */
    public getAgentField(param: AgentApiGetAgentFieldRequest, options?: Configuration): Promise<string> {
        return this.api.getAgentField(param.agentLocator, param.field,  options).toPromise();
    }

    /**
     * Get the agent pool of the matching agent.
     * @param param the request object
     */
    public getAgentPool(param: AgentApiGetAgentPoolRequest, options?: Configuration): Promise<AgentPool> {
        return this.api.getAgentPool(param.agentLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all known agents.
     * @param param the request object
     */
    public getAllAgents(param: AgentApiGetAllAgentsRequest, options?: Configuration): Promise<Agents> {
        return this.api.getAllAgents(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get the authorization info of the matching agent.
     * @param param the request object
     */
    public getAuthorizedInfo(param: AgentApiGetAuthorizedInfoRequest, options?: Configuration): Promise<AuthorizedInfo> {
        return this.api.getAuthorizedInfo(param.agentLocator, param.fields,  options).toPromise();
    }

    /**
     * Get the build configuration run policy of the matching agent.
     * @param param the request object
     */
    public getBuildConfigurationRunPolicy(param: AgentApiGetBuildConfigurationRunPolicyRequest, options?: Configuration): Promise<CompatibilityPolicy> {
        return this.api.getBuildConfigurationRunPolicy(param.agentLocator, param.fields,  options).toPromise();
    }

    /**
     * Get build types compatible with the matching agent.
     * @param param the request object
     */
    public getCompatibleBuildTypes(param: AgentApiGetCompatibleBuildTypesRequest, options?: Configuration): Promise<BuildTypes> {
        return this.api.getCompatibleBuildTypes(param.agentLocator, param.fields,  options).toPromise();
    }

    /**
     * Check if the matching agent is enabled.
     * @param param the request object
     */
    public getEnabledInfo(param: AgentApiGetEnabledInfoRequest, options?: Configuration): Promise<EnabledInfo> {
        return this.api.getEnabledInfo(param.agentLocator, param.fields,  options).toPromise();
    }

    /**
     * Get build types incompatible with the matching agent.
     * @param param the request object
     */
    public getIncompatibleBuildTypes(param: AgentApiGetIncompatibleBuildTypesRequest, options?: Configuration): Promise<Compatibilities> {
        return this.api.getIncompatibleBuildTypes(param.agentLocator, param.fields,  options).toPromise();
    }

    /**
     * Update a field of the matching agent.
     * @param param the request object
     */
    public setAgentField(param: AgentApiSetAgentFieldRequest, options?: Configuration): Promise<string> {
        return this.api.setAgentField(param.agentLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Assign the matching agent to the specified agent pool.
     * @param param the request object
     */
    public setAgentPool(param: AgentApiSetAgentPoolRequest, options?: Configuration): Promise<AgentPool> {
        return this.api.setAgentPool(param.agentLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update the authorization info of the matching agent.
     * @param param the request object
     */
    public setAuthorizedInfo(param: AgentApiSetAuthorizedInfoRequest, options?: Configuration): Promise<AuthorizedInfo> {
        return this.api.setAuthorizedInfo(param.agentLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update build configuration run policy of agent matching locator.
     * @param param the request object
     */
    public setBuildConfigurationRunPolicy(param: AgentApiSetBuildConfigurationRunPolicyRequest, options?: Configuration): Promise<CompatibilityPolicy> {
        return this.api.setBuildConfigurationRunPolicy(param.agentLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update the enablement status of the matching agent.
     * @param param the request object
     */
    public setEnabledInfo(param: AgentApiSetEnabledInfoRequest, options?: Configuration): Promise<EnabledInfo> {
        return this.api.setEnabledInfo(param.agentLocator, param.fields, param.body,  options).toPromise();
    }

}

import { ObservableAgentPoolApi } from "./ObservableAPI.ts";
import { AgentPoolApiRequestFactory, AgentPoolApiResponseProcessor} from "../apis/AgentPoolApi.ts";

export interface AgentPoolApiAddAgentToAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApiaddAgentToAgentPool
     */
    agentPoolLocator: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApiaddAgentToAgentPool
     */
    fields?: string
    /**
     * 
     * @type Agent
     * @memberof AgentPoolApiaddAgentToAgentPool
     */
    body?: Agent
}

export interface AgentPoolApiAddProjectToAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApiaddProjectToAgentPool
     */
    agentPoolLocator: string
    /**
     * 
     * @type Project
     * @memberof AgentPoolApiaddProjectToAgentPool
     */
    body?: Project
}

export interface AgentPoolApiCreateAgentPoolRequest {
    /**
     * 
     * @type AgentPool
     * @memberof AgentPoolApicreateAgentPool
     */
    body?: AgentPool
}

export interface AgentPoolApiDeleteAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApideleteAgentPool
     */
    agentPoolLocator: string
}

export interface AgentPoolApiDeleteAllProjectsFromAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApideleteAllProjectsFromAgentPool
     */
    agentPoolLocator: string
}

export interface AgentPoolApiDeleteProjectFromAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApideleteProjectFromAgentPool
     */
    agentPoolLocator: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApideleteProjectFromAgentPool
     */
    projectLocator: string
}

export interface AgentPoolApiGetAgentPoolOfAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAgentPoolOfAgentPool
     */
    agentPoolLocator: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAgentPoolOfAgentPool
     */
    fields?: string
}

export interface AgentPoolApiGetAllAgentPoolsRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAllAgentPools
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAllAgentPools
     */
    fields?: string
}

export interface AgentPoolApiGetAllAgentsFromAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAllAgentsFromAgentPool
     */
    agentPoolLocator: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAllAgentsFromAgentPool
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAllAgentsFromAgentPool
     */
    fields?: string
}

export interface AgentPoolApiGetAllProjectsFromAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAllProjectsFromAgentPool
     */
    agentPoolLocator: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetAllProjectsFromAgentPool
     */
    fields?: string
}

export interface AgentPoolApiGetFieldFromAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetFieldFromAgentPool
     */
    agentPoolLocator: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApigetFieldFromAgentPool
     */
    field: string
}

export interface AgentPoolApiSetAgentPoolFieldRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApisetAgentPoolField
     */
    agentPoolLocator: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApisetAgentPoolField
     */
    field: string
    /**
     * 
     * @type string
     * @memberof AgentPoolApisetAgentPoolField
     */
    body?: string
}

export interface AgentPoolApiSetAgentPoolProjectsRequest {
    /**
     * 
     * @type string
     * @memberof AgentPoolApisetAgentPoolProjects
     */
    agentPoolLocator: string
    /**
     * 
     * @type Projects
     * @memberof AgentPoolApisetAgentPoolProjects
     */
    body?: Projects
}

export class ObjectAgentPoolApi {
    private api: ObservableAgentPoolApi

    public constructor(configuration: Configuration, requestFactory?: AgentPoolApiRequestFactory, responseProcessor?: AgentPoolApiResponseProcessor) {
        this.api = new ObservableAgentPoolApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assign the agent to the matching agent pool.
     * @param param the request object
     */
    public addAgentToAgentPool(param: AgentPoolApiAddAgentToAgentPoolRequest, options?: Configuration): Promise<Agent> {
        return this.api.addAgentToAgentPool(param.agentPoolLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Assign the project to the matching agent pool.
     * @param param the request object
     */
    public addProjectToAgentPool(param: AgentPoolApiAddProjectToAgentPoolRequest, options?: Configuration): Promise<Project> {
        return this.api.addProjectToAgentPool(param.agentPoolLocator, param.body,  options).toPromise();
    }

    /**
     * Create a new agent pool.
     * @param param the request object
     */
    public createAgentPool(param: AgentPoolApiCreateAgentPoolRequest, options?: Configuration): Promise<AgentPool> {
        return this.api.createAgentPool(param.body,  options).toPromise();
    }

    /**
     * Delete the agent pool matching the locator.
     * @param param the request object
     */
    public deleteAgentPool(param: AgentPoolApiDeleteAgentPoolRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAgentPool(param.agentPoolLocator,  options).toPromise();
    }

    /**
     * Unassign all projects from the matching agent pool.
     * @param param the request object
     */
    public deleteAllProjectsFromAgentPool(param: AgentPoolApiDeleteAllProjectsFromAgentPoolRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllProjectsFromAgentPool(param.agentPoolLocator,  options).toPromise();
    }

    /**
     * Unassign the project from the matching agent pool.
     * @param param the request object
     */
    public deleteProjectFromAgentPool(param: AgentPoolApiDeleteProjectFromAgentPoolRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProjectFromAgentPool(param.agentPoolLocator, param.projectLocator,  options).toPromise();
    }

    /**
     * Get the agent pool matching the locator.
     * @param param the request object
     */
    public getAgentPoolOfAgentPool(param: AgentPoolApiGetAgentPoolOfAgentPoolRequest, options?: Configuration): Promise<AgentPool> {
        return this.api.getAgentPoolOfAgentPool(param.agentPoolLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all agent pools.
     * @param param the request object
     */
    public getAllAgentPools(param: AgentPoolApiGetAllAgentPoolsRequest, options?: Configuration): Promise<AgentPools> {
        return this.api.getAllAgentPools(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get the agent of the matching agent pool.
     * @param param the request object
     */
    public getAllAgentsFromAgentPool(param: AgentPoolApiGetAllAgentsFromAgentPoolRequest, options?: Configuration): Promise<Agents> {
        return this.api.getAllAgentsFromAgentPool(param.agentPoolLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get all projects of the matching agent pool.
     * @param param the request object
     */
    public getAllProjectsFromAgentPool(param: AgentPoolApiGetAllProjectsFromAgentPoolRequest, options?: Configuration): Promise<Projects> {
        return this.api.getAllProjectsFromAgentPool(param.agentPoolLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a field of the matching agent pool.
     * @param param the request object
     */
    public getFieldFromAgentPool(param: AgentPoolApiGetFieldFromAgentPoolRequest, options?: Configuration): Promise<string> {
        return this.api.getFieldFromAgentPool(param.agentPoolLocator, param.field,  options).toPromise();
    }

    /**
     * Update a field of the matching agent pool.
     * @param param the request object
     */
    public setAgentPoolField(param: AgentPoolApiSetAgentPoolFieldRequest, options?: Configuration): Promise<string> {
        return this.api.setAgentPoolField(param.agentPoolLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Update projects of the matching agent pool.
     * @param param the request object
     */
    public setAgentPoolProjects(param: AgentPoolApiSetAgentPoolProjectsRequest, options?: Configuration): Promise<Projects> {
        return this.api.setAgentPoolProjects(param.agentPoolLocator, param.body,  options).toPromise();
    }

}

import { ObservableAuditApi } from "./ObservableAPI.ts";
import { AuditApiRequestFactory, AuditApiResponseProcessor} from "../apis/AuditApi.ts";

export interface AuditApiGetAllAuditEventsRequest {
    /**
     * 
     * @type string
     * @memberof AuditApigetAllAuditEvents
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof AuditApigetAllAuditEvents
     */
    fields?: string
}

export interface AuditApiGetAuditEventRequest {
    /**
     * 
     * @type string
     * @memberof AuditApigetAuditEvent
     */
    auditEventLocator: string
    /**
     * 
     * @type string
     * @memberof AuditApigetAuditEvent
     */
    fields?: string
}

export class ObjectAuditApi {
    private api: ObservableAuditApi

    public constructor(configuration: Configuration, requestFactory?: AuditApiRequestFactory, responseProcessor?: AuditApiResponseProcessor) {
        this.api = new ObservableAuditApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all audit events.
     * @param param the request object
     */
    public getAllAuditEvents(param: AuditApiGetAllAuditEventsRequest, options?: Configuration): Promise<AuditEvents> {
        return this.api.getAllAuditEvents(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get audit event matching the locator.
     * @param param the request object
     */
    public getAuditEvent(param: AuditApiGetAuditEventRequest, options?: Configuration): Promise<AuditEvent> {
        return this.api.getAuditEvent(param.auditEventLocator, param.fields,  options).toPromise();
    }

}

import { ObservableBuildApi } from "./ObservableAPI.ts";
import { BuildApiRequestFactory, BuildApiResponseProcessor} from "../apis/BuildApi.ts";

export interface BuildApiAddBuildVcsLabelRequest {
    /**
     * 
     * @type string
     * @memberof BuildApiaddBuildVcsLabel
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddBuildVcsLabel
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddBuildVcsLabel
     */
    fields?: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddBuildVcsLabel
     */
    body?: string
}

export interface BuildApiAddLogMessageToBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApiaddLogMessageToBuild
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddLogMessageToBuild
     */
    fields?: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddLogMessageToBuild
     */
    body?: string
}

export interface BuildApiAddProblemToBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApiaddProblemToBuild
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddProblemToBuild
     */
    fields?: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddProblemToBuild
     */
    body?: string
}

export interface BuildApiAddTagsToBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApiaddTagsToBuild
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddTagsToBuild
     */
    fields?: string
    /**
     * 
     * @type Tags
     * @memberof BuildApiaddTagsToBuild
     */
    body?: Tags
}

export interface BuildApiAddTagsToMultipleBuildsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApiaddTagsToMultipleBuilds
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApiaddTagsToMultipleBuilds
     */
    fields?: string
    /**
     * 
     * @type Tags
     * @memberof BuildApiaddTagsToMultipleBuilds
     */
    body?: Tags
}

export interface BuildApiDeleteBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApideleteBuild
     */
    buildLocator: string
}

export interface BuildApiDeleteBuildCommentRequest {
    /**
     * 
     * @type string
     * @memberof BuildApideleteBuildComment
     */
    buildLocator: string
}

export interface BuildApiDeleteMultipleBuildCommentsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApideleteMultipleBuildComments
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApideleteMultipleBuildComments
     */
    fields?: string
}

export interface BuildApiDeleteMultipleBuildsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApideleteMultipleBuilds
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApideleteMultipleBuilds
     */
    fields?: string
}

export interface BuildApiDownloadFileOfBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApidownloadFileOfBuild
     */
    path: string
    /**
     * 
     * @type string
     * @memberof BuildApidownloadFileOfBuild
     */
    buildLocator: string
    /**
     * 
     * @type boolean
     * @memberof BuildApidownloadFileOfBuild
     */
    resolveParameters?: boolean
    /**
     * 
     * @type boolean
     * @memberof BuildApidownloadFileOfBuild
     */
    logBuildUsage?: boolean
}

export interface BuildApiGetAggregatedBuildStatusRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetAggregatedBuildStatus
     */
    buildLocator: string
}

export interface BuildApiGetAggregatedBuildStatusIconRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetAggregatedBuildStatusIcon
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetAggregatedBuildStatusIcon
     */
    suffix: string
}

export interface BuildApiGetAllBuildsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetAllBuilds
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildApigetAllBuilds
     */
    fields?: string
}

export interface BuildApiGetArtifactDependencyChangesRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetArtifactDependencyChanges
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetArtifactDependencyChanges
     */
    fields?: string
}

export interface BuildApiGetArtifactsDirectoryRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetArtifactsDirectory
     */
    buildLocator: string
}

export interface BuildApiGetBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuild
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuild
     */
    fields?: string
}

export interface BuildApiGetBuildActualParametersRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildActualParameters
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildActualParameters
     */
    fields?: string
}

export interface BuildApiGetBuildFieldRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildField
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildField
     */
    field: string
}

export interface BuildApiGetBuildFinishDateRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildFinishDate
     */
    buildLocator: string
}

export interface BuildApiGetBuildNumberRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildNumber
     */
    buildLocator: string
}

export interface BuildApiGetBuildPinInfoRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildPinInfo
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildPinInfo
     */
    fields?: string
}

export interface BuildApiGetBuildProblemsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildProblems
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildProblems
     */
    fields?: string
}

export interface BuildApiGetBuildRelatedIssuesRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildRelatedIssues
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildRelatedIssues
     */
    fields?: string
}

export interface BuildApiGetBuildResolvedRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildResolved
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildResolved
     */
    value: string
}

export interface BuildApiGetBuildResultingPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildResultingProperties
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildResultingProperties
     */
    propertyName: string
}

export interface BuildApiGetBuildSourceFileRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildSourceFile
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildSourceFile
     */
    fileName: string
}

export interface BuildApiGetBuildStatisticValueRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildStatisticValue
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildStatisticValue
     */
    name: string
}

export interface BuildApiGetBuildStatisticValuesRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildStatisticValues
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildStatisticValues
     */
    fields?: string
}

export interface BuildApiGetBuildStatusIconRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildStatusIcon
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildStatusIcon
     */
    suffix: string
}

export interface BuildApiGetBuildStatusTextRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildStatusText
     */
    buildLocator: string
}

export interface BuildApiGetBuildTagsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildTags
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildTags
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildTags
     */
    fields?: string
}

export interface BuildApiGetBuildTestOccurrencesRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildTestOccurrences
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildTestOccurrences
     */
    fields?: string
}

export interface BuildApiGetBuildVcsLabelsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildVcsLabels
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetBuildVcsLabels
     */
    fields?: string
}

export interface BuildApiGetCanceledInfoRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetCanceledInfo
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetCanceledInfo
     */
    fields?: string
}

export interface BuildApiGetFileMetadataOfBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetFileMetadataOfBuild
     */
    path: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFileMetadataOfBuild
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFileMetadataOfBuild
     */
    fields?: string
    /**
     * 
     * @type boolean
     * @memberof BuildApigetFileMetadataOfBuild
     */
    resolveParameters?: boolean
    /**
     * 
     * @type boolean
     * @memberof BuildApigetFileMetadataOfBuild
     */
    logBuildUsage?: boolean
}

export interface BuildApiGetFilesListForSubpathOfBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListForSubpathOfBuild
     */
    path: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListForSubpathOfBuild
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListForSubpathOfBuild
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListForSubpathOfBuild
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListForSubpathOfBuild
     */
    fields?: string
    /**
     * 
     * @type boolean
     * @memberof BuildApigetFilesListForSubpathOfBuild
     */
    resolveParameters?: boolean
    /**
     * 
     * @type boolean
     * @memberof BuildApigetFilesListForSubpathOfBuild
     */
    logBuildUsage?: boolean
}

export interface BuildApiGetFilesListOfBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListOfBuild
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListOfBuild
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListOfBuild
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildApigetFilesListOfBuild
     */
    fields?: string
    /**
     * 
     * @type boolean
     * @memberof BuildApigetFilesListOfBuild
     */
    resolveParameters?: boolean
    /**
     * 
     * @type boolean
     * @memberof BuildApigetFilesListOfBuild
     */
    logBuildUsage?: boolean
}

export interface BuildApiGetMultipleBuildsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetMultipleBuilds
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetMultipleBuilds
     */
    fields?: string
}

export interface BuildApiGetZippedFileOfBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildApigetZippedFileOfBuild
     */
    path: string
    /**
     * 
     * @type string
     * @memberof BuildApigetZippedFileOfBuild
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApigetZippedFileOfBuild
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof BuildApigetZippedFileOfBuild
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildApigetZippedFileOfBuild
     */
    name?: string
    /**
     * 
     * @type boolean
     * @memberof BuildApigetZippedFileOfBuild
     */
    resolveParameters?: boolean
    /**
     * 
     * @type boolean
     * @memberof BuildApigetZippedFileOfBuild
     */
    logBuildUsage?: boolean
}

export interface BuildApiMarkBuildAsRunningRequest {
    /**
     * 
     * @type string
     * @memberof BuildApimarkBuildAsRunning
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApimarkBuildAsRunning
     */
    fields?: string
    /**
     * 
     * @type string
     * @memberof BuildApimarkBuildAsRunning
     */
    body?: string
}

export interface BuildApiPinMultipleBuildsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApipinMultipleBuilds
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApipinMultipleBuilds
     */
    fields?: string
    /**
     * 
     * @type PinInfo
     * @memberof BuildApipinMultipleBuilds
     */
    body?: PinInfo
}

export interface BuildApiRemoveMultipleBuildTagsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApiremoveMultipleBuildTags
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApiremoveMultipleBuildTags
     */
    fields?: string
    /**
     * 
     * @type Tags
     * @memberof BuildApiremoveMultipleBuildTags
     */
    body?: Tags
}

export interface BuildApiResetBuildFinishPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof BuildApiresetBuildFinishProperties
     */
    buildLocator: string
}

export interface BuildApiSetBuildCommentRequest {
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildComment
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildComment
     */
    body?: string
}

export interface BuildApiSetBuildFinishDateRequest {
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildFinishDate
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildFinishDate
     */
    body?: string
}

export interface BuildApiSetBuildNumberRequest {
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildNumber
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildNumber
     */
    body?: string
}

export interface BuildApiSetBuildPinInfoRequest {
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildPinInfo
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildPinInfo
     */
    fields?: string
    /**
     * 
     * @type PinInfo
     * @memberof BuildApisetBuildPinInfo
     */
    body?: PinInfo
}

export interface BuildApiSetBuildStatusTextRequest {
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildStatusText
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildStatusText
     */
    body?: string
}

export interface BuildApiSetBuildTagsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildTags
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildTags
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildApisetBuildTags
     */
    fields?: string
    /**
     * 
     * @type Tags
     * @memberof BuildApisetBuildTags
     */
    body?: Tags
}

export interface BuildApiSetFinishedTimeRequest {
    /**
     * 
     * @type string
     * @memberof BuildApisetFinishedTime
     */
    buildLocator: string
}

export interface BuildApiSetMultipleBuildCommentsRequest {
    /**
     * 
     * @type string
     * @memberof BuildApisetMultipleBuildComments
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildApisetMultipleBuildComments
     */
    fields?: string
    /**
     * 
     * @type string
     * @memberof BuildApisetMultipleBuildComments
     */
    body?: string
}

export class ObjectBuildApi {
    private api: ObservableBuildApi

    public constructor(configuration: Configuration, requestFactory?: BuildApiRequestFactory, responseProcessor?: BuildApiResponseProcessor) {
        this.api = new ObservableBuildApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a VCS label to the matching build.
     * @param param the request object
     */
    public addBuildVcsLabel(param: BuildApiAddBuildVcsLabelRequest, options?: Configuration): Promise<VcsLabels> {
        return this.api.addBuildVcsLabel(param.buildLocator, param.locator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Adds a message to the build log. Service messages are accepted.
     * @param param the request object
     */
    public addLogMessageToBuild(param: BuildApiAddLogMessageToBuildRequest, options?: Configuration): Promise<void> {
        return this.api.addLogMessageToBuild(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add a build problem to the matching build.
     * @param param the request object
     */
    public addProblemToBuild(param: BuildApiAddProblemToBuildRequest, options?: Configuration): Promise<ProblemOccurrence> {
        return this.api.addProblemToBuild(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add tags to the matching build.
     * @param param the request object
     */
    public addTagsToBuild(param: BuildApiAddTagsToBuildRequest, options?: Configuration): Promise<Tags> {
        return this.api.addTagsToBuild(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add tags to multiple matching builds.
     * @param param the request object
     */
    public addTagsToMultipleBuilds(param: BuildApiAddTagsToMultipleBuildsRequest, options?: Configuration): Promise<MultipleOperationResult> {
        return this.api.addTagsToMultipleBuilds(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Delete build matching the locator.
     * @param param the request object
     */
    public deleteBuild(param: BuildApiDeleteBuildRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBuild(param.buildLocator,  options).toPromise();
    }

    /**
     * Remove the build comment matching the locator.
     * @param param the request object
     */
    public deleteBuildComment(param: BuildApiDeleteBuildCommentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBuildComment(param.buildLocator,  options).toPromise();
    }

    /**
     * Delete comments of multiple matching builds.
     * @param param the request object
     */
    public deleteMultipleBuildComments(param: BuildApiDeleteMultipleBuildCommentsRequest, options?: Configuration): Promise<MultipleOperationResult> {
        return this.api.deleteMultipleBuildComments(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Delete multiple builds matching the locator.
     * @param param the request object
     */
    public deleteMultipleBuilds(param: BuildApiDeleteMultipleBuildsRequest, options?: Configuration): Promise<MultipleOperationResult> {
        return this.api.deleteMultipleBuilds(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Download specific file.
     * @param param the request object
     */
    public downloadFileOfBuild(param: BuildApiDownloadFileOfBuildRequest, options?: Configuration): Promise<void> {
        return this.api.downloadFileOfBuild(param.path, param.buildLocator, param.resolveParameters, param.logBuildUsage,  options).toPromise();
    }

    /**
     * Get the build status of aggregated matching builds.
     * @param param the request object
     */
    public getAggregatedBuildStatus(param: BuildApiGetAggregatedBuildStatusRequest, options?: Configuration): Promise<string> {
        return this.api.getAggregatedBuildStatus(param.buildLocator,  options).toPromise();
    }

    /**
     * Get the status icon (in specified format) of aggregated matching builds.
     * @param param the request object
     */
    public getAggregatedBuildStatusIcon(param: BuildApiGetAggregatedBuildStatusIconRequest, options?: Configuration): Promise<void> {
        return this.api.getAggregatedBuildStatusIcon(param.buildLocator, param.suffix,  options).toPromise();
    }

    /**
     * Get all builds.
     * @param param the request object
     */
    public getAllBuilds(param: BuildApiGetAllBuildsRequest, options?: Configuration): Promise<Builds> {
        return this.api.getAllBuilds(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get artifact dependency changes of the matching build.
     * @param param the request object
     */
    public getArtifactDependencyChanges(param: BuildApiGetArtifactDependencyChangesRequest, options?: Configuration): Promise<BuildChanges> {
        return this.api.getArtifactDependencyChanges(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get the artifacts' directory of the matching build.
     * @param param the request object
     */
    public getArtifactsDirectory(param: BuildApiGetArtifactsDirectoryRequest, options?: Configuration): Promise<string> {
        return this.api.getArtifactsDirectory(param.buildLocator,  options).toPromise();
    }

    /**
     * Get build matching the locator.
     * @param param the request object
     */
    public getBuild(param: BuildApiGetBuildRequest, options?: Configuration): Promise<Build> {
        return this.api.getBuild(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get actual build parameters of the matching build.
     * @param param the request object
     */
    public getBuildActualParameters(param: BuildApiGetBuildActualParametersRequest, options?: Configuration): Promise<Properties> {
        return this.api.getBuildActualParameters(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a field of the matching build.
     * @param param the request object
     */
    public getBuildField(param: BuildApiGetBuildFieldRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildField(param.buildLocator, param.field,  options).toPromise();
    }

    /**
     * Get the finish date of the matching build.
     * @param param the request object
     */
    public getBuildFinishDate(param: BuildApiGetBuildFinishDateRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildFinishDate(param.buildLocator,  options).toPromise();
    }

    /**
     * Get the number of the matching build.
     * @param param the request object
     */
    public getBuildNumber(param: BuildApiGetBuildNumberRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildNumber(param.buildLocator,  options).toPromise();
    }

    /**
     * Check if the matching build is pinned.
     * @param param the request object
     */
    public getBuildPinInfo(param: BuildApiGetBuildPinInfoRequest, options?: Configuration): Promise<PinInfo> {
        return this.api.getBuildPinInfo(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get build problems of the matching build.
     * @param param the request object
     */
    public getBuildProblems(param: BuildApiGetBuildProblemsRequest, options?: Configuration): Promise<ProblemOccurrences> {
        return this.api.getBuildProblems(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get related issues of the matching build.
     * @param param the request object
     */
    public getBuildRelatedIssues(param: BuildApiGetBuildRelatedIssuesRequest, options?: Configuration): Promise<IssuesUsages> {
        return this.api.getBuildRelatedIssues(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get the resolvement status of the matching build.
     * @param param the request object
     */
    public getBuildResolved(param: BuildApiGetBuildResolvedRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildResolved(param.buildLocator, param.value,  options).toPromise();
    }

    /**
     * Update a build parameter of the matching build.
     * @param param the request object
     */
    public getBuildResultingProperties(param: BuildApiGetBuildResultingPropertiesRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildResultingProperties(param.buildLocator, param.propertyName,  options).toPromise();
    }

    /**
     * Get a source file of the matching build.
     * @param param the request object
     */
    public getBuildSourceFile(param: BuildApiGetBuildSourceFileRequest, options?: Configuration): Promise<void> {
        return this.api.getBuildSourceFile(param.buildLocator, param.fileName,  options).toPromise();
    }

    /**
     * Get a statistical value of the matching build.
     * @param param the request object
     */
    public getBuildStatisticValue(param: BuildApiGetBuildStatisticValueRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildStatisticValue(param.buildLocator, param.name,  options).toPromise();
    }

    /**
     * Get all statistical values of the matching build.
     * @param param the request object
     */
    public getBuildStatisticValues(param: BuildApiGetBuildStatisticValuesRequest, options?: Configuration): Promise<Properties> {
        return this.api.getBuildStatisticValues(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get the status icon (in specified format) of the matching build.
     * @param param the request object
     */
    public getBuildStatusIcon(param: BuildApiGetBuildStatusIconRequest, options?: Configuration): Promise<void> {
        return this.api.getBuildStatusIcon(param.buildLocator, param.suffix,  options).toPromise();
    }

    /**
     * Get the build status text of the matching build.
     * @param param the request object
     */
    public getBuildStatusText(param: BuildApiGetBuildStatusTextRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildStatusText(param.buildLocator,  options).toPromise();
    }

    /**
     * Get tags of the matching build.
     * @param param the request object
     */
    public getBuildTags(param: BuildApiGetBuildTagsRequest, options?: Configuration): Promise<Tags> {
        return this.api.getBuildTags(param.buildLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get test occurrences of the matching build.
     * @param param the request object
     */
    public getBuildTestOccurrences(param: BuildApiGetBuildTestOccurrencesRequest, options?: Configuration): Promise<TestOccurrences> {
        return this.api.getBuildTestOccurrences(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get VCS labels of the matching build.
     * @param param the request object
     */
    public getBuildVcsLabels(param: BuildApiGetBuildVcsLabelsRequest, options?: Configuration): Promise<VcsLabels> {
        return this.api.getBuildVcsLabels(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Check if the matching build is canceled.
     * @param param the request object
     */
    public getCanceledInfo(param: BuildApiGetCanceledInfoRequest, options?: Configuration): Promise<Comment> {
        return this.api.getCanceledInfo(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get metadata of specific file.
     * @param param the request object
     */
    public getFileMetadataOfBuild(param: BuildApiGetFileMetadataOfBuildRequest, options?: Configuration): Promise<any> {
        return this.api.getFileMetadataOfBuild(param.path, param.buildLocator, param.fields, param.resolveParameters, param.logBuildUsage,  options).toPromise();
    }

    /**
     * List files under this path.
     * @param param the request object
     */
    public getFilesListForSubpathOfBuild(param: BuildApiGetFilesListForSubpathOfBuildRequest, options?: Configuration): Promise<Files> {
        return this.api.getFilesListForSubpathOfBuild(param.path, param.buildLocator, param.basePath, param.locator, param.fields, param.resolveParameters, param.logBuildUsage,  options).toPromise();
    }

    /**
     * List all files.
     * @param param the request object
     */
    public getFilesListOfBuild(param: BuildApiGetFilesListOfBuildRequest, options?: Configuration): Promise<Files> {
        return this.api.getFilesListOfBuild(param.buildLocator, param.basePath, param.locator, param.fields, param.resolveParameters, param.logBuildUsage,  options).toPromise();
    }

    /**
     * Get multiple builds matching the locator.
     * @param param the request object
     */
    public getMultipleBuilds(param: BuildApiGetMultipleBuildsRequest, options?: Configuration): Promise<Builds> {
        return this.api.getMultipleBuilds(param.buildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get specific file zipped.
     * @param param the request object
     */
    public getZippedFileOfBuild(param: BuildApiGetZippedFileOfBuildRequest, options?: Configuration): Promise<void> {
        return this.api.getZippedFileOfBuild(param.path, param.buildLocator, param.basePath, param.locator, param.name, param.resolveParameters, param.logBuildUsage,  options).toPromise();
    }

    /**
     * Starts the queued build as an agent-less build and returns the corresponding running build.
     * @param param the request object
     */
    public markBuildAsRunning(param: BuildApiMarkBuildAsRunningRequest, options?: Configuration): Promise<Build> {
        return this.api.markBuildAsRunning(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Pin multiple matching builds.
     * @param param the request object
     */
    public pinMultipleBuilds(param: BuildApiPinMultipleBuildsRequest, options?: Configuration): Promise<MultipleOperationResult> {
        return this.api.pinMultipleBuilds(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Remove tags from multiple matching builds.
     * @param param the request object
     */
    public removeMultipleBuildTags(param: BuildApiRemoveMultipleBuildTagsRequest, options?: Configuration): Promise<MultipleOperationResult> {
        return this.api.removeMultipleBuildTags(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Remove build parameters from the matching build.
     * @param param the request object
     */
    public resetBuildFinishProperties(param: BuildApiResetBuildFinishPropertiesRequest, options?: Configuration): Promise<void> {
        return this.api.resetBuildFinishProperties(param.buildLocator,  options).toPromise();
    }

    /**
     * Update the comment on the matching build.
     * @param param the request object
     */
    public setBuildComment(param: BuildApiSetBuildCommentRequest, options?: Configuration): Promise<void> {
        return this.api.setBuildComment(param.buildLocator, param.body,  options).toPromise();
    }

    /**
     * Marks the running build as finished by passing agent the current time of the build to finish.
     * @param param the request object
     */
    public setBuildFinishDate(param: BuildApiSetBuildFinishDateRequest, options?: Configuration): Promise<string> {
        return this.api.setBuildFinishDate(param.buildLocator, param.body,  options).toPromise();
    }

    /**
     * Update the number of the matching build.
     * @param param the request object
     */
    public setBuildNumber(param: BuildApiSetBuildNumberRequest, options?: Configuration): Promise<string> {
        return this.api.setBuildNumber(param.buildLocator, param.body,  options).toPromise();
    }

    /**
     * Update the pin info of the matching build.
     * @param param the request object
     */
    public setBuildPinInfo(param: BuildApiSetBuildPinInfoRequest, options?: Configuration): Promise<PinInfo> {
        return this.api.setBuildPinInfo(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update the build status of the matching build.
     * @param param the request object
     */
    public setBuildStatusText(param: BuildApiSetBuildStatusTextRequest, options?: Configuration): Promise<string> {
        return this.api.setBuildStatusText(param.buildLocator, param.body,  options).toPromise();
    }

    /**
     * Update tags of the matching build.
     * @param param the request object
     */
    public setBuildTags(param: BuildApiSetBuildTagsRequest, options?: Configuration): Promise<Tags> {
        return this.api.setBuildTags(param.buildLocator, param.locator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Marks the running build as finished by passing agent the current time of the build to finish.
     * @param param the request object
     */
    public setFinishedTime(param: BuildApiSetFinishedTimeRequest, options?: Configuration): Promise<string> {
        return this.api.setFinishedTime(param.buildLocator,  options).toPromise();
    }

    /**
     * Update comments in multiple matching builds.
     * @param param the request object
     */
    public setMultipleBuildComments(param: BuildApiSetMultipleBuildCommentsRequest, options?: Configuration): Promise<MultipleOperationResult> {
        return this.api.setMultipleBuildComments(param.buildLocator, param.fields, param.body,  options).toPromise();
    }

}

import { ObservableBuildQueueApi } from "./ObservableAPI.ts";
import { BuildQueueApiRequestFactory, BuildQueueApiResponseProcessor} from "../apis/BuildQueueApi.ts";

export interface BuildQueueApiAddBuildToQueueRequest {
    /**
     * 
     * @type boolean
     * @memberof BuildQueueApiaddBuildToQueue
     */
    moveToTop?: boolean
    /**
     * 
     * @type Build
     * @memberof BuildQueueApiaddBuildToQueue
     */
    body?: Build
}

export interface BuildQueueApiAddTagsToBuildOfBuildQueueRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApiaddTagsToBuildOfBuildQueue
     */
    buildLocator: string
    /**
     * 
     * @type Tags
     * @memberof BuildQueueApiaddTagsToBuildOfBuildQueue
     */
    body?: Tags
}

export interface BuildQueueApiCancelQueuedBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApicancelQueuedBuild
     */
    queuedBuildLocator: string
    /**
     * 
     * @type BuildCancelRequest
     * @memberof BuildQueueApicancelQueuedBuild
     */
    body?: BuildCancelRequest
}

export interface BuildQueueApiDeleteAllQueuedBuildsRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApideleteAllQueuedBuilds
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildQueueApideleteAllQueuedBuilds
     */
    fields?: string
}

export interface BuildQueueApiDeleteQueuedBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApideleteQueuedBuild
     */
    queuedBuildLocator: string
}

export interface BuildQueueApiGetAllQueuedBuildsRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetAllQueuedBuilds
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetAllQueuedBuilds
     */
    fields?: string
}

export interface BuildQueueApiGetCompatibleAgentsForBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetCompatibleAgentsForBuild
     */
    queuedBuildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetCompatibleAgentsForBuild
     */
    fields?: string
}

export interface BuildQueueApiGetQueuedBuildRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetQueuedBuild
     */
    queuedBuildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetQueuedBuild
     */
    fields?: string
}

export interface BuildQueueApiGetQueuedBuildPositionRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetQueuedBuildPosition
     */
    queuePosition: string
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetQueuedBuildPosition
     */
    fields?: string
}

export interface BuildQueueApiGetQueuedBuildTagsRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetQueuedBuildTags
     */
    buildLocator: string
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetQueuedBuildTags
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildQueueApigetQueuedBuildTags
     */
    fields?: string
}

export interface BuildQueueApiSetQueuedBuildPositionRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApisetQueuedBuildPosition
     */
    queuePosition: string
    /**
     * 
     * @type string
     * @memberof BuildQueueApisetQueuedBuildPosition
     */
    fields?: string
    /**
     * 
     * @type Build
     * @memberof BuildQueueApisetQueuedBuildPosition
     */
    body?: Build
}

export interface BuildQueueApiSetQueuedBuildsOrderRequest {
    /**
     * 
     * @type string
     * @memberof BuildQueueApisetQueuedBuildsOrder
     */
    fields?: string
    /**
     * 
     * @type Builds
     * @memberof BuildQueueApisetQueuedBuildsOrder
     */
    body?: Builds
}

export class ObjectBuildQueueApi {
    private api: ObservableBuildQueueApi

    public constructor(configuration: Configuration, requestFactory?: BuildQueueApiRequestFactory, responseProcessor?: BuildQueueApiResponseProcessor) {
        this.api = new ObservableBuildQueueApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new build to the queue.
     * @param param the request object
     */
    public addBuildToQueue(param: BuildQueueApiAddBuildToQueueRequest, options?: Configuration): Promise<Build> {
        return this.api.addBuildToQueue(param.moveToTop, param.body,  options).toPromise();
    }

    /**
     * Add tags to the matching build.
     * @param param the request object
     */
    public addTagsToBuildOfBuildQueue(param: BuildQueueApiAddTagsToBuildOfBuildQueueRequest, options?: Configuration): Promise<void> {
        return this.api.addTagsToBuildOfBuildQueue(param.buildLocator, param.body,  options).toPromise();
    }

    /**
     * Cancel a queued matching build.
     * @param param the request object
     */
    public cancelQueuedBuild(param: BuildQueueApiCancelQueuedBuildRequest, options?: Configuration): Promise<Build> {
        return this.api.cancelQueuedBuild(param.queuedBuildLocator, param.body,  options).toPromise();
    }

    /**
     * Delete all queued builds.
     * @param param the request object
     */
    public deleteAllQueuedBuilds(param: BuildQueueApiDeleteAllQueuedBuildsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllQueuedBuilds(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Delete a queued matching build.
     * @param param the request object
     */
    public deleteQueuedBuild(param: BuildQueueApiDeleteQueuedBuildRequest, options?: Configuration): Promise<void> {
        return this.api.deleteQueuedBuild(param.queuedBuildLocator,  options).toPromise();
    }

    /**
     * Get all queued builds.
     * @param param the request object
     */
    public getAllQueuedBuilds(param: BuildQueueApiGetAllQueuedBuildsRequest, options?: Configuration): Promise<Builds> {
        return this.api.getAllQueuedBuilds(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get compatible agents for a queued matching build.
     * @param param the request object
     */
    public getCompatibleAgentsForBuild(param: BuildQueueApiGetCompatibleAgentsForBuildRequest, options?: Configuration): Promise<Agents> {
        return this.api.getCompatibleAgentsForBuild(param.queuedBuildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a queued matching build.
     * @param param the request object
     */
    public getQueuedBuild(param: BuildQueueApiGetQueuedBuildRequest, options?: Configuration): Promise<Build> {
        return this.api.getQueuedBuild(param.queuedBuildLocator, param.fields,  options).toPromise();
    }

    /**
     * Get the queue position of a queued matching build.
     * @param param the request object
     */
    public getQueuedBuildPosition(param: BuildQueueApiGetQueuedBuildPositionRequest, options?: Configuration): Promise<Build> {
        return this.api.getQueuedBuildPosition(param.queuePosition, param.fields,  options).toPromise();
    }

    /**
     * Get tags of the queued matching build.
     * @param param the request object
     */
    public getQueuedBuildTags(param: BuildQueueApiGetQueuedBuildTagsRequest, options?: Configuration): Promise<Tags> {
        return this.api.getQueuedBuildTags(param.buildLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Update the queue position of a queued matching build.
     * @param param the request object
     */
    public setQueuedBuildPosition(param: BuildQueueApiSetQueuedBuildPositionRequest, options?: Configuration): Promise<Build> {
        return this.api.setQueuedBuildPosition(param.queuePosition, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update the build queue order.
     * @param param the request object
     */
    public setQueuedBuildsOrder(param: BuildQueueApiSetQueuedBuildsOrderRequest, options?: Configuration): Promise<Builds> {
        return this.api.setQueuedBuildsOrder(param.fields, param.body,  options).toPromise();
    }

}

import { ObservableBuildTypeApi } from "./ObservableAPI.ts";
import { BuildTypeApiRequestFactory, BuildTypeApiResponseProcessor} from "../apis/BuildTypeApi.ts";

export interface BuildTypeApiAddAgentRequirementToBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddAgentRequirementToBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddAgentRequirementToBuildType
     */
    fields?: string
    /**
     * 
     * @type AgentRequirement
     * @memberof BuildTypeApiaddAgentRequirementToBuildType
     */
    body?: AgentRequirement
}

export interface BuildTypeApiAddArtifactDependencyToBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddArtifactDependencyToBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddArtifactDependencyToBuildType
     */
    fields?: string
    /**
     * 
     * @type ArtifactDependency
     * @memberof BuildTypeApiaddArtifactDependencyToBuildType
     */
    body?: ArtifactDependency
}

export interface BuildTypeApiAddBuildFeatureToBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddBuildFeatureToBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddBuildFeatureToBuildType
     */
    fields?: string
    /**
     * 
     * @type Feature
     * @memberof BuildTypeApiaddBuildFeatureToBuildType
     */
    body?: Feature
}

export interface BuildTypeApiAddBuildStepToBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddBuildStepToBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddBuildStepToBuildType
     */
    fields?: string
    /**
     * 
     * @type Step
     * @memberof BuildTypeApiaddBuildStepToBuildType
     */
    body?: Step
}

export interface BuildTypeApiAddBuildTemplateRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddBuildTemplate
     */
    btLocator: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApiaddBuildTemplate
     */
    optimizeSettings?: boolean
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddBuildTemplate
     */
    fields?: string
    /**
     * 
     * @type BuildType
     * @memberof BuildTypeApiaddBuildTemplate
     */
    body?: BuildType
}

export interface BuildTypeApiAddParameterToBuildFeatureRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddParameterToBuildFeature
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddParameterToBuildFeature
     */
    featureId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddParameterToBuildFeature
     */
    parameterName: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddParameterToBuildFeature
     */
    body?: string
}

export interface BuildTypeApiAddParameterToBuildStepRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddParameterToBuildStep
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddParameterToBuildStep
     */
    stepId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddParameterToBuildStep
     */
    parameterName: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddParameterToBuildStep
     */
    body?: string
}

export interface BuildTypeApiAddSnapshotDependencyToBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddSnapshotDependencyToBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddSnapshotDependencyToBuildType
     */
    fields?: string
    /**
     * 
     * @type SnapshotDependency
     * @memberof BuildTypeApiaddSnapshotDependencyToBuildType
     */
    body?: SnapshotDependency
}

export interface BuildTypeApiAddTriggerToBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddTriggerToBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddTriggerToBuildType
     */
    fields?: string
    /**
     * 
     * @type Trigger
     * @memberof BuildTypeApiaddTriggerToBuildType
     */
    body?: Trigger
}

export interface BuildTypeApiAddVcsRootToBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddVcsRootToBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiaddVcsRootToBuildType
     */
    fields?: string
    /**
     * 
     * @type VcsRootEntry
     * @memberof BuildTypeApiaddVcsRootToBuildType
     */
    body?: VcsRootEntry
}

export interface BuildTypeApiCreateBuildParameterOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApicreateBuildParameterOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApicreateBuildParameterOfBuildType
     */
    fields?: string
    /**
     * 
     * @type Property
     * @memberof BuildTypeApicreateBuildParameterOfBuildType
     */
    body?: Property
}

export interface BuildTypeApiCreateBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApicreateBuildType
     */
    fields?: string
    /**
     * 
     * @type BuildType
     * @memberof BuildTypeApicreateBuildType
     */
    body?: BuildType
}

export interface BuildTypeApiDeleteAgentRequirementRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteAgentRequirement
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteAgentRequirement
     */
    agentRequirementLocator: string
}

export interface BuildTypeApiDeleteArtifactDependencyRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteArtifactDependency
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteArtifactDependency
     */
    artifactDepLocator: string
}

export interface BuildTypeApiDeleteBuildParameterOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildParameterOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildParameterOfBuildType
     */
    btLocator: string
}

export interface BuildTypeApiDeleteBuildParametersOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildParametersOfBuildType
     */
    btLocator: string
}

export interface BuildTypeApiDeleteBuildStepRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildStep
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildStep
     */
    stepId: string
}

export interface BuildTypeApiDeleteBuildStepParametersRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildStepParameters
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildStepParameters
     */
    stepId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildStepParameters
     */
    fields?: string
    /**
     * 
     * @type Properties
     * @memberof BuildTypeApideleteBuildStepParameters
     */
    body?: Properties
}

export interface BuildTypeApiDeleteBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteBuildType
     */
    btLocator: string
}

export interface BuildTypeApiDeleteFeatureOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteFeatureOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteFeatureOfBuildType
     */
    featureId: string
}

export interface BuildTypeApiDeleteSnapshotDependencyRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteSnapshotDependency
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteSnapshotDependency
     */
    snapshotDepLocator: string
}

export interface BuildTypeApiDeleteTriggerRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteTrigger
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteTrigger
     */
    triggerLocator: string
}

export interface BuildTypeApiDeleteVcsRootOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteVcsRootOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApideleteVcsRootOfBuildType
     */
    vcsRootLocator: string
}

export interface BuildTypeApiDownloadFileOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApidownloadFileOfBuildType
     */
    path: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApidownloadFileOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApidownloadFileOfBuildType
     */
    resolveParameters?: boolean
}

export interface BuildTypeApiGetAgentRequirementRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAgentRequirement
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAgentRequirement
     */
    agentRequirementLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAgentRequirement
     */
    fields?: string
}

export interface BuildTypeApiGetAgentRequirementParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAgentRequirementParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAgentRequirementParameter
     */
    agentRequirementLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAgentRequirementParameter
     */
    fieldName: string
}

export interface BuildTypeApiGetAliasesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAliases
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAliases
     */
    field?: string
}

export interface BuildTypeApiGetAllAgentRequirementsRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllAgentRequirements
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllAgentRequirements
     */
    fields?: string
}

export interface BuildTypeApiGetAllArtifactDependenciesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllArtifactDependencies
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllArtifactDependencies
     */
    fields?: string
}

export interface BuildTypeApiGetAllBranchesOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBranchesOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBranchesOfBuildType
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBranchesOfBuildType
     */
    fields?: string
}

export interface BuildTypeApiGetAllBuildFeatureParametersRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildFeatureParameters
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildFeatureParameters
     */
    featureId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildFeatureParameters
     */
    fields?: string
}

export interface BuildTypeApiGetAllBuildFeaturesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildFeatures
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildFeatures
     */
    fields?: string
}

export interface BuildTypeApiGetAllBuildStepParametersRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildStepParameters
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildStepParameters
     */
    stepId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildStepParameters
     */
    fields?: string
}

export interface BuildTypeApiGetAllBuildStepsRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildSteps
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildSteps
     */
    fields?: string
}

export interface BuildTypeApiGetAllBuildTemplatesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildTemplates
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildTemplates
     */
    fields?: string
}

export interface BuildTypeApiGetAllBuildTypesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildTypes
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllBuildTypes
     */
    fields?: string
}

export interface BuildTypeApiGetAllInvestigationsOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllInvestigationsOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllInvestigationsOfBuildType
     */
    fields?: string
}

export interface BuildTypeApiGetAllSnapshotDependenciesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllSnapshotDependencies
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllSnapshotDependencies
     */
    fields?: string
}

export interface BuildTypeApiGetAllTriggersRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllTriggers
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllTriggers
     */
    fields?: string
}

export interface BuildTypeApiGetAllVcsRootsOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllVcsRootsOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetAllVcsRootsOfBuildType
     */
    fields?: string
}

export interface BuildTypeApiGetArtifactDependencyRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetArtifactDependency
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetArtifactDependency
     */
    artifactDepLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetArtifactDependency
     */
    fields?: string
}

export interface BuildTypeApiGetArtifactDependencyParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetArtifactDependencyParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetArtifactDependencyParameter
     */
    artifactDepLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetArtifactDependencyParameter
     */
    fieldName: string
}

export interface BuildTypeApiGetBuildFeatureRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeature
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeature
     */
    featureId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeature
     */
    fields?: string
}

export interface BuildTypeApiGetBuildFeatureParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeatureParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeatureParameter
     */
    featureId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeatureParameter
     */
    parameterName: string
}

export interface BuildTypeApiGetBuildFeatureSettingRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeatureSetting
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeatureSetting
     */
    featureId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildFeatureSetting
     */
    name: string
}

export interface BuildTypeApiGetBuildParameterOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterOfBuildType
     */
    fields?: string
}

export interface BuildTypeApiGetBuildParameterSpecificationOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterSpecificationOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterSpecificationOfBuildType
     */
    btLocator: string
}

export interface BuildTypeApiGetBuildParameterTypeOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterTypeOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterTypeOfBuildType
     */
    btLocator: string
}

export interface BuildTypeApiGetBuildParameterValueOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterValueOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParameterValueOfBuildType
     */
    btLocator: string
}

export interface BuildTypeApiGetBuildParametersOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParametersOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParametersOfBuildType
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildParametersOfBuildType
     */
    fields?: string
}

export interface BuildTypeApiGetBuildStepRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStep
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStep
     */
    stepId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStep
     */
    fields?: string
}

export interface BuildTypeApiGetBuildStepParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStepParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStepParameter
     */
    stepId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStepParameter
     */
    parameterName: string
}

export interface BuildTypeApiGetBuildStepSettingRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStepSetting
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStepSetting
     */
    stepId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildStepSetting
     */
    fieldName: string
}

export interface BuildTypeApiGetBuildTemplateRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTemplate
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTemplate
     */
    templateLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTemplate
     */
    fields?: string
}

export interface BuildTypeApiGetBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildType
     */
    fields?: string
}

export interface BuildTypeApiGetBuildTypeBuildTagsRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTypeBuildTags
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTypeBuildTags
     */
    field?: string
}

export interface BuildTypeApiGetBuildTypeBuildsRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTypeBuilds
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTypeBuilds
     */
    fields?: string
}

export interface BuildTypeApiGetBuildTypeFieldRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTypeField
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTypeField
     */
    field: string
}

export interface BuildTypeApiGetBuildTypeSettingsFileRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetBuildTypeSettingsFile
     */
    btLocator: string
}

export interface BuildTypeApiGetFileMetadataOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFileMetadataOfBuildType
     */
    path: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFileMetadataOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFileMetadataOfBuildType
     */
    fields?: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApigetFileMetadataOfBuildType
     */
    resolveParameters?: boolean
}

export interface BuildTypeApiGetFilesListForSubpathOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListForSubpathOfBuildType
     */
    path: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListForSubpathOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListForSubpathOfBuildType
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListForSubpathOfBuildType
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListForSubpathOfBuildType
     */
    fields?: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApigetFilesListForSubpathOfBuildType
     */
    resolveParameters?: boolean
}

export interface BuildTypeApiGetFilesListOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListOfBuildType
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListOfBuildType
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetFilesListOfBuildType
     */
    fields?: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApigetFilesListOfBuildType
     */
    resolveParameters?: boolean
}

export interface BuildTypeApiGetSnapshotDependencyRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetSnapshotDependency
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetSnapshotDependency
     */
    snapshotDepLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetSnapshotDependency
     */
    fields?: string
}

export interface BuildTypeApiGetTriggerRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetTrigger
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetTrigger
     */
    triggerLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetTrigger
     */
    fields?: string
}

export interface BuildTypeApiGetTriggerParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetTriggerParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetTriggerParameter
     */
    triggerLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetTriggerParameter
     */
    fieldName: string
}

export interface BuildTypeApiGetVcsRootRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetVcsRoot
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetVcsRoot
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetVcsRoot
     */
    fields?: string
}

export interface BuildTypeApiGetVcsRootCheckoutRulesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetVcsRootCheckoutRules
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetVcsRootCheckoutRules
     */
    vcsRootLocator: string
}

export interface BuildTypeApiGetVcsRootInstancesOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetVcsRootInstancesOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetVcsRootInstancesOfBuildType
     */
    fields?: string
}

export interface BuildTypeApiGetZippedFileOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetZippedFileOfBuildType
     */
    path: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetZippedFileOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetZippedFileOfBuildType
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetZippedFileOfBuildType
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApigetZippedFileOfBuildType
     */
    name?: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApigetZippedFileOfBuildType
     */
    resolveParameters?: boolean
}

export interface BuildTypeApiRemoveAllTemplatesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiremoveAllTemplates
     */
    btLocator: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApiremoveAllTemplates
     */
    inlineSettings?: boolean
}

export interface BuildTypeApiRemoveTemplateRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiremoveTemplate
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiremoveTemplate
     */
    templateLocator: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApiremoveTemplate
     */
    inlineSettings?: boolean
}

export interface BuildTypeApiReplaceAgentRequirementRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAgentRequirement
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAgentRequirement
     */
    agentRequirementLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAgentRequirement
     */
    fields?: string
    /**
     * 
     * @type AgentRequirement
     * @memberof BuildTypeApireplaceAgentRequirement
     */
    body?: AgentRequirement
}

export interface BuildTypeApiReplaceAllAgentRequirementsRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllAgentRequirements
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllAgentRequirements
     */
    fields?: string
    /**
     * 
     * @type AgentRequirements
     * @memberof BuildTypeApireplaceAllAgentRequirements
     */
    body?: AgentRequirements
}

export interface BuildTypeApiReplaceAllArtifactDependenciesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllArtifactDependencies
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllArtifactDependencies
     */
    fields?: string
    /**
     * 
     * @type ArtifactDependencies
     * @memberof BuildTypeApireplaceAllArtifactDependencies
     */
    body?: ArtifactDependencies
}

export interface BuildTypeApiReplaceAllBuildFeaturesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllBuildFeatures
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllBuildFeatures
     */
    fields?: string
    /**
     * 
     * @type Features
     * @memberof BuildTypeApireplaceAllBuildFeatures
     */
    body?: Features
}

export interface BuildTypeApiReplaceAllBuildStepsRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllBuildSteps
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllBuildSteps
     */
    fields?: string
    /**
     * 
     * @type Steps
     * @memberof BuildTypeApireplaceAllBuildSteps
     */
    body?: Steps
}

export interface BuildTypeApiReplaceAllSnapshotDependenciesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllSnapshotDependencies
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllSnapshotDependencies
     */
    fields?: string
    /**
     * 
     * @type SnapshotDependencies
     * @memberof BuildTypeApireplaceAllSnapshotDependencies
     */
    body?: SnapshotDependencies
}

export interface BuildTypeApiReplaceAllTriggersRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllTriggers
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllTriggers
     */
    fields?: string
    /**
     * 
     * @type Triggers
     * @memberof BuildTypeApireplaceAllTriggers
     */
    body?: Triggers
}

export interface BuildTypeApiReplaceAllVcsRootsRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllVcsRoots
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceAllVcsRoots
     */
    fields?: string
    /**
     * 
     * @type VcsRootEntries
     * @memberof BuildTypeApireplaceAllVcsRoots
     */
    body?: VcsRootEntries
}

export interface BuildTypeApiReplaceArtifactDependencyRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceArtifactDependency
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceArtifactDependency
     */
    artifactDepLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceArtifactDependency
     */
    fields?: string
    /**
     * 
     * @type ArtifactDependency
     * @memberof BuildTypeApireplaceArtifactDependency
     */
    body?: ArtifactDependency
}

export interface BuildTypeApiReplaceBuildFeatureRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildFeature
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildFeature
     */
    featureId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildFeature
     */
    fields?: string
    /**
     * 
     * @type Feature
     * @memberof BuildTypeApireplaceBuildFeature
     */
    body?: Feature
}

export interface BuildTypeApiReplaceBuildFeatureParametersRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildFeatureParameters
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildFeatureParameters
     */
    featureId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildFeatureParameters
     */
    fields?: string
    /**
     * 
     * @type Properties
     * @memberof BuildTypeApireplaceBuildFeatureParameters
     */
    body?: Properties
}

export interface BuildTypeApiReplaceBuildStepRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildStep
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildStep
     */
    stepId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceBuildStep
     */
    fields?: string
    /**
     * 
     * @type Step
     * @memberof BuildTypeApireplaceBuildStep
     */
    body?: Step
}

export interface BuildTypeApiReplaceSnapshotDependencyRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceSnapshotDependency
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceSnapshotDependency
     */
    snapshotDepLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceSnapshotDependency
     */
    fields?: string
    /**
     * 
     * @type SnapshotDependency
     * @memberof BuildTypeApireplaceSnapshotDependency
     */
    body?: SnapshotDependency
}

export interface BuildTypeApiReplaceTriggerRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceTrigger
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceTrigger
     */
    triggerLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApireplaceTrigger
     */
    fields?: string
    /**
     * 
     * @type Trigger
     * @memberof BuildTypeApireplaceTrigger
     */
    body?: Trigger
}

export interface BuildTypeApiSetAgentRequirementParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetAgentRequirementParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetAgentRequirementParameter
     */
    agentRequirementLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetAgentRequirementParameter
     */
    fieldName: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetAgentRequirementParameter
     */
    body?: string
}

export interface BuildTypeApiSetArtifactDependencyParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetArtifactDependencyParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetArtifactDependencyParameter
     */
    artifactDepLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetArtifactDependencyParameter
     */
    fieldName: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetArtifactDependencyParameter
     */
    body?: string
}

export interface BuildTypeApiSetBuildFeatureParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildFeatureParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildFeatureParameter
     */
    featureId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildFeatureParameter
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildFeatureParameter
     */
    body?: string
}

export interface BuildTypeApiSetBuildStepParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildStepParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildStepParameter
     */
    stepId: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildStepParameter
     */
    fieldName: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildStepParameter
     */
    body?: string
}

export interface BuildTypeApiSetBuildTypeFieldRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildTypeField
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildTypeField
     */
    field: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildTypeField
     */
    body?: string
}

export interface BuildTypeApiSetBuildTypeTemplatesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildTypeTemplates
     */
    btLocator: string
    /**
     * 
     * @type boolean
     * @memberof BuildTypeApisetBuildTypeTemplates
     */
    optimizeSettings?: boolean
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetBuildTypeTemplates
     */
    fields?: string
    /**
     * 
     * @type BuildTypes
     * @memberof BuildTypeApisetBuildTypeTemplates
     */
    body?: BuildTypes
}

export interface BuildTypeApiSetTriggerParameterRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetTriggerParameter
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetTriggerParameter
     */
    triggerLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetTriggerParameter
     */
    fieldName: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApisetTriggerParameter
     */
    body?: string
}

export interface BuildTypeApiUpdateBuildParameterOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterOfBuildType
     */
    fields?: string
    /**
     * 
     * @type Property
     * @memberof BuildTypeApiupdateBuildParameterOfBuildType
     */
    body?: Property
}

export interface BuildTypeApiUpdateBuildParameterSpecificationOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterSpecificationOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterSpecificationOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterSpecificationOfBuildType
     */
    body?: string
}

export interface BuildTypeApiUpdateBuildParameterTypeOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterTypeOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterTypeOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type Type
     * @memberof BuildTypeApiupdateBuildParameterTypeOfBuildType
     */
    body?: Type
}

export interface BuildTypeApiUpdateBuildParameterValueOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterValueOfBuildType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterValueOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParameterValueOfBuildType
     */
    body?: string
}

export interface BuildTypeApiUpdateBuildParametersOfBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParametersOfBuildType
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildParametersOfBuildType
     */
    fields?: string
    /**
     * 
     * @type Properties
     * @memberof BuildTypeApiupdateBuildParametersOfBuildType
     */
    body?: Properties
}

export interface BuildTypeApiUpdateBuildTypeVcsRootRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildTypeVcsRoot
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildTypeVcsRoot
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildTypeVcsRoot
     */
    fields?: string
    /**
     * 
     * @type VcsRootEntry
     * @memberof BuildTypeApiupdateBuildTypeVcsRoot
     */
    body?: VcsRootEntry
}

export interface BuildTypeApiUpdateBuildTypeVcsRootCheckoutRulesRequest {
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildTypeVcsRootCheckoutRules
     */
    btLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildTypeVcsRootCheckoutRules
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof BuildTypeApiupdateBuildTypeVcsRootCheckoutRules
     */
    body?: string
}

export class ObjectBuildTypeApi {
    private api: ObservableBuildTypeApi

    public constructor(configuration: Configuration, requestFactory?: BuildTypeApiRequestFactory, responseProcessor?: BuildTypeApiResponseProcessor) {
        this.api = new ObservableBuildTypeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add an agent requirement to the matching build configuration.
     * @param param the request object
     */
    public addAgentRequirementToBuildType(param: BuildTypeApiAddAgentRequirementToBuildTypeRequest, options?: Configuration): Promise<AgentRequirement> {
        return this.api.addAgentRequirementToBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add an artifact dependency to the matching build configuration.
     * @param param the request object
     */
    public addArtifactDependencyToBuildType(param: BuildTypeApiAddArtifactDependencyToBuildTypeRequest, options?: Configuration): Promise<ArtifactDependency> {
        return this.api.addArtifactDependencyToBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add build feature to the matching build configuration.
     * @param param the request object
     */
    public addBuildFeatureToBuildType(param: BuildTypeApiAddBuildFeatureToBuildTypeRequest, options?: Configuration): Promise<Feature> {
        return this.api.addBuildFeatureToBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add a build step to the matching build configuration.
     * @param param the request object
     */
    public addBuildStepToBuildType(param: BuildTypeApiAddBuildStepToBuildTypeRequest, options?: Configuration): Promise<Step> {
        return this.api.addBuildStepToBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add a build template to the matching build configuration.
     * @param param the request object
     */
    public addBuildTemplate(param: BuildTypeApiAddBuildTemplateRequest, options?: Configuration): Promise<BuildType> {
        return this.api.addBuildTemplate(param.btLocator, param.optimizeSettings, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update build feature parameter for the matching build configuration.
     * @param param the request object
     */
    public addParameterToBuildFeature(param: BuildTypeApiAddParameterToBuildFeatureRequest, options?: Configuration): Promise<string> {
        return this.api.addParameterToBuildFeature(param.btLocator, param.featureId, param.parameterName, param.body,  options).toPromise();
    }

    /**
     * Add a parameter to a build step of the matching build configuration.
     * @param param the request object
     */
    public addParameterToBuildStep(param: BuildTypeApiAddParameterToBuildStepRequest, options?: Configuration): Promise<string> {
        return this.api.addParameterToBuildStep(param.btLocator, param.stepId, param.parameterName, param.body,  options).toPromise();
    }

    /**
     * Add a snapshot dependency to the matching build configuration.
     * @param param the request object
     */
    public addSnapshotDependencyToBuildType(param: BuildTypeApiAddSnapshotDependencyToBuildTypeRequest, options?: Configuration): Promise<SnapshotDependency> {
        return this.api.addSnapshotDependencyToBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add a trigger to the matching build configuration.
     * @param param the request object
     */
    public addTriggerToBuildType(param: BuildTypeApiAddTriggerToBuildTypeRequest, options?: Configuration): Promise<Trigger> {
        return this.api.addTriggerToBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add a VCS root to the matching build.
     * @param param the request object
     */
    public addVcsRootToBuildType(param: BuildTypeApiAddVcsRootToBuildTypeRequest, options?: Configuration): Promise<VcsRootEntry> {
        return this.api.addVcsRootToBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Create a build parameter.
     * @param param the request object
     */
    public createBuildParameterOfBuildType(param: BuildTypeApiCreateBuildParameterOfBuildTypeRequest, options?: Configuration): Promise<Property> {
        return this.api.createBuildParameterOfBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Create a new build configuration.
     * @param param the request object
     */
    public createBuildType(param: BuildTypeApiCreateBuildTypeRequest, options?: Configuration): Promise<BuildType> {
        return this.api.createBuildType(param.fields, param.body,  options).toPromise();
    }

    /**
     * Remove an agent requirement of the matching build configuration.
     * @param param the request object
     */
    public deleteAgentRequirement(param: BuildTypeApiDeleteAgentRequirementRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAgentRequirement(param.btLocator, param.agentRequirementLocator,  options).toPromise();
    }

    /**
     * Remove an artifact dependency from the matching build configuration.
     * @param param the request object
     */
    public deleteArtifactDependency(param: BuildTypeApiDeleteArtifactDependencyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteArtifactDependency(param.btLocator, param.artifactDepLocator,  options).toPromise();
    }

    /**
     * Delete build parameter.
     * @param param the request object
     */
    public deleteBuildParameterOfBuildType(param: BuildTypeApiDeleteBuildParameterOfBuildTypeRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBuildParameterOfBuildType(param.name, param.btLocator,  options).toPromise();
    }

    /**
     * Delete all build parameters.
     * @param param the request object
     */
    public deleteBuildParametersOfBuildType(param: BuildTypeApiDeleteBuildParametersOfBuildTypeRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBuildParametersOfBuildType(param.btLocator,  options).toPromise();
    }

    /**
     * Delete a build step of the matching build configuration.
     * @param param the request object
     */
    public deleteBuildStep(param: BuildTypeApiDeleteBuildStepRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBuildStep(param.btLocator, param.stepId,  options).toPromise();
    }

    /**
     * Update a parameter of a build step of the matching build configuration.
     * @param param the request object
     */
    public deleteBuildStepParameters(param: BuildTypeApiDeleteBuildStepParametersRequest, options?: Configuration): Promise<Properties> {
        return this.api.deleteBuildStepParameters(param.btLocator, param.stepId, param.fields, param.body,  options).toPromise();
    }

    /**
     * Delete build configuration matching the locator.
     * @param param the request object
     */
    public deleteBuildType(param: BuildTypeApiDeleteBuildTypeRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBuildType(param.btLocator,  options).toPromise();
    }

    /**
     * Remove a build feature of the matching build configuration.
     * @param param the request object
     */
    public deleteFeatureOfBuildType(param: BuildTypeApiDeleteFeatureOfBuildTypeRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFeatureOfBuildType(param.btLocator, param.featureId,  options).toPromise();
    }

    /**
     * Delete a snapshot dependency of the matching build configuration.
     * @param param the request object
     */
    public deleteSnapshotDependency(param: BuildTypeApiDeleteSnapshotDependencyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSnapshotDependency(param.btLocator, param.snapshotDepLocator,  options).toPromise();
    }

    /**
     * Delete a trigger of the matching build configuration.
     * @param param the request object
     */
    public deleteTrigger(param: BuildTypeApiDeleteTriggerRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTrigger(param.btLocator, param.triggerLocator,  options).toPromise();
    }

    /**
     * Remove a VCS root of the matching build configuration.
     * @param param the request object
     */
    public deleteVcsRootOfBuildType(param: BuildTypeApiDeleteVcsRootOfBuildTypeRequest, options?: Configuration): Promise<void> {
        return this.api.deleteVcsRootOfBuildType(param.btLocator, param.vcsRootLocator,  options).toPromise();
    }

    /**
     * Download specific file.
     * @param param the request object
     */
    public downloadFileOfBuildType(param: BuildTypeApiDownloadFileOfBuildTypeRequest, options?: Configuration): Promise<void> {
        return this.api.downloadFileOfBuildType(param.path, param.btLocator, param.resolveParameters,  options).toPromise();
    }

    /**
     * Get an agent requirement of the matching build configuration.
     * @param param the request object
     */
    public getAgentRequirement(param: BuildTypeApiGetAgentRequirementRequest, options?: Configuration): Promise<AgentRequirement> {
        return this.api.getAgentRequirement(param.btLocator, param.agentRequirementLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a setting of an agent requirement of the matching build configuration.
     * @param param the request object
     */
    public getAgentRequirementParameter(param: BuildTypeApiGetAgentRequirementParameterRequest, options?: Configuration): Promise<string> {
        return this.api.getAgentRequirementParameter(param.btLocator, param.agentRequirementLocator, param.fieldName,  options).toPromise();
    }

    /**
     * Get external IDs of the matching build configuration.
     * @param param the request object
     */
    public getAliases(param: BuildTypeApiGetAliasesRequest, options?: Configuration): Promise<Items> {
        return this.api.getAliases(param.btLocator, param.field,  options).toPromise();
    }

    /**
     * Get all agent requirements of the matching build configuration.
     * @param param the request object
     */
    public getAllAgentRequirements(param: BuildTypeApiGetAllAgentRequirementsRequest, options?: Configuration): Promise<AgentRequirements> {
        return this.api.getAllAgentRequirements(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all artifact dependencies of the matching build configuration.
     * @param param the request object
     */
    public getAllArtifactDependencies(param: BuildTypeApiGetAllArtifactDependenciesRequest, options?: Configuration): Promise<ArtifactDependencies> {
        return this.api.getAllArtifactDependencies(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all branches of the matching build configuration.
     * @param param the request object
     */
    public getAllBranchesOfBuildType(param: BuildTypeApiGetAllBranchesOfBuildTypeRequest, options?: Configuration): Promise<Branches> {
        return this.api.getAllBranchesOfBuildType(param.btLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get all parameters of a build feature of the matching build configuration.
     * @param param the request object
     */
    public getAllBuildFeatureParameters(param: BuildTypeApiGetAllBuildFeatureParametersRequest, options?: Configuration): Promise<Properties> {
        return this.api.getAllBuildFeatureParameters(param.btLocator, param.featureId, param.fields,  options).toPromise();
    }

    /**
     * Get all build features of the matching build configuration.
     * @param param the request object
     */
    public getAllBuildFeatures(param: BuildTypeApiGetAllBuildFeaturesRequest, options?: Configuration): Promise<Features> {
        return this.api.getAllBuildFeatures(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all parameters of a build step of the matching build configuration.
     * @param param the request object
     */
    public getAllBuildStepParameters(param: BuildTypeApiGetAllBuildStepParametersRequest, options?: Configuration): Promise<Properties> {
        return this.api.getAllBuildStepParameters(param.btLocator, param.stepId, param.fields,  options).toPromise();
    }

    /**
     * Get all build steps of the matching build configuration.
     * @param param the request object
     */
    public getAllBuildSteps(param: BuildTypeApiGetAllBuildStepsRequest, options?: Configuration): Promise<Steps> {
        return this.api.getAllBuildSteps(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all build templates of the matching build configuration.
     * @param param the request object
     */
    public getAllBuildTemplates(param: BuildTypeApiGetAllBuildTemplatesRequest, options?: Configuration): Promise<BuildTypes> {
        return this.api.getAllBuildTemplates(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all build configurations.
     * @param param the request object
     */
    public getAllBuildTypes(param: BuildTypeApiGetAllBuildTypesRequest, options?: Configuration): Promise<BuildTypes> {
        return this.api.getAllBuildTypes(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get all investigations of the matching build configuration.
     * @param param the request object
     */
    public getAllInvestigationsOfBuildType(param: BuildTypeApiGetAllInvestigationsOfBuildTypeRequest, options?: Configuration): Promise<Investigations> {
        return this.api.getAllInvestigationsOfBuildType(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all snapshot dependencies of the matching build configuration.
     * @param param the request object
     */
    public getAllSnapshotDependencies(param: BuildTypeApiGetAllSnapshotDependenciesRequest, options?: Configuration): Promise<SnapshotDependencies> {
        return this.api.getAllSnapshotDependencies(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all triggers of the matching build configuration.
     * @param param the request object
     */
    public getAllTriggers(param: BuildTypeApiGetAllTriggersRequest, options?: Configuration): Promise<Triggers> {
        return this.api.getAllTriggers(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all VCS roots of the matching build configuration.
     * @param param the request object
     */
    public getAllVcsRootsOfBuildType(param: BuildTypeApiGetAllVcsRootsOfBuildTypeRequest, options?: Configuration): Promise<VcsRootEntries> {
        return this.api.getAllVcsRootsOfBuildType(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get an artifact dependency of the matching build configuration.
     * @param param the request object
     */
    public getArtifactDependency(param: BuildTypeApiGetArtifactDependencyRequest, options?: Configuration): Promise<ArtifactDependency> {
        return this.api.getArtifactDependency(param.btLocator, param.artifactDepLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a parameter of an artifact dependency of the matching build configuration.
     * @param param the request object
     */
    public getArtifactDependencyParameter(param: BuildTypeApiGetArtifactDependencyParameterRequest, options?: Configuration): Promise<string> {
        return this.api.getArtifactDependencyParameter(param.btLocator, param.artifactDepLocator, param.fieldName,  options).toPromise();
    }

    /**
     * Get a build feature of the matching build configuration.
     * @param param the request object
     */
    public getBuildFeature(param: BuildTypeApiGetBuildFeatureRequest, options?: Configuration): Promise<Feature> {
        return this.api.getBuildFeature(param.btLocator, param.featureId, param.fields,  options).toPromise();
    }

    /**
     * Get a parameter of a build feature of the matching build configuration.
     * @param param the request object
     */
    public getBuildFeatureParameter(param: BuildTypeApiGetBuildFeatureParameterRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildFeatureParameter(param.btLocator, param.featureId, param.parameterName,  options).toPromise();
    }

    /**
     * Get the setting of a build feature of the matching build configuration.
     * @param param the request object
     */
    public getBuildFeatureSetting(param: BuildTypeApiGetBuildFeatureSettingRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildFeatureSetting(param.btLocator, param.featureId, param.name,  options).toPromise();
    }

    /**
     * Get build parameter.
     * @param param the request object
     */
    public getBuildParameterOfBuildType(param: BuildTypeApiGetBuildParameterOfBuildTypeRequest, options?: Configuration): Promise<Property> {
        return this.api.getBuildParameterOfBuildType(param.name, param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get build parameter specification.
     * @param param the request object
     */
    public getBuildParameterSpecificationOfBuildType(param: BuildTypeApiGetBuildParameterSpecificationOfBuildTypeRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildParameterSpecificationOfBuildType(param.name, param.btLocator,  options).toPromise();
    }

    /**
     * Get type of build parameter.
     * @param param the request object
     */
    public getBuildParameterTypeOfBuildType(param: BuildTypeApiGetBuildParameterTypeOfBuildTypeRequest, options?: Configuration): Promise<Type> {
        return this.api.getBuildParameterTypeOfBuildType(param.name, param.btLocator,  options).toPromise();
    }

    /**
     * Get value of build parameter.
     * @param param the request object
     */
    public getBuildParameterValueOfBuildType(param: BuildTypeApiGetBuildParameterValueOfBuildTypeRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildParameterValueOfBuildType(param.name, param.btLocator,  options).toPromise();
    }

    /**
     * Get build parameters.
     * @param param the request object
     */
    public getBuildParametersOfBuildType(param: BuildTypeApiGetBuildParametersOfBuildTypeRequest, options?: Configuration): Promise<Properties> {
        return this.api.getBuildParametersOfBuildType(param.btLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get a build step of the matching build configuration.
     * @param param the request object
     */
    public getBuildStep(param: BuildTypeApiGetBuildStepRequest, options?: Configuration): Promise<Step> {
        return this.api.getBuildStep(param.btLocator, param.stepId, param.fields,  options).toPromise();
    }

    /**
     * Get a parameter of a build step of the matching build configuration.
     * @param param the request object
     */
    public getBuildStepParameter(param: BuildTypeApiGetBuildStepParameterRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildStepParameter(param.btLocator, param.stepId, param.parameterName,  options).toPromise();
    }

    /**
     * Get the setting of a build step of the matching build configuration.
     * @param param the request object
     */
    public getBuildStepSetting(param: BuildTypeApiGetBuildStepSettingRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildStepSetting(param.btLocator, param.stepId, param.fieldName,  options).toPromise();
    }

    /**
     * Get a template of the matching build configuration.
     * @param param the request object
     */
    public getBuildTemplate(param: BuildTypeApiGetBuildTemplateRequest, options?: Configuration): Promise<BuildType> {
        return this.api.getBuildTemplate(param.btLocator, param.templateLocator, param.fields,  options).toPromise();
    }

    /**
     * Get build configuration matching the locator.
     * @param param the request object
     */
    public getBuildType(param: BuildTypeApiGetBuildTypeRequest, options?: Configuration): Promise<BuildType> {
        return this.api.getBuildType(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get tags of builds of the matching build configuration.
     * @param param the request object
     */
    public getBuildTypeBuildTags(param: BuildTypeApiGetBuildTypeBuildTagsRequest, options?: Configuration): Promise<Tags> {
        return this.api.getBuildTypeBuildTags(param.btLocator, param.field,  options).toPromise();
    }

    /**
     * Get builds of the matching build configuration.
     * @param param the request object
     */
    public getBuildTypeBuilds(param: BuildTypeApiGetBuildTypeBuildsRequest, options?: Configuration): Promise<Builds> {
        return this.api.getBuildTypeBuilds(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a field of the matching build configuration.
     * @param param the request object
     */
    public getBuildTypeField(param: BuildTypeApiGetBuildTypeFieldRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildTypeField(param.btLocator, param.field,  options).toPromise();
    }

    /**
     * Get the settings file of the matching build configuration.
     * @param param the request object
     */
    public getBuildTypeSettingsFile(param: BuildTypeApiGetBuildTypeSettingsFileRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildTypeSettingsFile(param.btLocator,  options).toPromise();
    }

    /**
     * Get metadata of specific file.
     * @param param the request object
     */
    public getFileMetadataOfBuildType(param: BuildTypeApiGetFileMetadataOfBuildTypeRequest, options?: Configuration): Promise<any> {
        return this.api.getFileMetadataOfBuildType(param.path, param.btLocator, param.fields, param.resolveParameters,  options).toPromise();
    }

    /**
     * List files under this path.
     * @param param the request object
     */
    public getFilesListForSubpathOfBuildType(param: BuildTypeApiGetFilesListForSubpathOfBuildTypeRequest, options?: Configuration): Promise<Files> {
        return this.api.getFilesListForSubpathOfBuildType(param.path, param.btLocator, param.basePath, param.locator, param.fields, param.resolveParameters,  options).toPromise();
    }

    /**
     * List all files.
     * @param param the request object
     */
    public getFilesListOfBuildType(param: BuildTypeApiGetFilesListOfBuildTypeRequest, options?: Configuration): Promise<Files> {
        return this.api.getFilesListOfBuildType(param.btLocator, param.basePath, param.locator, param.fields, param.resolveParameters,  options).toPromise();
    }

    /**
     * Get a snapshot dependency of the matching build configuration.
     * @param param the request object
     */
    public getSnapshotDependency(param: BuildTypeApiGetSnapshotDependencyRequest, options?: Configuration): Promise<SnapshotDependency> {
        return this.api.getSnapshotDependency(param.btLocator, param.snapshotDepLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a trigger of the matching build configuration.
     * @param param the request object
     */
    public getTrigger(param: BuildTypeApiGetTriggerRequest, options?: Configuration): Promise<Trigger> {
        return this.api.getTrigger(param.btLocator, param.triggerLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a parameter of a trigger of the matching build configuration.
     * @param param the request object
     */
    public getTriggerParameter(param: BuildTypeApiGetTriggerParameterRequest, options?: Configuration): Promise<string> {
        return this.api.getTriggerParameter(param.btLocator, param.triggerLocator, param.fieldName,  options).toPromise();
    }

    /**
     * Get a VCS root of the matching build configuration.
     * @param param the request object
     */
    public getVcsRoot(param: BuildTypeApiGetVcsRootRequest, options?: Configuration): Promise<VcsRootEntry> {
        return this.api.getVcsRoot(param.btLocator, param.vcsRootLocator, param.fields,  options).toPromise();
    }

    /**
     * Get checkout rules of a VCS root of the matching build configuration.
     * @param param the request object
     */
    public getVcsRootCheckoutRules(param: BuildTypeApiGetVcsRootCheckoutRulesRequest, options?: Configuration): Promise<string> {
        return this.api.getVcsRootCheckoutRules(param.btLocator, param.vcsRootLocator,  options).toPromise();
    }

    /**
     * Get all VCS root instances of the matching build configuration.
     * @param param the request object
     */
    public getVcsRootInstancesOfBuildType(param: BuildTypeApiGetVcsRootInstancesOfBuildTypeRequest, options?: Configuration): Promise<VcsRootInstances> {
        return this.api.getVcsRootInstancesOfBuildType(param.btLocator, param.fields,  options).toPromise();
    }

    /**
     * Get specific file zipped.
     * @param param the request object
     */
    public getZippedFileOfBuildType(param: BuildTypeApiGetZippedFileOfBuildTypeRequest, options?: Configuration): Promise<void> {
        return this.api.getZippedFileOfBuildType(param.path, param.btLocator, param.basePath, param.locator, param.name, param.resolveParameters,  options).toPromise();
    }

    /**
     * Detach all templates from the matching build configuration.
     * @param param the request object
     */
    public removeAllTemplates(param: BuildTypeApiRemoveAllTemplatesRequest, options?: Configuration): Promise<void> {
        return this.api.removeAllTemplates(param.btLocator, param.inlineSettings,  options).toPromise();
    }

    /**
     * Detach a template from the matching build configuration.
     * @param param the request object
     */
    public removeTemplate(param: BuildTypeApiRemoveTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.removeTemplate(param.btLocator, param.templateLocator, param.inlineSettings,  options).toPromise();
    }

    /**
     * Update an agent requirement of the matching build configuration.
     * @param param the request object
     */
    public replaceAgentRequirement(param: BuildTypeApiReplaceAgentRequirementRequest, options?: Configuration): Promise<AgentRequirement> {
        return this.api.replaceAgentRequirement(param.btLocator, param.agentRequirementLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all agent requirements of the matching build configuration.
     * @param param the request object
     */
    public replaceAllAgentRequirements(param: BuildTypeApiReplaceAllAgentRequirementsRequest, options?: Configuration): Promise<AgentRequirements> {
        return this.api.replaceAllAgentRequirements(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all artifact dependencies of the matching build configuration.
     * @param param the request object
     */
    public replaceAllArtifactDependencies(param: BuildTypeApiReplaceAllArtifactDependenciesRequest, options?: Configuration): Promise<ArtifactDependencies> {
        return this.api.replaceAllArtifactDependencies(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all build features of the matching build configuration.
     * @param param the request object
     */
    public replaceAllBuildFeatures(param: BuildTypeApiReplaceAllBuildFeaturesRequest, options?: Configuration): Promise<Features> {
        return this.api.replaceAllBuildFeatures(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all build steps of the matching build configuration.
     * @param param the request object
     */
    public replaceAllBuildSteps(param: BuildTypeApiReplaceAllBuildStepsRequest, options?: Configuration): Promise<Steps> {
        return this.api.replaceAllBuildSteps(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all snapshot dependencies of the matching build configuration.
     * @param param the request object
     */
    public replaceAllSnapshotDependencies(param: BuildTypeApiReplaceAllSnapshotDependenciesRequest, options?: Configuration): Promise<SnapshotDependencies> {
        return this.api.replaceAllSnapshotDependencies(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all triggers of the matching build configuration.
     * @param param the request object
     */
    public replaceAllTriggers(param: BuildTypeApiReplaceAllTriggersRequest, options?: Configuration): Promise<Triggers> {
        return this.api.replaceAllTriggers(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all VCS roots of the matching build configuration.
     * @param param the request object
     */
    public replaceAllVcsRoots(param: BuildTypeApiReplaceAllVcsRootsRequest, options?: Configuration): Promise<VcsRootEntries> {
        return this.api.replaceAllVcsRoots(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update an artifact dependency of the matching build configuration.
     * @param param the request object
     */
    public replaceArtifactDependency(param: BuildTypeApiReplaceArtifactDependencyRequest, options?: Configuration): Promise<ArtifactDependency> {
        return this.api.replaceArtifactDependency(param.btLocator, param.artifactDepLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a build feature of the matching build configuration.
     * @param param the request object
     */
    public replaceBuildFeature(param: BuildTypeApiReplaceBuildFeatureRequest, options?: Configuration): Promise<Feature> {
        return this.api.replaceBuildFeature(param.btLocator, param.featureId, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a parameter of a build feature of the matching build configuration.
     * @param param the request object
     */
    public replaceBuildFeatureParameters(param: BuildTypeApiReplaceBuildFeatureParametersRequest, options?: Configuration): Promise<Properties> {
        return this.api.replaceBuildFeatureParameters(param.btLocator, param.featureId, param.fields, param.body,  options).toPromise();
    }

    /**
     * Replace a build step of the matching build configuration.
     * @param param the request object
     */
    public replaceBuildStep(param: BuildTypeApiReplaceBuildStepRequest, options?: Configuration): Promise<Step> {
        return this.api.replaceBuildStep(param.btLocator, param.stepId, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a snapshot dependency of the matching build configuration.
     * @param param the request object
     */
    public replaceSnapshotDependency(param: BuildTypeApiReplaceSnapshotDependencyRequest, options?: Configuration): Promise<SnapshotDependency> {
        return this.api.replaceSnapshotDependency(param.btLocator, param.snapshotDepLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a trigger of the matching build configuration.
     * @param param the request object
     */
    public replaceTrigger(param: BuildTypeApiReplaceTriggerRequest, options?: Configuration): Promise<Trigger> {
        return this.api.replaceTrigger(param.btLocator, param.triggerLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a parameter of an agent requirement of the matching build configuration.
     * @param param the request object
     */
    public setAgentRequirementParameter(param: BuildTypeApiSetAgentRequirementParameterRequest, options?: Configuration): Promise<string> {
        return this.api.setAgentRequirementParameter(param.btLocator, param.agentRequirementLocator, param.fieldName, param.body,  options).toPromise();
    }

    /**
     * Update a parameter of an artifact dependency of the matching build configuration.
     * @param param the request object
     */
    public setArtifactDependencyParameter(param: BuildTypeApiSetArtifactDependencyParameterRequest, options?: Configuration): Promise<string> {
        return this.api.setArtifactDependencyParameter(param.btLocator, param.artifactDepLocator, param.fieldName, param.body,  options).toPromise();
    }

    /**
     * Update a parameter of a build feature of the matching build configuration.
     * @param param the request object
     */
    public setBuildFeatureParameter(param: BuildTypeApiSetBuildFeatureParameterRequest, options?: Configuration): Promise<string> {
        return this.api.setBuildFeatureParameter(param.btLocator, param.featureId, param.name, param.body,  options).toPromise();
    }

    /**
     * Update a parameter of a build step of the matching build configuration.
     * @param param the request object
     */
    public setBuildStepParameter(param: BuildTypeApiSetBuildStepParameterRequest, options?: Configuration): Promise<string> {
        return this.api.setBuildStepParameter(param.btLocator, param.stepId, param.fieldName, param.body,  options).toPromise();
    }

    /**
     * Update a field of the matching build configuration.
     * @param param the request object
     */
    public setBuildTypeField(param: BuildTypeApiSetBuildTypeFieldRequest, options?: Configuration): Promise<string> {
        return this.api.setBuildTypeField(param.btLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Update all templates of the matching build configuration.
     * @param param the request object
     */
    public setBuildTypeTemplates(param: BuildTypeApiSetBuildTypeTemplatesRequest, options?: Configuration): Promise<BuildTypes> {
        return this.api.setBuildTypeTemplates(param.btLocator, param.optimizeSettings, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a parameter of a trigger of the matching build configuration.
     * @param param the request object
     */
    public setTriggerParameter(param: BuildTypeApiSetTriggerParameterRequest, options?: Configuration): Promise<string> {
        return this.api.setTriggerParameter(param.btLocator, param.triggerLocator, param.fieldName, param.body,  options).toPromise();
    }

    /**
     * Update build parameter.
     * @param param the request object
     */
    public updateBuildParameterOfBuildType(param: BuildTypeApiUpdateBuildParameterOfBuildTypeRequest, options?: Configuration): Promise<Property> {
        return this.api.updateBuildParameterOfBuildType(param.name, param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update build parameter specification.
     * @param param the request object
     */
    public updateBuildParameterSpecificationOfBuildType(param: BuildTypeApiUpdateBuildParameterSpecificationOfBuildTypeRequest, options?: Configuration): Promise<string> {
        return this.api.updateBuildParameterSpecificationOfBuildType(param.name, param.btLocator, param.body,  options).toPromise();
    }

    /**
     * Update type of build parameter.
     * @param param the request object
     */
    public updateBuildParameterTypeOfBuildType(param: BuildTypeApiUpdateBuildParameterTypeOfBuildTypeRequest, options?: Configuration): Promise<Type> {
        return this.api.updateBuildParameterTypeOfBuildType(param.name, param.btLocator, param.body,  options).toPromise();
    }

    /**
     * Update value of build parameter.
     * @param param the request object
     */
    public updateBuildParameterValueOfBuildType(param: BuildTypeApiUpdateBuildParameterValueOfBuildTypeRequest, options?: Configuration): Promise<string> {
        return this.api.updateBuildParameterValueOfBuildType(param.name, param.btLocator, param.body,  options).toPromise();
    }

    /**
     * Update build parameters.
     * @param param the request object
     */
    public updateBuildParametersOfBuildType(param: BuildTypeApiUpdateBuildParametersOfBuildTypeRequest, options?: Configuration): Promise<Properties> {
        return this.api.updateBuildParametersOfBuildType(param.btLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a VCS root of the matching build configuration.
     * @param param the request object
     */
    public updateBuildTypeVcsRoot(param: BuildTypeApiUpdateBuildTypeVcsRootRequest, options?: Configuration): Promise<VcsRootEntry> {
        return this.api.updateBuildTypeVcsRoot(param.btLocator, param.vcsRootLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update checkout rules of a VCS root of the matching build configuration.
     * @param param the request object
     */
    public updateBuildTypeVcsRootCheckoutRules(param: BuildTypeApiUpdateBuildTypeVcsRootCheckoutRulesRequest, options?: Configuration): Promise<string> {
        return this.api.updateBuildTypeVcsRootCheckoutRules(param.btLocator, param.vcsRootLocator, param.body,  options).toPromise();
    }

}

import { ObservableChangeApi } from "./ObservableAPI.ts";
import { ChangeApiRequestFactory, ChangeApiResponseProcessor} from "../apis/ChangeApi.ts";

export interface ChangeApiGetAllChangesRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetAllChanges
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetAllChanges
     */
    fields?: string
}

export interface ChangeApiGetChangeRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChange
     */
    changeLocator: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetChange
     */
    fields?: string
}

export interface ChangeApiGetChangeAttributesRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeAttributes
     */
    changeLocator: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeAttributes
     */
    fields?: string
}

export interface ChangeApiGetChangeDuplicatesRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeDuplicates
     */
    changeLocator: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeDuplicates
     */
    fields?: string
}

export interface ChangeApiGetChangeFieldRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeField
     */
    changeLocator: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeField
     */
    field: string
}

export interface ChangeApiGetChangeFirstBuildsRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeFirstBuilds
     */
    changeLocator: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeFirstBuilds
     */
    fields?: string
}

export interface ChangeApiGetChangeIssueRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeIssue
     */
    changeLocator: string
}

export interface ChangeApiGetChangeParentChangesRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeParentChanges
     */
    changeLocator: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeParentChanges
     */
    fields?: string
}

export interface ChangeApiGetChangeParentRevisionsRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeParentRevisions
     */
    changeLocator: string
}

export interface ChangeApiGetChangeRelatedBuildTypesRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeRelatedBuildTypes
     */
    changeLocator: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeRelatedBuildTypes
     */
    fields?: string
}

export interface ChangeApiGetChangeVcsRootRequest {
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeVcsRoot
     */
    changeLocator: string
    /**
     * 
     * @type string
     * @memberof ChangeApigetChangeVcsRoot
     */
    fields?: string
}

export class ObjectChangeApi {
    private api: ObservableChangeApi

    public constructor(configuration: Configuration, requestFactory?: ChangeApiRequestFactory, responseProcessor?: ChangeApiResponseProcessor) {
        this.api = new ObservableChangeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all changes.
     * @param param the request object
     */
    public getAllChanges(param: ChangeApiGetAllChangesRequest, options?: Configuration): Promise<Changes> {
        return this.api.getAllChanges(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get change matching the locator.
     * @param param the request object
     */
    public getChange(param: ChangeApiGetChangeRequest, options?: Configuration): Promise<Change> {
        return this.api.getChange(param.changeLocator, param.fields,  options).toPromise();
    }

    /**
     * Get attributes of the matching change.
     * @param param the request object
     */
    public getChangeAttributes(param: ChangeApiGetChangeAttributesRequest, options?: Configuration): Promise<Entries> {
        return this.api.getChangeAttributes(param.changeLocator, param.fields,  options).toPromise();
    }

    /**
     * Get duplicates of the matching change.
     * @param param the request object
     */
    public getChangeDuplicates(param: ChangeApiGetChangeDuplicatesRequest, options?: Configuration): Promise<Changes> {
        return this.api.getChangeDuplicates(param.changeLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a field of the matching change.
     * @param param the request object
     */
    public getChangeField(param: ChangeApiGetChangeFieldRequest, options?: Configuration): Promise<string> {
        return this.api.getChangeField(param.changeLocator, param.field,  options).toPromise();
    }

    /**
     * Get first builds of the matching change.
     * @param param the request object
     */
    public getChangeFirstBuilds(param: ChangeApiGetChangeFirstBuildsRequest, options?: Configuration): Promise<Builds> {
        return this.api.getChangeFirstBuilds(param.changeLocator, param.fields,  options).toPromise();
    }

    /**
     * Get issues of the matching change.
     * @param param the request object
     */
    public getChangeIssue(param: ChangeApiGetChangeIssueRequest, options?: Configuration): Promise<Issues> {
        return this.api.getChangeIssue(param.changeLocator,  options).toPromise();
    }

    /**
     * Get parent changes of the matching change.
     * @param param the request object
     */
    public getChangeParentChanges(param: ChangeApiGetChangeParentChangesRequest, options?: Configuration): Promise<Changes> {
        return this.api.getChangeParentChanges(param.changeLocator, param.fields,  options).toPromise();
    }

    /**
     * Get parent revisions of the matching change.
     * @param param the request object
     */
    public getChangeParentRevisions(param: ChangeApiGetChangeParentRevisionsRequest, options?: Configuration): Promise<Items> {
        return this.api.getChangeParentRevisions(param.changeLocator,  options).toPromise();
    }

    /**
     * Get build configurations related to the matching change.
     * @param param the request object
     */
    public getChangeRelatedBuildTypes(param: ChangeApiGetChangeRelatedBuildTypesRequest, options?: Configuration): Promise<BuildTypes> {
        return this.api.getChangeRelatedBuildTypes(param.changeLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a VCS root instance of the matching change.
     * @param param the request object
     */
    public getChangeVcsRoot(param: ChangeApiGetChangeVcsRootRequest, options?: Configuration): Promise<VcsRootInstance> {
        return this.api.getChangeVcsRoot(param.changeLocator, param.fields,  options).toPromise();
    }

}

import { ObservableCloudInstanceApi } from "./ObservableAPI.ts";
import { CloudInstanceApiRequestFactory, CloudInstanceApiResponseProcessor} from "../apis/CloudInstanceApi.ts";

export interface CloudInstanceApiGetAllCloudImagesRequest {
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetAllCloudImages
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetAllCloudImages
     */
    fields?: string
}

export interface CloudInstanceApiGetAllCloudInstancesRequest {
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetAllCloudInstances
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetAllCloudInstances
     */
    fields?: string
}

export interface CloudInstanceApiGetAllCloudProfilesRequest {
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetAllCloudProfiles
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetAllCloudProfiles
     */
    fields?: string
}

export interface CloudInstanceApiGetCloudImageRequest {
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetCloudImage
     */
    imageLocator: string
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetCloudImage
     */
    fields?: string
}

export interface CloudInstanceApiGetCloudInstanceRequest {
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetCloudInstance
     */
    instanceLocator: string
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetCloudInstance
     */
    fields?: string
}

export interface CloudInstanceApiGetCloudProfileRequest {
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetCloudProfile
     */
    profileLocator: string
    /**
     * 
     * @type string
     * @memberof CloudInstanceApigetCloudProfile
     */
    fields?: string
}

export interface CloudInstanceApiStartInstanceRequest {
    /**
     * 
     * @type string
     * @memberof CloudInstanceApistartInstance
     */
    fields?: string
    /**
     * 
     * @type CloudInstance
     * @memberof CloudInstanceApistartInstance
     */
    body?: CloudInstance
}

export interface CloudInstanceApiStopInstanceRequest {
    /**
     * 
     * @type string
     * @memberof CloudInstanceApistopInstance
     */
    instanceLocator: string
}

export class ObjectCloudInstanceApi {
    private api: ObservableCloudInstanceApi

    public constructor(configuration: Configuration, requestFactory?: CloudInstanceApiRequestFactory, responseProcessor?: CloudInstanceApiResponseProcessor) {
        this.api = new ObservableCloudInstanceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all cloud images.
     * @param param the request object
     */
    public getAllCloudImages(param: CloudInstanceApiGetAllCloudImagesRequest, options?: Configuration): Promise<CloudImages> {
        return this.api.getAllCloudImages(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get all cloud instances.
     * @param param the request object
     */
    public getAllCloudInstances(param: CloudInstanceApiGetAllCloudInstancesRequest, options?: Configuration): Promise<CloudInstances> {
        return this.api.getAllCloudInstances(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get all cloud profiles.
     * @param param the request object
     */
    public getAllCloudProfiles(param: CloudInstanceApiGetAllCloudProfilesRequest, options?: Configuration): Promise<CloudProfiles> {
        return this.api.getAllCloudProfiles(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get cloud image matching the locator.
     * @param param the request object
     */
    public getCloudImage(param: CloudInstanceApiGetCloudImageRequest, options?: Configuration): Promise<CloudImage> {
        return this.api.getCloudImage(param.imageLocator, param.fields,  options).toPromise();
    }

    /**
     * Get cloud instance matching the locator.
     * @param param the request object
     */
    public getCloudInstance(param: CloudInstanceApiGetCloudInstanceRequest, options?: Configuration): Promise<CloudInstance> {
        return this.api.getCloudInstance(param.instanceLocator, param.fields,  options).toPromise();
    }

    /**
     * Get cloud profile matching the locator.
     * @param param the request object
     */
    public getCloudProfile(param: CloudInstanceApiGetCloudProfileRequest, options?: Configuration): Promise<CloudProfile> {
        return this.api.getCloudProfile(param.profileLocator, param.fields,  options).toPromise();
    }

    /**
     * Start a new cloud instance.
     * @param param the request object
     */
    public startInstance(param: CloudInstanceApiStartInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.startInstance(param.fields, param.body,  options).toPromise();
    }

    /**
     * Stop cloud instance matching the locator.
     * @param param the request object
     */
    public stopInstance(param: CloudInstanceApiStopInstanceRequest, options?: Configuration): Promise<void> {
        return this.api.stopInstance(param.instanceLocator,  options).toPromise();
    }

}

import { ObservableGroupApi } from "./ObservableAPI.ts";
import { GroupApiRequestFactory, GroupApiResponseProcessor} from "../apis/GroupApi.ts";

export interface GroupApiAddGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupApiaddGroup
     */
    fields?: string
    /**
     * 
     * @type Group
     * @memberof GroupApiaddGroup
     */
    body?: Group
}

export interface GroupApiAddRoleAtScopeToGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupApiaddRoleAtScopeToGroup
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApiaddRoleAtScopeToGroup
     */
    roleId: string
    /**
     * 
     * @type string
     * @memberof GroupApiaddRoleAtScopeToGroup
     */
    scope: string
}

export interface GroupApiAddRoleToGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupApiaddRoleToGroup
     */
    groupLocator: string
    /**
     * 
     * @type Role
     * @memberof GroupApiaddRoleToGroup
     */
    body?: Role
}

export interface GroupApiDeleteGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupApideleteGroup
     */
    groupLocator: string
}

export interface GroupApiGetAllGroupsRequest {
    /**
     * 
     * @type string
     * @memberof GroupApigetAllGroups
     */
    fields?: string
}

export interface GroupApiGetGroupParentGroupsRequest {
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupParentGroups
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupParentGroups
     */
    fields?: string
}

export interface GroupApiGetGroupPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupProperties
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupProperties
     */
    fields?: string
}

export interface GroupApiGetGroupPropertyRequest {
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupProperty
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupProperty
     */
    name: string
}

export interface GroupApiGetGroupRoleAtScopeRequest {
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupRoleAtScope
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupRoleAtScope
     */
    roleId: string
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupRoleAtScope
     */
    scope: string
}

export interface GroupApiGetGroupRolesRequest {
    /**
     * 
     * @type string
     * @memberof GroupApigetGroupRoles
     */
    groupLocator: string
}

export interface GroupApiGetUserGroupOfGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupApigetUserGroupOfGroup
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApigetUserGroupOfGroup
     */
    fields?: string
}

export interface GroupApiRemoveGroupPropertyRequest {
    /**
     * 
     * @type string
     * @memberof GroupApiremoveGroupProperty
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApiremoveGroupProperty
     */
    name: string
}

export interface GroupApiRemoveRoleAtScopeFromGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupApiremoveRoleAtScopeFromGroup
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApiremoveRoleAtScopeFromGroup
     */
    roleId: string
    /**
     * 
     * @type string
     * @memberof GroupApiremoveRoleAtScopeFromGroup
     */
    scope: string
}

export interface GroupApiSetGroupParentGroupsRequest {
    /**
     * 
     * @type string
     * @memberof GroupApisetGroupParentGroups
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApisetGroupParentGroups
     */
    fields?: string
    /**
     * 
     * @type Groups
     * @memberof GroupApisetGroupParentGroups
     */
    body?: Groups
}

export interface GroupApiSetGroupPropertyRequest {
    /**
     * 
     * @type string
     * @memberof GroupApisetGroupProperty
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof GroupApisetGroupProperty
     */
    name: string
    /**
     * 
     * @type string
     * @memberof GroupApisetGroupProperty
     */
    body?: string
}

export interface GroupApiSetGroupRolesRequest {
    /**
     * 
     * @type string
     * @memberof GroupApisetGroupRoles
     */
    groupLocator: string
    /**
     * 
     * @type Roles
     * @memberof GroupApisetGroupRoles
     */
    body?: Roles
}

export class ObjectGroupApi {
    private api: ObservableGroupApi

    public constructor(configuration: Configuration, requestFactory?: GroupApiRequestFactory, responseProcessor?: GroupApiResponseProcessor) {
        this.api = new ObservableGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new user group.
     * @param param the request object
     */
    public addGroup(param: GroupApiAddGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.addGroup(param.fields, param.body,  options).toPromise();
    }

    /**
     * Add a role with the specific scope to the matching user group.
     * @param param the request object
     */
    public addRoleAtScopeToGroup(param: GroupApiAddRoleAtScopeToGroupRequest, options?: Configuration): Promise<Role> {
        return this.api.addRoleAtScopeToGroup(param.groupLocator, param.roleId, param.scope,  options).toPromise();
    }

    /**
     * Add a role to the matching user group.
     * @param param the request object
     */
    public addRoleToGroup(param: GroupApiAddRoleToGroupRequest, options?: Configuration): Promise<Role> {
        return this.api.addRoleToGroup(param.groupLocator, param.body,  options).toPromise();
    }

    /**
     * Delete user group matching the locator.
     * @param param the request object
     */
    public deleteGroup(param: GroupApiDeleteGroupRequest, options?: Configuration): Promise<void> {
        return this.api.deleteGroup(param.groupLocator,  options).toPromise();
    }

    /**
     * Get all user groups.
     * @param param the request object
     */
    public getAllGroups(param: GroupApiGetAllGroupsRequest, options?: Configuration): Promise<Groups> {
        return this.api.getAllGroups(param.fields,  options).toPromise();
    }

    /**
     * Get parent groups of the matching user group.
     * @param param the request object
     */
    public getGroupParentGroups(param: GroupApiGetGroupParentGroupsRequest, options?: Configuration): Promise<Groups> {
        return this.api.getGroupParentGroups(param.groupLocator, param.fields,  options).toPromise();
    }

    /**
     * Get properties of the matching user group.
     * @param param the request object
     */
    public getGroupProperties(param: GroupApiGetGroupPropertiesRequest, options?: Configuration): Promise<Properties> {
        return this.api.getGroupProperties(param.groupLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a property of the matching user group.
     * @param param the request object
     */
    public getGroupProperty(param: GroupApiGetGroupPropertyRequest, options?: Configuration): Promise<string> {
        return this.api.getGroupProperty(param.groupLocator, param.name,  options).toPromise();
    }

    /**
     * Get a role with the specific scope of the matching user group.
     * @param param the request object
     */
    public getGroupRoleAtScope(param: GroupApiGetGroupRoleAtScopeRequest, options?: Configuration): Promise<Role> {
        return this.api.getGroupRoleAtScope(param.groupLocator, param.roleId, param.scope,  options).toPromise();
    }

    /**
     * Get all roles of the matching user group.
     * @param param the request object
     */
    public getGroupRoles(param: GroupApiGetGroupRolesRequest, options?: Configuration): Promise<Roles> {
        return this.api.getGroupRoles(param.groupLocator,  options).toPromise();
    }

    /**
     * Get user group matching the locator.
     * @param param the request object
     */
    public getUserGroupOfGroup(param: GroupApiGetUserGroupOfGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.getUserGroupOfGroup(param.groupLocator, param.fields,  options).toPromise();
    }

    /**
     * Remove a property of the matching user group.
     * @param param the request object
     */
    public removeGroupProperty(param: GroupApiRemoveGroupPropertyRequest, options?: Configuration): Promise<void> {
        return this.api.removeGroupProperty(param.groupLocator, param.name,  options).toPromise();
    }

    /**
     * Remove a role with the specific scope from the matching user group.
     * @param param the request object
     */
    public removeRoleAtScopeFromGroup(param: GroupApiRemoveRoleAtScopeFromGroupRequest, options?: Configuration): Promise<void> {
        return this.api.removeRoleAtScopeFromGroup(param.groupLocator, param.roleId, param.scope,  options).toPromise();
    }

    /**
     * Update parent groups of the matching user group.
     * @param param the request object
     */
    public setGroupParentGroups(param: GroupApiSetGroupParentGroupsRequest, options?: Configuration): Promise<Groups> {
        return this.api.setGroupParentGroups(param.groupLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a property of the matching user group.
     * @param param the request object
     */
    public setGroupProperty(param: GroupApiSetGroupPropertyRequest, options?: Configuration): Promise<string> {
        return this.api.setGroupProperty(param.groupLocator, param.name, param.body,  options).toPromise();
    }

    /**
     * Update roles of the matching user group.
     * @param param the request object
     */
    public setGroupRoles(param: GroupApiSetGroupRolesRequest, options?: Configuration): Promise<Roles> {
        return this.api.setGroupRoles(param.groupLocator, param.body,  options).toPromise();
    }

}

import { ObservableInvestigationApi } from "./ObservableAPI.ts";
import { InvestigationApiRequestFactory, InvestigationApiResponseProcessor} from "../apis/InvestigationApi.ts";

export interface InvestigationApiAddInvestigationRequest {
    /**
     * 
     * @type string
     * @memberof InvestigationApiaddInvestigation
     */
    fields?: string
    /**
     * 
     * @type Investigation
     * @memberof InvestigationApiaddInvestigation
     */
    body?: Investigation
}

export interface InvestigationApiAddMultipleInvestigationsRequest {
    /**
     * 
     * @type string
     * @memberof InvestigationApiaddMultipleInvestigations
     */
    fields?: string
    /**
     * 
     * @type Investigations
     * @memberof InvestigationApiaddMultipleInvestigations
     */
    body?: Investigations
}

export interface InvestigationApiDeleteInvestigationRequest {
    /**
     * 
     * @type string
     * @memberof InvestigationApideleteInvestigation
     */
    investigationLocator: string
}

export interface InvestigationApiGetAllInvestigationsRequest {
    /**
     * 
     * @type string
     * @memberof InvestigationApigetAllInvestigations
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof InvestigationApigetAllInvestigations
     */
    fields?: string
}

export interface InvestigationApiGetInvestigationRequest {
    /**
     * 
     * @type string
     * @memberof InvestigationApigetInvestigation
     */
    investigationLocator: string
    /**
     * 
     * @type string
     * @memberof InvestigationApigetInvestigation
     */
    fields?: string
}

export interface InvestigationApiReplaceInvestigationRequest {
    /**
     * 
     * @type string
     * @memberof InvestigationApireplaceInvestigation
     */
    investigationLocator: string
    /**
     * 
     * @type string
     * @memberof InvestigationApireplaceInvestigation
     */
    fields?: string
    /**
     * 
     * @type Investigation
     * @memberof InvestigationApireplaceInvestigation
     */
    body?: Investigation
}

export class ObjectInvestigationApi {
    private api: ObservableInvestigationApi

    public constructor(configuration: Configuration, requestFactory?: InvestigationApiRequestFactory, responseProcessor?: InvestigationApiResponseProcessor) {
        this.api = new ObservableInvestigationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new investigation.
     * @param param the request object
     */
    public addInvestigation(param: InvestigationApiAddInvestigationRequest, options?: Configuration): Promise<Investigation> {
        return this.api.addInvestigation(param.fields, param.body,  options).toPromise();
    }

    /**
     * Create multiple new investigations.
     * @param param the request object
     */
    public addMultipleInvestigations(param: InvestigationApiAddMultipleInvestigationsRequest, options?: Configuration): Promise<Investigations> {
        return this.api.addMultipleInvestigations(param.fields, param.body,  options).toPromise();
    }

    /**
     * Delete investigation matching the locator.
     * @param param the request object
     */
    public deleteInvestigation(param: InvestigationApiDeleteInvestigationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInvestigation(param.investigationLocator,  options).toPromise();
    }

    /**
     * Get all investigations.
     * @param param the request object
     */
    public getAllInvestigations(param: InvestigationApiGetAllInvestigationsRequest, options?: Configuration): Promise<Investigations> {
        return this.api.getAllInvestigations(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get investigation matching the locator.
     * @param param the request object
     */
    public getInvestigation(param: InvestigationApiGetInvestigationRequest, options?: Configuration): Promise<Investigation> {
        return this.api.getInvestigation(param.investigationLocator, param.fields,  options).toPromise();
    }

    /**
     * Update investigation matching the locator.
     * @param param the request object
     */
    public replaceInvestigation(param: InvestigationApiReplaceInvestigationRequest, options?: Configuration): Promise<Investigation> {
        return this.api.replaceInvestigation(param.investigationLocator, param.fields, param.body,  options).toPromise();
    }

}

import { ObservableMuteApi } from "./ObservableAPI.ts";
import { MuteApiRequestFactory, MuteApiResponseProcessor} from "../apis/MuteApi.ts";

export interface MuteApiGetAllMutedTestsRequest {
    /**
     * 
     * @type string
     * @memberof MuteApigetAllMutedTests
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof MuteApigetAllMutedTests
     */
    fields?: string
}

export interface MuteApiGetMutedTestRequest {
    /**
     * 
     * @type string
     * @memberof MuteApigetMutedTest
     */
    muteLocator: string
    /**
     * 
     * @type string
     * @memberof MuteApigetMutedTest
     */
    fields?: string
}

export interface MuteApiMuteMultipleTestsRequest {
    /**
     * 
     * @type string
     * @memberof MuteApimuteMultipleTests
     */
    fields?: string
    /**
     * 
     * @type Mutes
     * @memberof MuteApimuteMultipleTests
     */
    body?: Mutes
}

export interface MuteApiMuteTestRequest {
    /**
     * 
     * @type string
     * @memberof MuteApimuteTest
     */
    fields?: string
    /**
     * 
     * @type Mute
     * @memberof MuteApimuteTest
     */
    body?: Mute
}

export interface MuteApiUnmuteTestRequest {
    /**
     * 
     * @type string
     * @memberof MuteApiunmuteTest
     */
    muteLocator: string
    /**
     * 
     * @type string
     * @memberof MuteApiunmuteTest
     */
    body?: string
}

export class ObjectMuteApi {
    private api: ObservableMuteApi

    public constructor(configuration: Configuration, requestFactory?: MuteApiRequestFactory, responseProcessor?: MuteApiResponseProcessor) {
        this.api = new ObservableMuteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all muted tests.
     * @param param the request object
     */
    public getAllMutedTests(param: MuteApiGetAllMutedTestsRequest, options?: Configuration): Promise<Mutes> {
        return this.api.getAllMutedTests(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get a muted test.
     * @param param the request object
     */
    public getMutedTest(param: MuteApiGetMutedTestRequest, options?: Configuration): Promise<Mute> {
        return this.api.getMutedTest(param.muteLocator, param.fields,  options).toPromise();
    }

    /**
     * Mute multiple tests.
     * @param param the request object
     */
    public muteMultipleTests(param: MuteApiMuteMultipleTestsRequest, options?: Configuration): Promise<Mutes> {
        return this.api.muteMultipleTests(param.fields, param.body,  options).toPromise();
    }

    /**
     * Mute a test.
     * @param param the request object
     */
    public muteTest(param: MuteApiMuteTestRequest, options?: Configuration): Promise<Mute> {
        return this.api.muteTest(param.fields, param.body,  options).toPromise();
    }

    /**
     * Unmute the matching test.
     * @param param the request object
     */
    public unmuteTest(param: MuteApiUnmuteTestRequest, options?: Configuration): Promise<void> {
        return this.api.unmuteTest(param.muteLocator, param.body,  options).toPromise();
    }

}

import { ObservableProblemApi } from "./ObservableAPI.ts";
import { ProblemApiRequestFactory, ProblemApiResponseProcessor} from "../apis/ProblemApi.ts";

export interface ProblemApiGetAllBuildProblemsRequest {
    /**
     * 
     * @type string
     * @memberof ProblemApigetAllBuildProblems
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ProblemApigetAllBuildProblems
     */
    fields?: string
}

export interface ProblemApiGetBuildProblemRequest {
    /**
     * 
     * @type string
     * @memberof ProblemApigetBuildProblem
     */
    problemLocator: string
    /**
     * 
     * @type string
     * @memberof ProblemApigetBuildProblem
     */
    fields?: string
}

export class ObjectProblemApi {
    private api: ObservableProblemApi

    public constructor(configuration: Configuration, requestFactory?: ProblemApiRequestFactory, responseProcessor?: ProblemApiResponseProcessor) {
        this.api = new ObservableProblemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all build problems.
     * @param param the request object
     */
    public getAllBuildProblems(param: ProblemApiGetAllBuildProblemsRequest, options?: Configuration): Promise<Problems> {
        return this.api.getAllBuildProblems(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get a matching build problem.
     * @param param the request object
     */
    public getBuildProblem(param: ProblemApiGetBuildProblemRequest, options?: Configuration): Promise<Problem> {
        return this.api.getBuildProblem(param.problemLocator, param.fields,  options).toPromise();
    }

}

import { ObservableProblemOccurrenceApi } from "./ObservableAPI.ts";
import { ProblemOccurrenceApiRequestFactory, ProblemOccurrenceApiResponseProcessor} from "../apis/ProblemOccurrenceApi.ts";

export interface ProblemOccurrenceApiGetAllBuildProblemOccurrencesRequest {
    /**
     * 
     * @type string
     * @memberof ProblemOccurrenceApigetAllBuildProblemOccurrences
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ProblemOccurrenceApigetAllBuildProblemOccurrences
     */
    fields?: string
}

export interface ProblemOccurrenceApiGetBuildProblemOccurrenceRequest {
    /**
     * 
     * @type string
     * @memberof ProblemOccurrenceApigetBuildProblemOccurrence
     */
    problemLocator: string
    /**
     * 
     * @type string
     * @memberof ProblemOccurrenceApigetBuildProblemOccurrence
     */
    fields?: string
}

export class ObjectProblemOccurrenceApi {
    private api: ObservableProblemOccurrenceApi

    public constructor(configuration: Configuration, requestFactory?: ProblemOccurrenceApiRequestFactory, responseProcessor?: ProblemOccurrenceApiResponseProcessor) {
        this.api = new ObservableProblemOccurrenceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all build problem occurrences.
     * @param param the request object
     */
    public getAllBuildProblemOccurrences(param: ProblemOccurrenceApiGetAllBuildProblemOccurrencesRequest, options?: Configuration): Promise<ProblemOccurrences> {
        return this.api.getAllBuildProblemOccurrences(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get a matching build problem occurrence.
     * @param param the request object
     */
    public getBuildProblemOccurrence(param: ProblemOccurrenceApiGetBuildProblemOccurrenceRequest, options?: Configuration): Promise<ProblemOccurrence> {
        return this.api.getBuildProblemOccurrence(param.problemLocator, param.fields,  options).toPromise();
    }

}

import { ObservableProjectApi } from "./ObservableAPI.ts";
import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi.ts";

export interface ProjectApiAddAgentPoolsProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiaddAgentPoolsProject
     */
    projectLocator: string
    /**
     * 
     * @type AgentPool
     * @memberof ProjectApiaddAgentPoolsProject
     */
    body?: AgentPool
}

export interface ProjectApiAddBuildTypeRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiaddBuildType
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiaddBuildType
     */
    fields?: string
    /**
     * 
     * @type NewBuildTypeDescription
     * @memberof ProjectApiaddBuildType
     */
    body?: NewBuildTypeDescription
}

export interface ProjectApiAddFeatureRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiaddFeature
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiaddFeature
     */
    fields?: string
    /**
     * 
     * @type ProjectFeature
     * @memberof ProjectApiaddFeature
     */
    body?: ProjectFeature
}

export interface ProjectApiAddProjectRequest {
    /**
     * 
     * @type NewProjectDescription
     * @memberof ProjectApiaddProject
     */
    body?: NewProjectDescription
}

export interface ProjectApiAddSecureTokenRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiaddSecureToken
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiaddSecureToken
     */
    body?: string
}

export interface ProjectApiAddTemplateRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiaddTemplate
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiaddTemplate
     */
    fields?: string
    /**
     * 
     * @type NewBuildTypeDescription
     * @memberof ProjectApiaddTemplate
     */
    body?: NewBuildTypeDescription
}

export interface ProjectApiCreateBuildParameterRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApicreateBuildParameter
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApicreateBuildParameter
     */
    fields?: string
    /**
     * 
     * @type Property
     * @memberof ProjectApicreateBuildParameter
     */
    body?: Property
}

export interface ProjectApiDeleteBuildParameterRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApideleteBuildParameter
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApideleteBuildParameter
     */
    projectLocator: string
}

export interface ProjectApiDeleteBuildParametersRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApideleteBuildParameters
     */
    projectLocator: string
}

export interface ProjectApiDeleteFeatureRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApideleteFeature
     */
    featureLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApideleteFeature
     */
    projectLocator: string
}

export interface ProjectApiDeleteProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApideleteProject
     */
    projectLocator: string
}

export interface ProjectApiGetAgentPoolsProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetAgentPoolsProject
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetAgentPoolsProject
     */
    fields?: string
}

export interface ProjectApiGetAllBranchesRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetAllBranches
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetAllBranches
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetAllBranches
     */
    fields?: string
}

export interface ProjectApiGetAllProjectsRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetAllProjects
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetAllProjects
     */
    fields?: string
}

export interface ProjectApiGetAllSubprojectsOrderedRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetAllSubprojectsOrdered
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetAllSubprojectsOrdered
     */
    field?: string
}

export interface ProjectApiGetBuildParameterRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameter
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameter
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameter
     */
    fields?: string
}

export interface ProjectApiGetBuildParameterSpecificationRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameterSpecification
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameterSpecification
     */
    projectLocator: string
}

export interface ProjectApiGetBuildParameterTypeRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameterType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameterType
     */
    projectLocator: string
}

export interface ProjectApiGetBuildParameterValueRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameterValue
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameterValue
     */
    projectLocator: string
}

export interface ProjectApiGetBuildParametersRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameters
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameters
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetBuildParameters
     */
    fields?: string
}

export interface ProjectApiGetDefaultTemplateRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetDefaultTemplate
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetDefaultTemplate
     */
    fields?: string
}

export interface ProjectApiGetFeatureRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetFeature
     */
    featureLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetFeature
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetFeature
     */
    fields?: string
}

export interface ProjectApiGetFeaturesRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetFeatures
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetFeatures
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetFeatures
     */
    fields?: string
}

export interface ProjectApiGetProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetProject
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetProject
     */
    fields?: string
}

export interface ProjectApiGetProjectFieldRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetProjectField
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetProjectField
     */
    field: string
}

export interface ProjectApiGetProjectParentProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetProjectParentProject
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetProjectParentProject
     */
    fields?: string
}

export interface ProjectApiGetProjectSettingsFileRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetProjectSettingsFile
     */
    projectLocator: string
}

export interface ProjectApiGetProjectTemplatesRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetProjectTemplates
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetProjectTemplates
     */
    fields?: string
}

export interface ProjectApiGetSecureValueRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApigetSecureValue
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApigetSecureValue
     */
    token: string
}

export interface ProjectApiRemoveDefaultTemplateRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiremoveDefaultTemplate
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiremoveDefaultTemplate
     */
    fields?: string
}

export interface ProjectApiRemoveProjectFromAgentPoolRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiremoveProjectFromAgentPool
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiremoveProjectFromAgentPool
     */
    agentPoolLocator: string
}

export interface ProjectApiSetAgentPoolsProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApisetAgentPoolsProject
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApisetAgentPoolsProject
     */
    fields?: string
    /**
     * 
     * @type AgentPools
     * @memberof ProjectApisetAgentPoolsProject
     */
    body?: AgentPools
}

export interface ProjectApiSetBuildTypesOrderRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApisetBuildTypesOrder
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApisetBuildTypesOrder
     */
    field?: string
    /**
     * 
     * @type BuildTypes
     * @memberof ProjectApisetBuildTypesOrder
     */
    body?: BuildTypes
}

export interface ProjectApiSetDefaultTemplateRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApisetDefaultTemplate
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApisetDefaultTemplate
     */
    fields?: string
    /**
     * 
     * @type BuildType
     * @memberof ProjectApisetDefaultTemplate
     */
    body?: BuildType
}

export interface ProjectApiSetParentProjectRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApisetParentProject
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApisetParentProject
     */
    fields?: string
    /**
     * 
     * @type Project
     * @memberof ProjectApisetParentProject
     */
    body?: Project
}

export interface ProjectApiSetProjectFieldRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApisetProjectField
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApisetProjectField
     */
    field: string
    /**
     * 
     * @type string
     * @memberof ProjectApisetProjectField
     */
    body?: string
}

export interface ProjectApiSetSubprojectsOrderRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApisetSubprojectsOrder
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApisetSubprojectsOrder
     */
    field?: string
    /**
     * 
     * @type Projects
     * @memberof ProjectApisetSubprojectsOrder
     */
    body?: Projects
}

export interface ProjectApiUpdateBuildParameterRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameter
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameter
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameter
     */
    fields?: string
    /**
     * 
     * @type Property
     * @memberof ProjectApiupdateBuildParameter
     */
    body?: Property
}

export interface ProjectApiUpdateBuildParameterSpecificationRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameterSpecification
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameterSpecification
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameterSpecification
     */
    body?: string
}

export interface ProjectApiUpdateBuildParameterTypeRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameterType
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameterType
     */
    projectLocator: string
    /**
     * 
     * @type Type
     * @memberof ProjectApiupdateBuildParameterType
     */
    body?: Type
}

export interface ProjectApiUpdateBuildParameterValueRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameterValue
     */
    name: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameterValue
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameterValue
     */
    body?: string
}

export interface ProjectApiUpdateBuildParametersRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameters
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateBuildParameters
     */
    fields?: string
    /**
     * 
     * @type Properties
     * @memberof ProjectApiupdateBuildParameters
     */
    body?: Properties
}

export interface ProjectApiUpdateFeatureRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateFeature
     */
    featureLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateFeature
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateFeature
     */
    fields?: string
    /**
     * 
     * @type ProjectFeature
     * @memberof ProjectApiupdateFeature
     */
    body?: ProjectFeature
}

export interface ProjectApiUpdateFeaturesRequest {
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateFeatures
     */
    projectLocator: string
    /**
     * 
     * @type string
     * @memberof ProjectApiupdateFeatures
     */
    fields?: string
    /**
     * 
     * @type ProjectFeatures
     * @memberof ProjectApiupdateFeatures
     */
    body?: ProjectFeatures
}

export class ObjectProjectApi {
    private api: ObservableProjectApi

    public constructor(configuration: Configuration, requestFactory?: ProjectApiRequestFactory, responseProcessor?: ProjectApiResponseProcessor) {
        this.api = new ObservableProjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Assign the matching project to the agent pool.
     * @param param the request object
     */
    public addAgentPoolsProject(param: ProjectApiAddAgentPoolsProjectRequest, options?: Configuration): Promise<AgentPool> {
        return this.api.addAgentPoolsProject(param.projectLocator, param.body,  options).toPromise();
    }

    /**
     * Add a build configuration to the matching project.
     * @param param the request object
     */
    public addBuildType(param: ProjectApiAddBuildTypeRequest, options?: Configuration): Promise<BuildType> {
        return this.api.addBuildType(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Add a feature.
     * @param param the request object
     */
    public addFeature(param: ProjectApiAddFeatureRequest, options?: Configuration): Promise<any> {
        return this.api.addFeature(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Create a new project.
     * @param param the request object
     */
    public addProject(param: ProjectApiAddProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.addProject(param.body,  options).toPromise();
    }

    /**
     * Create a new secure token for the matching project.
     * @param param the request object
     */
    public addSecureToken(param: ProjectApiAddSecureTokenRequest, options?: Configuration): Promise<string> {
        return this.api.addSecureToken(param.projectLocator, param.body,  options).toPromise();
    }

    /**
     * Add a build configuration template to the matching project.
     * @param param the request object
     */
    public addTemplate(param: ProjectApiAddTemplateRequest, options?: Configuration): Promise<BuildType> {
        return this.api.addTemplate(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Create a build parameter.
     * @param param the request object
     */
    public createBuildParameter(param: ProjectApiCreateBuildParameterRequest, options?: Configuration): Promise<Property> {
        return this.api.createBuildParameter(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Delete build parameter.
     * @param param the request object
     */
    public deleteBuildParameter(param: ProjectApiDeleteBuildParameterRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBuildParameter(param.name, param.projectLocator,  options).toPromise();
    }

    /**
     * Delete all build parameters.
     * @param param the request object
     */
    public deleteBuildParameters(param: ProjectApiDeleteBuildParametersRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBuildParameters(param.projectLocator,  options).toPromise();
    }

    /**
     * Delete a matching feature.
     * @param param the request object
     */
    public deleteFeature(param: ProjectApiDeleteFeatureRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFeature(param.featureLocator, param.projectLocator,  options).toPromise();
    }

    /**
     * Delete project matching the locator.
     * @param param the request object
     */
    public deleteProject(param: ProjectApiDeleteProjectRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProject(param.projectLocator,  options).toPromise();
    }

    /**
     * Get agent pools appointed to the matching project.
     * @param param the request object
     */
    public getAgentPoolsProject(param: ProjectApiGetAgentPoolsProjectRequest, options?: Configuration): Promise<AgentPools> {
        return this.api.getAgentPoolsProject(param.projectLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all branches of the matching project.
     * @param param the request object
     */
    public getAllBranches(param: ProjectApiGetAllBranchesRequest, options?: Configuration): Promise<Branches> {
        return this.api.getAllBranches(param.projectLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get all projects.
     * @param param the request object
     */
    public getAllProjects(param: ProjectApiGetAllProjectsRequest, options?: Configuration): Promise<Projects> {
        return this.api.getAllProjects(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get all subprojects ordered of the matching project.
     * @param param the request object
     */
    public getAllSubprojectsOrdered(param: ProjectApiGetAllSubprojectsOrderedRequest, options?: Configuration): Promise<Projects> {
        return this.api.getAllSubprojectsOrdered(param.projectLocator, param.field,  options).toPromise();
    }

    /**
     * Get build parameter.
     * @param param the request object
     */
    public getBuildParameter(param: ProjectApiGetBuildParameterRequest, options?: Configuration): Promise<Property> {
        return this.api.getBuildParameter(param.name, param.projectLocator, param.fields,  options).toPromise();
    }

    /**
     * Get build parameter specification.
     * @param param the request object
     */
    public getBuildParameterSpecification(param: ProjectApiGetBuildParameterSpecificationRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildParameterSpecification(param.name, param.projectLocator,  options).toPromise();
    }

    /**
     * Get type of build parameter.
     * @param param the request object
     */
    public getBuildParameterType(param: ProjectApiGetBuildParameterTypeRequest, options?: Configuration): Promise<Type> {
        return this.api.getBuildParameterType(param.name, param.projectLocator,  options).toPromise();
    }

    /**
     * Get value of build parameter.
     * @param param the request object
     */
    public getBuildParameterValue(param: ProjectApiGetBuildParameterValueRequest, options?: Configuration): Promise<string> {
        return this.api.getBuildParameterValue(param.name, param.projectLocator,  options).toPromise();
    }

    /**
     * Get build parameters.
     * @param param the request object
     */
    public getBuildParameters(param: ProjectApiGetBuildParametersRequest, options?: Configuration): Promise<Properties> {
        return this.api.getBuildParameters(param.projectLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get the default template of the matching project.
     * @param param the request object
     */
    public getDefaultTemplate(param: ProjectApiGetDefaultTemplateRequest, options?: Configuration): Promise<BuildType> {
        return this.api.getDefaultTemplate(param.projectLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a matching feature.
     * @param param the request object
     */
    public getFeature(param: ProjectApiGetFeatureRequest, options?: Configuration): Promise<any> {
        return this.api.getFeature(param.featureLocator, param.projectLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all features.
     * @param param the request object
     */
    public getFeatures(param: ProjectApiGetFeaturesRequest, options?: Configuration): Promise<any> {
        return this.api.getFeatures(param.projectLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get project matching the locator.
     * @param param the request object
     */
    public getProject(param: ProjectApiGetProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.getProject(param.projectLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a field of the matching project.
     * @param param the request object
     */
    public getProjectField(param: ProjectApiGetProjectFieldRequest, options?: Configuration): Promise<string> {
        return this.api.getProjectField(param.projectLocator, param.field,  options).toPromise();
    }

    /**
     * Get the parent project of the matching project.
     * @param param the request object
     */
    public getProjectParentProject(param: ProjectApiGetProjectParentProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.getProjectParentProject(param.projectLocator, param.fields,  options).toPromise();
    }

    /**
     * Get the settings file of the matching build configuration.
     * @param param the request object
     */
    public getProjectSettingsFile(param: ProjectApiGetProjectSettingsFileRequest, options?: Configuration): Promise<string> {
        return this.api.getProjectSettingsFile(param.projectLocator,  options).toPromise();
    }

    /**
     * Get all templates of the matching project.
     * @param param the request object
     */
    public getProjectTemplates(param: ProjectApiGetProjectTemplatesRequest, options?: Configuration): Promise<BuildTypes> {
        return this.api.getProjectTemplates(param.projectLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a secure token of the matching project.
     * @param param the request object
     */
    public getSecureValue(param: ProjectApiGetSecureValueRequest, options?: Configuration): Promise<string> {
        return this.api.getSecureValue(param.projectLocator, param.token,  options).toPromise();
    }

    /**
     * Remove the default template from the matching project.
     * @param param the request object
     */
    public removeDefaultTemplate(param: ProjectApiRemoveDefaultTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.removeDefaultTemplate(param.projectLocator, param.fields,  options).toPromise();
    }

    /**
     * Unassign a project from the matching agent pool.
     * @param param the request object
     */
    public removeProjectFromAgentPool(param: ProjectApiRemoveProjectFromAgentPoolRequest, options?: Configuration): Promise<void> {
        return this.api.removeProjectFromAgentPool(param.projectLocator, param.agentPoolLocator,  options).toPromise();
    }

    /**
     * Update agent pools apppointed to the matching project.
     * @param param the request object
     */
    public setAgentPoolsProject(param: ProjectApiSetAgentPoolsProjectRequest, options?: Configuration): Promise<AgentPools> {
        return this.api.setAgentPoolsProject(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all build configurations order of the matching project.
     * @param param the request object
     */
    public setBuildTypesOrder(param: ProjectApiSetBuildTypesOrderRequest, options?: Configuration): Promise<BuildTypes> {
        return this.api.setBuildTypesOrder(param.projectLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Update the default template of the matching project.
     * @param param the request object
     */
    public setDefaultTemplate(param: ProjectApiSetDefaultTemplateRequest, options?: Configuration): Promise<BuildType> {
        return this.api.setDefaultTemplate(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update the parent project of the matching project.
     * @param param the request object
     */
    public setParentProject(param: ProjectApiSetParentProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.setParentProject(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a field of the matching project.
     * @param param the request object
     */
    public setProjectField(param: ProjectApiSetProjectFieldRequest, options?: Configuration): Promise<string> {
        return this.api.setProjectField(param.projectLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Update all subprojects order of the matching project.
     * @param param the request object
     */
    public setSubprojectsOrder(param: ProjectApiSetSubprojectsOrderRequest, options?: Configuration): Promise<Projects> {
        return this.api.setSubprojectsOrder(param.projectLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Update build parameter.
     * @param param the request object
     */
    public updateBuildParameter(param: ProjectApiUpdateBuildParameterRequest, options?: Configuration): Promise<Property> {
        return this.api.updateBuildParameter(param.name, param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update build parameter specification.
     * @param param the request object
     */
    public updateBuildParameterSpecification(param: ProjectApiUpdateBuildParameterSpecificationRequest, options?: Configuration): Promise<string> {
        return this.api.updateBuildParameterSpecification(param.name, param.projectLocator, param.body,  options).toPromise();
    }

    /**
     * Update type of build parameter.
     * @param param the request object
     */
    public updateBuildParameterType(param: ProjectApiUpdateBuildParameterTypeRequest, options?: Configuration): Promise<Type> {
        return this.api.updateBuildParameterType(param.name, param.projectLocator, param.body,  options).toPromise();
    }

    /**
     * Update value of build parameter.
     * @param param the request object
     */
    public updateBuildParameterValue(param: ProjectApiUpdateBuildParameterValueRequest, options?: Configuration): Promise<string> {
        return this.api.updateBuildParameterValue(param.name, param.projectLocator, param.body,  options).toPromise();
    }

    /**
     * Update build parameters.
     * @param param the request object
     */
    public updateBuildParameters(param: ProjectApiUpdateBuildParametersRequest, options?: Configuration): Promise<Properties> {
        return this.api.updateBuildParameters(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a matching feature.
     * @param param the request object
     */
    public updateFeature(param: ProjectApiUpdateFeatureRequest, options?: Configuration): Promise<any> {
        return this.api.updateFeature(param.featureLocator, param.projectLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update all features.
     * @param param the request object
     */
    public updateFeatures(param: ProjectApiUpdateFeaturesRequest, options?: Configuration): Promise<any> {
        return this.api.updateFeatures(param.projectLocator, param.fields, param.body,  options).toPromise();
    }

}

import { ObservableRootApi } from "./ObservableAPI.ts";
import { RootApiRequestFactory, RootApiResponseProcessor} from "../apis/RootApi.ts";

export interface RootApiGetApiVersionRequest {
}

export interface RootApiGetPluginInfoRequest {
    /**
     * 
     * @type string
     * @memberof RootApigetPluginInfo
     */
    fields?: string
}

export interface RootApiGetRootEndpointsOfRootRequest {
}

export interface RootApiGetVersionRequest {
}

export class ObjectRootApi {
    private api: ObservableRootApi

    public constructor(configuration: Configuration, requestFactory?: RootApiRequestFactory, responseProcessor?: RootApiResponseProcessor) {
        this.api = new ObservableRootApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the API version.
     * @param param the request object
     */
    public getApiVersion(param: RootApiGetApiVersionRequest, options?: Configuration): Promise<string> {
        return this.api.getApiVersion( options).toPromise();
    }

    /**
     * Get the plugin info.
     * @param param the request object
     */
    public getPluginInfo(param: RootApiGetPluginInfoRequest, options?: Configuration): Promise<Plugin> {
        return this.api.getPluginInfo(param.fields,  options).toPromise();
    }

    /**
     * Get root endpoints.
     * @param param the request object
     */
    public getRootEndpointsOfRoot(param: RootApiGetRootEndpointsOfRootRequest, options?: Configuration): Promise<string> {
        return this.api.getRootEndpointsOfRoot( options).toPromise();
    }

    /**
     * Get the TeamCity server version.
     * @param param the request object
     */
    public getVersion(param: RootApiGetVersionRequest, options?: Configuration): Promise<string> {
        return this.api.getVersion( options).toPromise();
    }

}

import { ObservableServerApi } from "./ObservableAPI.ts";
import { ServerApiRequestFactory, ServerApiResponseProcessor} from "../apis/ServerApi.ts";

export interface ServerApiAddLicenseKeysRequest {
    /**
     * 
     * @type string
     * @memberof ServerApiaddLicenseKeys
     */
    fields?: string
    /**
     * 
     * @type string
     * @memberof ServerApiaddLicenseKeys
     */
    body?: string
}

export interface ServerApiDeleteLicenseKeyRequest {
    /**
     * 
     * @type string
     * @memberof ServerApideleteLicenseKey
     */
    licenseKey: string
}

export interface ServerApiDownloadFileOfServerRequest {
    /**
     * 
     * @type string
     * @memberof ServerApidownloadFileOfServer
     */
    path: string
    /**
     * 
     * @type string
     * @memberof ServerApidownloadFileOfServer
     */
    areaId: string
}

export interface ServerApiGetAllMetricsRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetAllMetrics
     */
    fields?: string
}

export interface ServerApiGetAllPluginsRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetAllPlugins
     */
    fields?: string
}

export interface ServerApiGetBackupStatusRequest {
}

export interface ServerApiGetFileMetadataOfServerRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetFileMetadataOfServer
     */
    path: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFileMetadataOfServer
     */
    areaId: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFileMetadataOfServer
     */
    fields?: string
}

export interface ServerApiGetFilesListForSubpathOfServerRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListForSubpathOfServer
     */
    path: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListForSubpathOfServer
     */
    areaId: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListForSubpathOfServer
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListForSubpathOfServer
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListForSubpathOfServer
     */
    fields?: string
}

export interface ServerApiGetFilesListOfServerRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListOfServer
     */
    areaId: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListOfServer
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListOfServer
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ServerApigetFilesListOfServer
     */
    fields?: string
}

export interface ServerApiGetLicenseKeyRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetLicenseKey
     */
    licenseKey: string
    /**
     * 
     * @type string
     * @memberof ServerApigetLicenseKey
     */
    fields?: string
}

export interface ServerApiGetLicenseKeysRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetLicenseKeys
     */
    fields?: string
}

export interface ServerApiGetLicensingDataRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetLicensingData
     */
    fields?: string
}

export interface ServerApiGetServerFieldRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetServerField
     */
    field: string
}

export interface ServerApiGetServerInfoRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetServerInfo
     */
    fields?: string
}

export interface ServerApiGetZippedFileOfServerRequest {
    /**
     * 
     * @type string
     * @memberof ServerApigetZippedFileOfServer
     */
    path: string
    /**
     * 
     * @type string
     * @memberof ServerApigetZippedFileOfServer
     */
    areaId: string
    /**
     * 
     * @type string
     * @memberof ServerApigetZippedFileOfServer
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof ServerApigetZippedFileOfServer
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof ServerApigetZippedFileOfServer
     */
    name?: string
}

export interface ServerApiStartBackupRequest {
    /**
     * 
     * @type string
     * @memberof ServerApistartBackup
     */
    fileName?: string
    /**
     * 
     * @type boolean
     * @memberof ServerApistartBackup
     */
    addTimestamp?: boolean
    /**
     * 
     * @type boolean
     * @memberof ServerApistartBackup
     */
    includeConfigs?: boolean
    /**
     * 
     * @type boolean
     * @memberof ServerApistartBackup
     */
    includeDatabase?: boolean
    /**
     * 
     * @type boolean
     * @memberof ServerApistartBackup
     */
    includeBuildLogs?: boolean
    /**
     * 
     * @type boolean
     * @memberof ServerApistartBackup
     */
    includePersonalChanges?: boolean
    /**
     * 
     * @type boolean
     * @memberof ServerApistartBackup
     */
    includeRunningBuilds?: boolean
    /**
     * 
     * @type boolean
     * @memberof ServerApistartBackup
     */
    includeSupplimentaryData?: boolean
}

export class ObjectServerApi {
    private api: ObservableServerApi

    public constructor(configuration: Configuration, requestFactory?: ServerApiRequestFactory, responseProcessor?: ServerApiResponseProcessor) {
        this.api = new ObservableServerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add license keys.
     * @param param the request object
     */
    public addLicenseKeys(param: ServerApiAddLicenseKeysRequest, options?: Configuration): Promise<LicenseKeys> {
        return this.api.addLicenseKeys(param.fields, param.body,  options).toPromise();
    }

    /**
     * Delete a license key.
     * @param param the request object
     */
    public deleteLicenseKey(param: ServerApiDeleteLicenseKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLicenseKey(param.licenseKey,  options).toPromise();
    }

    /**
     * Download specific file.
     * @param param the request object
     */
    public downloadFileOfServer(param: ServerApiDownloadFileOfServerRequest, options?: Configuration): Promise<void> {
        return this.api.downloadFileOfServer(param.path, param.areaId,  options).toPromise();
    }

    /**
     * Get metrics.
     * @param param the request object
     */
    public getAllMetrics(param: ServerApiGetAllMetricsRequest, options?: Configuration): Promise<Metrics> {
        return this.api.getAllMetrics(param.fields,  options).toPromise();
    }

    /**
     * Get all plugins.
     * @param param the request object
     */
    public getAllPlugins(param: ServerApiGetAllPluginsRequest, options?: Configuration): Promise<Plugins> {
        return this.api.getAllPlugins(param.fields,  options).toPromise();
    }

    /**
     * Get the latest backup status.
     * @param param the request object
     */
    public getBackupStatus(param: ServerApiGetBackupStatusRequest, options?: Configuration): Promise<string> {
        return this.api.getBackupStatus( options).toPromise();
    }

    /**
     * Get metadata of specific file.
     * @param param the request object
     */
    public getFileMetadataOfServer(param: ServerApiGetFileMetadataOfServerRequest, options?: Configuration): Promise<any> {
        return this.api.getFileMetadataOfServer(param.path, param.areaId, param.fields,  options).toPromise();
    }

    /**
     * List files under this path.
     * @param param the request object
     */
    public getFilesListForSubpathOfServer(param: ServerApiGetFilesListForSubpathOfServerRequest, options?: Configuration): Promise<Files> {
        return this.api.getFilesListForSubpathOfServer(param.path, param.areaId, param.basePath, param.locator, param.fields,  options).toPromise();
    }

    /**
     * List all files.
     * @param param the request object
     */
    public getFilesListOfServer(param: ServerApiGetFilesListOfServerRequest, options?: Configuration): Promise<Files> {
        return this.api.getFilesListOfServer(param.areaId, param.basePath, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get a license key.
     * @param param the request object
     */
    public getLicenseKey(param: ServerApiGetLicenseKeyRequest, options?: Configuration): Promise<LicenseKey> {
        return this.api.getLicenseKey(param.licenseKey, param.fields,  options).toPromise();
    }

    /**
     * Get all license keys.
     * @param param the request object
     */
    public getLicenseKeys(param: ServerApiGetLicenseKeysRequest, options?: Configuration): Promise<LicenseKeys> {
        return this.api.getLicenseKeys(param.fields,  options).toPromise();
    }

    /**
     * Get the licensing data.
     * @param param the request object
     */
    public getLicensingData(param: ServerApiGetLicensingDataRequest, options?: Configuration): Promise<LicensingData> {
        return this.api.getLicensingData(param.fields,  options).toPromise();
    }

    /**
     * Get a field of the server info.
     * @param param the request object
     */
    public getServerField(param: ServerApiGetServerFieldRequest, options?: Configuration): Promise<string> {
        return this.api.getServerField(param.field,  options).toPromise();
    }

    /**
     * Get the server info.
     * @param param the request object
     */
    public getServerInfo(param: ServerApiGetServerInfoRequest, options?: Configuration): Promise<Server> {
        return this.api.getServerInfo(param.fields,  options).toPromise();
    }

    /**
     * Get specific file zipped.
     * @param param the request object
     */
    public getZippedFileOfServer(param: ServerApiGetZippedFileOfServerRequest, options?: Configuration): Promise<void> {
        return this.api.getZippedFileOfServer(param.path, param.areaId, param.basePath, param.locator, param.name,  options).toPromise();
    }

    /**
     * Start a new backup.
     * @param param the request object
     */
    public startBackup(param: ServerApiStartBackupRequest, options?: Configuration): Promise<string> {
        return this.api.startBackup(param.fileName, param.addTimestamp, param.includeConfigs, param.includeDatabase, param.includeBuildLogs, param.includePersonalChanges, param.includeRunningBuilds, param.includeSupplimentaryData,  options).toPromise();
    }

}

import { ObservableTestApi } from "./ObservableAPI.ts";
import { TestApiRequestFactory, TestApiResponseProcessor} from "../apis/TestApi.ts";

export interface TestApiGetTestRequest {
    /**
     * 
     * @type string
     * @memberof TestApigetTest
     */
    testLocator: string
    /**
     * 
     * @type string
     * @memberof TestApigetTest
     */
    fields?: string
}

export interface TestApiGetTestsRequest {
    /**
     * 
     * @type string
     * @memberof TestApigetTests
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof TestApigetTests
     */
    fields?: string
}

export class ObjectTestApi {
    private api: ObservableTestApi

    public constructor(configuration: Configuration, requestFactory?: TestApiRequestFactory, responseProcessor?: TestApiResponseProcessor) {
        this.api = new ObservableTestApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a matching test.
     * @param param the request object
     */
    public getTest(param: TestApiGetTestRequest, options?: Configuration): Promise<Test> {
        return this.api.getTest(param.testLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all tests.
     * @param param the request object
     */
    public getTests(param: TestApiGetTestsRequest, options?: Configuration): Promise<Tests> {
        return this.api.getTests(param.locator, param.fields,  options).toPromise();
    }

}

import { ObservableTestOccurrenceApi } from "./ObservableAPI.ts";
import { TestOccurrenceApiRequestFactory, TestOccurrenceApiResponseProcessor} from "../apis/TestOccurrenceApi.ts";

export interface TestOccurrenceApiGetAllTestOccurrencesRequest {
    /**
     * 
     * @type string
     * @memberof TestOccurrenceApigetAllTestOccurrences
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof TestOccurrenceApigetAllTestOccurrences
     */
    fields?: string
}

export interface TestOccurrenceApiGetTestOccurrenceRequest {
    /**
     * 
     * @type string
     * @memberof TestOccurrenceApigetTestOccurrence
     */
    testLocator: string
    /**
     * 
     * @type string
     * @memberof TestOccurrenceApigetTestOccurrence
     */
    fields?: string
}

export class ObjectTestOccurrenceApi {
    private api: ObservableTestOccurrenceApi

    public constructor(configuration: Configuration, requestFactory?: TestOccurrenceApiRequestFactory, responseProcessor?: TestOccurrenceApiResponseProcessor) {
        this.api = new ObservableTestOccurrenceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all test occurrences.
     * @param param the request object
     */
    public getAllTestOccurrences(param: TestOccurrenceApiGetAllTestOccurrencesRequest, options?: Configuration): Promise<TestOccurrences> {
        return this.api.getAllTestOccurrences(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get a matching test occurrence.
     * @param param the request object
     */
    public getTestOccurrence(param: TestOccurrenceApiGetTestOccurrenceRequest, options?: Configuration): Promise<TestOccurrence> {
        return this.api.getTestOccurrence(param.testLocator, param.fields,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI.ts";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi.ts";

export interface UserApiAddRoleToUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApiaddRoleToUser
     */
    userLocator: string
    /**
     * 
     * @type Role
     * @memberof UserApiaddRoleToUser
     */
    body?: Role
}

export interface UserApiAddRoleToUserAtScopeRequest {
    /**
     * 
     * @type string
     * @memberof UserApiaddRoleToUserAtScope
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApiaddRoleToUserAtScope
     */
    roleId: string
    /**
     * 
     * @type string
     * @memberof UserApiaddRoleToUserAtScope
     */
    scope: string
}

export interface UserApiAddUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApiaddUser
     */
    fields?: string
    /**
     * 
     * @type User
     * @memberof UserApiaddUser
     */
    body?: User
}

export interface UserApiAddUserTokenRequest {
    /**
     * 
     * @type string
     * @memberof UserApiaddUserToken
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApiaddUserToken
     */
    fields?: string
    /**
     * 
     * @type Token
     * @memberof UserApiaddUserToken
     */
    body?: Token
}

export interface UserApiDeleteUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApideleteUser
     */
    userLocator: string
}

export interface UserApiDeleteUserFieldRequest {
    /**
     * 
     * @type string
     * @memberof UserApideleteUserField
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApideleteUserField
     */
    field: string
}

export interface UserApiDeleteUserTokenRequest {
    /**
     * 
     * @type string
     * @memberof UserApideleteUserToken
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApideleteUserToken
     */
    name: string
}

export interface UserApiGerUserFieldRequest {
    /**
     * 
     * @type string
     * @memberof UserApigerUserField
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigerUserField
     */
    field: string
}

export interface UserApiGetAllUserGroupsRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetAllUserGroups
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetAllUserGroups
     */
    fields?: string
}

export interface UserApiGetAllUserRolesRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetAllUserRoles
     */
    userLocator: string
}

export interface UserApiGetAllUsersRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetAllUsers
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof UserApigetAllUsers
     */
    fields?: string
}

export interface UserApiGetUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUser
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetUser
     */
    fields?: string
}

export interface UserApiGetUserGroupRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUserGroup
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserGroup
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserGroup
     */
    fields?: string
}

export interface UserApiGetUserPermissionsRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUserPermissions
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserPermissions
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserPermissions
     */
    fields?: string
}

export interface UserApiGetUserPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUserProperties
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserProperties
     */
    fields?: string
}

export interface UserApiGetUserPropertyRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUserProperty
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserProperty
     */
    name: string
}

export interface UserApiGetUserRolesAtScopeRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUserRolesAtScope
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserRolesAtScope
     */
    roleId: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserRolesAtScope
     */
    scope: string
}

export interface UserApiGetUserTokensRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetUserTokens
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApigetUserTokens
     */
    fields?: string
}

export interface UserApiRemoveUserFromGroupRequest {
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserFromGroup
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserFromGroup
     */
    groupLocator: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserFromGroup
     */
    fields?: string
}

export interface UserApiRemoveUserPropertyRequest {
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserProperty
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserProperty
     */
    name: string
}

export interface UserApiRemoveUserRememberMeRequest {
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserRememberMe
     */
    userLocator: string
}

export interface UserApiRemoveUserRoleAtScopeRequest {
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserRoleAtScope
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserRoleAtScope
     */
    roleId: string
    /**
     * 
     * @type string
     * @memberof UserApiremoveUserRoleAtScope
     */
    scope: string
}

export interface UserApiReplaceUserRequest {
    /**
     * 
     * @type string
     * @memberof UserApireplaceUser
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApireplaceUser
     */
    fields?: string
    /**
     * 
     * @type User
     * @memberof UserApireplaceUser
     */
    body?: User
}

export interface UserApiSetUserFieldRequest {
    /**
     * 
     * @type string
     * @memberof UserApisetUserField
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApisetUserField
     */
    field: string
    /**
     * 
     * @type string
     * @memberof UserApisetUserField
     */
    body?: string
}

export interface UserApiSetUserGroupsRequest {
    /**
     * 
     * @type string
     * @memberof UserApisetUserGroups
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApisetUserGroups
     */
    fields?: string
    /**
     * 
     * @type Groups
     * @memberof UserApisetUserGroups
     */
    body?: Groups
}

export interface UserApiSetUserPropertyRequest {
    /**
     * 
     * @type string
     * @memberof UserApisetUserProperty
     */
    userLocator: string
    /**
     * 
     * @type string
     * @memberof UserApisetUserProperty
     */
    name: string
    /**
     * 
     * @type string
     * @memberof UserApisetUserProperty
     */
    body?: string
}

export interface UserApiSetUserRolesRequest {
    /**
     * 
     * @type string
     * @memberof UserApisetUserRoles
     */
    userLocator: string
    /**
     * 
     * @type Roles
     * @memberof UserApisetUserRoles
     */
    body?: Roles
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a role to the matching user.
     * @param param the request object
     */
    public addRoleToUser(param: UserApiAddRoleToUserRequest, options?: Configuration): Promise<Role> {
        return this.api.addRoleToUser(param.userLocator, param.body,  options).toPromise();
    }

    /**
     * Add a role with the specific scope to the matching user.
     * @param param the request object
     */
    public addRoleToUserAtScope(param: UserApiAddRoleToUserAtScopeRequest, options?: Configuration): Promise<Role> {
        return this.api.addRoleToUserAtScope(param.userLocator, param.roleId, param.scope,  options).toPromise();
    }

    /**
     * Create a new user.
     * @param param the request object
     */
    public addUser(param: UserApiAddUserRequest, options?: Configuration): Promise<User> {
        return this.api.addUser(param.fields, param.body,  options).toPromise();
    }

    /**
     * Create a new authentication token for the matching user.
     * @param param the request object
     */
    public addUserToken(param: UserApiAddUserTokenRequest, options?: Configuration): Promise<Token> {
        return this.api.addUserToken(param.userLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Delete user matching the locator.
     * @param param the request object
     */
    public deleteUser(param: UserApiDeleteUserRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUser(param.userLocator,  options).toPromise();
    }

    /**
     * Remove a property of the matching user.
     * @param param the request object
     */
    public deleteUserField(param: UserApiDeleteUserFieldRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUserField(param.userLocator, param.field,  options).toPromise();
    }

    /**
     * Remove an authentication token from the matching user.
     * @param param the request object
     */
    public deleteUserToken(param: UserApiDeleteUserTokenRequest, options?: Configuration): Promise<void> {
        return this.api.deleteUserToken(param.userLocator, param.name,  options).toPromise();
    }

    /**
     * Get a field of the matching user.
     * @param param the request object
     */
    public gerUserField(param: UserApiGerUserFieldRequest, options?: Configuration): Promise<string> {
        return this.api.gerUserField(param.userLocator, param.field,  options).toPromise();
    }

    /**
     * Get all groups of the matching user.
     * @param param the request object
     */
    public getAllUserGroups(param: UserApiGetAllUserGroupsRequest, options?: Configuration): Promise<Groups> {
        return this.api.getAllUserGroups(param.userLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all user roles of the matching user.
     * @param param the request object
     */
    public getAllUserRoles(param: UserApiGetAllUserRolesRequest, options?: Configuration): Promise<Roles> {
        return this.api.getAllUserRoles(param.userLocator,  options).toPromise();
    }

    /**
     * Get all users.
     * @param param the request object
     */
    public getAllUsers(param: UserApiGetAllUsersRequest, options?: Configuration): Promise<Users> {
        return this.api.getAllUsers(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get user matching the locator.
     * @param param the request object
     */
    public getUser(param: UserApiGetUserRequest, options?: Configuration): Promise<User> {
        return this.api.getUser(param.userLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a user group of the matching user.
     * @param param the request object
     */
    public getUserGroup(param: UserApiGetUserGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.getUserGroup(param.userLocator, param.groupLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all permissions effective for the matching user.
     * @param param the request object
     */
    public getUserPermissions(param: UserApiGetUserPermissionsRequest, options?: Configuration): Promise<PermissionAssignments> {
        return this.api.getUserPermissions(param.userLocator, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get all properties of the matching user.
     * @param param the request object
     */
    public getUserProperties(param: UserApiGetUserPropertiesRequest, options?: Configuration): Promise<Properties> {
        return this.api.getUserProperties(param.userLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a property of the matching user.
     * @param param the request object
     */
    public getUserProperty(param: UserApiGetUserPropertyRequest, options?: Configuration): Promise<string> {
        return this.api.getUserProperty(param.userLocator, param.name,  options).toPromise();
    }

    /**
     * Get a user role with the specific scope from the matching user.
     * @param param the request object
     */
    public getUserRolesAtScope(param: UserApiGetUserRolesAtScopeRequest, options?: Configuration): Promise<Role> {
        return this.api.getUserRolesAtScope(param.userLocator, param.roleId, param.scope,  options).toPromise();
    }

    /**
     * Get all authentication tokens of the matching user.
     * @param param the request object
     */
    public getUserTokens(param: UserApiGetUserTokensRequest, options?: Configuration): Promise<Tokens> {
        return this.api.getUserTokens(param.userLocator, param.fields,  options).toPromise();
    }

    /**
     * Remove the matching user from the specific group.
     * @param param the request object
     */
    public removeUserFromGroup(param: UserApiRemoveUserFromGroupRequest, options?: Configuration): Promise<void> {
        return this.api.removeUserFromGroup(param.userLocator, param.groupLocator, param.fields,  options).toPromise();
    }

    /**
     * Remove a property of the matching user.
     * @param param the request object
     */
    public removeUserProperty(param: UserApiRemoveUserPropertyRequest, options?: Configuration): Promise<void> {
        return this.api.removeUserProperty(param.userLocator, param.name,  options).toPromise();
    }

    /**
     * Remove the RememberMe data of the matching user.
     * @param param the request object
     */
    public removeUserRememberMe(param: UserApiRemoveUserRememberMeRequest, options?: Configuration): Promise<void> {
        return this.api.removeUserRememberMe(param.userLocator,  options).toPromise();
    }

    /**
     * Remove a role with the specific scope from the matching user.
     * @param param the request object
     */
    public removeUserRoleAtScope(param: UserApiRemoveUserRoleAtScopeRequest, options?: Configuration): Promise<void> {
        return this.api.removeUserRoleAtScope(param.userLocator, param.roleId, param.scope,  options).toPromise();
    }

    /**
     * Update user matching the locator.
     * @param param the request object
     */
    public replaceUser(param: UserApiReplaceUserRequest, options?: Configuration): Promise<User> {
        return this.api.replaceUser(param.userLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a field of the matching user.
     * @param param the request object
     */
    public setUserField(param: UserApiSetUserFieldRequest, options?: Configuration): Promise<string> {
        return this.api.setUserField(param.userLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Update groups of the matching user.
     * @param param the request object
     */
    public setUserGroups(param: UserApiSetUserGroupsRequest, options?: Configuration): Promise<Groups> {
        return this.api.setUserGroups(param.userLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a property of the matching user.
     * @param param the request object
     */
    public setUserProperty(param: UserApiSetUserPropertyRequest, options?: Configuration): Promise<string> {
        return this.api.setUserProperty(param.userLocator, param.name, param.body,  options).toPromise();
    }

    /**
     * Update user roles of the matching user.
     * @param param the request object
     */
    public setUserRoles(param: UserApiSetUserRolesRequest, options?: Configuration): Promise<Roles> {
        return this.api.setUserRoles(param.userLocator, param.body,  options).toPromise();
    }

}

import { ObservableVcsRootApi } from "./ObservableAPI.ts";
import { VcsRootApiRequestFactory, VcsRootApiResponseProcessor} from "../apis/VcsRootApi.ts";

export interface VcsRootApiAddVcsRootRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApiaddVcsRoot
     */
    fields?: string
    /**
     * 
     * @type VcsRoot
     * @memberof VcsRootApiaddVcsRoot
     */
    body?: VcsRoot
}

export interface VcsRootApiDeleteAllVcsRootPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApideleteAllVcsRootProperties
     */
    vcsRootLocator: string
}

export interface VcsRootApiDeleteVcsRootRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApideleteVcsRoot
     */
    vcsRootLocator: string
}

export interface VcsRootApiDeleteVcsRootPropertyRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApideleteVcsRootProperty
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApideleteVcsRootProperty
     */
    name: string
}

export interface VcsRootApiGetAllVcsRootPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApigetAllVcsRootProperties
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApigetAllVcsRootProperties
     */
    fields?: string
}

export interface VcsRootApiGetAllVcsRootsRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApigetAllVcsRoots
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof VcsRootApigetAllVcsRoots
     */
    fields?: string
}

export interface VcsRootApiGetRootEndpointsRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApigetRootEndpoints
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApigetRootEndpoints
     */
    fields?: string
}

export interface VcsRootApiGetVcsRootFieldRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApigetVcsRootField
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApigetVcsRootField
     */
    field: string
}

export interface VcsRootApiGetVcsRootInstancesRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApigetVcsRootInstances
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApigetVcsRootInstances
     */
    fields?: string
}

export interface VcsRootApiGetVcsRootPropertyRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApigetVcsRootProperty
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApigetVcsRootProperty
     */
    name: string
}

export interface VcsRootApiGetVcsRootSettingsFileRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApigetVcsRootSettingsFile
     */
    vcsRootLocator: string
}

export interface VcsRootApiSetVcsRootFieldRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApisetVcsRootField
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApisetVcsRootField
     */
    field: string
    /**
     * 
     * @type string
     * @memberof VcsRootApisetVcsRootField
     */
    body?: string
}

export interface VcsRootApiSetVcsRootPropertiesRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApisetVcsRootProperties
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApisetVcsRootProperties
     */
    fields?: string
    /**
     * 
     * @type Properties
     * @memberof VcsRootApisetVcsRootProperties
     */
    body?: Properties
}

export interface VcsRootApiSetVcsRootPropertyRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootApisetVcsRootProperty
     */
    vcsRootLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootApisetVcsRootProperty
     */
    name: string
    /**
     * 
     * @type string
     * @memberof VcsRootApisetVcsRootProperty
     */
    body?: string
}

export class ObjectVcsRootApi {
    private api: ObservableVcsRootApi

    public constructor(configuration: Configuration, requestFactory?: VcsRootApiRequestFactory, responseProcessor?: VcsRootApiResponseProcessor) {
        this.api = new ObservableVcsRootApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new VCS root.
     * @param param the request object
     */
    public addVcsRoot(param: VcsRootApiAddVcsRootRequest, options?: Configuration): Promise<VcsRoot> {
        return this.api.addVcsRoot(param.fields, param.body,  options).toPromise();
    }

    /**
     * Delete all properties of the matching VCS root.
     * @param param the request object
     */
    public deleteAllVcsRootProperties(param: VcsRootApiDeleteAllVcsRootPropertiesRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllVcsRootProperties(param.vcsRootLocator,  options).toPromise();
    }

    /**
     * Remove VCS root matching the locator.
     * @param param the request object
     */
    public deleteVcsRoot(param: VcsRootApiDeleteVcsRootRequest, options?: Configuration): Promise<void> {
        return this.api.deleteVcsRoot(param.vcsRootLocator,  options).toPromise();
    }

    /**
     * Delete a property of the matching VCS root.
     * @param param the request object
     */
    public deleteVcsRootProperty(param: VcsRootApiDeleteVcsRootPropertyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteVcsRootProperty(param.vcsRootLocator, param.name,  options).toPromise();
    }

    /**
     * Get all properties of the matching VCS root.
     * @param param the request object
     */
    public getAllVcsRootProperties(param: VcsRootApiGetAllVcsRootPropertiesRequest, options?: Configuration): Promise<Properties> {
        return this.api.getAllVcsRootProperties(param.vcsRootLocator, param.fields,  options).toPromise();
    }

    /**
     * Get all VCS roots.
     * @param param the request object
     */
    public getAllVcsRoots(param: VcsRootApiGetAllVcsRootsRequest, options?: Configuration): Promise<VcsRoots> {
        return this.api.getAllVcsRoots(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get root endpoints.
     * @param param the request object
     */
    public getRootEndpoints(param: VcsRootApiGetRootEndpointsRequest, options?: Configuration): Promise<VcsRoot> {
        return this.api.getRootEndpoints(param.vcsRootLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a field of the matching VCS root.
     * @param param the request object
     */
    public getVcsRootField(param: VcsRootApiGetVcsRootFieldRequest, options?: Configuration): Promise<string> {
        return this.api.getVcsRootField(param.vcsRootLocator, param.field,  options).toPromise();
    }

    /**
     * Get all VCS root instances of the matching VCS root.
     * @param param the request object
     */
    public getVcsRootInstances(param: VcsRootApiGetVcsRootInstancesRequest, options?: Configuration): Promise<VcsRootInstances> {
        return this.api.getVcsRootInstances(param.vcsRootLocator, param.fields,  options).toPromise();
    }

    /**
     * Get a property on the matching VCS root.
     * @param param the request object
     */
    public getVcsRootProperty(param: VcsRootApiGetVcsRootPropertyRequest, options?: Configuration): Promise<string> {
        return this.api.getVcsRootProperty(param.vcsRootLocator, param.name,  options).toPromise();
    }

    /**
     * Get the settings file of the matching VCS root.
     * @param param the request object
     */
    public getVcsRootSettingsFile(param: VcsRootApiGetVcsRootSettingsFileRequest, options?: Configuration): Promise<string> {
        return this.api.getVcsRootSettingsFile(param.vcsRootLocator,  options).toPromise();
    }

    /**
     * Update a field of the matching VCS root.
     * @param param the request object
     */
    public setVcsRootField(param: VcsRootApiSetVcsRootFieldRequest, options?: Configuration): Promise<string> {
        return this.api.setVcsRootField(param.vcsRootLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Update all properties of the matching VCS root.
     * @param param the request object
     */
    public setVcsRootProperties(param: VcsRootApiSetVcsRootPropertiesRequest, options?: Configuration): Promise<Properties> {
        return this.api.setVcsRootProperties(param.vcsRootLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Update a property of the matching VCS root.
     * @param param the request object
     */
    public setVcsRootProperty(param: VcsRootApiSetVcsRootPropertyRequest, options?: Configuration): Promise<string> {
        return this.api.setVcsRootProperty(param.vcsRootLocator, param.name, param.body,  options).toPromise();
    }

}

import { ObservableVcsRootInstanceApi } from "./ObservableAPI.ts";
import { VcsRootInstanceApiRequestFactory, VcsRootInstanceApiResponseProcessor} from "../apis/VcsRootInstanceApi.ts";

export interface VcsRootInstanceApiDeleteVcsRootInstanceFieldRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApideleteVcsRootInstanceField
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApideleteVcsRootInstanceField
     */
    field: string
}

export interface VcsRootInstanceApiDeleteVcsRootInstanceRepositoryStateRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApideleteVcsRootInstanceRepositoryState
     */
    vcsRootInstanceLocator: string
}

export interface VcsRootInstanceApiDownloadFileRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApidownloadFile
     */
    path: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApidownloadFile
     */
    vcsRootInstanceLocator: string
}

export interface VcsRootInstanceApiGetAllVcsRootInstancesRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetAllVcsRootInstances
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetAllVcsRootInstances
     */
    fields?: string
}

export interface VcsRootInstanceApiGetFileMetadataRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFileMetadata
     */
    path: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFileMetadata
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFileMetadata
     */
    fields?: string
}

export interface VcsRootInstanceApiGetFilesListRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesList
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesList
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesList
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesList
     */
    fields?: string
}

export interface VcsRootInstanceApiGetFilesListForSubpathRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesListForSubpath
     */
    path: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesListForSubpath
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesListForSubpath
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesListForSubpath
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetFilesListForSubpath
     */
    fields?: string
}

export interface VcsRootInstanceApiGetVcsRootInstanceRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstance
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstance
     */
    fields?: string
}

export interface VcsRootInstanceApiGetVcsRootInstanceCreationDateRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstanceCreationDate
     */
    vcsRootInstanceLocator: string
}

export interface VcsRootInstanceApiGetVcsRootInstanceFieldRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstanceField
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstanceField
     */
    field: string
}

export interface VcsRootInstanceApiGetVcsRootInstancePropertiesRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstanceProperties
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstanceProperties
     */
    fields?: string
}

export interface VcsRootInstanceApiGetVcsRootInstanceRepositoryStateRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstanceRepositoryState
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetVcsRootInstanceRepositoryState
     */
    fields?: string
}

export interface VcsRootInstanceApiGetZippedFileRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetZippedFile
     */
    path: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetZippedFile
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetZippedFile
     */
    basePath?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetZippedFile
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApigetZippedFile
     */
    name?: string
}

export interface VcsRootInstanceApiRequestPendingChangesCheckRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApirequestPendingChangesCheck
     */
    locator?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApirequestPendingChangesCheck
     */
    requestor?: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApirequestPendingChangesCheck
     */
    fields?: string
}

export interface VcsRootInstanceApiSetVcsRootInstanceFieldRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApisetVcsRootInstanceField
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApisetVcsRootInstanceField
     */
    field: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApisetVcsRootInstanceField
     */
    body?: string
}

export interface VcsRootInstanceApiSetVcsRootInstanceRepositoryStateRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApisetVcsRootInstanceRepositoryState
     */
    vcsRootInstanceLocator: string
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApisetVcsRootInstanceRepositoryState
     */
    fields?: string
    /**
     * 
     * @type Entries
     * @memberof VcsRootInstanceApisetVcsRootInstanceRepositoryState
     */
    body?: Entries
}

export interface VcsRootInstanceApiTriggerCommitHookNotificationRequest {
    /**
     * 
     * @type string
     * @memberof VcsRootInstanceApitriggerCommitHookNotification
     */
    locator?: string
    /**
     * 
     * @type boolean
     * @memberof VcsRootInstanceApitriggerCommitHookNotification
     */
    okOnNothingFound?: boolean
}

export class ObjectVcsRootInstanceApi {
    private api: ObservableVcsRootInstanceApi

    public constructor(configuration: Configuration, requestFactory?: VcsRootInstanceApiRequestFactory, responseProcessor?: VcsRootInstanceApiResponseProcessor) {
        this.api = new ObservableVcsRootInstanceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove a field of the matching VCS root instance.
     * @param param the request object
     */
    public deleteVcsRootInstanceField(param: VcsRootInstanceApiDeleteVcsRootInstanceFieldRequest, options?: Configuration): Promise<void> {
        return this.api.deleteVcsRootInstanceField(param.vcsRootInstanceLocator, param.field,  options).toPromise();
    }

    /**
     * Delete the last repository state of the matching VCS root instance.
     * @param param the request object
     */
    public deleteVcsRootInstanceRepositoryState(param: VcsRootInstanceApiDeleteVcsRootInstanceRepositoryStateRequest, options?: Configuration): Promise<void> {
        return this.api.deleteVcsRootInstanceRepositoryState(param.vcsRootInstanceLocator,  options).toPromise();
    }

    /**
     * Download specific file.
     * @param param the request object
     */
    public downloadFile(param: VcsRootInstanceApiDownloadFileRequest, options?: Configuration): Promise<void> {
        return this.api.downloadFile(param.path, param.vcsRootInstanceLocator,  options).toPromise();
    }

    /**
     * Get all VCS root instances.
     * @param param the request object
     */
    public getAllVcsRootInstances(param: VcsRootInstanceApiGetAllVcsRootInstancesRequest, options?: Configuration): Promise<VcsRootInstances> {
        return this.api.getAllVcsRootInstances(param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get metadata of specific file.
     * @param param the request object
     */
    public getFileMetadata(param: VcsRootInstanceApiGetFileMetadataRequest, options?: Configuration): Promise<any> {
        return this.api.getFileMetadata(param.path, param.vcsRootInstanceLocator, param.fields,  options).toPromise();
    }

    /**
     * List all files.
     * @param param the request object
     */
    public getFilesList(param: VcsRootInstanceApiGetFilesListRequest, options?: Configuration): Promise<Files> {
        return this.api.getFilesList(param.vcsRootInstanceLocator, param.basePath, param.locator, param.fields,  options).toPromise();
    }

    /**
     * List files under this path.
     * @param param the request object
     */
    public getFilesListForSubpath(param: VcsRootInstanceApiGetFilesListForSubpathRequest, options?: Configuration): Promise<Files> {
        return this.api.getFilesListForSubpath(param.path, param.vcsRootInstanceLocator, param.basePath, param.locator, param.fields,  options).toPromise();
    }

    /**
     * Get VCS root instance matching the locator.
     * @param param the request object
     */
    public getVcsRootInstance(param: VcsRootInstanceApiGetVcsRootInstanceRequest, options?: Configuration): Promise<VcsRootInstance> {
        return this.api.getVcsRootInstance(param.vcsRootInstanceLocator, param.fields,  options).toPromise();
    }

    /**
     * Get the creation date of the matching VCS root instance.
     * @param param the request object
     */
    public getVcsRootInstanceCreationDate(param: VcsRootInstanceApiGetVcsRootInstanceCreationDateRequest, options?: Configuration): Promise<string> {
        return this.api.getVcsRootInstanceCreationDate(param.vcsRootInstanceLocator,  options).toPromise();
    }

    /**
     * Get a field of the matching VCS root instance.
     * @param param the request object
     */
    public getVcsRootInstanceField(param: VcsRootInstanceApiGetVcsRootInstanceFieldRequest, options?: Configuration): Promise<string> {
        return this.api.getVcsRootInstanceField(param.vcsRootInstanceLocator, param.field,  options).toPromise();
    }

    /**
     * Get all properties of the matching VCS root instance.
     * @param param the request object
     */
    public getVcsRootInstanceProperties(param: VcsRootInstanceApiGetVcsRootInstancePropertiesRequest, options?: Configuration): Promise<Properties> {
        return this.api.getVcsRootInstanceProperties(param.vcsRootInstanceLocator, param.fields,  options).toPromise();
    }

    /**
     * Get the repository state of the matching VCS root instance.
     * @param param the request object
     */
    public getVcsRootInstanceRepositoryState(param: VcsRootInstanceApiGetVcsRootInstanceRepositoryStateRequest, options?: Configuration): Promise<Entries> {
        return this.api.getVcsRootInstanceRepositoryState(param.vcsRootInstanceLocator, param.fields,  options).toPromise();
    }

    /**
     * Get specific file zipped.
     * @param param the request object
     */
    public getZippedFile(param: VcsRootInstanceApiGetZippedFileRequest, options?: Configuration): Promise<void> {
        return this.api.getZippedFile(param.path, param.vcsRootInstanceLocator, param.basePath, param.locator, param.name,  options).toPromise();
    }

    /**
     * Check for the pending changes for all VCS root instances.
     * @param param the request object
     */
    public requestPendingChangesCheck(param: VcsRootInstanceApiRequestPendingChangesCheckRequest, options?: Configuration): Promise<VcsRootInstances> {
        return this.api.requestPendingChangesCheck(param.locator, param.requestor, param.fields,  options).toPromise();
    }

    /**
     * Get a field of the matching VCS root instance.
     * @param param the request object
     */
    public setVcsRootInstanceField(param: VcsRootInstanceApiSetVcsRootInstanceFieldRequest, options?: Configuration): Promise<string> {
        return this.api.setVcsRootInstanceField(param.vcsRootInstanceLocator, param.field, param.body,  options).toPromise();
    }

    /**
     * Update the repository state of the matching VCS root instance.
     * @param param the request object
     */
    public setVcsRootInstanceRepositoryState(param: VcsRootInstanceApiSetVcsRootInstanceRepositoryStateRequest, options?: Configuration): Promise<Entries> {
        return this.api.setVcsRootInstanceRepositoryState(param.vcsRootInstanceLocator, param.fields, param.body,  options).toPromise();
    }

    /**
     * Send the commit hook notification.
     * @param param the request object
     */
    public triggerCommitHookNotification(param: VcsRootInstanceApiTriggerCommitHookNotificationRequest, options?: Configuration): Promise<void> {
        return this.api.triggerCommitHookNotification(param.locator, param.okOnNothingFound,  options).toPromise();
    }

}
