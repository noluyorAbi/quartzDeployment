---
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Friday, 29. March 2024, 23:20
date modified: Tuesday, 16. April 2024, 11:03
---

# Aufgabe 8-1 **Anfragen in SQL** [[Aggregatfunktionen in SQL]]

> [!info]
> (<span style="color: red">!!!</span>) steht für Teilaufgaben mit hohem Schwierigkeitsgrad

Gegeben seien die Relationen `Professoren`, `Personal`, `Studenten`, `Vorlesungen`, `Voraussetzungen`, `hoeren` und `Pruefungen` also Datenmodell für eine Universitätsdatenbank:

- `Professoren` (`persNr`, `name`, `raum`)
- `Studenten` (`matrNr`, `name`, `semester`)
- `Vorlesungen` (`vorlNr`, `titel`, `ects`, `gelesenVon`[Professoren])
- `Voraussetzungen` (`vorausgesetzt`[Vorlesungen], `vorlesung`[Vorlesungen])
- `hoeren` (`matrNr`[Studenten],`vorlNr`[Vorlesungen])
- `Pruefungen` (`matrNr`[Studenten],`vorlNr`[Vorlesungen], `note`)

Formulieren Sie folgende Anfragen für das obige Datenbankschema in der Datenbanksprache SQL.

Hinweis: Am End des Übungsblattes finden Sie zum Verständnis eine passende Beispielausprägung des Relationenschemas. Achten Sie darauf, dass Ihre Anfrage für jede mögliche Ausprägung der Datenbank das richtige Ergebnis liefert; nicht nur für die gegebene Beispielausprägung. Darüber Hinaus finden Sie eine Beispielausprägung auch in der SQL-Schnittstelle.

### a) Bestimmen Sie für jede Vorlesung (Anzuzeigen: Nummer und Title) die Durchschnittsnote (gerundet auf drei Stellen) über alle in dem Fach stattgefundenen Prüfungen. [[Aggregatfunktionen in SQL#AVG()]]

_Zum Runden können Sie die Function `ROUND` benutzen. Beispielsweise wird das Ergebnis der Berechnung in folgender Anfrage auf drei Nachkommastellen gerundet:_

```sql
SELECT ROUND(menge*gewicht / 1000,3) FROM LTP NATURAL JOIN T
```

Lösung:

```sql
SELECT vorlNr,titel,ROUND(AVG(note),3) AS Durchschnittsnote FROM Pruefungen
NATURAL JOIN Vorlesungen
GROUP BY titel,vorlNr
```

### b) Bestimmen Sie Personalnummer und Namen eines jeden Professors, zusammen mit der Anzahl der unterschiedlichen Vorlesungen, die er hält. Professoren ohne Vorlesung sollen mit einer Vorlesungsanzahl von 0 angegeben werden.

_Sortieren Sie das Ergebnis absteigend nach der Anzahl der Vorlesungen._

```sql
SELECT persNr, name, COUNT(vorlNr) AS Anzahl_Vorlesungen FROM Professoren
LEFT JOIN Vorlesungen ON persNr = gelesenVon
GROUP BY persNr, name
ORDER BY Anzahl DESC
```

### <span style="color: red">!!!</span> c) Bestimmen Sie für jeden Studenten (Anzuzeigen: Matrikelnummer und Name), wie viele andere Studenten aus einem höheren Semester dieser kennt (d.h. beide besuchen mindestens eine Vorlesung gemeinsam). Zeigen Sie nur Studenten an, die mehr also zwei andere Studenten aus einem höheren Semester kennen.

```sql
SELECT s1.matrNr, s1.name, COUNT(DISTINCT s2.matrNr) AS Anzahl_Studenten_Aus_Hoeheren_Semestern FROM Studenten s1
JOIN hoeren h1 ON s1.matrNr = h1.matrNr
JOIN  hoeren h2 ON h1.vorlNr = h2.vorlNr AND h1.matrNr != h2.matrNr
JOIN Studenten s2 ON h2.matrNr = s2.matrNr AND s2.semester > s1.semester
GROUP BY s1.matrNr, s1.name
HAVING COUNT(DISTINCT s2.matrNr) > 2;
```

