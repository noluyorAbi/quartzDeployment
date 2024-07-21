---
date created: Tuesday, 16. July 2024, 22:43
date modified: Tuesday, 16. July 2024, 22:55
---

# Auch wichtig: [[Wann sollte man R2 verwenden und wann adjustiertes R2]]

# $R^2$ und Adjustiertes $R^2$ in der Regressionsanalyse

## Einleitung

Die Regressionsanalyse ist ein weit verbreitetes statistisches Verfahren, das verwendet wird, um die Beziehung zwischen einer abhängigen Variable und einer oder mehreren unabhängigen Variablen zu modellieren. In diesem Kontext sind die Bestimmtheitsmaße $R^2$ und das adjustierte $R^2$ von großer Bedeutung. Diese Maße helfen dabei, die Güte der Anpassung eines Regressionsmodells zu bewerten. In diesem Dokument werden wir die Definitionen, Berechnungen und Interpretationen von $R^2$ und adjustiertem $R^2$ detailliert untersuchen und ihre Anwendungen und Grenzen aufzeigen.

## Grundlagen der Regressionsanalyse

### Einfache lineare Regression

Die einfache lineare Regression modelliert die Beziehung zwischen einer abhängigen Variable $Y$ und einer unabhängigen Variable $X$ durch die folgende Gleichung:

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

Hierbei sind:

- $\beta_0$ der Achsenabschnitt,
- $\beta_1$ die Steigung der Regressionsgeraden,
- $\epsilon$ der Fehlerterm.

### Multiple lineare Regression

Die multiple lineare Regression erweitert das einfache Modell, indem sie mehrere unabhängige Variablen einbezieht:

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \cdots + \beta_p X_p + \epsilon
$$

Hierbei sind $X_1, X_2, \ldots, X_p$ die unabhängigen Variablen und $\beta_0, \beta_1, \ldots, \beta_p$ die Regressionskoeffizienten.

## Definition und Berechnung von $R^2$

### Definition von $R^2$

Der $R^2$-Wert, auch Bestimmtheitsmaß genannt, ist ein statistisches Maß, das den Anteil der Varianz in der abhängigen Variable beschreibt, der durch die unabhängigen Variablen im Modell erklärt wird. Er wird wie folgt berechnet:

$$
R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}}
$$

wobei:

- $SS_{\text{res}}$ die Residuenquadratsumme ist,
- $SS_{\text{tot}}$ die totale Quadratsumme ist.

### Residuenquadratsumme und totale Quadratsumme

Die Residuenquadratsumme $SS_{\text{res}}$ und die totale Quadratsumme $SS_{\text{tot}}$ werden wie folgt berechnet:

$$
SS_{\text{res}} = \sum_{i=1}^n (Y_i - \hat{Y}_i)^2
$$

$$
SS_{\text{tot}} = \sum_{i=1}^n (Y_i - \bar{Y})^2
$$

Hierbei ist $\hat{Y}_i$ der vorhergesagte Wert von $Y$ und $\bar{Y}$ der Mittelwert von $Y$.

### Interpretation von $R^2$

Der $R^2$-Wert liegt zwischen 0 und 1. Ein Wert von 0 bedeutet, dass das Modell keine Varianz in der abhängigen Variable erklärt, während ein Wert von 1 bedeutet, dass das Modell die gesamte Varianz erklärt. In der Praxis wird ein höherer $R^2$-Wert als besser angesehen, da er eine bessere Anpassung des Modells an die Daten anzeigt.

## Definition und Berechnung des adjustierten $R^2$

### Problem mit $R^2$

Ein Problem mit dem $R^2$-Wert ist, dass er immer steigt, wenn weitere unabhängige Variablen zum Modell hinzugefügt werden, unabhängig davon, ob diese Variablen tatsächlich einen signifikanten Beitrag zur Erklärung der abhängigen Variable leisten. Dies kann zu einem überoptimistischen Eindruck der Modellgüte führen.

### Definition des adjustierten $R^2$

