---
date created: Tuesday, 16. July 2024, 20:56
date modified: Tuesday, 16. July 2024, 21:09
---

# Die F-Statistik in Regressionsmodellen

## Einleitung

Die F-Statistik ist ein entscheidendes Instrument in der Statistik, insbesondere im Bereich der Regressionsanalyse. Sie spielt eine zentrale Rolle bei der Bewertung der Gesamtanpassung eines Regressionsmodells und bei der Prüfung von Hypothesen über die Beziehungen zwischen Variablen. In diesem Dokument werden wir die F-Statistik im Kontext der Regressionsanalyse ausführlich untersuchen und ihre Berechnung, Interpretation und Anwendung diskutieren.

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

### Quadratsummen

Um die Güte der Anpassung eines Regressionsmodells zu bewerten, betrachten wir verschiedene Quadratsummen:

- **Gesamtsumme der Quadrate (Total Sum of Squares, TSS)**:

$$
TSS = \sum_{i=1}^n (Y_i - \bar{Y})^2
$$

- **Erklärungssumme der Quadrate (Regression Sum of Squares, RSS)**:

$$
RSS = \sum_{i=1}^n (\hat{Y}_i - \bar{Y})^2
$$

- **Residuenquadratsumme (Residual Sum of Squares, ESS)**:

$$
ESS = \sum_{i=1}^n (Y_i - \hat{Y}_i)^2
$$

Diese Quadratsummen helfen uns, die Varianz im Modell zu quantifizieren und die Güte der Anpassung zu bewerten.

## Berechnung der F-Statistik

Die F-Statistik vergleicht die mittlere Quadratsumme der Regression (MSR) mit der mittleren Quadratsumme der Residuen (MSE):

$$
F = \frac{\text{MSR}}{\text{MSE}} = \frac{\left( \frac{RSS}{p} \right)}{\left( \frac{ESS}{n-p-1} \right)}
$$

wobei:

- $p$ die Anzahl der unabhängigen Variablen ist,
- $n$ die Anzahl der Beobachtungen ist.

### Freiheitsgrade

Die Freiheitsgrade sind entscheidend für die Berechnung der F-Statistik:

- Die Zählerfreiheitsgrade sind $p$, die Anzahl der unabhängigen Variablen.
- Die Nennerfreiheitsgrade sind $n - p - 1$, die Anzahl der Beobachtungen minus der Anzahl der unabhängigen Variablen minus eins.

### Beispiel einer F-Test-Berechnung

Angenommen, wir haben ein Regressionsmodell mit 3 unabhängigen Variablen und 30 Beobachtungen. Die Quadratsummen sind wie folgt gegeben:

- $RSS = 150$
- $ESS = 75$

Berechnen wir die F-Statistik:

1. Zählerfreiheitsgrade: $p = 3$
2. Nennerfreiheitsgrade: $n - p - 1 = 30 - 3 - 1 = 26$
3. Mittlere Quadratsumme der Regression (MSR): $ \frac{RSS}{p} = \frac{150}{3} = 50$
4. Mittlere Quadratsumme der Residuen (MSE): $\frac{ESS}{n - p - 1} = \frac{75}{26} \approx 2.88$

Die F-Statistik ist somit:

$$
F = \frac{50}{2.88} \approx 17.36
$$

Vergleichen wir diesen Wert mit dem kritischen Wert aus der F-Verteilung für 3 und 26 Freiheitsgrade (bei einem Signifikanzniveau von 0.05), sehen wir, dass unser berechneter F-Wert deutlich höher ist. Daher lehnen wir die Nullhypothese ab und schließen, dass unser Modell signifikant ist.

## Anwendung der F-Statistik

### Modellvergleich

Ein häufiger Anwendungsbereich der F-Statistik ist der Vergleich von Modellen. Hierbei wird ein einfacheres Modell (mit weniger Parametern) gegen ein komplexeres Modell getestet. Die F-Statistik hilft zu bestimmen, ob die zusätzliche Komplexität des Modells gerechtfertigt ist.

