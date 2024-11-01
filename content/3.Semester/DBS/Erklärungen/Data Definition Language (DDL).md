---
created: 2024-03-20 18:09
last modified: 2024-03-20 18:09
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
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

<!-- DISQUS SCRIPT COMMENT START -->

<!-- DISQUS RECOMMENDATION START -->

<div id="disqus_recommendations"></div>

<script> 
(function() { // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
var d = document, s = d.createElement('script'); // IMPORTANT: Replace EXAMPLE with your forum shortname!
s.src = 'https://myuninotes.disqus.com/recommendations.js'; s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>
Please enable JavaScript to view the 
<a href="https://disqus.com/?ref_noscript" rel="nofollow">
comments powered by Disqus.
</a>
</noscript>

<!-- DISQUS RECOMMENDATION END -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://myuninotes.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<!-- DISQUS SCRIPT COMMENT END -->
