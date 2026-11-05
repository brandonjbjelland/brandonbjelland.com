---
title: Claude Code in the merge request loop
summary: Reusable CI/CD components that put Claude Code to work on every merge request (review, conflict resolution, CI failure fixes, changelogs, and blast-radius analysis), rolled out group-wide.
period: 2025–2026
kind: internal
role: Palo Alto Networks
tags: [agentic, claude-code, ci-cd, gitlab]
featured: true
order: 5
---

I was one of the heaviest AI users in my org. The interesting question wasn’t how much faster that made
me, but how to turn that fluency into something the whole team inherits.

So I built reusable CI/CD components that bring Claude Code into everyday merge request work:

- Automated merge request review
- Automatic merge conflict resolution
- Claude interactions driven by MR comments
- Automatic CI failure resolution
- Changelog updates
- Plan and blast-radius analysis for infrastructure changes

They run without standing API keys and were rolled out across the group, raising the floor on both
safety and velocity for everyone rather than just for me.

This is a small, concrete piece of what I want to build next: software factories, where agents and
people share one path from idea to production.
