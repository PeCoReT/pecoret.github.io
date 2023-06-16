---
title: "REST-API"
description: "Introduce the PeCoReT REST-API"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "user-guide"
weight: 80
toc: true
---

*PeCoReT* has a REST-API which can be used to control all parts that would also be available in the frontend.

There are two ways for authentication:
- Username and Password
- Project API-Tokens

The project API-Tokens can be created after you logged in to your account.
The token will be scoped to a single project. An expiration date can be configured.

A request using the token may look like this:

```bash
curl -H "Authorization: ProjectToken <yourtoken>" http://localhost:8000/projects/1
```
