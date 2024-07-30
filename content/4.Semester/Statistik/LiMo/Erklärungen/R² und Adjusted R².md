---
date created: Tuesday, 30. July 2024, 00:46
date modified: Tuesday, 30. July 2024, 00:58
---

# R² und Adjusted R²

## Einführung

In der statistischen Modellierung, insbesondere in der Regressionsanalyse, sind R² und Adjusted R² wichtige Maße, um die Güte eines Modells zu beurteilen. Sie helfen dabei, zu verstehen, wie gut das Modell die Variabilität der abhängigen Variable erklärt.

## R² (Bestimmtheitsmaß)

R² zeigt, wie gut ein Modell die Daten erklärt. Es sagt uns, wie viel von dem, was wir messen, durch das Modell vorhergesagt wird. Ein höherer R²-Wert bedeutet, dass das Modell besser vorhersagt.

### Definition

R², auch Bestimmtheitsmaß genannt, zeigt an, wie gut ein statistisches Modell die Daten erklärt. Genauer gesagt, gibt R² an, wie viel von der gesamten Streuung der Daten durch das Modell erklärt wird. Ein höherer R²-Wert bedeutet, dass das Modell die Daten besser beschreibt. Es gibt einen Wert zwischen 0 und 1 an, wobei ein Wert näher bei 1 bedeutet, dass das Modell die Daten gut erklärt.

### Formel

Die Formel zur Berechnung von R² lautet:

$$
R² = 1 - \frac{SS_{res}}{SS_{tot}}
$$

wobei:

- $SS_{res}$ (Residual Sum of Squares) die Summe der quadrierten Abweichungen der beobachteten Werte von den vorhergesagten Werten ist. Dies misst, wie weit die tatsächlichen Datenpunkte von den durch das Modell vorhergesagten Werten entfernt sind.
- $SS_{tot}$ (Total Sum of Squares) die Summe der quadrierten Abweichungen der beobachteten Werte vom Durchschnittswert ist. Dies misst die gesamte Variabilität in den Daten.

### Beispiel

Angenommen, wir haben ein einfaches lineares Regressionsmodell, das die Beziehung zwischen der Studienzeit (in Stunden) und den Prüfungsergebnissen (in Punkten) untersucht. Wenn R² = 0.8, bedeutet dies, dass 80% der Variabilität in den Prüfungsergebnissen durch die Studienzeit erklärt werden können.

#### Berechnungsbeispiel für R²

Angenommen, wir haben die folgenden Daten:

| Studienzeit (Stunden) | Prüfungsergebnis (Punkte) |
| --------------------- | ------------------------- |
| 2                     | 50                        |
| 3                     | 55                        |
| 5                     | 65                        |
| 7                     | 70                        |
| 9                     | 80                        |

Der Mittelwert der Prüfungsergebnisse beträgt 64 Punkte. Die durch das Modell vorhergesagten Ergebnisse basierend auf der Regressionsgleichung sind 52, 57, 65, 73, und 81 Punkte.

Berechnung von $SS_{tot}$:

$$
SS_{tot} = (50 - 64)^2 + (55 - 64)^2 + (65 - 64)^2 + (70 - 64)^2 + (80 - 64)^2 = 784
$$

Berechnung von $SS_{res}$:

$$
SS_{res} = (50 - 52)^2 + (55 - 57)^2 + (65 - 65)^2 + (70 - 73)^2 + (80 - 81)^2 = 20
$$

Berechnung von R²:

$$
R² = 1 - \frac{SS_{res}}{SS_{tot}} = 1 - \frac{20}{784} = 1 - 0.0255 = 0.9745
$$

In diesem Fall beträgt R² 0.9745, was bedeutet, dass 97.45% der Variabilität in den Prüfungsergebnissen durch die Studienzeit erklärt werden können.

## Adjusted R² (Angepasstes Bestimmtheitsmaß)

### Definition

Adjusted R² ist eine modifizierte Version von R², die die Anzahl der Prädiktoren im Modell berücksichtigt. Es bestraft Modelle mit vielen Prädiktoren, die die Daten möglicherweise überanpassen (Overfitting).

### Formel

Die Formel zur Berechnung von Adjusted R² lautet:

$$
 \text{Adjusted } R² = 1 - \left( \frac{(1 - R²)(n - 1)}{n - k - 1} \right)
$$

wobei:

- $n$ die Anzahl der Beobachtungen ist,
- $k$ die Anzahl der Prädiktoren ist.

### Beispiel

Angenommen, wir haben ein Regressionsmodell mit den folgenden Werten:

- Anzahl der Beobachtungen (n): 100
- Anzahl der Prädiktoren (k): 5
- R²: 0.85

Wir können Adjusted R² wie folgt berechnen:

$$
 \text{Adjusted } R² = 1 - \left( \frac{(1 - 0.85)(100 - 1)}{100 - 5 - 1} \right)
$$

$$
 \text{Adjusted } R² = 1 - \left( \frac{(0.15)(99)}{94} \right)
$$

$$
 \text{Adjusted } R² = 1 - \left( \frac{14.85}{94} \right)
$$

$$
 \text{Adjusted } R² = 1 - 0.158
$$

$$
 \text{Adjusted } R² = 0.842
$$

In diesem Beispiel zeigt Adjusted R² einen leicht niedrigeren Wert als R², was darauf hinweist, dass das Modell möglicherweise einige unnötige Prädiktoren enthält.

## Vergleich von R² und Adjusted R²

- **R²**:
  - Misst den Anteil der erklärten Varianz.
  - Kann durch Hinzufügen von Prädiktoren künstlich erhöht werden.
- **Adjusted R²**:
  - Berücksichtigt die Anzahl der Prädiktoren.
  - Bestraft für unnötige Komplexität und Overfitting.

In der Praxis wird Adjusted R² oft bevorzugt, da es ein realistischeres Bild der Modellgüte vermittelt, insbesondere bei Modellen mit vielen Prädiktoren.

## Fazit

Sowohl R² als auch Adjusted R² sind nützliche Metriken zur Bewertung der Modellgüte in der Regressionsanalyse. Während R² einfach zu berechnen und zu interpretieren ist, bietet Adjusted R² eine bessere Kontrolle über Modelle mit vielen Prädiktoren, indem es die Anzahl der Variablen berücksichtigt und dadurch Überanpassung (Overfitting) reduziert. Bei der Bewertung und Auswahl von Modellen sollte Adjusted R² bevorzugt verwendet werden, um ein realistischeres Bild der Vorhersagekraft eines Modells zu erhalten.

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
