---
date created: Monday, 15. July 2024, 22:18
date modified: Tuesday, 16. July 2024, 22:43
---

https://novustat.com/statistik-blog/klassiker-lineare-regression-einfach-erklaert.html

# Woche 1-2: Das einfache lineare Regressionsmodell

## Ziel

Verständnis der Grundlagen des einfachen linearen Regressionsmodells, Anwendung und Interpretation der Ergebnisse.

## Inhalte

### Einführung in die Regression

Die Regression ist eine statistische Methode zur Untersuchung von Beziehungen zwischen Variablen. Das einfache lineare Regressionsmodell beschreibt die Beziehung zwischen einer abhängigen Variable (Zielvariable) und einer unabhängigen Variable (Prädiktor) durch eine lineare Funktion.

#### Allgemeine Form des einfachen linearen Regressionsmodells

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

- $Y$: abhängige Variable
- $X$: unabhängige Variable
- $\beta_0$: Achsenabschnitt
- $\beta_1$: Steigungskoeffizient
- $\epsilon$: Fehlerterm

### Annahmen des einfachen linearen Regressionsmodells

1. **Linearität**: Die Beziehung zwischen $X$ und $Y$ ist linear.
2. **Unabhängigkeit**: Die Residuen sind voneinander unabhängig.
3. **Homoskedastizität**: Die Varianz der Residuen ist konstant für alle Werte von $X$.
4. **Normalverteilung der Residuen**: Die Residuen sind normalverteilt.

### Schätzung der Regressionsparameter

Die Regressionsparameter $\beta_0$ und $\beta_1$ werden durch die Methode der kleinsten Quadrate geschätzt, die die Summe der quadrierten Abweichungen der beobachteten Werte von den vorhergesagten Werten minimiert.

#### Formel zur Schätzung der Parameter

$$
\hat{\beta}_1 = \frac{\sum_{i=1}^{n}(X_i - \bar{X})(Y_i - \bar{Y})}{\sum_{i=1}^{n}(X_i - \bar{X})^2}
$$

$$
\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}
$$

### Bestimmung der Güte des Modells

#### Bestimmtheitsmaß ($R^2$)

$$
R^2 = 1 - \frac{\sum_{i=1}^{n}(Y_i - \hat{Y}_i)^2}{\sum_{i=1}^{n}(Y_i - \bar{Y})^2}
$$

- $R^2$ gibt den Anteil der Variation der abhängigen Variable an, der durch das Modell erklärt wird.

#### Adjusted $R^2$

Das adjustierte $R^2$ berücksichtigt die Anzahl der Prädiktoren im Modell und wird wie folgt berechnet:

$$
\text{Adjusted } R^2 = 1 - \left( \frac{(1 - R^2)(n - 1)}{n - k - 1} \right)
$$

- $n$: Anzahl der Beobachtungen
- $k$: Anzahl der Prädiktoren

### Hypothesentests (t-Tests und F-Tests)

#### t-Test für die Regressionskoeffizienten

Der t-Test prüft, ob ein Regressionskoeffizient signifikant von Null verschieden ist:

$$
t = \frac{\hat{\beta}_j}{\text{SE}(\hat{\beta}_j)}
$$

- $\hat{\beta}_j$: geschätzter Regressionskoeffizient
- $\text{SE}(\hat{\beta}_j)$: Standardfehler des geschätzten Regressionskoeffizienten

#### F-Test für das Gesamtmodell

Der F-Test prüft, ob das Modell insgesamt signifikant ist:

$$
F = \frac{\text{MSR}}{\text{MSE}}
$$

- $\text{MSR} = \frac{\text{SSR}}{k}$: Mittlere Quadratsumme der Regression
- $\text{MSE} = \frac{\text{SSE}}{n - k - 1}$: Mittlere Quadratsumme des Fehlers

### Konfidenz- und Vorhersageintervalle

#### Konfidenzintervalle für die Regressionskoeffizienten

Ein Konfidenzintervall gibt den Bereich an, in dem der wahre Wert des Regressionskoeffizienten mit einer bestimmten Wahrscheinlichkeit liegt.

#### Vorhersageintervalle für neue Beobachtungen

Ein Vorhersageintervall gibt den Bereich an, in dem eine neue Beobachtung mit einer bestimmten Wahrscheinlichkeit liegt.

### Anwendung in R oder Python

#### Beispiel in R

```r
# Daten laden und visualisieren
data <- read.csv("data.csv")
plot(data$X, data$Y)

# Einfache lineare Regression durchführen
model <- lm(Y ~ X, data = data)
summary(model)

# Residualanalyse
plot(model$residuals)
```

#### Beispiel in Python

```python
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm

# Daten laden und visualisieren
data = pd.read_csv("data.csv")
plt.scatter(data['X'], data['Y'])
plt.show()

# Einfache lineare Regression durchführen
X = sm.add_constant(data['X'])
model = sm.OLS(data['Y'], X).fit()
print(model.summary())

# Residualanalyse
plt.plot(model.resid)
plt.show()
```

## Übungen

1. **Datensätze laden und visualisieren**

   - Laden Sie einen Datensatz und visualisieren Sie die Beziehung zwischen der abhängigen und der unabhängigen Variable.

2. **Einfache lineare Regression durchführen und interpretieren**

   - Führen Sie eine einfache lineare Regression durch und interpretieren Sie die geschätzten Parameter, das Bestimmtheitsmaß und die Ergebnisse der Hypothesentests.

3. **Residualanalyse**
   - Analysieren Sie die Residuen des Modells, um die Modellannahmen zu überprüfen.

---

### Praktische Übung in R

```r
# 1. Datensätze laden und visualisieren
data <- read.csv("data.csv")
plot(data$X, data$Y, main="Scatterplot von X und Y", xlab="X", ylab="Y")

# 2. Einfache lineare Regression durchführen und interpretieren
model <- lm(Y ~ X, data = data)
summary(model)

# Interpretation der Ergebnisse
cat("Achsenabschnitt:", coef(model)[1], "\n")
cat("Steigung:", coef(model)[2], "\n")
cat("R²:", summary(model)$r.squared, "\n")
cat("Adjusted R²:", summary(model)$adj.r.squared, "\n")

# 3. Residualanalyse
par(mfrow=c(2,2))
plot(model)
```

### Praktische Übung in Python

```python
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm

# 1. Datensätze laden und visualisieren
data = pd.read_csv("data.csv")
plt.scatter(data['X'], data['Y'])
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Scatterplot von X und Y')
plt.show()

# 2. Einfache lineare Regression durchführen und interpretieren
X = sm.add_constant(data['X'])
model = sm.OLS(data['Y'], X).fit()
print(model.summary())

# Interpretation der Ergebnisse
params = model.params
print(f'Achsenabschnitt: {params[0]}')
print(f'Steigung: {params[1]}')
print(f'R²: {model.rsquared}')
print(f'Adjusted R²: {model.rsquared_adj}')

# 3. Residualanalyse
fig, ax = plt.subplots(2, 2, figsize=(12, 8))
sm.graphics.plot_regress_exog(model, 'X', fig=fig)
plt.show()
```

Dieses Skript gibt Ihnen eine umfassende Einführung in das einfache lineare Regressionsmodell, inklusive theoretischer Grundlagen, praktischer Beispiele und Übungen zur Vertiefung Ihres Wissens und Ihrer Fähigkeiten in der Anwendung und Interpretation der Ergebnisse.

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
