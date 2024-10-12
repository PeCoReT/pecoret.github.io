---
sidebar_position: 50
title: Advisories
---

The *Advisories* application empowers users to submit security advisories for third-party applications, employing a robust responsible disclosure process.
This section provides a guide on creating, editing, and managing advisories in *PeCoReT*.

*PeCoReT* facilitates the responsible disclosure process, offering a platform for security researchers to report vulnerabilities in third-party applications.
This process ensures that reported issues are handled with confidentiality and allows for their thorough investigation and resolution.

## Creating Advisories

Advisories can be created via the `Advisories` menu tab.

![advisory create ui](/img/attachments/advisory-create-ui.png)

Advisories will have an advisory identifier which looks similar to the format of CVE-IDs. You can control the prefix of the advisory through the settings.

The advisory id format may look like:
```
pecoret-2022-0010
```

A date with the planned date of disclosing the advisory details is calculated based on the server’s settings. The default date can be changed after creation.


## Advisory Status
Advisories within the system can take on different statuses, indicating their position in the resolution process.

* **Not Disclosed:** The advisory has been submitted, reviewed or potentially validated, but the information about the advisory has not been shared publicly.
The responsible disclosure process is ongoing, and stakeholders are actively working towards a resolution with the affected party.
* **Disclosed:** This status signifies that the advisory and associated vulnerability information have been made public.

## Advisory Visibility
Advisories can be accessed by all users of the `Pentester` group.


## Vulnerability Status
Advisories are also tracking the status of the actual vulnerability.

* **Fixed:** This status indicates that the vulnerability has been thoroughly investigated and successfully addressed by the vendor.
* **Won't Fix:** The *Won't Fix* status signifies that the vendor has reviewed the reported vulnerability but, for specific reasons, has decided not to address or remediate it.
* **Unfixed:** This status indicates that the reported vulnerability is still pending investigation or resolution. This is the default during the advisory creation process.


## Proof of Concepts
Advisory proofs, detailing the specifics of a security vulnerability, are written in Markdown.
Images can be attached and included in the proof.

## Advisories from Project Findings
PeCoReT seamlessly integrates with project findings, allowing the creation of advisories directly from identified security issues within projects.
This streamlines the workflow, ensuring a smooth transition from vulnerability discovery to responsible disclosure.

![advsiory from finding](/img/attachments/advisory-from-finding.png)


## Share Tokens
You can generate share tokens that can be shared with a vendor using a link.
Share tokens can be configured with an expiry date.
If a vendor visits the link, they can download the current PDF report of the advisory.


## Advisory  Dashboard
The *Advisory Management* group can access a dashboard containing relevant statistics related to the submitted advisories.
This includes key metrics, such as the number of advisories received, the status of ongoing processes, and other relevant insights, providing an overview of the group's activities.

![advisory dashboard](/img/attachments/advisory-dashboard.png)
