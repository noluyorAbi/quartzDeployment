# Klausur (Probeklausur 1 Sommersemester 2024)

---

# Inhaltsverzeichnis - PK1

- **Aufgabe 1**

  - (a) Interpretieren Sie den Koeffizienten Wassermenge.
  - (b) Berechnen Sie die erwartete Überlebensdauer auf dem Standort Tisch bei einer Wassermenge von 2000 mL/Tag.
  - (c) Bewerten Sie die Interpretierbarkeit der erwarteten Überlebensdauer auf dem Standort Tisch bei einer Wassermenge von 2000 mL/Tag.
  - (d) Interpretieren Sie den Effekt der Wassermenge auf dem Standort Tisch von Modell 1d.
  - (e) Severin führt nun folgenden R-Code aus.
  - (f) Ein Diagnostik-Plot könnte wie folgt aussehen.
  - (g) Im Vergleich zu Modell 1a ist in Modell 1g nun die Variable Wassermenge_fakt statt Wassermenge verwendet worden. Was wurde inhaltlich getan?
  - (h) Interpretieren Sie die Regressionskoeffizienten zur Variable Wassermenge_fakt in Modell 1g.
  - (i) Wie viele Regressionskoeffizienten hat das Modell 1i?
  - (j) Der Effektplot für Modell 1i sieht wie folgt aus.

- **Aufgabe 2**

  - (a) Die Assoziation zwischen Wachstum und Düngermittelsorte soll mit Hilfe eines linearen Regressionsmodells geschätzt werden.
  - (b) Stellen Sie sich nun vor, dass Sie anstatt der Referenzkodierung eine Effektkodierung wählen.
  - (c) Nehmen Sie an, dass Sie nun das Modell beschrieben in Aufgabe 2b) in R gefittet haben.
  - (d) Es wird angenommen, dass die Fehler $\epsilon_i$ unabhängig und identisch verteilt sind.
  - (e) Beschreiben Sie kurz, wann eine gewichtete KQ-Schätzung einer ungewichteten KQ-Schätzung vorzuziehen wäre.
  - (f) Erläutern Sie, anhand einer der oben aufgeführten Modelle, wie eine Transformation des Modells in einer gewichteten KQ-Schätzung aussehen würde.

- **Aufgabe 3**

  - (a) Worauf beziehen sich die Laufindizes $i$ und $t$?
  - (b) Welche Variablen sind zeitabhängig? Welche sind zeitkonstant?
  - (c) Sie sehen eine Visualisierung des $gpa$ einer Auswahl von SchülerInnen in Abhängigkeit des Zeitpunkts.
  - (d) Nehmen Sie an, Sie würden für die in der Angabe genannte Fragestellung ein lineares Regressionsmodell benutzen.
  - (e) Welche Annahme des linearen Regressionsmodells wird durch die longitudinale Struktur des Datensatzes verletzt?
  - (f) Nennen Sie zwei Ansätze, mit Mehrfachmessungen dieser Art umzugehen, sodass die oben genannte Annahme nicht verletzt wird.
  - (g) Es soll nun ein lineares gemischtes Modell mit zufälligem Intercept geschätzt werden.
  - (h) Stellen Sie nun die Modellgleichung des linearen gemischten Modells auf und nennen Sie die Annahmen des Modells.
  - (i) Das eben definierte gemischte lineare Modell wurde nun geschätzt. Berechnen und interpretieren Sie den Interclass Correlation Coefficient (ICC).
  - (j) Betrachten Sie nun folgendes Streudiagramm von Fitted Values (x-Achse) vs. Residuals (y-Achse).

- **Aufgabe 4**
  - (a) Interpretieren Sie für folgendes Modell (Modell 4a) die geschätzten Koeffizienten von dem Impfstatus.
  - (b) Berechnen Sie für die den Koeffizienten von Alt75-79 das Konfidenzintervall zum Niveau $\alpha = 0.05$.
  - (c) Für den Koeffizienten des Impfstatus (impfstungeimpft) ist der Wert 0 nicht im 95%-Konfidenzintervall enthalten.
  - (d) Geben Sie für Modell 4a die Struktur- und Verteilungsannahme an.
  - (e) Nun wird ein weiteres Modell (Modell 4e) geschätzt.
  - (f) Welche zusätzliche Fragestellung wird in Modell 4e, im Vergleich zu Modell 4a, bearbeitet?
  - (g) Vergleichen Sie die Ergebnisse von Modell 4a und Modell 4e inhaltlich im Hinblick auf Alters- und Impfstatus-Effekte.
  - (h) Die zugehörige ANOVA zu Modell 4e ist.
  - (i) Welches Modell ist zu bevorzugen? Begründen Sie kurz.

---

# Aufgabe 1

> [!note] Aufgabenstellung
> Statistikstudent Severin sterben ständig seine Basilikumpflanzen. Seit Jahren schaut er, wie lange es dauert bis seine Pflanze stirbt und verändert dabei die Variablen Wassermenge und Standort.
>
> | Variable        | Ausprägungen          |
> | --------------- | --------------------- |
> | Wassermenge     | 50, 100, 150 [mL/Tag] |
> | Standort        | Fensterbank, Tisch    |
> | Ueberlebenszeit | 7 - 45 [Tage]         |
>
> Er rechnet nun folgendes **Modell 1a** in R, um die idealen Bedingungen für ein möglichst langes Überleben des Basilikums zu finden.
>
> _Modell 1a_
> ![[Pasted image 20240730221050.png]]

## (a) Interpretieren Sie den Koeffizienten **Wassermenge**.

- Der Koeffizient für Wassermenge beträgt 0.10000
- Für jeden zusätzlichen $\frac{\text{ml}}{\text{Tag}}$ Wasser, die der Basilikumspflanze gegeben wird, steigt die erwartete Überlebenszeit der Pflanze um 0.10000 Tage

## (b) Berechnen Sie die erwartete Überlebensdauer auf dem Standort **Tisch** bei einer Wassermenge von 2000 mL/Tag.

$$
\begin{aligned}
\text{Überlebenszeit} &= \beta_0 + \beta_1 \cdot \text{StandortTisch}+\beta_2\cdot\text{Wassermenge} \\
&= 17 -10 \cdot 1 + 0.1 \cdot 2000\\
&= 207
\end{aligned}
$$

→ Überlebensdauer der Pflanze auf dem Standort Tisch beträgt 207 Tage

## (c) Bewerten Sie die Interpretierbarkeit der erwarteten Überlebensdauer auf dem Standort **Tisch** bei einer Wassermenge von 2000 mL/Tag.

Die erwartete Überlebensdauer von 207 Tagen bei einer Wassermenge von 2000 mL/Tag ist schwer zu interpretieren. Diese Menge liegt weit außerhalb des beobachteten Bereichs (50-150 mL/Tag), und die Überlebenszeit in den Daten beträgt nur 7-45 Tage. Eine so hohe Wassermenge könnte zu Überwässerung führen, was das lineare Modell nicht berücksichtigt. Daher ist die Schätzung unzuverlässig und biologisch nicht plausibel. Das Modell liefert nur innerhalb der beobachteten Datenbereich und somit Überlebenszeiten verlässliche Vorhersagen.

> [!note] Aufgabenstellung
> Im nächsten Schritt möchte Severin herausfinden, ob es eine Interaktion zwischen der Wassermenge und dem Standort gibt und rechnet dazu **Modell 1d**.
>
> _Modell 1d_
>
> ![[Pasted image 20240730221138.png]]

## (d) Interpretieren Sie den Effekt der **Wassermenge** auf dem Standort **Tisch** von **Modell 1d**.

- $\beta_0$ (Intercept): 17.00000
- $\beta_1$ (StandortTisch): -10.00000
- $\beta_2$ (Wassermenge): 0.10000
- $\beta_3$ (StandortTisch:Wassermenge): -0.01000

