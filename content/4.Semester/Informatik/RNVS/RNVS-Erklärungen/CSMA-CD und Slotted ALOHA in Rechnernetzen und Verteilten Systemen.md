---
tags:
  - 4semester
  - informatik
  - RNVS
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Saturday, 20. July 2024, 16:47
date modified: Saturday, 20. July 2024, 18:01
---

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/lr6GWTbm5Fk" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><br>

> [!summary] Zusammenfassung
>
> **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**
>
> - **Verwendung**: Ethernet-Netzwerke
> - **Funktionsweise**:
>   - Kanal abhören vor dem Senden
>   - Kollisionserkennung während der Übertragung
>   - Kollisionsbehandlung durch Senden eines Jamming-Signals und zufälliges erneutes Senden
> - **Vorteile**:
>   - Reduzierte Kollisionen
>   - Höhere Effizienz bei geringer bis mittlerer Netzwerklast
> - **Nachteile**:
>   - Weniger effizient bei hoher Netzwerklast
>   - Komplexer in großen Netzwerken mit hoher Latenz
>
> **Slotted ALOHA**
>
> - **Verwendung**: Drahtlose Netzwerke, Satellitenkommunikation
> - **Funktionsweise**:
>   - Zeit in feste Slots unterteilt
>   - Geräte senden nur zu Beginn eines Slots
>   - Kollisionen führen zu zufälligem erneuten Senden
> - **Vorteile**:
>   - Einfach zu implementieren
>   - Verbesserte Effizienz gegenüber ursprünglichem ALOHA
> - **Nachteile**:
>   - Anfällig für Kollisionen bei hoher Netzwerklast
>   - Reduzierte Effizienz bei hoher Netzwerklast
>
> **Vergleich von CSMA/CD und Slotted ALOHA**
>
> | Merkmal                 | CSMA/CD                                | Slotted ALOHA                                |
> | ----------------------- | -------------------------------------- | -------------------------------------------- |
> | **Verwendung**          | Ethernet-Netzwerke                     | Drahtlose Netzwerke, Satellitenkommunikation |
> | **Kollisionserkennung** | Ja                                     | Nein (nur Kollisionsvermeidung)              |
> | **Effizienz**           | Höher bei niedriger bis mittlerer Last | Niedriger bei hoher Last                     |
> | **Implementierung**     | Komplexer                              | Einfacher                                    |
> | **Anwendungsfälle**     | Kabelgebundene Netzwerke               | Drahtlose und satellitenbasierte Netzwerke   |

# CSMA/CD und Slotted ALOHA in Rechnernetzen und Verteilten Systemen

## Inhaltsverzeichnis

