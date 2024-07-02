---
tags:
  - 4semester
  - Seminar
  - informatik
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 26. June 2024, 19:12
date modified: Wednesday, 26. June 2024, 23:49
---

# Signatur vs. Verschlüsselung: Unterschiedliche Ziele und Anwendungen

## 1. Signatur: Authentizität und Integrität

### Ziel: Sicherstellen, dass die Nachricht vom Absender stammt (Authentizität) und nicht verändert wurde (Integrität).

- **Prozess**:

  - Der Absender erstellt einen Hash der Nachricht.
  - Der Absender verschlüsselt diesen Hash mit seinem privaten Schlüssel, wodurch eine digitale Signatur entsteht.
  - Die Nachricht und die Signatur werden an den Empfänger gesendet.

- **Verifizierung**:

  - Der Empfänger entschlüsselt die Signatur mit dem öffentlichen Schlüssel des Absenders, um den ursprünglichen Hash zu erhalten.
  - Der Empfänger berechnet den Hash der empfangenen Nachricht und vergleicht ihn mit dem entschlüsselten Hash.
  - Wenn beide Hash-Werte übereinstimmen, ist die Nachricht authentisch und unverändert.

- **Warum nicht verschlüsselt**:
  - Die Nachricht selbst bleibt im Klartext, weil der Hauptzweck der Signatur darin besteht, Authentizität und Integrität sicherzustellen, nicht Vertraulichkeit. Dies ist besonders nützlich, wenn die Nachricht für jeden sichtbar sein soll, aber ihre Herkunft und Unverändertheit sichergestellt werden müssen, z.B. bei Software-Updates, Dokumentensignaturen usw.

## 2. Verschlüsselung: Vertraulichkeit

### Ziel: Sicherstellen, dass nur der vorgesehene Empfänger die Nachricht lesen kann (Vertraulichkeit).

- **Prozess**:

  - Der Absender verschlüsselt die Nachricht mit dem öffentlichen Schlüssel des Empfängers.
  - Nur der Empfänger kann die Nachricht mit seinem privaten Schlüssel entschlüsseln.

- **Warum nicht nur Verschlüsselung verwenden**:
  - Die Verschlüsselung stellt sicher, dass nur der Empfänger die Nachricht lesen kann, sagt aber nichts darüber aus, ob die Nachricht authentisch ist oder ob sie verändert wurde. Ohne eine Signatur könnte die Nachricht von jemand anderem stammen oder manipuliert worden sein.

# Kombination von Signatur und Verschlüsselung

In vielen Szenarien ist es sinnvoll, sowohl Signatur als auch Verschlüsselung zu verwenden, um Authentizität, Integrität und Vertraulichkeit sicherzustellen.

## Kombinierter Ansatz

1. **Signieren**:

   - Der Absender erstellt einen Hash der Nachricht.
   - Der Absender verschlüsselt diesen Hash mit seinem privaten Schlüssel, um eine digitale Signatur zu erstellen.

2. **Verschlüsseln**:

   - Der Absender verschlüsselt die Nachricht und die Signatur mit dem öffentlichen Schlüssel des Empfängers.

3. **Senden**:

   - Der Absender sendet die verschlüsselte Nachricht und die Signatur an den Empfänger.

4. **Entschlüsseln und Verifizieren**:
   - Der Empfänger entschlüsselt die Nachricht mit seinem privaten Schlüssel.
   - Der Empfänger entschlüsselt die Signatur mit dem öffentlichen Schlüssel des Absenders, um den ursprünglichen Hash zu erhalten.
   - Der Empfänger berechnet den Hash der empfangenen Nachricht und vergleicht ihn mit dem entschlüsselten Hash, um Authentizität und Integrität zu überprüfen.

# Warum nicht einfach nur Verschlüsseln?

- **Verschlüsselung alleine**: Schützt die Vertraulichkeit der Nachricht, sagt aber nichts über die Authentizität und Integrität aus.
- **Signatur alleine**: Stellt die Authentizität und Integrität sicher, aber nicht die Vertraulichkeit.

