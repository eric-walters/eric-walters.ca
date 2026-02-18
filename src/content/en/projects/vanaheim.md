---
layout: layouts/project.njk
title: "Vanaheim — Self-Hosted Infrastructure"
type: Personal · Ongoing
subtitle: Privacy-focused home infrastructure replacing cloud services with self-hosted alternatives on hardware I own.
permalink: /projects/vanaheim/
---

<div class="project-facts">
  <div class="project-fact">
    <span class="project-fact-label">What</span>
    <span class="project-fact-value">Home server and private network</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">Running</span>
    <span class="project-fact-value">20+ self-hosted services</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">Built With</span>
    <span class="project-fact-value">Proxmox, OPNsense, Docker</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">Status</span>
    <span class="project-fact-value">In daily use, actively maintained</span>
  </div>
</div>

## Why It Exists

Vanaheim was built to replace cloud-dependent services with self-hosted, privacy-focused alternatives running on hardware I own and a network I control. What started as a basic NAS for file storage evolved into a full infrastructure platform supporting daily use for both myself and my partner. Most external cloud dependencies have been eliminated.

## Hardware

All sourced secondhand. A Lenovo P520 workstation as the primary server, a Lenovo M720t repurposed as a dedicated OPNsense router, two managed switches, and a DeskPi compact network rack. The priority was capability at minimal cost with full control over every layer.

## Network

Five VLANs segment traffic by trust level: management, trusted devices, users, IoT, and guest. Each zone is isolated by default with explicitly permitted inter-VLAN traffic controlled through OPNsense firewall rules. DNS resolution runs through AdGuard Home for network-wide ad blocking and encrypted queries. Remote access is provided via WireGuard VPN.

## Services

Over 20 services deployed across Docker and LXC containers on Proxmox. Core services include media streaming, centralized file storage, password management, monitoring dashboards, SSO authentication, and local AI. All services are fronted by Caddy as a reverse proxy with automatic TLS. Local AI tooling has been integrated into daily workflows, running on-premise to maintain privacy and flexibility.

<div class="project-role-card">

### Daily Use

This is production infrastructure, not a test environment. File storage, media, passwords, DNS, and ad blocking all run through Vanaheim as the primary platform. Reliability matters because downtime is immediately felt.

</div>

## What's Next

Working toward managing the entire stack as infrastructure-as-code with every service, configuration, and firewall rule version-controlled in Git and reproducible from a clean deployment.

<div class="project-placeholder">
  <span class="project-placeholder-icon">◇</span>
  <p>Network diagram and dashboard screenshots may be added in a future update.</p>
</div>

<div class="project-cta">
  <a href="https://github.com/eric-walters" class="contact-link primary" target="_blank">See GitHub here →</a>
</div>
