---
date created: Thursday, 1. August 2024, 00:29
date modified: Thursday, 1. August 2024, 01:08
---

---

# Inhaltsverzeichnis

## 1. Residuenanalyse

### - Residuen

### - Q-Q-Plot

### - Residuenplot

### - Wichtige Begriffe

### - Beispiel

## 2. Intraclass-Korrelation

### - Intraclass-Korrelation (ICC)

### - Anwendung

### - Wichtige Punkte

## 3. Modellbewertung

### - Akaike-Informationskriterium (AIC)

### - Deviance Residuals

### - Root Mean Squared Error (RMSE)

## 4. Homoskedastizität vs. Heteroskedastizität

### - Homoskedastizität

### - Heteroskedastizität

## 5. Modellvergleiche

### - Multiples lineares Modell vs. gemischtes Modell

### - ANOVA-Test

## 6. Interaktionseffekte

### - Interaktionsterms

### - Interaktionseffekt

## 7. F-Test

### - F-Test

### - Berechnung

### - Interpretation

### - Anwendung

### - Beispiel

## 8. Determinationskoeffizient

### - R² und adjustiertes R²

## 9. Schätzungen

### - ICC-Schätzung

### - Lineares gemischtes Modell

## 10. Modellgüte

### - Modellgüte I

## 11. Kodierung

### - Effektkodierung vs. Referenzkodierung

### - Effektkodierung

### - Referenzkodierung

## 12. Variablenselektion

### - Variablenselektion

### - Methoden der Variablenselektion

## 13. Weitere Tests

### - Ceteris Paribus

---

# Residuenanalyse

## Residuen

- **Definition**: Residuen sind die Differenzen zwischen den beobachteten Werten $y_i$ und den durch das Modell vorhergesagten Werten $\hat{y}_i$.
  $$
  e_i = y_i - \hat{y}_i
  $$
- **Zweck**: Überprüfung der Modellannahmen und der Güte der Modellanpassung.
- **Interpretation**:
  - **Zufällige Verteilung der Residuen**: Deutet auf ein gutes Modell hin.
  - **Systematische Muster**: Weisen auf Modellfehler hin (z.B. Nichtlinearität, Heteroskedastizität).

## Q-Q-Plot

- **Definition**: Ein Quantil-Quantil-Plot vergleicht die Verteilung der Residuen mit einer theoretischen Normalverteilung.
- **Vorgehen**:
  - Berechne die Residuen $e_i$.
  - Sortiere die Residuen.
  - Vergleiche die Quantile der sortierten Residuen mit den Quantilen einer Normalverteilung.
- **Interpretation**:
  - **Residuen auf einer Linie**: Residuen sind normalverteilt.
  - **Residuen weichen systematisch ab**: Hinweise auf Abweichungen von der Normalverteilung.

## Residuenplot

- **Definition**: Darstellung der Residuen $e_i$ gegen die vorhergesagten Werte $\hat{y}_i$ oder die unabhängigen Variablen $x_i$.
- **Zweck**: Identifikation von Mustern und Abweichungen.
- **Interpretation**:
  - **Keine Struktur**: Gute Modellanpassung.
  - **Struktur erkennbar**: Mögliche Modellmängel (z.B. Nichtlinearitäten).

## Wichtige Begriffe

- **Heteroskedastizität**: Die Varianz der Residuen ist nicht konstant.
- **Nichtlinearität**: Das Modell erfasst nicht die wahre Beziehung zwischen den Variablen.

## Beispiel

- **Residuen berechnen**:
  $$
  e_i = y_i - \hat{y}_i
  $$
- **Residuenplot erstellen**:
  - Plot: $e_i$ gegen $\hat{y}_i$
- **Q-Q-Plot erstellen**:
  - Quantile der Residuen gegen Quantile der Normalverteilung plotten.

---

# Intraclass-Korrelation

## Intraclass-Korrelation (ICC)

- **Definition**: Die Intraklassenkorrelation misst die Ähnlichkeit oder Konsistenz von Messungen innerhalb derselben Gruppe oder Klasse. Ein hoher ICC-Wert zeigt an, dass die Messungen innerhalb der Gruppen sehr ähnlich sind, während ein niedriger Wert auf geringe Ähnlichkeit hinweist.
- **Formel**:

