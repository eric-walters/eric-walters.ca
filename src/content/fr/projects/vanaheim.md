---
layout: layouts/project.njk
title: "Vanaheim — Infrastructure auto-hébergée"
type: Personnel · En cours
subtitle: Infrastructure domestique axée sur la vie privée remplaçant les services cloud par des alternatives auto-hébergées sur du matériel que je possède.
locale: fr
permalink: /fr/projects/vanaheim/
---

<div class="project-facts">
  <div class="project-fact">
    <span class="project-fact-label">Quoi</span>
    <span class="project-fact-value">Serveur domestique et réseau privé</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">En service</span>
    <span class="project-fact-value">20+ services auto-hébergés</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">Construit avec</span>
    <span class="project-fact-value">Proxmox, OPNsense, Docker</span>
  </div>
  <div class="project-fact">
    <span class="project-fact-label">Statut</span>
    <span class="project-fact-value">En utilisation quotidienne, activement maintenu</span>
  </div>
</div>

## Pourquoi ce projet existe

Vanaheim a été construit pour remplacer les services dépendants du cloud par des alternatives auto-hébergées axées sur la vie privée, fonctionnant sur du matériel que je possède et un réseau que je contrôle. Ce qui a commencé comme un simple NAS pour le stockage de fichiers a évolué en une plateforme d'infrastructure complète supportant une utilisation quotidienne pour moi-même et ma partenaire. La plupart des dépendances cloud externes ont été éliminées.

## Matériel

Tout acheté d'occasion. Un poste de travail Lenovo P520 comme serveur principal, un Lenovo M720t reconverti en routeur OPNsense dédié, deux commutateurs gérés et un rack réseau compact DeskPi. La priorité était la capacité maximale au coût minimum avec un contrôle total sur chaque couche.

## Réseau

Cinq VLANs segmentent le trafic par niveau de confiance : gestion, appareils de confiance, utilisateurs, IoT et invités. Chaque zone est isolée par défaut avec un trafic inter-VLAN explicitement autorisé contrôlé par les règles de pare-feu OPNsense. La résolution DNS passe par AdGuard Home pour le blocage de publicités à l'échelle du réseau et les requêtes chiffrées. L'accès à distance est fourni via WireGuard VPN.

## Services

Plus de 20 services déployés à travers des conteneurs Docker et LXC sur Proxmox. Les services principaux incluent le streaming multimédia, le stockage de fichiers centralisé, la gestion des mots de passe, les tableaux de bord de surveillance, l'authentification SSO et l'IA locale. Tous les services sont exposés via Caddy comme proxy inverse avec TLS automatique. Les outils d'IA locaux ont été intégrés aux flux de travail quotidiens, fonctionnant sur site pour maintenir la confidentialité et la flexibilité.

<div class="project-role-card">

### Utilisation quotidienne

C'est une infrastructure de production, pas un environnement de test. Le stockage de fichiers, le multimédia, les mots de passe, le DNS et le blocage de publicités passent tous par Vanaheim comme plateforme principale. La fiabilité compte car les temps d'arrêt sont immédiatement ressentis.

</div>

## Prochaines étapes

Travaille actuellement vers la gestion de l'ensemble de la pile en tant qu'infrastructure-as-code, avec l'objectif d'avoir chaque service, configuration et règle de pare-feu sous contrôle de version dans Git et reproductible à partir d'un déploiement vierge.

<div class="project-placeholder">
  <span class="project-placeholder-icon">◇</span>
  <p>Le diagramme de réseau et les captures d'écran du tableau de bord pourront être ajoutés dans une mise à jour future.</p>
</div>

<div class="project-cta">
  <a href="https://github.com/eric-walters" class="contact-link primary" target="_blank">Voir GitHub ici →</a>
</div>
