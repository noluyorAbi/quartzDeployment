---
tags:
  - 4semester
  - Übungsblatt
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
  - "[[Beweisen]]"
  - "[[Endliche Geometrische Reihe]]"
  - "[[Grammatiken]]"
date created: Tuesday, 23. April 2024, 11:29
date modified: Tuesday, 28. May 2024, 18:31
---

# FSK1-1 Operationen auf formalen Sprachen (2 Punkte)

> [!note] Aufgabenstellung
> Beweisen oder widerlegen Sie jede der folgenden Aussagen:

## a) Seien $L_1$ und $L_2$ formale Sprachen über dem Alphabet $\Sigma = \{a, b\}$, sodass alle Wörter in $L_1$ eine gerade Anzahl von $a$'s haben und alle Wörter in $L_2$ eine gerade Anzahl von $b$'s haben. Dann haben alle Wörter in $L_1 \cap L_2$ eine gerade Anzahl von $a$'s und eine gerade Anzahl von $b$'s.

**Gedankengang:**

- Im Schnitt sind nur Wörter drin, die jeweils in $L_1$ und $L_2$ drin sind.
- D.h. es muss aus $L_1$ immer ein gerades A sein und aus $L_2$ eine gerade Anzahl an B's
- Der Schnitt kann nur für Wörter erfolgen, die in beiden Sprachen drin sind und gleich sind

**Beweis:**

- Eine gerade Zahl $n$ wird definiert durch $n = 2k$
- Sei $w$ ein Wort
- Sei $\#_a(w)$ und $\#_b(w)$ Funktionen, die die Anzahl an A's und B's im Wort $w$ darstellen
- Für alle Wörter in $L_1$ gilt laut Definition, dass diese eine gerade Anzahl von A's haben
  - $\forall w \in L_{1}: \ \#_a(w)=2k$
- Für alle Wörter in $L_2$ gilt laut Definition, dass diese eine gerade Anzahl von B's haben
  - $\forall w \in L_{2}: \ \#_b(w)=2k$
- Für ein Wort welches in $L_{1}\cap L_{2}$ ist, gilt $\forall w: w\in L_{1}\land w\in L_2$ - Dadurch folgt, dass $w$ jeweils die Definitionen für $L_1$ und $L_2$ einhalten muss, was bedeutet, dass: $\forall w \in L_{1}\cap L_{2}: \#_a(w) =2 \land \#_b(w)=2$
  $$
  \tag*{$\blacksquare$}
  $$

## b) Sei die formale Sprache $L$ definiert als $L = \{ w \in \{a, b\}^* | \#_a(w) \leq \#_b(w) \}$. Dann gilt $L \cup \{b\}^* = L$.

**Z.Z.:** Anzahl a's in w kleiner gleich Anzahl b's dann folgt, dass $L \cup \{b\}^{*}=L$

**Beweis:**

- Ein Wort $w$ ist nur in der Sprache $L$ wenn es mehr oder gleich viele b's wie a's hat $\#_a(w) \leq \#_b(w)$
- $L \cup \{b\}^{*}= L$ ist die Vereinigung von $L$ mit allen möglichen Wörtern aus $\{b\}$ inkl. dem leeren Wort $\varepsilon$ die Anzahl von b's ist hier einfach nur die Länge des Wortes $\{\varepsilon,b,bb,bbb,bbb,…,bbbbbbbb.. \}$
- Dies erfüllt jedoch trivialerweise die Definition der Sprache $L$, da: $\forall w \in \{b\}^{*}:\#_a(w)=0$ und somit $\#_a(w) \leq \#_b(w)$, da 0 kleiner gleich jeder anderen positiven Zahl ist
  $$
  \tag*{$\blacksquare$}
  $$

## c) Sei $\Sigma$ ein Alphabet und $k \in \mathbb{N}$. Sei $L$ die Sprache $\{ w \in \Sigma^{*} | \ |w| \leq k \}$. Dann ist $L$ eine endliche Sprache.

**Z.Z.:** L, die Sprache aller Wörter w über dem Alphabet Σ mit einer Länge von höchstens k, ist eine endliche Sprache

**Beweis**

- Stimmt, da $k$ eine endliche Zahl ist und definiert ist, dass $|w| \leq k$
- Es gibt für jedes Wort bis zur Länge bis $k$ also folgende mögliche Anzahlen
  $$
  |\Sigma|^{0}+|\Sigma|^{1}+|\Sigma|^{2} + \ ...\ + |\Sigma|^{k-1} + |\Sigma|^{k}
  $$
