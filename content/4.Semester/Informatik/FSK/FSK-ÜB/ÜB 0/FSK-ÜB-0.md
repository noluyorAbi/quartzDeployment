---
tags:
  - 4semester
  - FSK
  - Übungsblatt
  - informatik
fach:
date created: Wednesday, 17. April 2024, 11:07
date modified: Thursday, 25. April 2024, 00:34
Thema:
  - "[[Beweisen]]"
  - "[[Sprachen]]"
  - "[[Grundlegende Operationen auf formalen Sprachen]]"
  - "[[Induktion]]"
---

# Wiederholen:

- [[FSK-ÜB-0#FSK0-3 Äquivalenzrelationen|Aufgabe 0-3]]

# FSKO-1 Fundamentale Beweisstrategien

> [!note] Aufgabenstellung
> In dieser Aufgabe diskutieren wir fundamentale Beweisstrategien. Diese Strategien sollten aus anderen Kursen bekannt sein, aber da FSK sehr beweislastig ist, wiederholen wir sie hier.

## a) Die folgende Tabelle fasst zusammen, wie man mit Aussagen, die bestimmte logische Operationen enthalten, umgeht.

| Formel            | Um eine Aussage dieser Form zu beweisen…                  | Wenn eine Aussage dieser Form angenommen wird…                                                                   |
| ----------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| $P \land Q$       | beweise sowohl $P$ also auch $Q$                          | nimm $P$ und $Q$ an                                                                                              |
| $P \lor Q$        | beweise entweder $P$ oder $Q$                             | beweise die gewünschte Aussage sowohl under der Annahme $P$ also auch under der Annahme $Q$ (Fallunterscheidung) |
| $P \Rightarrow Q$ | beweise, dass under der Annahme $P$ $Q$ folgt             | beweise $P$ und nimm dann $Q$ an                                                                                 |
| $\neg P$          | beweise, dass under der Annahme $P$ ein Widerspruch folgt | beweise $P$, um einen Widerspruch herzuleiten                                                                    |
| $\forall x, P(x)$ | beweise, dass $P(a)$ für ein beliebiges $a$ gilt          | nimm $P(a)$ für jedes konkrete $a$ an                                                                            |
| $\exists x, P(x)$ | gib ein konkretes $a$ an und beweise $P(a)$               | nimm ein beliebiges $a$ an, für das $P(a)$ gilt                                                                  |

Die Implikation $P \Leftrightarrow Q$ („genau dann wenn Q" oder „gdw. Q") ist definiert also $(P \Rightarrow Q) \land (Q \Rightarrow P)$.

Außerdem kann man, unabhängig von der zu beweisenden Aussage, immer folgende Regeln anwenden:

- Widerspruchsbeweis: um $P$ zu beweisen nimm an, dass $\neg P$ gilt, und leite daraus einen Widerspruch ab.
- Satz vom ausgeschlossenen Dritten: für jede beliebige Aussage $P$ nimm $P \lor \neg P$ an.

Häufig nützlich sind auch folgende Regeln:

$$
\begin{aligned}
\neg(A \land B) &\Leftrightarrow \neg A \lor \neg B \\
\neg(A \lor B) &\Leftrightarrow \neg A \land \neg B \\
\neg\forall x, P(x) &\Leftrightarrow \exists x, \neg P(x) \\
\neg\exists x, P(x) &\Leftrightarrow \forall x, \neg P(x) \\
A \land (B \lor C) &\Leftrightarrow (A \land B) \lor (A \land C) \\
A \lor (B \land C) &\Leftrightarrow (A \lor B) \land (A \lor C) \\
(\forall x, P(x)) \land (\forall x, Q(x)) &\Leftrightarrow \forall x, (P(x) \land Q(x)) \\
(\exists x, P(x)) \lor (\exists x, Q(x)) &\Leftrightarrow \exists x, (P(x) \lor Q(x)) \\
\neg\neg A &\Leftrightarrow A
\end{aligned}
$$

### i) Zeigen Sie: $(\forall n, \exists k, k > n) \Leftrightarrow (\neg\exists n, \forall k, n \geq k)$

Linke Seite: trivial wahr für $\mathbb R$ und $\mathbb N$
Rechte Seite: $(\neg\exists n, \forall k, n \geq k)$ = ($\forall n,\exists k, n \gt k$)
Gesamtaussage : $(\forall n, \exists k, k > n) \Leftrightarrow (\forall n, \exists k, k > n)$

> [!success]- Erklärung für Dummies
>
> ### i) Zeigen Sie: $(\forall n, \exists k, k > n) \Leftrightarrow (\neg\exists n, \forall k, n \geq k)$
>
> Stellen Sie sich die Menge aller natürlichen Zahlen vor, die Sie auf einer endlosen Linie anordnen können, wobei jede Zahl einen festen Platz hat, beginnend mit der kleinsten, der 1. Die natürlichen Zahlen hören nie auf; es gibt immer eine Zahl, die um eins größer ist also die vorherige.
>
> #### Linke Seite: $(\forall n, \exists k, k > n)$
>
> Diese Aussage ist wie ein Spiel, bei dem Sie eine beliebige Zahl nennen, und ich muss eine größere Zahl finden. Ganz gleich, welche Zahl Sie auch wählen, ich kann immer gewinnen, indem ich einfach die nächstgrößere Zahl nenne. In der Welt der Zahlen, equal ob wir über reelle Zahlen (alle Zahlen auf dem Zahlenstrahl) oder nur über natürliche Zahlen (die Zahlen, die Sie zum Zählen verwenden) sprechen, gibt es immer eine größere Zahl also die, die Sie gerade genannt haben. Dies ist eine grundlegende Eigenschaft der Zahlen, die wir also "unendlich" bezeichnen. In diesem Sinne ist die linke Seite trivial wahr.
>
> #### Rechte Seite: $(\neg\exists n, \forall k, n \geq k)$
>
> Diese Aussage ist ein bisschen wie ein umgekehrtes Spiel. Hier behaupten wir, dass es keine Zahl gibt, die größer oder gleich jeder anderen Zahl ist. Wenn Sie versuchen würden, eine solche Zahl zu finden, würden Sie scheitern, denn equal welche Zahl Sie auch wählen, ich kann immer eine größere Zahl finden. Diese Aussage ist wie ein Beweis dafür, dass es keine "größte" Zahl gibt – eine Tatsache, die auch wahr ist.
>
> #### Gesamtaussage: $(\forall n, \exists k, k > n) \Leftrightarrow (\forall n, \exists k, k > n)$
>
> Wenn wir nun beide Seiten betrachten, können wir sehen, dass sie im Grunde dasselbe sagen, nur aus verschiedenen Blickwinkeln. Auf der linken Seite sagen wir, dass es immer eine größere Zahl gibt, und auf der rechten Seite sagen wir, dass es keine größte Zahl gibt. Das klingt vielleicht widersprüchlich, aber in der Welt der Zahlen ergänzen sich diese beiden Aussagen. Daher können wir schließen, dass die Gesamtaussage wahr ist.
>
> In einfachen Worten: Stellen Sie sich eine Reihe von Personen in einer Warteschlange vor, die sich endlos weit erstreckt. Die linke Seite der Gleichung sagt, dass es immer eine Person gibt, die weiter hinten in der Schlange steht also Sie, equal wo Sie stehen. Die rechte Seite sagt aus, dass es unmöglich ist, jemanden zu finden, der weiter vorne steht also jeder andere, weil die Schlange niemals endet. Beide Situationen bestätigen, dass die Schlange unendlich lang ist.

> [!success]- Erklärung
>
> ### i) Zeigen Sie: $(\forall n, \exists k, k > n) \Leftrightarrow (\neg\exists n, \forall k, n \geq k)$
>
> Die linke Seite der Äquivalenz, $(\forall n, \exists k, k > n)$, ist eine direkte Folge der Eigenschaft, dass die natürlichen Zahlen unendlich sind. Für jede natürliche Zahl $ n \) können wir eine größere natürliche Zahl $ k \) finden, indem wir einfach $ k = n + 1 \) wählen. Dies funktioniert auch im Bereich der reellen Zahlen.
>
> Die rechte Seite, $(\neg\exists n, \forall k, n \geq k)$, beinhaltet eine Verneinung und eine universelle Aussage. Die direkte Übersetzung dieser mathematischen Logik in Worte sagt, dass es keine Zahl $ n \) gibt, die größer oder gleich jeder anderen Zahl $ k \) ist. Das ist gleichbedeutend damit zu sagen, dass für jede gewählte Zahl $ n \) immer eine andere Zahl $ k \) existieren wird, die größer ist, da keine Zahl die Eigenschaft erfüllen kann, die größte zu sein. In der Welt der natürlichen Zahlen bedeutet das, dass es keine größte natürliche Zahl gibt.
>
> Die Umformung von der rechten zur linken Seite und umgekehrt kann wie folgt mathematisch gerechtfertigt werden:
>
> 1.  Beginnen wir mit der rechten Seite, $(\neg\exists n, \forall k, n \geq k)$. Die Verneinung einer Existenzaussage kann umgeformt werden in eine universelle Aussage mit einer verneinten Bedingung: $(\forall n, \neg(\forall k, n \geq k))$.
> 2.  Die Verneinung der Bedingung $(\forall k, n \geq k)$ wird zu $(\exists k, \neg(n \geq k))$. Nach den Gesetzen der Logik ist $\neg(n \geq k)$ äquivalent zu $(n < k)$.
> 3.  Somit erhalten wir die äquivalente Aussage $(\forall n, \exists k, n < k)$, welche identisch ist mit der linken Seite der Äquivalenz.
>
> Diese Schritte zeigen, dass die linke und die rechte Seite der ursprünglichen Gleichung tatsächlich das Gleiche ausdrücken. Die Unendlichkeit der natürlichen Zahlen (oder reellen Zahlen) bedeutet, dass es immer eine Zahl gibt, die größer ist also eine andere gegebene Zahl, und es kann nie eine Zahl geben, die größer oder gleich allen anderen Zahlen ist.

