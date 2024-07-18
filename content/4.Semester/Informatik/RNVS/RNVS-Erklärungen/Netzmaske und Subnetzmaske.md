---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Thursday, 18. July 2024, 15:59
date modified: Thursday, 18. July 2024, 17:42
---

# Netzmaske und Subnetzmaske: Eine umfassende Anleitung

## Inhaltsverzeichnis

1. [Einführung](#einführung)
2. [Grundlagen der Netzmaske](#grundlagen-der-netzmaske)
   - [Definition](#definition)
   - [Funktionsweise](#funktionsweise)
3. [Subnetzmasken verstehen](#subnetzmasken-verstehen)
   - [Was ist eine Subnetzmaske?](#was-ist-eine-subnetzmaske)
   - [Warum Subnetzmasken verwendet werden](#warum-subnetzmasken-verwendet-werden)
4. [Berechnung der Subnetzmaske](#berechnung-der-subnetzmaske)
   - [Subnetting: Ein Überblick](#subnetting-ein-überblick)
   - [Anzahl der Subnetze berechnen](#anzahl-der-subnetze-berechnen)
   - [Host-Anzahl in einem Subnetz berechnen](#host-anzahl-in-einem-subnetz-berechnen)
   - [Subnetzmaske bestimmen](#subnetzmaske-bestimmen)
5. [Beispiele und Praxisübungen](#beispiele-und-praxisübungen)
   - [Beispiel 1: Subnetz einer Klasse-C-Adresse](#beispiel-1-subnetz-einer-klasse-c-adresse)
   - [Beispiel 2: Subnetz einer Klasse-B-Adresse](#beispiel-2-subnetz-einer-klasse-b-adresse)
   - [Weitere Übungsaufgaben](#weitere-übungsaufgaben)
6. [Werkzeuge zur Berechnung von Subnetzmasken](#werkzeuge-zur-berechnung-von-subnetzmasken)
   - [Online-Rechner](#online-rechner)
   - [Software-Tools](#software-tools)
7. [Best Practices für die Verwendung von Subnetzen](#best-practices-für-die-verwendung-von-subnetzen)
   - [Sicherheitsaspekte](#sicherheitsaspekte)
   - [Leistungsoptimierung](#leistungsoptimierung)
8. [Häufig gestellte Fragen (FAQ)](#häufig-gestellte-fragen-faq)
9. [Zusammenfassung](#zusammenfassung)

<h2 id="einführung">Einführung</h2>
Das Internet und moderne Netzwerke basieren auf der Fähigkeit, IP-Adressen effizient zu verwalten. Zwei wesentliche Konzepte in diesem Kontext sind Netzmasken und Subnetzmasken. Diese Begriffe mögen auf den ersten Blick kompliziert erscheinen, sind jedoch fundamental für das Verständnis der Netzwerkarchitektur und -sicherheit. In diesem umfassenden Leitfaden werden wir die Bedeutung und die Berechnung von Netz- und Subnetzmasken eingehend untersuchen und praxisnahe Beispiele zur Veranschaulichung anbieten.

<h2 id="grundlagen-der-netzmaske">Grundlagen der Netzmaske</h2>
### Definition
<h3 id="definition">Definition</h3>
Eine Netzmaske, auch Subnetzmaske genannt, ist ein 32-Bit-Wert, der in IPv4-Netzwerken verwendet wird. Sie dient dazu, die Netzwerkteile einer IP-Adresse von den Host-Teilen zu trennen. Die Netzmaske wird zusammen mit der IP-Adresse verwendet, um zu bestimmen, welcher Teil der Adresse sich auf das Netzwerk und welcher sich auf den spezifischen Host bezieht.

<h3 id="funktionsweise">Funktionsweise</h3>
Eine Netzmaske besteht aus einer Folge von Einsen, gefolgt von einer Folge von Nullen. Die Einsen bestimmen den Netzwerkanteil der Adresse, während die Nullen den Hostanteil bestimmen. Zum Beispiel hat die Netzmaske 255.255.255.0 im Binärformat die Form:

```
11111111.11111111.11111111.00000000
```

Wenn diese Netzmaske auf eine IP-Adresse angewendet wird, können wir den Netzwerkteil und den Hostteil der Adresse unterscheiden. Betrachten wir zum Beispiel die IP-Adresse 192.168.1.10 mit der Netzmaske 255.255.255.0:

- IP-Adresse: 192.168.1.10
- Netzmaske: 255.255.255.0

Im Binärformat sieht das folgendermaßen aus:

- IP-Adresse: 11000000.10101000.00000001.00001010
- Netzmaske: 11111111.11111111.11111111.00000000

Durch eine bitweise UND-Operation der IP-Adresse und der Netzmaske erhalten wir die Netzwerkadresse:

```
11000000.10101000.00000001.00000000 -> 192.168.1.0
```

Der Hostteil ist das Ergebnis der bitweisen UND-Operation der IP-Adresse und der invertierten Netzmaske:

```
00000000.00000000.00000000.00001010 -> 0.0.0.10
```

<h2 id="subnetzmasken-verstehen">Subnetzmasken verstehen</h2>

<h3 id="was-ist-eine-subnetzmaske">Was ist eine Subnetzmaske?</h3>
Eine Subnetzmaske ist eine spezifische Form der Netzmaske, die verwendet wird, um ein einzelnes Netzwerk in kleinere, überschaubarere Subnetze zu unterteilen. Dies ist besonders nützlich in großen Netzwerken, wo es notwendig ist, den Datenverkehr zu segmentieren und die Netzwerkverwaltung zu vereinfachen.

<h3 id="warum-subnetzmasken-verwendet-werden">Warum Subnetzmasken verwendet werden</h3>
Subnetzmasken bieten mehrere Vorteile:
- **Erhöhte Sicherheit**: Durch die Aufteilung eines Netzwerks in Subnetze können Administratoren den Datenverkehr zwischen verschiedenen Teilen des Netzwerks besser kontrollieren.
- **Effiziente Nutzung von IP-Adressen**: Subnetting hilft, IP-Adressen effizienter zu verwalten und zuzuweisen.
- **Bessere Netzwerkleistung**: Durch die Verringerung des Broadcast-Domänenbereichs kann die Netzwerkleistung verbessert werden.

Subnetzmasken sind besonders in großen Netzwerken unverzichtbar, wo die Anzahl der verfügbaren IP-Adressen begrenzt und eine effiziente Verwaltung notwendig ist. Durch die Unterteilung eines großen Netzwerks in kleinere Subnetze können Netzwerkadministratoren sicherstellen, dass jedes Subnetz eine eigene, klar definierte Anzahl von IP-Adressen hat, was die Verwaltung erleichtert und die Sicherheit erhöht.

<h2 id="berechnung-der-subnetzmaske">Berechnung der Subnetzmaske</h2>

<h3 id="subnetting-ein-überblick">Subnetting: Ein Überblick</h3>
Subnetting ist der Prozess der Aufteilung eines größeren Netzwerks in kleinere Subnetze. Dies wird durch Anpassung der Subnetzmaske erreicht. Bei der Berechnung von Subnetzen müssen mehrere Faktoren berücksichtigt werden, darunter die Anzahl der benötigten Subnetze und die Anzahl der Hosts pro Subnetz.

<h3 id="anzahl-der-subnetze-berechnen">Anzahl der Subnetze berechnen</h3>
Die Anzahl der Subnetze kann durch die Anzahl der Bits bestimmt werden, die zur Subnetzmaske hinzugefügt werden. Zum Beispiel:

```
Anzahl der Subnetze = 2^n
```

wobei `n` die Anzahl der zusätzlichen Bits ist, die zur Standardnetzmaske hinzugefügt werden. Zum Beispiel, wenn wir eine Klasse-C-Adresse in 4 Subnetze aufteilen wollen, benötigen wir 2 zusätzliche Bits:

```
2^2 = 4
```

<h3 id="host-anzahl-in-einem-subnetz-berechnen">Host-Anzahl in einem Subnetz berechnen</h3>
Die Anzahl der Hosts in einem Subnetz kann ebenfalls durch die Anzahl der verbleibenden Bits in der Subnetzmaske berechnet werden:

```
Anzahl der Hosts = 2^n - 2
```

wobei `n` die Anzahl der verbleibenden Bits ist. Der Grund, warum wir 2 abziehen, ist, dass eine Adresse für das Netzwerk selbst und eine für die Broadcast-Adresse reserviert ist. Zum Beispiel, wenn wir eine Klasse-C-Adresse mit einer Subnetzmaske von 255.255.255.192 verwenden, haben wir 6 Bits für Hosts:

```
2^6 - 2 = 62
```

<h3 id="subnetzmaske-bestimmen">Subnetzmaske bestimmen</h3>
Um die Subnetzmaske zu bestimmen, müssen wir die Netzmaske anpassen, um die benötigte Anzahl von Subnetzen zu berücksichtigen. Zum Beispiel, wenn wir ein Klasse-C-Netzwerk in 4 Subnetze aufteilen wollen, benötigen wir 2 zusätzliche Bits:

```
Originale Klasse-C-Netzmaske: 255.255.255.0 (11111111.11111111.11111111.00000000)
Neue Subnetzmaske: 255.255.255.192 (11111111.11111111.11111111.11000000)
```

Die neuen Subnetze sind:

1. `192.168.1

.0`-`192.168.1.63`2.`192.168.1.64`-`192.168.1.127`3.`192.168.1.128`-`192.168.1.191`4.`192.168.1.192`-`192.168.1.255`

<h2 id="beispiele-und-praxisübungen">Beispiele und Praxisübungen</h2>

<h3 id="beispiel-1-subnetz-einer-klasse-c-adresse">Beispiel 1: Subnetz einer Klasse-C-Adresse</h3>
Angenommen, wir haben eine Klasse-C-IP-Adresse `192.168.1.0` und möchten diese in 4 Subnetze aufteilen. Die originale Klasse-C-Netzmaske ist `255.255.255.0`. Da wir 4 Subnetze benötigen, fügen wir 2 zusätzliche Bits hinzu:

```
Originale Netzmaske: 255.255.255.0 (11111111.11111111.11111111.00000000)
Neue Subnetzmaske: 255.255.255.192 (11111111.11111111.11111111.11000000)
```

Die neuen Subnetze sind:

1. `192.168.1.0` - `192.168.1.63`
2. `192.168.1.64` - `192.168.1.127`
3. `192.168.1.128` - `192.168.1.191`
4. `192.168.1.192` - `192.168.1.255`

In diesem Beispiel haben wir die Klasse-C-Adresse in vier Subnetze unterteilt, indem wir die Subnetzmaske von `255.255.255.0` auf `255.255.255.192` geändert haben. Jedes Subnetz hat nun 62 Hosts, da die Subnetzmaske die Anzahl der verfügbaren Host-Adressen reduziert.

<h3 id="beispiel-2-subnetz-einer-klasse-b-adresse">Beispiel 2: Subnetz einer Klasse-B-Adresse</h3>
Für eine Klasse-B-Adresse `172.16.0.0` und die Aufteilung in 8 Subnetze benötigen wir 3 zusätzliche Bits:

```
Originale Netzmaske: 255.255.0.0 (11111111.11111111.00000000.00000000)
Neue Subnetzmaske: 255.255.224.0 (11111111.11111111.11100000.00000000)
```

Die neuen Subnetze sind:

1. `172.16.0.0` - `172.16.31.255`
2. `172.16.32.0` - `172.16.63.255`
3. `172.16.64.0` - `172.16.95.255`
4. `172.16.96.0` - `172.16.127.255`
5. `172.16.128.0` - `172.16.159.255`
6. `172.16.160.0` - `172.16.191.255`
7. `172.16.192.0` - `172.16.223.255`
8. `172.16.224.0` - `172.16.255.255`

In diesem Beispiel haben wir die Klasse-B-Adresse in acht Subnetze unterteilt, indem wir die Subnetzmaske von `255.255.0.0` auf `255.255.224.0` geändert haben. Jedes Subnetz hat nun 8190 Hosts, da die Subnetzmaske die Anzahl der verfügbaren Host-Adressen reduziert.

<h3 id="weitere-übungsaufgaben">Weitere Übungsaufgaben</h3>
Weitere Übungen zur Berechnung von Subnetzmasken umfassen verschiedene IP-Adressklassen und Anforderungen, um das Verständnis zu vertiefen. Hier sind einige Beispiele:

1. Teilen Sie eine Klasse-A-Adresse `10.0.0.0` in 16 Subnetze auf. Bestimmen Sie die Subnetzmaske und die Anzahl der Hosts pro Subnetz.
2. Berechnen Sie die Subnetze für eine Klasse-C-Adresse `192.168.10.0` mit einer Subnetzmaske von `255.255.255.224`. Wie viele Hosts können in jedem Subnetz untergebracht werden?
3. Teilen Sie eine Klasse-B-Adresse `172.16.0.0` in 64 Subnetze auf. Bestimmen Sie die Subnetzmaske und die Anzahl der Hosts pro Subnetz.

Durch das Lösen dieser Übungsaufgaben können Sie Ihre Fähigkeiten zur Berechnung und Anwendung von Subnetzmasken weiter verbessern.

<h2 id="werkzeuge-zur-berechnung-von-subnetzmasken">Werkzeuge zur Berechnung von Subnetzmasken</h2>

<h3 id="online-rechner">Online-Rechner</h3>
Es gibt zahlreiche Online-Rechner, die bei der Berechnung von Subnetzmasken helfen können. Diese Tools sind nützlich, um schnell und genau Subnetzmasken zu bestimmen. Einige empfohlene Online-Rechner sind:

- [Subnet Mask Calculator](https://www.calculator.net/ip-subnet-calculator.html)
- [IP Subnet Calculator](https://www.subnet-calculator.com/)
- [Online IP Subnet Calculator](https://www.site24x7.com/tools/ip-subnet-calculator.html)

<h3 id="software-tools">Software-Tools</h3>
Es gibt auch spezialisierte Software-Tools, die Netzwerkadministratoren bei der Verwaltung und Berechnung von Subnetzen unterstützen. Einige dieser Tools bieten erweiterte Funktionen wie die Visualisierung von Netzwerken und die automatische Erkennung von Subnetzen. Beispiele für solche Software-Tools sind:

- **SolarWinds IP Address Manager**: Ein umfassendes Tool zur Verwaltung von IP-Adressen und Subnetzen.
- **ManageEngine OpManager**: Bietet Netzwerküberwachung und -verwaltung sowie Subnetzberechnungen.
- **Advanced IP Scanner**: Ein einfaches Tool zur Erkennung und Verwaltung von IP-Adressen im Netzwerk.

<h2 id="best-practices-für-die-verwendung-von-subnetzen">Best Practices für die Verwendung von Subnetzen</h2>

<h3 id="sicherheitsaspekte">Sicherheitsaspekte</h3>
Durch die Verwendung von Subnetzen können Netzwerke sicherer gemacht werden. Kritische Daten und Ressourcen können in separate Subnetze isoliert werden, wodurch unbefugter Zugriff erschwert wird. Einige Best Practices in diesem Bereich sind:

- **Trennung von öffentlichen und privaten Netzwerken**: Sensible Daten sollten in privaten Subnetzen gehalten werden, die vom öffentlichen Internet getrennt sind.
- **Verwendung von Firewalls**: Implementieren Sie Firewalls zwischen Subnetzen, um den Datenverkehr zu kontrollieren und Sicherheitsrichtlinien durchzusetzen.
- **Zugriffskontrollen**: Setzen Sie strikte Zugriffskontrollen und Authentifizierungsmechanismen ein, um sicherzustellen, dass nur autorisierte Benutzer auf bestimmte Subnetze zugreifen können.

<h3 id="leistungsoptimierung">Leistungsoptimierung</h3>
Subnetze können auch verwendet werden, um die Netzwerkleistung zu optimieren, indem der Datenverkehr in kleinere, besser verwaltbare Teile aufgeteilt wird. Einige Best Practices in diesem Bereich sind:

- **Reduzierung von Broadcast-Domänen**: Durch die Unterteilung großer Netzwerke in kleinere Subnetze kann der Broadcast-Verkehr reduziert werden, was die Netzwerkleistung verbessert.
- **Lastverteilung**: Verwenden Sie Subnetze, um den Datenverkehr auf verschiedene Netzwerksegmente zu verteilen und Engpässe zu vermeiden.
- **Netzwerksegmentierung**: Segmentieren Sie das Netzwerk basierend auf der Funktion oder dem Standort, um die Verwaltung zu erleichtern und die Leistung zu optimieren.

<h2 id="häufig-gestellte-fragen-faq">Häufig gestellte Fragen (FAQ)</h2>
Hier werden einige der häufigsten Fragen zu Netz- und Subnetzmasken beantwortet, um ein tieferes Verständnis zu fördern:

**Was ist der Unterschied zwischen einer Netzmaske und einer Subnetzmaske?**

- Eine Netzmaske trennt den Netzwerkanteil einer IP-Adresse vom Hostanteil. Eine Subnetzmaske ist eine spezifische Art von Netzmaske, die verwendet wird, um ein Netzwerk in kleinere Subnetze zu unterteilen.

**Wie viele Subnetze kann ich mit einer gegebenen Subnetzmaske erstellen?**

- Die Anzahl der Subnetze kann durch die Anzahl der Bits bestimmt werden, die zur Subnetzmaske hinzugefügt werden. Zum Beispiel: Anzahl der Subnetze = 2^n, wobei n die Anzahl der zusätzlichen Bits ist.

**Warum sollte ich Subnetze verwenden?**

- Subnetze bieten mehrere Vorteile, darunter erhöhte Sicherheit, effizientere Nutzung von IP-Adressen und bessere Netzwerkleistung durch Reduzierung des Broadcast-Verkehrs.

**Wie berechne ich die Anzahl der Hosts in einem Subnetz?**

- Die Anzahl der Hosts

in einem Subnetz kann durch die Anzahl der verbleibenden Bits in der Subnetzmaske berechnet werden: Anzahl der Hosts = 2^n - 2, wobei n die Anzahl der verbleibenden Bits ist.

<h2 id="zusammenfassung">Zusammenfassung</h2>
Netzmasken und Subnetzmasken sind wesentliche Konzepte in der Netzwerkverwaltung. Sie ermöglichen die effiziente Verwaltung und Sicherung von IP-Adressen und Netzwerken. Durch das Verständnis und die korrekte Anwendung dieser Konzepte können Netzwerke optimiert und sicherer gestaltet werden.

Subnetzmasken sind besonders in großen Netzwerken unverzichtbar, wo die Anzahl der verfügbaren IP-Adressen begrenzt und eine effiziente Verwaltung notwendig ist. Durch die Unterteilung eines großen Netzwerks in kleinere Subnetze können Netzwerkadministratoren sicherstellen, dass jedes Subnetz eine eigene, klar definierte Anzahl von IP-Adressen hat, was die Verwaltung erleichtert und die Sicherheit erhöht.

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
