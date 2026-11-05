---
title: HERBS
summary: Helm-Extended Resource Bundles for Services. A GitOps deployment framework (ArgoCD, CUE, Helm) giving 12 product teams one way to ship to any cell, with zero production outages on platform-owned systems.
period: 2025–2026
kind: internal
role: Senior Principal Architect, Palo Alto Networks
tags: [gitops, argocd, cue, helm, kubernetes]
featured: true
order: 3
---

## The problem

Twelve product teams were each solving deployment orchestration on their own: placement across
clusters, ordering, versioning, and compliance configuration. It was hard on three fronts:

- **Engineering:** multi-cluster rollouts with strict ordering across different compliance regimes
  are unforgiving. One bad rollout has a portfolio-wide blast radius.
- **Business:** twelve teams reinventing the same glue meant months of duplicated, inconsistent work.
- **People:** the hardest part. Teams rarely give up control of their own deployment path willingly,
  so converging on one framework was as much an influence problem as an architecture one.

## The approach

**HERBS** stands for **H**elm-**E**xtended **R**esource **B**undles for **S**ervices.

It’s opinionated ArgoCD with a strong GitOps flavor. A team describes its service as a **bundle**,
and the platform handles placement, ordering, and versioning. The key design choice was treating
applications and their infrastructure the same way: both deploy uniformly through one system.

- **Kubernetes-inspired primitives.** Bundles are declared in configuration modeled on the
  Kubernetes resource model, so they feel familiar and compose predictably.
- **Rendered values files, checked in.** CI processes render the final Helm values files (using CUE
  templating) and commit them, so what’s in git is exactly what runs. Correctness and consistency are
  enforced in CI, before ArgoCD ever sees a change.
- **Blast radius up front.** Pre-deployment impact analysis shows what every change will touch
  before it ships.

I owned the architecture and the load-bearing decisions, and deliberately had a teammate write most of
the initial implementation under my guidance to grow him into an owner. It worked: teammates now write
their own architecture decision records for HERBS and author the majority of its commits.

## Outcome

- 12 teams deploy through HERBS today.
- 700+ version rollouts since launch.
- Zero production outages on platform-owned systems since launch.
- A reusable core that replaces the bespoke deployment glue each team would otherwise maintain.
