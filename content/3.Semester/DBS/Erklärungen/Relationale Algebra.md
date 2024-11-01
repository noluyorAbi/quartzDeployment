---
created: 2024-03-21 15:35
last modified: 2024-03-21 15:35
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Thursday, 21. March 2024, 15:35
date modified: Wednesday, 10. April 2024, 01:01
---

# Was ist die relationale Algebra vor allem im Bereich DBS?

- Formale Anfragesprache (neben Bereichs und Tuple Kalkül)
- Wird in der Praxis durch SQL umgesetzt
- Formulieren von Anfragen an eine Menge von Relationen
- Operationen auf Relationen liefern also Ergebnis auch eine Relation

---

# Notation

- R und S - Relationen
- t - Tuple aus Relation
- A und B - Attribute
- F -Formel
- $A_i$ - Zugriff auf Attribute durch den Namen

---

# Grundoperationen

## Vereinigung

$$R \cup S = \{t| t  \in R  \ oder \ t \in S \}$$

- 2 Relationen werden einfach "zusammen addiert"
- R mit S

---

## Differenz

$$R-S = \{t|\ t \in R \ und \ t \notin S  \}$$

- Tuple aus R welche in S enthalten sind werden entfernt
- R ohne S

---

## Kartesisches Product

- Jedes Tuple aus R mit jedem Tuple aus S

---

## Selektion

$$σ_F(R) = { t | t ∈ R ∧ erfüllt F }$$

- Die Selektion wird durch das Symbol σ dargestellt und filtert die Zeilen einer Tabelle basierend auf einem Kriterium F. Im Beispiel wird das Kriterium `Gewicht ≤ 12` verwendet.
- $σ_{Gewicht\ \leq\ 12}(R)$ = alle Tuple in denen Gewicht kleiner gleich 12 ist

---

## Projektion

$$\Pi_{a1, \ldots , am}(R) = \{t_{a1}, \ldots , t_{am} | t \in R\}$$

- Zeigt nur die ausgewählten Spalten aus einer Relation
- Z.B. _$\Pi_{TNr,Gewicht}$_ zeigt die Tuple und jeweils deren spalten TNr und Gewicht keine anderen Spalten

---

## Durchschnitt

$$
R \  \cap \ S = \{\ t \ | \ t \in \ R \ und \ t \ \in \ S \}
$$

- Relation also Ergebnis welche den Schnitt der beiden Relationen enthält

---

## Joins

$$
R \underset{\phi}{\bowtie} S = \sigma_\phi(R\times S)
$$

$$
\phi \ \text{Steht als Bedingung bzw. Ausdruck }
$$

### Equi-Join

$$
R \bowtie_{A=B} S = \{\ (r,s)\ | \ r\in R\land s\in S\land r_{|A|}=s_{|B|} \ \}
$$

- Zum Zusammenfügen von Relationen

---

## Quotient

[[DBS-Blatt 12#(b) Relationale Algebra Quotient|Blatt 12 Anwendungsbeispiel]]

Der Quotient ist eine etwas komplexere Operation in der relationalen Algebra. Gegeben zwei Relationen R und S, wird der Quotient R ÷ S also die Menge aller Tuple t definiert, die bei der Projektion von R auf die Attribute, die nicht in S sind (R - S), existieren und für die jedes Tuple in S mit t kombiniert werden kann, um ein Tuple in R zu formen.

$$
R \div S = \pi_{R\ '} \ (R) - \pi_{R\ '} \ ((\pi_{R\ '} \ (R) \times S) - R)
$$

$$R \div S = \{ t \ | \ t \in \Pi_{R-S}(R) \land \{t\} \times S \subseteq R \}$$

- Das Ergebnis ist eine Relation, die jene Tuple aus R beinhaltet, die mit allen Tupeln aus S verknüpft werden können.
- Z.B. _$R \div S$_ zeigt die Lieferantennummern (LNr), die alle Teile liefern können.

Stellen Sie sich vor, Sie haben zwei Relationen: eine Relation `LieferantenTeile`, die angibt, welche Teile von welchen Lieferanten geliefert werden, und eine Relation `BestellteTeile`, die die Teile enthält, die Sie bestellen möchten.

### Relation LieferantenTeile

| LNr | TNr |
| --- | --- |
| L1  | T1  |
| L1  | T2  |
| L1  | T3  |
| L2  | T1  |
| L2  | T3  |

### Relation BestellteTeile

| TNr |
| --- |
| T1  |
| T2  |
| T3  |

Wenn Sie nun wissen möchten, welche Lieferanten alle Teile liefern können, die Sie bestellen möchten, können Sie den Quotienten `LieferantenTeile ÷ BestellteTeile` berechnen.

### Ergebnis des Quotienten

$$LieferantenTeile \div BestellteTeile = \{ t \ | \ t \in \Pi_{LNr}(LieferantenTeile) \land \{t\} \times BestellteTeile \subseteq LieferantenTeile \}$$

Das Ergebnis zeigt nur die `LNr` (Lieferantennummer), die alle `TNr` (Teilenummern) aus `BestellteTeile` liefern können.

### Ergebnisrelation

| LNr |
| --- |
| L1  |

Das Ergebnis besagt, dass nur Lieferant `L1` alle Teile liefern kann, die in der Relation `BestellteTeile` aufgeführt sind.

- Diese Operation ist nützlich, um Abhängigkeiten zwischen Relationen zu ermitteln, zum Beispiel bei der Lieferantenwahl.

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