### Beispiel eines Modellvergleichs

Betrachten wir zwei Modelle:

- Modell 1: $Y = \beta_0 + \beta_1 X_1 + \epsilon$
- Modell 2: $Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \epsilon$

Wenn Modell 2 eine signifikant bessere Anpassung bietet, sollte die F-Statistik für den Modellvergleich signifikant sein. Wir berechnen dies, indem wir die RSS-Werte der beiden Modelle vergleichen.

$$
F = \frac{(RSS_1 - RSS_2) / (df_1 - df_2)}{RSS_2 / df_2}
$$

wobei $df_1$ und $df_2$ die Freiheitsgrade der beiden Modelle sind.

### ANOVA (Analyse der Varianz)

Die F-Statistik ist auch zentral in der ANOVA, einem Verfahren, das verwendet wird, um zu bestimmen, ob die Mittelwerte mehrerer Gruppen signifikant unterschiedlich sind.

## Interpretation der F-Statistik

Ein hoher F-Wert deutet darauf hin, dass das Modell insgesamt signifikant ist. Wenn der F-Wert größer ist als der kritische Wert aus der F-Verteilung für die gegebenen Freiheitsgrade, können wir die Nullhypothese ablehnen und schließen, dass mindestens eine der unabhängigen Variablen einen signifikanten Einfluss auf die abhängige Variable hat.

### Beispiel zur Interpretation

Angenommen, wir führen eine multiple lineare Regression mit folgenden Ergebnissen durch:

- $RSS = 200$
- $ESS = 50$
- $p = 4$
- $n = 50$

Berechnen wir die F-Statistik:

1. Zählerfreiheitsgrade: $p = 4$
2. Nennerfreiheitsgrade: $n - p - 1 = 50 - 4 - 1 = 45$
3. Mittlere Quadratsumme der Regression (MSR): $\frac{RSS}{p} = \frac{200}{4} = 50$
4. Mittlere Quadratsumme der Residuen (MSE): $\frac{ESS}{n - p - 1} = \frac{50}{45} \approx 1.11$

Die F-Statistik ist somit:

$$
F = \frac{50}{1.11} \approx 45.05
$$

Wenn der kritische F-Wert für 4 und 45 Freiheitsgrade (bei einem Signifikanzniveau von 0.05) beispielsweise 2.58 ist, ist unser berechneter F-Wert deutlich höher. Daher lehnen wir die Nullhypothese ab und schließen, dass das Modell signifikant ist.

## Mathematische Herleitung der F-Statistik

### Ausgangspunkt

Die F-Statistik basiert auf der Annahme, dass die Residuen $\epsilon_i$ normalverteilt sind mit Erwartungswert 0 und Varianz $\sigma^2$:

$$
\epsilon_i \sim N(0, \sigma^2)
$$

### Quadratsummenzerlegung

Die Gesamtsumme der Quadrate (TSS) kann in die Erklärungssumme der Quadrate (RSS) und die Residuenquadratsumme (ESS) zerlegt werden:

$$
TSS = RSS + ESS
$$

### Mittlere Quadratsummen

Die mittlere Quadratsumme der Regression (MSR) und die mittlere Quadratsumme der Residuen (MSE) sind:

$$
MSR = \frac{RSS}{p}
$$

$$
MSE = \frac{ESS}{n - p - 1}
$$

### Berechnung der F-Statistik

Die F-Statistik vergleicht die mittlere Quadratsumme der Regression (MSR) mit der mittleren Quadratsumme der Residuen (MSE):

$$
F = \frac{MSR}{MSE}
$$

Wenn die Nullhypothese $H_0: \beta_1 = \beta_2 = \cdots = \beta_p = 0$ wahr ist, folgt die F-Statistik einer F-Verteilung mit $p$ und $n - p - 1$ Freiheitsgraden.

