---
tags:
  - 4semester
  - informatik
  - RNVS
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Friday, 19. July 2024, 09:20
date modified: Sunday, 21. July 2024, 02:01
---

# Vorlesung: TCP-Sequenznummern und IP-Subnetting

## Einleitung

In dieser Sitzung werden wir auf das Repetitorium eingehen und die TCP-Sequenznummern ausführlich besprechen. Wir werden dies anhand eines Beispiels aus Blatt 6, Aufgabe 4c, illustrieren. Nach der Diskussion der TCP-Sequenznummern werden wir uns intensiv mit dem Thema IP-Subnetting befassen.

## TCP-Sequenznummern

### Einleitung zu TCP-Sequenznummern

In der vorherigen Vorlesung und im Repetitorium haben wir bereits ausführlich die TCP-Sequenznummern behandelt. Diese Sequenznummern sind ein wesentlicher Bestandteil des Transmission Control Protocol (TCP) und spielen eine entscheidende Rolle bei der zuverlässigen Übertragung von Daten über das Internet. Heute werden wir diese Konzepte erneut aufgreifen und vertiefen, um sicherzustellen, dass alle Unklarheiten beseitigt werden.

### Beispiel aus Blatt 6, Aufgabe 4c

Wir betrachten einen Fall, in dem TCP ein Segment in falscher Reihenfolge erhält, da ein vorheriges Segment nicht erfolgreich angekommen ist. Ich habe dazu ein Sequenzdiagramm an die Tafel gezeichnet.

#### Segment und Sequenznummern

In der Aufgabenstellung haben wir eine Sequenznummer 127 und senden ein Segment der Länge 80. Die Frage lautet nun: Welche Sequenznummer hat dann Segment Nummer 2?

- Ursprüngliche Sequenznummer: $127$
- Länge des Segments: $80$
- Sequenznummer des nächsten Segments: $127 + 80 = 207$

Wir haben hier Bytes 127 bis 206 in diesem Segment und im nächsten Segment dann Bytes 207 bis wohin auch immer.

TCP (Transmission Control Protocol) ist ein verbindungsorientiertes Protokoll, das in der Transportschicht des OSI-Modells arbeitet. Es stellt sicher, dass Daten korrekt und in der richtigen Reihenfolge übertragen werden. Um dies zu erreichen, verwendet TCP Sequenznummern, die jedem Byte im Datenstrom eine eindeutige Nummer zuweisen. Dies ermöglicht es, den Empfang von Daten zu überwachen und verloren gegangene oder fehlerhafte Daten erneut anzufordern.

#### Verlust von Segment 1

Wenn Segment 1 verloren geht oder später ankommt, stellt sich die Frage, wie die Quittung für das Segment S2 aussieht.

TCP verwendet ein Bestätigungsverfahren (Acknowledgment), bei dem der Empfänger jedes korrekt empfangene Datensegment bestätigt. Die Quittung (ACK) gibt die Sequenznummer des nächsten erwarteten Bytes an. Wenn ein Segment verloren geht, wird die Quittung des letzten korrekt empfangenen Segments wiederholt. Dies signalisiert dem Sender, dass ein oder mehrere Segmente fehlen.

#### Quittung auf Segment S2

Die Quittung muss wiederholt werden, da das vorherige Segment fehlt. Die Quittungsnummer gibt Auskunft darüber, welche Bytes wir als nächstes erwarten. In diesem Fall ist die Quittungsnummer 127, da dies das erste Byte ist, das wir nicht erhalten haben.

Dieses Verfahren stellt sicher, dass der Sender über verlorene Segmente informiert wird und diese erneut senden kann. Durch die Verwendung von Sequenznummern und Quittungen gewährleistet TCP eine zuverlässige Datenübertragung.

## IP-Subnetting

### Einführung in IP-Subnetting

Nun kommen wir zum Thema IP-Subnetting. IP (Internet Protocol) ist das Protokoll, das für die Adressierung und das Routing von Datenpaketen im Internet verantwortlich ist. Subnetting ist die Praxis, ein größeres Netzwerk in kleinere, effizientere Subnetze zu unterteilen. Dies erleichtert die Verwaltung und verbessert die Sicherheit und Leistung des Netzwerks.

Wir werden ein kurzes Quiz machen, basierend auf den Vorlesungsfolien und den Übungsblättern, insbesondere Blatt 9, Aufgabe 1b.

### Aufgabe: Subnetze aufteilen

Gegeben ist ein Adressblock /16. Wir sollen diesen in verschiedene Subnetze aufteilen:

1. Ein Subnetz mit 32.000 Hosts
2. 15 Subnetze mit jeweils 2.000 Hosts
3. 8 Subnetze mit jeweils 250 Hosts

#### Lösungsansatz

Wie gehen wir diese Aufgabe an? Beginnen wir mit der Überschlagsrechnung:

- 8 Bits entsprechen etwa 65.000 Adressen.
- Wir benötigen 32.000 Adressen, also etwa die Hälfte.
- Für die verbleibenden 2.000 Hosts benötigen wir entsprechend weniger Bits.

Wir fixieren ein Bit und verwenden die restlichen 15 Bits für die Adressen.

#### Berechnung

Ein Subnetz für 32.000 Hosts benötigt mindestens 15 Bits:

$$
2^{15} = 32768
$$

### Erweiterung des Subnetting-Beispiels

#### Logarithmusberechnung

32.000 Hosts entsprechen etwa 32.768 Adressen. Um die genaue Anzahl der benötigten Bits zu berechnen, nutzen wir den Logarithmus zur Basis 2:

$$
\log_2(32000) \approx 14.96
$$

Da wir keine Taschenrechner verwenden dürfen, hilft es, sich die Zweierschritte aufzuschreiben:

$$
2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768
$$

Das ergibt 15 Bits für 32.000 Hosts. Wenn wir 32.768 Hosts benötigen, sind es genau 15 Bits.

#### Beispielsubnetzberechnung

Nehmen wir an, wir haben einen /16-Adressblock. Um 32.000 Hosts unterzubringen, benötigen wir ein /17-Subnetz:

- Netz: $/17$
- Hosts: $32.000$

Damit bleibt die obere oder untere Hälfte des /16-Adressblocks frei.

#### Aufteilen in 15 Subnetze mit je 2.000 Hosts

Um 15 Subnetze mit je 2.000 Hosts zu unterteilen, benötigen wir 11 Bits:

$$
\log_2(2000) \approx 10.97 \Rightarrow 11 \text{ Bits}
$$

Wir haben 4 Bits für die Subnetznummerierung:

- Subnetznummern: $0 \ldots 15$
- Hosts: $2000$ pro Subnetz

#### Subnetze mit je 250 Hosts

Für 250 Hosts benötigen wir 8 Bits. Da wir 3 Bits zur Subnetznummerierung nutzen, haben wir:

- Subnetznummern: $0 \ldots 7$
- Hosts: $250$ pro Subnetz

### Binärzahlen umrechnen

Um die Subnetz-Adressen zurückzurechnen:

- Beispiel: 1, 0, 0, 0 = $8$
- Netz: $192.168.8.0/21$

Die weiteren Subnetze haben jeweils eine Schrittweite von $8$:

- Nächste Subnetz: $192.168.16.0/21$

Dies ergibt eine konsistente Aufteilung der IP-Adressen.

### Weitere Details und Berechnungen

#### Rückrichtung und Logarithmus

Für 32.000 Hosts ergibt der Logarithmus zur Basis 2 ungefähr 14.96. In der Klausur ist es schwierig, den Logarithmus ohne Taschenrechner zu berechnen. Es ist hilfreich, sich die Zweierschritte aufzuschreiben:

$$
2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768
$$

Dies zeigt, dass 15 Bits für 32.000 Hosts benötigt werden.

#### Visualisierung der Bits

Um die Anzahl der benötigten Bits zu bestimmen, können wir die verschiedenen Optionen aufschreiben:

- 1 Bit: $2^1 = 2$
- 2 Bits: $2^2 = 4$
- 3 Bits: $2^3 = 8$
- 4 Bits: $2^4 = 16$
- 5 Bits: $2^5 = 32$
- 6 Bits: $2^6 = 64$
- 7 Bits: $2^7 = 128$
- 8 Bits: $2^8 = 256$
- 9 Bits: $2^9 = 512$
- 10 Bits: $2^{10} = 1024$
- 11 Bits: $2^{11} = 2048$
- 12 Bits: $2^{12} = 4096$
- 13 Bits: $2^{13} = 8192$
- 14 Bits: $2^{14} = 16384$
- 15 Bits: $2^{15} = 32768$

Für 32.000 Hosts benötigen wir somit 15 Bits.

#### Beispiel: 32.000 Hosts

Um 32.000 Hosts unterzubringen, verwenden wir 15 Bits:

$$
2^{15} = 32768
$$

#### Weitere Schritte bei der Subnetzberechnung

