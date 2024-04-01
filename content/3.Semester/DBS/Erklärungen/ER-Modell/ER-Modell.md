---
created: 2024-04-01 19:42
last modified: 2024-04-01 19:42
tags:
  - Erklaerung
  - DBS
fach: "[[Uni2/Semester/3.Semester/DBS/DBS]]"
---

# ER-Modell

- E/R steht für Entitity/Relation
- Modellierung eines Datenbankschemas:
	- Attribute der jeweiligen 
	- Zusammenhänge zwischen der jeweiligen Relation
- Erst nach der Modellierung kommt die Implementierung 

- Entity: *▭*
	- Ein Entity existiert und ist unterscheidbar von anderen Entities
- Attribut : *⬭*
	- Charakteristische Eigenschaft von Entities, Schlüssel = identifiziert Entity eindeutig
- Relation/Beziehung: *◇*
	- Zusammenhänge zwischen Entities


## 1:1 - Beziehung

![1:1 - Beziehung](Uni2/Semester/3.Semester/DBS/Erklärungen/ER-Modell/1zu1.png)

→  Zusammenfassung der beiden beteiligten Relationen zu einer
## 1:n - Beziehung

![1:n - Beziehung](Uni2/Semester/3.Semester/DBS/Erklärungen/ER-Modell/1zuN.png)

→ Fremdschlüssel (Schlüssel des One-Entities) wird in der Relation des many-Entities aufgenommen

## m:n – Beziehung

![1:n - Beziehung](Uni2/Semester/3.Semester/DBS/Erklärungen/ER-Modell/mzun.png)

→ Erzeugen einer eigenen Relation, die die Schlüssel der beteiligen Relationen enthält