Der Effekt der Wassermenge auf dem Standort Tisch wird durch die Summe der Koeffizienten $\beta_2$ und $\beta_3$ dargestellt:

$$ \text{Effekt der Wassermenge} = \beta_2 + \beta_3 $$

Setzen wir die Werte ein:

$$
\text{Effekt der Wassermenge} = 0.10000 + (-0.01000)
$$

$$
\text{Effekt der Wassermenge} = 0.09000
$$

Das bedeutet, dass für jede zusätzliche Einheit der Wassermenge (1 mL/Tag) die Überlebenszeit der Basilikumpflanzen am Standort Tisch um 0.09 Tage zunimmt.

Dieser Effekt ist jedoch etwas geringer als am anderen Standort, wo der Effekt 0.1 Tage pro zusätzlichem mL/Tag beträgt. Das negative Vorzeichen des Interaktionsterms ($\beta_3 = -0.01000$) deutet darauf hin, dass der positive Effekt der Wassermenge auf die Überlebenszeit am Standort Tisch schwächer ist als an anderen Standorten.

## (e) Severin führt nun folgenden R-Code aus.

```r
> anova(modell1.1a, modell1.1d)
Analysis of Variance Table

Model 1: Ueberlebenszeit ~ Standort + Wassermenge
Model 2: Ueberlebenszeit ~ Standort * Wassermenge
  Res.Df    RSS Df Sum of Sq      F Pr(>F)
1    117 7021.5
2    116 7021.4  1  0.054493 9e-04 0.9761
```

### i) Geben Sie die zugehörige Nullhypothese an.

→ ANOVA-Test erstes Argument ist $H_0$ in diesem Fall `modell1.1a`, was unten `Model 1: Ueberlebenszeit ~ Standort + Wassermenge`

**H0: Es gibt keine Interaktion zwischen der Wassermenge und dem Standort auf die Überlebenszeit der Basilikumpflanzen.**

Das bedeutet, dass die zusätzliche Komplexität des Modells, das die Interaktion zwischen Wassermenge und Standort berücksichtigt, die Modellanpassung nicht signifikant verbessert im Vergleich zu einem Modell ohne diese Interaktion.

### ii) Kann die Nullhypothese zum Signifikanzniveau von 5% abgelehnt werden? Begründen Sie kurz.

Nein, die Nullhypothese kann zum Signifikanzniveau von 5% nicht abgelehnt werden.

Begründung: Der p-Wert für den ANOVA-Test beträgt 0.9761, was deutlich größer als das Signifikanzniveau von 0.05 ist. Ein p-Wert größer als 0.05 bedeutet, dass es keine ausreichenden Beweise gibt, um die Nullhypothese abzulehnen. Somit gibt es keinen signifikanten Unterschied zwischen dem Modell mit und dem Modell ohne die Interaktion zwischen Wassermenge und Standort.

### iii) Welche Schlussfolgerung ziehen Sie daraus?

Die Schlussfolgerung daraus ist, dass die Interaktion zwischen der Wassermenge und dem Standort keinen signifikanten Einfluss auf die Überlebenszeit der Basilikumpflanzen hat. Das Modell ohne Interaktion (Modell 1.1a) erklärt die Überlebenszeit genauso gut wie das Modell mit Interaktion (Modell 1.1d). Daher kann die zusätzliche Komplexität durch die Interaktion nicht gerechtfertigt werden, und wir sollten das einfachere Modell ohne Interaktion bevorzugen.

## (f) Ein Diagnostik-Plot könnte wie folgt aussehen.

![[Pasted image 20240730221213.png]]

### i) Geben Sie an, welche Modellannahme verletzt sein könnte und nennen Sie **KURZ** die Begründung, warum Sie dies vermuten.

Die Modellannahme, die verletzt sein könnte, ist die Annahme der **Homoskedastizität** (konstante Varianz der Residuen).

- Varianz der Residuen (= Abweichung vom vorhergesagten Wert) ist nicht konstant und weicht sehr stark ab, zum Beispiel bei 50 schwant es von -10 bis nahezu +3
  - Dies verletzt die Homoskedaszität

**Begründung:** Im Diagnostik-Plot zeigt sich, dass die Streuung der Residuen für verschiedene Wassermengen unterschiedlich ist. Insbesondere bei 100 mL/Tag scheinen die Residuen eine größere Streuung zu haben als bei 50 mL/Tag oder 150 mL/Tag. Dies deutet darauf hin, dass die Varianz der Fehlerterme nicht konstant ist, was eine Verletzung der Homoskedastizitätsannahme bedeutet.

### ii) Geben Sie eine Lösungsmöglichkeit an.

Eine Lösungsmöglichkeit besteht darin, das Modell anzupassen, um die Annahmeverletzungen zu korrigieren:

1. **Homoskedastizität:** Verwenden Sie robuste Standardfehler oder transformieren Sie die abhängige Variable (z.B. log-Transformation).
2. **Linearität:** Fügen Sie nichtlineare Terme (z.B. quadratische Terme) hinzu.
3. **Normalverteilung der Residuen:** Transformieren Sie die abhängige Variable oder verwenden Sie robuste Regressionstechniken.

### Beispiel für log-Transformation:

```r
modell1.1a_log <- lm(log(Ueberlebenszeit) ~ Standort + Wassermenge, data = dat_basil)
summary(modell1.1a_log)
```

> [!note] Aufgabenstellung
> _Modell 1g_
>
> ![[Pasted image 20240730221244.png]]

## (g) Im Vergleich zu **Modell 1a** ist in **Modell 1g** nun die Variable **Wassermenge_fakt** statt **Wassermenge** verwendet worden. Was wurde inhaltlich getan? Hinweis: Severin hat nur die Wassermenge 50, 100 und 150 mL/Tag ausprobiert.

In Modell 1g wurde die kontinuierliche Variable "Wassermenge" durch die faktorielle Variable "Wassermenge_fakt" ersetzt. Dies bedeutet, dass die Wassermengen von 50, 100 und 150 mL/Tag als separate Kategorien (Faktoren) behandelt wurden, anstatt als kontinuierliche Werte.

### Inhaltliche Veränderung

- **Wassermenge_fakt100:** Repräsentiert den Effekt der Wassermenge von 100 mL/Tag im Vergleich zur Referenzkategorie (50 mL/Tag).
- **Wassermenge_fakt150:** Repräsentiert den Effekt der Wassermenge von 150 mL/Tag im Vergleich zur Referenzkategorie (50 mL/Tag).

### Ergebnis

- Die Koeffizienten zeigen, dass im Vergleich zu 50 mL/Tag:
  - 100 mL/Tag die Überlebenszeit um 20 Tage erhöht.
  - 150 mL/Tag die Überlebenszeit um 10 Tage weiter erhöht (also insgesamt um 30 Tage im Vergleich zu 50 mL/Tag).

Dies deutet darauf hin, dass höhere Wassermengen signifikant die Überlebenszeit der Basilikumpflanzen verlängern.

```
Überlebenszeit = 17.0000 + (-10.0000 * StandortTisch)
							+ (20.0000 * Wassermenge_fakt100)
							+ (10.0000 * Wassermenge_fakt150)
```

## (h) Interpretieren Sie die Regressionskoeffizienten zur Variable **Wassermenge_fakt** in **Modell 1g**.

1. **Wassermenge_fakt100 (20.0000)**:

   - Pflanzen, die 100 mL/Tag Wasser bekommen, leben im Durchschnitt 20 Tage länger als Pflanzen, die 50 mL/Tag Wasser bekommen.

2. **Wassermenge_fakt150 (10.0000)**:
   - Pflanzen, die 150 mL/Tag Wasser bekommen, leben im Durchschnitt 10 Tage länger als Pflanzen, die 50 mL/Tag Wasser bekommen.

Zusammengefasst zeigt eine Erhöhung der Wassermenge auf 100 mL/Tag eine größere Verlängerung der Überlebenszeit (20 Tage) im Vergleich zu einer Erhöhung auf 150 mL/Tag (10 Tage).

