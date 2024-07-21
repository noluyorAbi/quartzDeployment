---
tags:
  - 4semester
  - informatik
  - RNVS
  - Übungsblatt
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Thursday, 13. June 2024, 16:42
date modified: Saturday, 6. July 2024, 17:10
---

# 1. Verzögerungszeiten (H)

> [!note] Aufgabenstellung
> Eine Nachricht wird auf dem Weg durch das Netz über verschiedene Knoten und Verbindungen geleitet. Die Übertragung der Daten erfolgt mit Hilfe von Signalen (z.B. elektrische bei Kupferkabeln, elektromagnetische bei der Funkübertragung und optische bei Lichtwellenleitern). Aufgrund von physikalischen Eigenschaften der Signale und Übertragungsmedien, aber auch in den Knoten (Switches, Router) und Endgeräten sowie aufgrund der allgemeinen Verkehrssituation im Netz treten bei der Übertragung von Daten verschiedene Arten von Verzögerungen auf. Wir unterscheiden u.a. folgende Verzögerungszeiten:
>
> - Signalverzögerung
> - Verarbeitungsverzögerung
> - Nachrichtendauer (auch: Übertragungsverzögerung)
> - Warteverzögerung

## (a) Zeigen Sie anhand der folgenden Skizze, wo diese Verzögerungen auftreten und erklären Sie jeweils kurz, wie sie entstehen!

![[WhatsApp Image 2024-06-13 at 16.47.59.jpeg]]

_Verarbeitungsverzögerung_

- Lesen und auswerten der Steuerinformationen
- Überprüfung von Bitübertragungsfehlern

_Warteschlangenverzögerung_

- Entsteht durch Länge der Schlange
- Schlange hängt von Übertragungsrate der Leitung ab

_Übertragungsverzögerung_

- Abhängig von Paketlänge $L$ und Übertragungsrate $R$ (zum nächsten Transitsystem)
- $\Longrightarrow$ Je größer das Paket, desto langsamer

_Signalausbreitungsverzögerung_

- Hängt von der Entfernung $d$ vom Sender und Empfänger und der Ausbreitungsgeschwindigkeit $s$ ab

## (b) Erklären Sie den Unterschied zwischen der Nachrichtendauer und der Signalverzögerung!

> [!tip] Erklärung von den beiden
>
> - Übertragungsrate bezieht sich auf die Menge an Daten, die pro Zeiteinheit übertragen werden. Wird in Bits pro Sekunde (bps) gemessen
> - Ausbreitungsgeschwindigkeit bezieht sich auf die Geschwindigkeit, mit der eine elektromagnetische Welle oder ein Signal durch ein Medium (Kabel. Luft) reist. Wird in
>   $\frac{Längeneinheit}{Zeit}$

_Unterschiede_

- Nachrichtendauer ist Abhängig von der Paketlänge $L$, während die Signalausbreitungsverzögerung von der Entfernung zwischen Sender und Empfänger ($d$) abhängig ist
- Nachrichtendauer sind Bits pro Sekunde welche Abhängig von $R$ Sekunden abgeschickt werden, während bei der Signalverzögerung die Ausbreitungsgeschwindigkeit durch das Medium in $\frac{Entfernung}{Zeit}$ gemessen wird

## (c) Zwei Rechner A und B sollen in einem Heim-Netz miteinander kommunizieren. Rechner A sei über ein 20 m langes Kupferkabel (Twisted-Pair-Kabel) an einen DSL-WLAN-Router angeschlossen; Rechner B kommuniziert per WLAN und befindet sich 10 m vom Router entfernt in Sichtweite von diesem. Berechnen Sie die Verzögerung für ein Paket der Größe 1500 B, welches von Rechner A an den Rechner B gesendet wird.

> [!info] Hinweis:
>
> - $1 \text{ Mbit} = 1 \times 10^6 \text{ bit}$
> - Vernachlässigen Sie die Warteverzögerungen, sowie alle Fehlereinwirkungen (Paketverlust, Übertragungsfehler etc).
> - Die Verarbeitungsverzögerung im Router betrage $2 \mu s$.
> - Die Ausbreitungsgeschwindigkeit von Signalen beträgt:
> - $2 \times 10^8 \text{ m/s}$ im Kupferkabel
> - $3 \times 10^8 \text{ m/s}$ bei Funksignalen
> - Die Übertragungsraten betragen:
> - $100 \text{ Mbit/s}$ auf dem Kupferkabel
> - $54 \text{ Mbit/s}$ bei Funksignalen

$$
d_{nodal} = d_{proc} + d_{queue} + d_{trans} + d_{prop}
$$

- $d_{queue} = 0$
- $d_{proc}= 2\mu s$

