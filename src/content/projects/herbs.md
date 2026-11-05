---
title: HERBS
summary: Helm-Extended Resource Bundles for Services. A GitOps deployment framework (ArgoCD, CUE, Helm, Go) that lets 12 product teams declare intent and ship to any cell, with zero production outages caused by the deployment system.
period: 2025–2026
kind: internal
role: Senior Principal Architect, Palo Alto Networks
tags: [gitops, argocd, argo-workflows, kargo, cue, helm, go, kubernetes]
featured: true
order: 3
---

## The problem

- **Engineering:** each cell runs several kinds of clusters, split across infrastructure, data, and
  management planes, and each serves different workloads. Multiply that by three or four
  environments, with production spanning 10+ regions, and hand-placing workloads stops being an
  option. We needed a system that takes a declaration of intent, places workloads accordingly, and
  keeps adapting to day-2 operational realities as the fleet changes.
- **Business:** every product in the portfolio needed to ship the same way. A common deployment
  framework across the fleet beats a dozen teams each maintaining their own.
- **People:** by far the hardest part. Teams rarely give up control of their own deployment path
  willingly, so converging on one framework was as much an influence problem as an architecture one.

## The approach

**HERBS** stands for **H**elm-**E**xtended **R**esource **B**undles for **S**ervices.

It’s opinionated ArgoCD with a strong GitOps flavor, written in Go. A team describes what it wants
as a **bundle**, and the platform works out where and how it runs. Applications and their
infrastructure deploy uniformly through the same system, using primitives modeled on the Kubernetes
resource model so they feel familiar and compose predictably. Correctness and consistency are
enforced in CI, before anything reaches a cluster.

Over time we evolved HERBS beyond a team’s own cell. I led the design, and my team pressure-tested
and approved it. Bundles can now target **external services**: shared services we host on a
platform-infrastructure cell in the same geography. That lets a team deploy to services that live outside its cell without giving up
data residency. Argo Workflows was the first, and the same external-service target contract is being
adapted to Kargo.

## Winning adoption

Since people were the hard part, documentation was a first-class deliverable, not an afterthought.
Comprehensive docs gave teams a path to onboard themselves, and the agent-facing material was just as
critical: most engineers were working alongside coding agents, and those agents needed to understand
HERBS as well as the people did. So alongside the docs we shipped `llms.txt` files, agent skills, and
`CLAUDE.md`/`AGENTS.md` files bundled with HERBS itself.

I owned the architecture and the load-bearing decisions, and wrote and cleaned up most of the code
myself. I had a strong design and implementation partner on the team throughout, and building HERBS
together grew them into a co-owner of it.

## Outcome

- 12 teams deploy through HERBS today.
- 700+ version rollouts since launch.
- Zero production outages caused by the deployment system.
