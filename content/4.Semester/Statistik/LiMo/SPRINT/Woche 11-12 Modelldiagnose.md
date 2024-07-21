---
date created: Monday, 15. July 2024, 22:44
date modified: Tuesday, 16. July 2024, 22:52
---

# Woche 11-12: Modelldiagnose

## Ziel

Diagnose und Verbesserung von Regressionsmodellen zur Sicherstellung ihrer Validität und Robustheit.

## Inhalte

### Residualanalyse und Identifikation von Ausreißern

#### Residuen und ihre Bedeutung

Die Residuen sind die Differenzen zwischen den beobachteten Werten und den durch das Modell vorhergesagten Werten:

$$
e_i = y_i - \hat{y}_i
$$

Die Analyse der Residuen hilft dabei, die Eignung des Modells zu überprüfen und Probleme wie Ausreißer, Heteroskedastizität und Nichtlinearität zu identifizieren.

#### Identifikation von Ausreißern

Ausreißer sind Beobachtungen, die signifikant von den anderen Datenpunkten abweichen und das Modell stark beeinflussen können. Sie können durch Residualplots, Boxplots oder spezielle statistische Tests identifiziert werden.

**Beispiel in R:**

```r
# Residuen berechnen
residuals <- resid(model)

# Residualplot erstellen
plot(fitted(model), residuals)
abline(h = 0, col = "red")

# Boxplot der Residuen
boxplot(residuals)
```

**Beispiel in Python:**

```python
import matplotlib.pyplot as plt

# Residuen berechnen
residuals = model.resid

# Residualplot erstellen
plt.scatter(model.fittedvalues, residuals)
plt.axhline(0, color='red')
plt.xlabel('Fitted values')
plt.ylabel('Residuals')
plt.show()

# Boxplot der Residuen
plt.boxplot(residuals)
plt.show()
```

### Prüfung der Modellannahmen

#### Homoskedastizität

Homoskedastizität bedeutet, dass die Varianz der Residuen konstant ist. Dies ist eine wichtige Annahme für die Validität der Standardfehler und der Hypothesentests in der Regression.

**Test auf Homoskedastizität:**

- Visuelle Inspektion der Residualplots
- Breusch-Pagan-Test
- White-Test

**Beispiel in R:**

```r
# Breusch-Pagan-Test durchführen
library(lmtest)
bptest(model)
```

**Beispiel in Python:**

```python
from statsmodels.stats.diagnostic import het_breuschpagan

# Breusch-Pagan-Test durchführen
bp_test = het_breuschpagan(residuals, model.model.exog)
print('Breusch-Pagan-Test: ', bp_test)
```

#### Normalität der Residuen

Die Residuen sollten normalverteilt sein, um die Validität der Konfidenzintervalle und Hypothesentests zu gewährleisten.

**Test auf Normalität:**

- Visuelle Inspektion durch QQ-Plots
- Shapiro-Wilk-Test
- Kolmogorov-Smirnov-Test

**Beispiel in R:**

```r
# QQ-Plot der Residuen
qqnorm(residuals)
qqline(residuals, col = "red")

# Shapiro-Wilk-Test
shapiro.test(residuals)
```

**Beispiel in Python:**

```python
import scipy.stats as stats

# QQ-Plot der Residuen
stats.probplot(residuals, dist="norm", plot=plt)
plt.show()

# Shapiro-Wilk-Test
shapiro_test = stats.shapiro(residuals)
print('Shapiro-Wilk-Test: ', shapiro_test)
```

### Einflussdiagnostik

#### Leverage

Leverage misst den Einfluss eines Datenpunkts auf die Anpassung des Modells. Datenpunkte mit hohem Leverage haben eine große Auswirkung auf die Regressionsgerade.

**Berechnung von Leverage:**

- Leverage-Werte werden in der Regel durch die Diagonale der Hat-Matrix ($H$) gegeben:

$$
h_i = H_{ii}
$$

**Beispiel in R:**

```r
# Leverage-Werte berechnen
leverage <- hatvalues(model)

# Plot der Leverage-Werte
plot(leverage)
abline(h = 2*mean(leverage), col = "red")
```

