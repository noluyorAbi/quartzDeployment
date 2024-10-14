---
date created: Tuesday, 15. October 2024, 00:16
date modified: Tuesday, 15. October 2024, 00:27
---

# Natural Computing - Important Terms (English & German)

## 1. Optimization Algorithms

### Elitist

**English**:

- **Definition**: An **elitist** algorithm always keeps the best-found candidate in the next generation. This guarantees that the best solution is preserved, which can lead to faster convergence.

**Deutsch**:

- **Definition**: Ein **elitistischer** Algorithmus behält den besten gefundenen Kandidaten immer in der nächsten Generation bei. Dadurch wird garantiert, dass die beste Lösung erhalten bleibt, was eine schnellere Konvergenz ermöglicht.

---

### Greedy

**English**:

- **Definition**: A **greedy** algorithm chooses the best local solution at each step without considering long-term consequences. This can lead to quick results but not necessarily the best global solution.

**Deutsch**:

- **Definition**: Ein **gieriger** Algorithmus wählt bei jedem Schritt die beste lokale Lösung, ohne langfristige Konsequenzen zu berücksichtigen. Dies kann zu schnellen Ergebnissen führen, aber nicht immer zur besten globalen Lösung.

---

### Diversity

**English**:

- **Definition**: **Diversity** refers to the variety within the population of an evolutionary algorithm. Higher diversity helps explore the search space more broadly and prevents getting stuck in local optima.

**Deutsch**:

- **Definition**: **Diversity** bezeichnet die Vielfalt innerhalb der Population eines evolutionären Algorithmus. Eine höhere Vielfalt hilft, den Suchraum breiter zu erkunden und das Steckenbleiben in lokalen Optima zu verhindern.

---

### Convergence

**English**:

- **Definition**: **Convergence** happens when the population in an evolutionary search begins to produce similar solutions, leading to stagnation in improvement.

**Deutsch**:

- **Definition**: **Konvergenz** tritt auf, wenn die Population in einer evolutionären Suche zunehmend ähnliche Lösungen entwickelt, was zu einer Stagnation der Verbesserung führen kann.

---

### No Free Lunch Theorem

**English**:

- **Definition**: The **No Free Lunch Theorem** states that there is no universally best optimization algorithm. An algorithm that works well for one problem class may perform poorly on another.

**Deutsch**:

- **Definition**: Das **No Free Lunch Theorem** besagt, dass es keinen universell besten Optimierungsalgorithmus gibt. Ein Algorithmus, der für eine Problemklasse gut ist, kann für eine andere schlecht sein.

---

### Local Optima

**English**:

- **Definition**: **Local optima** are solutions that are better than their immediate neighbors but may not be the best overall solution in the search space (global optimum).

**Deutsch**:

- **Definition**: **Lokale Optima** sind Lösungen, die besser sind als ihre direkten Nachbarn, aber nicht unbedingt die beste Lösung im gesamten Suchraum (globales Optimum).

---

### Global Optima

**English**:

- **Definition**: **Global optima** are the best possible solutions in the entire search space. The aim of optimization algorithms is to find these.

**Deutsch**:

- **Definition**: **Globale Optima** sind die besten möglichen Lösungen im gesamten Suchraum. Das Ziel von Optimierungsalgorithmen ist es, diese zu finden.

---

## 2. Game of Life

### Ash

**English**:

- **Definition**: A state in the **Game of Life** where no new cell patterns emerge and the grid becomes stable.

**Deutsch**:

- **Definition**: Ein Zustand, in dem keine neuen Zellenmuster mehr entstehen und das Gitter des **Game of Life** stabil bleibt.

---

### Still Life

**English**:

- **Definition**: A **Still Life** is a static configuration of cells that remains unchanged in the Game of Life.

**Deutsch**:

- **Definition**: Ein **Still Life** ist eine statische Konfiguration von Zellen, die sich im Game of Life nicht mehr verändert.

---

### Oscillators

**English**:

- **Definition**: **Oscillators** are patterns in the Game of Life that repeat themselves after a fixed number of steps.

**Deutsch**:

- **Definition**: **Oszillatoren** sind Zellenmuster im Game of Life, die sich nach einer festen Anzahl von Schritten periodisch wiederholen.

---

### Glider

**English**:

- **Definition**: A **Glider** is a pattern in the Game of Life that moves diagonally across the grid over time.

