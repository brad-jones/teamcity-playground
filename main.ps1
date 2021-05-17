#!/usr/bin/env pwsh
#docker start teamcity-server-instance;
#docker stop teamcity-server-instance;

#docker run -it --name teamcity-server-instance `
#    -v $PWD/data:/data/teamcity_server/datadir `
#    -v $PWD/logs:/opt/teamcity/logs `
#    -p 8080:8111 `
#    jetbrains/teamcity-server