---
tags:
  - 4semester
  - BaySta
  - statistik
fach: "[[BaySta]]"
Thema:
Benötigte Zeit:
date created: Thursday, 2. May 2024, 15:06
date modified: Thursday, 2. May 2024, 15:13
---

>[!info] Erlang-Verteilung und die Posteriori
>
> ## Erlang-Verteilung und ihre Posteriori-Analyse
> 
> Die Erlang-Verteilung ist eine spezielle Form der Gamma-Verteilung und wird oft verwendet, um die Summe von mehreren unabhängigen, identisch exponentialverteilten Wartezeiten zu beschreiben. Diese wird insbesondere in der Warteschlangentheorie und Zuverlässigkeitstechnik angewendet. Die Erlang-Verteilung ist definiert durch zwei Parameter: die Form $n$, welche die Anzahl der Ereignisse angibt, und die Rate $\lambda$, welche die Rate dieser Ereignisse darstellt.
> 
> ### Mathematische Definition
> Die Dichte der Erlang-Verteilung, Erlang$(n, \lambda)$, ist gegeben durch:
> $$
> f(x) = \frac{1}{(n-1)!} \lambda^n x^{n-1} e^{-\lambda x}
> $$
> Hierbei ist $x$ die Summe der Wartezeiten, und der Parameter $n$ muss eine ganze Zahl sein.
> 
> ### Bayesianische Analyse
> Wenn $X$ erlang-verteilt mit bekannten $n$ und unbekanntem $\lambda$ ist und $\lambda$ eine Gamma-Priori-Verteilung $\text{Ga}(a, b)$ hat, ergibt die bayesianische Analyse eine Posteriori-Verteilung für $\lambda$, die auch eine Gamma-Verteilung ist.
> 
> #### Posteriori-Verteilung
> Die Parameter der Posteriori-Verteilung $\text{Ga}(a', b')$ werden aktualisiert zu:
> $$
> a' = a + n, \quad b' = b + x
> $$
> - **$a'$ (Formparameter):** Erhöht um die Anzahl der Ereignisse $n$, da jedes Ereignis als "Erfolg" im Sinne des Bayes'schen Lernens zählt.
> - **$b'$ (Ratenparameter):** Erhöht um die beobachtete Summe der Wartezeiten $x$, da $\lambda$ in der Erlang-Verteilung die Rate dieser Wartezeiten darstellt und eine höhere Summe der Wartezeiten eine höhere Rate impliziert, die für die Berechnung der neuen Erwartung von $\lambda$ benötigt wird.
> 
> ### Fazit
> Diese Analyse ist zentral für Anwendungen, wo die Verteilung von Wartezeiten in Prozessen (wie Telekommunikationsnetzwerken oder Fertigungsstraßen) modelliert werden muss und wo Parameter unsicher sind und aus Daten gelernt werden sollen.

