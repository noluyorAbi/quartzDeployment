---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Monday, 21. October 2024, 17:19
date modified: Tuesday, 22. October 2024, 09:50
---

# Warum man `sizeof` für Strings in C nicht verwenden sollte

In C kann die Verwendung von `sizeof` bei Strings oft zu unerwarteten Ergebnissen führen. Hier sind die wichtigsten Gründe:

## 1. **Pointer statt Stringgröße**

Wenn ein String als Zeiger (`char *`) definiert wird, gibt `sizeof` die Größe des Zeigers zurück, nicht die Länge des Strings.

### Beispiel:

```c
char *str = "hello";
printf("%lu\n", sizeof(str)); // Auf einem 64-Bit-System: 8 (Größe des Zeigers)
```

**Erklärung:**  
`sizeof(str)` gibt die Größe des Zeigers (typischerweise 8 Byte auf einem 64-Bit-System) zurück, nicht die Anzahl der Zeichen im String.

## 2. **Nullterminator wird mitgezählt**

Wenn der String als Array definiert wird, gibt `sizeof` die Größe des gesamten Arrays zurück, inklusive des Nullterminators (`\0`), der das Ende eines Strings markiert.

### Beispiel:

```c
char str[] = "hello";
printf("%lu\n", sizeof(str)); // Ausgabe: 6 (5 Zeichen + 1 Nullterminator)
```

**Erklärung:**  
`sizeof(str)` liefert 6, da der String `"hello"` aus 5 Zeichen besteht, aber der Nullterminator mitgezählt wird. Dies kann verwirrend sein, wenn man nur die Länge des sichtbaren Textes erwartet.

## 3. **Funktioniert nicht mit dynamischem Speicher**

Bei dynamisch allokierten Strings liefert `sizeof` nur die Größe des Zeigers und nicht die tatsächlich reservierte Speichermenge oder die Länge des Strings.

### Beispiel:

```c
char *str = malloc(100);
strcpy(str, "hello");
printf("%lu\n", sizeof(str)); // Ausgabe: 8 (Größe des Zeigers)
```

**Erklärung:**  
`sizeof(str)` gibt hier nur die Größe des Zeigers zurück (8 Byte auf einem 64-Bit-System). Um die Länge des Strings herauszufinden, muss man `strlen` verwenden.

## Richtiger Ansatz: `strlen`

Um die tatsächliche Länge eines Strings (ohne den Nullterminator) zu ermitteln, sollte die Funktion `strlen` verwendet werden.

### Beispiel:

```c
char str[] = "hello";
printf("%lu\n", strlen(str)); // Ausgabe: 5 (Anzahl der Zeichen im String)
```

**Erklärung:**  
`strlen(str)` zählt die Anzahl der Zeichen im String bis zum Nullterminator, ohne diesen mit einzubeziehen.

## Zusammenfassung

- `sizeof` gibt bei Zeigern die Größe des Zeigers zurück, nicht die Länge des Strings.
- Bei Arrays liefert `sizeof` die Größe des Arrays, inklusive Nullterminator.
- Bei dynamisch allokierten Strings hilft `sizeof` nicht, um die Länge des Strings zu bestimmen.

Verwende **immer** `strlen`, um die tatsächliche Anzahl der Zeichen in einem String zu ermitteln.

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
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
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
