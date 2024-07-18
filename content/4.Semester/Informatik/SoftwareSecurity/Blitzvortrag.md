---
tags:
  - 4semester
  - Seminar
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Thursday, 9. May 2024, 15:11
date modified: Thursday, 4. July 2024, 20:38
---

# Aufbau Kurzvortrag

1. **Einleitung zu JWTs (ca. 20 Sekunden)**

   - Kurze Definition von JWTs: Kompakte, sichere Mittel zur Übertragung von Informationen zwischen zwei Parteien als JSON-Objekte.
   - Häufige Nutzung in der Authentifizierung und Autorisierung, insbesondere in Webanwendungen.

2. **Struktur von JWTs (ca. 20 Sekunden)**

   - Beschreibung der drei Teile eines JWT: Header, Payload und Signature.
   - Der Header enthält typischerweise den Token-Typ und den verwendeten Hash-Algorithmus, der Payload umfasst Claims wie die Benutzeridentifikation, und die Signature dient der Sicherung der Integrität des Tokens.

3. **Kryptographische Konzepte (ca. 20 Sekunden)**

   - Die Rolle digitaler Signaturen oder Message Authentication Codes (MACs) in JWTs zur Gewährleistung der Echtheit und Integrität der Daten.
   - Beispielhafte Nennung von Algorithmen wie HS256 oder RS256.

4. **Sicherheitsaspekte (ca. 20 Sekunden)**

   - Wichtige Sicherheitsüberlegungen, wie die Verwendung starker Schlüssel und die Notwendigkeit der Überprüfung der Signatur vor der Akzeptanz eines Tokens.
   - Häufige Sicherheitsrisiken, wie das Ausnutzen von schwachen Signaturen oder die unsichere Speicherung von Schlüsselmaterial.

5. **Abschluss und Best Practices (ca. 10 Sekunden)**
   - Betonung der Bedeutung der Einhaltung von Best Practices, wie in den aktuellen Richtlinien zum Einsatz von JWTs empfohlen.
   - Verweis auf weiterführende Dokumente wie die JWT Best Current Practices.

<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="eager" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGEvse55hg&#x2F;hDKrRWXW4w64qj6LweKhCQ&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGEvse55hg&#x2F;hDKrRWXW4w64qj6LweKhCQ&#x2F;view?utm_content=DAGEvse55hg&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Representation of Claims</a>

# What to Say

Die Callouts wurden nur zur farblichen Trennung der Themen genutzt und haben keine weitere Bedeutung.

> [!success] Definition
>
> - kompakte, sichere mittel zur Übertragung von Information zwischen zwei Parteien als JSON-Objekte
> - _Beispiel:_ für zwei Parteien: Client und Server

> [!danger] JSON
> JSON **(JavaScript Object Notation)** ist ein leichtgewichtiges Datenformat, das menschenlesbare Texte verwendet, um Datenobjekte in Form von Attribut-Wert-Paaren zu strukturieren. Es wird häufig zum Austausch von Daten zwischen Servern und Webanwendungen genutzt.

> [!success] Use-Case JWT
> Authentifizierung & Informationssicherung in Webanwendungen
> <br/>
>
> - **JWTs und Authentifizierung:** Nach erfolgreicher Anmeldung eines Nutzers mit seinen Anmeldedaten wird ein JSON Web Token (JWT) zurückgegeben. Dieses Token ermöglicht es dem Nutzer, auf geschützte Ressourcen zuzugreifen, indem es typischerweise im Authorization-Header unter Verwendung des HTTP-Authentifizierung-Schemas übermittelt wird.
>   <br/>
> - werden häufig für Single Sign-On verwendet, dank ihrer Effizienz über verschiedene Domänen hinweg.
>
> Beispiel: Ein Nutzer loggt sich auf einer E-Commerce-Plattform zum Online-Shopping ein und navigiert sicher durch verschiedene Angebote und Bestellseiten, ohne sich erneut anmelden zu müssen, was durch den Einsatz von JWTs ermöglicht wird.
>
> **Informationsaustausch:**
>
> - JWTs bieten eine sichere Methode, Informationen zu übertragen, indem sie die Identität des Senders bestätigen und die Unversehrtheit der Daten sicherstellen.
>
> Beispiel: Ein Entwickler sendet Konfigurationsdaten von einem Backend-Server zu einem anderen über eine API. Der JWT stellt dabei sicher, dass die Daten echt sind und seit der Erstellung nicht verändert wurden, was die Integrität der übertragenen Konfiguration gewährleistet.

