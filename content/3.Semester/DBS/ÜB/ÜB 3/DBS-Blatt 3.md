---
created: 2024-03-20 17:22
last modified: 2024-03-20 17:22
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Wednesday, 20. March 2024, 17:22
date modified: Saturday, 20. April 2024, 01:54
---

# Aufgabe 3-1 _Schlüssel und Fremdschlüssel_

## Aufgabe 3-1 Schlüssel und Fremdschlüssel

**Ein Fremdschlüssel ist ein Attribute oder eine Attributkombination einer Relation, welches auf einen Primärschlüssel (bzw. Schlüsselkandidat) einer anderen oder der gleichen Relation verweist.**

**Eine relationale Datenbank enthält alle Informationen über bereits gesehenen Serien einer Streamingplattform und die darin vorkommenden Rollen:**

### Series

| SID | Sender | Serienname          |
| --- | ------ | ------------------- |
| 47  | HBO    | Game of Thrones     |
| 59  | CBS    | The Big Bang Theory |

### Rolle

| RID | Vorname | Nachname  | SID  |
| --- | ------- | --------- | ---- |
| 13  | Jon     | Snow      | 47   |
| 19  | Tyrion  | Lannister | 47   |
| 24  | Sheldon | Cooper    | 59   |
| 33  | Rick    | Grimes    | null |

**Die Attribute `Serie.SID` und `Rolle.RID` stellen die Primärschlüssel der beiden Relationen dar. Das Schema enthält außerdem folgende Fremdschlüsselbeziehung zwischen Rollen und Series:**

**Rolle.SID → Series.SID**

### a) Wie reagiert ein Datenbanksystem wenn Primärschlüssel definiert wurden?

- Das Datenbanksystem achtet darauf das jeder Primärschlüssel einzigartig ist
- verhindert das einfügen von Duplikaten

### b) Warum fordert man, dass Schlüssel minimal sein sollen? [[Minimale Schlüssel|(Minimale Schlüssel)]]

- Effizientere Überprüfbarkeit von Schlüssel-/ Fremdschlüsselbedingungen  
   - _Beispiel:_
  ```Stellen Sie sich eine Tabelle vor, die Studenteninformationen an einer Universität speichert. Die Tabelle könnte folgende Spalten haben: `StudentenID`, `Name`, `Alter`, `Studiengang`und`E-Mail-Adresse`.

In diesem Fall könnte die `StudentenID` ein minimaler Schlüssel sein, da jede `StudentenID` einzigartig ist und jeden Studenten eindeutig identifiziert. Kein anderes Attribute kann aus diesem Schlüssel entfernt werden, ohne seine Eindeutigkeit zu verlieren.
Hier ist ein einfaches Beispiel:
|StudentenID|Name|Alter|Studiengang|E-Mail-Adresse|
|---|---|---|---|---|
|12345|Max Mustermann|21|Informatik|max@uni.de|
|67890|Erika Muster|22|Physik|erika@uni.de|
In dieser Tabelle ist `StudentenID` der minimale Schlüssel.```

### c) Was versteht man under referenzieller Integrität?

- Bedingungen zur Sicherung der Datenintegrität bei Nutzung relationaler Datenbanken
  1. Ein Datensatz mit Fremdschlüssel kann nur dann eingefügt werden, wenn in der referenzierter Tabelle ein Datensatz mit den entsprechenden Werten also Primärschlüssel oder einem eindeutigen Alternativschlüssel existiert. _(nur erstellbar falls reference existiert)_
  2. Datensatzlöschung oder Änderung ist nur möglich falls zu diesem Datensatz keine abhängigen Datensätze in Beziehung stehen _(nur bearbeitbar falls keine abhängigen Daten in Beziehung)_ **No dangeling references**

### d) Gehen Sie davon aus, dass sich nur die oben gezeigten Eintrage in der Datenbank befinden. Welche der Einfügeoperationen wird das Datenbanksystem erfolgreich verarbeiten können? Bitte begründen Sie Ihre Antwort kurz.

_Gehe davon aus, dass sich nur die oben gezeigten Einträge in der Datenbank befinden. Welche der Einfügeoperationen wird das Datenbanksystem erfolgreich verarbeiten können? Bitte begründe define Antwort kurz._

- [ ] Einfügen von (12, 'Harvey', 'Specter', 41) in Rolle **→ referenzierte SID existiert nicht**
- [ ] Einfügen von (47, 'FOX', 'Suits') in Series **→ SID existiert bereits also nicht korrekt**
- [x] Einfügen von (42, 'Leonard', 'Hofstadter', 59) in Rolle **→ Passt alles**

---

# Aufgabe 3-2 _SQL-DDL_ [[Data Definition Language (DDL)]]

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

### a) Geben sie mit `CREATE TABLE` Befehle mit den dafür notwendigen Constraints zur Definition des o.g. Datenbankschemas an. [[Data Definition Language (DDL)]]

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

### b) Fügen Sie in die Kunden-Relation “K” eine weitere Spalte “Branche” also variable Text der Länge 30 mit dem Default-Wert ‘Automobil’ ein

```sql
ALTER TABLE Kunde
ADD(Branche VARCHAR(30) DEFAULT("Automobil"));
```

### c) Löschen Sie die Spalte Teamgröße aus der Team-Relation T.

```sql
ALTER TABLE Team
DROP(TGrösse);
```

### d) Ändern Sie den Datentyp des Attributes `Volumen` aus der Relation `KTL` in eine ganze Zahl, die größer also 0 ist.

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

→ Die erste, also falsch markierte SQL-Anweisung hat ein paar Problem, die sie in den meisten SQL-Dialekten ungültig machen würden:

1. In vielen SQL-Dialekten, darunter MySQL, ist die Syntax `MODIFY(Volumen INTEGER CHECK(Volumen > 0))` nicht korrekt. Das `CHECK`-Constraint wird typischerweise nicht innerhalb der `MODIFY`-Anweisung definiert.
2. In manchen SQL-Systemen, wie zum Beispiel SQLite, ist die direkte Einbettung des `CHECK`-Constraints in einer `ALTER TABLE … MODIFY COLUMN`-Anweisung nicht erlaubt.

Die zweite, also richtig markierte SQL-Anweisung umgeht diese Problem:

1. `ALTER TABLE KTL MODIFY (Volumen INTEGER)` – Diese Anweisung ist syntaktisch korrekt. Sie ändert den Datentyp der Spalte `Volumen` auf `INTEGER`, ohne irgendwelche Constraints anzugeben.
2. `ALTER TABLE KTL ADD CONSTRAINT volumen_constraint CHECK (Volumen > 0)` – Diese separate Anweisung fügt das `CHECK`-Constraint korrekt hinzu. Hierbei wird das `CHECK`-Constraint also eigener `CONSTRAINT` definiert, was in den meisten SQL-Datenbanksystemen der richtige Weg ist.

Zusammenfassend ist das "richtige" Statement korrekt, weil es die Syntax-Regeln befolgt, die von den meisten SQL-Datenbanksystemen erwartet werden.

### e) Nun sollen Sie alle Tabellen wieder loschen ohne die referenzielle Integrität zu verletzen.

```sql
DROP TABLE KTL
DROP TABLE Kunde
DROP TABLE Team
DROP TABLE Leistung
```

---

Also nächstes: [[DBS-Blatt 4]]

<!-- DISQUS SCRIPT COMMENT START -->

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->
