---
date created: Tuesday, 16. July 2024, 23:32
date modified: Tuesday, 16. July 2024, 23:34
---

# Referenz: [[Die Kleinste-Quadrate-Schätzung (KQ-Schätzung) und ihre asymptotischen Eigenschaften]]

# Gewichtete Kleinste-Quadrate (WLS) vs. Normale Kleinste-Quadrate (OLS)

## Einleitung

Die Methode der Kleinste-Quadrate-Schätzung (OLS) ist weit verbreitet und wird häufig verwendet, um die Parameter von Regressionsmodellen zu schätzen. Es gibt jedoch Situationen, in denen die Annahmen der OLS-Schätzung nicht erfüllt sind, insbesondere wenn die Fehlerterme heteroskedastisch sind. In solchen Fällen kann die Methode der gewichteten Kleinste-Quadrate (WLS) eine bessere Alternative darstellen. In diesem Dokument werden wir die Unterschiede zwischen OLS und WLS untersuchen, ihre mathematischen Grundlagen erklären und ihre jeweiligen Anwendungsbereiche und Vorteile darstellen.

## Grundlagen der normalen Kleinste-Quadrate (OLS)

### Definition und mathematische Grundlagen

Die OLS-Methode schätzt die Parameter eines linearen Regressionsmodells, indem sie die Summe der quadrierten Residuen minimiert. Das Modell wird durch die folgende Gleichung beschrieben:

$$
Y = X\beta + \epsilon
$$

wobei:

- $Y$ der Vektor der abhängigen Variablen ist,
- $X$ die Designmatrix der unabhängigen Variablen ist,
- $\beta$ der Vektor der Regressionskoeffizienten ist,
- $\epsilon$ der Vektor der Fehlerterme ist.

Die OLS-Schätzer $\hat{\beta}$ werden berechnet durch:

$$
\hat{\beta} = (X^T X)^{-1} X^T Y
$$

### Annahmen der OLS-Methode

Die OLS-Schätzung basiert auf folgenden Annahmen:

1. **Linearität**: Die Beziehung zwischen den unabhängigen und abhängigen Variablen ist linear.
2. **Unabhängigkeit**: Die Fehlerterme sind unkorreliert.
3. **Homoskedastizität**: Die Varianz der Fehlerterme ist konstant (keine Heteroskedastizität).
4. **Normalverteilung**: Die Fehlerterme sind normalverteilt (für Inferenzzwecke).

## Probleme bei Heteroskedastizität

### Heteroskedastizität und ihre Auswirkungen

Heteroskedastizität liegt vor, wenn die Varianz der Fehlerterme nicht konstant ist. Dies kann die Effizienz der OLS-Schätzer beeinträchtigen und zu verzerrten Standardfehlern führen, was wiederum die Inferenz (z.B. Hypothesentests) unzuverlässig macht.

### Erkennung von Heteroskedastizität

Heteroskedastizität kann durch grafische Methoden wie Residuenplots oder durch statistische Tests wie den Breusch-Pagan-Test oder den White-Test erkannt werden.

## Gewichtete Kleinste-Quadrate (WLS)

### Definition und mathematische Grundlagen

Die WLS-Methode modifiziert die OLS-Methode, indem sie Gewichtungen verwendet, um die Heteroskedastizität zu berücksichtigen. Das Modell wird durch die folgende Gleichung beschrieben:

$$
Y = X\beta + \epsilon
$$

wobei die Varianz der Fehlerterme proportional zu einer bekannten Funktion $w_i$ ist:

$$
\text{Var}(\epsilon_i) = \sigma^2 w_i
$$

Die WLS-Schätzer $\hat{\beta}_{WLS}$ werden berechnet durch:

$$
\hat{\beta}_{WLS} = (X^T W X)^{-1} X^T W Y
$$

wobei $W$ eine Diagonalmatrix der Gewichte $w_i^{-1}$ ist:

$$
W = \text{diag}(w_1^{-1}, w_2^{-1}, \ldots, w_n^{-1})
$$

### Vorteile der WLS-Methode

Die WLS-Methode hat mehrere Vorteile gegenüber der OLS-Methode, insbesondere wenn Heteroskedastizität vorliegt:

1. **Effizienz**: WLS-Schätzer sind effizienter als OLS-Schätzer bei heteroskedastischen Fehlertermen.
2. **Unverzerrtheit**: WLS-Schätzer sind unverzerrt, sofern die Gewichtungen korrekt spezifiziert sind.
3. **Korrekte Inferenz**: WLS ermöglicht korrekte Standardfehler, Konfidenzintervalle und Hypothesentests.

