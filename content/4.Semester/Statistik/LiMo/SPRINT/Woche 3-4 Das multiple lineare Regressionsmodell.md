---
date created: Monday, 15. July 2024, 22:19
date modified: Monday, 15. July 2024, 22:30
---

# Woche 3-4: Das multiple lineare Regressionsmodell

## Ziel

Verständnis und Anwendung des multiplen linearen Regressionsmodells mit mehreren Prädiktoren.

## Inhalte

### Erweiterung des einfachen Modells auf mehrere Prädiktoren

Das multiple lineare Regressionsmodell erweitert das einfache lineare Regressionsmodell, indem es mehrere unabhängige Variablen (Prädiktoren) berücksichtigt, um die abhängige Variable zu erklären.

#### Allgemeine Form des multiplen linearen Regressionsmodells

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \ldots + \beta_p X_p + \epsilon
$$

- $Y$: abhängige Variable
- $X_1, X_2, \ldots, X_p$: unabhängige Variablen
- $\beta_0$: Achsenabschnitt
- $\beta_1, \beta_2, \ldots, \beta_p$: Regressionskoeffizienten
- $\epsilon$: Fehlerterm

### Interpretation der Regressionskoeffizienten

Jeder Regressionskoeffizient $\beta_j$ gibt den durchschnittlichen Effekt der unabhängigen Variable $X_j$ auf die abhängige Variable $Y$ an, wobei die anderen unabhängigen Variablen konstant gehalten werden.

- $\beta_0$: Erwartungswert von $Y$, wenn alle $X_j$ gleich Null sind.
- $\beta_j$: Veränderung von $Y$ bei einer Einheit Veränderung von $X_j$, ceteris paribus.

### Multikollinearität: Ursachen, Erkennung und Umgang

Multikollinearität tritt auf, wenn zwei oder mehr Prädiktoren stark korreliert sind, was die Schätzung der Regressionskoeffizienten ungenau macht.

#### Ursachen

- Starke lineare Beziehungen zwischen Prädiktoren.
- Daten, die ähnliche Informationen enthalten.

#### Erkennung

- Variance Inflation Factor (VIF): Misst, wie stark die Varianz eines geschätzten Regressionskoeffizienten aufgrund der Multikollinearität erhöht ist.
  $$
  VIF_j = \frac{1}{1 - R_j^2}
  $$
  - $R_j^2$: Bestimmtheitsmaß des Modells, bei dem $X_j$ durch die anderen Prädiktoren vorhergesagt wird.
  - Ein $VIF$ größer als 10 deutet auf problematische Multikollinearität hin.

#### Umgang

- Entfernen oder Zusammenfassen hoch korrelierter Prädiktoren.
- Verwendung von Techniken wie Ridge-Regression oder Hauptkomponentenanalyse (PCA).

### Gütekriterien (Adjusted $R^2$, AIC, BIC)

#### Adjusted $R^2$

Berücksichtigt die Anzahl der Prädiktoren und passt das $R^2$ entsprechend an:

$$
\text{Adjusted } R^2 = 1 - \left( \frac{(1 - R^2)(n - 1)}{n - p - 1} \right)
$$

- $n$: Anzahl der Beobachtungen
- $p$: Anzahl der Prädiktoren

#### Akaike-Informationskriterium (AIC)

Misst die Modellgüte unter Berücksichtigung der Modellkomplexität:

$$
AIC = 2p - 2\ln(L)
$$

- $p$: Anzahl der Parameter im Modell
- $L$: Likelihood des Modells

#### Bayessches Informationskriterium (BIC)

Ähnlich wie das AIC, bestraft jedoch komplexere Modelle stärker:

$$
BIC = p\ln(n) - 2\ln(L)
$$

- $n$: Anzahl der Beobachtungen

### Interaktionseffekte und nichtlineare Beziehungen

#### Interaktionseffekte

Untersuchen, ob die Wirkung eines Prädiktors auf die abhängige Variable von einem anderen Prädiktor abhängt:

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \beta_3 (X_1 \cdot X_2) + \epsilon
$$

#### Nichtlineare Beziehungen

Erweiterung des Modells um nichtlineare Terme wie Quadrate oder Kubikterme:

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_1^2 + \epsilon
$$

## Übungen

### Durchführung einer multiplen linearen Regression

#### Beispiel in R

```r
# Daten laden und visualisieren
data <- read.csv("data.csv")
pairs(data)

# Multiple lineare Regression durchführen
model <- lm(Y ~ X1 + X2 + X3, data = data)
summary(model)

# Residualanalyse
par(mfrow=c(2,2))
plot(model)
```

#### Beispiel in Python

```python
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm

# Daten laden und visualisieren
data = pd.read_csv("data.csv")
pd.plotting.scatter_matrix(data)
plt.show()

# Multiple lineare Regression durchführen
X = data[['X1', 'X2', 'X3']]
X = sm.add_constant(X)
model = sm.OLS(data['Y'], X).fit()
print(model.summary())

# Residualanalyse
fig, ax = plt.subplots(2, 2, figsize=(12, 8))
sm.graphics.plot_regress_exog(model, 'X1', fig=fig)
plt.show()
```

### Untersuchung und Interpretation von Interaktionseffekten

#### Beispiel in R

```r
# Interaktionsmodell
interaction_model <- lm(Y ~ X1 * X2, data = data)
summary(interaction_model)
```

#### Beispiel in Python

```python
# Interaktionsmodell
data['X1_X2'] = data['X1'] * data['X2']
X_interaction = sm.add_constant(data[['X1', 'X2', 'X1_X2']])
interaction_model = sm.OLS(data['Y'], X_interaction).fit()
print(interaction_model.summary())
```

### Umgang mit Multikollinearität (VIF-Berechnung)

#### Beispiel in R

```r
library(car)
vif(model)
```

#### Beispiel in Python

```python
from statsmodels.stats.outliers_influence import variance_inflation_factor

# VIF-Berechnung
vif_data = pd.DataFrame()
vif_data["feature"] = X.columns
vif_data["VIF"] = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]
print(vif_data)
```

Dieses ausführliche Skript gibt Ihnen eine fundierte Einführung in das multiple lineare Regressionsmodell, einschließlich theoretischer Grundlagen, praktischer Beispiele und Übungen zur Vertiefung Ihres Verständnisses und Ihrer Fähigkeiten in der Anwendung und Interpretation der Ergebnisse.

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