### ii) Gilt die Aussage $\forall n, \exists k, k > n$

#### - für $n,k \in \mathbb{N}$?

Ja, gilt da man für jedes $n$ das $k$ also $n+1$ wählen kann und $n<n+1$ gilt. Somit ist die Aussage wahr.

#### - für $n,k \in \mathbb{R} \cup \{\infty\}$, wobei $\infty > x$ für alle $x \in \mathbb{R}$?

**Fall n = $\infty$:**

- Es gibt kein k was grösser ist also n, da $\infty$ definitionsgemäß ($\infty > x$ für alle $x \in \mathbb{R}$) größer ist also alle reellen Zahlen
  $\Longrightarrow$ Für diesen Fall gibt es kein k > n, weshalb die Aussage _nicht stimmt._

$$
\tag*{$\blacksquare$}
$$

### iii) Zeigen Sie: Es gibt unendlich viele Primzahlen. [[Satz des Euklids]]

_ZZ_: Es gibt unendlich viele Primzahlen

**Beweis per Widerspruch:**

_Beweis:_

- _Angenommen_ es gäbe nur endlich viele Primzahlen (Genauer: n Primzahlen)
- Bezeichne diese mit $p_1,p_2,…,p_{n-1},p_n$
- Betrachte nun die Zahl $q = p_1,p_2,…,p_{n-1},p_{n} +1 = \overset{n}{\underset{i=1}{\Pi}} p_{i}+1$
- $q$ ist nun ebenfalls eine Primzahl (**Erklärung:** _Da alle nicht Primzahlen durch die Primfaktorzerlegung darstellbar sind, aber q nicht, da q durch Primzahlen und einem +1 am Ende dargestellt wird. Das +1 macht also q selbst zu einer Primzahl_)
- Dies ist jedoch ein Widerspruch in der Annahme, dass es nur die Primzahlen $p_1,p_2,…,p_{n-1},p_n$ gibt.

