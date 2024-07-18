---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Sunday, 14. July 2024, 18:58
date modified: Sunday, 14. July 2024, 18:59
---

# 🌐 Unterschiede zwischen DNS-Servertypen

## 1. Root-Nameserver

- **Funktion**: Root-Nameserver sind der Startpunkt für die DNS-Auflösung. Sie kennen die IP-Adressen der TLD-Nameserver (Top-Level-Domain-Nameserver) und verweisen Anfragen an diese weiter.
- **Beispiel**: `d.root-servers.net`, `e.root-servers.net`, etc.
- **Details**: Es gibt insgesamt 13 Root-Nameserver, die weltweit verteilt sind und eine zentrale Rolle bei der DNS-Auflösung spielen. Sie sind die höchste Ebene im DNS-Hierarchiebaum.

## 2. TLD-Nameserver (Top-Level-Domain-Nameserver)

- **Funktion**: TLD-Nameserver verwalten die DNS-Einträge für eine bestimmte Top-Level-Domain (TLD) wie `.com`, `.org`, oder `.de`. Sie verweisen Anfragen auf die autoritativen Nameserver der Second-Level-Domänen.
- **Beispiel**: `C.DE.NET` für die TLD `.de`, `a.gtld-servers.net` für generische TLDs wie `.com`.
- **Details**: Diese Server kennen die autoritativen Nameserver für alle Second-Level-Domänen unter ihrer TLD. Zum Beispiel kennt ein TLD-Nameserver für `.de` die autoritativen Nameserver für `example.de`.

## 3. Autoritativer Nameserver

- **Funktion**: Autoritative Nameserver enthalten die DNS-Einträge für eine spezifische Domäne und geben autoritative Antworten auf Anfragen zu diesen Einträgen. Sie sind die endgültige Quelle der Wahrheit für die DNS-Daten einer Domäne.
- **Beispiel**: `acheron.ifi.lmu.de` für `nm.ifi.lmu.de`.
- **Details**: Diese Server hosten die DNS-Zonendateien einer Domäne, die Informationen wie A-, CNAME-, MX-, und TXT-Einträge enthalten. Sie beantworten Anfragen direkt mit diesen Daten und sind maßgeblich für die DNS-Integrität einer Domäne verantwortlich.

## 4. Rekursiver Nameserver (Resolver)

- **Funktion**: Rekursive Nameserver führen die DNS-Auflösung im Auftrag des anfragenden Clients durch. Sie fragen andere Nameserver (beginnend bei den Root-Nameservern) ab und geben die endgültige Antwort an den Client zurück.
- **Beispiel**: Lokale DNS-Resolver, die von ISPs oder Unternehmen betrieben werden.
- **Details**: Rekursive Resolver sind oft in Netzwerken von Internetdienstanbietern (ISPs) oder innerhalb großer Organisationen zu finden. Sie speichern auch Antworten zwischen (Caching), um die DNS-Auflösung zu beschleunigen.

## 5. Weiterleitungs-Nameserver

- **Funktion**: Weiterleitungs-Nameserver leiten DNS-Anfragen an einen anderen DNS-Server weiter, anstatt die Auflösung selbst durchzuführen. Sie fungieren als Zwischenstation.
- **Beispiel**: Ein lokaler DNS-Server, der Anfragen an einen externen rekursiven Nameserver weiterleitet.
- **Details**: Diese Konfiguration kann in Netzwerken verwendet werden, um zentrale DNS-Server für die Auflösung zu nutzen, während lokale Server als einfache Weiterleitungsstellen fungieren.

## 6. Caching-Nameserver

- **Funktion**: Caching-Nameserver speichern Antworten auf DNS-Anfragen zwischen, um die Auflösung für zukünftige Anfragen derselben Domäne zu beschleunigen. Sie reduzieren die Latenz und die Anzahl der notwendigen Anfragen an entfernte Nameserver.
- **Beispiel**: DNS-Cache auf einem Router oder einem lokalen Server.
- **Details**: Caching-Nameserver behalten die Antworten für eine bestimmte Zeitspanne, die durch die Time-to-Live (TTL)-Einstellungen der DNS-Einträge definiert ist. Dadurch wird die Effizienz des DNS-Systems erhöht und die Netzwerklast verringert.

## Zusammenfassung der Unterschiede

- **Root-Nameserver**: Startpunkt der DNS-Auflösung, verweist auf TLD-Nameserver.
- **TLD-Nameserver**: Verwalten TLDs, verweisen auf autoritative Nameserver.
- **Autoritativer Nameserver**: Enthält und liefert die endgültigen DNS-Einträge für eine Domäne.
- **Rekursiver Nameserver**: Führt die vollständige DNS-Auflösung für Clients durch.
- **Weiterleitungs-Nameserver**: Leitet Anfragen an andere Nameserver weiter.
- **Caching-Nameserver**: Speichert Antworten zwischen, um die Auflösung zu beschleunigen.

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
