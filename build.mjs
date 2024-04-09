#!/usr/bin/env node

import * as path from "node:path";
import * as fs from "node:fs"
import {execaSync} from "execa";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const docusaurusPath = path.join(__dirname, "node_modules/.bin/docusaurus");

execaSync(docusaurusPath, ["build"], { stdio: "inherit" });

const redirectsPath = path.join(__dirname, "build/_redirects");
const redirects = `
/tutorial/get-started https://docs.tuist.io/guide/introduction/what-is-tuist 301
/tutorial/faq https://docs.tuist.io/guide/introduction/what-is-tuist 301
/guides/adopting-tuist https://docs.tuist.io/guide/introduction/adopting-tuist/new-project 301
/guides/helpers https://docs.tuist.io/guide/project/code-sharing 301
/guides/resources https://docs.tuist.io/guide/project/synthesized-files 301
/guides/dependencies https://docs.tuist.io/guide/project/dependencies 301
/guides/third-party-dependencies https://docs.tuist.io/guide/project/dependencies 301
/guides/task https://docs.tuist.io/guide/project/plugins 301
/guides/environment https://docs.tuist.io/guide/project/dynamic-configuration 301
/guides/version-management https://docs.tuist.io/guide/introduction/installation 301
/guides/shell-autocompletion https://docs.tuist.io/guide/introduction/installation 301
/commands/build https://docs.tuist.io/guide/automation/build 301
/commands/clean https://docs.tuist.io/guide/automation/clean 301
/commands/dependencies https://docs.tuist.io/guide/project/dependencies 301
/commands/edit https://docs.tuist.io/guide/project/editing 301
/commands/graph https://docs.tuist.io/guide/automation/graph 301
/commands/generate https://docs.tuist.io/guide/automation/generate 301
/commands/migration https://docs.tuist.io/guide/introduction/adopting-tuist/migrate-from-xcodeproj 301
/commands/plugin https://docs.tuist.io/guide/project/plugins 301
/commands/scaffold https://docs.tuist.io/guide/project/templates 301
/commands/test https://docs.tuist.io/guide/automation/test 301
/manifests/project https://docs.tuist.io/reference/project-description/project 301
/manifests/workspace https://docs.tuist.io/reference/project-description/workspace 301
/manifests/config https://docs.tuist.io/reference/project-description/config 301
/plugins/using-plugins https://docs.tuist.io/guide/project/plugins 301
/plugins/creating-plugins https://docs.tuist.io/guide/project/plugins 301
/examples/app-extensions https://docs.tuist.io/reference/examples/app_with_build_rules 301
/examples/app-clips https://docs.tuist.io/reference/examples/app_with_build_rules 301
/examples/command-line-tools https://docs.tuist.io/reference/examples/app_with_build_rules 301
/examples/fixtures https://docs.tuist.io/reference/examples/app_with_build_rules 301
/building-at-scale/microfeatures https://docs.tuist.io/guide/scale/ufeatures-architecture 301
/building-at-scale/caching https://docs.tuist.io/cloud/binary-caching 301
/building-at-scale/best-practices /guide/introduction/cost-of-convenience 301
/cloud/get-started https://docs.tuist.io/cloud/what-is-cloud 301
/cloud/stats https://docs.tuist.io/cloud/what-is-cloud 301
/contributors/get-started https://docs.tuist.io/contributors/get-started 301
/contributors/fourier https://docs.tuist.io/contributors/get-started 301
/contributors/championing-projects https://docs.tuist.io/contributors/get-started 301
/contributors/code-reviews https://docs.tuist.io/contributors/code-reviews
/contributors/reporting-bugs https://docs.tuist.io/contributors/issue-reporting
/contributors/architecture https://docs.tuist.io/contributors/get-started 301
/contributors/testing-strategy https://docs.tuist.io/contributors/get-started 301
/contributors/core-team https://docs.tuist.io/contributors/get-started 301
/contributors/manifesto https://docs.tuist.io/contributors/principles 301
/contributors/performance-testing https://docs.tuist.io/contributors/get-started 301
/contributors/generation-pipeline https://docs.tuist.io/contributors/get-started 301
/contributors/analytics-events https://docs.tuist.io/contributors/get-started 301
`
fs.writeFileSync(redirectsPath, redirects);