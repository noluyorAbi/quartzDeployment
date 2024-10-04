---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
Benötigte Zeit:
date created: Monday, 30. September 2024, 00:27
date modified: Monday, 30. September 2024, 17:29
---

**Cheat Sheet**

---

# **Normalformen**

**Chomsky-Normalform (CNF)**

- **Regeln**: Jede Produktionsregel hat die Form $A \to BC$ oder $A \to a$, wobei $A$, $B$, $C$ Nichtterminalsymbole sind (wobei $B$ und $C$ nicht das Startsymbol sind) und $a$ ein Terminalsymbol ist.

- **Eigenschaften**: Jede kontextfreie Grammatik kann in CNF umgewandelt werden.

- **Beispiel**:

  - **Gegebene Grammatik:**
    - $S \to ASA \mid aB$
    - $A \to B$
    - $B \to b$
  - **Umgewandelt in CNF:**
    - $S \to A\,S\,A \mid a\,B$
    - $A \to B$
    - $B \to b$

- **Anwendung**: Erleichtert Parsing-Algorithmen wie den CYK-Algorithmus.

**Greibach-Normalform (GNF)**

- **Regeln**: Jede Produktionsregel hat die Form $A \to a\alpha$, wobei $a$ ein Terminalsymbol ist und $\alpha$ eine (möglicherweise leere) Folge von Nichtterminalen.

- **Eigenschaften**: Jede kontextfreie Grammatik kann in GNF umgewandelt werden.

- **Beispiel**:

  - **Gegebene Grammatik:**
    - $S \to A\,B$
    - $A \to a$
    - $B \to b$
  - **Umgewandelt in GNF:**
    - $S \to a\,B$
    - $B \to b$

- **Anwendung**: Nützlich für Beweise und für die Konstruktion von Kellerautomaten.

**Kuroda-Normalform**

- **Regeln**:

  - Produktionsregeln haben die Form:
    - $A \to B\,C$
    - $A \to B$
    - $A \to a$
    - $A\,B \to C\,D$
  - Hierbei sind $A$, $B$, $C$, $D$ Nichtterminal- und $a$ ein Terminalsymbol.

- **Eigenschaften**: Jede kontextsensitive Grammatik kann in die Kuroda-Normalform umgewandelt werden.

- **Beispiel**:

  - **Gegebene kontextsensitive Grammatik:**
    - $S \to a\,S\,b \mid a\,b$
  - **Umgewandelt in Kuroda-Normalform:**
    - $S \to A\,B$
    - $A \to a$
    - $B \to S\,C$
    - $C \to b$
    - $S \to A\,C$

- **Anwendung**: Theoretische Untersuchungen von kontextsensitiven Sprachen.

---

# **Sätze**

**Satz von Rice**

- **Aussage**: Alle nicht-trivialen semantischen Eigenschaften von Turing-erkennbaren Sprachen sind unentscheidbar.

- **Bedeutung**: Es gibt keine allgemeine Methode, um bestimmte Eigenschaften von Programmen zu bestimmen, z.B. ob ein Programm eine bestimmte Funktion berechnet.

**Satz von Cook (Cook-Levin-Theorem)**

- **Aussage**: Das Erfüllbarkeitsproblem (SAT) ist NP-vollständig.

- **Bedeutung**: Begründet die Theorie der NP-Vollständigkeit und zeigt, dass viele wichtige Probleme gleichermaßen schwierig sind.

---

# **Abschlusseigenschaften**

**Abschlusseigenschaften von Sprachklassen**

| **Sprache / Operation** | **Vereinigung** | **Durchschnitt** | **Komplement** |
| ----------------------- | --------------- | ---------------- | -------------- |
| **Regulär**             | Ja              | Ja               | Ja             |
| **Kontextfrei**         | Ja              | Nein             | Nein           |
| **Kontextsensitiv**     | Ja              | Ja               | Ja             |
| **Rekursiv**            | Ja              | Ja               | Ja             |
| **Rekursiv Aufzählbar** | Ja              | Ja               | Nein           |

**Legende:**

- **Ja**: Die Sprachklasse ist unter der Operation abgeschlossen.
- **Nein**: Die Sprachklasse ist unter der Operation nicht abgeschlossen.

**Hinweise:**

- **Kontextfreie Sprachen** sind nicht unter Durchschnitt und Komplement abgeschlossen.
- **Rekursiv aufzählbare Sprachen** sind nicht unter Komplement abgeschlossen.

---

# **Primitive Rekursion und μ-Rekursion**

**Primitiv Rekursive Funktionen**

- **Definition**: Primitiv rekursive Funktionen sind Funktionen, die aus den Grundfunktionen mithilfe von Funktionskomposition und primitiver Rekursion aufgebaut werden.

- **Grundfunktionen**:

  - **Nullfunktion**: $Z(n)=0$
  - **Nachfolgerfunktion**: $S(n)=n+1$
  - **Projektionen**: $P_i^k(n_1,n_2,\dots,n_k)=n_i$

