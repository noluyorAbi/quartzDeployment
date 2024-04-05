---
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
date created: Friday, 5. April 2024, 23:02
date modified: Friday, 5. April 2024, 23:06
---

# Aufgabe 11-1 [[Normalformen#Synthesealgorithmus]]

Gegeben sei das folgende Relationenschema:

**AssistentProfessorDiplomand (**
- **PersNr**, ← Personalnummer des Assistenten
- **Name**, ← Name des Assistenten
- **Fachgebiet**, ← Fachgebiet des Assistenten
- **ChefPersNr**, ← Personalnummer des Professors
- **ChefName**, ← Name des Professors
- **MatrNr**, ← Matrikelnummer des Studenten
- **StudName**, ← Name des Studenten
- **Semester**, ← Fachsemester des Studenten
- **StudWohnOrt** ← Wohnort des Studenten
**)**

Die Relation **AssistentProfessorDiplomand** enthält die Daten von Studierenden, deren Diplomarbeit von einem Assistenten betreut wird, welcher wiederum bei einem bestimmten Professor angestellt ist.

Gegeben seien folgende funktionale Abhängigkeiten:
- **ChefPersNr** → **ChefName**
- **PersNr** → **Name**, **Fachgebiet**, **ChefPersNr**, **ChefName**
- **MatrNr** → **PersNr**, **Name**, **Fachgebiet**, **ChefPersNr**, **ChefName**, **StudName**, **Semester**, **StudWohnOrt**


## (a) Bestimmen Sie alle Schlüsselkandidaten.



## (b) Überführen Sie das Relationenschema mit Hilfe des Synthesealgorithmus in die 3. Normalform.
