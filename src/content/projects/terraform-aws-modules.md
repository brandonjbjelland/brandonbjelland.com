---
title: terraform-aws-eks and terraform-aws-alb
summary: Original author of the community Terraform modules for EKS and ALB on AWS, which have since passed 250M combined downloads.
period: 2017–2019
kind: open-source
role: Original author and early maintainer
tags: [terraform, aws, eks, open-source]
links:
  - label: terraform-aws-eks
    href: https://github.com/terraform-aws-modules/terraform-aws-eks
  - label: terraform-aws-alb
    href: https://github.com/terraform-aws-modules/terraform-aws-alb
featured: true
order: 1
---

When infrastructure as code was still new, there were few trusted, reusable building blocks for it.
I wrote and maintained the early versions of `terraform-aws-eks` and `terraform-aws-alb` under the
`terraform-aws-modules` organization, and built them to a high bar from day one: tests, linting, and
real documentation.

They became the default community modules for provisioning EKS and ALB on AWS:

- **terraform-aws-eks**: ~193M all-time registry downloads, 5,000+ GitHub stars
- **terraform-aws-alb**: ~61M all-time registry downloads

I stepped back in early 2019, not long after I started contracting with Google, and other
maintainers have carried them a long way since. I’m still among the top all-time contributors by
commits, and it’s been fun to see companies I’ve worked at since, along with thousands of other
organizations, run production infrastructure on them.

I’ve also contributed to the Google Cloud Foundation Toolkit, including
[terraform-google-utils](https://github.com/terraform-google-modules/terraform-google-utils).