- **Konstruktionsregeln**:

  - **Komposition**: Wenn $f$ und $g_1,\dots,g_m$ primitiv rekursiv sind, ist $h(n_1,\dots,n_k)=f(g_1(n_1,\dots,n_k),\dots,g_m(n_1,\dots,n_k))$ auch primitiv rekursiv.
  - **Primitiv Rekursion**: Wenn $f$ (Basisfunktion) und $g$ (Rekursionsfunktion) primitiv rekursiv sind, dann ist $h$ definiert durch:
    - $h(0,n_2,\dots,n_k)=f(n_2,\dots,n_k)$
    - $h(n_1+1,n_2,\dots,n_k)=g(n_1,h(n_1,n_2,\dots,n_k),n_2,\dots,n_k)$

- **Beispiele**:
  - **Addition** ($\text{add}(n,m)=n+m$):
    - Basisfall: $\text{add}(0,m)=m$
    - Rekursionsschritt: $\text{add}(n+1,m)=S(\text{add}(n,m))$
  - **Multiplikation** ($\text{mult}(n,m)=n \times m$):
    - Basisfall: $\text{mult}(0,m)=0$
    - Rekursionsschritt: $\text{mult}(n+1,m)=\text{add}(\text{mult}(n,m),m)$

**μ-Rekursive Funktionen**

- **Definition**: μ-rekursive Funktionen erweitern die primitiven rekursiven Funktionen durch Einführung des μ-Operators (Minimierungsoperator).

- **μ-Operator**:

  - Für eine gegebene Funktion $f$ ist die μ-rekursive Funktion $h$ definiert als:
    - $h(n_1,\dots,n_k)=\mu m[f(n_1,\dots,n_k,m)=0]$
    - $\mu m$ findet das kleinste $m$, für das $f(n_1,\dots,n_k,m)=0$ gilt.

- **Bemerkung**: Durch den μ-Operator können wir total rekursive Funktionen darstellen, die nicht primitiv rekursiv sind.

- **Beispiel**:
  - **Prüfung auf Null**:
    - Funktion $f(n)=n$
    - μ-Rekursive Funktion $h$ sucht das kleinste $m$, sodass $f(m)=0$:
      - $h=\mu m[m=0]$
      - Ergebnis: $h=0$

---

# **NP-Vollständigkeits-Hierarchie**

**Übersicht der NP-vollständigen Probleme**

```
                SAT
                 |
             3-CNF-SAT
            /    |     \
       CLIQUE  SETCOVER  SUBSETSUM   GRAPHCOLORING
         |                 |           |
    INDEPENDENT SET      KNAPSACK   DIRECTED HAMILTON CYCLE
         |                 |           |
      VERTEX COVER     PARTITION   UNDIRECTED HAMILTON CYCLE
                           |           |
                       BIN PACKING   TRAVELLING SALESMAN
```

- **SAT (Erfüllbarkeitsproblem)**: Entscheidet, ob eine boolesche Formel erfüllbar ist.
- **3-CNF-SAT**: Spezialfall von SAT, bei dem die Formel in konjunktiver Normalform mit höchstens drei Literalen pro Klausel vorliegt.

**Verwandte Probleme:**

- **CLIQUE**:

  - **Problem**: Finden eines vollständigen Teilgraphen (Clique) der Größe $k$ in einem ungerichteten Graphen.
  - **Verwandte Probleme**:
    - **INDEPENDENT SET**: Finden einer Menge unverbundener Knoten.
    - **VERTEX COVER**: Finden einer minimalen Knotenmenge, die alle Kanten abdeckt.

- **SET COVER**:

  - **Problem**: Bestimmen der kleinsten Anzahl von Mengen aus einer Mengensammlung, die die Gesamtmenge abdecken.
  - **Verwandte Probleme**:
    - **KNAPSACK**: Objekte mit maximalem Wert unter Gewichtslimit auswählen.
    - **PARTITION**: Aufteilung einer Menge in zwei Teilmengen mit gleicher Summe.
    - **BIN PACKING**: Objekte in minimaler Anzahl von Behältern unterbringen.

- **SUBSET SUM**:

  - **Problem**: Prüfen, ob eine Teilmenge von Zahlen existiert, deren Summe einen gegebenen Wert ergibt.

- **GRAPH COLORING**:
  - **Problem**: Färben der Knoten eines Graphen mit minimaler Anzahl von Farben, sodass keine benachbarten Knoten die gleiche Farbe haben.
  - **Verwandte Probleme**:
    - **DIRECTED HAMILTON CYCLE**: Finden eines Hamiltonkreises in einem gerichteten Graphen.
    - **UNDIRECTED HAMILTON CYCLE**: Finden eines Hamiltonkreises in einem ungerichteten Graphen.
    - **TRAVELLING SALESMAN**: Finden der kürzesten Rundreise durch gegebene Städte.

---

**Hinweis**: Die meisten dieser Probleme sind **NP-vollständig**, was bedeutet, dass sie in polynomieller Zeit auf einem nichtdeterministischen Rechner lösbar sind und dass eine polynomielle Lösung für eines dieser Probleme polynomielle Lösungen für alle NP-Probleme implizieren würde.

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
