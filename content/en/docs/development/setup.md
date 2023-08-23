---
title: "Development Environment Setup"
description: "Setup a development environment"
lead: ""
date: 2023-08-23
lastmod: 2023-08-23
draft: false
images: []
menu:
  docs:
    parent: "development"
weight: 30
toc: true
---

## Backend
```bash
git clone https://codeberg.org/PeCoReT/pecoret

cd server
pip install -r requirements.txt
```

create a `server/conf/development.py` file with your django settings:
```python
DEBUG = True
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
ENABLE_DJANGO_ADMIN_PANEL = True
CSRF_COOKIE_SAMESITE = "Strict"
SESSION_COOKIE_SAMESITE = "Strict"
CSRF_COOKIE_SECURE = False
SESSION_COOKIE_SECURE = False
SESSION_COOKIE_AGE = 1000 * 60
```



if you want sample data initialized
```
python manage.py loaddata resources/sampledata.json
```

Run django development server and qcluster
```bash
cd server
python manage.py runserver --settings conf.development
```

```bash
cd server
python manage.py qcluster --settings conf.development
```

## Frontend
create a `.env.local` file
```ini
VITE_APP_API_URL=http://localhost:8000/api
```

```bash
cd frontend
npm install
npm run dev
```
