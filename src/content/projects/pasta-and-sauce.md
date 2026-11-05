---
title: PASTA and sauce
summary: Protect AI's tenant automation. PASTA provisioned dedicated single-tenant AWS infrastructure; sauce added tenant provisioning on shared clusters for 100+ customers.
period: 2024–2025
kind: internal
role: Staff Platform Engineer, Protect AI
tags: [platform, aws, argocd, opentofu, spacelift]
order: 6
---

**PASTA** (Protect AI Single Tenant Automation) provisioned dedicated single-tenant infrastructure in
AWS. It was the precursor to [CELLARS](/projects/cellars/) and [HERBS](/projects/herbs/) at Palo Alto
Networks.

**sauce** (not an acronym, it just goes on PASTA) built on that foundation for tenant-level
provisioning on shared clusters. Each customer was described in a single, common YAML file, and that
one interface drove both provisioning systems underneath: ArgoCD for workloads and Spacelift/OpenTofu
for infrastructure. It supported 100+ customers across trials and production and let the
forward-deployed team provision tenants on their own.