Durch die Kombination beider Methoden wird sichergestellt, dass die Nachricht vertraulich, authentisch und unverändert ist.

## Zusammenfassung

- **Private Key für Signatur**: Stellt sicher, dass die Nachricht vom Absender stammt und nicht verändert wurde (Authentizität und Integrität).
- **Public Key für Verschlüsselung**: Stellt sicher, dass nur der vorgesehene Empfänger die Nachricht lesen kann (Vertraulichkeit).

In vielen Anwendungen werden beide Methoden kombiniert, um sicherzustellen, dass die Nachricht vertraulich, authentisch und unverändert ist. Dies erklärt, warum Signatur und Verschlüsselung unterschiedliche, aber komplementäre Rollen in der sicheren Kommunikation spielen.

---

> [!question]
> Bei der Verschlüsselung mit dem Public Key haben wir keine Authentizität, dass die Nachricht wirklich von dem Absender kommt. Warum ist es uns in dem Fall egal, wenn Daten mit dem Public Key verschlüsselt wurden, dass sie wirklich von dem Absender kommen?

Das ist eine sehr gute Frage, die auf eine wichtige Unterscheidung zwischen den Zielen von Verschlüsselung und Signatur hinweist.

# Verschlüsselung mit dem öffentlichen Schlüssel

## Ziel: Vertraulichkeit sicherstellen.

- **Prozess**:
  - Der Absender verschlüsselt die Nachricht mit dem öffentlichen Schlüssel des Empfängers.
  - Nur der Empfänger kann die Nachricht mit seinem privaten Schlüssel entschlüsseln.

```plaintext
Verschlüsselte Nachricht = Verschlüsselung(Nachricht, Öffentlicher Schlüssel des Empfängers)
```

# Warum reicht das nicht aus, um Authentizität zu garantieren?

Die Verschlüsselung mit dem öffentlichen Schlüssel des Empfängers stellt sicher, dass nur der vorgesehene Empfänger die Nachricht lesen kann. Aber diese Methode stellt nicht sicher, dass die Nachricht tatsächlich vom behaupteten Absender stammt. Es könnte jemand anderes die Nachricht verschlüsselt haben, der Zugang zum öffentlichen Schlüssel des Empfängers hat.

# Beispiele für Szenarien

- **Verschlüsselung allein**: Stellen Sie sich vor, Alice möchte Bob eine vertrauliche Nachricht schicken. Alice verschlüsselt die Nachricht mit Bobs öffentlichem Schlüssel. Nur Bob kann die Nachricht entschlüsseln, aber Bob hat keine Möglichkeit zu überprüfen, ob die Nachricht wirklich von Alice stammt, weil jeder, der Bobs öffentlichen Schlüssel hat, die Nachricht hätte verschlüsseln können.

# Warum ist das manchmal akzeptabel?

In einigen Szenarien reicht es aus, die Vertraulichkeit der Nachricht sicherzustellen, besonders wenn die Authentizität durch andere Mittel überprüft wird oder nicht kritisch ist. Hier sind einige Beispiele:

1. **Allgemeine Kommunikation**: In Fällen, in denen die Vertraulichkeit der Nachricht wichtiger ist als die Authentizität des Absenders. Beispielsweise kann der Inhalt der Nachricht selbst genug Kontext bieten, um die Authentizität abzuleiten.

2. **Mehrstufige Kommunikation**: In Systemen, in denen die Authentizität durch andere Mechanismen sichergestellt wird, z.B. durch zusätzliche Signaturen, Authentifizierungsmethoden oder vorherige Vereinbarungen zwischen den Kommunikationsparteien.

# Kombinierte Nutzung von Signatur und Verschlüsselung

In vielen sicherheitskritischen Anwendungen wird sowohl die Signatur als auch die Verschlüsselung kombiniert, um die Vorteile beider Methoden zu nutzen:

1. **Signieren**:

   - Der Absender erstellt einen Hash der Nachricht.
   - Der Absender verschlüsselt diesen Hash mit seinem privaten Schlüssel, wodurch eine digitale Signatur entsteht.
   - Die Signatur stellt sicher, dass die Nachricht vom Absender stammt und nicht verändert wurde.

