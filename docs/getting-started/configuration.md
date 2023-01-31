---
sidebar_position: 2
---

# Configuration
The following settings are available.
To change settings edit the file `local_settings.py` in the project root directory.
If the file does not yet exist, you may need to create it.

## Core
Configure basic settings like allowed host header values and CSRF and CORS origins.
```python
CORS_ALLOWED_ORIGINS = ["https://localhost", "https://pecoret.lan"]
CSRF_TRUSTED_ORIGINS = ["https://pecoret.lan", "https://pecoret.lan:8443"]
ALLOWED_HOSTS = ["pecoret.lan", "pecoret.lan:8443"]

SECRET_KEY = "somelongsecret key"
# Do not turn on DEBUG in production!
DEBUG = False
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
