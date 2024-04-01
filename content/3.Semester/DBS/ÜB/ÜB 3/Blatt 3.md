---
created: 2024-03-20 17:22
last modified: 2024-03-20 17:22
tags:
  - DBS
  - Übungsblatt
fach: "[[Uni2/Semester/3.Semester/DBS/DBS]]"
---

# Aufgabe 3-1 *Schlüssel und Fremdschlüssel*

## Aufgabe 3-1 Schlüssel und Fremdschlüssel

**Ein Fremdschlüssel ist ein Attribut oder eine Attributkombination einer Relation, welches auf einen Primärschlüssel (bzw. Schlüsselkandidat) einer anderen oder der gleichen Relation verweist.**

**Eine relationale Datenbank enthält alle Informationen über bereits gesehenen Serien einer Streamingplattform und die darin vorkommenden Rollen:**
### Serie

| SID | Sender | Serienname          |
|-----|--------|---------------------|
| 47  | HBO    | Game of Thrones     |
| 59  | CBS    | The Big Bang Theory |

### Rolle

| RID | Vorname | Nachname  | SID  |
| --- | ------- | --------- | ---- |
| 13  | Jon     | Snow      | 47   |
| 19  | Tyrion  | Lannister | 47   |
| 24  | Sheldon | Cooper    | 59   |
| 33  | Rick    | Grimes    | null |

**Die Attribute `Serie.SID` und `Rolle.RID` stellen die Primärschlüssel der beiden Relationen dar. Das Schema enthält außerdem folgende Fremdschlüsselbeziehung zwischen Rollen und Serie:**

**Rolle.SID → Serie.SID**

### a) Wie reagiert ein Datenbanksystem wenn Primärschlüssel definiert wurden?

 - Das Datenbanksystem achtet darauf das jeder Primärschlüssel einzigartig ist
 - verhindert das einfügen von Duplikaten 

### b) Warum fordert man, dass Schlüssel minimal sein sollen? [[Uni2/Semester/3.Semester/DBS/Erklärungen/Schlüsselkonzepte und Integrität/Minimale Schlüssel|(Minimale Schlüssel)]]

- Effizientere Überprüfbarkeit von Schlüssel-/ Fremdschlüsselbedingungen  
	- *Beispiel:*
```Stellen Sie sich eine Tabelle vor, die Studenteninformationen an einer Universität speichert. Die Tabelle könnte folgende Spalten haben: `StudentenID`, `Name`, `Alter`, `Studiengang` und `E-Mail-Adresse`.
	
In diesem Fall könnte die `StudentenID` ein minimaler Schlüssel sein, da jede `StudentenID` einzigartig ist und jeden Studenten eindeutig identifiziert. Kein anderes Attribut kann aus diesem Schlüssel entfernt werden, ohne seine Eindeutigkeit zu verlieren.
	
Hier ist ein einfaches Beispiel:
	
|StudentenID|Name|Alter|Studiengang|E-Mail-Adresse|
|---|---|---|---|---|
|12345|Max Mustermann|21|Informatik|max@uni.de|
|67890|Erika Muster|22|Physik|erika@uni.de|
	
In dieser Tabelle ist `StudentenID` der minimale Schlüssel.```


### c) Was versteht man unter referenzieller Integrität?

- Bedingungen zur Sicherung der Datenintegrität bei Nutzung relationaler Datenbanken
	 1. Ein Datensatz mit Fremdschlüssel kann nur dann eingefügt werden, wenn in der referenzierter Tabelle ein Datensatz mit den entsprechenden Werten als Primärschlüssel oder einem eindeutigen Alternativschlüssel existiert. *(nur erstellbar falls referenz existiert)*
	 2. Datensatzlöschung oder Änderung ist nur möglich falls zu diesem Datensatz keine abhängigen Datensätze in Beziehung stehen *(nur bearbeitbar falls keine abhängigen Daten in Beziehung)* **No dangeling references**


### d) Gehen Sie davon aus, dass sich nur die oben gezeigten Eintrage in der Datenbank befinden. Welche der Einfügeoperationen wird das Datenbanksystem erfolgreich verarbeiten können? Bitte begründen Sie Ihre Antwort kurz.

*Gehe davon aus, dass sich nur die oben gezeigten Einträge in der Datenbank befinden. Welche der Einfügeoperationen wird das Datenbanksystem erfolgreich verarbeiten können? Bitte begründe deine Antwort kurz.*

- [ ] Einfügen von (12, 'Harvey', 'Specter', 41) in Rolle **→ referenzierte SID existiert nicht**
- [ ] Einfügen von (47, 'FOX', 'Suits') in Serie **→ SID existiert bereits also nicht korrekt**
- [x] Einfügen von (42, 'Leonard', 'Hofstadter', 59) in Rolle **→ Passt alles**


---

# Aufgabe 3-2 *SQL-DDL* [[Uni2/Semester/3.Semester/DBS/Erklärungen/Datenbanksprachen/Data Definition Language (DDL)]]

**Es ist die Datenbank eines Softwareunternehmens gegeben, welches spezielle Anwendungen für unterschiedliche Kunden entwickelt. Die Datenbank beinhaltet die Relationen Kunde K, Team T und Leistung L. Zusätzlich existiert die Relation KTL, welche die Aufträge beinhaltet und so die Beziehungen der vorgenannten Relationen modelliert.**