2. **Verschlüsseln**:

   - Der Absender verschlüsselt die Nachricht und die Signatur mit dem öffentlichen Schlüssel des Empfängers.
   - Dies stellt sicher, dass nur der vorgesehene Empfänger die Nachricht lesen kann.

3. **Entschlüsseln und Verifizieren**:
   - Der Empfänger entschlüsselt die Nachricht mit seinem privaten Schlüssel.
   - Der Empfänger entschlüsselt die Signatur mit dem öffentlichen Schlüssel des Absenders, um den ursprünglichen Hash zu erhalten.
   - Der Empfänger berechnet den Hash der empfangenen Nachricht und vergleicht ihn mit dem entschlüsselten Hash, um Authentizität und Integrität zu überprüfen.

# Zusammenfassung

- **Verschlüsselung mit dem öffentlichen Schlüssel** stellt die Vertraulichkeit sicher, aber nicht die Authentizität.
- **Digitale Signatur** stellt die Authentizität und Integrität sicher, aber nicht die Vertraulichkeit.
- Durch die **Kombination beider Methoden** können sowohl die Vertraulichkeit als auch die Authentizität und Integrität der Nachricht gewährleistet werden.

Indem Sie beide Methoden kombinieren, stellen Sie sicher, dass nur der vorgesehene Empfänger die Nachricht lesen kann und dass die Nachricht tatsächlich vom behaupteten Absender stammt und nicht manipuliert wurde.

---

# Unterschiede zwischen One-to-Many und Many-to-One

| Kategorie                                  | One-to-Many                                                                                                                                                      | Many-to-One                                                                                                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Hauptzweck**                             | Signatur (Authentizität und Integrität)                                                                                                                          | Verschlüsselung (Vertraulichkeit)                                                                                                                                        |
| **Verwendung des privaten Schlüssels**     | Zum Signieren von Nachrichten                                                                                                                                    | Zum Entschlüsseln von Nachrichten                                                                                                                                        |
| **Verwendung des öffentlichen Schlüssels** | Zum Verifizieren von Signaturen                                                                                                                                  | Zum Verschlüsseln von Nachrichten                                                                                                                                        |
| **Funktionalität**                         | - Der Absender signiert die Nachricht mit seinem privaten Schlüssel.<br> - Die Empfänger verifizieren die Signatur mit dem öffentlichen Schlüssel des Absenders. | - Der Absender verschlüsselt die Nachricht mit dem öffentlichen Schlüssel des Empfängers.<br> - Der Empfänger entschlüsselt die Nachricht mit seinem privaten Schlüssel. |
| **Anwendungsfall**                         | Authentifizierung und Integritätsprüfung                                                                                                                         | Sicherstellen der Vertraulichkeit der Kommunikation                                                                                                                      |
| **Beispiel**                               | - Software-Updates<br> - Digitale Signaturen                                                                                                                     | - Vertrauliche E-Mail<br> - Sichere Datenübertragung                                                                                                                     |
| **Hauptziel**                              | Sicherstellen, dass die Nachricht vom behaupteten Absender stammt und nicht verändert wurde.                                                                     | Sicherstellen, dass nur der vorgesehene Empfänger die Nachricht lesen kann.                                                                                              |
| **Daten im Klartext**                      | Ja, die signierte Nachricht bleibt im Klartext.                                                                                                                  | Nein, die verschlüsselte Nachricht ist nur für den Empfänger lesbar.                                                                                                     |
| **Sicherheitsaspekt**                      | Authentizität und Integrität der Nachricht                                                                                                                       | Vertraulichkeit der Nachricht                                                                                                                                            |

## Zusammenfassung

- **One-to-Many (Signatur)**:

  - **Privater Schlüssel**: Wird vom Absender verwendet, um die Nachricht zu signieren.
  - **Öffentlicher Schlüssel**: Wird von den Empfängern verwendet, um die Signatur zu verifizieren.
  - **Ziel**: Sicherstellen, dass die Nachricht authentisch und unverändert ist.