> [!note] Aufgabenstellung
> Im letzten Schritt rechnet Severin noch ein Modell **Modell 1i**.
> _Modell 1i_
>
> ```r
> modell1.1i <- lm(Ueberlebenszeit ~ Standort * Wassermenge_fakt, data = dat_basil)
> summary(modell1.1i)
> ```

### (i) Wie viele Regressionskoeffizienten hat das **Modell 1i**?

Modell 1i berücksichtigt die Interaktion zwischen dem Standort und der faktorisierten Wassermenge. Um die Anzahl der Regressionskoeffizienten in Modell 1i zu bestimmen, schauen wir uns die Komponenten des Modells an:

Das Modell lautet:

$$ \text{Überlebenszeit} \sim \text{Standort} \* \text{Wassermenge_fakt} $$

Das bedeutet, dass wir folgende Terme haben:

1. **Intercept** (Basislevel für Standort und Wassermenge)
2. **Standort** (Ein Effekt: Tisch, da Fensterbank die Referenz ist)
3. **Wassermenge_fakt** (Zwei Effekte: 100 mL/Tag und 150 mL/Tag, da 50 mL/Tag die Referenz ist)
4. **Interaktionsterms** (Standort:Tisch _ Wassermenge_fakt:100, Standort:Tisch _ Wassermenge_fakt:150)

### Anzahl der Regressionskoeffizienten

Zusammengefasst haben wir:

1. **Intercept**: 1 Koeffizient
2. **Standort (Tisch)**: 1 Koeffizient
3. **Wassermenge_fakt (100 mL/Tag, 150 mL/Tag)**: 2 Koeffizienten
4. **Interaktionsterms (Standort:Tisch _ Wassermenge_fakt:100, Standort:Tisch _ Wassermenge_fakt:150)**: 2 Koeffizienten

```plaintext
Überlebenszeit = β0 + β1 (Tisch) + β2 (100 mL/Tag) + β3 (150 mL/Tag)
					+ β4 (Tisch * 100 mL/Tag) + β5 (Tisch * 150 mL/Tag)
```

Also insgesamt:

$$ 1 + 1 + 2 + 2 = 6 $$

### Antwort

Modell 1i hat insgesamt 6 Regressionskoeffizienten.

> [!tip] Erklärung Interaktionsterms
>
> ### Interaktionsterms
>
> Ein Interaktionsterm im Regressionsmodell zeigt, wie zwei Variablen zusammen die Zielvariable beeinflussen. In deinem Modell berücksichtigt der Interaktionsterm, wie der Standort (Tisch oder Fensterbank) und die Wassermenge (50 mL/Tag, 100 mL/Tag, 150 mL/Tag) zusammen die Überlebenszeit beeinflussen.
>
> ### Beispiel:
>
> - **Ohne Interaktion:** Der Effekt des Standorts und der Wassermenge werden getrennt betrachtet.
> - **Mit Interaktion:** Der Effekt des Standorts kann je nach Wassermenge unterschiedlich sein und umgekehrt.
>
> ### Modell:
>
> $$
> \text{Überlebenszeit} = \beta_0 + \beta_1 \text{(Tisch)} + \beta_2 \text{(100 mL/Tag)} + \beta_3 \text{(150 mL/Tag)} + \beta_4 \text{(Tisch * 100 mL/Tag)} + \beta_5 \text{(Tisch * 150 mL/Tag)}
> $$
>
> <br></br>
>
> ```plaintext
> Überlebenszeit = β0 + β1 (Tisch) + β2 (100 mL/Tag) + β3 (150 mL/Tag)
> 					+ β4 (Tisch * 100 mL/Tag) + β5 (Tisch * 150 mL/Tag)
> ```
>
> Die Interaktionsterms $\beta_4$ und $\beta_5$ zeigen die zusätzliche Wirkung, wenn beide Faktoren kombiniert werden.

## (j) Der Effektplot für **Modell 1i** sieht wie folgt aus:

![[Pasted image 20240730221353.png]]

Begründen Sie anhand der Grafik, ob es Indizien für einen Interaktionseffekt gibt und begründen Sie kurz.

> Ein Interaktionseffekt tritt auf, wenn die Wirkung einer unabhängigen Variable auf die abhängige Variable von der Ausprägung einer anderen unabhängigen Variable abhängt. Mit anderen Worten, die gleichzeitige Wirkung zweier Variablen auf das Ergebnis unterscheidet sich von der Summe ihrer individuellen Wirkungen.
>
> Ein Interaktionseffekt bedeutet, dass die Wirkung einer Sache auf ein Ergebnis davon abhängt, was mit einer anderen Sache passiert. Zum Beispiel, wie gut ein Medikament wirkt, könnte davon abhängen, wie viel Sport jemand treibt.

Die Grafik zeigt die Überlebenszeit in Tagen in Abhängigkeit von der Wassermenge (in mL/Tag) für zwei verschiedene Standorte: Fensterbank und Tisch.

Es gibt Indizien für einen Interaktionseffekt zwischen der Wassermenge und dem Standort, da die Linien für die beiden Standorte nicht parallel verlaufen. Dies deutet darauf hin, dass die Wirkung der Wassermenge auf die Überlebenszeit vom Standort abhängt. Konkret:

- Bei niedriger Wassermenge (50 mL/Tag) ist die Überlebenszeit auf der Fensterbank deutlich höher als auf dem Tisch.
- Bei mittlerer Wassermenge (100 mL/Tag) ist der Unterschied in der Überlebenszeit zwischen den beiden Standorten geringer.
- Bei hoher Wassermenge (150 mL/Tag) ist die Überlebenszeit auf der Fensterbank immer noch höher als auf dem Tisch, aber der Unterschied ist wieder deutlicher.

Diese Variation in den Unterschieden bei den Überlebenszeiten über die verschiedenen Wassermengen hinweg deutet auf einen Interaktionseffekt hin.

### (Bsp ohne Interaktionseffekt)

![[Pasted image 20240731003311.png]]

---

# Aufgabe 2

> [!note] Aufgabenstellung
> Nehmen Sie an, dass Sie die Assoziation zwischen drei Düngersorten und dem Wachstum (in cm) einer Staudenpflanzensorte zwischen der ersten und vierten Woche nach Keimung analysieren möchten.
>
> Wir beobachten insgesamt 300 Samen in unserer Studie. 75 Samen werden mit dem ersten Dünger gedüngt (Treatment 1), 75 Samen werden mit dem zweiten Dünger gedüngt (Treatment 2), 75 Samen werden mit dem dritten Dünger gedüngt (Treatment 3) und 75 Samen werden als Kontrolle ohne Behandlung beobachtet.

## (a) Die Assoziation zwischen Wachstum und Düngermittelsorte soll mit Hilfe eines linearen Regressionsmodells geschätzt werden. Wir nehmen an, dass die Düngermittelsorte mit einer Referenzkodierung in das Modell aufgenommen wird. Schreiben Sie die Modellgleichung aus. Sie dürfen in diesem Fall die Verteilungsannahmen auslassen. Definieren Sie die Ausprägungen der Kovariablen.

Um die Assoziation zwischen Wachstum und Düngemittelsorte mit einem linearen Regressionsmodell zu schätzen, verwenden wir die Referenzkodierung. Die Kontrollgruppe (ohne Dünger) dient als Referenz.

### Modellgleichung:

$$
\text{Wachstum}_i = \beta_0 + \beta_1 \text{Treatment1}_i + \beta_2 \text{Treatment2}_i + \beta_3 \text{Treatment3}_i + \epsilon_i
$$

```plaintext
Wachstum_i = β_0 + β_1 * Treatment1_i + β_2 * Treatment2_i
				+ β_3 * Treatment3_i + ε_i
```

### Kovariablen:

- $\text{Wachstum}_i$: Wachstum in cm
- $\text{Treatment1}_i$: 1, wenn Dünger 1, sonst 0
- $\text{Treatment2}_i$: 1, wenn Dünger 2, sonst 0
- $\text{Treatment3}_i$: 1, wenn Dünger 3, sonst 0

Die Kontrollgruppe (ohne Dünger) ist durch den Achsenabschnitt $\beta_0$ repräsentiert.

Das $_i$ in der Modellgleichung steht für die Beobachtungsnummer oder den einzelnen Samen in der Studie. Es zeigt an, dass jede Variable für jede einzelne Beobachtung (jedes $i$) gemessen wird. Es bedeutet also:

- $Wachstum_i$: Das Wachstum des $i$-ten Samens.
- $\epsilon_i$: Der Fehlerterm für den $i$-ten Samen.

Diese Notation wird verwendet, um klarzustellen, dass das Modell auf jede einzelne Beobachtung angewendet wird.

## (b) Stellen Sie sich nun vor, dass Sie anstatt der Referenzkodierung eine Effektkodierung wählen. Skizzieren Sie hierfür eine dementsprechende Designmatrix. Geben Sie an welche Zeilen und welche Spalten welchem Dünger entsprechen. (Hinweis: Sie müssen NICHT 300 Zeilen ausschreiben. Kürzen Sie die Skizze Ihrer Designmatrix so viel wie möglich.)

![[Pasted image 20240731004616.png]]

## (c) Nehmen Sie an, dass Sie nun das Modell beschrieben in Aufgabe 2b) in R gefittet haben und dass Sie nun den folgenden Output bekommen.

_Modell 2c_

```r
Call:
lm(formula = y ~ Treatment, data = Xdata, contrasts
= list(Treatment = "contr.sum"))

Coefficients:
            (Intercept) Treatment1 Treatment2 Treatment3
               5.7524     0.2886     3.1414    -2.7460
```

Hier beschreibt XData den oben beschriebenen Datensatz. “y” ist hier die Responsevariable, die für das Wachstum steht, und die Treatmentvariable steht für die jeweilige Behandlung der Pflanzen.

### i) Nutzen Sie den Output des Modells 2c, um für alle drei Düngersorten jeweils das durchschnittliche Wachstum der Pflanzen per Hand zu berechnen.

- **Intercept (Gesamtmittelwert):** $5.7524$
- **Treatment 1:** $0.2886$
- **Treatment 2:** $3.1414$
- **Treatment 3:** $-2.7460$

### Berechnungen:

1. **Durchschnittliches Wachstum für Treatment 1:**
   $$ 5.7524 + 0.2886 = 6.0410 $$

2. **Durchschnittliches Wachstum für Treatment 2:**
   $$ 5.7524 + 3.1414 = 8.8938 $$

3. **Durchschnittliches Wachstum für Treatment 3:**
   $$ 5.7524 - 2.7460 = 3.0064 $$

### Ergebnisse:

- Treatment 1: $6.0410$ cm
- Treatment 2: $8.8938$ cm
- Treatment 3: $3.0064$ cm

### ii) Nehmen Sie an, dass Sie mit Hilfe eines F-Tests testen möchten, ob mindestens einer der Düngervarianten einen signifikanten Wachstumsunterschied zur Kontrollgruppe aufweist. Stellen Sie dafür die passenden Hypothesen und Test-Statistik auf. (Sie müssen den Test hier nicht durchführen.)

#### Hypothesen für den F-Test

- **Nullhypothese ($H_0$):** Alle Düngervarianten haben keinen signifikanten Effekt auf das Wachstum im Vergleich zur Kontrollgruppe.
  $$ H_0: \beta_1 = \beta_2 = \beta_3 = 0 $$

- **Alternativhypothese ($H_A$):** Mindestens eine Düngervariante hat einen signifikanten Effekt auf das Wachstum im Vergleich zur Kontrollgruppe.
  $$ H_A: \text{Mindestens eine} \ \beta_i \ (\beta_1, \beta_2, \beta_3) \ \text{ist nicht null} $$

### Test-Statistik

Die Test-Statistik für den F-Test ist wie folgt definiert:

$$
F = \frac{\text{Regressions-Sum of Squares (RSS) / Anzahl der Regressoren}}{\text{Residual Sum of Squares (RSS) / (Gesamtanzahl der Beobachtungen - Anzahl der Regressoren - 1)}}
$$

```plaintext
              (Regressions-Sum of Squares (RSS) / Anzahl der Regressoren)
F = -----------------------------------------------------------------------
      (Residual Sum of Squares (RSS) / (Gesamtanzahl der Beobachtungen - Anzahl
									      der Regressoren - 1))

```

Dabei:

- **Regressions-Sum of Squares (RSS):** Summe der Quadrate der Differenzen zwischen den vorhergesagten Werten und dem Gesamtmittelwert.
- **Residual Sum of Squares (RSS):** Summe der Quadrate der Residuen, also der Differenzen zwischen den beobachteten Werten und den vorhergesagten Werten.

### Berechnung der F-Statistik

1. **Regressions-Sum of Squares (RSS):**
   $$ RSS = \sum (\hat{y}\_i - \bar{y})^2 $$

2. **Residual Sum of Squares (RSS):**
   $$ RSS = \sum (y_i - \hat{y}\_i)^2 $$

3. **F-Statistik:**
   $$ F = \frac{\frac{RSS*{\text{Reg}}}{k}}{\frac{RSS*{\text{Res}}}{n - k - 1}} $$

   - $k$ : Anzahl der Regressoren (hier 3: $\beta_1$, $\beta_2$, $\beta_3$)
   - $n$: Gesamtanzahl der Beobachtungen

Der F-Test vergleicht die Varianz, die durch das Modell erklärt wird, mit der Varianz, die durch die Residuen erklärt wird. Wenn der berechnete F-Wert größer als der kritische F-Wert aus der F-Verteilung ist, lehnen wir die Nullhypothese ab und schließen, dass mindestens eine Düngervariante einen signifikanten Effekt auf das Wachstum hat.

### iii) Im folgenden sehen Sie, dass eine ANOVA in R genutzt wurde, um einen F-Test durchzuführen. Hier fehlen jedoch noch vier Felder; hier mit “a?”, “b?”, “c?” und “d?” gekennzeichnet. Vervollständigen Sie den Output. (Hinweis: Geben Sie bei Ihrer Antwort klar an, welches Feld Sie jeweils vervollständigen.)

```r
Analysis of Variance Table

Response: y
             Df Sum Sq Mean Sq F value    Pr(>F)
Treatment     a?  b?     d?    726.75   < 2.2e-16 ***
Residuals   296  c?    0.62
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
```

$$
F=\frac{\text{MeanSq}_T}{}
$$

- a:
  - `Df` = Anzahl der Freiheitsgrade → Anzahl der Treatments - 1 = 4
    - a = 4
- b
  - $\text{SumSq}_{Residuals}$ = $\text{MeanSq}_{Residuals} \cdot \text{Df}_{Residuals}$
  - $\text{SumSq}_{Residuals}$ = 0.62 $\cdot$ 296
    - b = 183.52
- c
  - $\text{MeanSq}_{Treatment}$ = $\text{F} \cdot \text{MeanSq}_{Residuals}$
  - $\text{MeanSq}_{Treatment}$ = $726.75 \cdot 0.62$
    - c = 450.585
- d
  - $\text{SumSq}_{Treatment}$ = $\text{MeanSq}_{Treatment} \cdot \text{Df}_{Treatment}$
  - $\text{SumSq}_{Treatment}$ = $450.585 \cdot 3$
    - d = 1351.755

### iv) Nutzen Sie Ihre Antwort aus der vorherigen Frage, um das adjustierte $R^2$ für das Modell auszurechnen. Als Ersatzlösung dürfen Sie stattdessen auch 1500 als Streuung des Models annehmen und 200 als Residualstreuung.

