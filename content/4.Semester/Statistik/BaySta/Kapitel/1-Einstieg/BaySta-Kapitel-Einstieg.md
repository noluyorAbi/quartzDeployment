---
tags:
  - 4semester
  - BaySta
  - statistik
fach: "[[BaySta]]"
Thema:
  - "[[Priori und Posteriori Wahrscheinlichkeit]]"
date created: Wednesday, 24. April 2024, 21:17
date modified: Sunday, 14. July 2024, 13:29
---

# Kurze Wiederholung der Theorie der Wahrscheinlichkeit

## Wahrscheinlichkeiten

Dieses Kapitel gibt eine kurze Einführung bzw. Wiederholung in die Theorie der Wahrscheinlichkeit.

Wir interessieren uns (vorerst) für _zufällige Ergebnisse_ in einem Ergebnisraum $Ω$. Jedem _Ereignis_ $A⊆Ω$ kann eine _Wahrscheinlichkeit_ $𝑃(𝐴)$ zugeordnet werden, für die die Axiome von Kolmogorov gelten:

- $0 ≤ P(A) ≤ 1$ (Wahrscheinlichkeiten liegen zwischen 0 und 1)
- Für das sichere Ereignis $Ω$ gilt: $P(Ω) = 1$ (irgendein Ergebnis aus $Ω$ tritt sicher ein)
- Für beliebige disjunkte (nicht überschneidende) Ereignisse $A$ und $B$ gilt $P(A ∪ B) = P(A) + P(B)$ (die Wahrscheinlichkeit, dass $A$ _oder_ $B$ eintritt ist Summe der einzelnen Wahrscheinlichkeiten, wenn beide nicht gleichzeitig eintreten können)

Beispiel: Wir interessieren uns für das zufällige Ereignis _Niederschlag am morgigen Tag_. Unser Ergebnisraum sei: $Ω = \{"Es regnet", "Es schneit", "Es regnet und schneit nicht"\}$

Ein Ergebnis war dann zum Beispiel $A = \{"Es regnet", "Es schneit"\} = "Es gibt Niederschlag"$. Aus den Axiomen von Kolmogorov folgt:

$$
P(A) = P(\text{"Es regnet"}) + P(\text{"Es schneit"})
$$

### Folgerungen

Daraus folgt direkt:

- Die Wahrscheinlichkeit für das unmögliche Ereignis $∅$ (leere Menge) ist: $P(∅) = 0$
- Die Wahrscheinlichkeit des Gegenereignisses $A$ zu $A$ (d. h. $A$ tritt nicht ein) ist: $P(A') = 1 - P(A)$

### Beispiel: Würfel

Wir werfen einen fairen sechsseitigen Würfel.

Die Annahme „fairer Würfel“ entspricht dabei der Annahme, dass jede Seite dieselbe Wahrscheinlichkeit hat. Zum Beispiel gilt für die Wahrscheinlichkeit des Ereignisses $A$: „Es fällt eine 6“

$$
P(A) = \frac{1}{6}
$$

Oder allgemein:

$$
P(A) = \frac{|A|}{|\Omega|}
$$

Wobei $|A|$ die „Mächtigkeit“ von $A$, also die Anzahl der Elemente in $A$ ist. Man nennt diese Definition einer Wahrscheinlichkeit auch _Laplace-Wahrscheinlichkeit._

## OddsAlternativ lassen sich Wahrscheinlichkeiten auch als _Odds_ oder _Chance_ darstellen:

### Definition

Die Odds eines Ereignisses $A$ sind definiert als:

$$
\text{Odds}(A) = \frac{P(A)}{P(\bar{A})}
$$

wobei $\bar{A}$ das Gegenereignis zu $A$ ist. Es gilt $P(\bar{A}) = 1 - P(A)$.

Ein Odds von 1 entspricht also einer Wahrscheinlichkeit von 50%.

### Fortsetzung Beispiel: Würfel

Der Odds für $A$: "Der Würfel zeigt die Zahl 6" ist:

$$
\text{Odds}(A) = \frac{1/6}{5/6} = 1 : 5
$$

Man kennt den Odds auch als Wettquote. Bei einer Wahrscheinlichkeit $P(A) = 1/6$ ist die Wettquote für das Eintreten von $A$ dementsprechend $5 : 1$. Wettet man auf $A$, erhält man - neben dem Einsatz - das Fünffache des Einsatzes zurück, zusammen also das Sechsfache des Einsatzes.

## Interpretation

Der mathematische Begriff _Wahrscheinlichkeit_ kann dabei unterschiedlich interpretiert werden:

- klassisch: Alle Elementarereignisse haben dieselbe Wahrscheinlichkeit (_Laplace-Wahrscheinlichkeit_)
- als relative Häufigkeit bei unendlicher Wiederholung (_Frequentistischer Wahrscheinlichkeitsbegriff_)
- subjektiv als Maß für den Glauben an das Eintreten (_Bayesscher Wahrscheinlichkeitsbegriff_)
- als Eigenschaft eines physikalischen Systems (z. B. _Propensität_ nach Karl Popper)

### Frequentistischer Wahrscheinlichkeitsbegriff

Die Frequentistische Interpretation basiert auf dem _Gesetz der großen Zahlen_:

Wiederholt man ein Experiment, bei dem das Ereignis $A$ mit Wahrscheinlichkeit $P(A)$ eintritt, $n$-mal, dann nähert sich die relative Häufigkeit

$$
P = \frac{h_n}{n}
$$

mit steigendem $n$ immer mehr dem Wert $P(A)$. Dabei bezeichnet $h_n$ die Anzahl der Experimente, in denen $A$ eingetreten ist.

_Relative Häufigkeit einer 6 beim fairen Würfel bei simulierten $n$ Wiederholungen_

(Graphische Darstellung der relativen Häufigkeit über die Anzahl der Wiederholungen)

### Bayesscher Wahrscheinlichkeitsbegriff

Der Bayessche Wahrscheinlichkeitsbegriff ist subjektiv. Er versteht Wahrscheinlichkeit als _Grad persönlicher Überzeugung_, dass ein Ereignis eintritt.

Dieser Grad lässt sich z.B. dadurch messen, wieviel man darauf wetten würde, dass ein Ereignis eintritt (welchen _Odds_ man geben würde). Bei einem fairen Würfel würde man für das Würfeln der 6 z.B. einen Odds von 5:1 geben.

Die persönliche Überzeugung wird dabei durch Informationen gebildet. Das kann z.B. das Wissen sein, dass ein industriell gefertigter Würfel in der Regel fair ist (_Vorwissen_). Alternativ kann das Wissen auch durch Beobachtung (_Daten_) entstehen, z.B. in dem man die relative Häufigkeit bei n Wiederholungen betrachtet.

Der Bayessche Wahrscheinlichkeitsbegriff ist nicht notwendig für die Benutzung Bayesischer Statistik. Aber er verdeutlicht schon einen ersten Aspekt der Bayesischen Statistik:

_Wahrscheinlichkeit_ entspricht _Wissen_ gleich _Information_.

## Verteilung und Zufallsvariablen

### Verteilung

Wenn wir für jedes mögliche Ereignis $A \subseteq \Omega$ die Wahrscheinlichkeit $P(A)$ definieren, sprechen wir insgesamt von einer _Verteilung_.

Im Beispiel des fairen Würfels haben wir eine _Gleich-Verteilung_ angenommen; jedes gleichgroße Ereignis $A$ hat die selbe Wahrscheinlichkeit.

### Zufallsvariablen

Unter einer Zufallsvariablen verstehen wir die Zuordnung von Zahlen, zu jedem möglichen Ereignis zuordnen. Tritt ein Ereignis ein, dann sprechen wir von der _Realisation_ der Zufallsvariable.

### Beispiel Würfel

- Ereignis $A_1$: "Die Seite mit einem Auge liegt oben"
- Ereignis $A_2$: "Die Seite mit zwei Augen liegt oben"
- Ereignis $A_3$: "Die Seite mit drei Augen liegt oben"
- Ereignis $A_4$: "Die Seite mit vier Augen liegt oben"
- Ereignis $A_5$: "Die Seite mit fünf Augen liegt oben"
- Ereignis $A_6$: "Die Seite mit sechs Augen liegt oben"

Sei die Zufallsvariable $X$ "Anzahl der Augen", dann gilt für alle $i = 1, \ldots, 6$:

- tritt $A_i$ ein, dann ist $X = i$

Damit lassen sich auch für Zufallsvariablen Wahrscheinlichkeiten und damit Verteilungen definieren:

- $P(X = 1) = P(A_1) = \frac{1}{6}$
- $P(X > 5) = P(A_5) + P(A_6) = \frac{1}{3}$

### Verteilung einer Zufallsvariablen

Die Verteilung einer Zufallsvariablen wird dadurch spezifiziert, dass alle Wahrscheinlichkeiten für alle möglichen Realisationen angegeben werden.

### Binomialverteilung

Sei $Y$ die Zufallsvariable "Bei $n$-maligen Würfeln wir $y$-mal die 6 gewürfelt. Dann ist $Y$ _Binomialverteilt_, wir schreiben $Y \sim B(n,p)$, und es gilt für $0 \leq y \leq n$

$$
P(Y = y) = \binom{n}{y}p^y(1 - p)^{n-y}
$$

wobei hier $p = \frac{1}{6}$.

# Bedingten Wahrscheinlichkeiten

## Unabhängigkeit

Ein wichtiges Grundkonzept von zufälligen Ereignissen ist die Unabhängigkeit, dass also das Eintreten eines Ereignisses $A$ nicht das Eintreten eines anderen Ereignisses $B$ beeinflusst.

Interessanter ist in der Regel die Abhängigkeit von Ereignissen. In diesem Fall ändert sich die Wahrscheinlichkeit für das Eintreten von $B$ durch das Eintreten von $A$. Bayesisch betrachtet gewinnen wir durch das Eintreten von $A$ Information über das Eintreten von $B$.

### Stochastische Unabhängigkeit

Zwei Ereignisse heißen _stochastisch unabhängig_, wenn gilt:

$$
P(A \cap B) = P(A) \cdot P(B)
$$

Dabei meint $A \cap B$, dass beide Ereignisse eintreten.

Zwei Zufallsvariablen heißen _stochastisch unabhängig_, wenn gilt:

$$
P(X = x, Y = y) = P(X = x) \cdot P(Y = y)
$$

für alle möglichen Werte von $x$ und $y$. Dabei meint $X = x, Y = y$, dass beide Ereignisse eintreten, also dass $X$ den Wert $x$ annimmt und $Y$ den Wert $y$.

#### Beispiel: Fairer Würfel

Sei $A$: "Es fällt eine 5 oder 6", $B$: "Es fällt eine gerade Zahl". Dann ist $A \cap B$: "Es fällt eine 6". Es gilt:

$$
P(A) \cdot P(B) = \frac{1}{3} \cdot \frac{1}{2} = \frac{1}{6} = P(A \cap B)
$$

Die beiden Ereignisse sind also voneinander unabhängig!

Wir nennen

- $P(A \cap B)$ gemeinsame Wahrscheinlichkeit
- $P(A)$ bzw. $P(B)$ Rand- oder marginale Wahrscheinlichkeit

## Satz von Bayes

Aus der Definition der bedingten Wahrscheinlichkeit $P(A|B)$ ergeben sich folgende Zusammenhänge:

$$
P(A \cap B) = P(A|B) \cdot P(B)
$$

$$
P(A \cap B) = P(B|A) \cdot P(A)
$$

Daraus folgt, dass

$$
P(A|B) \cdot P(B) = P(B|A) \cdot P(A)
$$

und somit der _Satz von Bayes_:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

### Satz von der totalen Wahrscheinlichkeit

$P(B)$ können wir dabei mit dem _Satz von der totalen Wahrscheinlichkeit_ berechnen:

$$
P(B) = P(B \cap A) + P(B \cap \bar{A}) = P(B|A) \cdot P(A) + P(B|\bar{A}) \cdot P(\bar{A})
$$

Wir erhalten eine weitere Version des Satzes von Bayes:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B|A) \cdot P(A) + P(B|\bar{A}) \cdot P(\bar{A})}
$$

