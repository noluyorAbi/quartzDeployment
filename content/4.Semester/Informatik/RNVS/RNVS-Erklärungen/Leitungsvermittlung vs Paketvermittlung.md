---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 19. June 2024, 20:44
date modified: Wednesday, 19. June 2024, 20:47
---

# Leitungsvermittlung

**Definition:**
Leitungsvermittlung, auch als "Circuit Switching" bekannt, ist eine Methode der Datenübertragung, bei der eine dedizierte Kommunikationsverbindung zwischen zwei Endpunkten für die Dauer der gesamten Kommunikation aufrechterhalten wird. Diese Methode wird traditionell im Telefonnetz verwendet.

**Eigenschaften:**

- **Verbindungsaufbau:** Eine physische Verbindung wird vor der Datenübertragung aufgebaut.
- **Ressourcenreservierung:** Während der gesamten Kommunikation sind die Ressourcen (Bandbreite) fest reserviert.
- **Konstante Übertragungsrate:** Da die Verbindung exklusiv genutzt wird, bleibt die Übertragungsrate konstant.
- **Latenz:** In der Regel geringe Latenz, da es keine Wartezeiten für die Paketübermittlung gibt.

# Paketvermittlung

**Definition:**
Paketvermittlung, auch als "Packet Switching" bekannt, ist eine Methode der Datenübertragung, bei der Daten in kleine Pakete aufgeteilt und über ein gemeinsames Netzwerk versendet werden. Jedes Paket kann dabei einen anderen Weg durch das Netzwerk nehmen.

**Eigenschaften:**

- **Verbindungsaufbau:** Keine dauerhafte Verbindung; jedes Paket kann unabhängig vom anderen seinen Weg durchs Netzwerk finden.
- **Ressourcenfreigabe:** Die Netzwerkressourcen werden geteilt und dynamisch genutzt.
- **Variable Übertragungsrate:** Die Übertragungsrate kann schwanken, abhängig von der aktuellen Netzwerkauslastung.
- **Latenz:** Kann variieren, da Pakete unterschiedliche Routen nehmen und Verzögerungen auftreten können.

## Szenarioanalyse

### Aufgabenstellung

Die Applikation überträgt Daten mit einer festen Rate, beispielsweise $N$ Bit alle $k$ Zeiteinheiten, wobei $k$ klein ist. Die Applikation wird für eine längere Zeit ausgeführt.

### Richtige Lösung

**Leitungsvermittlung:**

- **Warum geeignet:** Da die Applikation eine konstante Datenübertragungsrate hat und dies über eine längere Zeit beibehalten wird, ist eine Leitungsvermittlung besser geeignet. Dies liegt daran, dass durch die Reservierung der Ressourcen eine kontinuierliche und stabile Übertragungsrate gewährleistet werden kann.
- **Ressourcenreservierung:** In der Leitungsvermittlung werden die benötigten Ressourcen für die gesamte Dauer der Übertragung reserviert, was eine konstante Datenrate ermöglicht.

**Falsche Lösung:**

- **Paketvermittlung:** Obwohl Paketvermittlung in vielen modernen Netzwerken weit verbreitet ist, ist sie für dieses spezifische Szenario weniger geeignet. Dies liegt daran, dass die Übertragungsrate schwanken kann und die Pakete möglicherweise unterschiedliche Wege nehmen, was zu variabler Latenz und möglichen Verzögerungen führt.
- **Periodisches Senden von Datenpaketen:** Bei periodischem Senden von Datenpaketen kann es zu Verzögerungen und Unterbrechungen kommen, besonders wenn das Netzwerk stark ausgelastet ist.

Zusammenfassend ist für eine Anwendung, die Daten mit einer festen Rate über längere Zeit überträgt, die Leitungsvermittlung die bessere Wahl, da sie eine stabile und konstante Datenübertragungsrate durch die Reservierung der notwendigen Ressourcen sicherstellt.

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
