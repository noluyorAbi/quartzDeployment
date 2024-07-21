---
tags:
  - 4semester
  - Seminar
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Monday, 3. June 2024, 19:58
date modified: Monday, 10. June 2024, 20:25
---

# Comprehensive Guide to JSON Web Tokens (JWT)

## Introduction

JSON Web Tokens (JWTs) have become a cornerstone in modern web security, providing a compact and self-contained way to securely transmit information between parties as a JSON object. Defined by RFC 7519, JWTs are widely adopted for their efficiency and versatility in various applications, particularly in authentication and authorization processes.

## What is a JSON Web Token (JWT)?

A JSON Web Token (JWT) is an open standard that defines a method for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. The tokens are URL-safe, making them suitable for use in web applications.

## Structure of a JWT

A JWT consists of three parts separated by dots (.), which are:

- **Header:** Contains metadata about the token, such as the type of token (JWT) and the signing algorithm being used (e.g., HMAC SHA256 or RSA).
- **Payload:** Contains the claims, which are statements about an entity (typically, the user) and additional data. Claims can be registered, public, or private.
- **Signature:** Ensures that the token has not been altered. It is created by taking the encoded header, the encoded payload, a secret, and the algorithm specified in the header, and signing them.

The resulting token looks like this: `xxxxx.yyyyy.zzzzz`.

## Use Cases for JWTs

JWTs are primarily used in two scenarios:

- **Authorization:** Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. This is particularly useful in Single Sign-On (SSO) scenarios.
- **Information Exchange:** JWTs are a good way of securely transmitting information between parties. Because they can be signed using public/private key pairs, the sender can be verified, and the integrity of the content can be ensured.

## Advantages of JWTs

JWTs offer several benefits over other token formats like Simple Web Tokens (SWT) and Security Assertion Markup Language (SAML) tokens:

- **Compact:** JSON is less verbose than XML, making JWTs smaller and more efficient to transmit.
- **Self-contained:** JWTs carry all the necessary information within the token itself, eliminating the need for server-side session storage.
- **Versatile:** JWTs can be used across different domains and are suitable for various applications, from web and mobile apps to microservices and APIs.

## Security Considerations

While JWTs provide a robust mechanism for secure data transmission, they must be implemented correctly to avoid vulnerabilities. Best practices include using strong signing algorithms, setting appropriate expiration times, and ensuring secure storage and transmission of tokens. For more detailed security practices, refer to the RFC 8725 document.

## Conclusion

JSON Web Tokens (JWTs) have revolutionized secure data transmission and authentication processes on the web. Their compact, self-contained nature and robust security features make them an excellent choice for developers looking to implement secure and efficient authentication mechanisms. As technology evolves, staying updated with the latest best practices and security measures is crucial to maintaining the integrity and trustworthiness of JWTs.

---

# Introduction to JSON Web Tokens (JWT)

## What is a JSON Web Token (JWT)?

A JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA (JWT.io).

## Structure of a JWT

A JWT is composed of three parts: the header, the payload, and the signature. These parts are encoded separately using Base64url Encoding and concatenated using periods to produce the JWT (Wikipedia).

### Header

The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. For example:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

This JSON is then Base64Url encoded to form the first part of the JWT (Auth0).

### Payload

The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

- **Registered claims:** These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some examples are `iss` (issuer), `exp` (expiration time), `sub` (subject), and `aud` (audience).
- **Public claims:** These can be defined at will by those using JWTs. However, to avoid collisions, they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision-resistant namespace.
- **Private claims:** These are the custom claims created to share information between parties that agree on using them and are neither registered nor public claims.

An example payload might look like this:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

This JSON is then Base64Url encoded to form the second part of the JWT (HowToGeek).

### Signature

To create the signature part, you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. For example, if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

```plaintext
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```

The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way (Auth0).

## How JWTs Work

When a user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required. You also should not store sensitive session data in browser storage due to lack of security (Auth0).

### Authentication

JWTs are commonly used for authentication. When a user logs in, the server generates a JWT and sends it to the client. The client stores this token (usually in local storage or a cookie) and includes it in the Authorization header of subsequent requests. The server then verifies the token and grants access to protected resources (FreeCodeCamp).

