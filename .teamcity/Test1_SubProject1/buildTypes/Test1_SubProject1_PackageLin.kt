package Test1_SubProject1.buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object Test1_SubProject1_PackageLin : BuildType({
    uuid = "f327b3b0-4272-4788-9772-5f210b0ff74b"
    name = "Package-Lin"

    vcs {
        root(Test1.vcsRoots.Test1_GithubComBradJonesTeamcityPlayground)
    }

    steps {
        script {
            scriptContent = """echo "Hello World";"""
        }
    }

    dependencies {
        snapshot(Test1_SubProject1_Test) {
        }
    }
})
