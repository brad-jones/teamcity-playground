package Test1_SubProject1.buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object Test1_SubProject1_BuildLin : BuildType({
    uuid = "492ea0bb-e2b5-49fa-a55f-ae5a450377c8"
    name = "Build-Lin"

    buildNumberPattern = "%build.counter%-foo"

    vcs {
        root(Test1.vcsRoots.Test1_GithubComBradJonesTeamcityPlayground)
    }

    steps {
        script {
            scriptContent = """echo "Hello World";"""
        }
    }
})
