---
title: CELLARS
summary: Cellular Environments Layered for LocAle Regulated Sovereignty. A cellular infrastructure model where each geo-bound cell inherits its compliance controls from the platform, turning a new sovereign region from months of bespoke work into weeks.
period: 2025–2026
kind: internal
role: Senior Principal Architect, Palo Alto Networks
tags: [platform, sovereignty, opentofu, terragrunt, gitlab-ci, gcp, aws]
featured: true
order: 2
---

## The problem

Regulated and government customers need guarantees that their data and compute stay inside national
borders. The easy trap is letting each big deal spin up its own one-off region. Do that a few times and
you own a pile of snowflakes, each with its own compliance story.

## The approach

**CELLARS** stands for **C**ellular **E**nvironments **L**ayered for **L**oc**A**le **R**egulated
**S**overeignty.

I designed CELLARS around one primitive, the **cell**: a secure, geo-bound unit of infrastructure
confined to a single country. Compliance controls are inherited from the platform rather than rebuilt
per region, so a new region is mostly a matter of configuration instead of a code fork.

A few deliberate choices made it work:

- **OpenTofu and Terragrunt, structured for many teams.** Infrastructure is layered so each team
  owns its slice of a cell, across multiple clouds, with data residency built in. Under the hood
  that’s more than 1,000 Terraform states, chained together and run selectively in CI so a change
  only touches what it needs to.
- **Declarative everything.** Product teams describe their infrastructure using the Kubernetes resource
  model (Config Connector), and the network layer is declared through the
  [network-as-code providers](/projects/network-as-code-providers/).
- **Sequencing to de-risk, not to chase revenue.** The first cell was a proving ground, built to
  validate the model fast, and expansion went first to the regions whose teams could move quickest.
- **Making sovereignty a platform capability.** Working with compliance, we turned ambiguous,
  non-uniform legal requirements into a reusable control set instead of a per-deal negotiation.

## Outcome

- Standing up a new country went from a months-long bespoke project to a repeatable cell measured in
  weeks.
- Multiple sovereign regions in production, with the expansion pace set by demand rather than engineering.
- I grew the core team from four to seven engineers and built CELLARS to outlast me: four of them
  co-own it today, which let me step back into an advisory role.

CELLARS grew out of [PASTA](/projects/pasta-and-sauce/), the single-tenant automation I built at
Protect AI. Workloads ship into cells through [HERBS](/projects/herbs/).
