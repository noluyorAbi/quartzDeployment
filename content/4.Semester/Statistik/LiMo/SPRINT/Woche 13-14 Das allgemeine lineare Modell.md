---
date created: Monday, 15. July 2024, 22:55
date modified: Monday, 15. July 2024, 23:00
---

# Woche 13-14: Das allgemeine lineare Modell

## Ziel

Verständnis des allgemeinen linearen Modells und seiner Anwendung in verschiedenen Kontexten.

## Inhalte

### Erweiterung des linearen Modells auf gemischte Effekte

Das allgemeine lineare Modell (ALM) erweitert das einfache lineare Regressionsmodell, um verschiedene Arten von Effekten zu berücksichtigen, einschließlich fester und zufälliger Effekte. Diese Erweiterung ermöglicht die Modellierung von Daten mit komplexen Strukturen, wie beispielsweise hierarchischen oder verschachtelten Daten.

#### Allgemeine Form des linearen Modells

$$
Y = X\beta + \epsilon
$$

- $Y$: Vektor der abhängigen Variablen
- $X$: Designmatrix der festen Effekte
- $\beta$: Vektor der festen Effekte
- $\epsilon$: Vektor der Residuen

### Fest- und Zufallseffekte

#### Feste Effekte

Feste Effekte sind Effekte, die konstant und reproduzierbar sind. Diese Effekte interessieren uns spezifisch und sind von vorrangigem Interesse in der Analyse.

Beispiele für feste Effekte:

- Geschlecht (männlich/weiblich)
- Behandlungsgruppe (Kontroll-/Behandlungsgruppe)

#### Zufallseffekte

Zufallseffekte sind Effekte, die zufällig aus einer größeren Population ausgewählt werden. Diese Effekte repräsentieren Variationen, die nicht von spezifischem Interesse sind, aber dennoch modelliert werden müssen, um die Daten korrekt zu analysieren.

Beispiele für Zufallseffekte:

- Versuchspersonen in einer Studie
- Schulen in einer Bildungsstudie

### Hierarchische und gemischte Modelle

#### Hierarchische Modelle

Hierarchische Modelle, auch als verschachtelte Modelle bekannt, sind eine Art von gemischten Modellen, die die Verschachtelung von Daten berücksichtigen. Beispielsweise können Schüler innerhalb von Klassen, und Klassen innerhalb von Schulen verschachtelt sein.

#### Gemischte Modelle

Gemischte Modelle, auch als gemischte lineare Modelle bekannt, kombinieren feste und zufällige Effekte. Sie sind besonders nützlich, wenn die Daten sowohl feste als auch zufällige Variationen aufweisen.

Allgemeine Form des gemischten Modells:

$$
Y = X\beta + Z\gamma + \epsilon
$$

- $Y$: Vektor der abhängigen Variablen
- $X$: Designmatrix der festen Effekte
- $\beta$: Vektor der festen Effekte
- $Z$: Designmatrix der zufälligen Effekte
- $\gamma$: Vektor der zufälligen Effekte
- $\epsilon$: Vektor der Residuen

### Varianzkomponentenschätzung

Die Varianzkomponentenschätzung ist ein wesentlicher Bestandteil gemischter Modelle. Sie ermöglicht die Schätzung der Varianz, die durch die zufälligen Effekte erklärt wird.

#### Methode der maximalen Likelihood (ML)

Die maximale Likelihood-Methode schätzt die Parameter, die die Wahrscheinlichkeit der beobachteten Daten maximieren.

#### Restricted Maximum Likelihood (REML)

Die REML-Methode ist eine Erweiterung der maximalen Likelihood-Methode und wird häufig bei der Schätzung der Varianzkomponenten verwendet, da sie unverzerrtere Schätzungen liefert.

### Übungen

#### Anwendung gemischter Modelle auf reale Datensätze

**Beispiel in R:**

```r
# Paket laden
library(lme4)

# Daten laden
data <- read.csv("data.csv")

# Gemischtes Modell erstellen
model <- lmer(Y ~ X1 + X2 + (1|random_effect), data = data)

# Zusammenfassung des Modells anzeigen
summary(model)
```

**Beispiel in Python:**

```python
import pandas as pd
import statsmodels.api as sm
from statsmodels.regression.mixed_linear_model import MixedLM

# Daten laden
data = pd.read_csv("data.csv")

# Gemischtes Modell erstellen
model = MixedLM.from_formula("Y ~ X1 + X2", data, groups=data["random_effect"])
result = model.fit()

# Zusammenfassung des Modells anzeigen
print(result.summary())
```

#### Interpretation von Modellergebnissen mit gemischten Effekten