### <span style="color: red">!!!</span> d) Bestimmen Sie die Professoren (Anzuzeigen: Personalnummer und Name), für die mindestens zwei Studenten mindestens drei Vorlesungen des jeweiligen Professors hören

_Tipp: Erstellen Sie passende Views, um die Anfrage übersichtlicher zu gestalten. Benutzen Sie hierzu die Syntax aus der Vorlesung!_

```sql
CREATE VIEW AZ AS
(
SELECT matrNr, gelesenVon, COUNT(*) as anz
FROM Vorlesungen NATURAL JOIN hoeren
GROUP BY matrNr, gelesenVon
HAVING COUNT(*) >= 3
)
```

```sql
SELECT persNr, name
FROM Professoren JOIN AZ ON persNr =
GROUP BY persNr, namegelesenVon
HAVING COUNT(*) >= 2
```

#### Erklärung

- **`CREATE VIEW AZ`**: Erstellt eine temporäre Tabelle zur Vereinfachung komplexer Abfragen.
- **`SELECT matrNr, gelesenVon, COUNT(*) as anz`**: Wählt Studenten-ID, Professor-ID und zählt Vorlesungen.
- **`FROM Vorlesungen NATURAL JOIN hoeren`**: Verbindet Vorlesungen mit gehörten Vorlesungen auf Basis gleicher Spalten.
- **`GROUP BY matrNr, gelesenVon`**: Gruppiert Ergebnisse nach Student und Professor.
- **`HAVING COUNT(*) >= 3`**: Berücksichtigt nur Gruppen mit mindestens drei Vorlesungen.

- **`SELECT persNr, name`**: Wählt Professoren-ID und -Namen.
- **`FROM Professoren JOIN AZ ON persNr = gelesenVon`**: Verknüpft Professoren mit dem View, basierend auf ID.
- **`GROUP BY persNr, name`**: Gruppiert nach Professor.
- **`HAVING COUNT(*) >= 2`**: Filtert Professoren mit mindestens zwei zugehörigen Studenten.

### <span style="color: red">!!!</span> e) Bestimmen Sie für jede Vorlesung (anzuzeigen: Nummer und Title), welche mindestens eine andere Vorlesung voraussetzt, die prozentualen Anteile (gerundet auf zwei Nachkommastellen) der teilnehmenden Studenten pro Semester. Dabei interessieren uns nur Vorlesungen, die von Studenten aus unterschiedlichen Semestern gehört werden. Andere Vorlesungen sollen nicht in der Ergebnistabelle auftauchen.

_Ein Beispiel: Die Vorlesung Softwaretechnik setzt eine andere Vorlesung voraus und wird von insgesamt 6 Studenten gehört. Davon stammt ein Student aus dem fünften Semester. Also macht dieser Fünftsemestler ein Sechstel aller Hörer aus. Das entsprechende Ergebnistupel ist somit (6, 'Softwaretechnik', 5, 16,67)._

_Das Ergebnis soll sortiert werden: alphabetisch nach dem Vorlesungstitel, dann absteigend nach dem prozentualen Anteil, bei gleichem Anteil aufsteigend nach dem Semester._

_Tipp: Erstellen Sie passende Views._

```sql
CREATE VIEW Vorlesung_mit_Voraussetzung AS
(
SELECT vorlNr, titel
FROM Vorlesungen
WHERE vorlNr IN (
SELECT vorlesung
FROM Voraussetzungen)
)

```

```sql
CREATE VIEW Anzahl_Gesamt AS
(
SELECT vorlNr, COUNT(*) AS anz_ges
FROM hoeren
GROUP BY vorlNr
)
```

```sql
CREATE VIEW Anzahl_Semester AS
(
SELECT vorlNr, semester, COUNT(*) AS anz_sem
FROM hoeren NATURAL JOIN Studenten
GROUP BY vorlNr, semester
)
```

