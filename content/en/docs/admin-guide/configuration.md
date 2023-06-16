---
title: "Configuration"
description: "Configuration options for PeCoReT"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "admin-guide"
weight: 30
toc: true
---

The following settings are available.
To change settings edit the file `local_settings.py` in the project root directory.
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

Django comes with a built-in admin panel. It is disabled by default in *PeCoReT*. If you need it, you can enable it with the following setting:

```python
ENABLE_DJANGO_ADMIN_PANEL = True
```

## Database
By default, a SQLite database is used.

### PostgreSQL
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

## Additional Packages
Configure additional packages.
```python
ADDITIONAL_PACKAGES = [
   'my_customizations',
   'pecoret_default_templates'
]
```

## Advisories

```python
ADVISORY_TEMPLATE = "my_customizations"
```

## Reporting
To populate the report templates with your company information, you can use the following settings.
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