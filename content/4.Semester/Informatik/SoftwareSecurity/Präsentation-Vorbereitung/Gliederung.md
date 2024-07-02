---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Monday, 10. June 2024, 21:35
date modified: Wednesday, 19. June 2024, 15:56
---

Um eine 30-minütige Präsentation für ein Bachelor-Seminar im Bereich Software Security zu gestalten, sollten wir sicherstellen, dass die wichtigsten Aspekte von JWTs (JSON Web Tokens) abgedeckt werden, ohne zu sehr ins Detail zu gehen. Hier ist eine angepasste Gliederung mit geschätzten Zeitangaben für jede Sektion:

# Gliederung der Präsentation

1. **Einführung (5 Minuten)**

   - **Was sind JWTs?** (2 Minuten)
     - Definition und grundlegende Erklärung
     - Einsatzgebiete und typische Anwendungsfälle
   - **Warum werden JWTs verwendet?** (3 Minuten)
     - Vorteile gegenüber traditionellen Methoden (z.B. Cookies)
     - Typische Szenarien, in denen JWTs bevorzugt werden

2. **JWT im Detail (10 Minuten)**

   - **Aufbau eines JWT (Header, Payload, Signature)** (5 Minuten)
     - Erklärung der drei Teile
     - Beispiel eines JWT
   - **Wie JWTs funktionieren** (5 Minuten)
     - Prozess der Token-Erstellung und -Verifikation
     - Ablauf einer Authentifizierung mit JWTs

3. **JSON Web Signature (& JWA) (5 Minuten)**

   - **Bedeutung von JSON Web Signature (JWS)** (2 Minuten)
     - Was ist JWS und wie funktioniert es?
   - **JSON Web Algorithms (JWA)** (3 Minuten)
     - Übersicht über verschiedene Algorithmen (HS256, RS256, etc.)
     - Auswahlkriterien für Algorithmen

4. **Vor- und Nachteile (5 Minuten)**

   - **Vorteile der Verwendung von JWTs** (2 Minuten)
     - Skalierbarkeit
     - Sicherheit
     - Dezentralität
   - **Nachteile und Sicherheitsbedenken** (3 Minuten)
     - Risiken wie XSS, Token-Diebstahl
     - Maßnahmen zur Risikominimierung

5. **Best Practices (5 Minuten)**
   - **Sichere Implementierung von JWTs** (2 Minuten)
     - Verwendung sicherer Bibliotheken
     - Konfiguration von Token-Ablaufzeiten
   - **Häufige Fehler und wie man sie vermeidet** (2 Minuten)
     - Typische Implementierungsfehler
     - Beispiele und Lösungen
   - **Empfehlungen für die Verwendung in der Praxis** (1 Minute)
     - Tipps für die Integration in bestehende Systeme
     - Best Practices aus der Industrie

# Inhaltszusammenfassung und Details

## 1. Einführung (5 Minuten)

**Was sind JWTs?** (2 Minuten)

- **Definition:** JSON Web Tokens (JWTs) sind kompakte, URL-sichere Tokens, die Informationen zwischen zwei Parteien als JSON-Objekte übertragen.
- **Einsatzgebiete:** Authentifizierung, Informationsaustausch, und API-Zugriffskontrolle.

**Warum werden JWTs verwendet?** (3 Minuten)

- **Vorteile gegenüber Cookies:** JWTs sind stateless und benötigen keine serverseitige Speicherung.
- **Typische Szenarien:** Mobile Apps, Single Page Applications (SPAs), Microservices-Architekturen.

## 2. JWT im Detail (10 Minuten)

**Aufbau eines JWT** (5 Minuten)

- **Header:** Beinhaltet den Typ des Tokens und den verwendeten Signaturalgorithmus.
- **Payload:** Enthält die Claims, also die Informationen über den Benutzer und zusätzliche Metadaten.
- **Signature:** Dient zur Verifizierung, dass das Token nicht manipuliert wurde.
- **Beispiel:** Zeige ein dekodiertes JWT und erkläre die Bestandteile.

**Wie JWTs funktionieren** (5 Minuten)

- **Erstellung:** Benutzer sendet Anmeldeinformationen an den Server, der ein JWT generiert und signiert.
- **Verifikation:** Bei jeder Anfrage schickt der Client das JWT, und der Server verifiziert die Signatur, um die Authentizität zu bestätigen.
- **Diagramm:** Visuelle Darstellung des Ablaufs von der Erstellung bis zur Verifikation.

## 3. JSON Web Signature (& JWA) (5 Minuten)

**Bedeutung von JSON Web Signature (JWS)** (2 Minuten)

- **Definition:** JWS ist ein Standard zum Signieren von JSON-Daten.
- **Funktion:** Stellt sicher, dass die Daten nicht verändert wurden und bestätigt die Identität des Absenders.

**JSON Web Algorithms (JWA)** (3 Minuten)

- **Übersicht:** Verschiedene Algorithmen wie HS256 (HMAC mit SHA-256), RS256 (RSA mit SHA-256).
- **Auswahlkriterien:** Sicherheit, Leistung, und Anwendungsfälle.

## 4. Vor- und Nachteile (5 Minuten)

**Vorteile der Verwendung von JWTs** (2 Minuten)

- **Skalierbarkeit:** Da keine Sitzungszustände auf dem Server gespeichert werden müssen.
- **Sicherheit:** Tokens sind signiert und können verschlüsselt werden.
- **Dezentralität:** Ermöglicht verteilte Architekturen ohne zentrale Sitzungsspeicherung.

**Nachteile und Sicherheitsbedenken** (3 Minuten)

- **Risiken:** Anfällig für XSS (Cross-Site Scripting) und Token-Diebstahl.
- **Maßnahmen:** Verwende sichere Bibliotheken, setze kurze Ablaufzeiten, und implementiere zusätzliche Sicherheitsmaßnahmen (z.B. Refresh Tokens).

## 5. Best Practices (5 Minuten)

**Sichere Implementierung von JWTs** (2 Minuten)

- **Sichere Bibliotheken:** Verwende gut gewartete und geprüfte Bibliotheken.
- **Token-Ablaufzeiten:** Setze kurze Ablaufzeiten und verwende Refresh Tokens.

**Häufige Fehler und wie man sie vermeidet** (2 Minuten)

- **Typische Fehler:** Speichern von sensiblen Daten im JWT, keine Verschlüsselung, zu lange Ablaufzeiten.
- **Lösungen:** Sensible Daten nicht im JWT speichern, immer verschlüsseln, kurze Ablaufzeiten setzen.

**Empfehlungen für die Verwendung in der Praxis** (1 Minute)

- **Integration:** JWTs in bestehende Systeme integrieren, Authentifizierungs- und Autorisierungsprozesse überdenken.
- **Best Practices:** Regelmäßige Sicherheitsüberprüfungen und Schulungen der Entwickler.

Diese Struktur stellt sicher, dass du die wichtigsten Aspekte von JWTs abdeckst und gleichzeitig die Präsentation innerhalb von 30 Minuten hältst. Bereite dich auf mögliche Fragen der Zuhörer vor, indem du zusätzliche Details und Beispiele parat hast.

<!-- DISQUS SCRIPT COMMENT START -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
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
