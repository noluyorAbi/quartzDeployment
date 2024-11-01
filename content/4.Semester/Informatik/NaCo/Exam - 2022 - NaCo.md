---
date created: Tuesday, 15. October 2024, 15:40
date modified: Tuesday, 15. October 2024, 19:02
---

# Aufgabe 1: General Knowledge / Multiple Choice (10 Punkte)

**(a) Which domain of science does natural computing usually not draw inspiration from? (1 Punkt)**

- **Richtige Antwort:** iii History
- **Erklärung:** Natural Computing ist stark von Disziplinen wie Physik, Biologie und Chemie inspiriert, da diese oft Prinzipien enthalten, die sich auf natürliche Phänomene beziehen, die für Algorithmen relevant sind. Geschichte hingegen liefert keine direkten technischen Konzepte.

**(b) Any computer program can be encoded into an instance of Conway’s game of life that performs an equivalent computation. Thus, Conway’s game of life is…? (1 Punkt)**

- **Richtige Antwort:** i Turing-complete
- **Erklärung:** Conway’s Game of Life ist Turing-vollständig, was bedeutet, dass es in der Lage ist, jede berechenbare Funktion zu simulieren, ähnlich wie bei einem Universalrechner.

**(c) As measured by sample efficiency, all optimization algorithms perform the same when averaged over all possible target functions. What is this theorem called? (1 Punkt)**

- **Richtige Antwort:** ii No Free Lunch Theorem
- **Erklärung:** Das „No Free Lunch“-Theorem besagt, dass alle Optimierungsalgorithmen im Durchschnitt gleich gut abschneiden, wenn über alle möglichen Probleme gemittelt wird.

**(d) How many functions in the λ-calculus do have a fixpoint? (1 Punkt)**

- **Richtige Antwort:** iv all of them
- **Erklärung:** Im Lambda-Kalkül hat jede Funktion einen Fixpunkt aufgrund des Fixpunkt-Kombinators, der sicherstellt, dass jede Funktion einen Wert findet, der bei erneuter Anwendung der Funktion stabil bleibt.

**(e) Assume a soup made of λ-expressions that react by being applied to each other. We observe that certain expressions occur way more often than others and that these expressions are able to copy themselves in a stable manner. Thus, we call them…? (1 Punkt)**

- **Richtige Antwort:** iii replicators
- **Erklärung:** Replicatoren sind λ-Ausdrücke, die sich durch Wiederanwendung selbst stabil kopieren können und somit eine Schlüsselrolle in solch einem System spielen.

---

# Aufgabe 2: Game of Life (12 Punkte)

**(a) Give an example of a still life on the grid topology printed below. (2 Punkte)**

Ein Beispiel für ein Stillleben im Game of Life ist ein Muster, das nach jedem Schritt unverändert bleibt. In der angegebenen Grafik ist das Beispiel korrekt.

In der gegebenen Grafik wird ein kleines Quadrat aus vier schwarzen Zellen in der Mitte des Gitters angezeigt. Dieses Muster ist ein **Stillleben**, da es unverändert bleibt, unabhängig davon, wie viele Schritte das Game of Life ausgeführt wird. Es entspricht dem sogenannten “Block”-Muster, einem klassischen Stillleben.

```text
□ □ □ □ □ □ □ □ □ □
□ □ □ □ □ □ □ □ □ □
□ □ □ □ ■ ■ □ □ □ □
□ □ □ □ ■ ■ □ □ □ □
□ □ □ □ □ □ □ □ □ □
□ □ □ □ □ □ □ □ □ □
```

**(b) Use Def. 1 to evolve the following initial state for Conway’s game of life on a grid for 3 steps. State if and why this pattern fits the description of an oscillator, space ship, or gun. What can this pattern be used for when trying to encode complex behavior like information processing in Conway’s game of life? (10 Punkte)**

- Das gezeigte Muster ist ein **space ship**, da es sich nach jedem Schritt bewegt, aber seine Form beibehält. Ein Raumschiff kann verwendet werden, um Information über das Spielfeld zu transportieren, da es sich fortbewegt und seinen Zustand überträgt.

---

# 3 Cellular Automata (10pts)

Ein **exam cellular automaton** wird durch eine Funktion $f : \{dead, alive\}^3 \rightarrow \{dead, alive\}$ definiert, auf einem initialen Zustand $x \in \{dead, alive\}^n$ für ein festes $n \in \mathbb{N}$. Sei $x(i)$ der $i$-te Wert von $x$, d.h. $x = (x(0), x(1), …, x(n - 1))$. Außerdem sei $x(-1) = x(n - 1)$ und $x(n) = x(0)$. Gegeben ein Zustand $x_t \in \{dead, alive\}^n$ zu Zeit $t \in \mathbb{N}$, wird der nächste Zustand $x_{t+1} \in \{dead, alive\}^n$ wie folgt definiert:

$$
x_{t+1}(i) = f(x_t(i - 1), x_t(i), x_t(i + 1))
$$

## (a) What dimensionality does the exam cellular automaton have? (1pt)

**Antwort:** 1-dimensional

**Erklärung:**
Ein eindimensionaler zellulärer Automat arbeitet auf einer Linie von Zellen, also einem eindimensionalen Gitter. In der Problemstellung sehen wir, dass jede Zelle $x(i)$ ihren Zustand basierend auf ihrem aktuellen Zustand und den Zuständen ihrer direkten Nachbarn ($x(i-1)$ und $x(i+1)$) ändert. Da nur zwei Nachbarn (links und rechts) betrachtet werden, befindet sich das System in einer eindimensionalen Struktur.

## (b) Define the neighborhood function $neighborhood : \mathbb{N} \rightarrow \mathcal{P}(\mathbb{N})$ that returns all neighboring cells' indices given a cell index $i \in \mathbb{N}$. (3pts)

**Antwort:**

$$
neighborhood(i) = \{i - 1 \mod n, i + 1 \mod n\}
$$

**Erklärung:**
Die Nachbarschaftsfunktion bestimmt, welche Zellen für die Berechnung des nächsten Zustands von Zelle $i$ betrachtet werden müssen. Da der Automat auf einem zyklischen Gitter arbeitet (das heißt, das Gitter ist „kreisförmig“ angeordnet, sodass die Zelle am Ende wieder mit der Zelle am Anfang verbunden ist), wird die Nachbarschaft durch $i-1$ und $i+1$ modulo $n$ definiert. Dies sorgt dafür, dass die Zellen „am Rand“ ihre Nachbarn korrekt identifizieren können. Zum Beispiel ist bei $i = 0$ der linke Nachbar die Zelle $n-1$ und bei $i = n-1$ der rechte Nachbar die Zelle $0$.

