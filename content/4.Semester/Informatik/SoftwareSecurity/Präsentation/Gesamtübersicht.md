---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Friday, 28. June 2024, 01:32
date modified: Friday, 28. June 2024, 02:09
---

Hier ist eine tabellarische Gesamtübersicht für JWS (JSON Web Signature), JWE (JSON Web Encryption) und JWK (JSON Web Key):

| Merkmal/Aspekt                        | JWS (JSON Web Signature)                                     | JWE (JSON Web Encryption)                       | JWK (JSON Web Key)                                                |
| ------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------- | ----------------------------------------------------------------- |
| Zweck                                 | Signieren von Daten                                          | Verschlüsseln von Daten                         | Verwaltung von kryptographischen Schlüsseln                       |
| Standard                              | RFC 7515                                                     | RFC 7516                                        | RFC 7517                                                          |
| Struktur                              | Header, Payload, Signatur                                    | Header, Encrypted Key, IV, Ciphertext, Auth Tag | JSON-Objekt mit Schlüsselinformationen                            |
| Header                                | Enthält Metadaten (Alg, Typ, etc.)                           | Enthält Metadaten (Alg, Enc, etc.)              | Enthält Schlüsseldaten (kty, use, kid, etc.)                      |
| Payload                               | Beliebige Daten, die signiert werden                         | Beliebige Daten, die verschlüsselt werden       | -                                                                 |
| Signatur-/Verschlüsselungsalgorithmus | HS256, RS256, ES256, etc.                                    | RSA-OAEP, A128KW, A256GCM, etc.                 | Definiert den Schlüsseltyp und -nutzung (z.B. RSA, EC, Okt, etc.) |
| Beispielnutzung                       | JSON Web Token (JWT)                                         | Sicherer Datentransfer                          | Austausch und Verteilung von Schlüsseln                           |
| Kodierung                             | Base64url                                                    | Base64url                                       | JSON                                                              |
| Anwendungsfälle                       | Authentifizierung, Integritätssicherung                      | Vertraulichkeit, Integritätssicherung           | Verteilung kryptographischer Schlüssel                            |
| Wichtigste Felder im Header           | alg, typ                                                     | alg, enc                                        | kty, use, key_ops, alg, kid                                       |
| Beispiel für einen Header             | {"alg": "HS256", "typ": "JWT"}                               | {"alg": "RSA-OAEP", "enc": "A256GCM"}           | {"kty": "RSA", "use": "sig", "kid": "1"}                          |
| Beispiel für einen Payload            | {"sub": "1234567890", "name": "John Doe", "iat": 1516239022} | {"message": "Hello, World!"}                    | -                                                                 |

Diese Tabelle soll eine Übersicht der wesentlichen Unterschiede und Gemeinsamkeiten von JWS, JWE und JWK bieten. JWS wird für die Signatur von Daten verwendet, JWE für die Verschlüsselung von Daten und JWK für die Verwaltung von kryptographischen Schlüsseln.

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
