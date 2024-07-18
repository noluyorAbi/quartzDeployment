---
date created: Tuesday, 16. July 2024, 22:54
date modified: Tuesday, 16. July 2024, 22:56
---

# Wann sollte man $R^2$ verwenden und wann adjustiertes $R^2$?

## Einleitung

$R^2$ und adjustiertes $R^2$ sind zwei wichtige Maßzahlen in der Regressionsanalyse, die jeweils unterschiedliche Aspekte der Modellanpassung bewerten. Die Entscheidung, welches Maß in einer bestimmten Situation verwendet werden sollte, hängt von verschiedenen Faktoren ab, einschließlich der Anzahl der unabhängigen Variablen im Modell und der Stichprobengröße. In diesem Abschnitt werden wir die Unterschiede zwischen $R^2$ und adjustiertem $R^2$ detailliert erläutern und Leitlinien für ihre Anwendung in verschiedenen Szenarien bereitstellen.

## $R^2$: Definition und Anwendung

### Definition von $R^2$

$R^2$, auch als Bestimmtheitsmaß bekannt, misst den Anteil der Varianz in der abhängigen Variable, der durch die unabhängigen Variablen im Modell erklärt wird. Es wird wie folgt berechnet:

$$
R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}}
$$

wobei:

- $SS_{\text{res}}$ die Residuenquadratsumme ist,
- $SS_{\text{tot}}$ die totale Quadratsumme ist.

### Anwendung von $R^2$

$R^2$ wird häufig in Situationen verwendet, in denen man einen schnellen Überblick über die Güte der Modellanpassung erhalten möchte. Es ist besonders nützlich in den folgenden Fällen:

1. **Einfache lineare Regression**: Bei Modellen mit nur einer unabhängigen Variablen bietet $R^2$ eine klare und leicht verständliche Maßzahl für die Güte der Anpassung.
2. **Modelle mit wenigen unabhängigen Variablen**: Wenn das Modell nur wenige unabhängige Variablen enthält, ist $R^2$ oft ausreichend, um die Anpassung zu bewerten.

3. **Explorative Analyse**: In den frühen Stadien der Analyse, wenn man verschiedene Modelle vergleicht und erkundet, kann $R^2$ verwendet werden, um schnell zu beurteilen, wie gut verschiedene Modelle die Daten erklären.

### Beispiele für die Anwendung von $R^2$

#### Einfache lineare Regression

Angenommen, wir haben ein Modell zur Vorhersage der Körpergröße $Y$ basierend auf der Schuhgröße $X$:

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

Wenn das Modell ein $R^2$ von 0.75 liefert, bedeutet dies, dass 75% der Varianz in der Körpergröße durch die Schuhgröße erklärt werden.

## Adjustiertes $R^2$: Definition und Anwendung

### Definition des adjustierten $R^2$

Das adjustierte $R^2$ berücksichtigt die Anzahl der unabhängigen Variablen im Modell und passt den $R^2$-Wert entsprechend an, um Überanpassung zu vermeiden. Es wird wie folgt berechnet:

$$
R^2_{\text{adj}} = 1 - \left( \frac{SS_{\text{res}} / (n - p - 1)}{SS_{\text{tot}} / (n - 1)} \right)
$$

wobei:

- $n$ die Anzahl der Beobachtungen ist,
- $p$ die Anzahl der unabhängigen Variablen ist.

### Anwendung des adjustierten $R^2$

Das adjustierte $R^2$ wird verwendet, wenn das Modell mehrere unabhängige Variablen enthält oder wenn man Modelle mit unterschiedlicher Anzahl von Prädiktoren vergleicht. Es ist besonders nützlich in den folgenden Fällen:

1. **Multiple lineare Regression**: Bei Modellen mit mehreren unabhängigen Variablen bietet das adjustierte $R^2$ eine genauere Bewertung der Modellanpassung.
2. **Modellvergleich**: Wenn man mehrere Modelle mit unterschiedlicher Anzahl von Prädiktoren vergleicht, hilft das adjustierte $R^2$ dabei zu bestimmen, ob zusätzliche Variablen die Modellanpassung tatsächlich verbessern.