- Dies ist eine [[Endliche Geometrische Reihe]] im Stil:
  $$
  \underset{{n=0}}{\overset{k}{\sum}}|\Sigma|^n
  $$
  $\Longrightarrow$ da es sich um eine endliche geometrische Reihe handelt ist die Behauptung, dass $L$ eine endliche Sprache ist trivialerweise korrekt.
- Alphabete sind immer endlich
  $$
  \tag*{$\blacksquare$}
  $$

## d) Über dem Alphabet $\Sigma = \{a, b, c\}$ definieren wir die Sprache $L = \{ w \in \Sigma^* | \#_a(w) + \#_b(w) = \#_c(w) \}$, also die Sprache der Wörter, die so viele $a$'s und $b$'s wie $c$'s enthalten. Es gilt: $L^* \subseteq L$.

**(Z.Z.):** $L^* \subseteq L$

**Beweis:**

- Jedes Wort $w \in L$ erfüllt per Definition die Bedingung $\#_a(w) + \#_b(w) = \#_c(w)$.
- Das leere Wort $\varepsilon$ erfüllt die Bedingung trivialerweise, denn es enthält keine Buchstaben.
- Die Konkatenation zweier Wörter $w_1, w_2 \in L$ ergibt ein Wort $w = w_1w_2$, für das gilt:

$$
\begin{align*}
\#_a(w) + \#_b(w) &= (\#_a(w_1) + \#_b(w_1)) + (\#_a(w_2) + \#_b(w_2)) \\
&= \#_c(w_1) + \#_c(w_2) \\
&= \#_c(w)
\end{align*}
$$

- Da Konkatenationen assoziativ sind, erweitert sich diese Eigenschaft auf die Konkatenation beliebig vieler Wörter aus $L$.
- Folglich erfüllt jedes Wort in $L^*$, einschließlich $\varepsilon$ und beliebiger Konkatenationen von Wörtern aus $L$, die definierende Bedingung von $L$.

Daher ist $L^* \subseteq L$ bewiesen.

$$
\tag*{$\blacksquare$}
$$

### [[Induktiver Beweis für FSK1-1d]]

---

# FSK1-2 Grammatiken angeben (2 Punkte)

> [!note]
>
> Sei $\Sigma = {a, b}$. Geben Sie für jede der folgenden Teilaufgaben eine Grammatik $G_i$ als 4-Tupel an, sodass $L(G_i)$ die Sprache $L_i$ über $\Sigma$ erzeugt. Verwenden Sie keine $\varepsilon$-Produktionen. Erläutern Sie, warum $L(G_i) = L_i$ gilt, indem Sie die "Aufgabe" der einzelnen Variablen und Produktionen erläutern. Geben Sie außerdem jeweils den Typ Ihrer Grammatik an (mit Begründung).

