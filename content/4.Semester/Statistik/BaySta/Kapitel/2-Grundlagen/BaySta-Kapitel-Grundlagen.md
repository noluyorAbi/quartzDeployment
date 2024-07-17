---
tags:
  - 4semester
  - BaySta
  - statistik
  - vorlesung
fach: "[[BaySta]]"
Thema:
date created: Wednesday, 24. April 2024, 23:58
date modified: Wednesday, 3. July 2024, 12:38
---

# Grundlagen

In diesem Kapitel betrachten wir das Beispiel, das auf Thomas Bayes zurückgeht. Die Lernziele dieses Kapitels sind:

- Allgemeine Bayes-Formel für diskrete und stetige Dichten
- Wie man Informationen als Verteilung darstellt
- Was Vorinformation (a priori) ist
- Was die Posteriori-Verteilung ist und wie man sie verwendet

## Beschreibung des Beispiels und der Daten

Der zentrale Begriff der Bayes-Statistik ist das Vorwissen oder a priori-Wissen. Wir werden untersuchen, wie wir Vorwissen bei Bayes' Billiardkugeln ausdrücken können. Nachdem wir das a priori spezifiziert haben, können wir die Posteriori mit der allgemeinen Form des Satzes von Bayes berechnen.

## Was bringt uns die Posteriori?

Die Posteriori ermöglicht es uns, unsere Annahmen basierend auf neuen Daten zu aktualisieren und genauere Schlussfolgerungen zu ziehen.

## Überprüfen Sie Ihren Lernerfolg im Quiz

Testen Sie Ihr Verständnis der Bayes-Statistik durch das Quiz am Ende dieses Kapitels.

## Geschichte der Bayes-Statistik

Etwas zur Geschichte der Bayes-Statistik wird abschließend beleuchtet.

# Bayes’ Billardkugeln Teil 1

## Die Billardkugeln

