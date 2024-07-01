---
Thema:
tags:
  - 4semester
  - Erklaerung
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
date created: Thursday, 18. April 2024, 16:21
date modified: Wednesday, 19. June 2024, 21:18
---

# FSK-Erklärungen Verzeichnis

Willkommen zu den FSK-Erklärungen. Hier findest du eine Liste aller Themen mit den zugehörigen Erklärungen. Klicke auf einen Themennamen, um direkt zu den Erklärungen zu gelangen.

## Themen

- ## [[Beweisen]]

- ## [[CYK-Algorithmus]]

- ## [[Deterministisch Kontextfreie Sprachen und Kontextfreie Sprachen]]

- ## [[Endliche Geometrische Reihe]]

- ## [[FSK-Verzeichnis-Erklärungen]]

- ## [[Grammatiken]]

- ## [[Grundlegende Operationen auf formalen Sprachen]]

- ## [[Homomorphismen]]

- ## [[Induktion]]

- ## [[Induktiver Beweis für FSK1-1d]]

- ## [[Kellerautomaten]]

- ## [[Kleene-Stern]]

- ## [[Minimierung von DFAs]]

- ## [[Potenzmengenkonstruktion]]

- ## [[Pumping-Lemma]]

- ## [[Reguläre Ausdrücke]]

- ## [[Satz des Euklids]]

- ## [[Sätze]]

- ## [[Sprachen]]

- ## [[Wortproblem]]

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
