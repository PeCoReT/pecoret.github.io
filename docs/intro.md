---
sidebar_position: 1
---

# Introduction

PeCoReT is an open source pentest management, collaboration and reporting tool.

:::caution

PeCoReT is in an early stage and not considered stable or production ready!
:::

## What is PeCoReT
PeCoReT allows pentesters to focus on testing instead of writing the report.
It can be customized and once you set up your own report you can create reports easily.

### Terminology
PeCoReT consists of a backend server with a REST-API.
It can be used headless and standalone.
If you want to use a web-frontend, there is one available [here](/docs/extensions/web-frontend).

- **Report Templates:** Django Templates used to built your report documents.
- **Report Documents:** *instances* of the rendered templates providing downloadable documents like PDF, CSV files.
- **Vulnerability:** Security related weakness found during a project (e.g., an SQL-Injection).
- **Finding:** Instance of a vulnerability. (e.g. a SQL-Injection in the username field).
- **Vulnerability templates:** a predefined set of vulnerabilities, that are used across projects.
  Useful to prevent copy&pasting the same descriptions and recommendations all over again.


## Why another reporting tool
To Be Done!