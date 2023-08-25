---
title: tuist cloud organization invite
slug: '/cloud/commands/organization/invite'
description: 'Use tuist cloud organization invite to invite a new member to your organization.'
---

To provide access to the Tuist Cloud features like remote caching for your team members, you need to invite them first to the organization. To do so, you can run:
```sh
tuist cloud organization invite my-organization new-member@email.io
```

We will send them an email invitation. Once they accept it, they will get access to your organization and all Tuist Cloud projects under that organization.

### Arguments

| Argument | Description | Default | Required |
| -------- | ----------- | ------- | -------- |
| `--server-url` | A custom server URL. This can be useful if you don't use the official cloud.tuist.io project | https://cloud.tuist.io  | No |