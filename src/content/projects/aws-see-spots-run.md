---
title: aws_see_spots_run
summary: An early bet on the EC2 spot market. A Chef cookbook that kept DreamBox's dev Auto Scaling groups on spot instances, falling back to on-demand when needed. Cut dev environment costs by 30%.
period: 2014–2015
kind: open-source
role: Author, DreamBox Learning
tags: [aws, chef, ec2-spot, finops, open-source]
links:
  - label: GitHub
    href: https://github.com/brandonjbjelland/aws_see_spots_run
  - label: Chef Supermarket
    href: https://supermarket.chef.io/cookbooks/aws_see_spots_run
order: 9
---

The EC2 spot market was still new in 2015, and spot instances were a great deal, as long as you
didn’t mind your environment vanishing when someone outbid you. At DreamBox Learning our dev
environments ran on Auto Scaling groups, and I wanted the savings without babysitting bids by hand.

The idea was novel for its time, and it worked for us largely because the spot market was still
young. The implementation was quick and scrappy, and not especially well engineered: a handful of
shell and Python scripts run by cron jobs, deployed by Chef (powered by "glitter and magic," per the README). Each script handled
one job:

- **Price monitor** tracked spot prices and adjusted each group’s bid.
- **Spot request killer** cancelled stale requests that would never be fulfilled.
- **ASG tagger** tracked how healthy each availability zone was for each group.
- **Health enforcer** moved a group to on-demand instances when spot capacity got unhealthy, then
  checked back later and returned it to spots once things recovered.

It cut our dev environment costs by 30%, and I open-sourced it on the Chef Supermarket. It was early
engineering from me, built to solve a problem fast rather than to last, but the instinct was right: automate the boring, failure-prone parts so people don’t have to.
