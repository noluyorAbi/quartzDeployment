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
