---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Monday, 10. June 2024, 20:44
date modified: Tuesday, 11. June 2024, 21:38
---

Damit ein JSON-Web-Token (JWT) zur Authentifizierung oder zur Autorisierung dienen kann, müssen spezifische Informationen in den Payloads (dem Datenbereich) des Tokens enthalten sein. Hier sind die Details, was jeweils in den Payloads enthalten sein sollte:

# JWT zur Authentifizierung

Wenn ein JWT zur Authentifizierung verwendet wird, sollte es Informationen enthalten, die die Identität des Benutzers bestätigen. Dazu gehören typischerweise:

1. **`sub` (Subject):** Die eindeutige Kennung des Benutzers (z.B. Benutzer-ID).
2. **`name`:** Der Name des Benutzers.
3. **`email`:** Die E-Mail-Adresse des Benutzers.
4. **`iat` (Issued At):** Der Zeitpunkt, zu dem das Token ausgestellt wurde (in Unix-Zeit).
5. **`exp` (Expiration):** Der Zeitpunkt, zu dem das Token abläuft (in Unix-Zeit).

Beispiel eines JWT-Payloads zur Authentifizierung:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "iat": 1516239022,
  "exp": 1516242622
}
```

# JWT zur Autorisierung

Wenn ein JWT zur Autorisierung verwendet wird, sollte es Informationen enthalten, die die Berechtigungen oder Rollen des Benutzers beschreiben. Dazu gehören typischerweise:

1. **`sub` (Subject):** Die eindeutige Kennung des Benutzers (z.B. Benutzer-ID).
2. **`roles`:** Eine Liste der Rollen, die der Benutzer hat (z.B. `admin`, `user`).
3. **`permissions`:** Eine Liste der spezifischen Berechtigungen des Benutzers (z.B. `read`, `write`, `delete`).
4. **`iat` (Issued At):** Der Zeitpunkt, zu dem das Token ausgestellt wurde (in Unix-Zeit).
5. **`exp` (Expiration):** Der Zeitpunkt, zu dem das Token abläuft (in Unix-Zeit).

Beispiel eines JWT-Payloads zur Autorisierung:

```json
{
  "sub": "1234567890",
  "roles": ["admin", "user"],
  "permissions": ["read", "write", "delete"],
  "iat": 1516239022,
  "exp": 1516242622
}
```

# Zusammenfassung

- **JWT zur Authentifizierung:** Enthält primär Informationen zur Identität des Benutzers (wie Benutzer-ID, Name, E-Mail).
- **JWT zur Autorisierung:** Enthält Informationen zu den Berechtigungen und Rollen des Benutzers (wie Rollen und spezifische Berechtigungen).

In der Praxis können JWTs sowohl Authentifizierungs- als auch Autorisierungsinformationen in einem einzigen Token enthalten, um beide Zwecke zu erfüllen. Die genaue Struktur und die enthaltenen Informationen hängen von den Anforderungen der Anwendung und der Sicherheitsstrategie ab.

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
