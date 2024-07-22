---
date created: Monday, 15. July 2024, 23:01
date modified: Monday, 15. July 2024, 23:04
---

# Woche 17-18: Das logistische Regressionsmodell

## Ziel

Einführung und Anwendung des logistischen Regressionsmodells zur Analyse binärer und kategorialer Zielvariablen.

## Inhalte

### Logistische Regression und Odds Ratio

Die logistische Regression ist eine statistische Methode zur Modellierung von binären abhängigen Variablen. Sie wird verwendet, um die Wahrscheinlichkeit eines Ereignisses zu erklären, das nur zwei mögliche Ausgänge hat (z.B. Erfolg/Misserfolg, Ja/Nein).

#### Modellformulierung

Das logistische Regressionsmodell verwendet die logistische Funktion, um sicherzustellen, dass die vorhergesagte Wahrscheinlichkeit zwischen 0 und 1 liegt:

$$
P(Y=1|X) = \frac{1}{1 + e^{-(\beta_0 + \beta_1X_1 + \beta_2X_2 + \ldots + \beta_pX_p)}}
$$

Hier ist $P(Y=1|X)$ die Wahrscheinlichkeit, dass das Ereignis $Y=1$ auftritt, gegeben die unabhängigen Variablen $X_1, X_2, \ldots, X_p$.

#### Logit-Transformation

Die Logit-Transformation des logistischen Modells ist linear in den Prädiktoren:

$$
\log\left(\frac{P(Y=1|X)}{1 - P(Y=1|X)}\right) = \beta_0 + \beta_1X_1 + \beta_2X_2 + \ldots + \beta_pX_p
$$

#### Odds Ratio

Das Odds Ratio (OR) misst die Stärke des Zusammenhangs zwischen einem Prädiktor und dem Ergebnis. Es wird wie folgt berechnet:

$$
OR = \frac{P(Y=1|X)}{P(Y=0|X)}
$$

Ein Odds Ratio größer als 1 deutet darauf hin, dass der Prädiktor die Wahrscheinlichkeit des Ereignisses erhöht, während ein Odds Ratio kleiner als 1 darauf hinweist, dass der Prädiktor die Wahrscheinlichkeit des Ereignisses verringert.

### Maximum-Likelihood-Schätzung

Die Parameter der logistischen Regression werden durch Maximum-Likelihood-Schätzung (MLE) geschätzt. Die Likelihood-Funktion für das logistische Modell ist:

$$
L(\beta) = \prod_{i=1}^n P(Y_i|X_i)^{Y_i} (1 - P(Y_i|X_i))^{1 - Y_i}
$$

Die Log-Likelihood-Funktion ist dann:

$$
\ell(\beta) = \sum_{i=1}^n \left[ Y_i \log(P(Y_i|X_i)) + (1 - Y_i) \log(1 - P(Y_i|X_i)) \right]
$$

Die Maximum-Likelihood-Schätzung findet die Werte der Parameter $\beta$, die die Log-Likelihood maximieren.

### Gütekriterien (AUC, ROC)

#### ROC-Kurve

Die ROC-Kurve (Receiver Operating Characteristic) ist ein grafisches Werkzeug zur Beurteilung der diagnostischen Fähigkeit eines binären Klassifikationsmodells. Sie stellt die True Positive Rate (TPR) gegen die False Positive Rate (FPR) für verschiedene Schwellenwerte dar.

#### AUC (Area Under the Curve)

Die Fläche unter der ROC-Kurve (AUC) ist ein Maß für die Gesamtgüte des Modells. Eine AUC von 1.0 zeigt ein perfektes Modell an, während eine AUC von 0.5 auf ein Modell hinweist, das keine bessere Vorhersagekraft als Zufall hat.

### Multikategoriale logistische Regression

Die multikategoriale logistische Regression erweitert die binäre logistische Regression auf Fälle, in denen die abhängige Variable mehr als zwei Kategorien hat. Es gibt zwei Hauptansätze:

#### Multinomiale logistische Regression

Die multinomiale logistische Regression wird verwendet, wenn keine natürliche Reihenfolge zwischen den Kategorien besteht. Das Modell schätzt die Wahrscheinlichkeiten jeder Kategorie relativ zu einer Referenzkategorie.

$$
\log\left(\frac{P(Y=j|X)}{P(Y=0|X)}\right) = \beta_{0j} + \beta_{1j}X_1 + \beta_{2j}X_2 + \ldots + \beta_{pj}X_p
$$

