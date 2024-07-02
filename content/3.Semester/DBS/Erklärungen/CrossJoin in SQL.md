---
created: 2024-03-22 17:17
last modified: 2024-03-22 17:17
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Friday, 22. March 2024, 17:17
date modified: Thursday, 4. April 2024, 15:24
---

Ein Cross Join, auch bekannt als kartesisches Produkt, ist eine SQL-Operation, die jede Zeile einer Tabelle mit jeder Zeile einer anderen Tabelle kombiniert. Wenn Sie zwei Tabellen haben, wobei die erste Tabelle A \( n \) Zeilen enthält und die zweite Tabelle B \( m \) Zeilen, dann erzeugt ein Cross Join zwischen diesen beiden Tabellen ein Resultatset, das \( n \times m \) Zeilen hat.

### Wie es funktioniert:

- **Ohne WHERE-Klausel**: Wenn Sie einen Cross Join ohne eine WHERE-Klausel (oder irgendeine JOIN-Bedingung) verwenden, kombiniert er einfach jede Zeile der ersten Tabelle mit jeder Zeile der zweiten Tabelle. Das Ergebnis ist ein kartesisches Produkt der beiden Tabellen, was bedeutet, dass, wenn die erste Tabelle 5 Zeilen hat und die zweite Tabelle 10 Zeilen, das Ergebnis des Joins 50 Zeilen haben wird.

  ```sql
  SELECT *
  FROM Tabelle1
  CROSS JOIN Tabelle2;
  ```

  oder einfach:

  ```sql
  SELECT *
  FROM Tabelle1, Tabelle2;
  ```

  Beide Abfragen erzeugen das gleiche kartesische Produkt von `Tabelle1` und `Tabelle2`.

- **Mit WHERE-Klausel**: Obwohl es untypisch ist, einen Cross Join mit einer WHERE-Klausel zu verwenden (da man normalerweise INNER JOINs für solche Bedingungen verwendet), könnten Sie eine Bedingung hinzufügen, um die Ergebnisse zu filtern. Dennoch wird das kartesische Produkt zuerst erstellt, bevor die WHERE-Klausel angewendet wird, was es ineffizient machen kann:

  ```sql
  SELECT *
  FROM Tabelle1
  CROSS JOIN Tabelle2
  WHERE Tabelle1.Spalte1 = Tabelle2.Spalte2;
  ```

  In diesem Fall werden zunächst alle Kombinationen der Zeilen aus `Tabelle1` und `Tabelle2` erstellt, und anschließend werden die Ergebnisse durch die WHERE-Klausel gefiltert.

### Wann man es verwendet:

Cross Joins werden selten in der Praxis verwendet, da sie oft zu großen und unhandlichen Ergebnismengen führen, besonders wenn die beteiligten Tabellen viele Zeilen enthalten. Sie könnten jedoch nützlich sein in Szenarien, in denen man tatsächlich jede mögliche Kombination von Zeilen aus zwei Tabellen benötigt, zum Beispiel in bestimmten Arten von analytischen Abfragen oder wenn man Daten für bestimmte Arten von Berichten generieren möchte.

Es ist wichtig zu beachten, dass Cross Joins sehr ressourcenintensiv sein können und daher mit Vorsicht verwendet werden sollten, insbesondere bei großen Datenmengen.

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
