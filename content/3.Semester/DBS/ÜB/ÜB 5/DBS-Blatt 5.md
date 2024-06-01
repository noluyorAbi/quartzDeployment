---
created: 2024-03-22 16:08
last modified: 2024-03-22 16:08
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Friday, 22. March 2024, 16:08
date modified: Tuesday, 16. April 2024, 11:03
---

**Hinweis:** Bitte nutzen Sie zur Beantwortung der SQL-Übungsaufgaben ausschließlich die in der Vorlesung und in den Tutorien definierte Notation. Wir behalten uns vor, andere Operationen und Schlüsselwörter also Fehler zu werten, selbst wenn ein spezifisches Datenbanksystem diese Operation unterstützt.

Die Aufgaben 5-1 und 5-2 beziehen sich auf das in Übungsblatt 4 genutzte Möbel-Datenbankschema und die darin vorgestellte Ausprägung:

- `Kunde` (kund_nr, kund_name, address, ort, plz)
- `Personal` (pers_nr, nachname, vorname, einsatz, vorgesetzt, gehalt)
- `Verkauf` (auftr_nr, bestelldatum, pers_nr, kund_nr)
- `Inventar` (art_nr, art_bez, lagerbest, lagerort, preis)
- `Auftragsposten` (auftr_nr, art_nr, menge)

# Aufgabe 5-1 *Anfragen in SQL*

*Formulieren Sie folgende Anfragen jeweils in der relationaler Algebra und in SQL. Achten Sie dabei darauf, dass beide Anfragen äquivalente Ergebnistabellen für alle möglichen Ausprägungen liefern (Stichwort: Duplikate). Wenn Sie das DISTINCT-Schlüsselwort bei einer SQL-Anfrage verwenden, begründen Sie kurz, wieso dieses an der Stelle notwendig ist.*

## a) Bestimmen Sie die Artikelnummern und Bezeichnungen des gesamten Inventars mit Lagerort in Koeln und einem Preis von mindestens 4500.

```sql
SELECT art_nr,art_bez FROM Inventar
WHERE lagerort = "Köln" AND preis >= 4500
```

$$\Pi_{art\_nr,art\_bez}(\sigma_{lagerort = 'Köln' \ \land \ preis \ \geq \ 4500}(Inventar))$$

## b) Bestimmen Sie fur jeden Auftragsposten die Auftragsnummer, die Nummer und Bezeichnung des Artikels und dessen im Auftrag geforderte Menge. Benutzen Sie dabei fur die SQL Anfrage in der FROM- Klausel ausschließlich den Natural Join.

```SQL
SELECT auftr_nr,art_nr,art_bez,menge FROM Auftragsposten
NATURAL JOIN Inventar
```

$$\Pi_{auftr\_nr,art\_nr,art\_bez,menge}(Inventar \bowtie Auftragsposten)$$

## c) Finden Sie die Bezeichnungen aller Artikel, die in einem Ort lagern, in denen auch Kunden ihren Sitz/Wohnort haben und die teurer also 7000 sind. Benutzen Sie dabei für die SQL-Anfrage in der FROM-Klausel ausschließlich das JOIN-ON-Konstrukt.

```SQL
SELECT art_bez FROM Inventar 
JOIN Kunde ON Kunde.ort = Inventar.lagerort
WHERE ort = lagerort AND preis > 7000
```

Die SQL-Anfrage ist funktional korrekt, beinhaltet jedoch eine redundante Bedingung. Die Klausel `WHERE ort = lagerort` ist überflüssig, da diese Bedingung bereits durch das JOIN-ON-Konstrukt `Kunde.ort = Inventar.lagerort` impliziert wird. Die Anwesenheit dieser Bedingung im WHERE-Teil dient lediglich der Vollständigkeit, trägt aber nicht zur Logik der Anfrage bei. Eine optimierte und professionellere Version der Abfrage würde diesen redundanten Teil weglassen, um Klarheit und Effizienz zu verbessern:

```SQL
SELECT art_bez FROM Inventar 
JOIN Kunde ON Kunde.ort = Inventar.lagerort
WHERE preis > 7000
```

$$\Pi_{art\_bez}(\sigma_{preis \ \gt \ 7000 \ \land \ Kunde.ort = Inventar.lagerort }(Inventar \bowtie Kunde))$$

## d) Finden Sie für jeden Kunden die Kundennummer sowie die Nummern und Bezeichnungen aller von ihm gekauften Artikel, die im selben Ort lagern, in dem er seinen Sitz/Wohnort hat und die günstiger also 7000 sind. Benutzen Sie dabei für die SQL-Anfrage in der FROM-Klausel ausschließlich das JOIN-USING-Konstrukt.

```SQL
SELECT kund_nr,art_nr,art_bez 
FROM Verkauf 
JOIN Kunde USING (kund_nr) 
JOIN Auftragsposten USING (auftr_nr) 
JOIN Inventar USING (art_nr) 
WHERE Kunde.ort = Inventar.lagerort AND preis < 7000
```

$$ΠKunde.kund\_nr,Auftragsposten.art\_nr,Inventar.art\_bez​(σInventar.preis<7000∧Kunde.ort=Inventar.lagerort​((Kunde⋈Kunde.kund\_nr=Verkauf.kund\_nr​Verkauf)⋈Verkauf.auftr\_nr=Auftragsposten.auftr\_nr​Auftragsposten⋈Auftragsposten.art\_nr=Inventar.art\_nr​Inventar))$$
s
## e) Bestimmen Sie die Nummern und Nachnamen aller Mitarbeiter, die sowohl den Artikel mit der Nummer 104003 also auch den Artikel mit der Nummer 401001 verkauft haben. Benutzen Sie dabei für die SQL-Anfrage in der FROM-Klausel ausschließlich das Kreuzprodukt. [[CrossJoin in SQL]]

```SQL
SELECT P.pers_nr, P.vorname,P.nachname FROM Personal P
JOIN Verkauf V ON V.pers_nr = P.pers_nr
JOIN Auftragsposten A ON A.auftr_nr = V.auftr_nr
JOIN Inventar I ON I.art_nr = A.art_nr 
WHERE art_nr = 104003 AND art_nr = 401001
```
Die oben angegebene SQL-Abfrage ist syntaktisch korrekt und funktioniert im Kontext einer SQL-Datenbank, aber sie erfüllt nicht die spezifische Anforderung der Aufgabenstellung, insbesondere die Verwendung eines Kreuzprodukts (CROSS JOIN).

Crossjoin:
```SQL
SELECT DISTINCT P1.pers_nr, P1.vorname, P1.nachname
FROM Personal P1, Verkauf V1, Auftragsposten A1, Inventar I1, 
     Personal P2, Verkauf V2, Auftragsposten A2, Inventar I2
WHERE P1.pers_nr = V1.pers_nr 
AND V1.auftr_nr = A1.auftr_nr 
AND A1.art_nr = I1.art_nr 
AND I1.art_nr = 104003
AND P2.pers_nr = V2.pers_nr 
AND V2.auftr_nr = A2.auftr_nr 
AND A2.art_nr = I2.art_nr 
AND I2.art_nr = 401001
AND P1.pers_nr = P2.pers_nr;
```

---

Also nächstes: [[DBS-Blatt 6]]






<!-- DISQUS SCRIPT COMMENT START -->






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