#### Ordinale logistische Regression

Die ordinale logistische Regression wird verwendet, wenn eine natürliche Reihenfolge zwischen den Kategorien besteht. Hier wird das proportional odds Modell oft angewendet.

### Übungen

#### Durchführung logistische Regression auf reale Datensätze

**Beispiel in R:**

```r
# Paket laden
library(MASS)

# Daten laden
data <- read.csv("data.csv")

# Logistische Regression durchführen
model <- glm(Y ~ X1 + X2 + X3, family = binomial(link = "logit"), data = data)

# Zusammenfassung des Modells anzeigen
summary(model)
```

**Beispiel in Python:**

```python
import pandas as pd
import statsmodels.api as sm

# Daten laden
data = pd.read_csv("data.csv")

# Logistische Regression durchführen
X = data[['X1', 'X2', 'X3']]
X = sm.add_constant(X)
model = sm.Logit(data['Y'], X).fit()

# Zusammenfassung des Modells anzeigen
print(model.summary())
```

#### Interpretation und Visualisierung der Ergebnisse

**Interpretation in R:**

```r
# Odds Ratios berechnen
exp(coef(model))

# Konfidenzintervalle für die Koeffizienten
exp(confint(model))
```

**Interpretation in Python:**

```python
import numpy as np

# Odds Ratios berechnen
odds_ratios = np.exp(model.params)
print(odds_ratios)

# Konfidenzintervalle für die Koeffizienten
conf = model.conf_int()
conf['OR'] = odds_ratios
print(np.exp(conf))
```

**Visualisierung der Ergebnisse:**

```python
import matplotlib.pyplot as plt
from sklearn.metrics import roc_curve, auc

# ROC-Kurve plotten
y_pred = model.predict(X)
fpr, tpr, _ = roc_curve(data['Y'], y_pred)
roc_auc = auc(fpr, tpr)

plt.figure()
plt.plot(fpr, tpr, color='darkorange', lw=2, label='ROC curve (area = %0.2f)' % roc_auc)
plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('Receiver Operating Characteristic')
plt.legend(loc="lower right")
plt.show()
```

#### Modellgüte und -diagnose

**Beispiel in R:**

```r
# ROC-Kurve und AUC berechnen
library(pROC)
roc_curve <- roc(data$Y, fitted(model))
plot(roc_curve)
auc(roc_curve)
```

**Beispiel in Python:**

```python
from sklearn.metrics import roc_auc_score

# AUC berechnen
auc_score = roc_auc_score(data['Y'], y_pred)
print('AUC: %0.2f' % auc_score)
```

## Ausführliches Beispiel und Interpretation

### Datensatz: Herzkrankheit

Angenommen, wir haben einen Datensatz zur Vorhersage von Herzkrankheiten, wobei die abhängige Variable $Y$ den Zustand (Herzkrankheit: Ja/Nein) darstellt und die unabhängigen Variablen $X_1$ bis $X_3$ verschiedene Risikofaktoren wie Alter, Cholesterin und Blutdruck sind.

**Schritte zur Analyse:**

1. **Datenstruktur:**

   - $Y$: Herzkrankheit (1: Ja, 0: Nein)
   - $X_1$: Alter
   - $X_2$: Cholesterin
   - $X_3$: Blutdruck

2. **Modellformulierung:**
   - Logistische Regression: $P(Y=1|X) = \frac{1}{1 + e^{-(\beta_0 + \beta_1X_1 + \beta_2X_2 + \beta_3X_3)}}$

**Beispiel in R:**

```r
# Paket laden
library(MASS)

# Daten laden
data <- read.csv("herzkrankheit.csv")

# Logistische Regression durchführen
model <- glm(Y ~ Alter + Cholesterin + Blutdruck, family = binomial(link = "logit"), data = data)

# Zusammenfassung des Modells anzeigen
summary(model)
```

**Beispiel in Python:**

```python
import pandas as pd
import statsmodels.api as sm

# Daten laden
data = pd.read_csv("herzkrankheit.csv")

# Logistische Regression durchführen
X = data[['Alter', 'Cholesterin', 'Blutdruck']]
X = sm.add_constant(X)
model = sm.Logit(data['Y'], X).fit()

# Zusammenfassung des Modells anzeigen
print(model.summary())
```

### Interpretation der Ergebnisse

1. **Interzept ($\beta_0$):**

   - Der Interzept stellt die Log-Odds dar, dass eine Person eine Herzkrankheit hat, wenn alle Prädiktoren gleich null sind.

