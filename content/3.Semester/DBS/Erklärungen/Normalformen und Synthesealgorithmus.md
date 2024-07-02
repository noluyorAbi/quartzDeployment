---
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 11. March 2024, 16:07
date modified: Saturday, 20. April 2024, 01:28
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

# Normalformen [Erklärvideo](https://youtu.be/GFQaEYEc8_8?si=JrY6j-_g_5CWBezQ)

## 1. Normalform (1NF)

> [!tip] Merkhilfe
> Alle Attribute sind atomar

> [!warning] Was die 1NF bricht
>
> - Die Verwendung der Zeilenreihenfolge zur Übermittlung von Informationen verstößt gegen die 1.NF.
> - Gemischte Datentypen innerhalb von Spalten.
> - Eine Tabelle ohne Primärschlüssel.
> - Wiederholende Gruppen sind in Spalten nicht erlaubt (z.B. Inventory1, Inventory2,…).

### Erklärung:

Alle Attribute enthalten atomare Werte (String, Integer, …) und keine Tuple, Listen, usw. In relationalen Datenbanken sind nicht-atomare Werte nicht erlaubt/möglich, daher sind relationale Datenbanken immer in 1. Normalform.

→ In dieser Vorlesung oft schon erfüllt.

---

## 2. Normalform (2NF)

> [!tip] Merkhilfe
> _1.NF_ +
>
> - jedes Nicht-Schlüssel-Attribut (NSA) ist voll funktional abhängig von jedem Schlüsselkandidaten
>
> $\Longrightarrow$ **! Transitive Abhängigkeiten zwischen nicht Schlüsselkandidaten sind erlaubt**, nur falls eine Abhängigkeit zu einem Schlüsselkandidaten besteht muss eine Abhängigkeit zu allen Schlüsselkandidaten auch bestehen!
>
> <span style="color:orange">(Each non-key attribute must depend on the entire primary key)</span>

> [!warning] Was die 2NF bricht
>
> - Nicht alle Nicht-Primärattribute hängen vollständig von jedem Teil des Schlüssels ab.
> - Attribute, die nicht vom Schlüssel abhängen, sollten nicht in der gleichen Tabelle sein.

### Erklärung:

Für jedes Attribute A in einer Relation gilt in der 2. Normalform, dass:

- A ein Primärattribut ist (also Teil eines Schlüsselkandidaten) oder
- A voll funktional abhängig von jedem Schlüsselkandidaten ist.

**Primärattribut** bedeutet, dass das Attribute Teil eines Schlüsselkandidaten ist. Ein **Schlüsselkandidat** ist eine minimale Menge von Attribute, die eindeutig jede Tuple in einer Relation identifizieren kann.

**Voll funktional abhängig** bedeutet, dass die Abhängigkeit zwischen einem Attribute und einem Schlüsselkandidaten komplett ist. Das heißt, das Attribute kann nur eindeutig identifiziert oder abgeleitet werden, wenn der gesamte Schlüsselkandidat bekannt ist, nicht nur ein Teil davon.

Die 2NF beseitigt **partielle funktionale Abhängigkeiten** von Nicht-Primärattributen von einem Teil eines zusammengesetzten Schlüssels, indem sichergestellt wird, dass jedes Nicht-Primärattribut vollständig von jedem Schlüsselkandidaten abhängt. Das führt zu einer Reduzierung von Redundanzen und Anomalien bei der Datenmanipulation.

Ein einfaches Beispiel für die 2. Normalform (2NF) in einer Datenbank könnte eine Tabelle für Studentenleistungen sein:

| Student_ID | Vorname | Nachname   | Kurs_ID | Kursname   | Dozent_ID | Dozent_Name  |
| ---------- | ------- | ---------- | ------- | ---------- | --------- | ------------ |
| 001        | Max     | Mustermann | 101     | Mathematik | 201       | Dr. Schmidt  |
| 002        | Maria   | Müller     | 102     | Englisch   | 202       | Prof. Wagner |
| 003        | Ali     | Khan       | 101     | Mathematik | 201       | Dr. Schmidt  |

