---
tags:
  - 4semester
  - FSK
  - informatik
  - Erklaerung
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
  - "[[FSK-ÜB-1#FSK1-2 Grammatiken angeben (2 Punkte)]]"
date created: Wednesday, 24. April 2024, 00:46
date modified: Wednesday, 12. June 2024, 15:10
---

# Grammatiken

> [!info] Kurzerklärung
> Eine Grammatik in der formalen Sprachtheorie ist ein Regelwerk, das definiert, wie [[Sätze]] einer Sprache korrekt aufgebaut sind. Sie besteht aus einem Alphabet und Regeln, die angeben, wie Wörter und Sätze geformt werden dürfen. Das Ziel einer Grammatik ist es, eine strukturierte und präzise Beschreibung einer Sprache zu bieten, sodass klar ist, welche Zeichenfolgen zur Sprache gehören. Sie ermöglicht es, die Syntax einer Sprache sowohl für menschliche als auch maschinelle Verarbeitung klar festzulegen und wird daher in Bereichen wie der Computerprogrammierung und Datenanalyse eingesetzt.

In der Theorie der formalen Sprachen ist eine Grammatik ein Mittel, um die Syntax einer Sprache präzise zu beschreiben. Eine formale Grammatik ist typischerweise ein 4-Tupel, nicht ein 5-Tupel, aber wir können über eine erweiterte Form sprechen, die zusätzliche Informationen wie Einschränkungen oder Aktionen beinhaltet. Doch zuerst konzentrieren wir uns auf die Standardform.

Eine formale Grammatik $G$ wird in der Regel als 4-Tupel definiert:

$$
G = (N, \Sigma, P, S)
$$

- **$N$** ist eine endliche Menge von Nichtterminalsymbolen (auch Variablen genannt). Diese sind Symbole, die auf der linken Seite einer Produktionsregel stehen und durch die rechte Seite der Regel ersetzt werden können.
- **$\Sigma$** ist eine endliche Menge von Terminalsymbolen, die nicht weiter in der Ableitung ersetzt werden. Die Terminalsymbole sind die tatsächlichen Zeichen, aus denen die Strings der Sprache bestehen.
- **$P$** ist eine endliche Menge von Produktionsregeln, wobei jede Regel eine Substitution von einem Nichtterminal in eine Kette von Nichtterminals und Terminals beschreibt.
- **$S$** ist das Startsymbol, von dem aus die Ableitung der Strings beginnt. Es ist ein spezielles Nichtterminalsymbol aus $N$.

## Erweiterte 5-Tupelform

Manchmal wird eine formale Grammatik erweitert, um eine 5-Tupelform zu erreichen, die wie folgt aussieht:

$$
G = (N, \Sigma, P, S, A)
$$

- **$A$** könnte eine Menge von Hilfsdefinitionen, semantischen Regeln oder Aktionen sein, die während der Ableitung oder des Parsingvorgangs ausgeführt werden.

### Beispiele und detaillierte Erklärung:

#### Alphabete und Sprachen:

Ein **Alphabet** $\Sigma$ könnte beispielsweise aus den Buchstaben $\{a, b\}$ bestehen. Eine Sprache über diesem Alphabet könnte sein: $L = \{ab, aabb, aaabbb, \dots\}$, wobei jedes Wort in $L$ die gleiche Anzahl von 'a's wie 'b's hat.

#### Grammatiken:

Betrachten wir eine formale Grammatik $G$:

- $N = \{S\}$
- $\Sigma = \{a, b\}$
- $P = \{S \rightarrow aSb, S \rightarrow \varepsilon\}$
- $S = S$ (das Startsymbol ist auch $S$)

Um zu verstehen, wie Grammatiken funktionieren, stellen Sie sich vor, Sie möchten ein "Spiel" spielen, in dem das Ziel darin besteht, Wörter oder Sätze zu "bauen". Jede Regel in $P$ gibt Ihnen eine "Anweisung" für dieses Spiel. Sie beginnen mit $S$ und wählen dann eine Regel aus $P$, um $S$ zu ersetzen. Sie wiederholen diesen Prozess, bis nur noch Terminalzeichen übrig sind.

