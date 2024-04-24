---
tags:
  - 4semester
  - RNVS
  - vorlesung
  - informatik
fach: "[[RNVS]]"
Thema:
date created: Friday, 19. April 2024, 09:18
date modified: Monday, 22. April 2024, 23:31
---

# TODO

- [x] Skript heraussuchen [completion:: 2024-04-25]
## Skript gekommen bis Seite: 34

# Organisatorisches

- Online Tutorium 
- Ausgabe der Übungen jeweils Montag
- Freiwillige Abgabe → werden korrigiert 
- Fragestunde 19.07
- Fragen an rnvs-fragen@nm.ifi.lmu.de bis 17.07.2024
# Worum es geht:

- Warum funktioniert das Internet, wie funktioniert es
	- Wie funktioniert WLAN 
- Resilienz ([[TCP]], [[BGP]])

# Inhalt der VL

- Motivation warum wir das ganze machen
	- Oma Opa erklären können wie das Internet funktionieren (prof means it)
	- Jeder Informatiker muss wissen wie das internet funktioniert
- Er macht einfach Klausur um zu zeigen, dass wir mit nachdenken jetzt scon bestehen????
	- Prof is goated 

# Beispielspiel wie man eine Nachricht verschickt

- Absender
- Empfänger mit eindeutiger Address (IPv4 begrenzte Anzahl an Adressen)
- *Protokoll* 
- *Schnittstelle*
- *Dienst* 
	$\Longrightarrow$ wichtigsten 3 Begriffe der VL
- Routing Entscheidung welchen Pfad/Weg die Nachricht geht. Jeder Knoten entscheidet wo es weiter geht.

# Teil 2: Grundlagen

- Alice Bob Beispiel, welches wir in der VL mit Papier gespielt haben
- **Fragestellung:**
	- Wie adressiert man einen Endpunkt im Netz?
	- Wie transportiert man die Nachrichten vom Sender zum Empfänger
	- Wie kann man zuverlässig über unzuverlässige Transportwege kommunizieren?
	- Wie können mehrere Nutzer die Ressourcen im Internet gleichzeitig nutzen?
	- Wie kann man die Komplexität bewältigen?
- Protokoll ist wie eine Sprache zwischen zwei Geräten, die über das Internet kommunizieren
- **Definition Rechnernetz:**
	- Rechnernetz ist ein Zusammenschluss unabhängiger (autonomer Computer) durch eine Kommunikationstechnologie. Diese Computer sind verbunden, wenn sie in der Lage sind, Informationen auszutauschen.
- Computernetzwerk und Rechnernetzwerk sagen ist illegal Rechnernetz ist das einzig wahre
- **Definition Verteiltes System:**
	- Nach Arbeitsweise
	- Nach Diensterbringung
	- Menge von Hardware und Software Komponenten vernetzter Rechner 
	- VS ist das Drumherum mit dem kommuniziert wird statt der Grundlage wie beim Rechnernetz
- $Rechnernetz \subset Verteiltes \ System$ aber auch $Verteiltes \ System \subset  Rechnernetz$
- Rechnernetz vs. Verteilte Systeme