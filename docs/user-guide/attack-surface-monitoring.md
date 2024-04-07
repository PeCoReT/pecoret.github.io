---
sidebar_position: 80
title: Attack Surface Monitoring
---

The Attack Surface Monitoring feature is a powerful tool designed to assist pentesters in tracking and monitoring various targets, programs, tags, and findings
It allows users insights into the attack surface of their clients' systems.

:::caution
This feature is currently a work in progress and should not be used in production environments.
:::

## Access

The Attack Surface Monitoring feature is accessible only to users belonging to the `pentesters` group.

## Programs

Programs serve as a way to group targets. For instance, a program can be named after a customer, and all relevant targets can be grouped under this program.
Programs may include a description to provide additional context.

## Targets
Targets represent the entities being tracked and monitored for findings.
Each target can have associated tags and technologies.
The name of the target can be the URL or hostname of the target.
IP addresses are also tracked for targets.

## Tags
Tags can be assigned to targets for better organization and categorization.
They provide a flexible way to classify targets based on various criteria.

## Findings
Findings are created for targets and represent discovered vulnerabilities or issues.
Each finding has a name and can include additional details about the vulnerability or issue.
They can be created manually through the web interface or in automated way using the scanner.


## Automated Scan API Endpoints

:::info
The automated scan API endpoints are currently a work in progress and are not available at this time. They will be made accessible in future updates.
:::

