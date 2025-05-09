---
sidebar_position: 20
title: Permissions
---
PeCoReT comes with a permission system. Users can be part of groups, that enables the user to perform specific actions.
Also, users can be part of projects and have a role in this project.

:::info
The super admin user is not intended for actual use, but only for configuring the application.
:::


## Groups
The application categorizes users into specific groups, each representing a distinct set of responsibilities and permissions.
Here are the available groups:

**Management:**   
*Management* is a higher privileged group which has permissions to create projects.
Users of this group by default have the Owner role in projects they created, and thus full control over the project.
The management role is allowed to create companies.

**Pentesters:**   
Users of this group can become members of projects.
Depending on their role in the project, they are able to change objects belonging to the project.

**Customers:**   
Users in the "Customers" group are related to a company. They have read and write access to data related to the company.
However, they cannot view all projects and project-related data without being explicitly added to the project.


## Project Roles

**Owner:**   
Users with the role *Owner* have full control over the project and objects belonging to the project.

**Contributor:**   
*Contributors* are allowed to change some objects of the project, like creating new assets, change project status and more.

**Project Leader:**   
*Project Leaders* have the same permissions as *Contributors*.
The different is just to track the responsible people of the project.

**Read Only:**   
*Read Only* users have read only permission to the project and objects belonging to the project.
