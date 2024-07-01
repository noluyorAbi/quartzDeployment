---
created: 2024-03-20 17:50
last modified: 2024-03-20 17:50
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Wednesday, 20. March 2024, 17:50
date modified: Thursday, 4. April 2024, 15:24
---

# Referenzielle Integrität in Datenbanksystemen

Referenzielle Integrität ist ein fundamentales Konzept in relationalen Datenbanksystemen. Sie spielt eine entscheidende Rolle bei der Aufrechterhaltung der Konsistenz und Korrektheit der Daten über verschiedene Tabellen hinweg. Dieses Konzept ist eng mit Fremdschlüsselbeziehungen zwischen Tabellen verbunden.

## [[DBS-Blatt 3#c) Was versteht man unter referenzieller Integrität?]]

- Bedingungen zur Sicherung der Datenintegrität bei Nutzung relationaler Datenbanken
  1. Ein Datensatz mit Fremdschlüssel kann nur dann eingefügt werden, wenn in der referenzierter Tabelle ein Datensatz mit den entsprechenden Werten als Primärschlüssel oder einem eindeutigen Alternativschlüssel existiert. _(nur erstellbar falls referenz existiert)_
  2. Datensatzlöschung oder Änderung ist nur möglich falls zu diesem Datensatz keine abhängigen Datensätze in Beziehung stehen _(nur bearbeitbar falls keine abhängigen Daten in Beziehung)_ **No dangeling references**

## Grundlagen der referenziellen Integrität

- **Definition:**

  - Referenzielle Integrität stellt sicher, dass eine Beziehung zwischen zwei Tabellen konsistent bleibt. Das bedeutet, dass jede Fremdschlüsselreferenz in einer Tabelle mit einem vorhandenen Primärschlüssel in einer anderen Tabelle übereinstimmen muss.

- **Zweck:**
  - Verhindert Dateninkonsistenzen und Widersprüche in relationalen Datenbanken.
  - Gewährleistet, dass Verknüpfungen zwischen Tabellen valide und nachvollziehbar sind.

## Umsetzung in Datenbanksystemen

- **Fremdschlüssel:**

  - Ein Fremdschlüssel in einer Tabelle verweist auf den Primärschlüssel einer anderen Tabelle und etabliert so eine referenzielle Beziehung.
  - Die referenzielle Integrität wird durchgesetzt, indem sichergestellt wird, dass jeder Wert des Fremdschlüssels in der referenzierenden Tabelle in der referenzierten Tabelle existiert.

- **Integritätsregeln:**
  - Beim Einfügen oder Aktualisieren von Daten müssen die Fremdschlüsselwerte in der referenzierenden Tabelle mit einem Primärschlüsselwert in der referenzierten Tabelle übereinstimmen.
  - Beim Löschen oder Ändern eines Primärschlüssels müssen entsprechende Maßnahmen ergriffen werden, um die Integrität der Daten zu wahren, wie etwa das Kaskadieren von Löschungen oder das Setzen von Nullwerten.

## Bedeutung für das Datenbankdesign

- **Datenkonsistenz:**

  - Sichert, dass alle referenzierten Daten gültig und konsistent bleiben, was für die Zuverlässigkeit von Datenbankabfragen und -operationen unerlässlich ist.

- **Beziehungserhaltung:**
  - Hält die logischen Verbindungen zwischen den Tabellen aufrecht, was für die Integrität des gesamten Datenbankmodells entscheidend ist.

## Herausforderungen und Lösungen

- **Herausforderungen:**

  - Komplexität bei der Verwaltung von Datenintegrität über zahlreiche Tabellen und Beziehungen hinweg.
  - Leistungsüberlegungen, besonders in großen Datenbanksystemen mit intensiven Datenmanipulationsoperationen.

- **Lösungsansätze:**
  - Einsatz von Datenbankmanagement-Systemen, die automatische Überprüfungen der referenziellen Integrität bieten.
  - Implementierung von Trigger- und Transaktionsmechanismen, um die Integrität auch bei komplexen Datenänderungen zu gewährleisten.

Referenzielle Integrität ist ein Eckpfeiler für die Zuverlässigkeit und Robustheit relationaler Datenbanken. Ihre korrekte Implementierung und Aufrechterhaltung ist entscheidend für die Verwaltung präziser, zuverlässiger und konsistenter Daten in einer Datenbank.

# Kurzgesagt

`Referenzielle Integrität sichert in Datenbanksystemen, dass Beziehungen zwischen Tabellen stets konsistent und valide bleiben, indem sie die Gültigkeit von Fremdschlüsselbeziehungen gewährleistet.`

# Was du dir unbedingt merken musst:

Die Einhaltung der referenziellen Integrität ist entscheidend für die Aufrechterhaltung einer fehlerfreien, zuverlässigen Datenstruktur, indem sie sicherstellt, dass jede Referenz über Fremdschlüssel auf ein tatsächlich existierendes, korrektes Datenelement zeigt.

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
