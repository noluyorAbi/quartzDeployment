---
date created: Monday, 15. July 2024, 23:00
date modified: Monday, 15. July 2024, 23:01
---

# Woche 15-16: Das gemischte lineare Regressionsmodell

## Ziel

Vertiefung des Verständnisses und der Anwendung gemischter linearer Modelle.

## Inhalte

### Theorie und Anwendung gemischter linearer Modelle

Gemischte lineare Modelle (GLMs) sind eine Erweiterung der einfachen linearen Modelle, die sowohl feste als auch zufällige Effekte berücksichtigen. Diese Modelle sind besonders nützlich für Daten, die hierarchische oder verschachtelte Strukturen aufweisen, wie z.B. Daten aus wiederholten Messungen, Längsschnittstudien oder verschachtelten Designs.

#### Allgemeine Form des gemischten linearen Modells

Das gemischte lineare Modell kann wie folgt geschrieben werden:

$$
Y = X\beta + Z\gamma + \epsilon
$$

- $Y$: Vektor der abhängigen Variablen
- $X$: Designmatrix der festen Effekte
- $\beta$: Vektor der festen Effekte
- $Z$: Designmatrix der zufälligen Effekte
- $\gamma$: Vektor der zufälligen Effekte
- $\epsilon$: Vektor der Residuen

#### Feste und zufällige Effekte

- **Feste Effekte ($\beta$):** Diese Effekte sind konstant und betreffen alle Beobachtungen gleichermaßen. Sie sind von direktem Interesse in der Analyse.
- **Zufällige Effekte ($\gamma$):** Diese Effekte variieren zwischen den Gruppen und repräsentieren die Zufallsstichprobe aus einer größeren Population. Sie ermöglichen es, die Heterogenität in den Daten zu modellieren.

### Modellformulierung und Schätzung

#### Modellformulierung

Die Formulierung eines gemischten linearen Modells beginnt mit der Definition der festen und zufälligen Effekte. Zum Beispiel, wenn wir den Einfluss von Training auf die Leistung von Schülern untersuchen und die Schüler in verschiedenen Klassen sind, könnten wir das folgende Modell formulieren:

$$
\text{Leistung}_{ij} = \beta_0 + \beta_1 \cdot \text{Training}_{ij} + \gamma_j + \epsilon_{ij}
$$

- $\text{Leistung}_{ij}$: Leistung des Schülers $i$ in Klasse $j$
- $\beta_0$: Interzept (fester Effekt)
- $\beta_1$: Koeffizient für Training (fester Effekt)
- $\gamma_j$: Zufälliger Effekt der Klasse $j$
- $\epsilon_{ij}$: Residuum für Schüler $i$ in Klasse $j$

#### Schätzung der Parameter

Die Parameter der gemischten Modelle werden in der Regel durch die Methode der maximalen Likelihood (ML) oder die Restricted Maximum Likelihood (REML) geschätzt. REML wird oft bevorzugt, da es unverzerrte Schätzungen der Varianzkomponenten liefert.

### Modellvergleich und -bewertung

#### Vergleich von Modellen

Modelle können anhand von Informationskriterien wie dem Akaike-Informationskriterium (AIC) oder dem Bayesschen Informationskriterium (BIC) verglichen werden. Ein Modell mit einem niedrigeren AIC- oder BIC-Wert wird bevorzugt.

$$
\text{AIC} = 2k - 2\ln(L)
$$

$$
\text{BIC} = \ln(n)k - 2\ln(L)
$$

- $k$: Anzahl der Parameter im Modell
- $L$: Likelihood des Modells
- $n$: Anzahl der Beobachtungen

#### Bewertung der Modellgüte

Die Modellgüte kann auch durch das Bestimmtheitsmaß ($R^2$) und durch Residualanalysen bewertet werden.

### Anwendung in Längsschnitt- und Paneldaten

Gemischte Modelle sind besonders nützlich für die Analyse von Längsschnitt- und Paneldaten, bei denen die gleichen Einheiten über mehrere Zeitpunkte hinweg beobachtet werden. Diese Modelle ermöglichen es, sowohl die zeitliche Abhängigkeit innerhalb der Einheiten als auch die Heterogenität zwischen den Einheiten zu berücksichtigen.

#### Beispiel: Analyse von Längsschnittdaten

Angenommen, wir untersuchen den Einfluss von Alter und Geschlecht auf das Einkommen über mehrere Jahre hinweg. Dabei beobachten wir dieselben Personen zu verschiedenen Zeitpunkten.

$$
\text{Einkommen}_{it} = \beta_0 + \beta_1 \cdot \text{Alter}_{it} + \beta_2 \cdot \text{Geschlecht}_i + \gamma_i + \epsilon_{it}
$$

- $\text{Einkommen}_{it}$: Einkommen der Person $i$ zum Zeitpunkt $t$
- $\beta_0$: Interzept (fester Effekt)
- $\beta_1$: Koeffizient für Alter (fester Effekt)
- $\beta_2$: Koeffizient für Geschlecht (fester Effekt)
- $\gamma_i$: Zufälliger Effekt der Person $i$
- $\epsilon_{it}$: Residuum für Person $i$ zum Zeitpunkt $t$

