---
tags:
  - 4semester
  - BaySta
  - statistik
  - Übungsblatt
fach: "[[BaySta]]"
Thema:
date created: Monday, 22. April 2024, 23:35
date modified: Thursday, 25. April 2024, 18:32
---


# Aufgabe 1

>[!note] Aufgabenstellung
>Eine Schokoladenfabrik stellt Pralinen her, die jeweils eine Kirsche enthalten. Die benötigten Kirschen werden an zwei Maschinen entkernt. Maschine A liefert 70 % dieser Kirschen, wobei 8 % der von A gelieferten Kirschen den Kern noch enthalten. Maschine B produziert 30 % der benötigten Kirschen, wobei 5 % der von B gelieferten Kirschen den Kern noch enthalten. Bei einer abschließenden Gewichtskontrolle werden 95 % der Pralinen, in denen ein Kirschkern enthalten ist, aussortiert, aber auch 2 % der Pralinen ohne Kern.

## (a) Modellieren Sie diesen mehrstufigen Vorgang geeignet. Wie groß ist die Wahrscheinlichkeit, dass eine Praline mit Kirschkern in den Verkauf gelangt?

- Maschine A liefert 70% der Kirschen mit Fehlerquote von 8%
- Maschine B liefert 30% der Kirsche mit Fehlerquote von 5%
- Endkontrolle:
	- 95% der Pralinen mit Kern werden korrekt aussortiert
	- 2% der Pralinen ohne Kern werden fälschlicherweise aussortiert

Gefragt ist nach: **Praline mit Kirschkern wird nicht aussortiert**

$$
\begin{aligned}
P(\text{"Kirschkern landet im Verkauf"}) &= (0.7\cdot0.08+0.3\cdot0.05) \cdot 0.05\\
&= 0.00355 \\
&\approx 0.36 \space \%
\end{aligned}
$$

## (b) Ein Kunde kauft eine Packung mit 100 Pralinen. Wie groß ist die Wahrscheinlichkeit, dass nur gute Pralinen, also Pralinen ohne Kirschkern, in der Packung sind?

$$
\begin{aligned}
P({\text{"Kein Kirschkern landet im Verkauf"}}) &= 1- P(\text{"Kirschkern landet im Verkauf"})\\
&= 1-(0.7\cdot0.08+0.3\cdot0.05) \cdot 0.05\\
&=1-0.00355 \\
&=0.99645\\
&\approx 99.6 \space \%
\end{aligned}
$$

# Aufgabe 2

>[!note] Aufgabenstellung
>Nehmen wir an, die Prävalenz von Corona an einem gewissen Tag liege bei 20 ansteckenden Personen bei 100.000 Einwohnern.
>
>Die Spezifität (Wahrscheinlichkeit, dass der Test einer gesunden Person negativ ausfällt) eines Antigen-Tests liege bei 98%. Die Sensitivität (Wahrscheinlichkeit, dass der Test bei einer erkrankten Person positiv ausfällt) des Antigen-Tests liege bei 90%.
>
>Die Spezifität eines PCR-Tests liege bei 99%. Die Sensitivität des PCR-Tests liege bei 98%.
>
>Es sei folgendes Vorgehen üblich: Es wird erst ein Antigen-Test durchgeführt. Fällt er positiv aus, so wird ein PCR-Test ausgeführt.

## (a) Formulieren Sie die hier dargestellten Ereignisse und Wahrscheinlichkeiten.

$P(T) = \text{Test positiv}$  
$P(Krank) = P(K)= \frac{20}{100000}=0.0002$

### Antigen-Test:
- $P_{AG}(\overline T | \overline{Krank}) = 0.98$
- $P_{AG}( T | Krank) = 0.90$

### PCR-Test:
- $P_{PCR}(\overline T | \overline{Krank}) = 0.99$
- $P_{PCR}( T | Krank) = 0.98$

## (b) Wie hoch ist die Wahrscheinlichkeit, dass eine Person, bei der auch der PCR-Test positiv ist, tatsächlich Corona-infiziert ist?

Um die Wahrscheinlichkeit zu bestimmen, dass eine Person tatsächlich Corona-infiziert ist, nachdem sowohl der Antigen-Test als auch der PCR-Test positiv ausgefallen sind, können wir den Satz von Bayes verwenden. Wir formulieren die erforderlichen Wahrscheinlichkeiten und wenden die Gesetze der Wahrscheinlichkeit an:

### Gegeben:
- $P(K) = \text{Wahrscheinlichkeit, dass eine Person infiziert ist} = 0.0002$
- $P(\overline{K}) = \text{Wahrscheinlichkeit, dass eine Person nicht infiziert ist} = 0.9998$