### v) Diskutieren Sie kurz, ob in dieser Aufgabe ein $R^2$ oder ein adjustiertes $R^2$ als Bestimmtheitsmaß zu bevorzugen wäre. (Hinweis: Wir suchen nach jeweils einem Argument für beide Bestimmtheitsmaße.)

**1. Argument für$R^2$:**

- **Einfachheit und Verständlichkeit:** $R^2$ ist einfach zu berechnen und zu interpretieren. Es gibt den Anteil der Variation der abhängigen Variablen an, der durch das Regressionsmodell erklärt wird. Wenn es darum geht, den allgemeinen Erklärungsgrad des Modells in einem ersten Schritt zu vermitteln, bietet $R^2$ eine klare und verständliche Metrik.

**2. Argument für den adjustierten$R^2$:**

- **Berücksichtigung der Modellkomplexität:** Der adjustierte$R^2$ passt$R^2$ an die Anzahl der Prädiktoren im Modell an. Er bestraft die Hinzufügung zusätzlicher Prädiktoren, die das Modell möglicherweise nicht signifikant verbessern, und verhindert somit eine Überbewertung der Modellgüte bei der Einführung unnötiger Variablen. Dies ist besonders wichtig, wenn man mehrere Modelle vergleicht oder eine Modellevaluation vornimmt, um Überanpassung zu vermeiden.

In der Praxis wäre der adjustierte$R^2$ oft zu bevorzugen, insbesondere wenn das Modell viele Prädiktoren enthält oder wenn man Modelle vergleichen möchte, da er eine realistischere Einschätzung der Modellgüte bietet.

## (d) Es wird angenommen, dass die Fehler $\epsilon_i$ unabhängig und identisch verteilt sind. Welche asymptotischen Eigenschaften besitzt die KQ-Schätzung? Wann werden diese benötigt?

Die KQ-Schätzung (Kleinste-Quadrate-Schätzung) hat unter der Annahme, dass die Fehler $E_i$ unabhängig und identisch verteilt sind, folgende asymptotische Eigenschaften:

1. **Konsistenz:** Die Schätzung konvergiert mit wachsendem Stichprobenumfang gegen den wahren Parameterwert.
2. **Asymptotische Normalität:** Die Verteilung der Schätzfehler wird normalverteilt, wenn die Stichprobe groß genug ist.
3. **asymptotische Unverzerrheit:** KQ-Schätzer sind im Durchschnitt gleich den wahren Parametern bei großen Stichproben

Benötigt bei:

- Großen Stichproben
- Hypothesentests
- Erstellung von Konfidenzintervallen

## (e) Beschreiben Sie kurz, wann eine gewichtete KQ-Schätzung einer ungewichteten KQ-Schätzung vorzuziehen wäre.

### Ungewichtete KQ-Schätzung

- **Was sie macht:** Die ungewichtete KQ-Schätzung (Kleinste-Quadrate-Schätzung) minimiert die Summe der quadrierten Residuen (Differenzen zwischen beobachteten und geschätzten Werten). Sie geht davon aus, dass alle Fehlerterme die gleiche Varianz und keine systematischen Unterschiede aufweisen.
- **Wofür sie da ist:** Verwendet, wenn alle Beobachtungen als gleich zuverlässig angenommen werden; Standardmethode bei homoskedastischen Fehlern.

### Gewichtete KQ-Schätzung

- **Was sie macht:** Die gewichtete KQ-Schätzung berücksichtigt unterschiedliche Varianzen der Fehlerterme, indem sie den Beobachtungen unterschiedliche Gewichte zuweist. Die Schätzung minimiert die gewichtete Summe der quadrierten Residuen, wobei präzisere Beobachtungen (mit geringeren Fehlern) mehr Gewicht erhalten.
- **Wofür sie da ist:** Verwendet bei Heteroskedastizität oder unterschiedlichen Präzisionen der Beobachtungen, um genauere Schätzungen zu erhalten.

### Lösung

Eine gewichtete KQ-Schätzung ist der ungewichteten KQ-Schätzung vorzuziehen, wenn:

1. **Heteroskedastizität vorhanden ist:** Wenn die Varianz der Fehlerterme $E_i$ nicht konstant ist (Heteroskedastizität), kann eine gewichtete KQ-Schätzung verwendet werden, um diese Unterschiede in den Varianzen zu berücksichtigen und Verzerrungen zu vermeiden.

2. **Unterschiedliche Präzision der Beobachtungen:** Wenn verschiedene Beobachtungen unterschiedliche Präzisionen oder Zuverlässigkeiten haben, z.B. wenn einige Datenpunkte genauer sind als andere, können Gewichtungen verwendet werden, um den präziseren Beobachtungen mehr Gewicht zu geben, was zu genaueren Schätzungen führt.

In diesen Fällen verbessert die gewichtete KQ-Schätzung die Schätzung, indem sie Unterschiede in Varianz oder Präzision der Beobachtungen berücksichtigt.

## (f) Erläutern Sie, anhand einer der oben aufgeführten Modelle, oder einer generellen Form des Multiplen Normalen Linearen Modells, wie eine Transformation des Modells in einer gewichteten KQ-Schätzung aussehen würde.

### Gewichtete KQ-Schätzung

- **Originalmodell:** $y_i = \beta_0 + \beta_1 x_{i1} + \beta_2 x_{i2} + \cdots + \beta_p x_{ip} + E_i$
- **Transformation:** Um Gewichtungen zu berücksichtigen:
  - **Gewichtete abhängige Variable:** $y_i^* = \frac{y_i}{\sqrt{w_i}}$
  - **Gewichtete unabhängige Variablen:** $x_{ij}^* = \frac{x_{ij}}{\sqrt{w_i}}$
  - **Gewichteter Fehlerterm:** $E_i^* = \frac{E_i}{\sqrt{w_i}}$

**Warum:** Diese Transformation wird verwendet, um die Effekte unterschiedlicher Fehlerterme durch Gewichtungen zu berücksichtigen und Heteroskedastizität zu korrigieren.

---

# Aufgabe 3

> [!note] Aufgabenstellung
> Der Datensatz _college_ enthält Informationen zu College-Noten von 200 SchülerInnen, bei denen zu 6 Zeitpunkten ($occasion_{it}$; $occasion_{it} = t$, wobei $t \in \{0, 1, 2, 3, 4, 5\}$) der Notendurchschnitt ($gpa$; $gpa_{it} \in \{1.7, 1.8, 1.9, \ldots, 3.9, 4.0\}$) sowie wöchentliche Arbeitszeiten in einem Nebenjob ($job$; $job_{it} \in \{no job, 1 hour, 2 hours, 3 hours, 4 or more hours\}$) erhoben wurden. Der Datensatz enthält zudem das Geschlecht des Schülers bzw. der Schülerin ($sex$; $sex_i \in \{male, female\}$) sowie die ID-Variable $student$ ($student_i = i$).
>
> Die Verteilung der Variable $job$ ist wie folgt:
>
> | no job | 1 hour | 2 hours | 3 hours | 4 or more hours |
> | ------ | ------ | ------- | ------- | --------------- |
> | 0      | 52     | 967     | 181     | 0               |
>
> Im Folgenden interessieren wir uns dafür, den $gpa$ in Abhängigkeit von $occasion$, $job$ und $sex$ zu modellieren.

## (a) Worauf beziehen sich die Laufindizes $i$ und $t$?

- **$i$:** Der Index $i$ steht für die individuelle SchülerID (Student), also die spezifische Person im Datensatz. Jeder Schüler oder jede Schülerin hat eine eigene ID.
- **$t$:** Der Index $t$ steht für den Zeitpunkt oder die Messwoche, an dem die Daten erhoben wurden. Es sind insgesamt 6 Zeitpunkte ($t \in \{0, 1, 2, 3, 4, 5\}$), zu denen jeweils Notendurchschnitt und Arbeitszeiten gemessen wurden.

