---
date created: Monday, 15. July 2024, 22:40
date modified: Monday, 15. July 2024, 22:44
---

# Woche 9-10: Metrische Einflussgrößen

## Ziel

Verwendung und Interpretation metrischer Einflussgrößen in Regressionsmodellen.

## Inhalte

### Umgang mit metrischen Variablen

Metrische Variablen sind quantitative Variablen, die auf einem Intervall- oder Verhältnisskalenniveau gemessen werden. Sie können beliebige numerische Werte annehmen und sind in der Regel kontinuierlich. In Regressionsmodellen werden metrische Variablen als unabhängige Variablen verwendet, um den Einfluss auf eine abhängige Variable zu untersuchen.

#### Beispiele für metrische Variablen

- Alter
- Einkommen
- Temperatur
- Entfernung

### Lineare und nichtlineare Beziehungen

#### Lineare Beziehungen

Eine lineare Beziehung zwischen zwei Variablen wird durch eine Gerade dargestellt, die durch die Datenpunkte passt. In einem Regressionsmodell wird diese Beziehung durch die Gleichung einer Geraden beschrieben:

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

- $Y$: abhängige Variable
- $X$: unabhängige Variable (metrisch)
- $\beta_0$: Achsenabschnitt
- $\beta_1$: Steigungskoeffizient
- $\epsilon$: Fehlerterm

Der Steigungskoeffizient $\beta_1$ gibt die durchschnittliche Änderung der abhängigen Variable $Y$ für eine Einheit Änderung der unabhängigen Variablen $X$ an.

#### Nichtlineare Beziehungen

Nichtlineare Beziehungen zwischen Variablen können komplexer sein und erfordern erweiterte Modellierungstechniken. Diese Beziehungen können durch Transformationen der Variablen oder durch die Verwendung von polynomialen und spline-basierten Modellen dargestellt werden.

### Polynomiale und spline-basierte Modelle

#### Polynomiale Regressionsmodelle

Polynomiale Regression ist eine Erweiterung des linearen Regressionsmodells, bei der die Beziehung zwischen der unabhängigen und der abhängigen Variablen durch ein Polynom höherer Ordnung beschrieben wird:

$$
Y = \beta_0 + \beta_1 X + \beta_2 X^2 + \beta_3 X^3 + \ldots + \beta_p X^p + \epsilon
$$

- $X^2, X^3, \ldots, X^p$: Potenzen der unabhängigen Variablen $X$
- $\beta_2, \beta_3, \ldots, \beta_p$: Regressionskoeffizienten für die höheren Ordnungen

Polynomiale Modelle können verwendet werden, um nichtlineare Beziehungen zwischen den Variablen zu modellieren und besser an die Daten anzupassen.

#### Spline-basierte Modelle

Spline-basierte Modelle verwenden Stückweise-polynomiale Funktionen, um komplexe, nichtlineare Beziehungen zu modellieren. Diese Modelle teilen den Bereich der unabhängigen Variablen in Intervalle (Segmente) und passen innerhalb jedes Intervalls ein Polynom an. Splines bieten eine flexible Methode, um glatte Kurven durch die Daten zu zeichnen.

Ein gängiger Typ von Splines sind kubische Splines, die Polynomiale dritten Grades innerhalb der Segmente verwenden. Die Übergänge zwischen den Segmenten sind glatt, sodass die Funktion und ihre ersten beiden Ableitungen stetig sind.

### Standardisierung und Zentrierung

#### Standardisierung

Die Standardisierung einer Variablen bedeutet, dass sie so transformiert wird, dass sie einen Mittelwert von 0 und eine Standardabweichung von 1 hat. Dies wird erreicht durch:

$$
X_{\text{standardisiert}} = \frac{X - \bar{X}}{s_X}
$$

- $\bar{X}$: Mittelwert der Variablen $X$
- $s_X$: Standardabweichung der Variablen $X$

Die Standardisierung wird oft verwendet, um Variablen auf eine vergleichbare Skala zu bringen, insbesondere wenn Variablen unterschiedliche Einheiten oder Größenordnungen haben.

#### Zentrierung

Die Zentrierung einer Variablen bedeutet, dass der Mittelwert der Variablen von jedem Wert subtrahiert wird:

$$
X_{\text{zentriert}} = X - \bar{X}
$$

Die Zentrierung kann helfen, Multikollinearität zu reduzieren, insbesondere bei polynomialen oder Interaktionstermen in Regressionsmodellen.

## Übungen

