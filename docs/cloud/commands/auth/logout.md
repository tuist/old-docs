---
title: tuist cloud logout
slug: '/cloud/commands/auth/logoout'
description: 'Use tuist cloud logout to log out from Tuist Cloud.'
---

If you wish to log out from Tuist Cloud, you can run:
```sh
tuist cloud logout
```

:::note
This command will only delete your local session used by the `tuist` CLI. You won't be logged out in the browser.
:::

### Arguments

| Argument | Description | Default | Required |
| -------- | ----------- | ------- | -------- |
| `--server-url` | A custom server URL. This can be useful if you don't use the official cloud.tuist.io project | https://cloud.tuist.io  | No |