Der adjustierte $R^2$-Wert korrigiert dieses Problem, indem er die Anzahl der unabhängigen Variablen und die Stichprobengröße berücksichtigt:

$$
R^2_{\text{adj}} = 1 - \left( \frac{SS_{\text{res}} / (n - p - 1)}{SS_{\text{tot}} / (n - 1)} \right)
$$

wobei:

- $n$ die Anzahl der Beobachtungen ist,
- $p$ die Anzahl der unabhängigen Variablen ist.

### Interpretation des adjustierten $R^2$

Der adjustierte $R^2$-Wert kann niedriger als der $R^2$-Wert sein, insbesondere wenn unnötige unabhängige Variablen zum Modell hinzugefügt werden. Ein höherer adjustierter $R^2$-Wert zeigt eine bessere Modellanpassung an, wenn die Anzahl der unabhängigen Variablen berücksichtigt wird.

## Beispielberechnungen

### Einfache lineare Regression

Angenommen, wir haben die folgenden Daten:

| $X$ | $Y$ |
| --- | --- |
| 1   | 2   |
| 2   | 3   |
| 3   | 5   |
| 4   | 4   |
| 5   | 6   |

Berechnen wir das Regressionsmodell:

1. Mittelwerte berechnen:

$$
\bar{X} = \frac{1 + 2 + 3 + 4 + 5}{5} = 3
$$

$$
\bar{Y} = \frac{2 + 3 + 5 + 4 + 6}{5} = 4
$$

2. Regressionskoeffizienten berechnen:

$$
\beta_1 = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2} = \frac{(1-3)(2-4) + (2-3)(3-4) + (3-3)(5-4) + (4-3)(4-4) + (5-3)(6-4)}{(1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2} = \frac{10}{10} = 1
$$

$$
\beta_0 = \bar{Y} - \beta_1 \bar{X} = 4 - 1 \cdot 3 = 1
$$

Das Regressionsmodell lautet somit:

$$
Y = 1 + 1X
$$

3. Vorhergesagte Werte berechnen:

| $X$ | $Y$ | $\hat{Y}$ |
| --- | --- | --------- |
| 1   | 2   | 2         |
| 2   | 3   | 3         |
| 3   | 5   | 4         |
| 4   | 4   | 5         |
| 5   | 6   | 6         |

4. Quadratsummen berechnen:

$$
SS_{\text{res}} = (2-2)^2 + (3-3)^2 + (5-4)^2 + (4-5)^2 + (6-6)^2 = 0 + 0 + 1 + 1 + 0 = 2
$$

$$
SS_{\text{tot}} = (2-4)^2 + (3-4)^2 + (5-4)^2 + (4-4)^2 + (6-4)^2 = 4 + 1 + 1 + 0 + 4 = 10
$$

5. $R^2$-Wert berechnen:

$$
R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}} = 1 - \frac{2}{10} = 0.8
$$

6. Adjustierten $R^2$-Wert berechnen:

$$
R^2_{\text{adj}} = 1 - \left( \frac{SS_{\text{res}} / (n - p - 1)}{SS_{\text{tot}} / (n - 1)} \right) = 1 - \left( \frac{2 / (5 - 1 - 1)}{10 / (5 - 1)} \right) = 1 - \left( \frac{2 / 3}{10 / 4} \right) = 1 - \left( \frac{2}{7.5} \right) = 1 - 0.267 = 0.733
$$

## Anwendung und Grenzen von $R^2$ und adjustiertem $R^2$

### Anwendung in der Praxis

$R^2$ und adjustiertes $R^2$ sind nützliche Werkzeuge zur Bewertung der Güte der Anpassung eines Modells. In der Praxis werden sie häufig verwendet, um Modelle zu vergleichen und zu bestimmen, wie gut ein Modell die Daten erklärt. Hier sind einige Anwendungsbeispiele:

- **Ökonometrie**: Bewertung der Güte von Modellen zur Vorhersage wirtschaftlicher Indikatoren.
- **Medizin**: Bewertung von Modellen zur Vorhersage von Behandlungsergebnissen.
- **Sozialwissenschaften**: Bewertung von Mod

ellen zur Untersuchung sozialer Phänomene.

### Grenzen von $R^2$ und adjustiertem $R^2$

Obwohl $R^2$ und adjustiertes $R^2$ nützliche Maßzahlen sind, haben sie auch ihre Grenzen:

- **Überanpassung**: Ein hoher $R^2$-Wert kann auf Überanpassung hinweisen, insbesondere wenn viele unabhängige Variablen im Modell enthalten sind.
- **Nicht-lineare Beziehungen**: $R^2$ und adjustiertes $R^2$ sind für lineare Modelle ausgelegt und können nicht-lineare Beziehungen möglicherweise nicht angemessen bewerten.
- **Vergleichbarkeit**: $R^2$-Werte sind nicht immer direkt zwischen verschiedenen Datensätzen oder Modellen vergleichbar, insbesondere wenn die Anzahl der Beobachtungen oder die Varianz der abhängigen Variable stark variiert.

## Erweiterte Themen

### Nicht-lineare Regression

Nicht-lineare Regressionsmodelle können verwendet werden, um komplexere Beziehungen zwischen Variablen zu modellieren. In solchen Fällen können angepasste Maßzahlen wie das nicht-lineare $R^2$ oder das pseudo-$R^2$ verwendet werden.

### Generalisierte lineare Modelle (GLMs)

Generalized Linear Models (GLMs) erweitern die klassischen linearen Modelle, indem sie die Abhängigkeit zwischen der abhängigen Variable und den unabhängigen Variablen über eine Linkfunktion modellieren. Das adjustierte $R^2$ kann in diesem Kontext angepasst werden, um die spezifischen Eigenschaften des GLMs zu berücksichtigen.

### Mixed-Effects-Modelle

Mixed-Effects-Modelle berücksichtigen sowohl feste als auch zufällige Effekte und sind besonders nützlich, wenn Daten hierarchisch strukturiert sind. Die Berechnung von $R^2$ und adjustiertem $R^2$ in Mixed-Effects-Modellen erfordert spezielle Methoden, um die Varianzkomponenten korrekt zu berücksichtigen.

## Fazit

$R^2$ und adjustiertes $R^2$ sind wesentliche Maßzahlen in der Regressionsanalyse, die dazu beitragen, die Güte der Anpassung eines Modells zu bewerten. Während $R^2$ den Anteil der erklärten Varianz angibt, berücksichtigt das adjustierte $R^2$ auch die Anzahl der unabhängigen Variablen und die Stichprobengröße, um eine genauere Bewertung der Modellgüte zu ermöglichen. Durch das Verständnis und die Anwendung dieser Maßzahlen können Forscher robuste und aussagekräftige statistische Analysen durchführen.

---

## Anhang: Weiterführende mathematische Details

### Mathematische Herleitung von $R^2$

Um die mathematische Grundlage von $R^2$ besser zu verstehen, betrachten wir die Quadratsummen im Detail. Die totale Quadratsumme $SS_{\text{tot}}$ misst die Gesamtvarianz der abhängigen Variable $Y$:

$$
SS_{\text{tot}} = \sum_{i=1}^n (Y_i - \bar{Y})^2
$$

Die Residuenquadratsumme $SS_{\text{res}}$ misst die Varianz, die nicht durch das Modell erklärt wird:

$$
SS_{\text{res}} = \sum_{i=1}^n (Y_i - \hat{Y}_i)^2
$$

Der $R^2$-Wert wird dann als Verhältnis der erklärten Varianz zur Gesamtvarianz berechnet:

$$
R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}}
$$

### Mathematische Herleitung des adjustierten $R^2$

Der adjustierte $R^2$-Wert wird berechnet, indem die Freiheitsgrade für die Anzahl der unabhängigen Variablen und die Stichprobengröße angepasst werden:

