---
created: 2024-03-20 18:09
last modified: 2024-03-20 18:09
tags:
  - DBS
  - Erklaerung
fach: "[[DBS]]"
---

# Daten Definition Language (DDL)

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
);```

- **`attribut` – Name des Attributs.**

- **`datentyp` – Datentyp des Attributs.**
  - `CHAR(n)` – String fester Länge n.
  - `VARCHAR(n)` – String variabler Länge (maximal n).
  - `INT` – Ganze Zahl (positiv oder negativ).
  - `DECIMAL(n, m)` – Festkommazahl mit n Stellen insgesamt, m davon hinter dem Komma.
  - `FLOAT` – Gleitkommazahl, Kommazahl egal wie viele Stellen vor oder hinter dem Komma.
  
- **`constraint` – Beschränkung für das Attribut.**
  - `NOT NULL` – Attribut muss gefüllt werden.
  - `UNIQUE` – Attribut darf nicht doppelt vorkommen.
  - `PRIMARY KEY` – Attribut ist alleiniger Primärer Schlüssel.
  - `CHECK(b)` – Attribut muss Bedingung b erfüllen (z.B. CHECK attribut > 0).
  - `DEFAULT x` – Wenn nicht gefüllt, dann Defaultwert x.
  - `REFERENCES t(a)` – Fremdschlüssel, der auf Attribut a in Tabelle t verweist.

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

- `ADD` – Hinzufügen eines Attributs.
- `MODIFY` – Ändern eines Attributs.
- `DROP` – Löschen eines Attributs.
- `ADD CONSTRAINT` – Hinzufügen einer Beschränkung mit Name = constraint_name.

## Löschen von Tabellen

Um eine Tabelle zu löschen, wird die `DROP TABLE` Anweisung verwendet:

```sql
DROP TABLE tabellenname;
```

Beim Löschen einer Tabelle muss auf referenzielle Integrität geachtet werden:

- Wenn Tabelle ABC auf Tabelle A verweist, darf Tabelle A nicht zuerst gelöscht werden, da die Verweise dann in der Luft hängen (dangling references).

Diese .md Datei fasst die Anweisungen der Daten Definition Language zusammen, einschließlich der Erstellung, Änderung und Löschung von Tabellen, sowie den Definitionen von Datentypen und Constraints.