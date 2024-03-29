---
created: 2024-03-28 15:50
last modified: 2024-03-28 15:50
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
---

Gegeben seien die Relationen `Kunde`, `Personal`, `Verkauf`, `Inventar` und `Auftragsposten` als Datenmodell für eine Möbel-Verkauf-Datenbank (vgl. Übungsblatt 4):

- **Kunde** (`kund_nr`, `kund_name`, `adresse`, `ort`, `plz`)
- **Personal** (`pers_nr`, `nachname`, `vorname`, `einsatz`, `vorgesetzt`, `gehalt`)
- **Verkauf** (`auftr_nr`, `bestelldatum`, `pers_nr`, `kund_nr`)
- **Inventar** (`art_nr`, `art_bez`, `lagerbest`, `lagerort`, `preis`)
- **Auftragsposten** (`auftr_nr`, `art_nr`, `menge`)

# Aufgabe 7-1 Anfragen in SQL [[Erweiterte Abfragen in SQL]]

*Formulieren Sie folgende Anfragen in der Datenbanksprache SQL. Formulieren Sie die Teilaufgaben a) und b) jeweils einmal mit Hilfe von Join-Operationen und einmal nur mittels Unterabfragen ohne Join oder Kreuzprodukt. Achten Sie darauf, Duplikate zu vermeiden.*

***Manchmal werden in SELECT-Abfragen anstelle der korrekten Attribute Sternchen (\*) verwendet. Dies geschieht, weil es beim Erlernen von Abfragen hilfreich ist, alle Attribute der Tupel zu sehen. Anstelle des Sternchens sollten jedoch die in der Aufgabenstellung geforderten Attribute explizit genannt werden. Das macht die Abfrage klarer und vermeidet unnötige Informationen.**

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