### Erstellung und Interpretation von Modellen mit metrischen Variablen

#### Beispiel in R

```r
# Daten laden
data <- read.csv("data.csv")

# Lineares Regressionsmodell erstellen
model <- lm(Y ~ Alter + Einkommen, data = data)
summary(model)

# Interpretation der Ergebnisse
cat("Achsenabschnitt (β0):", coef(model)[1], "\n")
cat("Steigung für Alter (β1):", coef(model)[2], "\n")
cat("Steigung für Einkommen (β2):", coef(model)[3], "\n")
cat("R²:", summary(model)$r.squared, "\n")
```

#### Beispiel in Python

```python
import pandas as pd
import statsmodels.api as sm

# Daten laden
data = pd.read_csv("data.csv")

# Lineares Regressionsmodell erstellen
X = data[['Alter', 'Einkommen']]
X = sm.add_constant(X)
model = sm.OLS(data['Y'], X).fit()
print(model.summary())

# Interpretation der Ergebnisse
params = model.params
print(f'Achsenabschnitt (β0): {params[0]}')
print(f'Steigung für Alter (β1): {params[1]}')
print(f'Steigung für Einkommen (β2): {params[2]}')
print(f'R²: {model.rsquared}')
```

### Anwendung von polynomialen Regressionsmodellen

#### Beispiel in R

```r
# Polynomiale Regressionsmodell erstellen
model_poly <- lm(Y ~ poly(Alter, 2) + Einkommen, data = data)
summary(model_poly)

# Interpretation der Ergebnisse
cat("Achsenabschnitt (β0):", coef(model_poly)[1], "\n")
cat("Koeffizient für Alter (β1):", coef(model_poly)[2], "\n")
cat("Koeffizient für Alter^2 (β2):", coef(model_poly)[3], "\n")
cat("Steigung für Einkommen (β3):", coef(model_poly)[4], "\n")
cat("R²:", summary(model_poly)$r.squared, "\n")
```

#### Beispiel in Python

```python
import pandas as pd
import statsmodels.api as sm
import numpy as np

# Daten laden
data = pd.read_csv("data.csv")

# Polynomiale Terme hinzufügen
data['Alter_Quadrat'] = data['Alter'] ** 2

# Polynomiales Regressionsmodell erstellen
X_poly = data[['Alter', 'Alter_Quadrat', 'Einkommen']]
X_poly = sm.add_constant(X_poly)
model_poly = sm.OLS(data['Y'], X_poly).fit()
print(model_poly.summary())

# Interpretation der Ergebnisse
params_poly = model_poly.params
print(f'Achsenabschnitt (β0): {params_poly[0]}')
print(f'Koeffizient für Alter (β1): {params_poly[1]}')
print(f'Koeffizient für Alter^2 (β2): {params_poly[2]}')
print(f'Steigung für Einkommen (β3): {params_poly[3]}')
print(f'R²: {model_poly.rsquared}')
```

## Ausführliches Beispiel und Interpretation

Um die Konzepte vollständig zu verstehen, betrachten wir ein detailliertes Beispiel mit einer schrittweisen Durchführung und Interpretation.

### Datensatz: Hypothetische Studie über Einkommen und Alter

Angenommen, wir haben einen Datensatz mit folgenden Variablen:

- `Einkommen`: Das Jahreseinkommen in Tausend Euro
- `Alter`: Das Alter in Jahren
- `Bildungsjahre`: Die Anzahl der Jahre formaler Bildung

Unser Ziel ist es, den Einfluss von `Alter` und `Bildungsjahre` auf das `Einkommen` zu untersuchen.

#### Datensatz erstellen (hypothetisch)

```python
import pandas as pd
import numpy as np

np.random.seed(0)

# Hypothetische Daten generieren
data = pd.DataFrame({
    'Einkommen': np.random.normal(50, 10, 100),
    'Alter': np.random.randint(20, 60, 100),
    'Bildungsjahre': np.random.randint(10, 20, 100)
})

# Daten anzeigen
print(data.head())
```

### Schritt 1: Lineares Regressionsmodell erstellen

Zunächst erstellen wir ein einfaches lineares Regressionsmodell, das `Einkommen` als abhängige Variable und `Alter` und `Bildungsjahre` als unabhängige Variablen verwendet.

#### Modell in R