$$
\text{ICC} = \frac{\text{Varianz der zufälligen Effekte}}{\text{Varianz der zufälligen Effekte} + \text{Varianz der Residuen}}
$$

$$
ICC = \frac{MS_{B} - MS_{W}}{MS_{B} + (k-1) \cdot MS_{W}}
$$

- $MS_{B}$: Mittel der Quadrate zwischen den Gruppen (Mean Square Between)
- $MS_{W}$: Mittel der Quadrate innerhalb der Gruppen (Mean Square Within)
- $k$: Anzahl der Messungen pro Gruppe

- **Interpretation**:
  - **Hoher ICC-Wert**: Hohe Ähnlichkeit der Messungen innerhalb der Gruppen.
  - **Niedriger ICC-Wert**: Geringe Ähnlichkeit der Messungen innerhalb der Gruppen.

## Anwendung

- **Beispiel**: Bewertung der Konsistenz von Bewertungen durch verschiedene Bewerter oder Konsistenz von Messungen durch verschiedene Instrumente.
- **Zweck**: Überprüfung der Reliabilität und Konsistenz der Messungen.

## Wichtige Punkte

- Ein ICC-Wert nahe 1 deutet auf eine hohe Konsistenz innerhalb der Gruppen hin.
- Ein ICC-Wert nahe 0 deutet auf eine geringe Konsistenz innerhalb der Gruppen hin.

Verwende diese Cheatsheet als schnelle Referenz während deiner Klausur, um sicherzustellen, dass du die richtige Formel und die Interpretation der Intraklassenkorrelation parat hast.

---

## Modellbewertung

### Akaike-Informationskriterium (AIC)

- **Definition**: Das AIC bewertet Modelle basierend auf ihrer Güte der Anpassung und der Anzahl der Parameter. Ein niedrigerer AIC-Wert weist auf ein besseres Modell hin, da es sowohl die Anpassungsgüte als auch die Modellkomplexität berücksichtigt.
- **Formel**:

  $$
  AIC = 2k - 2\ln(L)
  $$

  - $k$: Anzahl der Parameter im Modell
  - $L$: Maximale Likelihood des Modells

- **Interpretation**:
  - **Niedrigerer AIC-Wert**: Besseres Modell (unter Berücksichtigung von Anpassungsgüte und Komplexität).

### Deviance Residuals

- **Definition**: Die Abweichungsresiduen messen die Differenz zwischen den beobachteten und den durch das Modell vorhergesagten Werten. Große Abweichungen können auf eine schlechte Modellanpassung hinweisen.
- **Interpretation**:
  - **Große Abweichungen**: Hinweise auf eine schlechte Modellanpassung.
  - **Kleine Abweichungen**: Hinweise auf eine gute Modellanpassung.

### Root Mean Squared Error (RMSE)

- **Definition**: Der RMSE ist die Quadratwurzel des mittleren quadratischen Fehlers und gibt die durchschnittliche Abweichung der vorhergesagten Werte von den tatsächlichen Werten an.
- **Formel**:

  $$
  RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}
  $$

  - $n$: Anzahl der Beobachtungen
  - $y_i$: Beobachtete Werte
  - $\hat{y}_i$: Vorhergesagte Werte

- **Interpretation**:
  - **Niedrigerer RMSE-Wert**: Bessere Modellanpassung.

---

## Homoskedastizität vs. Heteroskedastizität

### Homoskedastizität

- **Definition**: Homoskedastizität liegt vor, wenn die Varianz der Residuen konstant ist. Dies ist eine wichtige Annahme in der linearen Regression.
- **Bedeutung**:
  - Gleichmäßige Verteilung der Fehlerterme.
  - Sicherstellung der Effizienz und Unverzerrtheit der Schätzungen.

### Heteroskedastizität

- **Definition**: Heteroskedastizität bedeutet, dass die Varianz der Residuen variiert. Dies kann zu ineffizienten und verzerrten Schätzungen führen.
- **Erkennung**:

  - **Breusch-Pagan-Test**: Testet auf systematische Veränderungen der Varianz der Residuen.
  - **White-Test**: Ein allgemeiner Test, der keine spezifische Form der Heteroskedastizität voraussetzt.