```sql
SELECT vorlNr, titel, semester, ROUND(anz_sem/anz_ges *100, 2) AS Prozent
FROM Anzahl_Semester NATURAL JOIN Anzahl_Gesamt
NATURAL JOIN Vorlesung_mit_Voraussetzung
WHERE anz_sem < anz_ges
GROUP BY vorlNr ASC ,titel ASC, Prozent DESC, semester ASC
```

#### Erklärung

Um die gestellte Aufgabe zu lösen, wurde ein schrittweiser Ansatz verfolgt, bei dem Views (virtuelle Tabellen) verwendet wurden, um die Komplexität der SQL-Anfrage zu reduzieren. Hier ist die Erklärung für jeden Schritt:

1. **View `Vorlesung_mit_Voraussetzung`**: Der erste Schritt besteht darin, alle Vorlesungen zu identifizieren, die mindestens eine andere Vorlesung also Voraussetzung haben. Dies wird erreicht, indem eine View erstellt wird, die alle `vorlNr` und `titel` aus der `Vorlesungen`-Tabelle enthält, für die es einen Eintrag in der `Voraussetzungen`-Tabelle gibt. Das bedeutet, dass nur Vorlesungen in diese View aufgenommen werden, die mindestens eine Voraussetzung haben.

2. **View `Anzahl_Gesamt`**: Der nächste Schritt ist die Erstellung einer View, die für jede Vorlesung die Gesamtanzahl der teilnehmenden Studenten berechnet. Dies wird durch Gruppierung der Einträge in der `hoeren`-Tabelle nach `vorlNr` erreicht und dann die Anzahl der Studenten pro Vorlesung (`anz_ges`) gezählt.

3. **View `Anzahl_Semester`**: Diese View ermittelt die Anzahl der teilnehmenden Studenten pro Semester für jede Vorlesung. Dazu wird eine natürliche Verknüpfung (`NATURAL JOIN`) zwischen der `hoeren`- und der `Studenten`-Tabelle verwendet, um die `semester`-Information zu den `vorlNr` zu erhalten. Anschließend wird für jede Kombination aus `vorlNr` und `semester` die Anzahl der Studenten (`anz_sem`) berechnet.

4. **Finale SQL-Anfrage**: Schließlich wird die endgültige Anfrage gestellt, um die geforderten Informationen zu erhalten. Die Anfrage verknüpft die zuvor erstellten Views (`Anzahl_Semester`, `Anzahl_Gesamt`, `Vorlesung_mit_Voraussetzung`) miteinander, um für jede Vorlesung, die eine Voraussetzung hat, die prozentualen Anteile der teilnehmenden Studenten pro Semester zu berechnen. Die Bedingung `anz_sem < anz_ges` stellt sicher, dass nur Vorlesungen berücksichtigt werden, die von Studenten aus verschiedenen Semestern besucht werden. Die Ergebnisse werden dann entsprechend den Vorgaben sortiert: alphabetisch nach dem Vorlesungstitel, absteigend nach dem prozentualen Anteil und bei gleichem Anteil aufsteigend nach dem Semester.

Durch diesen schrittweisen Ansatz wird die Komplexität der Anfrage reduziert, und es wird einfacher, das gewünschte Ergebnis zu erzielen. Jeder Schritt baut auf dem vorherigen auf, indem er eine spezifische Teilmenge der Daten vorbereitet, die dann in der finalen Anfrage verwendet wird, um das Endergebnis zu berechnen.

---

# Aufgabe 8-2 **Anfragen in SQL\***

_Diese Aufgabe bezieht sich auf das aus früheren Übungsblättern bekannte Möbel-Datenbankschema. Formulieren Sie die folgenden Anfragen in SQL. Auf der Vorlesungswebseite steht auch eine SQL-Schnittstelle für dieses Schema zur Verfügung:_

- `Kunde` (kund_nr, kund_name, address, ort, plz)
- `Personal` (pers_nr, nachname, vorname, einsatz, vorgesetzt, gehalt)
- `Verkauf` (auftr_nr, bestelldatum, pers_nr, kund_nr)
- `Inventar` (art_nr, art_bez, lagerbest, lagerort, preis)
- `Auftragsposten` (auftr_nr, art_nr, menge)

