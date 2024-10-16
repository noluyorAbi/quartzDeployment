---
date created: Wednesday, 16. October 2024, 02:16
date modified: Wednesday, 16. October 2024, 14:13
---

# 4 (Population-Based) Optimization (14pts)

## Einleitung:

Diese Aufgabe befasst sich mit **population-basierter Optimierung**. Es wird eine spezielle Art der Optimierung vorgestellt, die als **simplified firefly optimization** (vereinfachte Glühwürmchen-Optimierung) bekannt ist. Im Folgenden werden die Definitionen erklärt, bevor konkrete Fragen dazu beantwortet werden.

---

## Definition 6 (Optimization (shortened)):

Sei $\mathcal{X}$ ein beliebiger Zustandsraum und $T$ eine Zielmenge mit totaler Ordnung $\leq$. Eine totale Funktion $\tau : \mathcal{X} \to T$ wird als **target function** bezeichnet. Optimierung (Minimierung/Maximierung) bedeutet, nach einem $x \in \mathcal{X}$ zu suchen, sodass $\tau(x)$ optimal (minimal/maximal) ist. Wenn nichts anderes angegeben ist, wird von einer Minimierung ausgegangen.

Ein Optimierungslauf der Länge $g+1$ ist eine Sequenz von Zuständen $(x_t)_{0 \leq t \leq g}$, wobei $x_t \in \mathcal{X}$ für alle $t$ ist.

Sei $E : \mathcal{X} \times (\mathcal{X} \to T) \to \mathcal{X}$ eine möglicherweise randomisierte oder nicht-deterministische Funktion, sodass der Optimierungslauf $(x_t)_{0 \leq t \leq g}$ durch wiederholtes Anwenden von $E$ aufgerufen wird:

$$
x_{t+1} = E((x_u)_{0 \leq u \leq t}, \tau) \quad \text{für alle } t, \, 1 \leq t \leq g,
$$

wobei $x_0$ extern gegeben ist (z.B. $x_0 = \text{def} 42$) oder zufällig ausgewählt wird (z.B. $x_0 \sim \mathcal{X}$). Ein Optimierungsprozess ist das Tupel $(\mathcal{X}, T, \tau, E, (x_t)_{0 \leq t \leq g})$.

---

## Definition 7 (Population-based optimization):

Sei $\mathcal{X}$ ein Zustandsraum. Sei $T$ eine Zielmenge mit totaler Ordnung $\leq$. Sei $\tau : \mathcal{X} \to T$ eine Ziel-Funktion. Ein Tupel $E = (\mathcal{X}, T, \tau, E, (X_t)_{0 \leq t \leq g})$ ist ein population-basierter Optimierungsprozess, wenn $X_t \subseteq \mathcal{P}(\mathcal{X})$ eine Population von $N$ Individuen ist und $E : \mathcal{P}(\mathcal{X})^g \times (\mathcal{X} \to T) \to \mathcal{P}(\mathcal{X})$ eine möglicherweise randomisierte, nicht-deterministische oder weiter parametrisierte Funktion ist, sodass der Optimierungsprozess $E$ durch wiederholtes Aufrufen von $E$ ausgeführt wird:

$$
X_{t+1} = E((X_u)_{0 \leq u \leq t}, \tau)
$$

wobei $X_0$ extern gegeben ist oder zufällig ausgewählt wird.

---

## Algorithm 1 (Simplified Firefly Optimization):

Die **vereinfachte Glühwürmchen-Optimierung** basiert auf der Beobachtung, dass Glühwürmchen vom Licht anderer Glühwürmchen angezogen werden. Hierbei bedeutet ein stärkeres Licht, dass ein Glühwürmchen eine bessere Fitness oder Qualität hat. Glühwürmchen bewegen sich also in Richtung der "helleren" Glühwürmchen, um bessere Lösungen zu finden.

### Algorithmus:

