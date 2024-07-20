---
date created: Tuesday, 16. July 2024, 23:50
date modified: Tuesday, 16. July 2024, 23:57
---

# Multiple Normale Lineare Modelle

## Einleitung

Multiple normale lineare Modelle sind ein mächtiges Werkzeug in der Statistik, das verwendet wird, um die Beziehung zwischen einer abhängigen Variable und mehreren unabhängigen Variablen zu analysieren. Diese Modelle sind eine Erweiterung der einfachen linearen Regression und bieten eine strukturierte Methode zur Analyse von Daten, bei denen mehrere Einflussfaktoren berücksichtigt werden müssen. In diesem Dokument werden wir die grundlegenden Konzepte, die mathematischen Grundlagen, die Modellannahmen, die Schätzmethoden und die Interpretation von multiplen normalen linearen Modellen detailliert untersuchen.

## Grundlagen der Linearen Regression

### Einfache Lineare Regression

Die einfache lineare Regression modelliert die Beziehung zwischen einer abhängigen Variable $Y$ und einer unabhängigen Variable $X$ durch die folgende Gleichung:

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

Hierbei sind:

- $\beta_0$ der Achsenabschnitt,
- $\beta_1$ die Steigung der Regressionsgeraden,
- $\epsilon$ der Fehlerterm.

Die Parameter $\beta_0$ und $\beta_1$ werden so geschätzt, dass die Summe der quadrierten Abweichungen zwischen den beobachteten und den vorhergesagten Werten minimiert wird.

### Multiple Lineare Regression

Die multiple lineare Regression erweitert dieses Modell, indem sie mehrere unabhängige Variablen einbezieht:

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \cdots + \beta_p X_p + \epsilon
$$

Hierbei sind $X_1, X_2, \ldots, X_p$ die unabhängigen Variablen und $\beta_0, \beta_1, \ldots, \beta_p$ die Regressionskoeffizienten.

### Mathematische Darstellung

In Matrixform lässt sich das Modell wie folgt schreiben:

$$
\mathbf{Y} = \mathbf{X} \boldsymbol{\beta} + \boldsymbol{\epsilon}
$$

wobei:

- $\mathbf{Y}$ ein $n \times 1$ Vektor der abhängigen Variablen ist,
- $\mathbf{X}$ eine $n \times (p+1)$ Designmatrix der unabhängigen Variablen ist,
- $\boldsymbol{\beta}$ ein $(p+1) \times 1$ Vektor der Regressionskoeffizienten ist,
- $\boldsymbol{\epsilon}$ ein $n \times 1$ Vektor der Fehlerterme ist.

## Annahmen der Multiplen Linearen Regression

Für die Validität der Ergebnisse der multiplen linearen Regression müssen bestimmte Annahmen erfüllt sein:

### Linearität

Die Beziehung zwischen den abhängigen und unabhängigen Variablen muss linear sein. Dies bedeutet, dass die abhängige Variable als eine lineare Kombination der unabhängigen Variablen modelliert werden kann.

### Unabhängigkeit der Fehlerterme

Die Fehlerterme $\epsilon_i$ müssen voneinander unabhängig sein. Dies bedeutet, dass der Fehler eines Beobachtungswertes nicht durch den Fehler eines anderen Beobachtungswertes beeinflusst wird.

### Homoskedastizität

Die Varianz der Fehlerterme muss konstant sein (Homoskedastizität). Dies bedeutet, dass die Streuung der Fehlerterme unabhängig von den Werten der unabhängigen Variablen ist.

### Normalverteilung der Fehlerterme

Die Fehlerterme müssen normalverteilt sein. Dies ist insbesondere wichtig für die Durchführung von Hypothesentests und das Ziehen von Inferenzschlüssen.

### Keine Multikollinearität

Die unabhängigen Variablen dürfen nicht perfekt miteinander korreliert sein. Hohe Korrelationen zwischen den unabhängigen Variablen (Multikollinearität) können zu instabilen Schätzungen der Regressionskoeffizienten führen.

## Schätzung der Parameter

### Methode der Kleinsten Quadrate (OLS)