## (b) Welche Variablen sind zeitabhängig? Welche sind zeitkonstant? Begründen Sie kurz.

- **Zeitabhängige Variablen:**

  - **$gpa_{it}$:** Der Notendurchschnitt ($gpa$) ändert sich über die Zeit, da er zu verschiedenen Zeitpunkten ($t$) gemessen wird.
  - **$job_{it}$:** Die wöchentliche Arbeitszeit ($job$) kann sich ebenfalls über die Zeit ändern, da der Jobstatus und die Stundenanzahl in verschiedenen Wochen variieren können.

- **Zeitkonstante Variablen:**
  - **$sex_i$:** Das Geschlecht ($sex$) der SchülerInnen bleibt konstant über die Zeit. Es ändert sich nicht und ist daher zeitkonstant.
  - **$student_i$:** Die ID ($student$) ist ebenfalls konstant, da sie jede Person eindeutig identifiziert und sich nicht ändert.

## (c) Sie sehen eine Visualisierung des $gpa$ einer Auswahl von SchülerInnen in Abhängigkeit des Zeitpunkts. Jede Verlaufskurve dieses Spaghetti-Plots entspricht dem $gpa$ einer Person und ist in einem eigenen Grauton dargestellt. Kommentieren Sie die Visualisierung hinsichtlich des zeitlichen Verlaufs sowie der Streuung zwischen SchülerInnen.

![[Pasted image 20240730223204.png]]

### Zeitlicher Verlauf:

- Die meisten GPA-Werte liegen zwischen 1.8 und 3.9.
- Allgemeiner leichter Anstieg der GPA-Werte über die Zeitpunkte hinweg.

### Streuung zwischen SchülerInnen:

- Sichtbare Streuung der GPA-Werte, zeigt Unterschiede in den Leistungen.
- Überlappende Linien deuten auf ähnliche GPA-Verläufe hin.

### Fazit:

- Es gibt individuelle Unterschiede im GPA-Verlauf.
- Insgesamt zeigt sich ein positiver Trend in den Noten.

## (d) Nehmen Sie an, Sie würden für die in der Angabe genannte Fragestellung ein lineares Regressionsmodell benutzen und damit die longitudinale Struktur des Datensatzes (also die Tatsache, dass für alle SchülerInnen Wiederholungsmessungen vorliegen) ignorieren. Das entspräche folgender R-Formel: $lm(gpa \sim occasion + sex + job, data = college)$. Wie viele Beobachtungen ($n$) hätten Sie zur Verfügung und wie viele Parameter würden geschätzt werden? Berechnen bzw. begründen Sie jeweils kurz.

(Hinweis: Nehmen Sie an, dass die Variable $occasion$ als stetig in das Modell aufgenommen wurde.)

### Anzahl der Beobachtungen ($n$)

Der Datensatz enthält 200 SchülerInnen, und für jede SchülerIn wurden die Daten zu 6 Zeitpunkten erhoben. Da jede Zeitmessung eine eigene Beobachtung ist, ergibt sich die Gesamtanzahl der Beobachtungen aus:

$$
n = 200 \text{ SchülerInnen} \times 6 \text{ Zeitpunkte} = 1200
$$

### Anzahl der geschätzten Parameter

Für das Modell $lm(gpa \sim occasion + sex + job, data = college)$ sind die folgenden Parameter zu schätzen:

1. **Intercept (Achsenabschnitt):** 1 Parameter
2. **Parameter für $occasion$ (stetig):** 1 Parameter
3. **Parameter für $sex$ (kategorisch, 2 Kategorien: male, female):** 1 Parameter (Referenzkategorie ist implizit enthalten)
4. **Parameter für $job$ (kategorisch, 5 Kategorien: no job, 1 hour, 2 hours, 3 hours, 4 or more hours):** 4 Parameter (da eine Kategorie als Referenzkategorie weggelassen wird)

Zusammengefasst:

- **Intercept:** 1
- **$occasion$:** 1
- **$sex$:** 1
- **$job$:** 4

Die Gesamtanzahl der geschätzten Parameter ist daher:

$$
1 + 1 + 1 + 4 = 7
$$

### Zusammenfassung

- **Anzahl der Beobachtungen ($n$):** 1200
- **Anzahl der geschätzten Parameter:** 7

## (e) Welche Annahme des linearen Regressionsmodells wird durch die longitudinale Struktur des Datensatzes verletzt? Begründen Sie kurz.

Die Annahme der **Unabhängigkeit der Fehlerterme** wird durch die longitudinale Struktur des Datensatzes verletzt.

**Begründung:** Bei longitudinalen Daten sind Fehlerterme innerhalb eines Individuums oft korreliert, da dieselben SchülerInnen über mehrere Zeitpunkte hinweg beobachtet werden (Autokorrelation). Diese Korrelation verletzt die Annahme, dass Fehlerterme unabhängig sind.

Die Daten sind abhängig von den Studis da mehrmals die gleichen Studenten befragt werden und diese abhängigkeit den p-Wert verzerren kann

## (f) Nennen Sie zwei Ansätze, mit Mehrfachmessungen dieser Art umzugehen, sodass die oben genannte Annahme nicht verletzt wird.

1. **Gemischte Modelle (Mixed Effects Models):**

   - **Beschreibung:** Diese Modelle integrieren feste Effekte (z.B. Zeit, Geschlecht) und zufällige Effekte (z.B. individuelle Unterschiede zwischen SchülerInnen) und berücksichtigen die Korrelation der Fehler innerhalb eines Individuums.

2. **Cluster-robuste Standardfehler:**
   - **Beschreibung:** Diese Methode passt die Standardfehler der Schätzungen an, um die innerhalb von Individuen bestehende Korrelation der Fehlerterme zu berücksichtigen, indem die Fehlerkorrelation in Clustergruppen (z.B. SchülerInnen) modelliert wird.

## (g) Es soll nun ein lineares gemischtes Modell mit zufälligem Intercept geschätzt werden. Welche Variable des Datensatzes sollte hier für den zufälligen Effekt gewählt werden? Begründen Sie kurz.

Für das lineare gemischte Modell mit zufälligem Intercept sollte die **Schüler-ID ($student_i$)** als Variable für den zufälligen Effekt gewählt werden.

### Begründung

- **Individuelle Unterschiede:** Der zufällige Intercept erlaubt es, individuelle Unterschiede in den Ausgangsniveaus des $gpa$ (Notendurchschnitt) zwischen den SchülerInnen zu berücksichtigen. Jeder Schüler oder jede Schülerin kann eine unterschiedliche Ausgangsbewertung haben, die sich über die Zeit hinweg ändern kann.
- **Korrelation innerhalb von Individuen:** Da dieselben SchülerInnen über mehrere Zeitpunkte hinweg gemessen werden, können ihre $gpa$-Werte korreliert sein. Ein zufälliger Intercept hilft, diese Korrelation zu modellieren, indem er individuelle Abweichungen vom durchschnittlichen Notendurchschnitt erfasst.

Durch die Wahl der Schüler-ID für den zufälligen Intercept wird sichergestellt, dass die individuelle Variation in den Noten korrekt berücksichtigt wird.

#### (Warum andere nicht geeignet sind:)

### 1. **$occasion$ (Zeitpunkt)**

- **Warum nicht geeignet:** $occasion$ ist eine Zeitvariable und kein Individuum. Es beschreibt lediglich den Zeitpunkt der Messung und nicht die Unterschiede zwischen den SchülerInnen. Ein zufälliger Effekt für $occasion$ würde nicht die individuelle Variation zwischen SchülerInnen berücksichtigen.

### 2. **$sex$ (Geschlecht)**

- **Warum nicht geeignet:** $sex$ ist eine kategoriale Variable mit zwei Werten (male, female). Diese Variable beschreibt eine feste Eigenschaft der SchülerInnen und keine individuelle Variation innerhalb der SchülerInnen. Ein zufälliger Effekt für $sex$ würde keine zeitlichen Veränderungen oder individuelle Unterschiede innerhalb der SchülerInnen erfassen.

