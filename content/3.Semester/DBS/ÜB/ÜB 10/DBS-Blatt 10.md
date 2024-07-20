---
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Thursday, 4. April 2024, 15:04
date modified: Saturday, 6. April 2024, 02:04
Thema:
  - "[[Normalformen und Synthesealgorithmus]]"
  - "[[Anomalien in Datenbanksystemen]]"
---

# Datenbank Schema für Gebrauchtwagen

Der Autohändler Huber möchte seinen Bestand gebrauchter Wagen in einem relationalen Datenbanksystem organisieren. Die Anforderungsanalyse ergibt eine ganze Liste zu speichernder Informationen für jedes Fahrzeug, die Huber direkt in ein relationales Schema umsetzt. Sofort beginnt er mit der Erfassung seiner Daten und erhält die folgende Relation `Auto`:

| <u>mnr</u> | hnr | hersteller | typ    | ps  | <u>fznr</u> | baujahr | km-stand | n-preis | h-preis | ek-preis |
| ---------- | --- | ---------- | ------ | --- | ----------- | ------- | -------- | ------- | ------- | -------- |
| 1          | 1   | Opel       | Kadett | 60  | K674        | 1990    | 10000    | 18000   | 13000   | 12000    |
| 1          | 1   | Opel       | Kadett | 60  | K634        | 1988    | 34000    | 18000   | 12000   | 9000     |
| 2          | 1   | Opel       | Vectra | 90  | V459        | 1990    | 15000    | 25000   | 18000   | 17000    |
| 3          | 1   | Opel       | Omega  | 110 | O634        | 1987    | 45000    | 30000   | 22000   | 15000    |
| 4          | 2   | VW         | Golf   | 90  | G789        | 1991    | 11000    | 25000   | 21000   | 16000    |
| 4          | 2   | VW         | Golf   | 90  | G713        | 1991    | 31000    | 25000   | 16000   | 13000    |
| 5          | 2   | VW         | Golf   | 105 | G762        | 1992    | 28000    | 28000   | 19000   | 17000    |
| 6          | 2   | VW         | Käfer  | 60  | K634        | 1986    | 71000    | 19000   | 10000   | 8000     |

Die verschiedenen Modelle werden von Huber fortlaufend nummeriert (`mnr`). Ein bestimmtes Model ist charakterisiert durch Hersteller, Typ und Motorleistung (`ps`). Für jedes Model ist ferner die Fahrzeugnummer (`fznr`) eindeutig. Beide Attribute zusammen werden daher also Primärschlüssel gewählt. Nach kurzer Zeit stellt Huber fest, dass ihm seine neue Datenbank nicht so recht Freude machen will, die Datenmodellierung scheint nicht gut durchdacht.

# Aufgabe 10-1 **Problem bei nicht normalisierten DB**

> [!note] Aufgabenstellung
> Beschreiben Sie die Problem (Redundanzen, Anomalien), die bei Nutzung des o.g. Relationenschemas in der Datenbank des Autohandlers auftreten können.

