---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
Benötigte Zeit:
date created: Tuesday, 11. June 2024, 20:27
date modified: Tuesday, 11. June 2024, 20:37
---

# Ausführliche Zusammenfassung der Einführung in Turing-Maschinen und kontextsensitive Sprachen

## Einführung in Turing-Maschinen

### Verwendung

- Turing-Maschinen werden eingeführt, um die Typ 1 und Typ 0 Sprachen der Chomsky-Hierarchie zu erkennen.

### Funktionsweise

- **Typ 1 Sprachen (Kontextsensitive Sprachen)**: Produktionsregeln dürfen die Länge der Wörter nicht verkürzen (|A| ≤ |α|).
- **Typ 0 Sprachen (Rekursiv Aufzählbare Sprachen)**: Keine Einschränkungen für Produktionsregeln.

## Turing-Maschinen

### Allgemeine Turing-Maschinen

- Beschreiben Typ 0 Sprachen.
- Besitzen ein unendlich großes Band und können darauf lesen, schreiben und den Kopf bewegen.

### Linear platzbeschränkte Turing-Maschinen (LBAs)

- Beschreiben Typ 1 Sprachen.
- Der Schreib-Lesekopf darf den Bereich der Eingabe nicht verlassen.

## Unterschiede zwischen Kellerautomaten und Turing-Maschinen

### Kellerautomaten

