---
title: "Permissions"
description: "Describe the permissions used in PeCoReT"
lead: ""
date: 2023-06-15
lastmod: 2023-06-15
draft: false
images: []
menu:
  docs:
    parent: "user-guide"
weight: 20
toc: true
---

PeCoReT comes with a permission system.
Users can be part of groups, that enables the user to perform specific actions.
Also users can be part of projects and have a role in this project.

## Groups

**Management:**   
*Management* is a higher privileged group which has permissions to create projects.
Users of this group by default have the *Owner* role in projects they created, and thus full control over the project.
The management role is allowed to change company information.

**Pentesters:**   
*Pentesters* can create [Advisories](/docs/user_guide/advisories). Users of this group can become members of projects.
Depending on their role in the project, they are able to change objects belonging to the project.

**Customers:**   
To Be Done / Not yet implemented

**Vendors:**   
Vendors are low privileged users. They can be invited by the [Advisory Management](/docs/advisories#advisory-management) and are able to get access to advisories, that were shared with them.

**Advisory Management:**   
Advisory Management is allowed to see all submitted advisories.
Draft advisories are not included in those advisories.
The users of the group are allowed to manage all submitted advisories.

## Roles

**Owner:**   
Users with the role *Owner* have full control over the project and objects belonging to the project.

**Contributor:**   
*Contributors* are allowed to change some objects of the project, like creating new assets, change project status and more.

**Project Leader:**   
*Project Leaders* have the same permissions as *Contributors*. The different is just to track the responsible people of the project.

**Read Only:**   
*Read Only* users have read only permission to the project and objects belonging to the project.

**Customer:**   
To Be Done
