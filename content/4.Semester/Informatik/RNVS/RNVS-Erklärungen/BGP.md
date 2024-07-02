---
tags:
  - 4semester
  - RNVS
  - Erklaerung
  - informatik
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
date created: Friday, 19. April 2024, 09:30
date modified: Thursday, 9. May 2024, 23:19
---

# Das Border Gateway Protocol (BGP)

Das Border Gateway Protocol (BGP) ist das zentrale systemübergreifende Routing-Protokoll des Internets, das für die Weiterleitung von Daten zwischen großen und unterschiedlichen Netzwerken zuständig ist. Dieser Artikel erklärt die Funktionen von BGP, seine Anwendung im Internet, und erörtert Herausforderungen sowie Sicherheitsaspekte, die mit seiner Verwendung verbunden sind.

## Einführung in BGP

### Was ist BGP?

BGP ist ein standardisiertes Exterior Gateway Protocol (EGP), das entwickelt wurde, um Routing-Entscheidungen über das Internet zu treffen und Informationen zwischen autonomen Systemen (AS) zu vermitteln. Ein autonomes System ist eine Gruppe von IP-Netzwerken, die von einer einzigen technischen Verwaltung kontrolliert wird und eine gemeinsame Routing-Politik hat.

### Warum wird BGP verwendet?

BGP ermöglicht es Netzwerken, miteinander zu kommunizieren und Routing-Informationen auszutauschen, um den besten Pfad für den Datenverkehr durch das Internet zu bestimmen. Es ist entscheidend für die Skalierbarkeit des Internets, da es die Fähigkeit bietet, komplexe Netzwerkstrukturen und veränderte Pfade dynamisch zu handhaben.

## Funktionsweise von BGP

BGP arbeitet primär durch den Austausch von Routing- und Erreichbarkeitsinformationen mit anderen BGP-Systemen. Es konzentriert sich auf die Wegfindung und benutzt eine Vielzahl von Pfadattributen, um den besten Weg zu entscheiden:

- **AS-Pfadlängen**: BGP bevorzugt Pfade mit weniger AS-Hopps.
- **Nächsthöpfen (Next Hop)**: Adressen, die angeben, über welchen Nachbarknoten Pakete gesendet werden sollten.
- **Locale Präferenzen**: Präferenzwerte, die von Netzwerkadministratoren festgelegt werden, um bestimmte Routen gegenüber anderen zu bevorzugen.

## Haupttypen von BGP

### Internal BGP (iBGP)

iBGP wird innerhalb eines einzigen autonomen Systems verwendet, um internes Routing konsistent und effizient zu gestalten. Dabei verbindet iBGP Router innerhalb desselben AS, ohne die AS-Grenzen zu überschreiten.

### External BGP (eBGP)

eBGP wird zwischen unterschiedlichen autonomen Systemen eingesetzt und ist für den Datenaustausch zwischen diesen Netzwerken zuständig. eBGP-Verbindungen finden in der Regel an den Grenzen zwischen den Netzwerken statt.

## Stabilitäts- und Effizienzmechanismen

BGP verwendet mehrere Techniken, um stabile und effiziente Routen durch das Internet sicherzustellen:

- **Keepalive-Nachrichten**: Regelmäßige Signale, die zwischen BGP-Peers gesendet werden, um die Verbindung aktiv zu halten.
- **Route Damping**: Reduziert die Fluktuation von Routen, die häufig ihren Status ändern, um die Netzwerkstabilität zu erhöhen.
- **Community-Tags**: Erlauben es den Administratoren, bestimmte Richtlinien auf Gruppen von Routen anzuwenden, was die Netzwerkverwaltung vereinfacht.

## Herausforderungen und Sicherheitsprobleme

Trotz seiner zentralen Rolle im globalen Internetrouting ist BGP mit verschiedenen Sicherheitsrisiken und Herausforderungen konfrontiert:

- **Route Hijacking**: Durch das Fehlen einer nativen Authentifizierungsmöglichkeit können Akteure falsche Routing-Informationen verbreiten, um Datenverkehr umzuleiten.
- **Secure BGP (SBGP)**: Eine Erweiterung, die darauf abzielt, Sicherheitslücken zu schließen, indem sie die Authentizität und Integrität von BGP-Nachrichten überprüft.

### Fazit

BGP ist ein essenzieller Bestandteil der Internetinfrastruktur, der die Kommunikation zwischen verschiedenen autonomen Systemen erleichtert und optimiert. Während BGP entscheidend für das Routing auf globaler Ebene ist, bringen seine Sicherheitsanfälligkeiten auch Notwendigkeit für weiterführende Schutzmaßnahmen mit sich, um das Internet sicher und zuverlässig zu halten.

<!-- DISQUS SCRIPT COMMENT START -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://myuninotes.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<!-- DISQUS SCRIPT COMMENT END -->