Sei $E = (\mathcal{X}, T, \tau, E, (X_t)_{0 \leq t \leq g})$ ein population-basierter Optimierungsprozess. Wir nehmen an $\mathcal{X} = [-10, 10] \subseteq \mathbb{R}$ und $T = [0, 100] \subseteq \mathbb{R}$ für die Minimierung. Für $x \notin [-10, 10]$ nehmen wir an, dass $\tau(x) = \infty$ ist. Der Prozess $E$ folgt der vereinfachten Glühwürmchen-Optimierung, wenn $E$ definiert ist als:

$$
E((X_t)_{0 \leq t \leq g}) = X_{t+1} = \{x_t + \beta \cdot (x^*_t - x_t) : x_t \in X_t \text{ mit } \tau(x_t) > \tau(x^*_t) \} \cup \{x_t : \tau(x_t) \leq \tau(x^*_t) \}
$$

wobei $X_t = \{x_t^i\}_{i=1}^n$ die Positionen von $n$ Glühwürmchen zur Zeit $t$ sind, $\beta$ ein fixer Schrittweitenparameter ($\beta \in (0,1] \subset \mathbb{R}$), und $x_t^*$ das beste Individuum zur Zeit $t$ ist, d.h.:

$$
x_t^* = \arg\min_{x \in X_t} \tau(x)
$$

---

## (a) Erklärung:

**Frage:** Algorithm 1 basiert auf der Beobachtung, dass Glühwürmchen vom Licht anderer Glühwürmchen angezogen werden. Es wird angenommen, dass Glühwürmchen sich stärker in Richtung der helleren Glühwürmchen bewegen. Wie wird dieses Verhalten im Algorithmus dargestellt und welcher Wert im Algorithmus entspricht (vielleicht umgekehrt) der Lichtintensität? (4pts)

### Antwort:

Die Anziehung zu stärkerem Licht wird durch den **Positions-Update-Term** dargestellt:

$$
x_t^i \leftarrow x_t^i + \beta \cdot (x_t^* - x_t^i)
$$

Hierbei wird die Stärke durch den Parameter $\beta$ reguliert. Die Lichtintensität ist dabei **umgekehrt proportional** zum Zielwert $\tau$, d.h. Glühwürmchen bewegen sich in Richtung niedrigerer $\tau$-Werte, weil **niedrigere $\tau$-Werte** (bei einem Minimierungsproblem) eine bessere Fitness darstellen, was gleichbedeutend mit einer höheren Lichtintensität ist.

---

## (b) Berechnung der Firefly Optimierung:

**Frage:** Sei die Ziel-Funktion $\tau(x) = (x - 2)^2$. Angenommen, wir haben die Startpositionen $X_0 = \{0, 4, 6\}$ und den Schrittweitenparameter $\beta = 0.5$. Führe die **simplified firefly optimization** für zwei Zeitschritte aus (d.h. berechne $X_1$ und $X_2$). Gib das globale Optimum von $\tau$ an und ob es innerhalb von zwei Optimierungsschritten erreicht wird. (10pts)

### Berechnung:

1. **Startpositionen $X_0$**:

   - Firefly 1: $x_1 = 0$ mit $\tau(x_1) = (0 - 2)^2 = 4$
   - Firefly 2: $x_2 = 4$ mit $\tau(x_2) = (4 - 2)^2 = 4$
   - Firefly 3: $x_3 = 6$ mit $\tau(x_3) = (6 - 2)^2 = 16$

2. **Wähle das beste Glühwürmchen**:
   Das beste Glühwürmchen $x_1^* = x_1 = 0$, da $\tau(x_1) = 4$ der niedrigste Wert ist.

### Schritt 1 (Berechnung von $X_1$):

- **Firefly 1 und Firefly 2** bleiben an ihren Positionen, da $\tau(x_1) = \tau(x_2) = 4$.
- **Firefly 3** bewegt sich in Richtung Firefly 1:
  $$
  x_3 \leftarrow x_3 + \beta \cdot (x_1 - x_3) = 6 + 0.5 \cdot (0 - 6) = 3
  $$

**Neue Positionen $X_1$**: $X_1 = \{0, 4, 3\}$

### Schritt 2 (Berechnung von $X_2$):

