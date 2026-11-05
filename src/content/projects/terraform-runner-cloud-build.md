---
title: Terraform runner on Cloud Build
summary: A home-grown Terraform automation platform (a primitive TACOS) built on Cloud Build, GCS, and GCP APIs, which laid down a Fortune 100 tech company’s Google Cloud foundations in a way that scaled.
period: 2018–2023
kind: consulting
role: Google Professional Services (via Run at Scale)
tags: [terraform, gcp, cloud-build, iac]
order: 8
---

While embedded with Google Professional Services, I worked with a Fortune 100 tech company that was
establishing its Google Cloud foundations. That meant a lot of Terraform, applied across a lot of
projects and teams, and at the time there was no off-the-shelf **TACOS** (Terraform Automation and
Collaboration Software) that fit.

So I built one, in primitive form, out of parts already on hand:

- **Cloud Build** ran Terraform plans and applies as pipelines.
- **GCS** held state and artifacts.
- **GCP APIs** wired together projects, permissions, and the rest of the plumbing.

It wasn’t fancy. Purpose-built tools like Spacelift and Terraform Cloud have since made this a
solved problem. But it gave the client a consistent, automated path for every infrastructure change,
and it established their cloud foundations in a way that scaled.

The same idea runs through my later work: one paved path for infrastructure changes, from this runner
to [sauce](/projects/pasta-and-sauce/) on Spacelift and [HERBS](/projects/herbs/) on ArgoCD.
