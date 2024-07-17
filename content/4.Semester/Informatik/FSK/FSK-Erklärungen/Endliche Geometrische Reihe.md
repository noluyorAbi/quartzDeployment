---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
  - "[[FSK-ÜB-1]]"
date created: Tuesday, 23. April 2024, 23:41
date modified: Friday, 26. April 2024, 02:06
---

# Geometrische Reihen: Endliche und Unendliche

Geometrische Reihen sind ein zentrales mathematisches Konzept, das in vielen wissenschaftlichen und technischen Bereichen zur Anwendung kommt. Hier unterscheiden wir zwischen endlichen und unendlichen Reihen und betrachten ihre jeweiligen Eigenschaften und Anwendungen.

## Allgemeine Form einer geometrischen Reihe

Eine geometrische Reihe resultiert aus der fortlaufenden Multiplikation eines Anfangswertes $a$ mit einem konstanten Faktor $r$. Die allgemeine Formel für ein Glied dieser Reihe lautet:

$$
a_n = a \cdot r^{n-1}
$$

Hierbei repräsentiert $a$ das Anfangsglied und $r$ den Quotienten, also das Verhältnis zwischen aufeinanderfolgenden Termen.

## Endliche geometrische Reihen

Eine **endliche geometrische Reihe** besteht aus einer festgelegten Anzahl von Termen. Die Summe $S_n$ der ersten $n$ Terme lässt sich wie folgt darstellen:

$$
S_n = a + ar + ar^2 + \dots + ar^{n-1}
$$

Die Summe dieser Reihe kann mit der folgenden Formel berechnet werden:

$$
S_n = a \frac{1-r^n}{1-r}
$$

Diese Formel ist gültig für $r \neq 1$. Falls $r = 1$, vereinfacht sich die Summe zu $S_n = n \cdot a$, weil jede Potenz von $1$ gleich $1$ bleibt.

## Unendliche geometrische Reihen

Eine **unendliche geometrische Reihe** setzt sich aus unendlich vielen Termen zusammen. Diese Reihen konvergieren — das heißt, sie nähern sich einem festen Wert — nur unter der Bedingung, dass der absolute Wert des Quotienten $r$ kleiner als 1 ist ($|r| < 1$). Die Summenformel für die unendliche geometrische Reihe lautet:

$$
S_\infty = \frac{a}{1-r}
$$

Diese Formel ist nur anwendbar, wenn $|r| < 1$. Für Werte von $r$, die diesen Bereich überschreiten, divergiert die Reihe, das heißt, sie strebt gegen Unendlich.

## Zusammenfassung

Endliche und unendliche geometrische Reihen bieten ein mächtiges Werkzeug zur Analyse von Prozessen, die auf fortlaufender Multiplikation basieren. Ihre Anwendung findet sich in Bereichen wie Finanzmathematik, Physik und Informatik, insbesondere bei der Analyse von Algorithmen und Datenstrukturen. Die Unterscheidung zwischen Konvergenz und Divergenz bei unendlichen Reihen ist besonders wichtig für das Verständnis ihres Verhaltens und ihrer Grenzen.

# Aufgabe zum Beweis der Endlichkeit einer Sprache

## Aufgabenstellung

Sei $\Sigma$ ein Alphabet und $k \in \mathbb{N}$. Sei $L$ die Sprache $\{ w \in \Sigma^{*} | \ |w| \leq k \}$. Dann ist $L$ eine endliche Sprache.

**Zu zeigen (Z.Z.):** $L$, die Sprache aller Wörter $w$ über dem Alphabet $\Sigma$ mit einer Länge von höchstens $k$, ist eine endliche Sprache.

## Beweis

- **Annahme:** $k$ ist eine endliche natürliche Zahl, und es ist definiert, dass $|w| \leq k$ für alle Wörter $w$ in $L$.
- **Möglichkeiten für Wortlängen:** Für jedes Wort in $L$ gibt es eine Länge von $0$ bis $k$. Das heißt, es gibt Wörter der Länge $0, 1, 2, \dots, k$.
- **Anzahl der Wörter:** Die Anzahl der möglichen Wörter jeder Länge $i$ in $\Sigma^{*}$ ist $|\Sigma|^i$, wobei $|\Sigma|$ die Anzahl der Symbole im Alphabet ist. Daher ist die Gesamtzahl der Wörter in $L$ die Summe aller Wörter von Längen $0$ bis $k$:

$$
|\Sigma|^0 + |\Sigma|^1 + |\Sigma|^2 + \dots + |\Sigma|^k
$$

- **Verwendung der geometrischen Reihe:** Die oben genannte Summe ist eine endliche geometrische Reihe mit dem Anfangswert $1$ ($|\Sigma|^0 = 1$) und dem Quotienten $|\Sigma|$. Die Summe einer geometrischen Reihe wird berechnet als:

$$
S = \frac{1-r^{n+1}}{1-r}
$$

wobei $r$ der Quotient der Reihe ist und $n$ die Anzahl der Terme minus eins. Für unsere Reihe ist $r = |\Sigma|$ und $n = k$, also:

$$
S = \frac{1-|\Sigma|^{k+1}}{1-|\Sigma|}
$$

Diese Formel gibt uns die Gesamtanzahl der Wörter in $L$, was eine endliche Zahl ist, da sowohl $k$ als auch $|\Sigma|$ endlich sind.

## Fazit

Da die Anzahl der Wörter in $L$ durch eine endliche Summe in einer geometrischen Reihe dargestellt werden kann und sowohl die Anzahl der möglichen Wortlängen ($k$) als auch die Anzahl der Symbole im Alphabet ($|\Sigma|$) endlich sind, folgt, dass $L$ eine endliche Sprache ist. Der Beweis zeigt, wie das Konzept der endlichen geometrischen Reihen direkt zur Lösung eines Problems in der Theorie formaler Sprachen verwendet werden kann.

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