**Beispiel in Python:**

```python
import statsmodels.api as sm

# Leverage-Werte berechnen
leverage = model.get_influence().hat_matrix_diag

# Plot der Leverage-Werte
plt.stem(leverage)
plt.axhline(2*np.mean(leverage), color='red')
plt.show()
```

#### Cook's Distance

Cook's Distance misst den Gesamteinfluss eines Datenpunkts auf die Schätzwerte der Regressionskoeffizienten. Ein hoher Wert von Cook's Distance deutet auf einen einflussreichen Datenpunkt hin.

**Berechnung von Cook's Distance:**

$$
D_i = \frac{\sum_{j=1}^n (\hat{y}_j - \hat{y}_{j(-i)})^2}{p \cdot MSE}
$$

**Beispiel in R:**

```r
# Cook's Distance berechnen
cooksd <- cooks.distance(model)

# Plot von Cook's Distance
plot(cooksd)
abline(h = 4/length(cooksd), col = "red")
```

**Beispiel in Python:**

```python
# Cook's Distance berechnen
cooks_d = model.get_influence().cooks_distance[0]

# Plot von Cook's Distance
plt.stem(cooks_d)
plt.axhline(4/len(cooks_d), color='red')
plt.show()
```

### Maßnahmen bei Verletzung der Annahmen

Wenn die Annahmen der Regression verletzt sind, gibt es verschiedene Techniken, um das Modell zu verbessern und die Validität sicherzustellen.

#### Transformation der Variablen

- **Log-Transformation:** Verwendet bei heteroskedastischen Daten oder nichtlinearen Beziehungen.

$$
Y' = \log(Y)
$$

- **Quadratische Transformation:** Verwendet, um nichtlineare Beziehungen zu modellieren.

$$
Y' = Y^2
$$

**Beispiel in R:**

```r
# Log-Transformation der abhängigen Variablen
data$log_Y <- log(data$Y)

# Modell mit transformierter abhängiger Variable
model_log <- lm(log_Y ~ X1 + X2, data = data)
summary(model_log)
```

**Beispiel in Python:**

```python
# Log-Transformation der abhängigen Variablen
data['log_Y'] = np.log(data['Y'])

# Modell mit transformierter abhängiger Variable
X_log = data[['X1', 'X2']]
X_log = sm.add_constant(X_log)
model_log = sm.OLS(data['log_Y'], X_log).fit()
print(model_log.summary())
```

#### Robustheitsmethoden

- **Robuste Standardfehler:** Korrigieren die Standardfehler bei Verletzung der Homoskedastizitätsannahme.

**Beispiel in R:**

```r
library(sandwich)
library(lmtest)

# Modell mit robusten Standardfehlern
robust_se <- coeftest(model, vcov = vcovHC(model, type = "HC1"))
print(robust_se)
```

**Beispiel in Python:**

```python
# Modell mit robusten Standardfehlern
robust_se = model.get_robustcov_results(cov_type='HC1')
print(robust_se.summary())
```

## Übungen

### Durchführung umfassender Modelldiagnosen

#### Beispiel in R

```r
# Daten laden
data <- read.csv("data.csv")

# Lineares Regressionsmodell erstellen
model <- lm(Y ~ X1 + X2, data = data)

# Residualanalyse
residuals <- resid(model)
plot(fitted(model), residuals)
abline(h = 0, col = "red")
boxplot(residuals)
qqnorm(residuals)
qqline(residuals, col = "red")
shapiro.test(residuals)

# Leverage-Werte
leverage <- hatvalues(model)
plot(leverage)
abline(h = 2*mean(leverage), col = "red")

# Cook's Distance
cooksd <- cooks.distance(model)
plot(cooksd)
abline(h = 4/length(cooksd), col = "red")

# Breusch-Pagan-Test
library(lmtest)
bptest(model)

# Robuste Standardfehler
library(sandwich)
library(lmtest)
robust_se <- coeftest(model, vcov = vcovHC(model, type = "HC1"))
print(robust_se)
```

#### Beispiel in Python

