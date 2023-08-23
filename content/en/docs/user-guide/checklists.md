---
title: "Using Checklists"
description: "User Guide - Checklists in PeCoReT"
lead: ""
date: 2023-06-21
lastmod: 2023-06-21
draft: false
images: []
menu:
  docs:
    parent: "user-guide"
weight: 270
toc: true
---


Checklists are used to track the project of the pentest for the assets.

A checklist - in the background - consists of a *list*, *categories* and *items*.

![checklist overview](/attachments/docs/checklist-overview.png)

The screenshot above has a small *Web Application Checklist* enabled, which only consists of the *Password Reset
Function* category.
This category contains three *items* - "common-flaws", "password reset poisoning" and "reset-token-leak-referrer".
Items can contain a description written in Markdown.
However, a category does not have to contain items, but then it cannot be checked off in the frontend.

A checklist including its categories and items can be deleted by clicking the red button.
If a new checklist is to be activated for an asset, the button with the plus symbol can be used.
