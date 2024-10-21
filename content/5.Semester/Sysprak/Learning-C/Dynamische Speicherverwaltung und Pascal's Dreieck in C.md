---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Monday, 21. October 2024, 15:17
date modified: Monday, 21. October 2024, 15:37
---

Dieses Tutorial führt Einsteiger in die dynamische Speicherverwaltung in C ein, indem es ein Programm vorstellt, das ein zweidimensionales Array erstellt, dessen Struktur einem Pascal'schen Dreieck ähnelt. Wir erklären Schritt für Schritt die Konzepte und den Code, um ein besseres Verständnis zu ermöglichen.

# Keywords

- **Zeiger**
- **Doppelte Zeiger**
- **malloc**
- **free**
- **dynamische Speicherallokation**
- **Speicherfreigabe**
- **Speicherlecks**
- **Pascal'sche Dreieck**
- **zweidimensionales Array**

# Einführung

In der Programmierung ist die Verwaltung des Speichers ein grundlegendes Konzept. C bietet dafür Funktionen wie `malloc` und `free`, mit denen Speicher dynamisch zur Laufzeit zugewiesen und freigegeben werden kann. Dieses Beispiel zeigt, wie man ein zweidimensionales Array dynamisch erstellt, initialisiert, ausgibt und schließlich den belegten Speicher freigibt.

# Programmübersicht