#### Ableitungsbeispiel:

Um das Wort "aababb" zu generieren, würden Sie:

1. Starten Sie mit $S$.
2. Ersetzen Sie $S$ mit $aSb$ (mit der Regel $S \rightarrow aSb$): Sie haben jetzt "aSb".
3. Ersetzen Sie das $S$ in "aSb" wieder mit $aSb$: Jetzt haben Sie "aaSbb".
4. Ersetzen Sie das $S$ in "aaSbb" mit $\varepsilon$ (mit der Regel $S \rightarrow \varepsilon$): Sie haben jetzt "aababb".

#### Warum brauchen wir formale Grammatiken?

Formale Grammatiken sind entscheidend, um Computer „beizubringen“, was korrekte und inkorrekte Sätze (oder Codes) sind. Ein Compiler zum Beispiel nutzt die Grammatik einer Programmiersprache, um zu prüfen, ob ein Programm diesen Regeln folgt und um es in Maschinensprache zu übersetzen.

Stellen Sie sich vor, die Grammatik ist das Rezeptbuch und die Sprache ist das Menü. Ohne das Rezeptbuch könnten Sie nicht bestimmen, welche Zutaten (Symbole) zusammengehören und wie sie kombiniert werden sollten, um ein

Gericht (Satz) aus dem Menü (der Sprache) zu kochen (erzeugen).

#### Formale Grammatiken in der Informatik:

In der Informatik dienen Grammatiken dazu, formale Sprachen zu definieren, die für die Programmierung, Datenverarbeitung und für Schnittstellen zwischen Menschen und Maschinen verwendet werden. Zum Beispiel wird eine Grammatik verwendet, um zu definieren, wie HTML-Tags zusammengesetzt werden, um gültige Webseiten zu bilden.

#### Fazit:

Formale Grammatiken sind ein mächtiges Werkzeug, um die Syntax einer Sprache genau zu definieren. Sie ermöglichen es uns, maschinelle Prozesse wie das Parsen und die Syntaxanalyse von Codes und Daten durchzuführen. Sie sind nicht nur in der Informatik, sondern auch in der Linguistik von zentraler Bedeutung, um die Struktur natürlicher Sprachen zu verstehen. Sie stellen sicher, dass die Sprache, die wir verwenden – sei es in Code oder im täglichen Sprechen – einer logischen Struktur folgt und von anderen verstanden werden kann.

---

# Kochrezept

> [!tip] Ablauf für das Aufstellen einer Grammatik
>
> 1. **Bestimmen Sie das Alphabet**: Legen Sie die Menge der Terminalsymbole fest, die in der Sprache verwendet werden können.
> 2. **Identifizieren Sie die Sprachstruktur**: Überlegen Sie, welche Muster und Strukturen in der Sprache vorhanden sein sollen. Handelt es sich um einfache Wiederholungen, Verschachtelungen, spezielle Sequenzen?
> 3. **Wählen Sie das Startsymbol**: Bestimmen Sie das Nichtterminal, das als Ausgangspunkt für Ableitungen in Ihrer Grammatik dient.
> 4. **Definieren Sie die Nichtterminale**: Erstellen Sie eine Menge von Nichtterminalsymbolen, die die strukturellen Komponenten Ihrer Sprache repräsentieren.
> 5. **Entwickeln Sie die Produktionsregeln**: Schreiben Sie eine Reihe von Regeln, die festlegen, wie Nichtterminale durch eine Kombination aus Terminalen und Nichtterminalen ersetzt werden können, um gültige Sätze der Sprache zu erzeugen.
> 6. **Stellen Sie die Grammatik zusammen**: Fügen Sie die definierten Elemente zu einem 4-Tupel $G = (N, \Sigma, P, S)$ zusammen, das Ihre Grammatik repräsentiert.
> 7. **Überprüfen Sie die Grammatik**:
>    - Stellen Sie sicher, dass die Grammatik alle Wörter der Sprache generieren kann.
>    - Prüfen Sie, ob die Grammatik keine Wörter erzeugt, die nicht zur Sprache gehören.
> 8. **Klassifizieren Sie die Grammatik**: Bestimmen Sie, ob Ihre Grammatik regulär, kontextfrei, kontextsensitiv oder rekursiv enumerable ist, basierend auf den Merkmalen der Produktionsregeln.
> 9. **Dokumentieren Sie Ihre Grammatik**: Erklären Sie die Funktion jeder Regel und wie sie zur Struktur der Sprache beiträgt.
>
> Indem Sie diesen Ablauf befolgen, können Sie eine klare und präzise Grammatik erstellen, die eine formale Sprache innerhalb des Rahmens der formalen Sprachtheorie definiert.