- **Many-to-One (Verschlüsselung)**:
  - **Öffentlicher Schlüssel**: Wird vom Absender verwendet, um die Nachricht zu verschlüsseln.
  - **Privater Schlüssel**: Wird vom Empfänger verwendet, um die Nachricht zu entschlüsseln.
  - **Ziel**: Sicherstellen, dass nur der vorgesehene Empfänger die Nachricht lesen kann.

---

# Anwendungen von JSON Web Tokens (JWTs) mit asymmetrischen Schlüsseln

## Many-to-One (Verschlüsselung)

### Beispiel: Sicherer Nachrichtenaustausch in einer verschlüsselten Kommunikationsplattform

- **Beschreibung**:

  - Eine verschlüsselte Kommunikationsplattform ermöglicht es Benutzern, sicher Nachrichten miteinander auszutauschen. Jeder Benutzer hat ein Schlüsselpaar (öffentlicher und privater Schlüssel).
  - Wenn ein Benutzer (Sender) eine Nachricht an einen anderen Benutzer (Empfänger) senden möchte, wird die Nachricht mit dem öffentlichen Schlüssel des Empfängers verschlüsselt und als JWT übertragen.

- **Ablauf**:

  1. Der Sender erstellt eine Nachricht und verschlüsselt sie mit dem öffentlichen Schlüssel des Empfängers.
  2. Der verschlüsselte Inhalt wird in einem JWT verpackt und an den Empfänger gesendet.
  3. Der Empfänger verwendet seinen privaten Schlüssel, um das JWT zu entschlüsseln und die ursprüngliche Nachricht zu erhalten.

- **Vorteil**:
  - Nur der Empfänger, der im Besitz des privaten Schlüssels ist, kann die Nachricht entschlüsseln und lesen. Dies gewährleistet die Vertraulichkeit der Kommunikation.

## One-to-Many (Signatur)

### Beispiel: Authentifizierung in einer verteilten Microservices-Architektur

- **Beschreibung**:

  - Ein zentraler Authentifizierungsserver (Identitätsprovider) signiert ein JWT mit seinem privaten Schlüssel, nachdem ein Benutzer erfolgreich authentifiziert wurde.
  - Die signierten JWTs enthalten Informationen über den Benutzer (z.B. Benutzer-ID, Rollen, Berechtigungen).
  - Diese JWTs werden an verschiedene Microservices gesendet, die die Authentifizierungs- und Autorisierungsinformationen benötigen.

- **Ablauf**:

  1. Der Benutzer meldet sich beim Authentifizierungsserver an.
  2. Der Authentifizierungsserver erstellt ein JWT und signiert es mit seinem privaten Schlüssel.
  3. Der Benutzer erhält das signierte JWT und sendet es bei jeder Anfrage an die verschiedenen Microservices.
  4. Jeder Microservice verwendet den öffentlichen Schlüssel des Authentifizierungsservers, um die Signatur des JWTs zu verifizieren und sicherzustellen, dass das Token authentisch und unverändert ist.

- **Vorteil**:
  - Die Microservices müssen nur den öffentlichen Schlüssel des Authentifizierungsservers kennen, um die Authentizität der Tokens zu überprüfen. Dies reduziert die Notwendigkeit, geheime Schlüssel in mehreren Diensten zu speichern.

### Zusammenfassung der Beispiele

| Anwendung                                  | Szenario                      | Beschreibung                                                                                         |
| ------------------------------------------ | ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Verschlüsselte Kommunikationsplattform** | Many-to-One (Verschlüsselung) | Nachrichten werden mit dem öffentlichen Schlüssel des Empfängers verschlüsselt und als JWT gesendet. |
| **Microservices-Architektur**              | One-to-Many (Signatur)        | Authentifizierungsserver signiert JWTs, die von verschiedenen Microservices überprüft werden.        |

Diese Beispiele zeigen, wie asymmetrische Schlüsselpaare in JWTs verwendet werden können, um sowohl die Vertraulichkeit (Many-to-One) als auch die Authentizität und Integrität (One-to-Many) der Kommunikation zu gewährleisten.

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    console.log(randomNumber)
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
