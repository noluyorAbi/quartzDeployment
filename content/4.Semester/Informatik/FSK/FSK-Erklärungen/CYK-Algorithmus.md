---
tags:
  - 4semester
  - FSK
  - informatik
  - Erklaerung
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: "[[FSK-ÜB-6]]"
Benötigte Zeit:
date created: Tuesday, 28. May 2024, 22:03
date modified: Wednesday, 29. May 2024, 18:25
---

# [Gute Seite zum verstehen des CYK](https://www.cip.ifi.lmu.de/~lindebar/)

# CYK-Algorithmus

> [!info] Kurzerklärung
> Der CYK-Algorithmus (Cocke-Younger-Kasami-Algorithmus) ist ein Parsing-Algorithmus für kontextfreie Grammatiken, der zur Überprüfung verwendet wird, ob eine gegebene Zeichenkette zu einer bestimmten kontextfreien Sprache gehört. Er funktioniert durch dynamische Programmierung und arbeitet in der Chomsky-Normalform.

In der Theorie der formalen Sprachen wird der CYK-Algorithmus typischerweise wie folgt beschrieben:

## Voraussetzungen

Bevor der CYK-Algorithmus angewendet werden kann, muss die kontextfreie Grammatik in Chomsky-Normalform (CNF) vorliegen. Eine Grammatik ist in CNF, wenn jede Produktionsregel eine der folgenden Formen hat:

1. $A \rightarrow BC$ (wobei $A, B, C$ Nichtterminale sind)
2. $A \rightarrow a$ (wobei $A$ ein Nichtterminal und $a$ ein Terminal ist)
3. $S \rightarrow \epsilon$ (wobei $S$ das Startsymbol ist und $\epsilon$ das leere Wort)

## CYK-Algorithmus

Der CYK-Algorithmus wird in drei Hauptschritten durchgeführt:

1. **Initialisierung**:

   - Erstelle eine Tabelle $T$ der Größe $n \times n$, wobei $n$ die Länge der Eingabezeichenkette ist.
   - Fülle die Diagonale der Tabelle mit den Nichtterminalen, die die jeweiligen Terminale ableiten.

2. **Rekursion**:

   - Fülle die Tabelle von der unteren linken Ecke bis zur oberen rechten Ecke, indem du überprüfst, ob die Kombinationen der Einträge in den unteren Dreiecken der Tabelle durch die Produktionsregeln abgeleitet werden können.

3. **Akzeptanz**:
   - Überprüfe, ob das Startsymbol $S$ in der oberen rechten Ecke der Tabelle enthalten ist. Wenn ja, gehört die Eingabezeichenkette zur Sprache der Grammatik.

---

# CYK-Algorithmus anwenden

> [!tip] Ablauf zur Anwendung des CYK-Algorithmus
>
> 1. **Konvertieren Sie die Grammatik in Chomsky-Normalform (CNF)**: Stellen Sie sicher, dass die gegebene Grammatik in CNF vorliegt.
> 2. **Initialisierung der Tabelle**: Erstellen Sie eine Tabelle $T$ mit der Größe $n \times n$, wobei $n$ die Länge der Eingabezeichenkette ist.
> 3. **Füllen der Diagonale**: Füllen Sie die Diagonale der Tabelle mit den Nichtterminalen, die die entsprechenden Terminale ableiten.
> 4. **Füllen der restlichen Tabelle**: Verwenden Sie die Produktionsregeln, um die restlichen Zellen der Tabelle zu füllen. Kombinieren Sie die Einträge gemäß der Produktionsregeln.
> 5. **Überprüfung**: Überprüfen Sie, ob das Startsymbol in der oberen rechten Ecke der Tabelle enthalten ist. Wenn ja, gehört das Wort zur Sprache.

## Beispiel zur Anwendung des CYK-Algorithmus auf $w_1 = \$\#\$\#\#$ [[FSK-ÜB-6#FSK6-2 CYK-Algorithmus (2 Punkte)#ii) $w_2 = $ $ $ $]]

