---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Monday, 10. June 2024, 21:09
date modified: Tuesday, 11. June 2024, 21:44
---

# Karteikarte 1: Titel

**Vorderseite:**

- **Titel:** Representation of Claims
- **Untertitel:** anhand von JWT
- **Name:** Alperen Adatepe

**Rückseite:**

- **Erläuterung:** Diese Präsentation behandelt die Darstellung und Verwendung von Claims (Ansprüchen) durch JSON Web Tokens (JWT). Es wird gezeigt, wie JWTs zur Authentifizierung und Autorisierung von Benutzern in modernen Webanwendungen verwendet werden.

# Karteikarte 2: Gliederung

**Vorderseite:**

- **1. Einführung**
- **2. Praktische Anwendungen**
- **3. JWT im Detail**
- **4. JSON Web Signature (& JWA)**
- **5. Vor- und Nachteile**
- **6. Best Practices**

**Rückseite:**

- **Erläuterung:**
  - **Einführung:** Überblick über JWT und deren Rolle in der Web-Authentifizierung.
  - **Praktische Anwendungen:** Beispiele, wie JWTs in der Praxis eingesetzt werden.
  - **JWT im Detail:** Technische Details und Struktur von JWTs.
  - **JSON Web Signature (& JWA):** Signaturen und Algorithmen zur Sicherung von JWTs.
  - **Vor- und Nachteile:** Analyse der Stärken und Schwächen von JWTs.
  - **Best Practices:** Empfehlungen für den sicheren und effektiven Einsatz von JWTs.

# Karteikarte 3: Einführung – User Auth (Cookies)

**Vorderseite:**

- **Schritt 1:** Nutzer schickt Anmeldeformular

**Rückseite:**

- **Erläuterung:** Der Benutzer füllt ein Anmeldeformular mit seinen Zugangsdaten (z.B. Benutzername und Passwort) aus und sendet dieses an den Server. Diese Daten werden über eine HTTP-Anfrage übertragen.

# Karteikarte 4: Einführung – User Auth (Cookies)

**Vorderseite:**

- **Schritt 2:** Server speichert Session

**Rückseite:**

- **Erläuterung:** Nach der Überprüfung der Anmeldedaten erstellt der Server eine Session für den Benutzer und speichert diese serverseitig. Diese Session enthält Informationen, die den Benutzer authentifizieren und seine Sitzung identifizieren.

# Karteikarte 5: Einführung – User Auth (Cookies)

**Vorderseite:**

- **Schritt 3:** Browser speichert Session_ID in Cookies

**Rückseite:**

- **Erläuterung:** Der Server sendet die Session_ID zurück an den Browser, der diese in einem Cookie speichert. Dieses Cookie wird verwendet, um den Benutzer bei zukünftigen Anfragen zu identifizieren und seine Sitzung aufrechtzuerhalten.

# Karteikarte 6: Einführung – User Auth (Cookies)

**Vorderseite:**

- **Schritt 4:** Browser schickt Cookies bei zukünftigen Anfragen mit

**Rückseite:**

- **Erläuterung:** Bei jeder weiteren Anfrage an den Server sendet der Browser das Cookie mit der Session_ID automatisch mit. Der Server verwendet die Session_ID, um die Identität des Benutzers zu überprüfen und die Sitzung fortzuführen.

# Karteikarte 7: Einführung – User Auth (JWT)

**Vorderseite:**

- **Schritt 1:** Nutzer schickt Anmeldeformular

**Rückseite:**

- **Erläuterung:** Der Benutzer füllt ein Anmeldeformular mit seinen Zugangsdaten aus und sendet dieses an den Server. Die Übertragung erfolgt über eine HTTP-Anfrage.

# Karteikarte 8: Einführung – User Auth (JWT)

**Vorderseite:**

- **Schritt 2:** Server kreiert JSON Web Token

**Rückseite:**

- **Erläuterung:** Nach der Überprüfung der Anmeldedaten erstellt der Server ein JSON Web Token (JWT). Dieses Token enthält Claims, die die Identität und Berechtigungen des Benutzers beschreiben, und wird digital signiert, um die Integrität und Authentizität zu gewährleisten.

# Karteikarte 9: Einführung – User Auth (JWT)

**Vorderseite:**

- **Schritt 3:** Browser speichert JWT in Local Storage

**Rückseite:**

- **Erläuterung:** Der Server sendet das JWT an den Browser, der dieses im Local Storage speichert. Das JWT dient als Authentifizierungsnachweis und kann bei zukünftigen Anfragen verwendet werden.

