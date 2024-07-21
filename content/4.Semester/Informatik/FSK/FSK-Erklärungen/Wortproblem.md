---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: "[[FSK-ÜB-8]]"
Benötigte Zeit:
date created: Wednesday, 12. June 2024, 15:18
date modified: Wednesday, 12. June 2024, 18:22
---

# Das Wortproblem

Das Wortproblem ist ein fundamentales Problem in der Theorie der formalen Sprachen und Grammatiken. Es geht darum, für eine gegebene Grammatik und ein Wort zu entscheiden, ob dieses Wort von der Grammatik erzeugt werden kann oder nicht. Diese Fragestellung ist von großer Bedeutung, da sie Aufschluss über die Berechenbarkeit und Komplexität von Grammatiken und Sprachen gibt.

## Formale Definition

**Definition 3.3.1 (Wortproblem für Typ i-Grammatiken):** Das Wortproblem für Typ i-Grammatiken ist die Frage, ob für eine gegebene Typ i-Grammatik $G = (V, \Sigma, P, S)$ und ein Wort $w \in \Sigma^*$ gilt: $w \in L(G)$ oder $w \notin L(G)$.

Hierbei sind:

- $V$: die Menge der Nicht-Terminalsymbole,
- $\Sigma$: die Menge der Terminalsymbole,
- $P$: die Menge der Produktionen,
- $S$: das Startsymbol der Grammatik $G$.

$L(G)$ bezeichnet die von $G$ erzeugte formale Sprache.

## Entscheidbarkeit für Typ 1-Grammatiken

Für kontextsensitive Grammatiken, auch als Typ 1-Grammatiken bekannt, ist das Wortproblem entscheidbar. Dieser Sachverhalt wird durch den folgenden Satz ausgedrückt:

**Satz 3.3.2:** Das Wortproblem für Typ 1-Grammatiken ist entscheidbar, d.h. es gibt einen Algorithmus, der bei Eingabe einer Typ 1-Grammatik $G$ und eines Wortes $w$ nach endlicher Zeit entscheidet, ob $w \in L(G)$ oder $w \notin L(G)$ gilt.

Die Intuition hinter diesem Satz ist, dass in jeder Ableitung $S \Rightarrow w_1 \Rightarrow \dots \Rightarrow w_m$ eines Wortes $w_m$ der Länge $n$ in einer kontextsensitiven Grammatik alle Satzformen $w_i$ höchstens die Länge $n$ haben. Da es nur endlich viele Satzformen der Länge $\leq n$ über dem Alphabet $(\Sigma \cup V)^*$ gibt, kann man durch systematisches Durchprobieren all dieser Satzformen entscheiden, welche Wörter $w_m \in \Sigma^*$ der Länge $\leq n$ von der Grammatik erzeugt werden und welche nicht.

Beachte, dass diese Berechnung für eine Typ 0-Grammatik falsch wäre, da dort zwischendrin auch Wörter der Länge $> n$ entstehen dürfen, die im Anschluss daran wieder gekürzt werden.

Ferner ist klar, dass die Berechnung von $L_m$ für ein gegebenes $m$ und $n$ terminiert. Die Mächtigkeit der Mengen $L_m$ ist durch $((|\Sigma \cup V| + 1)^n)$ beschränkt (mehr Satzformen der Länge $\leq n$ gibt es nicht). Für den Übergang von $L_{m-1}$ zu $L_m$ gilt $L_{m-1} = L_m$ oder $L_{m-1} \subset L_m$. Ferner gilt: Falls $L_{m-1} = L_m$, dann $L_{m-1} = L_{m+k}$ für alle $k \in \mathbb{N}$. Aus den vorherigen Aussagen folgt, dass es irgendein $m_0$ geben muss, für das $L_{m_0} = L_{m_0+k}$ für alle $k \in \mathbb{N}$ gilt. Nach Berechnung dieser Menge $L_{m_0}$ reicht es daher zu prüfen, ob $w \in L_{m_0}$ gilt oder nicht.

Daher entscheidet Algorithmus 2 das Wortproblem für Typ 1-Grammatiken.

**Algorithmus 2:** Entscheiden des Wortproblems für Typ 1-Grammatiken  
_Eingabe:_ Typ 1-Grammatik $G = (V, \Sigma, P, S)$ (mit einer Sonderregel) und ein Wort $w \in \Sigma^*$  
_Ausgabe:_ Ja, wenn $w \in L(G)$, und Nein, wenn $w \notin L(G)$

```
Beginn
    n := |w|
    L := {λ}
    wiederhole
        L_old := L
        L := next(L_old, n)
    bis (w ∈ L) oder (L_old = L)
    wenn w ∈ L dann
        return Ja
    sonst
        return Nein
Ende
```

## Beispiel

Betrachten wir die folgende kontextsensitive Grammatik $G$, die Palindrome über dem Alphabet $\Sigma = \{a, b\}$ erzeugt:

- $V = \{S, A\}$
- $\Sigma = \{a, b\}$
- $P = \{S \rightarrow \lambda, S \rightarrow aSa, S \rightarrow bSb, A \rightarrow aAa, A \rightarrow bAb, A \rightarrow \lambda\}$
- $S$ ist das Startsymbol.

Wir können den oben beschriebenen Algorithmus verwenden, um zu entscheiden, ob ein gegebenes Wort $w$ von $G$ erzeugt wird oder nicht.

Zum Beispiel ist $w = abba$ ein Palindrom und gehört zu $L(G)$, da es durch die folgenden Ableitungen erzeugt werden kann:

$$
 S \Rightarrow aSa \Rightarrow abAba \Rightarrow abba
$$

Im Gegensatz dazu gehört $w = abb$ nicht zu $L(G)$, da es kein Palindrom ist und daher nicht von $G$ erzeugt werden kann.

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
