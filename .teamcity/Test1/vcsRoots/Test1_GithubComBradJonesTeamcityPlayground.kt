package Test1.vcsRoots

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.vcs.GitVcsRoot

object Test1_GithubComBradJonesTeamcityPlayground : GitVcsRoot({
    uuid = "b389470e-fa99-49df-9c76-24408cda6c60"
    name = "github.com/brad-jones/teamcity-playground"
    pollInterval = 120
    url = "https://github.com/brad-jones/teamcity-playground.git"
    pushUrl = "https://github.com/brad-jones/teamcity-playground.git"
    branch = "refs/heads/master"
    branchSpec = "+:refs/heads/*"
    userNameStyle = GitVcsRoot.UserNameStyle.EMAIL
    checkoutSubmodules = GitVcsRoot.CheckoutSubmodules.IGNORE
    userForTags = "Foo Bar foo.bar@acme.org"
    serverSideAutoCRLF = true
    agentGitPath = "/path/to/git"
    agentCleanPolicy = GitVcsRoot.AgentCleanPolicy.NEVER
    agentCleanFilesPolicy = GitVcsRoot.AgentCleanFilesPolicy.NON_IGNORED_ONLY
    authMethod = password {
        userName = "brad-jones"
        password = "credentialsJSON:39fd150f-810a-420f-831e-091bae70ae4a"
    }
})
