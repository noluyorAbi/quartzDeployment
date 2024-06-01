---
tags:
  - 4semester
  - BaySta
  - statistik
fach: "[[BaySta]]"
Thema:
Benötigte Zeit:
date created: Thursday, 2. May 2024, 15:06
date modified: Thursday, 2. May 2024, 15:13
---

>[!info] Erlang-Verteilung und die Posteriori
>
> ## Erlang-Verteilung und ihre Posteriori-Analyse
> 
> Die Erlang-Verteilung ist eine spezielle Form der Gamma-Verteilung und wird oft verwendet, um die Summe von mehreren unabhängigen, identisch exponentialverteilten Wartezeiten zu beschreiben. Diese wird insbesondere in der Warteschlangentheorie und Zuverlässigkeitstechnik angewendet. Die Erlang-Verteilung ist definiert durch zwei Parameter: die Form $n$, welche die Anzahl der Ereignisse angibt, und die Rate $\lambda$, welche die Rate dieser Ereignisse darstellt.
> 
> ### Mathematische Definition
> Die Dichte der Erlang-Verteilung, Erlang$(n, \lambda)$, ist gegeben durch:
> $$
> f(x) = \frac{1}{(n-1)!} \lambda^n x^{n-1} e^{-\lambda x}
> $$
> Hierbei ist $x$ die Summe der Wartezeiten, und der Parameter $n$ muss eine ganze Zahl sein.
> 
> ### Bayesianische Analyse
> Wenn $X$ erlang-verteilt mit bekannten $n$ und unbekanntem $\lambda$ ist und $\lambda$ eine Gamma-Priori-Verteilung $\text{Ga}(a, b)$ hat, ergibt die bayesianische Analyse eine Posteriori-Verteilung für $\lambda$, die auch eine Gamma-Verteilung ist.
> 
> #### Posteriori-Verteilung
> Die Parameter der Posteriori-Verteilung $\text{Ga}(a', b')$ werden aktualisiert zu:
> $$
> a' = a + n, \quad b' = b + x
> $$
> - **$a'$ (Formparameter):** Erhöht um die Anzahl der Ereignisse $n$, da jedes Ereignis als "Erfolg" im Sinne des Bayes'schen Lernens zählt.
> - **$b'$ (Ratenparameter):** Erhöht um die beobachtete Summe der Wartezeiten $x$, da $\lambda$ in der Erlang-Verteilung die Rate dieser Wartezeiten darstellt und eine höhere Summe der Wartezeiten eine höhere Rate impliziert, die für die Berechnung der neuen Erwartung von $\lambda$ benötigt wird.
> 
> ### Fazit
> Diese Analyse ist zentral für Anwendungen, wo die Verteilung von Wartezeiten in Prozessen (wie Telekommunikationsnetzwerken oder Fertigungsstraßen) modelliert werden muss und wo Parameter unsicher sind und aus Daten gelernt werden sollen.








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






