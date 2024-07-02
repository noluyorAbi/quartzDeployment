---
Benötigte Zeit:
tags:
  - 4semester
  - BaySta
  - statistik
  - Erklaerung
fach: "[[BaySta]]"
Thema:
  - "[[BaySta-Kapitel-Einstieg]]"
date created: Wednesday, 24. April 2024, 23:23
date modified: Friday, 26. April 2024, 02:02
---

# Priori und Posteriori Wahrscheinlichkeit

**Priori** und **Posteriori** sind Begriffe, die in der Bayes'schen Statistik verwendet werden, um die Wahrscheinlichkeit eines Ereignisses vor und nach Beobachtungen oder Messungen zu beschreiben.

## Priori-Wahrscheinlichkeit

Die **Priori-Wahrscheinlichkeit** ist die anfängliche Annahme oder der Glaube an die Wahrscheinlichkeit eines Ereignisses, bevor irgendwelche neuen Daten oder Beobachtungen berücksichtigt werden. Sie basiert auf vorhandenem Wissen, Erfahrung oder subjektiven Einschätzungen. Die Priori-Wahrscheinlichkeit wird oft mit $P(A)$ bezeichnet, wobei $A$ das Ereignis ist.

## Posteriori-Wahrscheinlichkeit

Die **Posteriori-Wahrscheinlichkeit** wird nach Berücksichtigung neuer Daten oder Beobachtungen berechnet. Sie ist die aktualisierte Wahrscheinlichkeit eines Ereignisses basierend auf den neuen Informationen. Die Posteriori-Wahrscheinlichkeit wird oft mit $P(A|B)$ bezeichnet, wobei $A$ das Ereignis und $B$ die neuen Daten oder Beobachtungen sind. Sie wird mithilfe des Bayes-Theorems berechnet.

Das Bayes-Theorem ermöglicht es, die Posteriori-Wahrscheinlichkeit eines Ereignisses zu berechnen, indem die Priori-Wahrscheinlichkeit des Ereignisses sowie die Wahrscheinlichkeit der beobachteten Daten unter der Bedingung des Ereignisses und die Wahrscheinlichkeit der beobachteten Daten unabhängig vom Ereignis berücksichtigt werden.

Insgesamt ermöglichen Priori- und Posteriori-Wahrscheinlichkeiten eine formale Methode, um vorhandenes Wissen oder Glauben über ein Ereignis mit neuen Beobachtungen zu kombinieren und die Wahrscheinlichkeit dieses Ereignisses zu aktualisieren.

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