## Anwendung der F-Statistik in der Praxis

### Beispiel aus der Praxis

Angenommen, wir untersuchen den Einfluss von Ausbildung (in Jahren), Berufserfahrung (in Jahren) und Alter (in Jahren) auf das Einkommen (in Euro). Wir verwenden ein multiples Regressionsmodell mit den

folgenden Ergebnissen:

- $RSS = 1200$
- $ESS = 800$
- $p = 3$
- $n = 50$

Berechnen wir die F-Statistik:

1. Zählerfreiheitsgrade: $p = 3$
2. Nennerfreiheitsgrade: $n - p - 1 = 50 - 3 - 1 = 46$
3. Mittlere Quadratsumme der Regression (MSR): $\frac{RSS}{p} = \frac{1200}{3} = 400$
4. Mittlere Quadratsumme der Residuen (MSE): $\frac{ESS}{n - p - 1} = \frac{800}{46} \approx 17.39$

Die F-Statistik ist somit:

$$
F = \frac{400}{17.39} \approx 23.00
$$

Wenn der kritische F-Wert für 3 und 46 Freiheitsgrade (bei einem Signifikanzniveau von 0.05) beispielsweise 2.80 ist, ist unser berechneter F-Wert deutlich höher. Daher lehnen wir die Nullhypothese ab und schließen, dass das Modell signifikant ist.

### Bedeutung in der Ökonometrie

In der Ökonometrie wird die F-Statistik häufig verwendet, um die Gesamtanpassung von Modellen zu bewerten und Hypothesen über die Beziehungen zwischen ökonomischen Variablen zu testen. Ein Beispiel ist die Bewertung der Effektivität wirtschaftspolitischer Maßnahmen, bei der untersucht wird, ob bestimmte politische Instrumente einen signifikanten Einfluss auf ökonomische Indikatoren haben.

### Bedeutung in der Psychologie

In der Psychologie wird die F-Statistik häufig in der Varianzanalyse (ANOVA) verwendet, um die Unterschiede zwischen Gruppen zu untersuchen. Beispielsweise kann untersucht werden, ob verschiedene Therapieformen unterschiedliche Auswirkungen auf die Verbesserung der psychischen Gesundheit haben.

### Bedeutung in der Medizin

In der Medizin wird die F-Statistik häufig in klinischen Studien verwendet, um zu bestimmen, ob verschiedene Behandlungsgruppen signifikant unterschiedliche Ergebnisse zeigen. Beispielsweise kann untersucht werden, ob ein neues Medikament signifikant wirksamer ist als ein Placebo.

## Zusammenfassung

Die F-Statistik ist ein mächtiges Werkzeug in der Regressionsanalyse und anderen statistischen Verfahren. Sie ermöglicht es, die Gesamtanpassung eines Modells zu bewerten und Hypothesen über die Beziehungen zwischen Variablen zu testen. Durch das Verständnis und die Anwendung der F-Statistik können Forscher fundierte Entscheidungen über die Gültigkeit und Relevanz ihrer Modelle treffen.

---

## Anhang: Weitere mathematische Details

### Herleitung der Quadratsummen

Die Gesamtsumme der Quadrate (TSS) wird berechnet als:

$$
TSS = \sum_{i=1}^n (Y_i - \bar{Y})^2
$$

Die Erklärungssumme der Quadrate (RSS) wird berechnet als:

$$
RSS = \sum_{i=1}^n (\hat{Y}_i - \bar{Y})^2
$$

Die Residuenquadratsumme (ESS) wird berechnet als:

$$
ESS = \sum_{i=1}^n (Y_i - \hat{Y}_i)^2
$$

### Herleitung der mittleren Quadratsummen

Die mittlere Quadratsumme der Regression (MSR) wird berechnet als:

$$
MSR = \frac{RSS}{p}
$$

Die mittlere Quadratsumme der Residuen (MSE) wird berechnet als:

$$
MSE = \frac{ESS}{n - p - 1}
$$

### Herleitung der F-Statistik

Die F-Statistik wird berechnet als:

$$
F = \frac{MSR}{MSE}
$$

Wenn die Nullhypothese $H_0: \beta_1 = \beta_2 = \cdots = \beta_p = 0$ wahr ist, folgt die F-Statistik einer F-Verteilung mit $p$ und $n - p - 1$ Freiheitsgraden.

### Interpretation der F-Statistik

Ein hoher F-Wert deutet darauf hin, dass das Modell insgesamt signifikant ist. Wenn der F-Wert größer ist als der kritische Wert aus der F-Verteilung für die gegebenen Freiheitsgrade, können wir die Nullhypothese ablehnen und schließen, dass mindestens eine der unabhängigen Variablen einen signifikanten Einfluss auf die abhängige Variable hat.

### Beispiel zur Interpretation

Angenommen, wir führen eine multiple lineare Regression mit folgenden Ergebnissen durch:

- $RSS = 200$
- $ESS = 50$
- $p = 4$
- $n = 50$

Berechnen wir die F-Statistik:

1. Zählerfreiheitsgrade: $p = 4$
2. Nennerfreiheitsgrade: $n - p - 1 = 50 - 4 - 1 = 45$
3. Mittlere Quadratsumme der Regression (MSR): $\frac{RSS}{p} = \frac{200}{4} = 50$
4. Mittlere Quadratsumme der Residuen (MSE): $\frac{ESS}{n - p - 1} = \frac{50}{45} \approx 1.11$

Die F-Statistik ist somit:

$$
F = \frac{50}{1.11} \approx 45.05
$$

Wenn der kritische F-Wert für 4 und 45 Freiheitsgrade (bei einem Signifikanzniveau von 0.05) beispielsweise 2.58 ist, ist unser berechneter F-Wert deutlich höher. Daher lehnen wir die Nullhypothese ab und schließen, dass das Modell signifikant ist.

### Anwendung der F-Statistik in der Praxis

#### Beispiel aus der Praxis

Angenommen, wir untersuchen den Einfluss von Ausbildung (in Jahren), Berufserfahrung (in Jahren) und Alter (in Jahren) auf das Einkommen (in Euro). Wir verwenden ein multiples Regressionsmodell mit den folgenden Ergebnissen:

- $RSS = 1200$
- $ESS = 800$
- $p = 3$
- $n = 50$

Berechnen wir die F-Statistik:

1. Zählerfreiheitsgrade: $p = 3$
2. Nennerfreiheitsgrade: $n - p - 1 = 50 - 3 - 1 = 46$
3. Mittlere Quadratsumme der Regression (MSR): $\frac{RSS}{p} = \frac{1200}{3} = 400$
4. Mittlere Quadratsumme der Residuen (MSE): $\frac{ESS}{n - p - 1} = \frac{800}{46} \approx 17.39$

Die F-Statistik ist somit:

$$
F = \frac{400}{17.39} \approx 23.00
$$

Wenn der kritische F-Wert für 3 und 46 Freiheitsgrade (bei einem Signifikanzniveau von 0.05) beispielsweise 2.80 ist, ist unser berechneter F-Wert deutlich höher. Daher lehnen wir die Nullhypothese ab und schließen, dass das Modell signifikant ist.

#### Bedeutung in der Ökonometrie

In der Ökonometrie wird die F-Statistik häufig verwendet, um die Gesamtanpassung von Modellen zu bewerten und Hypothesen über die Beziehungen zwischen ökonomischen Variablen zu testen. Ein Beispiel ist die Bewertung der Effektivität wirtschaftspolitischer Maßnahmen, bei der untersucht wird, ob bestimmte politische Instrumente einen signifikanten Einfluss auf ökonomische Indikatoren haben.

#### Bedeutung in der Psychologie

