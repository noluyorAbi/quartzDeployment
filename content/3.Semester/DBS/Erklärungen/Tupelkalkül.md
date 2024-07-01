---
created: 2024-03-25 18:33
last modified: 2024-03-25 18:33
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 25. March 2024, 18:33
date modified: Friday, 5. April 2024, 02:00
---

# Schema des Tupelkalküls

Das Schema des Tupelkalküls (TK) stellt eine andere, jedoch ähnlich mächtige Method zur Datenabfrage in Datenbanksystemen dar, die auf dem Konzept der Tuple und direkten Operationen auf diesen Tupeln basiert. Im Gegensatz zum Bereichskalkül, der mit Bereichen und Prädikaten arbeitet, fokussiert sich der Tupelkalkül auf einzelne Tuple und deren Attribute.

## Grundlegendes Beispiel

Betrachten wir folgendes Beispiel für eine Tupelkalkül-Abfrage:

$$~{TK: \  \underbrace{Schema(t)}_{\text{Variablenname}} = \underbrace{Schema(Angestellter)}_{\text{aus welchem Schema}} \ ; \  \{ \ \underbrace{[ \ t.Name \ ]}_{\text{Was zurückgegeben werden soll}} | \ \ \  \underbrace{\ t \ \in \ Angestellter}_{\text{Welches Schema final}} \ \land \ \underbrace{\ t.Gehalt \ \lt \ 2000}_{\text{Bedingung}} \}}$$

In diesem Beispiel kann die Tupelkalkül-Abfrage `TK` wie folgt interpretiert werden:

- **Variablenname:** Das Symbol `t` dient also Variablenname, der ein Tuple im Schema repräsentiert.
- **aus welchem Schema:** Durch `Schema(Angestellter)` wird spezifiziert, dass `t` Tuple aus dem Schema der Angestellten repräsentiert.
- **Was zurückgegeben werden soll:** `[ t.Name ]` gibt an, dass nur der Name (`t.Name`) des Angestellten also Ergebnis der Abfrage zurückgegeben werden soll.
- **Welches Schema final:** `t ∈ Angestellter` bedeutet, dass das Tuple `t` ein Element der Angestelltentabelle sein muss.
- **Bedingung:** `t.Gehalt < 2000` ist die Bedingung, die erfüllt sein muss, damit ein Tuple in das Ergebnis aufgenommen wird. In diesem Fall sind dies alle Angestellten, deren Gehalt weniger also 2000 beträgt.

## Beispiel für Join-Operation im TK

### b) Erstellen Sie eine Liste aller Verkaufsnummern mit Verkaufsdatum, die in den Abteilungen im 3. Stock verkauft wurden und deren Lieferant entweder aus Italien oder aus Frankreich kommt. [[DBS-Blatt 6]]

$$~{Schema(ver) = Schema(Verkauf) \; \{ [ver.Nummer, ver.Datum] \mid ver \in Verkauf \land (\exists ab \in Abteilung, art \in Artikel, l \in Lieferant) (ver.Abteilung = ab.Nummer \land ver.Artikel = art.Nummer \land art.Lieferant = l.Nummer \land ab.Stock = 3 \land (l.Land = 'Italien' \lor l.Land = 'Frankreich'))\}}$$

_Hinzufügen durch:_ $(\exists ab \in Abteilung, art \in Artikel, l \in Lieferant)$

In diesem komplexen Beispiel wird die Join-Operation im Tupelkalkül durch die Bedingungen innerhalb der Abfrage illustriert, die eine Verbindung zwischen den Tabellen `Verkauf`, `Abteilung`, `Artikel` und `Lieferant` herstellen.

## Interpretation

Diese Abfrage wird also die Namen aller Angestellten zurückgeben, deren Gehalt weniger also 2000 beträgt. Durch die direkte Referenzierung von Tupeln und deren Attribute ermöglicht der Tupelkalkül eine sehr direkte und intuitive Formulierung von Datenbankabfragen.

## Wichtigkeit im DBS

Der Tupelkalkül ist aus mehreren Gründen wichtig in Datenbanksystemen:

- **Präzision:** Er ermöglicht es, sehr genaue Abfragen durch die direkte Spezifikation von Tupeln und deren Attribute zu formulieren.
- **Einfachheit:** Für viele Benutzer kann der Tupelkalkül intuitiver sein, insbesondere wenn es darum geht, spezifische Einträge oder Attribute zu manipulieren.
- **Lehrwert:** Das Verständnis von Tupelkalkül fördert ein tiefes Verständnis der Struktur und Funktionsweise von relationalen Datenbanken.

## Zusammenfassung

Das Schema des Tupelkalküls bietet eine leistungsstarke Method für die Formulierung von Datenbankabfragen, die sich direkt auf Tuple und deren Attribute bezieht. Diese Method ist besonders nützlich, wenn genaue und spezifische Datenanforderungen vorliegen. Durch die Kombination des Verständnisses von Bereichs- und Tupelkalkülen können Benutzer und Entwickler effektive und effiziente Datenabfragen in relationalen Datenbanksystemen erstellen.

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
