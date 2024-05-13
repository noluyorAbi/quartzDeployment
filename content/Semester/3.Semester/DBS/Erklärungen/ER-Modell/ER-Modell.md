---
tags: [DBS, Erklaerung]
fach: "[[DBS]]"
date created: Monday, 1. April 2024, 19:42
date modified: Monday, 8. April 2024, 14:00
---

# ER-Modell

- E/R steht für Entity/Relation
- Modellierung eines Datenbankschemas:
	- Attribute der jeweiligen 
	- Zusammenhänge zwischen der jeweiligen Relation
- Erst nach der Modellierung kommt die Implementierung 

- Entity: *▭*
	- Ein Entity existiert und ist unterscheidbar von anderen Entities
- Attribute : *⬭*
	- Charakteristische Eigenschaft von Entities, Schlüssel = identifiziert Entity eindeutig
- Relation/Beziehung: *◇*
	- Zusammenhänge zwischen Entities


## 1:1 - Beziehung

![1:1 - Beziehung](1zu1.png)

→ Zusammenfassung der beiden beteiligten Relationen zu einer
## 1:n - Beziehung

![1:n - Beziehung](1zuN.png)

→ Fremdschlüssel (Schlüssel des One-Entities) wird in der Relation des many-Entities aufgenommen

## m:n – Beziehung

![1:n - Beziehung](mzun.png)

→ Erzeugen einer eigenen Relation, die die Schlüssel der beteiligen Relationen enthält