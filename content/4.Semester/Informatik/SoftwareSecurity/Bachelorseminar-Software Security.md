---
tags:
  - 4semester
  - informatik
  - Seminar
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Thursday, 9. May 2024, 14:07
date modified: Friday, 7. June 2024, 21:31
---

# Organisatorisches

> [!info]
>
> - Thema : "Representation of Claims"
>   - Blitzvortrag am 10.05.2024, inhaltliche Kurzvorstellung des Themas in 90 Sekunden mit einer Folie
>   - Erstellung Ausarbeitung (Abgabe: Zwei Wochen vor Seminarvorträgen)
>     - Ausführliche Erklärung des Themas, verständlich für andere Teilnehmer
>     - 7000-14000 Zeichen
> - Anonyme Begutachtung der Ausarbeitungen zweier anderer Teilnehmer (Abgabe: Eine Woche vor Vorträgen)
> - Seminarvorträge (zwei Termine, gegen Ende des Semesters)
> - Endabgabe Ausarbeitung (Zwei Wochen nach Vorträgen)

# Anforderungen

- **Blitzvortrag 90 Sekunden:** Inhaltsübersicht, eine Folie
- **Ausarbeitung zum Thema (7.000-14.000 Zeichen)**
- **Begutachtung der Ausarbeitungen zweier anderer Teilnehmer**
- **Vortrag: 30 Minuten (plus Diskussion)**

# [[Blitzvortrag]]

90 sekündiger Vortrag zum Thema mit einer Folie

# Anforderungen zum Thema

## 10. Representation of Claims

Explain JSON Web Tokens in detail, including the cryptographic concepts like message authentication codes and describe security aspects.

- **JWT specification:** [https://tools.ietf.org/html/rfc7519](https://tools.ietf.org/html/rfc7519)
- **Detering et al. On The (In-)Security Of JavaScript Object Signing And Encryption. 2017**
- **JSON Web Token Best Current Practices:** [https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07](https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07)

> [!info] Erklärung
>
> # Representation of Claims
>
> ## JSON Web Tokens (JWT)
>
> JSON Web Tokens (JWT) sind eine Möglichkeit, Informationen zwischen zwei Parteien in Form von JSON-Objekten sicher als Teil einer URL oder in einem HTTP-Header zu übertragen. Sie bestehen aus drei Teilen: Header, Payload und Signatur.
>
> - **Header**: Enthält Metadaten über den Token wie den Typ und das verwendete Signatur- oder Verschlüsselungsalgorithmus.
> - **Payload**: Enthält die eigentlichen Daten, auch Claims genannt, die übertragen werden sollen.
> - **Signatur**: Wird verwendet, um die Integrität des Tokens zu überprüfen und sicherzustellen, dass es nicht manipuliert wurde.
>
> JWT verwenden verschiedene kryptografische Konzepte, darunter:
>
> - **Message Authentication Codes (MAC)**: Ein MAC ist eine kryptografische Technik, die verwendet wird, um die Integrität und Authentizität einer Nachricht zu gewährleisten. Im Kontext von JWT wird der Signaturteil des Tokens mit einem geheimen Schlüssel und einem Hash-Algorithmus erstellt, um sicherzustellen, dass der Token nicht manipuliert wurde.
>
> ### Sicherheitsaspekte
>
> - **Vertraulichkeit**: Standardmäßig sind die Daten im Payload eines JWT nicht verschlüsselt und können von jedem, der den Token sieht, gelesen werden. Sensible Informationen sollten daher vermieden oder vor dem Kodieren verschlüsselt werden.
> - **Integrität**: Durch die Verwendung einer Signatur kann die Integrität des Tokens sichergestellt werden. Jede Änderung an einem Teil des Tokens würde die Signatur ungültig machen und somit Manipulationen erkennen lassen.
> - **Verfügbarkeit**: JWT sollten gegen verschiedene Angriffe wie Token-Entführung und Fälschung geschützt werden. Best Practices und Sicherheitsrichtlinien sollten daher beachtet werden.
>
> ## Quellen
>
> - [JWT-Spezifikation (RFC 7519)](https://tools.ietf.org/html/rfc7519)
> - Detering et al. "On The (In-)Security Of JavaScript Object Signing And Encryption." 2017.
> - [JSON Web Token Best Current Practices](https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07)

# Referenzen

## Erklärungen

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/UBUNrFtufWo?si=0xbCzV4hgcwJtml1" title=" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/qVG4o6Nskzg?si=fSxgwKL7cyR2_aqR" title=" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Disadvantages of JWT

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/I7gQTBYmEEg?si=MTIdVwOogFGGUu-9" title=" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Implement JWT

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/mbsmsi7l3r4" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/5jnMFO8Im00" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

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