> [!question]- Wozu das Modulo?
>
> ### Modulo $n$ und zyklische Gitter
>
> Das **Modulus** (oft "Modulo" genannt) ist eine mathematische Operation, die den Rest einer Division berechnet. Wenn wir beispielsweise $i - 1 \mod n$ berechnen, bedeutet das: "Teile $i - 1$ durch $n$ und nimm den Rest dieser Division." Dies ist besonders nützlich, wenn man sich in einem **zyklischen Gitter** befindet.
>
> #### Beispiel: Zyklisches Gitter
>
> Ein zellulärer Automat arbeitet oft auf einem sogenannten zyklischen Gitter. Das bedeutet, dass das Gitter "kreisförmig" ist, sodass die Zelle am Ende des Gitters wieder mit der ersten Zelle verbunden ist.
>
> Angenommen, wir haben ein Gitter der Länge $n = 5$. Die Zellen hätten dann die Indizes $0, 1, 2, 3, 4$.
>
> 1. **Nachbar links:** Wenn $i = 0$ ist (die erste Zelle), dann wäre $i - 1 = -1$. Da es jedoch keine Zelle mit Index $-1$ gibt, sagt uns das Modulo, dass die Zelle $n-1 = 4$ der linke Nachbar von $0$ ist. Also schließt sich das Gitter „am Rand“.
>
>    - $i = 0$: $i - 1 \mod 5 = -1 \mod 5 = 4$
>
> 2. **Nachbar rechts:** Wenn $i = 4$ ist (die letzte Zelle), dann wäre $i + 1 = 5$. Da es keine Zelle mit Index $5$ gibt (die Zellen gehen nur bis $n-1$), sagt uns das Modulo, dass der rechte Nachbar die Zelle $0$ ist.
>
>    - $i = 4$: $i + 1 \mod 5 = 5 \mod 5 = 0$
>
> #### Anwendung der Modulo-Funktion
>
> Die Modulo-Funktion wird verwendet, um sicherzustellen, dass der Automat „zyklisch“ arbeitet, sodass die Zellen am Rand wieder mit den Zellen auf der anderen Seite verbunden sind. Ohne das Modulo würde man für Zellen am Rand Nachbarn „außerhalb“ des Gitters bekommen, was keinen Sinn ergibt.
>
> ### Nachbarschaftsfunktion
>
> Die Nachbarschaftsfunktion bestimmt, welche Zellen als Nachbarn einer gegebenen Zelle $i$ betrachtet werden. Für eine Zelle $i$ in einem zyklischen Gitter der Länge $n$ sind die Nachbarn:
>
> - $i - 1 \mod n$: Der linke Nachbar, mit der Modulo-Operation, um bei $i = 0$ den Nachbarn $n-1$ zu erhalten.
> - $i + 1 \mod n$: Der rechte Nachbar, mit der Modulo-Operation, um bei $i = n-1$ den Nachbarn $0$ zu erhalten.
>
> ### Fazit
>
> In einem zyklischen Gitter sorgt das Modulo $n$ dafür, dass die Nachbarschaft „um das Gitter herum“ definiert wird. Zellen am Rand haben weiterhin benachbarte Zellen, da die Modulo-Operation die Indizes wieder ins gültige Intervall von $0$ bis $n-1$ bringt.
>
> Das ist der Grund, warum wir die Modulo-Operation in der Nachbarschaftsfunktion verwenden: Sie erlaubt es uns, ein kontinuierliches, zyklisches Gitter zu simulieren, in dem jede Zelle immer Nachbarn hat, auch wenn sie am „Rand“ des Gitters liegt.
>
> ### Beispiel (n=5):
>
> - Für $i = 0$:
>   - Linker Nachbar: $0 - 1 \mod 5 = 4$ (letzte Zelle)
>   - Rechter Nachbar: $0 + 1 \mod 5 = 1$ (zweite Zelle)
> - Für $i = 4$:
>   - Linker Nachbar: $4 - 1 \mod 5 = 3$ (vierte Zelle)
>   - Rechter Nachbar: $4 + 1 \mod 5 = 0$ (erste Zelle)

## (c) A cellular automaton’s function $f$ is often given as the template below, which shows the inputs to $f$ on the top row and the respective output on the bottom row. Give a (possibly concise) definition for $f$ according to the template below. (3pts)

$$
f(x(i - 1), x(i), x(i + 1)) =
\begin{cases}
dead & \text{if } (x(i - 1), x(i), x(i + 1)) \in \{(alive, alive, alive), (dead, alive, dead)\}, \\
alive & \text{otherwise}.
\end{cases}
$$

**Erklärung:**
Die Funktion $f$ legt fest, wie sich der Zustand einer Zelle basierend auf den Zuständen ihrer Nachbarn ändert. In der Vorlage wird beschrieben, dass die Zelle $i$ stirbt (also den Zustand „dead“ annimmt), wenn die Kombination der Nachbarn und des aktuellen Zustands entweder $(alive, alive, alive)$ oder $(dead, alive, dead)$ ist. In allen anderen Fällen bleibt die Zelle am Leben (oder wird lebendig). Diese Regel ist eine vereinfachte Version einer „Regel 110“ oder einer anderen formalen Regel für zelluläre Automaten, bei der bestimmte Muster zum Überleben oder Sterben führen.

## (d) With this function $f$ you have just defined, evolve this initial configuration by hand for three generations. Use one row per generation. (3pts)

- **Antwort:**
  (Hier musst du die Konfigurationen für die nächsten drei Generationen zeichnen, da diese visuell und nicht als LaTeX/Mathe-Ausdruck dargestellt wird.)

**Erklärung:**
Um die nächsten Generationen zu berechnen, musst du für jede Zelle die Regel $f$ anwenden, basierend auf ihrem aktuellen Zustand und den Zuständen der benachbarten Zellen. Die Zellen ändern ihren Zustand entsprechend den von $f$ definierten Regeln. Beginne mit dem angegebenen Ausgangsmuster, und wende die Regeln nacheinander für alle Zellen an, um die nächste Generation zu berechnen. Wiederhole diesen Prozess insgesamt dreimal, um die drei Generationen zu erhalten.

Diese drei Generationen sollten als separate Zeilen dargestellt werden, wobei jede Zeile die Zustände der Zellen für eine Generation repräsentiert.

---

# 4 Optimization (20pts)

Wir geben eine verkürzte Version der Definition für Optimierungsprozesse aus der Vorlesung und stellen dann einen neuen Optimierungsalgorithmus namens **exam search** vor.

## Definition 2 (Optimization, shortened)

Sei $\mathcal{X}$ ein beliebiger Raum, der **state space** genannt wird. Sei $T$ eine beliebige Menge, die **target space** genannt wird, und sei $\leq$ eine totale Ordnung auf $T$. Eine Funktion $\tau : \mathcal{X} \rightarrow T$ wird **target function** genannt. Optimierung oder **Minimierung** ist das Verfahren, ein $x \in \mathcal{X}$ zu suchen, sodass $\tau(x)$ optimal oder minimal ist.

