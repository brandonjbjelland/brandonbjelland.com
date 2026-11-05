---
title: Substratus (now KubeAI)
summary: Co-founding engineer on an open-source, Kubernetes-native platform for fine-tuning and serving ML models. The project later evolved into KubeAI.
period: 2023
kind: open-source
role: Co-founding engineer
tags: [mlops, kubernetes, go, aws, gcp, open-source]
links:
  - label: Substratus on GitHub
    href: https://github.com/substratusai/runbooks
  - label: KubeAI
    href: https://www.kubeai.org/
order: 11
---

Substratus treated ML building blocks (models, datasets, notebooks, and servers) as first-class
Kubernetes resources, so teams could fine-tune and serve LLMs with the same declarative workflows
they used for the rest of their infrastructure.

I joined as a co-founding engineer in mid-2023. My work focused on making it run beyond one cloud
and making it shippable:

- **Multi-cloud.** Designed a cloud interface for the platform’s storage and identity needs, with a
  GCS implementation and then AWS support: mapping Kubernetes service accounts to IAM, standing up and
  tearing down all of Substratus’s baseline infrastructure on AWS, and running workloads on
  Karpenter-provisioned nodes in private subnets.
- **Releases.** Set up goreleaser, release workflows, and multi-platform image builds, and cut the
  early alpha releases.
- **Contributor experience.** Tuned CI so outside contributors’ pull requests could pass, and wrote
  docs for the project site.

## What happened next

I moved on after a short stint, and the team kept going. Substratus evolved into
[KubeAI](https://www.kubeai.org/), an AI inference operator for Kubernetes that serves LLMs,
embeddings, and speech-to-text models, with 1,000+ stars on GitHub. I didn’t build KubeAI itself, but
it’s fun to see where the early work led.
