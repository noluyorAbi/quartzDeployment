---
tags:
  - 4semester
  - BaySta
  - statistik
  - Übungsblatt
fach: "[[BaySta]]"
Thema: 
Benötigte Zeit: ∞
date created: Friday, 3. May 2024, 18:13
date modified: Monday, 6. May 2024, 17:08
---

# Aufgabe 1

>[!note] Aufgabenstellung
>Der Datensatz `babyboom.dat` enthält die Geburtszeiten $t_1, \ldots, t_n$ (Minuten ab Mitternacht) von $n = 44$ Kindern, die am 18. Dezember 1997 in Brisbane, Australien auf die Welt kamen. Für die Zeiten $x_i$ zwischen den Geburten, d.h.
>
>$$
>x_i = t_i - t_{i-1}, \quad t_0 = 0
>$$
>wird eine Exponentialverteilung mit unbekanntem Parameter $\lambda > 0$ angenommen.

## (a) Wie lautet die Likelihoodfunktion von $\lambda$ bezüglich der iid Stichprobe $x = (x_1, \ldots, x_n)^T$? Bestimmen Sie den ML-Schätzer von $\lambda$ zunächst allgemein und anschließend für den `babyboom`-Datensatz.


>[!warning] GPT
>
>Die Aufgabe besteht darin, die Likelihood-Funktion für den Parameter $\lambda$ einer Exponentialverteilung zu formulieren und den Maximum-Likelihood-Schätzer (ML-Schätzer) für $\lambda$ zu finden.
>
>
> ### Likelihood-Funktion
>Die Wahrscheinlichkeitsdichte einer Exponentialverteilung für eine Beobachtung \(x\) ist gegeben durch:
>
>$$
>f(x; \lambda) = \lambda e^{-\lambda x}
>$$
>
>Für eine Stichprobe $x_1, \ldots, x_n$, die aus unabhängigen und identisch verteilten (iid) Beobachtungen besteht, ist die Likelihood-Funktion $L(\lambda)$ das Produkt der einzelnen Dichten:
>
>$$
>L(\lambda; x_1, \ldots, x_n) = \prod_{i=1}^n \lambda e^{-\lambda x_i} = \lambda^n e^{-\lambda \sum_{i=1}^n x_i}
>$$
>$$
>\lambda = \frac{1}{\overline{x}}
>$$
>
>### Maximum-Likelihood-Schätzung von $\lambda$ 
>
>Zur Bestimmung des ML-Schätzers für $\lambda$ maximieren wir die Likelihood-Funktion, wobei es oft einfacher ist, die Log-Likelihood-Funktion zu maximieren:
>
>$$
>\log L(\lambda) = n \log(\lambda) - \lambda \sum_{i=1}^n x_i
>$$
>
>Durch Ableiten der Log-Likelihood nach $\lambda$ und Nullsetzen der Ableitung erhalten wir:
>
>$$
>\frac{d}{d\lambda} \log L(\lambda) = \frac{n}{\lambda} - \sum_{i=1}^n x_i = 0
>$$
>
>Lösen dieser Gleichung ergibt den ML-Schätzer:
>
>$$
>\hat{\lambda} = \frac{n}{\sum_{i=1}^n x_i}
>$$
>
>Das bedeutet, $\hat{\lambda}$ ist der Kehrwert des Stichprobenmittels der $x_i$, also der durchschnittlichen Zeit zwischen den Geburten.
>
>### Spezifische Berechnung für den `babyboom`-Datensatz
>
>Für die konkrete Berechnung mit dem `babyboom`-Datensatz müssen die Differenzen $x_i = t_i - t_{i-1}$ mit $t_0 = 0$ berechnet werden, und dann kann $\hat{\lambda}$ als oben angegeben bestimmt werden.
><br/>
> ## Berechnung
>
>Lassen Sie uns die Berechnung des Maximum-Likelihood-Schätzers $\hat{\lambda}$ für den Parameter $\lambda$ der Exponentialverteilung anhand der gegebenen Geburtszeiten durchführen. Hier die Schritte:
>
>1. **Berechnen der Zeitintervalle $x_i$**: Wir subtrahieren jede Geburtszeit von der vorherigen, um die Intervalle zwischen den Geburten zu bestimmen.
>2. **Summieren der $x_i$**: Die Summe dieser Intervalle wird benötigt, um $\hat{\lambda}$ zu berechnen.
>3. **Anwenden der Formel für $\hat{\lambda}$**: Der ML-Schätzer $\hat{\lambda}$ ist der Kehrwert des Durchschnitts dieser Intervalle, also $\hat{\lambda} = \frac{n}{\sum_{i=1}^n x_i}$, wobei $n = 44$.
>
>Hier die konkrete Berechnung:
>
>```python
>import numpy as np
>
># Geburtszeiten in Minuten ab Mitternacht
>birth_times = np.array([5, 64, 78, 115, 177, 245, 247, 262, 271, 428, 455, 492, 494, 549, 635, 649, 653, 693, 729, 776, 785, 846, 847, 873, 886, 914, 991, 1017, 1062, 1087, 1105, 1134, 1149, 1187, 1189, 1191, 1210, 1237, 1251, 1264, 1283, 1337, 1407, 1435])
>
># Berechnung der Zeitintervalle zwischen den Geburten
>time_intervals = np.diff(birth_times, prepend=birth_times[0])
>
># Summe der Zeitintervalle
>total_time = np.sum(time_intervals)
>
># Anzahl der Geburten
>n = len(birth_times)
>
># Berechnung des ML-Schätzers für lambda
>lambda_hat = n / total_time
>
>print(lambda_hat)
>```
>
>Die letzte Zeile gibt den Schätzwert für $\lambda$ zurück, welcher die erwartete Anzahl von Geburten pro Minute angibt, basierend auf den beobachteten Intervallen.
>
>Der berechnete Maximum-Likelihood-Schätzer $\hat{\lambda}$ für den Parameter $\lambda$ der Exponentialverteilung, basierend auf den gegebenen Geburtszeiten, beträgt etwa 0.0307. Dieser Wert repräsentiert die geschätzte Rate der Geburten pro Minute, d.h., es wird im Durchschnitt alle $\frac{1}{0.0307} \approx 32.6$ Minuten eine Geburt erwartet.
>
>$$
\hat{\lambda}_{ML}=\frac{1}{\Sigma x_i}
$$


