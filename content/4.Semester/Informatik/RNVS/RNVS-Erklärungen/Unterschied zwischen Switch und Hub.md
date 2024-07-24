---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Sunday, 14. July 2024, 19:38
date modified: Sunday, 14. July 2024, 19:40
---

# Unterschied zwischen Switch und Hub

In diesem Dokument werden die Unterschiede zwischen einem Switch und einem Hub erläutert. Es wird erklärt, was beide Geräte sind, wie sie funktionieren und in welchen Szenarien sie eingesetzt werden.

## Was ist ein Hub?

### Definition

Ein **Hub** ist ein Netzwerkgerät, das mehrere Ethernet-fähige Geräte in einem Netzwerk verbindet und als eine zentrale Verteilungseinheit für den Datenverkehr dient. Ein Hub arbeitet auf der **OSI-Schicht 1 (Physikalische Schicht)**.

### Funktionsweise

Ein Hub leitet alle empfangenen Datenpakete an alle seine Ports weiter, unabhängig davon, an welchen Port das Paket eigentlich gesendet werden soll. Dadurch wird der gesamte Datenverkehr an alle angeschlossenen Geräte gesendet, was zu einer erhöhten Anzahl von Kollisionen im Netzwerk führen kann.

### Einsatzgebiete

Hubs wurden früher häufig in kleinen Netzwerken eingesetzt, sind jedoch aufgrund ihrer ineffizienten Datenverteilung und der daraus resultierenden Netzwerküberlastung weitgehend durch Switches ersetzt worden. Sie werden heute kaum noch verwendet.

### Vorteile und Nachteile

- **Vorteile**:
  - Einfachheit: Hubs sind einfach zu installieren und zu konfigurieren.
  - Kosten: In der Regel günstiger als Switches.
- **Nachteile**:
  - Ineffizienz: Alle Daten werden an alle Ports gesendet, was zu unnötigem Datenverkehr führt.
  - Kollisionen: Höhere Wahrscheinlichkeit von Kollisionen, die die Netzwerkleistung beeinträchtigen.

## Was ist ein Switch?

### Definition

Ein **Switch** ist ein intelligentes Netzwerkgerät, das mehrere Ethernet-fähige Geräte verbindet und den Datenverkehr effizient verwaltet. Ein Switch arbeitet auf der **OSI-Schicht 2 (Sicherungsschicht)**.

### Funktionsweise

Ein Switch lernt die MAC-Adressen der angeschlossenen Geräte und erstellt eine **Forwarding-Tabelle** (MAC-Adresstabelle). Diese Tabelle wird verwendet, um eingehende Datenpakete nur an den spezifischen Port weiterzuleiten, an den das Zielgerät angeschlossen ist. Dadurch wird der Datenverkehr effizient verteilt und die Wahrscheinlichkeit von Kollisionen im Netzwerk verringert.

### Einsatzgebiete

Switches sind in den meisten modernen Netzwerken unverzichtbar und werden in Netzwerken jeder Größe eingesetzt, von kleinen Heimnetzwerken bis hin zu großen Unternehmensnetzwerken.

### Vorteile und Nachteile

- **Vorteile**:
  - Effizienz: Datenpakete werden gezielt an den richtigen Port weitergeleitet.
  - Weniger Kollisionen: Reduzierte Anzahl von Kollisionen durch gezielte Weiterleitung.
  - Sicherheit: Erhöhte Sicherheit durch segmentierte Datenströme.
- **Nachteile**:
  - Komplexität: Etwas komplexer zu konfigurieren und zu verwalten als Hubs.
  - Kosten: In der Regel teurer als Hubs.

## Vergleich: Switch vs. Hub

| Merkmal                | Hub                             | Switch                          |
| ---------------------- | ------------------------------- | ------------------------------- |
| **OSI-Schicht**        | Physikalische Schicht (Layer 1) | Sicherungsschicht (Layer 2)     |
| **Datenweiterleitung** | An alle Ports                   | Nur an den Zielport             |
| **Kollisionen**        | Häufig                          | Selten                          |
| **Effizienz**          | Gering                          | Hoch                            |
| **Sicherheit**         | Gering                          | Hoch                            |
| **Kosten**             | Niedrig                         | Höher als Hubs                  |
| **Einsatzgebiet**      | Veraltet, selten verwendet      | Standard in modernen Netzwerken |

## Fazit

Switches und Hubs sind grundlegende Netzwerkgeräte, die jedoch sehr unterschiedlich funktionieren und unterschiedliche Anwendungsbereiche haben. Während Hubs aufgrund ihrer Ineffizienz und höheren Wahrscheinlichkeit von Kollisionen weitgehend durch Switches ersetzt wurden, bieten Switches eine effiziente, sichere und zuverlässige Möglichkeit, Netzwerkgeräte zu verbinden. In modernen Netzwerken sind Switches unverzichtbar und bieten zahlreiche Vorteile gegenüber den veralteten Hubs.

<!-- DISQUS SCRIPT COMMENT START -->

<!-- DISQUS RECOMMENDATION START -->

<div id="disqus_recommendations"></div>

<script> 
(function() { // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
var d = document, s = d.createElement('script'); // IMPORTANT: Replace EXAMPLE with your forum shortname!
s.src = 'https://myuninotes.disqus.com/recommendations.js'; s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>
Please enable JavaScript to view the 
<a href="https://disqus.com/?ref_noscript" rel="nofollow">
comments powered by Disqus.
</a>
</noscript>

<!-- DISQUS RECOMMENDATION END -->

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