Die Methode der kleinsten Quadrate (Ordinary Least Squares, OLS) wird verwendet, um die Parameter $\boldsymbol{\beta}$ zu schätzen, indem die Summe der quadrierten Abweichungen zwischen den beobachteten und den vorhergesagten Werten minimiert wird. Die Schätzungen der Regressionskoeffizienten $\hat{\boldsymbol{\beta}}$ werden durch die folgende Formel berechnet:

$$
\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{Y}
$$

### Eigenschaften der OLS-Schätzer

Die OLS-Schätzer haben mehrere wichtige Eigenschaften:

- **Unverzerrtheit**: Die OLS-Schätzer sind unverzerrt, was bedeutet, dass ihr Erwartungswert gleich dem wahren Parameterwert ist.
- **Effizienz**: Unter den Annahmen der Gauss-Markov-Theoreme sind die OLS-Schätzer die Schätzer mit der kleinsten Varianz unter allen linearen und unverzerrten Schätzern.
- **Konsistenz**: Die OLS-Schätzer sind konsistent, was bedeutet, dass sie mit zunehmender Stichprobengröße gegen die wahren Parameterwerte konvergieren.

### Varianz und Kovarianz der Schätzungen

Die Varianz-Kovarianz-Matrix der OLS-Schätzer wird durch die folgende Formel gegeben:

$$
\text{Var}(\hat{\boldsymbol{\beta}}) = \sigma^2 (\mathbf{X}^T \mathbf{X})^{-1}
$$

Hierbei ist $\sigma^2$ die Varianz der Fehlerterme, die wie folgt geschätzt werden kann:

$$
\hat{\sigma}^2 = \frac{1}{n - p - 1} \sum_{i=1}^n (Y_i - \hat{Y}_i)^2
$$

## Inferenz in der Multiplen Linearen Regression

### Hypothesentests

In der multiplen linearen Regression können verschiedene Hypothesentests durchgeführt werden, um die Signifikanz der Regressionskoeffizienten zu testen.

#### t-Test für einzelne Koeffizienten

Der t-Test wird verwendet, um die Nullhypothese zu testen, dass ein einzelner Regressionskoeffizient gleich null ist:

$$
H_0: \beta_j = 0
$$

Die Teststatistik wird wie folgt berechnet:

$$
t = \frac{\hat{\beta}_j}{\text{SE}(\hat{\beta}_j)}
$$

Hierbei ist $\text{SE}(\hat{\beta}_j)$ der Standardfehler der Schätzung $\hat{\beta}_j$. Der t-Wert wird mit der t-Verteilung mit $n - p - 1$ Freiheitsgraden verglichen, um die Nullhypothese zu testen.

#### F-Test für das Gesamtmodell

Der F-Test wird verwendet, um die Nullhypothese zu testen, dass alle Regressionskoeffizienten (außer dem Achsenabschnitt) gleich null sind:

$$
H_0: \beta_1 = \beta_2 = \cdots = \beta_p = 0
$$

Die Teststatistik wird wie folgt berechnet:

$$
F = \frac{\text{R}^2 / p}{(1 - \text{R}^2) / (n - p - 1)}
$$

Hierbei ist $\text{R}^2$ das Bestimmtheitsmaß. Der F-Wert wird mit der F-Verteilung mit $p$ und $n - p - 1$ Freiheitsgraden verglichen, um die Nullhypothese zu testen.

### Konfidenzintervalle

Konfidenzintervalle geben einen Bereich an, innerhalb dessen die wahren Parameterwerte mit einer bestimmten Wahrscheinlichkeit liegen. Das $100(1 - \alpha)\%$-Konfidenzintervall für einen Regressionskoeffizienten $\beta_j$ wird wie folgt berechnet:

$$
\hat{\beta}_j \pm t_{\alpha/2, n-p-1} \cdot \text{SE}(\hat{\beta}_j)
$$

Hierbei ist $t_{\alpha/2, n-p-1}$ der kritische Wert der t-Verteilung mit $n - p - 1$ Freiheitsgraden.

## Diagnostik und Validierung des Modells

### Residuenanalyse

Die Analyse der Residuen (Fehlerterme) ist ein wichtiger Schritt zur Überprüfung der Annahmen des Regressionsmodells. Residuenplots und andere diagnostische Werkzeuge können verwendet werden, um Probleme wie Heteroskedastizität, Autokorrelation und Nicht-Normalität der Fehlerterme zu identifizieren.