[[Grammatiken#Kochrezept|Kochrezept]] zum Erstellen von Grammatiken

## a) $L_1 = \{a, b\}^+$

- Alphabet: $\Sigma = \{a,b\}$
- 4-Tupel Grammatikform $G = (N, \Sigma, P, S)$
- $N: \{S\}$
- $P: \{S \rightarrow aS|bS|a|b\}$ [[Grammatiken#Beispiel aus FSK-ÜB-1 FSK1-2 Grammatiken angeben (2 Punkte)|Erklärung der Schreibweise]]
- $S:S$
  $$
  G = \{S,\{a,b\},\{S \rightarrow aS|bS|a|b\},S\}
  $$
- reguläre Grammatik, da sie rechtslineare Produktionen verwendet.
- a und b produzieren und Aneinanderreihungen von a und b

## b) $L_2 = \{w \in \Sigma^* \ | \ |w| \leq 2\}$

- Alphabet: $\Sigma = \{a,b\}$
- 4-Tupel Grammatikform $G = (N, \Sigma, P, S)$
- $N: \{S,A\}$
- $P: \{S \rightarrow aA \ | \ bA \ | \ \varepsilon,\  A \rightarrow a \ | \ b\}$

> [!help] Tutorium
> Tutor sagt bei endlichen Mengen kann man es auch so schreiben wie unten, ist nur von Typ 2

- $P: \{S \rightarrow w \ | w\in L_{2} \}$
- $S:S$
  $$
  G = \{\{S,A\},\{a,b\},\{\{S \rightarrow aA \ | \ bA \ | \ \varepsilon,\  A \rightarrow a \ | \ b\},S\}
  $$

## c) $L_3 = \{a^i b^j a^j b^i \ | \ I, j > 0\}$

Für die Sprache $L_3 = \{a^ib^ja^jb^i | i,j > 0\}$, benötigen wir eine kontextfreie Grammatik (CFG), da das Muster eine spezifische Reihenfolge und Anzahl von 'a's und 'b's erfordert, die gleichmäßig verteilt sind. Hier ist eine mögliche Grammatik:

- Alphabet: $\Sigma = \{a, b\}$
- 4-Tupel Grammatikform $G = (N, \Sigma, P, S)$
- $N$: $\{S, A, B, C, D\}$
- $P$:
  - $S \rightarrow aSC | aD$
  - $C \rightarrow bC | b$
  - $D \rightarrow aDB | aB$
  - $B \rightarrow bB | b$
- $S$: $S$

> [!help] Tutoriumslösung
>
> - $P$:
>   - $S \rightarrow aSb | aXb$
>   - $X \rightarrow bXa | bXa$
>   - Grammatik Typ 2 linke seite nur Variablen
>   - nicht Typ 3, da S auf sich selbst refernziert z.B.

Die Grammatik wird dann folgendermaßen als 4-Tupel repräsentiert:

$$
\begin{align*}
G = \{ & \{S, A, B, C, D\}, \\
       & \{a, b\}, \\
       & \{S \rightarrow aSC \mid aD, \\
       & \phantom{\{} C \rightarrow bC \mid b, \\
       & \phantom{\{} D \rightarrow aDB \mid aB, \\
       & \phantom{\{} B \rightarrow bB \mid b\}, \\
       & S \}
\end{align*}
$$

Diese Grammatik erzeugt Wörter in $L_3$, indem sie zunächst eine beliebige Anzahl von 'a's hinzufügt (durch wiederholte Anwendung von $S \rightarrow aSC$), gefolgt von einer gleichen Anzahl von 'b's (durch wiederholte Anwendung von $C \rightarrow bC$). Dann wechselt sie zum Zustand $D$, wo sie eine gleiche Anzahl von 'a's hinzufügt (durch wiederholte Anwendung von $D \rightarrow aDB$), gefolgt von einer gleichen Anzahl von 'b's zum Abschluss (durch wiederholte Anwendung von $B \rightarrow bB$)

---

# FSK1-3 Klammerausdrücke

Die Grammatik $G$ für Klammerausdrücke wird definiert durch das 4-Tupel $G = (\{S, A, B\}, \{ (, ) \}, P, S)$, wobei die Produktionsregeln $P$ wie folgt lauten:

- $P = \{S \rightarrow (S), S \rightarrow [S], S \rightarrow A, S \rightarrow B, A \rightarrow (), A \rightarrow [], B \rightarrow S, B \rightarrow BB\}$

## Fragen und Antworten

### a) Von welchem Typ ist die Grammatik $G$?

Die Grammatik $G$ ist eine **kontextfreie Grammatik (CFG) Typ 2**, weil jede Produktionsregel ein einzelnes Nichtterminalsymbol auf der linken Seite hat, das durch eine Kette von Terminalen und/oder Nichtterminalen auf der rechten Seite ersetzt wird.

### b) Stellen Sie für folgende Zeichenketten fest, ob sie Wörter in $L(G)$ sind. Begründen Sie Ihre Antwort. Bei Wörtern die in $L(G)$ sind, geben Sie eine Linksableitung, eine Rechtsableitung und einen Syntaxbaum an.

- i) $()[[()]]$
  $$
  Linksableitung:
  $$
  $$
  \begin{align*}
  S &\rightarrow B \\
  &\rightarrow BB \\
  &\rightarrow (S)B \\
  &\rightarrow ()B \\
  &\rightarrow ()[S] \\
  &\rightarrow ()[[S]] \\
  &\rightarrow ()[[(S)]] \\
  &\rightarrow ()[[()]]
  \end{align*}
  $$

$$
Rechtsableitung:
$$

$$
\begin{align*}
S &\rightarrow B \\
&\rightarrow BB \\
&\rightarrow BS \\
&\rightarrow B[S] \\
&\rightarrow B[[S]] \\
&\rightarrow B[[A]] \\
&\rightarrow B[[()]] \\
&\rightarrow ()[[()]]
\end{align*}
$$

> [!warning] Synatxbaum fehlt

- ii) $[[BA]]$

  - enthält Variablen

- iii) $(][[]])$

  - ] alleine kann nicht erzeugt werden

- iv) $(([[]]]))$
  - ein ] zu viel bei eckigen klammern

### c) Geben Sie vier verschiedene Wörter aus $L(G)$ an, die nicht in Teilaufgabe b) vorkommen

- $( \ ( \ ) \ )$
- $( \ [ \ ( \ ) \ ] \ )$
- $( \ )$
- $\ [ \ ] \ ( \ ) \ [ \ ]$

