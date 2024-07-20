---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Sunday, 14. July 2024, 19:39
date modified: Friday, 19. July 2024, 11:00
---

# ISO-OSI-Modell

Das ISO-OSI-Modell (Open Systems Interconnection Model) ist ein konzeptionelles Rahmenwerk, das die Standardisierung der Funktionen eines Kommunikations- oder Rechensystems ohne Rücksicht auf die zugrunde liegende interne Struktur und Technologie ermöglicht. Es besteht aus sieben Schichten, die jeweils spezifische Netzwerkfunktionen definieren.

| Schicht | Schichtname                     | Layer Name         | Beschreibung                                                                                                                                            |
| ------- | ------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7       | Anwendungsschicht               | Application Layer  | Allgemein verwendbare Dienste werden als Protokolle spezifiziert und standardisiert. Beispiele: DNS, SMTP, HTTP, FTP.                                   |
| 6       | Darstellungsschicht             | Presentation Layer | Aushandeln der konkreten Transfersyntax und Abbilden der Transfersyntax auf die lokale Syntax (z.B. BER).                                               |
| 5       | Kommunikationssteuerungsschicht | Session Layer      | Temporäre logische Kommunikationsbeziehung zwischen zwei Anwendungen. Dialogführung, Synchronisation und verschiedene Sitzungsarten.                    |
| 4       | Transportschicht                | Transport Layer    | Netzunabhängiger Transport von Nachrichten zwischen zwei Endsystemen. Wichtige Protokolle: TCP, UDP.                                                    |
| 3       | Vermittlungsschicht             | Network Layer      | Zusammenschaltung der Logical Links zu einem End-to-End Path, Wegewahl und Vermittlung/Routing. Beispielprotokoll: IP.                                  |
| 2       | Sicherungsschicht               | Data Link Layer    | Schicht 2a (MAC): Zugang auf das physikalische Medium, Bits zu Frames. Schicht 2b (LLC): Fehlererkennung und -korrektur.                                |
| 1       | Bitübertragungsschicht          | Physical Layer     | Transparente Übertragung von Bits, Darstellen von Daten auf dem physikalischen Medium. Definition der Übertragungsart. Beispiele: V, X, IEEE 802.3 PMA. |
|         |                                 |                    |                                                                                                                                                         |

> [!tip] Eselsbrücken
>
> - Englisch:
>   - A P S T N DL P
>     - **"**A**pplications **P**resent **S**essions **T**hrough **N**etworks **D**ata **P**hysically."**
>     - **”All Programmers Should Test New Deployments Like Professionals.”**
>     - **A**lice **Pr**esents **Se**ssions **To** **N**etwork **Da**ta **Ph**ysically.
> - Deutsch:
>   - A D K T V S B
>     - **"Alle Daten Können Täglich Viele Server Beschäftigen."**
>     - "**An**nas **Da**ch **Ko**stet **Tr**otz **Ve**rschiedener **Si**cherungen **Bi**llig."

## Schichten des ISO-OSI-Modells

### 1. Physikalische Schicht (Layer 1)

Die **physikalische Schicht** ist die unterste Ebene des OSI-Modells und beschäftigt sich mit der Übertragung von Rohdatenbits über ein physisches Medium. Sie definiert die Hardwarekomponenten, Signale, Datenraten, Verkabelungen und physikalischen Verbindungen, die zur Datenübertragung verwendet werden.

**Beispiele**: Netzwerkkabel (z.B. Ethernet), Hubs, Repeater.

### 2. Sicherungsschicht (Layer 2)

Die **Sicherungsschicht** sorgt für eine zuverlässige Datenübertragung zwischen zwei direkt verbundenen Geräten. Sie verwaltet MAC-Adressen und regelt den Zugriff auf das physische Medium. Die Schicht unterteilt sich in zwei Sublayer: LLC (Logical Link Control) und MAC (Media Access Control).

**Beispiele**: Switches, Netzwerkkarten.

### 3. Vermittlungsschicht (Layer 3)

Die **Vermittlungsschicht** ist für die logische Adressierung und die Bestimmung des besten Pfades zur Datenübertragung zuständig. Sie ermöglicht die Weiterleitung von Paketen über mehrere Netzwerke hinweg und verwendet IP-Adressen.

**Beispiele**: Router, Layer-3-Switches.

### 4. Transportschicht (Layer 4)

Die **Transportschicht** stellt die vollständige Datenübertragung zwischen Endsystemen sicher und bietet Fehlererkennung und -korrektur sowie Flusskontrolle. Sie stellt Verbindungen zwischen Hosts her und verwendet Protokolle wie TCP und UDP.

**Beispiele**: TCP (Transmission Control Protocol), UDP (User Datagram Protocol).

### 5. Sitzungsschicht (Layer 5)

Die **Sitzungsschicht** verwaltet Sitzungen zwischen Anwendungen. Sie stellt Verbindungen her, verwaltet sie und beendet sie. Diese Schicht bietet auch Synchronisation und Dialogsteuerung zwischen den Kommunikationssystemen.

**Beispiele**: Sitzungsverwaltung in APIs und Web-Services.

### 6. Darstellungsschicht (Layer 6)

Die **Darstellungsschicht** sorgt dafür, dass die Daten für die Anwendungsschicht verständlich sind. Sie kodiert und dekodiert Daten, komprimiert und dekomprimiert sie und verschlüsselt und entschlüsselt sie.

**Beispiele**: SSL/TLS, Datenkomprimierung, Verschlüsselung.

### 7. Anwendungsschicht (Layer 7)

Die **Anwendungsschicht** ist die oberste Ebene des OSI-Modells und stellt die Schnittstelle zwischen den Anwendungen und dem Netzwerk bereit. Sie bietet Netzwerkdienste direkt für Endbenutzeranwendungen.

**Beispiele**: HTTP, FTP, SMTP, DNS.

## Zusammenfassung

Das ISO-OSI-Modell bietet eine standardisierte Möglichkeit, Netzwerkkommunikation in sieben klar definierte Schichten zu unterteilen. Jede Schicht hat ihre eigene spezifische Funktion und trägt zur Gesamtfunktionalität der Netzwerkkommunikation bei. Durch die Trennung der Netzwerkkommunikationsaufgaben in diese Schichten können verschiedene Netzwerkgeräte und -protokolle miteinander arbeiten und sich weiterentwickeln, ohne die Kompatibilität zu beeinträchtigen.

### Vorteile des ISO-OSI-Modells

- **Standardisierung**: Bietet einen Standardrahmen für die Entwicklung und Implementierung von Netzwerkprotokollen.
- **Interoperabilität**: Ermöglicht die Interoperabilität zwischen verschiedenen Netzwerkprodukten und -technologien.
- **Modularität**: Erleichtert das Verständnis und die Fehlerbehebung von Netzwerkproblemen durch eine klare Trennung der Funktionen.

### Fazit

Das ISO-OSI-Modell ist ein unverzichtbares Werkzeug für Netzwerkingenieure und IT-Fachleute, da es eine klare und strukturierte Methode zur Beschreibung der Netzwerkkommunikation bietet. Es bildet die Grundlage für die meisten modernen Netzwerkprotokolle und -technologien und bleibt ein wesentliches Konzept in der Informationstechnologie.

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
