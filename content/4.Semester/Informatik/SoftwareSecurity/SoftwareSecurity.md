---
tags:
  - 4semester
  - informatik
  - Seminar
fach: "[[SoftwareSecurity]]"
Thema: 
Benötigte Zeit:
date created: Thursday, 9. May 2024, 14:07
date modified: Thursday, 9. May 2024, 15:11
---

# Organisatorisches 
- Thema : "Representation of Claims" 
	- Blitzvortrag am 10.05.2024, inhaltliche Kurzvorstellung des Themas in 90 Sekunden mit einer Folie
	- Erstellung Ausarbeitung (Abgabe: Zwei Wochen vor Seminarvorträgen) 
		- Ausführliche Erklärung des Themas, verständlich für andere Teilnehmer 
		- 7000-14000 Zeichen
- Anonyme Begutachtung der Ausarbeitungen zweier anderer Teilnehmer (Abgabe: Eine Woche vor Vorträgen)
- Seminarvorträge (zwei Termine, gegen Ende des Semesters)
- Endabgabe Ausarbeitung (Zwei Wochen nach Vorträgen)
# Anforderungen

- **Blitzvortrag 90 Sekunden:** Inhaltsübersicht, eine Folie
- **Ausarbeitung zum Thema (7.000-14.000 Zeichen)**
- **Begutachtung der Ausarbeitungen zweier anderer Teilnehmer**
- **Vortrag: 30 Minuten (plus Diskussion)**

## Anforderungen zum Thema

## 10. Representation of Claims

Explain JSON Web Tokens in detail, including the cryptographic concepts like message authentication codes and describe security aspects.

- **JWT specification:** [https://tools.ietf.org/html/rfc7519](https://tools.ietf.org/html/rfc7519)
- **Detering et al. On The (In-)Security Of JavaScript Object Signing And Encryption. 2017**
- **JSON Web Token Best Current Practices:** [https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07](https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07)


>[!info] Kurzfassung
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
>   
> - **Integrität**: Durch die Verwendung einer Signatur kann die Integrität des Tokens sichergestellt werden. Jede Änderung an einem Teil des Tokens würde die Signatur ungültig machen und somit Manipulationen erkennen lassen.
> 
> - **Verfügbarkeit**: JWT sollten gegen verschiedene Angriffe wie Token-Entführung und Fälschung geschützt werden. Best Practices und Sicherheitsrichtlinien sollten daher beachtet werden.
> 
> ## Quellen
> 
> - [JWT-Spezifikation (RFC 7519)](https://tools.ietf.org/html/rfc7519)
> - Detering et al. "On The (In-)Security Of JavaScript Object Signing And Encryption." 2017.
> - [JSON Web Token Best Current Practices](https://tools.ietf.org/html/draft-ietf-oauth-jwt-bcp-07)