### Beispiel: unfairer Würfel?

Als erstes Beispiel überlegen wir uns folgende Situation. Ein Bekannter von Ihnen besitzt zwei identische aussehende Würfel. Einer davon ist fair, einer Würfel immer die 6. Der Bekannte würfelt mit einem der beiden Würfel, es fällt die sechs. Ist das nun der unfaire Würfel?

Wir definieren uns folgende Ereignisse und Wahrscheinlichkeiten:

- Ereignis $A$: Der Würfel ist fair.
- Ereignis $B$: Eine 6 fällt.

Die Wahrscheinlichkeit von $B$ hängt von $A$ ab!

- $A$: Würfel ist fair; $\rightarrow P(B|A) = 1/6$
- $\bar{A}$: Würfel ist unfair; $\rightarrow P(B|\bar{A}) = 1$

Nach Laplace gehen wir außerdem von $P(A) = 1/2$ aus; sprich: Der Bekannte hat zufällig einen Würfel ausgewählt. (Das ist eine Vornahme oder _Vorwissen_. Sie kennen den Bekannten besser, können diese Wahrscheinlichkeit vielleicht besser einschätzen.)

#### Anwendung des Satz von Bayes

Dann gilt mit dem Satz von Bayes:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B|A) \cdot P(A) + P(B|\bar{A}) \cdot P(\bar{A})}
$$