### Kupferkabel

$$
d_{trans} = \frac{L}{R} = \frac{12000 \text{ Bit}}{100000000 \frac{Bit}{s}}=0,00012s = 120 \mu s
$$

$$
\begin{aligned}
d_{prop}= \frac{d}{s} = \frac{20 \ m}{200000000 \frac{m}{s}} &= 1\times10^{-7}s\\
&=0,1\mu s \\
&= 100 \text{ ns}
\end{aligned}
$$

### Funksignale

$$
d_{trans} = \frac{L}{R} = \frac{12000 \text{ Bit}}{54000000 \frac{Bit}{s}}=0,0002 = 200 \mu s
$$

$$
\begin{aligned}
d_{prop}= \frac{d}{s} = \frac{10 \ m}{300000000 \frac{m}{s}} &= 1\times10^{-7}s\\
&=0,033\mu s \\
&= 33,33 \text{ ns}
\end{aligned}
$$

### Ergebnis

$$
d_{nodal}^{Kupfer} = 2\mu s + 0 + 120\mu s + 0,01 \mu s =122,01\mu s
$$

$$
d_{nodal}^{Funk} = 2\mu s + 0 + 200\mu s + 0,033 \mu s = 202,033\mu s
$$

$$
\begin{aligned}
d_{nodal}^{Kupfer} + d_{nodal}^{Funk} &= 122,01 \mu s + 202,033 \mu s\\ &= 324,013 \mu s
\end{aligned}
$$

# 2. Paket- und Leitungsvermittlung (H)

> [!note] Aufgabenstellung
> Angenommen eine Applikation überträgt Daten mit einer festen Rate, beispielsweise $N$ Bit alle $k$ Zeiteinheiten – wobei $k$ klein ist. Die Applikation wird für eine längere Zeit ausgeführt. Beantworten Sie die folgenden Fragen und begründen Sie Ihre Antwort kurz.

## (a) Ist eine Leitungsvermittlung oder die Paketvermittlung für dieses Szenario besser geeignet? Warum?

> [!success] Richtige Lösung
>
> - Leitungsvermittlung, da konstante Übertragungsrate
> - $\Longrightarrow$ Ressourcenreservierung sinnvoll

> [!fail] Falsche Lösung
>
> - periodisches Abesenden von Datenpaketen mit $N$ Bit alle $k$ Zeiteinheiten
> - $\Longrightarrow$ Für dieses Szenario ist die Paketvermittlung besser geeignet, da bei dieser Pakete hintereinander geschickt werden können ohne auf eine Bestätigung warten zu müssen

> [!tip] Erklärung
>
> # Richtige Lösung
>
> ## Leitungsvermittlung:
>
> - **Warum geeignet:** Da die Applikation eine konstante Datenübertragungsrate hat und dies über eine längere Zeit beibehalten wird, ist eine Leitungsvermittlung besser geeignet. Dies liegt daran, dass durch die Reservierung der Ressourcen eine kontinuierliche und stabile Übertragungsrate gewährleistet werden kann.
> - **Ressourcenreservierung:** In der Leitungsvermittlung werden die benötigten Ressourcen für die gesamte Dauer der Übertragung reserviert, was eine konstante Datenrate ermöglicht.
>
> ## Falsche Lösung:
>
> - **Paketvermittlung:** Obwohl Paketvermittlung in vielen modernen Netzwerken weit verbreitet ist, ist sie für dieses spezifische Szenario weniger geeignet. Dies liegt daran, dass die Übertragungsrate schwanken kann und die Pakete möglicherweise unterschiedliche Wege nehmen, was zu variabler Latenz und möglichen Verzögerungen führt.
> - **Periodisches Senden von Datenpaketen:** Bei periodischem Senden von Datenpaketen kann es zu Verzögerungen und Unterbrechungen kommen, besonders wenn das Netzwerk stark ausgelastet ist.

## (b) Betrachten Sie ein paketvermittelndes Netz dessen Endsysteme ausschließlich aus Applikationen wie oben beschrieben bestehen. Die Kapazität, d.h. die maximale Datenrate $R$, jedes einzelnen Links sei größer als die Summe der Datenraten aller Applikationen. In welchem Fall können Paketverluste auftauchen?

_(Folie 50)_

- **Paketverlust (Packet Loss, Drop)**

  - Tritt auf, wenn die Schlange (Puffer) voll ist und weitere Pakete eintreffen.

- **Zur Erinnerung (Transport Layer - TCP)**
  - Aus Sicht der Endsysteme:
    - Paket wurde verschickt, kam jedoch nicht beim Empfänger an.
    - Konsequenz: Paket wird erneut verschickt.

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