```r
# Daten laden
data <- read.csv("data.csv")

# Lineares Regressionsmodell erstellen
model <- lm(Einkommen ~ Alter + Bildungsjahre, data = data)
summary(model)

# Interpretation der Ergebnisse
cat("Achsenabschnitt (β0):", coef(model)[1], "\n")
cat("Steigung für Alter (β1):", coef(model)[2], "\n")
cat("Steigung für Bildungsjahre (β2):", coef(model)[3], "\n")
cat("R²:", summary(model)$r.squared, "\n")
```

#### Modell in Python

```python
import pandas as pd
import statsmodels.api as

 sm

# Daten laden
data = pd.read_csv("data.csv")

# Lineares Regressionsmodell erstellen
X = data[['Alter', 'Bildungsjahre']]
X = sm.add_constant(X)
model = sm.OLS(data['Einkommen'], X).fit()
print(model.summary())

# Interpretation der Ergebnisse
params = model.params
print(f'Achsenabschnitt (β0): {params[0]}')
print(f'Steigung für Alter (β1): {params[1]}')
print(f'Steigung für Bildungsjahre (β2): {params[2]}')
print(f'R²: {model.rsquared}')
```

### Interpretation der Ergebnisse

1. **Achsenabschnitt ($\beta_0$)**: Der Achsenabschnitt stellt das erwartete Einkommen dar, wenn alle unabhängigen Variablen gleich null sind. Da ein Alter von 0 und Bildungsjahre von 0 in diesem Kontext keinen Sinn ergeben, ist der Achsenabschnitt weniger relevant.
2. **Steigung für Alter ($\beta_1$)**: Die Steigung für Alter gibt die durchschnittliche Änderung des Einkommens pro Jahr der Zunahme des Alters an, während alle anderen Variablen konstant gehalten werden.
3. **Steigung für Bildungsjahre ($\beta_2$)**: Die Steigung für Bildungsjahre gibt die durchschnittliche Änderung des Einkommens pro Jahr der Zunahme der formalen Bildung an, während alle anderen Variablen konstant gehalten werden.
4. **Bestimmtheitsmaß ($R^2$)**: Das $R^2$ gibt den Anteil der Variation im Einkommen an, der durch die unabhängigen Variablen Alter und Bildungsjahre erklärt wird. Ein höherer Wert bedeutet, dass das Modell die Daten besser erklärt.

### Schritt 2: Polynomiale Regression

Um zu untersuchen, ob eine nichtlineare Beziehung zwischen Alter und Einkommen besteht, erweitern wir das Modell um einen quadratischen Term für Alter.

#### Polynomiale Regression in R

```r
# Polynomiale Regressionsmodell erstellen
model_poly <- lm(Einkommen ~ poly(Alter, 2) + Bildungsjahre, data = data)
summary(model_poly)

# Interpretation der Ergebnisse
cat("Achsenabschnitt (β0):", coef(model_poly)[1], "\n")
cat("Koeffizient für Alter (β1):", coef(model_poly)[2], "\n")
cat("Koeffizient für Alter^2 (β2):", coef(model_poly)[3], "\n")
cat("Steigung für Bildungsjahre (β3):", coef(model_poly)[4], "\n")
cat("R²:", summary(model_poly)$r.squared, "\n")
```

#### Polynomiale Regression in Python

```python
import pandas as pd
import statsmodels.api as sm

# Polynomiale Terme hinzufügen
data['Alter_Quadrat'] = data['Alter'] ** 2

# Polynomiales Regressionsmodell erstellen
X_poly = data[['Alter', 'Alter_Quadrat', 'Bildungsjahre']]
X_poly = sm.add_constant(X_poly)
model_poly = sm.OLS(data['Einkommen'], X_poly).fit()
print(model_poly.summary())

# Interpretation der Ergebnisse
params_poly = model_poly.params
print(f'Achsenabschnitt (β0): {params_poly[0]}')
print(f'Koeffizient für Alter (β1): {params_poly[1]}')
print(f'Koeffizient für Alter^2 (β2): {params_poly[2]}')
print(f'Steigung für Bildungsjahre (β3): {params_poly[3]}')
print(f'R²: {model_poly.rsquared}')
```

### Interpretation der Ergebnisse

1. **Achsenabschnitt ($\beta_0$)**: Wie beim linearen Modell ist der Achsenabschnitt bei der Interpretation nicht relevant.

2. **Koeffizient für Alter ($\beta_1$)**: Dieser Koeffizient gibt die lineare Komponente des Alters an. Ein positiver Wert zeigt eine steigende Beziehung zwischen Alter und Einkommen, während ein negativer Wert eine abnehmende Beziehung zeigt.

