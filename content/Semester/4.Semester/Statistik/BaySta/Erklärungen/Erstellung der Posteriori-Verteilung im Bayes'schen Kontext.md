---
tags:
  - 4semester
  - BaySta
  - statistik
  - Erklaerung
fach: "[[BaySta]]"
Thema:
  - "[[BaySta-Blatt-1]]"
date created: Thursday, 25. April 2024, 23:53
date modified: Friday, 26. April 2024, 00:08
---

# Erstellung der Posteriori-Verteilung im Bayes'schen Kontext

## Einführung

Die Bayes'sche Statistik ist ein Zweig der Wahrscheinlichkeitsrechnung, der es uns ermöglicht, Unsicherheit mit Hilfe von Wahrscheinlichkeiten zu modellieren und zu aktualisieren. Kernstück ist das **Bayes'sche Theorem**, welches beschreibt, wie man seine Glaubensstärke (Priori-Wahrscheinlichkeiten) in Licht neuer Evidenz (Daten) aktualisieren kann, um die Posteriori-Wahrscheinlichkeiten zu erhalten.

## Bayes'sches Theorem

Das Theorem lässt sich mathematisch so formulieren:

$$
p(\pi | x) = \frac{f(x | \pi) f(\pi)}{f(x)}
$$

- $p(\pi | x)$: Posteriori-Wahrscheinlichkeit für Parameter $\pi$ nach Beobachtung der Daten $x$.
- $f(x | \pi)$: Likelihood-Funktion, die angibt, wie wahrscheinlich die Daten $x$ bei gegebenem Parameter $\pi$ sind.
- $f(\pi)$: Priori-Wahrscheinlichkeit für Parameter $\pi$, bevor Daten beobachtet werden.
- $f(x)$: Marginal Likelihood oder Evidenz, die normalisiert, sodass die Posteriori-Wahrscheinlichkeit eine gültige Verteilung ergibt.

## Anwendung im Binomial-Experiment

In einem Binomial-Experiment, wo $\pi$ die Erfolgswahrscheinlichkeit darstellt und $x$ die Anzahl der Erfolge in $n$ Versuchen, verwendet man die Binomialverteilung als Likelihood-Funktion:

$$
f(x | \pi) = \binom{n}{k} \pi^k (1 - \pi)^{n-k}
$$

### Priori-Verteilung

Unter der Annahme des Laplace'schen Prinzips des unzureichenden Grundes setzen wir eine Gleichverteilung als Priori-Wahrscheinlichkeit:

- Stetige Gleichverteilung: $f(\pi) = 1$ für $\pi$ in [0, 1].
- Diskrete Gleichverteilung: $f(\pi) = \frac{1}{101}$ für $\pi$ in \{0, 0.01, …, 1\}.

### Posteriori-Verteilung

Die Posteriori-Verteilung wird dann wie folgt berechnet:

- Stetiger Fall:

$$
p(\pi | x) = \frac{\binom{n}{k} \pi^k (1 - \pi)^{n-k}}{\int_0^1 \binom{n}{k} \pi^k (1 - \pi)^{n-k} d\pi}
$$

- Diskreter Fall:

$$
p(\pi | x) = \frac{\frac{1}{101} \binom{n}{k} \pi^k (1 - \pi)^{n-k}}{\sum_{\pi \in \{0, 0.01, …, 1\}} \frac{1}{101} \binom{n}{k} \pi^k (1 - \pi)^{n-k}}
$$

Die Posteriori-Verteilung reflektiert unsere aktualisierte Glaubensstärke über $\pi$ nach der Berücksichtigung der beobachteten Daten.

>[!tip] Step by Step Herleitung
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

# Zusammenfassung

Die Erstellung einer Posteriori-Verteilung ermöglicht es uns, präzisere Vorhersagen zu treffen und unsere Unsicherheit zu quantifizieren. Dieser Prozess ist fundamental für datengetriebene Entscheidungsfindung und hat Anwendungen in vielen Bereichen wie Maschinelles Lernen, Finanzanalyse und medizinische Diagnostik.
