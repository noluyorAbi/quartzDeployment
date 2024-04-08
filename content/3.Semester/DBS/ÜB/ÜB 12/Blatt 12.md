---
tags:
  - DBS
  - Übungsblatt
fach: "[[DBS]]"
date created: Monday, 8. April 2024, 12:24
date modified: Monday, 8. April 2024, 12:30
---
# Aufgabe 12-1 [[ER-Modell]]

>[!note] Aufgabenstellung
>In einer relationalen Datenbank sollen Informationen über die XXIII. Olympischen Winterspiele in Pyeongchang gespeichert werden.
>
>Die einzelnen Wettkämpfe besitzen eine Wettkampfnummer, den Namen der Sportart, einen Termin und eine Wettkampfstätte. An jedem Wettkampf nehmen beliebig viele Sportler teil, die durch eine Startnummer identifiziert werden. Jeder Wettkampf wird von genau einem Schiedsrichter geleitet, der eine eindeutige Schiedsrichternummer besitzt. Es sollen die Nationen mit eindeutigem Kürzel und dem vollen Namen abgespeichert werden. Jede Person besitzt einen Namen und gehört zu einer Nation.
>
>Entwerfen Sie zu diesem Zweck ein E/R-Modell.
>
>Setzen Sie das vollständige E/R-Diagramm in ein entsprechendes relationales Datenbankschema um. Identifizieren Sie für jede Relation einen Primärschlüssel und unterstreichen Sie diesen. Achten Sie auf eine geeignete Modellierung der Relationships. Sie müssen keine SQL-DDL-Befehle angeben.
## (a) Entwerfen Sie zu diesem Zweck ein E/R-Modell.

- Zunächst müssten Entitäten für Wettkämpfe, Sportler, Schiedsrichter und Nationen erstellt werden
- Wettkämpfe sind durch eine Wettkampfnummer eindeutig identifizierbar, welche der Primärschlüssel wäre
- Sportler werden durch eine Startnummer identifiziert, Schiedsrichter durch eine Schiedsrichternummer
- Nationen sind durch ein Kürzel eindeutig, was hier der Primärschlüssel wäre
## (b) Setzen Sie das E/R-Diagramm in ein relationales Datenbankschema um.

- Relationen könnten sein: Wettkämpfe, Sportler, Schiedsrichter, Nationen
- Die Relationships zwischen Sportlern und Wettkämpfen sowie Schiedsrichtern und Wettkämpfen müssen modelliert werden
- Es wird eine n:m-Beziehung zwischen Sportlern und Wettkämpfen angenommen, da mehrere Sportler an mehreren Wettkämpfen teilnehmen können
- Eine 1:n-Beziehung zwischen Schiedsrichtern und Wettkämpfen, da ein Schiedsrichter mehrere Wettkämpfe leiten kann, aber ein Wettkampf nur einen Schiedsrichter hat
- Jeder Sportler gehört zu einer Nation, was eine n:1-Beziehung darstellt