Hier ist das vollständige C-Programm, das wir im Verlauf dieses Tutorials erläutern werden:

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, j;
    /* Deklaration der 2D-Zeiger-Variable */
    int **pnumbers;

    /* Speicherallokation für drei Zeilen */
    pnumbers = (int **)malloc(3 * sizeof(int *));

    /* Speicherallokation für die einzelnen Elemente jeder Zeile */
    pnumbers[0] = (int *)malloc(1 * sizeof(int));
    pnumbers[1] = (int *)malloc(2 * sizeof(int));
    pnumbers[2] = (int *)malloc(3 * sizeof(int));

    /* Initialisierung der Werte */
    pnumbers[0][0] = 1;
    pnumbers[1][0] = 1;
    pnumbers[1][1] = 1;
    pnumbers[2][0] = 1;
    pnumbers[2][1] = 2;
    pnumbers[2][2] = 1;

    /* Ausgabe des Arrays */
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j <= i; j++)
        {
            printf("%d", pnumbers[i][j]);
        }
        printf("\n");
    }

    /* Speicherfreigabe */
    for (i = 0; i < 3; i++)
    {
        free(pnumbers[i]);
    }
    free(pnumbers);

    return 0;
}
```

# Wichtige Konzepte

Bevor wir den Code im Detail betrachten, ist es wichtig, einige grundlegende Konzepte zu verstehen.

## Zeiger in C

**Zeiger** sind Variablen, die die Speicheradresse einer anderen Variable speichern. Anstatt direkt einen Wert zu halten, enthalten sie die Adresse, unter der dieser Wert gespeichert ist.

```c
int a = 10;
int *p = &a; // 'p' ist ein Zeiger auf 'a'
```

- **`int *p`**: Deklariert einen Zeiger `p`, der auf eine Ganzzahl (`int`) zeigt.
- **`&a`**: Der Adressoperator `&` gibt die Speicheradresse von `a` zurück.
- **`p = &a`**: Weist dem Zeiger `p` die Adresse von `a` zu.

## Doppelte Zeiger

Ein **doppelter Zeiger** ist ein Zeiger auf einen Zeiger. Das bedeutet, er speichert die Adresse eines anderen Zeigers.

```c
int a = 10;
int *p = &a;    // 'p' ist ein Zeiger auf 'a'
int **pp = &p;  // 'pp' ist ein doppelter Zeiger auf 'p'
```

- **`int **pp`**: Deklariert einen doppelten Zeiger `pp`, der auf einen Zeiger (`int \*`) zeigt.
- **`pp = &p`**: Weist `pp` die Adresse von `p` zu.

In unserem Programm wird `int **pnumbers` verwendet, um ein zweidimensionales Array dynamisch zu erstellen. Dabei zeigt `pnumbers` auf ein Array von Zeigern, wobei jeder dieser Zeiger auf eine Zeile des 2D-Arrays zeigt.

## Dynamische Speicherallokation mit `malloc`

Die Funktion `malloc` (memory allocation) reserviert zur Laufzeit einen bestimmten Speicherbereich und gibt einen Zeiger auf diesen Speicher zurück.

```c
int *p = (int *)malloc(sizeof(int) * 5); // Reserviert Speicher für 5 ganze Zahlen
```

- **`malloc(sizeof(int) * 5)`**: Reserviert genügend Speicher für 5 `int`-Werte.
- **`(int *)`**: Typumwandlung (Casting) des zurückgegebenen `void *` von `malloc` zu `int *`.

**Wichtig:** Nach der Verwendung von `malloc` sollte der zugewiesene Speicher mit `free` freigegeben werden, um Speicherlecks zu vermeiden.

## Speicherfreigabe mit `free`

Die Funktion `free` gibt den zuvor mit `malloc` (oder ähnlichen Funktionen) reservierten Speicher wieder frei.

```c
free(p); // Gibt den Speicher frei, auf den 'p' zeigt
```

- **`free(p)`**: Gibt den Speicherbereich frei, auf den der Zeiger `p` zeigt.
- Nach dem Aufruf von `free(p)` ist der Speicher nicht mehr gültig und sollte nicht erneut verwendet werden.

# Detaillierte Code-Erklärung

## 1. Einbinden der Header-Dateien

```c
#include <stdio.h>
#include <stdlib.h>
```

- **`stdio.h`**: Enthält Funktionen für die Ein- und Ausgabe, wie `printf`.
- **`stdlib.h`**: Enthält Funktionen für die Speicherverwaltung, wie `malloc` und `free`.

## 2. Deklaration der Variablen

```c
int i, j;
int **pnumbers;
```

- **`int i, j`**: Schleifenvariablen für die Ausgabe.
- **`int **pnumbers`\*\*: Ein doppelter Zeiger, der auf ein zweidimensionales Array von Ganzzahlen zeigt.

## 3. Speicherallokation für die Zeilen

```c
pnumbers = (int **)malloc(3 * sizeof(int *));
```

- **Zweck**: Reserviert Speicher für drei Zeiger (`int *`), die jeweils eine Zeile des Arrays repräsentieren.
- **Erklärung**:
  - **`malloc(3 * sizeof(int *))`**: Reserviert Speicher für 3 Zeiger auf `int`.
  - **`(int **)`**: Typumwandlung (Casting) des zurückgegebenen `void \*`von`malloc`zu`int \*\*`.
  - **`pnumbers`**: Zeigt nun auf den ersten Zeiger im reservierten Speicherbereich.

## 4. Speicherallokation für die Elemente der einzelnen Zeilen

```c
pnumbers[0] = (int *)malloc(1 * sizeof(int)); // 1 Element in der 1. Zeile
pnumbers[1] = (int *)malloc(2 * sizeof(int)); // 2 Elemente in der 2. Zeile
pnumbers[2] = (int *)malloc(3 * sizeof(int)); // 3 Elemente in der 3. Zeile
```

- **Zweck**: Reserviert Speicher für die einzelnen Elemente jeder Zeile.
- **Erklärung**:
  - **`pnumbers[0]`**: Zeigt auf ein Array mit 1 Element.
  - **`pnumbers[1]`**: Zeigt auf ein Array mit 2 Elementen.
  - **`pnumbers[2]`**: Zeigt auf ein Array mit 3 Elementen.

## 5. Initialisierung der Werte

```c
pnumbers[0][0] = 1;
pnumbers[1][0] = 1;
pnumbers[1][1] = 1;
pnumbers[2][0] = 1;
pnumbers[2][1] = 2;
pnumbers[2][2] = 1;
```

- **Zweck**: Weist den einzelnen Elementen des Arrays Werte zu, die den ersten drei Zeilen von Pascal's Dreieck entsprechen.
- **Erklärung**:
  - **1. Zeile**: `[1]`
  - **2. Zeile**: `[1, 1]`
  - **3. Zeile**: `[1, 2, 1]`

## 6. Ausgabe des Arrays

```c
for (i = 0; i < 3; i++)
{
    for (j = 0; j <= i; j++)
    {
        printf("%d", pnumbers[i][j]);
    }
    printf("\n");
}
```

- **Zweck**: Gibt die Werte des Arrays in einem dreieckigen Format aus.
- **Erklärung**:
  - **Äußere Schleife (`for (i = 0; i < 3; i++)`)**: Iteriert über die Zeilen.
  - **Innere Schleife (`for (j = 0; j <= i; j++)`)**: Iteriert über die Elemente jeder Zeile.
  - **`printf("%d", pnumbers[i][j])`**: Gibt das aktuelle Element aus.
  - **`printf("\n")`**: Wechselt zur nächsten Zeile nach der Ausgabe einer Zeile.

## 7. Speicherfreigabe

```c
for (i = 0; i < 3; i++)
{
    free(pnumbers[i]);
}
free(pnumbers);
```

- **Zweck**: Gibt den zuvor reservierten Speicher wieder frei.
- **Erklärung**:
  - **Innere Schleife (`for (i = 0; i < 3; i++)`)**: Gibt den Speicher jeder Zeile frei.
  - **`free(pnumbers[i])`**: Gibt den Speicher der jeweiligen Zeile frei.
  - **`free(pnumbers)`**: Gibt den Speicher des Zeiger-Arrays frei.

# Konsolenausgabe Beispiel

Nach dem Ausführen des Programms wird folgende Ausgabe in der Konsole angezeigt:

```
1
11
121
```

**Erläuterung**:

- **1. Zeile**: `1`
- **2. Zeile**: `11`
- **3. Zeile**: `121`

Dies entspricht den ersten drei Zeilen von Pascal's Dreieck ohne Leerzeichen.

# Zusammenfassung

Dieses Programm veranschaulicht die folgenden Konzepte:

- **Dynamische Speicherverwaltung**: Nutzung von `malloc` zur Laufzeit zur Reservierung von Speicher und `free` zur Freigabe.
- **Zeiger und doppelte Zeiger**: Verständnis, wie Zeiger auf Zeiger verwendet werden, um mehrdimensionale Arrays zu erstellen.
- **Zweidimensionale Arrays**: Erstellung und Verwaltung von Arrays, bei denen jede Zeile unterschiedliche Längen haben kann.
- **Speicherlecks vermeiden**: Durch korrektes Freigeben des reservierten Speichers wird verhindert, dass der Speicher unnötig belegt bleibt.

Dieses Beispiel ist besonders nützlich für Anfänger, um die Grundlagen der Speicherverwaltung in C zu verstehen und wie man komplexere Datenstrukturen wie zweidimensionale Arrays dynamisch handhabt.

# Hinweise für Anfänger

- **Fehlerbehandlung**: In diesem Beispiel wird die Rückgabe von `malloc` nicht überprüft. In einem robusteren Programm sollte überprüft werden, ob die Speicherallokation erfolgreich war.

  ```c
  pnumbers = (int **)malloc(3 * sizeof(int *));
  if (pnumbers == NULL) {
      fprintf(stderr, "Speicherallokation fehlgeschlagen\n");
      return 1;
  }
  ```

- **Initialisierung**: Es ist eine gute Praxis, den zugewiesenen Speicher zu initialisieren, um unerwartete Werte zu vermeiden.

- **Kommentierung**: Kommentare helfen dabei, den Code besser zu verstehen und zu dokumentieren, was jeder Teil des Programms macht.

Durch das Verständnis und die Anwendung dieser Konzepte können Sie effizientere und sicherere Programme in C schreiben.

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
