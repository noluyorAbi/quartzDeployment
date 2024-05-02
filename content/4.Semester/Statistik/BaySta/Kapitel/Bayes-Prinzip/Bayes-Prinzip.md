---
tags:
  - 4semester
  - BaySta
  - statistik
  - vorlesung
fach: "[[BaySta]]"
Thema: 
Benötigte Zeit:
date created: Thursday, 2. May 2024, 13:50
date modified: Thursday, 2. May 2024, 13:53
---

# Prinzip

In den letzten beiden Kapiteln haben wir einfache Anwendungen der Bayes-Formel kennen gelernt. Wir erweitern diese Anwendung nun auf allgemeinere stochastische Modelle. Um daraus Schlüsse zu ziehen, verwenden wir das **Bayes-Prinzip**

# Bayes-Prinzip

## Bayesianische Inferenz

Im Folgenden wiederholen und verallgemeinern wir das Vorgehen in unseren bisherigen Beispielen:

- Wir beobachten $n$ Daten $x_i$, die aus einem Zufallsprozess entstanden sind.
- Die $x_i$ sind Realisierungen einer Zufallsvariable $X_i$.
- $X_i$ hat eine Verteilung mit (Daten-)Dichte (Likelihood) $f(x)$.
- Wir kennen die Datendichte aber nicht vollständig, sondern nur bis auf Parameter $\theta$: $f(x|\theta)$
- $\theta$ ist unbekannt und die Information über $\theta$ lässt sich in Form einer Dichte darstellen
- Vor der Beobachtung (a priori) ist unsere Information ausgedrückt durch die Priori-Dichte $p(\theta)$
- Durch Beobachtung erhalten wir mehr Information, ausgedrückt durch die a posteriori-Dichte $p(\theta|x)$

Bisher waren $x$ und $\theta$ eindimensional, im Folgenden können sie aber auch mehrdimensional sein!
 
## Aufgaben in der Bayesianischen Inferenz

- Festlegung des statistischen Modells für $x$ und damit der Datendichte (Likelihood) $f(x|\theta)$
- Festlegung des a priori-Wissens über $\theta$, also der Priori-Dichte $p(\theta)$
- Berechnung der Posteriori $p(\theta|x)$
### Bayes-Prinzip

