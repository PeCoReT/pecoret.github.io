---
title: Report Templates
---

Report templates enable you to generate comprehensive and professional pentest reports with customized layouts, styles, and content.
These templates utilize Python and Jinja, alongside CSS and fonts, to ensure your reports meet your specific needs.
This document will guide you through enabling, customizing, and creating new report templates.


## Presets
Several preset templates are available out-of-the-box, which you can use as a base for customization:

* default_template: The default template using blue primary color.
* lime: The default template using lime as primary color.

The presets are located in the `pecoret` repository under `server/resources/report_templates/`.
These presets can be customized by modifying their CSS files to change styles and layouts as per your requirements.


## New Report Template using Presets

To customize a preset, just have a look at the required CSS variables and create a css file with your custom style.

The following example customizes the primary color of the default template:

```css
:root {
    /* Lime Color Palette */
    --primary-100: #ccffcc;
    --primary-200: #99ff99;
    --primary-300: #66ff66;
    --primary-400: #00ff00;
    --primary-500: #00cc00;
    --primary-600: #009900;
    --primary-700: #006600;
}
```

Open the settings file and add your new template to the `REPORT_TEMPLATES` dict:

```python
REPORT_TEMPLATES = {
    'lime': {
        'preset': 'default_template',
        'css_files': [BASE_DIR / 'resources/report_templates/default_template/styles/lime.css'],
    }
}

```


## Create a New Report Template

To create a new report template from scratch, follow these steps:

1. Create Directory Structure:

* Create a main directory for your template
* Inside this directory, create a subdirectory name `templates`

**Example:**

```plaintext
my_custom_template/
├── templates/
└── my_custom_template.py
```

2. Implement Plugin

The python file must contain a class `ReportTemplate`.
The class must implement the following methods:

* `export_single_finding(self, finding)`
* `export_advisory_pdf(self, advisory)`
* `export_project_pdf_report(self, report_document)`

The `pecoret.reporting.template.mixins` module contains mixins you can utilize.


## Internationalization
:::caution
This feature is currently in development and the default report may not yet be fully translated
:::

### Enable Languages
Add your desired languages to the `LANGUAGES` configuration.

```python
gettext = lambda s: s
LANGUAGES = [("en", gettext("English")), ("de", gettext("German"))]
```

If you add a new language, you must run `python manage.py makemigrations`.

### Limitations
It is not yet possible to have a project that allows multi-language reports.
This means, that if your customer wants to have a german and an english report for the same project, this is not possible.
You would need to create two separate project and migrate the findings to the other one using the REST-API.

### Make and Compile Messages
```bash
python manage.py makemessages -l de /tmp/myreporttemplate

# from within your template directory
django-admin compilemessages
```
