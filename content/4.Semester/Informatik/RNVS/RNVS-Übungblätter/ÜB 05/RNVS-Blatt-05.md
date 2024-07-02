---
tags:
  - 4semester
  - informatik
  - RNVS
  - Übungsblatt
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Sunday, 26. May 2024, 16:05
date modified: Thursday, 13. June 2024, 16:43
---

# Aufgabe 5-1 Aktuelle Produktivnetze (H)

> [!info] Info
> Aktuelle Produktivnetze, die in Unternehmen für alltägliche Aufgaben genutzt werden, umfassen Technologien wie 5G für schnelle mobile Verbindungen, IoT-Netzwerke für die Gerätevernetzung, Cloud-Netzwerke für den sicheren Zugriff auf Cloud-Ressourcen und softwaredefinierte Netzwerke (SDN), die eine flexible Netzwerkverwaltung ermöglichen. Diese Netzwerke sind essenziell für die moderne digitale Infrastruktur.

> [!tip] Eigenschaften von Ringstrukturen:
>
> - **Topologie**: In einem Ringnetzwerk ist jeder Knoten mit genau zwei anderen Knoten verbunden. Dies bildet einen geschlossenen Kreislauf oder Ring.
> - **Datenübertragung**: Daten werden in einer vorbestimmten Richtung (entweder im Uhrzeigersinn oder gegen den Uhrzeigersinn) durch das Netzwerk gesendet, und jeder Knoten verstärkt das Signal und leitet es weiter, bis das Ziel erreicht ist.

## (a) Nennen Sie einen Vor- und Nachteil von Ringstrukturen in Produktivnetzen.

**Vorteil:**

- _Resistent gegen Umwelteinflüsse:_ Zwischen zwei Knoten gibt es 2 Verbindungen, wenn eine Ausfällt, gibt es eine Weitere zum Informationsaustausch
- Ein Sender kann beide Verbindungen nutzen um Informationen schneller zu versenden

**Nachteil:**

- höhere Kosten (zwei Verbindungen statt nur einer)

## (b) Diskutieren Sie die Verwendung von Kupfer- gegenüber Glasfaserkabeln innerhalb von Gebäuden.

Laut Gastvortrag sind Kupferkabel innerhalb eines Gebäudes vorzuziehen, da diese auch Strom liefern können und den Access Points kein extra Stromkabel gelegt werden muss.

Für Glasfaserkabel spricht jedoch eine höhere Bandbreite und höhere Übertragungsgeschwindigkeiten. Zudem sind sie immun gegen elektromagnetische Störungen aus der Umgebung.

Kupferkabel sind biegsamer um Ecken in Gebäuden, das würde mit Glasfaserkabeln nicht funktionieren

$\Longrightarrow$ Für die meisten Fälle ist das Kupferkabel aufgrund der Stromversorgung und günstigere Umsetzung zu bevorzugen. Es muss jedoch je nach Einsatzgebiet abgewogen werden, was zu bevorzugen ist.

## (c) Diskutieren Sie Vor- und Nachteile von modularen Netztechniksystemen.

> [!info]
>
> ## Was sind modulare Netztechniksysteme?
>
> Modulare Netztechniksysteme beziehen sich im Allgemeinen auf Netzwerklösungen, die aus verschiedenen austauschbaren Komponenten oder Modulen bestehen. Diese Module können je nach den spezifischen Anforderungen und Gegebenheiten des Netzwerks angepasst, hinzugefügt oder entfernt werden. Ein solch modularer Aufbau ermöglicht es, das Netzwerk flexibel zu gestalten und auf Veränderungen oder Erweiterungen der Netzwerkinfrastruktur einfach zu reagieren.
>
> z.B. Switches und Router

**Vorteile:**

- _Flexibilität_: Modulare Systeme sind anpassbar, Komponenten können nach Bedarf hinzugefügt oder entfernt werden.
- _Bessere Wartbarkeit_: Bei Fehlern müssen nur die betroffenen Module auf Fehler analysiert werden, anstatt komplexe Abhängigkeiten. Dies resultiert in einer schnelleren und deswegen auch kostengünstigeren Fehlerbehebung.
- Redundanter

**Nachteile:**

- **Geringere Leistungseffizienz:** Aufgrund von mehr Schnittstellen zwischen den Modulen kann es zu geringerer Leistungseffizienz kommen.
- **Kompatibilitätsprobleme:** Bei eventuell falsch gewählten Modulen oder Modulen mit falschen Versionsabhängigkeiten könnte es zu technischen Problemen und Inkompatibilität kommen.
- Mehr Platzverbrauch
- Fehleranfälliger

