---
title: tuist cloud session
slug: '/cloud/commands/auth/session'
description: 'Use tuist cloud session to print your current Tuist Cloud session.'
---

To see your current Tuist Cloud session, including the access token, you can run:
```sh
tuist cloud session
```

The command will also tell you if you are not authenticated with Tuist Cloud at all.


### Arguments

| Argument | Description | Default | Required |
| -------- | ----------- | ------- | -------- |
| `--server-url` | A custom server URL. This can be useful if you don't use the official cloud.tuist.io project | https://cloud.tuist.io  | No |