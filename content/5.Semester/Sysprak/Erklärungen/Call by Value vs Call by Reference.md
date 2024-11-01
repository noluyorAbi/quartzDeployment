---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Thursday, 31. October 2024, 13:44
date modified: Thursday, 31. October 2024, 13:47
---

# Call by Value vs. Call by Reference in C

| Feature              | Call by Value                      | Call by Reference (nur über Zeiger)        |
| -------------------- | ---------------------------------- | ------------------------------------------ |
| Übergebenes Argument | Kopie des Wertes                   | Adresse der Variable                       |
| Effekt auf Original  | Keine Änderung am Original         | Original kann verändert werden             |
| Speicherverbrauch    | Mehr (jede Kopie braucht Speicher) | Weniger (nur Adresse wird übergeben)       |
| Sicherheit           | Sicher, keine externen Änderungen  | Vorsicht, da Original geändert werden kann |

- **Hinweis**: C unterstützt kein echtes Call by Reference. Änderungen am Original sind nur möglich, indem man einen **Zeiger** (Pointer) auf die Variable übergibt.

## Beispiele

**Call by Value**

```c
#include <stdio.h>
void modifyValue(int x) {
    x = 20;  // Ändert nur die Kopie, Original bleibt unverändert
}
int main() {
    int a = 10;
    modifyValue(a);
    printf("Wert von a: %d\n", a);  // Ausgabe: 10
    return 0;
}
```

**Call by Reference (über Zeiger)**

```c
#include <stdio.h>
void modifyValue(int *x) {
    *x = 20;  // Ändert das Original durch den Zeiger
}
int main() {
    int a = 10;
    modifyValue(&a);
    printf("Wert von a: %d\n", a);  // Ausgabe: 20
    return 0;
}
```

- **Call by Value**: Funktion arbeitet mit einer Kopie; keine Änderung am Original.
- **Call by Reference** (über Zeiger): Funktion arbeitet mit einer Adresse; erlaubt Änderung am Original.

```
















































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
















































```