$$
R^2_{\text{adj}} = 1 - \left( \frac{SS_{\text{res}} / (n - p - 1)}{SS_{\text{tot}} / (n - 1)} \right)
$$

Hierbei ist $n$ die Anzahl der Beobachtungen und $p$ die Anzahl der unabhängigen Variablen.

### Vergleich von $R^2$ und Adjustiertem $R^2$

Ein direkter Vergleich von $R^2$ und adjustiertem $R^2$ zeigt, dass das adjustierte $R^2$ immer kleiner oder gleich dem $R^2$ ist. Dies liegt daran, dass das adjustierte $R^2$ eine Strafe für zusätzliche unabhängige Variablen beinhaltet, die nicht signifikant zur Erklärung der abhängigen Variable beitragen.

$$
R^2_{\text{adj}} \leq R^2
$$

### Erweiterte Beispielberechnungen

#### Multiple lineare Regression

Angenommen, wir haben die folgenden Daten:

| $X_1$ | $X_2$ | $Y$ |
| ----- | ----- | --- |
| 1     | 2     | 2   |
| 2     | 1     | 3   |
| 3     | 4     | 5   |
| 4     | 3     | 4   |
| 5     | 5     | 6   |

Berechnen wir das multiple Regressionsmodell:

1. Mittelwerte berechnen:

$$
\bar{X_1} = \frac{1 + 2 + 3 + 4 + 5}{5} = 3
$$

$$
\bar{X_2} = \frac{2 + 1 + 4 + 3 + 5}{5} = 3
$$

$$
\bar{Y} = \frac{2 + 3 + 5 + 4 + 6}{5} = 4
$$

2. Regressionskoeffizienten berechnen (unter Verwendung der Normalengleichung):

$$
\mathbf{X} = \begin{bmatrix}
1 & 1 & 2 \\
1 & 2 & 1 \\
1 & 3 & 4 \\
1 & 4 & 3 \\
1 & 5 & 5
\end{bmatrix}
$$

$$
\mathbf{Y} = \begin{bmatrix}
2 \\
3 \\
5 \\
4 \\
6
\end{bmatrix}
$$

$$
\mathbf{(\beta)} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{Y}
$$

Nach Berechnung der Matrix-Inversion und -Multiplikation erhalten wir die Regressionskoeffizienten:

$$
\beta_0 = 1, \ \beta_1 = 1, \ \beta_2 = 0.5
$$

Das Regressionsmodell lautet somit:

$$
Y = 1 + 1X_1 + 0.5X_2
$$

3. Vorhergesagte Werte berechnen:

| $X_1$ | $X_2$ | $Y$ | $\hat{Y}$             |
| ----- | ----- | --- | --------------------- |
| 1     | 2     | 2   | 1 + 1*1 + 0.5*2 = 3   |
| 2     | 1     | 3   | 1 + 1*2 + 0.5*1 = 3.5 |
| 3     | 4     | 5   | 1 + 1*3 + 0.5*4 = 6   |
| 4     | 3     | 4   | 1 + 1*4 + 0.5*3 = 6.5 |
| 5     | 5     | 6   | 1 + 1*5 + 0.5*5 = 8.5 |

4. Quadratsummen berechnen:

$$
SS_{\text{res}} = (2-3)^2 + (3-3.5)^2 + (5-6)^2 + (4-6.5)^2 + (6-8.5)^2 = 1 + 0.25 + 1 + 6.25 + 6.25 = 14.75
$$

$$
SS_{\text{tot}} = (2-4)^2 + (3-4)^2 + (5-4)^2 + (4-4)^2 + (6-4)^2 = 4 + 1 + 1 + 0 + 4 = 10
$$

5. $R^2$-Wert berechnen:

$$
R^2 = 1 - \frac{SS_{\text{res}}}{SS_{\text{tot}}} = 1 - \frac{14.75}{10} = -0.475
$$

6. Adjustierten $R^2$-Wert berechnen:

$$
R^2_{\text{adj}} = 1 - \left( \frac{SS_{\text{res}} / (n - p - 1)}{SS_{\text{tot}} / (n - 1)} \right) = 1 - \left( \frac{14.75 / (5 -

2 - 1)}{10 / (5 - 1)} \right) = 1 - \left( \frac{14.75 / 2}{10 / 4} \right) = 1 - \left( \frac{7.375}{2.5} \right) = 1 - 2.95 = -1.95
$$

Beachten Sie, dass ein negativer $R^2_{\text{adj}}$-Wert bedeutet, dass das Modell schlechter ist als ein Modell, das nur den Mittelwert verwendet.

---

## Vertiefung: Einflüsse auf $R^2$ und Adjustiertes $R^2$

### Stichprobengröße

Die Stichprobengröße kann erheblichen Einfluss auf $R^2$ und das adjustierte $R^2$ haben. Mit zunehmender Stichprobengröße wird die Schätzung stabiler, und extreme Werte haben einen geringeren Einfluss auf das Modell. Bei kleinen Stichproben kann $R^2$ übermäßig variabel sein und durch zufällige Variationen stark beeinflusst werden.

### Multikollinearität

Multikollinearität tritt auf, wenn zwei oder mehr unabhängige Variablen stark miteinander korreliert sind. Dies kann die Schätzungen der Regressionskoeffizienten verzerren und zu falschen Schlussfolgerungen führen. Multikollinearität kann auch das adjustierte $R^2$-Maß beeinflussen, indem sie die Variabilität in den Schätzungen erhöht.

### Nicht-lineare Beziehungen

$R^2$ und das adjustierte $R^2$ sind für lineare Modelle konzipiert. Bei nicht-linearen Beziehungen zwischen Variablen kann das $R^2$-Maß die Modellgüte unterschätzen. In solchen Fällen sind alternative Maßzahlen erforderlich, um die Modellanpassung zu bewerten.

### Einfluss von Ausreißern

Ausreißer können einen erheblichen Einfluss auf $R^2$ und das adjustierte $R^2$ haben, da sie die Quadratsummen erheblich verändern können. Es ist wichtig, Ausreißer zu identifizieren und zu bewerten, ob sie die Modellanpassung beeinträchtigen.

## Anwendungen in verschiedenen Disziplinen

### Ökonometrie

In der Ökonometrie wird $R^2$ häufig verwendet, um die Anpassung von Modellen zur Vorhersage wirtschaftlicher Indikatoren zu bewerten. Beispielsweise kann ein Modell zur Vorhersage des Bruttoinlandsprodukts (BIP) auf der Grundlage von Variablen wie Investitionen, Konsum und Regierungsausgaben bewertet werden.

### Medizin

In der Medizin werden $R^2$ und das adjustierte $R^2$ verwendet, um die Güte von Modellen zur Vorhersage von Behandlungsergebnissen zu bewerten. Beispielsweise kann ein Modell zur Vorhersage des Behandlungserfolgs auf der Grundlage von Patientendaten wie Alter, Geschlecht und Krankheitsstadium bewertet werden.

### Sozialwissenschaften

In den Sozialwissenschaften werden $R^2$ und das adjustierte $R^2$ verwendet, um die Anpassung von Modellen zur Untersuchung sozialer Phänomene zu bewerten. Beispielsweise kann ein Modell zur Untersuchung der Einflussfaktoren auf die Bildungsleistung von Schülern auf der Grundlage von Variablen wie sozioökonomischem Status und Bildungsniveau der Eltern bewertet werden.

### Umweltwissenschaften

In den Umweltwissenschaften werden $R^2$ und das adjustierte $R^2$ verwendet, um die Anpassung von Modellen zur Untersuchung von Umweltfaktoren zu bewerten. Beispielsweise kann ein Modell zur Untersuchung des Einflusses von Temperatur und Niederschlag auf die Pflanzenwachstumsraten bewertet werden.

---

## Erweiterte statistische Techniken

### Generalisierte lineare Modelle (GLMs)

