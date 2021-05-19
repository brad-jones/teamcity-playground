package Test1_SubProject1.buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script

object Test1_SubProject1_PackageWin : BuildType({
    uuid = "f80e94c1-9ebe-4d82-8a23-0235d7db5e8f"
    name = "Package-Win"

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