### Übungen

#### Durchführung gemischter Modelle mit Softwareunterstützung

**Beispiel in R:**

```r
# Paket laden
library(lme4)

# Daten laden
data <- read.csv("laengsschnittdaten.csv")

# Gemischtes Modell erstellen
model <- lmer(Einkommen ~ Alter + Geschlecht + (1|Person), data = data)

# Zusammenfassung des Modells anzeigen
summary(model)
```

**Beispiel in Python:**

```python
import pandas as pd
import statsmodels.api as sm
from statsmodels.regression.mixed_linear_model import MixedLM

# Daten laden
data = pd.read_csv("laengsschnittdaten.csv")

# Gemischtes Modell erstellen
model = MixedLM.from_formula("Einkommen ~ Alter + Geschlecht", data, groups=data["Person"])
result = model.fit()

# Zusammenfassung des Modells anzeigen
print(result.summary())
```

#### Vergleich verschiedener Modellansätze und Interpretation der Ergebnisse

1. **Modell mit festen Effekten:**

$$
\text{Einkommen}_{it} = \beta_0 + \beta_1 \cdot \text{Alter}_{it} + \beta_2 \cdot \text{Geschlecht}_i + \epsilon_{it}
$$

**Beispiel in R:**

```r
# Modell mit festen Effekten
fixed_model <- lm(Einkommen ~ Alter + Geschlecht, data = data)
summary(fixed_model)
```

**Beispiel in Python:**

```python
# Modell mit festen Effekten
X = data[['Alter', 'Geschlecht']]
X = sm.add_constant(X)
fixed_model = sm.OLS(data['Einkommen'], X).fit()
print(fixed_model.summary())
```

2. **Modell mit zufälligen Effekten:**

$$
\text{Einkommen}_{it} = \beta_0 + \beta_1 \cdot \text{Alter}_{it} + \beta_2 \cdot \text{Geschlecht}_i + \gamma_i + \epsilon_{it}
$$

**Beispiel in R:**

```r
# Modell mit zufälligen Effekten
random_model <- lmer(Einkommen ~ Alter + Geschlecht + (1|Person), data = data)
summary(random_model)
```

**Beispiel in Python:**

```python
# Modell mit zufälligen Effekten
random_model = MixedLM.from_formula("Einkommen ~ Alter + Geschlecht", data, groups=data["Person"])
random_result = random_model.fit()
print(random_result.summary())
```

### Vergleich der Modelle

Vergleichen Sie die Modelle anhand der AIC- und BIC-Werte:

**Beispiel in R:**

```r
# AIC und BIC vergleichen
AIC(fixed_model, random_model)
BIC(fixed_model, random_model)
```

**Beispiel in Python:**

```python
# AIC und BIC vergleichen
print("Fixed Effects Model: AIC =", fixed_model.aic, ", BIC =", fixed_model.bic)
print("Random Effects Model: AIC =", random_result.aic, ", BIC =", random_result.bic)
```

### Interpretation der Ergebnisse

1. **Feste Effekte ($\beta$):**

   - Der Koeffizient für Alter ($\beta_1$) zeigt, wie sich das Einkommen mit zunehmendem Alter ändert.
   - Der Koeffizient für Geschlecht ($\beta_2$) zeigt den Unterschied im Einkommen zwischen den Geschlechtern.

2. **Zufällige Effekte ($\gamma$):**

   - Der zufällige Effekt für die Personen zeigt die individuelle Variation der Einkommensverläufe.

3. **Varianzkomponenten:**
   - Die Varianzkomponenten geben an, wie viel der Gesamtvarianz durch die zufälligen Effekte der Personen erklärt wird.

### Weiterführende Übungen

1. **Erweiterung der Modelle:**

   - Fügen Sie weitere feste und zufällige Effekte hinzu, z.B. Bildung oder Berufserfahrung.
   - Beispiel: $\text{Einkommen} \sim \text{Alter} + \text{Geschlecht} + \text{Bildung} + (1|\text{Person}) + (1|\text{Beruf})$

2. **Analyse von Paneldaten:**
   - Verwenden Sie Paneldaten, um den Einfluss von Zeit auf die abhängige Variable zu untersuchen.
   - Beispiel: $\text{Einkommen} \sim \text{Zeit} + \text

{Alter} + \text{Geschlecht} + (1|\text{Person})$

3. **Simulation von Daten:**
   - Simulieren Sie Daten mit bekannten festen und zufälligen Effekten und überprüfen Sie, ob die gemischten Modelle die wahren Parameter korrekt schätzen können.

### Fazit

Das Verständnis und die Anwendung gemischter linearer Modelle sind entscheidend für die Analyse komplexer Datenstrukturen. Diese Modelle ermöglichen es, sowohl feste als auch zufällige Effekte zu berücksichtigen, was zu präziseren und robusteren Ergebnissen führt. Die vorgestellten Techniken und Beispiele bieten eine solide Grundlage für die Anwendung dieser Modelle in verschiedenen Kontexten.

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