- [[Anomalien in Datenbanksystemen#Redundanz]]:
  - `Hersteller` und `hnr` geben beide die gleiche Information wieder und sind somit redundant.
  - `mnr` und `typ` geben auch die gleichen Daten wieder.
  - `ps` ist redundant, da es für jede `mnr` und `typ` die gleiche Information speichert.
- [[Anomalien in Datenbanksystemen#Einfügeanomalie]]:
  - Man kann beispielsweise keinen Hersteller hinzufügen, ohne dass diesem ein Typ vom Auto zugewiesen wird (partielle Einfügung nicht möglich).
- [[Anomalien in Datenbanksystemen#Entfernungsanomalie]]:
  - Man kann keinen Typ vom Auto löschen, ohne auch Informationen über den Hersteller zu verlieren.
- [[Anomalien in Datenbanksystemen#Änderungsanomalie]]:
  - Änderungen der PS eines Modells müssen in allen Tupeln eingetragen werden, oder bei Änderungen des Namens des Herstellers müssen alle Tuple geändert werden.

---

# Aufgabe 10-2 [[Normalformen und Synthesealgorithmus#2. Normalform (2NF)]]

> [!note] Aufgabenstellung
> Die Menge der vollen und nicht-trivialen funktionalen Abhängigkeiten sei im Folgenden gegeben durch:
>
> - mnr → hnr, hersteller, typ, ps
> - hnr → hersteller
> - mnr, fznr → baujahr, km-stand, n-preis, h-preis, ek-preis

### a) Erläutern Sie, warum das gegebene Schema nicht der 2. Normalform (2.NF) genügt. \[[[Normalformen und Synthesealgorithmus#2. Normalform (2NF)]]]

**2. NF besagt:** - Für jedes Attribute A gilt: - _A ist primär_ oder - _A ist voll funktional abhängig von jedem Schlüsselkandidaten._

- Schlüsselkandidaten sind $SK = \{mnr,fznr\}$
- Voll funktionale Attribute, die von jedem Schlüsselkandidaten abhängig sind, sind $A=\{baujahr, km-stand, n-preis, h-preis, ek-preis\}$

→ Attribute die keine Schlüsselkandidaten sind, sind also $R=\{hnr,hersteller,typ,ps\}$
Da es also Attribute gibt die nicht prim oder voll funktional abhängig von jedem Schlüsselkandidaten sind und $|R| \neq 0$, ist die **2.NF nicht erfüllt**

### b) Überführen Sie die Relation in die 2.NF und geben Sie die so entstehenden Relationen an.

1. Relation: `Modell` - Erstelle eine neue Relation für jeden partiellen Schlüssel mit seinen abhängigen Attribute - **mnr → hnr, hersteller, typ, ps** - **hnr → hersteller**
   $$Modell(\underline{mnr},hnr,hersteller, typ, ps)$$
2. Relation: `Fahrzeug` - Attribute, die voll funktional vom (ursprünglichen) Schlüssel abhängig sidn, bleiben in der ursprünglichen Relation - **mnr, fznr → baujahr, km-stand, n-preis, h-preis, ek-preis**
   $$Fahrzeug(\underline{mnr},\underline{fznr},baujahr,km-stand, n-preis, h-preis, ek-preis)$$

---

# Aufgabe 10-3 **[[Normalformen und Synthesealgorithmus#3. Normalform (3NF)]]**

> [!note] Aufgabenstellung
> Falls das in Aufgabe 10-2 entstandene Relationenschema noch nicht der **3. Normalform (3.NF)** genügt, führen Sie dieses in die 3.NF über und geben Sie die so entstehenden Relationen an. Andernfalls begründen Sie, warum das Relationenschema aus Aufgabe 10-2 bereits der 3.NF genügt.
>
> - mnr → hnr, hersteller, typ, ps
> - hnr → hersteller
> - mnr, fznr → baujahr, km-stand, n-preis, h-preis, ek-preis

**3.NF besagt:**

- _2.NF ist erfüllt._
- _Für alle nicht-trivialen funktionalen Abhängigkeiten 𝑋 → 𝑌 muss 𝑋 einen Schlüsselkandidaten enthalten_, oder
- _𝑌 muss ein Primärattribut sein._

Basierend auf der Musterlösung und der Analyse der Relationen aus Aufgabe 10-2 erkennen wir, dass die Relation **Fahrzeug** bereits der 3. Normalform entspricht. Die Relation **Model** hingegen erfüllt die 3. Normalform nicht, da die funktionale Abhängigkeit `hnr → hersteller` eine transitive Abhängigkeit darstellt, die in 3NF nicht zulässig ist. Um das Schema vollständig in die 3. Normalform zu überführen, wird folgende Anpassung vorgenommen:

### Korrigierte und ergänzte Relationen für 3NF:

1. **Relation Fahrzeug** bleibt unverändert, da sie bereits die 3NF Kriterien erfüllt:$$Fahrzeug(\underline{mnr}, \underline{fznr}, baujahr, km-stand, n-preis, h-preis, ek-preis)$$
   $$\underbrace{\underbrace{mnr,fznr}_{Schlüsselkandidaten}→ baujahr, km-stand, n-preis, h-preis, ek-preis}_{Erfüllt \ 3.NF}$$

2. **Relation Model** wird angepasst, um die transitive Abhängigkeit zu entfernen. Dazu wird die Abhängigkeit `hnr → hersteller` in eine eigene Relation extrahiert:
   $$ Modell(\underline{mnr}, hnr, typ, ps)$$
$$\underbrace{hnr → hersteller}\_{\text{Erfüllt nicht 3. NF, da linke Seite kein Schlüsselkandidat bzw. rechts kein primäres Attribut}}$$

3. **Neue Relation Hersteller** wird eingeführt, um die transitive Abhängigkeit aufzulösen:
   $$ Hersteller(\underline{hnr}, hersteller)$$

Durch diese Änderung wird sichergestellt, dass:

- Jedes Attribute in **Fahrzeug** und **Model** entweder ein Primärattribut ist oder voll funktional von dem Primärschlüssel abhängt, ohne transitive Abhängigkeiten.
- Die neue Relation **Hersteller** speichert die Zuordnung zwischen `hnr` und `hersteller`, wobei `hersteller` direkt von `hnr` abhängig ist und somit die 3NF erfüllt.

### Zusammenfassend:

Das überarbeitete Schema erfüllt nun die Kriterien der 3. Normalform. Es wurden alle transitiven Abhängigkeiten entfernt, indem die Informationen in separate Relationen aufgeteilt wurden, wodurch die Datenintegrität und die Reduktion von Redundanzen verbessert werden.

$$\text{Fahrzeug}(\underline{\text{mnr}}, \underline{\text{fznr}}, \text{baujahr}, \text{km-stand}, \text{n-preis}, \text{h-preis}, \text{ek-preis})$$
$$\text{Modell}(\underline{\text{mnr}}, \text{hnr}, \text{typ}, \text{ps})$$
$$\text{Hersteller}(\underline{\text{hnr}}, \text{hersteller})$$

> 1. Für die funktionale Abhängigkeit innerhalb der **Relation Model**:
>    $$\underbrace{mnr \rightarrow hnr, hersteller, typ, ps}_{\text{Erfüllt \ 3.NF, da die linke Seite (mnr) ein Schlüsselkandidat ist}}$$

> 2. Für die funktionale Abhängigkeit, die durch die **Relation Hersteller** adressiert wird:
>    $$\underbrace{hnr \rightarrow hersteller}_{\text{Erfüllt \ 3.NF, da die linke Seite (hnr) ein Schlüsselkandidat der Relation Hersteller ist}}$$

> 3.  Für die funktionale Abhängigkeit innerhalb der **Relation Fahrzeug**:
>     $$\underbrace{\underbrace{mnr, fznr}_{\text{Schlüsselkandidaten}} \rightarrow baujahr, km-stand, n-preis, h-preis, ek-preis}_{\text{Erfüllt \ 3.NF}}$$

---

# Aufgabe 10-4 [[Normalformen und Synthesealgorithmus#Boyce–Codd Normalform (BCNF)]]

> [!note] Aufgabenstellung
> Geben Sie ein beliebiges Beispiel an, bei dem das Einhalten der 3.NF noch nicht zu einem "guten" Datenbankdesign führt, sondern erst die Zerlegung in ein der Boyce-Codd-NF genügendes Schema alle Redundanzen beseitigt.

**Beispiel:**
$$FLS=\{\underline{Fach},Lehrer,\underline{Schüler}\}$$
_Es gilt:_

- Jeder Schüler hat einen Lehrer pro Fach:
  - 𝑆𝑐ℎü𝑙𝑒𝑟, 𝐹𝑎𝑐ℎ → 𝐿𝑒ℎ𝑟𝑒r
- Jeder Lehrer Vertritt nur ein Fach (aber zu jedem Fach kann es mehrere Lehrer geben:
  - 𝐿𝑒ℎ𝑟𝑒𝑟 → 𝐹𝑎𝑐ℎ
  - X ist primär aber Y primär → <span style="color:red">Kein BCNF</span> [[Normalformen und Synthesealgorithmus#Boyce-Codd-Normalform (BCNF)|(siehe Merkhilfe)]]

_Schlüsselkandidaten sind:_
$$SKs = \{\{Schüler,Fach\},\{Schüler, Lehrer\}\}$$

_Diese funktionalen Abhängigkeiten führen zu den Schlüsselkandidaten:_

- {Schüler, Fach}, weil ein Schüler für jedes Fach genau einen Lehrer hat. Dieses Attributpaar kann jede Tuple in der Relation eindeutig identifizieren.
- {Schüler, Lehrer}, weil, obwohl ein Lehrer nur ein Fach unterrichtet, ein Schüler bei verschiedenen Lehrern in unterschiedlichen Fächern sein kann. Daher kann die Kombination aus Schüler und Lehrer auch jede Tuple eindeutig identifizieren.

## Normalformen:

#### 2.NF: Jedes Attribute ist prim

#### 3NF: ((Schüler,Fach) Enthält SK und Fach ist prim) -> auch 2NF und 1NF

#### BCNF: (Lehrer enthält keinen SK) → <span style="color:red">Kein BCNF</span>

## Anomalien:

- Einfügen: kein Lehrer mit zugehörigem Fach ohne Schüler
- Entfernen: mit letztem Schüler wird Info über Lehrer und Fach gelöscht

## BCNF:

Die Relationen in BCNF sind:

$$LehrerFach(\underline{Lehrer}, Fach)$$
$$ SchülerLehrer(\underline{Schüler}, \underline{Lehrer})$$
$$\rightarrow Nicht abhängigkeitserhaltend$$

### Was bedeutet "nicht abhängigkeitserhaltend"?

Eine Zerlegung einer Relation in eine Normalform ist "nicht abhängigkeitserhaltend", wenn nach der Zerlegung nicht alle ursprünglichen funktionalen Abhängigkeiten direkt in den zerlegten Relationen abgebildet werden können. Das bedeutet, dass manche funktionalen Abhängigkeiten möglicherweise nur durch das Joinen mehrerer Relationen rekonstruiert werden können. Dies kann die Integrität und die Konsistenz der Datenbank beeinträchtigen, da zusätzliche Einschränkungen erforderlich sind, um sicherzustellen, dass die ursprünglichen Abhängigkeiten gewahrt bleiben.

---

# Aufgabe 10-5 [[Normalformen und Synthesealgorithmus#Synthesealgorithmus]]

> [!note] Aufgabenstellung
> Gegeben sei das Relationenschema `R(A, B, C, D, E, F)`, sowie die Menge `F` der zugehörigen
> nicht-trivialen funktionalen Abhängigkeiten:
> `{ C, A → D ; C → F, D ; B → A, E ; E → F, A }`

### a) Begründen Sie, warum `{B, C}` der einzige Schlüsselkandidat ist.

#### Gedankengang:

Abzudecken sind: $A,B,C,D,E,F$

- $B$ deckt folgende ab: $A,E$
- welche wiederum folgende abdecken: $D,F$
- Es fällt also weg $\not A,\not B, C,\not D,\not E,\not F$ und es bleibt nur noch C übrig was keine Herleitung hat
- Dies hat zur Folge, dass C auch ein Schlüsselkandidat werden muss
- B und C sind die Minimalsten Attribute die alle anderen abdecken.

#### Formelle Schreibweise:

$$
\mathcal{F} = \{C, A \rightarrow D \;|\; C \rightarrow F, D \;|\; B \rightarrow A, E \;|\; E \rightarrow F, A\}
$$

1. **Eindeutigkeit:**
   $$\text{AttrHülle}(F,\{B,C\}) = \{B,C,F,D,A,E\}$$
2. **Minimalität**
   $$
   \text{AttrHülle}(F,\{B\}) = \{B,A,E,F\} \neq \{A,B,C,D,E,F\}
   $$
   $$
   \text{AttrHülle}(F,\{C\}) = \{C,F,D\} \neq \{A,B,C,D,E,F\}
   $$
   $$\text{Weder B noch C lassen sich herleiten (stehen nur auf linker Seite)}$$

### b) Bringen Sie das Relationenschema R mithilfe des Synthesealgorithmus in die 3. Normalform. Führen Sie jeden Schritt (inklusive Teilschritte) des Algorithmus durch, begründen Sie diesen kurz (Attributhüllen bei Links- und Rechtsreduktion, etc.) und kennzeichnen Sie Stellen, an denen nichts zu tun ist, deutlich.

#### 1. Bestimmung der kanonischen Überdeckung 𝐹𝑐 zu 𝐹

$$F = \{ C, A \rightarrow D \ | \ C \rightarrow F, D \ | \ B \rightarrow A, E \ | \ E \rightarrow F, A \}$$

- $C,A → D$
- $C → F,D$
- $B → A,E$
- $E → F,A$

#### a) Linksreduktion

1. $(C,A → D) \ \text{ist überflüssig}$

   - wird zu $C →D$ da gilt:
     - $D \in (F,\{C,A\}-A)=\{C,F,D\}$
     - auch ohne A wird D abgedeckt durch C in 2.

2. $(C → F,D) \  \text{ist nötig}$

3. $(B → A,E) \ \text{ist nötig}$

4. $(E → F,A) \ \text{ist nötig}$

#### b) Rechtsreduktion

1. $(C →D)$

   - wird zu $(C → \emptyset)$ da:

   - $D \in AttrHülle((F-(C→D)\cup(C→\emptyset),\{C\}) = \{C,F,D\}$

   - D wird abgedeckt durch _2._

2. $(C → F,D)$

3. $(B → A,E)$

   - wird zu $B →E$

   - $A \in AttrHülle((F-(B→A,E)\cup(B→E),{B})=\{B,E,F,A\}$

   - A wird abgedeckt durch _4._

4. $(E → F,A)$

#### c) Entfernung von rechtsleeren Abhängigkeiten

$$F=\{C→\emptyset \ | \ C → F,D \ | \ B→E \ | \ E→F,A \}$$
$$\text{wird zu}$$
$$F=\{\ C → F,D \ | \ B→E \ | \ E→F,A \}$$

#### d) Zusammenfassen von Abhängigkeiten mit gleicher linker Seite

$$F=\{\ C → F,D \ | \ B→E \ | \ E→F,A \}$$
$$Nix \  zu \  tun$$
$$\Longrightarrow F_c=\{\ C → F,D \ | \ B→E \ | \ E→F,A \}$$

#### 2. Erzeugen eines neues Relationenschemas aus 𝐹𝑐

- $R_1(\underline C,F,D) → F_1=\{C→F,D\}$

- $R_2(\underline B,E) → F_2=\{B→E\}$

- $R_3(\underline E,F,A) → F_3=\{E→F,A\}$

#### 3. Rekonstruktion eines Schlüsselkandidaten:

Neue Relation für Schlüsselkandidaten $\{𝐵, 𝐶\}$

$$\Longrightarrow R_4(\underline{B},\underline{C}) → F_4=\emptyset$$

#### 4. Elimination überflüssiger Relationen

In diesem Schritt nix zu tun

**Finale Relationen:**

- $R_1(\underline C,F,D)$

- $R_2(\underline B,E)$

- $R_3(\underline E,F,A)$

- $R_4(\underline{B},\underline{C})$

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