- **Anpassungen**:
  - **Gewichtete Regression**: Anpassung des Modells durch Gewichtung der Residuen zur Korrektur der Heteroskedastizität.
  - **Robuste Standardfehler**: Verwendung von Standardfehlern, die robust gegenüber Heteroskedastizität sind.

---

## Modellvergleiche

### Multiples lineares Modell vs. gemischtes Modell

- **Multiples lineares Modell**:

  - **Definition**: Berücksichtigt nur feste Effekte.
  - **Verwendung**: Modellierung der Beziehung zwischen einer abhängigen Variable und mehreren unabhängigen Variablen.
  - **Formel**:
    $$
    y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_k x_k + \epsilon
    $$

- **Gemischtes Modell**:
  - **Definition**: Berücksichtigt sowohl feste als auch zufällige Effekte.
  - **Verwendung**: Nützlich, wenn Daten Hierarchien oder Verschachtelungen aufweisen.
  - **Formel**:
    $$
    y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_k x_k + u_0 + u_1 z_1 + \cdots + u_m z_m + \epsilon
    $$
  - $u_0, u_1, \ldots, u_m$: Zufällige Effekte
  - $z_1, \ldots, z_m$: Zufallsvariablen

### ANOVA-Test

- **Definition**: Die Analyse der Varianz (ANOVA) vergleicht die Mittelwerte mehrerer Gruppen und bestimmt, ob mindestens eine Gruppe signifikant unterschiedlich ist.
- **Vorgehen**:
  - Zerlegung der Gesamtvarianz in zwischen- und innerhalb-Gruppen-Varianz.
- **Formel**:
  $$
  F = \frac{\text{Varianz zwischen den Gruppen}}{\text{Varianz innerhalb der Gruppen}}
  $$
- **Interpretation**:
  - Ein hoher F-Wert weist auf signifikante Unterschiede zwischen den Gruppen hin.

---

## Interaktionseffekte

### Interaktionsterms

- **Definition**: Diese Terme modellieren die Interaktion zwischen zwei oder mehr unabhängigen Variablen. Sie zeigen an, dass die Wirkung einer Variable von der Ausprägung einer anderen Variable abhängt.
- **Formel**:
  $$
  y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \beta_3 (x_1 \cdot x_2) + \epsilon
  $$
  - $x_1 \cdot x_2$: Interaktionsterm zwischen $x_1$ und $x_2$
  - $\beta_3$: Koeffizient des Interaktionsterms

### Interaktionseffekt

- **Definition**: Ein signifikanter Interaktionseffekt zeigt, dass die Wirkung einer unabhängigen Variablen auf die abhängige Variable unterschiedlich ist, je nach Wert einer anderen unabhängigen Variable.
- **Interpretation**:
  - **Positiver Interaktionseffekt**: Verstärkt die Wirkung der beteiligten Variablen.
  - **Negativer Interaktionseffekt**: Schwächt die Wirkung der beteiligten Variablen.
  - **Signifikanz**: Ein signifikanter Interaktionseffekt bedeutet, dass die Beziehung zwischen den Variablen nicht additiv ist, sondern die Wirkung einer Variable von der anderen abhängt.

---

## F-Test

### F-Test

- **Definition**: Der F-Test vergleicht die erklärte Varianz des Modells mit der unerklärten Varianz. Er wird verwendet, um die Gesamtanpassung des Modells zu beurteilen.
- **Zweck**: Bestimmen, ob das Modell signifikant besser ist als ein Modell ohne Prädiktoren (d.h., ob mindestens ein Prädiktor das Modell signifikant verbessert).

### Berechnung

- **Formel**:
  $$
  F = \frac{\frac{\text{Erklärte Varianz}}{\text{Anzahl der Prädiktoren}}}{\frac{\text{Unerklärte Varianz}}{\text{Anzahl der Freiheitsgrade}}}
  $$