Generalized Linear Models (GLMs) erweitern die klassischen linearen Modelle, indem sie die Abhängigkeit zwischen der abhängigen Variable und den unabhängigen Variablen über eine Linkfunktion modellieren. Das adjustierte $R^2$ kann in diesem Kontext angepasst werden, um die spezifischen Eigenschaften des GLMs zu berücksichtigen.

### Mixed-Effects-Modelle

Mixed-Effects-Modelle berücksichtigen sowohl feste als auch zufällige Effekte und sind besonders nützlich, wenn Daten hierarchisch strukturiert sind. Die Berechnung von $R^2$ und adjustiertem $R^2$ in Mixed-Effects-Modellen erfordert spezielle Methoden, um die Varianzkomponenten korrekt zu berücksichtigen.

### Bayesianische Regression

In der bayesianischen Regression werden Wahrscheinlichkeitsverteilungen verwendet, um Unsicherheiten in den Schätzungen der Regressionskoeffizienten zu modellieren. Das bayesianische $R^2$ kann verwendet werden, um die Güte der Modellanpassung zu bewerten, indem die Varianzkomponenten unter Berücksichtigung der Priorverteilungen geschätzt werden.

## Vertiefung: Einfluss der Datenstruktur auf $R^2$

### Zeitreihenanalyse

In der Zeitreihenanalyse wird $R^2$ häufig verwendet, um die Anpassung von Modellen zur Vorhersage zeitlicher Muster zu bewerten. Beispielsweise kann ein Modell zur Vorhersage von Aktienkursen auf der Grundlage historischer Daten bewertet werden. Es ist wichtig, saisonale und trendbasierte Komponenten in die Analyse einzubeziehen, um die Modellanpassung genau zu bewerten.

### Paneldatenanalyse

Paneldaten kombinieren zeitliche und Querschnittsdaten und ermöglichen die Analyse von Daten, die über mehrere Zeitperioden hinweg für dieselben Einheiten beobachtet werden. $R^2$ und das adjustierte $R^2$ können angepasst werden, um die spezifischen Eigenschaften von Paneldaten zu berücksichtigen, einschließlich fester und zufälliger Effekte.

### Hierarchische Modelle

Hierarchische Modelle berücksichtigen die verschachtelte Struktur von Daten, bei der Beobachtungen innerhalb von Gruppen organisiert sind. Beispielsweise können Schüler innerhalb von Klassen und Klassen innerhalb von Schulen organisiert sein. $R^2$ und das adjustierte $R^2$ können angepasst werden, um die Varianzkomponenten auf verschiedenen Ebenen der Hierarchie zu berücksichtigen.

## Praktische Tipps zur Anwendung von $R^2$ und Adjustiertem $R^2$

### Modellvalidierung

Es ist wichtig, Modelle zu validieren, um sicherzustellen, dass die Ergebnisse generalisierbar sind. Dies kann durch Kreuzvalidierung, bei der das Datenset in Trainings- und Testsets aufgeteilt wird, oder durch Bootstrapping, bei dem mehrere Stichproben gezogen werden, erreicht werden.

### Diagnostik und Residuenanalyse

Die Analyse der Residuen ist ein wichtiger Schritt, um die Güte der Modellanpassung zu bewerten. Plotten Sie die Residuen gegen die vorhergesagten Werte, um Muster oder Trends zu erkennen, die auf Modellmängel hinweisen könnten. Verwenden Sie auch statistische Tests wie den Durbin-Watson-Test, um Autokorrelationen in den Residuen zu identifizieren.

### Verwendung von Informationskriterien

Neben $R^2$ und adjustiertem $R^2$ können Informationskriterien wie das Akaike-Informationskriterium (AIC) und das Bayes-Informationskriterium (BIC) verwendet werden, um Modelle zu vergleichen und die Modellgüte zu bewerten. Diese Kriterien berücksichtigen die Anzahl der Parameter im Modell und helfen, Überanpassung zu vermeiden.

### Multikollinearitätsdiagnose

