---
tags:
  - 4semester
  - FSK
  - Übungsblatt
  - informatik
fach: 
date created: Wednesday, 17. April 2024, 11:07
date modified: Thursday, 18. April 2024, 15:05
Thema:
  - "[[Beweisen]]"
---

# FSKO-1 Fundamentale Beweisstrategien

>[!note] Aufgabenstellung
>In dieser Aufgabe diskutieren wir fundamentale Beweisstrategien. Diese Strategien sollten aus anderen Kursen bekannt sein, aber da FSK sehr beweislastig ist, wiederholen wir sie hier.

a) Die folgende Tabelle fasst zusammen, wie man mit Aussagen, die bestimmte logische Operationen enthalten, umgeht.

| Formel            | Um eine Aussage dieser Form zu beweisen...                | Wenn eine Aussage dieser Form angenommen wird...                                                                |
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
>Die linke Seite der Äquivalenz, $(\forall n, \exists k, k > n)$, ist eine direkte Folge der Eigenschaft, dass die natürlichen Zahlen unendlich sind. Für jede natürliche Zahl \( n \) können wir eine größere natürliche Zahl \( k \) finden, indem wir einfach \( k = n + 1 \) wählen. Dies funktioniert auch im Bereich der reellen Zahlen.
>
>Die rechte Seite, $(\neg\exists n, \forall k, n \geq k)$, beinhaltet eine Verneinung und eine universelle Aussage. Die direkte Übersetzung dieser mathematischen Logik in Worte sagt, dass es keine Zahl \( n \) gibt, die größer oder gleich jeder anderen Zahl \( k \) ist. Das ist gleichbedeutend damit zu sagen, dass für jede gewählte Zahl \( n \) immer eine andere Zahl \( k \) existieren wird, die größer ist, da keine Zahl die Eigenschaft erfüllen kann, die größte zu sein. In der Welt der natürlichen Zahlen bedeutet das, dass es keine größte natürliche Zahl gibt.
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

Beweisen Sie Ihre Antworten.

### iii) Zeigen Sie: Es gibt unendlich viele Primzahlen.