**Deutsch**:

- **Definition**: Ein **Glider** ist ein Muster im Game of Life, das sich diagonal über das Gitter bewegt.

---

### Garden of Eden

**English**:

- **Definition**: A **Garden of Eden** is a configuration in the Game of Life that cannot be reached by evolving any previous pattern. It has no predecessor.

**Deutsch**:

- **Definition**: Ein **Garden of Eden** ist eine Konfiguration im Game of Life, die nicht durch die Entwicklung eines vorherigen Musters erreicht werden kann. Sie hat keinen Vorgänger.

---

## 3. Natural Computing in Science

### Biology in Natural Computing

**English**:

- **Definition**: Natural Computing draws inspiration from **biology**, incorporating concepts like evolution, neural networks, and cellular development to create algorithms.

**Deutsch**:

- **Definition**: Natural Computing nimmt Konzepte aus der **Biologie** wie Evolution, neuronale Netzwerke, und Zellentwicklung auf, um Algorithmen zu entwickeln.

---

### Physics in Natural Computing

**English**:

- **Definition**: In **physics**, Natural Computing uses principles from quantum mechanics and thermodynamics, especially in areas like quantum computing.

**Deutsch**:

- **Definition**: In der **Physik** sind Quantenmechanik und thermodynamische Prozesse relevant, insbesondere in Quantencomputern und Algorithmen, die von physikalischen Prozessen inspiriert sind.

---

### Chemistry in Natural Computing

**English**:

- **Definition**: **Chemistry** plays a role in Natural Computing through chemical reaction systems and molecular interactions, which serve as models for certain algorithms.

**Deutsch**:

- **Definition**: **Chemie** beeinflusst Natural Computing durch chemische Reaktionssysteme und Molekül-Interaktionen, die als Grundlage für Algorithmen dienen können.

---

## 4. Evolutionary Algorithms

### Increasing Diversity

**English**:

- **Definition**: Increasing **diversity** in evolutionary algorithms promotes different solutions and helps avoid premature convergence.

**Deutsch**:

- **Definition**: Das Hinzufügen von **Diversity** fördert unterschiedliche Lösungen und verhindert vorzeitige Konvergenz in Evolutionären Algorithmen.

---

### Premature Convergence

**English**:

- **Definition**: **Premature convergence** happens when the population gets stuck in a local optimum too early, preventing the discovery of the global optimum.

**Deutsch**:

- **Definition**: **Vorzeitige Konvergenz** tritt auf, wenn die Population zu früh in einem lokalen Optimum feststeckt und das globale Optimum nicht gefunden wird.

---

### Selection

**English**:

- **Definition**: In **selection**, fitter individuals are chosen to participate in the next generation.

**Deutsch**:

- **Definition**: Bei der **Selektion** werden die fitteren Individuen ausgewählt, um an der nächsten Generation teilzunehmen.

---

### Crossover

**English**:

- **Definition**: In **crossover**, two parent solutions are combined to produce offspring by mixing their features.

**Deutsch**:

- **Definition**: Beim **Crossover** werden zwei Elternlösungen kombiniert, um neue Nachkommen zu erzeugen, indem ihre Merkmale gemischt werden.

---

### Mutation

**English**:

- **Definition**: **Mutation** introduces random changes in individuals to increase diversity and generate new solutions.

**Deutsch**:

- **Definition**: **Mutation** führt zu zufälligen Änderungen in den Individuen eines evolutionären Algorithmus, um die Vielfalt zu erhöhen und neue Lösungen zu erzeugen.

---

## 5. Quantum Computing

### Superposition

**English**:

- **Definition**: In **superposition**, a qubit can exist in both 0 and 1 states simultaneously until it is measured.

**Deutsch**:

- **Definition**: In der **Superposition** kann ein Qubit gleichzeitig in den Zuständen 0 und 1 existieren, bis es gemessen wird.

---

### Entanglement

**English**:

- **Definition**: **Entanglement** occurs when two qubits are connected so that the state of one qubit determines the state of the other, no matter how far apart they are.

**Deutsch**:

- **Definition**: **Verschränkung** bedeutet, dass zwei Qubits miteinander verbunden sind, sodass der Zustand eines Qubits den Zustand des anderen beeinflusst, unabhängig von der Entfernung.

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
