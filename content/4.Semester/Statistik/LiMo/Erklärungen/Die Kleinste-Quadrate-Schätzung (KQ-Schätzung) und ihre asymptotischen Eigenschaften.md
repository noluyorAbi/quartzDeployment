---
date created: Tuesday, 16. July 2024, 23:09
date modified: Tuesday, 16. July 2024, 23:32
---

# Referenz: [[Gewichtete Kleinste-Quadrate (WLS) vs Normale Kleinste-Quadrate (OLS)]]

# Die Kleinste-Quadrate-Schätzung (KQ-Schätzung) und ihre asymptotischen Eigenschaften

## Einleitung

Die Kleinste-Quadrate-Schätzung (KQ-Schätzung) ist eine der grundlegendsten Methoden in der Statistik und Ökonometrie, die zur Schätzung der Parameter von Regressionsmodellen verwendet wird. Diese Methode minimiert die Summe der quadrierten Abweichungen zwischen den beobachteten und den durch das Modell vorhergesagten Werten. In diesem Dokument werden wir die KQ-Schätzung detailliert untersuchen, einschließlich ihrer mathematischen Grundlagen, Berechnungsmethoden und asymptotischen Eigenschaften, insbesondere wenn die Fehlerterme unabhängig und identisch verteilt (i.i.d.) sind.

## Grundlagen der Kleinste-Quadrate-Schätzung

### Einfache lineare Regression

Die einfache lineare Regression modelliert die Beziehung zwischen einer abhängigen Variable $Y$ und einer unabhängigen Variable $X$ durch die folgende Gleichung:

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

Hierbei sind:

- $\beta_0$ der Achsenabschnitt,
- $\beta_1$ die Steigung der Regressionsgeraden,
- $\epsilon$ der Fehlerterm.

Die KQ-Schätzung zielt darauf ab, die Parameter $\beta_0$ und $\beta_1$ so zu bestimmen, dass die Summe der quadrierten Fehler (Residuals) minimiert wird:

$$
S(\beta_0, \beta_1) = \sum_{i=1}^n (Y_i - (\beta_0 + \beta_1 X_i))^2
$$

### Multiple lineare Regression

Die multiple lineare Regression erweitert das einfache Modell, indem sie mehrere unabhängige Variablen einbezieht:

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \cdots + \beta_p X_p + \epsilon
$$

Hierbei sind $X_1, X_2, \ldots, X_p$ die unabhängigen Variablen und $\beta_0, \beta_1, \ldots, \beta_p$ die Regressionskoeffizienten.

Die KQ-Schätzung minimiert die Summe der quadrierten Residuen auch in diesem Fall:

$$
S(\beta_0, \beta_1, \ldots, \beta_p) = \sum_{i=1}^n \left( Y_i - \left( \beta_0 + \sum_{j=1}^p \beta_j X_{ij} \right) \right)^2
$$

## Berechnung der KQ-Schätzer

### Einfache lineare Regression

In der einfachen linearen Regression werden die KQ-Schätzer $\hat{\beta}_0$ und $\hat{\beta}_1$ durch die folgenden Formeln berechnet:

$$
\hat{\beta}_1 = \frac{\sum_{i=1}^n (X_i - \bar{X})(Y_i - \bar{Y})}{\sum_{i=1}^n (X_i - \bar{X})^2}
$$

$$
\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}
$$

Hierbei sind $\bar{X}$ und $\bar{Y}$ die Mittelwerte der unabhängigen und abhängigen Variablen.

### Multiple lineare Regression

In der multiplen linearen Regression werden die KQ-Schätzer $\hat{\beta}_0, \hat{\beta}_1, \ldots, \hat{\beta}_p$ durch die Normalengleichungen bestimmt:

$$
\mathbf{X}^T \mathbf{X} \hat{\boldsymbol{\beta}} = \mathbf{X}^T \mathbf{Y}
$$

wobei $\mathbf{X}$ die Designmatrix, $\mathbf{Y}$ der Vektor der abhängigen Variablen und $\hat{\boldsymbol{\beta}}$ der Vektor der KQ-Schätzer ist. Die Lösung dieser Gleichung ist:

$$
\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{Y}
$$

## Eigenschaften der KQ-Schätzer

### Unverzerrtheit

Ein Schätzer $\hat{\beta}$ ist unverzerrt, wenn sein Erwartungswert gleich dem wahren Parameterwert ist:

$$
E(\hat{\beta}) = \beta
$$

Die KQ-Schätzer sind unverzerrt unter der Annahme, dass die Fehlerterme $\epsilon_i$ einen Erwartungswert von null haben ($E(\epsilon_i) = 0$).

### Effizienz

Ein Schätzer ist effizient, wenn er unter allen unverzerrten Schätzern die kleinste Varianz hat. Die KQ-Schätzer sind effizient, wenn die Fehlerterme homoskedastisch und unkorreliert sind.

### Konsistenz

Ein Schätzer ist konsistent, wenn er mit wachsender Stichprobengröße $n$ gegen den wahren Parameterwert konvergiert:

