---
title: Terraform runner on Cloud Build
summary: A minimal in-house Terraform automation platform (a primitive TACOS) modeled on Terraform Enterprise and built on Cloud Build, GCS, and GCP APIs, which laid down a Fortune 100 tech company’s Google Cloud foundations in a way that scaled.
period: 2018–2023
kind: consulting
role: Google Professional Services (via Run at Scale)
tags: [terraform, gcp, cloud-build, iac]
order: 8
---

While embedded with Google Professional Services, I worked with a Fortune 100 tech company that was
establishing its Google Cloud foundations. That meant a lot of Terraform, applied across a lot of
projects and teams, run consistently. Off-the-shelf **TACOS** (Terraform Automation and Collaboration
Software) existed, Terraform Enterprise among them, but the client didn’t want to buy one. They wanted
a minimal in-house solution instead.

So I built one, in primitive form, out of parts already on hand. Rather than invent a new model, I
borrowed the core primitives and APIs of Terraform Enterprise/Cloud (workspaces, runs, plans and
applies) and implemented just enough of them:

- **Cloud Build** ran Terraform plans and applies as pipelines.
- **GCS** held state and artifacts.
- **GCP APIs** wired together projects, permissions, and the rest of the plumbing.

It wasn’t fancy, and following a proven design kept it that way. It gave the client a consistent,
automated path for every infrastructure change, and it established their cloud foundations in a way
that scaled.

The same idea runs through my later work: one paved path for infrastructure changes, from this runner
to [sauce](/projects/pasta-and-sauce/) on Spacelift and [HERBS](/projects/herbs/) on ArgoCD.
