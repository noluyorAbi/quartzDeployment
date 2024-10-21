---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Monday, 21. October 2024, 21:07
date modified: Monday, 21. October 2024, 21:08
---

# Kurze Erklärung von `option_val` im C-Programm

Dieses Dokument bietet eine prägnante Erklärung der Variable `option_val` in Ihrem C-Programm, das Kommandozeilenargumente mit `getopt` verarbeitet.

## Was ist `option_val`?

`option_val` ist eine Ganzzahlvariable (`int`), die den Rückgabewert der Funktion `getopt` speichert. Sie identifiziert die aktuell verarbeitete Option aus den übergebenen Kommandozeilenargumenten.

## Funktion im Programm

### Deklaration und Initialisierung

```c
int option_val = 0;
```

- **`option_val`** wird initialisiert, um später den Rückgabewert von `getopt` aufzunehmen.

### Verwendung in der `while`-Schleife

```c
while ((option_val = getopt(argc, argv, "n:hf:e")) != -1) {
    switch (option_val) {
        case 'n':
            // Aktion für -n
            break;
        case 'h':
            // Aktion für -h
            break;
        case 'e':
            // Aktion für -e
            break;
        case 'f':
            // Aktion für -f
            break;
        default:
            // Unbekannte Option
            break;
    }
}
```

- **`getopt`** durchsucht die Kommandozeilenargumente nach definierten Optionen (`"n:hf:e"`).
- **`option_val`** erhält den Wert der gefundenen Option (z.B. `'n'`, `'h'`).
- **Schleifenbedingung:** Die Schleife läuft weiter, solange `getopt` gültige Optionen findet (`option_val != -1`).

### Steuerung des Programmablaufs

Das `switch`-Statement verwendet den Wert von `option_val`, um die entsprechende Aktion für jede erkannte Option auszuführen:

- **`case 'n':`** – Verarbeitet die Option `-n`.
- **`case 'h':`** – Verarbeitet die Option `-h` (z.B. Hilfe anzeigen).
- **`case 'e':`** – Verarbeitet die Option `-e`.
- **`case 'f':`** – Verarbeitet die Option `-f` (z.B. Datei lesen).
- **`default`:** – Handhabt unbekannte Optionen.

## Beispielhafte Ausführung

Angenommen, das Programm wird wie folgt aufgerufen:

```bash
./programm -n 5 -h -e -f datei.txt
```

- **Erste Iteration:** `option_val = 'n'` – Führt die Aktion für `-n` aus.
- **Zweite Iteration:** `option_val = 'h'` – Führt die Aktion für `-h` aus.
- **Dritte Iteration:** `option_val = 'e'` – Führt die Aktion für `-e` aus.
- **Vierte Iteration:** `option_val = 'f'` – Führt die Aktion für `-f` aus.
- **Ende:** `getopt` gibt `-1` zurück, die Schleife endet.

## Zusammenfassung

- **`option_val`** speichert die aktuelle Option, die von `getopt` erkannt wird.
- Es ermöglicht dem Programm, basierend auf der erkannten Option spezifische Aktionen auszuführen.
- Durch die Nutzung von `option_val` in einem `switch`-Statement wird der Code strukturiert und übersichtlich.

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
