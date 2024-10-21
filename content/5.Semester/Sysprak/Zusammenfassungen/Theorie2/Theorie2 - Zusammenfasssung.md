---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Monday, 21. October 2024, 17:03
date modified: Monday, 21. October 2024, 17:19
---

# Programmierung in C – Teil II: Umfassende Zusammenfassung für Einsteiger

Diese Zusammenfassung richtet sich an C-Anfänger und bietet einen ausführlichen Überblick über die Inhalte des zweiten Teils der Vorlesung "Programmierung in C". Ziel ist es, die Konzepte verständlich und strukturiert zu vermitteln, sodass auch Laien einen Einstieg in die Materie finden.

> [!tldr]- Kurzzusammenfassung
>
> - **Vom Quelltext zur ausführbaren Datei:**
>   - **Übersetzungsprozess:**
>     - Präprozessor verarbeitet Direktiven wie `#include`, `#define`.
>     - Compiler übersetzt den präprozessierten Code in Assemblercode.
>     - Assembler wandelt Assemblercode in Objektdateien (`.o`) um.
>     - Linker verbindet Objektdateien und Bibliotheken zu einer ausführbaren Datei.
>   - Bibliotheken werden während des Linkens eingebunden.
> - **Die GNU Compiler Collection (GCC):**
>   - Führt standardmäßig alle Phasen des Übersetzungsprozesses aus.
>   - Wichtige Optionen:
>     - `-c`: Nur Kompilieren, keine Verlinkung.
>     - `-E`: Stoppt nach dem Präprozessor.
>     - `-S`: Erzeugt Assemblercode.
>     - `-o <Dateiname>`: Legt den Namen der Ausgabedatei fest.
>     - `-Wall -Wextra`: Aktiviert ausführliche Warnungen.
>     - `-g`: Fügt Debugging-Informationen hinzu.
>     - `-std=c99`: Legt den zu verwendenden C-Standard fest.
> - **Modularisierung in C:**
>   - Ziel: Aufteilung in unabhängige Module mit klar definierten Schnittstellen.
>   - Vorteile:
>     - Erhöhte Übersichtlichkeit und Wartbarkeit.
>     - Erleichtert Zusammenarbeit und Wiederverwendung von Code.
> - **Headerdateien (`.h`):**
>   - Enthalten Deklarationen von Funktionen, Variablen, Makros und Typen.
>   - Werden mit `#include` in Quellcodedateien eingebunden.
>   - Include Guards:
>     - Verhindern Mehrfacheinbindungen.
>     - Syntax:
>       ```c
>       #ifndef DATEINAME_H
>       #define DATEINAME_H
>       // Inhalt der Headerdatei
>       #endif
>       ```
>     - Alternative: `#pragma once` (einfachere Syntax, aber nicht standardisiert).
> - **Erstellen eigener Headerdateien:**
>   - Deklaration von Funktionen und Makros in der Headerdatei.
>   - Definition der Funktionen in der entsprechenden `.c`-Datei.
>   - Beispiel:
>     - `geometrie.h`: Enthält Funktionsprototypen und Makros.
>     - `geometrie.c`: Implementiert die Funktionen.
>     - `main.c`: Nutzt die Funktionen aus `geometrie.h`.
> - **Bibliotheken in C:**
>   - Statische Bibliotheken (`.a`):
>     - Werden zur Kompilierzeit in das Programm eingebunden.
>     - Erstellung mit `ar rcs libname.a objektdateien`.
>   - Dynamische Bibliotheken (`.so`):
>     - Werden zur Laufzeit geladen.
>     - Erstellung mit `gcc -shared -o libname.so objektdateien`.
>   - Einbindung von Bibliotheken:
>     - Beim Kompilieren mit `-L<Pfad>` und `-l<name>` angeben.
>     - Beispiel: `gcc main.c -L. -lmymath -o main`.
>     - `LD_LIBRARY_PATH`: Umgebungsvariable für dynamische Bibliothekenpfade.
> - **Typische Linkerfehler und Behebung:**
>   - Fehlende Implementierung:
>     - Fehler: `undefined reference to 'funktion'`.
>     - Lösung: Fehlende `.c`-Datei beim Kompilieren angeben.
>   - Fehlende Bibliothek:
>     - Fehler: `cannot find -lbibliothek`.
>     - Lösung: Korrekte Pfadangabe mit `-L` und Bibliotheksname mit `-l`.
> - **Makefiles und Automatisierung:**
>   - Zweck: Automatisieren das Kompilieren und Linken von Programmen.
>   - Grundstruktur:
>     ```makefile
>     ziel: abhaengigkeiten
>     	\<Befehl\>
>     ```
>   - Beispiel-Makefile:
>     - Verwendung von Variablen (`CC`, `CFLAGS`).
>     - Definition von Zielen (`all`, `clean`).
>     - Regeln für das Erstellen von Objektdateien und der ausführbaren Datei.
> - **Prozesse in Unix/Linux:**
>   - Definition: Ein in Ausführung befindliches Programm mit eigenen Ressourcen.
>   - Prozesshierarchie:
>     - Jeder Prozess (außer `init`) hat einen Elternprozess.
>     - Waisenprozesse: Elternprozess beendet, Prozess wird von `init` adoptiert.
>     - Zombieprozesse: Beendet, aber nicht von Elternprozess abgeholt.
>   - Prozesskontrolle mit `fork()`:
>     - `pid_t fork(void);` erzeugt einen Kindprozess.
>     - Rückgabewerte:
>       - Elternprozess: PID des Kindprozesses (> 0).
>       - Kindprozess: 0.
>       - Fehlerfall: -1.
>     - Verhalten:
>       - Kindprozess ist Kopie des Elternprozesses.
>       - Beide Prozesse setzen Ausführung nach `fork()` fort.
>   - Beispiele:
>     - Mehrfaches `fork()` erhöht die Anzahl der Prozesse exponentiell.
>     - Fallunterscheidung anhand des Rückgabewerts ermöglicht unterschiedliche Logik.
> - **Die `exec`-Familie von Funktionen:**
>   - Zweck: Ersetzen des aktuellen Prozesses durch ein anderes Programm.
>   - Varianten: `execl()`, `execv()`, `execvp()`, etc.
>   - Verwendung:
>     - Wird häufig nach einem `fork()` im Kindprozess aufgerufen.
>     - Rückgabeverhalten:
>       - Bei Erfolg kehrt die Funktion nicht zurück.
>       - Bei Fehler Rückgabe von -1.
>   - Beispiel:
>     - Kindprozess ersetzt sich selbst durch Aufruf von `execlp()` und führt ein anderes Programm aus.
> - **Threads in C:**
>   - Definition: Leichtgewichtige Prozesse innerhalb eines Prozesses.
>   - Unterschied zu Prozessen:
>     - Teilen sich den gleichen Adressraum und Ressourcen.
>     - Geringerer Overhead beim Erzeugen und Verwalten.
>   - POSIX-Threads (`pthread`):
>     - Thread-Erstellung: `pthread_create(&thread, NULL, funktion, arg);`
>     - Thread-Beendigung: `pthread_exit(retval);`
>     - Thread-Synchronisation:
>       - Warten auf Thread: `pthread_join(thread, &retval);`
>       - Notwendigkeit von Synchronisationsmechanismen (z. B. Mutexes) bei gemeinsam genutzten Daten.
>   - Beispiel:
>     - Erzeugen eines Threads, der eine Funktion ausführt, und Warten auf dessen Beendigung.
> - **Weiterführende Informationen:**
>   - Dokumentation:
>     - Manpages (`man`) für detaillierte Beschreibungen von Funktionen und Systemaufrufen.
>   - Online-Tutorials und Ressourcen:
>     - Vertiefung des Wissens über Threads und Prozessmanagement.
>     - Beispiele und Übungen zur praktischen Anwendung.