## Relationen
- **Kunde (K):**
  - K (KNr, KName, Ansprechpartner)

- **Team (T):**
  - T (TNr, TLeiter, TGröße, Stundensatz)

- **Leistung (L):**
  - L (LNr, Bezeichnung, Komplexität)

- **Kundenteamleistung (KTL):**
  - KTL (KNr, TNr, LNr, Volumen, Datum)

### Attribute und Beschränkungen
- Die Schlüssel der jeweiligen Relationen sind integer Werte.
- **TGröße** ist eine positive ganze Zahl.
- **Komplexität** ist eine ganze Zahl kleiner oder gleich 10.
- **Stundensatz** ist eine Festkommazahl mit insgesamt 5 Stellen, davon 2 Nachkommastellen.
- **Volumen** ist eine mit maximaler Länge von 50 Zeichen.
- Alle übrigen Attribute sind variable Strings.
- Die Attribute KName, TLeiter und Bezeichnung müssen immer einen Wert enthalten.

### a) Geben sie mit `CREATE TABLE` Befehle mit den dafür notwendigen Constraints zur Definition des o.g. Datenbankschemas an.  [[Uni2/Semester/3.Semester/DBS/Erklärungen/Datenbanksprachen/Data Definition Language (DDL)]]

- **Kunde**
```sql
CREATE TABLE Kunde 
(
KNr INTEGER primary key,
KName VARCHAR(50) NOT NULL ,
Ansprechpartner VARCHAR(50),
)
```

- **Team** 
```sql
CREATE TABLE Team
(
TNr INTEGER primary key,
TLeiter VARCHAR(50) NOT NULL,
TGrösse INTEGER CHECK (TGrösse> 0),
Stundensatz DECIMAL(5,2),
)
```

- **Leistung**
```sql
CREATE TABLE 
(
LNr INTEGER PRIMARY KEY,
Bezeichnung VARCHAR(50) NOT NULL,
Komplexität INETEGER CHECK (Komplexität <= 10)
)
```

- **KTL**
```sql
KNr INTEGER REFERENCES Kunde(KNr),
TNr INTEGER REFERENCES Team(TNr),
LNr INTEGER REFERNCES Leistung(LNr),
Volumen FLOAT,
Datum CHAR(10),
PRIMARY KEY (KNr, TNr, LNr)
```


### b) Fügen Sie in die Kunden-Relation “K” eine weitere Spalte “Branche” als variablen Text der Länge 30 mit dem Default-Wert ‘Automobil’ ein

```sql
ALTER TABLE Kunde 
ADD(Branche VARCHAR(30) DEFAULT("Automobil"));
```

### c) Löschen Sie die Spalte Teamgröße aus der Team-Relation T.

```sql
ALTER TABLE Team
DROP(TGrösse);
```

### d) Ändern Sie den Datentyp des Attributs `Volumen` aus der Relation `KTL` in eine ganze Zahl, die größer als 0 ist.

# FALSCH: X
```sql
ALTER TABLE KTL
MODIFY(Volumen INTEGER CHECK(Volumen > 0))
```

# RICHTIG: V
```sql
ALTER TABLE KTL 
MODIFY (Volumen INTEGER)

ALTER TABLE KTL 
ADD CONSTRAINT volumen_constraint CHECK (Volumen > 0)
```


→ Die erste, als falsch markierte SQL-Anweisung hat ein paar Probleme, die sie in den meisten SQL-Dialekten ungültig machen würden:

1. In vielen SQL-Dialekten, darunter MySQL, ist die Syntax `MODIFY(Volumen INTEGER CHECK(Volumen > 0))` nicht korrekt. Das `CHECK`-Constraint wird typischerweise nicht innerhalb der `MODIFY`-Anweisung definiert.
2. In manchen SQL-Systemen, wie zum Beispiel SQLite, ist die direkte Einbettung des `CHECK`-Constraints in einer `ALTER TABLE ... MODIFY COLUMN`-Anweisung nicht erlaubt.

Die zweite, als richtig markierte SQL-Anweisung umgeht diese Probleme:

1. `ALTER TABLE KTL MODIFY (Volumen INTEGER)` – Diese Anweisung ist syntaktisch korrekt. Sie ändert den Datentyp der Spalte `Volumen` auf `INTEGER`, ohne irgendwelche Constraints anzugeben.
2. `ALTER TABLE KTL ADD CONSTRAINT volumen_constraint CHECK (Volumen > 0)` – Diese separate Anweisung fügt das `CHECK`-Constraint korrekt hinzu. Hierbei wird das `CHECK`-Constraint als eigener `CONSTRAINT` definiert, was in den meisten SQL-Datenbanksystemen der richtige Weg ist.

Zusammenfassend ist das "richtige" Statement korrekt, weil es die Syntax-Regeln befolgt, die von den meisten SQL-Datenbanksystemen erwartet werden.

### e) Nun sollen Sie alle Tabellen wieder loschen ohne die referenzielle Integrität zu verletzen. 

```sql
DROP TABLE KTL 
DROP TABLE Kunde 
DROP TABLE Team
DROP TABLE Leistung
```


---

Als nächstes: [[Uni2/Semester/3.Semester/DBS/ÜB/ÜB 4/Blatt 4]]