---
tags:
  - 4semester
  - BaySta
  - statistik
  - Übungsblatt
fach: "[[BaySta]]"
Thema:
date created: Monday, 22. April 2024, 23:35
date modified: Thursday, 25. April 2024, 00:11
---


# Aufgabe 1

>[!note] Aufgabenstellung
>Eine Schokoladenfabrik stellt Pralinen her, die jeweils eine Kirsche enthalten. Die benötigten Kirschen werden an zwei Maschinen entkernt. Maschine A liefert 70 % dieser Kirschen, wobei 8 % der von A gelieferten Kirschen den Kern noch enthalten. Maschine B produziert 30 % der benötigten Kirschen, wobei 5 % der von B gelieferten Kirschen den Kern noch enthalten. Bei einer abschließenden Gewichtskontrolle werden 95 % der Pralinen, in denen ein Kirschkern enthalten ist, aussortiert, aber auch 2 % der Pralinen ohne Kern.

## (a) Modellieren Sie diesen mehrstufigen Vorgang geeignet. Wie groß ist die Wahrscheinlichkeit, dass eine Praline mit Kirschkern in den Verkauf gelangt?

## (b) Ein Kunde kauft eine Packung mit 100 Pralinen. Wie groß ist die Wahrscheinlichkeit, dass nur gute Pralinen, also Pralinen ohne Kirschkern, in der Packung sind?

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

## (b) Wie hoch ist die Wahrscheinlichkeit, dass eine Person, bei der auch der PCR-Test positiv ist, tatsächlich Corona-infiziert ist?

## (c) Wie hoch ist die Wahrscheinlichkeit, dass eine infizierte Person nicht erkannt wird?

## (d) Formulieren Sie die hier dargestellten Ereignisse und Wahrscheinlichkeiten.

## (e) Wie hoch ist die Wahrscheinlichkeit, dass eine Person bei der bei diesem Vorgehen der PCR-Test positiv ist, tatsächlich Corona-infiziert ist?

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