Ein Optimierungslauf der Länge $g + 1$ ist eine Sequenz von Zuständen $(x_t)_{0 \leq t \leq g}$, wobei $x_t \in \mathcal{X}$ für alle $t$. Sei $e$ eine möglicherweise randomisierte oder nicht-deterministische Funktion, sodass der Optimierungslauf erzeugt wird, indem $e$ wiederholt aufgerufen wird, d.h., $x_{t+1} = e((x_u)_{0 \leq u \leq t}, \tau)$, wobei $x_0$ entweder extern festgelegt wird (z.B. $x_0 = def42$) oder zufällig gewählt wird (z.B. $x_0 \sim \lambda$). Ein Optimierungsprozess ist ein Tupel $(\mathcal{X}, T, \tau, e, (x_t)_{0 \leq t \leq g})$.

### Erklärung:

Diese Definition beschreibt die Grundlage für einen **Optimierungsprozess**. Dabei ist $\mathcal{X}$ der Raum aller möglichen Zustände, und $\tau$ ist eine Zielfunktion, die jedem Zustand $x \in \mathcal{X}$ einen Wert im Zielraum $T$ zuweist. Ziel der Optimierung ist es, einen Zustand $x$ zu finden, der den Wert von $\tau(x)$ minimiert oder optimiert.

Die Zustände in einem Optimierungslauf entwickeln sich über die Zeit $t$, wobei $x_0$ der Anfangszustand ist. Die Funktion $e$ erzeugt den nächsten Zustand $x_{t+1}$, basierend auf dem bisherigen Verlauf der Zustände $(x_u)_{0 \leq u \leq t}$ und der Zielfunktion $\tau$. Der gesamte Optimierungsprozess ist die Folge aller Zustände zusammen mit der Zielfunktion und der Regel $e$.

---

## Algorithm 1 (exam search)

Sei $D = (\mathcal{X}, T, \tau, e, (x_u)_{0 \leq u \leq t})$ ein Optimierungsprozess. Wir nehmen an, $\mathcal{X} = \mathbb{B}^4$ und $T = \mathbb{N}$.

Die Nachbarschaftsfunktion $neighbors : \mathbb{B}^4 \rightarrow \mathcal{P}(\mathbb{B}^4)$ wird gegeben durch:

$$
neighbors(x) = \{( \neg x(0), x(1), x(2), x(3)), (x(0), \neg x(1), x(2), x(3)), (x(0), x(1), \neg x(2), x(3)), (x(0), x(1), x(2), \neg x(3)) \}
$$

wobei $\neg$ die logische NOT-Funktion ist, d.h., $\neg 0 = 1$ und $\neg 1 = 0$. Der Prozess $D$ setzt sich durch den **exam search** fort, wenn $x_{t+1}$ gegeben ist durch:

$$
e((x_u)_{0 \leq u \leq t}, \tau) = x_{t+1} = \underset{x' \in neighbors(x_t) \cup \{x_t\}}{\arg\min} \, \tau(x')
$$

---

## (a) Let target function

$$
\tau((x(0), x(1), x(2), x(3))) = 15 - (8 \cdot x(0) + 4 \cdot x(1) + 2 \cdot x(2) + 1 \cdot x(3)).
$$

Lass den initialen Zustand $x_0 = (0, 0, 0, 0)$ sein. Wende den **exam search** auf diese Einstellung für 5 Zeitschritte an, d.h., berechne $x_1, x_2, …, x_5$. Erreicht der **exam search** das globale Optimum innerhalb dieser fünf Schritte? Welcher Prozentsatz der möglichen Zustände innerhalb $\mathbb{B}^4$ wurde während dieses Optimierungslaufs ausgewertet? Wie kann diese Zahl interpretiert werden? (11pts)

---

### Lösung:

- **Initialzustand:**

$$
x_0 = (0, 0, 0, 0) \quad \text{mit} \quad \tau(x_0) = 15
$$

- **Nachbarn von $x_0$:**

$$
neighbors(x_0) = \left\{
\begin{aligned}
&(1, 0, 0, 0) \quad \text{mit} \quad \tau = 7, \\
&(0, 1, 0, 0) \quad \text{mit} \quad \tau = 11, \\
&(0, 0, 1, 0) \quad \text{mit} \quad \tau = 13, \\
&(0, 0, 0, 1) \quad \text{mit} \quad \tau = 14
\end{aligned}
\right\}
$$

- **Erster Schritt:**

$$
x_1 = (1, 0, 0, 0) \quad \text{mit} \quad \tau(x_1) = 7
$$

- **Nachbarn von $x_1$:**

$$
neighbors(x_1) = \left\{
\begin{aligned}
&(0, 0, 0, 0) \quad \text{mit} \quad \tau = 15, \\
&(1, 1, 0, 0) \quad \text{mit} \quad \tau = 3, \\
&(1, 0, 1, 0) \quad \text{mit} \quad \tau = 5, \\
&(1, 0, 0, 1) \quad \text{mit} \quad \tau = 6
\end{aligned}
\right\}
$$

- **Zweiter Schritt:**

$$
x_2 = (1, 1, 0, 0) \quad \text{mit} \quad \tau(x_2) = 3
$$

- **Nachbarn von $x_2$:**

$$
neighbors(x_2) = \left\{
\begin{aligned}
&(0, 1, 0, 0) \quad \text{mit} \quad \tau = 11, \\
&(1, 0, 0, 0) \quad \text{mit} \quad \tau = 7, \\
&(1, 1, 1, 0) \quad \text{mit} \quad \tau = 2, \\
&(1, 1, 0, 1) \quad \text{mit} \quad \tau = 1
\end{aligned}
\right\}
$$

- **Dritter Schritt:**

$$
x_3 = (1, 1, 0, 1) \quad \text{mit} \quad \tau(x_3) = 1
$$

- **Nachbarn von $x_3$:**

$$
neighbors(x_3) = \left\{
\begin{aligned}
&(0, 1, 0, 1) \quad \text{mit} \quad \tau = 9, \\
&(1, 0, 0, 1) \quad \text{mit} \quad \tau = 5, \\
&(1, 1, 1, 1) \quad \text{mit} \quad \tau = 0, \\
&(1, 1, 0, 0) \quad \text{mit} \quad \tau = 3
\end{aligned}
\right\}
$$

- **Vierter Schritt:**

$$
x_4 = (1, 1, 1, 1) \quad \text{mit} \quad \tau(x_4) = 0
$$

- **Nachbarn von $x_4$:**

$$
neighbors(x_4) = \left\{
\begin{aligned}
&(0, 1, 1, 1) \quad \text{mit} \quad \tau = 8, \\
&(1, 0, 1, 1) \quad \text{mit} \quad \tau = 4, \\
&(1, 1, 0, 1) \quad \text{mit} \quad \tau = 1, \\
&(1, 1, 1, 0) \quad \text{mit} \quad \tau = 2
\end{aligned}
\right\}
$$

- **Fünfter Schritt:**

