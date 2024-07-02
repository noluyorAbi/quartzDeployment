---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Friday, 7. June 2024, 21:41
date modified: Monday, 10. June 2024, 21:34
---

Orientiert am ToC von jwt Buch
file:///Users/alperen/Desktop/LMU/4.Semester/SoftwareSecurity/jwt-handbook-v0_14_1.pdf

# Unbedingt abdecken:

## 1. Introduction

- **1.1 What is a JSON Web Token?**
  - Grundlegende Definition und Bedeutung von JWTs.
- **1.2 What problem does it solve?**
  - Vorteile und Anwendungsbereiche von JWTs.

## 2. Practical Applications

- **2.1 Client-side/Stateless Sessions**
  - Erklärung, warum und wie JWTs im Client-Side/Stateless Kontext verwendet werden.
- **2.1.1 Security Considerations**
  - Nur die wichtigsten Sicherheitsaspekte wie CSRF und XSS kurz erwähnen.
- **2.1.3 Example**
  - Zeige ein einfaches Beispiel, wie JWTs in einer Anwendung implementiert werden.
- **2.2 Federated Identity**
  - Eine kurze Einführung in federierte Identität und JWTs.
- **2.2.2 JWTs and OAuth2**
  - Wichtig, da OAuth2 ein weit verbreitetes Authentifizierungsprotokoll ist.
- **2.2.4 Example**
  - Zeige ein Beispiel für die Implementierung von JWTs mit OAuth2 (z.B. Auth0).

## 3. JSON Web Tokens in Detail

- **3.1 The Header**
  - Grundlegende Erklärung des Headers in einem JWT.
- **3.2 The Payload**
  - Erklärung der Payload und der verschiedenen Arten von Claims.
- **3.4 Creating an Unsecured JWT**
  - Ein einfaches Beispiel, wie ein JWT erstellt wird.
- **3.5 Parsing an Unsecured JWT**
  - Zeige, wie man ein JWT parst und verifiziert.

## 4. JSON Web Signatures

- **4.1 Structure of a Signed JWT**
  - Grundlegende Struktur und Signatur eines JWTs.
- **4.2 Signing and Validating Tokens**
  - Erklärung, wie JWTs signiert und validiert werden.

# Weglassen oder nur kurz erwähnen:

- **1.3 A little bit of history**
  - Geschichte von JWTs ist weniger wichtig für das Verständnis.
- **2.1.1.1 Signature Stripping**
- **2.1.1.3 Cross-Site Scripting (XSS)**
  - Diese spezifischen Angriffe können zusammengefasst und nicht im Detail erklärt werden.
- **2.2.1 Access and Refresh Tokens**

  - Kann erwähnt werden, aber nicht im Detail erläutert.

- **3.3 Unsecured JWTs**

  - Weniger relevant im praktischen Kontext, da unsichere JWTs selten verwendet werden.

- **4.1.1 Algorithm Overview for Compact Serialization**
- **4.1.2 Practical Aspects of Signing Algorithms**

  - Diese technischen Details können weggelassen werden, um Zeit zu sparen.

- **5. JSON Web Encryption (JWE)**
  - Kann komplett weggelassen werden, da es sehr detailliert und spezialisierter ist.
- **6. JSON Web Keys (JWK)**

  - Auch weniger relevant für eine Einführung in JWTs.

- **7. JSON Web Algorithms**

  - Kann bis auf eine kurze Erwähnung der wichtigsten Algorithmen weggelassen werden.

- **8. Annex A. Best Current Practices**
  - Diese Details sind wichtig, aber du kannst nur die wichtigsten Best Practices hervorheben, anstatt sie alle im Detail zu besprechen.

Durch diese Auswahl kannst du sicherstellen, dass du die wichtigsten Konzepte und Anwendungsbereiche von JWTs abdeckst, ohne deinen Zeitrahmen zu überschreiten.

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
    const randomNumber = Math.floor(Math.random() * 4) + 1;
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
