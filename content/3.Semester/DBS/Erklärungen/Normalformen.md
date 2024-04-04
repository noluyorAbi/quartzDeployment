---
tags:
  - DBS
  - Erklaerung
fach: "[[DBS]]"
date created: Monday, 11. March 2024, 16:07
date modified: Thursday, 4. April 2024, 19:01
---

# Warum Normalformen?

- **Redundanzen im DB-Schema erzeugen [[Anomalien in Datenbanksystemen]]**
	- [[Anomalien in Datenbanksystemen#Änderungsanomalie]] → Wenn eine Änderung vergessen wird, entsteht eine Inkonsistenz.
	- [[Anomalien in Datenbanksystemen#Einfügeanomalie]] → Das Einfügen eines partiellen Eintrags ist nicht möglich.
	- [[Anomalien in Datenbanksystemen#Entfernungsanomalie]] → Das Entfernen des letzten Eintrags löscht ungewollt Informationen.
- **Ziele**: 
	- Vermeidung von Redundanzen und Anomalien.
	- Schrittweise Beseitigung funktionaler Abhängigkeiten (außer vom gesamten Schlüssel).

→ Zerlegen des Schemas in ein äquivalentes Schema ohne Redundanzen und Anomalien ist gleichbedeutend mit der Normalisierung.

---

# Funktionale Abhängigkeiten

Seien 𝑋, 𝑌 Attributmengen des Relationenschemas 𝑅, d.h. 𝑋, 𝑌 ⊆ 𝑅. Y ist von X funktional abhängig (oder X bestimmt Y funktional), das heißt 𝑋 → 𝑌 gilt genau dann, wenn für alle möglichen Ausprägungen von R gilt: Zu jedem Wert in X existiert genau ein Wert in Y. Formal ausgedrückt: 𝑋 → 𝑌 ⇔ ∀𝑟1, 𝑟2 ∈ 𝑅: 𝑟1.𝑋 = 𝑟2.𝑋 ⇒ 𝑟1.𝑌 = 𝑟2.𝑌.

## Beispiele für funktionale Abhängigkeiten

- **Triviale funktionale Abhängigkeit**: 𝑋 → 𝑌, falls 𝑌 eine Teilmenge von 𝑋 ist. Beispiel: Passnummer → Passnummer.
- **Voll funktionale Abhängigkeit**: 𝑋 → 𝑌, falls keine echte Teilmenge 𝑋' von 𝑋 existiert, sodass 𝑋' → 𝑌. Beispiel: Passnummer → Name.
- **Partiell funktionale Abhängigkeit**: Wenn eine Teilmenge 𝑋' von 𝑋 existiert, sodass 𝑋' → 𝑌. Beispiel: Passnummer, Land → Name.
- **Transitive funktionale Abhängigkeit**: Wenn 𝑋 → 𝑌 und 𝑌 → 𝑍, dann gilt auch 𝑋 → 𝑍. Beispiel: Passnummer → Ort, da Passnummer → PLZ und PLZ → Ort.

---

# Schlüssel

Eine Teilmenge 𝑆 der Attribute eines Relationenschemas 𝑅 heißt Schlüssel, falls gilt:
1. **Eindeutigkeit**: Keine mögliche Ausprägung von 𝑅 kann zwei verschiedene Tuple enthalten, die sich in allen Attribute von 𝑆 gleichen.
2. **Minimalität**: Keine echte Teilmenge von 𝑆 erfüllt bereits Bedingung (1).
Ein Attribute heißt primär, falls es Teil eines Schlüsselkandidaten ist.

---

# Attributhülle

**Eingabe**: Eine Menge F von funktionalen Abhängigkeiten und eine Menge X von Attribute.
**Ausgabe**: Die vollständige Menge von Attribute 𝑋+ für die gilt 𝑋 → 𝑋+, also die Menge an Attribute, die man von X mit allen F herleiten kann. Solange es Änderungen an 𝑋+ gibt, geht man jede FD 𝑌 → 𝑍 aus F durch. Wenn die linke Seite eine echte Teilmenge von aktueller 𝑋+ ist, dann ist Z in der neuen 𝑋+.

---

# Zerlegung von Relationen

Eine Zerlegung von Relation 𝑅 in 𝑅1, … , 𝑅𝑛 ist:
- **Verlustlos**, falls gilt: Jede mögliche Ausprägung 𝑟 von 𝑅 lässt sich durch den natürlichen Join der Ausprägungen 𝑟1, … , 𝑟𝑛 konstruieren: 𝑟 = 𝑟1 ⋈ ⋯ ⋈ 𝑟𝑛.
- **Abhängigkeitserhaltend**, falls gilt: Alle FD ∈ F auf 𝑅 bleiben in den lokalen funktionalen Abhängigkeiten Fi bewahrt: F = F1 ∪ ⋯ ∪ Fn.

---

# Normalformen

## 1. Normalform (1NF)

Alle Attribute enthalten atomare Werte (String, Integer, …) und keine Tuple, Listen, usw. In relationalen Datenbanken sind nicht-atomare Werte nicht erlaubt/möglich, daher sind relationale Datenbanken immer in 1. Normalform.

→ In dieser Vorlesung oft schon erfüllt.

---

## 2. Normalform (2NF)

Für jedes Attribute A in einer Relation gilt in der 2. Normalform, dass:
- A ein Primärattribut ist (also Teil eines Schlüsselkandidaten) oder
- A voll funktional abhängig von jedem Schlüsselkandidaten ist.

**Primärattribut** bedeutet, dass das Attribute Teil eines Schlüsselkandidaten ist. Ein **Schlüsselkandidat** ist eine minimale Menge von Attribute, die eindeutig jede Tuple in einer Relation identifizieren kann.

**Voll funktional abhängig** bedeutet, dass die Abhängigkeit zwischen einem Attribute und einem Schlüsselkandidaten komplett ist. Das heißt, das Attribute kann nur eindeutig identifiziert oder abgeleitet werden, wenn der gesamte Schlüsselkandidat bekannt ist, nicht nur ein Teil davon. 

Die 2NF beseitigt **partielle funktionale Abhängigkeiten** von Nicht-Primärattributen von einem Teil eines zusammengesetzten Schlüssels, indem sichergestellt wird, dass jedes Nicht-Primärattribut vollständig von jedem Schlüsselkandidaten abhängt. Das führt zu einer Reduzierung von Redundanzen und Anomalien bei der Datenmanipulation.

---

## 3. Normalform (3NF)

> [!tip] Merkhilfe
> Schauen alle Abhängigkeiten an, linke Seite immer Schlüssel oder rechts immer primäre Attribute
> $$\underbrace{\underbrace{mnr,fznr}_{Schlüsselkandidaten}→ baujahr, km-stand, n-preis, h-preis, ek-preis}_{Erfüllt \ 3.NF}$$


**Nicht-triviale funktionale Abhängigkeiten 𝑋 → 𝑌** bedeuten, dass das Attribut-Set 𝑌 nicht vollständig innerhalb des Attribut-Sets 𝑋 enthalten ist und 𝑌 funktional von 𝑋 abhängt. Das heißt, die Kenntnis von 𝑋 ermöglicht es eindeutig, 𝑌 zu bestimmen, ohne dass 𝑌 ein Teil von 𝑋 ist. 

In der 3. Normalform (3NF) wird gefordert, dass:
- *2.NF erfüllt ist* 
- *Für alle nicht-trivialen funktionalen Abhängigkeiten 𝑋 → 𝑌 muss 𝑋 einen Schlüsselkandidaten enthalten (bzw. kein Nichtschlüsselattribut hängt von keinem anderen Nichtschlüsselattribut ab)*, oder
- *𝑌 muss ein Primärattribut sein.*


Die **3NF** baut auf der **2. Normalform (2NF)** auf und zielt darauf ab, transitive Abhängigkeiten zwischen Nicht-Schlüsselattributen zu beseitigen. Das heißt, es dürfen keine funktionalen Abhängigkeiten zwischen Nicht-Schlüsselattributen bestehen, die über einen Umweg (transitiv) von einem Schlüsselkandidaten abhängen. So wird sichergestellt, dass die Relationen frei von Anomalien sind, die bei Einfüge-, Lösch- oder Änderungsoperationen entstehen können, und dass die Datenintegrität gewahrt bleibt.

<details> 
<summary>### Beispiel</summary>

Stellen wir uns eine Datenbanktabelle `Angestellter` vor, die folgende Spalten hat:

- `AngestelltenID` (Primärschlüssel)
- `Name`
- `AbteilungsID`
- `Abteilungsname`

Hier sind die funktionalen Abhängigkeiten:

- `AngestelltenID → Name, AbteilungsID`
- `AbteilungsID → Abteilungsname`

Die Tabelle ist nicht in der 3. Normalform, weil `Abteilungsname` funktional von `AbteilungsID` abhängt, welches kein Teil des Primärschlüssels ist (transitive Abhängigkeit).

**Um die 3. Normalform zu erreichen**, teilen wir die Tabelle in zwei:

1. `Angestellter`:
   - `AngestelltenID`
   - `Name`
   - `AbteilungsID`

2. `Abteilung`:
   - `AbteilungsID`
   - `Abteilungsname`

Jetzt hängt in jeder Tabelle jedes Nicht-Schlüsselattribut direkt vom Primärschlüssel ab, ohne transitive Abhängigkeiten. Dies entspricht der 3. Normalform.
</details>

---

# Synthesealgorithmus

Der Synthesealgorithmus wird verwendet, um ein beliebiges Relationenschema R mit funktionalen Abhängigkeiten F in Relationen 𝑅1, … , 𝑅𝑛 zu zerlegen, für die gilt:

- 𝑅1, … , 𝑅𝑛 ist eine verlustlose Zerlegung von R.
- 𝑅1, … , 𝑅𝑛 ist abhängigkeitserhaltend.
- 𝑅1, … , 𝑅𝑛 sind alle in 3. Normalform.

---

# Boyce–Codd Normalform (BCNF)

Für alle nicht-trivialen funktionalen Abhängigkeiten 𝑋 → 𝑌 gilt:
- 𝑋 enthält Schlüsselkandidaten.

Die BCNF beseitigt funktionale Abhängigkeiten under Attribute, die primär sind, aber nicht vollständig einen Schlüssel bilden. BCNF impliziert die 3. Normalform, aber man kann nicht immer eine BCNF-Zerlegung finden, die die Abhängigkeiten bewahrt.

---

