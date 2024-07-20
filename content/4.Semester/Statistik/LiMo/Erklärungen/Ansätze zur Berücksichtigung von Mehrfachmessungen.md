---
date created: Wednesday, 17. July 2024, 00:49
date modified: Wednesday, 17. July 2024, 00:59
---

# Ansätze zur Berücksichtigung von Mehrfachmessungen

## Einleitung

Mehrfachmessungen, auch als wiederholte Messungen oder Längsschnittdaten bekannt, treten häufig in verschiedenen Forschungsbereichen auf, darunter Medizin, Sozialwissenschaften, Psychologie und Wirtschaft. Diese Datenstruktur erfordert spezielle statistische Methoden, um die Abhängigkeiten zwischen den Messungen korrekt zu berücksichtigen. In diesem Dokument werden verschiedene Ansätze zur Berücksichtigung von Mehrfachmessungen untersucht, darunter gemischte Modelle, generalisierte gemischte Modelle, Längsschnittanalysen und andere spezialisierte Methoden. Ziel ist es, ein umfassendes Verständnis der Methoden zu vermitteln, ihre Anwendungsbereiche und Voraussetzungen zu erläutern sowie praktische Beispiele und Implementierungen zu bieten.

## Grundlagen von Mehrfachmessungen

### Definition

Mehrfachmessungen treten auf, wenn dieselbe Einheit (z. B. eine Person, ein Unternehmen oder ein Tier) mehrmals über die Zeit oder unter verschiedenen Bedingungen gemessen wird. Dies führt zu einer Datenstruktur, bei der die Messungen innerhalb einer Einheit korreliert sind.

### Beispiele

- **Medizinische Studien**: Patienten werden über mehrere Zeitpunkte hinweg untersucht, um den Verlauf einer Krankheit oder die Wirkung einer Behandlung zu beobachten.
- **Psychologische Studien**: Teilnehmer durchlaufen mehrere Tests oder Bedingungen, um Veränderungen im Verhalten oder in der kognitiven Leistung zu messen.
- **Sozialwissenschaften**: Haushalte oder Individuen werden in regelmäßigen Abständen befragt, um soziale und ökonomische Trends zu verfolgen.

### Herausforderungen

Die Hauptproblematik bei der Analyse von Mehrfachmessungen liegt in der Berücksichtigung der Korrelationen zwischen den Messungen innerhalb einer Einheit. Ignoriert man diese Abhängigkeiten, können die Ergebnisse verzerrt und ineffizient sein.

## Gemischte Modelle

### Einführung in gemischte Modelle

Gemischte Modelle, auch als hierarchische oder mehrstufige Modelle bekannt, sind eine flexible Methode zur Analyse von Daten mit Mehrfachmessungen. Sie berücksichtigen sowohl feste Effekte (die für alle Einheiten gleich sind) als auch zufällige Effekte (die für jede Einheit unterschiedlich sind).

### Modellformulierung

Ein einfaches gemischtes Modell kann wie folgt formuliert werden:

$$
Y_{ij} = \beta_0 + \beta_1 X_{ij} + u_i + \epsilon_{ij}
$$

Hierbei sind:

- $Y_{ij}$ die abhängige Variable für die $i$-te Einheit bei der $j$-ten Messung,
- $\beta_0$ der Achsenabschnitt,
- $\beta_1$ der Koeffizient für den festen Effekt von $X_{ij}$,
- $u_i$ der zufällige Effekt für die $i$-te Einheit,
- $\epsilon_{ij}$ der Fehlerterm.

### Schätzung und Interpretation

Die Schätzung der Parameter erfolgt typischerweise mittels Maximum-Likelihood- oder Restricted Maximum-Likelihood-Methoden (REML). Die festen Effekte $\beta$ geben den durchschnittlichen Effekt der Prädiktoren an, während die zufälligen Effekte $u_i$ die Abweichungen der einzelnen Einheiten von diesem Durchschnitt modellieren.

### Beispiele und Anwendungen

#### Medizinische Studien

In einer medizinischen Studie könnte ein gemischtes Modell verwendet werden, um den Effekt einer neuen Behandlung auf den Blutdruck zu analysieren, wobei wiederholte Messungen des Blutdrucks für jeden Patienten über die Zeit erfasst werden.