$$
= \frac{\frac{1}{6} \cdot \frac{1}{2}}{\frac{1}{6} \cdot \frac{1}{2} + 1 \cdot \frac{1}{2}}
$$

$$
= \frac{1}{\frac{1}{6} \cdot \frac{1}{2} + \frac{5}{6} \cdot \frac{1}{2}}
$$

$$
= \frac{1}{\frac{1}{6} \cdot 1 + \frac{5}{6} \cdot 1}
$$

$$
= \frac{1}{\frac{1}{6} + \frac{5}{6}}
$$

$$
= \frac{1}{1} = 1
$$

So erhalten wir $P(A|B) = 1$, was bedeutet, dass unter der Bedingung, dass B eingetreten ist, das Ereignis A mit Sicherheit stattfindet.

# Quiz zur Wahrscheinlichkeit

## Aufgabe 1

> [!faq] Auf einem Campus gibt es 250 Mathematik-Studierende und 750 Soziologie-Studierenden. Sie begegnen zufällig einer Person auf dem Campus. Ohne weiteres Wissen, wie groß ist die Wahrscheinlichkeit, dass die Person Mathematik studiert?
>
> - 0.5
> - 0.25
> - 5
> - 25
> - 0
>   > [!success]- Lösung
>   > 0.25

## Aufgabe 2

> [!faq] Sie wissen, dass 50 der Mathematik-Studierenden weiblich sind. Sie begegnen zufällig einer Person auf dem Campus. Wie groß ist die Wahrscheinlichkeit, dass es sich um eine Mathematikerin handelt?
>
> - 0.5
> - 0
> - 0.25
> - 0.05
>   > [!success]- Lösung
>   > 0.05

> [!faq] Sie begegnen auf dem Campus zufällig einer Person, die Mathematik studiert. Wie groß ist die Wahrscheinlichkeit, dass diese weiblich ist?
>
> - 0.25
> - 0.05
> - 0.5
> - 0.2
> - 0
>   > [!success]- Lösung
>   > 0.2

> [!faq] Dabei handelt es sich um eine:
>
> - marginale Wahrscheinlichkeit
> - bedingte Wahrscheinlichkeit
> - inverse Wahrscheinlichkeit
>   > [!success]- Lösung
>   > bedingte Wahrscheinlichkeit

## Frage 3

> [!faq] Sie wissen, dass 450 der Soziologie-Studierenden weiblich sind. Sie begegnen zufällig einer Person auf dem Campus. Wie groß ist die Wahrscheinlichkeit, dass es sich um eine Soziologin handelt?
>
> - 0.05
> - 0.6
> - 0.75
> - 0.45
>   > [!success]- Lösung
>   > 0.6

> [!faq] Sie begegnen zufällig einer Person auf dem Campus. Wie groß ist die Wahrscheinlichkeit, dass diese Person weiblich ist?
>
> - 0.75
> - 0.05
> - 0.45
> - 0.5
>   > [!success]- Lösung
>   > 0.5

> [!faq] Dabei handelt es sich um eine:
>
> - bedingte Wahrscheinlichkeit
> - marginale Wahrscheinlichkeit
> - inverse Wahrscheinlichkeit
>   > [!success]- Lösung
>   > marginale Wahrscheinlichkeit

## Frage 4

> [!faq] Sie begegnen zufällig einer weiblichen Person auf dem Campus. Wie groß ist die Wahrscheinlichkeit, dass es sich um eine Mathematikerin handelt?
>
> - 0.5
> - 0.25
> - 0.75
> - 0.1
>   > [!success]- Lösung
>   > 0.1

> [!faq] Um das zu berechnen, benutzen wir den:
>
> - Satz von Gauss
> - Satz von Bayes
> - Satz von Pythagoras
>   > [!success]- Lösung
>   > Satz von Bayes

# Der Satz von Bayes

## Beispiel

Ein einfaches Beispiel soll die Wirkungsweise des Satz von Bayes verdeutlichen:

### Medizinischer Test

Ein medizinischer Test soll das Vorliegen einer Krankheit feststellen. Solche Tests sind nicht ganz fehlerfrei, es kommt zu falsch positiven und falsch negativen Ergebnissen.

Wir definieren uns folgende Ereignisse:

- $A$: Eine Person ist krank
- $B$: Der Test zeigt ein positives Ergebnis

Der Test wird durchgeführt, wenn gewisse Symptome auftreten. Aus Erfahrung weiß man, dass 2% derjenigen, die den Test machen, wirklich die Krankheit haben. Bevor jemand den Test macht, nehmen wir also an, dass sie Wahrscheinlichkeit für $A$ 2% ist. Wir nennen diese auch _Priori-Wahrscheinlichkeit_ - Wahrscheinlichkeit vor der Beobachtung (lateinisch _a priori_, etwa "von vorher"):

