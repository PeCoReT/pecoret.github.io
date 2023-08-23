---
title: "Report Templates"
description: "Customize report templates in PeCoReT"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "customizations"
weight: 530
toc: true
---

This part is, personally thinking, the most difficult and time-consuming part in making *PeCoReT* your own.
This page tries to help you to get familiar implementing custom report templates.
Once done, *PeCoReT* can use the template for various report generation tasks.

Report templates use the jinja2 rendering engine. Weasyprint is used to finally generate the PDF.
Other report types are *jinja-only*.

## Directory Structure

Customizations in *PeCoReT* can be loaded from file paths.
An example directory structure of a report template is shown below.

```
my_report_template
|-- __init__.py
|-- report.py
|-- templates
	|--- pentest_report.html
	|--- advisory.md
	|--- ...
```


## Styles
The report generator searches for a `scss/main.scss` file.
It is compiled and included by default.


## Installation / Usage

To finally use the template a super admin user needs to create the template using
the [REST-API](/docs/user-guide/rest-api/) or web interface.


## Create a new Report Template
First of all, you need to create the directory structure, mentioned above.

First of all the entry point file (`report.py`) is required:

```
mkdir -p ~/my_report_template/templates
cd ~/my_report_template
touch report.py
touch __init__.py
```

Inside your `templates` directory, the following files may be present:

- **vulnerability_overview.csv**:
  Used to export a vulnerability overview for a project report.
- **single_finding_export.html**:
  used to export a single finding to PDF report.
- **pentest_report.html**:
  Used to generate a pentest PDF report.
- **advisory.md**:
  Markdown version of a advisory.
- **advisory_export.html**:
  Export advisory details to PDF.

The `report.py` file may contain the following classes.

```python
from pecoret.core.reporting import types as report_types

class PentestPDFReport(report_types.PentestPDFReport):
    pass

class SingleFindingPDFReport(report_types.SingleFindingPDFReport):
    pass


class AdvisoryMarkdownExport(report_types.AdvisoryMarkdownExport):
    pass


class AdvisoryPDFExport(report_types.AdvisoryPDFExport):
    pass


class VulnerabilityCSVReport(report_types.VulnerabilityCSVReport):
    pass

```


## Internationalization

{{< alert context="warning" >}}
**Attention:** This is feature is currently in development!
{{< /alert >}}

### Enable Languages

Add your desired languages to the `LANGUAGES` configuration.

```python
gettext = lambda s: s
LANGUAGES = [("en", gettext("English")), ("de", gettext("German"))]
```

If you add a new language, you **must** run `python manage.py makemigrations`.

### Limitation

It is not yet possible to have a project that allows multi-language reports.
This means, that if your customer wants to have a german and an english report for the same project, this is not possible.
You would need to create two separate project and migrate the findings to the other one using the REST-API.


### Make and Compile Messages

```bash
python manage.py makemessages -l de /tmp/myreporttemplate

# from within your template directory
django-admin compilemessages
```
