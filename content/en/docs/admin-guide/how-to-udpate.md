---
title: "How to Update"
description: "How to update PeCoReT"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "admin-guide"
weight: 10
toc: true
---

## Minor Updates

If you followed the manual installation, minor updates usually can be applied using the following commands:

```bash
cd /opt/PeCoReT
git pull
pip install -r requirements.txt
python3 manage.py migrate
```

## Docker
To Be Done