#### Additum aus der Übung:

- Satz des Ausschlusses $A \lor \neg A$

$$
\tag*{$\blacksquare$}
$$

## b) Die Gleichheit von Mengen ist wie folgt definiert:

> [!note] Aufgabenstellung
>
> $$
> S \subseteq T \text{ g.d.w. } \forall x, x \in S \implies x \in T
> $$
>
> $$
> S = T \text{ g.d.w. } S \subseteq T \land T \subseteq S
> $$
>
> Zeigen sie:
>
> i) Für alle Mengen $S$ und $T$ gilt: $S = T$ g.d.w. $\forall x, x \in S \Leftrightarrow x \in T$.
>
> ii) Für alle Sprachen $A, B, C$ über einem Alphabet $\Sigma$ gilt: $A \cdot (B \cup C) = A \cdot B \cup A \cdot C$.
>
> iii) $\{ n \in \mathbb{N} | n$ ist prim und $n \geq 3 \} = \{ n \in \mathbb{N} | n$ ist prim und ungerade $\}$.

### i) Für alle Mengen $S$ und $T$ gilt: $S = T$ g.d.w. $\forall x, x \in S \Leftrightarrow x \in T$.

_ZZ_: S = T unter der Annahme $\forall x, x \in S \Leftrightarrow x \in T$