- **Erklärte Varianz (SSR)**: Summe der Quadrate der Differenzen zwischen den vorhergesagten Werten und dem Mittelwert der beobachteten Werte.
- **Unerklärte Varianz (SSE)**: Summe der Quadrate der Differenzen zwischen den beobachteten Werten und den vorhergesagten Werten.
- **Anzahl der Prädiktoren (p)**: Anzahl der unabhängigen Variablen im Modell.
- **Anzahl der Freiheitsgrade (n - p - 1)**: Anzahl der Beobachtungen minus Anzahl der Prädiktoren minus eins.

### Interpretation

- **Signifikanter F-Test**: Ein signifikanter F-Wert (p-Wert < 0,05) zeigt an, dass das Modell die Daten signifikant besser erklärt als ein Modell ohne Prädiktoren. Dies bedeutet, dass mindestens eine der unabhängigen Variablen das Modell signifikant verbessert.
- **Nicht signifikanter F-Test**: Ein nicht signifikanter F-Wert (p-Wert >= 0,05) bedeutet, dass das Modell die Daten nicht besser erklärt als ein Modell ohne Prädiktoren.

### Anwendung

- **Regressionsanalyse**: Der F-Test wird häufig in der linearen Regression verwendet, um die Gesamtbedeutung des Modells zu testen.
- **ANOVA**: In der Varianzanalyse wird der F-Test verwendet, um zu bestimmen, ob die Mittelwerte von drei oder mehr Gruppen signifikant unterschiedlich sind.

### Beispiel

- **Modell mit einer unabhängigen Variablen**:
  - Gesamtvarianz (SST): Summe der Quadrate der Differenzen zwischen den beobachteten Werten und dem Mittelwert.
  - Erklärte Varianz (SSR): Summe der Quadrate der Differenzen zwischen den vorhergesagten Werten und dem Mittelwert.
  - Unerklärte Varianz (SSE): Summe der Quadrate der Differenzen zwischen den beobachteten Werten und den vorhergesagten Werten.

$$
F = \frac{(SSR / p)}{(SSE / (n - p - 1))}
$$

---

## Determinationskoeffizient

### R² und adjustiertes R²

- **R² (Bestimmtheitsmaß)**:

  - **Definition**: R² gibt den Anteil der Gesamtvarianz der abhängigen Variable an, der durch das Modell erklärt wird.
  - **Formel**:
    $$
    R² = 1 - \frac{SSE}{SST}
    $$
  - $SSE$: Summe der quadratischen Abweichungen der Residuen (unerklärte Varianz)
  - $SST$: Gesamtsumme der Quadrate (Gesamtvarianz)

- **Interpretation**:
  - **R² = 1**: Das Modell erklärt die gesamte Varianz der abhängigen Variable perfekt.
  - **R² = 0**: Das Modell erklärt keine Varianz der abhängigen Variable.
  - **Höheres R²**: Besseres Modell, da es mehr Varianz erklärt.

### Adjustiertes R²

- **Definition**: Das adjustierte R² berücksichtigt die Anzahl der Prädiktoren und gibt eine genauere Bewertung der Modellgüte, insbesondere bei Modellen mit vielen Prädiktoren.
- **Formel**:

  $$
  R^2_{\text{adjusted}} = 1 - \left( \frac{(1 - R²)(n - 1)}{n - p - 1} \right)
  $$

  - $n$: Anzahl der Beobachtungen
  - $p$: Anzahl der Prädiktoren

- **Interpretation**:
  - **Anpassung**: Berücksichtigt die Freiheitsgrade und bestraft übermäßige Verwendung von Prädiktoren.
  - **Besserer Vergleich**: Eignet sich besser zum Vergleich von Modellen mit unterschiedlicher Anzahl von Prädiktoren.

---

## Schätzungen

### ICC-Schätzung

- **Definition**: Die Intraklassenkorrelation (ICC) misst die Ähnlichkeit oder Konsistenz von Messungen innerhalb derselben Gruppe oder Klasse.
- **Methoden**:
  - **Gewichtete ICC-Schätzung**: Berücksichtigt die Varianz der Daten und gewichtet die Schätzungen entsprechend.
  - **Ungewichtete ICC-Schätzung**: Verwendet gleiche Gewichte für alle Messungen, unabhängig von ihrer Varianz.

### Lineares gemischtes Modell