# Beispiel aus [[FSK-ÜB-1#FSK1-2 Grammatiken angeben (2 Punkte)]]

Um die angegebene Aufgabe zu lösen, bei der eine Grammatik für die Sprache $L_1 = \{a, b\}^+$ erstellt werden soll, gehen Sie folgendermaßen vor:

1. **Definieren Sie das Alphabet:** Hier ist das Alphabet $\Sigma = \{a, b\}$ bereits gegeben.

2. **Identifizieren Sie das Muster der Sprache:** Die Sprache $L_1$ besteht aus einem oder mehreren 'a's oder 'b's. Das Pluszeichen (`+`) bedeutet, dass mindestens ein Zeichen vorhanden sein muss – das leere Wort ist nicht erlaubt.

3. **Erstellen Sie das 4-Tupel der Grammatik ohne $\varepsilon$-Produktionen:** Für die Sprache $L_1$ benötigen Sie eine Grammatik $G = (N, \Sigma, P, S)$, die wie folgt aussieht:

   - $N$: Die Nichtterminale. Hier können Sie einfach mit einem Nichtterminal $S$ beginnen, das für einen beliebigen String aus $L_1$ steht.
   - $\Sigma$: Die Terminale, also $\{a, b\}$.
   - $P$: Die Produktionsregeln. Diese müssen so definiert sein, dass sie alle möglichen Strings in $L_1$ erzeugen, ohne das leere Wort zu ermöglichen.
   - $S$: Das Startsymbol, das wir bereits als $S$ festgelegt haben.

4. **Konstruieren Sie die Produktionsregeln:** Da keine $\varepsilon$-Produktionen erlaubt sind und Sie Strings generieren müssen, die aus mindestens einem 'a' oder 'b' bestehen und beliebig lang sein können, könnten die Regeln so aussehen:

   - $S \rightarrow aS | bS | a | b$