_Beweis:_

- 1.Schritt: Zeige $S \subseteq T$
  - $\forall x \ gilt \ wenn \ x \ in \ S \ ist, \ ist \ es \ auch \ in \ T$
    $\Longrightarrow$ $S \subseteq T$
- 2. Schritt: Zeige $T \subseteq S$
  - $\forall x \ gilt \ wenn \ x \ in \ T \ ist, \ ist \ es \ auch \ in \ S$
    $\Longrightarrow$ $T \subseteq S$

$\Longrightarrow$ Aus der Definition ergibt sich $S = T \text{ g.d.w. } S \subseteq T \land T \subseteq S$ dies ist hier gegeben also ist der Beweis abgeschlossen

$$
\tag*{$\blacksquare$}
$$

### ii) Für alle [[Sprachen]] $A, B, C$ über einem Alphabet $\Sigma$ gilt: $A \cdot (B \cup C) = A \cdot B \cup A \cdot C$.

Konkatenation Def.: $L_1L_{2}= \{w_1w_{2} | w_{1} \in L_{1}, w_{2}\in L_2\}$

_ZZ:_ $A \cdot (B \cup C) = A \cdot B \cup A \cdot C$

_Definitionen_([[Grundlegende Operationen auf formalen Sprachen]]):

1. **Konkatenation $(A \cdot B)$**: Die Sprache, die aus allen möglichen Kombinationen von Strings besteht, wobei ein String aus $A$ $direkt gefolgt von einem String aus $B$$ ist. Das heißt, für jedes $(x \in A)$ und jedes $(y \in B)$, gehört der String $(x \cdot y)$ zu $(A \cdot B)$.

2. **Vereinigung $(B \cup C)$**: Die Sprache, die alle Strings enthält, die in $(B)$ oder $(C)$ sind. Ein String $(y)$ gehört zu $(B \cup C)$, wenn $(y \in B)$ oder $(y \in C)$.

_Beweis:_

- **Teil 1:**
  - Sei $w$ ein beliebiges Element aus $A \cdot B \cup C$
  - Nach Definition der Konkatenation gibt es einen String $x \in A$ und einen String $y \in (B \cup C)$, sodass $w = x \cdot y$
  - Da $y \in (B \cup C)$, ist $y$ entweder in $B$ oder in $C$
    - wenn $y$ in $B$ bedeutet es also für $w$ folgendes: $w = x \cdot y \in A \cdot B$
    - wenn $y$ in $C$ bedeutet es also für $w$ folgendes: $w = x \cdot y \in A \cdot C$
      $\Longrightarrow$ Jedes Element $w$ was in $A \cdot (B \cup C)$ ist also auch in $A \cdot B \  \cup  A \cdot C$ enthalten
      $\Longrightarrow$ Daraus lässt sich herleiten, dass: $A \cdot (B \cup C) \subseteq (A \cdot B \  \cup  A \cdot C)$
- **Teil 2:**
  - Sei $w$ ein beliebiges Element aus $A \cdot B \  \cup  A \cdot C$
  - Das bedeutet $w$ ist entweder in $A \cdot B$ oder $A \cdot C$
    - wenn $w \in A \cdot B$, dann gibt es einen String $x \in A$ und $y \in B$, sodass $w = x \cdot y$
    - wenn $w \in A \cdot C$, dann gibt es einen String $x \in A$ und $y \in C$, sodass $w = x \cdot y$
  - In beiden Fällen ist $y \in B$ oder $y \in C$, also $y \in (B \cup C)$
  - Daher gilt $w = x \cdot y \in A \cdot (B \cup C)$
    $\Longrightarrow$ Daher schließt sich $(A \cdot B \  \cup  A \cdot C) \subseteq  (A \cdot (B \cup C))$

