---
created: 2024-03-28 15:50
last modified: 2024-03-28 15:50
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Thursday, 28. March 2024, 15:50
date modified: Tuesday, 9. April 2024, 17:20
---

Gegeben seien die Relationen `Kunde`, `Personal`, `Verkauf`, `Inventar` und `Auftragsposten` also Datenmodell für eine Möbel-Verkauf-Datenbank (vgl. Übungsblatt 4):

- **Kunde** (`kund_nr`, `kund_name`, `adresse`, `ort`, `plz`)
- **Personal** (`pers_nr`, `nachname`, `vorname`, `einsatz`, `vorgesetzt`, `gehalt`)
- **Verkauf** (`auftr_nr`, `bestelldatum`, `pers_nr`, `kund_nr`)
- **Inventar** (`art_nr`, `art_bez`, `lagerbest`, `lagerort`, `preis`)
- **Auftragsposten** (`auftr_nr`, `art_nr`, `menge`)

# Aufgabe 7-1 Anfragen in SQL [[Erweiterte Abfragen in SQL]]

_Formulieren Sie folgende Anfragen in der Datenbanksprache SQL. Formulieren Sie die Teilaufgaben a) und b) jeweils einmal mit Hilfe von Join-Operationen und einmal nur mittels Unterabfragen ohne Join oder Kreuzprodukt. Achten Sie darauf, Duplikate zu vermeiden._

**\*Manchmal werden in SELECT-Abfragen anstelle der korrekten Attribute Sternchen (\*) verwendet. Dies geschieht, weil es beim Erlernen von Abfragen hilfreich ist, alle Attribute der Tuple zu sehen. Anstelle des Sternchens sollten jedoch die in der Aufgabenstellung geforderten Attribute explicit genannt werden. Das macht die Abfrage klarer und vermeidet unnötige Informationen.**

### a) Finden Sie die Nummern und Bezeichnungen aller Artikel, deren Preis entweder dem Gehalt von Roswita Hartinger oder Margot Winter entspricht. (Zusatzanforderung oben beachten!)

**JOIN:**

```sql
SELECT DISTINCT art_nr,art_bez FROM Inventar JOIN Personal ON gehalt=preis
WHERE  ((vorname = "Roswita" AND nachname = "Hartinger") OR (vorname = "Margot" AND nachname = "Winter"))
```

**UNTERABFRAGE (optimal)**

```sql
SELECT DISTINCT art_nr, art_bez
FROM Inventar
WHERE preis IN (
    SELECT gehalt
    FROM Personal
    WHERE (vorname = "Roswita" AND nachname = "Hartinger")
       OR (vorname = "Margot" AND nachname = "Winter")
);
```

- WHERE preis und dann SELECT gehalt weil diese Attribute verknüpft werden sollen, da diese identisch sind

**UNTERABFRAGE (nicht optimal)**

```sql
SELECT DISTINCT art_nr,art_bez FROM Inventar I
WHERE (
preis = (
SELECT DISTINCT gehalt FROM Personal as RH
WHERE vorname = "Roswita" AND nachname = "Hartinger" )
OR
preis =(
SELECT DISTINCT gehalt FROM Personal as RH
WHERE vorname = "Margot" AND nachname = "Winter" )
)
```

### b) Geben Sie alle Kundennamen an, die am 24.07.2023 etwas von einem Mitarbeiter mit dem Einsatzort Hamburg gekauft haben. (Zusatzanforderung oben beachten!)

**JOIN:**

```sql
SELECT DISTINCT kund_name FROM Kunde
JOIN Verkauf ON Kunde.kund_nr=Verkauf.kund_nr
JOIN Personal ON Personal.pers_nr=Verkauf.pers_nr
WHERE bestelldatum = "2019-07-24" AND einsatz = "Hamburg"
```

**UNTERABFRAGE:**

```sql
SELECT DISTINCT kund_name
FROM Kunde
WHERE kund_nr IN (
    SELECT kund_nr
    FROM Verkauf
    WHERE bestelldatum = '2023-07-24'
    AND pers_nr IN (
        SELECT pers_nr
        FROM Personal
        WHERE einsatz = 'Hamburg'
    )
);
```

- WHERE kund_nr und dann SELECT kund_nr da die Relationen mit dieser Attribute verknüpft werden soll

### c) Erzeugen Sie eine Liste aller Mitarbeiter Vornamen, Nachnamen und Gehalt und zwar absteigend sortiert nach Gehalt. Bei gleichem Gehalt wird alphabetisch aufsteigend zunächst nach Nachnamen und dann nach Vornamen sortiert.

```sql
SELECT vorname,nachname,gehalt FROM Personal
ORDER BY gehalt DESC, nachname ASC, vorname ASC
```

