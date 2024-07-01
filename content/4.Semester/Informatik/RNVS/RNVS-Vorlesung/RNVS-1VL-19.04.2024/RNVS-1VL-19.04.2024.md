---
tags:
  - 4semester
  - RNVS
  - vorlesung
  - informatik
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
date created: Friday, 19. April 2024, 09:18
date modified: Friday, 26. April 2024, 09:31
---

Gekommen bis: S.31

# TODO

- [x] Skript heraussuchen [completion:: 2024-04-25]

## Skript gekommen bis Seite: 34

# Organisatorisches

- Online Tutorium
- Ausgabe der Übungen jeweils Montag
- Freiwillige Abgabe → werden korrigiert
- Fragestunde 19.07
- Fragen an rnvs-fragen@nm.ifi.lmu.de bis 17.07.2024

# Worum es geht:

- Warum funktioniert das Internet, wie funktioniert es
  - Wie funktioniert WLAN
- Resilienz ([[TCP]], [[BGP]])

# Inhalt der VL

- Motivation warum wir das ganze machen
  - Oma Opa erklären können wie das Internet funktionieren (prof means it)
  - Jeder Informatiker muss wissen wie das internet funktioniert
- Er macht einfach Klausur um zu zeigen, dass wir mit nachdenken jetzt scon bestehen????
  - Prof is goated

# Beispielspiel wie man eine Nachricht verschickt

- Absender
- Empfänger mit eindeutiger Address (IPv4 begrenzte Anzahl an Adressen)
- _Protokoll_
- _Schnittstelle_
- _Dienst_
  $\Longrightarrow$ wichtigsten 3 Begriffe der VL
- Routing Entscheidung welchen Pfad/Weg die Nachricht geht. Jeder Knoten entscheidet wo es weiter geht.

# Teil 2: Grundlagen

- Alice Bob Beispiel, welches wir in der VL mit Papier gespielt haben
- **Fragestellung:**
  - Wie adressiert man einen Endpunkt im Netz?
  - Wie transportiert man die Nachrichten vom Sender zum Empfänger
  - Wie kann man zuverlässig über unzuverlässige Transportwege kommunizieren?
  - Wie können mehrere Nutzer die Ressourcen im Internet gleichzeitig nutzen?
  - Wie kann man die Komplexität bewältigen?
- Protokoll ist wie eine Sprache zwischen zwei Geräten, die über das Internet kommunizieren
- **Definition Rechnernetz:**
  - Rechnernetz ist ein Zusammenschluss unabhängiger (autonomer Computer) durch eine Kommunikationstechnologie. Diese Computer sind verbunden, wenn sie in der Lage sind, Informationen auszutauschen.
- Computernetzwerk und Rechnernetzwerk sagen ist illegal Rechnernetz ist das einzig wahre
- **Definition Verteiltes System:**
  - Nach Arbeitsweise
  - Nach Diensterbringung
  - Menge von Hardware und Software Komponenten vernetzter Rechner
  - VS ist das Drumherum mit dem kommuniziert wird statt der Grundlage wie beim Rechnernetz
- $Rechnernetz \subset Verteiltes \ System$ aber auch $Verteiltes \ System \subset  Rechnernetz$
- Rechnernetz vs. Verteilte Systeme

## Wer ist für den Datentransfer verantwortlich?

- **In einem Rechnernetz:** Im Rechnernetz erfolgt der Datentransfer typischerweise durch die Geräte und Protokolle, die das Netzwerk bilden. Die Endgeräte (wie Computer und Server) und die Netzwerkinfrastruktur (wie Router und Switches) sind zusammen verantwortlich für den Datentransfer.
- **In einem verteilten System:** In verteilten Systemen wird der Datentransfer oft vom System selbst initiiert und gesteuert. Das heißt, die Software, die das verteilte System bildet, bestimmt, wann und wie Daten zwischen den Komponenten des Systems übertragen werden.

### Ist das Münchner Wissenschaftsnetz (MWN), das World Wide Web (WWW), SETI@HOME, das ARPANET, das X-WIN, Amazon ein Rechnernetz oder ein verteiltes System?

- **Münchner Wissenschaftsnetz (MWN):** Das MWN ist ein Rechnernetz. Es stellt die physische und netzwerktechnische Infrastruktur zur Verfügung, die es Institutionen ermöglicht, miteinander zu kommunizieren und Ressourcen zu teilen.
- **World Wide Web (WWW):** Das WWW ist ein verteiltes System. Es besteht aus Webseiten und Webservern, die über das Internet (ein Rechnernetz) verbunden sind und bei denen das System (Webserver und Browser) den Datentransfer automatisch handhabt.
- **SETI@HOME:** SETI@HOME ist ein verteiltes System. Es nutzt die Rechenkapazität von Freiwilligen über das Internet, um Daten zu analysieren, die im Rahmen der Suche nach außerirdischem Leben gesammelt wurden. Die Koordination der Datendistribution und -verarbeitung wird von der zentralen SETI@HOME-Software gesteuert.
- **ARPANET:** Das ARPANET war ein Rechnernetz, das als Vorläufer des Internets diente. Es verband Computer direkt miteinander und erlaubte den Austausch von Daten durch definierte Protokolle und Netzwerktechniken.
- **X-WIN:** Ohne spezifische Informationen im Dokument ist es schwierig zu sagen, ob X-WIN als Rechnernetz oder verteiltes System eingestuft wird. Typischerweise würde dies aber als ein Rechnernetz betrachtet, wenn es eine Infrastruktur für Netzwerkkommunikation bietet.
- **Amazon:** Amazon als Unternehmen nutzt verteilte Systeme, insbesondere in Bezug auf seine Cloud-Services und E-Commerce-Plattformen, die auf einer umfangreichen Rechnernetzinfrastruktur aufbauen. Amazon Web Services (AWS) zum Beispiel ist ein klar definiertes verteiltes System, das auf Rechnernetztechnologien basiert.

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

<!-- Sliding Banner START -->

<div id="slidingBanner" class="banner">
  <p class="banner-text">
    Explore MyUniNotes for comprehensive study guides and academic resources tailored for Computer Science students!
  </p>
  <svg id="closeBanner" class="arrows">
    <path d="M0 20 L20 42 L40 20"></path>
    <path d="M0 40 L20 62 L40 40"></path>
  </svg>
</div>

<script>
  // JavaScript to slide down the banner on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const banner = document.getElementById('slidingBanner');
        if (banner) {
          banner.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeBanner = document.getElementById('closeBanner');
      if (closeBanner) {
        closeBanner.addEventListener('click', function() {
          const banner = document.getElementById('slidingBanner');
          if (banner) {
            banner.classList.remove('show');
            banner.style.visibility = 'hidden';
          }
        });
      }
    } else {
      // Remove the banner from the DOM if the random number is not 1
      const banner = document.getElementById('slidingBanner');
      if (banner) {
        banner.remove();
      }
    }
  });
</script>

<!-- Sliding Banner END -->