- $P_{AG}(T | K) = \text{Sensitivität des Antigen-Tests} = 0.90$
- $P_{AG}(\overline{T} | \overline{K}) = \text{Spezifität des Antigen-Tests} = 0.98$

- $P_{PCR}(T | K) = \text{Sensitivität des PCR-Tests} = 0.98$
- $P_{PCR}(\overline{T} | \overline{K}) = \text{Spezifität des PCR-Tests} = 0.99$

### Berechnung der Wahrscheinlichkeiten:

- Wahrscheinlichkeit, dass beide Tests positiv sind, wenn die Person krank ist:
$$
P_{AG \cap PCR}(T | K) = P_{AG}(T | K) \times P_{PCR}(T | K) = 0.90 \times 0.98 = 0.882
$$

- Wahrscheinlichkeit, dass beide Tests positiv sind, wenn die Person nicht krank ist:
$$
P_{AG \cap PCR}(T | \overline{K}) = (1 - P_{AG}(\overline{T} | \overline{K})) \times (1 - P_{PCR}(\overline{T} | \overline{K})) = 0.02 \times 0.01 = 0.0002
$$

- Gesamtwahrscheinlichkeit, dass beide Tests positiv sind:
$$
P_{AG \cap PCR}(T) = P_{AG \cap PCR}(T | K) \times P(K) + P_{AG \cap PCR}(T | \overline{K}) \times P(\overline{K}) = 0.882 \times 0.0002 + 0.0002 \times 0.9998 = 0.0003764
$$

### Anwendung der Bayes-Formel:
$$
P(K | T_{AG \cap PCR}) = \frac{P_{AG \cap PCR}(T | K) \times P(K)}{P_{AG \cap PCR}(T)} = \frac{0.882 \times 0.0002}{0.0003764} \approx 0.468
$$

### Antwort:
Die Wahrscheinlichkeit, dass eine Person tatsächlich Corona-infiziert ist, nachdem sowohl der Antigen-Test als auch der PCR-Test positiv ausgefallen sind, beträgt ungefähr $46.8\%$.

## (c) Wie hoch ist die Wahrscheinlichkeit, dass eine infizierte Person nicht erkannt wird?

>[!danger] Aufgepasst!
>Es ist wichtig, den Unterschied zu verstehen: $P(\overline{T} | K)$ gibt die Wahrscheinlichkeit an, dass der Test negativ ist, obwohl die Person infiziert ist. Dies ist relevant, um die Zuverlässigkeit des Tests zu bewerten. Hingegen bedeutet $P(K | \overline{T})$, dass eine Person tatsächlich infiziert ist, obwohl ihr Test negativ ausgefallen ist. Diese Wahrscheinlichkeit ist wichtig, um das Risiko einer unerkannten Infektion bei einem negativen Testergebnis einzuschätzen.

Die Wahrscheinlichkeit, dass der Antigen-Test negativ ist, obwohl die Person infiziert ist (Fehlalarmrate oder Fehler 2. Art), ist das Komplement der Sensitivität des Tests:

$$
P_{AG}(\overline{T} | K) = 1 - P_{AG}(T | K) = 1 - 0.90 = 0.10
$$
$$
P_{AG}(\overline{T} | K) = 0.10
$$

Diese Wahrscheinlichkeit gibt an, dass 10 % der tatsächlich infizierten Personen durch den Antigen-Test nicht erkannt werden. Der PCR-Test ist nicht nötig, da dieser bei einem negativen Antigen-test nicht ausgeführt wird.


--- 


>[!note] Aufgabenstellung
>Alternativ ist folgendes Vorgehen üblich: Es werden nur Personen mit starken Symptomen getestet. Das betrifft etwa 2% der Personen. Wir können annehmen, dass unter diesen etwa 1% der Personen infiziert sind.
## (d) Formulieren Sie die hier dargestellten Ereignisse und Wahrscheinlichkeiten.

$$
\begin{aligned}
P(\text{"Starke Symptome"})&=  0.02\\

\end{aligned}
$$
$$
P(\text{"Krank" | "Starke Symptome"})=0.01
$$

## (e) Wie hoch ist die Wahrscheinlichkeit, dass eine Person bei der bei diesem Vorgehen der PCR-Test positiv ist, tatsächlich Corona-infiziert ist? 

#Frage 

>[!bug] Saß zu lange an dieser Aufgabe, hab aufgegeben 🪦
### Gesucht

Die Wahrscheinlichkeit $P(\text{Krank} | T)$, dass eine Person, die einen positiven PCR-Test hat, tatsächlich mit Corona infiziert ist, nachdem zuvor ein positiver Antigen-Test vorliegt.