Das folgende Beispiel geht auf Thomas Bayes zurück und wird in _An Essay towards solving a Problem in the Doctrine of Chance_ beschrieben (der Artikel wurde posthum zwei Jahre nach Bayes' Tod von Richard Price veröffentlicht).

Eine weiße Billardkugel wird auf eine Gerade der Länge 1 gerollt.

Eine rote Kugel wird unter denselben Bedingungen n-mal gerollt. Sei $x$ die Zahl der Versuche, in denen die rote Kugel links von der ersten Kugel, also links von $\pi$ zu liegen kommt.

### Welche Information über $\pi$ erhalten wir aus der Beobachtung $x$?

#### Visualisierung

Beispiel: Zuerst wird die weiße Kugel gerollt, sie kommt bei $\pi$ zu liegen. Danach wird die rote Kugel dreimal gerollt: zweimal kommt sie links von der weißen Kugel zu liegen, einmal rechts.

Schließlich wird die weiße Kugel entfernt. Können wir trotzdem etwas darüber aussagen, wo die weiße Kugel lag?

Kommen viele rote Kugeln links von der weißen zu liegen, können wir wohl vermuten, dass $\pi$ eher in der Nähe von 1 als in der Nähe von 0 ist.

Diese Vermutung gilt es jetzt zu quantifizieren.

## Statistisch ausgedrückt

Wir bezeichnen mit

- $\Pi$ die Zufallsvariable "Punkt an der die weiße Kugel zu liegen kommt"
- $\pi$ eine Ausprägung der Zufallsvariable $\Pi$, also das Ergebnis des Experiments
- $X$ sie die Zufallsvariable "Anzahl der roten Kugeln, die links von der weißen Kugeln zu liegen kommen"
- $x$ eine Ausprägung der Zufallsvariable $X$, also das konkrete Ergebnis des Experiments
- $n$ die Anzahl der roten Kugeln, die insgesamt gerollt werden.

In obigem Beispiel wäre also $n = 3$ und $x = 2$. $\pi$ dagegen kennen wir nicht.

Das Experiment lässt sich also wie folgt darstellen:

- Gegeben sei eine Folge von unabhängigen 0/1-Experimenten (Bernoulli-Experimenten) – jeweils das Rollen der roten Kugeln, die entweder links oder rechts von der weißen zu liegen kommen
- Die Erfolgswahrscheinlichkeit (der Parameter) $\pi$ ist erstmal unbekannt, sie ist die Realisation der Zufallsgröße $\Pi$ und ergibt sich aus dem Rollen der weißen Kugel.
- Die Experimente (Rollen der roten Kugeln) sind nicht unabhängig, da sie alle von der Zufallszahl $\Pi$ abhängen
- Gegeben dem Ergebnis der weißen Kugel (also bedingt auf $\Pi = \pi$) sind die einzelnen Experimente "Rollen der roten Kugeln" aber unabhängig

Was erfahren wir über $\Pi$, wenn wir die Ergebnisse der 0/1-Experimente kennen, oder anders ausgedrückt: Wie lautet die Verteilung von $\Pi|X = x$?

## Datenmodell

Wir beginnen damit, uns die Wahrscheinlichkeitsverteilung der Beobachtungen oder Daten anzusehen.

Nehmen wir dafür erstmal an, die weiße Kugel sei bereits gerollt und liege auf dem Punkt $\pi$. Wir rollen eine rote Kugel. Dann ist die Wahrscheinlichkeit, dass die rote Kugel links von der weißen zu liegen kommt gleich $\pi$. Es handelt sich um ein Bernoulli-Experiment.

Rollen wir $n$ Kugeln (oder n-mal die selbe rote Kugel), so handelt es sich um ein Binomialexperiment mit Erfolgswahrscheinlichkeit $\pi$.

$$
X \sim B(n, \pi)
$$

### Wahrscheinlichkeit der Beobachtung

Für $n = 1$, also einmaliges Rollen der roten Kugel ist die Wahrscheinlichkeit dafür, dass $X = 1$, also die rote Kugel links von der weißen zu liegen kommt gleich $\pi$; für $X = 0$ ist die Wahrscheinlichkeit $1 - \pi$. Zusammenfassend lässt sich schreiben:

$$
P(X = x|\Pi = \pi) = \pi^x (1 - \pi)^{n-x}
$$

Gegeben $\Pi = \pi$ ist also die (bedingte) Wahrscheinlichkeit für $X = x$ beim n-maligen Rollen

$$
P(X = x|\Pi = \pi) = f(x|\pi) = \binom{n}{x} \pi^x (1 - \pi)^{n-x},
$$

wobei $\binom{n}{x}$ der Binomialkoeffizient ist (auf wie viele verschiedene Arten man $x$ Erfolge bei $n$ Versuchen erhalten).

### Wahrscheinlichkeitsdichte

- Für diskrete Zufallsvariablen - also Zufallsvariablen, die nur abzählbar viele Werte annehmen können - bezeichnet man die Wahrscheinlichkeit auch als Wahrscheinlichkeitsdichte.

- In diesem Fall ist $P(X = x|\Pi = \pi)$ die Wahrscheinlichkeitsdichte unserer Beobachtungen bzw. Daten. Wir nennen sie daher Datendichte

- Auch der Begriff Likelihood (zu deutsch etwa Plausibilität) wird für die Datendichte benutzt. Hintergrund: Bei der Likelihood-Inferenz benutzt man $P(X = x|\Pi = \pi)$ als Funktion in $\pi$ (und nicht als Wahrscheinlichkeit von $x$).

- Die Datendichte bzw. Likelihood beschreibt uns allgemein den Zusammenhang zwischen Daten $x$ und dem unbekannten Wert (Parameter) $\pi$.

- Zur Vereinfachung schreiben wir $f(x|\pi)$ statt $P(X = x|\Pi = \pi)$: $f$ als Zeichen dafür, dass es sich um eine Dichte handelt; die Zufallszahlen $X$ und $\Pi$ lassen wir weg, weil wir wissen, dass $x$ und $\pi$ Realisationen der Zufallsgrößen $X$ und $\Pi$ sind.

# Bayes’ Billardkugeln Teil 2

## Vorwissen

Um nun mit dem Satz von Bayes eine Aussage über $\pi$ gegeben $x$ zu machen, brauchen wir eine Wahrscheinlichkeitsaussage für $\Pi$. Was wissen wir über $\pi$ vor der Beobachtung?

Zur Erinnerung: $\Pi$ ist eine Zufallsvariable, $\pi$ deren Realisation. Lassen Sie sich nicht dadurch verwirren, dass wir hier den Buchstaben $\Pi$ für eine Zufallsvariable verwenden, statt wie üblich $X$ oder $Y$.

Wir nehmen an, dass die weiße Kugel keinen Ort bevorzugt, d.h., jeder Wert für $\pi$ ist gleich wahrscheinlich.

### Diskrete Gleichverteilung

Lassen wir für $\pi$ z.B. nur die Werte 0, 0.01, 0.02,…, 0.99, 1 zu, dann wäre unsere Vorannahme, dass jeder dieser Werte gleich wahrscheinlich ist. Wir haben diesen Ansatz bereits als Laplace-Wahrscheinlichkeit kennengelernt.

Unter dieser Annahme …

> [!faq] … ist die Wahrscheinlichkeit, dass $\pi$ gleich 0.5 ist gleich…
>
> - ½
> - 1/100
> - 1/101
>   > [!success]- Lösung
>   > 1/101

Wir sagen, $\Pi$ ist diskret gleichverteilt oder auch Laplace-verteilt.

Allgemein ist die Laplace-Wahrscheinlichkeit:

$$
P(\Pi=\pi)=\frac{\text{Anzahl der günstigen Ergebnisse}}{\text{Anzahl der möglichen Ergebnisse}}
$$

Nun kann man mit Recht aber sagen, dass $\Pi$ auch Werte zwischen z.B. 0.01 und 0.02 annehmen kann. Im Prinzip kann $\Pi$ beliebige reelle Werte zwischen 0 und 1 annehmen, also im Intervall [0,1].

Berechnen wir dann die Laplace-Wahrscheinlichkeit für das Eintreten eines reellen Wertes $\pi$ zwischen 0 und 1:

$$
P(\Pi=\pi)=\frac{1}{\text{Anzahl der möglichen Werte}}
$$

Da es aber (überabzählbar) unendlich viele mögliche reelle Werte zwischen 0 und 1 gibt, ist $P(\Pi=\pi)=0$!

Diese Aussage ist korrekt; für stetige Zufallsvariablen tritt jeder Wert mit Wahrscheinlichkeit 0 ein. Aber wir können diese Wahrscheinlichkeit natürlich nicht sinnvoll in den Satz von Bayes einsetzen.

> [!faq] Wenn $P(B|A)=0$ ist, dann gilt nach dem Satz von Bayes automatisch:
>
> - $P(A|B) = 1$
> - $P(A|B) = 0$
> - $P(A|B)$ lässt sich nicht berechnen
>   > [!success]- Lösung
>   > $P(A|B)$ = 0

## Dichte

Wir brauchen daher den Begriff der stetigen Dichte für stetige Zufallsvariablen, also Zufallsvariablen mit überabzählbar vielen möglichen Ergebnissen.

Sei $Y$ eine stetige Zufallsvariable. Dann nennen wir die Funktion

$$
F(y) = P(Y \leq y)
$$

die Verteilungsfunktion von $Y$ (gleich der Wahrscheinlichkeit, dass $Y$ kleiner als $y$ ist)

$$
f(y) = \frac{d}{dy}F(y)
$$

die stetige Dichte von $Y$ (gleich der Ableitung der Verteilungsfunktion).

Es gilt für ein Intervall $[y_1, y_2]$

$$
P(Y \in [y_1, y_2]) = \int_{y_1}^{y_2} f(y) dy
$$

### Beispiel für eine stetige Verteilung

Ein Beispiel für eine stetige Verteilung ist die Beta-Verteilung. Diese hat zwei Parameter \(a\) und \(b\), die die Form ihrer Dichte bestimmen. Eine Zufallsvariable

$$
Y \sim Beta(a, b)
$$

kann Werte zwischen 0 und 1 annehmen.

- Parameter $a$
- Parameter $b$

### Diskrete und stetige Dichten

Es existiert eine mathematische Theorie, die diskrete und stetige Verteilungen einheitlich definiert. Aus dieser Theorie heraus können wir diskrete (Wahrscheinlichkeits-)Dichten und stetige Dichten analog verwenden.

Das gilt auch für bedingte Wahrscheinlichkeit, für die sich entsprechend bedingte Dichten definieren lassen:

$$
f(x|\pi) = \frac{f(x, \pi)}{f(\pi)}
$$

Eigentlich sollte man hier $f(x|\Pi=\pi)$ schreiben, zur Übersichtlichkeit verwenden wir die Kurzschreibweise $f(x|\pi)$ für die bedingte Dichte von $X$ gegeben $\Pi=\pi$.

### Satz von Bayes mit Dichten

Der Satz von Bayes lässt sich entsprechend auch mit Dichten schreiben:

$$
f(\pi|x) = \frac{f(x|\pi)f(\pi)}{f(x)}
$$

Für rein diskrete Probleme werden die Dichten durch Wahrscheinlichkeiten ersetzt und wir sind wieder bei der ursprünglichen Form. Oft ersetzt man die Schreibweise $f(\pi|x)$ durch $p(\pi|x)$, um klar zu machen, dass hier die Posteriori-Dichte berechnet wird. Analog wird auch für die Priori-Dichte $p(\pi)$ statt $f(\pi)$ benutzt:

$$
p(\pi|x) = \frac{f(x|\pi)p(\pi)}{f(x)}
$$

### Normalisierungskonstante

Die Berechnung des Terms $f(x)$ (die sogenannte Normalisierungskonstante, den Grund dafür sehen wir später) hängt davon ab, ob $\Pi$ diskret oder stetig ist:

- Ist $\Pi$ diskret, dann gilt $f(x) = \sum_{\pi} f(x|\pi)P(\Pi=\pi)$ (wie zuvor Satz von der totalen Wahrscheinlichkeit).

- Ist $\Pi$ stetig, dann gilt $f(x) = \int f(x|\pi)p(\pi)d\pi$ (wir “integrieren $\pi$ raus”).

## Vorwissen über $\pi$

Kommen wir zurück zur Frage: Wie können wir vor dem Experiment Aussagen über die Zufallsvariable $\Pi$ ("Punkt an der die weiße Kugel zu liegen kommt") machen.

- Wir nehmen an, dass die weiße Kugel keinen Ort bevorzugt (zumindest wissen wir nichts anderes).

- Für stetige Zufallsvariablen heißt das, die Dichte ist überall gleich!

- Statistisch gesehen nehmen wir die stetige Gleichverteilung für $\Pi$ auf dem Intervall [0, 1] an ($\Pi \sim \mathcal{U}[0,1]$). Die Priori-Dichte von $\Pi$ ist dann also

  $$
  p(\pi) = 1 \quad \text{für} \quad 0 \leq \pi \leq 1
  $$

  Für Werte von $\pi < 0$ oder $\pi > 1$ ist die Dichte 0 - der Fall kann nicht eintreten!

  Nebenbemerkung: Für jedes Intervall $[y_1, y_2]$ mit $0 \leq y_1 < y_2 \leq 1$ gilt dann:

  $$
  P(\Pi \in [y_1, y_2]) = y_2 - y_1
  $$

## Vorwissen oder: Die Priori

Diese Angabe ist die Vorinformation über $\Pi$ vor (lateinisch a priori) Beobachtung der roten Kugeln, die sogenannte Priori-Verteilung von $\Pi$. Information liegt uns in Form einer Verteilung vor. Das ist ganz allgemein in der Bayes-Statistik der Fall: Verteilung entspricht Information.

Nebenbemerkung: Die Schreibweise $f(\pi)$ für eine Dichte erscheint Ihnen eventuell erstmal ungewohnt. In der Bayesschen Statistik nennen wir aber nicht nur Verteilungen für die Daten an, sondern auch für viele Parameter (hier $\pi$). Der Umgang mit Dichten von Parametern unterscheidet sich nicht von dem mit Dichten von Daten, sowohl Daten als auch Parameter sind Bayessche gesehen Zufallsgrößen!

Vorwissen als Priori-Dichte: π liegt irgendwo zwischen 0 und 1

# Bayes’ Billardkugeln Teil 3

## Die Bayes-Formel

Nun können wir Datendichte und Priori(-dichte) kombinieren. Der Satz von Bayes lautet ja:

$$
p(\pi|x) = \frac{f(x|\pi)p(\pi)}{f(x)} = \frac{f(x|\pi)p(\pi)}{\int f(x|\pi)p(\pi)d\pi}
$$

- $p(\pi|x)$ ist die Dichte der Verteilung von $\Pi$ gegeben $X = x$. Also genau das was wir suchen: Information über $\Pi$ nach (lateinisch: a posteriori) unserer Beobachtung $x$. Information stellen wir – wie bei der Priori – als Verteilung dar. Wir nennen diese bedingte Verteilung $\Pi|X = x$ die Posteriori-Verteilung.

- Die Verteilung wird durch ihre Dichte festgelegt. Entsprechend bezeichnen wir $p(\pi|x)$ als Posteriori-Dichte.

- In der Praxis unterscheidet man sprachlich kaum zwischen Posteriori-Verteilung und Posteriori-Dichte (auch wenn es unterschiedliche Konzepte sind), sondern spricht nur von der Posteriori. Damit lässt sich die Bayes-Formel auch so darstellen:

$$
\text{Posteriori} = \frac{\text{Likelihood} \cdot \text{Priori}}{\text{Normalisierungskonstante}}
$$

- Wichtig: Im Beispiel ist $f(\pi)$ eine stetige Dichte; $f(x|\pi)$ eine diskrete Wahrscheinlichkeitsdichte. Für den Satz von Bayes ist es aber egal, ob wir diskrete oder stetige Dichten verwenden.

- Beachten Sie, dass wir in der Formel $\Pi$ und $X$ unterdrücken – vergessen Sie aber nicht, dass $\pi$ und $x$ Realisationen von Zufallszahlen sind. Formal richtig müssten wir schreiben:

  - $f_{\Pi}(\pi)$ für die Dichte von $\Pi$

  - $f_{X|\pi}(x|\pi)$ für die Dichte von $X$ gegeben $\Pi = \pi$

### Normalisierungskonstante

- Die Bayes-Formel kombiniert also Datenmodell (Likelihood) und Priori zur Posteriori.

- Zusätzlich brauchen wir $f(x) = \int f(x|\pi)p(\pi)d\pi$. Die Funktion $f(x)$ hängt nicht von $\pi$ ab, also bezüglich der Dichte von $\pi$ eine Konstante. Wir nennen $f(x)$ Normalisierungskonstante, weil sie sicherstellt, dass $\int p(\pi|x)d\pi = 1$ gilt (für diskretes $\Pi$: $\sum_{\pi}p(\pi|x)p(\pi)=1$).

- Wir können im Satz von Bayes auch das Zeichen "$\propto$" (sprich: proportional zu) benutzen. Das Zeichen bedeutet, dass sich linke und rechte Seite bis auf eine Konstante entsprechen:

$$
p(\pi|x) = \frac{f(x|\pi)p(\pi)}{f(x)} \quad \propto \quad f(x|\pi)p(\pi)
$$

oder informell:

$$
\text{Posteriori} \propto \text{Likelihood} \cdot \text{Priori}
$$

- Wichtig dabei: "Konstant" in der Normalisierungskonstante bezieht sich auf $\pi$. Die Normalisierungskonstante ist eine Funktion in $x$, also der Beobachtung. Alle Aussagen gehen aber immer davon aus, dass wir die Beobachtung gemacht haben, also bekannt und damit fest ist.

## Die Posteriori

In unserem Billard-Beispiel ergibt sich (für $\pi \in [0,1]$):

$$
p(\pi|x) = \frac{f(x|\pi) \cdot (\pi)}{f(x)} = \frac{\left( \binom{n}{x} \right)\pi^x(1 - \pi)^{n-x}}{f(x)}
$$

oder wieder mit dem Proportionalitätszeichen:

$$
p(\pi|x) \propto \pi^x(1 - \pi)^{n-x}
$$

Wir nennen den Teil der Dichte ohne Konstanten den Kern der Dichte. Da $p(\pi|x)$ eine Dichte ist, muss $\int p(\pi|x)d\pi = 1$ gelten. Die

Dichte (und damit die Verteilung) ist also durch den Kern festgelegt, da gilt:

$$
\text{Dichte} = \frac{\text{Kern}}{\text{Integral über Kern}}
$$

## Die Posteriori im Billard-Beispiel

Schauen wir uns den Kern $p(\pi|x) \propto \pi^x(1 - \pi)^{n-x}$ genauer an. Vorsichtig, es handelt sich um eine Funktion in $\pi$ bei festem (gegebenem, da beobachtetem) $x$!

Der Kern der Dichte dieser Posterioriverteilung $\Pi|x$ ist der Kern einer Beta-Verteilung. Allgemein ist die Dichte einer Beta-Verteilung mit Parametern $a$ und $b$ definiert als:

$$
f(y) = \frac{1}{B(a, b)}y^{a-1}(1 - y)^{b-1}
$$

für $0 \leq y \leq 1$. Dabei ist $B(a, b)$ die Beta-Funktion, die uns hier nicht weiter interessiert. Setzen wir also $y = \pi$, $a = x + 1$ und $b = n - x + 1$, ist die Posteriori-Dichte identisch mit der Dichte einer Beta($x + 1, n - x + 1$)-Verteilung.

## Priori und der Posteriori

Beispiel: $n = 20$ mal Rollen der roten Kugeln, $x = 15$ kommt sie links von der weißen Kugel zu liegen. Die Posteriori-Verteilung ist also die Beta(16,6)-Verteilung.

Für Werte von $\pi$ zwischen (etwa) 0.55 und 0.9 ist die Posteriori-Dichte höher als die Priori-Dichte. "Wahrscheinlich" liegt $\pi$ also in diesem Intervall. Für Werte von $\pi$ kleiner 0.4 und größer 0.95 ist die Posteriori-Dichte dagegen praktisch gleich Null, sprich: diese Werte können wir, gegeben der Beobachtung $x$, ziemlich sicher ausschließen. Werte von $\pi$ kleiner als 0 und größer als 1 sind komplett ausgeschlossen, hier sind Priori- und Posteriori-Dichte jeweils gleich 0.

### Bemerkung zur Priori

Übrigens lässt sich auch unsere Priori, also die Gleichverteilung auf [0, 1], als Spezialfall der Beta-Verteilung interpretieren. Für $a = 1$ und $b = 1$ ist

$$
f(\pi) = \frac{1}{B(1,1)}\pi^{1-1}(1 - \pi)^{1-1} = 1
$$

Es gilt also a priori $\Pi \sim Beta(1,1)$!

## Konjugiertheit

Den Kern der Posterioridichte $\pi^x(1 - \pi)^{n-x}$ ist wie gesagt eine Funktion in $\pi$ bei gegebenem $x$. Würde man dagegen $\pi$ festhalten und liesse $x$ variieren, sieht der Kern nach einer Binomialverteilung aus, siehe Datenmodell.

- Das ist natürlich kein Zufall: der Posteriori entsteht ja genau aus Datendichte und Priori.
- In unserem Beispiel passen Datendichte (Binomialverteilung) und Prioridichte (Bateverteilung) genau zusammen.
- Die Posterioridichte hat daher die Form der Prioridichte, nur mit anderen Parametern. Bei beiden handelt es sich um Betaverteilungen.
- Wir nennen dies Konjugiertheit bzw. sprechen von der konjugierten Priori.

Nicht immer werden wir eine konjugierte Priori verwenden können oder wollen. Zur Wahl der Priori später mehr.

# Bayes’ Billardkugeln Teil 4

## Information einer Verteilung

Wir haben nach Beobachtung der Daten (_a posteriori_) mehr Information als vor der Beobachtung (_a priori_). Das lässt sich an der Dichte erkennen: In unserem Beispiel war die Priori-Dichte sehr flach, kein Punkt war bevorzugt. Das heißt, wir hatten _a priori_ praktisch keine Information über $\Pi$. Wir sprechen auch von einer flachen oder nicht-informativen Verteilung. Nach der Beobachtung hat sich die Masse der Dichte auf einen Bereich konzentriert: wir haben Information darüber, dass $\Pi$ wahrscheinlich in diesem Bereich liegt. Um so höher die Dichte, um so mehr Information haben wir.

## Posterioris für verschiedene Beobachtungen

Sehen wir uns die Posteriori-Dichte mit verschiedenen $n$ bzw. $x$ an.

Wie oft wurde die rote Kugel gerollt?  
Wie oft bliebt sie links liegen?

(Beispiel mit Histogrammen für unterschiedliche $n$ und $x$)

## Information einer Verteilung

Wir sehen:

- Mehr Beobachtungen geben uns mehr Information (das ist trivial). Wir sehen das daran, dass die Posteriori-Dichte an einer Stelle höher wird.
- Im Vergleich dazu hat die Priori-Dichte keine Information, sie ist überall gleich.

Bei gleichem $n$ wird die Dichte höher, wenn $x$ eher klein oder sehr nahe an $n$ ist. Ist $x$ nahe $n/2$, dann wird die Dichte (bei gleichem $n$) am niedrigsten – der Fall gibt uns am wenigsten Information.

- Das hängt mit der Varianz der Bernoulliverteilung zusammen. Diese ist $\pi(1 - \pi)$, damit für $\pi = 0.5$ am höchsten.
- Große Varianz heißt also große Unsicherheit bzw. wenig Information.
- Viel Information heißt wenig Unsicherheit heißt geringe Varianz.

## Schlüsse aus der Posteriori

Die Posteriori-Verteilung enthält alle Information über unseren Parameter $\Pi$; in ihr sind Vorinformation und Information aus der Beobachtung vereint. Alle weiteren Schlüsse ziehen wir nur aus der Posteriori.

### Posteriori-Wahrscheinlichkeit

(Beispiel mit einer Beta-Verteilungskurve)

Als erstes stellen wir uns die Frage: wie wahrscheinlich ist es _a posteriori_, also nach Beobachtung, dass $\Pi$ zwischen 0.5 und 0.9 liegt? Dazu berechnen wir ganz normal die Wahrscheinlichkeit aus der Dichte der Posteriori-Verteilung $\Pi|x \sim Beta(x + 1, n - x + 1)$:

$$
P(0.5 \leq \Pi \leq 0.9|x) = F(0.9) - F(0.5)
$$

wobei $F$ hier die Verteilungsfunktion der Beta$(x + 1, n - x + 1)$-Verteilung (also der Posteriori-Verteilung) ist. Hier also

$$
P(0.5 \leq \Pi \leq 0.9|x) = 0.985 - 0.013 = 0.972
$$

Wir sind uns also zu 97.2 % sicher, dass $\Pi$ zwischen 0.5 und 0.9 liegt.

### Punktschätzer

Nun stellen wir uns die Frage, welchen Wert für $\Pi$ wir denn gegenüber unserer Beobachtung erwarten. Wir können dafür den Erwartungswert der Posteriori oder Posteriori-Erwartungswert nutzen. Dieser dient hier als Punktschätzer.

Allgemein ist der Erwartungswert der Beta$(a,b)$-Verteilung $\frac{a}{a+b}$, also gilt hier für den Posteriori-Erwartungswert

$$
\mathbb{E}[\Pi|x] = \frac{x + 1}{n + 2}
$$

Nebenbemerkung: Andere Punktschätzer sind möglich, zum Beispiel kann man den wahrscheinlichsten Wert von $\Pi$ bestimmen (Posteriori-Modus) – dazu später mehr.

## Zusammenfassung

- Wir hatten in diesem Abschnitt ein Binomialexperiment mit unbekanntem Parameter $\Pi$ ($X \sim B(n, \pi)$).
- Für den Parameter $\pi$ haben wir eine Priori-Verteilung, die unser Vorwissen ausdrückt: Wir wissen "nichts" über $\pi$, außer dass $\pi$ zwischen 0 und 1 liegen muss.
- Durch Beobachtung ($X = x$) erhalten wir mehr Information über den Parameter $\pi$, ausgedrückt durch die Posteriori-Verteilung.
- Die Posteriori-Verteilung erhalten wir über die Bayes-Formel.
- Mit der allgemeinen Bayes-Formel lassen sich beliebig diskrete und stetige Verteilungen kombinieren.

Im weiteren Verlauf des Kurses werden wir folgende Themen vertiefen:

- Welche Datenmodelle kann man verwenden (z.B. mit mehr Parametern, eventuell sehr vielen).
- Wie kann ich allgemein eine Priori definieren bzw. begründen?
- Wie berechne ich die Posteriori? (Stichwort: Normalisierungskonstante)
- Welche Schlüsse ziehe ich aus der Posteriori?

# Quiz zu Bayes’ Billardkugeln

> [!faq] Eine flache Dichte …
>
> - lässt keine Aussage über die Information ihrer Verteilung zu.
> - deutet auf wenig Information hin.
> - deutet auf viel Information hin.
>   > [!success]- Lösung
>   > deutet auf wenig Information hin.

> [!faq] Für die Bayes-Formel braucht man…
>
> - eine Massen-Dichte
> - eine Daten-Dichte
> - eine Priori-Dichte
> - eine Kanten-Dichte
>   > [!success]- Lösung
>   > eine Daten-Dichte und eine Priori-Dichte

> [!faq] Das Zeichen $\propto$ bedeutet…
>
> - approximativ gleich
> - proportional gleich
> - in etwa gleich
>   > [!success]- Lösung
>   > proportional gleich

> [!faq] In der Bayes-Statistik kann ein Parameter einer Datenverteilung…
>
> - eine Zufallszahl sein.
> - unbekannt sein.
> - gegeben sein.
>   > [!success]- Lösung
>   > unbekannt sein.

> [!faq] Wie lautet die Bayes-Formel?
>
> - $\text{Posteriori} = \frac{\text{Likelihood} \cdot \text{Normalisierungskonstante}}{\text{Priori}}$
> - $\text{Posteriori} = \frac{\text{Likelihood} \cdot \text{Priori}}{\text{Normalisierungskonstante}}$
> - $\text{Posteriori} = \frac{\text{Priori} \cdot \text{Normalisierungskonstante}}{\text{Likelihood}}$
>   > [!success]- Lösung
>   > $\text{Posteriori} = \frac{\text{Likelihood} \cdot \text{Priori}}{\text{Normalisierungskonstante}}$

<!-- DISQUS SCRIPT COMMENT START -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
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
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
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
