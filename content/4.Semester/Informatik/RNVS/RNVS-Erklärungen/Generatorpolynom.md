---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Sunday, 14. July 2024, 19:41
date modified: Sunday, 14. July 2024, 19:44
---

# Generatorpolynom

Das **Generatorpolynom** ist ein entscheidendes Konzept in der Codierungstheorie, insbesondere bei der Erstellung und Überprüfung von zyklischen Redundanzprüfungen (CRC) und zyklischen Codes. Es dient zur Erzeugung von Prüfbits, die Fehler in Datenübertragungen erkennen können. Dieses Dokument bietet eine ausführliche Erklärung des Generatorpolynoms, seiner Anwendung und seiner Bedeutung.

## Grundlagen

### Definition

Ein **Generatorpolynom** ist ein Polynom, das in der Codierungstheorie verwendet wird, um eine Menge von Codewörtern in einem zyklischen Code zu definieren. Es ist ein wesentliches Element bei der Erstellung von Fehlerkorrektur- und Fehlererkennungsverfahren.

### Mathematische Darstellung

Ein Polynom wird in der Form:

$$
g(x) = g_0 + g_1x + g_2x^2 + … + g_nx^n
$$

dargestellt, wobei $g_i$ die Koeffizienten sind und $x$ die Variable ist. Für ein Generatorpolynom sind die Koeffizienten binär (0 oder 1).

### Eigenschaften

- Das Generatorpolynom muss immer ein binäres Polynom sein.
- Es muss teilerfremd zum Polynom $x^n + 1$ sein, um sicherzustellen, dass die resultierenden Codewörter korrekt generiert werden.
- Es beginnt und endet immer mit einer 1 (also $g_0 = 1$ und $g_n = 1$).

## Anwendung in der Fehlererkennung und -korrektur

### Zyklische Redundanzprüfung (CRC)

CRC ist eine Methode zur Fehlererkennung, die häufig in Netzwerken und Speichergeräten verwendet wird. Hierbei wird das Generatorpolynom verwendet, um eine CRC-Prüfsumme zu berechnen, die an die Daten angehängt wird. Bei der Übertragung werden die empfangenen Daten mit dem gleichen Generatorpolynom überprüft, um sicherzustellen, dass keine Fehler aufgetreten sind.

### Berechnung der CRC-Prüfsumme

1. **Daten anhängen**: An die Daten $d(x)$ wird $n$ Nullen angehängt, wobei $n$ der Grad des Generatorpolynoms ist.
2. **Division**: Das erweiterte Datenpolynom wird durch das Generatorpolynom modulo 2 dividiert.
3. **Ergebnis**: Der Rest der Division ist die CRC-Prüfsumme, die an die ursprünglichen Daten angehängt wird.

### Beispiel

Angenommen, wir haben das Generatorpolynom $g(x) = x^3 + x + 1$ und die Daten $d(x) = 1101$:

1. **Daten anhängen**: $1101$ wird zu $1101000$ (Anhängen von 3 Nullen).
2. **Division**:
   `1101000 ÷ 1011 = 1011 (Rest 111)`
3. **Ergebnis**: Die Prüfsumme ist 111, und die übertragenen Daten sind $1101111$.

## Bedeutung und Auswahl des Generatorpolynoms

### Kriterien für die Auswahl

- **Länge**: Die Länge des Generatorpolynoms beeinflusst die Fähigkeit zur Fehlererkennung und -korrektur. Längere Polynome können mehr Fehler erkennen.
- **Erkennungsfähigkeit**: Das Generatorpolynom sollte in der Lage sein, häufige Fehlerarten wie Einzelbitfehler, Burstfehler und andere häufige Fehlermuster zu erkennen.

### Häufig verwendete Generatorpolynome

- **CRC-16**: $g(x) = x^{16} + x^{15} + x^2 + 1$
- **CRC-32**: $g(x) = x^{32} + x^{26} + x^{23} + x^{22} + x^{16} + x^{12} + x^{11} + x^{10} + x^8 + x^7 + x^5 + x^4 + x^2 + x + 1$

Diese Polynome sind standardisiert und weit verbreitet, da sie eine gute Balance zwischen Komplexität und Fehlererkennungsfähigkeit bieten.

## Implementierung

### Algorithmus zur Berechnung von CRC

1. **Initialisierung**: Setze das Datenpolynom und das Generatorpolynom.
2. **Anhängen von Nullen**: Hänge $n$ Nullen an das Datenpolynom an.
3. **Division**: Führe die Division des erweiterten Datenpolynoms durch das Generatorpolynom durch.
4. **Ergebnis**: Der Rest der Division ist die CRC-Prüfsumme.

### Beispielcode in Python

```python
def crc_remainder(input_bitstring, polynomial_bitstring, initial_filler):
    len_polynomial = len(polynomial_bitstring)
    initial_padding = initial_filler * (len_polynomial - 1)
    input_padded_array = list(input_bitstring + initial_padding)

    while '1' in input_padded_array[:len(input_bitstring)]:
        cur_shift = input_padded_array.index('1')
        for i in range(len_polynomial):
            input_padded_array[cur_shift + i] = str(
                int(input_padded_array[cur_shift + i]) ^ int(polynomial_bitstring[i])
            )

    return ''.join(input_padded_array)[len(input_bitstring):]

data = "1101"
polynomial = "1011"
crc = crc_remainder(data, polynomial, '0')
print("CRC Prüfsumme:", crc)
```

## Fazit

Das Generatorpolynom ist ein fundamentales Element in der Codierungstheorie, das zur Erzeugung und Überprüfung von Codewörtern in zyklischen Codes verwendet wird. Es ermöglicht die effiziente Erkennung und Korrektur von Fehlern in Datenübertragungen. Die Auswahl des richtigen Generatorpolynoms und die Implementierung effektiver CRC-Algorithmen sind entscheidend für die Zuverlässigkeit von Kommunikationssystemen.

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
