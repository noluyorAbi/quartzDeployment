---
created: 2024-03-25 16:25
last modified: 2024-03-25 16:25
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)|Datenbanksysteme (DBS)]]"
date created: Monday, 25. March 2024, 16:25
date modified: Friday, 5. April 2024, 02:30
---

Gegeben sei die folgende relationale "Geschäftsdatenbank" einer Kaufhauskette. Es kann davon ausgegangen werden, dass eine Abteilung nur von einem Angestellten geleitet wird, welcher selbst in dieser Abteilung tätig ist:

- **Angestellter** (Nummer, Name, Gehalt, Abteilung, Geburtsjahr, Einstellungsdatum)
- **Abteilung** (Nummer, Name, Filiale, Stock, Leiter\[Angestellter\])
- **Filiale** (Nummer, Stadt, Land)
- **Lieferant** (Nummer, Name, Stadt, Land)
- **Artikel** (Nummer, Name, Abteilung, Preis, Bestand, Lieferant)
- **Verkauf** (Nummer, Datum, Abteilung, Artikel, Anzahl, Angestellter, Betrag)

Für die Attribute gelten dabei folgende Wertebereiche:

- **Nummer**: Integer
- **Gehalt**: Decimal(10,2)
- **Geburtsjahr**: Integer
- **Einstellungsdatum**: Date
- **Name**: String
- **Stock**: Integer
- **Stadt**: String
- **Land**: String
- **Preis**: Decimal
- **Bestand**: Integer
- **Datum**: Date
- **Anzahl**: Integer
- **Betrag**: Decimal

Hinweis: Im obigen Schema werden Fremdschlüssel durch eine Linie über dem entsprechenden Attribute gekennzeichnet. Falls der Name der referenzierten Relation nicht dem Namen des Fremdschlüssels entspricht, wird der Name der Relation in eckigen Klammern hinter dem Fremdschlüssel angegeben.

# Aufgabe 6-1: _Anfragen im Tupel- und Bereichskalkül_

**Syntaxerweiterung für den Tupel- und Bereichskalkül:**

- **[[Tupelkalkül]]:** Hier können neue Tuple durch den Tupelkonstruktor `[]` aus den Komponenten anderer Tupelvariablen gebildet werden. Die Namen der Attribute im Schema des neuen Tupels ergeben sich aus den Attributnamen der genutzten Komponenten. Ein Beispiel hierfür ist der Ausdruck, der die Namen aller Angestellten zurückgibt:
  - `Schema(t) = Schema(Angestellter); {[t.Name] | t ∈ Angestellter}`
- **[[Bereichskalkül]]:** Der Unterstrich `_` dient also Platzhalter für nicht benötigte Attribute einer Relation, was die Formulierung von Anfragen vereinfacht. Beispielsweise kann für die Auswahl aller Städte aus der Relation `Filiale`, in denen sich eine Filiale befindet, folgender Ausdruck verwendet werden:
  - `{la | ∃nr, st: Filiale(nr, st, la)} = {la | Filiale(_, _, la)}`

**Aufgabenstellung:** Formulieren Sie Anfragen jeweils im Tupel- und Bereichskalkül. Bei Anfragen, die den Tupelkalkül verwenden, geben Sie zusätzlich das Schema aller freien Variable an.

# Needed Know-How

- [[Tupelkalkül]]
- [[Bereichskalkül]]

### a) Bestimmen Sie die Namen aller Angestellten mit einem Gehalt von weniger also 2000.

**TK:**
$$~{TK: \  \underbrace{Schema(t)}_{\text{Variablenname}} = \underbrace{Schema(Angestellter)}_{\text{aus welchem Schema}} \ ; \  \{ \ \underbrace{[ \ t.Name \ ]}_{\text{Was zurückgegeben werden soll}} | \ \ \  \underbrace{\ t \ \in \ Angestellter}_{\text{Welches Schema final}} \ \land \ \underbrace{\ t.Gehalt \ \lt \ 2000}_{\text{Bedingung}} \}}$$

