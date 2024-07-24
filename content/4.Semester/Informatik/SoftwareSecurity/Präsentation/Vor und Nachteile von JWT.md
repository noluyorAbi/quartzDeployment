---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Friday, 28. June 2024, 00:13
date modified: Friday, 28. June 2024, 01:20
---

**Vorteile:**

- **Selbstenthaltend:**
  - Enthält alle notwendigen Informationen im Token selbst.
  - Kein Bedarf an zusätzlichen Datenbankabfragen zur Authentifizierung.
- **Sicherheit:**
  - Unterstützt verschiedene Verschlüsselungsalgorithmen wie HS256 und RS256.
  - Signierte Tokens garantieren die Integrität und Authentizität der Daten.
- **Stateless:**
  - Tokens erfordern keine serverseitige Speicherung von Sitzungsdaten.
  - Verbessert die Skalierbarkeit von Anwendungen, da der Serverzustand nicht gespeichert werden muss.
- **Interoperabilität:**
  - JWT ist weit verbreitet und wird von vielen Plattformen und Programmiersprachen unterstützt.
  - Einfach zu implementieren in verschiedenen Entwicklungsumgebungen.
- **Effizient:**
  - Kompakte Größe ermöglicht schnellen Transport und einfache Speicherung.
  - Kann problemlos in HTTP-Headern übertragen werden, was die Kommunikation zwischen Client und Server erleichtert.

**Nachteile:**

- **Sicherheit bei langer Lebensdauer:**
  - Tokens mit langer Lebensdauer sind anfällig für Missbrauch, falls sie gestohlen werden.
  - Regelmäßige Erneuerung und Invalidierung von Tokens ist notwendig, um Sicherheitsrisiken zu minimieren.
- **Größe:**
  - JWTs sind größer als einfache Sitzungs-IDs, da sie mehr Informationen enthalten.
  - Kann die Bandbreite und Speicheranforderungen erhöhen, besonders bei vielen gleichzeitigen Anfragen.
- **Fehlende Rücknahme:**
  - Einmal ausgestellte Tokens können nicht einfach ungültig gemacht werden.
  - Erfordert zusätzliche Maßnahmen wie Blacklisting, um kompromittierte Tokens zu widerrufen.
- **Anfällig für kompromittierte Secrets:**
  - Wenn das Geheimnis (Secret) kompromittiert wird, sind alle ausgestellten Tokens gefährdet.
  - Sicherheitsmaßnahmen zur Geheimhaltung der Schlüssel sind entscheidend.
- **Limited Token Updates:**
  - Aktualisierungen von Tokens sind kompliziert und oft mit Neuausstellung verbunden.
  - Schwierigkeit, bestehende Tokens zu aktualisieren, ohne den Benutzerfluss zu stören.

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