Überprüfen Sie die Multikollinearität zwischen den unabhängigen Variablen, indem Sie den Varianzinflationsfaktor (VIF) berechnen. Hohe VIF-Werte weisen auf starke Korrelationen hin und können die Stabilität der Schätzungen beeinträchtigen. In solchen Fällen können Variablen eliminiert oder kombiniert werden, um Multikollinearität zu reduzieren.

### Transformationen und Interaktionen

Erwägen Sie Transformationen der Variablen oder die Einbeziehung von Interaktionseffekten, um nicht-lineare Beziehungen oder Wechselwirkungen zwischen den Variablen zu modellieren. Transformationen wie die logarithmische oder quadratische Transformation können helfen, die Modellanpassung zu verbessern.

## Fazit

$R^2$ und adjustiertes $R^2$ sind wesentliche Maßzahlen in der Regressionsanalyse, die dazu beitragen, die Güte der Anpassung eines Modells zu bewerten. Während $R^2$ den Anteil der erklärten Varianz angibt, berücksichtigt das adjustierte $R^2$ auch die Anzahl der unabhängigen Variablen und die Stichprobengröße, um eine genauere Bewertung der Modellgüte zu ermöglichen. Durch das Verständnis und die Anwendung dieser Maßzahlen können Forscher robuste und aussagekräftige statistische Analysen durchführen, die zur Weiterentwicklung der wissenschaftlichen Erkenntnisse beitragen.

## Weiterführende Literatur

Für eine vertiefte Auseinandersetzung mit $R^2$ und adjustiertem $R^2$ und ihren Anwendungen in verschiedenen Forschungsfeldern empfiehlt sich die Lektüre der folgenden Werke:

- "Applied Regression

Analysis" von Norman R. Draper und Harry Smith

- "The Analysis of Variance" von Henry Scheffé
- "Econometric Analysis" von William H. Greene
- "Statistical Methods for the Social Sciences" von Alan Agresti und Barbara Finlay
- "Introduction to the Practice of Statistics" von David S. Moore, George P. McCabe und Bruce A. Craig

Diese Bücher bieten umfassende Erklärungen und Beispiele zur Anwendung von $R^2$ und adjustiertem $R^2$ in verschiedenen Kontexten und sind wertvolle Ressourcen für alle, die ihre statistischen Kenntnisse vertiefen möchten.

## Danksagung

Wir danken allen Forschern und Wissenschaftlern, die zur Entwicklung und Verbreitung statistischer Methoden beigetragen haben. Ihre Arbeit bildet die Grundlage für viele wissenschaftliche Fortschritte und ermöglicht es uns, die Welt besser zu verstehen und fundierte Entscheidungen zu treffen.

## Anhang: Mathematik und Simulationen

### Simulationen zur Veranschaulichung von $R^2$

Simulationen können eine hilfreiche Methode sein, um das Verständnis von $R^2$ zu vertiefen. Durch die Erstellung von zufälligen Datensätzen und die Anwendung von $R^2$ können Forscher die Verteilung und die Eigenschaften von $R^2$ in verschiedenen Szenarien untersuchen.

#### Beispiel einer Simulation

Angenommen, wir möchten die Verteilung von $R^2$ unter der Nullhypothese untersuchen. Wir erstellen mehrere zufällige Datensätze mit einer bestimmten Anzahl von Beobachtungen und unabhängigen Variablen, berechnen $R^2$ für jedes Datenset und analysieren die resultierende Verteilung.