# Karteikarte 10: Einführung – User Auth (JWT)

**Vorderseite:**

- **Schritt 4:** Signiertes JWT wird bei Anfragen validiert

**Rückseite:**

- **Erläuterung:** Bei jeder weiteren Anfrage sendet der Browser das JWT im Authorization-Header mit. Der Server überprüft die Signatur des Tokens und validiert dessen Inhalt, um die Identität des Benutzers zu bestätigen.

# Karteikarte 11: Einführung – User Auth Vergleich

**Vorderseite:**

- **Speicherort:**
  - **Tokens (JWT):** Local Storage oder Session Storage
  - **Cookies:** Im Browser, in den HTTP-Headern gesendet

**Rückseite:**

- **Erläuterung:**
  - **JWTs:** Werden auf dem Client im Local Storage oder Session Storage gespeichert, was eine serverseitige Speicherung überflüssig macht.
  - **Cookies:** Werden im Browser gespeichert und bei jeder HTTP-Anfrage automatisch an den Server gesendet.

# Karteikarte 12: Einführung – User Auth Vergleich

**Vorderseite:**

- **Sicherheit:**
  - **Tokens (JWT):** Anfällig für XSS-Angriffe, im JavaScript zugänglich
  - **Cookies:** Anfällig für CSRF-Angriffe

**Rückseite:**

- **Erläuterung:**
  - **JWTs:** Können durch Cross-Site Scripting (XSS) ausgelesen werden, da sie im JavaScript-Kontext verfügbar sind.
  - **Cookies:** Können für Cross-Site Request Forgery (CSRF) verwendet werden, insbesondere wenn sie nicht richtig gesichert sind.

# Karteikarte 13: Einführung – User Auth Vergleich

**Vorderseite:**

- **Server-Last:**
  - **Tokens (JWT):** Keine serverseitige Speicherung notwendig
  - **Cookies:** Auf Server gespeichert und verwaltet

**Rückseite:**

- **Erläuterung:**
  - **JWTs:** Reduzieren die Last auf dem Server, da keine Sitzungsdaten gespeichert werden müssen. Jede Anfrage wird anhand des Tokens validiert.
  - **Cookies:** Erfordern eine serverseitige Speicherung der Sitzungsdaten, was die Skalierbarkeit einschränken kann.

# Karteikarte 14: Einführung – User Auth Vergleich

**Vorderseite:**

- **Skalierbarkeit:**
  - **Tokens (JWT):** Gut skalierbar
  - **Cookies:** Schlecht skalierbar

**Rückseite:**

- **Erläuterung:**
  - **JWTs:** Bieten eine bessere Skalierbarkeit, da keine serverseitige Sitzungsverwaltung notwendig ist. Tokens können von verschiedenen Serverinstanzen validiert werden.
  - **Cookies:** Erfordern eine zentrale Verwaltung der Sitzungsdaten, was bei einer großen Anzahl von Benutzern zu Skalierungsproblemen führen kann.

# Karteikarte 15: Einführung – User Auth Vergleich

**Vorderseite:**

- **Übertragungsformat:**
  - **Tokens (JWT):** JSON-Format, oft im Authorization-Header gesendet
  - **Cookies:** Standardmäßig im HTTP-Header „Cookie“ gesendet

**Rückseite:**

- **Erläuterung:**
  - **JWTs:** Werden im JSON-Format übertragen und meist im Authorization-Header einer HTTP-Anfrage als Bearer-Token gesendet.
  - **Cookies:** Werden im HTTP-Header „Cookie“ automatisch bei jeder Anfrage gesendet.

# Karteikarte 16: Einführung – User Auth Vergleich

**Vorderseite:**

- **Authentifizierung:**
  - **Tokens (JWT):** Wird auf dem Client gehandhabt und gespeichert
  - **Cookies:** Wird auf dem Server verwaltet und gespeichert

**Rückseite:**

- **Erläuterung:**
  - **JWTs:** Werden clientseitig gespeichert und verwaltet, was die Authentifizierungsinformationen auf den Client auslagert.
  - **Cookies:** Werden serverseitig verwaltet, was bedeutet, dass die Sitzungsinformationen auf dem Server gespeichert und verwaltet werden.

Diese ausführlicheren Karteikarten fassen die wesentlichen Punkte deiner Präsentation zusammen und sollten dir helfen, die Inhalte während deines Vortrags klar und präzise zu vermitteln.

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
