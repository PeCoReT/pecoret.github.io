---
title: "Checklists"
description: "Customize checklists in PeCoReT"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "customizations"
weight: 550
toc: true
---


Checklists are a collection of tasks. Tasks can be automatically created if an asset is created.
For example, a task to check for SQL injection vulnerabilities can be created, if a web application is created.

The [default templates repository](https://codeberg.org/PeCoReT/default_templates) include a set of checklists.


## Importing Checklists

```bash
python manage.py import_checklists /path/to/templates
```
