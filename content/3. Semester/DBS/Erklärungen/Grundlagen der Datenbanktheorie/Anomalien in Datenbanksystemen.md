---
created: 2024-03-14 18:09
last modified: 2024-03-14 18:09
tags:
  - DBS
  - Erklaerung
fach: "[[Uni2/Semester/3. Semester/DBS/DBS]]"
---
# Anomalien in Datenbanksystemen

In Datenbanksystemen können Anomalien auftreten, wenn die Datenstruktur nicht sorgfältig entworfen ist. Diese Unstimmigkeiten können die Integrität der Datenbank beeinträchtigen und führen oft zu inkonsistenten oder fehlerhaften Daten. Die Haupttypen von Anomalien sind:

## Einfügeanomalie

- **Beschreibung**: Schwierigkeiten beim Hinzufügen neuer Daten.
- **Problem**: Notwendige Daten fehlen, um einen neuen Eintrag hinzuzufügen, weil jede Information in der Tabelle von anderen abhängig ist.
- **Beispiel**: Ein neues Produkt kann nicht hinzugefügt werden, ohne dass ein zugehöriger Kunde existiert.

## Entfernungsanomalie

- **Beschreibung**: Unbeabsichtigtes Löschen von Daten.
- **Problem**: Beim Löschen eines Datensatzes gehen zusätzliche, unbeabsichtigte Informationen verloren.
- **Beispiel**: Das Löschen eines Mitarbeiters führt zum Verlust seiner zugeordneten Projektdaten.

## Änderungsanomalie

- **Beschreibung**: Inkonsistenzen beim Ändern von Daten.
- **Problem**: Änderungen an Daten in einer Tabelle müssen mehrfach durchgeführt werden, um Konsistenz zu gewährleisten.
- **Beispiel**: Ändern der Adresse eines Kunden erfordert mehrere Änderungen, wenn der Kunde mehrmals in der Tabelle aufgeführt ist.

## Redundanz

- **Beschreibung**: Überflüssige Kopien von Daten.
- **Problem**: Mehrfache und unnötige Speicherung derselben Daten, was zu Speicherplatzverschwendung und potenziellen Inkonsistenzen führt.
- **Beispiel**: Ein Kunde ist mit der gleichen Adresse in mehreren Datensätzen gespeichert, was zu Schwierigkeiten bei der Aktualisierung führt.

## Vermeidung von Anomalien

- **Normalisierung**: Durchführen von Normalisierungsprozessen, um die Daten in logische Einheiten zu unterteilen und Redundanzen zu reduzieren.
- **Integritätsregeln**: Implementieren von Datenintegritätsregeln wie Primärschlüssel, Fremdschlüssel, Check-Constraints, um die Konsistenz der Daten zu gewährleisten.

Das Verständnis und die Vermeidung dieser Anomalien sind entscheidend für die Aufrechterhaltung der Datenintegrität, der Effizienz der Datenmanipulation und der allgemeinen Zuverlässigkeit eines Datenbanksystems.
