---
tags:
  - DBS
  - Erklaerung
fach: "[[DBS]]"
date created: Wednesday, 10. April 2024, 21:58
date modified: Wednesday, 10. April 2024, 21:58
---

# Kanonische Überdeckung in Relationalen Datenbanken

## Ziel der Kanonischen Überdeckung

Das Ziel der kanonischen Überdeckung ist es, in einer relationalen Datenbank jede Information genau einmal zu speichern und keine Redundanzen zuzulassen. Durch die Normalisierung in einzelne Relationen wird dieses Ziel erreicht.

## Vorteile

- **Vermeidung von Redundanzen:** Redundanzen erhöhen den Speicherbedarf und können zu Inkonsistenzen führen.
- **Verbesserte Datenintegrität:** Die Daten werden konsistent gespeichert.
- **Erhöhte Effizienz:** Datenabfragen können effizienter durchgeführt werden.
- **Erleichterte Datenpflege:** Änderungen an den Daten müssen nur an einer Stelle durchgeführt werden.

## Nachteile

- **Erhöhte Komplexität:** Die Datenbankstruktur kann durch die Normalisierung komplexer werden.
- **Erhöhter Performanceaufwand:** Die Durchführung von Abfragen kann durch die Normalisierung langsamer werden.

## Voraussetzungen

- **Strukturierung:** Die Daten müssen strukturiert sein.
- **Vollständigkeit und Konsistenz:** Die Daten müssen vollständig und konsistent sein.

## Definition und Unbestimmtheit

Die kanonische Überdeckung \( F_c \) einer Menge funktionaler Abhängigkeiten \( F \) ist durch den Einsatz eines spezifischen Algorithmus charakterisiert, welcher jedoch zu unterschiedlichen Ergebnissen führen kann, da er nicht eindeutig ist.

### Algorithmus zur Bestimmung der Kanonischen Überdeckung

1. **Zerlegung in triviale und nichttriviale funktionale Abhängigkeiten (FDs):**
   - Trivial: FDs, deren linke Seite ein Superkey ist.
   - Nichttrivial: FDs, deren linke Seite kein Superkey ist.

2. **Eliminierung von redundanten FDs:** Entfernung von FDs, die aus anderen FDs ableitbar sind.

3. **Transformation in Boyce-Codd-Normalform (BCNF):** Zerlegung von FDs, deren linke Seite kein Superkey ist, in mehrere FDs, sodass jede linke Seite ein Superkey wird.

### Beispiel

Gegeben seien die funktionalen Abhängigkeiten:

- A -> B
- B -> C
- C -> A

Nach dem Algorithmus könnten zwei mögliche kanonische Überdeckungen entstehen:

- **Fc1:** {A -> B, B -> C}
- **Fc2:** {AB -> C, BC -> A}

## Fazit
