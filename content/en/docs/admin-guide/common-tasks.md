---
title: "Common Tasks"
description: "Admin Guide - Common Tasks"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "admin-guide"
weight: 330
toc: true
---

## Import CWE entries
You can import CWE data into the *PeCoReT* database.
The data is shipped with *PeCoReT* by default and is available as XML file in the `resources`
directory.

```bash
python manage.py import_cwe_entries
```

## Import Vulnerability Templates
To import vulnerability templates, you must run the following command:

```bash
python manage.py import_vulnerability_templates /opt/my_pecoret_templates
```

### Default Vulnerability Templates
If you want to use the default vulnerability templates, get a copy of the templates.

```bash
git clone https://github.com/PeCoReT/default_templates
```

To import the default templates, you may use this command:

```bash
python manage.py import_vulnerability_templates default_templates/vulnerability_templates
```

### Import default Cronjobs

A management command is available to initialize some default cronjobs (e.g. delete expired memberships)

```bash
python manage.py init_default_cronjobs
```

