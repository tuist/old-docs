---
title: tuist cloud project create
slug: '/cloud/commands/project/create'
description: 'Use tuist cloud project create to create a new project'
---

To create a new project, you can run:
```sh
tuist cloud project create name-of-project
``` 
By default, this will create a project under your personal account. To create a new project for your organization, run:
```sh
tuist cloud project create name-of-project --organization my-organization
```

### Arguments

| Argument | Description | Default | Required |
| -------- | ----------- | ------- | -------- |
| `--organization` | The name of the organization you want to initialize the project with | Your username | No |
| `--server-url` | A custom server URL. This can be useful if you don't use the official cloud.tuist.io project | https://cloud.tuist.io  | No |