- $P(A) = 0.02$ (Wahrscheinlichkeit, die Krankheit zu haben)
- $P(\bar{A}) = 0.98$ (Wahrscheinlichkeit, die Krankheit nicht zu haben)

Liegt die Krankheit vor, zeigt der Test in 95% der Fälle ein (korrektes) positives Ergebnis, in 5% der Fälle ein (falsches) negatives Ergebnis:

- $P(B|A) = 0.95$ (korrekt positiv)
- $P(B|\bar{A}) = 0.05$ (falsch negativ)

Liegt keine Krankheit vor, zeigt der Test in 90% der Fälle ein (korrektes) negatives Ergebnis, in 10% der Fälle ein (falsches) positives Ergebnis:

- $P(\bar{B}|A) = 0.9$ (korrekt negativ)
- $P(\bar{B}|\bar{A}) = 0.1$ (falsch positiv)

Die Annahmen über die Wahrscheinlichkeit von $B$ gegeben $A$ nennen wir _Modell-Annahmen_. Ihnen liegt ein stochastisches Modell zugrunde, hier die _Bernoulli-Verteilung_ (Binomial-Verteilung mit $n = 1$).

### Fragestellung

Frage: Wie groß ist die Wahrscheinlichkeit, krank zu sein, wenn der Test positiv ausfällt?

Wir nennen diese gesuchte Wahrscheinlichkeit die _Posteriori-Wahrscheinlichkeit_, von lateinisch _a posteriori_, etwa "von nachher".

Für die Beantwortung dieser Frage brauchen wir den _Satz von Bayes_.

## Der Satz von Bayes

Der Satz von Bayes ermöglicht es uns, die bedingte Wahrscheinlichkeit "umzudrehen" (bis ins 20. Jahrhundert sprach man auch von _inverser Wahrscheinlichkeit_). Wir wissen die bedingte Wahrscheinlichkeit eines Ereignisses $B$ gegeben das Ereignis $A$ eingetreten ist. Daraus können wir schließen, wie die Wahrscheinlichkeit des Ereignisses $A$ gegeben das Ereignis $B$ eingetreten ist.

Der Satz von Bayes lautet in der einfachsten Form

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

oder auch:

$$
\text{Posteriori} = \frac{\text{Bedingte Wahrscheinlichkeit d. Beobachtung} \cdot \text{Priori}}{\text{Marginale Wahrscheinlichkeit d. Beobachtung}}
$$

Wenn wir $P(B)$ nicht kennen, können wir die Wahrscheinlichkeit wie folgt über die bedingten Wahrscheinlichkeiten berechnen. Zusammengenommen lautet der Satz von Bayes dann:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B|A)P(A) + P(B|\bar{A})P(\bar{A})}
$$

## Medizinischer Test

Zurück zum Beispiel medizinischer Test. Unsere Frage war: Wie groß ist die Wahrscheinlichkeit, krank zu sein, wenn der Test positiv ausfällt?

### Priori-Annahmen:

- $P(A) = 0.02$ (Person ist krank)
- $P(\bar{A}) = 0.98$ (Person ist gesund)

### Modell-Annahmen

- $P(B|A) = 0.95$ (richtig positiv)
- $P(B|\bar{A}) = 0.05$ (falsch negativ)
- $P(\bar{B}|A) = 0.9$ (richtig negativ)
- $P(\bar{B}|\bar{A}) = 0.1$ (falsch positiv)

Wir setzen die Priori-Wahrscheinlichkeit $P(A)$ und die bedingten Wahrscheinlichkeiten $P(B|A)$ und $P(B|\bar{A})$ in den Satz von Bayes ein:

$$
\begin{aligned}
P(A|B) &= \frac{P(B|A) \cdot P(A)}{P(B|A)P(A) + P(B|\bar{A})P(\bar{A})} \\
&= \frac{0.95 \cdot 0.02}{0.95 \cdot 0.02 + 0.05 \cdot 0.98} \\
&= \frac{0.019}{0.019 + 0.049} \\
&= 0.162…
\end{aligned}
$$

### Interpretation

Nach Beobachtung des positiven Testergebnisses ist also die Wahrscheinlichkeit, dass die Person krank ist etwa 16,2%. Aus unserer Priori-Wahrscheinlichkeit wurde durch die Beobachtung die Posteriori-Wahrscheinlichkeit.

