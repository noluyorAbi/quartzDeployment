---
tags:
  - 4semester
  - FSK
  - informatik
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 1. May 2024, 07:33
date modified: Wednesday, 1. May 2024, 07:37
---

# Kochrezept

> [!tip] Ablauf für die Minimierung von DFAs
>
> 1. **Identifizieren Sie das Alphabet**: Bestätigen Sie das Alphabet $\Sigma$, das der DFA verwendet. Dies definiert die möglichen Eingaben für den Automaten.
> 2. **Erstellen Sie die Zustandstabelle**: Notieren Sie alle Zustände des DFAs und ihre Übergänge für jedes Symbol in $\Sigma$. Dies ist Ihre Ausgangstabelle für den Minimierungsprozess.
> 3. **Initialisieren Sie die Partitionen**: Trennen Sie die Zustände in zwei anfängliche Gruppen - Endzustände und Nicht-Endzustände. Dies sind Ihre ersten Partitionen.
> 4. **Verfeinern Sie die Partitionen**: Untersuchen Sie die Zustände innerhalb jeder Partition. Zustände, die unter einem Eingabesymbol zu unterschiedlichen Partitionen führen, müssen in separate Partitionen aufgeteilt werden. Diesen Prozess wiederholen Sie, bis keine weiteren Verfeinerungen mehr möglich sind.
> 5. **Übertragen Sie die Partitionen in den neuen DFA**: Jede Partition wird zu einem Zustand im neuen, minimierten DFA. Zeichnen Sie die Übergänge zwischen diesen neuen Zuständen basierend auf den Übergängen der ursprünglichen Zustände, die sie repräsentieren.
> 6. **Definieren Sie den Start- und Endzustand**: Bestimmen Sie den Startzustand des minimierten DFA, der dem Startzustand des ursprünglichen DFA entspricht. Alle Partitionen, die Endzustände enthalten, werden zu Endzuständen im neuen DFA.
> 7. **Überprüfen Sie die Vollständigkeit und Korrektheit**: Stellen Sie sicher, dass der neue DFA alle Übergänge korrekt abbildet und jede Eingabe aus $\Sigma$ behandelt wird. Überprüfen Sie, ob der minimierte DFA dieselbe Sprache akzeptiert wie der ursprüngliche DFA.
> 8. **Visualisieren Sie den minimierten DFA**: Erstellen Sie eine grafische Darstellung des neuen DFAs, um die Übersichtlichkeit und das Verständnis zu verbessern.
> 9. **Dokumentieren und überprüfen Sie den Prozess**: Halten Sie die Schritte Ihrer Minimierung fest, insbesondere die Bildung der Partitionen und die Logik der Zustandsvereinigung. Überprüfen Sie den minimierten DFA auf Redundanzen oder mögliche weitere Vereinfachungen.

# [[FSK-ÜB-2#FSK2-2 DFAs und Minimierung (2 Punkte)#b) Minimieren Sie die folgenden DFAs. Verwenden Sie die tabellarische Variante des Algorithmus zur Minimierung von DFAs aus der Vorlesung (nicht die grafische Variante und nicht den Algorithmus von letztem Jahr!). Geben Sie die Partitionstabelle und den minimalen DFA an.|Beispiel FSK-2-2]]

## b) Minimieren Sie die folgenden DFAs. Verwenden Sie die tabellarische Variante des Algorithmus zur Minimierung von DFAs aus der Vorlesung (nicht die grafische Variante und nicht den Algorithmus von letztem Jahr!). Geben Sie die Partitionstabelle und den minimalen DFA an.

### i) DFA A1 über dem Alphabet $Σ = \{a\}$:

```mermaid
graph LR
	id1(( )) --> circleId0(("`z0`"))
    circleId0(("`z0`")) -->|a| circleId1(("`z1`"))

    circleId1(("`z1`")) -->|a| circleId2(("`z2`"))

    circleId2(("`z2`")) -->|a| doubleCircleId3((("`z3`")))

    doubleCircleId3((("`z3`"))) -->|a| circleId4(("`z4`"))

    circleId4(("`z4`")) -->|a| circleId5(("`z5`"))

    circleId5(("`z5`")) -->|a| circleId6(("`z6`"))

    circleId6(("`z6`")) -->|a| doubleCircleId7((("`z7`")))

    doubleCircleId7((("`z7`"))) -->|a| circleId0(("`z0`"))
```

- Endzustände $z_3$ und $z_7$ werden getrennt

$$
z_0 \quad z_1 \quad z_2  \quad z_4 \quad z_5 \quad z_{6}\quad |\quad z_3 \quad z_7
$$

- $z_2$ und $z_6$ führen in Klasse 2 bzw. in andere Partition, deswegen teilen wird diese

$$
z_0 \quad z_1  \quad z_4 \quad z_{5}\quad | \quad z_{2} \quad z_{6}\quad |\quad z_3 \quad z_7
$$

- Jetzt führen aber $z_{1}$ und $z_{5}$ auch in andere Partitionen und müssen geteilt werden

$$
z_0  \quad z_{4}\quad| \quad z_{1} \quad z_{5}\quad | \quad z_{2} \quad z_{6}\quad |\quad z_3 \quad z_7
$$

```mermaid
---
title: Graphische Darstellung der Partitionen
---
graph LR
    id1(( )) --> circleId0(("`P0`"))
    circleId0(("`P0`")) -->|a| circleId1(("`P1`"))
    circleId1(("`P1`")) -->|a| circleId2(("`P2`"))
    circleId2(("`P2`")) -->|a| doubleCircleId3((("`P3`")))
    doubleCircleId3((("`P3`"))) -->|a| circleId0(("`P0`"))
```

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
