---
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Sunday, 7. April 2024, 16:33
date modified: Sunday, 7. April 2024, 17:23
---

# Schedules

>[!info] **Schedule Definition:** 
Ein Schedule 𝑆 ist eine Folge von Aktionen für eine Menge 𝑇 = {𝑇1, … 𝑇𝑛} von Transaktionen. Der Schedule 𝑆 entsteht durch das Mischen der Aktionen der einzelnen Transaktionen 𝑇𝑖, wobei die Reihenfolge der Aktionen innerhalb jeder Transaktion 𝑇𝑖 beibehalten wird.

## Serieller Schedule

Ein Schedule ist seriell, wenn die einzelnen Transaktionen $( \mathbf{T} = T_1, \dots, T_n )$ nicht verzahnt werden, sondern blockweise hintereinander ausgeführt werden.

$\Longrightarrow$ *Isolation* ist gegeben, aber langsam, da nicht parallel

## Serialisierbarer Schedule

>[!info]
>Ein **serialisierbarer Schedule** ist eine Anordnung von Transaktionen in einer Datenbank, bei der die Transaktionen zwar möglicherweise überlappend ausgeführt werden, aber das Ergebnis am End so ist, also ob die Transaktionen nacheinander (seriell) ausgeführt worden wären. Dies gewährleistet, dass keine Inkonsistenzen in den Daten entstehen, auch wenn die Transaktionen gleichzeitig laufen.

Ein Schedule 𝑆 von $\mathbf{T} = \{T_1, \dots, T_n\}$ ist serialisierbar, wenn er die gleiche Wirkung hat wie ein beliebiger serieller Schedule von $\mathbf{T} = \{T_1, \dots, T_n\}$ 

$\Longrightarrow$ Auch hier ist die *Isolation* nicht verletzt
$\Longrightarrow$ Bessere Performanz also bei *seriellen* Schedules

$\Longrightarrow$ Nur serialisierbare Schedules dürfen zugelassen werden

## Abhängigkeiten in Schedules

**Abhängigkeit**: unterschiedliche Transkationen, gleiches Object
Sei $S$ ein Schedule:

- Schreib-Lese Abhängigkeit von $𝑇_i$ → $𝑇_j$
	- Es gibt ein $x$, so dass $S$ $w_i(x)$ vor $r_j(x) \text{ kommt } \rightarrow wri_{i,j}(x)$

- Lese-Schreib Abhängigkeit von $T_i \rightarrow T_j$:
	  - Es gibt ein $x$, so dass in $S$ $r_i(x)$ vor $w_j(x)$ kommt $\rightarrow rwi_{i,j}(x)$

- Schreib-Schreib Abhängigkeit von $T_i \rightarrow T_j$:
	  - Es gibt ein $x$, so dass in $S$ $w_i(x)$ vor $w_j(x)$ kommt $\rightarrow wwi_{i,j}(x)$

## Serialisierungsgraph

- Ein Serialisierungsgraph $G$ ist ein gerichteter Graph $G = (V, E)$:
  - Mit Knoten $V = \{T_1, \dots, T_n\}$ (beteiligten Transaktionen)
  - Mit Kanten $E$ = Abhängigkeiten $(T_i \rightarrow T_j)$ zwischen den Transaktionen

- Wenn der Graph *zyklenfrei* ist $\rightarrow$ serialisierbar

- Wenn der Graph *Zyklen* enthält $\rightarrow$ nicht serialisierbar

## Serialisierung Graph - Beispiel

$$
S = (r_1(x), r_2(y), r_3(z), w_3(z), w_2(y), w_1(x), w_2(y), r_1(y), r_3(x), w_1(y))
$$
- Abhängigkeiten: $wr_{1,3}(x)$, $rw_{2,1}(y)$, $wr_{2,1}(y)$, $ww_{2,1}(y)$

- $T_2 \xrightarrow{rw(y), wr(y), ww(y)} T_1 \xrightarrow{wr(x)} T_3$

$\Rightarrow$ Zyklenfrei → $S$ ist serialisierbar







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






