---
created: 2024-03-11 20:37
last modified: 2024-03-11 20:37
fach: "[[Datenbanksysteme (DBS)]]"
tags:
  - DBS
date created: Monday, 11. March 2024, 20:37
date modified: Wednesday, 19. June 2024, 21:35
---

# DBS-Erklärungen Verzeichnis

Willkommen zu den DBS-Erklärungen. Hier findest du eine Liste aller Themen mit den zugehörigen Erklärungen. Klicke auf einen Themennamen, um direkt zu den Erklärungen zu gelangen.

## Themen

- ## [[3 - Ebenenarchitektur]]

- ## [[Aggregatfunktionen in SQL]]

- ## [[Anomalien in Datenbanksystemen]]

- ## [[Bereichskalkül]]

- ## [[CrossJoin in SQL]]

- ## [[Data Definition Language (DDL)]]

- ## [[Datenbankmanagementsystem (DBMS)]]

- ## [[DBS-Verzeichnis-Erklärungen]]

- ## [[Erweiterte Abfragen in SQL]]

- ## [[Kanonische Überdeckung]]

- ## [[Minimale Schlüssel]]

- ## [[Normalformen und Synthesealgorithmus]]

- ## [[Referenzielle Integrität]]

- ## [[Relationale Algebra]]

- ## [[Schedules]]

- ## [[Schlüsselkandidat vs. Primäres Attribut]]

- ## [[Transaktionen]]

- ## [[Tupelkalkül]]

- ## [[Unterschiede zwischen Datenbanksystemen und Dateiverwaltungssystemen]]

<!-- DISQUS SCRIPT COMMENT START -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
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
