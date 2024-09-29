---
sidebar_position: 30
title: Configuration
---
The following settings are available.
To change settings edit the file `conf/production.py` in the project root directory.
If the file does not yet exist, you may need to create it.


## Core
Configure basic settings like allowed host header values and CSRF and CORS origins.

```python
CORS_ALLOWED_ORIGINS = ["https://localhost", "https://pecoret.lan"]
CSRF_TRUSTED_ORIGINS = ["https://pecoret.lan", "https://pecoret.lan:8443"]
ALLOWED_HOSTS = ["pecoret.lan", "pecoret.lan:8443"]

# only required, if you serve frontend and server in different origins, otherwise Strict
CSRF_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SAMESITE = 'None'


# Do not turn on DEBUG in production!
DEBUG = False
```


Django comes with a built-in admin panel. It is disabled by default in PeCoReT.
If you need it, you can enable it with the following setting:
```python
ENABLE_DJANGO_ADMIN_PANEL = True
```

## Database
by default, a SQlite database is used, which is not recommended for production environments.

Configure postgres instead:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': 'localhost',
        'NAME': 'pecoret',
        'USER': 'pecoret',
        'PASSWORD': 'somepassword'
    }
}
```

## Advisories
Define the default advisory template that is used. The template name must match the name of the report template.

```python
ADVISORY_TEMPLATE = "my_customizations"
```


## Attack Surface

```python
# enable the scanning feature to allow users to queue scans
AS_ENABLE_SCANNING = True
AS_QUEUE = {
    'host': '10.10.10.10',
    'port': 6379,
    'username': '',
    'password': '<password>',
    'ssl': True,
    'ssl_ca_certs': './mycerts.pem',
    'queues': {
        'nuclei-critical-high-vuln': 'vuln-scanning'
    }
}
# enqueue scans when a new item is created
AS_ENABLE_SCAN_ON_CREATION = True

# only enqueue these scan types when a new item is created (e.g. only enrich ASN data an perform quick TCP port scans)
AS_ALLOWED_SCAN_TYPES_ON_CREATION = [
    'nmap-quick-tcp',
    'asn-enrich'
]

```
