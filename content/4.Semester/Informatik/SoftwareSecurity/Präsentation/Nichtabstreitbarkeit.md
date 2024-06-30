---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 26. June 2024, 23:55
date modified: Thursday, 27. June 2024, 00:08
---

Nichtabstreitbarkeit (auch Nichtabstreitbarkeit genannt) ist ein Sicherheitsmerkmal, das sicherstellt, dass ein Absender einer Nachricht oder einer Transaktion nicht erfolgreich leugnen kann, diese Nachricht gesendet oder diese Transaktion durchgeführt zu haben. Dies wird durch digitale Signaturen erreicht, die kryptografisch an den Absender gebunden sind.

# Nichtabstreitbarkeit im Detail

1. **Definition**:

   - Nichtabstreitbarkeit bedeutet, dass ein Absender die Tatsache, eine bestimmte Nachricht oder Aktion ausgeführt zu haben, nicht leugnen kann.

2. **Bedeutung**:

   - Dies ist wichtig für viele rechtliche und geschäftliche Anwendungen, um sicherzustellen, dass digitale Kommunikation und Transaktionen authentisch und nachweisbar sind.

3. **Erreichen von Nichtabstreitbarkeit**:
   - **Asymmetrische Signaturen**:
     - Hier wird ein privater Schlüssel verwendet, um eine Nachricht zu signieren.
     - Der öffentliche Schlüssel des Absenders wird verwendet, um die Signatur zu verifizieren.
     - Da nur der Besitzer des privaten Schlüssels die Nachricht signieren kann, kann der Absender nicht leugnen, die Nachricht gesendet zu haben.
   - **Symmetrische Signaturen**:
     - Beide Parteien teilen denselben geheimen Schlüssel.
     - Jede Partei könnte die Nachricht signiert haben, daher kann die Nichtabstreitbarkeit nicht gewährleistet werden.

## Anwendungsbeispiele

- **E-Mail-Verschlüsselung**: Eine signierte E-Mail kann nachweisen, dass der Absender tatsächlich derjenige ist, der die Nachricht gesendet hat.
- **Digitale Verträge**: Digitale Signaturen auf Verträgen können sicherstellen, dass die Parteien ihre Zustimmung nicht leugnen können.
- **Finanztransaktionen**: Digitale Signaturen können verhindern, dass Benutzer Transaktionen leugnen, die sie durchgeführt haben.

# Zusammenfassung in der Tabelle

Hier ist die aktualisierte Tabelle mit der Definition und Bedeutung der Nichtabstreitbarkeit:

| Kategorie                     | Symmetrische Signaturen                   | Asymmetrische Signaturen                                           |
| ----------------------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| **Schlüsseltyp**              | Ein geheimer Schlüssel                    | Ein Schlüsselpaar (privater und öffentlicher Schlüssel)            |
| **Schlüsselaustausch**        | Erfordert sicheren Austausch              | Öffentlicher Schlüssel kann frei verteilt werden                   |
| **Leistung**                  | Schneller                                 | Langsamer                                                          |
| **Vertrauensmodell**          | Beide Parteien teilen denselben Schlüssel | Vertrauen beruht auf dem Schutz des privaten Schlüssels            |
| **Skalierbarkeit**            | Weniger skalierbar                        | Besser skalierbar                                                  |
| **Nichtabstreitbarkeit**      | Nicht gewährleistet                       | Gewährleistet, da nur der private Schlüssel signieren kann         |
| **Beispiele für Algorithmen** | HMAC (z.B. HS256)                         | RSA (z.B. RS256), ECDSA (z.B. ES256)                               |
| **Signaturgröße**             | Abhängig von der Hash-Funktion            | RSA: Größer, ECDSA: Kleiner                                        |
| **JWT-Header**                | `{"alg": "HS256", "typ": "JWT"}`          | `{"alg": "RS256", "typ": "JWT"}`, `{"alg": "ES256", "typ": "JWT"}` |

Diese Tabelle verdeutlicht die Unterschiede und erklärt, warum asymmetrische Signaturen Nichtabstreitbarkeit gewährleisten können, während symmetrische Signaturen dies nicht können.

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
