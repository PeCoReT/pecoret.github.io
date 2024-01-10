---
sidebar_position: 70
title: REST-API
---

PeCoReT has a REST-API which can be used to control all parts that would also be available in the frontend.

There are two ways for authentication:
* Username and password
* API-Tokens


The API-Tokens can be created after you logged in to your account.
You can give the token access to different places (e.g. only read access to your projects).
An expiration date can also be configured.

An example request using an API-Token is shown below:

```bash
curl -H "Authorization: Bearer <yourtoken>" http://localhost:8000/projects/1
```