Für die weiteren Subnetze benötigen wir:

- 15 Subnetze mit je 2.000 Hosts: 11 Bits
- 8 Subnetze mit je 250 Hosts: 8 Bits

Wir teilen die verbleibenden Adressen entsprechend auf und berechnen die genauen Subnetz-Adressen.

### Weitere Details und Berechn

ungen für 2.000 und 250 Hosts

#### 15 Subnetze mit je 2.000 Hosts

Für 2.000 Hosts benötigen wir 11 Bits. Diese 11 Bits entsprechen 2048 Adressen, was mehr als ausreichend ist, um 2.000 Hosts zu adressieren. Die Subnetznummerierung wird mit den verbleibenden Bits durchgeführt.

- Beispiel: $192.168.0.0/21$
- Nächstes Subnetz: $192.168.8.0/21$

#### 8 Subnetze mit je 250 Hosts

Für 250 Hosts benötigen wir 8 Bits. Diese 8 Bits entsprechen 256 Adressen, was mehr als ausreichend ist, um 250 Hosts zu adressieren. Die Subnetznummerierung wird ebenfalls mit den verbleibenden Bits durchgeführt.

- Beispiel: $192.168.0.0/24$
- Nächstes Subnetz: $192.168.1.0/24$

### Überlegungen zur Netzstruktur und Binärbäume

#### Binärbäume und Adressraumaufteilung

Bei der Aufteilung eines IP-Adressraums in Subnetze kann man sich den Adressraum als Binärbaum vorstellen. Jedes Bit in der Adresse repräsentiert eine Entscheidung, ob man nach links oder rechts im Baum geht. Dies ermöglicht eine effiziente und strukturierte Aufteilung des Adressraums.

#### Fixieren von Bits

Wenn wir ein Bit fixieren, teilen wir den Adressraum in zwei Hälften. Zum Beispiel teilt ein /17-Netz ein /16-Netz in zwei Hälften. Die verbleibenden Bits werden dann für die Subnetz- und Hostadressen verwendet.

### Praktische Anwendungen und Herausforderungen

#### Praktische Herausforderungen

In der Praxis können verschiedene Herausforderungen auftreten, wie z.B. unzureichende IP-Adressen oder die Notwendigkeit, bestehende Netzwerke neu zu strukturieren. In solchen Fällen können Techniken wie Network Address Translation (NAT) verwendet werden, um mehr Hosts mit einem begrenzten Adressraum zu unterstützen.

#### Bedeutung von Subnetting

Subnetting ist eine essentielle Technik für die Netzwerkadministration. Es ermöglicht eine effiziente Nutzung des Adressraums, verbessert die Netzwerkleistung und erleichtert die Verwaltung. Durch die Aufteilung eines großen Netzwerks in kleinere Subnetze kann die Sicherheit erhöht und die Netzwerkverwaltung vereinfacht werden.

### Broadcast-Adressen

Ein weiterer wichtiger Aspekt beim Subnetting ist die Berechnung von Broadcast-Adressen. Die Broadcast-Adresse eines Subnetzes ist die höchste Adresse in diesem Subnetz und wird verwendet, um Nachrichten an alle Hosts im Subnetz zu senden.

#### Berechnung der Broadcast-Adresse

Um die Broadcast-Adresse eines Subnetzes zu berechnen, setzen wir alle Host-Bits auf 1:

- Beispiel: Für das Subnetz $192.168.0.0/24$ ist die Broadcast-Adresse $192.168.0.255$, da alle Host-Bits auf 1 gesetzt wurden.

#### Praktisches Beispiel

Nehmen wir das Subnetz $192.168.8.0/21$. Die Broadcast-Adresse wird berechnet, indem alle Host-Bits auf 1 gesetzt werden:

- Subnetz: $192.168.8.0/21$
- Broadcast-Adresse: $192.168.15.255$

Diese Technik ist nützlich, um sicherzustellen, dass Nachrichten alle Hosts im Subnetz erreichen.

### Funktionsweise von DNS-Anfragen

Eine wichtige Anwendung in Netzwerken ist das Domain Name System (DNS). DNS dient zur Auflösung von Domainnamen in IP-Adressen. Wir haben uns bisher mit der iterativen DNS-Abfrage beschäftigt, möchten aber nun die rekursive DNS-Abfrage näher betrachten.

#### Iterative vs. Rekursive DNS-Anfragen