3. **Koeffizient für Alter^2 ($\beta_2$)**: Dieser Koeffizient gibt die quadratische Komponente des Alters an. Ein positiver Wert zeigt eine konvexe (U-förmige) Beziehung, während ein negativer Wert eine konkave (umgekehrte U-förmige) Beziehung zeigt.

4. **Steigung für Bildungsjahre ($\beta_3$)**: Die Interpretation bleibt die gleiche wie im linearen Modell.

5. **Bestimmtheitsmaß ($R^2$)**: Das $R^2$ gibt an, wie gut das polynomiale Modell die Variation im Einkommen erklärt. Ein höherer Wert im Vergleich zum linearen Modell zeigt an, dass das polynomiale Modell besser geeignet ist.

### Schritt 3: Spline-basierte Modelle

Für noch komplexere nichtlineare Beziehungen können spline-basierte Modelle verwendet werden.

#### Spline-basierte Modelle in R

```r
library(splines)

# Spline-basiertes Modell erstellen
model_spline <- lm(Einkommen ~ bs(Alter, df = 4) + Bildungsjahre, data = data)
summary(model_spline)

# Interpretation der Ergebnisse
cat("Achsenabschnitt (β0):", coef(model_spline)[1], "\n")
cat("Koeffizienten für Spline-Terme:", coef(model_spline)[2:5], "\n")
cat("Steigung für Bildungsjahre (β4):", coef(model_spline)[6], "\n")
cat("R²:", summary(model_spline)$r.squared, "\n")
```

#### Spline-basierte Modelle in Python

```python
import pandas as pd
import statsmodels.api as sm
from patsy import dmatrix

# Spline-basierte Terme hinzufügen
spline_basis = dmatrix("bs(data['Alter'], df=4)", return_type='dataframe')
X_spline = pd.concat([spline_basis, data[['Bildungsjahre']]], axis=1)
X_spline = sm.add_constant(X_spline)
model_spline = sm.OLS(data['Einkommen'], X_spline).fit()
print(model_spline.summary())

# Interpretation der Ergebnisse
params_spline = model_spline.params
print(f'Achsenabschnitt (β0): {params_spline[0]}')
print(f'Koeffizienten für Spline-Terme: {params_spline[1:5]}')
print(f'Steigung für Bildungsjahre (β4): {params_spline[5]}')
print(f'R²: {model_spline.rsquared}')
```

### Interpretation der Ergebnisse

1. **Achsenabschnitt ($\beta_0$)**: Ähnlich wie bei den vorherigen Modellen ist der Achsenabschnitt nicht von großem Interesse.

2. **Koeffizienten für Spline-Terme**: Diese Koeffizienten repräsentieren die verschiedenen Segmente des Splines und zeigen, wie sich das Einkommen innerhalb jedes Segments des Altersbereichs ändert.

3. **Steigung für Bildungsjahre ($\beta_4$)**: Bleibt wie in den vorherigen Modellen interpretiert.

4. **Bestimmtheitsmaß ($R^2$)**: Ein hohes $R^2$ im Vergleich zu den anderen Modellen zeigt, dass das spline-basierte Modell die beste Anpassung an die Daten bietet und die meisten nichtlinearen Beziehungen erfasst.

## Zusammenfassung

### Wichtige Konzepte

1. **Lineare Regressionsmodelle**: Einfache Modelle, die lineare Beziehungen zwischen unabhängigen und abhängigen Variablen darstellen.
2. **Polynomiale Regressionsmodelle**: Erweiterte Modelle, die nichtlineare Beziehungen durch Hinzufügen von Potenztermen darstellen.
3. **Spline-basierte Modelle**: Flexible Modelle, die komplexe nichtlineare Beziehungen durch Stückweise-polynomiale Funktionen erfassen.
4. **Standardisierung und Zentrierung**: Techniken zur Transformation von Variablen, um Vergleichbarkeit und Interpretierbarkeit zu verbessern.

### Praktische Anwendungen

- Erstellung und Interpretation von Regressionsmodellen mit metrischen Variablen in R und Python.
- Untersuchung von linearen und nichtlinearen Beziehungen.
- Anwendung von polynomialen und spline-basierten Modellen zur Modellierung komplexer Beziehungen.

### Weiterführende Übungen

- Verwendung von realen Datensätzen zur Anwendung der gelernten Techniken.
- Vergleich der Modellgüte zwischen linearen, polynomialen und spline-basierten Modellen.
- Untersuchung und Interpretation von Interaktionseffekten zwischen metrischen und kategorialen Variablen.

---

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
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
