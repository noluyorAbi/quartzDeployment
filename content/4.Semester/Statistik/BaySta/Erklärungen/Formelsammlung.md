---
tags:
  - 4semester
  - BaySta
  - statistik
  - Erklaerung
fach: "[[BaySta]]"
Thema:
date created: Thursday, 25. April 2024, 15:42
date modified: Sunday, 14. July 2024, 01:19
---

# Kapitel Einstieg

# Formelsammlung

## Axiome von Kolmogorov

Die Grundlagen der Wahrscheinlichkeitstheorie basieren auf den Axiomen von Kolmogorov, die besagen, dass für ein Ereignis \(A\):

1. $0 \leq P(A) \leq 1$
2. $P(\Omega) = 1$
3. Für disjunkte Ereignisse \(A\) und \(B\): $P(A \cup B) = P(A) + P(B)$

## Laplace-Wahrscheinlichkeit

Die Laplace-Wahrscheinlichkeit für ein Ereignis \(A\) in einem diskreten Ergebnisraum \(\Omega\) ist:

$$
 P(A) = \frac{\text{Anzahl der günstigen Ergebnisse}}{\text{Anzahl der möglichen Ergebnisse}}
$$

## Odds oder Chance

Die Odds eines Ereignisses \(A\) sind:

$$
 \text{Odds}(A) = \frac{P(A)}{P(\bar{A})}
$$

## Wahrscheinlichkeiten und Unabhängigkeit

Für stochastisch unabhängige Ereignisse \(A\) und \(B\) gilt:

$$
 P(A \cap B) = P(A) \cdot P(B)
$$

Für unabhängige Zufallsvariablen \(X\) und \(Y\):

$$
 P(X = x, Y = y) = P(X = x) \cdot P(Y = y)
$$

## Bedingte Wahrscheinlichkeit

Die bedingte Wahrscheinlichkeit von \(A\) gegeben \(B\) ist:

$$
 P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

## Satz von Bayes

Der Satz von Bayes ermöglicht das Umkehren der bedingten Wahrscheinlichkeit:

$$
 P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

## Satz von der totalen Wahrscheinlichkeit

Die marginale Wahrscheinlichkeit von \(B\) kann mittels des Satzes von der totalen Wahrscheinlichkeit berechnet werden:

$$
 P(B) = P(B|A)P(A) + P(B|\bar{A})P(\bar{A})
$$

## Posteriori-Wahrscheinlichkeit

Die Posteriori-Wahrscheinlichkeit \(P(A|B)\) nach Beobachtung \(B\) ist:

$$
 P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B|A)P(A) + P(B|\bar{A})P(\bar{A})}
$$

## Binomialverteilung

Die Wahrscheinlichkeit für \(y\) Erfolge in \(n\) Bernoulli-Versuchen mit Erfolgswahrscheinlichkeit \(p\) ist:

$$
 P(Y = y) = \binom{n}{y} p^y (1 - p)^{n-y}
$$

## Relative Häufigkeit

Die relative Häufigkeit eines Ereignisses \(A\) bei \(n\) Versuchen ist:

$$
 P_n(A) = \frac{h_n}{n}
$$

wo \(h_n\) die Anzahl der Versuche ist, in denen \(A\) eingetreten ist.

## Interpretation von Wahrscheinlichkeiten

Wahrscheinlichkeiten können interpretiert werden als:

- Laplace-Wahrscheinlichkeit (klassische Interpretation)
- Relative Häufigkeit (frequentistische Interpretation)
- Grad der Überzeugung (Bayessche Interpretation)
- Eigenschaft eines physikalischen Systems (Propensität)

Diese Formelsammlung bietet einen Überblick über die grundlegenden Konzepte und Formeln der Wahrscheinlichkeitstheorie und des Satzes von Bayes. Sie stellt die mathematischen Werkzeuge dar, die für das Verständnis von Wahrscheinlichkeiten, ihrer Berechnung und Anwendung erforderlich sind.

