---
created: 2024-03-11 17:05
last modified: 2024-03-11 17:05
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 11. March 2024, 17:05
date modified: Tuesday, 16. April 2024, 11:02
---

# Aufgabe 1-1

## a) Welche 9 Zentralen Anforderungen an Ein Datenbanksystem Definierte Edgar Codd?

- **Integration** → Verwaltung aller von Anwendung benötigten Daten
- **Operation** → Operation zur Speicherung, Manipulation der Daten müssen vorhanden sein
- **Data Dictionary** → Katalog erlaubt Zugriff auf die die Beschreibung der Daten
- **Benutzersichten** → Für unterschiedliche Anwendungen unterschiedliche Sicht auf Bestand
- **Konsistenzüberwachung** → [[Datenbankmanagementsystem (DBMS)| DBMS]] überwacht Korrektheit der Daten bei Änderung
- **Zugriffskontrolle** → Ausschluss unautorisierter Zugriffe
- **Transaktionen** → Zusammenfassung von Änderungsoperationen zu einer Einheit
- **Synchronisation** → Arbeiten mehrerer Benutzer gleichzeitig mit der DB
- **Datensicherung** → Widerherstellung des DB zu dem Zustand nach der Transaktion

## b) Was Versteht Man under Logischer Und Physischer Datenunabhängigkeit

- **logische Datenunabhängigkeit:** Ändern des Schemas der Datenbank ohne zu ändern wie eine Anwendung auf diese Daten zugreift [[3 - Ebenenarchitektur#Logische Datenunabhängigkeit| (logische Datenunabhängigkeit)]]
- **physische Datenunabhängigkeit:** Ändern wie die Daten gespeichert werden (z.B. Festplatte) ohne Beeinträchtigung der Datenstruktur oder der Anwendungen [[3 - Ebenenarchitektur#Physische Datenunabhängigkeit| (physische Datenunabhängigkeit)]]

# Aufgabe 1-2

## Betrachten Wir Die Mengen A = {a, b, c} Und Z = {1, 2, 3, 4} Und Eine Zweistellige Relation R Dazwischen. Wenn Zum Beispiel Die Elemente a ∈ A Und 2 ∈ Z in Der Relation R Stehen, Druckt Man Das Mathematisch so Aus: aR2 Oder (a, 2) ∈ R. Graphisch Kann Man Es so Veranschaulichen, Dass Man Die Elemente Der Beiden Mengen Hinzeichnet Und Zwischen a Und 2 Eine Linie Zieht:

## Mit Dieser Veranschaulichung Sind Die Mathematischen Definitionen Praktisch Nur Bedingungen, Wie viele Linien Mit Den Elementen Verbunden Sein Müssen Oder Dürfen

### a) Das Kartesische Product A × Z

- Alles aus _A_ mit allem aus _Z_
  $$
  M = \{(a,1),(a,2),(a,3),(a,4)(b,1),(b,2),(b,3),(b,4),(c,1),(c,2),(c,3),(c,4)\}
  $$

### b) Eine Totale Function Von A Nach Z

- Jedes Element in _A_ hat genau einen Partner in Z (<u>nicht keinen, nicht mehrere</u>)
- Elemente in _Z_ dürfen keinen, einen oder mehrere Partner in _A_ haben
- → A hat mindestens ein Element aus Z

- $M = \{(a,1),(b,2),(c,1) \}$

### Eine zweistellige Relation zwischen A und Z, die keine Function ist. (D.h. weder von A nach Z noch von Z nach A.)

- $M = \{(a,1),(a,2),(b,1),(c,3) \}$

---

Also nächstes: [[DBS-Blatt 2]]

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
