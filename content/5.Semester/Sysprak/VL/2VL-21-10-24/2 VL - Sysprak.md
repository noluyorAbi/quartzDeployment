---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Monday, 21. October 2024, 16:48
date modified: Tuesday, 22. October 2024, 12:22
---

# Vorlesung: Programmieren in C

## Überblick

In dieser Vorlesung setzen wir unsere Reise durch die Programmierung in C fort. Wir behandeln wichtige Konzepte wie Bitflags, Unions, Kontrollstrukturen, Speicherverwaltung und Modularisierung.

---

## Bitflags und Enums

- **Bitflags in Verbindung mit Enums:**
  - Werden gerne zusammen verwendet.
  - **Hilfreich und sehr üblich** in der Programmierung.
  - **Anwendung:** Effektives Verwalten von Zuständen mittels Bitmanipulation.

---

## Unions (Vereinigungen)

- **Definition:** Spezielle Struktur, ähnlich wie Strukturen, aber mit **einem entscheidenden Unterschied**.
- **Speicherplatz:** Alle Elemente teilen sich **denselben Speicherbereich**, der so groß ist wie das größte Element.
- **Anwendung:**
  - **Effektiver Zugriff** auf denselben Speicherbereich auf unterschiedliche Arten.
  - **Beispiel:** Implementierung von **IEEE 754 Gleitkommazahlen**.
    - Interpretation des Speicherbereichs als verschiedene Datentypen.
- **Vorteil:** Explizite Schreibweise für die Betrachtung eines Speicherbereichs als **Character, Integer oder selbstdefinierte Struktur**.

---

## Kontrollfluss in C

### If-Else-Verzweigungen

- **Syntax:** Klassische `if-else`-Strukturen.
- **Logische Verknüpfungen:**
  - **Und:** Einfaches `&` oder doppeltes `&&`.
  - **Oder:** Einfaches `|` oder doppeltes `||`.
- **Shortcut Evaluations:**
  - Bei **doppelter Schreibweise** (`&&`, `||`).
  - **Bedeutung:** Zweiter Ausdruck wird **nicht mehr angeschaut**, wenn das Ergebnis bereits feststeht.
    - Bei `&&`: Wenn erster Ausdruck **falsch**, zweiter wird nicht ausgewertet.
    - Bei `||`: Wenn erster Ausdruck **wahr**, zweiter wird nicht ausgewertet.
- **Achtung:** Unterschiede zwischen einfachem und doppeltem `&` bzw. `|` beachten.

### Switch-Anweisungen

- **Verwendung:** `switch`-Statements zur Fallunterscheidung.
- **Einschränkungen in C:**
  - **Nur numerische Werte** können verwendet werden.
  - **Strings sind nicht erlaubt** (im Gegensatz zu Java).
  - **Characters funktionieren**, da sie numerisch interpretiert werden.
- **Syntax:** Klassisch mit `case`-Werten und `break`.

### Schleifenstrukturen

- **For-Schleifen**
- **While-Schleifen**
- **Do-While-Schleifen**
- **Anmerkung:** Diese Strukturen sind bekannt und werden nicht vertieft.

---

## Variable Sichtbarkeit und Verfügbarkeit

- **Lokale Variablen:**
  - Sichtbarkeit innerhalb der Funktion oder des Blocks.
  - **Automatische Speicherdauer.**
- **Globale Variablen:**
  - Sichtbar für die gesamte Laufzeit des Programms.
  - **Statische Speicherdauer.**
- **Speicherdauern:**
  - **Statisch:** Variablen sind fest im Programm angelegt.
  - **Dynamisch:** Variablen müssen initialisiert und freigegeben werden.
  - **Automatisch:** Variablen im Funktionsscope.

---

## Speicherverwaltung

### Stack

- **Verwendung:** Speicherung von lokalen Variablen.
- **Eigenschaften:**
  - **Geringer Overhead** für das Management.
  - **Last-In-First-Out**-Prinzip.
- **Funktionsaufrufe:**
  - Speicherbereich wird beim Aufruf **reserviert** und danach **freigegeben**.
  - **Lokale Variablen** sind innerhalb der Funktion verfügbar.
- **Automatische Speicherdauer:**
  - **Variablen existieren nur während der Funktion.**

### Heap