### Gegeben

- $P(\text{"Krank" | "Starke Symptome"}) = 0.01$ (Wahrscheinlichkeit, dass eine Person krank ist, gegeben dass sie starke Symptome zeigt)
- $P(\text{"Starke Symptome"}) = 0.02$ (Wahrscheinlichkeit, dass eine Person starke Symptome zeigt)
- $P_{PCR}(T | \text{Krank}) = 0.98$ (Sensitivität des PCR-Tests)
- $P_{PCR}(\overline{T} | \overline{\text{Krank}}) = 0.99$ (Spezifität des PCR-Tests)
- $P_{AG}(T | \text{Krank}) = 0.90$ (Sensitivität des Antigen-Tests)
- $P_{AG}(T | \overline{\text{Krank}}) = 0.02$ (Wahrscheinlichkeit eines falsch positiven Antigen-Tests, abgeleitet aus der Spezifität von 98%)

### Berechnung

Die Gesamtwahrscheinlichkeit eines positiven PCR-Tests $P(T)$ unter Personen mit einem vorherigen positiven Antigen-Test ist:

$$
P(T) \approx 0.009018\approx \text{(0.9018\%)}
$$

Die Wahrscheinlichkeit, dass eine Person, die einen positiven PCR-Test hat, tatsächlich mit Corona infiziert ist, gegeben dass zuvor ein Antigen-Test positiv war, beträgt:

$$
P(\text{Krank} | T) \approx 0.9780 \approx\text{(97.80\%)}
$$

Dies berücksichtigt das Vorgehen, bei dem nur Personen mit einem vorherigen positiven Antigen-Test anschließend einen PCR-Test erhalten.

---
### Gesucht:

$$
P_{AG}(K|T) \cap P_{PCR}(K|T) 
$$

### Bekannt:

- $P_{AG}(T | K) = \text{Sensitivität des Antigen-Tests} = 0.90$
- $P_{PCR}(T | K) = \text{Sensitivität des PCR-Tests} = 0.98$
- $P(\text{"Starke Symptome"})=P(S)=  0.02$
- $P(\text{"Krank" | "Starke Symptome"})=0.01$

$$
\begin{aligned}
P(K) &= P(K|S) \cdot P(S) + P( K|\overline S) \cdot P(\overline S)\\
&=0.01\cdot0.02+ 
\end{aligned}
$$

$$
\begin{aligned}
P_{AG}(T) &= P_{AG}(T | K) \cdot P(K) + P_{AG}(\overline{T} | \overline{K}) \cdot P(\overline{K})\\


\end{aligned}
$$

$$
\begin{aligned}
P_{AG}(K\space|\space T) &= \frac{P_{AG}(T | K) \cdot P(K)}{P_{AG}(T)}\\
\\

\\

\\

\end{aligned}
$$

## (f) Wie hoch ist die Wahrscheinlichkeit, dass eine infizierte Person nicht erkannt wird?

# Aufgabe 3

>[!note] Aufgabenstellung
Wir betrachten ein Binomial-Experiment. Sei $x \sim B(n, \pi)$. Wir betrachten im Folgenden zwei Ansätze:
>
>1. $\pi$ ist stetig
>2. $\pi$ sei diskret und nehme Werte auf einem Gitter $[0, 0.01, 0.02, …, 0.99, 1]$ an.

## (a) Ausgehend von Laplace' Prinzip vom unzureichenden Grund: Wie sieht in beiden Fällen die Priori von $\pi$ aus?

## (b) Leiten Sie jeweils die Posteriori für $\pi|x$ her.

## (c) Berechnen Sie jeweils den Posteriori-Erwartungswert und den Posteriori-Median für folgende Daten:

   - $n = 10, x = 3$
   - $n = 100, x = 13$
   - $n = 1000, x = 33$

## (d) Vergleichen Sie die Posteriori-Erwartungswerte und -Mediane mit beiden Ansätzen.

## (e) Welchen Ansatz würden Sie eher bevorzugen?

# Aufgabe 4

>[!note] Aufgabenstellung
>Betrachten Sie das Poisson-Modell, d.h. $X \sim Po(\lambda)$ und für den Parameter $\lambda$ wird eine $Ga(\alpha, \beta)$-Priori-Verteilung angenommen.

## (a) Berechnen sie die Posteriori-Verteilung $p(\lambda|X)$ explizit, d.h. inklusive Normierungskonstante.

>[!tip] Hinweis
> $\Gamma(x) = \int_{0}^{\infty} t^{x-1} e^{-t} \, dt$.

## (b) Warum genügt es, die Posteriori nur bis auf eine multiplikative Konstante zu bestimmen?
