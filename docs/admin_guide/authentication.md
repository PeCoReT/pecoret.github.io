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

LDAP integration can be configured using [django-auth-ldap](https://django-auth-ldap.readthedocs.io/en/latest/install.html).
An example configuration used in my dev environment:

```python
INSTALLED_APPS += [
    'django_auth_ldap'
]

import ldap
from django_auth_ldap.config import LDAPSearch, GroupOfNamesType

# Baseline configuration.
AUTH_LDAP_SERVER_URI = "ldaps://ldap.dc=example,dc=local:636"
AUTH_LDAP_START_TLS = False

AUTH_LDAP_BIND_DN = "cn=test,ou=users,dc=example,dc=local"
AUTH_LDAP_BIND_PASSWORD = "aaaa"
AUTH_LDAP_USER_SEARCH = LDAPSearch(
    "ou=users,dc=example,dc=local", ldap.SCOPE_SUBTREE, "(cn=%(user)s)"
)
# Or:
# AUTH_LDAP_USER_DN_TEMPLATE = 'uid=%(user)s,ou=users,dc=example,dc=com'

# Set up the basic group parameters.
AUTH_LDAP_GROUP_SEARCH = LDAPSearch(
    "ou=groups,dc=example,dc=local",
    ldap.SCOPE_SUBTREE,
)
AUTH_LDAP_GROUP_TYPE = GroupOfNamesType(name_attr="cn")
AUTH_LDAP_MIRROR_GROUPS = ['']

# Simple group restrictions
AUTH_LDAP_REQUIRE_GROUP = "cn=pecoret-users,ou=groups,dc=example,dc=local"
# AUTH_LDAP_DENY_GROUP = "cn=disabled,ou=django,ou=groups,dc=example,dc=com"

# Populate the Django user from the LDAP directory.
AUTH_LDAP_USER_ATTR_MAP = {
    "first_name": "givenName",
    "last_name": "sn",
    "email": "mail",
}

AUTH_LDAP_USER_FLAGS_BY_GROUP = {
    "is_active": "cn=pecoret-users,ou=groups,dc=example,dc=local"
}

# This is the default, but I like to be explicit.
AUTH_LDAP_ALWAYS_UPDATE_USER = True

# Use LDAP group membership to calculate group permissions.
AUTH_LDAP_FIND_GROUP_PERMS = False

# Cache distinguished names and group memberships for an hour to minimize
# LDAP traffic.
AUTH_LDAP_CACHE_TIMEOUT = 3600

# Keep ModelBackend around for per-user permissions and maybe a local
# superuser.
AUTHENTICATION_BACKENDS = (
    "django_auth_ldap.backend.LDAPBackend",
    "django.contrib.auth.backends.ModelBackend",
)

LDAP_SYNC_GROUP_MAPPING = {
    'cn=pentester,ou=groups,dc=example,dc=local': 'Pentester',
    'cn=management,ou=groups,dc=example,dc=local': 'Management'
}
```

**Note:** Ldap groups are not yet synced.