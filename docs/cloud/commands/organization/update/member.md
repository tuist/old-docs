---
title: tuist cloud organization update member
slug: '/cloud/commands/organization/update/member'
description: 'Use tuist cloud organization update member to update a current member of your organization.'
---

`tuist cloud organization update` allows you to update members of your organization. Currently, that means updating their role. Members of the organization can either be `admin` or `user`. Admins have higher privileges than users – they can invite new members, remove projects in an organization, etc. Users have a more passive access to Tuist Cloud features.

For example, to change an organization member's role to `admin`, run:
```sh
tuist cloud organization update member member-username --role admin
```


### Arguments

| Argument | Description | Default | Required |
| -------- | ----------- | ------- | -------- |
| `--role` | The new member role. Possible values are `admin` and `user` | None | No |
| `--server-url` | A custom server URL. This can be useful if you don't use the official cloud.tuist.io project | https://cloud.tuist.io  | No |