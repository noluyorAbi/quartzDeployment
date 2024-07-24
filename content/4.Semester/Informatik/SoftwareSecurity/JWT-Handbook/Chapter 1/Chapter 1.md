---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Monday, 3. June 2024, 22:28
date modified: Monday, 3. June 2024, 23:06
---

# Introduction

## 1.1 What is a JSON Web Token?

A JSON Web Token looks like this

```jwt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9. TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

While this looks like gibberish, it is actually a very compact, printable representation of a series of claims, along with a signature to verify its authenticity.

```json
{
"alg": "HS256",
"typ": "JWT"
}

{
"sub": "1234567890",
"name": "John Doe",
"admin": true
}
```

„Claims are definitions or assertions made about a certain party or object. Some of these claims and their meaning are defined as part of the JWT spec. Others are user defined. The magic behind JWTs is that they standardize certain claims that are useful in the context of some common operations. For example, one of these common operations is establishing the identity of certain party. So one of the standard claims found in JWTs is the sub (from “subject”) claim. We will take a deeper look at each of the standard claims in chapter 3.“

„Another key aspect of JWTs is the possiblity of signing them, using JSON Web Signatures (JWS, RFC 7515), and/or encrypting them, using JSON Web Encryption (JWE, RFC 7516). Together with JWS and JWE, JWTs provide a powerful, secure solution to many different problems.“

## 1.2 What problem does it solve?

- Main purpose is to transfer claims between two parties
- most important aspect is the _standardization effort_ in the form of _simple, optionally validated and/or encrypted, container_ format
- JWT is a simple, useful standard container format
  - $\Longrightarrow$ Older formats serving the same purpose are for example the [SAMPL](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)

**Used in:**

- Authentication
- Authorization
- Federated identity
- Client-side sessions (“stateless” sessions)
- Client-side secrets

## 1.3 A little bit of history

- The JSON Object Signing and Encryption (JOSE) group was established in 2011.
- Objective: Standardize integrity protection, encryption, and key/algorithm identification for JSON-based security protocols.
- By 2013, produced drafts and a cookbook of examples.
- Drafts became the JWT, JWS, JWE, JWK, and JWA RFCs.
- As of 2016, these RFCs were on the standards track with no reported errata.
- The group is currently inactive.

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
