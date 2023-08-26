---
title: Tuist stats
slug: '/cloud/stats'
description: Learn about Tuist Stats
---

### Sending usage statistics

Tuist sends some **anonymous** analytics events to track the usage of the tool and provide Cloud users with valuable analytics.
The implementation is open source, mainly in the [TuistAnalytics](https://github.com/tuist/tuist/tree/main/Sources/TuistAnalytics) target.

The data is collected on a server implemented for the [Tuist Cloud](https://cloud.tuist.io/) and we track these stats **only for users** who use Tuist Cloud.

Users can opt out from Tuist stats setting the following environment variable:

```
TUIST_CONFIG_STATS_OPT_OUT=1
```