# 2. Transportschicht in Pseudocode (H)

> [!note] Aufgabenstellung
> Auf [[RNVS-Blatt-03|Übungsblatt 3]] haben wir die Signatur der Funktion `sendto` behandelt.
> Diese implementiert einen Teil eines Protokolls des Internet-Modells der Schicht N.
> Sie verschickt `bytes` an einen in `addr_tuple` spezifizierten Empfänger.
>
> Die Implementierung sei durch folgenden Pseudocode gegeben.
>
> ```python
> def sendto(bytes, (address, dst_port)):
>     address_bytes = hton(address)
>     destination_port = hton(dst_port)
>     source_port = hton(random())
>     length = hton(len(bytes) + 8)
>     checksum = build_checksum(
>         length, destination_port, source_port
>     )
>
>     PDU = length + destination_port + source_port + checksum + bytes
>     route_packet(address_bytes, PDU)
>
>     return
> ```
>
> Die Funktion `hton` konvertiert hier jeden beliebigen Typ zu einem für die Übertragung geeigneten Byte-Format („big-endian”).
> Gehen Sie wieder von dem folgenden Beispielaufruf aus.
>
> ```python
> msg = bytes([0x48, 0x65, 0x6c, 0x6c, 0x6f])
> recipient = ("192.168.1.135", 6243)
> sendto(msg, recipient)
> ```

## (a) Welche Aussage können Sie über die (N)-PDU treffen?

> [!info]
> PDU = Nutzdaten (Payload) + PCI (Protocol Control Information)

**Die PDU besteht aus:**

- Länge (length)
- Zielport (destination port)
- Quellport (source port)
- Prüfnummer (checksum)
- Nutzdaten (bytes)

## (b) Welche Informationen sind in der (N)-PCI enthalten? Stimmen diese mit der (N)-ICI überein?

> [!info]
> **ICI = Zieladresse**
> Interface Control Information, beinhaltet Daten zur Steuerung der Netzwerkschnittstelle, wie zum Beispiel die IP-Adresse für das Routing und andere netzwerkspezifische Steuerinformationen, die nicht direkt zur Struktur oder Integrität der übermittelten Daten gehören.

**PCI besteht aus:** (alles wie bei PDU bis auf Nutzdaten)

> [!fail] Falsch
>
> - Länge (length)
> - Zielport (destination port)
> - Quellport (source port)
> - Prüfnummer (checksum)

> [!success] Richtig
>
> - source_port
> - length
> - checksum

- [ ] Muss eventuell noch korrigiert werden [[RNVS-Blatt-05]]
      **ICI besteht aus:**
- `address_bytes` aus dem route_packet also die Zieladresse
  $$
  address\_{bytes}\neq destination\_port
  $$
  Die **(N)-PCI** und **(N)-ICI** dienen unterschiedlichen Funktionen und enthalten daher nicht dieselben Informationen. Die PCI konzentriert sich auf die Formatierung und Integrität der Datenübertragung, während die ICI hauptsächlich das Routing und die Netzwerkschnittstellensteuerung behandelt.

$\Longrightarrow$ Die PCI beinhaltet spezifische Übertragungsdaten wie den Destination Port, während die ICI sich auf Netzwerk-Routing mit Elementen wie `adress_bytes` konzentriert

## (c) Was entspricht (N − 1)-ICI, -ID bzw. -IDU?

1. **(N−1)-ICI (Inter-Carrier Interference)**

   - **Definition**: Interferenz zwischen Trägerfrequenzen in Mehrträger-Kommunikationssystemen.
   - **Bedeutung**: Berücksichtigt die Interferenz von allen anderen (N−1) Trägern.

2. **-ID (Identifier)**

   - **Definition**: Eindeutige Kennzeichnung zur Identifikation von Datenpaketen, Geräten oder Verbindungen.

3. **-IDU (Identifier Unit)**
   - **Definition**: Einheit oder Modul zur Erzeugung, Verwaltung oder Überprüfung von Identifikationsdaten.

## (d) Handelt es sich um ein verbindungsorientiertes oder -loses Protokoll?

- **Vorgriff**: Welches Protokoll wird hier skizziert? Mögliche Protokolle lernen Sie in der nächsten Vorlesung am 24.05. kennen.

Die Implementierung der Funktion `sendto` deutet auf ein verbindungsloses Protokoll hin. Es wird keine Verbindung vor dem Senden der Daten hergestellt, und die Funktion sendet die Daten direkt an den angegebenen Empfänger. Dies entspricht dem Verhalten von UDP (User Datagram Protocol), das verbindungslos arbeitet.

<!-- DISQUS SCRIPT COMMENT START -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
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