### Authorization

JWTs are also used for authorization. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign-On (SSO) is a feature that widely uses JWT nowadays because of its small overhead and its ability to be easily used across different domains (JWT.io).

## Benefits of Using JWTs

### Statelessness

JWTs are stateless. This means that each request carries all the necessary information within the token itself, eliminating the need for server-side storage. This stateless nature streamlines the communication process, allowing for faster, more efficient transactions (F22Labs).

### Compact and URL-safe

Because of its relatively small size, a JWT can be sent through a URL, through a POST parameter, or inside an HTTP header, and it is transmitted quickly. A JWT contains all the required information about an entity to avoid querying a database more than once. The recipient of a JWT also does not need to call a server to validate the token (Auth0).

### Security

JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. This ensures that the claims cannot be altered once the token is issued. Additionally, JWTs can be encrypted to provide secrecy between parties (JWT.io).

## Common Use Cases

### API Authentication

JWTs are commonly used for API authentication. When a user logs in, the server generates a JWT and sends it to the client. The client includes this token in the Authorization header of subsequent requests to access protected resources. The server verifies the token and grants access accordingly (DigitalOcean).

### Single Sign-On (SSO)

JWTs are widely used in Single Sign-On (SSO) systems. SSO allows users to log in once and gain access to multiple systems without being prompted to log in again at each of them. JWTs are ideal for this because they are compact, self-contained, and can be easily used across different domains (Sophos).

### Information Exchange

JWTs are a good way of securely transmitting information between parties. Because JWTs can be signed, you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with (JWT.io).

## Security Considerations

### Token Expiration

JWTs should have an expiration time to mitigate the risk of token misuse. This is done by including the `exp` claim in the payload, which specifies the expiration time of the token. Once the token expires, the client must request a new token (FreeCodeCamp).

### Secure Storage

JWTs should be stored securely on the client-side to prevent unauthorized access by attackers. Consider using HttpOnly cookies for storing tokens instead of local storage or session storage, as HttpOnly cookies are not accessible to JavaScript and less susceptible to XSS attacks (Sophos).

### Strong Signing Algorithms

Employ robust cryptographic algorithms for token signing and encryption, such as HMAC with SHA-256

or RSA with at least a 2048-bit key size. Avoid using weak or deprecated algorithms that may be vulnerable to attacks (Aptori).

### Avoid Storing Sensitive Data

Avoid putting sensitive information in the payload component of the token, as the payload is typically Base64Url encoded and can be easily decoded. Additionally, the secret key used to sign the token should be kept hidden and never exposed to public information, as it can compromise the security of the system (FreeCodeCamp).

## Conclusion

JSON Web Tokens (JWTs) have revolutionized secure data transmission and authentication processes on the web. Their compact, self-contained nature and robust security features make them an excellent choice for developers looking to implement secure and efficient authentication mechanisms. As technology evolves, staying updated with the latest best practices and security measures is crucial to maintaining the integrity and trustworthiness of JWTs.

---

# Security Best Practices for JWT

## Use Strong Signing Algorithms

One of the most critical aspects of securing JSON Web Tokens (JWTs) is the choice of signing algorithms. It is recommended to use robust cryptographic algorithms such as RSA with SHA-256 (RS256) or Elliptic Curve Digital Signature Algorithm (ECDSA). These algorithms provide enhanced cryptographic security, reducing the risk of token manipulation or forgery by attackers (Nile Bits).

## Set Reasonable Token Expiration Times

Defining sensible expiration times for JWTs is essential to limit their validity period. Shorter expiration times minimize the risk of token misuse and unauthorized access in case of token leakage or compromise. They also encourage regular token renewal, promoting better security hygiene (Snyk).

## Store Tokens Securely

Storing JWTs securely is crucial to prevent unauthorized access and tampering. Prefer server-side storage mechanisms, such as HTTP-only cookies or server-managed sessions, over client-side storage options like localStorage or sessionStorage. Server-side storage mitigates the risk of cross-site scripting (XSS) attacks, where attackers could access or manipulate JWTs stored in the client’s browser (Snyk).

## Validate Token Claims

