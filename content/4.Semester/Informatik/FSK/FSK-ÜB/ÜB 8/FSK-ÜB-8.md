---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 12. June 2024, 14:20
date modified: Wednesday, 12. June 2024, 21:09
---

# FSK8-1 Entscheiden des [[Wortproblem]] für Sprachen von Typ 1

> [!note] Aufgabenstellung
> Sei $G = (V, \{a,b, c\},P, S)$ eine Grammatik mit Produktionen
>
> $$
> \begin{aligned}
> P=\{\ S &→ SabS \mid Ac \mid cB, \\
> Ac&→ccA, \\
> cA &→ca,\\
> AA &→ aA,\\
> Aa &→ ab,\\
> cB &→ Bcc, \\
> Bc &→ bc, \\
> BB &→ Bb,\\
> bB&→ab \ \}
> \end{aligned}
> $$

## a) Berechnen Sie gemäß der Konstruktion aus der Vorlesung $L_{i}^{6}$ für alle $i \in \mathbb{N}$ und begründen Sie kurz.

> [!Quote] Satz 3.3.2.
> Das Wortproblem für Typ 1-Grammatiken ist entscheidbar, d.h. es gibt einen Algorithmus, der bei Eingabe von Typ 1-Grammatik $G$ und Wort $w$ nach endlicher Zeit entscheidet, ob $w \in L(G)$ oder $w \notin L(G)$ gilt.

$L_{i}^{6}$: alle Satzformen der Länge $n$ die in höchstens $m$ Schritten vom Startsymbol aus ableitbar sind

### Erster Schritt

#### Startzustand

$$
\begin{aligned}
L_{0}^{6}&= \{SabS\} \\
L_{1}^{6}&=\{SabSabS, SabAc, SabcB, AcabS, cBabS\} \\
L_{2}^{6}&=\{SaccA, SacBcc, Sabca, AccA, cAabS, BcccA, BccBcc, cBabca, \ldots\} \\
L_{3}^{6}&=\{SabSabSabS, SabSabAc, SabSabcB, SabAccA, SabAcBcc, SabcBccA, \ldots\}
\end{aligned}
$$

### Ableiten

$$
\begin{aligned}
L_{0}^{6}&= \{SabS\} \\
L_{1}^{6}&=\{SabAc, SabcB, AcabS, cBabS\} \\
L_{2}^{6}&=\{SaccA, SacBcc, Sabca, AccA, cAabS, BcccA, BccBcc, cBabca, \ldots\} \\
L_{3}^{6}&=\{SabbccA, SabBccc, SabSabAc, SabSabcB, SabAccA, SabAcBcc, SabcBccA, \ldots\}
\end{aligned}
$$

Die Ableitungen zeigen die schrittweise Transformation der Startform $SabS$ in verschiedene Formen, die innerhalb von höchstens sechs Schritten erreicht werden können. Die genaue Berechnung kann je nach Ableitungsweg weitere Zwischenformen enthalten.

## b) Geben Sie zwei Wörter an die auf Grundlage der Berechnung in der Sprache $L(G)$ sind.

1. $SabbccA$
2. $SabAccA$

## c) Geben Sie drei Wörter an die auf Grundlage der Berechnung nicht in der Sprache $L(G)$ sind.

1. $abcc$
2. $abAc$
3. $Sab$

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
