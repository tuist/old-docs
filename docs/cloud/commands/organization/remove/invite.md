---
title: tuist cloud organization remove invite
slug: '/cloud/commands/organization/remove/invite'
description: 'Use tuist cloud organization remove invite to cancel an invitation.'
---

If, for whatever reason, you want to cancel a pending invitation to your organization, run:
```sh
tuist cloud organization remove invite my-organization member@email.io
```


### Arguments

| Argument | Description | Default | Required |
| -------- | ----------- | ------- | -------- |
| `--server-url` | A custom server URL. This can be useful if you don't use the official cloud.tuist.io project | https://cloud.tuist.io  | No |