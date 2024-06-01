---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Monday, 13. May 2024, 00:10
date modified: Monday, 13. May 2024, 00:16
---

1. **Internet-Modell: gesamte Anwendungssystem ist eine einzige Schicht.**

   - Im Internet-Modell, auch bekannt als TCP/IP-Modell, sind die Anwendungsdienste nicht in mehrere Schichten aufgeteilt, wie es beim OSI-Modell der Fall ist. Stattdessen werden alle Anwendungsdienste und -protokolle (wie HTTP, FTP, SMTP) in einer einzigen Schicht zusammengefasst, die oft als Anwendungsschicht bezeichnet wird. Dies führt zu einer Vereinfachung im Vergleich zum OSI-Modell, das separate Schichten für Darstellung, Sitzung und Anwendung hat.

2. **Funktionen der ISO/OSI-Schichten 5 und 6 sind nicht in einer eigenen Schicht gekapselt, dadurch nicht modifizierbar/ersetzbar, eng an Anwendungen gekoppelt.**

   - Die Sitzungs- (Schicht 5) und Darstellungsschicht (Schicht 6) im OSI-Modell sind im Internet-Modell nicht als separate Schichten vorhanden. Die Funktionen, die in diesen Schichten behandelt werden, wie Sitzungsmanagement und Datenformatierung, sind direkt in den Anwendungen selbst oder teilweise in der Transportebene (TCP/IP) integriert. Dies kann Flexibilität in der Entwicklung und Anpassung von Protokollen einschränken, da Änderungen an diesen Funktionen direkte Eingriffe in die Anwendungslogik oder die Transportprotokolle erfordern.

3. **Es gibt kein allgemeines Sitzungskonzept.**

   - Im Internet-Modell gibt es keine explizite Sitzungsschicht, die Sitzungen zwischen Endnutzer-Anwendungen verwaltet. Das Management von Sitzungen wird entweder von den Anwendungen selbst oder vom Transportprotokoll (wie TCP, das Verbindungen verwaltet) übernommen. Dies kann die Implementierung komplexer Interaktionen zwischen Anwendungen vereinfachen, beschränkt jedoch die universelle Handhabung von Sitzungsaspekten über verschiedene Anwendungen hinweg.

4. **Es besteht keine transparente Anpassung der Darstellung.**
   - Da das Internet-Modell keine spezifische Darstellungsschicht wie das OSI-Modell hat, müssen Anwendungen oft selbst für die Datenformatierung und -codierung sorgen. Dies führt dazu, dass jede Anwendung eigene Mechanismen für solche Funktionen implementieren muss, was zu Inkonsistenzen führen kann und die Interoperabilität zwischen unterschiedlichen Systemen und Plattformen erschwert.

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