```python
import numpy as np
import pandas as pd
import statsmodels.api as sm
from statsmodels.formula.api import mixedlm

# Beispielhafte Daten generieren
np.random.seed(0)
n_patients = 100
n_timepoints = 5
patient_ids = np.repeat(np.arange(n_patients), n_timepoints)
time = np.tile(np.arange(n_timepoints), n_patients)
treatment_effect = 0.5
random_effects = np.random.normal(0, 1, n_patients)
errors = np.random.normal(0, 1, n_patients * n_timepoints)

data = pd.DataFrame({
    'patient_id': patient_ids,
    'time': time,
    'treatment': np.random.randint(0, 2, n_patients * n_timepoints),
    'outcome': treatment_effect * time + np.repeat(random_effects, n_timepoints) + errors
})

# Gemischtes Modell schätzen
model = mixedlm("outcome ~ time + treatment", data, groups=data["patient_id"])
result = model.fit()
print(result.summary())
```

## Generalisierte gemischte Modelle

### Einführung

Generalisierte gemischte Modelle (GLMMs) erweitern die gemischten Modelle, indem sie für die abhängige Variable eine nicht-lineare Verknüpfung und andere Verteilungen als die Normalverteilung zulassen. Dies ermöglicht die Analyse von binären, zählenden und anderen nicht-normalen Daten.

### Modellformulierung

Ein GLMM kann wie folgt formuliert werden:

$$
g(E(Y_{ij})) = \beta_0 + \beta_1 X_{ij} + u_i
$$

Hierbei ist $g$ die Verknüpfungsfunktion (z.B. logit für binäre Daten).

### Schätzung und Interpretation

Die Schätzung der Parameter erfolgt ebenfalls mittels Maximum-Likelihood-Methoden, jedoch unter Verwendung spezifischer Algorithmen wie dem Laplace-Approximation oder adaptivem Gauss-Hermite-Quadratur.

### Beispiele und Anwendungen

#### Psychologische Studien

In einer psychologischen Studie könnte ein GLMM verwendet werden, um die Wahrscheinlichkeit eines bestimmten Verhaltens unter verschiedenen Bedingungen zu analysieren, wobei die Messungen für jeden Teilnehmer wiederholt werden.

```python
from statsmodels.genmod.generalized_linear_model import GLM
from statsmodels.genmod.families import Binomial

# Beispielhafte Daten generieren
np.random.seed(0)
n_subjects = 100
n_trials = 10
subject_ids = np.repeat(np.arange(n_subjects), n_trials)
trials = np.tile(np.arange(n_trials), n_subjects)
condition_effect = 0.3
random_effects = np.random.normal(0, 1, n_subjects)
errors = np.random.normal(0, 1, n_subjects * n_trials)

data = pd.DataFrame({
    'subject_id': subject_ids,
    'trial': trials,
    'condition': np.random.randint(0, 2, n_subjects * n_trials),
    'outcome': np.random.binomial(1, 0.5 + condition_effect * trials + np.repeat(random_effects, n_trials))
})

# Generalisiertes gemischtes Modell schätzen
model = GLM(data["outcome"], sm.add_constant(data[["trial", "condition"]]), family=Binomial())
result = model.fit()
print(result.summary())
```

## Längsschnittanalyse

### Einführung

Längsschnittanalysen befassen sich speziell mit der Analyse von Daten, die über die Zeit für dieselben Einheiten gesammelt wurden. Diese Analysen ermöglichen die Untersuchung von zeitlichen Veränderungen und deren Einflussfaktoren.

### Methoden

#### Wachstumskurvenmodelle

Wachstumskurvenmodelle modellieren die zeitliche Entwicklung einer abhängigen Variable als Funktion der Zeit und anderer Prädiktoren. Diese Modelle können lineare oder nicht-lineare Wachstumskurven umfassen.

#### Zeitreihenanalysen

Zeitreihenanalysen konzentrieren sich auf die Autokorrelation in den Daten und verwenden spezialisierte Methoden wie ARIMA (AutoRegressive Integrated Moving Average) oder GARCH (Generalized Autoregressive Conditional Heteroskedasticity).

### Schätzung und Interpretation

Die Schätzung der Parameter in Wachstumskurvenmodellen erfolgt typischerweise mittels Maximum-Likelihood-Methoden, während Zeitreihenanalysen spezialisierte Algorithmen zur Schätzung der Autokorrelationsstrukturen verwenden.

### Beispiele und Anwendungen

#### Wirtschaftswissenschaften

