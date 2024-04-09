---
created: 2024-03-20 18:09
last modified: 2024-03-20 18:09
tags: [DBS, Erklaerung]
fach: "[[DBS]]"
date created: Wednesday, 20. March 2024, 18:09
date modified: Tuesday, 9. April 2024, 16:59
---

# Daten Definition Language (DDL) / SQL

Die DDL wird verwendet, um Tabellen in einer Datenbank anzulegen, zu verändern oder zu löschen.

## Anlegen von Tabellen

Um eine neue Tabelle zu erstellen, wird die `CREATE TABLE` Anweisung verwendet:
```sql
CREATE TABLE tabellenname (
  attribut1 datentyp1 [constraint1],
  attribut2 datentyp2 [constraint2],
  ...,
  attributk datentypk [constraintk],
  [tabellenconstraint1, ..., tabellenconstraintm]
);
```

- **`attribut` – Name des Attributes.**

- **`datentyp` – Datentyp des Attributes.**
  - `CHAR(n)` – String fester Länge n.
  - `VARCHAR(n)` – String variabler Länge (maximal n).
  - `INT` – Ganze Zahl (positive oder negative).
  - `DECIMAL(n, m)` – Festkommazahl mit n Stellen insgesamt, m davon hinter dem Komma.
  - `FLOAT` – Gleitkommazahl, Kommazahl equal wie viele Stellen vor oder hinter dem Komma.
  
- **`constraint` – Beschränkung für das Attribute.**
  - `NOT NULL` – Attribute muss gefüllt werden.
  - `UNIQUE` – Attribute darf nicht doppelt vorkommen.
  - `PRIMARY KEY` – Attribute ist alleiniger Primärer Schlüssel.
  - `CHECK(b)` – Attribute muss Bedingung b erfüllen (z.B. CHECK attribute > 0).
  - `DEFAULT x` – Wenn nicht gefüllt, dann Defaultwert x.
  - `REFERENCES t(a)` – Fremdschlüssel, der auf Attribute a in Tabelle t verweist.

## Tabellenconstraints

- **`tabellenconstraint` – Gilt meist für mehrere Attribute.**
  - `PRIMARY KEY(a1, ..., ak)` – Zusammengesetzter Primärer Schlüssel.
  - `FOREIGN KEY(a1, ..., ak) REFERENCES t(b1, ..., bk)` – Wenn auf einen zusammengesetzten Schlüssel verwiesen wird.

## Verändern von Tabellen

Um eine bestehende Tabelle zu modifizieren, wird die `ALTER TABLE` Anweisung verwendet:

```sql
ALTER TABLE tabellenname
ADD (attribut datentyp);
MODIFY (attribut neuer_datentyp);
DROP (attribut);
ADD CONSTRAINT (constraint_name constraint);
```

- `ADD` – Hinzufügen eines Attributes.
- `MODIFY` – Ändern eines Attributes.
- `DROP` – Löschen eines Attributes.
- `ADD CONSTRAINT` – Hinzufügen einer Beschränkung mit Name = constraint_name.

## Löschen von Tabellen

Um eine Tabelle zu löschen, wird die `DROP TABLE` Anweisung verwendet:

```sql
DROP TABLE tabellenname;
```

Beim Löschen einer Tabelle muss auf referenzielle Integrität geachtet werden:

- Wenn Tabelle ABC auf Tabelle A verweist, darf Tabelle A nicht zuerst gelöscht werden, da die Verweise dann in der Luft hängen (dangling references).

Diese .md Datei fasst die Anweisungen der Daten Definition Language zusammen, einschließlich der Erstellung, Änderung und Löschung von Tabellen, sowie den Definitionen von Datentypen und Constraints.