- **Firefly 1** bewegt sich in Richtung Firefly 3:
  $$
  x_1 \leftarrow x_1 + \beta \cdot (x_3 - x_1) = 0 + 0.5 \cdot (3 - 0) = 1.5
  $$
- **Firefly 2** bewegt sich in Richtung Firefly 3:
  $$ x_2 \leftarrow x_2 + \beta \cdot (x_3 - x_2) = 4 + 0

\cdot (3 - 4) = 3.5 $$

- **Firefly 3** bleibt an seiner Position, da $\tau(x_3) = 1$ der beste Wert ist.

**Neue Positionen $X_2$**: $X_2 = \{1.5, 3.5, 3\}$

### Ergebnis:

Das globale Optimum $\tau(x^*) = 0$ wird für $x^* = 2$ erreicht. Allerdings erreichen wir dieses Optimum nicht innerhalb der zwei Optimierungsschritte. Der beste Wert nach zwei Schritten ist $\tau(x_3) = 1$ bei $x_3 = 3$.

---

### Erklärung der Schritte:

1. **Startpositionen**: Zunächst werden die Startpositionen der Glühwürmchen berechnet und ihre Fitness-Werte basierend auf der Ziel-Funktion $\tau(x) = (x - 2)^2$ bestimmt.
2. **Wähle das beste Glühwürmchen**: Das Glühwürmchen mit dem niedrigsten Fitness-Wert wird als das beste Glühwürmchen gewählt. Dies ist das Glühwürmchen, zu dem sich alle anderen Glühwürmchen bewegen.
3. **Positionsupdate**: Jedes Glühwürmchen, das nicht das beste ist, bewegt sich in Richtung des besten Glühwürmchens basierend auf der Formel für das Positionsupdate.
4. **Zweite Iteration**: Der Prozess wird wiederholt, und das Ergebnis wird erneut berechnet.

Zusammenfassend zeigt diese Simulation, dass das globale Optimum nicht innerhalb von zwei Optimierungsschritten erreicht wurde, aber die Glühwürmchen haben sich dem Optimum angenähert.

---

# 6 Evolutionary Computing (12pts)

In dieser Aufgabe betrachten wir ein evolutionäres Optimierungsproblem. Wir verwenden ein parallelogrammförmiges Gehege für Emus, das mithilfe eines evolutionären Algorithmus optimiert werden soll. Zuerst betrachten wir die Definition eines population-basierten Optimierungsalgorithmus und gehen dann zu einer speziellen Optimierungsaufgabe über.

---

## Algorithm 2 (typical evolutionary algorithm):

Ein **evolutionärer Algorithmus** ist ein population-basierter Optimierungsprozess. Gegeben sei $E = (\mathcal{X}, T, \phi, E, (X_u)_{0 \leq u \leq t})$ als population-based optimization process. Dieser Prozess verwendet folgende Operatoren:

- **Selection**: Es gibt zwei Selektionsfunktionen:
  - $\sigma^{\text{survivors}}_N$: Wählt $N$ Individuen aus, die überleben.
  - $\sigma^{\text{parents}}_N$: Wählt $N$ Eltern-Individuen aus, die für die Rekombination verwendet werden.
- **Mutation**: Die Mutationsfunktion verändert ein Individuum zufällig.
- **Recombination**: Kombiniert zwei Eltern-Individuen, um ein neues Kind-Individuum zu erzeugen.
- **Migration**: Ein optionaler Schritt, bei dem neue Individuen zur Population hinzugefügt werden.

Der Prozess $E$ setzt sich durch eine **typische evolutionäre Optimierung** fort, wenn $E$ definiert ist als:

$$
E((X_u)_{0 \leq u \leq t}, \phi) = X_{t+1} = \sigma^{\text{survivors}}_N(X_t)
\cup \text{mutate}^\rho_M(\text{recombine}^{\sigma^{\text{parents}}_2C}(X_t))
\cup \text{migrate}^N(),
$$

wobei $M$ die Anzahl der Mutanten, $C$ die Anzahl der Kinder und $H$ die Anzahl der Migranten in jeder Generation ist.

---

## Aufgabenbeschreibung:

Wir starten einen Emu-Farm. Unsere Zoologen haben herausgefunden, dass Emus es vorziehen, in parallelogrammförmigen Gehegen zu leben. Wir haben 1000 Zaunstücke zur Verfügung, um ein ideales Parallelogramm zu bauen. Unser Ziel ist es, ein parallelogrammförmiges Gehege zu entwerfen, das sowohl das Vorliebenmodell der Emus als auch die physischen Einschränkungen berücksichtigt (z.B. die Anzahl der verfügbaren Zaunstücke).

Unsere Zoologen haben uns eine Funktion $\mu$ bereitgestellt, die die Emu-Präferenz für ein bestimmtes Parallelogramm berechnet:

$$
\mu : \mathbb{N} \times \mathbb{N} \times \mathbb{A} \to \mathbb{M}
$$

- $l$: Die Länge einer Seite des Parallelogramms in Zaunstücken.
- $m$: Die Länge der anderen Seite des Parallelogramms in Zaunstücken.
- $\alpha$: Der Winkel zwischen den Seiten (in Grad).
- $\mu(l, m, \alpha)$ gibt die Zufriedenheit der Emus in diesem Gehege an.

---

## (a) Target function:

**Frage:** Gib eine totale Ziel-Funktion $\tau : \mathbb{Z} \times \mathbb{Z} \times \mathbb{A} \to \mathbb{R}$ an, die die Präferenz der Emus maximiert, aber gleichzeitig Lösungen bestraft, die nicht genug Zaunstücke verwenden, um ein gültiges Parallelogramm zu bauen. Gib an, ob $\tau$ maximiert oder minimiert wird. (6pts)

### Lösung:

Um ein gültiges Parallelogramm zu bauen, müssen die Längen $l$, $m$ und der Winkel $\alpha$ bestimmten Bedingungen entsprechen. Die Gesamtanzahl der Zaunstücke darf maximal 1000 betragen. Die Ziel-Funktion $\tau$ maximiert die Präferenz der Emus, bestraft aber ungültige Konfigurationen durch negative Werte:

$$
\tau(l, m, \alpha) =
\begin{cases}
\mu(l, m, \alpha) & \text{wenn } l \geq 1 \land m \geq 1 \land 2l + 2m \leq 1000, \\
-\infty & \text{sonst}.
\end{cases}
$$

- Die Bedingung $2l + 2m \leq 1000$ stellt sicher, dass das Parallelogramm innerhalb der verfügbaren Zaunstücke gebaut wird.
- Wenn diese Bedingung erfüllt ist, maximieren wir $\mu(l, m, \alpha)$, die Emu-Präferenz.
- Wenn die Bedingung nicht erfüllt ist, wird $\tau = -\infty$ gesetzt, um diese Lösung unbrauchbar zu machen.

**Interpretation:**

- Die Funktion $\tau$ wird maximiert, da wir die Emu-Präferenz maximieren wollen.
- Wenn ein Parallelogramm mit gültigen Maßen gebaut werden kann, maximieren wir $\mu$.
- Wenn die Lösung ungültig ist, wird sie durch $-\infty$ bestraft.

---

## (b) Beautiful recombination function:

**Frage:** Gib eine "schöne" Rekombinationsfunktion an, die auf zwei Lösungskandidaten $x_1, x_2 \in \mathcal{X}$ aufgerufen werden kann und die folgenden Eigenschaften besitzt: (6pts)

1. Das erzeugte Kind enthält Informationen von beiden Eltern.
2. Jede Information im Kind hat die gleiche Chance, von einem der beiden Elternteile zu stammen.
3. Wenn beide Eltern gültige Parallelogramme darstellen, dann ist auch das Kind ein gültiges Parallelogramm.

### Lösung:

Die Rekombination kombiniert die Seitenlängen $l$ und $m$ sowie den Winkel $\alpha$ der beiden Eltern zufällig, um ein Kind zu erzeugen, das gültig bleibt, wenn die Eltern gültige Parallelogramme darstellen.

$$
\text{recombine}((l_1, m_1, \alpha_1), (l_2, m_2, \alpha_2)) = (l, m, \alpha)
$$

wobei:

- $i \sim \{1, 2\}, j \sim \{1, 2\} \setminus \{i\}$,
- $l = l_i$, $m = m_j$, $\alpha = \alpha_j$.

**Interpretation:**

- Die Seitenlängen $l$ und $m$ sowie der Winkel $\alpha$ werden zufällig aus den beiden Eltern gewählt, sodass jede Eigenschaft die gleiche Wahrscheinlichkeit hat, von einem der Eltern zu stammen.
- Wenn beide Eltern valide Parallelogramme darstellen (d.h. sie verwenden insgesamt nicht mehr als 1000 Zaunstücke), dann bleibt auch das Kind ein valides Parallelogramm.

**Warum ist diese Rekombination "schön"?**

1. **Elterninformationen:** Das Kind enthält Informationen von beiden Eltern, da $l$, $m$ und $\alpha$ aus verschiedenen Elternteilen zufällig ausgewählt werden.
2. **Zufälligkeit:** Jede Eigenschaft des Kindes hat die gleiche Chance, von einem der Eltern zu stammen, da $l$, $m$ und $\alpha$ zufällig von den Eltern übernommen werden.
3. **Gültigkeit:** Wenn beide Eltern valide Parallelogramme darstellen, bleibt auch das Kind ein valides Parallelogramm, da die Rekombination sicherstellt, dass die Seitenlängen und der Winkel von den Eltern übernommen werden.

### Zusammenfassung:

Diese Aufgabe behandelt den Aufbau eines parallelogrammförmigen Geheges für Emus mithilfe eines evolutionären Algorithmus. Die Ziel-Funktion $\tau$ maximiert die Zufriedenheit der Emus, während sie gleichzeitig Lösungen bestraft, die nicht die richtige Anzahl an Zaunstücken verwenden. Die Rekombinationsfunktion kombiniert Eigenschaften der Eltern, um sicherzustellen, dass das Kind sowohl valide als auch eine Mischung aus den Elterninformationen ist.

---

# 7 Mix-Up: Optimization for Soups (8pts)

Diese Aufgabe behandelt die Optimierung einer **Suppe** mithilfe eines simulierten Annealing-Algorithmus. Wir betrachten eine Situation, in der ein optimaler Zustand für die Suppe gefunden werden muss, und verwenden dazu das Konzept der Nachbarschaftsfunktion und eines simulierten Abkühlungsprozesses.

---

## Algorithm 3 (Simulated Annealing):

Ein Simulated Annealing (SA) Algorithmus wird verwendet, um Optimierungsprobleme zu lösen. Gegeben sei $D = (\mathcal{X}, T, \tau, E, (x_u)_{0 \leq u \leq t})$ als Optimierungsprozess. Wir definieren die Nachbarschaft $neighbors : \mathcal{X} \to \mathcal{P}(\mathcal{X})$, die eine Menge von Nachbarn eines Zustands $x \in \mathcal{X}$ liefert.

Zusätzlich wird eine Temperaturfunktion $k : \mathbb{N} \to \mathbb{R}$ eingeführt, die die Temperatur für jeden Zeitschritt bestimmt. Eine Funktion $A : T \times T \times \mathbb{R} \to [0, 1]$ liefert die **Akzeptanzwahrscheinlichkeit**, gegeben durch zwei Zielwerte und eine Temperatur. Typischerweise verwenden wir:

$$
A(Q(x), Q(x'), k(t)) = e^{-\frac{Q(x') - Q(x)}{k(t)}}
$$

wobei $T \in \mathbb{R}$ die Temperatur ist. Der Prozess setzt sich mittels Simulated Annealing fort, wenn $E$ definiert ist als:

$$
x_{t+1} =
\begin{cases}
x_t' & \text{wenn } \tau(x_t') \leq \tau(x_t) \text{ oder } \tau(x_t') > \tau(x_t) \text{ und } r \leq A(\tau(x_t), \tau(x_t'), k(t)), \\
x_t & \text{sonst}.
\end{cases}
$$

wobei $x_t' \sim neighbors(x_t)$ zufällig ausgewählt wird und $r \sim P$ zufällig für jeden Aufruf von $E$ gezogen wird.

