---
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Sunday, 7. April 2024, 15:57
date modified: Wednesday, 10. April 2024, 00:04
---

# Was sind Transaktionen?

**Transaktion:**

- Folge von Befehlen (read,write), die die Datenbank von einem _konsistenten_ Zustand in einen anderen _konsistenten_ Zustand führt.

→ Einheit _integritätserhaltender_ Zustandsänderung einer Datenbank

## Transaktionen (TA)

**Hauptaufgaben** von Transaktionen:

- Synchronisation (Koordination mehrerer Benutzerprozess)
- Recovery (Beheben von Fehlersituationen)

**Eigenschaften** von Transaktionen:

- *A*tomacity
- *C*onsistency
- *I*solation
- *D*urabilit

→ _ACID_

## Warum Transaktionen?

- Datenbanken werden selten von nur einem Benutzer benutzt
  → mehrere Nutzer arbeiten _gleichzeitig_ auf den Daten
- Die Nutzer sollen nichts von den anderen Nutzern mitbekommen
  → _logischer Einnutzerbetrieb_

- Pseudoparallele Ausführung der Transaktionen
  → bessere Auslastung des Systems
- Ohne Kontrolle des Ablaufs von TAs
  → _Anomalien_ können auftreten

# Anomalien

Für Anomalie sind immer 3 Aktionen von 2 Transaktionen auf ein Object nötig

## Anomalien – Lost Update

> [!tip] Lost Update Erklärung
>
> Bei einem "Lost Update" tritt folgendes Scenario auf:
>
> $$
> x = 100
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r(x) & \\
> x=x+10& \\
> & r(x) \\
> & x=x-20\\
> w(x)& \\
> & w(x)
> \end{array}
> $$
>
> - Zunächst wird 100 gelesen.
> - Dann 10 addiert → 110.
> - Die 110 wurden aber noch nicht geschrieben.
> - T2 liest derweil x und liest → 100.
> - 100 -20 = 80.
> - T1 schreibt jetzt die 110.
> - T2 überschreibt dies direkt mit 80.
> - $w(x)$ war ein Lost Update.
>
> $$
> Merkhilfe:
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r & \\
> & r \\
> w& \\
> & w
> \end{array}
> $$
>
> Bei dieser Art von Fehler überschreibt eine Transaktion die Änderungen einer anderen, bevor diese permanent gemacht werden konnten, was oft zu Inkonsistenzen in der Datenverarbeitung führt.

- Verloren gegangene Änderung
- Zwei Transaktionen: $T_{1}$ , $T_2$

- $T_2$ ändert Object x → Änderung wird durch $T_1$ überschrieben

$\Longrightarrow$ Änderung von $T_2$ geht verloren
$\Longrightarrow$ Verstoß gegen _Durability_

## Anomalien – Dirty Read / Dirty Write

> [!tip] Dirty Read Erklärung
>
> Bei einem "Dirty Read" liest eine Transaktion Daten, die von einer anderen Transaktion geändert, aber noch nicht endgültig gesichert wurden. Hierbei kann es passieren, dass diese vorläufigen Daten später von der ursprünglichen Transaktion zurückgerollt werden, was zu Inkonsistenzen führt. Ein Beispiel dafür ist:
>
> $$
> x = 100
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r(x) & \\
> x=x+10& \\
> w(x)& \\
> & r(x) \\
> & x=x-20\\
> & w(x) \\
> FAIL & \\
> \end{array}
> $$
>
> - T1 liest x, welches 100 ist.
> - T1 erhöht x um 10, sodass x jetzt 110 ist.
> - T1 schreibt den neuen Wert von x (110).
> - T2 liest den neuen Wert von x (110), bevor T1 erfolgreich abgeschlossen hat.
> - T2 verringert x um 20, sodass x jetzt 90 ist.
> - T2 schreibt den neuen Wert von x (90).
> - T1 scheitert und muss alle Änderungen zurückrollen, einschließlich der Erhöhung von x auf 110.
> - Das führt dazu, dass die Änderung von T2 auf einem ungültigen, weil zurückgerollten Wert basierte, was typisch für ein Dirty Read ist.
>
> $$
> Merkhilfe:
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r & \\
> w \\
> & r \\
> & w\\
> FAIL
> \end{array}
> $$
>
> Diese Situation verdeutlicht das Risiko eines Dirty Reads, bei dem Daten gelesen und modifiziert werden, die möglicherweise nicht dauerhaft im System verbleiben.

- Zugriff auf „schmutzige“ (nicht dauerhaft gültige) Daten
- Zwei Transaktionen: $T_{1}$ , $T_2$

- $T_1$ verändert Object x zwei mal
- Zwischen Änderung liest $T_2$ den Wert von x (dieser Wert bleibt aber nicht dauerhaft gültig)

$\Longrightarrow$ Verstoß gegen _Consistency_

