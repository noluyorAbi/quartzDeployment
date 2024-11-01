---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema: "[[RNVS-Blatt-01]]"
Benötigte Zeit:
date created: Friday, 26. April 2024, 22:36
date modified: Wednesday, 19. June 2024, 21:15
---

# Unterschiede zwischen Rechnernetz und Verteiltem System

> [!tip] Merkhilfe
> **Rechnernetz:**
>
> - keine gemeinsame Aufgabe
> - unabhängig voneinander
>
> **Verteiltes System:**
>
> - gemeinsame Aufgabe
> - abhängig

In der Welt der Informationstechnologie sind „Rechnernetz“ und „Verteiltes System“ zwei fundamentale Konzepte, die oft miteinander verwechselt werden. Obwohl beide Konzepte Netzwerktechnologien involvieren, unterscheiden sie sich in ihrer Struktur, ihrem Zweck und ihrer Funktionsweise.

## Rechnernetz (Computer-Netzwerk)

Ein **Rechnernetz**, auch als Netzwerk bekannt, ist eine Gruppe von miteinander verbundenen Computern, die Daten austauschen können. Die Verbindung kann über Kabel (wie Ethernet) oder drahtlos (wie WLAN) erfolgen.

### Beispiele für Rechnernetze

- **Internet**: Das größte Netzwerk der Welt, bestehend aus Millionen von kleineren Netzwerken.
- **LAN (Local Area Network)**: Ein Netzwerk, das Computer innerhalb eines begrenzten Bereichs, wie eines Hauses oder Bürogebäudes, verbindet.

## Verteiltes System

Ein **verteiltes System** besteht aus mehreren Computern, die über ein Netzwerk verbunden sind und zusammenarbeiten, um als eine einzige kohärente Einheit zu erscheinen. Dies erfordert eine spezielle Software, die die Ressourcenverwaltung und Aufgabenverteilung zwischen den Computern koordiniert.

### Beispiele für verteilte Systeme

- **Google's Computing Cluster**: Tausende von Servern arbeiten zusammen, um komplexe Berechnungen und Datenanalysen durchzuführen.
- **Apache Hadoop**: Ein Framework, das die Verarbeitung großer Datenmengen über mehrere Computer hinweg ermöglicht.

## Unterschied

Der Hauptunterschied zwischen einem Rechnernetz und einem verteilten System liegt in der Art der Zusammenarbeit und Zielsetzung:

- **Kommunikation vs. Kooperation**: Ein Rechnernetz ermöglicht vor allem die Kommunikation zwischen den angeschlossenen Geräten, ohne eine gemeinsame Aufgabe zu erfüllen. Ein verteiltes System hingegen nutzt die Verbindung zwischen den Computern, um eine spezifische, oft komplexe Aufgabe gemeinsam zu bearbeiten und zu lösen.
- **Unabhängigkeit vs. Abhängigkeit**: In einem Netzwerk operiert jedes Gerät unabhängig, während in einem verteilten System die Computer voneinander abhängig sind, um die gemeinsame Aufgabe zu erfüllen.

### Fazit

Während ein **Rechnernetz** hauptsächlich für die Kommunikation zwischen Computern dient, zielt ein **verteiltes System** darauf ab, diese Computer auf ein gemeinsames Ziel auszurichten und sie als einheitliches Ganzes arbeiten zu lassen.

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
