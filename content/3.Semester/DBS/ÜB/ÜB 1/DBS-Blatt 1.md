---
created: 2024-03-11 17:05
last modified: 2024-03-11 17:05
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 11. March 2024, 17:05
date modified: Tuesday, 16. April 2024, 11:02
---


# Aufgabe 1-1
## a) Welche 9 Zentralen Anforderungen an Ein Datenbanksystem Definierte Edgar Codd?
 
- **Integration** → Verwaltung aller von Anwendung benötigten Daten 
- **Operation** → Operation zur Speicherung, Manipulation der Daten müssen vorhanden sein 
- **Data Dictionary** → Katalog erlaubt Zugriff auf die die Beschreibung der Daten
- **Benutzersichten** → Für unterschiedliche Anwendungen unterschiedliche Sicht auf Bestand
- **Konsistenzüberwachung** → [[Datenbankmanagementsystem (DBMS)| DBMS]] überwacht Korrektheit der Daten bei Änderung
- **Zugriffskontrolle** → Ausschluss unautorisierter Zugriffe
- **Transaktionen** → Zusammenfassung von Änderungsoperationen zu einer Einheit 
- **Synchronisation** → Arbeiten mehrerer Benutzer gleichzeitig mit der DB
- **Datensicherung** → Widerherstellung des DB zu dem Zustand nach der Transaktion
## b) Was Versteht Man under Logischer Und Physischer Datenunabhängigkeit

- **logische Datenunabhängigkeit:** Ändern des Schemas der Datenbank ohne zu ändern wie eine Anwendung auf diese Daten zugreift [[3 - Ebenenarchitektur#Logische Datenunabhängigkeit| (logische Datenunabhängigkeit)]]
- **physische Datenunabhängigkeit:** Ändern wie die Daten gespeichert werden (z.B. Festplatte) ohne Beeinträchtigung der Datenstruktur oder der Anwendungen [[3 - Ebenenarchitektur#Physische Datenunabhängigkeit| (physische Datenunabhängigkeit)]]

# Aufgabe 1-2

## Betrachten Wir Die Mengen A = {a, b, c} Und Z = {1, 2, 3, 4} Und Eine Zweistellige Relation R Dazwischen. Wenn Zum Beispiel Die Elemente a ∈ A Und 2 ∈ Z in Der Relation R Stehen, Druckt Man Das Mathematisch so Aus: aR2 Oder (a, 2) ∈ R. Graphisch Kann Man Es so Veranschaulichen, Dass Man Die Elemente Der Beiden Mengen Hinzeichnet Und Zwischen a Und 2 Eine Linie Zieht:

## Mit Dieser Veranschaulichung Sind Die Mathematischen Definitionen Praktisch Nur Bedingungen, Wie viele Linien Mit Den Elementen Verbunden Sein Müssen Oder Dürfen

### a) Das Kartesische Product A × Z

- Alles aus *A* mit allem aus *Z*
$$
M = \{(a,1),(a,2),(a,3),(a,4)(b,1),(b,2),(b,3),(b,4),(c,1),(c,2),(c,3),(c,4)\}
$$

### b) Eine Totale Function Von A Nach Z

- Jedes Element in *A* hat genau einen Partner in Z (<u>nicht keinen, nicht mehrere</u>)
- Elemente in *Z* dürfen keinen, einen oder mehrere Partner in *A* haben
- → A hat mindestens ein Element aus Z 

- $M = \{(a,1),(b,2),(c,1) \}$

### Eine zweistellige Relation zwischen A und Z, die keine Function ist. (D.h. weder von A nach Z noch von Z nach A.)

- $M = \{(a,1),(a,2),(b,1),(c,3) \}$

---

Also nächstes: [[DBS-Blatt 2]]