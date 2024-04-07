---
tags:
  - DBS
  - Erklaerung
fach: "[[DBS]]"
date created: Sunday, 7. April 2024, 15:57
date modified: Sunday, 7. April 2024, 17:30
---

# Was sind Transaktionen?

**Transaktion:**
- Folge von Befehlen (read,write), die die Datenbank von einem *konsistenten* Zustand in einen anderen *konsistenten* Zustand führt.

→ Einheit *integritätserhaltender* Zustandsänderung einer Datenbank

## Transaktionen (TA)

**Hauptaufgaben** von Transaktionen:
- Synchronisation (Koordination mehrerer Benutzerprozess)
- Recovery (Beheben von Fehlersituationen)

**Eigenschaften** von Transaktionen:
- *A*tomacity
- *C*onsistency
- *I*solation
- *D*urabilit

→ *ACID*

## Warum Transaktionen?

- Datenbanken werden selten von nur einem Benutzer benutzt
	→ mehrere Nutzer arbeiten *gleichzeitig* auf den Daten 
	
- Die Nutzer sollen nichts von den anderen Nutzern mitbekommen
	→ *logischer Einnutzerbetrieb*

- Pseudoparallele Ausführung der Transaktionen 
	→ bessere Auslastung des Systems
	
- Ohne Kontrolle des Ablaufs von TAs 
	→ *Anomalien* können auftreten 

# Anomalien

## Anomalien – Lost Update

- Verloren gegangene Änderung
- Zwei Transaktionen: $T_{1}$ , $T_2$

- $T_2$ ändert Object x → Änderung wird durch $T_1$ überschrieben

$\Longrightarrow$ Änderung von $T_2$ geht verloren
$\Longrightarrow$ Verstoß gegen *Durability*

## Anomalien – Dirty Read / Dirty Write

- Zugriff auf „schmutzige“ (nicht dauerhaft gültige) Daten
- Zwei Transaktionen: $T_{1}$ , $T_2$

- $T_1$ verändert Object x zwei mal
- Zwischen Änderung liest $T_2$ den Wert von x (dieser Wert bleibt aber nicht dauerhaft gültig)

$\Longrightarrow$ Verstoß gegen *Consistency*

## Anomalien – Non-Repeatable Read

- Eine Transaktion sieht während ihrer Ausführung zwei unterschiedliche Werte von einem Object
- $T_1$ liest beim ersten Auslesen von x einen anderen Wert also beim zweiten, da $T_2$ den Wert von x verändert

$\Longrightarrow$ Verstoß gegen *Isolation*

$\Longrightarrow$ Transaktionen müssen so Ausgeführt werden, dass das *ACID*-Prinzip nicht verletzt wird