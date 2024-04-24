---
tags:
  - 4semester
  - Übungsblatt
  - FSK
  - informatik
fach: "[[Uni2/Semester/4.Semester/Informatik/FSK/FSK]]"
Thema:
  - "[[Beweisen]]"
  - "[[Endliche Geometrische Reihe]]"
date created: Tuesday, 23. April 2024, 11:29
date modified: Wednesday, 24. April 2024, 02:14
---

# FSK1-1 Operationen auf formalen Sprachen (2 Punkte)

>[!note]
>
>Beweisen oder widerlegen Sie jede der folgenden Aussagen:

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
- Für ein Wort welches in $L_{1}\cap L_{2}$ ist, gilt $\forall w: w\in L_{1}\land w\in L_2$
	- Dadurch folgt, dass $w$ jeweils die Definitionen für $L_1$ und $L_2$ einhalten muss, was bedeutet, dass: $\forall w \in L_{1}\cap L_{2}: \#_a(w) =2 \land \#_b(w)=2$
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
\underset{{n=0}}{\overset{k}{\Pi}}|\Sigma|^n
$$
$\Longrightarrow$ Da es sich um eine endliche geometrische Reihe handelt ist die Behauptung, dass $L$ eine endliche Sprache ist trivialerweise korrekt.
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
##### [[Induktiver Beweis für FSK1-1d]]
---

# FSK1-2 Grammatiken angeben (2 Punkte)

>[!note]
>
>Sei $\Sigma = {a, b}$. Geben Sie für jede der folgenden Teilaufgaben eine Grammatik $G_i$ als 4-Tupel an, sodass $L(G_i)$ die Sprache $L_i$ über $\Sigma$ erzeugt. Verwenden Sie keine $\varepsilon$-Produktionen. Erläutern Sie, warum $L(G_i) = L_i$ gilt, indem Sie die "Aufgabe" der einzelnen Variablen und Produktionen erläutern. Geben Sie außerdem jeweils den Typ Ihrer Grammatik an (mit Begründung).

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
reguläre Grammatik, da sie rechtslineare Produktionen verwendet.

## b) $L_2 = \{w \in \Sigma^* \ | \ |w| \leq 2\}$

- Alphabet: $\Sigma = \{a,b\}$
- 4-Tupel Grammatikform $G = (N, \Sigma, P, S)$
- $N: \{S,A\}$
- $P: \{S \rightarrow aA \ | \ bA \ | \ \varepsilon,\  A \rightarrow a \ | \ b\}$
- $S:S$
$$
G = \{\{S,A\},\{a,b\},\{\{S \rightarrow aA \ | \ bA \ | \ \varepsilon,\  A \rightarrow a \ | \ b\},S\}
$$

## c) $L_3 = \{a^i b^j a^i b^i \ | \ I, j > 0\}$

Für die Sprache $L_3 = \{a^ib^ja^ib^j | i,j > 0\}$, benötigen wir eine kontextfreie Grammatik (CFG), da das Muster eine spezifische Reihenfolge und Anzahl von 'a's und 'b's erfordert, die gleichmäßig verteilt sind. Hier ist eine mögliche Grammatik:

- Alphabet: $\Sigma = \{a, b\}$
- 4-Tupel Grammatikform $G = (N, \Sigma, P, S)$
- $N$: $\{S, A, B, C, D\}$
- $P$:
  - $S \rightarrow aSC | aD$
  - $C \rightarrow bC | b$
  - $D \rightarrow aDB | aB$
  - $B \rightarrow bB | b$
- $S$: $S$

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

Diese Grammatik erzeugt Wörter in $L_3$, indem sie zunächst eine beliebige Anzahl von 'a's hinzufügt (durch wiederholte Anwendung von $S \rightarrow aSC$), gefolgt von einer gleichen Anzahl von 'b's (durch wiederholte Anwendung von $C \rightarrow bC$). Dann wechselt sie zum Zustand $D$, wo sie eine gleiche Anzahl von 'a's hinzufügt (durch wiederholte Anwendung von $D \rightarrow aDB$), gefolgt von einer gleichen Anzahl von 'b's zum Abschluss (durch wiederholte Anwendung von $B \rightarrow bB$).