---
tags:
  - 4semester
  - Seminar
fach: "[[Bachelorseminar-Software Security]]"
Thema:
Benötigte Zeit:
date created: Monday, 3. June 2024, 21:48
date modified: Monday, 10. June 2024, 20:24
---

Ein 30-minütiger Vortrag über JSON-Web-Tokens (JWT) im Kontext der Software Security sollte gut strukturiert und informativ sein, um sowohl die theoretischen Grundlagen als auch praktische Anwendungsfälle abzudecken. Hier ist ein detaillierter Vorschlag für den Aufbau deines Vortrags:

# 1. Einführung (5 Minuten)

- **Begrüßung und Vorstellung:** Kurz vorstellen und das Thema des Vortrags nennen.
- **Ziele des Vortrags:** Kurze Übersicht über die Hauptpunkte, die du behandeln wirst.
- **Relevanz von JWT:** Erklären, warum JWT im Bereich der Software Security wichtig ist.

# 2. Grundlagen von JWT (5 Minuten)

- **Definition und Aufbau:** Was sind JSON-Web-Tokens? Erklären, dass es ein kompaktes, URL-sicheres Format ist, das JSON-Objekte darstellt.
- **Struktur eines JWT:** Header, Payload, Signature – detaillierte Erklärung jedes Teils.
  - **Header:** Typ des Tokens und Signaturalgorithmus.
  - **Payload:** Enthält die Claims – Daten, die über den Nutzer und andere Informationen Auskunft geben.
  - **Signature:** Sicherheitsmechanismus zur Überprüfung der Integrität.

# 3. Funktionsweise und Ablauf (5 Minuten)

- **Erstellung eines JWT:** Wie wird ein JWT generiert? Erklärung anhand eines Beispiels.
- **Verifizierung eines JWT:** Wie wird die Gültigkeit eines JWT überprüft?
- **Übertragung und Verwendung:** Wie wird ein JWT zwischen Client und Server ausgetauscht?

# 4. Sicherheit und Herausforderungen (10 Minuten)

- **Sicherheitsvorteile von JWT:**
  - Vermeidung von Session-Management auf dem Server.
  - Verteilung und Skalierbarkeit durch stateless Authentication.
- **Sicherheitsrisiken und Gegenmaßnahmen:**
  - **Token Hijacking:** Möglichkeiten, wie Token abgefangen und verwendet werden können.
  - **Token Manipulation:** Risiken und wie sie durch Signaturen verhindert werden.
  - **Token Expiration:** Bedeutung und Implementierung der Token-Ablaufzeit.
- **Best Practices:**
  - Verwendung starker Signaturalgorithmen (z.B. RS256).
  - Sicherer Umgang mit geheimen Schlüsseln.
  - Einsatz von HTTPS, um die Übertragung der Tokens zu schützen.
  - Regelmäßige Erneuerung und Rotation von Tokens.

# 5. Praktische Anwendungsfälle (5 Minuten)

- **Beispiele für den Einsatz von JWT:**
  - **Authentication und Authorization:** Wie JWTs für User-Authentifizierung und -Autorisierung genutzt werden.
  - **Single Sign-On (SSO):** Verwendung von JWTs in SSO-Szenarien.
  - **Microservices:** Einsatz in verteilten Systemen und Microservice-Architekturen.
- **Kurzes Demo oder Codebeispiel:** Zeige ein einfaches Codebeispiel zur Erstellung und Verifizierung eines JWT.

# 6. Fazit und Fragen (5 Minuten)

- **Zusammenfassung:** Kernaussagen und wichtige Punkte des Vortrags zusammenfassen.
- **Zukunftsausblick:** Mögliche Entwicklungen und zukünftige Anwendungen von JWT.
- **Fragerunde:** Möglichkeit für das Publikum, Fragen zu stellen.

# Zusätzliche Tipps:

- **Visuelle Hilfsmittel:** Nutze Folien mit klaren Diagrammen und Codebeispielen, um die Erklärungen zu unterstützen.
- **Interaktivität:** Stelle Fragen an das Publikum oder integriere kleine Umfragen, um das Interesse aufrechtzuerhalten.
- **Zeitmanagement:** Achte darauf, die Zeit im Auge zu behalten, um alle Punkte innerhalb der 30 Minuten abzudecken.

Diese Struktur sollte dir helfen, einen umfassenden und gut organisierten Vortrag zu halten, der sowohl theoretische als auch praktische Aspekte von JSON-Web-Tokens abdeckt.

---

# 1. JWT-basierte Authentifizierung in einer Webanwendung

## Beschreibung:

Entwickle eine einfache Webanwendung, die JWTs für die Authentifizierung und Autorisierung von Benutzern verwendet. Die Anwendung sollte folgende Funktionen enthalten:

- **Benutzerregistrierung und -anmeldung:** Ein Benutzer kann sich registrieren und anmelden. Bei der Anmeldung wird ein JWT generiert und an den Benutzer zurückgegeben.
- **Geschützte Endpunkte:** Bestimmte Endpunkte der API sind nur für authentifizierte Benutzer zugänglich. Der Zugriff auf diese Endpunkte erfordert einen gültigen JWT.
- **Token-Überprüfung:** Der Server überprüft die Gültigkeit der Tokens, bevor er geschützte Ressourcen bereitstellt.

## Technologie-Stack:

- **Frontend:** HTML, CSS, JavaScript (z.B. mit einem Framework wie React oder Vue.js)
- **Backend:** Node.js mit Express.js oder eine ähnliche Backend-Technologie
- **Datenbank:** Eine einfache Datenbank wie SQLite oder MongoDB für die Benutzerverwaltung

## Umsetzungsschritte:

1. **Setup der Webanwendung:** Erstelle ein Grundgerüst für die Webanwendung.
2. **Benutzerregistrierung:** Implementiere eine Registrierungsseite und speichere Benutzerdaten in der Datenbank.
3. **JWT-Generierung:** Implementiere die JWT-Generierung bei der Benutzeranmeldung.
4. **Geschützte Endpunkte:** Implementiere geschützte API-Endpunkte und die Überprüfung der JWTs.
5. **Frontend-Integration:** Integriere das Frontend mit dem Backend und zeige, wie Tokens im Browser gespeichert und verwendet werden.

# 2. Interaktive Demo-Applikation zur Veranschaulichung von JWT

## Beschreibung:

Erstelle eine interaktive Webanwendung, die den gesamten Lebenszyklus eines JWT visualisiert. Diese Anwendung sollte verschiedene Szenarien simulieren, z.B. Token-Erstellung, Verifizierung, Ablauf, und Angriffe wie Token Hijacking oder Manipulation.

## Technologie-Stack:

- **Frontend:** HTML, CSS, JavaScript (z.B. mit einem Framework wie React oder Vue.js)
- **Backend:** Node.js mit Express.js oder Python mit Flask

## Umsetzungsschritte:

1. **JWT-Dashboard:** Erstelle ein Dashboard, das die JWT-Struktur (Header, Payload, Signature) und deren Inhalte visualisiert.
2. **Token-Erstellung:** Implementiere eine Funktion zur Erstellung von JWTs mit verschiedenen Claims.
3. **Verifizierung:** Implementiere eine Funktion zur Verifizierung der Tokens und zeige, was passiert, wenn ein Token gültig oder ungültig ist.
4. **Ablauf-Simulation:** Implementiere eine Simulation des Token-Ablaufs und zeige die Auswirkungen abgelaufener Tokens.
5. **Sicherheits-Szenarien:** Zeige, wie Token Hijacking und Manipulation durchgeführt werden können und wie man sich dagegen schützt.

# Beispiel: JWT-basierte Authentifizierung in einer Webanwendung

## Frontend (React):

```javascript
import React, { useState } from "react"

function App() {
  const [token, setToken] = useState(null)

  const login = async (username, password) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    const data = await response.json()
    setToken(data.token)
  }

  const accessProtectedResource = async () => {
    const response = await fetch("/api/protected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <button onClick={() => login("user", "pass")}>Login</button>
      <button onClick={accessProtectedResource}>Access Protected Resource</button>
    </div>
  )
}

export default App
```

## Backend (Node.js/Express):

```javascript
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

const app = express()
const secret = "your_jwt_secret"

app.use(bodyParser.json())

app.post("/api/login", (req, res) => {
  const { username, password } = req.body
  // Simulate user authentication
  if (username === "user" && password === "pass") {
    const token = jwt.sign({ username }, secret, { expiresIn: "1h" })
    res.json({ token })
  } else {
    res.status(401).json({ message: "Invalid credentials" })
  }
})

app.get("/api/protected", (req, res) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(" ")[1]
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }
      res.json({ message: "Protected resource accessed", user })
    })
  } else {
    res.sendStatus(401)
  }
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
```

# Präsentation und Demo

1. **Einführung:** Erläutere kurz, was JWT ist und warum es wichtig ist.
2. **Live-Demo:** Führe die Anwendung vor und zeige, wie Benutzer sich registrieren, anmelden und auf geschützte Ressourcen zugreifen können.
3. **Code-Erklärung:** Gehe auf wichtige Teile des Codes ein, insbesondere auf die JWT-Erstellung und -Verifizierung.
4. **Fragerunde:** Beantworte Fragen und diskutiere die Sicherheitsaspekte und Best Practices.

Durch die Kombination von theoretischer Erklärung und praktischer Demo wird dein Vortrag sowohl informativ als auch anschaulich und praxisnah sein.

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
