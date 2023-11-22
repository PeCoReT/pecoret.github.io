---
sidebar_position: 20
title: Common Tasks
---

## Import CWE entries

You can import CWE data into the PeCoReT database.
The data is shipped with PeCoReT by default and is available as XML file in the resources' directory.

```bash
python manage.py import_cwe_entries
```

## Import vulnerability templates

If you want to populate the database with vulnerability templates (in addition to the UI), you must run the following
command:

```bash
python manage.py import_vulnerability_templates /opt/my_pecoret_templates
```

### Import default vulnerability templates

If you want to use the default vulnerability templates, get a copy of the templates.

```bash
git clone https://github.com/PeCoReT/default_templates
```

To import the default templates, you may use this command:

```bash
python manage.py import_vulnerability_templates default_templates/vulnerability_templates
```

### Import default cronjobs

A management command is available to initialize some default cronjobs (e.g. delete expired memberships)

```bash
python manage.py init_default_cronjobs
```

