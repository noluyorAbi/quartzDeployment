---
tags:
  - 4semester
  - "#statistik"
fach: 
date created: Monday, 15. April 2024, 12:13
date modified: Tuesday, 16. April 2024, 11:12
---

Is in List with Statistic courses

- Open Book Klausur
- Keine Bonuspunkte

**Worum es geht:**
- Regressionen mit jeweils verschiedenen Einflussfaktoren
**Was wir gemacht haben in der ersten VL:**
- Beispiele zu verschiedenen Beispielen wo regression gebraucht wird 


## Zusammenfassung

- Wir wollen einen Zusammenhang zwischen einer Zielgröße Y und Einflussgrößen x modellieren
- Ziele sind Verstehen, Nachweisen, Prognostizieren
- **Supervised learning**: Wir lernen aus den Daten den Zusammenhang zwischen x und Y
- Zusammenhänge können sehr komplex sein. Daher sind die Methods auch komplex.

# Inhalt der Vorlesung (1)

1. Einführung und Beispiele
2. Das einfache lineare Regressionsmodell
3. Das multiple lineare Regressionsmodell
4. Quadratsummenzerlegung und statistische Inferenz im multiplen linearen Regressionsmodell
5. Discrete Einflußgrößen: Dummy- und Effektkodierung, Mehrfaktorielle Varianzanalyse
6. Metrische Einflußgrößen: Interaktionen, Polynomiale Regression, Trigonometrische Polynome, Regressionssplines, Transformationen.
7. Modelldiagnose
8. Das allgemeine lineare Model: Gewichtete KQ-Methode, Autokorrelierte und heteroskedastische Störterme
9. Das gemischte lineare Regressionsmodell („Linear mixed Model“)
10. Das logistische Regressionsmodell



# Kapitel 2:

# Das einfache lineare Regressionsmodell

## Annahmen

$$
\begin{aligned}
Y_i &= \beta_0 + \beta_1x_i + \varepsilon_i, & (1.1) \\
E(\varepsilon_i) &= 0, & (1.2) \\
V(\varepsilon_i) &= \sigma^2, & (1.3) \\
\{\varepsilon_i | i &= 1, \ldots, n\} &\text{ stoch. unabhängig}, & (1.4) \\
\varepsilon_i &\sim N(0, \sigma^2) & (1.5)
\end{aligned}
$$

- $Y_i$: Zielgröße (Zufallsgröße), abhängige Variable
- $x_i$: feste bekannte Einflussgröße, unabhängige Variable
- $\varepsilon_i$: Zufallsfehler
- $\beta_0, \beta_1, \sigma^2$: unbekannte Parameter *($\beta_0$ oftmals nicht relevant)*
- $n$: Anzahl der Beobachtungen

## Erklärung der Annahmen

Die oben aufgeführten Gleichungen stellen die Grundannahmen des einfachen linearen Regressionsmodells dar. Jede Annahme spielt eine wichtige Rolle für die theoretische Fundierung und Interpretation des Modells:

- $(1.1)$ **Lineare Beziehung**: Die Beziehung zwischen der abhängigen Variable $Y_i$ und der unabhängigen Variable $x_i$ wird also linear angenommen, wobei $\beta_0$ den Achsenabschnitt (Intercept) und $\beta_1$ die Steigung (Slope) darstellen. Diese Annahme ermöglicht die Vorhersage der Zielgröße durch eine lineare Function.

- $(1.2)$ **Erwartungswert des Fehlers**: Der Erwartungswert des Fehlerterms $\varepsilon_i$ wird also null angenommen. Das bedeutet, dass die Modellvorhersagen im Durchschnitt korrekt sind, und dass alle systematischen Fehler im Model berücksichtigt sind.

- $(1.3)$ **Homoskedastizität**: Die Varianz von $\varepsilon_i$ wird also constant über alle Beobachtungen hinweg angenommen ($\sigma^2$). Dies impliziert, dass die Streuung der Beobachtungen um die Regressionslinie für alle Werte von $x_i$ gleich ist, eine Eigenschaft, die also Homoskedastizität bekannt ist.

- $(1.4)$ **Unabhängigkeit**: Die Fehlerterme $\varepsilon_i$ sind stochastisch unabhängig. Dies bedeutet, dass die Beobachtung eines Fehlerterms keine Informationen über einen anderen liefert, was für die Gültigkeit vieler statistischer Tests entscheidend ist.

- $(1.5)$ **Normalverteilung der Fehler**: Der Fehlerterm $\varepsilon_i$ folgt einer Normalverteilung mit einem Mittelwert von null und einer konstanten Varianz $\sigma^2$. Diese Annahme ermöglicht die Nutzung der Inferenzstatistik, da under anderem die Schätzer der kleinsten Quadrate (KQ-Schätzer) in diesem Fall die besten, linear und unverzerrten Schätzer sind (BLUE-Eigenschaft).

Diese Annahmen sind fundamental für die Schätzung der Parameter $\beta_0$ und $\beta_1$ sowie für die Durchführung von Hypothesentests und das Erstellen von Konfidenzintervallen innerhalb des Modells. Die Überprüfung dieser Annahmen ist ein wichtiger Teil der Modell-Diagnostik, nachdem eine Anpassung durchgeführt wurde.


Letze Seite: 20