```python
import numpy as np
import scipy.stats as stats
import matplotlib.pyplot as plt

# Parameter für die Simulation
n = 50  # Anzahl der Beobachtungen
p = 3   # Anzahl der unabhängigen Variablen
num_simulations = 1000  # Anzahl der Simulationen

# Array zur Speicherung der R^2-Werte
r2_values = np.zeros(num_simulations)

# Simulationen durchführen
for i in range(num_simulations):
    # Zufällige Daten generieren
    X = np.random.randn(n, p)
    Y = np.random.randn(n)

    # Regressionsanalyse durchführen
    beta_hat = np.linalg.inv(X.T @ X) @ X.T @ Y
    Y_hat = X @ beta_hat
    SS_res = np.sum((Y - Y_hat)**2)
    SS_tot = np.sum((Y - np.mean(Y))**2)

    # R^2 berechnen
    r2_values[i] = 1 - (SS_res / SS_tot)

# Verteilung der R^2-Werte plotten
plt.hist(r2_values, bins=30, density=True, alpha=0.7, color='blue', edgecolor='black')
plt.title('Verteilung von R^2 unter der Nullhypothese')
plt.xlabel('R^2-Wert')
plt.ylabel('Dichte')
plt.show()
```

Diese Simulation zeigt die Verteilung von $R^2$ unter der Nullhypothese und hilft zu verstehen, wie sich die $R^2$-Werte in zufälligen Datensätzen verhalten. Solche Simulationen sind nützlich, um das Verständnis von $R^2$ zu vertiefen und ihre Anwendung in der Praxis zu unterstützen.

### Simulationen zur Veranschaulichung des adjustierten $R^2$

Analog zur Simulation von $R^2$ können wir auch Simulationen durchführen, um die Verteilung des adjustierten $R^2$ zu untersuchen.

```python
# Array zur Speicherung der adjustierten R^2-Werte
adjusted_r2_values = np.zeros(num_simulations)

# Simulationen durchführen
for i in range(num_simulations):
    # Zufällige Daten generieren
    X = np.random.randn(n, p)
    Y = np.random.randn(n)

    # Regressionsanalyse durchführen
    beta_hat = np.linalg.inv(X.T @ X) @ X.T @ Y
    Y_hat = X @ beta_hat
    SS_res = np.sum((Y - Y_hat)**2)
    SS_tot = np.sum((Y - np.mean(Y))**2)

    # Adjustiertes R^2 berechnen
    r2 = 1 - (SS_res / SS_tot)
    adjusted_r2_values[i] = 1 - ((1 - r2) * (n - 1) / (n - p - 1))

# Verteilung der adjustierten R^2-Werte plotten
plt.hist(adjusted_r2_values, bins=30, density=True, alpha=0.7, color='green', edgecolor='black')
plt.title('Verteilung des adjustierten R^2 unter der Nullhypothese')
plt.xlabel('Adjustierter R^2-Wert')
plt.ylabel('Dichte')
plt.show()
```

Diese Simulation zeigt die Verteilung des adjustierten $R^2$ unter der Nullhypothese und hilft zu verstehen, wie sich die adjustierten $R^2$-Werte in zufälligen Datensätzen verhalten. Solche Simulationen sind nützlich, um das Verständnis des adjustierten $R^2$ zu vertiefen und ihre Anwendung in der Praxis zu unterstützen.

## Schlussbemerkungen

$R^2$ und das adjustierte $R^2$ sind unverzichtbare Werkzeuge in der Regressionsanalyse. Sie bieten wertvolle Informationen über die Güte der Anpassung eines Modells und helfen Forschern, fundierte Entscheidungen über die Modellvalidität zu treffen. Durch das Verständnis ihrer Berechnungen, Anwendungen und Grenzen können Forscher robuste und aussagekräftige statistische Analysen durchführen, die zur Weiterentwicklung der wissenschaftlichen Erkenntnisse beitragen.

<!-- DISQUS SCRIPT COMMENT START -->

<!-- DISQUS RECOMMENDATION START -->

<div id="disqus_recommendations"></div>

<script> 
(function() { // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
var d = document, s = d.createElement('script'); // IMPORTANT: Replace EXAMPLE with your forum shortname!
s.src = 'https://myuninotes.disqus.com/recommendations.js'; s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>
Please enable JavaScript to view the 
<a href="https://disqus.com/?ref_noscript" rel="nofollow">
comments powered by Disqus.
</a>
</noscript>

<!-- DISQUS RECOMMENDATION END -->

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
