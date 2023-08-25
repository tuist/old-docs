---
title: Get started
slug: '/cloud/get-started'
description: 'Learn how to set up Tuist Cloud on your projects to have access to new workflows and integrations.'
---

## Motivation

Before we dive into how to set up a project on **Tuist Cloud** we must understand what the tool is in the first place.
While developing Tuist,
we realized **workflows** and **integrations** that we could only enable through a server component.
A server allows storing state in a shared database,
has an [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) that other services can reach through webhooks,
and can perform periodic tasks through jobs.
A server opens the door to new practical workflows that significantly **improve the experience of scaling up Xcode projects and collaborating** when building apps.

The project is paid to help us run the servers and provide a source of income to the `tuist` project, so that we can sustain Tuist long-term. You can learn more about Tuist Cloud and its features [here](https://tuist.io/cloud).

## Getting started

You can get started with Tuist Cloud by running `tuist cloud init --name my-tuist-cloud-project` (`tuist cloud init` docs can be found [here](./commands/init)). If you are not registered yet at [cloud.tuist.io](https://cloud.tuist.io/), CLI will automatically redirect you to the sign up page. You can learn more about the command [here](commands/init). The `cloud init` command will try to automatically update your `Config.swift` or give you a snippet you can copy-paste to it:
```swift
import ProjectDescription

let config = Config(
    cloud: .cloud(projectId: "your-username/your-project", url: "https://cloud.tuist.io") // This will be a part of `tuist cloud init` output
)
```

And that's it 🎉  When you now run `tuist generate App`, all available binaries will be automatically downloaded from remote if available. You can also warm all the targets with `tuist cache warm`. At the end of the command, all the binaries will be uploaded to the Tuist Cloud remote cache storage.

If you ever need to remove your Tuist Cloud credentials on your machine, you can run `tuist cloud logout`.

### CI

One of the great benefits of Tuist Cloud is that you can cache your targets on CI. Use [tuist cloud project token](commands/project/token) to obtain it.

Afterwards, you can add the `TUIST_CONFIG_CLOUD_TOKEN` to your CI environment and all commands like `tuist cache warm` will then have access to the Tuist Cloud.
