---
sidebar_position: 60
title: Authentication
---

Besides the default Django username and password authentication, **PeCoReT** supports multiple methods of central
account management and authentication.
These include integration with third-party authentication providers and LDAP.

This document outlines the available authentication methods and provides guidance on configuring each.

## Third-party authentication

PeCoReT allows users to log in via third-party authentication providers such as **Keycloak**.
This is achieved using the [Django Allauth](https://django-allauth.readthedocs.io/en/latest/) library, which provides a
flexible and extensible framework for social authentication.

### Keycloak Example

Add the following configuration to your settings file:

```python
SOCIALACCOUNT_PROVIDERS = {
    "openid_connect": {
        "APPS": [
            {
                "provider_id": "keycloak",
                "name": "Keycloak",
                "client_id": "<client_id>",
                "secret": "<client_secret>",
                "settings": {
                    "server_url": "https://keycloak.example.com/realms/example/.well-known/openid-configuration",
                },
            }
        ]
    }
}
```

The values of the `resouces_access.<client_id>.roles` claim of the JWT token is used to add users to the corresponding groups.
You can find a list of available groups [here](/docs/user-guide/permissions).

## LDAP

To Be Done