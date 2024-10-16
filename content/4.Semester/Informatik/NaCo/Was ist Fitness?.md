---
date created: Tuesday, 15. October 2024, 21:35
date modified: Wednesday, 16. October 2024, 00:34
---

# In Betracht zur Aufgabe

```python
def fitness_phi(x):
    return max(x[0]**2 + x[1]**2, 50 - x[0]**2 - x[1]**2)
```

![[output.png]]

## Frage:

Which of the two recombination functions, `recombine_avg` and `recombine_xover`, is better suited for the optimization problem given by `fitness_phi`? Explain why. (3pts)

---

## Erklärung:

### Was ist Fitness?

In einem evolutionären Algorithmus beschreibt die **Fitness** die Qualität einer Lösung. Abhängig davon, ob es sich um ein **Minimierungsproblem** oder ein **Maximierungsproblem** handelt, strebt der Algorithmus entweder eine **niedrigere** oder **höhere** Fitness an:

- **Maximierungsproblem**: Höhere Fitnesswerte stehen für bessere Lösungen. Zum Beispiel ist eine Fitness von 100 besser als 50.
- **Minimierungsproblem**: Niedrigere Fitnesswerte stehen für bessere Lösungen. Hier wollen wir den Fitnesswert so **niedrig wie möglich** halten. Im Fall der Funktion `fitness_phi` handelt es sich um ein Minimierungsproblem, da wir an möglichst niedrigen Fitnesswerten interessiert sind.

### Ziel des Algorithmus

Das Hauptziel des evolutionären Algorithmus ist es, die **beste Fitness** zu finden, je nach Problemstellung:

- Bei **Minimierungsproblemen** wie in diesem Fall wollen wir **niedrigere** Fitnesswerte erreichen.
- Bei **Maximierungsproblemen** würden wir nach **höheren** Fitnesswerten suchen.

### Problem bei `recombine_avg`

Der Grund, warum **`recombine_avg`** hier problematisch ist, liegt in der Art und Weise, wie diese Funktion arbeitet:

- **`recombine_avg`** erzeugt neue Individuen, deren Eigenschaften ein Durchschnitt der Elterngene sind. Das führt dazu, dass neue Individuen immer in der **Mitte** des Lösungsraums (zwischen den Eltern) liegen.
- In unserem Fall ist das problematisch, da die Fitnessfunktion zeigt, dass die **Fitness im Zentrum** des Suchraums **schlecht** ist (hohe Werte bei einem Minimierungsproblem). Das bedeutet, dass sich die neu erzeugten Individuen im Zentrum der Fitness-Landschaft „verfangen“, was eine schlechte Fitness zur Folge hat.

### Warum ist `recombine_xover` besser?

- **`recombine_xover`** erstellt neue Individuen, indem es die Gene der Eltern zufällig kombiniert. Dadurch entstehen **variablere Nachkommen**, die **nicht nur** um den Mittelwert der Eltern zentriert sind.
- Diese breitere Streuung hilft, verschiedene Bereiche des Suchraums zu erkunden, anstatt nur den schlechten Fitnessbereich im Zentrum zu fokussieren. Dadurch erhöht sich die Chance, Bereiche mit **besserer (niedrigerer) Fitness** zu finden.

---

## Zusammenfassung:

- **Fitness** ist ein Maß für die Qualität einer Lösung.
- Bei **Minimierungsproblemen** wollen wir **niedrigere Fitnesswerte**.
- **`recombine_avg`** konzentriert neue Individuen stark um den Mittelwert der Eltern. Da die Fitness in der Mitte des Suchraums schlecht ist, ist diese Methode hier suboptimal.
- **`recombine_xover`** verteilt die Individuen breiter im Suchraum und erlaubt so eine bessere Exploration, was die Wahrscheinlichkeit erhöht, Bereiche mit besserer Fitness zu finden.

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
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
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