# Kapitel Grundlagen

# Formelsammlung

## Allgemeine Bayes-Formel

Die allgemeine Bayes-Formel verbindet unsere Daten (Likelihood) mit unserem Vorwissen (Priori) zur Aktualisierung unserer Annahmen (Posteriori). Sie ist grundlegend für die Bayes-Statistik und wird verwendet, um die Wahrscheinlichkeit einer Hypothese zu berechnen, nachdem neue Daten beobachtet wurden.

$$
p(\pi|x) = \frac{f(x|\pi)p(\pi)}{f(x)}
$$

## Datendichte und Likelihood

Die Likelihood-Funktion zeigt, wie plausibel eine bestimmte Hypothese angesichts der beobachteten Daten ist. Sie ist ein Schlüsselelement beim Lernen aus Daten und beim Aktualisieren von Glaubensgraden.

$$
f(x|\pi) = \binom{n}{x} \pi^x (1 - \pi)^{n-x}
$$

## Verteilungsfunktion und stetige Dichte

Die Verteilungsfunktion gibt die Wahrscheinlichkeit an, dass eine stetige Zufallsvariable einen Wert kleiner oder gleich einem bestimmten Wert annimmt. Die Dichte ist ihre Ableitung und gibt uns die Wahrscheinlichkeit einer genauen Realisation in einem stetigen Raum.

$$
F(y) = P(Y \leq y)
$$

$$
f(y) = \frac{d}{dy}F(y)
$$

## Beta-Verteilung und ihre Dichte

Die Beta-Verteilung ist eine Familie von Wahrscheinlichkeitsverteilungen auf dem Intervall [0,1] und ist besonders nützlich als Priori in Bayes-Statistik wegen ihrer Flexibilität und Konjugiertheit.

$$
Y \sim Beta(a, b)
$$

$$
f(y) = \frac{1}{B(a, b)}y^{a-1}(1 - y)^{b-1}
$$

## Normalisierungskonstante

Die Normalisierungskonstante sorgt dafür, dass die Summe (oder das Integral) aller Wahrscheinlichkeiten gleich 1 ist. Sie ist entscheidend, um aus der Likelihood eine Wahrscheinlichkeitsverteilung zu machen.

- Für diskrete Verteilungen: $\sum_{\pi} f(x|\pi)P(\Pi=\pi)$
- Für stetige Verteilungen: $\int f(x|\pi)p(\pi)d\pi$

## Priori-Verteilung

Die Priori-Verteilung drückt aus, was wir vor der Betrachtung neuer Daten über eine Hypothese wissen. In diesem Fall nehmen wir an, dass alle Werte gleich wahrscheinlich sind, eine sogenannte Gleichverteilung.

$$
p(\pi) = 1 \quad \text{für} \quad 0 \leq \pi \leq 1
$$

## Posteriori-Verteilung und -Dichte

Die Posteriori-Verteilung kombiniert das Vorwissen (Priori) mit den neuen Daten (Likelihood), um unsere Glaubensgrade zu aktualisieren. Sie gibt die aktualisierte Wahrscheinlichkeit der Hypothese nach Beobachtung der Daten an.

$$
p(\pi|x) \propto \pi^x(1 - \pi)^{n-x}
$$

## Erwartungswert der Posteriori-Verteilung

Der Erwartungswert der Posteriori-Verteilung wird als Punktschätzung für den unbekannten Parameter nach der Aktualisierung durch neue Daten verwendet.

$$
\mathbb{E}[\Pi|x] = \frac{x + 1}{n + 2}
$$

Diese Formelsammlung fasst die wichtigsten Gleichungen und Konzepte aus der Bayes-Statistik zusammen, die in den Kapiteln zu Bayes' Billardkugeln besprochen wurden. Sie bietet eine schnelle Referenz für die Kernkonzepte und mathematischen Werkzeuge, die für das Verständnis und die Anwendung der Bayes'schen Inferenz erforderlich sind.

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
