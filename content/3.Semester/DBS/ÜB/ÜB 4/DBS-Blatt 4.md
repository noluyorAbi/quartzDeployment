---
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
Thema:
  - Relationale Algebra
date created: Thursday, 21. March 2024, 14:54
date modified: Tuesday, 16. April 2024, 11:02
---

# Aufgabe 4-1 **Natural Join**

*Zu welcher Operation der relationalen Algebra ist der natürliche Verbund (natural join) identisch, falls beide beteiligten Relationen alle Attribute gemeinsam haben? Begründen Sie Ihre Wahl*

- Der natural Join ist äquivalent zu der Schnittmenge in der relationalen Algebra $\cap$ 

--- 

# Aufgabe 4-2 **Ableitung des Quotient-Operators** [[Relationale Algebra#Quotient| (Quotientoperator)]]

*Bilden Sie die relationale Operation „Quotient“ durch die fünf relationalen Grundoperationen (Vereinigung, Differenz, kartesisches Product, Selektion, Projektion) nach.*

Definition Quotient formal:

$R \div S = \{ t \ | \ t \in \Pi_{R-S}(R) \ \land \ (\{t\} \times S) \subseteq R \}$

$= \{ t \ | \ t \in \Pi_{R-S}(R) \ \land \ \forall s \in S: (t, s) \in R \}$

$= \Pi_{R-S}(R) - \Pi_{R-S}((\Pi_{R-S}(R) \times S) - R)$

---

# Aufgabe 4-3 **Kardinalitäten**

*Geben Sie zu jeder Grundoperation der relationalen Algebra die Kardinalität des Ergebnisses bezogen auf die Kardinalitäten der Grundmengen an. Dabei sollen obere Schranken der Ergebniskardinalität möglichst klein und untere Schranken möglichst groß sein. Markieren Sie die korrekte Ordnungsrelation und den korrekten Operanden in den entsprechenden Boxen.*
*Bsp.: |A ∪ A| = |A|*

### a) |A ∪ B| [[Relationale Algebra#Vereinigung]]
- |A ∪ B| ≤ |A| + |B|

### b) |A − B| [[Relationale Algebra#Differenz]]
- |A − B| = |A| − |B|

### c) |A × B| [[Relationale Algebra#Kartesisches Produkt]]
- |A × B| = |A| ∗ |B|

### d) |ΠX,Y,...(A)| [[Relationale Algebra#Projektion]]
- |ΠX,Y,...(A)| ≤ |A|

### e) |σf (A)| [[Relationale Algebra#Selektion]]
- |σf (A)| ≤ |A|

--- 

# Aufgabe 4-4 *Anfragen in relationaler Algebra*

*Gegeben seien die Relationen Kunde, Personal, Verkauf, Inventar und Auftragsposten also Datenmodell für eine Möbel-Verkauf-Datenbank:*

- `Kunde` (kundnr, kundname, address, ort, plz)
- `Personal` (persnr, nachname, vorname, einsatz, vorgesetzt, gehalt)
- `Verkauf` (auftrnr, bestelldatum, persnr, kundnr)
- `Inventar` (artnr, artbez, lagerbest, lagerort, preis)
- `Auftragsposten` (auftrnr, artnr, menge)

*Hinweis: Am End des Übungsblattes finden Sie zum Verständnis eine passende Beispielausprägung des Relationenschemas. Achten Sie darauf, dass Ihre Anfrage für jede mögliche Ausprägung der Datenbank das richtige Ergebnis liefert; nicht nur für die gegebene Beispielausprägung.*

*Formulieren Sie die folgenden Anfragen durch Ausdrücke über der relationalen Algebra.*

### a) Bestimme die Artikelbezeichnung (artbez) und den Lagerort für alle Artikel mit einem Preis von über 5000.

$\Pi_{artbez,lagerort}(\sigma_{preis>5000}(Inventar))$

### b) Bestimme die Vornamen aller Mitarbeiter, die in München im Einsatz sind und mindestens ein Product seit dem 24.07.2023 verkauft haben.

$\Pi_{vorname}(\sigma_{einsatz = ''München'' \  \land \ bestelldatum \  \ge \ '24.07.2023' }(Verkauf \bowtie Personal ))$
### c) Bestimme die Personalnummern der Vorgesetzten aller Mitarbeiter, die etwas an einen Kunden aus dem Bezirk mit der PLZ '74391' verkauft haben.
$\Pi_{vorgesetzt}(\sigma_{ort = '74391' }(Personal \bowtie Kunde \bowtie Verkauf))$
### d) Bestimme die Auftragsnummern (auftrnr) aller Bestellungen, die 'Betten Kaiser' aufgegeben hat und die von 'Michael Roser' bearbeitet wurden.