- **Verwendung:** Dynamische Speicherallokation.
- **Allokation mit `malloc`:**
  - **Syntax:** `malloc(size_in_bytes)`
  - **Rückgabewert:** **Zeiger** auf den Speicherbereich.
- **Freigabe mit `free`:**
  - **Syntax:** `free(pointer)`
  - **Wichtig:** Speicher muss **manuell freigegeben** werden.
- **Fehlerbehandlung:**
  - Überprüfen, ob `malloc` **NULL** zurückgibt (Fehlerfall).
- **Häufige Fehler:**
  - **Double-Free Errors:** Mehrfaches Freigeben eines Speicherbereichs.
  - **Undefined Behavior:** Zugriff auf bereits freigegebenen Speicher.

---

## Zeiger und Parameterübergabe

- **Call by Value:**
  - **Alle** Funktionsübergaben in C sind Call by Value.
- **Call by Reference (imitieren mit Zeigern):**
  - **Übergeben von Zeigern** ermöglicht direkten Zugriff auf den Speicherbereich.
  - **Vorteil:** **Overhead** durch Kopieren von Daten entfällt.
- **Anwendung:**
  - Effiziente Manipulation von Datenstrukturen.
  - Rückgabe von Speicheradressen.
- **Beispiel:**
  ```c
  void function(int* pointer) {
      // Zugriff auf den Wert mit *pointer
  }
  ```

---

## Rekursion

- **Definition:** Eine Funktion, die sich **selbst aufruft**.
- **Verwendung in C:** Funktioniert wie in anderen bekannten Sprachen.
- **Beispiel:** Berechnung der Fakultät einer Zahl.

---

## Programmparameter (`argc` und `argv`)

- **`argc`:** Anzahl der übergebenen Argumente.
- **`argv`:** Array von Zeigern auf die Argumente.
  - **Schreibweisen:**
    - `char* argv[]`
    - `char** argv`
  - **Beide sind äquivalent.**
- **Hinweis:** Der **erste Parameter** ist immer der **Programmname**.

---

## Manual Pages (Manpages)

- **Verwendung:**
  - Nachschlagen von Funktionen und Befehlen.
  - **Aufruf:** `man <Sektion> <Befehl>`
- **Sektionen:**
  - **1:** Benutzerkommandos
  - **2:** Systemaufrufe
  - **3:** Bibliotheksfunktionen
- **Beispiel:**
  - `man printf` zeigt die Manpage des Shell-Kommandos `printf`.
  - `man 3 printf` zeigt die Manpage der C-Funktion `printf`.
- **Feature-Test-Makros:**
  - Manche Funktionen erfordern das **Definieren von Makros** vor dem `#include`.
  - **Beispiel:**
    ```c
    #define _XOPEN_SOURCE 700
    #include <stdio.h>
    ```

---

## Compiler und Kompilierungsprozess

- **Ablauf:**
  1. **Präprozessor:** Bearbeitet `#include`, `#define`, usw.
  2. **Compiler:** Übersetzt Code in Assembler.
  3. **Assembler:** Wandelt Assemblercode in Objektcode (`.o`-Dateien).
  4. **Linker:** Verknüpft Objektdateien zu einer ausführbaren Datei.
- **GCC-Aufruf:**
  - **Ohne Flags:** Durchläuft alle Schritte automatisch.
  - **Mit Flags:** Kann einzelne Schritte steuern (z.B. nur kompilieren mit `-c`).
- **Nützliche Flags:**
  - `-o`: Ausgabedatei benennen.
  - `-Wall`: **Alle Warnungen** aktivieren.
  - `-Wextra`: **Zusätzliche Warnungen** aktivieren.
  - `-std=c99`: **C-Standard** festlegen.
  - `-g`: Debugging-Informationen hinzufügen.
- **Hinweis:** Verwenden Sie Warnungen, um **Codequalität zu verbessern**.

---

## Modularisierung und Bibliotheken

- **Warum Modularisierung?**
  - **Wiederverwendung** von Code.
  - **Bessere Wartbarkeit** und Übersichtlichkeit.
- **Header-Dateien (`.h`):**
  - **Deklarationen** von Funktionen und Strukturen.
  - Werden mit `#include` eingebunden.
- **Implementierungsdateien (`.c`):**
  - **Definitionen** der Funktionen.