$$
\hat{\beta} \xrightarrow{p} \beta \quad \text{für} \quad n \to \infty
$$

Die KQ-Schätzer sind konsistent, wenn die unabhängigen Variablen nicht perfekt kollinear sind und die Fehlerterme homoskedastisch und unkorreliert sind.

## Asymptotische Eigenschaften der KQ-Schätzer

### Gesetz der großen Zahlen

Das Gesetz der großen Zahlen besagt, dass der Durchschnitt einer großen Anzahl von unabhängigen und identisch verteilten Zufallsvariablen gegen den Erwartungswert der Zufallsvariablen konvergiert. In Bezug auf die KQ-Schätzer bedeutet dies, dass die Schätzer bei großer Stichprobengröße gegen die wahren Parameterwerte konvergieren.

### Zentraler Grenzwertsatz

Der zentrale Grenzwertsatz besagt, dass die Verteilung der Summe einer großen Anzahl von unabhängigen und identisch verteilten Zufallsvariablen approximativ normal ist, unabhängig von der Verteilung der einzelnen Variablen. Für die KQ-Schätzer bedeutet dies, dass ihre Verteilung bei großer Stichprobengröße approximativ normal ist.

### Asymptotische Normalität

Die KQ-Schätzer sind asymptotisch normal verteilt. Das bedeutet, dass bei großer Stichprobengröße die Verteilung der KQ-Schätzer näherungsweise normal ist:

$$
\sqrt{n} (\hat{\beta} - \beta) \xrightarrow{d} N(0, \sigma^2 \mathbf{Q}^{-1})
$$

Hierbei ist $\mathbf{Q}$ die Kovarianzmatrix der unabhängigen Variablen und $\sigma^2$ die Varianz der Fehlerterme.

### Konsistenz und Asymptotische Effizienz

Die KQ-Schätzer sind konsistent und asymptotisch effizient, wenn die Fehlerterme unabhängig und identisch verteilt (i.i.d.) sind. Das bedeutet, dass die KQ-Schätzer nicht nur gegen die wahren Parameterwerte konvergieren, sondern auch die geringste mögliche asymptotische Varianz unter allen unverzerrten Schätzern haben.

## KQ-Schätzung unter der Annahme von i.i.d. Fehlern

### Unabhängige und identisch verteilte (i.i.d.) Fehler

Wenn die Fehlerterme $\epsilon_i$ unabhängig und identisch verteilt (i.i.d.) sind, erfüllen sie die folgenden Bedingungen:

- $E(\epsilon_i) = 0$
- $\text{Var}(\epsilon_i) = \sigma^2$

Diese Annahmen vereinfachen die Analyse und führen zu klaren asymptotischen Eigenschaften der KQ-Schätzer.

### Eigenschaften der KQ-Schätzer bei i.i.d. Fehlern

Unter der Annahme von i.i.d. Fehlern sind die KQ-Schätzer:

- **Unverzerrt**: $E(\hat{\beta}) = \beta$
- **Konsistent**: $\hat{\beta} \xrightarrow{p} \beta$
- **Asymptotisch normal**: $\sqrt{n} (\hat{\beta} - \beta) \xrightarrow{d} N(0, \sigma^2 (\mathbf{X}^T \mathbf{X})^{-1})$
- **Asymptotisch effizient**: Sie haben die geringste asymptotische Varianz unter allen unverzerrten Schätzern.

### Herleitung der asymptotischen Normalität

Die Herleitung der asymptotischen Normalität der KQ-Schätzer erfolgt in mehreren Schritten:

1. **Erwartungswert und Varianz**:
   Der Erwartungswert und die Varianz der KQ-Schätzer werden berechnet. Unter der Annahme von i.i.d. Fehlern gilt:

   $$
   E(\hat{\beta}) = \beta
   $$

   $$
   \text{Var}(\hat{\beta}) = \sigma^2 (\mathbf{X}^T \mathbf{X})^{-1}
   $$

2. **Standardisierung**:
   Die KQ-Schätzer werden standardisiert, um eine zentrierte und skalierte Version zu erhalten:

   $$
   \sqrt{n} (\hat{\beta} - \beta)
   $$

3. **Anwendung des zentralen Grenzwertsatzes**:
   Der zentrale Gren

zwertsatz wird angewendet, um die asymptotische Normalität zu zeigen:

$$
\sqrt{n} (\hat{\beta} - \beta) \xrightarrow{d} N(0, \sigma^2 (\mathbf{X}^T \mathbf{X})^{-1})
$$

## Praktische Anwendung und Beispiel

### Datengenerierung und Modellschätzung

Um die KQ-Schätzung und ihre asymptotischen Eigenschaften zu illustrieren, generieren wir ein einfaches Datenset und schätzen ein Regressionsmodell.

