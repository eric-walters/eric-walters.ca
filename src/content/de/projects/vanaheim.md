---
layout: layouts/project.njk
title: "Vanaheim — Selbst gehostete Infrastruktur"
type: Persönlich · Laufend
subtitle: Datenschutzorientierte Heiminfrastruktur, die Cloud-Dienste durch selbst gehostete Alternativen auf eigener Hardware ersetzt.
locale: de
permalink: /de/projects/vanaheim/
---

<div class="project-facts">
  <div class="project-fact">
    <span class="project-fact-label">Was</span>
    <span class="project-fact-value">Heimserver und privates Netzwerk</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">Läuft</span>
    <span class="project-fact-value">20+ selbst gehostete Dienste</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">Gebaut mit</span>
    <span class="project-fact-value">Proxmox, OPNsense, Docker</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">Status</span>
    <span class="project-fact-value">Im täglichen Einsatz, aktiv gewartet</span>
  </div>
</div>

## Warum es existiert

Vanaheim wurde gebaut, um cloudabhängige Dienste durch selbst gehostete, datenschutzorientierte Alternativen zu ersetzen, die auf Hardware laufen, die ich besitze, und in einem Netzwerk, das ich kontrolliere. Was als einfaches NAS für Dateispeicherung begann, entwickelte sich zu einer vollständigen Infrastrukturplattform, die den täglichen Gebrauch für mich und meine Partnerin unterstützt. Die meisten externen Cloud-Abhängigkeiten wurden eliminiert.

## Hardware

Alles gebraucht beschafft. Ein Lenovo P520 Workstation als Hauptserver, ein Lenovo M720t umfunktioniert als dedizierter OPNsense-Router, zwei Managed Switches und ein DeskPi Kompakt-Netzwerk-Rack. Die Priorität war maximale Leistungsfähigkeit bei minimalen Kosten mit voller Kontrolle über jede Schicht.

## Netzwerk

Fünf VLANs segmentieren den Datenverkehr nach Vertrauensstufe: Management, vertrauenswürdige Geräte, Benutzer, IoT und Gäste. Jede Zone ist standardmäßig isoliert, mit explizit erlaubtem Inter-VLAN-Verkehr, der durch OPNsense-Firewall-Regeln gesteuert wird. Die DNS-Auflösung läuft über AdGuard Home für netzwerkweites Ad-Blocking und verschlüsselte Anfragen. Der Fernzugriff wird über WireGuard VPN bereitgestellt.

## Dienste

Über 20 Dienste, bereitgestellt in Docker- und LXC-Containern auf Proxmox. Zu den Kerndiensten gehören Medienstreaming, zentralisierter Dateispeicher, Passwortverwaltung, Monitoring-Dashboards, SSO-Authentifizierung und lokale KI. Alle Dienste werden über Caddy als Reverse-Proxy mit automatischem TLS bereitgestellt. Lokale KI-Werkzeuge wurden in die täglichen Arbeitsabläufe integriert und laufen vor Ort, um Datenschutz und Flexibilität zu gewährleisten.

<div class="project-role-card">

### Täglicher Einsatz

Dies ist Produktionsinfrastruktur, keine Testumgebung. Dateispeicher, Medien, Passwörter, DNS und Ad-Blocking laufen alle über Vanaheim als primäre Plattform. Zuverlässigkeit ist wichtig, da Ausfallzeiten sofort spürbar sind.

</div>

## Nächste Schritte

Arbeite derzeit daran, den gesamten Stack als Infrastructure-as-Code zu verwalten, mit dem Ziel, jeden Dienst, jede Konfiguration und jede Firewall-Regel in Git versionskontrolliert und aus einer sauberen Bereitstellung reproduzierbar zu haben.

<div class="project-placeholder">
  <span class="project-placeholder-icon">◇</span>
  <p>Netzwerkdiagramm und Dashboard-Screenshots können in einem zukünftigen Update hinzugefügt werden.</p>
</div>

<div class="project-cta">
  <a href="https://github.com/eric-walters" class="contact-link primary" target="_blank">GitHub ansehen →</a>
</div>