## (b) Zeigen Sie, dass die Familie der Gamma-Verteilungen

>$$
>\mathcal{F} = \left\{ f(x) = \frac{b^a}{\Gamma(a)} x^{a-1} \exp(-bx) : a, b > 0 \right\}
>$$
>konjugiert ist zur $\text{Exp}(\lambda)$-Verteilung und bestimmen Sie die Posteriori $p(\lambda|x)$.

>[!warning] GPT
>Um zu zeigen, dass die Familie der Gamma-Verteilungen [[Konjugierte Verteilung|konjugiert]] zur Exponentialverteilung ist, gehen wir schrittweise vor. Die Exponentialverteilung und die Gamma-Verteilung sind wichtige Mitglieder in der Familie der Exponentialfamilien, und ihre konjugierte Beziehung ist nützlich für Bayesianische Inferenz.
>
>### Voraussetzungen und Definitionen
>
>Die Exponentialverteilung hat die Wahrscheinlichkeitsdichte:
>
>$$
>\text{Exp}(\lambda)(x) = \lambda e^{-\lambda x} \quad \text{für } x \geq 0
>$$
>
>wo $\lambda > 0$ der Rate-Parameter ist. Die Gamma-Verteilung hat die Wahrscheinlichkeitsdichte:
>
>$$
>\text{Gamma}(a, b)(x) = \frac{b^a}{\Gamma(a)} x^{a-1} e^{-bx} \quad \text{für } x \geq 0
>$$
>
>wobei $a > 0$ der Formparameter (manchmal auch "shape parameter" genannt) und $b > 0$ der Ratenparameter ist.
>
>### Konjugierte Priori für die Exponentialverteilung
>
>Eine Priori-Verteilung wird als konjugiert zur Likelihood-Funktion einer bestimmten Verteilung betrachtet, wenn das Posterior die gleiche Form wie der Prior hat. Für die Exponentialverteilung zeigt sich, dass die Gamma-Verteilung eine konjugierte Priori ist. 
>
>Wenn wir $\lambda$ als zufällige Variable betrachten und annehmen, dass $\lambda$ gamma-verteilt ist, können wir dies wie folgt formulieren:
>
>$$
>\lambda \sim \text{Gamma}(a, b)
>$$
>
>### Likelihood-Funktion
>
>Gegeben eine Stichprobe $x = (x_1, x_2, …, x_n)$ von unabhängigen und identisch verteilten Exponentialverteilungen, ist die gemeinsame Likelihood-Funktion gegeben durch:
>
>$$
>L(\lambda | x) = \lambda^n e^{-\lambda \sum_{i=1}^n x_i}
>$$
>
>### Berechnung des Posterior
>
>Die Posterior-Verteilung von $\lambda$ nach Beobachtung von $x$ wird unter der Annahme eines Gamma-Prior $\text{Gamma}(a, b)$ berechnet. Das Bayes-Theorem besagt, dass das Posterior proportional zum Produkt aus Prior und Likelihood ist:
>
>$$
>p(\lambda | x) \propto p(\lambda) \cdot L(\lambda | x)
>$$
>
>Einsetzen der entsprechenden Dichten ergibt:
>
>$$
>p(\lambda | x) \propto \frac{b^a}{\Gamma(a)} \lambda^{a-1} e^{-b\lambda} \cdot \lambda^n e^{-\lambda \sum_{i=1}^n x_i}
>$$
>
>Vereinfachen führt zu:
>
>$$
>p(\lambda | x) \propto \lambda^{a-1+n} e^{-\lambda (b + \sum_{i=1}^n x_i)}
>$$
>
>Die resultierende Form ist wieder eine Gamma-Verteilung, und wir können die neuen Parameter identifizieren:
>
>$$
>\lambda | x \sim \text{Gamma}(a + n, b + \sum_{i=1}^n x_i)
>$$
>
>### Zusammenfassung
>
>Die Posterior-Verteilung für $\lambda$, nachdem die Daten $x$ beobachtet wurden, wenn $\lambda$ ursprünglich eine Gamma-Verteilung $\text{Gamma}(a, b)$ folgte, ist somit:
>
>$$
>p(\lambda | x) = \text{Gamma}(a + n, b + \sum_{i=1}^n x_i)
>$$
>
>Dies zeigt, dass die Familie der Gamma-Verteilungen konjugiert zur Exponentialverteilung ist, weil das Posterior dieselbe Form wie der Prior hat, lediglich mit aktualisierten Parametern.

