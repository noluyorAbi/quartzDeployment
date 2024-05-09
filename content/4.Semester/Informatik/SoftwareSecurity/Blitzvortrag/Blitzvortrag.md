---
tags:
  - 4semester
  - Seminar
fach: "[[Bachelorseminar-Software Security]]"
Thema: 
Benötigte Zeit: 
date created: Thursday, 9. May 2024, 15:11
date modified: Thursday, 9. May 2024, 19:28
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

Die Callouts wurden nur zur farblichen Trennung der Themen genutzt und haben keine weitere Bedeutung.

>[!success] Definition
> - kompakte, sichere mittel zur Übertragung von Information zwischen zwei Parteien als JSON-Objekte
> - *Beispiel:* für zwei Parteien: Client und Server

>[!danger] JSON
> JSON **(JavaScript Object Notation)** ist ein leichtgewichtiges Datenformat, das menschenlesbare Texte verwendet, um Datenobjekte in Form von Attribut-Wert-Paaren zu strukturieren. Es wird häufig zum Austausch von Daten zwischen Servern und Webanwendungen genutzt.

>[!success] Use-Case JWT
> Authentifizierung & Informationssicherung in Webanwendungen
> <br/>
> - **JWTs und Authentifizierung:** Nach erfolgreicher Anmeldung eines Nutzers mit seinen Anmeldedaten wird ein JSON Web Token (JWT) zurückgegeben. Dieses Token ermöglicht es dem Nutzer, auf geschützte Ressourcen zuzugreifen, indem es typischerweise im Authorization-Header unter Verwendung des HTTP-Authentifizierung-Schemas übermittelt wird.
> <br/>
> -  werden häufig für Single Sign-On verwendet, dank ihrer Effizienz über verschiedene Domänen hinweg.
> 
> Beispiel: Ein Nutzer loggt sich auf einer E-Commerce-Plattform zum Online-Shopping ein und navigiert sicher durch verschiedene Angebote und Bestellseiten, ohne sich erneut anmelden zu müssen, was durch den Einsatz von JWTs ermöglicht wird.
> 
> **Informationsaustausch:**
>- JWTs bieten eine sichere Methode, Informationen zu übertragen, indem sie die Identität des Senders bestätigen und die Unversehrtheit der Daten sicherstellen.
>
> Beispiel: Ein Entwickler sendet Konfigurationsdaten von einem Backend-Server zu einem anderen über eine API. Der JWT stellt dabei sicher, dass die Daten echt sind und seit der Erstellung nicht verändert wurden, was die Integrität der übertragenen Konfiguration gewährleistet.

>[!danger] JWT-Struktur
> - Der **Header** besteht typischerweise aus zwei Teilen: dem Typ des Tokens, der JWT ist, und dem verwendeten Signaturalgorithmus, wie z.B. HMAC SHA256 oder RSA.
> - Dann wird dieses JSON in **Base64Url** kodiert, um den ersten Teil des JWT zu bilden.
> <br/>
> - Der zweite Teil des Tokens ist der **Payload** (Nutzlast), das die *Claims* (Ansprüche) enthält. Claims sind Aussagen über eine Entität (typischerweise den Benutzer) und zusätzliche Daten. Es gibt drei Arten von Ansprüchen: registrierte, öffentliche und private Ansprüche.
> 	- **Registrierte Claims** sind vordefiniert und empfohlen, aber nicht obligatorisch. Sie umfassen Aussteller, Ablaufzeit, Thema, Zielgruppe und andere.
> 	- **Öffentliche Claims** können frei definiert werden, sollten jedoch im IANA JWT-Register oder als kollisionsresistenter URI angegeben werden, um Kollisionen zu vermeiden.
> 	- **Private Claims** sind benutzerdefiniert und dienen dem Austausch von Informationen zwischen vereinbarten Parteien. Sie sind weder registriert noch öffentlich.
> - Dann wird dieses JSON in **Base64Url** kodiert, um den zweiten Teil des JWT zu bilden.
> <br/>
> - Um den **Signaturteil** zu erstellen, musst man den *codierten Header*, den *codierten Payload*, ein **Secret**, den im Header angegebenen Algorithmus nehmen und das unterschreiben.
> - Die Signatur wird verwendet, um zu überprüfen, dass die Nachricht unterwegs nicht verändert wurde, und im Fall von mit einem privaten Schlüssel signierten Token kann sie auch überprüfen, ob der Absender des JWT wirklich der ist, für den er sich ausgibt.
> <br/>
>- Der Output besteht aus drei Base64-URL-Strings, die durch Punkte getrennt sind und leicht in HTML- und HTTP-Umgebungen übergeben werden können. Dabei sind sie im Vergleich zu anderen Standards deutlich kompakter.

---

>[!success]  Sicherheit
>- **Sicherheitsvorkehrungen:** Da Token als Anmeldedaten fungieren, ist größte Sorgfalt geboten, um Sicherheitsprobleme zu vermeiden. Token sollten nicht länger als notwendig aufbewahrt werden und sensible Sitzungsdaten sollten nicht im Browser-Speicher aufgrund mangelnder Sicherheit gespeichert werden.

>[!danger] Effizienz und Anwendungsbereich
>**Zugriff auf geschützte Routen:** Wenn der Nutzer auf eine geschützte Route oder Ressource zugreifen möchte, sollte der JWT im Authorization-Header gesendet werden. Dies ermöglicht eine potenziell zustandslose Autorisierung, bei der der Server prüft, ob ein gültiger JWT vorhanden ist, um Zugriff auf geschützte Ressourcen zu gewähren.
><br/>
>**Verminderung von Datenbankabfragen:** Wenn der JWT die notwendigen Daten enthält, kann die Notwendigkeit, die Datenbank für bestimmte Operationen zu befragen, reduziert werden. Es ist jedoch zu beachten, dass übermäßig große JWTs vermieden werden sollten, da einige Server keine Header über 8 KB akzeptieren.

>[!info] Strukturelle Einsichten und Übertragung
>- **Transparenz und Sicherheit:** Trotz der Signatur, die sicherstellt, dass der Inhalt des Tokens nicht verändert wurde, sind alle im Token enthaltenen Informationen für den Nutzer oder andere Parteien sichtbar. Daher sollten keine geheimen Informationen innerhalb des Tokens gespeichert werden.
>- **Cross-Origin Resource Sharing (CORS):** Bei der Übermittlung in HTTP-Headern über das Authorization-Header verursacht CORS kein Problem, da keine Cookies verwendet werden. Dies unterscheidet sich von anderen Authentifizierungsmethoden, die möglicherweise anfällig für Cross-Site-Tracking oder andere Sicherheitsrisiken sind.