Validating token claims on every request is a fundamental security practice. This includes checking the token's signature, expiration time, issuer, and audience. Ensuring that the token has not been tampered with and that it is still valid helps maintain the integrity of the authentication process (Auth0).

## Use HTTPS for Token Transmission

Always use HTTPS to transmit JWTs to ensure that the tokens are encrypted during transit. This prevents attackers from intercepting and stealing tokens through man-in-the-middle (MITM) attacks. HTTPS provides a secure channel for communication between the client and server (Snyk).

## Implement Proper Token Revocation

Since JWTs are stateless, revoking them can be challenging. Implementing a token revocation mechanism, such as maintaining a blacklist of revoked tokens or using short-lived tokens with refresh tokens, can help mitigate this issue. This ensures that compromised tokens can be invalidated promptly (RFC 8725).

## Avoid Storing Sensitive Data in JWTs

JWTs should not contain sensitive information such as passwords or personal identification numbers (PINs). Since the payload of a JWT is base64 encoded and not encrypted, it can be easily decoded. Storing sensitive data in JWTs can lead to data breaches if the token is intercepted (FreeCodeCamp).

## Use Pairwise Pseudonymous Identifiers (PPIDs)

Using Pairwise Pseudonymous Identifiers (PPIDs) can enhance privacy by ensuring that the same user has different identifiers for different relying parties. This prevents cross-site tracking and helps maintain user privacy (Nile Bits).

## Handle Time-Based Claims Carefully

Time-based claims such as `exp` (expiration) and `nbf` (not before) should be handled carefully. Ensure that these claims are validated correctly to prevent the use of expired or not yet valid tokens. This helps maintain the integrity of the authentication process (Medium).

## Secure Key Management

Proper key management is essential for securing JWTs. Ensure that signing keys are stored securely and are not exposed to unauthorized parties. Using hardware security modules (HSMs) or key management services (KMS) can help protect keys from being compromised (Auth0).

## Regularly Rotate Signing Keys

Regularly rotating signing keys helps mitigate the risk of key compromise. Implementing a key rotation strategy ensures that even if a key is compromised, it will only be valid for a limited period. This practice enhances the overall security of the JWT-based authentication system (Curity).

## Monitor and Audit Token Usage

Monitoring and auditing token usage can help detect and respond to suspicious activities. Implementing logging and monitoring mechanisms allows for the detection of anomalies such as token reuse or unauthorized access attempts. This helps in maintaining the security of the authentication system (Invicti).

## Use Appropriate Algorithms

Always perform algorithm verification to prevent attacks such as the `"alg": "none"` attack and the `"RS256 public-key as HS256 shared secret"` attack. Explicitly select the algorithm for validation to prevent giving attackers control over the algorithm used (Auth0).

## Educate Developers on JWT Security

Educating developers on JWT security best practices is crucial for ensuring secure implementation. Providing training and resources on secure coding practices, common vulnerabilities, and mitigation strategies can help developers build more secure applications (Snyk).

---

# Common Vulnerabilities and Mitigations in JWT

## None Algorithm Vulnerability

The "none" algorithm vulnerability occurs when a JWT implementation allows a token to be verified with the "none" algorithm, meaning no signature is required. This vulnerability can be exploited by attackers to forge tokens, bypassing the signature verification process entirely.

### Mitigation

To mitigate this vulnerability, ensure your application rejects tokens signed with the "none" algorithm and only accepts tokens signed with secure algorithms explicitly configured. Libraries should be configured to disallow the "none" algorithm by default. For example, the Auth0 library has implemented checks to prevent this attack.

## Signature Stripping Attacks

In signature stripping attacks, an attacker modifies the JWT header to indicate the use of the "none" algorithm, attempting to bypass signature verification. This attack exploits the same vulnerability as the "none" algorithm but focuses on altering the token's header.

### Mitigation

To prevent signature stripping attacks, always validate the algorithm specified in the JWT header against a whitelist of allowed algorithms. Ensure that the server-side implementation does not rely solely on the header's algorithm field for verification. Explicitly specify the algorithm to be used for verification in your code. For instance, Auth0 recommends using a whitelist mechanism for algorithms.

## Algorithm Confusion Attack