### 3. **$job$ (Arbeitszeit)**

- **Warum nicht geeignet:** $job$ ist eine kategoriale Variable, die die wöchentliche Arbeitszeit angibt. Diese Variable kann sich über die Zeit hinweg ändern, ist aber keine Variable, die individuelle Unterschiede in den Ausgangsniveaus des $gpa$ abbildet. Ein zufälliger Effekt für $job$ würde keine individuellen Unterschiede in der Basisleistung (Noten) der SchülerInnen erfassen.

### 4. **$student$ (Schüler-ID)**

- **Warum geeignet:** $student$ ist die individuelle Identifikationsvariable. Ein zufälliger Intercept für $student$ erlaubt es, die individuellen Unterschiede in den Ausgangsniveaus des $gpa$ zu modellieren, indem er die Variation zwischen den SchülerInnen berücksichtigt und somit die Korrelation der Noten innerhalb jedes Schülers über verschiedene Zeitpunkte hinweg erfasst.

**Zusammenfassung:** Der zufällige Intercept sollte die Schüler-ID ($student$) verwenden, da sie die individuellen Unterschiede zwischen den SchülerInnen korrekt erfassen kann, während die anderen Variablen diese individuelle Variation nicht berücksichtigen.

## (h) Sei $x_{it}$ der Vektor aller Kovariablen (inklusive Intercept) für Person $i$ zum Zeitpunkt $t$, und $\beta$ der Koeffizientenvektor. Stellen Sie nun die Modellgleichung des linearen gemischten Modells auf und nennen Sie die Annahmen des Modells.

### Modellgleichung des linearen gemischten Modells

$$
gpa_{it} = x_{it}^\top \beta + u_{i0} + E_{it}
$$

- **$gpa_{it}$:** Notendurchschnitt für Person $i$ zum Zeitpunkt $t$.
- **$x_{it}$:** Vektor der Kovariablen (einschließlich Intercept) für Person $i$ zum Zeitpunkt $t$.
- **$\beta$:** Koeffizientenvektor der festen Effekte.
- **$u_{i0}$:** Zufälliger Intercept für Person $i$.
- **$E_{it}$:** Fehlerterm für Person $i$ zum Zeitpunkt $t$.

### Annahmen des Modells

1. **Fehlerterme:**

   - $E_{it} \sim \text{Normal}(0, \sigma^2)$
   - Fehlerterme sind unabhängig.

2. **Zufällige Effekte:**

   - $u_{i0} \sim \text{Normal}(0, \sigma^2_{u0})$
   - Zufällige Effekte sind unabhängig von Fehlertermen.

3. **Lineare Beziehung:** $gpa_{it}$ ist linear in $x_{it}$.

4. **Homoskedastizität:** Varianz der Fehlerterme ist konstant.

## (i) Das eben definierte gemischte lineare Modell wurde nun geschätzt. Berechnen und interpretieren Sie den Interclass Correlation Coefficient (ICC).

_Modell 3i_

```r
Linear mixed model fit by REML ['lmerMod']
Formula: gpa ~ occasion + job + sex + (1 | student)
   Data: college

REML criterion at convergence: 322.6

Scaled residuals:
    Min      1Q  Median      3Q     Max
-2.99557 -0.59183 -0.01264  0.64724  2.95356

Random effects:
 Groups   Name        Variance Std.Dev.
 student  (Intercept) 0.04797  0.2190
 Residual             0.05530  0.2352
Number of obs: 1200, groups:  student, 200

Fixed effects:
            Estimate   Std. Error t value
(Intercept)  2.743392   0.047208  58.113
occasion     0.102207   0.004075  25.035
job2 hours  -0.190378   0.038775  -4.910
job3 hours  -0.356756   0.043123  -8.273
sexfemale    0.140503   0.033885   4.146

Correlation of Fixed Effects:
            (Intr) occsn jb2hrs jb3hrs
occasion    -0.387
job2 hours  -0.824  0.220
job3 hours  -0.758  0.190  0.872
sexfemale   -0.367 -0.003 -0.015  0.005
```

### 1. Bestimmung der Variance Components

Aus den Ergebnissen des gemischten Modells:

- **Varianz der zufälligen Effekte (student):** 0.04797
- **Varianz der Residuen:** 0.05530

### 2. Berechnung des ICC

Der Interclass Correlation Coefficient (ICC) wird berechnet als der Anteil der Varianz der zufälligen Effekte an der Gesamtvarianz:

$$
\text{ICC} = \frac{\text{Varianz der zufälligen Effekte}}{\text{Varianz der zufälligen Effekte} + \text{Varianz der Residuen}}
$$

Setzen wir die gegebenen Werte ein:

$$
\text{ICC} = \frac{0.04797}{0.04797 + 0.05530} = \frac{0.04797}{0.10327} \approx 0.464
$$

### 3. Interpretation des ICC

Der ICC von **0.464** bedeutet, dass etwa **46.4%** der Gesamtvarianz in den Notendurchschnitten durch Unterschiede zwischen den SchülerInnen erklärt werden. In anderen Worten, fast die Hälfte der Variabilität in den Noten kann auf Unterschiede zwischen den SchülerInnen zurückgeführt werden, während der Rest durch Variabilität innerhalb der SchülerInnen (Fehlerterm) erklärt wird.

Dies weist darauf hin, dass es eine erhebliche individuelle Variation im Notendurchschnitt gibt, die durch den zufälligen Intercept im Modell berücksichtigt wird.

## (j) Betrachten Sie nun folgendes Streudiagramm von Fitted Values (x-Achse) vs. Residuals (y-Achse), das anhand des linearen gemischten Modells, Modell 3i, erzeugt wurde. Wie erklären Sie sich, dass alle Residuen auf Diagonalen liegen, die jeweils um den Wert 0.1 verschoben sind? Was können Sie anhand des Plots zur Annahme der Homoskedastizität sagen?

![[Pasted image 20240730223326.png]]

### Erklärung der diagonalen Anordnung der Residuen

- **Diagonale Anordnung:** Residuen liegen auf Diagonalen, jeweils um 0.1 verschoben.
- **Mögliche Ursache:** Diskrete oder kategorische Struktur in den Prädiktorvariablen, z.B. abgerundete Messwerte oder kategoriale Variablen.

### Homoskedastizität

- **Gleichmäßige Streuung:** Residuen zeigen eine gleichmäßige Streuung über die Fitted Values hinweg.
- **Konstante Varianz:** Keine erkennbaren Muster oder Trends in der Streuung der Residuen.
- **Schlussfolgerung:** Die Varianz der Residuen bleibt konstant über die Fitted Values, was die Annahme der Homoskedastizität bestätigt.

---

# Aufgabe 4

> [!note] Aufgabenstellung
> Bei einer Studie zu COVID-19 wird das Überleben der Infizierten nach 60 Tagen betrachtet. Es soll die Assoziation des Überlebens zum Alter ($Alt$; 3 Altersgruppen: 60-64, 75-79 und 90+) und zum Impfstatus ($impfst$; geboostert und ungeimpft) analysiert werden.
>
> Als Zielgröße wird die Variable $vst$ benutzt ($vst = 1$ entspricht verstorben, $vst = 0$ entspricht überlebt). Dazu wurden insgesamt 2 Modelle angepasst.

## (a) Interpretieren Sie für folgendes Modell (_Modell 4a_) die geschätzten Koeffizienten von dem Impfstatus. Benutzen Sie hierzu die Odds Ratios.

_Modell 4a_

