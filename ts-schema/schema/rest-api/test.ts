import { ProjectApi, createConfiguration, ServerConfiguration } from './deno/index.ts';

const p = new ProjectApi(createConfiguration({
    baseServer: new ServerConfiguration<Record<string, string>>("https://tc.example.org", {}),
    authMethods: { 'Authorization': 'Bearer abc' },
}));

(await p.getAllProjects()).project?.forEach(_ => console.log(_.href));