---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 30. October 2024, 19:51
date modified: Wednesday, 30. October 2024, 21:31
---

# **Multiple-Choice-Fragen (MC) und Lückentextfragen (LT)**

## **1. Vom Quelltext zur ausführbaren Datei**

**MC1:** Welche Schritte durchläuft der Quellcode, um eine ausführbare Datei in C zu werden?

- A) Quellcode → Compiler → Interpreter → Ausführbare Datei
- B) Quellcode → Präprozessor → Übersetzer → Assembler → Linker → Ausführbare Datei
- C) Quellcode → Editor → Compiler → Ausführbare Datei
- D) Quellcode → Präprozessor → Interpreter → Ausführbare Datei

> [!success]- Lösung
>
> - **B) Quellcode → Präprozessor → Übersetzer → Assembler → Linker → Ausführbare Datei**: Dies sind die korrekten Schritte, die der Quellcode durchläuft, um eine ausführbare Datei zu erzeugen.

## **2. GNU Compiler Collection**

**LT1:** Die GNU Compiler Collection (`gcc`) umfasst die Phasen **\_\_\_\_\_\_**, **\_\_\_\_\_\_**, **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **Präprozessor**, **Übersetzer**, **Assembler**, **Linker**

## **3. Typische Parameter**

**MC2:** Welche der folgenden `gcc`-Optionen wird verwendet, um alle Warnungen anzuzeigen?

- A) -o
- B) -Wall
- C) -g
- D) -std=c99

> [!success]- Lösung
>
> - **B) -Wall**: Die Option `-Wall` aktiviert alle gängigen Warnungen beim Kompilieren mit `gcc`.

## **4. Modularisierung**

**LT2:** Bei der Modularisierung wird das System in **\_\_\_\_\_\_** aufgeteilt, die durch **\_\_\_\_\_\_** getrennt sind, um **\_\_\_\_\_\_** und **\_\_\_\_\_\_** zu erreichen.

> [!success]- Lösung
>
> - **Module**, **Schnittstellen**, **low coupling**, **high cohesion**

## **5. Headerdateien I**

**MC3:** Welche der folgenden ist eine Standard-Headerdatei in C?

- A) `stdio.h`
- B) `mylib.h`
- C) `custom.h`
- D) `header.h`

> [!success]- Lösung
>
> - **A) `stdio.h`**: `stdio.h` ist eine Standard-Headerdatei in C, die Funktionen für die Ein- und Ausgabe bereitstellt.

## **6. Headerdateien II**

**LT3:** Headerdateien können Deklarationen, **\_\_\_\_\_\_**, **\_\_\_\_\_\_** und **\_\_\_\_\_\_** enthalten.

> [!success]- Lösung
>
> - **Konstanten**, **Makros**, **Typdefinitionen**

## **7. Eigene Headerdateien**

**MC4:** Wozu dienen eigene Headerdateien in einem C-Projekt?

- A) Zur Implementierung von Funktionen
- B) Zur Definition von Strukturen und Deklarationen
- C) Zur Speicherung von Daten
- D) Zur Ausführung von Programmen

> [!success]- Lösung
>
> - **B) Zur Definition von Strukturen und Deklarationen**: Eigene Headerdateien werden verwendet, um Strukturen, Funktionsdeklarationen und andere Schnittstellendefinitionen zu speichern.

## **8. Include Guards**

**LT4:** Include Guards schützen vor mehrfacher Inklusion durch die Verwendung von **\_\_\_\_\_\_** oder **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **`#ifndef`**, **`#pragma once`**

## **9. Eigene Headerdateien (Fortsetzung)**

**MC5:** Wie bindet man eine eigene Headerdatei namens `myheader.h` in ein C-Programm ein?

- A) `#include <myheader.h>`
- B) `#import "myheader.h"`
- C) `#include "myheader.h"`
- D) `#define myheader.h`

> [!success]- Lösung
>
> - **C) `#include "myheader.h"`**: Eigene Headerdateien werden üblicherweise mit Anführungszeichen eingebunden.

## **10. Übersicht Modularisierung**

**LT5:** Beim Kompilieren eines modularisierten Programms werden die Module und Headerdateien mit dem **\_\_\_\_\_\_** und **\_\_\_\_\_\_** zusammengefügt.

> [!success]- Lösung
>
> - **Compiler**, **Linker**

## **11. Statische Bibliotheken**

**MC6:** Welche `gcc`-Option wird verwendet, um eine statische Bibliothek mit `ar` zu erstellen?

- A) `-shared`
- B) `-static`
- C) `ar rcs`
- D) `gcc -o`

> [!success]- Lösung
>
> - **C) `ar rcs`**: `ar rcs` wird verwendet, um eine statische Bibliothek zu erstellen.

## **12. Dynamische Bibliotheken**

**LT6:** Um eine dynamische Bibliothek mit `gcc` zu erstellen, verwendet man die Option **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **`-shared`**

## **13. Bibliotheken integrieren**

**MC7:** Wie gibt man den Pfad zu einer Bibliothek beim Kompilieren mit `gcc` an?

- A) `-I`
- B) `-L`
- C) `-l`
- D) `-D`

> [!success]- Lösung
>
> - **B) `-L`**: Die Option `-L` gibt den Pfad zu einer Bibliothek an.

## **14. Typische Linkerfehler I**

**LT7:** Ein häufiger Linkerfehler ist das Fehlen der **\_\_\_\_\_\_**, die die Implementierung einer Funktion bereitstellt.

> [!success]- Lösung
>
> - **Implementierung**

## **15. Typische Linkerfehler II**

**MC8:** Welcher Linkerfehler tritt auf, wenn eine benötigte Bibliothek nicht gefunden wird?

