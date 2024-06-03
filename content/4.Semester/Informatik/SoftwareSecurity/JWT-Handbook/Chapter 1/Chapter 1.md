---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Monday, 3. June 2024, 22:28
date modified: Monday, 3. June 2024, 22:40
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
