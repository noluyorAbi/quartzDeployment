---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Sunday, 21. July 2024, 18:13
date modified: Sunday, 21. July 2024, 18:14
---

# Hauptunterschiede zwischen TCP Tahoe und TCP Reno:

1. **Nach einem Timeout:**

   - **TCP Tahoe:**

     - Setzt das Congestion Window (cwnd) auf 1 MSS zurück.
     - Setzt den Schwellenwert (ssthresh) auf die Hälfte des aktuellen cwnd.
     - Startet im Slow-Start-Modus neu.

   - **TCP Reno:**

     - Setzt das Congestion Window (cwnd) auf 1 MSS zurück.
     - Setzt den Schwellenwert (ssthresh) auf die Hälfte des aktuellen cwnd.
     - Startet im Slow-Start-Modus neu.

     Nach einem Timeout verhalten sich beide Algorithmen also ähnlich: sie setzen cwnd auf 1 MSS und halbieren ssthresh.

2. **Bei drei duplizierten ACKs (Triple Duplicate ACKs):**

   - **TCP Tahoe:**

     - Interpretiert drei duplizierte ACKs als Anzeichen für Paketverlust.
     - Setzt den Schwellenwert (ssthresh) auf die Hälfte des aktuellen cwnd.
     - Setzt das Congestion Window (cwnd) auf 1 MSS zurück.
     - Startet im Slow-Start-Modus neu.

   - **TCP Reno:**
     - Interpretiert drei duplizierte ACKs als Anzeichen für Paketverlust.
     - Setzt den Schwellenwert (ssthresh) auf die Hälfte des aktuellen cwnd.
     - Setzt das Congestion Window (cwnd) auf ssthresh + 3 MSS.
     - Wechselt in den "Fast Recovery"-Modus.
     - Im Fast Recovery-Modus: Für jedes zusätzliche duplizierte ACK erhöht cwnd um 1 MSS.
     - Sobald ein neues ACK für das fehlende Segment empfangen wird, setzt Reno cwnd auf ssthresh und wechselt in den Congestion Avoidance-Modus.

## Zusammenfassung:

- **TCP Tahoe:**

  - Nach einem Timeout oder drei duplizierten ACKs: Setzt cwnd auf 1 MSS, setzt ssthresh auf die Hälfte des aktuellen cwnd und startet im Slow-Start-Modus neu.

- **TCP Reno:**
  - Nach einem Timeout: Verhält sich wie Tahoe, setzt cwnd auf 1 MSS und ssthresh auf die Hälfte des aktuellen cwnd, startet im Slow-Start-Modus neu.
  - Bei drei duplizierten ACKs: Setzt ssthresh auf die Hälfte des aktuellen cwnd, setzt cwnd auf ssthresh + 3 MSS und geht in den Fast Recovery-Modus. Nach dem Empfang eines neuen ACKs für das fehlende Segment setzt Reno cwnd auf ssthresh und geht in den Congestion Avoidance-Modus.

**Fast Recovery** ist der entscheidende Unterschied, der TCP Reno effizienter macht, indem es nicht in den Slow-Start-Modus zurückkehrt, sondern einen schnelleren Übergang zur normalen Datenübertragung ermöglicht.

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> Please note that these are my own notes and solutions, and I cannot guarantee the complete accuracy of all solutions as I am still a student myself.
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
