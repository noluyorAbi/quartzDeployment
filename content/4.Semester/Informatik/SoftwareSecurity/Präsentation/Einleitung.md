---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Monday, 24. June 2024, 13:40
date modified: Monday, 24. June 2024, 16:04
---

Hallo zusammen,

heute möchte ich euch das Thema ‘Representation of Claims’ anhand von JSON-Web-Tokens, kurz JWTs, vorstellen. Um das Ganze anschaulicher zu machen, beginnen wir mit einem kleinen Gedankenexperiment.

Stellt euch vor, ihr seid in einem internationalen Flughafen. Ihr müsst eure Identität nachweisen, um durch die Sicherheitskontrolle zu kommen, euer Gepäck abzugeben und schließlich an Bord eures Fluges zu gehen. An jedem dieser Punkte benötigt ihr einen gültigen Nachweis – sei es euer Pass, euer Ticket oder eine Bordkarte.

In der digitalen Welt haben wir ähnliche Herausforderungen. Wie können wir sicherstellen, dass die Informationen, die wir austauschen, echt und unverfälscht sind? Wie können wir garantieren, dass nur die berechtigten Personen Zugang zu sensiblen Daten oder Diensten erhalten?

Hier kommen JSON-Web-Tokens ins Spiel. Sie sind wie digitale Pässe, die sicherstellen, dass unsere Identität und andere relevante Informationen sicher und effizient über das Internet übertragen werden können. Heute zeige ich euch, wie JWTs zur Repräsentation von Claims verwendet werden, warum sie so mächtig sind und wie sie die Sicherheit und Effizienz in modernen Anwendungen gewährleisten können.

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
