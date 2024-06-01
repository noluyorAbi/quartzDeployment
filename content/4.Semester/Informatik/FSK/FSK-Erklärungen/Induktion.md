---
tags:
  - 4semester
  - FSK
  - Erklaerung
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: 
date created: Sunday, 21. April 2024, 15:16
date modified: Wednesday, 1. May 2024, 08:53
---

# Aufbau einer Induktion

1. **Induktionsanfang:** A(0) gilt.
2. **Induktionsschritt:** Für eine beliebige Zahl $n ∈ N>0$ gilt: Wenn für alle $m ∈ N A(m)$ gilt, dann gilt auch $A(n)$


# Beispiel Induktion
## Skript: 2.1 Natürliche Zahlen, Alphabete, Wörter und Sprachen

Wir bezeichnen die Menge der natürlichen Zahlen einschließlich der Null mit $\mathbb{N}$, d.h. $\mathbb{N} = \{0,1,2,3,…\}$ und mit $\mathbb{N}_0$ bezeichnen wir die Menge der natürlichen Zahlen ohne Null, d.h. $\mathbb{N}_0 = \{1,2,3,…\}$.

Um Aussagen für alle natürlichen Zahlen zu beweisen, verwenden wir oft das Prinzip der vollständigen Induktion:

> **Definition 2.1.1** (Beweisprinzip der Vollständigen Induktion). Um zu zeigen, dass eine Aussage $A(n)$ für jede natürliche Zahl $n \in \mathbb{N}$ gilt, genügt es, die folgenden beiden Aussagen zu zeigen:
> 1. **Induktionsanfang**: $A(0)$ gilt.
> 2. **Induktionsschritt**: Für eine beliebige Zahl $n \in \mathbb{N}_0$ gilt: Wenn für alle $m \in \mathbb{N}_0$ mit $m < n$ auch $A(m)$ gilt, dann gilt auch $A(n)$.

Wir demonstrieren die vollständige Induktion:

Beispiel 2.1.2. Für alle $n \in \mathbb{N}$ gilt:
$$
\sum_{i=1}^n i = \frac{(n + 1)n}{2} 
$$
Wir zeigen die Aussage durch Induktion über $n$, d.h. die Aussage $A(n)$ ist $\sum_{i=1}^n i = \frac{(n + 1)n}{2}$.

 - **Induktionsanfang**: Die zu zeigende Aussage $A(0)$ ist $\sum_{i=1}^0 i = 0$. Dies folgt direkt aus der Definition der Summe.
 - **Induktionsschritt**: Sei $n \in \mathbb{N}_0$ eine beliebige, positive natürliche Zahl. Wir dürfen für alle $m < n$ die Aussage $A(m)$ annehmen und müssen $A(n)$ zeigen. Da $n$ positiv ist, existiert ein $k \in \mathbb{N}$ mit $n = k + 1$, und da $k < n$ ist, dürfen wir insbesondere $A(k)$ annehmen, also $\sum_{i=1}^k i = \frac{(k + 1)k}{2}$. Wir müssen $A(k + 1)$ zeigen, also 
 $$
 \sum_{i=1}^{k+1} i = \frac{(k + 2)(k + 1)}{2} 
$$
 Es gilt 
$$
 \sum_{i=1}^{k+1} i = \left( \sum_{i=1}^k i \right) + k + 1 = \frac{k(k + 1)}{2} + k + 1 
$$
Nach Definition. Nach Annahme ist diese Summe gleich 
$$
 \frac{k(k + 1)}{2} + k + 1 
$$
Durch Ausrechnen erhält man 
 $$
 \frac{k(k + 1)}{2} + k + 1 = \frac{k(k + 1) + 2(k + 1)}{2} = \frac{(k + 2)(k + 1)}{2} 
$$
 also insgesamt die zu zeigende Eigenschaft.












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






