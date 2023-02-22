---
sidebar_position: 10
---

# Web Interface
To Be Done

## Installation

```
git clone https://github.com/PeCoReT/pecoret-frontend
cd pecoret-frontend && touch .env.local
```

## Example .env file
```
# URL to PeCoReT server API
VUE_APP_API_URL=http://localhost:8000
```

## nginx
```
server {
    listen 443 ssl;
    server_name pecoret.example.com;
    server_tokens off;

    location / {
     	root /opt/pecoret-frontend/dist;
    }

    ssl_certificate /path/to/my.crt;
    ssl_certificate_key /path/to/my.key;

    ssl_protocols TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    [...]
}
```
