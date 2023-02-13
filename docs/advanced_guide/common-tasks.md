---
sidebar_position: 1
---

# Common Tasks

## Import CWE entries
You can import CWE data into the *PeCoReT* database.
The data is shipped with *PeCoReT* by default and is available as XML file in the `resources`
directory.

:::note
This task is executed automatically if the `import_vulnerability_templates` script is executed
:::

```bash
python manage.py import_cwe_entries
```

## Import Vulnerability Templates
To import vulnerability templates, the python package must be part of the `ADDITIONAL_PACKAGES` list.
You should have a look at the [Configuration page](/docs/getting-started/configuration) to learn how to configure it.

After you have configured the package, you can import the data with the following command:

```bash
python manage.py import_vulnerability_templates my_package
```

### Default Vulnerability Templates
If you want to use the default vulnerability templates, make your the package `pecoret_default_templates` is installed.

```bash
pip install pecoret_default_templates
```

To import the default templates, you may use this command:

```bash
python manage.py import_vulnerability_templates pecoret_default_templates
```