```r
Call:
glm(formula = vst ~ Alt + impfst, family = binomial, data = datac)

Deviance Residuals:
    Min       1Q   Median       3Q      Max
-0.6359  -0.0707  -0.0306  -0.0306   3.9156

Coefficients:
                 Estimate Std. Error z value Pr(>|z|)
(Intercept)       -7.6653     0.1863  -41.15  < 2e-16 ***
Alt75-79           2.7650     0.2009   13.76  < 2e-16 ***
Alt90+             4.4949     0.1875   23.97  < 2e-16 ***
impfstungeimpft    1.6746     0.1087   15.40  < 2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

(Dispersion parameter for binomial family taken to be 1)

    Null deviance: 4375.7  on 47344  degrees of freedom
Residual deviance: 3107.0  on 47341  degrees of freedom
AIC: 3115

Number of Fisher Scoring iterations: 9
```

Der geschätzte Koeffizient für den Impfstatus (ungeimpft im Vergleich zu geboostert) beträgt 1.6746. Um dies in Odds Ratios zu interpretieren, berechnen wir:

$$
OR = e^{1.6746} \approx 5.34
$$

Dies bedeutet, dass die Wahrscheinlichkeit zu sterben für ungeimpfte Personen etwa 5.34-mal höher ist als für geboosterte Personen, wenn alle anderen Variablen konstant gehalten werden.

## (b) Berechnen Sie für den Koeffizienten von Alt75-79 das Konfidenzintervall zum Niveau $\alpha = 0.05$, sowohl für die log-Odds als auch für die Odds.

### Schritt-für-Schritt Anleitung:

1. **Formel für das Konfidenzintervall der log-Odds:**
   Das 95%-Konfidenzintervall für den Koeffizienten wird berechnet als:

   $$
   CI_{log-odds} = \hat{\beta} \pm z_{\alpha/2} \cdot SE
   $$

2. **Bestimmen Sie den Koeffizienten (\(\hat{\beta}\)) und den Standardfehler (SE):**

   - Koeffizient für Alt75-79: $\hat{\beta} = 2.7650$
   - Standardfehler für Alt75-79: $SE = 0.2009$

3. **Bestimmen Sie den z-Wert für das Konfidenzniveau:**
   Für $\alpha = 0.05$ und $z_{0.025} \approx 1.96$.

4. **Berechnen Sie das Konfidenzintervall für die log-Odds:**

   $$
   CI_{log-odds} = 2.7650 \pm 1.96 \cdot 0.2009
   $$

   $$
   CI_{log-odds} = 2.7650 \pm 0.3938
   $$

   $$
   CI_{log-odds} = [2.3712, 3.1588]
   $$

5. **Konvertieren Sie das Konfidenzintervall der log-Odds in das Konfidenzintervall der Odds:**

   $$
   CI_{odds} = e^{CI_{log-odds}}
   $$

   Berechnen Sie die Exponentialfunktion für beide Grenzen des Intervalls:

   $$
   CI_{odds} = [e^{2.3712}, e^{3.1588}]
   $$

6. **Berechnen Sie die exakten Werte:**

   $$
   CI_{odds} \approx [10.71, 23.54]
   $$

### Zusammenfassung:

- Das 95%-Konfidenzintervall für den Koeffizienten von Alt75-79 (log-Odds) ist $[2.3712, 3.1588]$.
- Das 95%-Konfidenzintervall für die Odds ist $[10.71, 23.54]$.

## (c) Für den Koeffizienten des Impfstatus ($impfstungeimpft$) ist der Wert 0 nicht im 95%-Konfidenzintervall enthalten. Was bedeutet das für einen ungerichteten Hypothesentest des Odds Ratios des Impfstatus mit Nullhypothese $H_0$: Odds Ratio = 1 und Gegenhypothese $H_1$: Odds Ratio ungleich 1 zum Niveau $\alpha = 0.05$? Begründen Sie kurz.

Da 0 nicht im 95%-Konfidenzintervall des Koeffizienten enthalten ist, wird die Nullhypothese $H_0$ verworfen. Dies bedeutet, dass es einen signifikanten Unterschied im Überleben zwischen den ungeimpften und geboosterten Personen gibt. Der Odds Ratio ungleich 1 weist darauf hin, dass der Impfstatus einen signifikanten Einfluss auf die Wahrscheinlichkeit des Überlebens hat.

## (d) Geben Sie für Modell 4a die Struktur- und Verteilungsannahme an. Spezifizieren Sie explizit den linearen Prädiktor sowie die Response- und Link-Funktion.

Strukturannahme:

- Binomialverteilung für die Zielvariable $vst$ (verstorben/überlebt)

Verteilungsannahme:

- Logistische Regression

Linearer Prädiktor:

$$
\eta = \beta_0 + \beta_1 \cdot Alt_{75-79} + \beta_2 \cdot Alt_{90+} + \beta_3 \cdot impfst_{ungeimpft}
$$

Response-Funktion:

$$
\text{logit}(\pi) = \ln \left( \frac{\pi}{1-\pi} \right)
$$

Link-Funktion:

$$
\pi = \frac{1}{1 + e^{-\eta}}
$$

## (e) Nun wird ein weiteres Modell (_Modell 4e_) geschätzt:

```r
Call:
glm(formula = vst ~ Alt + impfst + Alt * impfst, family = binomial, data = datac)

Deviance Residuals:
    Min       1Q   Median       3Q      Max
-0.5849  -0.0774  -0.0255  -0.0255   4.0074

Coefficients:
                           Estimate   Std. Error z value  Pr(>|z|)
(Intercept)                 -8.0293     0.3333  -24.089  < 2e-16 ***
Alt75-79                     2.7653     0.3718    7.437  1.03e-13 ***
Alt90+                       5.0575     0.3466   14.590  < 2e-16 ***
impfstungeimpft              2.2189     0.3910    5.675  1.39e-08 ***
Alt75-79:impfstungeimpft     0.1069     0.4425    0.242  0.8091
Alt90+:impfstungeimpft      -0.9262     0.4143   -2.235  0.0254 *
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

(Dispersion parameter for binomial family taken to be 1)

    Null deviance: 4375.7  on 47344  degrees of freedom
Residual deviance: 3086.9  on 47339  degrees of freedom
AIC: 3098.9

Number of Fisher Scoring iterations: 10
```

## (f) Welche zusätzliche Fragestellung wird in Modell 4e, im Vergleich zu Modell 4a, bearbeitet? Erklären Sie.

In Modell 4e wird untersucht, ob es eine Wechselwirkung zwischen Alter und Impfstatus gibt, also ob der Effekt des Impfstatus auf das Überleben je nach Altersgruppe unterschiedlich ist. Dies wird durch die Interaktionsterme $Alt * impfst$ berücksichtigt.

## (g) Vergleichen Sie die Ergebnisse von Modell 4a und Modell 4e inhaltlich im Hinblick auf Alters- und Impfstatus-Effekte. Welches Modell ist zu bevorzugen? Begründen Sie.

Modell 4e zeigt, dass es signifikante Interaktionen zwischen Alter und Impfstatus gibt (z.B. $Alt90+:impfstungeimpft$ ist signifikant mit $p=0.0254$). Dies deutet darauf hin, dass der Effekt des Impfstatus auf das Überleben von der Altersgruppe abhängt. Das Modell 4e ist daher vorzuziehen, da es diese komplexere Beziehung berücksichtigt und eine genauere Modellierung der Daten ermöglicht.

## (h) Die zugehörige ANOVA zu Modell 4e ist:

```r
Analysis of Deviance Table (Type II tests)

Response: vst
                LR Chisq Df  Pr(>Chisq)
Alt            1044.93  2  < 2.2e-16 ***
impfst          231.22  1  < 2.2e-16 ***
Alt:impfst       20.13  2  4.254e-05 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
```

### (i) Welches Modell ist zu bevorzugen? Begründen Sie kurz.

Modell 4e ist zu bevorzugen, da die ANOVA zeigt, dass die Interaktion zwischen Alter und Impfstatus signifikant ist ($p < 0.001$). Dies bedeutet, dass Modell 4e eine bessere Passform bietet, da es die signifikante Wechselwirkung zwischen Alter und Impfstatus berücksichtigt.

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
