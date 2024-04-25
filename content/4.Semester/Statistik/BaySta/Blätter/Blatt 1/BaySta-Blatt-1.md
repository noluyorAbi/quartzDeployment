---
tags:
  - 4semester
  - BaySta
  - statistik
  - Übungsblatt
fach: "[[BaySta]]"
Thema:
  - "[[Unterschied zwischen Stetigkeit und Diskretheit]]"
  - "[[Priori und Posteriori Wahrscheinlichkeit]]"
date created: Monday, 22. April 2024, 23:35
date modified: Friday, 26. April 2024, 00:07
---

# TODO:

- [ ] [[BaySta-Blatt-1#Aufgabe 2#(e) Wie hoch ist die Wahrscheinlichkeit, dass eine Person bei der bei diesem Vorgehen der PCR-Test positiv ist, tatsächlich Corona-infiziert ist?|BaySta-Aufgabe2-2e nochmal machen]]

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

>[!bug] Saß zu lange an dieser Aufgabe, hab aufgegeben (easily 1.5h+ input) 🪦
>- Welche Schritte wie das ganze angehen? 
>- Meine probierte Lösung ist unter dem Trennstrich
>- Es fehlt $P(K)$ bzw $P( K | \overline S )$
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

#Frage Ist das nicht gleich zur Teilaufgabe davor?

### Gesucht:

$$
P(\text{"Test negativ" | "Krank"})=P_{AG}(\overline T|K)
$$

$$
P_{AG}(\overline{T} | K) = 1 - P_{AG}(T | K) = 1 - 0.90 = 0.10
$$
$$
P_{AG}(\overline{T} | K) = 0.10
$$

# Aufgabe 3
## [[Unterschied zwischen Stetigkeit und Diskretheit]]

>[!note] Aufgabenstellung
Wir betrachten ein Binomial-Experiment. Sei $x \sim B(n, \pi)$. Wir betrachten im Folgenden zwei Ansätze:
>
>1. $\pi$ ist stetig
>2. $\pi$ sei diskret und nehme Werte auf einem Gitter $[0, 0.01, 0.02, …, 0.99, 1]$ an.

## (a) Ausgehend von Laplace' Prinzip vom unzureichenden Grund: Wie sieht in beiden Fällen die Priori von $\pi$ aus?

Priori Verteilung bedeutet, dass $\pi$ eine stetige Gleichverteilung ist, die als $U(0,1)$ dargestellt wird 

*1.Fall:*
- $\pi$ ist stetig $\rightarrow \frac{1}{b-a}\space für\space \pi \in [a,b]$
- Da $a=0$ und $b=1$ $\rightarrow f(\pi) = 1 \space für \space \pi \in[0,1]$
- Das bedeutet, dass die Wahrscheinlichkeit für jeden Wert von $\pi$ innerhalb dieses Bereichs gleich ist, und die kumulative Verteilungsfunktion (CDF) ist:
$$
F(\pi)=\pi \space für\space x\in[0,1]
$$
 **Fall 2:** 
 - $\pi$ ist diskret und nimmt Werte auf einem Gitter $[0, 0.01, 0.02, …, 0.99, 1]$ an
$$
P(\pi = k) = \frac{1}{101} \space für\space k\in \{0,0.01,0.02,…,0.99,1\}
$$

>[!info]- Erklärung
> Das obige zeigt eine Aufgabenstellung zur Bayes-Statistik mit Bezug auf das Laplace'sche Prinzip des unzureichenden Grundes. Wir betrachten ein Binomial-Experiment, bei dem die Wahrscheinlichkeit $\pi$ eine unbekannte Größe ist, und es wird eine Priori-Verteilung für $\pi$ auf Basis dieses Prinzips gesucht. Hier wird zwischen zwei Fällen unterschieden: einer stetigen und einer diskreten Verteilung von $\pi$.
> ### Stetige Gleichverteilung (Fall 1)
> In einer stetigen Gleichverteilung $\mathrm{U}(a, b)$ hat jedes Element im Intervall $[a, b]$ die gleiche Wahrscheinlichkeit. Die Dichte $f(\pi)$ wird als konstant $1/(b-a)$ für alle $\pi$ im Intervall angenommen, da die Fläche unter der Dichtefunktion 1 sein muss (was die Gesamtwahrscheinlichkeit repräsentiert). Für $a = 0$ und $b = 1$ (wie es im Fall der Binomialverteilung für eine Wahrscheinlichkeit $\pi$ sinnvoll ist), ist die Dichte einfach $1/(1-0) = 1$. Dies bedeutet, dass jedes $\pi$ im Intervall $[0, 1]$ gleich wahrscheinlich ist.
> Die kumulative Verteilungsfunktion (CDF) gibt die Wahrscheinlichkeit an, dass die Zufallsvariable $\pi$ kleiner oder gleich einem bestimmten Wert ist. Für eine stetige Gleichverteilung ist die CDF einfach $F(\pi) = \pi$, weil sie linear von 0 bis 1 ansteigt.
> ### Diskrete Gleichverteilung (Fall 2)
> Für eine diskrete Gleichverteilung, bei der die Zufallsvariable $\pi$ nur bestimmte Werte annehmen kann (hier ein Gitter von 0 bis 1 in Schritten von 0.01), wird jedem dieser Punkte die gleiche Wahrscheinlichkeit zugeordnet. Da es 101 solche Punkte gibt, ist die Wahrscheinlichkeit für jeden Punkt $1/101$.
> In beiden Fällen geht man davon aus, dass man keine Informationen über $\pi$ hat, außer dass es zwischen 0 und 1 liegt. Daher behandelt man alle möglichen Werte von $\pi$ als gleich wahrscheinlich.
> In der Bayes-Statistik werden diese Priori-Verteilungen genutzt, um sie mit den Daten zu kombinieren und so eine Posteriori-Verteilung zu erhalten. Diese reflektiert dann sowohl das Vorwissen (die Priori-Verteilung) als auch die Informationen aus den Daten.
## (b) Leiten Sie jeweils die Posteriori für $\pi|x$ her. [[Erstellung der Posteriori-Verteilung im Bayes'schen Kontext|(Erstellung der Posteriori-Verteilung im Bayes'schen Kontext)]]

Die Posteriori-Wahrscheinlichkeit $p(\pi|x)$ ist die Wahrscheinlichkeit für den Parameter $\pi$ gegeben die beobachteten Daten $x$. Um diese zu berechnen, verwenden wir das Bayes'sche Theorem:

$$
p(\pi|x)=\frac{f(x|\pi)f(\pi)}{f(x)}
$$

### Schritte zur Herleitung der Posteriori-Verteilung

1. **Bestimmung der Likelihood $f(x|\pi)$:**  
   Die Likelihood-Funktion $f(x|\pi)$ für ein Binomial-Experiment mit $n$ Versuchen und $k$ Erfolgen ist gegeben durch die Binomialverteilung:

   $$
   f(x|\pi) = \binom{n}{k} \pi^k (1 - \pi)^{n-k}
   $$

2. **Bestimmung der Priori-Verteilung $f(\pi)$:**  
   Wenn keine vorherige Information über $\pi$ vorliegt, nehmen wir an, dass $\pi$ gleichverteilt ist. Das bedeutet:

   - Für eine stetige Gleichverteilung:

     $$
     f(\pi) = 1 \text{ für } 0 \leq \pi \leq 1
     $$

   - Für eine diskrete Gleichverteilung auf einem Gitter von 0 bis 1 in Schritten von 0.01:

     $$
     f(\pi) = \frac{1}{101}
     $$

3. **Bestimmung der Marginal Likelihood $f(x)$:**  
   Die Marginal Likelihood $f(x)$ ist die Wahrscheinlichkeit der beobachteten Daten über alle möglichen Werte von $\pi$. Dies ist die Summe (im diskreten Fall) oder das Integral (im stetigen Fall) der Likelihood multipliziert mit der Priori-Verteilung.

   - Für eine stetige Gleichverteilung:

     $$
     f(x) = \int_0^1 \binom{n}{k} \pi^k (1 - \pi)^{n-k} d\pi
     $$

   - Für eine diskrete Gleichverteilung:

     $$
     f(x) = \sum_{\pi \in \{0, 0.01, \ldots, 1\}} \frac{1}{101} \binom{n}{k} \pi^k (1 - \pi)^{n-k}
     $$

### Berechnung der Posteriori-Verteilung

Mit der Likelihood, der Priori-Verteilung und der Marginal Likelihood können wir nun die Posteriori-Verteilung $p(\pi|x)$ berechnen. Diese gibt uns die aktualisierte Wahrscheinlichkeit für $\pi$ nach dem Beobachten der Daten $x$.

- Für eine stetige Gleichverteilung:

  $$
  p(\pi|x) = \frac{\binom{n}{k} \pi^k (1 - \pi)^{n-k}}{\int_0^1 \binom{n}{k} \pi^k (1 - \pi)^{n-k} d\pi}
  $$

- Für eine diskrete Gleichverteilung:

  $$
  p(\pi|x) = \frac{\frac{1}{101} \binom{n}{k} \pi^k (1 - \pi)^{n-k}}{\sum_{\pi \in \{0, 0.01, \ldots, 1\}} \frac{1}{101} \binom{n}{k} \pi^k (1 - \pi)^{n-k}}
  $$


>[!tip]- Step by Step Merkhilfe
> ### Schritt 1: Verstehen des Bayes'schen Theorems
>
> Starten Sie mit dem Bayes'schen Theorem:
>
> $$
> p(\pi|x) = \frac{f(x|\pi)f(\pi)}{f(x)}
> $$
>
> ### Schritt 2: Likelihood-Funktion definieren
>
> Die Likelihood $f(x|\pi)$ für ein Binomial-Experiment ist:
>
> $$
> f(x|\pi) = \binom{n}{k} \pi^k (1 - \pi)^{n-k}
> $$
>
> Hierbei steht $n$ für die Gesamtzahl der Versuche, $k$ für die Anzahl der Erfolge und $\pi$ für die Erfolgswahrscheinlichkeit.
>
> ### Schritt 3: Priori-Verteilung wählen
>
> Entscheiden Sie sich für eine angemessene Priori-Verteilung $f(\pi)$. Für eine uniforme Priori:
>
> - Stetig: $f(\pi) = 1$ für $\pi$ in $[0, 1]$.
> - Diskret: $f(\pi) = \frac{1}{101}$ für $\pi$ in $\{0, 0.01, \ldots, 1\}$.
>
> ### Schritt 4: Marginal Likelihood bestimmen
>
> Berechnen Sie die Marginal Likelihood $f(x)$:
>
> - Stetig: $f(x) = \int_0^1 \binom{n}{k} \pi^k (1 - \pi)^{n-k} d\pi$.
> - Diskret: $f(x) = \sum_{\pi \in \{0, 0.01, \ldots, 1\}} \frac{1}{101} \binom{n}{k} \pi^k (1 - \pi)^{n-k}$.
>
> ### Schritt 5: Posteriori-Verteilung berechnen
>
> Setzen Sie die Likelihood und die Priori in das Bayes'sche Theorem ein, um die Posteriori-Verteilung zu ermitteln:
>
> - Stetig:
>
> $$
> p(\pi|x) = \frac{\binom{n}{k} \pi^k (1 - \pi)^{n-k}}{\int_0^1 \binom{n}{k} \pi^k (1 - \pi)^{n-k} d\pi}
> $$
>
> - Diskret:
>
> $$
> p(\pi|x) = \frac{\frac{1}{101} \binom{n}{k} \pi^k (1 - \pi)^{n-k}}{\sum_{\pi \in \{0, 0.01, \ldots, 1\}} \frac{1}{101} \binom{n}{k} \pi^k (1 - \pi)^{n-k}}
> $$
>
> ### Schritt 6: Posteriori-Verteilung interpretieren
>
> Verwenden Sie die Posteriori-Verteilung, um aktualisierte Wahrscheinlichkeiten für $\pi$ zu erhalten, basierend auf den beobachteten Daten $x$.
## (c) Berechnen Sie jeweils den Posteriori-Erwartungswert und den Posteriori-Median für folgende Daten:

- $n = 10, x = 3$
- $n = 100, x = 13$
- $n = 1000, x = 33$

### $n = 10, x = 3$

>[!success] Lösung
> # Posteriori-Erwartungswert und -Median für Binomialdaten
>
> Um den Posteriori-Erwartungswert und den Posteriori-Median für die gegebenen Daten unter Verwendung der zwei unterschiedlichen Priori-Annahmen zu berechnen, müssen wir zuerst das Bayesianische Update für die Wahrscheinlichkeit $\pi$ durchführen, gegeben die Daten $x \sim B(n, \pi)$, wobei $n=10$ und $x=3$. Die Beobachtungen folgen einer Binomialverteilung.
>
> ## Fall 1: Stetige Gleichverteilung von $\pi$ ($\pi \sim U(0, 1)$)
>
> ### Priori
> Die Priori-Verteilung von $\pi$ ist $U(0, 1)$, was bedeutet, dass sie eine Beta-Verteilung mit Parametern $\alpha=1$ und $\beta=1$ ist: $\text{Beta}(1, 1)$.
>
> ### Likelihood
> Die Likelihood-Funktion für die Beobachtungen aus einer Binomialverteilung mit den gegebenen Parametern ist proportional zu:
> $$
> \pi^x (1-\pi)^{n-x} = \pi^3 (1-\pi)^7
> $$
>
> ### Posteriori
> Die Posteriori-Verteilung ist das Produkt von Priori und Likelihood, das ebenfalls eine Beta-Verteilung ergibt:
> $$
> \text{Beta}(\alpha + x, \beta + n - x) = \text{Beta}(4, 8)
> $$
>
> #### Berechnungen
> Der **Posteriori-Erwartungswert** für eine Beta-Verteilung $\text{Beta}(a, b)$ ist:
> $$
> E[\pi] = \frac{a}{a + b} = \frac{4}{4 + 8} = \frac{4}{12} = \frac{1}{3}
> $$
> Der **Posteriori-Median** kann näherungsweise durch numerische Methoden berechnet werden, da für die Beta-Verteilung keine einfache analytische Lösung für den Median existiert. Der Median liegt jedoch nahe dem Erwartungswert.
>
> ## Fall 2: Diskrete Gleichverteilung von $\pi$
>
> ### Priori
> In diesem Fall ist $\pi$ diskret verteilt auf dem Gitter $[0, 0.01, 0.02, \dots, 0.99, 1]$, und jeder Wert ist gleich wahrscheinlich.
>
> ### Likelihood
> Wie oben.
>
> ### Posteriori
> Für jede diskrete Stelle $\pi_k$ in $[0, 0.01, 0.02, \dots, 0.99, 1]$ berechnen wir das Posteriori proportional zu:
> $$
> \pi_k^3 (1-\pi_k)^7
> $$
> Anschließend normalisieren wir diese Wahrscheinlichkeiten, damit sie sich zu 1 summieren. Die Positionen des höchsten Wertes geben uns den Modus, und wir können die kumulativen Wahrscheinlichkeiten berechnen, um den Median zu finden.
>
> #### Berechnungen
> Der **Posteriori-Erwartungswert** für dieses Gitter kann näherungsweise berechnet werden als:
> $$
> E[\pi] \approx \sum_{k=0}^{100} \pi_k \cdot P(\pi = \pi_k \mid x=3, n=10)
> $$
> Der **Posteriori-Median** wird identifiziert, indem die kumulativen Wahrscheinlichkeiten berechnet werden, bis sie 0.5 erreichen.
>
> Für präzisere numerische Berechnungen, besonders im diskreten Fall, sind Softwaretools wie Python oder R hilfreich, um die Wahrscheinlichkeiten zu berechnen und zu normalisieren.
## (d) Vergleichen Sie die Posteriori-Erwartungswerte und -Mediane mit beiden Ansätzen.

## (e) Welchen Ansatz würden Sie eher bevorzugen?

# Aufgabe 4

>[!note] Aufgabenstellung
>Betrachten Sie das Poisson-Modell, d.h. $X \sim Po(\lambda)$ und für den Parameter $\lambda$ wird eine $Ga(\alpha, \beta)$-Priori-Verteilung angenommen.

## (a) Berechnen sie die Posteriori-Verteilung $p(\lambda|X)$ explizit, d.h. inklusive Normierungskonstante.

>[!tip] Hinweis
> $\Gamma(x) = \int_{0}^{\infty} t^{x-1} e^{-t} \, dt$.

## (b) Warum genügt es, die Posteriori nur bis auf eine multiplikative Konstante zu bestimmen?