### d) Bestimmen Sie die Artikelnummern, Artikelbezeichnung und Preise des Inventars, die den niedrigsten Preis aufweisen. D.h. es gibt keinen Artikel mit einem niedrigerem Preis.

```sql
SELECT art_nr, art_bez,preis FROM Inventar
ORDER BY preis ASC
LIMIT 1
```

**ODER**

```sql
SELECT art_nr, art_bez, preis
FROM Inventar
WHERE preis = (SELECT MIN(preis) FROM Inventar);
```

### e) Finden Sie die Artikelnummern, die von mindestens zwei unterschiedlichen Kunden mit Wohnsitz in Stuttgart gekauft wurden. [[Erweiterte Abfragen in SQL#Reihenfolge]]

```sql
SELECT A.art_nr
FROM Auftragsposten A
JOIN Verkauf V ON A.auftr_nr = V.auftr_nr
JOIN Kunde K ON V.kund_nr = K.kund_nr
WHERE K.ort = 'Stuttgart'
GROUP BY A.art_nr
HAVING COUNT(DISTINCT K.kund_nr) >= 2;
```

---

# Aufgabe 7-2 **Anfragen in SQL** [[Erweiterte Abfragen in SQL]]

### a) Finden Sie die Nummern und Namen aller Kunden, die noch nie etwas gekauft haben.

```sql
SELECT * FROM Kunde
WHERE kund_nr NOT IN (SELECT kund_nr FROM Verkauf)
```

### b) Finden Sie die Nummern und Nachnamen aller Angestellten (Personal), welche allen Kunden mit Wohnsitz Landshut bereits etwas verkauft haben

Die Aufgabe besteht darin, die Nummern und Nachnamen aller Angestellten (Tabelle `Personal`) zu finden, die allen Kunden mit Wohnsitz in Landshut (Tabelle `Kunde`) bereits etwas verkauft haben.

Die Lösung verwendet eine SQL-Anfrage mit einer `NOT EXISTS`-Klausel, die eine verschachtelte Unterabfrage beinhaltet:

```sql
SELECT P.pers_nr, P.nachname
FROM Personal P
WHERE NOT EXISTS (
    SELECT * FROM Kunde K
    WHERE K.ort = 'Landshut'
    AND NOT EXISTS (
        SELECT * FROM Verkauf V
        WHERE V.pers_nr = P.pers_nr
        AND V.kund_nr = K.kund_nr
    )
);
```

#### Erklärung der SQL-Anfrage:

- `NOT EXISTS` = `FOR ALL` $(\ \forall \ )$ [[Erweiterte Abfragen in SQL#Existenzquantor simulieren / Allquantor|Allquantor in SQL]]

- In SQL werden `NOT EXISTS`-Unterabfragen typischerweise von innen nach außen ausgewertet:

- `SELECT P.pers_nr, P.nachname`: Dies wählt die Mitarbeiter-Nummer (`pers_nr`) und den Nachnamen (`nachname`) aus der Tabelle `Personal`.

- `FROM Personal P`: Die Daten werden aus der Tabelle `Personal` abgerufen, wobei der Alias `P` für die Tabelle verwendet wird.

- `WHERE NOT EXISTS ( ... )`: Diese Klausel wird verwendet, um nur die Angestellten auszuwählen, für die die folgende Bedingung zutrifft: Es gibt keinen Kunden aus Landshut, dem sie nicht etwas verkauft haben. [[Erweiterte Abfragen in SQL#Existenzquantor simulieren / Allquantor|Allquantor in SQL]]

  - `SELECT * FROM Kunde K WHERE K.ort = 'Landshut'`: Innerhalb der `NOT EXISTS`-Klausel wählt diese Unterabfrage alle Kunden aus Landshut aus.

  - `AND NOT EXISTS ( ... )`: Diese Klausel prüft, ob es für den jeweiligen Kunden aus der inneren Abfrage keinen Verkaufseintrag gibt, der dem aktuellen Angestellten (`P.pers_nr`) zugeordnet ist.

    - `SELECT * FROM Verkauf V WHERE V.pers_nr = P.pers_nr AND V.kund_nr = K.kund_nr`: Diese Unterabfrage überprüft, ob es Verkaufsdatensätze gibt, die den Kunden (`K.kund_nr`) mit dem Angestellten (`P.pers_nr`) verbinden.

#### Funktionsweise:

Die Anfrage ermittelt Angestellte, die an jeden Kunden in Landshut mindestens einmal verkauft haben, indem sie sicherstellt, dass es keinen Kunden aus Landshut gibt, für den nicht mindestens ein Verkauf durch den Angestellten getätigt wurde. Nur wenn für einen Angestellten keine solche Ausnahme gefunden wird, wird er in das Ergebnis aufgenommen.

Also nächstes: [[DBS-Blatt 8]]

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