Die Posteriori-Wahrscheinlichkeit $P(A|B)$ ist hier relativ gering, weil schon die Priori-Wahrscheinlichkeit $P(A)$ sehr gering war.

Auch der Effekt eines negativen Tests lässt sich berechnen:

$$
\begin{aligned}
P(A|\bar{B}) &= \frac{P(\bar{B}|A) \cdot P(A)}{P(\bar{B}|A)P(A) + P(\bar{B}|\bar{A})P(\bar{A})} \\
&= \frac{0.9 \cdot 0.02}{0.9 \cdot 0.02 + 0.1 \cdot 0.98} \\
&= \frac{0.018}{0.018 + 0.098} \\
&= 0.155…
\end{aligned}
$$

Ist der Test also negativ, ist die Wahrscheinlichkeit, dass die Person krank ist, bei etwa 15,5%. Praktisch können wir in diesem Fall also mit großer Wahrscheinlichkeit ausschließen, dass die Person Krankheit hat.

Im Kontext des medizinischen Tests benötigen wir $P(B|\bar{A})P(\bar{A})$ im Nenner der Bayes-Formel, weil wir nicht nur die Wahrscheinlichkeit berücksichtigen wollen, dass eine kranke Person positiv getestet wird, sondern auch die Wahrscheinlichkeit, dass eine gesunde Person fälschlicherweise positiv getestet wird.

Der Term $P(B|A)P(A)$ gibt uns die Wahrscheinlichkeit, dass jemand, der krank ist, auch einen positiven Test hat, während $P(B|\bar{A})P(\bar{A})$ die Wahrscheinlichkeit darstellt, dass jemand, der nicht krank ist, dennoch ein positives Testergebnis erhält. Ohne diesen zweiten Term würden wir die Häufigkeit von falsch positiven Ergebnissen im Bezug auf die gesamte Population ignorieren, was zu einer Überschätzung der tatsächlichen Wahrscheinlichkeit führen würde, dass eine Person mit einem positiven Test tatsächlich krank ist. Der Satz von Bayes berücksichtigt beide Aspekte, um ein umfassendes Bild der Posteriori-Wahrscheinlichkeit zu geben.

## Bemerkungen

- **Priori-Wahrscheinlichkeit** ($P(A)$) gleich 0, dann ist auch die **Posteriori-Wahrscheinlichkeit** unabhängig vom Modell immer gleich 0 - wir schließen ja schon **a priori** aus, dass die Person krank ist.

- Ist die **Priori-Wahrscheinlichkeit** gleich 1, dann ist auch die **Posteriori-Wahrscheinlichkeit** unabhängig vom Modell immer gleich 1 - wir sind ja schon **a priori** sicher, dass die Person krank ist.

- Ist die Wahrscheinlichkeit für einen **falsch positiven Test** gleich 0, dann ist die **Posteriori-Wahrscheinlichkeit** bei positivem Test gleich 1.

- Ist die Wahrscheinlichkeit für den **falsch positiven Test** und die Wahrscheinlichkeit für einen **richtig positiven Test** jeweils gleich 0.5, dann ist die **Posteriori-Wahrscheinlichkeit** gleich der **Priori-Wahrscheinlichkeit** - der Test sagt dann ja nicht aus, das Testergebnis ($B$) ist stochastisch unabhängig von $A$.

- Mit größerer **Priori-Wahrscheinlichkeit** ist auch die **Posteriori-Wahrscheinlichkeit** größer - wir "**glauben**" ja schon vorher eher daran, dass die Person krank ist.

- Bei **positivem Testergebnis** ist die **Posteriori-Wahrscheinlichkeit** größer (oder gleich) als die **Priori-Wahrscheinlichkeit** - die Beobachtung des Testergebnisses "**drückt**" die Wahrscheinlichkeit also in eine Richtung; wir **lernen** aus der Beobachtung.

- Analog ist bei **negativem Testergebnis** die **Posteriori-Wahrscheinlichkeit** kleiner (oder gleich) als die **Priori-Wahrscheinlichkeit**.

- Für "**schlechte Test**" (also geringe Wahrscheinlichkeit für **richtig positiven Test** oder hohe Wahrscheinlichkeit für **falsch positive Tests**) ist der Unterschied zwischen **Priori-** und **Posteriori-Wahrscheinlichkeit** geringer - wir **lernen** weniger aus der Beobachtung.

# Bayesianisches Lernen