- **Definition**: Dieses Modell kombiniert feste und zufällige Effekte, um die Datenstruktur besser abzubilden und genauere Schätzungen zu liefern.
- **Formel**:

  $$
  y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_k x_k + u_0 + u_1 z_1 + \cdots + u_m z_m + \epsilon
  $$

  - $\beta_0, \beta_1, \ldots, \beta_k$: Feste Effekte
  - $u_0, u_1, \ldots, u_m$: Zufällige Effekte
  - $x_1, x_2, \ldots, x_k$: Feste Prädiktoren
  - $z_1, z_2, \ldots, z_m$: Zufallsvariablen
  - $\epsilon$: Fehlerterm

- **Vorteile**:
  - **Flexibilität**: Kann komplexe Datenstrukturen und Hierarchien modellieren.
  - **Genauigkeit**: Liefert genauere Schätzungen durch Berücksichtigung zufälliger Effekte.

---

## Modellgüte

### Modellgüte I

- **Definition**: Modellgüte bezieht sich auf die Bewertung, wie gut ein statistisches Modell die beobachteten Daten erklärt.
- **Methoden zur Bewertung der Modellgüte**:

  - **Akaike-Informationskriterium (AIC)**:
    - **Definition**: Bewertet Modelle basierend auf ihrer Güte der Anpassung und der Anzahl der Parameter.
    - **Formel**:
      $$
      AIC = 2k - 2\ln(L)
      $$
    - **Interpretation**: Niedrigerer AIC-Wert weist auf ein besseres Modell hin.
  - **Bayessches Informationskriterium (BIC)**:
    - **Definition**: Ähnlich wie das AIC, aber mit einer stärkeren Bestrafung für Modelle mit mehr Parametern.
    - **Formel**:
      $$
      BIC = \ln(n)k - 2\ln(L)
      $$
    - **Interpretation**: Niedrigerer BIC-Wert weist auf ein besseres Modell hin.
  - **Bestimmtheitsmaß (R²)**:
    - **Definition**: Gibt den Anteil der Gesamtvarianz der abhängigen Variable an, der durch das Modell erklärt wird.
    - **Formel**:
      $$
      R² = 1 - \frac{SSE}{SST}
      $$
    - **Interpretation**: Höheres R² weist auf ein besseres Modell hin.
  - **Adjustiertes R²**:
    - **Definition**: Anpassung des R², die die Anzahl der Prädiktoren berücksichtigt.
    - **Formel**:
      $$
      R^2_{\text{adjusted}} = 1 - \left( \frac{(1 - R²)(n - 1)}{n - p - 1} \right)
      $$
    - **Interpretation**: Besserer Vergleich von Modellen mit unterschiedlicher Anzahl von Prädiktoren.
  - **Root Mean Squared Error (RMSE)**:
    - **Definition**: Quadratwurzel des mittleren quadratischen Fehlers, gibt die durchschnittliche Abweichung der vorhergesagten Werte von den tatsächlichen Werten an.
    - **Formel**:
      $$
      RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}
      $$
    - **Interpretation**: Niedrigerer RMSE-Wert weist auf eine bessere Modellanpassung hin.

---

## Kodierung

### Effektkodierung vs. Referenzkodierung

- **Definition**: Diese Kodierungen werden verwendet, um kategoriale Variablen in Modelle einzubeziehen.

### Effektkodierung

- **Definition**: Zeigt die Abweichung jeder Kategorie vom Gesamtmittelwert.
- **Vorgehen**:
  - Wähle eine Referenzkategorie.
  - Kodierung der anderen Kategorien in Bezug auf den Gesamtmittelwert.
- **Beispiel**:

  - Angenommen, es gibt drei Kategorien: A, B, und C.
  - Wenn A die Referenzkategorie ist:
    - A: $(-1, -1)$
    - B: $(1, 0)$
    - C: $(0, 1)$

- **Interpretation**:
  - Die Koeffizienten der kodierten Variablen zeigen die Abweichung jeder Kategorie vom Gesamtmittelwert.

### Referenzkodierung

- **Definition**: Zeigt die Abweichung jeder Kategorie von einer Referenzkategorie.
- **Vorgehen**:
  - Wähle eine Referenzkategorie.
  - Kodierung der anderen Kategorien in Bezug auf die Referenzkategorie.
