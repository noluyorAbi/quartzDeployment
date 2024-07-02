---
tags:
  - 4semester
  - BaySta
  - statistik
  - Erklaerung
fach: "[[BaySta]]"
Thema:
  - "[[BaySta-Blatt-1]]"
date created: Thursday, 25. April 2024, 22:37
date modified: Thursday, 25. April 2024, 22:40
---

# Unterschied zwischen Stetigkeit und Diskretheit

In der Mathematik und in verwandten Disziplinen wie Statistik, Physik und Ingenieurwesen sind die Konzepte der Stetigkeit und Diskretheit grundlegend für das Verständnis verschiedener Arten von Daten und Funktionen. Diese beiden Begriffe beschreiben, wie Werte innerhalb eines Systems oder einer Funktion angenommen werden können.

## Stetigkeit

**Stetigkeit** bezieht sich auf eine ununterbrochene, nahtlose Veränderung innerhalb eines bestimmten Bereichs oder Intervalls. Eine stetige Variable kann jeden beliebigen Wert innerhalb eines spezifizierten Bereichs annehmen.

### Eigenschaften stetiger Variablen:

- **Unendlich viele Werte**: Stetige Variablen können jeden Wert in einem kontinuierlichen Spektrum annehmen. Zum Beispiel kann die Temperatur, die als stetige Variable betrachtet wird, jeden Wert zwischen 20°C und 21°C annehmen, einschließlich 20.1°C, 20.01°C, 20.001°C und so weiter.
- **Messbar**: Stetige Variablen werden oft durch Messung bestimmt, nicht durch Zählen.
- **Beispiele**: Zeit, Gewicht, Länge und andere Messgrößen, die beliebig genau gemessen werden können.

### Mathematische Darstellung:

In der Mathematik wird eine Funktion als stetig betrachtet, wenn kleine Änderungen in den Eingabewerten zu kleinen Änderungen in den Ausgabewerten führen. Dies bedeutet, dass es keine abrupten Sprünge oder Lücken in der Funktion gibt.

## Diskretheit

**Diskretheit** beschreibt eine Variable oder Funktion, die nur spezifische, einzelne Werte innerhalb eines Bereichs annehmen kann. Diese Werte sind typischerweise isoliert und durch klare Abstände voneinander getrennt.

### Eigenschaften diskreter Variablen:

- **Begrenzte Werte**: Diskrete Variablen können nur bestimmte Werte annehmen. Diese Werte sind oft durch Zählen ermittelbar.
- **Zählbar**: Diskrete Variablen sind in der Regel durch das Zählen von Objekten oder Ereignissen definiert, wie zum Beispiel die Anzahl der Autos in einem Parkplatz oder die Anzahl der Schüler in einer Klasse.
- **Beispiele**: Anzahl der Kinder in einer Familie, Anzahl der Bücher auf einem Regal, oder die Anzahl der Schritte, die jemand unternimmt.

### Mathematische Darstellung:

In der Mathematik sind diskrete Funktionen solche, bei denen die Eingabe- und Ausgabewerte aus getrennten und abzählbaren Mengen bestehen. Beispielsweise kann die Anzahl der Kunden in einem Geschäft nur ganze Zahlen sein.

## Zusammenfassung

Der Hauptunterschied zwischen Stetigkeit und Diskretheit liegt in der Art, wie Werte innerhalb eines Bereichs angenommen werden können. Stetige Variablen erlauben ein kontinuierliches Spektrum an Werten, während diskrete Variablen auf spezifische, getrennte Werte beschränkt sind. Beide Begriffe sind essentiell für das Verständnis und die Modellierung verschiedener Phänomene in Naturwissenschaften, Technik und Wirtschaft.

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
    const randomNumber = Math.floor(Math.random() * 1) + 1; // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
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