> [!summary] Zusammenfassung
> In der Anwendung des Satzes von Bayes auf medizinische Tests und Qualitätskontrolle lernen wir, wie man anhand von Daten Wahrscheinlichkeiten aktualisiert. Im medizinischen Kontext helfen uns _a priori_ und _a posteriori_ Wahrscheinlichkeiten zu verstehen, wie sich die Einschätzung der Krankheitswahrscheinlichkeit eines Patienten nach einem Testergebnis ändert. In der Qualitätskontrolle nutzen wir den Satz von Bayes, um die Wahrscheinlichkeit zu bestimmen, dass ein Produkt von einer bestimmten Firma stammt, basierend auf der Anzahl der gefundenen Ausschussstücke. Diese fortgeschrittenen Bayesianischen Methoden ermöglichen es uns, unsere Schätzungen zu verfeinern und zu verbessern, während wir mehr Daten sammeln, und illustrieren die dynamische Natur von Wahrscheinlichkeiten in der statistischen Inferenz.

Der Satz von Bayes hilft also, aus $B$ für $A$ zu lernen. Beim Beispiel "medizinischer Test" war

- _a priori_, also vor dem Test die Wahrscheinlichkeit, dass der Patient krank ist, bei 2%,
- _a Posteriori_, also nach positivem Testergebnis, lag die Wahrscheinlichkeit, dass der Patient krank ist, bei 16,2%.

Durch die Beobachtung (des Testergebnisses) haben wir Wissen (Information) hinzugewonnen. Information wird durch eine Wahrscheinlichkeitsverteilung ausgedrückt.

Wir können allerdings nur dann Wissen hinzugewinnen, wenn $A$ und $B$ nicht (stochastisch) unabhängig sind. Sind $A$ und $B$ unabhängig, gilt nämlich

$$
P(A \cap B) = P(A)P(B)
$$

und nach Definition der bedingten Wahrscheinlichkeit

$$
P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)P(B)}{P(B)} = P(A)
$$

Das heißt, das Eintreten (oder Nicht-Eintreten) von $B$ ändert die Wahrscheinlichkeit von $A$ nicht, liefert also keine Information über $A$.

## Qualitätskontrolle

Wir sehen uns ein weiteres Beispiel aus der Qualitätskontrolle an:

In einer Fabrik werden Vorprodukte von zwei verschiedenen Firmen (A Productions und B-warez) weiterverarbeitet. Dabei stammen 70% der Vorprodukte von Firma A und 30% von Firma B. Aus langjähriger Erfahrung wissen die Arbeiter der Fabrik:

- Die Ausschussquoten betragen 1% bei Firma A und 5% bei Firma B.

Die Arbeiter finden eine neutrale Kiste des Vorprodukts (mit sehr vielen Teilen) ohne weitere Information über den Hersteller. Sie kontrollieren $n = 100$ Stück und entdecken $y$ Ausschussstücke. Ist aus diesem Ergebnis ein Rückschluss auf den Produzenten möglich?

Sei also:

- Ereignis $A$: Los kommt von Firma A Productions
- Zufallsvariable $Y$: "Anzahl der Ausschussstücke" bei $n = 100$

Für unsere Beobachtung können wir eine Verteilung angeben, die jedoch vom Eintreten von $A$ abhängt. Es handelt sich um eine Binomial-Verteilung mit $n = 100$, wobei die Wahrscheinlichkeit des Eintretens von $A$ abhängt:

- Ist $A$ eingetreten, also die Kiste kommt von Firma A, dann ist die Wahrscheinlichkeit für die Produktion eines Ausschussstückes $p_A = 0.01$
- Ist dagegen $\bar{A}$ eingetreten, also die Kiste kommt aus Firma B, dann ist die Wahrscheinlichkeit $p_B = 0.05$

Bemerkung: Eigentlich wird hier Ziehen ohne Zurücklegen gemacht, sprich wir müssten die Hypergeometrische Verteilung benutzen. Da wir aber keine Angabe über die Anzahl der Teile in der Kiste haben (nur "sehr viele"), nehmen wir die Binomialverteilung als Annäherung.

Dementsprechend ergibt sich die bedingte Verteilung bzw. Datenverteilung von $Y$:

$$
Y|A \sim B(n, p_A)
$$

$$
Y|\bar{A} \sim B(n, p_B)
$$

mit der Wahrscheinlichkeit der Binomialverteilung:

$$
P(Y = y|A) = \binom{n}{y} p_A^y (1 - p_A)^{n-y}
$$

## Satz von Bayes

Der Satz von Bayes lässt sich analog wie zuvor anwenden:

$$
P(A|Y = y) = \frac{P(Y = y|A) \cdot P(A)}{P(Y = y)}
$$

## Posteriori-Wahrscheinlichkeiten

