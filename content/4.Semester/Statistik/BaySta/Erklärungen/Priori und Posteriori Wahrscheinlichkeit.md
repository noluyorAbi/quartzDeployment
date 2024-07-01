---
Benötigte Zeit:
tags:
  - 4semester
  - BaySta
  - statistik
  - Erklaerung
fach: "[[BaySta]]"
Thema:
  - "[[BaySta-Kapitel-Einstieg]]"
date created: Wednesday, 24. April 2024, 23:23
date modified: Friday, 26. April 2024, 02:02
---

# Priori und Posteriori Wahrscheinlichkeit

**Priori** und **Posteriori** sind Begriffe, die in der Bayes'schen Statistik verwendet werden, um die Wahrscheinlichkeit eines Ereignisses vor und nach Beobachtungen oder Messungen zu beschreiben.

## Priori-Wahrscheinlichkeit

Die **Priori-Wahrscheinlichkeit** ist die anfängliche Annahme oder der Glaube an die Wahrscheinlichkeit eines Ereignisses, bevor irgendwelche neuen Daten oder Beobachtungen berücksichtigt werden. Sie basiert auf vorhandenem Wissen, Erfahrung oder subjektiven Einschätzungen. Die Priori-Wahrscheinlichkeit wird oft mit $P(A)$ bezeichnet, wobei $A$ das Ereignis ist.

## Posteriori-Wahrscheinlichkeit

Die **Posteriori-Wahrscheinlichkeit** wird nach Berücksichtigung neuer Daten oder Beobachtungen berechnet. Sie ist die aktualisierte Wahrscheinlichkeit eines Ereignisses basierend auf den neuen Informationen. Die Posteriori-Wahrscheinlichkeit wird oft mit $P(A|B)$ bezeichnet, wobei $A$ das Ereignis und $B$ die neuen Daten oder Beobachtungen sind. Sie wird mithilfe des Bayes-Theorems berechnet.

Das Bayes-Theorem ermöglicht es, die Posteriori-Wahrscheinlichkeit eines Ereignisses zu berechnen, indem die Priori-Wahrscheinlichkeit des Ereignisses sowie die Wahrscheinlichkeit der beobachteten Daten unter der Bedingung des Ereignisses und die Wahrscheinlichkeit der beobachteten Daten unabhängig vom Ereignis berücksichtigt werden.

Insgesamt ermöglichen Priori- und Posteriori-Wahrscheinlichkeiten eine formale Methode, um vorhandenes Wissen oder Glauben über ein Ereignis mit neuen Beobachtungen zu kombinieren und die Wahrscheinlichkeit dieses Ereignisses zu aktualisieren.

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
