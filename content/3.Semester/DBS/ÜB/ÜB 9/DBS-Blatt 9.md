---
created: 2024-04-01 19:40
last modified: 2024-04-01 19:41
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 1. April 2024, 19:40
date modified: Tuesday, 16. April 2024, 11:03
---

# Aufgabe 9-1: **Beziehungen**

_Geben Sie für jeden der folgenden Beziehungstypen mindestens ein Beispiel an:_

### a) 1:1

Jeder deutsche Staatsbürger wird durch eine einzigartige Personalausweisnummer identifiziert, und jeder Personalausweisnummer ist genau ein Bürger zugeordnet.

- Student besitzt Matrikelnummer
- Nummernschild gehört zu Fahrzeugnummer

### b) 1:n

Jeder Mensch hat eine Mutter, aber jede Mutter kann mehrere Kinder haben

- In einer Abteilung sind mehrere Mitarbeiter angestellt
- Person ist Halter von mehreren Autos

### c) m:n

Ein Auto kann von mehreren Personen genutzt werden, mehrere personen können aber auch mehrere Autos benuzten

- Kunde kauft Product (mehrere Kunden können mehrere Produkte kaufen)
- Lieferant liefert Artikel

### d) m:n:k, D. h. eine mehrstellige Beziehung zwischen drei Entity-Sets

Mehrere Firmen können zum Mittagessen zu mehreren verschiedenen Restaurants gehen welchewiederum von verschiedenen Lieferanten ihre Lebensmittel bestellen

- Lieferant liefert Artikel an Kunde
- Person besucht Konzert in Stadt
- Krankheit besitzt Symptom und wird behandelt mit Medikament

### e) 1:n Rekursiv, d. h. eine 1:n-Beziehung eines Entity-Sets zu sich selbs

- Mitarbeiter ist Chef von Mitarbeiter
- Person ist Mutter von Person

### f) m:n Rekursiv

- Person ist Nachkomme von Person
- Vorlesung ist Voraussetzung für Vorlesung
- Person ist befreundet mit Perso

---

> [!info]
> Die nachfolgenden Aufgaben erfordern graphische Darstellungen. Da das Hochladen von Lösungsbildern aus erster Quelle nicht bevorzugt wird, wurden die graphischen Lösungen in textueller Form beschrieben. Bitte beachten Sie, dass diese Beschreibungen möglicherweise nicht besonders präzise sind. Es wird empfohlen, die Lösungen in den Folien zu betrachten.

---

# Aufgabe 9-2: **Ableitung eines ER-Diagramms** [[ER-Modell|ER-Modell]]

_Gegeben sei die folgende relationale **Geschäftsdatenbank** einer Kaufhauskette:_

- **\*Angestellter** (`Nummer`, `Name`, `Gehalt`, `Abteilung`, `Geburtsjahr`, `Einstellungsdatum`)\*
- **\*Abteilung** (`Nummer`, `Name`, `Filiale`, `Stock`, `Leiter` [Angestellter])\*
- **\*Filiale** (`Nummer`, `Stadt`, `Land`)\*
- **\*Lieferant** (`Nummer`, `Name`, `Stadt`, `Land`)\*
- **\*Artikel** (`Nummer`, `Name`, `Abteilung`, `Preis`, `Bestand`, `Lieferant`)\*
- **\*Verkauf** (`Nummer`, `Datum`, `Artikel`, `Anzahl`, `Angestellter`, `Betrag`)\*

_Leiten Sie für die **Geschäftsdatenbank** aus den Relationen ein vollständiges ER-Diagramm mit Entities, Relationships und Attribute ab._

### Entitäten und Attribute

- **Angestellter**: Attribute: Nummer, Name, Gehalt, Geburtsjahr, Einstellungsdatum.
- **Abteilung**: Attribute: Nummer, Name, Stock. Leiter ist ein Angestellter.
- **Filiale**: Attribute: Nummer, Stadt, Land.
- **Lieferant**: Attribute: Nummer, Name, Stadt, Land.
- **Artikel**: Attribute: Nummer, Name, Preis, Bestand. Zugehörig zu einer Abteilung und einem Lieferanten.
- **Verkauf**: Keine eigenständige Entität, sondern dargestellt also Beziehung mit Attribute Datum, Anzahl, Betrag zwischen Artikel und Angestellter.

