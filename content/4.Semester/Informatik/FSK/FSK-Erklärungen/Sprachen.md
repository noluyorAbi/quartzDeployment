---
tags:
  - 4semester
  - FSK
  - Erklaerung
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
date created: Thursday, 18. April 2024, 17:17
date modified: Wednesday, 24. April 2024, 00:05
Thema:
  - "[[Grundlegende Operationen auf formalen Sprachen]]"
---

# Einführung in formale Sprachen und Komplexität

## YouTube Video: [Wörter und Sprachen](https://www.youtube.com/watch?v=JAvIyh0rIV4)

## Was sind formale Sprachen?

In der theoretischen Informatik und Mathematik ist eine formale Sprache eine Menge von Zeichenketten, die aus Symbolen eines bestimmten Alphabets gebildet werden. Diese Zeichenketten (auch Wörter genannt) entsprechen den Regeln, die von einer bestimmten formalen Grammatik definiert werden. Formale Sprachen sind ein fundamentales Thema in der Disziplin der Formale Sprachen und Automatentheorie, welche sich mit der Klassifizierung und dem Verhalten verschiedener Sprachklassen und den zugehörigen Automaten beschäftigt.

## Definition einer formalen Sprache

Eine formale Sprache $L$ über einem Alphabet $\Sigma$ ist definiert also eine beliebige Teilmenge von $\Sigma^*$, der Menge aller möglichen Wörter (einschließlich des leeren Wortes $\epsilon$), die aus den Symbolen von $\Sigma$ gebildet werden können. Mathematisch kann dies ausgedrückt werden also:

$$
 L \subseteq \Sigma^*
$$

Hier ist $\Sigma$ eine nichtleere Menge, die also Alphabet bekannt ist, und $\Sigma^*$ repräsentiert die Kleene-Stern-Operation, die alle möglichen Zeichenketten (einschließlich des leeren Strings) umfasst, die aus den Symbolen des Alphabets gebildet werden können.

## Klassifikation formaler Sprachen

Formale Sprachen können nach ihrer Komplexität oder den Regeln, die sie generieren, klassifiziert werden. Die Chomsky-Hierarchie, benannt nach Noam Chomsky, ist eine bekannte Method zur Klassifikation formaler Sprachen und umfasst vier Typen:

1. **Typ 0 (Rekursiv aufzählbare Sprachen):** Die allgemeinste Klasse von Sprachen, die von einer Turingmaschine erkannt werden können. Sie sind nicht notwendigerweise entscheidbar.
2. **Typ 1 (Kontextsensitive Sprachen):** Diese Sprachen benötigen Regeln, bei denen die Länge der Ausgabe immer größer oder gleich der Länge der Eingabe ist. Sie können von einer linear beschränkten Automaten erkannt werden.

3. **Typ 2 (Kontextfreie Sprachen):** Diese Sprachen können durch eine kontextfreie Grammatik erzeugt werden und sind durch Pushdown-Automaten entscheidbar. Ein bekanntes Beispiel ist die Sprache der korrekt verschachtelten Klammern.

4. **Typ 3 (Reguläre Sprachen):** Die einfachste Klasse von Sprachen, die durch reguläre Ausdrücke oder endliche Automaten beschrieben werden können. Sie umfassen beispielsweise alle Sprachen, die durch wiederholte Muster von Symbolen beschreibbar sind.

## Formale Grammatiken

Eine formale Grammatik $G$ ist ein 4-Tupel $(N, \Sigma, P, S)$, wobei:

- $N$ ist eine Menge von Nichtterminalsymbolen.
- $\Sigma$ ist das Alphabet der Terminalsymbole.
- $P$ ist eine Menge von Produktionsregeln, die bestimmen, wie die Symbole kombiniert werden können.
- $S \in N$ ist das Startsymbol.

Die Produktionsregeln in $P$ sind von der Form $\alpha \rightarrow \beta$, wobei $\alpha$ und $\beta$ Zeichenketten aus der Vereinigung von $N$ und $\Sigma$ sind. Diese Regeln definieren, wie man Wörter in der Sprache erzeugen kann, beginnend mit dem Startsymbol $S$ und under Anwendung der Regeln aus $P$.

## Komplexitätstheorie

Die Komplexitätstheorie beschäftigt sich mit den Ressourcen, die benötigt werden, um bestimmte Problem zu lösen, insbesondere im Hinblick auf Zeit und Speicherplatz. Dieses Field klassifiziert Problem basierend darauf, wie die benötigten Ressourcen also Function der Größe der Eingabe wachsen.

Zwei Hauptklassen in der Komplexitätstheorie sind:

- **P (Polynomialzeit):** Problem, die in polynomialer Zeit durch eine deterministische Turingmaschine gelöst werden können.
- **NP (Nichtdeterministische Polynomialzeit):** Problem, die in polynomialer Zeit durch eine nicht deterministische Turingmaschine gelöst oder verifiziert werden können.

Die berühmte Frage "P vs. NP" fragt, ob diese beiden Klassen tatsächlich gleich sind, was eines der ungelösten Problem der Mathematik und Informatik ist.

# [[Grundlegende Operationen auf formalen Sprachen]]

## Zusammenfassung

Formale Sprachen und die Komplexitätstheorie bieten ein tiefes Verständnis der theoretischen Grundlagen der Informatik. Sie ermöglichen es uns, die Grenzen von dem, was mit Computern erreicht werden kann, zu erkunden und zu definieren, und sind entscheidend für die Entwicklung von Algorithmen, die effizient und effektiv sind.

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