$$
x_5 = (1, 1, 1, 1) \quad \text{mit} \quad \tau(x_5) = 0
$$

### Zusammenfassung:

Das globale Optimum wurde gefunden. Der **exam search** hat 14 von 16 Zuständen ausgewertet, was fast den gesamten Suchraum abdeckt (ähnlich wie eine Brute-Force-Suche).

## (b) Give a target function $\tau : \mathbb{B}^4 \rightarrow \mathbb{N}$ for which exam search never reaches the global optimum when starting from $x_0 = (0, 0, 0, 0)$. Briefly explain why. (5pts)

$$
\tau(x) =
\begin{cases}
0 & \text{if } x = (1, 1, 1, 1), \\
1 & \text{if } x = (0, 0, 0, 0), \\
2 & \text{otherwise}.
\end{cases}
$$

**Erklärung:**

- Das Starten bei $x_0 = (0, 0, 0, 0)$ führt zu einem lokalen Optimum, da $\tau(x_0) = 1$ ist und alle Nachbarn von $x_0$ den Wert $\tau(x) = 2$ haben. Exam search wählt immer den Zustand mit dem niedrigsten $\tau$-Wert, daher wird es nicht zu einem Zustand wechseln, dessen $\tau$-Wert höher ist. Da $\tau = 0$ (das globale Optimum) nur bei $x = (1, 1, 1, 1)$ erreicht wird und alle Zustände, die zwischen $x_0$ und $x = (1, 1, 1, 1)$ liegen, den Wert 2 haben, bleibt der Algorithmus bei $x_0$ stecken und erreicht das globale Optimum nicht.

> [!warning]- Warum wir 3-cases brauchen mit `0` `1` `2`
> **Hinweis:**
>
> Die Zielfunktion
>
> $$
> \tau(x) =
> \begin{cases}
> 0 & \text{if } x = (1, 1, 1, 1), \\
> 1 & \text{otherwise}.
> \end{cases}
> $$
>
> ist **nicht valide**, um sicherzustellen, dass der **exam search** nicht im globalen Optimum endet, weil es kein **lokales Optimum** schafft. Da alle Zustände außer dem globalen Optimum den gleichen Wert $\tau = 1$ haben, gibt es keinen „schlechteren“ Nachbarn, der den Algorithmus daran hindert, weiterzumachen. Der Algorithmus kann sich frei bewegen und letztendlich das globale Optimum ($\tau = 0$) erreichen.
>
> **Warum ist ein lokales Optimum wichtig?**
> Damit der **exam search** sicher **nicht** im globalen Optimum endet, muss der Algorithmus in einem **lokalen Optimum** terminieren. Ein lokales Optimum ist ein Zustand, bei dem alle Nachbarn einen schlechteren (höheren) Wert der Zielfunktion haben. Ohne ein lokales Optimum könnte der Algorithmus immer zu einem besseren Nachbarn wechseln und letztendlich das globale Optimum erreichen.

> [!hint] [[Elitist vs Greedy]]

## (c) State if exam search is elitist. Briefly explain why. (2pts)

**Antwort:**  
Ja, **exam search** ist **elitist**, weil der Algorithmus die beste gefundene Lösung nie verwirft. Das liegt daran, dass der aktuelle Zustand $x_t$ immer in der Menge der möglichen nächsten Zustände enthalten ist, wie in der Definition von $e$ gezeigt:

$$
x_{t+1} = \underset{x' \in neighbors(x_t) \cup \{x_t\}}{\arg\min} \, \tau(x')
$$

Wenn kein besserer Nachbar gefunden wird, bleibt der Algorithmus einfach beim aktuellen Zustand.

## (d) State if exam search is greedy. Briefly explain why. (2pts)

**Antwort:**  
Ja, **exam search** ist **greedy**, weil der Algorithmus immer den Nachbarn mit dem niedrigsten $\tau$-Wert wählt. Die Definition von $e$ zeigt, dass der Algorithmus in jeder Iteration sofort zur besten lokalen Option wechselt:

$$
x_{t+1} = \underset{x' \in neighbors(x_t) \cup \{x_t\}}{\arg\min} \, \tau(x')
$$

Dies entspricht dem typischen Verhalten eines gierigen Algorithmus, der in jedem Schritt die momentan beste Entscheidung trifft.

---

# 6 Artificial Chemistries / Soups (10pts)

Recollect Def. 4, which was used in the lecture. We also introduce a special kind of artificial chemistry called **exam artificial chemistry** with Def. 5.

## Definition 4 (artificial chemistry, soup)

Let $\mathcal{X}$ be a state space. Let $\mathcal{R}$ be a set of reaction rules $R \in \mathcal{R}$ where each $R$ is a function $R: \mathcal{P}(\mathcal{X}) \to \mathcal{P}(\mathcal{X})$. Let $A : \mathcal{P}(\mathcal{X}) \to \mathcal{P}(\mathcal{X})$ be a possibly randomized or non-deterministic function that returns a (multi-)set of reactants and a reaction rule to perform so that the reactants are suitable input to the reaction rule; the input to $A$ is a (multi-)set of elements from the state space, i.e., a population. The tuple $(\mathcal{X}, \mathcal{R}, A)$ defines an artificial chemistry. A population $X \subseteq \mathcal{X}$ of an artificial chemistry is also called soup; each element $x \in \mathcal{X}$ is also called particle. The evolution of a soup for $g$ generations is a sequence $(X_0, …, X_g)$ so that $X_0$ is given as the initial soup and

$$
X_{t+1} = (X_t \setminus X') \cup R(X')
$$