> [!note] Aufgabenstellung
> Sei $G$ die Grammatik $({A_1, A_2, A_3, A_4, A_5}, \{\$, \#\}, P, A_1)$ mit
>
> $$
> \begin{aligned}
> P = \{&A_1 \rightarrow A_3 A_4 \mid A_3 A_2, \\
> &A_2 \rightarrow A_2 A_3 \mid A_4 A_4, \\
> &A_3 \rightarrow \$, \\
> &A_4 \rightarrow \# \mid A_3 A_4, \\
> &A_5 \rightarrow A_4 A_4 \mid \# \}
> \end{aligned}
> $$

### ii) $w_2 = \$\$\$\#\#$

**Gegebene Grammatik $G$:**

$$
\begin{aligned}
P = \{ & A_1 \rightarrow A_3 A_4 \mid A_3 A_2, \\
       & A_2 \rightarrow A_2 A_3 \mid A_4 A_4, \\
       & A_3 \rightarrow \$, \\
       & A_4 \rightarrow \# \mid A_3 A_4, \\
       & A_5 \rightarrow A_4 A_4 \mid \# \}
\end{aligned}
$$

**Eingabewort:** $w_2 = \$\$\$\#\#$

**Schritt 1: Initialisierung der Tabelle**

$$
\begin{array}{|c|c|c|c|c|}
\hline
1 & 2 & 3 & 4 & 5 \\
\hline
\$ & \$ & \$ & \# & \# \\
\hline
A_3 & A_3 & A_3 & A_4, A_5 & A_4, A_5 \\
\hline
\end{array}
$$

**Schritt 2: Rekursion**

| $V_{i,j}$ |          1          |          2          |          3          |       4        |       5        |
| :-------: | :-----------------: | :-----------------: | :-----------------: | :------------: | :------------: |
|     1     |        $A_3$        |        $A_3$        |        $A_3$        | $A_{4}, A_{5}$ | $A_{4}, A_{5}$ |
|     2     |                     |                     |    $A_{1},A_{4}$    | $A_{2},A_{5}$  |       -        |
|     3     |                     |    $A_{1},A_{4}$    | $A_{1},A_{2},A_{5}$ |       -        |       -        |
|     4     |    $A_{1},A_{4}$    | $A_{1},A_{2},A_{5}$ |          -          |       -        |       -        |
|     5     | $A_{1},A_{2},A_{5}$ |          -          |          -          |       -        |       -        |

**Zeile 2:**

- $V_{1,2}$ = $(V_{1,1} \times V_{2,1}) = A_{3}A_{3} \Longrightarrow \emptyset$
- $V_{2,2}$ = $(V_{2,1} \times V_{3,1}) = A_{3}A_{3} \Longrightarrow \emptyset$
- $V_{3,2}$ = $(V_{3,1} \times V_{4,1}) = A_{3}A_{4},A_{3}A_{5} \overset{A_{3}A_{4}}{\Longrightarrow} A_{1},A_{4}$
- $V_{4,2}$ = $(V_{4,1} \times V_{5,1}) = A_{4}A_{4},A_{4}A_{5},A_{5}A_{4},A_{5}A_{5} \overset{A_{4}A_{4}}{\Longrightarrow} A_{2},A_{5}$

**Zeile 3:**

- $V_{1,3} = \emptyset$

  - $V_{1,1}\times V_{2,2} = A_{3}\times \emptyset \Longrightarrow \emptyset$
  - $V_{1,2}\times V_{3,2} = \emptyset \times A_{3} \Longrightarrow \emptyset$

- $V_{2,3} = A_{1},A_{4}$

  - $V_{2,1}\times V_{3,2} = A_{3}\times A_{1},A_{4}  = A_{3}A_{1},A_{3}A_{4} \overset{A_{3}A_{4}}{\Longrightarrow} A_{1},A_{4}$
  - $V_{4,1}\times V_{2,2} = A_{4}A_{5}\times \emptyset   \Longrightarrow \emptyset$

- $V_{3,3} = A_{1},A_{2},A_{5}$
  - $V_{3,1}\times V_{4,2} = A_{3}\times A_{2},A_{5}  = A_{3}A_{2},A_{3}A_{5} \overset{A_{3}A_{2}}{\Longrightarrow} A_{1}$
  - $V_{5,1}\times V_{3,2} = A_{4}A_{5}\times A_{1},A_{4}  = A_{4}A_{1},A_{4}A_{4},A_{5}A_{1},A_{5}A_{4} \overset{A_{4}A_{4}}{\Longrightarrow} A_{2},A_{5}$

**Zeile 4:**

- $V_{1,4} = A_{1},A_{4}$

  - $V_{1,1}\times V_{2,3} = A_{3}\times A_{1},A_{4} = A_{3}A_{1},A_{3}A_{4} \overset{A_{3}A_{4}}{\Longrightarrow} A_{1},A_{4}$
  - $V_{1,2}\times V_{3,2} = \emptyset \times A_{1},A_{4} \Longrightarrow \emptyset$
  - $V_{1,3}\times V_{4,2} = \emptyset \times A_{4},A_{5} \Longrightarrow \emptyset$

- $V_{2,4} = A_{1},A_{2},A_{5}$
  - $V_{2,1}\times V_{3,3} = A_{3}\times A_{1},A_{2},A_{5} = A_{3}A_{1},A_{3}A_{2},A_{3}A_{5} \overset{A_{3}A_{2}}{\Longrightarrow} A_{1}$
  - $V_{2,2}\times V_{4,2} = \emptyset \times A_{2},A_{5} \Longrightarrow \emptyset$
  - $V_{2,3}\times V_{5,1} = A_{1},A_{4}\times A_{4},A_{5} = A_{1}A_{4},A_{1}A_{5},A_{4}A_{4},A_{4}A_{5} \overset{A_{4}A_{4}}{\Longrightarrow} A_{2},A_{5}$

**Zeile 5:**

- $V_{1,5} = A_{1},A_{2},A_{5}$
  - $V_{1,1}\times V_{2,4} = A_{3}\times A_{1},A_{2},A_{5} = A_{3}A_{1},A_{3}A_{2},A_{3}A_{5} \overset{A_{3}A_{2}}{\Longrightarrow} A_{1}$
  - $V_{1,2}\times V_{3,3} = \emptyset \times A_{1},A_{2},A_{5} \Longrightarrow \emptyset$
  - $V_{1,3}\times V_{4,2} = \emptyset \times A_{2},A_{5} \Longrightarrow \emptyset$
  - $V_{1,4}\times V_{5,1} = A_{1},A_{4}\times A_{4},A_{5} = A_{1}A_{4},A_{1}A_{5},A_{4}A_{4},A_{4},A_{5} \overset{A_{4}A_{4}}{\Longrightarrow} A_{2},A_{5}$

**Fazit:**

- Das Wort $w_1 = \$\#\$\#\#$ ist in $L(G)$, da Startsymbol $A_{1} \in V_{1,5}$

---

## Algorithmus zur Worterkennung in einer kontextfreien Grammatik

### Eingabe

- Kontextfreie Grammatik $G = (V, \Sigma, P, S)$ in CNF
- Wort $w = a_1, …, a_n \in \Sigma^*$

### Ausgabe

- Ja, wenn $w \in L(G)$
- Nein, wenn $w \notin L(G)$

### Beginn

- Für $i = 1$ bis $n$ tue
  - $V_{i} = \{ A \in V \mid A \rightarrow a_i \in P \}$
- Ende
- Für $j = 2$ bis $n$ tue
  - Für $i = 1$ bis $n + 1 - j$ tue
    - Für $k = 1$ bis $j - 1$ tue
      - $V_{i,j} = V_{i,j} \cup \{ A \in V \mid A \rightarrow BC \in P, B \in V_{i,k}, C \in V_{i+k,j-k} \}$
    - Ende
  - Ende
- Ende
- Wenn $S \in V_{1,n}$ dann Rückgabe Ja;
- Sonst Rückgabe Nein;

### Ende

# Fazit

Der CYK-Algorithmus ist ein effizienter Parsing-Algorithmus für kontextfreie Grammatiken in Chomsky-Normalform. Durch die dynamische Programmierung kann er in $O(n^3 \cdot |G|)$-Zeit überprüft werden, ob eine Zeichenkette zu einer gegebenen kontextfreien Sprache gehört, wobei $n$ die Länge der Zeichenkette und $|G|$ die Anzahl der Produktionsregeln der Grammatik ist.

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