In der Psychologie wird die F-Statistik häufig in der Varianzanalyse (ANOVA) verwendet, um die Unterschiede zwischen Gruppen zu untersuchen. Beispielsweise kann untersucht werden, ob verschiedene Therapieformen unterschiedliche Auswirkungen auf die Verbesserung der psychischen Gesundheit haben.

#### Bedeutung in der Medizin

In der Medizin wird die F-Statistik häufig in klinischen Studien verwendet, um zu bestimmen, ob verschiedene Behandlungsgruppen signifikant unterschiedliche Ergebnisse zeigen. Beispielsweise kann untersucht werden, ob ein neues Medikament signifikant wirksamer ist als ein Placebo.

---

## Erweiterte Themen

### Verallgemeinerte lineare Modelle (GLMs)

Verallgemeinerte lineare Modelle (GLMs) erweitern die klassischen linearen Modelle, indem sie die Abhängigkeit zwischen der abhängigen Variable und den unabhängigen Variablen über eine Linkfunktion modellieren. Die F-Statistik kann in diesem Kontext verwendet werden, um die Gesamtanpassung des Modells zu bewerten.

### Hypothesentests in GLMs

In GLMs wird die Nullhypothese getestet, dass alle Regressionskoeffizienten gleich null sind:

$$
H_0: \beta_1 = \beta_2 = \cdots = \beta_p = 0
$$

Die F-Statistik vergleicht die erklärte Varianz durch das Modell mit der nicht erklärten Varianz, um die Signifikanz des Modells zu bewerten.

### Mehrfache Hypothesentests

In der Praxis müssen oft mehrere Hypothesen gleichzeitig getestet werden. Die F-Statistik kann verwendet werden, um die Signifikanz mehrerer Hypothesentests gleichzeitig zu bewerten, was zu einer besseren Kontrolle des Gesamttestfehlers führt.

### Korrektur für Mehrfachtsts

Eine gängige Methode zur Korrektur für Mehrfachtsts ist die Bonferroni-Korrektur, bei

der das Signifikanzniveau durch die Anzahl der durchgeführten Tests geteilt wird. Die F-Statistik kann angepasst werden, um diese Korrekturen zu berücksichtigen.

## Erweiterte Anwendungsbeispiele

### Beispiel aus der Wirtschaft

In der Wirtschaftsforschung wird die F-Statistik häufig verwendet, um die Wirksamkeit verschiedener Marketingstrategien zu bewerten. Angenommen, ein Unternehmen möchte den Einfluss von Werbebudget, Preisstrategie und Produktqualität auf den Umsatz untersuchen. Ein multiples Regressionsmodell könnte verwendet werden, um diese Beziehungen zu modellieren und die F-Statistik, um die Gesamtanpassung des Modells zu bewerten.

### Beispiel aus der Sozialwissenschaft

In den Sozialwissenschaften kann die F-Statistik verwendet werden, um den Einfluss von Bildung, Einkommen und sozialem Status auf die Lebenszufriedenheit zu untersuchen. Ein multiples Regressionsmodell kann diese Faktoren modellieren und die F-Statistik helfen, die Signifikanz des Modells zu bewerten.

### Beispiel aus der Umweltwissenschaft

In der Umweltwissenschaft wird die F-Statistik häufig verwendet, um die Auswirkungen verschiedener Umweltfaktoren auf die Biodiversität zu bewerten. Angenommen, Forscher möchten den Einfluss von Temperatur, Niederschlag und Bodenqualität auf die Artenvielfalt in einem bestimmten Gebiet untersuchen. Ein multiples Regressionsmodell könnte diese Beziehungen modellieren und die F-Statistik helfen, die Signifikanz des Modells zu bewerten.

---

## Schlussfolgerung