In diesem Beispiel ist die Spalte "Student_ID" ein Primärattribut, da sie Teil des Schlüssels ist und jede Zeile eindeutig identifiziert. Die Spalten "Kurs_ID" und "Dozent_ID" sind ebenfalls Teil des Primärschlüssels.

Um sicherzustellen, dass die Tabelle die 2NF erfüllt, müssen wir prüfen, ob jedes Nicht-Primärattribut voll funktional von jedem Schlüsselkandidaten abhängt.

In diesem Fall hängt der "Kursname" von der "Kurs_ID" ab, und der "Dozent_Name" hängt von der "Dozent_ID" ab. Beide erfüllen die Anforderungen der 2NF, da sie voll funktional von ihren jeweiligen Schlüsselattributen abhängen.

Die 2NF ist wichtig, um Redundanzen zu vermeiden und die Datenintegrität zu gewährleisten, indem partielle funktionale Abhängigkeiten eliminiert werden.

---

## 3. Normalform (3NF)

> [!tip] Merkhilfe
>
> - Keine transitiven Abhängigkeiten (Kein Nichtschlüssel zu anderem Nichtschlüssel) wobei der eine Nichtschlüssel wiederum von einem Schlüsselkandidaten abhängt
> - _"Vermittler"_ hängt also von Schlüsselkandidat ab ist aber selber keiner und hat eine Abhängigkeit zu einem Nichtschlüsselkandidaten
> - Reicht wenn ein Nichtschlüssel Attribute von _irgendeinem_ Schlüsselkandidaten abhängig ist
>   <br/>
>
> Z.B. $R = (\underline A, B, C, D)$
> Die 3.NF ist hier nicht gegeben, da es eine Abhängigkeit $A→B$ geben kann, und dann wiederum eine Abhängigkeit $B→C$ wo $B$ also der _Vermittler_ dient [[Klausuraufgaben-WS-2023-24#(a) Können wir mit Sicherheit davon ausgehen, dass $R$ auch die zweite und dritte Normalform erfüllt? Begründen Sie Ihre Aussage jeweils in ein bis zwei Sätzen.|(Beispiel aus Klausur WS23-24)]]
>
> - <span style="color:orange">Every non-key attribute in a table should depend on the key,the whole key, and nothing but the key</span>
> - BCNF: <span style="color:#32de84">Every ~~non-key~~ attribute in a table should depend on the key,the whole key, and nothing but the key </span>

> [!warning] Was die 3NF bricht
>
> - Transitive Abhängigkeiten von Nicht-Schlüsselattributen.
> - Nicht-Schlüsselattribute, die nicht direkt vom Primärschlüssel abhängen, sondern von anderen Nicht-Schlüsselattributen.
> - Fehlende Normalisierung von wiederholten Gruppen von Attribute in separate Tabellen.

> $$
> \underbrace{\underbrace{mnr,fznr}_{Schlüsselkandidaten}→ baujahr, km-stand, n-preis, h-preis, ek-preis}_{Erfüllt \ 3.NF}
> $$

$$

>
$$

\underbrace{hnr → hersteller}\_{\text{Erfüllt nicht 3. NF, da linke Seite kein Schlüsselkandidat bzw. rechts kein primäres Attribut}}

$$

### Erklärung:

**Nicht-triviale funktionale Abhängigkeiten 𝑋 → 𝑌** bedeuten, dass das Attribut-Set 𝑌 nicht vollständig innerhalb des Attribut-Sets 𝑋 enthalten ist und 𝑌 funktional von 𝑋 abhängt. Das heißt, die Kenntnis von 𝑋 ermöglicht es eindeutig, 𝑌 zu bestimmen, ohne dass 𝑌 ein Teil von 𝑋 ist.

In der 3. Normalform (3NF) wird gefordert, dass:
- *2.NF erfüllt ist*
- *Für alle nicht-trivialen funktionalen Abhängigkeiten 𝑋 → 𝑌 muss 𝑋 einen Schlüsselkandidaten enthalten (bzw. kein Nichtschlüsselattribut hängt von keinem anderen Nichtschlüsselattribut ab)*, oder
- *𝑌 muss ein Primärattribut sein.*

Die **3NF** baut auf der **2. Normalform (2NF)** auf und zielt darauf ab, transitive Abhängigkeiten zwischen Nicht-Schlüsselattributen zu beseitigen. Das heißt, es dürfen keine funktionalen Abhängigkeiten zwischen Nicht-Schlüsselattributen bestehen, die über einen Umweg (transitiv) von einem Schlüsselkandidaten abhängen. So wird sichergestellt, dass die Relationen frei von Anomalien sind, die bei Einfüge-, Lösch- oder Änderungsoperationen entstehen können, und dass die Datenintegrität gewahrt bleibt.

[[DBS-Blatt 10#Aufgabe 10-3 ** Normalformen und Synthesealgorithmus 3. Normalform (3NF) **|Anwendungsbeispiel]]


<details>
<summary>### Weiteres Beispiel</summary>

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

>[!tip] Merkhilfe
>**Schritte des Synthesealgorithmus:**
>- Linksreduktion
>- Rechtsreduktion
>- Entfernung von rechtsleeren Abhängigkeiten
>- Zusammenfassen von Abhängigkeiten mit gleicher linker Seite
>- Neues Relationsschema erzeugen
>- Rekonstruktion eines Schlüsselkandidaten:
>- Elimination überflüssiger Relationen

[[DBS-Blatt 10#Aufgabe 10-5 Normalformen und Synthesealgorithmus Synthesealgorithmus]]

Der Synthesealgorithmus wird verwendet, um ein beliebiges Relationenschema R mit funktionalen Abhängigkeiten F in Relationen 𝑅1, … , 𝑅𝑛 zu zerlegen, für die gilt:

- 𝑅1, … , 𝑅𝑛 ist eine verlustlose Zerlegung von R.
- 𝑅1, … , 𝑅𝑛 ist abhängigkeitserhaltend.
- 𝑅1, … , 𝑅𝑛 sind alle in 3. Normalform.

## Synthesealgorithmus Schritt 1 – Kanonische Überdeckung 𝑭𝒄 zu 𝑭

### a) Linksreduktion:

- Prüfe für jede 𝑋 → 𝑌 ∈ 𝐹:
- Prüfe für jedes 𝐴 ∈ 𝑋:
- Wenn 𝑌 ⊆ 𝐴𝑡𝑡𝑟𝐻ü𝑙𝑙𝑒(𝐹, 𝑋 − 𝐴), ist A in X überflüssig und kann entfernt werden.
- Aus 𝑋 → 𝑌 wird dann (𝑋 − 𝐴) → 𝑌.

### b) Rechtsreduktion:
- Prüfe für jede (linksreduzierte) 𝑋 → 𝑌 ∈ 𝐹:
- Prüfe für jedes B ∈ Y:
- Wenn B ⊆ 𝐴𝑡𝑡𝑟𝐻ü𝑙𝑙𝑒(𝐹 − {𝑋 → 𝑌} ∪ {𝑋 → 𝑌 − 𝐵}, 𝑋), ist B auf der rechten Seite überflüssig.
- Aus 𝑋 → 𝑌 wird dann 𝑋 → (𝑌 − 𝐵).

### c) Entfernen überflüssiger funktionaler Abhängigkeiten:
- Entferne alle funktionalen Abhängigkeiten (FD) mit leerer rechter Seite, also 𝑋 → {}.

### d) Zusammenfassen von FDs:
- Fasse alle FDs mit gleicher linker Seite zusammen:
- Aus 𝑋 → 𝑌1, … , 𝑋 → 𝑌𝑛 wird 𝑋 → (𝑌1 ∪ ⋯ ∪ 𝑌𝑛).

## Synthesealgorithmus Schritt 2 – Erzeuge Relationenschemas aus 𝑭𝒄

- Für jede FD 𝑋 → 𝑌 ∈ 𝐹𝑐:
  - Erzeuge Relationenschema 𝑅𝑋 ≔ 𝑋 ∪ 𝑌.
  - Ordne 𝑅𝑋 die FDs 𝐹𝑋 ≔ {𝑋′ → 𝑌′ | 𝑋′ ∪ 𝑌′ ∈ 𝑅𝑋} zu.
  - Schlüssel sind alle Attribute aus 𝑋.

## Synthesealgorithmus Schritt 3 – Rekonstruiere einen Schlüsselkandidaten

- Falls eines der in Schritt 2 erzeugten Schemata einen Schlüsselkandidaten von R bezüglich 𝐹𝑐 enthält, ist nichts zu tun.
- Wenn nicht:
  - Wähle einen Schlüsselkandidaten 𝑆 ⊆ 𝑅 aus und definiere folgendes Schema: 𝑅𝑆 ≔ 𝑆 mit 𝐹𝑆 ≔ {}.

## Synthesealgorithmus Schritt 4 – Eliminiere überflüssige Relationen

- Eliminiere diejenigen Schemata 𝑅𝑋, die in einem anderen Relationenschema 𝑅𝑋′ enthalten sind, d.h. 𝑅𝑋 ⊆ 𝑅𝑋′.


---

# Boyce-Codd-Normalform (BCNF)

> [!tip] Merkhilfe
> Jede Abhängigkeit schaut streng auf Superkeys. Jede linke Seite ist ein Superkey.
> Also falls **X nicht primär** ist und ** Y primär** ist es **KEIN BCNF**
>

>
$$

\underbrace{SK \rightarrow A}\_{\text{Erfüllt BCNF, da linke Seite ein Superkey}}

$$

>
$$

\underbrace{X \rightarrow Y}\_{\text{Erfüllt nicht BCNF, da X kein Superkey}}

$$

Die **Boyce-Codd-Normalform (BCNF)** ist eine Verschärfung der 3. Normalform, die zusätzlich verlangt, dass:
- 3.NF ist erfüllt
- *Für alle nicht-trivialen funktionalen Abhängigkeiten 𝑋 → 𝑌 in einer Relation, muss 𝑋 ein Superkey sein*. bzw. *𝑋 enthält Schlüsselkandidaten.*
- Ein *Superkey* ist eine Attributkombination, die so erweitert ist, dass sie alle Attribute in einer Relation eindeutig identifiziert. Jeder Superkey ist auch ein Schlüsselkandidat, aber nicht jeder Schlüsselkandidat ist ein Superkey.

BCNF zielt darauf ab, verbleibende Anomalien zu beseitigen, die in 3NF noch möglich sind, insbesondere solche, die aus funktionalen Abhängigkeiten resultieren, bei denen die linke Seite kein Schlüsselkandidat ist. Dies stellt sicher, dass keine Abhängigkeiten von Nicht-Superkeys zu anderen Attribute bestehen, wodurch Redundanzen und Anomalien weiter reduziert werden.

[[DBS-Blatt 10#Aufgabe 10-4 Normalformen Boyce–Codd Normalform (BCNF)|Anwendungsbeispiel]]

<details>
<summary>### Weiteres Beispiel</summary>

Ein Beispiel, das oft zur Illustration von BCNF verwendet wird, betrifft eine Tabelle `Vorlesung` mit folgenden Attribute:

- `Dozent`
- `Fach`
- `Raum`

Angenommen, die funktionalen Abhängigkeiten sind wie folgt:

- `Dozent, Fach → Raum`
- `Raum → Dozent`

Hier erfüllt die Tabelle die 3NF, da keine transitiven Abhängigkeiten zwischen Nicht-Schlüsselattributen bestehen. Jedoch ist `Raum` kein Superkey, was zu Redundanz führen kann, da derselbe Dozent in verschiedenen Fächern denselben Raum nutzen könnte.

**Um BCNF zu erreichen**, könnte die Tabelle wie folgt aufgeteilt werden:

1. `DozentFach`:
   - `Dozent`
   - `Fach`
   - (Primärschlüssel könnte hier eine Kombination aus Dozent und Fach sein)

2. `RaumZuweisung`:
   - `Raum`
   - `Dozent`
   - (Primärschlüssel wäre hier `Raum`, wenn wir annehmen, dass ein Raum zu einer Zeit nur von einem Dozenten genutzt werden kann)

Durch diese Aufteilung wird sichergestellt, dass in jeder Relation alle nicht-trivialen funktionalen Abhängigkeiten von einem Superkey abhängen, wodurch die BCNF erfüllt wird.
</details>

















































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
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1;
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
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1;
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












































$$