- Die Dichte der Posteriori-Verteilung erhalten wir über die Bayes-Formel:
  $$
  p(\theta|x) = \frac{f(x|\theta) \cdot f(\theta)}{\int f(x|\theta') f(\theta') d\theta'}
  $$

>**Bayes-Prinzip**
>Alle Schlüsse werden nur aus der Posteriori-Verteilung gezogen.

- Die Posteriori enthält alle Informationen über $\theta$ nach der Beobachtung.
- Umso mehr Informationen die Daten über $\theta$ enthalten, umso weniger unsicher sind wir über $\theta$: Die Varianz der Posterioriverteilung ist kleiner, die Dichtefunktion konzentriert sich in einem (oder mehreren) Bereichen.
## Was machen wir mit der Posteriori?

- Grundsätzlich gilt: Die komplette Posteriori ist wichtig. Wenn möglich, sollten wir diese komplett darstellen – bei hochdimensionalen Parametern $\theta = (\theta_1, \dots, \theta_p)$ ist dies aber schwierig. Hier bietet es sich an, jeden Parameter einzeln anzuschauen; genauer: die marginale Posteriori von $\theta_i|x$ zu betrachten.

Aus der Posteriori können wir dann folgende Schlüsse ziehen:

- **Punktschätzer:** (wir kennen den Posterior-Erwartungswert, außerdem gibt es den Maximum-a-Posteriori-Schätzer/Posteriori-Modus und den Posteriori-Median)
- **Intervallschätzer**
- **Tests**
- **Modellvergleich**
- **Prädiktion**

>[!summary] Zusammenfassung
> # Zusammenfassung des Bayes-Prinzips
> 
> ## Bayesianische Inferenz
> 
> Bayesianische Inferenz ist ein Ansatz in der Statistik, bei dem Wissen über eine unbekannte Größe (Parameter $\theta$) durch beobachtete Daten verbessert wird. Dies geschieht durch den Einsatz von Wahrscheinlichkeitsmodellen, die wie folgt definiert sind:
> 
> - Es werden $n$ Datenpunkte $x_i$ beobachtet, die aus einem Zufallsprozess stammen und Realisierungen einer Zufallsvariable $X_i$ sind.
> - Jede $X_i$ folgt einer Verteilung, deren Form durch die Parameter $\theta$ bestimmt wird: $f(x|\theta)$.
> - Vor der Datenerhebung besteht eine anfängliche Einschätzung des Parameters $\theta$, ausgedrückt durch die Priori-Dichte $p(\theta)$.
> - Nach der Datenerhebung wird diese Einschätzung durch die Posteriori-Dichte $p(\theta|x)$ aktualisiert, welche mittels der Bayes-Formel berechnet wird:
>   $$
>   p(\theta|x) = \frac{f(x|\theta) \cdot p(\theta)}{\int f(x|\theta') p(\theta') d\theta'}
>   $$
> 
> ## Aufgaben und Verwendung der Posteriori
> 
> - **Statistisches Modell festlegen:** Auswahl von $f(x|\theta)$ und $p(\theta)$.
> - **Posteriori berechnen:** Diese enthält alle Informationen über $\theta$ nach dem Einbezug der Daten und wird für alle weiteren Schlüsse verwendet.
> - **Analyse der Posteriori:** Bei mehrdimensionalen $\theta$ betrachtet man oft die marginale Posteriori jedes Parameters $\theta_i|x$.
> 
> ### Anwendungen der Posteriori
> 
> Aus der Posteriori lassen sich verschiedene statistische Schlüsse ziehen, darunter:
> 
> - **Punktschätzer:** Berechnung des Erwartungswertes, des Maximum-a-Posteriori-Schätzers und des Medians.
> - **Intervallschätzer:** Bestimmung von Konfidenzintervallen.
> - **Tests:** Durchführung statistischer Hypothesentests.
> - **Modellvergleich:** Vergleich unterschiedlicher statistischer Modelle.
> - **Prädiktion:** Vorhersage zukünftiger Beobachtungen basierend auf dem Modell.
> 
> Zusammengefasst ermöglicht das Bayes-Prinzip eine systematische Aktualisierung des Wissens über einen Parameter durch die Kombination von Priori-Information und Daten, wobei die Posteriori-Dichte als Grundlage für alle weiteren statistischen Analysen dient.

---
# Prioris

Ein wichtiger Baustein der Bayes-Inferenz ist die Wahl der Prioris. Schauen wir uns Möglichkeiten zur Wahl der Priori an und kommen dazu zurück zum

# Beta-Binomial-Modell
## Lernziele

- Konstruktion konjugierter Prioris
- Anwendung und Kritik subjektiver Prioris
- Konstruktion einfacher nicht-informativer Prioris

## Konjugierte Prioris

Wir hatten im Beispiel mit den Billardkugeln festgestellt, dass die Kombination von Binomialverteilung der Daten und Gleichverteilung als Priori gut zusammen passt: Wir erhalten eine bekannte Verteilung als Posteriori.

>Allgemein definieren wir:
> Eine Familie $\mathcal{F}$ von Verteilungen auf $Θ$ heißt **konjugiert**, zu einer Dichte $f(x|\theta)$, wenn für jede Priori $p(\theta)$ auf $\mathcal{F}$ die Posteriori $p(\theta|x)$ ebenfalls zu $F$ gehört

>[!tip] Vereinfacht Gesagt
>Konjugierte Prioris sind spezielle Priori-Verteilungen in der Bayesianischen Statistik, die die Berechnung der Posteriori-Verteilung vereinfachen. Wenn eine Priori-Verteilung konjugiert zur Likelihood-Funktion der Daten ist, bleibt die Form der Posteriori-Verteilung innerhalb derselben Familie von Verteilungen. Das bedeutet, dass sowohl die Priori als auch die Posteriori den gleichen Typ von Verteilung aufweisen, was die Analyse und Berechnungen einfacher macht.

## Beispiel nach Bayes

Im Beispiel der Billardkugeln hatten wir die Gleichverteilung als Spezialfall der Betaverteilung als Priori und die Betaverteilung als Posteriori.

- Anzahl der Kugeln rechts von der weißen Kugel: $X \sim B(n, \pi)$
- Priori-Annahme für $\pi$: $\pi \sim Beta(a, b)$ mit $a = b = 1$

Wir nennen dieses Modell **Beta-Binomial-Modell** (Beta-Priori und Binomial-Datenmodell). Im Folgenden benutzen wir ganz allgemein die Parameter $a$ und $b$ in der Beta-Priori und werden dann auch andere Werte für die **Priori-Parameter** zulassen.

Man erkennt die Konjugiertheit am ähnlichen Aufbau von Datendichte (eine Funktion in $x$) und Priori, bezogen auf den unbekannten Parameter $\pi$ (wir betrachten hier nur jeweils den Kern der Dichte, lassen also Konstanten weg):

$$
f(x|\pi) \propto \pi^x (1 - \pi)^{n-x}
$$
$$
p(\pi) \propto \pi^{a-1} (1 - \pi)^{b-1}
$$

Zusammen also:

$$
p(\pi|x) \propto f(x|\pi)p(\pi) \propto \pi^{x+a-1} (1 - \pi)^{n-x+b-1}
$$

## Posteriori-Parameter

- Die Posteriori-Verteilung von $\pi|x$ ist also eine Beta$(\hat{a}, \hat{b})$-Verteilung mit $\hat{a} = x + a$ und $\hat{b} = n - x + b$. Die Parameter der Posterioriverteilung, also die **Posteriori-Parameter** setzen sich jeweils aus Informationen der Priori und der Datendichte zusammen.
- Allgemein fasst die Posteriori Informationen aus der Priori und der Datendichte zusammen.
- Hier ist $\hat{a}$ die Summe der **Priori-Parameter** $a$ und der Anzahl an Erfolgen $x$. Entsprechend ist $\hat{b}$ die Summe des **Priori-Parameters** $b$ und der Anzahl an Misserfolgen $n - x$.

## Rückschluss auf die Priori-Parameter

- Das heißt also, wenn wir $a$ um eins erhöhen, ergibt sich für die Posteriori das selbe Ergebnis, wie wenn man die Anzahl der Erfolge um eins erhöht.
- $a$ kann also in gewisser Weise auch die **Priori-Anzahl an Erfolgen** interpretiert werden, entsprechend ist $b$ die **Priori-Anzahl an Misserfolgen**.