In der Wirtschaft können Längsschnittanalysen verwendet werden, um die Entwicklung von Wirtschaftsindikatoren über die Zeit zu modellieren und die Auswirkungen politischer Maßnahmen zu untersuchen.

```python
import statsmodels.tsa.api as tsa

# Beispielhafte Daten generieren
np.random.seed(0)
n_years = 20
economic_growth = np.cumsum(np.random.normal(0, 1, n_years))

# Zeitreihenanalyse
model = tsa.ARIMA(economic_growth, order=(1, 1, 0))
result = model.fit()
print(result.summary())
```

## Weitere spezialisierte Methoden

### Geclusterte Datenanalyse

Bei geclusterter Datenanalyse werden Daten analysiert, die in Gruppen oder Clustern organisiert sind, wobei die Abhängigkeiten innerhalb der Cluster berücksichtigt werden. Beispiele hierfür sind Schüler innerhalb von Schulen oder Patienten innerhalb von Krankenhäusern.

### Paneldatenanalyse

Die Paneldatenanalyse kombiniert Quer- und Längsschnittdaten, um die zeitlichen und querschnittlichen Effekte zu modellieren. Häufig verwendete Modelle sind Fixed-Effects- und Random-Effects-Modelle.

### Multivariate Ansätze

Multivariate Ansätze berücksichtigen mehrere abhängige Variablen gleichzeitig und modellieren die gemeinsamen Abhängigkeiten zwischen ihnen. Beispiele hierfür sind multivariate gemischte Modelle oder strukturgleichungsmodelle.

## Implementierung und praktische Anwendung

### Softwarepakete

Zur Implementierung der beschriebenen Methoden stehen verschiedene Softwarepakete zur Verfügung, darunter:

- **R**: lme4, nlme, MCMCglmm
- **Python**: statsmodels, scikit-learn, pymc3
- **SAS**: PROC MIX

ED, PROC GLIMMIX

### Beispielhafte Implementierung in R

Im Folgenden wird die Implementierung eines gemischten Modells in R dargestellt:

```R
# Laden der notwendigen Bibliotheken
library(lme4)

# Beispielhafte Daten generieren
set.seed(0)
n_patients <- 100
n_timepoints <- 5
patient_ids <- rep(1:n_patients, each = n_timepoints)
time <- rep(1:n_timepoints, n_patients)
treatment_effect <- 0.5
random_effects <- rnorm(n_patients)
errors <- rnorm(n_patients * n_timepoints)

data <- data.frame(
  patient_id = factor(patient_ids),
  time = time,
  treatment = sample(0:1, n_patients * n_timepoints, replace = TRUE),
  outcome = treatment_effect * time + rep(random_effects, each = n_timepoints) + errors
)

# Gemischtes Modell schätzen
model <- lmer(outcome ~ time + treatment + (1 | patient_id), data = data)
summary(model)
```

### Beispielhafte Implementierung in Python

```python
import numpy as np
import pandas as pd
import statsmodels.api as sm
from statsmodels.formula.api import mixedlm

# Beispielhafte Daten generieren
np.random.seed(0)
n_patients = 100
n_timepoints = 5
patient_ids = np.repeat(np.arange(n_patients), n_timepoints)
time = np.tile(np.arange(n_timepoints), n_patients)
treatment_effect = 0.5
random_effects = np.random.normal(0, 1, n_patients)
errors = np.random.normal(0, 1, n_patients * n_timepoints)

data = pd.DataFrame({
    'patient_id': patient_ids,
    'time': time,
    'treatment': np.random.randint(0, 2, n_patients * n_timepoints),
    'outcome': treatment_effect * time + np.repeat(random_effects, n_timepoints) + errors
})

# Gemischtes Modell schätzen
model = mixedlm("outcome ~ time + treatment", data, groups=data["patient_id"])
result = model.fit()
print(result.summary())
```

## Schlussfolgerung

Mehrfachmessungen erfordern spezialisierte statistische Methoden, um die Abhängigkeiten zwischen den Messungen korrekt zu berücksichtigen. Gemischte Modelle, generalisierte gemischte Modelle, Längsschnittanalysen und andere spezialisierte Methoden bieten flexible und leistungsfähige Werkzeuge zur Analyse solcher Datenstrukturen. Durch das Verständnis der theoretischen Grundlagen und die Anwendung geeigneter Methoden können Forscher robuste und aussagekräftige Ergebnisse erzielen.

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
