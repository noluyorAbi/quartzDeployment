---
tags:
  - 4semester
  - FSK
  - informatik
  - Erklaerung
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: "[[FSK-ÜB-3]]"
Benötigte Zeit:
date created: Monday, 13. May 2024, 12:45
date modified: Monday, 13. May 2024, 12:51
---

# Potenzmengenkonstruktion

Die Potenzmengenkonstruktion, auch als **Subset Construction** bekannt, ist eine Methode zur Umwandlung eines nichtdeterministischen endlichen Automaten (NFA) in einen deterministischen endlichen Automaten (DFA). Dieser Vorgang ist essentiell, um die Analyse und Implementierung von Automaten zu vereinfachen, da DFAs einfacher zu handhaben sind als NFAs.

## Grundkonzepte

Ein **NFA** kann mehrere Übergänge für das gleiche Eingabesymbol aus einem Zustand haben, einschließlich Übergänge, die ohne Eingabe (mit $\epsilon$) erfolgen. Ein **DFA** hat im Gegensatz dazu genau einen Übergang pro Eingabesymbol aus jedem Zustand und erlaubt keine $\epsilon$-Übergänge.

## Ziel der Potenzmengenkonstruktion

Das Ziel der Potenzmengenkonstruktion ist es, einen DFA zu erzeugen, der dieselbe Sprache akzeptiert wie der gegebene NFA. Dies geschieht durch die Kombination von Zuständen des NFA in Mengen, die dann als einzelne Zustände im DFA dienen.

## Schritte der Potenzmengenkonstruktion

1. **Initialisierung**: Beginne mit der $\epsilon$-Schließung des Startzustandes des NFA. Diese Menge von Zuständen wird der Startzustand des DFA.

2. **Übergänge bestimmen**: Für jede mögliche Eingabe bestimme, zu welchen Zuständen man vom aktuellen Zustand (eine Menge von NFA-Zuständen) gelangen kann. Füge die $\epsilon$-Schließungen dieser Zustände hinzu, um die neuen DFA-Zustände zu bilden.

3. **Neue Zustände erkunden**: Wiederhole Schritt 2 für jede neu entdeckte Menge von Zuständen, die noch nicht erkundet wurde.

4. **Endzustände**: Ein Zustand im DFA ist ein Endzustand, wenn er mindestens einen Endzustand des NFA enthält.

## Beispiel

### (Weiteres Beispiel aus ÜB : [[FSK-ÜB-3#b) Der folgende NFA $A_2$ über einem Alphabet $ Sigma = {a, e, u }$ kann verwendet werden, um in einem Text nach den Zeichenfolgen $ae$ und $ue$ zu suchen.|Aufgabe 3-2b]])

Betrachten wir einen NFA mit den Zuständen $\{Q_0, Q_1, Q_2\}$ und Übergängen auf den Eingaben $\{a, b\}$:

- $Q_0 \xrightarrow{a} \{Q_1\}$
- $Q_1 \xrightarrow{b} \{Q_2\}$
- $Q_0 \xrightarrow{a} \{Q_0, Q_1\}$
- $Q_0 \xrightarrow{b} \{Q_0\}$

## Schritt-für-Schritt-Konstruktion des DFA

### Startzustand

- Beginne mit $\epsilon$-Schließung($Q_0$), die hier nur $\{Q_0\}$ ist.

### Übergänge von $\{Q_0\}$

- **Auf 'a'**: $\{Q_0, Q_1\}$ (da $Q_0 \xrightarrow{a} \{Q_0, Q_1\}$)
- **Auf 'b'**: $\{Q_0\}$ (da $Q_0 \xrightarrow{b} \{Q_0\}$)

### Erkunden von $\{Q_0, Q_1\}$

- **Auf 'a'**: Wieder $\{Q_0, Q_1\}$
- **Auf 'b'**: $\{Q_0, Q_2\}$ (da $Q_1 \xrightarrow{b} \{Q_2\}$ und $Q_0 \xrightarrow{b} \{Q_0\}$)

### Erkunden von $\{Q_0, Q_2\}$

- Dieser Schritt setzt sich fort, basierend auf vorhandenen Übergängen.

## Endzustände

Wenn $Q_2$ ein Endzustand im NFA ist, dann ist jeder DFA-Zustand, der $Q_2$ enthält (wie $\{Q_0, Q_2\}$), ein Endzustand im DFA.

## Zusammenfassung

Die Potenzmengenkonstruktion ermöglicht die systematische Erstellung eines DFA aus einem gegebenen NFA. Sie stellt sicher, dass der DFA deterministisch ist und die gleiche Sprache akzeptiert wie der NFA, wodurch er einfacher zu analysieren und zu implementieren ist.

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