- A) Undefined reference
- B) Duplicate symbol
- C) Missing header
- D) Syntax error

> [!success]- Lösung
>
> - **A) Undefined reference**: Dieser Fehler tritt auf, wenn der Linker eine Referenz nicht auflösen kann, häufig wegen fehlender Bibliotheken.

## **16. Makefiles**

**LT8:** Makefiles dienen zur Automatisierung von **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **Übersetzungsprozessen**, **Linkprozessen**

## **17. Beispiel Makefile**

**MC9:** Welche Anweisung im Makefile spezifiziert die zu kompilierende Quelldatei und das Ziel?

- A) `all: main.o`
- B) `main.o: main.c`
- C) `gcc main.c -o main`
- D) `clean:`

> [!success]- Lösung
>
> - **B) `main.o: main.c`**: Dies spezifiziert, dass `main.o` aus `main.c` erstellt werden soll.

## **18. Prozesse**

**MC10:** Welche Eigenschaft ist typisch für einen Prozess im Betriebssystem?

- A) Er teilt sich den Speicher mit anderen Prozessen
- B) Er hat eine eigene Prozess-ID (PID)
- C) Er ist unveränderlich
- D) Er existiert nur einmal pro System

> [!success]- Lösung
>
> - **B) Er hat eine eigene Prozess-ID (PID)**: Jeder Prozess erhält eine eindeutige PID im Betriebssystem.

## **19. Prozesshierarchie**

**LT9:** In Unix-Systemen bildet der Prozessbaum mit **\_\_\_\_\_\_** als Wurzelprozess die Prozesshierarchie.

> [!success]- Lösung
>
> - **init**

## **20. Eigenschaften von Prozessen**

**MC11:** Welche der folgenden Aussagen beschreibt korrekt die Eigenschaften von Prozessen?

- A) Prozesse sind immer sequentiell
- B) Prozesse können verschiedene Zustände wie laufend, wartend und beendet haben
- C) Prozesse teilen sich immer den gleichen Adressraum
- D) Prozesse können nicht gleichzeitig ausgeführt werden

> [!success]- Lösung
>
> - **B) Prozesse können verschiedene Zustände wie laufend, wartend und beendet haben**: Prozesse können verschiedene Zustände durchlaufen und sind oft nebenläufig.

## **21. Prozesskontrolle**

**LT10:** Der Prozesskontrollblock (PCB) enthält Informationen wie **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **Prozesszustand**, **Prozessidentifikation**

## **22. Prozesskontrolle: Erzeugung**

**MC12:** Welche Funktion wird in Unix verwendet, um einen neuen Prozess zu erzeugen?

- A) exec
- B) fork
- C) spawn
- D) create

> [!success]- Lösung
>
> - **B) fork**: Die `fork`-Funktion wird verwendet, um einen neuen Prozess zu erzeugen.

## **23. Prozesskontrolle: fork**

**LT11:** Die `fork`-Funktion erstellt einen neuen Prozess, der als **\_\_\_\_\_\_** des aufrufenden Prozesses bezeichnet wird.

> [!success]- Lösung
>
> - **Kindprozess**

## **24. Beispiel I**

**MC13:** Was gibt die `fork`-Funktion im Kindprozess zurück?

- A) Die Prozess-ID des Kindprozesses
- B) `0`
- C) Einen negativen Wert
- D) Die Prozess-ID des Elternprozesses

> [!success]- Lösung
>
> - **B) `0`**: Im Kindprozess gibt `fork` `0` zurück.

## **25. Beispiel II**

**LT12:** Im Elternprozess gibt `fork` die **\_\_\_\_\_\_** des Kindprozesses zurück.

> [!success]- Lösung
>
> - **Prozess-ID**

## **26. Prozesskontrolle: exec-Familie**

**MC14:** Was bewirkt die `exec`-Familie von Funktionen in C?

- A) Erstellt einen neuen Prozess
- B) Ersetzt das aktuelle Prozessbild durch ein neues
- C) Beendet einen Prozess
- D) Synchronisiert Prozesse

> [!success]- Lösung
>
> - **B) Ersetzt das aktuelle Prozessbild durch ein neues**: Die `exec`-Funktionen ersetzen den aktuellen Prozess durch ein neues Programm.

## **27. Ersetzung von Kindprozessen**

**LT13:** Nach dem Aufruf einer `exec`-Funktion im Kindprozess wird das neue Programm **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **ausgeführt**

## **28. Ersetzung von Kindprozessen II**

**MC15:** Welche Funktion wird verwendet, um auf die Beendigung eines Kindprozesses zu warten?

- A) wait
- B) sleep
- C) pause
- D) exit

> [!success]- Lösung
>
> - **A) wait**: Die `wait`-Funktion wird verwendet, um auf die Beendigung eines Kindprozesses zu warten.

## **29. Threads**

**LT14:** Im Gegensatz zu Prozessen teilen Threads den **\_\_\_\_\_\_** des Prozesses.

> [!success]- Lösung
>
> - **Adressraum**

## **30. Posix Threads**

**MC16:** Welche Funktion wird verwendet, um einen neuen Thread mit POSIX-Threads zu erstellen?

- A) pthread_start
- B) pthread_create
- C) thread_new
- D) create_thread

> [!success]- Lösung
>
> - **B) pthread_create**: `pthread_create` wird verwendet, um einen neuen POSIX-Thread zu erstellen.

## **31. Weiterführende Informationen**

**LT15:** Für weiterführende Informationen zu POSIX-Threads wird auf das **\_\_\_\_\_\_** des Lawrence Livermore National Labs verwiesen.

> [!success]- Lösung
>
> - **pthreads-Tutorial**

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
