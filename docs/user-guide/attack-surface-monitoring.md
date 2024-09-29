---
sidebar_position: 80
title: Attack Surface Monitoring
---

The Attack Surface Monitoring feature is a powerful tool designed to assist pentesters in tracking and monitoring various targets, programs, tags, and findings
It allows users insights into the attack surface of their clients' systems.

:::caution
This feature is currently a work in progress and should not be used in production environments.
:::


## Object Model Overview

Before diving into the scanning feature, it's important to understand the key objects in the system and their relationships:

- **Host**: Represents an IP address in the system. Each host can have multiple ports (e.g., 80, 443) that can be scanned for services.
  
- **Port**: Represents a network port on a host. It contains details like the port number (e.g., 80, 443) and is often linked to services running on that port.

- **Service**: Services represent applications or protocols running on a port (e.g., HTTP, HTTPS, SSH). Each port can have one or more services.

- **Target**: Represents either domains or subdomains and can be linked to a host. A target may be unresolved initially, but once resolved, it's tied to a host.

- **URL**: URLs are linked to services running on a port, typically for web-based services (e.g., `http://example.com`). Each service running on an HTTP-based port may have multiple URLs.



## Scanning Overview

The scanning feature is a core part of the system. It allows users to scan various objects (e.g., Hosts, Ports, Services) to discover information such as open ports, running services, web URLs, certificates, etc.

### Key Features:
- **Multiple Scan Types**: Different types of scans can target different objects. For example, a port scan targets Hosts, while a service discovery scan targets Ports.
- **Real-time Status Tracking**: Each scan tracks its current status (pending, running, completed, failed).

How to configure the scanning feature is documented in the [settings](/docs/admin_guide/configuration.md) page.



## Scanner Creation and Authentication

### Scanner Creation

Scanners are responsible for executing scans. Only an admin can create scanners. Here’s the process:

1. **Navigate to Admin Panel**: Log in as an admin to access the admin interface.
2. **Create Scanner**: Fill out the required details, including the scanner's name.
3. **Generate Token**: After creating the scanner, a unique token is generated. Make note of the token!

**Note: The scanner token cannot be refreshed in the UI or API. You must delete the scanner to refresh the token for now!**

### Scanner Authentication

Each scanner must authenticate itself using the token generated during its creation. The scanner uses the following HTTP header for each request:

```bash
X-Scanner-Auth: <GENERATED_TOKEN>
```

## Creating and Running Scans
Users can queue scans for various objects, such as Hosts or Ports, from the system’s interface.
When a scan is created, it ensures that the scan type is correctly matched to the object type (e.g., a Port Scan should only run on Hosts).

### Scan Types

Each scan type is pre-configured by the admin and defines:

- Target Type: What type of object the scan runs on (e.g., Hosts, Ports)
- Name: A name for the scan type (e.g. `port-scan-tcp-top-1000` or `service-discovery`)


## DjangoQL Search
The system includes **DjangoQL** for querying and searching services similar to Shodan or Fofa.
This lets users create advanced queries to filter results.

### Example Queries:

To only list services with port 80 available:
```
port.number == 80
```


## Continues Scanning

A management command exists which performs continues scanning by fetching data from the PeCoReT which were not scanned lately.
You can either create a scheduled `django-q2` task or a cronjob.