### Beziehungen

- **Angestellter und Abteilung**: 1:n. Jeder Angestellte ist einer Abteilung zugeordnet. Eine Abteilung hat einen Angestellten also Leiter (1:1).
- **Abteilung und Filiale**: 1:n. Jede Abteilung gehört zu einer Filiale.
- **Artikel, Abteilung, und Lieferant**: Artikel sind einer Abteilung (1:n) und einem Lieferant (1:n) zugeordnet.
- **Verkauf**: Repräsentiert Transaktionen zwischen Artikeln und Angestellten. Attribute wie Datum, Anzahl und Betrag kennzeichnen die Transaktion.

---

# Aufgabe 9-3 **Ableitung eines E/R Diagrams**

_Für eine Nikolaus-Geschenkeaktion, die an unterschiedlichen Schulen stattfindet, wird ein E/R-Diagramm zur besseren Übersicht benötigt. Bei dieser Aktion können sich `Nikoläuse` anmelden, um eine oder mehrere `Klassen` zu besuchen, in der `Kinder` gespendete `Geschenke` erhalten._

_Folgende Informationen sollen im Diagram enthalten sein:_

- _Jeder angemeldete Nikolaus gibt seinen `Namen` und seine `Kleidergröße` an._
- _Eine Klasse wird durch den `Namen` des `Klassenlehrers` und eine für die jeweilige Schule eindeutige `Zimmernummer` beschrieben._
- _Zusätzlich wird gespeichert, zu welcher Schule eine Klasse gehört. Eine `Schule` definiert sich durch einen `Namen` und eine `Adresse`._
- _Jede Klasse wird nur von einem Nikolaus an einem bestimmten `Datum` besucht._
- _Innerhalb der Klassen gibt es mehrere Kinder, die jeweils einen `Namen` und ein `Geburtsdatum` haben._
- _Die vorhandenen Geschenke können eindeutig durch die `Farbe` des `Geschenkbandes` und das `Motiv` des `Geschenkpapiers` zugeordnet werden. Außerdem besitzt jedes Geschenk ein `Gewicht`._
- _Ein Geschenk wird von einem oder mehreren `Spendern`, welche einen `Namen` und ein `Alter` haben, an ein bestimmtes Kind verschenkt._
- _Ein Spender kann mehrere Geschenke verschenken und Kinder können mehrere Geschenke erhalten._
- _Es soll angenommen werden, dass alle verwendeten `Namen` innerhalb einer Entity eindeutig sind._

_Geben Sie das entsprechende E/R-Diagramm mit den Funktionalitäten an. Unterstreichen Sie dabei Attribute, die zum `Primärschlüssel` gehören. Verwenden Sie für die Beziehungen die aus der Vorlesung bekannte `Pfeilnotation`._

### Beschreibung

Das E/R-Diagramm stellt das Datenmodell für eine Nikolaus-Geschenkeaktion an Schulen dar. Es umfasst vier Entitätstypen: `Schule`, `Klasse`, `Kind`, `Nikolaus`, `Geschenk` und `Spender`, sowie mehrere Beziehungen zwischen diesen.

1. **Schule**: Diese Entität wird durch die Attribute `Name` und `Adresse` charakterisiert. Der `Name` der Schule könnte hier also Primärschlüssel fungieren, da angenommen wird, dass jeder Name einzigartig ist.

2. **Klasse**: Jede `Klasse` gehört zu genau einer `Schule`, was durch die Beziehung `Gehört zu` ausgedrückt wird. Die `Klasse` wird durch die Attribute `ZimmerNr` und `NameLehrer` definiert. Die `ZimmerNr` könnte in Verbindung mit dem Schulnamen also zusammengesetzter Primärschlüssel dienen, da Zimmernummern nur innerhalb einer Schule eindeutig sein müssen.

