---
tags:
  - 4semester
  - informatik
  - RNVS
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Saturday, 6. July 2024, 17:09
date modified: Sunday, 7. July 2024, 20:58
---

# 1. CSMA/CD (H)

> [!note] Aufgabenstellung
> Zwei Rechner A und B seien über einen Bus miteinander verbunden. Es seien:
>
> - $L$ Leitungsänge zwischen den Hosts, in m
> - $R$ Übertragungsrate, in Bit/s
> - $v$ Ausbreitungsgeschwindigkeit von Signalen im Leiter, in m/s
> - $d_{jam}$ Länge des Störsignals, in (Bit-Zeiten) $d_{jam} [\text{Bit zu übertragen}]$
> - $d_{slot}$ Länge eines Warteintervalls beim Exponential-Backoff Algorithmus, in (Bit-Zeiten)
> - $d_{frei}$ Dauer, die ein Kanal vor dem Senden frei sein muss, in (Bit-Zeiten)
> - $t_0$ Zeitpunkt, zu dem beide Stationen gleichzeitig beginnen zu senden

## (a)

> [!note] Aufgabenstellung
> Die Abbildung zeigt einen zeitlichen Ablauf (nicht maßstabsgetreu) in dem A und B jeweils einen Rahmen übertragen und durch CSMA eine Kollision vermieden wird. Mit CSMA erkennt B nachdem er sendebereit wird, dass bereits eine Übertragung stattfindet und wartet bis die Übertragung des Rahmens von A abgeschlossen ist und der Kanal frei ist, bevor B mit der Übertragung seines Rahmens beginnt.
>
> ```mermaid
> erDiagram
>   SUBNET1 {
>      PC A
>     PC B
> }
> SUBNET2 {
>     PC C
>     PC D
> }
>    SUBNET3 {
>       PC E
>      PC F
> }
> SUBNET1 ||--o| ROUTER1 : "connects to"
> SUBNET2 ||--o| ROUTER1 : "connects to"
> SUBNET2 ||--o| ROUTER2 : "connects to"
> SUBNET3 ||--o| ROUTER2 : "connects to"
> ROUTER1 ||--|| ROUTER2 : "connects to"
>
> ```
>
> Erstellen Sie analog zu dieser Abbildung ein Diagramm, dass die vollständige Übertragung jeweils eines Rahmens von A und B zeigt, wobei A und B gleichzeitig sendebereit werden, es zu einer Kollision kommt und der Konflikt mit CSMA/CD gelöst wird. **Hinweis:** Gehen Sie davon aus, dass es zu keiner weiteren Kollision kommt.

## (b) Geben Sie die Berechnungsvorschrift für den Zeitpunkt $t_1$ an, zu dem A erkennt, dass eine Kollision stattgefunden hat. **Hinweis:** Berechnen Sie $t_1$ relativ zu $t_0$.

## (c) Geben Sie die Berechnungsvorschrift für den Zeitpunkt $t_2$ an, zu dem A wieder einen freien Kanal erkennen kann.

## (d) Zum Zeitpunkt $t_0$ wurde der k-te Übertragungsversuch unternommen. A wartet eine gewisse Zeit nach dem Binary Exponential-Backoff Algorithmus, vor einem erneuten Übertragungsversuch.

### i. Geben Sie die Berechnungsvorschrift für den frühest möglichen Zeitpunkt $t_{3, min}$ an, zu dem A einen erneuten Sendeversuch unternimmt.

### ii. Geben Sie die Berechnungsvorschrift für den spätest möglichen Zeitpunkt $t_{3, max}$ an, zu dem A einen erneuten Sendeversuch unternimmt.

### iii. Die Wartezeit von Rechner B ist um $d_{slot}$ größer, als die von A. Welche Bedingung muss für die Leitungsänge bzw. $d_{slot}$ gelten, damit es nicht zu einer erneuten Kollision zwischen A und B kommt?

---

# 2. Zusammenspiel von IPv4 und ARP (H)

Abbildung 1 skizziert 3 lokale Netze (Subnetz 1 – 3), die über 2 Router miteinander verbunden sind.

## (a) Weisen Sie den Schnittstellen aller Hosts passende IP-Adressen zu. Verwenden Sie für die jeweiligen Subnetze folgende Adressbereiche.

- Subnetz 1: 192.168.1.100/24
- Subnetz 2: 192.168.2.100/24
- Subnetz 3: 192.168.3.100/24

## (b) Weisen Sie jedem Interface eine eindeutige MAC Adresse zu.

## (c) Angenommen Sie senden ein IP-Paket von Host E zu Host B. Nehmen Sie dabei an, dass alle ARP Einträge gültig und bereits bekannt sind. Listen Sie alle Zwischenschritte der Übertragung auf. Nennen Sie bei jedem Schritt die Quell-IP und Ziel-IP sowie Quell-MAC und Ziel-MAC.

## (d) Gegeben sei dasselbe Szenario wie in Teilaufgabe c). Nehmen Sie nun an, dass die ARP Tabelle beim Sender Host E leer ist.

---

# 3. Ethernet - minimale Nachrichtenlänge

> [!note] Aufgabenstellung
> Gegeben sei ein Ethernet (CSMA/CD) mit Übertragungsrate von 10 Mbit/s. Zwei Hosts sind maximal 2,5 km voneinander entfernt. Die Ausbreitungsverzögerung beträgt $2 \times 10^8 \frac{m}{s}$.

## (a) Welche Bedeutung hat die minimale Nachrichtenlänge für die Erkennung von Kollision?

## (b) Wie groß ist die minimale Nachrichtenlänge in der angegebenen Konfiguration?

---

# 4. Effizienz von Aloha

> [!note] Aufgabenstellung
> In den Vorlesungsfolien wurde die die erwartete Wahrscheinlichkeit $E(p)$ von Aloha, dass bei N Sendern nur 1 Knoten sendet wie folgt definiert:
>
> $$
> E(p) = Np(1 - p)^{N-1}
> $$

## (a) Finden Sie $p^*$, sodass der Term maximiert wird.

## (b) Basierend auf dem Ergebnis von Teilaufgabe a). Wie ist die Effizienz bei Aloha, wenn $N \rightarrow \infty$?

> [!help] Hinweis
> $(1 - \frac{1}{N})^N$ nähert sich dem Term $\frac{1}{e}$, wenn $N \rightarrow \infty$.

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
