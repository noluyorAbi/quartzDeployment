---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: "[[Uni2/Semester/4.Semester/Informatik/FSK/FSK-ÜB/ÜB 7/FSK-ÜB-7]]"
Benötigte Zeit:
date created: Thursday, 6. June 2024, 21:04
date modified: Monday, 2. September 2024, 23:04
---

# Grammatiken

In der formalen Sprachtheorie werden Grammatiken verwendet, um die Struktur von Sprachen zu beschreiben. Es gibt verschiedene Typen von Grammatiken, die sich in ihrer Ausdrucksstärke und Komplexität unterscheiden.

## Typ 0 - Unbeschränkte Grammatiken

> Jede beliebige Produktionsregel ist erlaubt

**Typ 0 Grammatiken**, auch bekannt als **unbeschränkte Grammatiken**, sind die allgemeinste und mächtigste Klasse von Grammatiken. In Typ 0 Grammatiken gibt es keine Einschränkungen bezüglich der Form der Produktionsregeln. Jede Regel kann die Form `α -> β` haben, wobei `α` und `β` beliebige Zeichenfolgen aus Terminal- und Nichtterminalsymbolen sein können, mit der einzigen Bedingung, dass `α` mindestens ein Symbol enthalten muss.

### Eigenschaften von Typ 0 Grammatiken:

- **Allgemein:** Es gibt keine Einschränkungen für die Länge oder Struktur der Produktionsregeln.
- **Erzeugt:** Diese Grammatik erzeugt rekursiv aufzählbare Sprachen, die von einer Turing-Maschine erkannt werden können.
- **Mächtigkeit:** Typ 0 Grammatiken sind die mächtigste Form von Grammatiken und können jede berechenbare Sprache beschreiben.

### Beispiele:

Ein einfaches Beispiel einer Typ 0 Grammatik könnte so aussehen:

- Regel: `AB -> BA`  
  Diese Regel besagt, dass das Symbolpaar `AB` in `BA` umgekehrt werden kann.
- Regel: `S -> aSb | ε`
  Diese Regel besagt, dass das Startsymbol `S` durch `aSb` ersetzt oder gelöscht (`ε`) werden kann.

Unbeschränkte Grammatiken sind in der Theorie von Turingmaschinen und der Berechenbarkeit von Interesse, da sie in der Lage sind, jede berechenbare Funktion darzustellen.

## Typ 1 - Kontext-sensitive Grammatiken

> |Linke Seite| kleiner gleich |Rechte Seite|

**Typ 1 Grammatiken**, auch bekannt als **kontext-sensitive Grammatiken**, sind eine Klasse von Grammatiken, bei denen jede Produktionsregel die Form `αAβ -> αγβ` hat. Hierbei sind `α`, `β`, und `γ` Zeichenfolgen (oder Leerzeichen), und `A` ist ein Nichtterminalsymbol. Die Bedingung ist, dass die Länge der Zeichenfolge auf der rechten Seite der Produktionsregel mindestens so lang ist wie die auf der linken Seite.

### Eigenschaften von Typ 1 Grammatiken:

- **Kontext-sensitiv:** Die Produktionsregeln können vom Kontext der Symbole abhängen, was bedeutet, dass `A` in einem bestimmten Kontext `α` und `β` ersetzt wird.
- **Nicht-umkehrbar:** Regeln dürfen die Länge der Zeichenkette nicht verringern.
- **Erzeugt:** Diese Grammatik erzeugt kontext-sensitive Sprachen, die mächtiger als kontextfreie Sprachen sind.

### Beispiele:

Ein einfaches Beispiel einer Typ 1 Grammatik könnte so aussehen:

- Regel: `AB -> ABC`  
  Diese Regel sagt, dass das Symbol `AB`, wenn es auftritt, durch `ABC` ersetzt werden kann.

Kontext-sensitive Grammatiken werden verwendet, um Sprachen zu beschreiben, die komplexere Strukturen haben als die, die durch kontextfreie Grammatiken beschrieben werden können.

## Typ 2 - Kontextfreie Grammatiken

> Linke Seite nur ein Nichtterminal

**Typ 2 Grammatiken**, auch bekannt als **kontextfreie Grammatiken (CFG)**, sind eine Klasse von Grammatiken, bei denen jede Produktionsregel die Form `A -> γ` hat. Hierbei ist `A` ein Nichtterminalsymbol und `γ` eine Zeichenfolge, die aus Terminal- und/oder Nichtterminalsymbolen bestehen kann.

### Eigenschaften von Typ 2 Grammatiken:

- **Kontextfrei:** Das linke Nichtterminal `A` kann unabhängig vom Kontext durch die Zeichenfolge `γ` ersetzt werden.
- **Erzeugt:** Diese Grammatik erzeugt kontextfreie Sprachen, die oft in der Programmiersprachen- und Parserentwicklung verwendet werden.
- **PDA-Verarbeitung:** Kontextfreie Sprachen können von einem Pushdown-Automaten (PDA) erkannt werden.

### Beispiele:

Ein klassisches Beispiel einer Typ 2 Grammatik könnte so aussehen:

- Regel: `S -> aSb | ε`
  Diese Regel besagt, dass das Startsymbol `S` durch `aSb` ersetzt oder gelöscht (`ε`) werden kann.

Kontextfreie Grammatiken eignen sich besonders gut zur Beschreibung der Syntax von Programmiersprachen und sind ein zentraler Bestandteil von Parsern.

## Typ 3 - Reguläre Grammatiken

> Rechte Seite endet nicht auf einem Nichtterminal sondern auf einem Terminal

**Typ 3 Grammatiken**, auch bekannt als **reguläre Grammatiken**, sind die einfachste Klasse von Grammatiken. Die Produktionsregeln haben die Form `A -> aB` oder `A -> a`, wobei `A` und `B` Nichtterminalsymbole und `a` ein Terminalsymbol ist.

### Eigenschaften von Typ 3 Grammatiken:

- **Regularität:** Die Regeln sind stark eingeschränkt, was zu einer sehr einfachen Struktur der Sprachen führt.
- **Erzeugt:** Diese Grammatik erzeugt reguläre Sprachen, die von endlichen Automaten (DFA oder NFA) erkannt werden können.
- **Einfache Muster:** Reguläre Grammatiken sind ideal zur Beschreibung einfacher Muster, wie sie in regulären Ausdrücken verwendet werden.

### Beispiele:

Ein einfaches Beispiel einer Typ 3 Grammatik könnte so aussehen:

- Regel: `S -> aS | b`
  Diese Regel sagt, dass das Startsymbol `S` durch `aS` oder `b` ersetzt werden kann.

Reguläre Grammatiken werden häufig in der Mustererkennung, der Lexikalischen Analyse und bei der Implementierung von Suchalgorithmen verwendet.

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
