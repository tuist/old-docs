---
title: tuist cloud project token
slug: '/cloud/commands/project/token'
description: 'Use tuist cloud project list to get a project token to use on the CI.'
---

On the CI, you shouldn't use your user authentication tokens. Instead, use the token that's specific to the project.
To get it, run:
```sh
tuist cloud project token my-project --organization my-organization
```

Copy this token and set it as a secret in your CI pipeline where you run `tuist` commands. The token should be saved in the `TUIST_CONFIG_CLOUD_TOKEN` environment variable.


### Arguments

| Argument | Description | Default | Required |
| -------- | ----------- | ------- | -------- |
| `--organization` | The name of the organization to get project token for | Your username | No |
| `--server-url` | A custom server URL. This can be useful if you don't use the official cloud.tuist.io project | https://cloud.tuist.io  | No |