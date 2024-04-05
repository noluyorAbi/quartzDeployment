---
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
date created: Friday, 5. April 2024, 23:02
date modified: Saturday, 6. April 2024, 01:50
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
>- Entfernung von rechtsleeren Abhängigkeiten
>- Zusammenfassen von Abhängigkeiten mit gleicher linker Seite
>- Neues Relationsschema erzeugen 
>- Rekonstruktion eines Schlüsselkandidaten:
>- Elimination überflüssiger Relationen

### Linksreduktion

- ChefPersNr → ChefName
- PersNr → Name, Fachgebiet, ChefPersNr, ChefName
- MatrNr → PersNr, Name, Fachgebiet, ChefPersNr, ChefName, StudName, Semester, StudWohnOrt

Es gibt hier nichts zu ändern, da links jeweils nur ein Attribute steht

### Rechtsreduktion

- **ChefPersNr → ChefName**
	- bleibt unverändert

- **PersNr → Name, Fachgebiet, ChefPersNr, ChefName**
	- wird zu *PersNr → Name, Fachgebiet, ChefPersNr*
	- weil Chefname kommt in ChefPersNr schon vor 

- **MatrNr → PersNr, Name, Fachgebiet, ChefPersNr, ChefName, StudName, Semester, StudWohnOrt**
	- wird zu: *MatrNr → PersNr,, StudName, Semester, StudWohnOrt*
	- alles Andere kommts schon in PersNr und ChefPersNr vor

### Entfernung von rechtsleeren Abhängigkeiten

- gibt keine überflüssige Abhängigkeit

### Zusammenfassen von Abhängigkeiten mit gleicher linker Seite

- keine gleiche linke Seite

### Relationsschema erzeugen

$$R_1(\underline{ChefPersNr},ChefName)$$
$$~{R_2(\underline{PersNr},Name, Fachgebiet, ChefPersNr, ChefName)}$$
$$~{R_3(\underline{MatrNr},PersNr, Name, Fachgebiet, ChefPersNr, ChefName, StudName, Semester, StudWohnOrt)}$$

### Rekonstruktion eines Schlüsselkandidaten:

→ Diplomand enthält Schlüsselkandidaten (MatrNr)

### Elimination überflüssiger Relationen

→ nichts zu tun