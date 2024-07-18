---
date created: Monday, 15. July 2024, 22:31
date modified: Tuesday, 16. July 2024, 15:40
---

# Woche 5-6: Quadratsummenzerlegung und statistische Inferenz

## Ziel

Verständnis der Zerlegung der Quadratsummen und der statistischen Inferenz bei Regressionsmodellen.

## Inhalte

### Gesamte Quadratsumme (SST), erklärbare Quadratsumme (SSR) und Residuenquadratsumme (SSE)

In der Regressionsanalyse wird die Gesamtvariation der abhängigen Variable $Y$ in verschiedene Komponenten zerlegt, um die Güte und Aussagekraft des Modells zu bewerten.

#### Gesamte Quadratsumme (SST)

Die gesamte Quadratsumme (Total Sum of Squares, SST) misst die gesamte Variation der abhängigen Variable $Y$ um ihren Mittelwert $\bar{Y}$.

$$
SST = \sum_{i=1}^{n} (Y_i - \bar{Y})^2
$$

#### Erklärbare Quadratsumme (SSR)

Die erklärbare Quadratsumme (Regression Sum of Squares, SSR) misst die Variation der abhängigen Variable, die durch das Regressionsmodell erklärt wird.

$$
SSR = \sum_{i=1}^{n} (\hat{Y}_i - \bar{Y})^2
$$

#### Residuenquadratsumme (SSE)

Die Residuenquadratsumme (Error Sum of Squares, SSE) misst die Variation der abhängigen Variable, die nicht durch das Modell erklärt wird (d.h. die Fehlerkomponente).

$$
SSE = \sum_{i=1}^{n} (Y_i - \hat{Y}_i)^2
$$

#### Beziehung zwischen SST, SSR und SSE

Die Quadratsummen haben eine additive Beziehung:

$$
SST = SSR + SSE
$$

### F-Tests zur Gesamtmodellprüfung

Der F-Test wird verwendet, um die Gesamtgüte des Regressionsmodells zu bewerten. Er testet die Nullhypothese, dass alle Regressionskoeffizienten (außer dem Achsenabschnitt) gleich null sind.

#### F-Test-Statistik

Die F-Statistik wird wie folgt berechnet:

$$
F = \frac{MSR}{MSE} = \frac{\frac{SSR}{k}}{\frac{SSE}{n - k - 1}}
$$

- $MSR$: Mittlere Quadratsumme der Regression (Mean Square Regression)

$$
MSR = \frac{SSR}{k}
$$

- $MSE$: Mittlere Quadratsumme des Fehlers (Mean Square Error)

$$
MSE = \frac{SSE}{n - k - 1}
$$

### Einzelfaktortests

Einzelfaktortests, in der Regel t-Tests, werden verwendet, um die Bedeutung einzelner Regressionskoeffizienten zu bewerten. Der t-Test prüft die Nullhypothese, dass ein bestimmter Regressionskoeffizient gleich null ist.

#### t-Test-Statistik

Die t-Statistik wird wie folgt berechnet:

$$
t = \frac{\hat{\beta}_j}{SE(\hat{\beta}_j)}
$$

- $\hat{\beta}_j$: geschätzter Regressionskoeffizient
- $SE(\hat{\beta}_j)$: Standardfehler des geschätzten Regressionskoeffizienten

### Varianzzerlegung und Interpretation

Die Varianzzerlegung hilft dabei zu verstehen, wie viel der Gesamtvariation der abhängigen Variable durch das Modell erklärt wird und wie viel durch Zufall oder Fehler.

#### Varianzzerlegung

Die Varianzzerlegung basiert auf der Quadratsummenzerlegung:

$$
R^2 = \frac{SSR}{SST}
$$

- $R^2$ gibt den Anteil der Gesamtvariation an, der durch das Modell erklärt wird.
- Ein höherer $R^2$ Wert deutet auf eine bessere Modellanpassung hin.

## Übungen

### Zerlegung der Quadratsummen in praktischen Beispielen

#### Beispiel in R

```r
# Daten laden
data <- read.csv("data.csv")

# Lineares Regressionsmodell erstellen
model <- lm(Y ~ X1 + X2 + X3, data = data)
summary(model)

# Quadratsummen berechnen
SST <- sum((data$Y - mean(data$Y))^2)
SSR <- sum((fitted(model) - mean(data$Y))^2)
SSE <- sum(residuals(model)^2)

# Ergebnisse anzeigen
cat("SST:", SST, "\n")
cat("SSR:", SSR, "\n")
cat("SSE:", SSE, "\n")
cat("SST = SSR + SSE:", SST, "=", SSR + SSE, "\n")
```

#### Beispiel in Python

```python
import pandas as pd
import statsmodels.api as sm

# Daten laden
data = pd.read_csv("data.csv")

# Lineares Regressionsmodell erstellen
X = data[['X1', 'X2', 'X3']]
X = sm.add_constant(X)
model = sm.OLS(data['Y'], X).fit()

# Quadratsummen berechnen
SST = ((data['Y'] - data['Y'].mean())**2).sum()
SSR = ((model.fittedvalues - data['Y'].mean())**2).sum()
SSE = ((data['Y'] - model.fittedvalues)**2).sum()

# Ergebnisse anzeigen
print(f'SST: {SST}')
print(f'SSR: {SSR}')
print(f'SSE: {SSE}')
print(f'SST = SSR + SSE: {SST} = {SSR + SSE}')
```

### Durchführung von F-Tests zur Modellbewertung

#### Beispiel in R

```r
# F-Statistik berechnen
f_statistic <- summary(model)$fstatistic[1]
p_value <- pf(f_statistic, df1 = summary(model)$fstatistic[2], df2 = summary(model)$fstatistic[3], lower.tail = FALSE)

# Ergebnisse anzeigen
cat("F-Statistik:", f_statistic, "\n")
cat("p-Wert:", p_value, "\n")
```

#### Beispiel in Python

```python
# F-Statistik und p-Wert aus dem Modell extrahieren
f_statistic = model.fvalue
p_value = model.f_pvalue

# Ergebnisse anzeigen
print(f'F-Statistik: {f_statistic}')
print(f'p-Wert: {p_value}')
```

### Interpretation der Ergebnisse

1. **Quadratsummenzerlegung**: Bestätigen, dass SST = SSR + SSE. Dies zeigt, dass die gesamte Variation der abhängigen Variable korrekt in erklärte und unerklärte Teile zerlegt wurde.
2. **F-Test**: Ein hoher F-Wert und ein niedriger p-Wert (typischerweise < 0.05) deuten darauf hin, dass das Modell insgesamt signifikant ist und mindestens einer der Prädiktoren einen signifikanten Einfluss auf die abhängige Variable hat.
3. **Einzelfaktortests (t-Tests)**: Einzelne t-Tests helfen dabei, die Bedeutung jedes Prädiktors im Modell zu bewerten. Ein signifikantes Ergebnis (p < 0.05) zeigt, dass der entsprechende Prädiktor einen signifikanten Beitrag zur Erklärung der abhängigen Variable leistet.

Dieses Skript bietet eine umfassende Einführung in die Quadratsummenzerlegung und die statistische Inferenz in Regressionsmodellen, ergänzt durch praktische Beispiele und Übungen zur Vertiefung des Verständnisses und der Fähigkeiten in der Anwendung und Interpretation der Ergebnisse.

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
