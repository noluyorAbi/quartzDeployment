---
tags:
  - 4semester
  - statistik
  - "#i2ml"
fach:
Thema:
date created: Monday, 22. April 2024, 17:51
date modified: Wednesday, 3. July 2024, 12:38
---

# https://slds-lmu.github.io/i2ml/

# Übersicht der Studieninhalte

## [[I2ML-Vorlesungen]]

Dieser Abschnitt umfasst die aufgezeichneten Vorlesungen des I2ML-Moduls, die von den Grundlagen bis zu fortgeschrittenen Themen des Maschinenlernens reichen. Jede Vorlesung kombiniert theoretisches Wissen mit praktischen Beispielen, um eine umfassende und anwendbare Lernumgebung zu schaffen. Die Vorlesungen sind strukturiert, um schrittweise aufeinander aufzubauen und das Verständnis für die praktische Anwendung von Maschinenlernen zu fördern. Nutze diese Ressourcen zur Vertiefung deines Wissens und zur Vorbereitung auf praktische Herausforderungen.

## [[I2ML-Verzeichnis-Erklärungen]]

Das Verzeichnis bietet eine umfassende Sammlung von Themen, die mit dem Kursmodul verbunden sind. Jedes Thema wird tiefgründig aufgegriffen und erklärt, um ein gründliches Verständnis zu fördern. Diese Informationen sind essenziell, um die Organisation der Kursmaterialien zu verstehen und effizient auf benötigte Ressourcen zuzugreifen. Ziel ist es, den Zugang zu diesen wertvollen Lernmaterialien zu erleichtern und dein Studium effektiver zu gestalten.

## [[I2ML-Übungsblätter]]

Diese Sektion bietet Zugang zu allen aktuellen und vergangenen Übungsblättern des Kurses. Nutze diese Ressourcen, um dich auf bevorstehende Prüfungen vorzubereiten oder um vergangene Inhalte zur Auffrischung deines Wissens durchzugehen.

## [[I2ML-Klausuraufgaben]]

Hier wird eine Zusammenfassung aller relevanten Klausuraufgaben inklusive deren Lösungen bereitgestellt. Diese Inhalte sind besonders wertvoll zur Prüfungsvorbereitung und zum Verständnis der Anforderungen in den Abschlussprüfungen.

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
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> Please note that these are my own notes and solutions, and I cannot guarantee the complete accuracy of all solutions as I am still a student myself.
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