Algorithm confusion attacks exploit vulnerabilities in the token’s header by changing the signing algorithm, potentially allowing attackers to bypass the signature verification process using a different key or method than intended. For example, an attacker might change the algorithm from RS256 to HS256, tricking the server into using a public key as an HMAC secret key.

### Mitigation

To mitigate algorithm confusion attacks, always enforce strict algorithm verification on the server side. Do not trust the algorithm specified in the JWT header. Instead, configure your JWT library to use a predefined algorithm for both signing and verification. This approach is recommended by RFC 8725.

## Weak Signatures and Brute Force Attacks

JWTs signed with weak keys or using inadequate algorithms like HS256 can be cracked using tools like Hashcat. This vulnerability is exploited by obtaining a JWT, identifying the signature algorithm, and then using brute force or dictionary attacks to guess the secret key.

### Mitigation

To mitigate this risk, use strong cryptographic algorithms such as RSA with SHA-256 (RS256) or Elliptic Curve Digital Signature Algorithm (ECDSA). Ensure that the secret keys used for signing are sufficiently complex and stored securely. Regularly rotate signing keys to minimize the risk of key compromise. For more details, refer to Nile Bits.

## Embedded JSON Web Keys (JWKs)

Embedding JSON Web Keys (JWKs) within JWTs can streamline the validation process by providing the necessary public keys directly in the token. However, this practice introduces risks, particularly if the embedded keys are not managed securely. If attackers can manipulate or forge these embedded keys, they might influence the token validation process, leading to potential token forgery.

### Mitigation

To mitigate this risk, avoid embedding JWKs within JWTs. Instead, use a trusted key management service to handle key distribution and validation. Ensure that the keys are securely stored and managed, and implement strict validation checks on the keys used for signing and verification. For more information, see Auth0's recommendations.

## Expiration and Not Before Claims Ignored

Some implementations fail to check the `exp` (expiration) and `nbf` (not before) claims of the JWT, allowing attackers to use expired or not yet valid tokens. This oversight can lead to unauthorized access if the tokens are not properly validated.

### Mitigation

Always validate the `exp` and `nbf` claims in the JWT to ensure that the token is within its valid time frame. Implement strict checks on these claims and reject tokens that are expired or not yet valid. This practice is emphasized in RFC 8725.

## Insecure Key Storage

Storing JWT signing keys insecurely can lead to key leakage, allowing attackers to forge valid tokens. This vulnerability is critical as it compromises the entire authentication mechanism.

### Mitigation

To mitigate this risk, store JWT signing keys securely using hardware security modules (HSMs) or secure key management services. Avoid hardcoding keys in your application code or storing them in insecure locations. Regularly audit and rotate keys to ensure their security. For best practices on key management, refer to Curity's guidelines.

## Token Leakage and Replay Attacks

Token leakage occurs when JWTs are exposed to unauthorized parties, potentially leading to replay attacks where an attacker reuses a valid token to gain unauthorized access. This can happen if tokens are stored insecurely or transmitted over insecure channels.

### Mitigation

To prevent token leakage, always use HTTPS to transmit tokens between the client and server

, ensuring encrypted communication channels. Store tokens securely on the client side using HTTP-only cookies to prevent access via JavaScript, mitigating the risk of cross-site scripting (XSS) attacks. Implement token expiration and rotation mechanisms to limit the validity period of tokens and reduce the risk of misuse. For more details, see Snyk's recommendations.

## Improper Error Handling

Improper error handling can lead to information leakage, providing attackers with insights into the system's behavior and potential vulnerabilities. For example, detailed error messages might reveal whether a token is expired, invalid, or tampered with.

### Mitigation

Implement secure error handling mechanisms that provide minimal information to the client while logging detailed error information on the server side for debugging purposes. Use generic error messages for token validation failures and avoid exposing sensitive information. For best practices on error handling, refer to PortSwigger's guidelines.

---

# Conclusion

JSON Web Tokens (JWTs) have revolutionized secure data transmission and authentication processes on the web. Their compact, self-contained nature and robust security features make them an excellent choice for developers looking to implement secure and efficient authentication mechanisms. As technology evolves, staying updated with the latest best practices and security measures is crucial to maintaining the integrity and trustworthiness of JWTs.

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->
