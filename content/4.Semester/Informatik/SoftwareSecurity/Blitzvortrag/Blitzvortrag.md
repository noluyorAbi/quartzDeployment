---
tags:
  - 4semester
  - Seminar
fach: "[[SoftwareSecurity]]"
Thema: 
Benötigte Zeit:
date created: Thursday, 9. May 2024, 15:11
date modified: Thursday, 9. May 2024, 17:50
---

# Aufbau Kurzvortrag

1. **Einleitung zu JWTs (ca. 20 Sekunden)**
   - Kurze Definition von JWTs: Kompakte, sichere Mittel zur Übertragung von Informationen zwischen zwei Parteien als JSON-Objekte.
   - Häufige Nutzung in der Authentifizierung und Autorisierung, insbesondere in Webanwendungen.

2. **Struktur von JWTs (ca. 20 Sekunden)**
   - Beschreibung der drei Teile eines JWT: Header, Payload und Signature.
   - Der Header enthält typischerweise den Token-Typ und den verwendeten Hash-Algorithmus, der Payload umfasst Claims wie die Benutzeridentifikation, und die Signature dient der Sicherung der Integrität des Tokens.

3. **Kryptographische Konzepte (ca. 20 Sekunden)**
   - Die Rolle digitaler Signaturen oder Message Authentication Codes (MACs) in JWTs zur Gewährleistung der Echtheit und Integrität der Daten.
   - Beispielhafte Nennung von Algorithmen wie HS256 oder RS256.

4. **Sicherheitsaspekte (ca. 20 Sekunden)**
   - Wichtige Sicherheitsüberlegungen, wie die Verwendung starker Schlüssel und die Notwendigkeit der Überprüfung der Signatur vor der Akzeptanz eines Tokens.
   - Häufige Sicherheitsrisiken, wie das Ausnutzen von schwachen Signaturen oder die unsichere Speicherung von Schlüsselmaterial.

5. **Abschluss und Best Practices (ca. 10 Sekunden)**
   - Betonung der Bedeutung der Einhaltung von Best Practices, wie in den aktuellen Richtlinien zum Einsatz von JWTs empfohlen.
   - Verweis auf weiterführende Dokumente wie die JWT Best Current Practices.


# 1. Einleitung zu JWTs (ca. 20 Sekunden)

>[!success] What to say
> - kompakte, sichere mittel zur Übertragung von Information zwischen zwei Parteien als JSON-Objekte
> - *Beispiel:* für zwei Parteien: Client und Server

>[!info] Definition
>JSON Web Token (JWT) ist ein **kompaktes**, **URL-sicheres Mittel**, um **Ansprüche zwischen zwei Parteien zu übertragen**. Die in einem JWT enthaltenen Ansprüche sind als JSON-Objekt kodiert und werden in einer JSON Web Signature (JWS) oder JSON Web Encryption (JWE) Struktur genutzt, wodurch sie digital signiert, integritätsgeschützt mit einem MAC und/oder verschlüsselt werden können.

# What to Say

>[!info] Definition
> - kompakte, sichere mittel zur Übertragung von Information zwischen zwei Parteien als JSON-Objekte
> - *Beispiel:* für zwei Parteien: Client und Server

>[!tip] Use-Case
>- Authentifizierung & Informationssicherung in Webanwendungen