> [!help]- Erklärung der Schreibweise
>
> - **$S$**: Das ist das Startsymbol oder Nichtterminal. Es ist der Ausgangspunkt, von dem aus wir beginnen, Sätze der Sprache zu generieren.
> - **$\rightarrow$**: Dieses Symbol bedeutet "kann ersetzt werden durch". Es leitet eine Produktionsregel ein, die besagt, wie das Nichtterminal auf der linken Seite durch die Folge von Symbolen auf der rechten Seite ersetzt werden kann.
> - **$aS$**: Diese Kombination bedeutet, dass das Nichtterminal $S$ durch das Terminal 'a' gefolgt von dem Nichtterminal $S$ ersetzt werden kann. Es ist ein rekursiver Ausdruck, da $S$ wieder auf der rechten Seite erscheint, was bedeutet, dass dieser Prozess wiederholt werden kann.
> - **$bS$**: Ähnlich wie $aS$, kann auch $bS$ das Nichtterminal $S$ ersetzen, wobei 'b' vor einem weiteren $S$ steht. Auch dies ermöglicht eine Wiederholung.
> - **$a$**: Das Terminal 'a' kann auch für sich allein stehen, um das Nichtterminal $S$ zu ersetzen. Dies ermöglicht die Erzeugung eines Wortes, das mit dem Buchstaben 'a' endet.
> - **$b$**: Genauso wie bei 'a', kann das Terminal 'b' auch $S$ ersetzen, was ein Wort erzeugt, das mit 'b' endet.
> - **$|$**: Das vertikale Balkenzeichen fungiert als logisches "oder" und trennt verschiedene Ersetzungsmöglichkeiten. Es gibt an, dass das Nichtterminal $S$ durch **jedes** der aufgelisteten Elemente rechts vom Pfeil ersetzt werden kann.
>   <br/>
>   > [!help]- Erklärung für $aS$ und $bS$ in den Produktionsregeln
>   >
>   > - **Rekursion mit $aS$**: Die Verwendung von $aS$ in der Produktionsregel ermöglicht die rekursive Erzeugung von Sätzen, die mit einem oder mehreren 'a's beginnen. Wenn $S$ durch $aS$ ersetzt wird, fügt man ein 'a' hinzu und lässt das Nichtterminal $S$ stehen, was eine erneute Anwendung der Regel ermöglicht. Dies ist die Basis für die Erzeugung von Wörtern beliebiger Länge mit 'a's im Wort.
>   > - **Rekursion mit $bS$**: Analog dazu ermöglicht die Verwendung von $bS$, dass Wörter mit einem oder mehreren 'b's gebildet werden können. Die Regel $S \rightarrow bS$ bedeutet, dass nach einem 'b' das Nichtterminal $S$ steht, welches dann wiederum durch die Regeln ersetzt werden kann, was zu weiteren 'b's führt.
>   >
>   > Die rekursiven Regeln $aS$ und $bS$ sind entscheidend für die Generierung von Wörtern, die aus einer beliebigen Anzahl von 'a's und 'b's bestehen, und stellen sicher, dass die Grammatik nicht nur einzelne Zeichen, sondern auch längere Sequenzen erzeugen kann, entsprechend der Sprache $L_1 = \{a, b\}^+$.

Zusammengenommen bedeuten diese Regeln, dass Sie beginnen können, ein Wort zu bilden, indem Sie mit $S$ starten und es dann durch 'a' oder 'b' ersetzen, gefolgt von einem weiteren $S$, was Ihnen erlaubt, weitere 'a's oder 'b's hinzuzufügen. Sie können diesen Prozess so lange fortsetzen, wie Sie möchten, und abschließen, indem Sie $S$ einfach durch 'a' oder 'b' ersetzen. Auf diese Weise können Sie Sätze erzeugen, die aus einer beliebigen Anzahl von 'a's und 'b's bestehen, aber mindestens ein Zeichen lang sein müssen, da $\varepsilon$-Produktionen nicht erlaubt sind.

Dies bedeutet, dass das Startsymbol $S$ entweder durch 'a' oder 'b' gefolgt von $S$ (was eine Wiederholung von 'a's oder 'b's ermöglicht) oder direkt durch 'a' oder 'b' ersetzt werden kann.

5. **Typ der Grammatik angeben:** Diese spezielle Grammatik ist eine reguläre Grammatik, da sie die Form einer rechtslinearen Grammatik hat (jede Regel hat höchstens ein Nichtterminal, und es steht am Ende). Reguläre Grammatiken generieren reguläre Sprachen, die von endlichen Automaten akzeptiert werden können und sich für einfache Muster eignen.

6. **Erklärung hinzufügen:** Schließlich erklären Sie, dass Ihre Grammatik die Sprache erzeugt, weil sie alle geforderten Strings mit mindestens einem 'a' oder 'b' generiert und beliebig viele 'a's oder 'b's durch wiederholte Anwendung der Regeln $S \rightarrow aS$ und $S \rightarrow bS$ hinzugefügt werden können. Die Regeln $S \rightarrow a$ und $S \rightarrow b$ gewährleisten, dass auch Wörter der Länge 1 erzeugt werden können.

Zusammengefasst sähe das vollständige 4-Tupel für die Grammatik $G_1$ so aus:

- $N = \{S\}$
- $\Sigma = \{a, b\}$
- $P = \{S \rightarrow aS | bS | a | b\}$
- $S = S$

Und Sie würden es als reguläre Grammatik klassifizieren, da sie rechtslineare Produktionen verwendet.

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