```python
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt
import numpy as np
import scipy.stats as stats
from statsmodels.stats.diagnostic import het_breuschpagan

# Daten laden
data = pd.read_csv("data.csv")

# Lineares Regressionsmodell erstellen
X = data[['X1', 'X2']]
X = sm.add_constant(X)
model = sm.OLS(data['Y'], X).fit()

# Residualanalyse
residuals = model.resid
plt.scatter(model.fittedvalues, residuals)
plt.axhline(0, color='red')
plt.xlabel('Fitted values')
plt.ylabel('Residuals')
plt.show()

plt.boxplot(residuals)
plt.show()

stats.probplot(residuals, dist="norm", plot=plt)
plt.show()

shapiro_test = stats.shapiro(residuals)
print('Shapiro-Wilk-Test: ', sh

apiro_test)

# Leverage-Werte
leverage = model.get_influence().hat_matrix_diag
plt.stem(leverage)
plt.axhline(2*np.mean(leverage), color='red')
plt.show()

# Cook's Distance
cooks_d = model.get_influence().cooks_distance[0]
plt.stem(cooks_d)
plt.axhline(4/len(cooks_d), color='red')
plt.show()

# Breusch-Pagan-Test
bp_test = het_breuschpagan(residuals, model.model.exog)
print('Breusch-Pagan-Test: ', bp_test)

# Robuste Standardfehler
robust_se = model.get_robustcov_results(cov_type='HC1')
print(robust_se.summary())
```

### Anwendung von Transformationsmethoden zur Verbesserung des Modells

#### Beispiel in R

```r
# Log-Transformation der abhängigen Variablen
data$log_Y <- log(data$Y)

# Modell mit transformierter abhängiger Variable
model_log <- lm(log_Y ~ X1 + X2, data = data)
summary(model_log)

# Residualanalyse des transformierten Modells
residuals_log <- resid(model_log)
plot(fitted(model_log), residuals_log)
abline(h = 0, col = "red")
boxplot(residuals_log)
qqnorm(residuals_log)
qqline(residuals_log, col = "red")
shapiro.test(residuals_log)
```

#### Beispiel in Python

```python
# Log-Transformation der abhängigen Variablen
data['log_Y'] = np.log(data['Y'])

# Modell mit transformierter abhängiger Variable
X_log = data[['X1', 'X2']]
X_log = sm.add_constant(X_log)
model_log = sm.OLS(data['log_Y'], X_log).fit()
print(model_log.summary())

# Residualanalyse des transformierten Modells
residuals_log = model_log.resid
plt.scatter(model_log.fittedvalues, residuals_log)
plt.axhline(0, color='red')
plt.xlabel('Fitted values')
plt.ylabel('Residuals')
plt.show()

plt.boxplot(residuals_log)
plt.show()

stats.probplot(residuals_log, dist="norm", plot=plt)
plt.show()

shapiro_test_log = stats.shapiro(residuals_log)
print('Shapiro-Wilk-Test: ', shapiro_test_log)
```

## Zusammenfassung

### Wichtige Konzepte

1. **Residualanalyse**: Überprüfung der Residuen, um die Eignung des Modells zu bewerten und Probleme wie Ausreißer und Heteroskedastizität zu identifizieren.
2. **Prüfung der Modellannahmen**: Sicherstellung, dass die Annahmen der Homoskedastizität und Normalität der Residuen erfüllt sind.
3. **Einflussdiagnostik**: Identifikation einflussreicher Datenpunkte durch Leverage und Cook's Distance.
4. **Maßnahmen bei Verletzung der Annahmen**: Anwendung von Transformationsmethoden und robusten Standardfehlern, um die Validität des Modells sicherzustellen.

### Praktische Anwendungen

- Durchführung umfassender Modelldiagnosen in R und Python.
- Anwendung von Transformationsmethoden zur Verbesserung der Modellanpassung.
- Untersuchung und Interpretation der Ergebnisse, um die Modellvalidität sicherzustellen.

### Weiterführende Übungen

- Verwendung von realen Datensätzen zur Anwendung der gelernten Techniken.
- Vergleich der Modellgüte vor und nach der Anwendung von Transformationsmethoden.
- Untersuchung der Auswirkungen verschiedener Einflussdiagnostikmethoden auf das Modell.

---

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
