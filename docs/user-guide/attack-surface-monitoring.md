---
sidebar_position: 80
title: Attack Surface Monitoring
---

The Attack Surface Monitoring feature is a powerful tool designed to assist pentesters in tracking and monitoring various targets, programs, tags, and findings
It allows users insights into the attack surface of their clients' systems.

:::caution
This feature is currently a work in progress and should not be used in production environments.
Expect breaking changes!
:::

## Object Model Overview

Before diving into the scanning feature, it's important to understand the key objects in the system and their relationships.

A **program** is a logical container for managing related entities. Each program can include:

- **Targets**: Assets such as domains, IPs, etc.
- **Services**: Discovered service endpoints.
- **URLs**: Web services, storing requests and responses.
- **Scope**: Definitions that determine which assets are considered in-scope for scanning.
- **Scan Findings**: Results produced by scanners (may include false positives as they are intended to be populated by automated scanners).
- **Findings**: Verified and client-facing results, written in Markdown. Can be exported as PDF document.

## Scanning Overview

**Scanners** are external or custom tools that can be integrated into the platform. They are not includes in PeCoReT.

Scanners are responsible for:

- Discovering and updating data such as targets, services or URLs.
- Producing **scan findings** — raw scan results.
- Consuming scan tasks from the scheduler.
- Respecting global or program-specific scope definitions when applicable.

Findings from scanners are processed and can later be reviewed and promoted to finalized client-facing **findings**.

Scanners can emit _scan events_ such as `disocvery.target`.
Custom events can be configured by admin users and can trigger other scan templates.
When receiving the built in `discovery` events, PeCoReT decides of the data is part of an existing item and updates it.
Otherwise a new item is created based on the provided data.

Each scanner can filter scan tasks to scan templates it can handle.

### Scan Task Scheduler

PeCoReT includes a **scheduler** that handles scan task generation based on priorities, cooldown thresholds and template ratelimiting.
(e.g. run full port scan template only once a day, or only scan target A only once a day using the full port scan template).

This allows for automated and recurring/continuous scans without manual intervention.

The **scheduler** task is not enabled by default and must be added to the `django-q` scheduled task using the admin panel.

### Scan Templates

Admins can create and manage **scan templates**, which define scanning logic. Each template includes:

- The type of object to scan (e.g., target, URL).
- The scan type (e.g., port scan, tech detection).
- Configuration parameters passed to the scanner.

Templates are used by the scheduler when determining which scans to run.

## Scanner Creation and Authentication

### Scanner Creation

Scanners are responsible for executing scans. Only an admin can create scanners. Here’s the process:

1. **Navigate to Admin Panel**: Log in as an admin to access the admin interface.
2. **Create Scanner**: Fill out the required details.
3. **Generate Token**: After creating the scanner, a unique token is generated. Make note of the token!

**Note: The scanner token cannot be refreshed in the UI or API. You must delete the scanner to refresh the token for now!**

### Scanner Authentication

Each scanner must authenticate itself using the token generated during its creation. The scanner uses the following HTTP header for each request:

```bash
X-Scanner-Auth: <GENERATED_TOKEN>
```

## Search and Querying

PeCoReT includes a query system similar to FOFA, Censys, or Shodan (it is built around django-ql).
Users can:

- Filter assets based on attributes (e.g., technologies in use).
- Save queries for reuse.
- Perform full-text and structured searches.

For example, retrieve all URLs running WordPress, or all services with port 80:

```
port_number==80
```