## Inhaltsverzeichnis

1. [Vom Quelltext zur ausführbaren Datei](#vom-quelltext-zur-ausführbaren-datei)
2. [Die GNU Compiler Collection (GCC)](#die-gnu-compiler-collection-gcc)
   - [Phasen des Übersetzungsvorgangs](#phasen-des-übersetzungsvorgangs)
   - [GCC-Optionen und Parameter](#gcc-optionen-und-parameter)
3. [Modularisierung in C](#modularisierung-in-c)
   - [Headerdateien und ihre Verwendung](#headerdateien-und-ihre-verwendung)
   - [Eigene Headerdateien erstellen](#eigene-headerdateien-erstellen)
   - [Include Guards und `#pragma once`](#include-guards-und-pragma-once)
4. [Bibliotheken in C](#bibliotheken-in-c)
   - [Statische Bibliotheken](#statische-bibliotheken)
   - [Dynamische Bibliotheken](#dynamische-bibliotheken)
   - [Einbindung von Bibliotheken](#einbindung-von-bibliotheken)
   - [Typische Linkerfehler und deren Behebung](#typische-linkerfehler-und-deren-behebung)
5. [Makefiles und Automatisierung](#makefiles-und-automatisierung)
   - [Grundlagen von Makefiles](#grundlagen-von-makefiles)
   - [Beispiel eines Makefiles](#beispiel-eines-makefiles)
6. [Prozesse in Unix/Linux](#prozesse-in-unixlinux)
   - [Grundlagen von Prozessen](#grundlagen-von-prozessen)
   - [Prozesshierarchie und Zustände](#prozesshierarchie-und-zustände)
   - [Prozesskontrolle und der `fork`-Aufruf](#prozesskontrolle-und-der-fork-aufruf)
   - [Beispiele zur Prozessvererbung](#beispiele-zur-prozessvererbung)
7. [Die `exec`-Familie von Funktionen](#die-exec-familie-von-funktionen)
   - [Ersetzen von Prozessabbildern](#ersetzen-von-prozessabbildern)
   - [Beispiel: Ausführen eines anderen Programms](#beispiel-ausführen-eines-anderen-programms)
8. [Threads in C](#threads-in-c)
   - [Unterschied zwischen Prozessen und Threads](#unterschied-zwischen-prozessen-und-threads)
   - [POSIX-Threads (`pthread`)](#posix-threads-pthread)
   - [Grundlegende Thread-Operationen](#grundlegende-thread-operationen)
   - [Weiterführende Informationen](#weiterführende-informationen)

---

## Vom Quelltext zur ausführbaren Datei

In der Programmierung ist es wichtig zu verstehen, wie aus dem geschriebenen Quellcode letztendlich eine ausführbare Datei entsteht. Dieser Prozess umfasst mehrere Schritte:

1. **Quellcode**: Der vom Programmierer geschriebene Code in `.c`-Dateien.
2. **Präprozessor**: Verarbeitet Direktiven wie `#include` und `#define` und modifiziert den Quellcode entsprechend.
3. **Übersetzer (Compiler)**: Wandelt den präprozessierten Code in Maschinensprache um.
4. **Assembler**: Übersetzt eventuellen Assemblercode in Objektcode.
5. **Linker**: Verbindet die Objektdateien mit notwendigen Bibliotheken zu einer ausführbaren Datei.

**Visualisierung des Prozesses:**

```
Quellcode → Präprozessor → Modifizierter Code → Compiler → Assemblercode → Assembler → Objektdatei
             ↑
           Bibliotheken
             ↓
                          Linker → Ausführbare Datei
```

---

## Die GNU Compiler Collection (GCC)

GCC ist eine weit verbreitete und leistungsfähige Compiler-Sammlung, die viele Programmiersprachen und Prozessorarchitekturen unterstützt. Für die Programmierung in C ist `gcc` das zentrale Werkzeug.

### Phasen des Übersetzungsvorgangs

- **Präprozessor**: Führt Makroersetzungen durch und inkludiert Headerdateien.
- **Compiler**: Übersetzt den präprozessierten Code in Assemblercode.
- **Assembler**: Wandelt den Assemblercode in Objektcode (`.o`-Dateien) um.
- **Linker**: Verbindet Objektdateien und Bibliotheken zu einer ausführbaren Datei.

**Anmerkungen:**

- Nicht alle Phasen müssen bei jedem Aufruf von `gcc` durchlaufen werden. Es gibt Optionen, um den Prozess an bestimmten Punkten zu stoppen oder nur bestimmte Phasen auszuführen.

### GCC-Optionen und Parameter

- **Kompilieren ohne Linken**: `gcc -c` erzeugt nur Objektdateien.
- **Präprozessor-Ergebnisse anzeigen**: `gcc -E` stoppt nach dem Präprozessor.
- **Assemblercode erzeugen**: `gcc -S` stoppt nach der Übersetzung in Assemblercode.

**Typische Parameter:**

- **Ausgabedatei angeben**: `-o <Dateiname>` (Standard ist `a.out`).
- **Warnungen aktivieren**: `-Wall -Wextra` schaltet umfassende Warnungen ein.
- **Debugging-Informationen einbinden**: `-g` ermöglicht das Debuggen mit Tools wie `gdb`.
- **C-Standard festlegen**: `-std=c99` oder `-std=c11` legt den zu verwendenden Sprachstandard fest.

**Beispiel:**

```bash
gcc -Wall -Wextra -std=c99 -g -o meinProgramm main.c
```

---

## Modularisierung in C

Modularisierung ist ein Schlüsselkonzept in der Softwareentwicklung. Es ermöglicht die Aufteilung eines Programms in kleinere, überschaubare und wiederverwendbare Einheiten.

### Headerdateien und ihre Verwendung

- **Headerdateien** (`.h`-Dateien) enthalten Deklarationen von Funktionen, Variablen, Makros und Typen.
- Sie dienen als Schnittstelle zwischen verschiedenen Modulen eines Programms.
- **Einbinden von Headerdateien**:

  - **Systemheader**: `#include <stdio.h>` sucht im Systempfad.
  - **Benutzerdefinierte Header**: `#include "meinHeader.h"` sucht im aktuellen Verzeichnis oder im angegebenen Pfad.

**Beispiele für Standard-Headerdateien:**

- `stdio.h`: Standard-Ein- und Ausgabefunktionen.
- `stdlib.h`: Funktionen für Speicherverwaltung und Prozesssteuerung.
- `math.h`: Mathematische Funktionen.
- `time.h`: Funktionen für Datum und Zeit.

### Eigene Headerdateien erstellen

**Beispiel:**

#### geometrie.h

```c
#ifndef GEOMETRIE_H
#define GEOMETRIE_H

#define PI (3.1415926)

float quadrat(float x);
float kreisflaeche(float radius);
float kugelvolumen(float radius);

#endif
```

- **Inhalte**:
  - **Makrodefinitionen**: `#define PI (3.1415926)`
  - **Funktionsdeklarationen**: Prototypen der Funktionen, die in der Implementierungsdatei definiert sind.

#### geometrie.c

```c
#include "geometrie.h"

float quadrat(float x) {
    return x * x;
}

float kreisflaeche(float radius) {
    return PI * quadrat(radius);
}

float kugelvolumen(float radius) {
    return (4.0 / 3) * PI * quadrat(radius) * radius;
}
```

- **Implementierung** der in `geometrie.h` deklarierten Funktionen.

#### main.c

```c
#include <stdlib.h>
#include <stdio.h>
#include "geometrie.h"

int main(int argc, char *argv[]) {
    if (argc != 2) {
        fprintf(stderr, "Aufruf: %s <radius>\n\n", argv[0]);
        return EXIT_FAILURE;
    }
    float radius = atof(argv[1]);
    printf("Kreisfläche = %f\n", kreisflaeche(radius));
    printf("Kugelvolumen = %f\n", kugelvolumen(radius));
    return EXIT_SUCCESS;
}
```

- **Verwendung** der Funktionen aus `geometrie.h`.

### Include Guards und `#pragma once`

#### Include Guards

- Schützen vor mehrfacher Einbindung einer Headerdatei.
- **Syntax**:

  ```c
  #ifndef DATEINAME_H
  #define DATEINAME_H

  // Inhalt der Headerdatei

  #endif
  ```

- **Funktionsweise**: Wenn das Makro (z. B. `DATEINAME_H`) nicht definiert ist, wird es definiert und der Inhalt der Headerdatei eingebunden. Andernfalls wird der Inhalt übersprungen.

#### `#pragma once`

- Alternative zu Include Guards.
- **Verwendung**: Einfach am Anfang der Headerdatei `#pragma once` hinzufügen.
- **Hinweis**: Nicht Teil des C-Standards, aber von den meisten Compilern unterstützt.
- **Vorteil**: Weniger fehleranfällig, da keine Makronamen verwaltet werden müssen.

---

## Bibliotheken in C

Bibliotheken sind Sammlungen von Funktionen und/oder Variablen, die von verschiedenen Programmen gemeinsam genutzt werden können.

### Statische Bibliotheken

- **Dateiendung**: `.a` (Archivdateien).
- **Merkmale**:
  - Werden zur Compile-Zeit in das Programm eingebunden.
  - Führt zu größeren ausführbaren Dateien, da der Code der Bibliothek integriert wird.
  - Keine Abhängigkeit zur Laufzeit.

**Erstellung einer statischen Bibliothek:**

1. **Objektdateien erstellen**:

   ```bash
   gcc -c geometrie.c algebra.c
   ```

2. **Bibliothek erstellen**:

   ```bash
   ar rcs libmymath.a geometrie.o algebra.o
   ```

   - `ar`: Archivierungswerkzeug.
   - `rcs`: Optionen zum Erstellen oder Aktualisieren eines Archivs.

### Dynamische Bibliotheken

- **Dateiendung**: `.so` (Shared Objects).
- **Merkmale**:
  - Werden zur Laufzeit geladen.
  - Führt zu kleineren ausführbaren Dateien.
  - Ermöglicht das Teilen von Bibliotheken zwischen mehreren Programmen.

**Erstellung einer dynamischen Bibliothek:**

1. **Objektdateien erstellen**:

   ```bash
   gcc -fPIC -c geometrie.c algebra.c
   ```

   - `-fPIC`: Erzeugt positionsunabhängigen Code (Position Independent Code), notwendig für dynamische Bibliotheken.

2. **Bibliothek erstellen**:

   ```bash
   gcc -shared -o libmymath.so geometrie.o algebra.o
   ```

   - `-shared`: Erzeugt eine dynamische Bibliothek.

### Einbindung von Bibliotheken

**Beim Kompilieren angeben:**

- **Statische Bibliothek**:

  ```bash
  gcc -o main main.c -L. -lmymath
  ```

- **Dynamische Bibliothek**:

  ```bash
  gcc -o main main.c -L. -lmymath
  ```

  - **Hinweis**: Der Linker bevorzugt standardmäßig dynamische Bibliotheken.
  - **Pfad angeben**: Mit `-L<Pfad>` wird der Pfad zu den Bibliotheken angegeben.
  - **Bibliotheksname**: Mit `-l<Library>` wird der Name der Bibliothek angegeben (ohne `lib`-Präfix und Dateiendung).

**Laufzeitumgebung:**

- **LD_LIBRARY_PATH**: Umgebungsvariable, die zusätzliche Pfade für dynamische Bibliotheken zur Laufzeit angibt.
- **Überprüfung**: Mit dem Befehl `file <Datei>` kann überprüft werden, ob es sich um eine statische oder dynamische Bibliothek handelt.

### Typische Linkerfehler und deren Behebung

#### Fehlende Implementierung

**Fehlermeldung:**

```
/usr/bin/ld: main.c:(.text+0x80): undefined reference to `kreisflaeche'
collect2: error: ld returned 1 exit status
```

**Ursache:**

- Die Funktion `kreisflaeche` wurde zwar deklariert, aber nicht definiert (die Implementierung fehlt).

**Lösung:**

- Sicherstellen, dass die Implementierungsdatei (`geometrie.c`) beim Kompilieren angegeben wird:

  ```bash
  gcc main.c geometrie.c -o main
  ```

#### Fehlende Bibliothek

**Fehlermeldung:**

```
/usr/bin/ld: cannot find -lmymath: No such file or directory
collect2: error: ld returned 1 exit status
```

**Ursache:**

- Die angegebene Bibliothek `libmymath.a` oder `libmymath.so` wurde nicht gefunden.

**Lösung:**

- Den Pfad zur Bibliothek mit `-L` angeben:

  ```bash
  gcc main.c -L. -lmymath -o main
  ```

- Überprüfen, ob die Bibliothek im angegebenen Verzeichnis vorhanden ist.

---

## Makefiles und Automatisierung

Makefiles sind ein Werkzeug zur Automatisierung des Kompilierungsprozesses. Sie ermöglichen es, nur die tatsächlich notwendigen Dateien neu zu kompilieren, basierend auf definierten Abhängigkeiten.

### Grundlagen von Makefiles

- **Aufbau**:

  ```makefile
  Ziel: Abhängigkeiten
  	<TAB> Befehl
  ```

- **Regeln**:

  - **Ziel**: Das zu erzeugende Artefakt (z. B. eine ausführbare Datei oder eine Objektdatei).
  - **Abhängigkeiten**: Dateien, von denen das Ziel abhängt (z. B. Quellcode oder Headerdateien).
  - **Befehl**: Der auszuführende Befehl, um das Ziel zu erzeugen.

- **Variablen**: Können definiert und im Makefile verwendet werden, um Wiederholungen zu vermeiden.

- **Aufruf**:

  ```bash
  make [<Ziel>]
  ```

  - Ohne Angabe eines Ziels wird das erste Ziel im Makefile ausgeführt.

### Beispiel eines Makefiles

```makefile
# Variablen
CC = gcc
CFLAGS = -g -Wall

# Standardziel
all: main

# Regeln
main: main.o geometrie.o algebra.o
	$(CC) $(CFLAGS) -o main main.o geometrie.o algebra.o

main.o: main.c geometrie.h algebra.h
	$(CC) $(CFLAGS) -c main.c

geometrie.o: geometrie.c geometrie.h
	$(CC) $(CFLAGS) -c geometrie.c

algebra.o: algebra.c algebra.h
	$(CC) $(CFLAGS) -c algebra.c

# Clean-Ziel
clean:
	rm -f *.o main
```

**Erklärungen:**

- **Variablen**:

  - `CC`: Compiler (hier `gcc`).
  - `CFLAGS`: Compiler-Flags (hier Debugging-Informationen und alle Warnungen aktivieren).

- **Ziele und Abhängigkeiten**:

  - `all`: Standardziel, kompiliert das Programm `main`.
  - `main`: Hängt von den Objektdateien `main.o`, `geometrie.o` und `algebra.o` ab.
  - Jede Objektdatei hängt von ihrer Quellcode-Datei und den benötigten Headerdateien ab.

- **Befehle**:

  - Kompilieren der Objektdateien mit `-c`.
  - Linken der Objektdateien zum ausführbaren Programm `main`.

- **Clean-Ziel**:

  - Entfernt die erzeugten Objektdateien und das ausführbare Programm.

---

## Prozesse in Unix/Linux

Ein grundlegendes Verständnis von Prozessen ist für die Systemprogrammierung in C unerlässlich.

### Grundlagen von Prozessen

- **Definition**: Ein Prozess ist ein laufendes Programm, das vom Betriebssystem verwaltet wird.
- **Eigenschaften**:

  - **Ressourcen**: Jeder Prozess besitzt eigene Ressourcen wie Speicher, Dateien und Geräte.
  - **Isolierung**: Prozesse sind voneinander isoliert, um Stabilität und Sicherheit zu gewährleisten.

### Prozesshierarchie und Zustände

- **Prozessbaum**:

  - **Init-Prozess**: Der erste Prozess (PID 1), von dem alle anderen Prozesse abstammen.
  - **Eltern- und Kindprozesse**: Jeder Prozess (außer `init`) hat einen Elternprozess und kann Kindprozesse erzeugen.

- **Zustände von Prozessen**:

  - **Laufend**: Der Prozess wird gerade ausgeführt.
  - **Wartend**: Der Prozess wartet auf eine Ressource oder ein Ereignis.
  - **Beendet**: Der Prozess hat seine Ausführung abgeschlossen.

- **Spezielle Prozesse**:

  - **Waisenprozess**:

    - Entsteht, wenn ein Elternprozess beendet wird, bevor der Kindprozess endet.
    - Der `init`-Prozess übernimmt die Rolle des Elternprozesses.

  - **Zombieprozess**:

    - Ein Prozess, der beendet ist, aber dessen Elternprozess das Beenden noch nicht registriert hat.
    - Belegt noch einen Eintrag in der Prozessliste, aber keine Ressourcen.

### Prozesskontrolle und der `fork`-Aufruf

#### `fork`-Funktion

- **Deklaration**:

  ```c
  pid_t fork(void);
  ```

- **Funktion**:

  - Erzeugt einen neuen Prozess (Kindprozess).
  - Der Kindprozess ist eine Kopie des Elternprozesses mit eigenem Adressraum.

- **Rückgabewerte**:

  - **Im Elternprozess**: Die PID des Kindprozesses (> 0).
  - **Im Kindprozess**: 0.
  - **Bei Fehler**: -1.

#### Beispiel

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(void) {
    pid_t pid;
    pid = fork();
    if (pid < 0) {
        fprintf(stderr, "Fehler bei fork().\n");
        return EXIT_FAILURE;
    } else if (pid == 0) {
        printf("Im Kindprozess\n");
        printf("Meine PID = %d\n", getpid());
        printf("Meine Eltern-PID = %d\n", getppid());
    } else {
        printf("Im Elternprozess\n");
        printf("Meine PID = %d\n", getpid());
        printf("Meine Eltern-PID = %d\n", getppid());
    }
    return EXIT_SUCCESS;
}
```

**Erklärungen:**

- **`getpid()`**: Liefert die PID des aktuellen Prozesses.
- **`getppid()`**: Liefert die PID des Elternprozesses.

### Beispiele zur Prozessvererbung

#### Beispiel I: Mehrfaches `fork()`

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(void) {
    pid_t pid;
    pid = fork();
    pid = fork();
    printf("Fork-Test\n");
    return EXIT_SUCCESS;
}
```

**Frage:** Wie oft wird "Fork-Test" ausgegeben?

**Analyse:**

- **Erster `fork()`**:

  - Erstellt einen Kindprozess, sodass nun 2 Prozesse laufen.

- **Zweiter `fork()`**:

  - Jeder der beiden Prozesse führt `fork()` aus, sodass insgesamt 4 Prozesse laufen.

- **Ausgabe**:

  - Jeder der 4 Prozesse führt `printf("Fork-Test\n");` aus.

- **Antwort:** "Fork-Test" wird 4-mal ausgegeben.

---

## Die `exec`-Familie von Funktionen

Die `exec`-Funktionen dienen dazu, den aktuellen Prozess durch ein neues Programm zu ersetzen.

### Ersetzen von Prozessabbildern

- **Funktionen**:

  - `execl()`, `execv()`, `execle()`, `execlp()`, `execvp()`, `execve()`.

- **Funktionsweise**:

  - Laden eines neuen Programms in den aktuellen Prozess.
  - Der aktuelle Prozess wird ersetzt, es kehrt nicht zur aufrufenden Funktion zurück.

- **Rückgabewert**:

  - Bei Erfolg: Kehrt nicht zurück.
  - Bei Fehler: -1.

### Beispiel: Ausführen eines anderen Programms

#### printargs.c

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv) {
    for (int i = 1; i < argc; i++) {
        printf("%d. Argument: %s\n", i, argv[i]);
    }
    return EXIT_SUCCESS;
}
```

- **Funktion**: Gibt die übergebenen Argumente aus.

#### exec.c

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void) {
    pid_t pid;
    switch (pid = fork()) {
        case -1:
            perror("Fehler bei fork()");
            return EXIT_FAILURE;
        case 0:
            // Kindprozess ersetzt sich selbst durch printargs
            execlp("./printargs", "./printargs", "a", "b", "c", NULL);
            perror("Fehler bei execlp()");
            exit(EXIT_FAILURE);
        default:
            // Elternprozess wartet auf das Ende des Kindprozesses
            if (waitpid(pid, NULL, 0) != pid) {
                perror("Fehler beim Warten auf Kindprozess");
                return EXIT_FAILURE;
            }
    }
    return EXIT_SUCCESS;
}
```

**Erklärungen:**

- **`fork()`**: Erzeugt einen Kindprozess.
- **Im Kindprozess**:

  - **`execlp()`**: Ersetzt den Kindprozess durch das Programm `printargs` mit den Argumenten `a`, `b`, `c`.
  - **Wichtig**: Bei Erfolg kehrt `execlp()` nicht zurück.

- **Im Elternprozess**:

  - **`waitpid()`**: Wartet darauf, dass der Kindprozess beendet wird.

---

## Threads in C

Threads ermöglichen parallele Ausführung innerhalb eines Prozesses.

### Unterschied zwischen Prozessen und Threads

- **Prozess**:

  - Eigener Adressraum.
  - Ressourcen werden nicht standardmäßig geteilt.
  - Kommunikation über Interprozesskommunikation (IPC) notwendig.

- **Thread**:

  - Gemeinsamer Adressraum innerhalb eines Prozesses.
  - Ressourcen wie Variablen und Dateien werden geteilt.
  - Effizienter bei Kontextwechseln.

### POSIX-Threads (`pthread`)

- **Bibliothek**: `pthread.h`
- **Voraussetzung**: Beim Kompilieren muss die `pthread`-Bibliothek eingebunden werden (`-pthread`).

### Grundlegende Thread-Operationen

#### Thread erstellen

```c
int pthread_create(pthread_t *thread, const pthread_attr_t *attr,
                   void *(*start_routine)(void *), void *arg);
```

- **Parameter**:

  - `thread`: Zeiger auf eine `pthread_t`-Variable, in der die Thread-ID gespeichert wird.
  - `attr`: Attribute des Threads (kann `NULL` sein).
  - `start_routine`: Zeiger auf die Funktion, die der Thread ausführt.
  - `arg`: Argumente für die Startfunktion.

#### Thread beenden

```c
void pthread_exit(void *retval);
```

- **Funktion**: Beendet den aktuellen Thread und liefert einen Rückgabewert.

#### Auf Thread warten

```c
int pthread_join(pthread_t thread, void **retval);
```

- **Funktion**: Wartet darauf, dass der angegebene Thread beendet wird.

#### Beispiel

```c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

void *thread_function(void *arg) {
    printf("Thread-ID: %lu\n", pthread_self());
    pthread_exit(NULL);
}

int main(void) {
    pthread_t thread;
    int result;

    result = pthread_create(&thread, NULL, thread_function, NULL);
    if (result != 0) {
        perror("Fehler bei pthread_create");
        exit(EXIT_FAILURE);
    }

    pthread_join(thread, NULL);
    printf("Thread beendet\n");

    return EXIT_SUCCESS;
}
```

**Erklärungen:**

- **`pthread_self()`**: Liefert die ID des aktuellen Threads.
- **Synchronisation**: Wichtig bei der Arbeit mit Threads, um Dateninkonsistenzen zu vermeiden (z. B. durch Mutexes).

---

## Weiterführende Informationen

- **Threads und Nebenläufigkeit**:

  - Nebenläufige Programmierung erfordert ein Verständnis für Synchronisation und mögliche Probleme wie Race Conditions.
  - **Mutexes**: Verhindern gleichzeitigen Zugriff auf gemeinsame Ressourcen.
  - **Semaphoren**: Kontrollieren den Zugriff auf Ressourcen durch Zählung.

- **Empfohlene Lektüre**:

  - **Pthreads-Tutorial**: Vertiefung des Wissens über POSIX-Threads.
  - **Dokumentation**: Manpages (`man pthread_create`) bieten detaillierte Informationen.

---

**Hinweis**: Diese Zusammenfassung soll als Einstieg in die Programmierung in C dienen. Es wird empfohlen, die Beispiele selbst auszuprobieren und weiterführende Literatur zu konsultieren, um ein tieferes Verständnis zu erlangen.

**Viel Erfolg beim Programmieren!**

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
