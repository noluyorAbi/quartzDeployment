---
created: 2024-03-12 17:27
last modified: 2024-03-12 17:29
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Tuesday, 12. March 2024, 17:27
date modified: Friday, 5. April 2024, 01:44
---

# 3 - Ebenenarchitektur

Die 3-Ebenen-Architektur ist ein Rahmenwerk für Datenbanksysteme, das eine effiziente Datenverwaltung ermöglicht, indem es die Struktur in drei Hauptebenen unterteilt: die externe, konzeptionelle und interne Ebene. Diese Aufteilung fördert Datenabstraktion und Unabhängigkeit, verbessert die Integrität und Sicherheit der Daten und vereinfacht die Datenverwaltung.

## Ebenen der Architektur

- **Externe Ebene (Benutzersicht):**

  - Individualisierte Ansicht der Daten für verschiedene Benutzer oder Benutzergruppen.
  - Ermöglicht die Anpassung der Datenpräsentation an die spezifischen Anforderungen der Endbenutzer.
    → _User-Interface_

- **Konzeptionelle Ebene (Gemeinsame Sicht):**

  - Zentrale Definition aller Daten, Beziehungen, Sicherheits- und Integritätsregeln.
  - Einheitliche und konsistente Sicht auf alle Daten im System.
    → _Schema_

- **Interne Ebene (Speicherungssicht):**
  - Betrifft die physische Speicherung der Daten auf Speichermedien.
  - Beinhaltet Datenstrukturen, Speicherorte, Indexierung und Zugriffspfade.
    → _Speicherart_

## Logische Datenunabhängigkeit

- **Definition:** Fähigkeit, das konzeptionelle Schema zu ändern, ohne dabei das externe Schema oder Anwendungen zu beeinträchtigen.
- **Vorteile:**
  - Anpassungen an der Datenbankstruktur (wie das Hinzufügen neuer Attribute) erfordern keine Änderung der Anwendungsprogramme.
  - Erleichtert die evolutionäre Entwicklung der Datenbank, um sich ändernden Geschäftsanforderungen gerecht zu werden.

## Physische Datenunabhängigkeit

- **Definition:** Fähigkeit, das interne Schema zu ändern, ohne das konzeptionelle oder externe Schema zu beeinflussen.
- **Vorteile:**
  - Änderungen an der physischen Speicherung (wie Änderungen in der Dateiorganisation oder den Zugriffsmethoden) wirken sich nicht auf die Anwendungsschicht aus.
  - Optimierungen der Datenbankperformance können durchgeführt werden, ohne die Anwendungslogik oder Benutzerinteraktionen zu stören.

Durch die Implementierung dieser Architektur und die Einhaltung der Prinzipien der logischen und physischen Datenunabhängigkeit kann ein Datenbanksystem flexible, zuverlässig und wartungsfreundlich gestaltet werden, wobei es gleichzeitig eine hohe Datenqualität und Anwendungsfreundlichkeit bietet.

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