where $(X', R) = A(X_t)$. Reaction rules are usually written in the form $R = \sum_i x_i \to \sum_j x_j$ for $x_i, x_j \in \mathcal{X}, i, j \in \mathbb{N}$.

---

## Definition 5 (exam artificial chemistry, exam soup)

Let $\mathcal{X}$ be a state space. Let $\mathcal{R}$ be a set of reaction rules $R \in \mathcal{R}$ so that each $R$ is a function $R: \mathcal{P}(\mathcal{X}) \to \mathcal{P}(\mathcal{X})$ that is written in the form

$$
R = x_1 + … + x_n \to y_1 + … + y_m
$$

for some $n, m \in \mathbb{N}$ where $x_1, …, x_n, y_1, …, y_m \in \mathcal{X}$. The tuple $(\mathcal{X}, \mathcal{R})$ defines an **exam artificial chemistry**. A population $X \subseteq \mathcal{X}$ of an exam artificial chemistry is also called exam soup; each element $x \in \mathcal{X}$ is also called exam particle. The evolution of an exam soup for $g$ generations is a sequence $(X_0, …, X_g)$ so that $X_0$ is given as the initial exam soup and

$$
X_{t+1} = (X_t \setminus X') \cup R(X')
$$

where $R$ is a reaction rule chosen at random among those reaction rules whose required inputs exist within the exam soup and $X'$ are said inputs (chosen at random if multiple such sets exist).

---

## (a) What is the main structural difference between Def. 4 and Def. 5? How does the difference affect the evolution of the respective soups? (2pts)

**Antwort:**

In **Def. 4** gibt es eine zusätzliche Funktion $A$, die bestimmt, welche Reaktanten ausgewählt werden. In **Def. 5** werden die Reaktanten und Reaktionen dagegen immer zufällig ausgewählt.

**Erklärung:**

Der Hauptunterschied ist, dass **Def. 4** durch $A$ eine gezielte Auswahl der Reaktanten ermöglicht, während in **Def. 5** alles zufällig abläuft. Dadurch kann die Evolution der Suppe in **Def. 4** mehr kontrolliert werden, während sie in **Def. 5** stärker von Zufällen abhängt.

## (b) Consider the exam artificial chemistry given by $\mathcal{X} = \{\text{Beaver, Tree, Log, Dam, River, Lake}\}$ and $\mathcal{R} = \{R_1, …, R_5\}$ where

$$
\begin{aligned}
R_1 &= \text{Beaver} + \text{Tree} \rightarrow \text{Beaver} + \text{Log} \\
R_2 &= \text{Beaver} + \text{Log} + \text{Log} \rightarrow \text{Beaver} + \text{Dam} \\
R_3 &= \text{Dam} + \text{River} \rightarrow \text{Lake} \\
R_4 &= \text{Lake} + \text{Beaver} \rightarrow \text{River} \\
R_5 &= \emptyset \rightarrow \text{Tree}
\end{aligned}
$$

describes the cycle of beavers turning trees into logs ($R_1$), beavers building dams from multiple logs ($R_2$), dams turning rivers into lakes ($R_3$), lakes breaking the dam over time and killing a beaver in doing so ($R_4$), and trees regrowing over time ($R_5$). Compute a possible evolution of the soup $X_0 = \{\text{Beaver, Beaver, Log, Log, River}\}$ for as many time steps as necessary until a Dam appears. (Hint: Instead of random choices, you can decide which rules to apply to make the process quicker. Use the table below.) (2pts)

| time step | chosen rule | current soup                              |
| --------- | ----------- | ----------------------------------------- |
| 0         | none        | \{Beaver, Beaver, Log, Log, River\}       |
| 1         | $R_5$       | \{Beaver, Beaver, Log, Log, River, Tree\} |
| 2         | $R_1$       | \{Beaver, Beaver, Log, Log, River, Log\}  |
| 3         | $R_2$       | \{Beaver, Beaver, River, Dam\}            |
| 4         |             |                                           |
| 5         |             |                                           |

---

## (c1) When all rules are chosen at random in a fair manner, the soup from task (b) will eventually become unable to perform any reactions but $R_5$. Briefly explain why.

**Antwort:**

Eventually, $R_4$ (dam breaking) will remove all beavers from the population, making the remaining rules unusable (except for $R_5$, which can always be applied).

---

## (c2) Give two new rules $R_6$ and $\hat{R_6}$ so that any particle that occurs in $R_6$ (either as input or output of the rule) does not appear in $\hat{R_6}$ (neither as input or output of the rule) and so that both $\mathcal{R} \cup \{R_6\}$ and $\mathcal{R} \cup \{\hat{R_6}\}$, i.e., the addition of $R_6$ or $\hat{R_6}$ to $\mathcal{R}$ on their own, enable the soup from task (b) to keep on performing at least two different reactions of $\{R_1, …, R_5\}$ indefinitely. (3pts)

**Antwort:**

$$
R_6 = \emptyset \rightarrow \text{Beaver}, \quad \hat{R_6} = \text{Tree} \rightarrow \text{Dam} + \text{River}
$$

- $R_6$ fügt dem System Biber hinzu, sodass nach dem Entfernen der Biber durch $R_4$ neue Reaktionen möglich sind.
- $\hat{R_6}$ ermöglicht die Bildung von Dämmen und Flüssen, was neue Reaktionen in Gang hält.
- Das ganze muss nicht Sinn in der Realität machen

## (d) We now assume $\mathcal{X}^\dagger = \{\text{Beaver, Tree, Log, Dam, River, Lake}\} \times \mathbb{R}^2$ so that the particle (Beaver, (1.3, 3.7)) represents a beaver at the 2D coordinates (1.3, 3.7), for example. We further assume $\mathcal{R}^\dagger = \{R_1^\dagger, …, R_5^\dagger\}$ so that:

$$
\begin{aligned}
R_1^\dagger(X, Y) &= (\text{Beaver}, X) + (\text{Tree}, Y) \rightarrow (\text{Beaver}, Y) + (\text{Log}, Y) \\
R_2^\dagger(X_1, Y_1, X_2, Y_2, X_3) &= (\text{Beaver}, X) + (\text{Log}, Y_1) + (\text{Log}, Y_2) + (\text{Log}, Y_3) \rightarrow (\text{Beaver}, X) + (\text{Dam}, X) \\
R_3^\dagger(X, Y) &= (\text{Dam}, X) + (\text{River}, Y) \rightarrow (\text{Lake}, X) \\
R_4^\dagger(X, Y) &= (\text{Lake}, X) + (\text{Beaver}, Y) \rightarrow (\text{River}, X) \\
R_5^\dagger(X) &= \emptyset \rightarrow (\text{Tree}, X)
\end{aligned}
$$

for any $X, Y, Y_1, Y_2, Y_3 \in \mathbb{R}^2$.

### Task:

Give a function $A^\dagger$ so that the artificial chemistry $(\mathcal{X}^\dagger, \mathcal{R}^\dagger, A^\dagger)$ is a **topological artificial chemistry**. You can assume a given distance function $\delta : \mathbb{R}^2 \times \mathbb{R}^2 \rightarrow \mathbb{R}$ in 2D space. You can also assume that the operation $X', R \sim X, \mathcal{R}$ randomly samples a valid pair $(X', R)$ of reaction material $X' \subseteq X$ and reaction rule $R \in \mathcal{R}$ that can be applied to $X'$ from a soup $X$ and a reaction rule set $\mathcal{R}$.

