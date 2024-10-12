---
sidebar_position: 10
title: Projects
---

A **Project** acts as a central container that organizes and manages all the assets, reports, and findings related to a specific assessment or penetration test.
Think of a project as a dedicated workspace where pentesters collaborate, track progress, and gather all information related to a specific security engagement or audit.

## Key Features

- **Assessment or Pentest Container**: A project holds everything needed for a security assessment, such as associated assets, findings, and reports.
- **Visibility and Access Control**: Projects can be visible to:
  - All pentesters in the system (open to everyone).
  - Only those users or team members who are explicitly given access (*Members only*).
- **Multiple Assets**: Within each project, you can associate multiple **assets** (e.g., hosts, applications, etc.) that define the scope of what is being assessed.
- **Reports and Findings**: Every project can have one or more **reports** and **findings**.
- **Defining the Scope**: A project helps to clearly define the **scope** of the assessment, outlining which assets are included and the nature of the testing being performed.

### Project Roles and Access

- **Members Only**: Only users who are granted access to a project can view and interact with it.
- **Pentester Access**: A project can be visible to all pentesters.

The management settings of a project can only be changed by a member of the `Management` group.
External customers can be granted access to view specific projects, allowing them to monitor the progress and view early-stage findings.
This is particularly useful for transparency during an engagement.

### Use Cases for Projects

1. **Internal Pentest Collaboration**: Projects facilitate internal collaboration by allowing pentesters to manage all aspects of an assessment in one place. Team members can see findings as they are uncovered, add notes, and work together on generating reports.
  
2. **Client-Facing Projects**: In cases where clients need visibility, projects allow customers to see progress in real time. This includes access to early-stage findings, so they can take immediate action on critical vulnerabilities as they are discovered.


### Example Workflow
1. **Create a Project**: Start by defining the project scope and inviting team members or external clients. This must be done by a user of the `Management` group.
2. **Add Assets**: Specify all the assets that are in-scope for the assessment (e.g., create a Web Application that should be tested).
3. **Conduct Testing**: Pentesters begin assessing the assets within the project. As vulnerabilities are found, they are logged as findings.
4. **Notes**: If required, you can add notes to the project using the `Notes` tab.
5. **Generate Reports**: At the end of the assessment, generate a final report summarizing all findings and resolutions.
