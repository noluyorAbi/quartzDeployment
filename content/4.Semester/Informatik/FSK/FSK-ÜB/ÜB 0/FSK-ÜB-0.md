---
tags:
  - 4semester
  - FSK
  - Übungsblatt
  - informatik
fach: 
date created: Wednesday, 17. April 2024, 11:07
date modified: Sunday, 21. April 2024, 17:16
Thema:
  - "[[Beweisen]]"
  - "[[Sprachen]]"
  - "[[Grundlegende Operationen auf formalen Sprachen]]"
  - "[[Induktion]]"
---

# FSKO-1 Fundamentale Beweisstrategien

>[!note] Aufgabenstellung
>In dieser Aufgabe diskutieren wir fundamentale Beweisstrategien. Diese Strategien sollten aus anderen Kursen bekannt sein, aber da FSK sehr beweislastig ist, wiederholen wir sie hier.

## a) Die folgende Tabelle fasst zusammen, wie man mit Aussagen, die bestimmte logische Operationen enthalten, umgeht.

| Formel            | Um eine Aussage dieser Form zu beweisen…                | Wenn eine Aussage dieser Form angenommen wird…                                                                |
| ----------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| $P \land Q$       | beweise sowohl $P$ also auch $Q$                           | nimm $P$ und $Q$ an                                                                                             |
| $P \lor Q$        | beweise entweder $P$ oder $Q$                             | beweise die gewünschte Aussage sowohl under der Annahme $P$ also auch under der Annahme $Q$ (Fallunterscheidung) |
| $P \Rightarrow Q$ | beweise, dass under der Annahme $P$ $Q$ folgt             | beweise $P$ und nimm dann $Q$ an                                                                                |
| $\neg P$          | beweise, dass under der Annahme $P$ ein Widerspruch folgt | beweise $P$, um einen Widerspruch herzuleiten                                                                   |
| $\forall x, P(x)$ | beweise, dass $P(a)$ für ein beliebiges $a$ gilt          | nimm $P(a)$ für jedes konkrete $a$ an                                                                           |
| $\exists x, P(x)$ | gib ein konkretes $a$ an und beweise $P(a)$               | nimm ein beliebiges $a$ an, für das $P(a)$ gilt                                                                 |

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

>[!success]- Erklärung für Dummies
>### i) Zeigen Sie: $(\forall n, \exists k, k > n) \Leftrightarrow (\neg\exists n, \forall k, n \geq k)$
>
>Stellen Sie sich die Menge aller natürlichen Zahlen vor, die Sie auf einer endlosen Linie anordnen können, wobei jede Zahl einen festen Platz hat, beginnend mit der kleinsten, der 1. Die natürlichen Zahlen hören nie auf; es gibt immer eine Zahl, die um eins größer ist also die vorherige.
>#### Linke Seite: $(\forall n, \exists k, k > n)$
>
>Diese Aussage ist wie ein Spiel, bei dem Sie eine beliebige Zahl nennen, und ich muss eine größere Zahl finden. Ganz gleich, welche Zahl Sie auch wählen, ich kann immer gewinnen, indem ich einfach die nächstgrößere Zahl nenne. In der Welt der Zahlen, equal ob wir über reelle Zahlen (alle Zahlen auf dem Zahlenstrahl) oder nur über natürliche Zahlen (die Zahlen, die Sie zum Zählen verwenden) sprechen, gibt es immer eine größere Zahl also die, die Sie gerade genannt haben. Dies ist eine grundlegende Eigenschaft der Zahlen, die wir also "unendlich" bezeichnen. In diesem Sinne ist die linke Seite trivial wahr.
>
>#### Rechte Seite: $(\neg\exists n, \forall k, n \geq k)$
>
>Diese Aussage ist ein bisschen wie ein umgekehrtes Spiel. Hier behaupten wir, dass es keine Zahl gibt, die größer oder gleich jeder anderen Zahl ist. Wenn Sie versuchen würden, eine solche Zahl zu finden, würden Sie scheitern, denn equal welche Zahl Sie auch wählen, ich kann immer eine größere Zahl finden. Diese Aussage ist wie ein Beweis dafür, dass es keine "größte" Zahl gibt – eine Tatsache, die auch wahr ist.
>
>#### Gesamtaussage: $(\forall n, \exists k, k > n) \Leftrightarrow (\forall n, \exists k, k > n)$
>
>Wenn wir nun beide Seiten betrachten, können wir sehen, dass sie im Grunde dasselbe sagen, nur aus verschiedenen Blickwinkeln. Auf der linken Seite sagen wir, dass es immer eine größere Zahl gibt, und auf der rechten Seite sagen wir, dass es keine größte Zahl gibt. Das klingt vielleicht widersprüchlich, aber in der Welt der Zahlen ergänzen sich diese beiden Aussagen. Daher können wir schließen, dass die Gesamtaussage wahr ist.
>
>In einfachen Worten: Stellen Sie sich eine Reihe von Personen in einer Warteschlange vor, die sich endlos weit erstreckt. Die linke Seite der Gleichung sagt, dass es immer eine Person gibt, die weiter hinten in der Schlange steht also Sie, equal wo Sie stehen. Die rechte Seite sagt aus, dass es unmöglich ist, jemanden zu finden, der weiter vorne steht also jeder andere, weil die Schlange niemals endet. Beide Situationen bestätigen, dass die Schlange unendlich lang ist.