### Multikollinearität

Multikollinearität tritt auf, wenn die unabhängigen Variablen stark miteinander korreliert sind. Dies kann zu instabilen Schätzungen der Regressionskoeffizienten führen. Der Varianzinflationsfaktor (VIF) kann verwendet werden, um das Ausmaß der Multikollinearität zu quantifizieren.

### Einflussdiagnostik

Einflussdiagnostikmethoden wie der Cook's D-Wert und der Leverage-Wert können verwendet werden, um einflussreiche Beobachtungen zu identifizieren, die einen übermäßigen Einfluss auf die Schätzungen der Regressionskoeffizienten haben.

## Erweiterungen und Varianten der Multiplen Linearen Regression

### Polynomiale Regression

Die polynomiale Regression ist eine Erweiterung der linearen Regression, bei der

polynomiale Terme der unabhängigen Variablen einbezogen werden, um nicht-lineare Beziehungen zu modellieren.

### Interaktionsmodelle

Interaktionsmodelle berücksichtigen Wechselwirkungen zwischen den unabhängigen Variablen, indem sie Interaktionsterme in das Modell aufnehmen.

### Ridge-Regression

Die Ridge-Regression ist eine Regularisierungsmethode, die eine Strafterm in die OLS-Schätzung einführt, um das Problem der Multikollinearität zu mildern und überanpassung zu verhindern.

### Lasso-Regression

Die Lasso-Regression (Least Absolute Shrinkage and Selection Operator) ist eine weitere Regularisierungsmethode, die sowohl zur Schätzung der Regressionskoeffizienten als auch zur Variablenselektion verwendet wird.

## Praktische Beispiele und Anwendungen

### Ökonometrie

In der Ökonometrie werden multiple lineare Modelle häufig verwendet, um wirtschaftliche Zusammenhänge zu analysieren, wie beispielsweise den Einfluss von Bildungsniveau, Berufserfahrung und Alter auf das Einkommen.

### Medizinische Forschung

In der medizinischen Forschung können multiple lineare Modelle verwendet werden, um den Einfluss verschiedener Risikofaktoren auf die Wahrscheinlichkeit einer Krankheit zu untersuchen.

### Umweltwissenschaften

In den Umweltwissenschaften können multiple lineare Modelle verwendet werden, um die Auswirkungen von Umweltfaktoren wie Luftverschmutzung, Temperatur und Niederschlag auf die Pflanzenwachstumsraten zu analysieren.

### Sozialwissenschaften

In den Sozialwissenschaften können multiple lineare Modelle verwendet werden, um die Einflussfaktoren auf das Wahlverhalten oder die Bildungsleistung von Schülern zu untersuchen.

## Fallstudie: Anwendung eines Multiplen Linearen Modells

### Datenset und Ziel

Angenommen, wir haben ein Datenset, das den Einfluss von Bildung, Berufserfahrung und Alter auf das Einkommen untersucht. Das Ziel ist es, ein multiples lineares Modell zu schätzen, das diese Beziehung beschreibt.

### Analyse

1. **Datenexploration und Vorverarbeitung**: Zunächst werden die Daten untersucht und vorbereitet, indem fehlende Werte behandelt und die Variablen standardisiert werden.
2. **Modellschätzung**: Das multiple lineare Modell wird geschätzt, und die Regressionskoeffizienten werden interpretiert.
3. **Diagnostik und Validierung**: Die Modellannahmen werden überprüft, indem Residuenplots, Multikollinearitätsdiagnostik und Einflussdiagnostik durchgeführt werden.
4. **Ergebnisse und Interpretation**: Die Ergebnisse werden interpretiert, und praktische Schlussfolgerungen werden gezogen.

## Schlussfolgerung

Multiple normale lineare Modelle sind ein vielseitiges und mächtiges Werkzeug zur Analyse komplexer Datensätze mit mehreren unabhängigen Variablen. Durch das Verständnis der grundlegenden Konzepte, Annahmen und Schätzmethoden können Forscher robuste und aussagekräftige Modelle entwickeln. Die sorgfältige Diagnostik und Validierung der Modelle stellt sicher, dass die Ergebnisse zuverlässig und interpretierbar sind.

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