Bei einer iterativen DNS-Anfrage fragt der Client nacheinander mehrere DNS-Server ab, bis er die IP-Adresse der gesuchten Domain erhält. Bei einer rekursiven DNS-Anfrage hingegen übernimmt der DNS-Server die gesamte Arbeit und gibt dem Client direkt die endgültige Antwort zurück.

#### Beispiel einer rekursiven DNS-Anfrage

Nehmen wir an, wir wollen die IP-Adresse von www.mnmteam.org herausfinden. Bei einer rekursiven Anfrage schickt unser lokaler DNS-Server die Anfrage weiter an einen externen DNS-Server, der die Antwort entweder aus seinem Cache oder durch eigene iterative Anfragen erhält und schließlich an uns zurückgibt.

##### Ablauf einer rekursiven DNS-Anfrage

1. Der Client schickt eine DNS-Anfrage an den lokalen DNS-Server.
2. Der lokale DNS-Server prüft seinen Cache. Wenn die Antwort dort nicht vorhanden ist, schickt er die Anfrage an einen externen DNS-Server.
3. Der externe DNS-Server antwortet entweder aus seinem Cache oder führt selbst iterative Anfragen durch, um die IP-Adresse zu ermitteln.
4. Der externe DNS-Server gibt die endgültige Antwort an den lokalen DNS-Server zurück, der sie an den Client weiterleitet.

Dieser Prozess reduziert die Last auf dem Client und verbessert die Antwortzeiten, da häufige Anfragen aus dem Cache beantwortet werden können.

### Wireshark-Analyse von DNS-Anfragen

Mit Wireshark, einem Netzwerkprotokoll-Analyzer, können wir den Ablauf von DNS-Anfragen detailliert untersuchen. Durch das Aufzeichnen und Analysieren von Netzwerkpaketen können wir nachvollziehen, welche Anfragen gestellt und welche Antworten erhalten wurden.

#### Beispiel einer Wireshark-Analyse

Wir führen eine DNS-Anfrage nach www.mnmteam.org durch und zeichnen den Netzwerkverkehr mit Wireshark auf. In der Analyse sehen wir die gesendete DNS-Anfrage und die empfangene DNS-Antwort.

- **Anfrage:** Die Anfrage enthält den Domainnamen www.mnmteam.org und den Record-Typ A (IPv4-Adresse).
- **Antwort:** Die Antwort enthält die IP-Adresse der Domain sowie zusätzliche Informationen wie die TTL (Time to Live) und die autoritativen Nameserver.

Bei einer detaillierten Analyse in Wireshark können wir sehen, dass die erste Anfrage an den DNS-Server gesendet wird und wir die Antwort erhalten, die 30 Millisekunden dauert. Eine zweite, identische Anfrage wird gestellt, aber diesmal dauert die Antwort nur 3 Millisekunden, da sie aus dem Cache des DNS-Servers geliefert wird.

### Praktische Bedeutung von DNS-Caching

DNS-Caching ist eine Technik, bei der DNS-Server die Antworten auf Anfragen für eine bestimmte Zeit speichern. Dies reduziert die Last auf die DNS-Infrastruktur und verbessert die Antwortzeiten für häufige Anfragen.

#### Beispiel für DNS-Caching

Wenn wir mehrfach hintereinander die gleiche DNS-Anfrage stellen, wird die Antwort in der Regel aus dem Cache des DNS-Servers geliefert, was deutlich schneller ist als eine vollständige rekursive Anfrage.

- **Erste Anfrage:** Die Antwortzeit beträgt z.B. 30 Millisekunden, da die Anfrage den kompletten rekursiven Weg durchlaufen muss.
- **Zweite Anfrage:** Die Antwortzeit beträgt nur noch 3 Millisekunden, da die Antwort aus dem Cache geliefert wird.

### Abschluss der DNS-Analyse

Zusammenfassend haben wir die Funktionsweise und den Ablauf von DNS-Anfragen untersucht. DNS ist ein essenzieller Bestandteil des Internets, der die Umwandlung von Domainnamen in IP-Adressen ermöglicht und durch Techniken wie rekursive Anfragen und Caching effizienter gestaltet wird.

## Fazit

Wir haben die Subnetting-Aufgabe Schritt für Schritt durchgearbeitet und dabei sowohl die TCP-Sequenznummern als auch die Subnetzberechnungen wiederholt. Zusätzlich haben wir die Funktionsweise von DNS-Anfragen und die Bedeutung von DNS-Caching detailliert untersucht. Diese Konzepte sind grundlegend für das Verständnis und die Verwaltung von Netzwerken und spielen eine zentrale Rolle in der modernen IT-Infrastruktur.