**BK:**
$$~{BK: \ \ \{\underbrace{na}_{\text{Was returned werden soll}}| \ \ \ \underbrace{\exists ge}_{\text{Tupel die wir checken}}: \underbrace{Angestellter(\_,na,ge,\_,\_,\_)}_{\text{Schema + Tupel die wir brauchen}} \ \land \ \underbrace{ge \ \land \ 2000}_{Bedingung} \}}$$

### b) Erstellen Sie eine Liste aller Verkaufsnummern mit Verkaufsdatum, die in den Abteilungen im 3. Stock verkauft wurden und deren Lieferant entweder aus Italien oder aus Frankreich kommt.

**TK:**
$$~{Schema(ver) = Schema(Verkauf) \{ [ver.Nummer, ver.Datum] \mid ver \in Verkauf \land (\exists ab \in Abteilung, art \in Artikel, l \in Lieferant) (ver.Abteilung = ab.Nummer \land ver.Artikel = art.Nummer \land art.Lieferant = l.Nummer \land ab.Stock = 3 \land (l.Land = 'Italien' \lor l.Land = 'Frankreich'))\}}$$

**BK:**
$$~{\{ \text{Vnr}, \text{Vda} \ | \ \exists \text{abtnr}, \text{artnr}, \text{lnr} : \text{Verkauf}(\text{Vnr}, \text{Vda}, \text{abtnr}, \text{artnr}, \_, \_) \ \land \ \text{Abteilung}(\text{abtnr}, \_, 3, \_) \ \land \ \text{Artikel}(\text{artnr}, \_, \_, \_, \text{lnr}) \ \land \ (\text{Lieferant}(\text{lnr}, \_, 'Italien') \ \lor \ \text{Lieferant}(\text{lnr}, \_, 'Frankreich'))\}}$$

### c) Bestimmen Sie fur alle Filialen in der Stadt Köln, die Nummern und Namen aller Angestellten sowie die Abteilungsnamen in denen diese Angestellten arbeiten.

**TK:**
$$~{Schema(ang)=Schema(Angestellter)\{ [ang.Nummer, ang.Name, abt.Name] \mid \exists \ ang \in \text{Angestellter} , abt \in \text{Abteilung} , fil \in \text{Filiale} \land ang.Abteilung = abt.Nummer \land abt.Filiale = fil.Nummer \land fil.Stadt = 'Koeln' \}}$$

### d) Bestimmen Sie die Nummern, Namen, Gehalt und Geburtsjahr aller Angestellten, die am 01.10.2023 etwas verkauft haben und keine Leiter einer Abteilung sind.

### e) Bestimmen Sie die Nummern und Namen der Lieferanten, welche die Kaufhauskette mit mindestens drei unterschiedlichen Artikeln beliefern.

$$~{Schema(r) = Schema (R); \{\ [r.A,r.B,r.C,s.D,s.E,s.F] \mid r \in R \land \exists s \in S  \ \}}$$

# Aufgabe 6-2 **Tupel- und Bereichskalkül**

_Zeigen Sie, wie man die folgenden Operationen der relationale Algebra sowohl im Tupel- also auch im Bereichskalkül darstellen kann. Für Anfragen im Tupelkalkül soll dar über hinaus das Schema aller freien Variable angegeben werden._

```text
Lösungen müssen noch eingetragen werden, leider keine Zeit für gehabt
```

### a) σA=x(R(A, B, C))

#### Lösung im Tupelkalkül:

#### Lösung im Bereichskalkül:

### b) ΠA,B(R(A, B, C))

#### Lösung im Tupelkalkül:

#### Lösung im Bereichskalkül:

### c) R(A, B, C) ▷◁ S(C, D, E)

#### Lösung im Tupelkalkül:

#### Lösung im Bereichskalkül:

### d) R(A, B, C) ∪ S(A, B, C)

#### Lösung im Tupelkalkül:

#### Lösung im Bereichskalkül:

### e) R(A, B, C) ∩ S(A, B, C)

#### Lösung im Tupelkalkül:

#### Lösung im Bereichskalkül:

### f) R(A, B, C) − S(A, B, C)

#### Lösung im Tupelkalkül:

#### Lösung im Bereichskalkül:

### g) R(A, B, C) × S(D, E, F)

#### Lösung im Tupelkalkül:

#### Lösung im Bereichskalkül:

Also nächstes: [[DBS-Blatt 7]]

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
