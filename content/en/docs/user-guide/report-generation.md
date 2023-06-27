---
title: "Report Generation"
description: "User Guide - Report Generation in PeCoReT"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "user-guide"
weight: 40
toc: true
---

Reports can have different *variants*.

The following table shows the available variants:

| Name               | Description                        |
|--------------------|------------------------------------|
| Pentest PDF Report | PDF file containing the PDF report |
| Vulnerability CSV  | A CSV file with all findings       |

A report must have a template selected which is used to render the documents.

Once you have created the report, you can configure it, writing the executive summary, ... .

![](/attachments/docs/report-detail-view.png)

## Export Single Findings

You can also export single finding details to a PDF report.
This export will use the company-wide configured `report_template` setting.

Your reports however can select any of the active report templates configured.

## Export Advisories

TBD
