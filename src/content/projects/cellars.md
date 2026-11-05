---
title: CELLARS
summary: Cellular Environments Layered for LocAle Regulated Sovereignty. A cellular infrastructure model where each geo-bound cell inherits its compliance controls from the platform, turning a new sovereign region from months of bespoke work into weeks.
period: 2025–2026
kind: internal
role: Senior Principal Architect, Palo Alto Networks
tags: [platform, sovereignty, opentofu, multi-cloud]
featured: true
order: 2
---

## The problem

Regulated and government customers need guarantees that their data and compute stay inside national
borders. The easy trap is letting foundations drift between products: every team is expected to
build on common internal infrastructure constructs, but those constructs are underinvested in, so
each team ends up building its own foundation on top of them. Before long there’s no common
substrate, and every product is trying to achieve compliance in a different way.

## The approach

**CELLARS** stands for **C**ellular **E**nvironments **L**ayered for **L**oc**A**le **R**egulated
**S**overeignty.

I designed CELLARS around one primitive, the **cell**: a secure, geo-bound unit of infrastructure
confined to a single country. Each team gets its own cells, one per geography and environment, but
every cell is stamped from the same model. Compliance controls are inherited from the platform rather
than rebuilt by each team, so a new region is mostly a matter of configuration instead of a code fork.

A few deliberate choices made it work:

- **Infrastructure as code, structured for many teams.** Infrastructure is layered so each team owns
  its slice of a cell, and changes only touch what they need to.
- **Declarative everything.** Teams declare what they need, down to the network layer through the
  [network-as-code providers](/projects/network-as-code-providers/), rather than filing tickets.
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
