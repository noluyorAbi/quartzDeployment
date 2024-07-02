---
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 1. April 2024, 19:42
date modified: Monday, 8. April 2024, 14:00
---

# ER-Modell

- E/R steht für Entity/Relation
- Modellierung eines Datenbankschemas:
  - Attribute der jeweiligen
  - Zusammenhänge zwischen der jeweiligen Relation
- Erst nach der Modellierung kommt die Implementierung

- Entity: _▭_
  - Ein Entity existiert und ist unterscheidbar von anderen Entities
- Attribute : _⬭_
  - Charakteristische Eigenschaft von Entities, Schlüssel = identifiziert Entity eindeutig
- Relation/Beziehung: _◇_
  - Zusammenhänge zwischen Entities

## 1:1 - Beziehung

![1:1 - Beziehung](1zu1.png)

→ Zusammenfassung der beiden beteiligten Relationen zu einer

## 1:n - Beziehung

![1:n - Beziehung](1zuN.png)

→ Fremdschlüssel (Schlüssel des One-Entities) wird in der Relation des many-Entities aufgenommen

## m:n – Beziehung

![1:n - Beziehung](mzun.png)

→ Erzeugen einer eigenen Relation, die die Schlüssel der beteiligen Relationen enthält

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
