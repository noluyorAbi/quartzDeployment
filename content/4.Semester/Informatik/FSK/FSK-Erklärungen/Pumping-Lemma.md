---
tags:
  - 4semester
  - FSK
  - informatik
  - Erklaerung
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: "[[FSK-ÜB-4]]"
Benötigte Zeit:
date created: Monday, 13. May 2024, 22:45
date modified: Wednesday, 5. June 2024, 21:57
---

# [Pumping Lemma - Automaten & Formale (Simpleclub)](https://www.youtube.com/watch?v=TZOeXLWVer4&ab_channel=Informatik-simpleclub)

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/NFJtwpZs7BE?si=LyzNqT0igsCnNiyl" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/zacuxbMVC0g?si=gDpyB5cL0oJSkv8t" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/J2y5e5yF_2A?si=jTGs6tfyRcoLBH-y" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Das Pumping-Lemma ist ein wichtiges Konzept in der Theorie der formalen Sprachen und Komplexität, das verwendet wird, um zu beweisen, dass bestimmte Sprachen nicht regulär sind. Um das Pumping-Lemma und seine Anwendung zu verstehen, ist es wichtig, einige grundlegende Begriffe und Definitionen der Theorie formaler Sprachen zu kennen.

# Grundlagen

1. **Formale Sprachen:** Eine formale Sprache ist eine Menge von Zeichenketten (Wörtern), die aus Zeichen eines bestimmten Alphabets gebildet werden.
2. **Reguläre Sprachen:** Diese sind Typen formaler Sprachen, die durch reguläre Ausdrücke, endliche Automaten oder reguläre Grammatiken beschrieben werden können.

# Das Pumping-Lemma für reguläre Sprachen

Das Pumping-Lemma bietet eine Methode, um zu zeigen, dass eine gegebene Sprache **nicht regulär** ist. Es stellt eine Eigenschaft bereit, die alle regulären Sprachen erfüllen müssen. Die grundlegende Idee ist, dass jede hinreichend lange Zeichenkette in einer regulären Sprache so aufgeteilt werden kann, dass ein Teil der Zeichenkette wiederholt („gepumpt“) werden kann, um neue Zeichenketten zu erzeugen, die auch zur Sprache gehören.

## Schema des Lemma-Beweises

$$
\begin{aligned}
\text{WENN} \quad & \forall p \in \mathbb{N} \text{ gilt:} \\
&\exists w \in L  \text{ mit } |w|\geq p:\\
&\forall \text{ Zerlegungen } w = xyz \text{ mit } y \neq \epsilon \text{ und } |xy| \leq p: \\
& \exists i \in \mathbb{N} \text{ sodass } xy^i z \notin L \\
\text{DANN} \quad & L \text{ nicht erkennbar}
\end{aligned}
$$

## Formulierung des Lemmas

Für jede reguläre Sprache $L$ existiert eine Zahl $p$ (die sogenannte Pumping-Länge), sodass jede Zeichenkette $w$ in $L$, die mindestens so lang wie $p$ ist, in drei Teile $x$, $y$ und $z$ zerlegt werden kann, wobei gilt:

1. $w = xyz$
2. $|xy| \leq p$ (Die Länge von $xy$ ist höchstens $p$)
3. $|y| \geq 1$ (Die Länge von $y$ ist mindestens 1)
4. Für alle $i \geq 0$ ist $xy^iz$ auch in $L$

## Anwendung des Lemmas

Um zu zeigen, dass eine Sprache $L$ nicht regulär ist, wählt man eine spezifische Zeichenkette $w$ in $L$, die länger als die Pumping-Länge $p$ ist. Dann zeigt man, dass keine mögliche Zerlegung von $w$ in $x$, $y$, und $z$ existiert, die die oben genannten Bedingungen erfüllt, unabhängig davon, wie oft $y$ gepumpt wird.

## Beispiel

Nehmen wir als Beispiel die Sprache $L = \{a^nb^n | n \geq 0\}$, die alle Zeichenketten enthält, die aus einer Reihe von $a$s gefolgt von der gleichen Anzahl von $b$s bestehen. Wir behaupten, dass diese Sprache nicht regulär ist.

1. Angenommen, $L$ wäre regulär. Nach dem Pumping-Lemma gibt es dann eine Pumping-Länge $p$.
2. Wir wählen $w = a^pb^p$. Laut Lemma kann $w$ in $x$, $y$, und $z$ zerlegt werden, sodass $|xy| \leq p$ und $|y| \geq 1$.
3. Da $|xy| \leq p$, besteht $y$ nur aus $a$s. Wenn wir $y$ pumpen (wiederholen oder entfernen), ändert sich die Anzahl der $a$s im Vergleich zu den $b$s, was bedeutet, dass $xy^iz$ nicht mehr die Form $a^nb^n$ hat und somit nicht in $L$ sein kann.

Daher haben wir einen Widerspruch gefunden, der zeigt, dass unsere Annahme falsch war und $L$ nicht regulär ist.

### Schlussfolgerung

Das Pumping-Lemma ist ein mächtiges Werkzeug in der Theorie der formalen Sprachen, um zu demonstrieren, dass bestimmte Sprachen die Eigenschaften regulärer Sprachen nicht erfüllen können. Es wird typischerweise verwendet, um die Grenzen von regulären Ausdrücken und endlichen Automaten aufzuzeigen.

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