_Schlussfolgerung:_ $A \cdot (B \cup C) = A \cdot B \cup A \cdot C$

$$
\tag*{$\blacksquare$}
$$

<!--linter-disable-->

### iii) $\{ n \in \mathbb{N} | n$ ist prim und $n \geq 3 \} = \{ n \in \mathbb{N} | n$ ist prim und ungerade $\}$

<!-- linter-enable -->

**Z.Z.:** Alle Primzahlen größer gleich 3 sind ungerade

**Definitionen:**

$$
\begin{aligned}
&1.\ \text{Sei} \  d(n) \text{ definiert als die Teileranzahlfunktion } \ d(n) := |\{d\in \mathbb{N} : d \ | \ d \}|\\
&2. \ \text{So wird}  \ \mathbb{P} \ \text{Primzahlen wie folgt definiert:} \ \mathbb{P} = \{n \in \mathbb{N} \ \backslash \ \{1\} \ | \ d(n) = 2 \}   \\
&3. \text{ Definition gerade Zahlen:} \ 2k \\
\end{aligned}
$$

**Beweis:**
_Beweis durch Widerspruch_

- Angenommen, $𝑥$ ist eine gerade Primzahl größer als 2
- Dann gilt: $\exists k \in \mathbb{N}: 2k = x$
- Für die gerade Primzahl $x$ würde dies bedeuten, dass: $d(x) = 3$, da $1$, $2$, und $x$ Teiler von $x \ bzw. 2k$ sind.
- Dies widerspricht jedoch der Definition $\mathbb{P}$ wo gilt, dass: $\mathbb{P} = \{n \in \mathbb{N} \ | \ d(n) = 2 \}$

$\Longrightarrow$ Da $𝑥$ mehr als zwei Teiler hat, kann $𝑥$ keine Primzahl sein. Somit sind alle Primzahlen größer als 2 ungerade, was die zu zeigende Behauptung bestätigt.

$$
\tag*{$\blacksquare$}
$$

## c) Die Konkatenation $v \cdot w$ (alternativ $vw$) zweier Wörter über einem Alphabet $\Sigma$ ist rekursiv definiert durch:

> [!note] Aufgabenstellung
>
> $$
> \varepsilon \cdot w = w
> $$
>
> $$
> av \cdot w = a(v \cdot w)
> $$
>
> Alternativ kann man diese Definition auch so schreiben:
>
> $$
> v \cdot w = \begin{cases}
>  w & \text{falls } v = \varepsilon \\
>  a(v' \cdot w) & \text{falls } v = av'
> \end{cases}
> $$
>
> Zeigen Sie, dass für alle Wörter $u, v, w$ gilt: $u \cdot (v \cdot w) = (u \cdot v) \cdot w$. Verwenden Sie vollständige [[Induktion]] (siehe Skript, Kapitel 2) über die Länge von $u$.

**Z.Z:**

$$
u⋅(v⋅w)=(u⋅v)⋅w
$$

**Induktionsanfang:**

$$
\begin{aligned}
\varepsilon \cdot(v \cdot w) &= v \cdot w \\
(\varepsilon \cdot v)\cdot w &= v \cdot w
\end{aligned}
$$

Da das leere Wort $\varepsilon$ das neutrale Element der Konkatenation ist, sind die beiden Ausdrücke gleich.

**Induktionsschritt:**

- **Induktionsannahme:** - Angenommen, die Gleichung:
  $$
  𝑢⋅(𝑣⋅𝑤)=(𝑢⋅𝑣)⋅𝑤
  $$
  gilt für alle $u$ der Länge $n$.

Nun müssen wir zeigen, dass die Gleichung auch für alle $u$ der Länge $𝑛+1$ gilt

Sei $u$ ein Wort der Länge $n+1$. Dann lässt sich $u$ schreiben als $u = au'$, wobei $a$ ein Buchstabe aus $\Sigma$ und $u'$ ein Wort der Länge $n$ ist.

Wir verwenden die rekursive Definition der Konkatenation und die Induktionsannahme:

$$
 u \cdot (v \cdot w) = au' \cdot (v \cdot w)
$$

$$
 = a(u' \cdot (v \cdot w))
$$

(gemäß der rekursiven Definition)

Nun wenden wir die Induktionsannahme auf $u'$ an, da $|u'| = n$:

$$
 = a((u' \cdot v) \cdot w)
$$

$$
 = (au' \cdot v) \cdot w
$$

(wieder rekursive Definition)

Und da $au' = u$ ist, haben wir:

$$
 = (u \cdot v) \cdot w
$$

Damit ist der Induktionsschritt bewiesen und die Eigenschaft, dass die Konkatenation assoziativ ist, gilt für alle Wörter $u$, $v$, und $w$ über einem Alphabet $\Sigma$.

$$
\tag*{$\blacksquare$}
$$

# FSK0-2 Wörter, Sprachen

## a) Seien $\Sigma = \{a, b\}$, $U = \{aab, baa\}$ und $V = \{aa, bb\}$

> [!note] Aufgabenstellung
> Geben Sie Wörter $u, v, w, x \in \Sigma^*$ an, sodass
>
> - $u \in U^*$ und $u \notin V^*$;
> - $v \notin U^*$ und $v \in V^*$;
> - $w \in U^*$ und $w \in V^*$;
> - $x \notin U^*$ und $x \notin V^*$.
>
> Hinweis: Für eine Menge von Symbolen $S$ bezeichnen wir mit $S^*$ die
> Menge aller endlichen Folgen von Symbolen aus $S$ (z.B. $\{a, b\}^* = \{\epsilon, a, b, aa, ab, ba, bb, aaa, \ldots \}$).

### Antworten

1. Wähle $u = aab$. Dieses Wort ist in $U^*$, da es direkt in $U$ vorkommt, jedoch nicht in $V^*$, weil es nicht durch eine gerade Anzahl von $a$s und $b$s gebildet werden kann.
2. Wähle $v = aa$. Dieses Wort ist in $V^*$, da es direkt in $V$ vorkommt, jedoch nicht in $U^*$, weil es nicht in $U$ vorkommt oder durch Elemente von $U$ gebildet werden kann.
3. Wähle $w = aabaabaa$. Dieses Wort ist sowohl in $U^*$ als auch in $V^*$, weil es durch Konkatenation der Elemente von $U$ sowie $V$ gebildet werden kann. Besser das leere Wort, da dies in beides ist $\varepsilon$
4. Wähle $x = aba$. Dieses Wort ist in keiner der beiden Mengen $U^*$ oder $V^*$, weil es nicht durch Konkatenation der Elemente von $U$ oder $V$ gebildet werden kann.

## b) Sei $w = ababababbbbccbaaaaabaacaaabbbbbaba$

> [!note] Aufgabenstellung
> Geben Sie alle Teilwörter $v$ von $w$ an, auf die alle der folgenden
> Eigenschaften zutreffen:
>
> - $|v| = 4$, die Länge von $v$ ist 4;
> - $v[1] = a$, das erste Symbol in $v$ ist a;
> - $\#_b(v) > 0$, die Anzahl von Vorkommen von $b$ in $v$ ist größer als 0.

Um die Aufgabe zu lösen, suchen wir nach allen Teilwörtern \( v \) des gegebenen Wortes \( w \), die folgende Bedingungen erfüllen:

- Die Länge von \( v \) beträgt 4 Zeichen (\( |v| = 4 \)).
- Das erste Zeichen von \( v \) ist \( a \) (\( v[1] = a \)).
- \( v \) enthält mindestens ein \( b \) (\( \#\_b(v) > 0 \)).

Wir beginnen, indem wir das gegebene Wort \( w \) betrachten:
\[ w = ababababbbbccbaaaaabaacaaabbbbbaba \]

### Schritte zur Lösung:

1. **Identifizierung aller möglichen 4-Zeichen-Teilwörter von \( w \)**: Wir extrahieren jedes mögliche 4-Zeichen-Teilwort beginnend mit jedem Index in \( w \), solange die Länge des Teilworts 4 Zeichen beträgt.
2. **Filterung der Teilwörter**: Jedes gefundene Teilwort wird daraufhin überprüft, ob es mit einem \( a \) beginnt und mindestens ein \( b \) enthält.

### Beispielhafte Durchführung:

- Extrahiere 4-Zeichen-Teilwörter und prüfe die Bedingungen.

Angenommen, wir beginnen beim ersten Index:

- \( w[0:4] = abab \)
  - Beginnt mit \( a \): ja
  - Enthält \( b \): ja
  - Dieses Teilwort wird behalten.

Ein weiteres Beispiel beim zweiten Index:

- \( w[1:5] = baba \)
  - Beginnt mit \( a \): nein
  - Dieses Teilwort wird nicht behalten.

Wir führen diesen Prozess für das gesamte Wort durch.

### Alle gültigen Teilwörter:

Nach Überprüfung aller Teilwörter erhält man folgende gültige 4-Zeichen-Teilwörter:

- `abab`
- `abab`
- `abab`
- `abab`
- `abbb`
- `abbc`
- `aaba`
- `aaab`
- `aaca`
- `acaa`
- `abbb`
- `bbbb`
- `bbba`

Diese Liste gibt alle möglichen Teilwörter an, die die gegebenen Bedingungen erfüllen.

---

# FSK0-3 Äquivalenzrelationen

> [!note] Aufgabenstellung
> Eine Relation zwischen zwei Mengen $M, N$ ist eine Menge $R \subseteq M \times N$ von Paaren bestehend je aus einem Element aus $M$ und einem aus $N$. $M$ und $N$ können hierbei beliebige Mengen sein. Ist $(p, q) \in R$, so schreibt man auch $R(p, q)$, $pRq$ oder $p \sim q$.
>
> Ist klar, um welche Relation es sich handelt, kann man auch $p \sim q$ schreiben.
>
> Eine Relation $R$ heißt Äquivalenzrelation, wenn
>
> - die zugrundeliegenden Mengen gleich sind: $M = N$;
> - für alle $x \in M$ gilt $xRx$ (d.h. $R$ ist reflexiv);
> - für alle $x, y \in M$ gilt $xRy$ impliziert $yRx$ (d.h. $R$ ist symmetrisch);
> - für alle $x, y, z \in M$ gilt $xRy$ und $yRz$ impliziert $xRz$ (d.h. $R$ ist transitiv).
>
> Eine Äquivalenzklasse $K$ einer Äquivalenzrelation $R$ ist eine maximale Menge von Elementen $u, v, w, \ldots \in M$ sodass alle Elemente von $K$ durch $R$ in Beziehung stehen: $uRv$, $vRu$, $vRw$, etc. "Maximal" bedeutet, dass es kein Element $x \in M$ gibt, das nicht in $K$ ist, aber mit allen Elementen von $K$ in Beziehung steht. Der Index einer Äquivalenzrelation ist die Anzahl ihrer Äquivalenzklassen.
>
> Beispiel: Die Relation
>
> $$
> \{ (u, v) | u, v \in \mathbb{N} \text{ und } u \text{ geteilt durch } 3 \text{ hat denselben Rest wie } v \text{ geteilt durch } 3\}
> $$
>
> ist eine Äquivalenzrelation. Ihre Äquivalenzklassen sind $\{0, 3, 6, \ldots\}$, $\{1, 4, 7, \ldots\}$ und $\{2, 5, 8, \ldots\}$. Sie hat somit Index 3.
>
> Geben Sie für die folgenden Relationen jeweils an, ob sie Äquivalenzrelationen sind. Berechnen Sie außerdem den Index von mindestens zwei der Äquivalenzrelationen.

> [!danger] Aufgabenstellungen falsch muss ausgebessert werden von mir

## a) $R_1 \subseteq \{0,1,2,3\} \times \{0,1,2,3\}$ Mit $0R1, 2R1, 3R1$ (und sonst $\neg xRy$).

## b) $R_2 \subseteq \{0,1,2\} \times \{0,1,2\}$ Mit $0R2, 1R2, 2R2$ (und sonst $\neg xRy$).

## c) $R_3 \subseteq \{0,1,2\} \times \{0,1,2\}$ Mit $0R3, 1R3, 2R3, 1R3, 2R3, 2R3, 1R3$ (und sonst $\neg xRy$).

## d) $R_4 = \{(p,q) |$ Die Personen $p, q$ haben das gleiche Geburtsjahr$\}$.

## e) $R_5 = \{(u,v) |$ Die Wörter $u$ und $v$ über dem Alphabet $\{a,b\}$ stimmen in den ersten $k$ Positionen überein, wobei $k$ die Länge des kürzeren Wortes ist$\}$.

## f) $R_6 = \{(p,q) | p,q \in \mathbb{N}, P + q$ ist gerade$\}$.

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