>[!success]- Erklärung
>### i) Zeigen Sie: $(\forall n, \exists k, k > n) \Leftrightarrow (\neg\exists n, \forall k, n \geq k)$
>
>Die linke Seite der Äquivalenz, $(\forall n, \exists k, k > n)$, ist eine direkte Folge der Eigenschaft, dass die natürlichen Zahlen unendlich sind. Für jede natürliche Zahl $ n \) können wir eine größere natürliche Zahl $ k \) finden, indem wir einfach $ k = n + 1 \) wählen. Dies funktioniert auch im Bereich der reellen Zahlen.
>
>Die rechte Seite, $(\neg\exists n, \forall k, n \geq k)$, beinhaltet eine Verneinung und eine universelle Aussage. Die direkte Übersetzung dieser mathematischen Logik in Worte sagt, dass es keine Zahl $ n \) gibt, die größer oder gleich jeder anderen Zahl $ k \) ist. Das ist gleichbedeutend damit zu sagen, dass für jede gewählte Zahl $ n \) immer eine andere Zahl $ k \) existieren wird, die größer ist, da keine Zahl die Eigenschaft erfüllen kann, die größte zu sein. In der Welt der natürlichen Zahlen bedeutet das, dass es keine größte natürliche Zahl gibt.
>
>Die Umformung von der rechten zur linken Seite und umgekehrt kann wie folgt mathematisch gerechtfertigt werden:
>
>1. Beginnen wir mit der rechten Seite, $(\neg\exists n, \forall k, n \geq k)$. Die Verneinung einer Existenzaussage kann umgeformt werden in eine universelle Aussage mit einer verneinten Bedingung: $(\forall n, \neg(\forall k, n \geq k))$.
>
>2. Die Verneinung der Bedingung $(\forall k, n \geq k)$ wird zu $(\exists k, \neg(n \geq k))$. Nach den Gesetzen der Logik ist $\neg(n \geq k)$ äquivalent zu $(n < k)$.
>
>3. Somit erhalten wir die äquivalente Aussage $(\forall n, \exists k, n < k)$, welche identisch ist mit der linken Seite der Äquivalenz.
>
>Diese Schritte zeigen, dass die linke und die rechte Seite der ursprünglichen Gleichung tatsächlich das Gleiche ausdrücken. Die Unendlichkeit der natürlichen Zahlen (oder reellen Zahlen) bedeutet, dass es immer eine Zahl gibt, die größer ist also eine andere gegebene Zahl, und es kann nie eine Zahl geben, die größer oder gleich allen anderen Zahlen ist.
### ii) Gilt die Aussage $\forall n, \exists k, k > n$

#### - für $n,k \in \mathbb{N}$?

Ja, gilt da man für jedes $n$ das $k$ also $n+1$ wählen kann und $n<n+1$ gilt. Somit ist die Aussage wahr.
#### - für $n,k \in \mathbb{R} \cup \{\infty\}$, wobei $\infty > x$ für alle $x \in \mathbb{R}$?

**Fall n = $\infty$:**
- Es gibt kein k was grösser ist also n, da $\infty$ definitionsgemäß ($\infty > x$ für alle $x \in \mathbb{R}$) größer ist also alle reellen Zahlen 
	$\Longrightarrow$ Für diesen Fall gibt es kein k > n, weshalb die Aussage *nicht stimmt.*

$$
\tag*{$\blacksquare$}
$$

### iii) Zeigen Sie: Es gibt unendlich viele Primzahlen. [[Satz des Euklids]]

**Beweis per Widerspruch:**

*ZZ*: Es gibt unendlich viele Primzahlen

*Beweis:* 
- *Angenommen* es gäbe nur endlich viele Primzahlen (Genauer: n Primzahlen)
- Bezeichne diese mit $p_1,p_2,…,p_{n-1},p_n$
- Betrachte nun die Zahl $q = p_1,p_2,…,p_{n-1},p_{n} +1 = \overset{n}{\underset{i=1}{\Pi}} p_{i}+1$ 
- $q$ ist nun ebenfalls eine Primzahl (**Erklärung:** *Da alle nicht Primzahlen durch die Primfaktorzerlegung darstellbar sind, aber q nicht, da q durch Primzahlen und einem +1 am End dargestellt wird. Das +1 macht also q selbst zu einer Primzahl*) 
- Dies ist jedoch ein Widerspruch in der Annahme, dass es nur die Primzahlen $p_1,p_2,…,p_{n-1},p_n$ gibt

