package Test1.vcsRoots

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.vcs.GitVcsRoot

object ABC123 : GitVcsRoot({
    uuid = "03a4ac21-8dc7-4ec2-b4ad-5d74046c8379"
    name = "BarBaz"
    url = "git@github.com:brad-jones/teamcity-playground.git"
    branch = "master"
    branchSpec = """
        +:foo
        -:bar
    """.trimIndent()
    useMirrors = false
    authMethod = customPrivateKey {
        userName = "adsfghadfhsdfgjh"
        customKeyPath = "/foo/bar/baz.pem"
        passphrase = "credentialsJSON:7ed0e33f-8f17-4aa9-ad23-539150427e62"
    }
    param("secure:password", "")
})
