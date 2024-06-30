---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 26. June 2024, 23:49
date modified: Wednesday, 26. June 2024, 23:55
---

# Vergleichstabelle: Symmetrische Signaturen vs. Asymmetrische Signaturen

| Kategorie                      | Symmetrische Signaturen                                                                    | Asymmetrische Signaturen                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **Schlüsseltyp**               | Ein geheimer Schlüssel (shared key)                                                        | Ein Schlüsselpaar (privater und öffentlicher Schlüssel)                               |
| **Schlüsselaustausch**         | Erfordert sicheren Austausch des geheimen Schlüssels                                       | Der öffentliche Schlüssel kann frei verteilt werden, privater Schlüssel bleibt geheim |
| **Komplexität**                | Einfachere Berechnung, schneller                                                           | Komplexere Berechnung, langsamer                                                      |
| **Vertrauensmodell**           | Beide Parteien müssen dem gleichen geheimen Schlüssel vertrauen                            | Vertrauen beruht auf dem Schutz des privaten Schlüssels                               |
| **Skalierbarkeit**             | Weniger skalierbar (jeder Kommunikationspartner benötigt einen eigenen geheimen Schlüssel) | Besser skalierbar (ein privater Schlüssel, viele öffentliche Schlüssel)               |
| **Beispiele für Algorithmen**  | HMAC (Hash-based Message Authentication Code)                                              | RSA, ECDSA (Elliptic Curve Digital Signature Algorithm)                               |
| **Signaturgröße**              | Abhängig von der Hash-Funktion                                                             | RSA: Größer, ECDSA: Kleiner                                                           |
| **Schlüsselgröße**             | Typischerweise 128-256 Bit                                                                 | RSA: Typischerweise 2048-4096 Bit, ECDSA: Typischerweise 256-384 Bit                  |
| **Sicherheit**                 | Hohe Sicherheit bei starkem geheimen Schlüssel und sicherem Austausch                      | Hohe Sicherheit bei starkem privaten Schlüssel und sicherem Management                |
| **Anwendungsfall**             | Authentifizierung in geschlossenen Systemen, API-Sicherungen                               | Digitale Signaturen, E-Mail-Verschlüsselung, Authentifizierung in offenen Systemen    |
| **Verwendungsbeispiel in JWT** | `{"alg": "HS256", "typ": "JWT"}`                                                           | `{"alg": "RS256", "typ": "JWT"}`, `{"alg": "ES256", "typ": "JWT"}`                    |

## Beschreibung

- **Schlüsseltyp**:

  - **Symmetrisch**: Verwendet einen einzigen geheimen Schlüssel für sowohl das Signieren als auch das Verifizieren.
  - **Asymmetrisch**: Verwendet ein Schlüsselpaar. Der private Schlüssel signiert die Nachricht, und der öffentliche Schlüssel verifiziert die Signatur.

- **Schlüsselaustausch**:

  - **Symmetrisch**: Der geheime Schlüssel muss sicher zwischen den Parteien ausgetauscht werden.
  - **Asymmetrisch**: Der öffentliche Schlüssel kann frei verteilt werden, während der private Schlüssel geheim bleibt.

- **Komplexität**:

  - **Symmetrisch**: Weniger komplex und schneller bei der Berechnung.
  - **Asymmetrisch**: Komplexere Berechnung und langsamer als symmetrische Verfahren.

- **Vertrauensmodell**:

  - **Symmetrisch**: Beide Parteien müssen den geheimen Schlüssel sicher und vertraulich halten.
  - **Asymmetrisch**: Der private Schlüssel muss sicher bleiben, während der öffentliche Schlüssel verteilt wird.

- **Skalierbarkeit**:

  - **Symmetrisch**: Weniger skalierbar, da jeder Paar von Kommunikationspartnern einen eigenen geheimen Schlüssel benötigt.
  - **Asymmetrisch**: Besser skalierbar, ein privater Schlüssel kann mit vielen öffentlichen Schlüsseln verwendet werden.

- **Beispiele für Algorithmen**:

  - **Symmetrisch**: HMAC (Hash-based Message Authentication Code).
  - **Asymmetrisch**: RSA, ECDSA.

- **Signaturgröße**:

  - **Symmetrisch**: Hängt von der verwendeten Hash-Funktion ab (z.B. SHA-256).
  - **Asymmetrisch**: RSA-Signaturen sind größer, während ECDSA-Signaturen kleiner sind.

- **Schlüsselgröße**:

  - **Symmetrisch**: Typischerweise 128-256 Bit.
  - **Asymmetrisch**: RSA verwendet typischerweise 2048-4096 Bit, ECDSA verwendet typischerweise 256-384 Bit.

- **Sicherheit**:

  - **Symmetrisch**: Hohe Sicherheit, wenn der geheime Schlüssel stark und sicher ausgetauscht wird.
  - **Asymmetrisch**: Hohe Sicherheit, wenn der private Schlüssel stark und sicher verwaltet wird.

- **Anwendungsfall**:

  - **Symmetrisch**: Geeignet für geschlossene Systeme, API-Sicherungen.
  - **Asymmetrisch**: Geeignet für offene Systeme, digitale Signaturen, E-Mail-Verschlüsselung, Authentifizierung.

- **Verwendungsbeispiel in JWT**:
  - **Symmetrisch**: `{"alg": "HS256", "typ": "JWT"}`
  - **Asymmetrisch**: `{"alg": "RS256", "typ": "JWT"}`, `{"alg": "ES256", "typ": "JWT"}`

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