### a) Finden Sie die Artikelnummer, die Artikelbezeichnung, den Lagerort und den Lagerbestand aller in Hamburg oder München gelagerten Artikel.

```sql
SELECT art_nr, art_bez, lagerort, lagerbest FROM Inventar
WHERE lagerort = 'Hamburg' OR lagerort = 'Muenchen'
```

ODER

```sql
SELECT art_nr, art_bez, lagerort, lagerbest FROM Inventar
WHERE lagerort IN (“Hamburg”, “Muenchen”)
```

### b) Finden Sie für alle in der Tabelle Auftragsposten gespeicherten Bestellungen des Artikels mit der Nummer 203333 die Auftragsnummer, die Artikelnummer, die bestellte Menge und alle Lagerbestände und Lagerorte, an denen eine ausreichende Stückzahl des Artikels 203333 vorhanden ist.

```sql
SELECT auftr_nr,art_nr,menge,lagerbest,lagerort FROM Auftragsposten
NATURAL JOIN Inventar
WHERE art_nr = 203333 AND lagerbest >= menge
```

### c) Finden Sie die Nummern derjenigen Kunden, die keinen Auftrag erteilt haben.

```sql
SELECT K.kund_nr FROM Kunde K
LEFT JOIN Verkauf V ON K.kund_nr = V.kund_nr
WHERE auftr_nr IS NULL
```

ODER

```sql
SELECT kund_nr FROM Kunde
WHERE kund_nr NOT IN (SELECT kund_nr FROM Verkauf)
```

### d) Gesucht sind die verschiedenen Lagerorte von Artikeln in der Tabelle Inventar, die einen Lagerbestand von mindestens 8 Exemplaren haben.

```sql
SELECT DISTINCT lagerort FROM Inventar
WHERE lagerbest >= 8
```

### e) Finden Sie den Vornamen und den Nachnamen derjenigen Angestellten, die einen oder mehrere Verkäufe an Kunden aus Stuttgart bearbeitet haben.

```sql
SELECT vorname,nachname FROM Personal P
JOIN Verkauf V ON V.pers_nr = P.pers_nr
JOIN Kunde K ON K.kund_nr = V.kund_nr
WHERE K.ort = 'Stuttgart'
```

### f) Finden Sie den Nachnamen, Vornamen, Einsatzort und das Gehalt aller in der Tabelle Personal gespeicherten Angestellten. Das Ergebnis soll lexikographisch nach dem Einsatzort sortiert werden. Bei gleichem Einsatzort soll in absteigender Reihenfolge nach dem Gehalt sortiert werden.

```sql
SELECT nachname,vorname,einsatz ,gehalt FROM Personal
ORDER BY einsatz ASC, gehalt DESC
```

### g) Finden Sie die Personalnummern und das Gehalt der Angestellten mit minimalem oder maximalem Gehalt.

```sql
SELECT pers_nr,gehalt FROM Personal
WHERE gehalt = (SELECT MIN(gehalt) FROM Personal) OR gehalt = (SELECT MAX(gehalt) FROM Personal);
```

### h) Finden Sie für jeden Einsatzort die Anzahl der dort eingesetzten Angestellten.

```sql
SELECT einsatz, COUNT(pers_nr) FROM Personal
GROUP BY einsatz
```

### i) Wie hoch ist die durchschnittliche Anzahl Angestellter über alle Einsatzorte?

```sql
SELECT AVG(anzahl) FROM (
  SELECT COUNT(*) AS anzahl FROM Personal
  GROUP BY einsatz
) AS temp
```

### j) Finden Sie für jeden Artikel die Artikelnummer und die Summe der Lagerbestände in den Lagerorten, die den Artikel führen. Es sollen nur solche Artikel ausgegeben werden, die einen Gesamtbestand von mehr also 10 Stück haben.

```sql
SELECT art_nr,art_bez,SUM(lagerbest) as bestand FROM Inventar
GROUP BY art_nr,art_bez
HAVING bestand >10
```

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
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
