---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 12. June 2024, 20:35
date modified: Wednesday, 12. June 2024, 20:43
---

# Erster Schritt

## Startzustand

$$
\begin{aligned}
L_{0}&= \{SabS\} \\
\end{aligned}
$$

## Schritt 1: Ableiten von $SabS$

$$
\begin{aligned}
L_{1} &= \{Sab(SabS), (SabS)Sab \} \\
\end{aligned}
$$

## Schritt 2: Ableiten der Ergebnisse von $L_1$

Für $Sab(SabS)$:

1. $Sab(SabS) \rightarrow Aca(SabS)$
2. $Sab(SabS) \rightarrow cB(SabS)$

Für $(SabS)Sab$:

1. $(SabS)Sab \rightarrow (Ac)Sab$
2. $(SabS)Sab \rightarrow (cB)Sab$

$$
\begin{aligned}
L_{2} &= \{Aca(SabS), cB(SabS), (Ac)Sab, (cB)Sab\} \\
\end{aligned}
$$

## Schritt 3: Ableiten der Ergebnisse von $L_2$

Für $Aca(SabS)$:

1. $Aca(SabS) \rightarrow Acca(SabS)$
2. $Aca(SabS) \rightarrow Acb(SabS)$

Für $cB(SabS)$:

1. $cB(SabS) \rightarrow Bcc(SabS)$
2. $cB(SabS) \rightarrow bc(SabS)$

Für $(Ac)Sab$:

1. $(Ac)Sab \rightarrow ccASab$
2. $(Ac)Sab \rightarrow cASab$

Für $(cB)Sab$:

1. $(cB)Sab \rightarrow BccSab$
2. $(cB)Sab \rightarrow bcSab$

$$
\begin{aligned}
L_{3} &= \{Acca(SabS), Acb(SabS), Bcc(SabS), bc(SabS), ccASab, cASab, BccSab, bcSab\} \\
\end{aligned}
$$

## Schritt 4: Ableiten der Ergebnisse von $L_3$

Für $Acca(SabS)$:

1. $Acca(SabS) \rightarrow cccA(SabS)$
2. $Acca(SabS) \rightarrow ccb(SabS)$

Für $Acb(SabS)$:

1. $Acb(SabS) \rightarrow ccb(SabS)$
2. $Acb(SabS) \rightarrow bcc(SabS)$

Für $Bcc(SabS)$:

1. $Bcc(SabS) \rightarrow Bccc(SabS)$
2. $Bcc(SabS) \rightarrow bc(SabS)$

Für $bc(SabS)$:

1. $bc(SabS) \rightarrow bc(SabS)$

Für $ccASab$:

1. $ccASab \rightarrow ccaSab$
2. $ccASab \rightarrow cASab$

Für $cASab$:

1. $cASab \rightarrow caSab$
2. $cASab \rightarrow Sab$

Für $BcccSab$:

1. $BcccSab \rightarrow BcccSab$
2. $BcccSab \rightarrow bcSab$

Für $bcSab$:

1. $bcSab \rightarrow bcSab$

$$
\begin{aligned}
L_{4} &= \{cccA(SabS), ccb(SabS), bcc(SabS), bc(SabS), ccaSab, caSab, Sab, BcccSab, bcSab \} \\
\end{aligned}
$$

## Schritt 5: Ableiten der Ergebnisse von $L_4$

Für $cccA(SabS)$:

1. $cccA(SabS) \rightarrow ccca(SabS)$

Für $ccb(SabS)$:

1. $ccb(SabS) \rightarrow bccc(SabS)$

Für $bcc(SabS)$:

1. $bcc(SabS) \rightarrow bccc(SabS)$

Für $bc(SabS)$:

1. $bc(SabS) \rightarrow bc(SabS)$

Für $ccaSab$:

1. $ccaSab \rightarrow ccab(SabS)$

Für $caSab$:

1. $caSab \rightarrow caSab$

Für $Sab(Sab)$:

1. $Sab(Sab) \rightarrow Sab(Sab)$
2. $Sab(Sab) \rightarrow (Sab)Sab$

Für $BcccSab$:

1. $BcccSab \rightarrow bcSab$

Für $bcSab$:

1. $bcSab \rightarrow bcSab$

$$
\begin{aligned}
L_{5} &= \{ccca(SabS), bccc(SabS), bccc(SabS), bc(SabS), ccab(SabS), caSab, Sab(Sab), (Sab)Sab, bcSab\} \\
\end{aligned}
$$

## Schritt 6: Ableiten der Ergebnisse von $L_5$

Für $ccca(SabS)$:

1. $ccca(SabS) \rightarrow ccca(SabS)$

Für $bccc(SabS)$:

1. $bccc(SabS) \rightarrow bccc(SabS)$

Für $bc(SabS)$:

1. $bc(SabS) \rightarrow bc(SabS)$

Für $ccab(SabS)$:

1. $ccab(SabS) \rightarrow ccab(SabS)$

Für $caSab$:

1. $caSab \rightarrow caSab$

Für $Sab(Sab)$:

1. $Sab(Sab) \rightarrow Sab(Sab)$

Für $(Sab)Sab$:

1. $(Sab)Sab \rightarrow (Sab)Sab$

Für $bcSab$:

1. $bcSab \rightarrow bcSab$

$$
\begin{aligned}
L_{6} &= \{ccca(SabS), bccc(SabS), bc(SabS), ccab(SabS), caSab, Sab(Sab), (Sab)Sab, bcSab\} \\
\end{aligned}
$$

# Zusammenfassung

Hier sind alle Ableitungen bis zum 6. Schritt. Es ist wichtig zu beachten, dass viele Ableitungen sich wiederholen oder konstant bleiben, was zeigt, dass einige Regeln redundante Ableitungen erzeugen können.

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
