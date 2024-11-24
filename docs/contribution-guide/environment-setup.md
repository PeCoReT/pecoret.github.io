---
title: Setup Development Environment
sidebar_position: 50
---

## Backend
```bash
git clone https://github.com/PeCoReT/pecoret

cd server
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

create a `server/conf/production.py` file with default settings:

```python
from pecoret.settings import *

DEBUG = False

ALLOWED_HOSTS = ["localhost"]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]

CSRF_TRUSTED_ORIGINS = CORS_ALLOWED_ORIGINS
```

create a `server/conf/development.py` file with your django settings:

```python
from .production import *

DEBUG = True
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
ENABLE_DJANGO_ADMIN_PANEL = True
CSRF_COOKIE_SECURE = False
SESSION_COOKIE_SECURE = False
SESSION_COOKIE_AGE = 1000 * 60
```

Run django development server and qcluster
```bash
cd server
python manage.py runserver --settings conf.development
python manage.py qcluster --settings conf.development
```

you may want to initialize [sample data](docs/admin_guide/common-tasks/#import-sample-data).
To create an admin user, run:

```bash
python manage.py createsuperuser
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

visit `http://127.0.0.1:8000`.