Gibt es sonst noch Fragen zu TCP-Sequenznummern, IP-Subnetting oder DNS? Falls nicht, können wir weitere Fragen, die per Mail eingegangen sind, besprechen oder interaktiv auf neue Fragen eingehen.

### DNS-Server und Autoritative Antworten

Ein DNS-Server kann autoritative Antworten geben, wenn er die Originaldaten für eine Domain verwaltet. Wenn wir z.B. www.mnmteam.org auflösen, gibt der DNS-Server die Antwort aus seinem autoritativen Speicher oder führt Anfragen an andere DNS-Server durch.

- **Autoritative Nameserver:** Diese Server enthalten die genauen Daten für die Domains, die sie verwalten. Wenn eine Anfrage für www.mnmteam.org gestellt wird, wird die Antwort von einem autoritativen Nameserver gegeben, wenn der Server die Zone verwaltet.
- **Caching Nameserver:** Diese speichern die Antworten von autoritativen Nameservern, um die Last zu reduzieren und die Antwortzeiten zu verbessern.

#### Ablauf einer DNS-Anfrage mit autoritativen Nameservern

1. **Client-Anfrage:** Ein Client stellt eine Anfrage an den lokalen DNS-Server.
2. **Überprüfung des Caches:** Der lokale DNS-Server überprüft, ob die Antwort im Cache gespeichert ist.
3. **Anfrage an den autoritativen Nameserver:** Falls die Antwort nicht im Cache ist, wird die Anfrage an den autoritativen Nameserver weitergeleitet.
4. **Antwort:** Der autoritative Nameserver gibt die genaue Antwort zurück.
   5

. **Speicherung im Cache:** Der lokale DNS-Server speichert die Antwort im Cache für zukünftige Anfragen.

### DNS-Anfrage im Detail

Wir verwenden Wireshark, um den genauen Ablauf einer DNS-Anfrage zu untersuchen:

- **DNS-Query:** Enthält Informationen wie den angeforderten Domainnamen und den gewünschten Datentyp (z.B. A-Record für IPv4-Adressen).
- **DNS-Response:** Beinhaltet die IP-Adresse der angeforderten Domain sowie zusätzliche Informationen wie die TTL (Time to Live), die angibt, wie lange die Antwort im Cache bleiben darf.

### Weitere Details zu Subnetting

#### Host- und Netzwerkteil

Ein IP-Adressblock besteht aus einem Netzwerkteil und einem Host-Teil. Die Subnetzmaske gibt an, wie viele Bits für den Netzwerkteil verwendet werden und wie viele Bits für den Host-Teil übrig bleiben:

- **Subnetzmaske:** Eine Subnetzmaske wie /24 bedeutet, dass die ersten 24 Bits für das Netzwerk reserviert sind und die restlichen 8 Bits für die Hosts.
- **Host-Adressen:** Die Anzahl der verfügbaren Host-Adressen in einem Subnetz kann durch $2^{\text{Anzahl der Host-Bits}} - 2$ berechnet werden. Die Subtraktion von 2 berücksichtigt die Netz- und Broadcast-Adressen.

#### Beispiel für die Berechnung der verfügbaren Host-Adressen

Für ein /24-Subnetz haben wir 8 Bits für die Hosts:

$$
2^8 - 2 = 256 - 2 = 254 \text{ Hosts}
$$

### Weitere Erläuterungen zu TCP und DNS

#### TCP-Flusskontrolle und Überlaststeuerung

Zusätzlich zu den bereits erwähnten TCP-Sequenznummern und Quittungen gibt es weitere wichtige Konzepte:

- **Flusskontrolle:** TCP verwendet Mechanismen wie das Sliding Window, um sicherzustellen, dass der Sender die Empfangskapazität des Empfängers nicht überlastet.
- **Überlaststeuerung:** Techniken wie Slow Start, Congestion Avoidance, Fast Retransmit und Fast Recovery helfen, Netzwerküberlastungen zu vermeiden und die Datenübertragung zu optimieren.

### Zusammenfassung

In dieser erweiterten Vorlesung haben wir die Konzepte von TCP-Sequenznummern, IP-Subnetting und DNS-Anfragen detailliert untersucht. Wir haben wichtige Fachbegriffe erklärt und praktische Beispiele durchgerechnet, um ein tiefes Verständnis dieser essenziellen Netzwerkprotokolle zu vermitteln. Diese Konzepte sind fundamental für die Verwaltung und Optimierung moderner Netzwerke.

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
