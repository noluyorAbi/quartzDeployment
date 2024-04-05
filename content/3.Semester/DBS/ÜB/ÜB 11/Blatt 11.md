---
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
date created: Friday, 5. April 2024, 23:02
date modified: Saturday, 6. April 2024, 01:25
---

# Aufgabe 11-1 [[Normalformen#Synthesealgorithmus]]


>[!note] Aufgabenstellung
>Gegeben sei das folgende Relationenschema:
>**AssistentProfessorDiplomand (**
>- **PersNr**, ← Personalnummer des Assistenten
>- **Name**, ← Name des Assistenten
>- **Fachgebiet**, ← Fachgebiet des Assistenten
>- **ChefPersNr**, ← Personalnummer des Professors
>- **ChefName**, ← Name des Professors
>- **MatrNr**, ← Matrikelnummer des Studenten
>- **StudName**, ← Name des Studenten
>- **Semester**, ← Fachsemester des Studenten
>- **StudWohnOrt** ← Wohnort des Studenten
>**)**
>
>Die Relation **AssistentProfessorDiplomand** enthält die Daten von Studierenden, deren Diplomarbeit von einem Assistenten betreut wird, welcher wiederum bei einem bestimmten Professor angestellt ist.
>
>Gegeben seien folgende funktionale Abhängigkeiten:
>- **ChefPersNr** → **ChefName**
>- **PersNr** → **Name**, **Fachgebiet**, **ChefPersNr**, **ChefName**
>- **MatrNr** → **PersNr**, **Name**, **Fachgebiet**, **ChefPersNr**, **ChefName**, **StudName**, **Semester**, **StudWohnOrt**
## (a) Bestimmen Sie alle Schlüsselkandidaten.

- MatrNr ist der einzige Schlüsselkandidat da durch diesen alle anderen Attribute abhängig sind
- Weder ChefPersnr oder PersNr sind eindeutig
## (b) Überführen Sie das Relationenschema mit Hilfe des Synthesealgorithmus in die 3. Normalform.

>[!tip] Erinnerung
>Schritte des Synthesealgorithmus:
>- Linksreduktion
>- Rechtsreduktion
>- Entfernen überflüssiger Abhängigkeiten
>- Zusammenfassen
>- Relationsschema erzeugen 

### Linksreduktion

- ChefPersNr → ChefName
- PersNr → Name, Fachgebiet, ChefPersNr, ChefName
- MatrNr → PersNr, Name, Fachgebiet, ChefPersNr, ChefName, StudName, Semester, StudWohnOrt

Es gibt hier nichts zu ändern, da links jeweils nur ein Attribute steht

### Rechtsreduktion

- ChefPersNr → ChefName
	- ChefPersNr → $\emptyset$
	- ChefName kommt in PersNr vor

- PersNr → Name, Fachgebiet, ChefPersNr, ChefName
	- PersNr → $\emptyset$
	- kommt alles auch in MatrNr vor

- MatrNr → PersNr, Name, Fachgebiet, ChefPersNr, ChefName, StudName, Semester, StudWohnOrt

### Entfernen überflüssiger Abhängigkeiten



### Zusammenfassen



$$nix \ zu  \ tun, \ bleibt \ also \ so $$

### Relationsschema erzeugen


