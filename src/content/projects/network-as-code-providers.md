---
title: Network-as-code OpenTofu providers
summary: Internal OpenTofu/Terraform providers that turned corporate networking, firewall, and load balancer changes from manual tickets and click-ops into self-service code for every team.
period: 2025–2026
kind: internal
role: Palo Alto Networks
tags: [opentofu, terraform, go, platform]
featured: true
order: 4
---

## The problem

Every product team needed corporate network resources (networks, firewall rules, load balancers)
before it could ship, and provisioning them was a manual process. That made networking a bottleneck
on every team’s path to production, and not just in my group.

## What I built

I built OpenTofu/Terraform providers that wrap the underlying provisioning APIs and give teams one consistent, declarative way to manage their own networking,
firewall, and load balancer changes. I ran them as a first-class internal product: regular releases,
bug fixes, documentation, and support for anyone who adopted them.

## Outcome

- 12 product teams self-serve their network changes as code, reviewed and versioned like everything else.
- Network provisioning stopped being a deployment bottleneck.
- Teams outside my group adopted the providers, making network-as-code the emerging standard across engineering.

It was a familiar move for me: I’d done the same thing for the community years earlier with the
[terraform-aws-modules](/projects/terraform-aws-modules/).