$$
\hat{\lambda}_{ML}=\frac{n}{\Sigma x_i}
$$

## (c) Berechnen Sie den [[Theoretischen Posteriori-Erwartungswert]]] $\mathbb{E}(\lambda|x)$ und den Posteriori-Modus $\arg\max_{\lambda} p(\lambda|x)$. Vergleichen Sie die Bayesianischen Schätzer mit dem ML-Schätzer.



## (d) Zeichnen Sie die Posteriori für den `babyboom` Datensatz, wenn als Priori-Parameter $a = b = 10^{-3}$ gewählt werden. Visualisieren Sie die drei Schätzer aus Aufgabe c).

## (e) Ziehen Sie $N = 200$ Realisierungen aus der Posteriori. Visualisieren Sie die Schätzung der Posteriori-Dichte. Bestimmen Sie aus den Ziehungen den Posteriori-Erwartungswert, -Median und -Modus empirisch. **Hinweis:** Verwenden Sie für den Modus den Befehl `density`.

## (f) Berechnen Sie die Priori-Variant für $\lambda \sim \text{Ga}(a,b)$ sowie die Posteriori-Varianz für $\lambda|x$. Vergleichen Sie für verschiedene Werte von $a$ und $b$ Priori- und Posteriori-Varianz. Zeichnen Sie jeweils die Posteriori-Dichte. Welche Auswirkung hat hohe Priori-Varianz auf die Posteriori? **Was passiert im Spezialfall $b = 0$?**

**Hinweis:** Die strukturierte Änderung von Priori-Parametern bezeichnet man als Sensitivitätsanalyse.

## (g) Bestimmen Sie die prädiktive Posteriori für eine neue Zwischenzeit $\tilde{x}$.




