---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Sunday, 14. July 2024, 19:39
date modified: Sunday, 14. July 2024, 19:40
---

# ISO-OSI-Modell

Das ISO-OSI-Modell (Open Systems Interconnection Model) ist ein konzeptionelles Rahmenwerk, das die Standardisierung der Funktionen eines Kommunikations- oder Rechensystems ohne Rücksicht auf die zugrunde liegende interne Struktur und Technologie ermöglicht. Es besteht aus sieben Schichten, die jeweils spezifische Netzwerkfunktionen definieren.

## Schichten des ISO-OSI-Modells

### 1. Physikalische Schicht (Layer 1)

Die **physikalische Schicht** ist die unterste Ebene des OSI-Modells und beschäftigt sich mit der Übertragung von Rohdatenbits über ein physisches Medium. Sie definiert die Hardwarekomponenten, Signale, Datenraten, Verkabelungen und physikalischen Verbindungen, die zur Datenübertragung verwendet werden.

**Beispiele**: Netzwerkkabel (z.B. Ethernet), Hubs, Repeater.

### 2. Sicherungsschicht (Layer 2)

Die **Sicherungsschicht** sorgt für eine zuverlässige Datenübertragung zwischen zwei direkt verbundenen Geräten. Sie verwaltet MAC-Adressen und regelt den Zugriff auf das physische Medium. Die Schicht unterteilt sich in zwei Sublayer: LLC (Logical Link Control) und MAC (Media Access Control).

**Beispiele**: Switches, Netzwerkkarten.

### 3. Vermittlungsschicht (Layer 3)

Die **Vermittlungsschicht** ist für die logische Adressierung und die Bestimmung des besten Pfades zur Datenübertragung zuständig. Sie ermöglicht die Weiterleitung von Paketen über mehrere Netzwerke hinweg und verwendet IP-Adressen.

**Beispiele**: Router, Layer-3-Switches.

### 4. Transportschicht (Layer 4)

Die **Transportschicht** stellt die vollständige Datenübertragung zwischen Endsystemen sicher und bietet Fehlererkennung und -korrektur sowie Flusskontrolle. Sie stellt Verbindungen zwischen Hosts her und verwendet Protokolle wie TCP und UDP.

**Beispiele**: TCP (Transmission Control Protocol), UDP (User Datagram Protocol).

### 5. Sitzungsschicht (Layer 5)

Die **Sitzungsschicht** verwaltet Sitzungen zwischen Anwendungen. Sie stellt Verbindungen her, verwaltet sie und beendet sie. Diese Schicht bietet auch Synchronisation und Dialogsteuerung zwischen den Kommunikationssystemen.

**Beispiele**: Sitzungsverwaltung in APIs und Web-Services.

### 6. Darstellungsschicht (Layer 6)

Die **Darstellungsschicht** sorgt dafür, dass die Daten für die Anwendungsschicht verständlich sind. Sie kodiert und dekodiert Daten, komprimiert und dekomprimiert sie und verschlüsselt und entschlüsselt sie.

**Beispiele**: SSL/TLS, Datenkomprimierung, Verschlüsselung.

### 7. Anwendungsschicht (Layer 7)

Die **Anwendungsschicht** ist die oberste Ebene des OSI-Modells und stellt die Schnittstelle zwischen den Anwendungen und dem Netzwerk bereit. Sie bietet Netzwerkdienste direkt für Endbenutzeranwendungen.

**Beispiele**: HTTP, FTP, SMTP, DNS.

## Zusammenfassung

Das ISO-OSI-Modell bietet eine standardisierte Möglichkeit, Netzwerkkommunikation in sieben klar definierte Schichten zu unterteilen. Jede Schicht hat ihre eigene spezifische Funktion und trägt zur Gesamtfunktionalität der Netzwerkkommunikation bei. Durch die Trennung der Netzwerkkommunikationsaufgaben in diese Schichten können verschiedene Netzwerkgeräte und -protokolle miteinander arbeiten und sich weiterentwickeln, ohne die Kompatibilität zu beeinträchtigen.

### Vorteile des ISO-OSI-Modells

- **Standardisierung**: Bietet einen Standardrahmen für die Entwicklung und Implementierung von Netzwerkprotokollen.
- **Interoperabilität**: Ermöglicht die Interoperabilität zwischen verschiedenen Netzwerkprodukten und -technologien.
- **Modularität**: Erleichtert das Verständnis und die Fehlerbehebung von Netzwerkproblemen durch eine klare Trennung der Funktionen.

### Fazit

Das ISO-OSI-Modell ist ein unverzichtbares Werkzeug für Netzwerkingenieure und IT-Fachleute, da es eine klare und strukturierte Methode zur Beschreibung der Netzwerkkommunikation bietet. Es bildet die Grundlage für die meisten modernen Netzwerkprotokolle und -technologien und bleibt ein wesentliches Konzept in der Informationstechnologie.

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
