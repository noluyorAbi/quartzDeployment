---
created: 2024-03-12 17:27
last modified: 2024-03-12 17:29
tags:
  - Erklaerung
  - DBS
fach: "[[Uni2/Semester/3.Semester/DBS/DBS]]"
---

# 3 - Ebenenarchitektur

Die 3-Ebenen-Architektur ist ein Rahmenwerk für Datenbanksysteme, das eine effiziente Datenverwaltung ermöglicht, indem es die Struktur in drei Hauptebenen unterteilt: die externe, konzeptionelle und interne Ebene. Diese Aufteilung fördert Datenabstraktion und Unabhängigkeit, verbessert die Integrität und Sicherheit der Daten und vereinfacht die Datenverwaltung.

## Ebenen der Architektur

- **Externe Ebene (Benutzersicht):**
  - Individualisierte Ansicht der Daten für verschiedene Benutzer oder Benutzergruppen.
  - Ermöglicht die Anpassung der Datenpräsentation an die spezifischen Anforderungen der Endbenutzer.
	  → *User-Interface*

- **Konzeptionelle Ebene (Gemeinsame Sicht):**
  - Zentrale Definition aller Daten, Beziehungen, Sicherheits- und Integritätsregeln.
  - Einheitliche und konsistente Sicht auf alle Daten im System.
	  → *Schema*

- **Interne Ebene (Speicherungssicht):**
  - Betrifft die physische Speicherung der Daten auf Speichermedien.
  - Beinhaltet Datenstrukturen, Speicherorte, Indexierung und Zugriffspfade.
	  → *Speicherart*

## Logische Datenunabhängigkeit

- **Definition:** Fähigkeit, das konzeptionelle Schema zu ändern, ohne dabei das externe Schema oder Anwendungen zu beeinträchtigen.
- **Vorteile:**
  - Anpassungen an der Datenbankstruktur (wie das Hinzufügen neuer Attribute) erfordern keine Änderung der Anwendungsprogramme.
  - Erleichtert die evolutionäre Entwicklung der Datenbank, um sich ändernden Geschäftsanforderungen gerecht zu werden.

## Physische Datenunabhängigkeit

- **Definition:** Fähigkeit, das interne Schema zu ändern, ohne das konzeptionelle oder externe Schema zu beeinflussen.
- **Vorteile:**
  - Änderungen an der physischen Speicherung (wie Änderungen in der Dateiorganisation oder den Zugriffsmethoden) wirken sich nicht auf die Anwendungsschicht aus.
  - Optimierungen der Datenbankperformance können durchgeführt werden, ohne die Anwendungslogik oder Benutzerinteraktionen zu stören.

Durch die Implementierung dieser Architektur und die Einhaltung der Prinzipien der logischen und physischen Datenunabhängigkeit kann ein Datenbanksystem flexibel, zuverlässig und wartungsfreundlich gestaltet werden, wobei es gleichzeitig eine hohe Datenqualität und Anwendungsfreundlichkeit bietet.