## Anomalien – Non-Repeatable Read

> [!tip] Non-Repeatable Read Erklärung
>
> Ein "Non-Repeatable Read" tritt auf, wenn eine Transaktion denselben Datensatz mehrmals liest und unterschiedliche Werte erhält, weil eine andere Transaktion zwischenzeitlich Änderungen vorgenommen und festgeschrieben hat. Dies kann zu Inkonsistenzen und unerwarteten Ergebnissen führen. Hier ein Beispiel:
>
> $$
> x = 100
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r(x) & \\
> & w(x) \\
> & x=x+10\\
> r(x) & \\
> \hline
> \end{array}
> $$
>
> - T1 liest x, welches 100 ist.
> - T2 ändert x von 100 auf 110 und schreibt den neuen Wert.
> - T1 liest x erneut und stellt fest, dass der Wert sich von 100 auf 110 geändert hat.
> - Diese Änderung führt zu einem Non-Repeatable Read, da T1 beim zweiten Lesen einen anderen Wert erhält also beim ersten Mal.
>
> $$
> Merkhilfe:
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r & \\
> & w \\
> r & \\
> \hline
> \end{array}
> $$
>
> Dies illustriert, wie kritisch es ist, dass Transaktionen während eines Lesevorgangs konsistente Daten vorfinden, um die Integrität der Datenbearbeitung zu gewährleisten.

- Eine Transaktion sieht während ihrer Ausführung zwei unterschiedliche Werte von einem Object
- $T_1$ liest beim ersten Auslesen von x einen anderen Wert also beim zweiten, da $T_2$ den Wert von x verändert

$\Longrightarrow$ Verstoß gegen _Isolation_

$\Longrightarrow$ Transaktionen müssen so Ausgeführt werden, dass das _ACID_-Prinzip nicht verletzt wird

---

# Ultimative Anomalien Zusammenfassung

> [!tip]- Ultimative Anomalien Zusammenfassung --- Erklärung der Transaktionsanomalien: Lost Update, Dirty Read, Non-Repeatable Read
>
> **Lost Update RWW**
>
> Bei einem "Lost Update" wird eine Änderung von einer anderen Transaktion überschrieben, ohne dass diese Änderungen wahrgenommen wurden:
>
> $$
> x = 100
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r(x) & \\
> x=x+10& \\
> & r(x) \\
> & x=x-20\\
> w(x)& \\
> & w(x) \\
> \hline
> \end{array}
> $$
>
> - T1 und T2 lesen x (100).
> - T1 erhöht x auf 110, aber bevor es schreibt, liest T2 den alten Wert (100) und verringert ihn auf 80.
> - T1 schreibt 110, aber T2 überschreibt es mit 80.
> - Das führt dazu, dass die Änderung von T1 verloren geht.
>
> $$
> Merkhilfe:
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r & \\
> & r \\
> w& \\
> & w \\
> \hline
> \end{array}
> $$
>
> **Dirty Read WRW**
>
> Ein "Dirty Read" beschreibt das Lesen von Daten, die von einer anderen Transaktion geändert wurden, aber noch nicht festgeschrieben sind:
>
> $$
> x = 100
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r(x) & \\
> x=x+10& \\
> w(x)& \\
> & r(x) \\
> & x=x-20\\
> & w(x) \\
> FAIL & \\
> \hline
> \end{array}
> $$
>
> - T1 erhöht x auf 110 und schreibt.
> - T2 liest den neuen Wert 110, verringert ihn auf 90 und schreibt.
> - T1 scheitert und macht seine Änderungen rückgängig.
> - T2 hat Daten basierend auf einem noch nicht festgeschriebenen Wert geändert.
>
> $$
> Merkhilfe:
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r & \\
> w \\
> & r \\
> & w\\
> FAIL \\
> \hline
> \end{array}
> $$
>
> **Non-Repeatable Read RWR**
>
> Ein "Non-Repeatable Read" tritt auf, wenn eine Transaktion denselben Datensatz mehrmals liest und unterschiedliche Werte feststellt:
>
> $$
> x = 100
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r(x) & \\
> & w(x) \\
> & x=x+10\\
> r(x) & \\
> \hline
> \end{array}
> $$
>
> - T1 liest x, welches 100 ist.
> - T2 ändert x auf 110 und schreibt.
> - T1 liest x erneut und findet den Wert 110, anders also beim ersten Mal.
>
> $$
> Merkhilfe:
> $$
>
> $$
> \begin{array}{|c|c|}
> \hline
> T_1& T_2\\
> \hline
> r & \\
> & w \\
> r & \\
> \hline
> \end{array}
> $$
>
> Diese Anomalien verdeutlichen unterschiedliche Risiken und Herausforderungen im Umgang mit Transaktionen in Datenbanksystemen, die es durch geeignete Isolationslevel und Sperrmechanismen zu managen gilt.

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