1. [Einführung](#einführung)
2. [Grundlagen der Netzwerktechnologien](#grundlagen-der-netzwerktechnologien)
   - 2.1 [Netzwerkgrundlagen](#netzwerkgrundlagen)
   - 2.2 [Verteilte Systeme](#verteilte-systeme)
3. [CSMA/CD (Carrier Sense Multiple Access with Collision Detection)](#csmacd-carrier-sense-multiple-access-with-collision-detection)
   - 3.1 [Geschichte und Entwicklung](#geschichte-und-entwicklung)
   - 3.2 [Funktionsweise](#funktionsweise)
   - 3.3 [Beispiel](#beispiel)
   - 3.4 [Vorteile und Nachteile](#vorteile-und-nachteile)
4. [Slotted ALOHA](#slotted-aloha)
   - 4.1 [Geschichte und Entwicklung](#geschichte-und-entwicklung-1)
   - 4.2 [Funktionsweise](#funktionsweise-1)
   - 4.3 [Beispiel](#beispiel-1)
   - 4.4 [Vorteile und Nachteile](#vorteile-und-nachteile-1)
5. [Vergleich von CSMA/CD und Slotted ALOHA](#vergleich-von-csmacd-und-slotted-aloha)
6. [Praxisbeispiele und Anwendungsfälle](#praxisbeispiele-und-anwendungsfälle)
7. [Beispielklausuraufgaben](#beispielklausuraufgaben)
   - 7.1 [Aufgaben zu CSMA/CD](#aufgaben-zu-csmacd)
   - 7.2 [Aufgaben zu Slotted ALOHA](#aufgaben-zu-slotted-aloha)
8. [Zusammenfassung und Ausblick](#zusammenfassung-und-ausblick)
9. [Referenzen](#referenzen)
10. [Mathematische Formeln zur Berechnung von Leitungslängen](#mathematische-formeln-zur-berechnung-von-leitungslängen)

## Einführung

In diesem Dokument werden die Konzepte von CSMA/CD und Slotted ALOHA detailliert erklärt, zwei bedeutende Protokolle für die Datenübertragung in Rechnernetzen und verteilten Systemen. Diese Protokolle spielen eine wichtige Rolle in der Netzwerkkommunikation und haben erhebliche Auswirkungen auf die Effizienz und Zuverlässigkeit der Datenübertragung.

## Grundlagen der Netzwerktechnologien

### Netzwerkgrundlagen

Ein Rechnernetz (oder Computernetzwerk) ist ein Zusammenschluss von Rechnern, die miteinander kommunizieren können. Dies ermöglicht den Austausch von Daten und die gemeinsame Nutzung von Ressourcen. Netzwerke können in verschiedene Kategorien eingeteilt werden, basierend auf ihrer Größe, Funktion und Topologie.

- **LAN (Local Area Network)**: Ein Netzwerk, das sich über ein begrenztes geografisches Gebiet erstreckt, wie z. B. ein Bürogebäude oder eine Schule.
- **WAN (Wide Area Network)**: Ein Netzwerk, das sich über große geografische Entfernungen erstreckt und oft mehrere LANs verbindet.
- **MAN (Metropolitan Area Network)**: Ein Netzwerk, das eine Stadt oder eine größere Gemeinde abdeckt.

Netzwerke können auch anhand ihrer Topologie klassifiziert werden:

- **Stern-Topologie**: Alle Geräte sind mit einem zentralen Knotenpunkt verbunden.
- **Bus-Topologie**: Alle Geräte sind über einen gemeinsamen Übertragungsweg verbunden.
- **Ring-Topologie**: Alle Geräte sind in einem geschlossenen Ring verbunden, wobei Daten in eine Richtung durch den Ring übertragen werden.

### Verteilte Systeme

Verteilte Systeme bestehen aus mehreren unabhängigen Computern, die zusammenarbeiten, um eine gemeinsame Aufgabe zu erfüllen. Diese Systeme bieten viele Vorteile, einschließlich erhöhter Zuverlässigkeit, Skalierbarkeit und Leistung. In verteilten Systemen ist die Koordination zwischen den Knoten von entscheidender Bedeutung, um die Konsistenz und Verfügbarkeit der Daten zu gewährleisten.

- **Beispiele für verteilte Systeme**: Cloud Computing, Peer-to-Peer-Netzwerke, verteilte Datenbanken.

## CSMA/CD (Carrier Sense Multiple Access with Collision Detection)

### Geschichte und Entwicklung

CSMA/CD ist ein Netzwerkprotokoll, das in den frühen Ethernet-Standards verwendet wurde. Es wurde entwickelt, um Kollisionen in Netzwerken zu minimieren und die Effizienz der Datenübertragung zu erhöhen. Das Protokoll wurde in den 1970er Jahren von Robert Metcalfe und seinen Kollegen bei Xerox PARC entwickelt.

### Funktionsweise

CSMA/CD funktioniert nach dem Prinzip, dass ein Gerät, bevor es Daten sendet, den Kanal abhört, um sicherzustellen, dass er frei ist. Wenn der Kanal frei ist, sendet das Gerät die Daten. Falls eine Kollision erkannt wird, hören alle beteiligten Geräte auf zu senden und warten eine zufällige Zeitspanne, bevor sie es erneut versuchen.

#### Ablaufdiagramm für CSMA/CD

```
+-------------------+
| Starte Senden     |
+---------+---------+
          |
          v
+---------v---------+
| Höre Kanal ab     |
+---------+---------+
          |
          v
+---------v---------+
| Kanal frei?       |----> Nein ----> Warte
+---------+---------+
          |
          v
+---------v---------+
| Sende Daten       |
+---------+---------+
          |
          v
+---------v---------+
| Kollision?        |----> Ja ----> Kollisionserkennung
+---------+---------+
          |
          v
+---------v---------+
| Senden abgeschlossen
+-------------------+
```

#### Detaillierter Ablauf

1. **Abhören des Kanals**: Das Gerät prüft, ob der Kanal frei ist.
2. **Senden der Daten**: Wenn der Kanal frei ist, beginnt das Gerät mit dem Senden der Daten.
3. **Kollisionserkennung**: Während des Sendens überwacht das Gerät den Kanal auf mögliche Kollisionen.
4. **Kollisionsbehandlung**: Wenn eine Kollision erkannt wird, stoppt das Gerät das Senden und sendet ein Jamming-Signal, um alle beteiligten Geräte zu benachrichtigen.
5. **Wartezeit**: Nach einer Kollision warten die Geräte eine zufällige Zeitspanne, bevor sie es erneut versuchen.

### Beispiel

Angenommen, wir haben ein Netzwerk mit drei Computern A, B und C

. Computer A möchte eine Nachricht an Computer B senden. Es überprüft, ob der Kanal frei ist, und beginnt mit dem Senden der Nachricht. Währenddessen möchte auch Computer C eine Nachricht senden, hört jedoch den Kanal ab und erkennt, dass dieser belegt ist. Daher wartet Computer C, bis der Kanal frei ist.

#### Konkretes Beispiel

1. **Schritt 1**: Computer A überprüft den Kanal und stellt fest, dass er frei ist.
2. **Schritt 2**: Computer A beginnt mit dem Senden der Nachricht an Computer B.
3. **Schritt 3**: Computer C überprüft den Kanal und stellt fest, dass er belegt ist. Computer C wartet.
4. **Schritt 4**: Computer A beendet das Senden der Nachricht.
5. **Schritt 5**: Computer C überprüft den Kanal erneut, stellt fest, dass er frei ist, und beginnt mit dem Senden der Nachricht.

### Vorteile und Nachteile

#### Vorteile

- **Reduzierte Kollisionen**: Durch das Abhören des Kanals vor dem Senden wird die Wahrscheinlichkeit von Kollisionen verringert.
- **Einfache Implementierung**: CSMA/CD ist relativ einfach zu implementieren und benötigt keine komplexen Steuermechanismen.

#### Nachteile

- **Nicht für große Netzwerke geeignet**: Bei großen Netzwerken mit hoher Latenz kann CSMA/CD ineffizient sein.
- **Begrenzte Effizienz bei hoher Last**: Bei hoher Netzwerklast kann es zu häufigen Kollisionen kommen, die die Effizienz des Netzwerks beeinträchtigen.

## Slotted ALOHA

### Geschichte und Entwicklung

Slotted ALOHA wurde entwickelt, um die Effizienz des ursprünglichen ALOHA-Protokolls zu verbessern. Es teilt die Zeit in feste Slots auf, in denen die Geräte senden dürfen, wodurch die Wahrscheinlichkeit von Kollisionen verringert wird. Das ursprüngliche ALOHA-Protokoll wurde in den 1970er Jahren an der University of Hawaii entwickelt und fand Anwendung in Satellitenkommunikationssystemen.

### Funktionsweise

Bei Slotted ALOHA wird die Zeit in gleich lange Slots unterteilt. Ein Gerät kann nur zu Beginn eines Slots mit dem Senden beginnen. Wenn zwei Geräte gleichzeitig senden, kommt es zu einer Kollision, und beide Geräte versuchen es nach einer zufälligen Wartezeit erneut.

#### Ablaufdiagramm für Slotted ALOHA

```
+-------------------+
| Starte Senden     |
+---------+---------+
          |
          v
+---------v---------+
| Warte auf Anfang  |
| des nächsten Slots|
+---------+---------+
          |
          v
+---------v---------+
| Sende Daten       |
+---------+---------+
          |
          v
+

---------v---------+
| Kollision?        |----> Ja ----> Warte zufällige Zeit
+---------+---------+
          |
          v
+---------v---------+
| Senden abgeschlossen
+-------------------+
```

#### Detaillierter Ablauf

1. **Zeitaufteilung**: Die Zeit wird in gleich lange Slots unterteilt.
2. **Warten auf Slotbeginn**: Ein Gerät wartet auf den Beginn des nächsten Slots, bevor es mit dem Senden der Daten beginnt.
3. **Senden der Daten**: Das Gerät sendet die Daten zu Beginn des Slots.
4. **Kollisionsbehandlung**: Wenn eine Kollision erkannt wird, warten die betroffenen Geräte eine zufällige Zeit, bevor sie es erneut versuchen.

### Beispiel

Stellen Sie sich ein Netzwerk mit vier Computern vor: A, B, C und D. Alle Computer möchten Daten senden. Jeder Computer wartet, bis der nächste Slot beginnt, und sendet dann die Daten. Wenn Computer A und C gleichzeitig senden, kommt es zu einer Kollision, und beide müssen eine zufällige Zeit warten, bevor sie es erneut versuchen.

#### Konkretes Beispiel

1. **Schritt 1**: Computer A, B, C und D möchten Daten senden.
2. **Schritt 2**: Jeder Computer wartet auf den Beginn des nächsten Slots.
3. **Schritt 3**: Computer A und C senden gleichzeitig Daten, was zu einer Kollision führt.
4. **Schritt 4**: Computer A und C erkennen die Kollision und warten eine zufällige Zeitspanne, bevor sie es erneut versuchen.
5. **Schritt 5**: Computer B und D senden Daten erfolgreich im nächsten Slot.

### Vorteile und Nachteile

#### Vorteile

- **Einfach zu implementieren**: Die Implementierung von Slotted ALOHA ist einfach und benötigt keine komplexen Steuermechanismen.
- **Verbesserte Effizienz gegenüber ALOHA**: Durch die Zeitaufteilung in Slots wird die Effizienz im Vergleich zum ursprünglichen ALOHA-Protokoll verbessert.

#### Nachteile

- **Anfällig für Kollisionen**: Bei hoher Netzwerklast kann es immer noch zu häufigen Kollisionen kommen.
- **Reduzierte Effizienz bei hoher Last**: Die Effizienz von Slotted ALOHA nimmt ab, wenn die Netzwerklast hoch ist.

## Vergleich von CSMA/CD und Slotted ALOHA

| Merkmal                     | CSMA/CD                                | Slotted ALOHA                                |
| --------------------------- | -------------------------------------- | -------------------------------------------- |
| Kollisionserkennung         | Ja                                     | Nein (nur Kollisionsvermeidung)              |
| Effizienz                   | Höher bei niedriger bis mittlerer Last | Niedriger bei hoher Last                     |
| Implementierungskomplexität | Höher                                  | Einfacher                                    |
| Anwendungsfall              | Ethernet                               | Drahtlose Netzwerke, Satellitenkommunikation |

### Detaillierter Vergleich

1. **Kollisionserkennung**

   - **CSMA/CD**: Verwendet eine Kollisionserkennung während der Übertragung. Bei einer Kollision wird ein Jamming-Signal gesendet, um alle Geräte zu informieren.
   - **Slotted ALOHA**: Vermeidet Kollisionen durch zeitliche Aufteilung in Slots, erkennt jedoch keine Kollisionen aktiv.

2. **Effizienz**

   - **CSMA/CD**: Effizienter bei geringer bis mittlerer Netzwerklast, da Kollisionen seltener auftreten.
   - **Slotted ALOHA**: Weniger effizient bei hoher Netzwerklast, da die Wahrscheinlichkeit von Kollisionen steigt.

3. **Implementierungskomplexität**

   - **CSMA/CD**: Benötigt komplexere Mechanismen zur Kollisionserkennung und -behandlung.
   - **Slotted ALOHA**: Einfacher zu implementieren, da keine aktive Kollisionserkennung erforderlich ist.

4. **Anwendungsfälle**
   - **CSMA/CD**: Wird hauptsächlich in kabelgebundenen Ethernet-Netzwerken verwendet.
   - **Slotted ALOHA**: Häufig in drahtlosen Netzwerken und Satellitenkommunikationssystemen eingesetzt.

## Praxisbeispiele und Anwendungsfälle

### CSMA/CD

- **Ethernet-Netzwerke**: CSMA/CD ist das grundlegende Zugriffsverfahren für traditionelle Ethernet-Netzwerke. Es ermöglicht die gleichzeitige Nutzung eines gemeinsamen Kommunikationskanals durch mehrere Geräte.
- **LAN-Umgebungen**: In LAN-Umgebungen, in denen mehrere Computer und Geräte verbunden sind, sorgt CSMA/CD für eine effiziente Datenübertragung und minimiert Kollisionen.

### Slotted ALOHA

- **Drahtlose Netzwerke**: In drahtlosen Netzwerken, in denen die Geräte nicht ständig miteinander kommunizieren, bietet Slotted ALOHA eine einfache und effektive Methode zur Datenübertragung.
- **RFID-Systeme**: Slotted ALOHA wird häufig in RFID-Systemen verwendet, um Kollisionen bei der Datenübertragung zwischen Lesegeräten und Tags zu vermeiden.
- **Satellitenkommunikation**: Bei der Satellitenkommunikation, wo die Verzögerungen groß sind, bietet Slotted ALOHA eine praktikable Lösung zur Verwaltung der Datenübertragung.

## Beispielklausuraufgaben

### Aufgaben zu CSMA/CD

1. **Erklären Sie den Ablauf des CSMA/CD-Protokolls.**

   - _Antwort_: Der Ablauf des CSMA/CD-Protokolls umfasst das Abhören des Kanals, das Senden von Daten, das Erkennen von Kollisionen und das erneute Senden nach einer zufälligen Wartezeit.

2. **Welche Vorteile bietet CSMA/CD in einem Ethernet-Netzwerk?**

   - _Antwort_: Vorteile umfassen reduzierte Kollisionen und höhere Effizienz in dichten Netzwerken.

3. **Beschreiben Sie ein Szenario, in dem CSMA/CD ineffizient sein könnte.**
   - _Antwort_: In einem großen Netzwerk mit hoher Latenz kann CSMA/CD ineffizient sein, da die Zeit, die für die Kollisionserkennung und -behandlung aufgewendet wird, die Gesamteffizienz des Netzwerks beeinträchtigen kann.

### Aufgaben zu Slotted ALOHA

1. **Beschreiben Sie den Unterschied zwischen ALOHA und Slotted ALOHA.**

   - _Antwort_: Bei ALOHA kann ein Gerät zu jeder Zeit senden, während bei Slotted ALOHA die Zeit in Slots unterteilt ist, in denen das Senden beginnt.

2. **Welche Nachteile hat Slotted ALOHA im Vergleich zu CSMA/CD?**

   - _Antwort_: Slotted ALOHA hat eine geringere Effizienz und ist anfälliger für Kollisionen bei hoher Netzwerklast.

3. \*\*Erklären Sie, warum Slotted ALOHA in drahtlosen Netzwerken vorteilhaft sein kann

.\*\*

- _Antwort_: Slotted ALOHA ist in drahtlosen Netzwerken vorteilhaft, da es eine einfache Methode zur Kollisionsvermeidung bietet und keine komplexe Infrastruktur zur Kollisionserkennung erfordert.

## Mathematische Formeln zur Berechnung von Leitungslängen

### 1. Berechnung der maximalen Segmentlänge bei CSMA/CD

Die maximale Segmentlänge $L$ in einem Ethernet-Netzwerk mit CSMA/CD wird durch die Signallaufzeit und die Kollisionsdetektion bestimmt. Die Signallaufzeit hängt von der Geschwindigkeit des Signals und dem Medium ab.

$$
 L \leq \frac{v \cdot t}{2}
$$

Dabei ist:

- $L$ die maximale Segmentlänge.
- $v$ die Ausbreitungsgeschwindigkeit des Signals im Kabel (ungefähr $2 \times 10^8$ m/s für Kupferkabel).
- $t$ die Zeit, die benötigt wird, um eine Kollision zu erkennen. Diese hängt von der Datenrate und der minimalen Paketlänge ab.

### 2. Berechnung der Kollisionsdomäne

Die Kollisionsdomäne ist der Bereich im Netzwerk, in dem eine Kollision auftreten kann. Die maximale Länge der Kollisionsdomäne $D$ kann berechnet werden, um sicherzustellen, dass Kollisionen rechtzeitig erkannt werden.

$$
 D \leq \frac{c \cdot T}{2}
$$

Dabei ist:

- $D$ die maximale Länge der Kollisionsdomäne.
- $c$ die Lichtgeschwindigkeit im Medium (ungefähr $3 \times 10^8$ m/s für Glasfaserkabel).
- $T$ die maximale Übertragungsverzögerung (abhängig von der Datenrate und der minimalen Paketgröße).

### 3. Berechnung der Latenz in einem Netzwerk

Die Latenz $\tau$ in einem Netzwerk ist die Gesamtzeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu gelangen. Sie setzt sich aus der Übertragungsverzögerung $\tau_t$ und der Verarbeitungsverzögerung $\tau_p$ zusammen.

$$
 \tau = \tau_t + \tau_p
$$

Dabei ist:

- $\tau_t = \frac{L}{v}$ die Übertragungsverzögerung, wobei $L$ die Leitungslänge und $v$ die Ausbreitungsgeschwindigkeit des Signals ist.
- $\tau_p$ die Verarbeitungsverzögerung in den Netzwerkgeräten.

### 4. Berechnung der Signalverlustleistung

Die Signalverlustleistung $P_L$ bei der Übertragung über eine Leitung kann mit der folgenden Formel berechnet werden:

$$
 P_L = 10 \cdot \log_{10}\left( \frac{P_{\text{out}}}{P_{\text{in}}} \right)
$$

Dabei ist:

- $P_L$ die Verlustleistung in Dezibel (dB).
- $P_{\text{out}}$ die Ausgangsleistung am Ende der Leitung.
- $P_{\text{in}}$ die Eingangsleistung am Anfang der Leitung.

Diese Formeln bieten eine Grundlage für die Analyse und Planung von Netzwerken unter Berücksichtigung der physischen Gegebenheiten und der Anforderungen an die Datenübertragung.

## Zusammenfassung und Ausblick

CSMA/CD und Slotted ALOHA sind zwei bedeutende Protokolle, die verschiedene Ansätze zur Verwaltung der Datenübertragung in Netzwerken bieten. Während CSMA/CD vor allem in kabelgebundenen Netzwerken wie Ethernet verwendet wird, findet Slotted ALOHA häufig Anwendung in drahtlosen Netzwerken und Satellitenkommunikation. Beide Protokolle haben ihre spezifischen Vor- und Nachteile, und ihre Wahl hängt von den spezifischen Anforderungen des Netzwerks ab.

In Zukunft könnten neue Technologien und Protokolle entwickelt werden, die die Effizienz und Zuverlässigkeit der Datenübertragung weiter verbessern. Mit der zunehmenden Verbreitung von drahtlosen Netzwerken und dem Internet der Dinge (IoT) wird die Bedeutung solcher Protokolle weiter zunehmen.

## Referenzen

1. "Computer Networks" von Andrew S. Tanenbaum
2. IEEE 802.3 Standard für Ethernet
3. "Data and Computer Communications" von William Stallings
4. RFC 791 - Internet Protocol
5. Diverse wissenschaftliche Artikel und Fachpublikationen

---

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

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