Die F-Statistik ist ein unverzichtbares Werkzeug in der Regressionsanalyse und anderen statistischen Verfahren. Sie ermöglicht es Forschern, die Gesamtanpassung eines Modells zu bewerten und fundierte Entscheidungen über die Gültigkeit und Relevanz ihrer Modelle zu treffen. Durch das Verständnis und die Anwendung der F-Statistik können Forscher robuste und aussagekräftige statistische Analysen durchführen, die zur Weiterentwicklung der wissenschaftlichen Erkenntnisse beitragen.

## Weiterführende Literatur

Für eine vertiefte Auseinandersetzung mit der F-Statistik und ihren Anwendungen in verschiedenen Forschungsfeldern empfiehlt sich die Lektüre der folgenden Werke:

- "Applied Regression Analysis" von Norman R. Draper und Harry Smith
- "The Analysis of Variance" von Henry Scheffé
- "Econometric Analysis" von William H. Greene
- "Statistical Methods for the Social Sciences" von Alan Agresti und Barbara Finlay
- "Introduction to the Practice of Statistics" von David S. Moore, George P. McCabe und Bruce A. Craig

Diese Bücher bieten umfassende Erklärungen und Beispiele zur Anwendung der F-Statistik in verschiedenen Kontexten und sind wertvolle Ressourcen für alle, die ihre statistischen Kenntnisse vertiefen möchten.

## Danksagung

Wir danken allen Forschern und Wissenschaftlern, die zur Entwicklung und Verbreitung statistischer Methoden beigetragen haben. Ihre Arbeit bildet die Grundlage für viele wissenschaftliche Fortschritte und ermöglicht es uns, die Welt besser zu verstehen und fundierte Entscheidungen zu treffen.

## Anhang: Mathematik und Simulationen

### Simulationen zur Veranschaulichung der F-Statistik

Simulationen können eine hilfreiche Methode sein, um das Verständnis der F-Statistik zu vertiefen. Durch die Erstellung von zufälligen Datensätzen und die Anwendung der F-Statistik können Forscher die Verteilung und die Eigenschaften der F-Statistik in verschiedenen Szenarien untersuchen.

#### Beispiel einer Simulation

Angenommen, wir möchten die Verteilung der F-Statistik unter der Nullhypothese untersuchen. Wir erstellen mehrere zufällige Datensätze mit einer bestimmten Anzahl von Beobachtungen und unabhängigen Variablen, berechnen die F-Statistik für jedes Datenset und analysieren die resultierende Verteilung.

```python
import numpy as np
import scipy.stats as stats
import matplotlib.pyplot as plt

# Parameter für die Simulation
n = 50  # Anzahl der Beobachtungen
p = 3   # Anzahl der unabhängigen Variablen
num_simulations = 1000  # Anzahl der Simulationen

# Array zur Speicherung der F-Werte
f_values = np.zeros(num_simulations)

# Simulationen durchführen
for i in range(num_simulations):
    # Zufällige Daten generieren
    X = np.random.randn(n, p)
    Y = np.random.randn(n)

    # Regressionsanalyse durchführen
    beta_hat = np.linalg.inv(X.T @ X) @ X.T @ Y
    Y_hat = X @ beta_hat
    RSS = np.sum((Y_hat - np.mean(Y))**2)
    ESS = np.sum((Y - Y_hat)**2)

    # F-Statistik berechnen
    MSR = RSS / p
    MSE = ESS / (n - p - 1)
    f_values[i] = MSR / MSE

# Verteilung der F-Werte plotten
plt.hist(f_values, bins=30, density=True, alpha=0.7, color='blue', edgecolor='black')
plt.title('Verteilung der F-Statistik unter der Nullhypothese')
plt.xlabel('F-Wert')
plt.ylabel('Dichte')
plt.show()
```

Diese Simulation zeigt die Verteilung der F-Statistik unter der Nullhypothese und hilft zu verstehen, wie sich die F-Werte in zufälligen Datensätzen verhalten. Solche Simulationen sind nützlich, um das Verständnis der F-Statistik zu vertiefen und ihre Anwendung in der Praxis zu unterstützen.

---

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
