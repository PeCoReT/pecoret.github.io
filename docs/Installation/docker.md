---
sidebar_position: 10
title: Docker
---

# Docker

:::warning
This method is currently not the recommended way to run PeCoReT!
The docker version is not tested!
:::

You can get an example docker compose file from the [repository](https://github.com/pecoret/pecoret).

```bash
wget https://raw.githubusercontent.com/PeCoReT/pecoret/main/docker-compose.yaml
```

:::caution
Change the credentials!
:::
You can now log in with the username and password specified in the environment variables `DJANGO_SUPERUSER_USERNAME` and `DJANGO_SUPERUSER_PASSWORD`.

Keep in mind, that the admin user should just be used to configure the application.
If you want to use the admin user like a *standard user* you must add the user to the groups.