## Vergleich von OLS und WLS

### Beispiel einer einfachen linearen Regression

Angenommen, wir haben die folgenden Daten:

```python
import numpy as np
import statsmodels.api as sm
import matplotlib.pyplot as plt

# Generieren von Daten mit Heteroskedastizität
np.random.seed(0)
X = np.random.rand(100, 1)
X = sm.add_constant(X)
beta = np.array([2, 3])
sigma = np.linspace(1, 2, 100)
epsilon = np.random.normal(0, sigma)
Y = X @ beta + epsilon

# OLS-Schätzung
model_ols = sm.OLS(Y, X).fit()
print(model_ols.summary())

# Gewichtungen für WLS
w = 1 / sigma**2
model_wls = sm.WLS(Y, X, weights=w).fit()
print(model_wls.summary())

# Residuenplot für OLS
plt.scatter(X[:, 1], model_ols.resid)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('X')
plt.ylabel('Residuen')
plt.title('Residuenplot OLS')
plt.show()

# Residuenplot für WLS
plt.scatter(X[:, 1], model_wls.resid)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('X')
plt.ylabel('Residuen')
plt.title('Residuenplot WLS')
plt.show()
```

### Interpretation der Ergebnisse

- **OLS-Schätzung**: Die OLS-Schätzung liefert die Koeffizienten, berücksichtigt jedoch nicht die Heteroskedastizität. Dies kann zu ineffizienten Schätzungen und verzerrten Standardfehlern führen.
- **WLS-Schätzung**: Die WLS-Schätzung berücksichtigt die Heteroskedastizität durch Gewichtung der Beobachtungen. Die resultierenden Koeffizienten sind effizienter und die Standardfehler sind korrekt.

## Praktische Anwendung von WLS

### Schritte zur Durchführung einer WLS-Schätzung

1. **Erkennen von Heteroskedastizität**: Verwenden Sie grafische Methoden oder statistische Tests, um Heteroskedastizität zu erkennen.
2. **Bestimmung der Gewichtungen**: Schätzen Sie die Funktion der Varianz der Fehlerterme und berechnen Sie die Gewichtungen.
3. **Durchführung der WLS-Schätzung**: Führen Sie die WLS-Schätzung unter Verwendung der Gewichtungen durch.
4. **Überprüfung der Modellgüte**: Überprüfen Sie die Residuen und die Modellgüte, um sicherzustellen, dass die Heteroskedastizität korrekt behandelt wurde.

### Beispiel einer WLS-Schätzung in der Praxis

Angenommen, wir haben Daten über den Einfluss des Einkommens und des Bildungsniveaus auf die Gesundheit. Wir vermuten, dass die Varianz der Fehlerterme mit dem Einkommensniveau variiert.

```python
# Generieren von Daten mit Heteroskedastizität
np.random.seed(0)
income = np.random.rand(100, 1) * 100
education = np.random.rand(100, 1) * 20
X = np.hstack((income, education))
X = sm.add_constant(X)
beta = np.array([5, 0.1, 0.05])
sigma = 0.01 * income.flatten()
epsilon = np.random.normal(0, sigma)
health = X @ beta + epsilon

# OLS-Schätzung
model_ols = sm.OLS(health, X).fit()
print(model_ols.summary())

# Gewichtungen für WLS
w = 1 / sigma**2
model_wls = sm.WLS(health, X, weights=w).fit()
print(model_wls.summary())
```

In diesem Beispiel zeigt die WLS-Schätzung, wie die Heteroskedastizität durch Gewichtung der Beobachtungen berücksichtigt wird, was zu effizienteren Schätzungen und korrekten Standardfehlern führt.

## Fazit

Die Methode der gewichteten Kleinste-Quadrate (WLS) bietet eine leistungsfähige Alternative zur normalen Kleinste-Quadrate-Schätzung (OLS), insbesondere wenn die Annahmen der OLS-Methode verletzt sind, wie im Falle von Heteroskedastizität. Während OLS-Schätzer unter den Annahmen der Homoskedastizität effizient und unverzerrt sind, bietet WLS eine bessere Anpassung und korrektere Inferenz, wenn die Varianz der Fehlerterme nicht konstant ist. Die Wahl zwischen OLS und WLS hängt von den spezifischen Eigenschaften der Daten und den zugrunde liegenden Annahmen des Regressionsmodells ab.

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
