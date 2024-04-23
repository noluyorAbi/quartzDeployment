---
tags:
  - 4semester
  - Übungsblatt
  - FSK
  - informatik
fach: "[[FSK]]"
Thema:
date created: Tuesday, 23. April 2024, 11:29
date modified: Tuesday, 23. April 2024, 14:28
---

# FSK1-1 Operationen auf formalen Sprachen (2 Punkte)

>[!note]
>
>Beweisen oder widerlegen Sie jede der folgenden Aussagen:

## a)
Seien $L_1$ und $L_2$ formale Sprachen über dem Alphabet $\Sigma = \{a, b\}$, sodass alle Wörter in $L_1$ eine gerade Anzahl von $a$'s haben und alle Wörter in $L_2$ eine gerade Anzahl von $b$'s haben. Dann haben alle Wörter in $L_1 \cap L_2$ eine gerade Anzahl von $a$'s und eine gerade Anzahl von $b$'s.

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

## b)
Sei die formale Sprache $L$ definiert als $L = \{ w \in \{a, b\}^* | \#_a(w) \leq \#_b(w) \}$. Dann gilt $L \cup \{b\}^* = L$.

**Z.Z.:** Anzahl a's in w kleiner gleich Anzahl b's dann folgt, dass $L \cup \{b\}^{*}=L$

**Beweis:**
- Ein Wort $w$ ist nur in der Sprache $L$ wenn es mehr oder gleich viele b's wie a's hat $\#_a(w) \leq \#_b(w)$
- $L \cup \{b\}^{*}= L$ ist die Vereinigung von $L$ mit allen möglichen Wörtern aus $\{b\}$ inkl. dem leeren Wort $\varepsilon$ die Anzahl von b's ist hier einfach nur die Länge des Wortes $\{\varepsilon,b,bb,bbb,bbb,…,bbbbbbbb.. \}$
- Dies erfüllt jedoch trivialerweise die Definition der Sprache $L$, da: $\forall w \in \{b\}^{*}:\#_a(w)=0$ und somit $\#_a(w) \leq \#_b(w)$, da 0 kleiner gleich jeder anderen positiven Zahl ist 
$$
\tag*{$\blacksquare$}
$$

## c)
Sei $\Sigma$ ein Alphabet und $k \in \mathbb{N}$. Sei $L$ die Sprache $\{ w \in \Sigma^{*} | \ |w| \leq k \}$. Dann ist $L$ eine endliche Sprache.

**Z.Z.:** Wenn man $k$ als Grenze wählt, gibt es nur endlich viele Wörter mit der Länge $k$

**Gedankengang**

## d)
Über dem Alphabet $\Sigma = \{a, b, c\}$ definieren wir die Sprache $L = \{ w \in \Sigma^* | \#_a(w) + \#_b(w) = \#_c(w) \}$, also die Sprache der Wörter, die so viele $a$'s und $b$'s wie $c$'s enthalten. Es gilt: $L^* \subseteq L$.

---

# FSK1-2 Grammatiken angeben (2 Punkte)

>[!note]
>
>Sei \( \Sigma = \{a, b\} \). Geben Sie für jede der folgenden Teilaufgaben eine Grammatik \( G_i \) als 4-Tupel an, sodass \( L(G_i) \) die Sprache \( L_i \) über \( \Sigma \) erzeugt. Verwenden Sie keine \( \varepsilon \)-Produktionen. Erläutern Sie, warum \( L(G_i) = L_i \) gilt, indem Sie die "Aufgabe" der einzelnen Variablen und Produktionen erläutern. Geben Sie außerdem jeweils den Typ Ihrer Grammatik an (mit Begründung).

## a) $L_1 = \{a, b\}^+$

## b) $L_2 = \{w \in \Sigma^* \ | \ |w| \leq 2\}$

## c) $L_3 = \{a^i b^j a^i b^i \ | \ I, j > 0\}$