$$
A^\dagger(X) =
\begin{cases}
(X', R) & \text{if for all } (x_1, p_1), (x_2, p_2) \in X', \, \delta(p_1, p_2) < 42 \\
& \text{where } X', R \sim^{*} X, \mathcal{R}, \\
() & \text{otherwise.}
\end{cases}
$$

---

### Erklärung des Ausdrucks:

Die Funktion $A^\dagger(X)$ entscheidet, ob eine Reaktion stattfinden kann, basierend auf dem **Abstand** der Teilchen in einer chemischen Suppe $X$. Die Idee ist, dass die Teilchen nicht einfach zufällig interagieren, sondern nur dann reagieren können, wenn sie **nah genug** beieinander sind.

#### Detaillierte Erklärung des Ausdrucks:

1. **$(X', R)$**:

   - $X'$ ist die Teilmenge von $X$, die die Teilchen enthält, die für die Reaktion ausgewählt wurden.
   - $R$ ist die Reaktionsregel, die auf die Teilchen in $X'$ angewendet werden soll.

2. **Bedingung für die Reaktion**:

   - Für **alle Paare von Teilchen** $(x_1, p_1), (x_2, p_2) \in X'$ muss der **Abstand** $\delta(p_1, p_2)$ zwischen ihren Positionen kleiner als 42 Einheiten sein. Die Funktion $\delta$ misst den Abstand zwischen zwei Punkten $p_1$ und $p_2$ in $\mathbb{R}^2$.
   - **Erklärung**: Diese Bedingung stellt sicher, dass die Teilchen **nahe genug** beieinander liegen, um an der Reaktion teilzunehmen. Nur wenn alle Teilchen von $X'$ diese Bedingung erfüllen, kann die Reaktion stattfinden.

3. **Zufällige Auswahl von $X'$ und $R$**:

   - Der Ausdruck "$X', R \sim^{*} X, \mathcal{R}$" bedeutet, dass die Teilchen $X'$ und die Reaktionsregel $R$ **zufällig** aus der Menge $X$ und dem Reaktionsset $\mathcal{R}$ ausgewählt werden.
   - Dies simuliert die zufällige Natur der chemischen Reaktionen, bei denen sowohl die Reaktanten (Teilchen) als auch die Reaktion zufällig bestimmt werden.

4. **Ergebnis**:
   - Wenn die Bedingung erfüllt ist (alle Teilchen liegen nahe genug beieinander), dann wird $(X', R)$ als Ergebnis zurückgegeben, was bedeutet, dass diese Reaktion stattfinden kann.
   - **Andernfalls**: Wenn die Bedingung nicht erfüllt ist (die Teilchen sind zu weit auseinander), gibt die Funktion **kein Ergebnis** zurück, und die Reaktion findet nicht statt.

---

### Zusammenfassung:

Die Funktion $A^\dagger$ prüft, ob alle Teilchen, die an einer Reaktion teilnehmen, nah genug (innerhalb von 42 Einheiten) beieinander sind. Wenn das der Fall ist, wird eine zufällige Reaktion ausgewählt und ausgeführt. Wenn die Teilchen jedoch zu weit auseinander liegen, findet keine Reaktion statt. Diese Bedingung macht die Chemie **topologisch**, da die räumliche Nähe der Teilchen entscheidend ist.

### Hier ist eine alternative Lösung in Worten und Pseudocode für die Aufgabe:

> [!tip]- Lösung in Worten oder Pseudocode
>
> ### Lösung in Worten:
>
> 1. **Teilchen in 2D-Raum**:
>
> - Die Teilchen (z.B. Biber, Baum, Damm) sind nicht nur durch ihre Art definiert, sondern auch durch ihre **Position im 2D-Raum**.
> - Beispiel: Ein Biber wird als (Beaver, (1.3, 3.7)) dargestellt, was bedeutet, dass er sich bei den Koordinaten (1.3, 3.7) befindet.
>
> 2. **Abstandsbedingung**:
>
> - Teilchen können nur dann reagieren, wenn sie **nahe genug** zueinander liegen. Der Abstand zwischen zwei Teilchen wird durch die Funktion $\delta(p_1, p_2)$ gemessen, wobei $p_1$ und $p_2$ die Positionen der beiden Teilchen im 2D-Raum sind.
> - Die Bedingung lautet: Wenn der Abstand zwischen allen Teilchen, die an der Reaktion beteiligt sind, **kleiner als 42 Einheiten** ist, kann die Reaktion stattfinden.
>
> 3. **Zufällige Auswahl von Reaktanten und Reaktionen**:
>
> - Die Funktion $A^\dagger$ wählt **zufällig** eine Teilmenge von Teilchen $X' \subseteq X$ aus, die als Reaktanten verwendet werden sollen.
> - Eine zufällige **Reaktionsregel** $R$ wird ebenfalls aus dem Reaktionsset $\mathcal{R}$ ausgewählt.
>
> 4. **Prüfung und Ergebnis**:
>
> - Die Funktion prüft, ob die Abstandsbedingung zwischen allen Teilchen in $X'$ erfüllt ist. Wenn dies der Fall ist, wird die Reaktion $(X', R)$ durchgeführt.
> - Wenn die Teilchen zu weit auseinander sind, wird keine Reaktion durchgeführt.
>
> ### Lösung in Pseudocode:
>
> ```python
> def A_dagger(X, delta):
>     # Zufällige Auswahl einer Teilmenge X' der Teilchen in X
>     X_prime = zufällig_auswählen(X)
>
>     # Zufällige Auswahl einer Reaktionsregel R aus dem Reaktionsset
>     R = zufällig_auswählen(reaktionsset)
>
>     # Prüfen, ob alle Teilchen in X_prime die Abstandsbedingung erfüllen
>     for (x1, p1) in X_prime:
>         for (x2, p2) in X_prime:
>             if delta(p1, p2) >= 42:
>                 return ()  # Bedingung nicht erfüllt, keine Reaktion
>
>     # Bedingung erfüllt, Reaktion durchführen
>     return (X_prime, R)
> ```
>
> ### Erklärung des Pseudocodes:
>
> 1. **Zufällige Auswahl**: Eine zufällige Teilmenge von Teilchen \( X' \) und eine zufällige Reaktionsregel \( R \) werden aus der chemischen Suppe \( X \) und dem Reaktionsset \(\mathcal{R}\) ausgewählt.
> 2. **Prüfen der Bedingung**: Für jedes Paar von Teilchen in \( X' \) wird der Abstand berechnet. Wenn der Abstand zwischen zwei Teilchen größer oder gleich 42 ist, wird keine Reaktion durchgeführt.
> 3. **Rückgabe**: Wenn die Bedingung erfüllt ist, wird das Paar \( (X', R) \) zurückgegeben, was bedeutet, dass die Reaktion stattfinden kann.
>
> ### Zusammenfassung:
>
> Die Funktion \( A^\dagger \) stellt sicher, dass eine Reaktion in einer **topologischen künstlichen Chemie** nur dann stattfinden kann, wenn die Teilchen nahe genug beieinander liegen. Dies wird durch eine zufällige Auswahl von Reaktanten und Reaktionen sowie eine Überprüfung der Abstandsbedingung ermöglicht.

---

# 7 Evolutionary Computing (13pts)

If necessary, you can recollect the definition for evolutionary algorithms as used in the lecture on this page.

## Algorithm 2 (typical evolutionary algorithm)

Let $E = (\mathcal{X}, \mathcal{T}, \phi, E, (X_u)_{0 \leq u \leq t})$ be a population-based optimization process.

- **Let** $\sigma^{\text{survivors}}_N, \sigma^{\text{parents}}_N : \mathcal{P}(\mathcal{X}) \to \mathcal{P}(\mathcal{X})$ be (possibly randomized or non-deterministic) selection functions that return $N \in \mathbb{N}$ individuals, i.e., $|\sigma(X)| = N$ and $\sigma(X) \subseteq X$ for all $X$. They may possibly depend on $E$ (most commonly $\phi$). Let $\rho^{\text{mutants}}_N : \mathcal{P}(\mathcal{X}) \to \mathcal{P}(\mathcal{X})$ be a special selection function that, given a population $X$, returns a random subset $X' \subseteq X$ so that $|X'| = N$. Note that $\rho(X) = X$ for all $X$.

- **Let** `mutate :` $\mathcal{X} \to \mathcal{X}$ be a (possibly randomized or non-deterministic) single-individual mutation function. We write `mutate[] :` $\mathcal{P}(\mathcal{X}) \to \mathcal{P}(\mathcal{X})$ for the per-individual application of `mutate`, i.e., `mutate[X] = \{ \text{mutate}(x) : x \in X \}`.

- **Let** `recombine :` $\mathcal{X} \times \mathcal{X} \to \mathcal{X}$ be a (possibly randomized or non-deterministic) two-parent recombination function. We write `recombine[] :` $\mathcal{P}(\mathcal{X}) \to \mathcal{P}(\mathcal{X})$ for the random-pairing application of `recombine`, i.e., `recombine[X] = \{ \text{recombine}(x_1, x_2) \} \text{ where } x_1, x_2 \sim X \text{ and recombine}(x) = \emptyset \text{ for all } x \text{ as well as recombine}[\emptyset] = \emptyset`.

- **Let** `migrate :` $\emptyset \to \mathcal{X}$ be a (possibly randomized or non-deterministic) individual creation function. We write `migrate_N :` $\emptyset \to \mathcal{P}(\mathcal{X})$ with $N \in \mathbb{N}$ for the iterated application of `migrate`, i.e., `migrate_N() = \{ \text{migrate}() \} \cup \text{migrate}_{N-1}()` with `migrate_0 = \emptyset`.

The process $E$ continues via an evolutionary algorithm if $E$ has the form:

$$
E((X_u)_{0 \leq u \leq t}, \phi) = X_{t+1} = \sigma^{\text{survivors}}_{|\mathcal{X}_t|}
\left(
X_t \cup
\text{mutate}[\rho^{\text{mutants}}_M(X_t)] \cup
\text{recombine}[\sigma^{\text{parents}}_{2C}(X_t)] \cup
\text{migrate}_H()
\right)
$$

where $M \in \mathbb{N}$ is the number of mutants produced per generation, $C \in \mathbb{N}$ is the number of children produced per generation, and $H \in \mathbb{N}$ is the number of migrants (sometimes called hypermutants) generated per generation. Especially $M$ is often expressed as a rate for random choice within the population, i.e., $M = \lceil m \cdot |\mathcal{X}_t| \rceil$ where $m \in \mathbb{R}$ is called mutation rate.

---

## (a) Assume you are using an evolutionary algorithm to come up with the answers for this exam. To this end, you are searching the space of all strings but you use a spell checker to convert all words occurring in your arbitrary strings to the closest valid word in the English dictionary. To grade your exam, we assign your solution a number of missing points between 90 and 0. While your algorithm surely wants to minimize the missing points, your overall goal is to minimize the grade you receive (between 1.0 and 4.0). **In this scenario, describe what your target function, fitness function, genotype, and phenotype are. How is the relation between your target function and your fitness function and why is it good or bad to use two separate functions here? (4pts)**

### Lösung:

- **Genotype**: arbitrary string
- **Phenotype**: spell-checked string
- **Fitness function**: missing points (the number of points you missed, between 0 and 90)
- **Target function**: grade (between 1.0 and 4.0, which you want to minimize)

### Erklärung:

- **Genotype**: Repräsentiert eine beliebige Zeichenfolge, die die grundlegenden Daten des Individuums enthält.
- **Phenotype**: Ist das Resultat, nachdem die Rechtschreibprüfung auf den Genotyp angewendet wurde, um eine gültige Zeichenfolge zu erhalten.
- **Fitnessfunktion**: Misst, wie viele Fehlerpunkte fehlen (zwischen 0 und 90).
- **Ziel- oder Targetfunktion**: Die Note (zwischen 1.0 und 4.0), die du minimieren willst.

Die **Fitnessfunktion** gibt kontinuierliches Feedback und ist "glatter", was es einfacher macht, eine Lösung zu finden. Die **Ziel- oder Targetfunktion** ist diskreter (mit festen Werten), und es ist gut, eine separate Fitnessfunktion zu haben, die feiner abgestimmt ist.

---

## Warum meine Lösung falsch war:

- **Genotype**: `{1.0, 1.3, 1.7…}` war falsch. Der Genotyp ist kein Zahlenwert, sondern eine **beliebige Zeichenfolge**. Die Optimierung sucht nach Text, nicht nach Zahlen.
- **Phenotype**: `1.0` war falsch. Der Phänotyp ist kein Zahlenwert, sondern die **erzeugte Zeichenfolge** nach der Rechtschreibprüfung. Du optimierst Text und erhältst einen **validen Text** als Phänotyp, nicht eine Note direkt.

---

## (b) **We assume an evolutionary algorithm implemented in Python is optimizing individuals that are simply lists of four integers. Note that the Python function `random.random()` returns a random float between 0.0 and 1.0. Consider the following snippet of Python code.**

### Code-Analyse:

```python
import random

def unknown_operator(individual_a, individual_b):
    new_individual = []
    for i, value_a in enumerate(individual_a):
        value_b = individual_b[i]
        if random.random() < 0.5:
            new_individual.append(value_a)
        else:
            new_individual.append(value_b)
    return new_individual

print(unknown_operator([0, 0, 0, 1], [1, 0, 0, 0]))
```

### Funktionsweise des Codes:

1. **Zufallswert-Generierung**:

   - Der Code verwendet die Funktion `random.random()`, die einen zufälligen Float zwischen 0.0 und 1.0 zurückgibt. Diese Zufallswerte bestimmen, von welchem Elternteil das jeweilige Gen (Wert) in das neue Individuum übernommen wird.

2. **Durchlaufen der Gene**:

   - Die Funktion `unknown_operator` nimmt zwei Eltern-Individuen (`individual_a` und `individual_b`) entgegen, die Listen von vier Ganzzahlen sind. Die Funktion iteriert über die Indizes und Werte von `individual_a` mithilfe von `enumerate`.

3. **Gene-Kombination**:
   - Für jede Position in der Liste entscheidet die Funktion basierend auf dem Zufallswert:
     - Wenn der Wert kleiner als 0.5 ist, wird das Gen von `individual_a` (`value_a`) in `new_individual` aufgenommen.
     - Andernfalls wird das Gen von `individual_b` (`value_b`) verwendet.

### Mögliche Ausgaben:

Die Funktion kann die folgenden Kombinationen zurückgeben, abhängig von den generierten Zufallswerten:

- `[0, 0, 0, 1]`: Alle Gene stammen von `individual_a`.
- `[0, 0, 0, 0]`: Das vierte Gen stammt von `individual_b`, die ersten drei von `individual_a`.
- `[1, 0, 0, 0]`: Das erste Gen stammt von `individual_b`, die letzten drei von `individual_a`.
- `[1, 0, 0, 1]`: Das erste Gen stammt von `individual_b`, das vierte von `individual_a`, die zweiten und dritten von `individual_a`.

### Erklärung der Lösung:

- **Kombination der Eltern**: Der Code implementiert eine Zwei-Eltern-Kombination, bei der das neue Individuum nur aus den Werten der beiden gegebenen Eltern erstellt wird. Die Gene werden nicht basierend auf einer vollständigen Bit-Kombination (von `0000` bis `1111`) erstellt, sondern sind das Ergebnis einer selektiven Rekombination der beiden Eltern-Individuen.
- **Korrektur der Sichtweise**: Meine vorherige Lösung war falsch, da ich alle möglichen Kombinationen von `0000` bis `1111` aufgelistet hast. Es ist wichtig zu beachten, dass die Ausgaben des Codes ausschließlich von den Werten in den Eltern-Individuen abhängen. Nur Kombinationen der Werte `[0, 0, 0, 1]` und `[1, 0, 0, 0]` sind zulässig.

### Fazit:

Die Funktion `unknown_operator` erzeugt durch die zufällige Auswahl von Werten aus zwei Eltern-Individuen eine neue Individuenliste. Dies zeigt, wie Rekombination in evolutionären Algorithmen funktioniert, indem sie gezielt Merkmale von bestehenden Lösungen kombiniert, um neue potenzielle Lösungen zu schaffen.

## (c) We still consider an evolutionary algorithm optimizing individuals $x$ that are lists of four integers, i.e., $x \in \mathbb{N}^4$. In a suitable formalism (Python, pseudo-code, mathematics, …) give a viable mutation function for these kinds of individuals. Said mutation function must be able to reach any arbitrary individual in the state space — when given any arbitrary individual as a starting point and infinite time — but should also not change the mutated individual completely. (4pts)

```python
def mutate(individual):
    # Wähle einen zufälligen Index in der Liste
    index = round(random.random() * len(individual))

    # Entscheide zufällig, ob der Wert an diesem Index erhöht oder verringert wird
    if random.random() < 0.5:
        individual[index] += 1  # Erhöhe den Wert an dem ausgewählten Index
    else:
        individual[index] -= 1  # Verringere den Wert an dem ausgewählten Index

    return individual

```

### Erklärung:

Die Mutation in einem evolutionären Algorithmus soll kleine, zufällige Veränderungen in den Individuen bewirken, um neue mögliche Lösungen zu erzeugen. Diese Mutation muss in der Lage sein, **jeden möglichen Zustand** im Suchraum zu erreichen, sollte aber auch nicht die Struktur des Individuums vollständig verändern.

- **Index auswählen**: Zuerst wird eine zufällige Position im Individuum ausgewählt (`index`), an der die Mutation durchgeführt wird. Dies wird durch `random.random()` und `round()` erreicht, um eine Zufallszahl zwischen 0 und der Länge des Individuums zu erzeugen.
- **Wert ändern**: Danach entscheidet ein weiterer Zufallswert (`random.random() < 0.5`), ob der Wert an der ausgewählten Position um 1 erhöht oder um 1 verringert wird. Dies sorgt für eine kleine, aber zufällige Änderung am Individuum.
- **Viabilität**: Durch dieses Vorgehen können theoretisch alle möglichen Individuen im Suchraum erreicht werden (infinite time), aber die Mutation ändert immer nur einen kleinen Teil des Individuums, sodass die Struktur nicht völlig zerstört wird.

### Beispiel-Durchlauf:

Angenommen, das Ausgangsindividuum ist:

```python
individual = [2, 5, 3, 7]
```

#### Schritt 1: Wähle einen zufälligen Index

Ein Zufallswert wird generiert, um den Index zu bestimmen. Angenommen, `random.random()` gibt `0.6` zurück. Da die Länge des Individuums 4 ist:

```python
index = round(0.6 * 4)  # round(2.4) = 2
```

Der zufällig ausgewählte Index ist also `2`, was bedeutet, dass die Position `3` im Individuum (`3`) verändert wird.

#### Schritt 2: Wert ändern

Ein weiterer Zufallswert entscheidet, ob der Wert an der ausgewählten Position um 1 erhöht oder verringert wird. Angenommen, `random.random()` ergibt `0.3`:

```python
if random.random() < 0.5:
    individual[2] += 1  # individual[2] war 3, wird nun 4
```

Der Wert an der Position 2 wird um 1 erhöht.

#### Endergebnis:

Das mutierte Individuum ist nun:

```python
individual = [2, 5, 4, 7]
```

### Zusammenfassung:

- Das Ausgangsindividuum war `[2, 5, 3, 7]`.
- Der Zufallsindex, an dem die Mutation stattfand, war `2`.
- Der Wert an dieser Position wurde um 1 erhöht.
- Das mutierte Individuum ist nun `[2, 5, 4, 7]`.

Die Mutation sorgt dafür, dass nur kleine Änderungen vorgenommen werden, die das Individuum nicht komplett verändern, aber im Laufe der Zeit theoretisch alle möglichen Zustände erreichen können.

## (d) What is a memetic algorithm and how does it deviate from the standard evolutionary algorithm? When might it be advantageous to use one? (2pts)

### Lösung:

A **memetic algorithm** uses a second evolution, most commonly to adjust hyperparameters of the first evolution. That might be advantageous when the target function might change unexpectedly, for example.

---

### Erklärung:

Ein **memetischer Algorithmus** kombiniert die Idee der klassischen evolutionären Algorithmen mit einer zusätzlichen lokalen Optimierung. Nach dem Standardprozess der Selektion, Mutation und Rekombination wird eine **lokale Optimierung** auf die erzeugten Individuen angewendet, um die Ergebnisse weiter zu verbessern.

- **Abweichung von Standard-Evolution**: In einem klassischen evolutionären Algorithmus erfolgt keine lokale Optimierung. Ein memetischer Algorithmus führt jedoch eine zusätzliche, oft deterministische Optimierung nach jedem Schritt der Evolution durch.
- **Vorteile**: Memetische Algorithmen sind besonders nützlich, wenn die **Zielfunktion komplex** ist oder sich während des Optimierungsprozesses ändern kann. Dadurch kann der Algorithmus schneller zu einer besseren Lösung finden, da lokale Verbesserungen parallel zur evolutionären Suche erfolgen.

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
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
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