### d) Vier verschiedene Wörter aus $\{ [, ], (, ) \}^*$, die nicht in $L(G)$ sind

Beispiele für Wörter, die nicht in $L(G)$ liegen:

- (
- )
- [
- ]

Diese Wörter sind nicht in $L(G)$, da sie die korrespondierenden Klammern nicht richtig schließen oder öffnen.

### e) Beschreibung von $L(G)$

Die Sprache $L(G)$ besteht aus allen korrekt geschachtelten Klammerausdrücken, die entweder runde $(, )$ oder eckige $[, ]$ Klammern nutzen können. Ein korrekter Ausdruck muss jede geöffnete Klammer mit der entsprechenden schließenden Klammer der gleichen Form schließen.

---

# FSK1-4 Spracheigenschaft per Induktion beweisen (0 Punkte)

> [!note] Aufgabenstellung
> Die Grammatik $G$ sei definiert durch $G = (\{A\}, \{a, b\}, \{A \rightarrow AA, A \rightarrow aAbb, A \rightarrow bab\}, A)$. Beweisen Sie, dass gilt:
>
> $$
> w \in L(G) \Rightarrow \#_b(w) = 2 \cdot \#_a(w)
> $$
>
> **Hinweis:** Beweisen Sie zunächst die allgemeinere Aussage, dass für jede Satzform $u$ gilt: Wenn $u$ von $G$ in $n$ Schritten erzeugt wird (d.h. $A \Rightarrow^n u$), dann ist $\#_b(u) = 2 \cdot \#_a(u)$. Verwenden Sie vollständige Induktion über $n$.

## Induktionsbeweis für die Spracheigenschaft von G

Um zu zeigen, dass für jede Satzform $u$ gilt: Wenn $u$ in $n$ Schritten von $G$ erzeugt wird (d.h. $A \Rightarrow^n u$), dann ist $\#_b(u) = 2 \cdot \#_a(u)$, verwenden wir eine vollständige Induktion über $n$.

**Induktionsanfang (IA):** Für $n = 0$ gibt es nur die Satzform $A$, und diese enthält keine $a$'s oder $b$'s, also ist $\#_b(u) = 0 = 2 \cdot 0 = 2 \cdot \#_a(u)$.

**Induktionsvoraussetzung (IV):** Angenommen, die Aussage gilt für eine beliebige Satzform $u$, die in $n$ Schritten von $G$ erzeugt wird, d.h. $\#_b(u) = 2 \cdot \#_a(u)$.

**Induktionsschritt (IS):** Wir nehmen an, dass $u$ in $n+1$ Schritten von $G$ erzeugt wird. Dann muss $u$ eine Ableitung der Form $A \Rightarrow v$ haben, wobei $v$ eine Satzform ist, die in $n$ oder weniger Schritten erzeugt wird. Da $v$ in $n$ oder weniger Schritten erzeugt wird, gilt nach Induktionsvoraussetzung $\#_b(v) = 2 \cdot \#_a(v)$.

Nun betrachten wir die Ableitung $A \Rightarrow v$. Es gibt drei mögliche Regeln, die angewendet werden könnten:

1. $A \rightarrow AA$
2. $A \rightarrow aAbb$
3. $A \rightarrow bab$

Für jeden dieser Fälle betrachten wir, wie viele $a$'s und $b$'s in $v$ hinzukommen:

1. Wenn die Regel $A \rightarrow AA$ angewendet wird, dann wird die Anzahl der $a$'s und $b$'s in $v$ verdoppelt, also bleibt das Verhältnis $\frac{\#_b(v)}{\#_a(v)} = 2$.

2. Wenn die Regel $A \rightarrow aAbb$ angewendet wird, dann wird ein $a$ und zwei $b$'s hinzugefügt, also wird das Verhältnis $\frac{\#_b(v) + 2}{\#_a(v) + 1} = \frac{2 \cdot \#_a(v) + 2}{\#_a(v) + 1} = 2$.

3. Wenn die Regel $A \rightarrow bab$ angewendet wird, dann wird ein $b$ und zwei $a$'s hinzugefügt, also wird das Verhältnis $\frac{\#_b(v) + 1}{\#_a(v) + 2} = \frac{2 \cdot \#_a(v) + 1}{\#_a(v) + 2} = 2$.

In jedem Fall bleibt das Verhältnis $\frac{\#_b(v)}{\#_a(v)}$ unverändert, was bedeutet, dass nach $n+1$ Schritten immer noch $\#_b(u) = 2 \cdot \#_a(u)$ gilt.

Damit haben wir die Aussage für alle Satzformen bewiesen, die von $G$ erzeugt werden können, und der Induktionsbeweis ist abgeschlossen.

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