- **Beispiel**:

  - Angenommen, es gibt drei Kategorien: A, B, und C.
  - Wenn A die Referenzkategorie ist:
    - A: $(0, 0)$
    - B: $(1, 0)$
    - C: $(0, 1)$

- **Interpretation**:
  - Die Koeffizienten der kodierten Variablen zeigen die Abweichung jeder Kategorie von der Referenzkategorie.

---

## Variablenselektion

### Variablenselektion

- **Definition**: Methoden zur Auswahl relevanter Prädiktoren, die Überanpassung vermeiden und die Modellparsimony fördern.

### Methoden der Variablenselektion

- **Schrittweise Regression**:

  - **Definition**: Eine Methode, bei der Prädiktoren schrittweise in das Modell aufgenommen oder daraus entfernt werden, basierend auf bestimmten Kriterien (z.B. p-Wert).
  - **Vorgehen**:
    - **Vorwärtsselektion**: Beginnt mit keinem Prädiktor und fügt schrittweise Prädiktoren hinzu, die das Modell am meisten verbessern.
    - **Rückwärtselimination**: Beginnt mit allen möglichen Prädiktoren und entfernt schrittweise diejenigen, die das Modell am wenigsten verbessern.
    - **Schrittweise Selektion**: Kombination aus Vorwärts- und Rückwärtsselektion.
  - **Vorteil**: Identifiziert relevante Prädiktoren effizient.

- **Lasso-Regression**:

  - **Definition**: Eine Regularisierungsmethode, die sowohl zur Variablenselektion als auch zur Schrumpfung der Koeffizienten verwendet wird.
  - **Formel**:
    $$
    \text{Minimiere} \left( \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 + \lambda \sum_{j=1}^{p} |\beta_j| \right)
    $$
    - $\lambda$: Regularisierungsparameter
    - $\beta_j$: Koeffizienten der Prädiktoren
  - **Vorteil**: Kann irrelevante Prädiktoren auf genau Null setzen, wodurch eine klare Auswahl relevanter Prädiktoren ermöglicht wird.

- **Ridge-Regression**:

  - **Definition**: Eine Regularisierungsmethode, die zur Schrumpfung der Koeffizienten verwendet wird, um Multikollinearität zu reduzieren und Überanpassung zu vermeiden.
  - **Formel**:
    $$
    \text{Minimiere} \left( \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 + \lambda \sum_{j=1}^{p} \beta_j^2 \right)
    $$
    - $\lambda$: Regularisierungsparameter
    - $\beta_j$: Koeffizienten der Prädiktoren
  - **Vorteil**: Stabilisiert die Schätzungen, besonders bei hoher Multikollinearität.

- **Andere Techniken**:
  - **Elastic Net**: Kombination aus Lasso- und Ridge-Regression.
  - **Informationskriterien (AIC, BIC)**: Auswahl der Modelle basierend auf Informationskriterien, die sowohl Anpassungsgüte als auch Modellkomplexität berücksichtigen.

---

## Weitere Tests

### Ceteris Paribus

- **Definition**: Dieser Ansatz analysiert den Effekt einer einzelnen Variablen, während alle anderen Variablen konstant gehalten werden.
- **Zweck**: Verständnis, wie Veränderungen einer Variablen die abhängige Variable beeinflussen.
- **Vorgehen**:
  - **Konstant halten**: Alle anderen unabhängigen Variablen werden konstant gehalten.
  - **Veränderung analysieren**: Die Wirkung der Veränderung der betrachteten Variablen auf die abhängige Variable wird beobachtet.
- **Beispiel**:
  - In einer Studie zur Auswirkung des Einkommens auf den Konsum wird der Effekt des Einkommens untersucht, während Faktoren wie Alter, Geschlecht und Bildungsniveau konstant gehalten werden.
- **Interpretation**:
  - **Direkter Effekt**: Zeigt den direkten Einfluss einer Variablen auf die abhängige Variable.
  - **Einflussanalyse**: Erleichtert die Analyse der kausalen Beziehungen zwischen Variablen.

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