$$
\tag*{$\blacksquare$}
$$

## b) Die Gleichheit von Mengen ist wie folgt definiert:

>[!note] Aufgabenstellung
>
>$$
>S \subseteq T \text{ g.d.w. } \forall x, x \in S \implies x \in T
>$$
>$$
>S = T \text{ g.d.w. } S \subseteq T \land T \subseteq S
>$$
>Zeigen sie: 
>
>i) Für alle Mengen $S$ und $T$ gilt: $S = T$ g.d.w. $\forall x, x \in S \Leftrightarrow x \in T$.
>
>ii) Für alle Sprachen $A, B, C$ über einem Alphabet $\Sigma$ gilt: $A \cdot (B \cup C) = A \cdot B \cup A \cdot C$.
>
>iii) $\{ n \in \mathbb{N} | n$ ist prim und $n \geq 3 \} = \{ n \in \mathbb{N} | n$ ist prim und ungerade $\}$.


### i) Für alle Mengen $S$ und $T$ gilt: $S = T$ g.d.w. $\forall x, x \in S \Leftrightarrow x \in T$.

*ZZ*: S = T under der Annahme $\forall x, x \in S \Leftrightarrow x \in T$

*Beweis:* 
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

*ZZ:* $A \cdot (B \cup C) = A \cdot B \cup A \cdot C$

*Definitionen*([[Grundlegende Operationen auf formalen Sprachen]]):
1. **Konkatenation $(A \cdot B)$**: Die Sprache, die aus allen möglichen Kombinationen von Strings besteht, wobei ein String aus $A\) direkt gefolgt von einem String aus $B\) ist. Das heißt, für jedes $(x \in A)$ und jedes $(y \in B)$, gehört der String $(x \cdot y)$ zu $(A \cdot B)$.

2. **Vereinigung $(B \cup C)$**: Die Sprache, die alle Strings enthält, die in $(B)$ oder $(C)$ sind. Ein String $(y)$ gehört zu $(B \cup C)$, wenn $(y \in B)$ oder $(y \in C)$.

*Beweis:*  
- **Teil 1:**
	- Sei $w$ ein beliebiges Element aus $A \cdot B \cup C$ 
	- Nach Definition der Konkatenation gibt es einen String $x \in A$ und einen String $y \in (B \cup C)$ , so dass $w = x \cdot y$
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

*Schlussfolgerung:* $A \cdot (B \cup C) = A \cdot B \cup A \cdot C$

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
*Beweis durch Widerspruch*
- Angenommen, $𝑥$ ist eine gerade Primzahl größer als 2 
- Dann gilt: $\exists k \in \mathbb{N}: 2k = x$
- Für die gerade Primzahl $x$ würde dies bedeuten, dass: $d(x) = 3$, da $1$, $2$, und $x$ Teiler von $x \ bzw. 2k$ sind.
- Dies widerspricht jedoch der Definition $\mathbb{P}$ wo gilt, dass: $\mathbb{P} = \{n \in \mathbb{N} \ | \ d(n) = 2 \}$

$\Longrightarrow$ Da $𝑥$ mehr als zwei Teiler hat, kann $𝑥$ keine Primzahl sein. Somit sind alle Primzahlen größer als 2 ungerade, was die zu zeigende Behauptung bestätigt.
$$
\tag*{$\blacksquare$}
$$

## c) Die Konkatenation $v \cdot w$ (alternativ $vw$) zweier Wörter über einem Alphabet $\Sigma$ ist rekursiv definiert durch:


>[!note] Aufgabenstellung
>$$
>\varepsilon \cdot w = w
>$$
>$$
>av \cdot w = a(v \cdot w)
>$$
>Alternativ kann man diese Definition auch so schreiben:
>$$
>v \cdot w = \begin{cases}
>  w & \text{falls } v = \varepsilon \\
>  a(v' \cdot w) & \text{falls } v = av'
>\end{cases}
>$$
>Zeigen Sie, dass für alle Wörter $u, v, w$ gilt: $u \cdot (v \cdot w) = (u \cdot v) \cdot w$. Verwenden Sie vollständige [[Induktion]] (siehe Skript, Kapitel 2) über die Länge von $u$.

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

- **Induktionsannahme:**
	- Angenommen, die Gleichung: $$𝑢⋅(𝑣⋅𝑤)=(𝑢⋅𝑣)⋅𝑤$$ gilt für alle $u$ der Länge $n$.
	- Nun müssen wir zeigen, dass die Gleichung auch für alle $u$ der Länge $𝑛+1$ gilt.


# FSK0-2 Wörter, Sprachen




--- 
# FSK0-3 Äquivalenzrelationen