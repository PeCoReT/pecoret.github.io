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

# only required, if you serve frontend and server in different origins
CSRF_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SAMESITE = 'None'

SECRET_KEY = "somelongsecret key"

# Do not turn on DEBUG in production!
DEBUG = False
```

The site specific settings are mainly used to create mails:

```python
SITE_NAME = "My cool PeCoReT instance"
DOMAIN = "pecoret.example.com"
PROTOCOL = "https"
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

## Reporting
To populate the report templates with your company information, you can use the following settings.
The dictionary is added to the context while rendering reports.

```python
REPORT_COMPANY_INFORMATION = {
  "name": "PeCoReT",
  "street": "Test Street 1",
  "zip": "1337",
  "city": "London",
  "homepage": "https://pecoret.github.io",
  "email": "pecoret@example.com",
}
```
