---
title: tuist cloud project delete
slug: '/cloud/commands/project/delete'
description: 'Use tuist cloud project delete to delete a Tuist Cloud project.'
---

To delete your Tuist Cloud project, run:
```sh
tuist cloud project delete my-project
```

To delete a Tuist Cloud project in an organization, specify the `--organization` option:
```sh
tuist cloud project delete my-project --organization my-organization
```


### Arguments

| Argument | Description | Default | Required |
| -------- | ----------- | ------- | -------- |
| `--organization` | The name of the organization to delete the project for | Your username | No |
| `--server-url` | A custom server URL. This can be useful if you don't use the official cloud.tuist.io project | https://cloud.tuist.io  | No |