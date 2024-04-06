---
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
date created: Friday, 5. April 2024, 23:02
date modified: Saturday, 6. April 2024, 02:06
---

# Aufgabe 11-1 [[Normalformen und Synthesealgorithmus#Synthesealgorithmus]]


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

---

# Aufgabe 11-2 [[Kombinatorik von Schedules#Kombinatorik von Schedules]]

>[!note] Aufgabenstellung
>Gegeben sei eine Menge von n Transaktionen **{T1, ..., Tn}**, wobei jede Transaktion **Ti** aus vielen Einzeloperationen besteht:
>**Ti = ⟨Ai,1, Ai,2, ..., Ai,in⟩**
>
>**Beispiel:**
>- **T1 = ⟨A1,1, A1,2, A1,3, A1,4⟩**
>- **T2 = ⟨A2,1, A2,2, A2,3⟩**
>- **T3 = ⟨A3,1, A3,2, A3,3⟩**
>
>Erläutern Sie für das Beispiel **{T1, T2, T3}** sowie für den allgemeinen Fall **{T1, ..., Tn}**:
## (a) Wieviele beliebige Schedules gibt es?
## (b) Wieviele serielle Schedules gibt es?
## (c) Wieviele serialisierbare Schedules gibt es?

---
# Aufgabe 11-3 [[Serialisierbarkeit von Schedules#Serialisierbarkeit von Schedules]]

>[!note] Aufgabenstellung
>Geben Sie für die folgenden Beispiele jeweils den vollständigen Abhängigkeitsgraphen sowie ggf. einen äquivalenten seriellen Schedule an bzw. begründen Sie kurz, warum dieser nicht existiert.
## (a) S1 = (w1(x), w2(y), w3(x), r1(x), r2(z), w4(y), r4(z), w4(x), r3(y), r1(z))
## (b) S2 = (w1(x), r4(x), r1(y), r1(z), w1(z), w3(x), r4(z), w3(y), w2(y), w2(z))

---
# Aufgabe 11-4 [[Anomalien in Datenbanksystemen]]

>[!note] Aufgabenstellung
>Welche Anomalien treten in den folgenden Schedules auf? Begründen Sie Ihre Antwort.
## (a) S1 = (r1(x), r2(y), w2(x), r1(z), r1(x), w2(y), w1(z))
## (b) S2 = (r2(y), r1(x), w2(x), w2(y), w1(x))
## (c) S3 = (r1(x), r2(z), w1(y), r2(y), w1(x), w2(z), w1(y))