3. **Vermeidung von Überanpassung**: In Situationen, in denen das Risiko einer Überanpassung besteht (z.B. bei kleinen Stichprobengrößen oder vielen Prädiktoren), bietet das adjustierte $R^2$ eine robustere Bewertung der Modellgüte.

### Beispiele für die Anwendung des adjustierten $R^2$

#### Multiple lineare Regression

Angenommen, wir haben ein Modell zur Vorhersage des Gehalts $Y$ basierend auf den Variablen Berufserfahrung $X_1$, Bildungsniveau $X_2$ und Alter $X_3$:

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \beta_3 X_3 + \epsilon
$$

Wenn das Modell ein $R^2$ von 0.80 und ein adjustiertes $R^2$ von 0.75 liefert, bedeutet dies, dass 80% der Varianz im Gehalt durch die drei Prädiktoren erklärt werden, aber nach Anpassung für die Anzahl der Prädiktoren erklärt das Modell tatsächlich nur 75% der Varianz.

## Vergleich von $R^2$ und Adjustiertem $R^2$

### Unterschiedliche Interpretationen

- **$R^2$**: Misst den Anteil der erklärten Varianz, ohne die Anzahl der Prädiktoren zu berücksichtigen. Es kann bei der Hinzufügung von Variablen nur steigen oder gleich bleiben.
- **Adjustiertes $R^2$**: Passt den $R^2$-Wert an, indem die Anzahl der Prädiktoren und die Stichprobengröße berücksichtigt werden. Es kann sinken, wenn eine hinzugefügte Variable keinen signifikanten Beitrag zur Erklärung der Varianz leistet.

### Szenarien für die Verwendung

- **Verwendung von $R^2$**: Geeignet für Modelle mit wenigen Prädiktoren oder wenn ein schneller Überblick über die Modellanpassung benötigt wird.
- **Verwendung des adjustierten $R^2$**: Geeignet für Modelle mit mehreren Prädiktoren oder bei Modellvergleichen, um Überanpassung zu vermeiden und eine genauere Bewertung der Modellgüte zu erhalten.

### Praktisches Beispiel

Angenommen, wir haben zwei Modelle zur Vorhersage der Verkaufszahlen $Y$:

- **Modell 1**: Verwendet die Variablen Werbebudget $X_1$ und Verkaufsförderung $X_2$
- **Modell 2**: Verwendet zusätzlich die Variable Online-Präsenz $X_3$

Die $R^2$-Werte für die beiden Modelle sind wie folgt:

- **Modell 1**: $R^2 = 0.85$, adjustiertes $R^2 = 0.83$
- **Modell 2**: $R^2 = 0.87$, adjustiertes $R^2 = 0.82$

Hier zeigt das $R^2$, dass Modell 2 etwas mehr Varianz erklärt als Modell 1. Das adjustierte $R^2$ zeigt jedoch, dass die zusätzliche Variable in Modell 2 keinen signifikanten Beitrag zur Erklärung der Varianz leistet und das Modell tatsächlich schlechter anpasst, wenn die Anzahl der Prädiktoren berücksichtigt wird.

## Zusammenfassung

$R^2$ und adjustiertes $R^2$ sind beide wichtige Maßzahlen zur Bewertung der Güte der Anpassung eines Regressionsmodells. Während $R^2$ einen allgemeinen Überblick über die erklärte Varianz bietet, berücksichtigt das adjustierte $R^2$ die Anzahl der Prädiktoren und bietet eine genauere Bewertung der Modellgüte in komplexeren Modellen. Durch die bewusste Anwendung dieser Maßzahlen können Forscher fundierte Entscheidungen treffen und robuste statistische Analysen durchführen.

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
