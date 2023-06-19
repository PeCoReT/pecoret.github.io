---
title: "Installation"
description: "Installation instructions."
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 110
toc: true
---

{{< alert icon="" context="warning" text="PeCoReT is in an early stage of development! Do not use it in production!" />}}

Welcome to the PeCoReT installation guide! This guide will walk you through the process of installing PeCoReT.

## Manual

This section shows how to install *PeCoReT* on your server.


### Requirements

Since we do not want to run PeCoReT as root, we need to create a new user.
```bash
useradd -m pecoret
```

To install PeCoReT, we need git, python and nginx installed.

#### Debian
```bash
apt install git python3-pip nginx
```


### Installation

Clone the repository somewhere. The following guide assumes you are installing components to `/opt`.

```bash
cd /opt
git clone https://codeberg.org/pecoret/pecoret
cd pecoret
chown pecoret:pecoret -R .
```

Now we need to install the python dependencies:
```
pip install -r server/requirements.txt && pip install gunicorn
```

*Note: You may want to install python dependencies into a virtual environment.*

The configuration file (`local_settings.py`) needs to be created

```bash
su - pecoret
cd /opt/pecoret/server
cp local_settings.template.py local_settings.py
exit
```

You may want to read how to [configure](/docs/admin-guide/configuration) your installation.


### Setup Database (optionally)
This is an optional step, which depends on your setup and configuration.
For example, if you plan to use a *sqlite* database, you do not need to do anything from this section.

#### PostgreSQL

```bash
su - postgres -c psql
```

in the postgres console:
```
CREATE DATABASE pecoret;
CREATE USER pecoret WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE pecoret TO pecoret;
ALTER DATABASE pecoret OWNER TO pecoret;
```

you may need to install an additional dependency:
```
pip install psycopg2-binary
```

### Initializing PeCoReT
In the next step, we need to initialize PeCoReT.

```bash
su - pecoret
cd /opt/pecoret/server
python manage.py migrate
python manage.py collectstatic
python manage.py createupseruser
exit
```

### Systemd Service
If you want to run the PeCoReT-server using systemd, you can paste the following
content into the `/etc/systemd/system/pecoret-server.service` file.

```ini
[Unit]
Description=PeCoReT server
After=network.target

[Service]
User=pecoret
Group=pecoret
WorkingDirectory=/opt/pecoret/server
ExecStart=gunicorn --bind 127.0.0.1:8000 pecoret.wsgi

[Install]
WantedBy=multi-user.target
```

To enable the service on boot and start the PeCoReT service, you can use the following commands:

```bash
systemctl start pecoret-server
systemctl enable pecoret-server
```

For the `qcluster` which is for example used to create the reports, create a file `/etc/systemd/system/pecoret-qcluster.service` file.

```ini
[Unit]
Description=PeCoReT server
After=network.target

[Service]
User=pecoret
Group=pecoret
WorkingDirectory=/opt/pecoret/server
ExecStart=python3 manage.py qcluster

[Install]
WantedBy=multi-user.target
```

```bash
systemctl start pecoret-qcluster
systemctl enable pecoret-server
```


### Install Frontend

follow the [nodejs documentation](https://nodejs.org/en/download/package-manager) for install instructions depending on your distribution.
```
cd /opt/pecoret/frontend
```
and create a `.env` file with the following content:

```
VITE_APP_API_URL=https://pecoret.example.com/api
```

change the URL of the api and build the frontend.

```
npm install
npm run build
```



### Setup Nginx

Paste the following content into the `/etc/nginx/conf.d/pecoret.conf` file.
You may want to further hardening the TLS configuration or configure HTTP headers, which is not part of this guide.

```
server {
    listen 80 default_server;
    server_tokens off;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name _;
    server_tokens off;

    ssl_certificate /etc/ssl/yourcert.crt;
    ssl_certificate_key /etc/ssl/yourcertkey.key;

    ssl_protocols TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    [...]
}
```

Start nginx:
```bash
systemctl start nginx
```


### Import Default Templates (optionally)
See [common tasks](/docs/admin-guide/common-tasks/#import-vulnerability-templates) for further information.


## Docker

You can get an example docker compose file from the [repository](https://codeberg.org/pecoret/pecoret).

```
wget https://codeberg.org/pecoret/pecoret/docker-compose.yaml
```

Remmeber to change the credentials!
