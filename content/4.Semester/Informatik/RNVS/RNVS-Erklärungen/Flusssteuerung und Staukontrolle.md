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
date modified: Sunday, 9. June 2024, 23:58
---

# Flusssteuerung und Staukontrolle

Die Flusssteuerung und Staukontrolle sind zwei wesentliche Mechanismen in Netzwerkprotokollen, die dazu beitragen, die Effizienz und Zuverlässigkeit der Datenübertragung zwischen Computern in einem Netzwerk zu gewährleisten. Diese Techniken sind besonders wichtig in Umgebungen, wo das Risiko von Datenverlust oder Netzwerküberlastung besteht.

## Flusssteuerung

Die Flusssteuerung ist ein Verfahren zur Steuerung der Datenmenge, die zwischen zwei Geräten übertragen wird, um sicherzustellen, dass der Sender nicht mehr Daten sendet, als der Empfänger verarbeiten und bestätigen kann. Ziel ist es, eine Überflutung des Empfängerspeichers zu vermeiden, was zu Datenverlust führen könnte.

- **Ziel**: Sicherstellen, dass der Empfänger nicht mehr Daten empfängt, als er verarbeiten kann, um Überflutung und Datenverlust zu vermeiden.
- **Methoden**:
  - **Schiebefensterverfahren (Sliding Window Protocol)**: Dieses Verfahren verwendet ein Fenster, das auf der Empfängerseite definiert ist, um die Menge der Daten, die gesendet werden können, bevor eine Bestätigung erforderlich ist, zu begrenzen.
  - **Quittungsbasiertes Senden (Acknowledgement Based Sending)**: Hierbei sendet der Empfänger nach dem Empfang einer bestimmten Datenmenge eine Bestätigung zurück zum Sender, der daraufhin die nächsten Daten sendet.
  - **Ratenbasierte Steuerung (Rate Based Control)**: Bei dieser Methode wird die Übertragungsrate basierend auf der aktuellen Netzwerklast oder den Empfängerkapazitäten dynamisch angepasst.

## Staukontrolle

Die Staukontrolle zielt darauf ab, Überlastungen im Netzwerk zu vermeiden. Sie regelt den Datenverkehr, um zu verhindern, dass zu viele Daten gleichzeitig gesendet werden und somit die Netzwerkleistung beeinträchtigen.

- **Ziel**: Reduzierung der Netzwerküberlastung, um hohe Latenzzeiten und Paketverlust zu vermeiden und die Datenübertragungsqualität zu erhalten.
- **Methoden**:
  - **Slow Start**: Eine Technik, bei der die Übertragungsrate von Verbindungen langsam gesteigert wird, beginnend mit einem niedrigen Schwellenwert, der schrittweise erhöht wird, bis ein optimaler Durchsatz erreicht ist oder Paketverlust eintritt.
  - **Congestion Avoidance**: Sobald die Übertragungsrate einen bestimmten Schwellenwert erreicht, wird die Rate so angepasst, dass das Risiko einer Überlastung minimiert wird.
  - **Fast Retransmit**: Diese Technik erkennt verlorene Segmente schneller und fordert eine erneute Übertragung an, ohne auf einen Timeout zu warten.
  - **Fast Recovery**: Nach dem Erkennen eines Paketverlusts reduziert diese Methode die Sendefenstergröße nicht sofort auf Null, sondern halbiert sie, um den Durchsatz zu erhalten und gleichzeitig das Netzwerk zu entlasten.

Die Kombination aus Flusssteuerung und Staukontrolle ermöglicht eine effiziente und zuverlässige Netzwerkkommunikation, indem sie sicherstellt, dass Datenpakete weder verloren gehen noch das Netzwerk überlastet wird. Diese Techniken sind unerlässlich für die Aufrechterhaltung der Leistung und Stabilität von Netzwerken, besonders in hochvolumigen oder dynamischen Umgebungen.

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
