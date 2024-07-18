---
created: 2024-03-11 17:05
last modified: 2024-03-11 17:05
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 11. March 2024, 17:05
date modified: Wednesday, 3. July 2024, 14:00
---

# Aufgabe 1-1

## a) Welche 9 Zentralen Anforderungen an Ein Datenbanksystem Definierte Edgar Codd?

- **Integration** → Verwaltung aller von Anwendung benötigten Daten
- **Operation** → Operation zur Speicherung, Manipulation der Daten müssen vorhanden sein
- **Data Dictionary** → Katalog erlaubt Zugriff auf die die Beschreibung der Daten
- **Benutzersichten** → Für unterschiedliche Anwendungen unterschiedliche Sicht auf Bestand
- **Konsistenzüberwachung** → [[Datenbankmanagementsystem (DBMS)| DBMS]] überwacht Korrektheit der Daten bei Änderung
- **Zugriffskontrolle** → Ausschluss unautorisierter Zugriffe
- **Transaktionen** → Zusammenfassung von Änderungsoperationen zu einer Einheit
- **Synchronisation** → Arbeiten mehrerer Benutzer gleichzeitig mit der DB
- **Datensicherung** → Widerherstellung des DB zu dem Zustand nach der Transaktion

## b) Was Versteht Man under Logischer Und Physischer Datenunabhängigkeit

- **logische Datenunabhängigkeit:** Ändern des Schemas der Datenbank ohne zu ändern wie eine Anwendung auf diese Daten zugreift [[3 - Ebenenarchitektur#Logische Datenunabhängigkeit| (logische Datenunabhängigkeit)]]
- **physische Datenunabhängigkeit:** Ändern wie die Daten gespeichert werden (z.B. Festplatte) ohne Beeinträchtigung der Datenstruktur oder der Anwendungen [[3 - Ebenenarchitektur#Physische Datenunabhängigkeit| (physische Datenunabhängigkeit)]]

# Aufgabe 1-2

## Betrachten Wir Die Mengen A = {a, b, c} Und Z = {1, 2, 3, 4} Und Eine Zweistellige Relation R Dazwischen. Wenn Zum Beispiel Die Elemente a ∈ A Und 2 ∈ Z in Der Relation R Stehen, Druckt Man Das Mathematisch so Aus: aR2 Oder (a, 2) ∈ R. Graphisch Kann Man Es so Veranschaulichen, Dass Man Die Elemente Der Beiden Mengen Hinzeichnet Und Zwischen a Und 2 Eine Linie Zieht:

## Mit Dieser Veranschaulichung Sind Die Mathematischen Definitionen Praktisch Nur Bedingungen, Wie viele Linien Mit Den Elementen Verbunden Sein Müssen Oder Dürfen

### a) Das Kartesische Product A × Z

- Alles aus _A_ mit allem aus _Z_
  $$
  M = \{(a,1),(a,2),(a,3),(a,4)(b,1),(b,2),(b,3),(b,4),(c,1),(c,2),(c,3),(c,4)\}
  $$

### b) Eine Totale Function Von A Nach Z

- Jedes Element in _A_ hat genau einen Partner in Z (<u>nicht keinen, nicht mehrere</u>)
- Elemente in _Z_ dürfen keinen, einen oder mehrere Partner in _A_ haben
- → A hat mindestens ein Element aus Z

- $M = \{(a,1),(b,2),(c,1) \}$

### Eine zweistellige Relation zwischen A und Z, die keine Function ist. (D.h. weder von A nach Z noch von Z nach A.)

- $M = \{(a,1),(a,2),(b,1),(c,3) \}$

---

Also nächstes: [[DBS-Blatt 2]]

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
