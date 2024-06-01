---
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Wednesday, 10. April 2024, 21:58
date modified: Thursday, 9. May 2024, 22:09
---

# [ !! Perfektes Video (*Youtube*)](https://www.youtube.com/watch?v=YiO8sO6KBIs)
# Kanonische Überdeckung in Relationalen Datenbanken

## Ziel der Kanonischen Überdeckung

Das Ziel der kanonischen Überdeckung ist es, in einer relationalen Datenbank jede Information genau einmal zu speichern und keine Redundanzen zuzulassen. Durch die Normalisierung in einzelne Relationen wird dieses Ziel erreicht.

## Vorteile

- **Vermeidung von Redundanzen:** Redundanzen erhöhen den Speicherbedarf und können zu Inkonsistenzen führen.
- **Verbesserte Datenintegrität:** Die Daten werden konsistent gespeichert.
- **Erhöhte Effizienz:** Datenabfragen können effizienter durchgeführt werden.
- **Erleichterte Datenpflege:** Änderungen an den Daten müssen nur an einer Stelle durchgeführt werden.

## Nachteile

- **Erhöhte Komplexität:** Die Datenbankstruktur kann durch die Normalisierung komplexer werden.
- **Erhöhter Performanceaufwand:** Die Durchführung von Abfragen kann durch die Normalisierung langsamer werden.

## Voraussetzungen

- **Strukturierung:** Die Daten müssen strukturiert sein.
- **Vollständigkeit und Konsistenz:** Die Daten müssen vollständig und konsistent sein.

## Definition und Unbestimmtheit

Die kanonische Überdeckung \( F_c \) einer Menge funktionaler Abhängigkeiten \( F \) ist durch den Einsatz eines spezifischen Algorithmus charakterisiert, welcher jedoch zu unterschiedlichen Ergebnissen führen kann, da er nicht eindeutig ist.

### Algorithmus zur Bestimmung der Kanonischen Überdeckung

1. **Zerlegung in triviale und nichttriviale funktionale Abhängigkeiten (FDs):**
   - Trivial: FDs, deren linke Seite ein Superkey ist.
   - Nichttrivial: FDs, deren linke Seite kein Superkey ist.

2. **Eliminierung von redundanten FDs:** Entfernung von FDs, die aus anderen FDs ableitbar sind.

3. **Transformation in Boyce-Codd-Normalform (BCNF):** Zerlegung von FDs, deren linke Seite kein Superkey ist, in mehrere FDs, sodass jede linke Seite ein Superkey wird.

### Beispiel

Gegeben seien die funktionalen Abhängigkeiten:

- A -> B
- B -> C
- C -> A

Nach dem Algorithmus könnten zwei mögliche kanonische Überdeckungen entstehen:

- **Fc1:** {A -> B, B -> C}
- **Fc2:** {AB -> C, BC -> A}

## Fazit







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






