---
Thema:
tags:
  - 4semester
  - "#informatik"
  - "#FSK"
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
date created: Tuesday, 16. April 2024, 11:20
date modified: Tuesday, 18. June 2024, 15:00
---

# Übersicht der Studieninhalte

## Wichtige Themen:

- Grammatiken bilden (siehe Blatt 1 und 2)
- NFA und DFA konstruieren (NFA leichter als DFA)
- Übersetzung von verschiedenen Formalisten (4.VL gesagt)
- Beweise Myhill und Nerode sind nicht klaussurrelevant (in 5.VL gesagt)
- Pumping Lemma wichtig (3.ZÜ gesagt)
  - Lemma verstehen, auswendig können und anwenden können

| Kategorie                                   | Beschreibung                                             |
| ------------------------------------------- | -------------------------------------------------------- |
| [[FSK-Vorlesungen]]                         | Zugang zu aufgezeichneten Vorlesungen und Materialien    |
| [[FSK-Verzeichnis-Erklärungen]]             | Detaillierte Erklärungen zu Fachspezifischen Konzepten   |
| [[FSK-Übungsblätter]]                       | Sammlung von Übungsblättern für das Selbststudium        |
| [[FSK-Klausuraufgaben]]                     | Archiv von Klausuraufgaben zur Prüfungsvorbereitung      |
| [[FSK-1-VL (16.04.2024)#Organisatorisches]] | Informationen zu organisatorischen Details der Vorlesung |

## [YT-Playlist Für Formale Sprachen](https://youtube.com/playlist?list=PLG_1tsKrsKVO2ANHX68UbrNgt7gZuH37H&si=P7VkP7JsWEl-4oLo)

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube-nocookie.com/embed/videoseries?si=OI_p_Q84Zi8xFs0U&amp;list=PLG_1tsKrsKVO2ANHX68UbrNgt7gZuH37H" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