2. **Koeffizienten ($\beta_1, \beta_2, \beta_3$):**
   - Diese Koe

ffizienten repräsentieren die Änderung der Log-Odds für eine Einheit Änderung des jeweiligen Prädiktors.

- Beispiel: Ein Koeffizient von $\beta_1 = 0.03$ für Alter bedeutet, dass die Log-Odds für eine Herzkrankheit um 0.03 steigen, wenn das Alter um ein Jahr steigt.

3. **Odds Ratios:**
   - Die Exponentialfunktion der Koeffizienten gibt die Odds Ratios.
   - Beispiel: Ein Odds Ratio von 1.03 für Alter bedeutet, dass die Odds für eine Herzkrankheit um 3% steigen, wenn das Alter um ein Jahr steigt.

### Visualisierung der Ergebnisse

1. **ROC-Kurve und AUC:**
   - Die ROC-Kurve hilft zu verstehen, wie gut das Modell zwischen den Klassen unterscheidet.
   - Die AUC gibt die Gesamtleistung des Modells an.

**Beispiel in R:**

```r
# ROC-Kurve und AUC berechnen
library(pROC)
roc_curve <- roc(data$Y, fitted(model))
plot(roc_curve)
auc(roc_curve)
```

**Beispiel in Python:**

```python
import matplotlib.pyplot as plt
from sklearn.metrics import roc_curve, auc

# ROC-Kurve plotten
y_pred = model.predict(X)
fpr, tpr, _ = roc_curve(data['Y'], y_pred)
roc_auc = auc(fpr, tpr)

plt.figure()
plt.plot(fpr, tpr, color='darkorange', lw=2, label='ROC curve (area = %0.2f)' % roc_auc)
plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('Receiver Operating Characteristic')
plt.legend(loc="lower right")
plt.show()
```

### Multikategoriale logistische Regression

#### Beispiel: Prädiktion von Ausbildungsniveaus

Angenommen, wir möchten das Ausbildungsniveau (niedrig, mittel, hoch) basierend auf verschiedenen sozioökonomischen Faktoren vorhersagen. Da es mehr als zwei Kategorien gibt, verwenden wir die multinomiale logistische Regression.

**Beispiel in R:**

```r
# Paket laden
library(nnet)

# Daten laden
data <- read.csv("ausbildungsniveaus.csv")

# Multinomiale logistische Regression durchführen
model <- multinom(Ausbildungsniveau ~ Einkommen + Alter + Geschlecht, data = data)

# Zusammenfassung des Modells anzeigen
summary(model)
```

**Beispiel in Python:**

```python
import pandas as pd
from statsmodels.discrete.discrete_model import MNLogit

# Daten laden
data = pd.read_csv("ausbildungsniveaus.csv")

# Multinomiale logistische Regression durchführen
X = data[['Einkommen', 'Alter', 'Geschlecht']]
X = sm.add_constant(X)
model = MNLogit(data['Ausbildungsniveau'], X).fit()

# Zusammenfassung des Modells anzeigen
print(model.summary())
```

### Interpretation der multikategorialen logistischen Regression

1. **Interzepte ($\beta_{0j}$):**

   - Die Interzepte repräsentieren die Log-Odds für die Referenzkategorie im Vergleich zu jeder anderen Kategorie.

2. **Koeffizienten ($\beta_{ij}$):**

   - Diese Koeffizienten geben die Änderung der Log-Odds für eine Einheit Änderung der jeweiligen Prädiktoren an, relativ zur Referenzkategorie.

3. **Odds Ratios:**
   - Die Exponentialfunktion der Koeffizienten gibt die Odds Ratios für jede Kategorie im Vergleich zur Referenzkategorie an.

### Fazit

Das logistische Regressionsmodell ist ein leistungsstarkes Werkzeug zur Analyse binärer und kategorialer Zielvariablen. Es ermöglicht die Modellierung der Wahrscheinlichkeit eines Ereignisses und bietet nützliche Gütekriterien wie die ROC-Kurve und die AUC zur Bewertung der Modellleistung. Die multikategoriale logistische Regression erweitert diese Methode auf Fälle mit mehr als zwei Kategorien und bietet eine flexible und robuste Möglichkeit, komplexe Daten zu analysieren.

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> Please note that these are my own notes and solutions, and I cannot guarantee the complete accuracy of all solutions as I am still a student myself.
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->
