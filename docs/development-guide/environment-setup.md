---
title: Environment Setup
---

## Backend
```bash
git clone https://github.com/PeCoReT/pecoret

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

Run django development server and qcluster
```bash
cd server
python manage.py runserver --settings conf.development
python manage.py qcluster --settings conf.development
```

## Frontend

create a `.env.local` file:

```ini
VITE_APP_API_URL=http://localhost:8000/api
```

```bash
cd frontend
npm install
npm run dev
```