$\Pi_{auftrnr}(\sigma_{kundname = 'Betten Kaiser' \ \land \ nachname = 'Roser' \ \land \ vorname = 'Michael'}(Kunde \bowtie Personal \bowtie Verkauf ))$
### e) Bestimme das Bestelldatum und die Artikelnummern (artnr) aller Aufträge, deren Produkte im gleichen Ort lagern, in dem der Kunde seinen Sitz hat und die von einem Mitarbeiter mit einem Gehalt von under 4500 verkauft wurden.

$\Pi_{artnr,bestelldatum}(\sigma_{lagerort = ort \ \land \ gehalt \  \lt 4500 }(Kunde \bowtie Personal \bowtie Ineventar \bowtie Verkauf \bowtie Auftragsposten))$

---

# Aufgabe 4-5 *Anfragen mit dem Quotient-Operator*

Gegeben seien die Relationen Lieferant `L`, Teil `T` und Projekt `P` also Datenmodell für eine Lieferanten-Teile-Projekte-Datenbank. Ferner existiert eine Relation `LTP`, die die Beziehungen der vorgenannten Relationen modelliert:

- `L` (`lnr`, `lname`, `status`, `sitz`) 
- `T` (`tnr`, `tname`, `farbe`, `gewicht`)
- `P` (`pnr`, `pname`, `ort`) 
- `LTP` (`lnr`, `tnr`, `pnr`, `menge`)

Außerdem sei Relation `RT` definiert durch: 

$RT = \Pi_{tnr}(\sigma_{farbe='ROT'}(T)).$

Hinweis: Unten finden Sie zum Verständnis eine Beispielausprägung des Relationenschemas.

Was berechnen die folgenden Ausdrucke?

### a) $\Pi_{lnr,tnr}(LTP) \div RT$
- Nummern der Lieferanten die jedes rote Teil liefern können

- **Was es bedeutet:** Diese Abfrage sucht nach Kombinationen von Lieferanten und Teilen. Es wird ermittelt, welche Lieferanten welche spezifischen Teile liefern können, sodass sie insgesamt jedes Teil, das rot ist, abdecken.

- **Unterschied:** Der Fokus liegt hier nicht nur darauf, _welche_ Lieferanten rote Teile liefern, sondern auch darauf, _welche spezifischen roten Teile_ sie liefern. Das Ergebnis zeigt Paare aus Lieferant und Teil, die zusammen alle roten Teile abdecken.

### b) $\Pi_{lnr}(\Pi_{lnr,pnr,tnr}(LTP) \div RT)$
- Alle Lieferanten, die an mind. Ein Projekt alle roten Teile liefern

- **Was es bedeutet:** Hier wird identifiziert, welche Lieferanten in der Lage sind, alle roten Teile zu liefern, wobei die Projekte, zu denen sie geliefert werden, berücksichtigt werden. Das heißt, die Lieferanten, die für mindestens ein Projekt alle roten Teile liefern können, werden aufgelistet.

- **Unterschied:** Der Schwerpunkt liegt auf den Lieferanten und ihrer Fähigkeit, alle roten Teile zu liefern, allerdings mit einem zusätzlichen Kontext – den Projekten. Es geht nicht um die spezifischen Teile, sondern um die Fähigkeit der Lieferanten, alle roten Teile im Kontext von Projekten zu liefern.
### c) $\Pi_{lnr}(LTP \div RT)$
- Alle Lieferanten, die jedes Rote Teil in jeder Menge an mind. Ein Projekt liefern

- **Was es bedeutet:** Diese Abfrage zielt darauf ab, alle Lieferanten zu finden, die fähig sind, jedes rote Teil zu liefern, unabhängig von den Projekten oder der Menge. Es ist die umfassendste Abfrage, die einfach alle Lieferanten auflistet, die alle roten Teile liefern können.

- **Unterschied:** Im Gegensatz zu den anderen beiden Abfragen, die spezifische Aspekte wie Teile-Nummern oder Projekte berücksichtigen, fokussiert sich diese Abfrage ausschließlich auf die Lieferanten. Es wird nur geprüft, ob sie alle roten Teile liefern können, ohne weitere Details zu berücksichtigen.


Zusammengefasst unterscheiden sich die Abfragen in dem, was sie betrachten (Lieferanten-Teil-Paare, Lieferanten im Kontext von Projekten, oder einfach alle fähigen Lieferanten) und in der Spezifität ihrer Ergebnisse (spezifische Paare, Lieferanten bezogen auf Projekte, oder eine generelle Liste von Lieferanten).


---

Also nächstes: [[DBS-Blatt 5]]