---

## (a) Aufgabe:

Gegeben ist die Suppe $\mathcal{C}' = (\mathcal{X}', \mathcal{R}', A')$ aus Aufgabe 5b. Für eine Australien-Ausstellung in unserem Zoo möchten wir einen optimalen Anfangszustand $X_0^t$ der Suppe wählen, sodass alle Aspekte der australischen Tierwelt (wie durch $\mathcal{C}'$ definiert) gezeigt werden können. Die Präferenzen für die Ausstellung sind in einer Ziel-Funktion $\tau : \mathcal{X}'^t \to \mathbb{R}$ kodiert, die minimiert werden soll.

### Lösung:

Um minimale Lösungen für $\tau^t$ zu finden, möchten wir einen Optimierungsprozess $A = (\mathcal{X}', R', \tau^t, E, (x_t)_{0 \leq t \leq g})$ verwenden, der mittels Simulated Annealing fortgesetzt wird. Wir geben den Zustandsraum $\mathcal{X}'$ für das Simulated Annealing und eine geeignete Funktion $neighbors$ an, sodass $A$ potenziell jeden möglichen Anfangszustand der Suppe aus jedem Anfangssuppenkandidaten erreichen kann, mit der richtigen Anzahl an Iterationen und Wahl der Parameter.

$$
\mathcal{X}' = \mathcal{P}(\mathcal{X})
$$

Die Nachbarschaftsfunktion ist definiert als:

$$
neighbors(X) = \{X \setminus \{x\} : x \in X \}
\cup \{X \cup \{x\} : x \in \mathcal{X} \}
\cup \{X \cup \{kangaroo(x)\} : x \in \mathcal{X}\}
$$

**Erklärung:**

- Die Nachbarschaftsfunktion $neighbors(X)$ enthält drei Möglichkeiten:
  - Entfernen eines Elements $x$ aus $X$: Dies hilft, Kandidatenlösungen zu reduzieren.
  - Hinzufügen eines Elements $x$ zu $X$: Dies hilft, neue Elemente in die Lösung aufzunehmen.
  - Hinzufügen eines "Kängurus" zur Suppe (rekursives Hinzufügen von Varianten): Dies fügt speziell australische Tiere hinzu, die für das Szenario von Bedeutung sind.

Diese Nachbarschaftsfunktion erlaubt es uns, über genügend Iterationen jeden möglichen Zustand zu erreichen, indem Elemente hinzugefügt oder entfernt werden.

---

## (b) Nachbarschaftsfunktion und Komplexität:

**Frage:** Erkläre kurz, warum es viel komplexer ist, eine einfach ausführbare Nachbarschaftsfunktion für Suppen im künstlichen Chemieprozess $\mathcal{C}'$ aus Aufgabe 5b zu geben, als für die Suppen im künstlichen Chemieprozess $\mathcal{C}$ aus Aufgabe 5a. (2pts)

### Lösung:

Der Zustandsraum $\mathcal{X}'$ ist **unendlich**, daher ist das Sampling daraus (wie es im Simulated Annealing notwendig ist) nicht praktikabel oder sehr ineffizient (es würde beispielsweise viele Varianten von rekursiven Kängurus erzeugen). Im Vergleich dazu ist $\mathcal{X}$ ein sehr kleiner, endlicher Zustandsraum, was das Sampling und die Anwendung der Nachbarschaftsfunktion viel einfacher und schneller macht.

---

## Zusammenfassung:

- In Teil (a) haben wir eine Nachbarschaftsfunktion definiert, die es ermöglicht, im Zustandsraum zu navigieren und potenziell jeden möglichen Suppenzustand zu erreichen.
- In Teil (b) wurde die Komplexität des künstlichen Chemieprozesses $\mathcal{C}'$ im Vergleich zu $\mathcal{C}$ erläutert. Der unendliche Zustandsraum von $\mathcal{X}'$ erschwert die einfache Anwendung der Nachbarschaftsfunktion, während $\mathcal{X}$ durch seine Endlichkeit wesentlich einfacher zu handhaben ist.

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