3. **Kind**: Dieser Entitätstyp hat die Attribute `Name` und `Geb-Datum`. Jedes `Kind` gehört zu genau einer `Klasse`, dargestellt durch die Beziehung `in`.

4. **Nikolaus**: Nikoläuse werden durch ihre `Name` und `Kleidergröße` identifiziert. Ein `Nikolaus` besucht eine `Klasse` an einem bestimmten `Datum`, was durch die Beziehung `besucht` gekennzeichnet ist. Diese Beziehung ist datumsbezogen und impliziert, dass unterschiedliche Nikoläuse am selben Datum verschiedene Klassen besuchen können.

5. **Geschenk**: Ein `Geschenk` wird eindeutig durch `Bandfarbe`, `Papiermotiv` und `Gewicht` identifiziert. Diese Attribute zusammen stellen den Primärschlüssel dar.

6. **Spender**: `Spender` werden durch `Name` und `Alter` beschrieben. Ein `Spender` kann mehrere `Geschenke` schenken, und ein `Geschenk` kann von mehreren `Spendern` gespendet werden, was durch eine n:m-Beziehung repräsentiert wird.

Die Beziehungen zwischen `Geschenken` und `Kindern` sowie `Geschenken` und `Spendern` sind ebenfalls also n:m charakterisiert, was bedeutet, dass ein `Kind` mehrere `Geschenke` erhalten und ein `Geschenk` von mehreren `Spendern` geschenkt werden kann.

In der Klausur sollte auch auf die Nutzung von Pfeilnotation hingewiesen werden, die die Kardinalität der Beziehung angibt. Ebenfalls wichtig ist der Hinweis auf die Notwendigkeit, die Primärschlüssel-Attribute zu unterstreichen, was im vorliegenden Diagram noch umgesetzt werden müsste. Die Eindeutigkeit der `Namen` in jeder Entität ist eine spezifische Annahme dieses Modells und muss im realen Einsatz durch entsprechende Geschäftsregeln oder Datenbankconstraints sichergestellt werden.

---

# Aufgabe 9-4 **Ableitung eines Relationenschemas**

_Erzeugen Sie entsprechend der Vorlesung (Kapitel 6 Folien 16-24) aus dem gegebenen E/R-Diagramm eines Christkindlmarktes ein vollständiges Relationenschema. Unterstreichen Sie dabei in jeder Relation den Primärschlüssel und überstreichen Sie die Fremdschlüssel. Begründen Sie Ihre Umsetzung der Relationship 'freier Eintritt'._

> [!info]
> Darstellung bitte aus dem Blatt entnehmen.

## Lösung

${Besitzer(\underline{GewerbeNr}, Name)}$

${Gegenstand(\underline{Bezeichnung}, Preis)}$

${Stand(\underline{PlatzNr}, Name, \overline{GewerbeNr})}$

${Arbeiten(\underline{\overline{PlatzNr, PersNr}})}$

${Kaufen(\underline{\overline{SteuerId, PersNr, Bezeichnung}},Anzahl)}$

#### Umsetzung „freier_Eintritt“

1. **Integration einer Relation in die andere** – Wenn freier Eintritt häufig verwendet wird und Anfragen meist über Mitarbeiter oder Besucher gemacht werden:

   - ${Mitarbeiter(\underline{PersNr}, Name, \overline{SteuerId}, Datum)}$
   - ${Besucher(\underline{SteuerId}, Geb\text{-}Datum)}$

   Alternativ:

   - ${Mitarbeiter(\underline{PersNr}, Name)}$
   - ${Besucher(\underline{SteuerId}, Geb\text{-}Datum, \overline{PersNr}, Datum)}$

2. **Eigene Relation** – Wenn nur wenige Besucher den freien Eintritt nutzen und dadurch Speicher gespart werden soll (hierbei ist entweder `PersNr` oder `SteuerId` der Primärschlüssel von `freier_Eintritt`):
   - ${Mitarbeiter(\underline{PersNr}, Name)}$
   - ${Mitarbeiter(\underline{PersNr}, Name)}$
   - ${freier\_Eintritt(\overline{PersNr}, \overline{SteuerId}, Datum)}$

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
