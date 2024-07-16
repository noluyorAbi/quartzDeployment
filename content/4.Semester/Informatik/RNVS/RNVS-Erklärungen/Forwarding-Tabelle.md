---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema: "[[RNVS-Blatt-12]]"
Benötigte Zeit:
date created: Sunday, 14. July 2024, 19:36
date modified: Sunday, 14. July 2024, 19:37
---

# Forwarding-Tabelle

Eine **Forwarding-Tabelle**, auch als **MAC-Adresstabelle** bezeichnet, ist eine essenzielle Datenstruktur in Netzwerkswitches, die verwendet wird, um den Netzwerkverkehr effizient zu leiten. In diesem Dokument werden die Grundlagen, die Funktionsweise und die Bedeutung von Forwarding-Tabellen ausführlich erläutert.

## Grundlagen

### Was ist eine Forwarding-Tabelle?

Eine Forwarding-Tabelle ist eine interne Datenstruktur eines Netzwerkswitches, die MAC-Adressen (Media Access Control) und die zugehörigen Ports speichert. Diese Tabelle ermöglicht es dem Switch, eingehende Datenpakete effizient an den richtigen Ausgangsport weiterzuleiten.

### Warum ist eine Forwarding-Tabelle wichtig?

Forwarding-Tabellen spielen eine entscheidende Rolle bei der Netzwerkkommunikation, da sie:

- **Effiziente Paketweiterleitung**: Verhindern, dass Datenpakete an alle Ports gesendet werden, was zu weniger Netzwerkverkehr und Kollisionen führt.
- **Netzwerkleistung verbessern**: Durch gezielte Weiterleitung wird die Bandbreitenausnutzung optimiert.
- **Sicherheit erhöhen**: Unerwünschter Netzwerkverkehr wird reduziert, da Pakete nur an den vorgesehenen Empfänger weitergeleitet werden.

## Funktionsweise

### Aufbau einer Forwarding-Tabelle

Eine typische Forwarding-Tabelle enthält folgende Informationen:

- **MAC-Adresse**: Die eindeutige Hardware-Adresse eines Netzwerkgeräts.
- **Portnummer**: Der Port des Switches, über den die MAC-Adresse erreichbar ist.
- **Eintragungszeitpunkt**: Der Zeitpunkt, zu dem der Eintrag in die Tabelle aufgenommen wurde.
- **Alterungszeit**: Die Zeitspanne, nach der ein Eintrag gelöscht wird, wenn keine Aktivität festgestellt wird.

### Lernmechanismus

Ein Switch lernt die MAC-Adressen, indem er die Quell-MAC-Adresse jedes empfangenen Pakets liest und speichert. Wenn ein Paket an eine bestimmte MAC-Adresse gesendet wird, prüft der Switch seine Forwarding-Tabelle:

- **Eintrag vorhanden**: Das Paket wird an den entsprechenden Port weitergeleitet.
- **Eintrag nicht vorhanden**: Das Paket wird an alle Ports (außer dem Eingangsport) gesendet (Broadcast).

### Alterungsprozess

Einträge in der Forwarding-Tabelle haben eine begrenzte Lebensdauer, die als **Alterungszeit** bezeichnet wird. Wenn während dieser Zeit kein weiteres Paket von der gespeicherten MAC-Adresse empfangen wird, wird der Eintrag gelöscht, um Speicherplatz für neue Einträge freizugeben und sicherzustellen, dass die Tabelle aktuell bleibt.

## Beispiel

Angenommen, ein Switch hat die folgenden Einträge in seiner Forwarding-Tabelle:

| MAC-Adresse       | Portnummer | Eintragungszeitpunkt | Alterungszeit |
| ----------------- | ---------- | -------------------- | ------------- |
| 00:14:22:01:23:45 | 1          | 10:00:00             | 300 Sekunden  |
| 00:14:22:01:23:46 | 2          | 10:01:00             | 300 Sekunden  |

Wenn der Switch ein Paket mit der Ziel-MAC-Adresse `00:14:22:01:23:45` empfängt, wird das Paket an Port 1 weitergeleitet. Wenn der Switch nach 300 Sekunden keine weiteren Pakete von `00:14:22:01:23:45` empfängt, wird dieser Eintrag gelöscht.

## Test zur Bestimmung der Alterungszeit

### Versuchsaufbau

1. Die drei Rechner R1, R2 und R3 sind mit dem Switch verbunden.
2. Wireshark ist auf allen Rechnern gestartet.
3. Pings werden zwischen R1 und R2 gesendet, und die Zeitpunkte werden notiert.
4. Der Verkehr wird für eine bestimmte Zeit gestoppt, dann werden erneut Pings zwischen R1 und R2 gesendet.

### Aktionen

1. Die Zeitpunkte der letzten und der ersten Pings nach der Pause werden notiert.
2. Der Test wird mit verschiedenen Pausenlängen wiederholt (z.B. 1 Minute, 5 Minuten, 10 Minuten).

### Begründung

Die Zeitspanne, nach der der Switch die Einträge aus der Forwarding-Tabelle löscht, ist die längste Pause, nach der die Pings zwischen R1 und R2 zunächst keine Antwort erhalten und danach wieder erfolgreich sind. Dies zeigt, dass der Switch die MAC-Adressen neu lernen musste.

## Fazit

Forwarding-Tabellen sind ein wesentliches Element für die effiziente und effektive Funktion von Netzwerkswitches. Sie ermöglichen eine gezielte Weiterleitung von Datenpaketen, verbessern die Netzwerkleistung und erhöhen die Sicherheit. Das Verständnis und die Fähigkeit, die Funktionsweise dieser Tabellen zu testen, sind wichtige Fähigkeiten für Netzwerkadministratoren und IT-Profis.

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
