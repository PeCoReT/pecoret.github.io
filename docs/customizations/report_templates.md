---
title: Report Templates
---

In this documentation, we will explain how to customize report templates using Python packages, HTML, and CSS.
The report templates are stored in the `server/extensions/report_templates` directory.

To create a new report template, you simply need to create a new subdirectory with the desired template name.
Please note that the template name should only consist of letters, numbers, and underscores (no special characters).

## Create a Report Template
To create a report template, you need to create a `plugin.py` file in the template's directory.
This file should contain a class named `ReportPlugin` that inherits from the `pecoret.reporting.report_plugin.BaseReportPlugin` class.
The `ReportPlugin` class allows you to customize the existing templates or create new ones.

Here's an example of how to customize the color scheme used by the charts of the `default_template` report template:

```python title=plugin.py
from extensions.report_templates.default_template.plugin import ReportPlugin as BasePlugin


class ReportPlugin(BasePlugin):
    # inherit from default_template
    plugin_name = 'default_template'

    # change the colors of the default_template
    SEVERITY_COLORS = {
        'critical': '#7a3e7d',
        'high': '#d13c0f',
        'medium': '#e8971e',
        'low': '#2075f5',
        'informational': '#059D1D',
        'fixed': ' #43616f'
    }

```

## Examples

### Overwrite CSS

In the first step, we must append our custom CSS file to the list of CSS files used by the `PDFReportGenerator`.

```python title=plugin.py
from pathlib import Path
from pecoret.reporting import generators
from ..default_template.plugin import ReportPlugin as BasePlugin


class ReportPlugin(BasePlugin):
    # inherit from default_template
    plugin_name = 'default_template'

    def on_preprocess(self, generator, **kwargs):
        super().on_preprocess(generator, **kwargs)
        if isinstance(generator, generators.PDFReportGenerator):
            generator.css_files.append(Path(self.get_report_templates_directory() / 'test/templates/main.css'))

```

overwrite existing styles with a custom CSS file:

```css title=templates/main.css
:root {
    --color-critical: #20bd98;
}
```

## Installation / Usage
To finally use the template a super admin user needs to create the template using the REST-API or web interface.

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
