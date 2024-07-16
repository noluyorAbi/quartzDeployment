---
tags:
  - 4semester
  - informatik
  - RNVS
  - Übungsblatt
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Saturday, 22. June 2024, 14:18
date modified: Saturday, 6. July 2024, 17:10
---

# 1. Adressierung in Rechnernetzen (H)

## (a) Klassenbasierte Adressierung und Classless Inter-Domain Routing (CIDR)

- **Worin unterscheidet sich Classless Inter-Domain Routing (CIDR) von klassenbasierter Adressierung?**
  - _klassenbasierte Adressierung:_ Je nach Klasse fixe Anzahl von Netzen und Hosts, kann zu Verschwendung kommen wenn mehr Host Adressen reserviert werden als nötig
  - _CIDR:_ Grundidee: Grenze zwischen Netz-Teil und Host-Teil verläuft fließend, muss nicht unbedingt in $2$er Potenz sein, weniger Verschwendung von Adressen
- **Erklären Sie kurz die Vorteile von CIDR gegenüber klassenbasierter Adressierung.**
  - Effizientere Nutzung von Adressen mit weniger Verschwendung

## (b) Eine Organisation bekommt den Adressblock 131.42.0.0/16 zugewiesen und benötigt:

> [!note] Aufgabenstellung
>
> - 1 Subnetz mit bis zu 32000 Hosts
> - 15 Subnetze mit bis zu 2000 Hosts
> - 8 Subnetze mit bis zu 250 Hosts
>
> Machen Sie Vorschläge für eine Aufteilung in geeignete Subnetze. Erstellen Sie eine Tabelle aller Subnetze mit folgendem Inhalt:

1. Subnetzadresse in CIDR-Notation
2. Subnetzmaske
3. Für Hosts verwendbare Adressbereiche für jedes Subnetz
4. Broadcastadressen für jedes Subnetz.

# 2. Private IP-Adressen nach RFC1918 (H)

> [!note] Aufgabenstellung
> In RFC 1918 wurden eine Reihe private IP-Adressen definiert:
>
> - 10.0.0.0 – 10.255.255.255
> - 172.16.0.0 – 172.31.255.255
> - 192.168.0.0 – 192.168.255.255
>
> Pakete mit Adressen aus diesen Bereichen werden im Internet nicht weitergeleitet.

## (a) Wie lassen sich die drei Netzbereiche in Präfix-Notation darstellen?

> [!tip] Anleitung zum Lösen
>
> 1.  Netzaddresse in Binär
> 2.  Broadcast-Adresse in Binär
> 3.  schauen wieviel der ersten $n$-Bits gleich sind
> 4.  in Präfixnotation aufschreiben

### 10.0.0.0 – 10.255.255.255

#### Netzadresse und Broadcast-Adresse

- **Netzadresse: 10.0.0.0**
  - in Binär:
    $$
      00001010.00000000.00000000.00000000
    $$
- **Broadcast-Adresse: 10.255.255.255**
  - in Binär:
    $$
      00001010.11111111.11111111.11111111
    $$

#### Subnetzmaske

- Die ersten 8 Bits sind gleich:
  $$
    \rightarrow \text{Subnetzmaske} = 11111111.00000000.00000000.00000000
  $$
  - in Dezimal:
    $$
    255.0.0.0
    $$

#### Präfix-Notation

- In Präfix-Notation kann man schreiben:
  $$
    10.0.0.0/8
  $$

### 172.16.0.0 – 172.31.255.255

**Netzadresse: 172.16.0.0**

$$
  10101100.00010000.00000000.00000000
$$

**Broadcastadresse: 172.31.255.255**

$$
  10101100.00011111.11111111.11111111
$$

**Subnetzmaske: 12 Bits gleich**

$$
  11111111.11110000.00000000.00000000
$$

**Präfix-Notation**

- In Präfix-Notation kann man schreiben:
  $$
    172.16.0.0/12
  $$

### 192.168.0.0 – 192.168.255.255

**Netzadresse: 192.168.0.0**

$$
  11000000.10101000.00000000.00000000
$$

**Broadcastadresse: 192.168.255.255**

$$
  11000000.10101000.11111111.11111111
$$

**Subnetzmaske: 16 Bits gleich**

$$
  11111111.11111111.00000000.00000000
$$

**Präfix-Notation**

- In Präfix-Notation kann man schreiben:
  $$
    192.168.0.0/16
  $$

## (b) Zeigen Sie, dass das Netz 172.16.0.0/x (wobei x im ersten Teil ermittelt wurde) 16 Netze mit je 216 Host-Adressen enthalten kann.

> [!info] **Hinweis:**
> Zur besseren Handhabung bietet es sich an, die IP-Adressen und (Sub-)Netzmasken in die Binärdarstellung zu übertragen.

aus a)

**Netzadresse: 172.16.0.0**

$$
  10101100.00010000.00000000.00000000
$$

**Broadcastaddresse: 172.31.255.255**

$$
  10101100.00011111.11111111.11111111
$$

**Subnetzmaske: 12 Bits gleich**

$$
  11111111.11110000.00000000.00000000
$$

$\Longrightarrow$ Subnetzmaske enthält 12 Bits für das Netzwerk

$$
\begin{aligned}
\text{(Anzahl der Bits für die Hosts)} &= \text{(Gesamtlänge) - (Bits für Netzadresse)} \\
&=32 -12\\
&=20
\end{aligned}
$$

$\Longrightarrow$ Von diesen $20$ Bits werden nun $4$ benötigt um in der Aufgabenstellung erwähnten 16 Subnetze zu erstellen

$$
2^{4}=16 \ Subnetze
$$

Verbleibende 16 Bits für Hosts

$$
2^{16}=65536 \text{ Hosts pro Subnetz}
$$

## (c) Was sind die Vorteile der privaten IP-Adressen – warum sind sie nötig? Gibt es Nachteile bei der Nutzung im Zusammenhang mit dem Internet?

> [!tip] Erklärung private IP-Adressen
>
> # Private IP-Adressen (1/2)
>
> - Internet Service Providers (ISPs) vergeben an kleine Firmen und Privatkunden oftmals nur eine einzige öffentliche IP-Adresse unabhängig davon wie viele Hosts in ihrem LAN anschließen
> - Innerhalb ihres LANs verwenden die Hosts sogenannte private IP-Adressen (nur innerhalb des LANs eindeutig)
>
> # Private IP-Adressen (2/2)
>
> - Folgende Adressblöcke sind als privat reserviert:
> - 10.0.0.0/8 (Klasse A Adressblock)
> - 172.16.0.0/12 (16 Klasse B Adressblöcke)
> - 192.168.0.0/16 (256 Klasse C Adressblöcke)
>   <br/>
> - Private Adressen werden nicht im Internet vermittelt
> - Pakete mit privaten Adressen als Ziel oder Absender werden von Routern verworfen

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
