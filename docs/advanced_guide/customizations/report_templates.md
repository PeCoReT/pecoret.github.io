---
sidebar_position: 1
---

# Custom Report Templates
This part is, personally thinking, the most difficult and time-consuming part in making *PeCoReT* your own.
This page tries to help you to get familiar implementing custom report templates.
Once done, *PeCoReT* can use the template for various report generation tasks.

## Directory Structure
All customizations of *PeCoReT* can be deployed using python packages.
This allows the maximum of flexibility, but on the other side, requires some manual work to be done.
An example directory structure of such a package is shown below.

```
my_customizations
|---locale
|---report_templates
	__init__.py
	|--- default_template
		__init__.py
		pentest_pdf.py
		...
	|--- another_template
		|---...
|---templates
```

You can deploy multiple templates using one python package and thus share code between parts of the templates.


## Styles
The report generator searches for a `scss/main.scss` file.
It is compiled and included by default.


## Installation / Usage
To finally use the template you need to add the file into the `ADDITIONAL_PACKAGES` setting.
An admin account needs to enable the template through the API or web interface.


## Create a new Report Template
First of all, you need to create the directory structure, mentioned above.

The name of your template is the directory name in the `report_templates` directory.
In the example above two templates are included:
- default_template
- another_template

Inside your template directory, the following files must be present:

- **advisory_export.py**:   
Used to export advisory details as PDF file.
- **advisory_export_markdown.py**:   
Used to export advisory details as markdown file (e.g. to publish details on a blog or website)
- **csv.py**:
Used to export project findings as CSV file.
- **finding_export.py**:
Export a single finding as PDF file.
- **pentest_pdf.py**:
Export a PDF report of the project.

### Mixins
*PeCoReT* comes with a set of classes that implement some basic methods required to make your template work.

A really basic example of the *finding_export* variant of the `default_template`:

```python
from pecoret.core.reporting.mixins.pdf import PDFFindingExportMixin  
  
  
class Report(PDFFindingExportMixin):  
    pass
```

The files **must** implement the `Report` class.