- **Eingeschränkter Speicher**: Stack, auf den nur von oben zugegriffen werden kann.
- **Beispiel**: Die Sprache $a^i b^i c^i$ kann nicht erkannt werden, da beim Lesen der dritten Gruppe (c's) die Anzahl der Zeichen im Speicher nicht mehr vorhanden ist.

### Turing-Maschinen

- **Unendliches Band**: Das Band kann nach links und rechts unendlich erweitert werden.
- **Schreiblesekopf**: Kann sowohl lesen als auch schreiben und sich in beide Richtungen bewegen.
- **Vergleich**: Eine Turing-Maschine kann komplexere Aufgaben lösen, die mit einem Kellerautomaten nicht möglich sind.

## Formale Definition einer Turing-Maschine

### Sieben-Tupel

Eine Turing-Maschine (TM) wird formal als ein Siebentupel $(Z, \Sigma, \Gamma, \delta, Z_0, \text{Blank}, E)$ definiert:

- **$Z$**: Eine endliche Menge von Zuständen.
- **$\Sigma$**: Ein endliches Eingabealphabet.
- **$\Gamma$**: Ein endliches Bandalphabet, das eine Obermenge von $\Sigma$ ist.
- **$\delta$**: Die Zustandsüberführungsfunktion.
- **$Z_0$**: Der Startzustand.
- **Blank**: Das Blanksymbol, das leere Felder auf dem Band markiert.
- **$E$**: Die Menge der Endzustände.

### Zustandsüberführungsfunktion

#### Deterministische Turing-Maschine (DTM)

- Die Zustandsüberführungsfunktion $\delta$ ist definiert als:
  $$
  \delta: Z \times \Gamma \rightarrow Z \times \Gamma \times \{L, R, N\}
  $$
- Die Funktion nimmt einen Zustand und ein Symbol und liefert ein Tripel aus einem neuen Zustand, einem neuen Band-Symbol und einer Richtung (links, rechts oder neutral).

#### Nicht-deterministische Turing-Maschine (NTM)

- Die Zustandsüberführungsfunktion $\delta$ ist definiert als:
  $$
  \delta: Z \times \Gamma \rightarrow \mathcal{P}(Z \times \Gamma \times \{L, R, N\})
  $$
- Die Funktion liefert eine Menge möglicher Tripel, was bedeutet, dass die Maschine mehrere mögliche Übergänge hat.

## Konfigurationen und Transitionsrelationen

### Konfiguration

- Eine Konfiguration einer Turing-Maschine beschreibt den aktuellen Zustand, den Inhalt des Bandes und die Position des Schreib-Lesekopfes.
- Sie wird als ein Wort aus $\Gamma^* \times Z \times \Gamma^*$ geschrieben.

### Transitionsrelation

- Bestimmt die Übergänge zwischen den Konfigurationen.

#### Beispiel für Übergänge:

1. **Neutraler Übergang (N)**:

   - **Vorher**: Band enthält $B_1 B_2 \ldots B_M A_1 A_2 \ldots A_N$.
   - **Nachher**: Band enthält $B_1 B_2 \ldots B_M C A_2 \ldots A_N$.
   - **Zustandsänderung**: Von Zustand $Z$ zu $Z'$.
   - Schreiblesekopf bleibt auf dem Symbol $C$.

2. **Übergang nach links (L)**:

   - **Vorher**: Band enthält $B_1 B_2 \ldots B_M A_1 A_2 \ldots A_N$.
   - **Nachher**: Band enthält $B_1 B_2 \ldots Z' B_M C A_2 \ldots A_N$.
   - **Zustandsänderung**: Von Zustand $Z$ zu $Z'$.
   - Schreiblesekopf bewegt sich nach links auf das Symbol $B_M$.

3. **Übergang nach rechts (R)**:
   - **Vorher**: Band enthält $B_1 B_2 \ldots B_M A_1 A_2 \ldots A_N$.
   - **Nachher**: Band enthält $B_1 B_2 \ldots B_M C Z' A_2 \ldots A_N$.
   - **Zustandsänderung**: Von Zustand $Z$ zu $Z'$.
   - Schreiblesekopf bewegt sich nach rechts auf das Symbol $A_2$.

## Akzeptierte Sprache einer Turing-Maschine

- Eine Turing-Maschine akzeptiert ein Wort $W \in \Sigma^*$, wenn es eine Konfiguration $U Z V$ gibt, wobei $Z \in E$ ein Endzustand ist und $U$ und $V$ Worte über dem Bandalphabet sind, sodass die Startkonfiguration $Z_0 W$ durch eine beliebige Anzahl von Schritten zu $U Z V$ übergehen kann.

### Triviale Beispiele

1. **Akzeptiert alle Eingaben**:

   - Definition: $M = (Z, \Sigma, \Gamma, \delta, Z_0, \text{Blank}, E)$, wobei $Z_0 \in E$.
   - Erklärung: Die Turing-Maschine akzeptiert jede Eingabe sofort, ohne Berechnung durchzuführen.

2. **Akzeptiert keine Eingaben**:
   - Definition: $M = (Z, \Sigma, \Gamma, \delta, Z_0, \text{Blank}, \emptyset)$.
   - Erklärung: Die Turing-Maschine akzeptiert keine Eingabe, da es keine Endzustände gibt.

## Linear beschränkte Turing-Maschinen (LBAs)

### Definition

- LBAs sind eine Variante der Turing-Maschinen, bei denen der Schreib-Lesekopf den Bereich der Eingabe auf dem Band nicht verlassen darf.
- Die Turing-Maschine bleibt innerhalb des Bereichs, der durch die Eingabe definiert ist.

### Eigenschaften

- **Platzbeschränkung**: Der Kopf darf den Bereich der Eingabe nicht verlassen.
- **Markierung des Endes**: Das Ende der Eingabe wird durch ein markiertes Symbol gekennzeichnet.
- **Markierung des Anfangs**: Der linke Rand ist am Anfang nicht markiert, kann aber von der Maschine markiert werden.
- **Notationsweise**: Wenn $\Sigma$ das Eingabealphabet ist, enthält die markierte Kopie $\hat{\Sigma}$ die gleichen Symbole, jedoch mit einem Hütchen.

### Beispiel für eine LBA

- Ein LBA verarbeitet die Eingabe $A_1A_2 \ldots A_{m-1}\hat{A}_m$ und bleibt innerhalb dieser Grenzen. Der Zustand und die Übergänge sind so definiert, dass der Kopf niemals außerhalb des Bereichs wandert.

### Akzeptierte Sprache

- **Kontextsensitiv**: LBAs erkennen genau die kontextsensitiven Sprachen (Typ-1-Sprachen).
- **Erreichbare Zustände**: Für jede Eingabe $A_1A_2 \ldots A_m$ ist die Anzahl der Symbole auf dem Band stets begrenzt durch die Länge der Eingabe.

## Entscheidungsprobleme und Komplexität

### Wortproblem

- **Typ 1 bis Typ 3**: Entscheidbar.
- **Typ 0**: Nicht entscheidbar.

### Leerheitsproblem

- **Typ 2 und Typ 3**: Entscheidbar.
- **Typ 1 und Typ 0**: Nicht entscheidbar.

### Äquivalenzproblem

- **Typ 3 und deterministisch kontextfrei**: Entscheidbar.
- **Typ 0, Typ 1, Typ 2**: Nicht entscheidbar.

### Schnittproblem

- Nicht entscheidbar für deterministisch kontextfreie Sprachen.

## Abschlusseigenschaften

### Reguläre Sprachen

- Abgeschlossen unter Schnitt, Vereinigung, Komplement, Produkt und klinischem Abschluss.

### Deterministisch kontextfreie Sprachen

- Nur gegenüber Komplement abgeschlossen.

### Kontextfreie Sprachen

- Abgeschlossen gegenüber Vereinigung, Produkt und klinischem Abschluss.

### Kontext-sensitive Sprachen

- Abgeschlossen gegenüber Schnitt, Vereinigung, Komplement, Produkt und klinischem Abschluss.

### Typ-0-Sprachen

- Abgeschlossen bezüglich Schnitt, Vereinigung, Produkt und klinischem Abschluss, aber nicht gegenüber Komplement.

## Chomsky-Hierarchie

### Typ-0-Sprachen

- Beliebige Turing-Maschinen.

### Typ-1-Sp

rachen

- Linear beschränkte Turing-Maschinen.

### Typ-2-Sprachen

- Nicht-deterministische Kellerautomaten.

### Typ-3-Sprachen

- Endliche Automaten (deterministisch und nicht-deterministisch).

## Komplexität des Wortproblems

### Typ-3 (DFA)

- Lineare Komplexität.

### Typ-2 (Chomsky-Normalform)

- Kubische Komplexität.

### Typ-1

- Exponentielle Komplexität.

### Typ-0

- Nicht lösbar.

## Wichtige Sprachen und Beispiele

- **$A^nB^n$**: Typ-2, aber nicht Typ-3.
- **Palindrome**: Typ-2, aber nicht deterministisch kontextfrei.
- **$A^nB^nC^n$**: Typ-1, aber nicht Typ-2.
- **Halteproblem**: Typ-0, aber nicht Typ-1.

## Simulation von nicht-deterministischen Turing-Maschinen

### Deterministische Simulation

- Nicht-deterministische Turing-Maschinen (NTMs) können durch deterministische Turing-Maschinen (DTMs) simuliert werden.
- Der deterministische Algorithmus probiert systematisch alle möglichen Berechnungswege der nicht-deterministischen Maschine aus.

### Berechnungsbaum

- Der Ablauf der Simulation kann als Berechnungsbaum dargestellt werden, in dem jeder Knoten einen Zustand der Turing-Maschine repräsentiert.
- Der Baum wird durchlaufen, um alle möglichen Berechnungen der nicht-deterministischen Maschine zu prüfen.

### Unterschiede in der Laufzeit

- Die Simulation eines nicht-deterministischen Algorithmus durch einen deterministischen kann zu einer exponentiellen Laufzeit führen.

## Zusammenfassung und Ausblick

- Turing-Maschinen sind ein grundlegendes Modell zur Untersuchung der Berechenbarkeit und Komplexität.
- Sie modellieren die Fähigkeiten moderner Computer und ermöglichen die Untersuchung der Grenzen dessen, was algorithmisch lösbar ist.
- In zukünftigen Vorlesungen wird die Rolle der Turing-Maschine in der Chomsky-Hierarchie und der theoretischen Informatik weiter untersucht.

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
