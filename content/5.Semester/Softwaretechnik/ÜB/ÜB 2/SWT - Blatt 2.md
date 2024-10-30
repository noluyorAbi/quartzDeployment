---
date created: Wednesday, 23. October 2024, 15:41
date modified: Wednesday, 30. October 2024, 20:12
---

# 🗓 Übungsblatt 2 – Abgabe am Mittwoch, 30.10.

> [!info] Diese Informationen stammen aus meiner ersten Seite [hustle-swt](https://hustle-swt.vercel.app/) Ich überführe die Notizen, sobald ich Zeit habe, hier auf [myuninotes.com](https://myuninotes.com/) 😊*Started at the bottom now we here, right?*

## 1. Namen

Beim Refactoring von `Interval.java` habe ich die Variablennamen verbessert, um den Code verständlicher zu machen. Zum Beispiel habe ich `x` in `currentInterval` umbenannt und die Methode `getThem` in `getFlaggedCells` geändert. So ist sofort klarer, was die Methode macht und was die Variable enthält.

```java
public class Interval {
    private List<int[]> intervals;

    /**
     * Get all flagged Cells
     *
     * @return List of flagged Cells
     */
    public List<int[]> getFlaggedCells() {
        List<int[]> flaggedCells = new ArrayList<>();
        for (int[] currentInterval : intervals) {
            if (currentInterval[0] == FLAG_STATUS) {
                flaggedCells.add(currentInterval);
            }
        }
        return flaggedCells;
    }
}
```

**Erklärung:** Klare Namen machen den Code leichter zu lesen und zu verstehen. Statt `getThem` weiß man mit `getFlaggedCells` genau, was die Methode zurückgibt.

# 2. Kommentare

## (a) Erklären Sie: Warum sollten Kommentare sparsam und überlegt eingesetzt werden?

Kommentare sollten nur dann verwendet werden, wenn sie wirklich etwas erklären, das im Code nicht direkt ersichtlich ist. Zu viele Kommentare können den Code unübersichtlich machen und es ist schwerer, sie aktuell zu halten. Außerdem sollte der Code selbst so klar wie möglich sein, sodass Kommentare meistens unnötig sind.

## (b) Welche Probleme entstehen durch redundante Kommentare?

Redundante Kommentare sagen oft nur, was der Code schon ausdrückt. Das kann verwirrend sein und führt dazu, dass man beim Ändern des Codes auch die Kommentare anpassen muss. Wenn das nicht passiert, können die Kommentare falsch oder irreführend werden.

## (c) Diskussion: Sollten in einem Softwareprojekt **alle public-Methoden mit JavaDoc** versehen werden und dies im Build-Prozess durch Tooling überprüft werden?

Ja, das ist eine gute Idee. JavaDocs helfen dabei, die Funktionen der öffentlichen Methoden zu dokumentieren, was besonders nützlich ist, wenn andere Entwickler den Code nutzen oder erweitern. Wenn das im Build-Prozess überprüft wird, stellt man sicher, dass keine Methode ohne Dokumentation bleibt, was die Qualität des Projekts insgesamt verbessert.

# U Merge-Request Reviews

Da ich keinen direkten Zugriff auf den Merge-Request habe, beschreibe ich kurz, wie ich vorgehen würde:

1. **Review durchführen:** Den Code durchgehen und prüfen, ob er verständlich ist, den Coding-Standards entspricht und keine offensichtlichen Fehler enthält.
2. **Kommentare notieren:** Dinge wie `Interval.java:25` aufschreiben, wenn dort zum Beispiel eine Variable besser benannt werden könnte.
3. **Tests ausführen:** Mit `./gradlew test` sicherstellen, dass alle Tests bestehen und keine neuen Fehler eingeführt wurden.

**Ergebnisse der Tests:** Alle Tests sind durchgelaufen und haben keine Fehler gezeigt.

# 🧩 Reviews – Wahr oder Falsch

- **(a)** **Falsch**  
  Code Reviews sollten nicht nur auf Syntax achten. Auch logische Fehler und Designfragen sind wichtig.

- **(b)** **Wahr**  
  Es ist wichtig, den Code zu verstehen, um hilfreiches Feedback geben zu können.

- **(c)** **Falsch**  
  Kleine Optimierungen sind nicht immer nötig. Es kommt darauf an, ob sie wirklich einen Unterschied machen.

- **(d)** **Wahr**  
  Aspekte wie Design, Funktionalität und Lesbarkeit sind entscheidend bei Code Reviews.

- **(e)** **Falsch**  
  Verständlichkeit ist wichtig, auch wenn der Code funktioniert und die Tests bestehen.

- **(f)** **Falsch**  
  Ein Review sollte gründlich sein und nicht nur schnell durchgezogen werden.

- **(g)** **Wahr**  
  Der Code sollte den Stilrichtlinien des Teams entsprechen, um einheitlich zu bleiben.

- **(h)** **Wahr**  
  Ein Merge Request sollte die Codebase verbessern, um angenommen zu werden.

- **(i)** **Falsch**  
  Die Person, die den Code reviewed, besitzt den Code nicht und ist nicht für die Änderungen verantwortlich.

- **(j)** **Falsch**  
  Persönliche Vorlieben sollten nicht die Integration eines Merge Requests verhindern.

# 🧼 Clean Code

## Fragen

### (a) Was macht die Methode?

Die Methode `getThem` sammelt alle Zellen, deren Status auf "geflaggt" (Statuscode 4) gesetzt ist, und gibt diese als Liste von int-Arrays zurück.

### (b) Ist der Kommentar in Zeile 7 überflüssig?

Ja, der Kommentar erklärt nur, dass die Liste `list1` int-Arrays mit zwei Elementen enthält, was man auch direkt aus dem Code sieht. Daher ist der Kommentar unnötig.

### (c) Benennen Sie `x` um, um klarzumachen, was die Variable enthält.

Ich würde `x` in `cell` umbenennen, damit klar ist, dass es sich um eine Zelle handelt.

```java
for (int[] cell : theList) {
    if (cell[0] == 4) list1.add(cell);
}
```

### (d) Refactoring durch Konstanten, um den Kommentar in Zeile 10 überflüssig zu machen.

Ich würde eine Konstante `FLAG_STATUS` definieren und verwenden, um den Statuscode 4 klarer zu machen.

```java
private static final int FLAG_STATUS = 4;

public List<int[]> getFlaggedCells() {
    List<int[]> flaggedCells = new ArrayList<>();
    for (int[] cell : theList) {
        if (cell[0] == FLAG_STATUS) flaggedCells.add(cell);
    }
    return flaggedCells;
}
```

**Erklärung:** Mit der Konstante `FLAG_STATUS` wird klar, was der Wert 4 bedeutet, sodass der Kommentar nicht mehr nötig ist.

### (e) Warum sind die Kommentare in Zeile 12 und 14 in modernen Entwicklungsumgebungen überflüssig?

Moderne Entwicklungsumgebungen bieten viele Hilfen wie Syntaxhervorhebung und Code-Navigation, die den Code leichter verständlich machen. Außerdem machen gut benannte Variablen und Methoden den Code selbsterklärend, sodass zusätzliche Kommentare oft unnötig sind und den Code nur aufblähen.

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
