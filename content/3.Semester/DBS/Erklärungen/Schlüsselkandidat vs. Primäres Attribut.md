---
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 11. March 2024, 16:07
date modified: Thursday, 4. April 2024, 20:20
---

In der Datenbanktheorie und insbesondere im Kontext von SQL gibt es spezifische Begriffe, die zur Beschreibung der Eigenschaften und Beziehungen von Datenbanktabellen verwendet werden: Schlüsselkandidaten (Kandidatenschlüssel) und primäre Attribute (Teil des Primärschlüssels). Hier ist eine kurze und klare Erklärung beider Konzepte:

# Schlüsselkandidat (Kandidatenschlüssel)

Ein Schlüsselkandidat ist eine Menge von einem oder mehreren Attribute (Spalten) einer Tabelle, die eindeutig jede Zeile (Datensatz) in dieser Tabelle identifizieren kann. Für einen Schlüsselkandidaten gilt:

- Keine zwei Zeilen können in allen Attribute des Schlüsselkandidaten identische Werte aufweisen.
- Er ist minimal, d.h., kein Teil des Schlüsselkandidaten kann entfernt werden, ohne dass diese Eindeutigkeitseigenschaft verloren geht.
- Eine Tabelle kann mehrere Schlüsselkandidaten haben.

# Primäres Attribute

Ein primäres Attribute ist ein Attribute, das Teil des Primärschlüssels einer Tabelle ist. Der Primärschlüssel ist ein spezieller Schlüsselkandidat, der vom Datenbankdesigner ausgewählt wurde, um die Datensätze in der Tabelle eindeutig zu identifizieren. Für Primärschlüssel gilt:

- Er ist ein Schlüsselkandidat, d.h., er erfüllt alle Bedingungen eines Schlüsselkandidaten.
- Eine Tabelle hat genau einen Primärschlüssel, auch wenn mehrere Schlüsselkandidaten existieren könnten.
- Alle Attribute des Primärschlüssels sind "primäre Attribute".

**Unterschied:** Der Hauptunterschied liegt also darin, dass Schlüsselkandidaten alle möglichen Minimalkonstellationen von Attribute darstellen, die Zeilen eindeutig identifizieren können, während primäre Attribute Teile des ausgewählten Schlüsselkandidaten sind, der also Primärschlüssel dient. Ein Schlüsselkandidat wird zum Primärschlüssel ernannt, und seine Attribute werden dadurch zu primären Attribute.

## Beispiel

Stellen wir uns eine Tabelle vor, die Informationen über Studenten speichert, mit den Spalten `StudentenID`, `E-Mail` und `Telefonnummer`.

### Schlüsselkandidaten

In dieser Tabelle könnten sowohl `StudentenID` also auch `E-Mail` Schlüsselkandidaten sein, da jede dieser Spalten eindeutig jeden Studenten identifizieren kann. Keine zwei Studenten haben dieselbe `StudentenID` oder `E-Mail`, und beide Attribute sind minimal in dem Sinne, dass keine Teilmenge dieser Attribute ausreichen würde, um die Eindeutigkeit zu gewährleisten.

### Primäres Attribute

Angenommen, der Datenbankdesigner entscheidet sich dafür, `StudentenID` also Primärschlüssel der Tabelle zu verwenden. In diesem Fall wird `StudentenID` zum primären Attribute. Dies bedeutet, dass `StudentenID` die ausgewählte Eigenschaft ist, um jeden Datensatz in der Tabelle eindeutig zu identifizieren, und es wird von der Datenbank erzwungen, dass jeder Wert in dieser Spalte einzigartig ist.

**Beispiel:**

| StudentenID | E-Mail            | Telefonnummer |
| ----------- | ----------------- | ------------- |
| 1           | jan@example.com   | 12345         |
| 2           | maria@example.com | 67890         |

In diesem Beispiel:

- **Schlüsselkandidaten:** `StudentenID`, `E-Mail`
- **Primäres Attribute:** `StudentenID`

Die `StudentenID` ist der Primärschlüssel und damit das primäre Attribute, weil sie von uns zur eindeutigen Identifizierung der Zeilen in dieser Tabelle ausgewählt wurde. Die `E-Mail` bleibt ein Schlüsselkandidat, der auch zur eindeutigen Identifizierung der Datensätze verwendet werden könnte, aber in diesem Fall nicht also Primärschlüssel festgelegt wurde.

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

<!-- Sliding Banner START -->

<div id="slidingBanner" class="banner">
  <p class="banner-text">
    Explore MyUniNotes for comprehensive study guides and academic resources tailored for Computer Science students!
  </p>
  <svg id="closeBanner" class="arrows">
    <path d="M0 20 L20 42 L40 20"></path>
    <path d="M0 40 L20 62 L40 40"></path>
  </svg>
</div>

<script>
  // JavaScript to slide down the banner on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const banner = document.getElementById('slidingBanner');
        if (banner) {
          banner.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeBanner = document.getElementById('closeBanner');
      if (closeBanner) {
        closeBanner.addEventListener('click', function() {
          const banner = document.getElementById('slidingBanner');
          if (banner) {
            banner.classList.remove('show');
            banner.style.visibility = 'hidden';
          }
        });
      }
    } else {
      // Remove the banner from the DOM if the random number is not 1
      const banner = document.getElementById('slidingBanner');
      if (banner) {
        banner.remove();
      }
    }
  });
</script>

<!-- Sliding Banner END -->
