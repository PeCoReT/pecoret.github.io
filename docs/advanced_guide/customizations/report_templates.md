---
sidebar_position: 1
---

# Custom Report Templates
This part is, personally thinking, the most difficult and time-consuming part in making PeCoReT your own.

## Directory Structure
All customizations of PeCoReT can be deployed using python packages.
An example directory structure of such a package is shown below.

```
my_customizations
|---locale
|---report_templates
|---templates
|---vulnerability_templates
|   |---broken-access-control
|   |---...
|   __init__.py
```

You can deploy multiple templates using one python package and thus share code between parts of the templates.


## Styles
The report generator searches for a `scss/main.scss` file.
It is compiled and included by default.


## Installation / Usage
To finally use the template you need to add the file into the `ADDITIONAL_PACKAGES` setting.
An admin account needs to enable the template through the API or web interface.

