---
title: "Terminology"
description: "Introduce common terms used around PeCoReT"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "user-guide"
weight: 10
toc: true
---

Let's jump into the terminology used across *PeCoReT*.

- **Report Templates:** Django Templates used to built your report documents.
- **Report Documents:** *instances* of the rendered templates providing downloadable documents like PDF, CSV files.
- **Vulnerability:** Security related weakness found during a project (e.g., an SQL-Injection).
- **Finding:** Instance of a vulnerability. (e.g. a SQL-Injection in the username field).
- **Vulnerability templates:** a predefined set of vulnerabilities, that are used across projects.
  Useful to prevent copy&pasting the same descriptions and recommendations all over again.
- **Advisories:** findings in third party software that you may have CVE-IDs.
  You can share advisories with their product vendors.
- **Company:** Usually, your customer that ordered the pentest.
