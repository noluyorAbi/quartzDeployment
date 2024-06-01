---
tags:
  - 4semester
  - FSK
  - informatik
  - Übungsblatt
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
date created: Wednesday, 24. April 2024, 00:14
date modified: Friday, 26. April 2024, 02:05
---

# Beweis der Eigenschaft $L^* \subseteq L$

Gegeben sei das Alphabet $\Sigma = \{a, b, c\}$ und die Sprache $L$ definiert als:

$$
L = \{ w \in \Sigma^* \mid \#_a(w) + \#_b(w) = \#_c(w) \}
$$

Die Sprache $L$ besteht also aus allen Wörtern über $\Sigma$, in denen die Summe der Anzahlen der Buchstaben 'a' und 'b' gleich der Anzahl der Buchstaben 'c' ist.

**Zu zeigen (Z.Z.):** $L^* \subseteq L$

**Beweis:**

1. Wir nehmen zwei beliebige Wörter $w_1, w_2 \in L$. Nach Definition von $L$ gilt:

   $$
   \#_a(w_1) + \#_b(w_1) = \#_c(w_1)
   $$

   und

   $$
   \#_a(w_2) + \#_b(w_2) = \#_c(w_2)
   $$

2. Betrachten wir das Wort $w = w_1w_2$, die Konkatenation von $w_1$ und $w_2$. Es gilt für die Anzahlen der Buchstaben in $w$:

   $$
   \#_a(w) = \#_a(w_1) + \#_a(w_2)
   $$

   $$
   \#_b(w) = \#_b(w_1) + \#_b(w_2)
   $$

   $$
   \#_c(w) = \#_c(w_1) + \#_c(w_2)
   $$

3. Durch Addition der entsprechenden Gleichungen für $w_1$ und $w_2$ erhalten wir:

   $$
   \#_a(w) + \#_b(w) = (\#_a(w_1) + \#_b(w_1)) + (\#_a(w_2) + \#_b(w_2))
   $$

   Da $\#_a(w_1) + \#_b(w_1) = \#_c(w_1)$ und $\#_a(w_2) + \#_b(w_2) = \#_c(w_2)$, kann dies umgeschrieben werden zu:

   $$
   \#_a(w) + \#_b(w) = \#_c(w_1) + \#_c(w_2)
   $$

   Dies entspricht der Anzahl der 'c's in $w$:

   $$
   \#_a(w) + \#_b(w) = \#_c(w)
   $$

4. Also erfüllt jedes Wort $w$, das durch Konkatenation von Wörtern aus $L$ gebildet wird, die Bedingung für die Zugehörigkeit zu $L$. Daher ist jedes Wort in $L^*$ auch in $L$ enthalten.

5. Zusätzlich ist das leere Wort $\epsilon$, das durch die Anwendung des Kleene-Sterns eingeschlossen ist, trivialerweise in $L$, da keine Buchstaben vorhanden sind und somit die Bedingung $\#_a(\epsilon) + \#_b(\epsilon) = \#_c(\epsilon)$ erfüllt ist, da alle Zählungen null sind.

**Fazit:**

Da sowohl das leere Wort als auch jede Konkatenation von Wörtern aus $L$ die definierende Eigenschaft von $L$ erfüllen, haben wir gezeigt, dass $L^* \subseteq L$.

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
