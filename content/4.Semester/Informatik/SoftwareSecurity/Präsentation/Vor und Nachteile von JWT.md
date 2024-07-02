---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Friday, 28. June 2024, 00:13
date modified: Friday, 28. June 2024, 01:20
---

**Vorteile:**

- **Selbstenthaltend:**
  - Enthält alle notwendigen Informationen im Token selbst.
  - Kein Bedarf an zusätzlichen Datenbankabfragen zur Authentifizierung.
- **Sicherheit:**
  - Unterstützt verschiedene Verschlüsselungsalgorithmen wie HS256 und RS256.
  - Signierte Tokens garantieren die Integrität und Authentizität der Daten.
- **Stateless:**
  - Tokens erfordern keine serverseitige Speicherung von Sitzungsdaten.
  - Verbessert die Skalierbarkeit von Anwendungen, da der Serverzustand nicht gespeichert werden muss.
- **Interoperabilität:**
  - JWT ist weit verbreitet und wird von vielen Plattformen und Programmiersprachen unterstützt.
  - Einfach zu implementieren in verschiedenen Entwicklungsumgebungen.
- **Effizient:**
  - Kompakte Größe ermöglicht schnellen Transport und einfache Speicherung.
  - Kann problemlos in HTTP-Headern übertragen werden, was die Kommunikation zwischen Client und Server erleichtert.

**Nachteile:**

- **Sicherheit bei langer Lebensdauer:**
  - Tokens mit langer Lebensdauer sind anfällig für Missbrauch, falls sie gestohlen werden.
  - Regelmäßige Erneuerung und Invalidierung von Tokens ist notwendig, um Sicherheitsrisiken zu minimieren.
- **Größe:**
  - JWTs sind größer als einfache Sitzungs-IDs, da sie mehr Informationen enthalten.
  - Kann die Bandbreite und Speicheranforderungen erhöhen, besonders bei vielen gleichzeitigen Anfragen.
- **Fehlende Rücknahme:**
  - Einmal ausgestellte Tokens können nicht einfach ungültig gemacht werden.
  - Erfordert zusätzliche Maßnahmen wie Blacklisting, um kompromittierte Tokens zu widerrufen.
- **Anfällig für kompromittierte Secrets:**
  - Wenn das Geheimnis (Secret) kompromittiert wird, sind alle ausgestellten Tokens gefährdet.
  - Sicherheitsmaßnahmen zur Geheimhaltung der Schlüssel sind entscheidend.
- **Limited Token Updates:**
  - Aktualisierungen von Tokens sind kompliziert und oft mit Neuausstellung verbunden.
  - Schwierigkeit, bestehende Tokens zu aktualisieren, ohne den Benutzerfluss zu stören.

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
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    console.log(randomNumber)
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
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    console.log(randomNumber)
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
