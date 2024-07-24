---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Sunday, 14. July 2024, 19:49
date modified: Monday, 15. July 2024, 00:30
---

# Zyklische Redundanzprüfung (CRC)

Die zyklische Redundanzprüfung (CRC) ist eine Methode zur Fehlererkennung in digitalen Netzwerken und Speichersystemen. Sie dient dazu, Übertragungsfehler zu erkennen und sicherzustellen, dass die empfangenen Daten korrekt sind. In diesem Dokument werden die Grundlagen, Funktionsweise, Anwendungen und die Implementierung von CRC ausführlich beschrieben.

## Grundlagen

### Definition

CRC ist ein Verfahren, bei dem zu den zu übertragenden Daten eine Prüfsumme hinzugefügt wird. Diese Prüfsumme wird auf der Basis eines Generatorpolynoms berechnet und dient dazu, Übertragungsfehler zu erkennen. Die Empfängerseite berechnet die Prüfsumme erneut und vergleicht sie mit der empfangenen Prüfsumme, um festzustellen, ob Fehler aufgetreten sind.

### Mathematische Grundlage

CRC basiert auf der Division im Galois-Feld $GF(2)$, wobei sowohl die Daten als auch das Generatorpolynom als binäre Polynome behandelt werden. Die Berechnung der Prüfsumme erfolgt durch Polynomdivision.

## Funktionsweise

### Berechnung der CRC-Prüfsumme

1. **Daten anhängen**: An die zu übertragenden Daten $d(x)$ werden $n$ Nullen angehängt, wobei $n$ der Grad des Generatorpolynoms ist.
2. **Polynomdivision**: Das erweiterte Datenpolynom wird durch das Generatorpolynom modulo 2 dividiert.
3. **Prüfsumme**: Der Rest der Division ist die CRC-Prüfsumme, die an die ursprünglichen Daten angehängt wird.

### Beispiel

Angenommen, das [[Generatorpolynom]] ist $g(x) = x^3 + x + 1$ und die Daten sind $d(x) = 1101$:

1. **Daten anhängen**: $1101$ wird zu $1101000$ (Anhängen von 3 Nullen).
2. **Division**:
   ```
   1101000 ÷ 1011 = 1011 (Rest 111)
   ```
3. **Ergebnis**: Die Prüfsumme ist 111, und die übertragenen Daten sind $1101111$.

## Anwendungen

### Netzwerke

CRC wird in vielen Netzwerkprotokollen verwendet, um die Integrität der übertragenen Daten zu gewährleisten. Beispiele sind Ethernet, Wi-Fi und USB.

### Speichergeräte

In Speichersystemen wie Festplatten, SSDs und RAID-Systemen wird CRC verwendet, um sicherzustellen, dass die Daten korrekt geschrieben und gelesen werden.

### Kommunikationssysteme

In Kommunikationssystemen wie Satellitenkommunikation, Mobilfunknetzen und digitalen Rundfunkstandards wird CRC verwendet, um Übertragungsfehler zu erkennen.

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

### Interpretation des Codes

- **crc_remainder**: Diese Funktion berechnet die CRC-Prüfsumme.
- **input_bitstring**: Die Eingabedaten als Bit-String.
- **polynomial_bitstring**: Das Generatorpolynom als Bit-String.
- **initial_filler**: Der Initialwert, um das Datenpolynom aufzufüllen.

## Vorteile von CRC

- **Effizienz**: CRC ist effizient in der Berechnung und Implementierung.
- **Genauigkeit**: CRC kann viele Arten von Fehlern, einschließlich Burst-Fehler, erkennen.
- **Weit verbreitet**: CRC ist in vielen Protokollen und Systemen standardisiert und weit verbreitet.

## Nachteile von CRC

- **Keine Fehlerkorrektur**: CRC kann Fehler nur erkennen, aber nicht korrigieren.
- **Begrenzte Fehlererkennung**: Bei sehr langen Datenströmen können einige Fehler unentdeckt bleiben.

## Fazit

CRC ist eine bewährte und weit verbreitete Methode zur Fehlererkennung in der Datenübertragung und Datenspeicherung. Durch die Verwendung eines Generatorpolynoms kann CRC effizient Prüfsummen berechnen, die helfen, Übertragungsfehler zu erkennen und die Integrität der Daten zu gewährleisten. Trotz seiner Einschränkungen bleibt CRC ein unverzichtbares Werkzeug in der modernen Kommunikationstechnologie.

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
