---
tags:
  - 4semester
  - BaySta
  - statistik
fach: "[[BaySta]]"
Thema: "[[BaySta-Blatt-2]]"
Benötigte Zeit:
date created: Friday, 3. May 2024, 19:39
date modified: Sunday, 14. July 2024, 01:19
---

> [!tip] Merkzettel
> Posteriori ist gleiche Form wie Priori nur mit anderen Pararmetern

Eine konjugierte Verteilung, genauer gesagt eine konjugierte Prior-Verteilung, spielt eine wichtige Rolle im Rahmen der Bayesianischen Statistik. Sie ermöglicht eine elegante mathematische Handhabung und Interpretation von Posterior-Verteilungen, wenn man Vorwissen oder Annahmen über die Parameter einer Wahrscheinlichkeitsverteilung einbringen möchte.

# Grundlagen der Bayesianischen Statistik

In der Bayesianischen Statistik aktualisiert man seine Glaubenswahrscheinlichkeiten (die "Prior"-Verteilung) über einen Parameter basierend auf beobachteten Daten (die "Daten" oder "Likelihood") zu einer "Posterior"-Verteilung. Dies geschieht mithilfe des Bayes'schen Theorems:

$$
\text{Posterior} \propto \text{Likelihood} \times \text{Prior}
$$

# Konjugierte Prior-Verteilung

Eine Prior-Verteilung heißt **konjugiert** zur Likelihood-Funktion einer bestimmten Verteilung, wenn das Posterior die gleiche funktionale Form wie der Prior aufweist. Das bedeutet, dass die mathematische Form des Posterior sich nicht ändert, sondern nur seine Parameter aktualisiert werden. Dies vereinfacht die Berechnung des Posteriors erheblich, da die funktionale Form bekannt bleibt und man sich nur auf die Aktualisierung der Parameter konzentrieren muss.

# Vorteile konjugierter Prior-Verteilungen

1. **Recheneffizienz**: Die Verwendung einer konjugierten Prior-Verteilung erleichtert die analytische Behandlung und Berechnung des Posteriors, da keine komplexen numerischen Methoden benötigt werden, um die Posterior-Verteilung zu bestimmen.
2. **Interpretierbarkeit**: Da sich die Form des Posteriors nicht ändert, ist es einfacher, die Effekte der Daten auf die Prior-Annahmen zu interpretieren.

3. **Anwendbarkeit**: In vielen praktischen Anwendungen, wo die Berechnung des Posteriors sonst numerisch aufwendig wäre, bieten konjugierte Priors eine schnelle und genaue Möglichkeit, statistische Schlüsse zu ziehen.

# Beispiele für konjugierte Prior-Verteilungen

- **Exponentialverteilung und Gamma-Verteilung**: Wie im obigen Beispiel gesehen, ist die Gamma-Verteilung ein konjugierter Prior für den Rate-Parameter $\lambda$ einer Exponentialverteilung.
- **Binomialverteilung und Beta-Verteilung**: Die Beta-Verteilung ist ein konjugierter Prior für den Parameter einer Binomialverteilung (oder für die Wahrscheinlichkeit eines Bernoulli-Prozesses).
- **Normalverteilung**: Bei einer Normalverteilung mit bekannter Varianz ist die Normalverteilung selbst ein konjugierter Prior für den Mittelwert.

# Abschluss

Konjugierte Priors sind also ein mächtiges Werkzeug in der Bayesianischen Analyse, das die Handhabung und Interpretation von Posterior-Verteilungen vereinfacht und in vielen statistischen Modellen und Anwendungen eingesetzt wird. Sie sind besonders nützlich, wenn man schnell und wiederholt Posterior-Updates durchführen muss, wie es oft in Echtzeitanwendungen oder bei der sequentiellen Datenanalyse der Fall ist.

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
