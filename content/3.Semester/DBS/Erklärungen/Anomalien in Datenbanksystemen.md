---
created: 2024-03-14 18:09
last modified: 2024-03-14 18:09
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Thursday, 14. March 2024, 18:09
date modified: Thursday, 4. April 2024, 16:56
---

# Anomalien in Datenbanksystemen

In Datenbanksystemen können Anomalien auftreten, wenn die Datenstruktur nicht sorgfältig entworfen ist. Diese Unstimmigkeiten können die Integrität der Datenbank beeinträchtigen und führen oft zu inkonsistenten oder fehlerhaften Daten. Die Haupttypen von Anomalien sind:

## Einfügeanomalie

- **Beschreibung**: Schwierigkeiten beim Hinzufügen neuer Daten.
- **Problem**: Notwendige Daten fehlen, um einen neuen Eintrag hinzuzufügen, weil jede Information in der Tabelle von anderen abhängig ist.
- **Beispiel**: Ein neues Product kann nicht hinzugefügt werden, ohne dass ein zugehöriger Kunde existiert.

## Entfernungsanomalie

- **Beschreibung**: Unbeabsichtigtes Löschen von Daten.
- **Problem**: Beim Löschen eines Datensatzes gehen zusätzliche, unbeabsichtigte Informationen verloren.
- **Beispiel**: Das Löschen eines Mitarbeiters führt zum Verlust seiner zugeordneten Projektdaten.

## Änderungsanomalie

- **Beschreibung**: Inkonsistenzen beim Ändern von Daten.
- **Problem**: Änderungen an Daten in einer Tabelle müssen mehrfach durchgeführt werden, um Konsistenz zu gewährleisten.
- **Beispiel**: Ändern der Address eines Kunden erfordert mehrere Änderungen, wenn der Kunde mehrmals in der Tabelle aufgeführt ist.

## Redundanz

- **Beschreibung**: Überflüssige Kopien von Daten.
- **Problem**: Mehrfache und unnötige Speicherung derselben Daten, was zu Speicherplatzverschwendung und potenziellen Inkonsistenzen führt.
- **Beispiel**: Ein Kunde ist mit der gleichen Address in mehreren Datensätzen gespeichert, was zu Schwierigkeiten bei der Aktualisierung führt.

## Vermeidung von Anomalien

- **Normalisierung**: Durchführen von Normalisierungsprozessen, um die Daten in logische Einheiten zu unterteilen und Redundanzen zu reduzieren.
- **Integritätsregeln**: Implementieren von Datenintegritätsregeln wie Primärschlüssel, Fremdschlüssel, Check-Constraints, um die Konsistenz der Daten zu gewährleisten.

Das Verständnis und die Vermeidung dieser Anomalien sind entscheidend für die Aufrechterhaltung der Datenintegrität, der Effizienz der Datenmanipulation und der allgemeinen Zuverlässigkeit eines Datenbanksystems.

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