> [!danger] JWT-Struktur
>
> - Der **Header** besteht typischerweise aus zwei Teilen: dem Typ des Tokens, der JWT ist, und dem verwendeten Signaturalgorithmus, wie z.B. HMAC SHA256 oder RSA.
> - Dann wird dieses JSON in **Base64Url** kodiert, um den ersten Teil des JWT zu bilden.
>   <br/>
> - Der zweite Teil des Tokens ist der **Payload** (Nutzlast), das die _Claims_ (Ansprüche) enthält. Claims sind Aussagen über eine Entität (typischerweise den Benutzer) und zusätzliche Daten. Es gibt drei Arten von Ansprüchen: registrierte, öffentliche und private Ansprüche.
>   - **Registrierte Claims** sind vordefiniert und empfohlen, aber nicht obligatorisch. Sie umfassen Aussteller, Ablaufzeit, Thema, Zielgruppe und andere.
>   - **Öffentliche Claims** können frei definiert werden, sollten jedoch im IANA JWT-Register oder als kollisionsresistenter URI angegeben werden, um Kollisionen zu vermeiden.
>   - **Private Claims** sind benutzerdefiniert und dienen dem Austausch von Informationen zwischen vereinbarten Parteien. Sie sind weder registriert noch öffentlich.
> - Dann wird dieses JSON in **Base64Url** kodiert, um den zweiten Teil des JWT zu bilden.
>   <br/>
> - Um den **Signaturteil** zu erstellen, musst man den _codierten Header_, den _codierten Payload_, ein **Secret**, den im Header angegebenen Algorithmus nehmen und das unterschreiben.
> - Die Signatur wird verwendet, um zu überprüfen, dass die Nachricht unterwegs nicht verändert wurde, und im Fall von mit einem privaten Schlüssel signierten Token kann sie auch überprüfen, ob der Absender des JWT wirklich der ist, für den er sich ausgibt.
>   <br/>
> - Der Output besteht aus drei Base64-URL-Strings, die durch Punkte getrennt sind und leicht in HTML- und HTTP-Umgebungen übergeben werden können. Dabei sind sie im Vergleich zu anderen Standards deutlich kompakter.

> [!success] Vorteile
>
> - **Zustandslosigkeit**: JWTs speichern alle benötigten Informationen im Token selbst, wodurch keine serverseitige Sitzungsspeicherung benötigt wird. Dies vereinfacht die Architektur und Skalierung von Anwendungen.
> - **Single Sign-On (SSO)**: Mit JWTs können Nutzer einmalig anmelden und diesen Authentifizierungsstatus nahtlos auf verschiedene Dienste innerhalb desselben Ökosystems übertragen.
> - **Bessere Performance**: Da JWTs alle notwendigen Informationen enthalten, sind weniger Datenbankabfragen nötig, was die Serverleistung und die Antwortzeiten verbessert.
> - **Cross-Origin Resource Sharing (CORS)**: JWTs erleichtern die Handhabung von CORS, da sie leicht in HTTP-Headern übertragen werden können und nicht an Same-Origin-Policy gebunden sind wie Cookies.

> [!danger] Nachteile
>
> - **Token-Größe**: JWTs können groß werden, wenn sie umfangreiche Benutzerdaten enthalten, was zu erhöhtem Netzwerkverkehr führt. Ein Gleichgewicht zwischen Token-Größe und notwendigen Informationen ist wichtig.
> - **Begrenzte Kontrolle über das Token-Verfallsdatum**: Einmal ausgestellt, bleiben JWTs bis zu ihrem Ablaufdatum gültig. Eine vorzeitige Ungültigkeitserklärung erfordert zusätzliche Maßnahmen wie das Blacklisting von Token.
> - **Sicherheitsrisiken**: Wenn der geheime Schlüssel, der zur Signatur von JWTs verwendet wird, kompromittiert wird, können Angreifer gefälschte Token erstellen. Es ist entscheidend, diesen Schlüssel zu schützen.
> - **Begrenzte Token-Aktualisierungen**: JWTs sind in der Regel unveränderlich, sobald sie ausgestellt sind. Ändern sich die Rolle oder Berechtigungen eines Benutzers, muss er sich möglicherweise erneut anmelden, um ein aktualisiertes Token zu erhalten.

---

> [!info] Strukturelle Einsichten und Übertragung
>
> - **Transparenz und Sicherheit:** Trotz der Signatur, die sicherstellt, dass der Inhalt des Tokens nicht verändert wurde, sind alle im Token enthaltenen Informationen für den Nutzer oder andere Parteien sichtbar. Daher sollten keine geheimen Informationen innerhalb des Tokens gespeichert werden.
> - **Cross-Origin Resource Sharing (CORS):** Bei der Übermittlung in HTTP-Headern über das Authorization-Header verursacht CORS kein Problem, da keine Cookies verwendet werden. Dies unterscheidet sich von anderen Authentifizierungsmethoden, die möglicherweise anfällig für Cross-Site-Tracking oder andere Sicherheitsrisiken sind.

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
