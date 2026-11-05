---
title: nagios_commander
summary: My very first open source project. A CLI for Nagios, which had no real API, built by reverse-engineering the web UI's endpoints.
period: 2012
kind: open-source
role: Author
tags: [bash, monitoring, open-source, first-project]
links:
  - label: GitHub
    href: https://github.com/brandonjbjelland/nagios_commander
order: 10
---

This was my very first open source project, and it’s pretty cute in retrospect.

Back in 2012 I was working in a network operations center, and Nagios was the monitoring system.
As far as I knew, Nagios didn’t have an API you could script against. It had a web UI, though.
So I opened View Page Source, found the endpoints the UI called, and wrapped them in a Bash script
that gave you a CLI-like experience: scheduling downtime, acknowledging alerts, and checking status
from the terminal instead of clicking through pages.

It wasn’t an API client so much as a polite web scraper with good manners, but that was how you
did it back in the day. It picked up a couple dozen stars and forks from other operators stuck in
the same spot, and it was my first taste of making a tool other people used.
