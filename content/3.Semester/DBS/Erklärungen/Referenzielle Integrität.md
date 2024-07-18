---
created: 2024-03-20 17:50
last modified: 2024-03-20 17:50
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Wednesday, 20. March 2024, 17:50
date modified: Thursday, 4. April 2024, 15:24
---

# Referenzielle Integrität in Datenbanksystemen

Referenzielle Integrität ist ein fundamentales Konzept in relationalen Datenbanksystemen. Sie spielt eine entscheidende Rolle bei der Aufrechterhaltung der Konsistenz und Korrektheit der Daten über verschiedene Tabellen hinweg. Dieses Konzept ist eng mit Fremdschlüsselbeziehungen zwischen Tabellen verbunden.

## [[DBS-Blatt 3#c) Was versteht man unter referenzieller Integrität?]]

- Bedingungen zur Sicherung der Datenintegrität bei Nutzung relationaler Datenbanken
  1. Ein Datensatz mit Fremdschlüssel kann nur dann eingefügt werden, wenn in der referenzierter Tabelle ein Datensatz mit den entsprechenden Werten als Primärschlüssel oder einem eindeutigen Alternativschlüssel existiert. _(nur erstellbar falls referenz existiert)_
  2. Datensatzlöschung oder Änderung ist nur möglich falls zu diesem Datensatz keine abhängigen Datensätze in Beziehung stehen _(nur bearbeitbar falls keine abhängigen Daten in Beziehung)_ **No dangeling references**

## Grundlagen der referenziellen Integrität

- **Definition:**

  - Referenzielle Integrität stellt sicher, dass eine Beziehung zwischen zwei Tabellen konsistent bleibt. Das bedeutet, dass jede Fremdschlüsselreferenz in einer Tabelle mit einem vorhandenen Primärschlüssel in einer anderen Tabelle übereinstimmen muss.

- **Zweck:**
  - Verhindert Dateninkonsistenzen und Widersprüche in relationalen Datenbanken.
  - Gewährleistet, dass Verknüpfungen zwischen Tabellen valide und nachvollziehbar sind.

## Umsetzung in Datenbanksystemen

- **Fremdschlüssel:**

  - Ein Fremdschlüssel in einer Tabelle verweist auf den Primärschlüssel einer anderen Tabelle und etabliert so eine referenzielle Beziehung.
  - Die referenzielle Integrität wird durchgesetzt, indem sichergestellt wird, dass jeder Wert des Fremdschlüssels in der referenzierenden Tabelle in der referenzierten Tabelle existiert.

- **Integritätsregeln:**
  - Beim Einfügen oder Aktualisieren von Daten müssen die Fremdschlüsselwerte in der referenzierenden Tabelle mit einem Primärschlüsselwert in der referenzierten Tabelle übereinstimmen.
  - Beim Löschen oder Ändern eines Primärschlüssels müssen entsprechende Maßnahmen ergriffen werden, um die Integrität der Daten zu wahren, wie etwa das Kaskadieren von Löschungen oder das Setzen von Nullwerten.

## Bedeutung für das Datenbankdesign

- **Datenkonsistenz:**

  - Sichert, dass alle referenzierten Daten gültig und konsistent bleiben, was für die Zuverlässigkeit von Datenbankabfragen und -operationen unerlässlich ist.

- **Beziehungserhaltung:**
  - Hält die logischen Verbindungen zwischen den Tabellen aufrecht, was für die Integrität des gesamten Datenbankmodells entscheidend ist.

## Herausforderungen und Lösungen

- **Herausforderungen:**

  - Komplexität bei der Verwaltung von Datenintegrität über zahlreiche Tabellen und Beziehungen hinweg.
  - Leistungsüberlegungen, besonders in großen Datenbanksystemen mit intensiven Datenmanipulationsoperationen.

- **Lösungsansätze:**
  - Einsatz von Datenbankmanagement-Systemen, die automatische Überprüfungen der referenziellen Integrität bieten.
  - Implementierung von Trigger- und Transaktionsmechanismen, um die Integrität auch bei komplexen Datenänderungen zu gewährleisten.

Referenzielle Integrität ist ein Eckpfeiler für die Zuverlässigkeit und Robustheit relationaler Datenbanken. Ihre korrekte Implementierung und Aufrechterhaltung ist entscheidend für die Verwaltung präziser, zuverlässiger und konsistenter Daten in einer Datenbank.

# Kurzgesagt

`Referenzielle Integrität sichert in Datenbanksystemen, dass Beziehungen zwischen Tabellen stets konsistent und valide bleiben, indem sie die Gültigkeit von Fremdschlüsselbeziehungen gewährleistet.`

# Was du dir unbedingt merken musst:

Die Einhaltung der referenziellen Integrität ist entscheidend für die Aufrechterhaltung einer fehlerfreien, zuverlässigen Datenstruktur, indem sie sicherstellt, dass jede Referenz über Fremdschlüssel auf ein tatsächlich existierendes, korrektes Datenelement zeigt.

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