1. **Feste Effekte ($\beta$):**

   - Die festen Effekte geben die Beziehung zwischen den unabhängigen Variablen und der abhängigen Variable an.
   - Beispiel: Der Koeffizient für $X1$ zeigt, wie sich $Y$ ändert, wenn $X1$ um eine Einheit erhöht wird, unter der Annahme, dass alle anderen Variablen konstant gehalten werden.

2. **Zufällige Effekte ($\gamma$):**

   - Die zufälligen Effekte repräsentieren die Variation zwischen den Gruppen.
   - Beispiel: Der zufällige Effekt für jede Gruppe zeigt die Abweichung der Gruppe vom Gesamtdurchschnitt.

3. **Varianzkomponenten:**
   - Die Varianzkomponenten geben an, wie viel der Gesamtvarianz durch die zufälligen Effekte erklärt wird.
   - Beispiel: Eine hohe Varianzkomponente für den zufälligen Effekt deutet darauf hin, dass die Gruppen eine signifikante Quelle der Variation darstellen.

### Detaillierte Beispiele und Interpretation

#### Beispiel: Bildungsstudie

Angenommen, wir haben eine Bildungsstudie, in der wir den Einfluss von Unterrichtsstrategien auf die Leistungen der Schüler untersuchen. Die Daten umfassen Schüler in verschiedenen Klassen, und die Klassen sind in verschiedenen Schulen verschachtelt.

**Schritte zur Analyse:**

1. **Datenstruktur:**

   - Schüler sind in Klassen verschachtelt.
   - Klassen sind in Schulen verschachtelt.

2. **Modellformulierung:**
   - Feste Effekte: Unterrichtsstrategie
   - Zufällige Effekte: Klassen, Schulen

**Beispiel in R:**

```r
# Paket laden
library(lme4)

# Daten laden
data <- read.csv("bildungsstudie.csv")

# Gemischtes Modell erstellen
model <- lmer(Leistung ~ Unterrichtsstrategie + (1|Schule/Klasse), data = data)

# Zusammenfassung des Modells anzeigen
summary(model)
```

**Beispiel in Python:**

```python
import pandas as pd
import statsmodels.api as sm
from statsmodels.regression.mixed_linear_model import MixedLM

# Daten laden
data = pd.read_csv("bildungsstudie.csv")

# Gemischtes Modell erstellen
model = MixedLM.from_formula("Leistung ~ Unterrichtsstrategie", data, groups=data["Schule"], re_formula="~Klasse")
result = model.fit()

# Zusammenfassung des Modells anzeigen
print(result.summary())
```

#### Interpretation der Ergebnisse:

1. **Feste Effekte ($\beta$):**

   - Der Koeffizient für die Unterrichtsstrategie zeigt, wie sich die Leistung der Schüler verändert, wenn eine bestimmte Unterrichtsstrategie angewendet wird.
   - Beispiel: Ein positiver Koeffizient bedeutet, dass die Unterrichtsstrategie die Leistung der Schüler verbessert.

2. **Zufällige Effekte ($\gamma$):**

   - Der zufällige Effekt für die Klassen innerhalb der Schulen zeigt die Variation der Klassenleistungen innerhalb jeder Schule.
   - Der zufällige Effekt für die Schulen zeigt die Variation der durchschnittlichen Leistungen zwischen den Schulen.

3. **Varianzkomponenten:**
   - Die Varianzkomponenten geben an, wie viel der Gesamtvarianz durch die Variation zwischen den Klassen und den Schulen erklärt wird.
   - Beispiel: Eine hohe Varianzkomponente für die Schulen deutet darauf hin, dass die Schule, die ein Schüler besucht, einen großen Einfluss auf seine Leistung hat.

### Weiterführende Übungen

1. **Verwendung von realen Datensätzen:**

   - Analysieren Sie reale Datensätze, die verschachtelte Strukturen aufweisen.
   - Beispiel: Gesundheitsdaten, in denen Patienten in verschiedenen Krankenhäusern behandelt werden.

2. **Vergleich von Modellgüten:**

   - Vergleichen Sie die Modellgüte zwischen einfachen linearen Modellen und gemischten Modellen.
   - Beispiel: Verwenden Sie AIC, BIC und log-Likelihood zur Modellbewertung.

3. **Untersuchung von Interaktionseffekten:**
   - Untersuchen Sie Interaktionseffekte zwischen festen und zufälligen Effekten.
   - Beispiel: Analysieren Sie, wie der Effekt der Unterrichtsstrategie von der Schule abhängt.

### Fazit

Das Verständnis des allgemeinen linearen Modells und der Anwendung gemischter Modelle ist entscheidend für die Analyse komplexer Datenstrukturen. Durch die Kombination von festen und zufälligen Effekten können wir die zugrunde liegenden Mechanismen besser verstehen und genauere Vorhersagen treffen. Die vorgestellten Techniken und Beispiele bieten eine solide Grundlage für die Anwendung dieser Modelle in verschiedenen Kontexten.

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