Es ergeben sich folgende Posteriori-Wahrscheinlichkeiten:

| y                  | 0     | 1     | 2     | 3     | 4     | 5     | 6     |
| ------------------ | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| P(A &#124; Y = y)  | 0.993 | 0.965 | 0.842 | 0.505 | 0.164 | 0.036 | 0.007 |
| P(¬A &#124; Y = y) | 0.007 | 0.035 | 0.158 | 0.495 | 0.836 | 0.964 | 0.993 |

Je nach Höhe von y können wir also mehr oder weniger gut angeben, aus welcher Firma das Los wahrscheinlich kommt.

Bei y = 3 können wir uns nicht wirklich zwischen den Firmen entscheiden, aber die Posteriori-Wahrscheinlichkeit

$$
P(A|Y = y) = 0.505
$$

ist kleiner als unsere ursprüngliche Priori-Wahrscheinlichkeit $P(A) = 0.7$.

## Weiter Lernen

In diesem Fall können wir die Posteriori-Wahrscheinlichkeit $P(A|Y = y)$ wiederum als Priori für eine neue Stichprobe verwenden.

Sei nun:

- Zufallsvariable $Z$: "Anzahl der Ausschussstücke" bei weiteren $n = 100$

Offensichtlich gilt wieder $Z \sim B(n,p)$. Nun lässt sich $P(A|Z = z, Y = y)$ wie folgt berechnen:

$$
P(A|Z = z, Y = y) = \frac{P(Z = z|A) \cdot P(A|Y = y)}{P(Z =z)}
$$

Die Wahrscheinlichkeitsverteilung $P(Z = z|A)$ der Daten hängt nicht von $Y$ ab. Als Priori benutzen wir hier die vorherige Posteriori-Wahrscheinlichkeit.

## Neue Posteriori-Wahrscheinlichkeiten

Sehen wir nach den $y = 3$ Stücken Ausschuss unter den ersten 100 untersuchten Stücken erneut $z$ Stücke Ausschuss, so erhalten wir folgende Posteriori-Wahrscheinlichkeiten:

Für $z$ Stücke Ausschuss erhalten wir neue Posteriori-Wahrscheinlichkeiten:

$$
P(A | Z = z, Y = y) = \ldots
$$

Zum Beispiel geht bei erneut $z = 3$ Ausschussstücken unsere Tendenz nun klarer in Richtung Firma B.

# Quiz

Bei einem Radrennen wird ein Doping-Test durchgeführt. Die Firma, die den Test herstellt, gibt an, dass der Test zu 99.5% positiv ausfällt, falls ein Sportler gedopt ist. Ist ein Sportler nicht gedopt, so beträgt die Wahrscheinlichkeit für einen positiven Test 1%. Aus Erfahrung schätzt man, dass ein Viertel der Sportler gedopt ist.

Sei $D$ die Zufallsvariable: *Der Sportler ist gedopt* und $T$ die Zufallsvariable: *Der Test fällt positiv aus*.

> [!faq] Welche der folgenden Aussagen sind richtig? (Mehrere Antworten können richtig sein)
>
> - P(D)=0.01
> - P(D¯)=0.75
> - P(D)=0.995
> - P(D¯)=0.995
>   > [!success]- Lösung
>   > P(D¯)=0.75

> [!faq] Welche der folgenden Aussagen sind richtig? (Mehrere Antworten können richtig sein)
>
> - P(T|D)=0.995
> - P(T|D¯)=0.01
> - P(T|D)=0.01
> - P(T|D)=0.25
>   > [!success]- Lösung
>   > P(T|D)=0.995
>   > P(T|D¯)=0.01

> [!faq] Wie groß ist die Wahrscheinlichkeit, dass der Test positiv ausfällt?
>
> - P(T|D)=0.48
> - P(T)=0.48
> - P(T)=0.25625
> - P(T)=0.995
>   > [!success]- Lösung
>   > P(T)=0.25625

> [!faq] Wie groß ist die Wahrscheinlichkeit, dass ein Sportler nicht gedopt ist, obwohl der Test positiv ausfällt?
>
> - P(D¯|T)≈0.168
> - P(D¯|T)≈0.039
> - P(D¯|T)≈0.029
>   > [!success]- Lösung
>   > P(D¯|T)≈0.168

> [!faq] Um das zu berechnen, benutzen wir den:
>
> - Satz von Gauss
> - Satz von Bayes
> - Satz von Pythagoras
>   > [!success]- Lösung
>   > Satz von Bayes

# Nächstes Kapitel: [[BaySta-Kapitel-Grundlagen]]

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    console.log(randomNumber)
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
