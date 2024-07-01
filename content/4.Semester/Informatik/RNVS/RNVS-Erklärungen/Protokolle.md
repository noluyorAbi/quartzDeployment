---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema: "[[RNVS-4VL-10-05-2024]]"
Benötigte Zeit:
date created: Thursday, 9. May 2024, 23:47
date modified: Wednesday, 19. June 2024, 21:15
---

# Protokolle

In der Transportschicht sind mehrere Protokolle integriert, die für die Regelung des Datenflusses zwischen verschiedenen Netzwerkschichten entscheidend sind. Die bedeutendsten Protokolle hier sind das Transmission Control Protocol (TCP) und das User Datagram Protocol (UDP), die unterschiedliche Ansätze für die Datenübertragung bieten.

## TCP (Transmission Control Protocol)

TCP ist ein verbindungsorientiertes Protokoll, das auf eine sichere und zuverlässige Datenübermittlung zwischen kommunizierenden Endsystemen ausgerichtet ist. Dieses Protokoll gewährleistet die korrekte Reihenfolge und Vollständigkeit der übertragenen Daten durch eine Reihe von Mechanismen.

### Eigenschaften von TCP

- **Verbindungsorientiert**: Bevor Daten übertragen werden, wird eine Verbindung zwischen den beteiligten Parteien hergestellt.
- **Zuverlässigkeit**: TCP gewährleistet durch den Einsatz von Sequenznummern und Quittungen, dass alle Daten vollständig und in der richtigen Reihenfolge beim Empfänger ankommen. Verlorene oder beschädigte Datenpakete werden neu übertragen.
- **Fluss- und Staukontrolle**: Integrierte Mechanismen regulieren den Datenfluss, um Überlastungen im Netzwerk zu vermeiden und die Datenübertragung effizient zu gestalten.

## UDP (User Datagram Protocol)

Im Gegensatz zu TCP ist UDP ein verbindungsloses Protokoll, das sich durch geringeren Overhead und höhere Übertragungsgeschwindigkeiten auszeichnet, aber weniger Zuverlässigkeit bietet. Es eignet sich besonders für Anwendungen, bei denen Geschwindigkeit wichtiger ist als die fehlerfreie Lieferung der Daten.

### Eigenschaften von UDP

- **Verbindungslos**: Es findet kein vorheriger Verbindungsaufbau statt; Datenpakete, sogenannte Datagramme, werden ohne vorherige Absprache gesendet.
- **Schnell**: Die Abwesenheit eines Verbindungsaufbaus und der damit verbundenen Verwaltungsaufgaben reduziert die Verzögerungen, wodurch die Datenübertragung beschleunigt wird.
- **Unzuverlässig**: UDP bietet keine Mechanismen für die Überprüfung der Ankunft oder Reihenfolge der Daten. Paketverluste und -verzerrungen werden nicht automatisch korrigiert, was zu Dateninkonsistenzen führen kann.

Beide Protokolle, TCP und UDP, spielen eine zentrale Rolle in der modernen Netzwerkkommunikation, indem sie unterschiedliche Bedürfnisse hinsichtlich Geschwindigkeit und Zuverlässigkeit erfüllen.

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
