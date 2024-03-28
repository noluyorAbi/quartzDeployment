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

# Aufgabe 7-1 Anfragen in SQL

*Formulieren Sie folgende Anfragen in der Datenbanksprache SQL. Formulieren Sie die Teilaufgaben a) und b) jeweils einmal mit Hilfe von Join-Operationen und einmal nur mittels Unterabfragen ohne Join oder Kreuzprodukt. Achten Sie darauf, Duplikate zu vermeiden.*

### a) Finden Sie die Nummern und Bezeichnungen aller Artikel, deren Preis entweder dem Gehalt von Roswita Hartinger oder Margot Winter entspricht. (Zusatzanforderung oben beachten!)

### b) Geben Sie alle Kundennamen an, die am 24.07.2023 etwas von einem Mitarbeiter mit dem Einsatzort Hamburg gekauft haben. (Zusatzanforderung oben beachten!)

### c) Erzeugen Sie eine Liste aller Mitarbeiter Vornamen, Nachnamen und Gehalt und zwar absteigend sortiert nach Gehalt. Bei gleichem Gehalt wird alphabetisch aufsteigend zunächst nach Nachnamen und dann nach Vornamen sortiert.

### d) Bestimmen Sie die Artikelnummern, Artikelbezeichnung und Preise des Inventars, die den niedrigsten Preis aufweisen. D.h. es gibt keinen Artikel mit einem niedrigerem Preis.

### e) Finden Sie die Artikelnummern, die von mindestens zwei unterschiedlichen Kunden mit Wohnsitz in Stuttgart gekauft wurden.