```python
import numpy as np
import statsmodels.api as sm
import matplotlib.pyplot as plt

# Daten generieren
np.random.seed(0)
X = np.random.rand(100, 1)
X = sm.add_constant(X)  # Hinzufügen des Achsenabschnitts
beta = np.array([2, 3])
epsilon = np.random.normal(0, 1, 100)
Y = X @ beta + epsilon

# Modell schätzen
model = sm.OLS(Y, X).fit()
print(model.summary())

# Residuen plotten
plt.scatter(X[:, 1], model.resid)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('X')
plt.ylabel('Residuen')
plt.title('Residuenplot')
plt.show()
```

### Interpretation der Ergebnisse

Das obige Python-Skript generiert Daten für eine einfache lineare Regression und schätzt die Regressionskoeffizienten mit der KQ-Methode. Die Ausgabe des Modells zeigt die geschätzten Koeffizienten, ihre Standardfehler, t-Werte und p-Werte sowie das Konfidenzintervall.

### Asymptotische Normalität

Die geschätzten Koeffizienten sollten bei ausreichender Stichprobengröße asymptotisch normal verteilt sein. Dies kann durch das Plotten der Residuen und Überprüfen der Normalverteilung der geschätzten Koeffizienten visualisiert werden.

```python
import scipy.stats as stats

# Histogramm der Residuen
plt.hist(model.resid, bins=20, density=True, alpha=0.6, color='g')
xmin, xmax = plt.xlim()
x = np.linspace(xmin, xmax, 100)
p = stats.norm.pdf(x, 0, np.std(model.resid))
plt.plot(x, p, 'k', linewidth=2)
plt.title('Histogramm der Residuen')
plt.show()

# QQ-Plot der Residuen
sm.qqplot(model.resid, line='45')
plt.title('QQ-Plot der Residuen')
plt.show()
```

## Vertiefung: Asymptotische Eigenschaften bei Nicht-i.i.d. Fehlern

### Heteroskedastizität

Wenn die Varianz der Fehlerterme nicht konstant ist (Heteroskedastizität), sind die KQ-Schätzer zwar weiterhin unverzerrt, aber nicht effizient. In diesem Fall sind alternative Schätzmethoden wie die gewichtete Kleinste-Quadrate-Schätzung (WLS) oder robuste Standardfehler erforderlich.

### Autokorrelation

Wenn die Fehlerterme zeitlich korreliert sind (Autokorrelation), sind die KQ-Schätzer ebenfalls unverzerrt, aber nicht effizient. Methoden wie die Newey-West-Standardfehler oder die Generalized Least Squares (GLS) können verwendet werden, um die Effizienz der Schätzungen zu verbessern.

### Abhängige Fehler

Wenn die Fehlerterme nicht unabhängig sind, sondern eine komplexe Abhängigkeitsstruktur aufweisen, müssen spezialisierte Modelle wie Mixed-Effects-Modelle oder Modelle mit Cluster-Robust-Standardfehlern verwendet werden.

## Simulationen zur Veranschaulichung asymptotischer Eigenschaften

### Simulation der KQ-Schätzer unter i.i.d. Fehlern

Um die asymptotischen Eigenschaften der KQ-Schätzer zu veranschaulichen, führen wir eine Simulation durch, bei der wir wiederholt Datensätze generieren, das Modell schätzen und die Verteilung der Schätzungen analysieren.

```python
# Anzahl der Simulationen
num_simulations = 1000
n = 100  # Stichprobengröße

beta_hat_list = []

for _ in range(num_simulations):
    X = np.random.rand(n, 1)
    X = sm.add_constant(X)
    epsilon = np.random.normal(0, 1, n)
    Y = X @ beta + epsilon
    model = sm.OLS(Y, X).fit()
    beta_hat_list.append(model.params)

beta_hat_array = np.array(beta_hat_list)

# Histogramm der geschätzten Koeffizienten
plt.hist(beta_hat_array[:, 1], bins=20, density=True, alpha=0.6, color='b')
plt.title('Verteilung der geschätzten Koeffizienten')
plt.xlabel('Geschätzter Koeffizient')
plt.ylabel('Dichte')
plt.show()
```

Diese Simulation zeigt, dass die Verteilung der geschätzten Koeffizienten bei ausreichender Stichprobengröße näherungsweise normal ist, was die asymptotische Normalität der KQ-Schätzer bestätigt.

## Fazit

Die Kleinste-Quadrate-Schätzung (KQ-Schätzung) ist eine fundamentale Methode in der Regressionsanalyse, die durch ihre Einfachheit und Effizienz besticht. Unter der Annahme, dass die Fehlerterme unabhängig und identisch verteilt (i.i.d.) sind, besitzen die KQ-Schätzer attraktive Eigenschaften wie Unverzerrtheit, Konsistenz und asymptotische Normalität. Diese Eigenschaften machen die KQ-Schätzung zu einem leistungsfähigen Werkzeug für die Analyse linearer Regressionsmodelle. In der Praxis ist es jedoch wichtig, die Annahmen zu überprüfen und gegebenenfalls alternative Methoden anzuwenden, wenn diese Annahmen verletzt sind.

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
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    console.log(randomNumber)
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
