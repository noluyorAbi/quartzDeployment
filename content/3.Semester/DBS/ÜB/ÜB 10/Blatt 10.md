---
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
date created: Thursday, 4. April 2024, 15:04
date modified: Thursday, 4. April 2024, 15:52
---
# Datenbank Schema für Gebrauchtwagen

Der Autohändler Huber möchte seinen Bestand gebrauchter Wagen in einem relationalen Datenbanksystem organisieren. Die Anforderungsanalyse ergibt eine ganze Liste zu speichernder Informationen für jedes Fahrzeug, die Huber direkt in ein relationales Schema umsetzt. Sofort beginnt er mit der Erfassung seiner Daten und erhält die folgende Relation `Auto`:

| mnr | hnr | hersteller | typ    | ps | fznr | baujahr | km-stand | n-preis | h-preis | ek-preis |
|-----|-----|------------|--------|----|------|---------|----------|---------|---------|----------|
| 1   | 1   | Opel       | Kadett | 60 | K674 | 1990    | 10000    | 18000   | 13000   | 12000    |
| 1   | 1   | Opel       | Kadett | 60 | K634 | 1988    | 34000    | 18000   | 12000   | 9000     |
| 2   | 1   | Opel       | Vectra | 90 | V459 | 1990    | 15000    | 25000   | 18000   | 17000    |
| 3   | 1   | Opel       | Omega  | 110| O634 | 1987    | 45000    | 30000   | 22000   | 15000    |
| 4   | 2   | VW         | Golf   | 90 | G789 | 1991    | 11000    | 25000   | 21000   | 16000    |
| 4   | 2   | VW         | Golf   | 90 | G713 | 1991    | 31000    | 25000   | 16000   | 13000    |
| 5   | 2   | VW         | Golf   | 105| G762 | 1992    | 28000    | 28000   | 19000   | 17000    |
| 6   | 2   | VW         | Käfer  | 60 | K634 | 1986    | 71000    | 19000   | 10000   | 8000     |

Die verschiedenen Modelle werden von Huber fortlaufend nummeriert (`mnr`). Ein bestimmtes Modell ist charakterisiert durch Hersteller, Typ und Motorleistung (`ps`). Für jedes Modell ist ferner die Fahrzeugnummer (`fznr`) eindeutig. Beide Attribute zusammen werden daher als Primärschlüssel gewählt. Nach kurzer Zeit stellt Huber fest, dass ihm seine neue Datenbank nicht so recht Freude machen will, die Datenmodellierung scheint nicht gut durchdacht.


# Aufgabe 10-1 **Probleme bei nicht normalisierten DB**

*Beschreiben Sie die Probleme (Redundanzen, Anomalien), die bei Nutzung des o.g. Relationenschemas in der Datenbank des Autohandlers auftreten können.*