- **Include Guards:**
  - Verhindern **Mehrfachinklusionen**.
  - **Syntax:**
    ```c
    #ifndef HEADER_NAME_H
    #define HEADER_NAME_H
    // Inhalt
    #endif
    ```
- **Erstellen von Bibliotheken:**
  - **Statische Bibliotheken (`.a`):** Werden fest ins Programm gelinkt.
  - **Dynamische Bibliotheken (`.so`):** Werden zur Laufzeit geladen.
- **Verwendung beim Kompilieren:**
  - **Pfadangaben:** Mit `-L` Pfad angeben.
  - **Bibliothek angeben:** Mit `-l` Name der Bibliothek (ohne `lib` und `.so`).

---

## Häufige Linkerfehler

- **Undefined Reference:**
  - **Ursache:** Fehlende Implementierung.
  - **Lösung:** Implementierungsdatei beim Kompilieren angeben.
- **Datei nicht gefunden:**
  - **Ursache:** Falscher Pfad.
  - **Lösung:** Korrekte Pfade mit `-L` angeben.

---

## Makefiles

- **Zweck:** Automatisierung des Kompilierungsprozesses.
- **Grundstruktur:**
  ```makefile
  target: dependencies
      command
  ```
- **Wichtig:** Befehle müssen mit einem **Tabulator** eingerückt sein.
- **Beispiel:**

  ```makefile
  all: myapp

  myapp: main.o geometrie.o
      gcc -o myapp main.o geometrie.o

  main.o: main.c
      gcc -c main.c

  geometrie.o: geometrie.c
      gcc -c geometrie.c
  ```

- **Vorteile:**
  - **Effizientes** Kompilieren.
  - **Automatische** Verwaltung von Abhängigkeiten.

---

## Speicherverwaltung und Pointer (Ergänzung)

- **Wichtiger Hinweis:** **Keiner sollte `sizeof(yourstring)` verwenden.**
  - **Grund:** Liefert nicht die tatsächliche Länge des Strings.
- **String-Länge ermitteln:**
  - Verwenden Sie `strlen` aus `<string.h>`.
- **Achtung bei Arrays und Pointern:**
  - Arrays können zu Pointern **degradieren**.
  - Die Größe eines Pointers ist **nicht** die Größe des Arrays.

---

## Mini-Projekt Diskussion

- **Aufgabe:** Programm schreiben, das einen String basierend auf der eigenen **Matrikelnummer** verarbeitet.
- **Anforderungen:**
  - **Eingabe:** Erster Kommandozeilenparameter oder Standardwert (eigener Name).
  - **Transformationen:** Basierend auf den Ziffern der Matrikelnummer (z.B. `print`, `reverse`, `duplicate`).
- **Hinweise:**
  - **Speicherverwaltung:**
    - Bei Veränderung der String-Länge eventuell **dynamische Allokation** mit `malloc` oder `realloc` notwendig.
    - **Speicher freigeben** mit `free`.
  - **Fehlerbehandlung:**
    - **Überprüfen**, ob `malloc` erfolgreich war.
    - **Nicht** auf bereits freigegebenen Speicher zugreifen.
  - **Implementierung:**
    - **Nur** die Funktionen implementieren, die der eigenen Matrikelnummer entsprechen.
- **Fragen und Antworten:**
  - **Müssen alle Funktionen implementiert werden?**
    - Nein, nur die relevanten für Ihre Matrikelnummer.
  - **Wie mit Sonderzeichen umgehen?**
    - **Optional**, es ist Ihnen überlassen.
  - **Verwendung von `realloc`:**
    - **Erlaubt** und kann sinnvoll sein.

---

## Abschluss

- **Zusammenfassung:**
  - **Speicherverwaltung** ist ein zentrales Thema in C.
  - **Kontrollstrukturen** und **Modularisierung** erleichtern die Programmierung.
  - **Werkzeuge** wie Manpages und Makefiles sind hilfreich.
- **Danke für Ihre Aufmerksamkeit!**

---

# Kurznotizen

- **Speicherverwaltung immer sorgfältig durchführen.**
- **Warnungen des Compilers ernst nehmen und beheben.**
- **Bei Fragen die Manpages konsultieren.**
- **Makefiles nutzen, um den Build-Prozess zu vereinfachen.**

---

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
