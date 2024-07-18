---
tags:
  - 4semester
  - FSK
  - informatik
  - Erklaerung
fach: "[[Formale Sprachen und Komplexität (FSK)]]"
Thema: "[[FSK-ÜB-6]]"
Benötigte Zeit:
date created: Tuesday, 28. May 2024, 21:20
date modified: Sunday, 9. June 2024, 17:43
---

# [Wiederholung](https://www.youtube.com/watch?v=R86rOalCYCc&ab_channel=Informatik-simpleclub)

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;"><iframe src="https://www.youtube.com/embed/gXtiX7TuP_I" title="YouTube video player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

# Kellerautomaten

> [!info] Kurzerklärung
> Ein Kellerautomat (Pushdown Automaton, PDA) ist ein spezieller Typ von endlichem Automaten, der zusätzlich einen Stack (Keller) als Speichermedium nutzt. Diese Erweiterung ermöglicht es dem Automaten, kontextfreie Sprachen zu akzeptieren. Der Kellerautomat kann auf Symbole auf dem Keller zugreifen und diese gemäß einer Übergangsfunktion manipulieren, um Eingaben zu verarbeiten und zu entscheiden, ob sie zu einer bestimmten Sprache gehören.

In der Theorie der formalen Sprachen wird ein Kellerautomat typischerweise als 6-Tupel definiert:

$$
M = (Z, \Sigma, \Gamma, \delta, z_0, \#)
$$

- **$Z$** ist eine endliche Menge von Zuständen.
- **$\Sigma$** ist das (endliche) Eingabealphabet.
- **$\Gamma$** ist das (endliche) Kelleralphabet.
- **$\delta$** ist die Übergangsfunktion:
  $$
   \delta : Z \times (\Sigma \cup \{\varepsilon\}) \times \Gamma \rightarrow \mathcal{P}(Z \times \Gamma^*)
  $$
- **$z_0$** ist der Startzustand.
- **$\#$** ist das Startsymbol im Keller.

## Funktionsweise eines Kellerautomaten

Ein Kellerautomat arbeitet, indem er die Eingabezeichen liest und gleichzeitig den Zustand und den Inhalt des Kellers entsprechend der Übergangsfunktion $\delta$ aktualisiert. Die Übergangsfunktion bestimmt, welche Aktionen der Automat ausführt, basierend auf dem aktuellen Zustand, dem aktuellen Eingabezeichen (oder dem leeren Wort $\varepsilon$), und dem Symbol am oberen Ende des Kellers. Der Automat akzeptiert eine Eingabe entweder durch Erreichen eines akzeptierenden Zustands oder durch Leeren des Kellers.

### Komponenten und Übergänge

1. **Zustände ($Z$)**: Diese repräsentieren die verschiedenen Konfigurationsmöglichkeiten des Automaten. Der Automat wechselt zwischen diesen Zuständen gemäß den Regeln der Übergangsfunktion.
2. **Eingabealphabet ($\Sigma$)**: Dies ist die Menge der Symbole, die der Automat aus der Eingabe lesen kann.
3. **Kelleralphabet ($\Gamma$)**: Dies ist die Menge der Symbole, die der Automat im Keller speichern kann.
4. **Übergangsfunktion ($\delta$)**: Diese Funktion beschreibt, wie der Automat von einem Zustand in einen anderen übergeht, wie er Symbole vom Keller entfernt und welche Symbole er auf den Keller schreibt.
5. **Startzustand ($z_0$)**: Der Zustand, in dem der Automat beginnt.
6. **Startkellersymbol ($\#$)**: Das Symbol, das initial im Keller liegt.

### Beispiel eines Kellerautomaten

Angenommen, wir haben die Sprache $L = \{a^{2n}\$a^n \mid n \in\mathbb{N}_{\gt0}\}$, die aus Wörtern besteht, bei denen vor einem Dollarzeichen \$ doppelt so viele $a$s wie danach stehen.

Ein Kellerautomat, der diese Sprache akzeptiert, könnte wie folgt definiert werden:

- **Zustände**: $Z = \{q_0, q_1, q_2, q_f\}$
- **Eingabealphabet**: $\Sigma = \{a, \$\}$
- **Kelleralphabet**: $\Gamma = \{a, \#\}$
- **Startzustand**: $z_0 = q_0$
- **Startkellersymbol**: $\#$
- **Akzeptierende Zustände**: $F = \{q_f\}$

#### Übergangsfunktion ($\delta$):

1. **Initiale Phase (Doppelte $a$s auf den Keller legen)**:

   - $\delta(q_0, a, \#) = \{(q_0, a\#)\}$
   - $\delta(q_0, a, a) = \{(q_0, aa)\}$

2. **Dollarzeichen erkennen**:

   - $\delta(q_0, \$, a) = \{(q_1, a)\}$

3. **$a$s nach dem Dollarzeichen verarbeiten**:

   - $\delta(q_1, a, a) = \{(q_1, \varepsilon)\}$

4. **Keller entleeren und akzeptieren**:
   - $\delta(q_1, \varepsilon, \#) = \{(q_f, \#)\}$

#### Erklärung der Funktionsweise:

1. **Phase 1 (Initiale Phase)**:

   - Der Automat beginnt im Zustand $q_0$ und liest $a$s, wobei er jedes $a$ auf den Keller legt. Dadurch wird sichergestellt, dass die Anzahl der $a$s im Keller doppelt so groß ist wie die Anzahl der $a$s, die nach dem Dollarzeichen gelesen werden müssen.

2. **Phase 2 (Dollarzeichen erkennen)**:

   - Sobald der Automat das Dollarzeichen $\$$ liest, wechselt er in den Zustand $q_1$, um die nachfolgenden $a$s zu verarbeiten.

3. **Phase 3 (Nachfolgende $a$s verarbeiten)**:

   - Im Zustand $q_1$ liest der Automat jedes $a$ und entfernt ein $a$ vom Keller. Dies stellt sicher, dass die Anzahl der $a$s nach dem Dollarzeichen korrekt ist.

4. **Phase 4 (Akzeptieren)**:
   - Wenn alle $a$s nach dem Dollarzeichen verarbeitet wurden und der Keller das Startsymbol $\#$ enthält, wechselt der Automat in den akzeptierenden Zustand $q_f$ und akzeptiert die Eingabe.

### Fazit

Ein Kellerautomat erweitert die Fähigkeiten eines endlichen Automaten durch die Nutzung eines Stacks, was ihn besonders mächtig für die Erkennung kontextfreier Sprachen macht. Durch die Verwendung des Kellers kann der Automat eine größere Bandbreite an Sprachen verarbeiten, indem er sich an eine theoretisch unendliche Menge von Informationen erinnert und diese entsprechend manipuliert.

Indem Sie diesen Aufbau und die Übergangsregeln verstehen, können Sie komplexe formale Sprachen definieren und Automaten entwickeln, die diese Sprachen korrekt akzeptieren.

---

# Kellerautomat aufstellen

> [!tip] Ablauf zur Erstellung eines Kellerautomaten
>
> 1. **Bestimmen Sie das Eingabealphabet**: Legen Sie die Menge der Terminalsymbole fest, die in der Sprache verwendet werden können.
> 2. **Identifizieren Sie die Sprachstruktur**: Überlegen Sie, welche Muster und Strukturen in der Sprache vorhanden sein sollen. Handelt es sich um einfache Wiederholungen, Verschachtelungen, spezielle Sequenzen oder andere Regularitäten?
> 3. **Definieren Sie die Zustände**: Bestimmen Sie eine endliche Menge von Zuständen, die der Automat durchlaufen kann.
> 4. **Bestimmen Sie das Kelleralphabet**: Legen Sie die Menge der Symbole fest, die im Keller verwendet werden können.
> 5. **Wählen Sie den Startzustand und das Startkellersymbol**: Bestimmen Sie den Zustand, in dem der Automat beginnt, und das Symbol, das initial im Keller liegt.
> 6. **Entwickeln Sie die Übergangsfunktion**: Schreiben Sie eine Reihe von Regeln, die festlegen, wie der Automat anhand des aktuellen Zustands, des gelesenen Eingabezeichens und des Kellersymbols den neuen Zustand und die Kelleroperation bestimmt.
> 7. **Definieren Sie die akzeptierenden Zustände**: Bestimmen Sie, welche Zustände akzeptierend sind und unter welchen Bedingungen die Eingabe akzeptiert wird.
> 8. **Überprüfen Sie den Automat**:
>    - Stellen Sie sicher, dass der Automat alle Wörter der Sprache akzeptieren kann.
>    - Prüfen Sie, ob der Automat keine Wörter akzeptiert, die nicht zur Sprache gehören.
> 9. **Dokumentieren Sie den Automat**: Erklären Sie die Funktion jeder Übergangsregel und wie sie zur Verarbeitung der Sprache beiträgt.

Indem Sie diesen Ablauf befolgen, können Sie einen klaren und präzisen Kellerautomaten erstellen, der eine formale Sprache innerhalb des Rahmens der formalen Sprachtheorie akzeptiert.

## Beispiel aus [[FSK-ÜB-6#b) Geben Sie einen Kellerautomaten an, der $L$ akzeptiert (mit leerem Keller oder mit Endzuständen). Erklären Sie kurz, warum Ihr Automat genau $L$ akzeptiert.]]

Um die angegebene Aufgabe zu lösen, bei der ein Kellerautomat für die Sprache $L = \{a^{2n}\$a^n \mid n \in \mathbb{N}_{\gt0}\}$ erstellt werden soll, gehen Sie folgendermaßen vor:

1. **Definieren Sie das Eingabealphabet:** Hier ist das Eingabealphabet $\Sigma = \{a, \$\}$ bereits gegeben.

2. **Identifizieren Sie das Muster der Sprache:** Die Sprache $L$ besteht aus einer Sequenz von $2n$ 'a's, gefolgt von einem '$', gefolgt von $n$ 'a's. Dabei ist $n$ eine positive natürliche Zahl.

3. **Erstellen Sie die Zustände:** Für die Sprache $L$ benötigen Sie eine Menge von Zuständen $Z = \{q_0, q_1, q_f\}$.

4. **Bestimmen Sie das Kelleralphabet:** Das Kelleralphabet $\Gamma$ könnte aus den Symbolen $\{a, \#\}$ bestehen, wobei $\#\` das Startkellersymbol ist.

5. **Wählen Sie den Startzustand und das Startkellersymbol:** Der Startzustand ist $z_0 = q_0$ und das Startkellersymbol ist $\#$.

6. **Entwickeln Sie die Übergangsfunktion:**

   - **Initiale Phase (Doppelte $a$s auf den Keller legen)**:
     - $\delta(q_0, a, \#) = \{(q_0, a\#)\}$
     - $\delta(q_0, a, a) = \{(q_0, aa)\}$
   - **Dollarzeichen erkennen**:
     - $\delta(q_0, \$, a) = \{(q_1, a)\}$
   - **$a$s nach dem Dollarzeichen verarbeiten**:
     - $\delta(q_1, a, a) = \{(q_1, \varepsilon)\}$
   - **Keller entleeren und akzeptieren**:
     - $\delta(q_1, \varepsilon, \#) = \{(q_f, \#)\}$

7. **Definieren Sie die akzeptierenden Zustände:** Der akzeptierende Zustand ist $q_f$.

> [!help] Erklärung der Übergangsregeln
>
> - **$\delta(q_0, a, \#) = \{(q_0, a\#)\}$**: Wenn der Automat im Zustand $q_0$ ist, ein 'a' liest und das Kellersymbol $\#$ sieht, dann bleibt er im Zustand $q_0$ und schiebt ein 'a' auf den Keller.
> - **$\delta(q_0, a, a) = \{(q_0, aa)\}$**: Wenn der Automat im Zustand $q_0$ ist, ein 'a' liest und ein 'a' auf dem Keller liegt, dann bleibt er im Zustand $q_0$ und schiebt ein weiteres 'a' auf den Keller.
> - **$\delta(q_0, \$, a) = \{(q_1, a)\}$**: Wenn der Automat im Zustand $q_0$ ist, ein '$' liest und ein 'a' auf dem Keller liegt, dann wechselt er in den Zustand $q_1$ und behält das 'a' auf dem Keller.
> - **$\delta(q_1, a, a) = \{(q_1, \varepsilon)\}$**: Wenn der Automat im Zustand $q_1$ ist, ein 'a' liest und ein 'a' auf dem Keller liegt, dann bleibt er im Zustand $q_1$ und entfernt das 'a' vom Keller.
> - **$\delta(q_1, \varepsilon, \#) = \{(q_f, \#)\}$**: Wenn der Automat im Zustand $q_1$ ist und das Kellersymbol $\#$ sieht, dann wechselt er in den Zustand $q_f$ und akzeptiert die Eingabe.

Zusammengenommen bedeuten diese Regeln, dass der Automat mit dem Lesen der $a$s beginnt und diese auf den Keller legt, bis er das '$' liest. Nach dem Lesen des '$' wechselt der Automat in den Zustand $q_1$ und entfernt die 'a's vom Keller, während er die verbleibenden 'a's in der Eingabe liest. Wenn der Keller leer ist und das Startkellersymbol $\#$ erreicht wird, akzeptiert der Automat die Eingabe.

Indem Sie diesen Ablauf befolgen, können Sie einen Kellerautomaten erstellen, der die Sprache $L$ akzeptiert, indem er die Struktur der Eingabezeichenfolge überprüft und die korrekte Anzahl und Reihenfolge der Symbole sicherstellt.

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
