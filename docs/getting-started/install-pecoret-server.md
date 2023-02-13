---
sidebar_position: 1
---

# Install PeCoReT Server

:::caution
PeCoReT is in a really early stage of development. Feel free to use, test it and please report bugs and other ideas.
You should <b>not</b> use it in production, because there may be breaking changes.
:::

Welcome to the PeCoReT installation guide! This guide will walk you through
the process of installing PeCoReT.


### Create User
Since we do not want to run PeCoReT as root, we create a new user.
```bash
useradd -m pecoret
```

### Install Dependencies

#### Debian
```bash
apt install git python3-pip nginx
```

### Get Code
```bash
cd /opt
git clone https://github.com/PeCoReT/PeCoReT.git
cd PeCoReT/
chown pecoret:pecoret -R .
```

### Install Requirements
Before we start to deploy PeCoReT, we need to install some dependencies.
```bash
pip install -r requirements.txt
```

## Configure PeCoReT
```bash
su - pecoret
cd /opt/PeCoReT
cp local_settings.template.py PeCoReT/conf/local_settings.py
exit
```
You may want to read how to [configure](/docs/getting-started/configuration/) your installation.


## Setup Database (optionally)
This is an optional step, which depends on your setup and configuration.
For example, if you plan to use a *sqlite* database, you do not need to do anything from this section.

### PostgreSQL
To Be Done

## Initializing PeCoReT
In the next step, we need to initialize PeCoReT.

```
su - PeCoReT
cd /opt/PeCoReT
python manage.py migrate
python manage.py collectstatic
python manage.py createupseruser
exit
```

## Systemd Service
If you want to run the PeCoReT-server using systemd, you can paste the following
content into the `/etc/systemd/system/pecoret-server.service` file.

```
[Unit]
Description=PeCoReT server
After=network.target

[Service]
User=pecoret
Group=pecoret
WorkingDirectory=/opt/PeCoReT
ExecStart=gunicorn --bind 127.0.0.1:8000 pecoret.wsgi

[Install]
WantedBy=multi-user.target
```

To enable the service on boot and start the PeCoReT service, you can use the following commands:

```bash
systemctl start pecoret-server
systemctl enable pecoret-server
```

For the `qcluster` which is for example used to create the reports, create a file `/etc/systemd/system/PeCoReT-qcluster.service` file.

```
[Unit]
Description=PeCoReT server
After=network.target

[Service]
User=PeCoReT
Group=PeCoReT
WorkingDirectory=/opt/PeCoReT
ExecStart=python3 manage.py qcluster

[Install]
WantedBy=multi-user.target
```

```bash
systemctl start pecoret-qcluster
systemctl enable pecoret-server
```


## Setup Nginx

Paste the following content into the `/etc/nginx/conf.d/pecoret.conf` file.
You may want to further hardening the TLS configuration, which is not part of this guide.

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

## Import Default Templates (optionally)
See [/docs/advanced_guide/comman-tasks#import-vulnerability-templates] for further information.