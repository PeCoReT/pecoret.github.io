---
sidebar_position: 20
---

# Advisories
Advisories are findings that belong to a third party application.
They can be exported to PDF or Markdown files and may have CVE-IDs assigned.

The `Inbox` is just available to users of the `Advisory Management` group.

If you create an advisory, the advisory will be marked as a *draft* and is only available to you.
If you remove the *draft* flag from the advisory, the advisory will be available in the `Inbox` of the *advisory management* group for further processing.

The advisories can now be processed by the *advisory management* and if the advisory is finalized, it can be shared with the vendor of the affected product.

Advisories will have an advisory identifier which looks similar to the format of CVE-IDs.
You can control the prefix of the advisory through the [settings](/docs/getting-started/configuration).

The advisory id format may look like:

```
pecoret-2022-0010
```

A date with the planned date of disclosing the advisory details is calculated based on the server's settings. The default date can be changed after creation.
