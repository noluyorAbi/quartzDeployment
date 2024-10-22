---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Monday, 21. October 2024, 16:49
date modified: Tuesday, 22. October 2024, 09:56
---

# Programmierung in C – Umfassende Zusammenfassung für Einsteiger

## Einführung in die Programmiersprache C

### Historischer Hintergrund

- **Entstehung**: C wurde in den 1970er Jahren von Dennis Ritchie bei Bell Labs entwickelt.
- **Zweck**: Ursprünglich für die Entwicklung des Unix-Betriebssystems konzipiert.
- **Einfluss**: C hat viele moderne Programmiersprachen beeinflusst, darunter C++, Java und C#.

### Merkmale und Eigenschaften

- **Maschinennähe**: C ermöglicht eine Programmierung, die nah an der Hardware liegt, was es erlaubt, effizienteren und schnelleren Code zu schreiben.
- **Portabilität**: C-Programme können auf verschiedenen Hardwareplattformen und Betriebssystemen kompiliert und ausgeführt werden.
- **Speicherzugriff**: Direkter Zugriff auf Speicheradressen ermöglicht eine feinere Kontrolle über Ressourcen.
- **Beliebtheit**: Trotz ihres Alters ist C immer noch eine der am häufigsten verwendeten Programmiersprachen, insbesondere in der System- und Embedded-Programmierung.

## Ist C eine überholte Sprache?

- **Aktuelle Relevanz**: C bleibt eine der Top 10 Programmiersprachen weltweit (Quelle: TIOBE-Index).
- **Open-Source-Projekte**: Viele wichtige Open-Source-Projekte sind in C geschrieben, was die anhaltende Bedeutung der Sprache unterstreicht.
- **Anwendungsbereiche**: C wird häufig in Bereichen eingesetzt, in denen Effizienz und Kontrolle über die Hardware entscheidend sind, wie z. B. in Betriebssystemen, Treibern und eingebetteten Systemen.

## Grundlegende Konzepte und Prinzipien von C

### Vertrauen in den Programmierer

- **Wenige Schutzmechanismen**: C setzt voraus, dass der Programmierer weiß, was er tut. Es gibt kein automatisches Bounds Checking (Überprüfung der Array-Grenzen) oder Exceptions (Ausnahmen bei Fehlern).
- **Direkter Systemzugriff**: C ermöglicht direkten Zugriff auf Hardware und Speicher, was sowohl mächtig als auch gefährlich sein kann, wenn man nicht vorsichtig ist.
- **Kaum Abstraktion**: Im Vergleich zu höhergradigen Sprachen bietet C weniger Abstraktionen, was zu einem besseren Verständnis der Abläufe auf Maschinenebene führt.

### Einfachheit und Effizienz

- **Kleiner Sprachumfang**: C ist relativ einfach und hat einen kleinen Sprachumfang, was das Lernen und Verstehen erleichtert.
- **Effiziente Ausführung**: Die Priorität liegt auf der Geschwindigkeit der Programmausführung. Programme in C laufen in der Regel sehr schnell, da sie wenig Overhead haben.
- **Einheitliche Methoden**: Es gibt oft nur eine oder wenige Arten, eine Aufgabe zu lösen, was zu konsistenterem Code führt.

### Verantwortung des Programmierers

- **Sicherheit und Portabilität**: Obwohl C leistungsfähig ist, liegt die Verantwortung für sicheren und portablen Code beim Programmierer.
- **Fehleranfälligkeit**: Ohne automatische Speicherverwaltung oder Schutzmechanismen können Fehler wie Buffer Overflows oder Speicherlecks auftreten, wenn der Programmierer nicht sorgfältig ist.

## Literatur und Ressourcen

- **"C von A bis Z"** von Jürgen Wolf
  - Ein umfassendes Buch zur Programmiersprache C, verfügbar als Openbook unter: [openbook.rheinwerk-verlag.de/c_von_a_bis_z/](https://openbook.rheinwerk-verlag.de/c_von_a_bis_z/)
- **"Beej's Guide to C Programming"**
  - Ein kostenloses Online-Tutorial: [beej.us/guide/bgc/html/](https://beej.us/guide/bgc/html/)
- **"Linux-UNIX-Programmierung"** von Jürgen Wolf
  - Fokus auf die Programmierung unter Linux und UNIX, ebenfalls als Openbook verfügbar: [openbook.rheinwerk-verlag.de/linux_unix_programmierung/](https://openbook.rheinwerk-verlag.de/linux_unix_programmierung/)
- **"The Linux Programming Interface"** von Michael Kerrisk
  - Ein tiefgehendes Buch über Systemprogrammierung unter Linux.
- **Weitere Online-Ressourcen**:
  - [C Programming – Wikibooks](https://en.wikibooks.org/wiki/C_Programming)
  - [Stack Overflow – C Tag](https://stackoverflow.com/questions/tagged/c)

## Erster Schritt: Hello World!

### Beispielcode (`hello.c`)

```c
#include <stdio.h> // Einbindung der Standard Input/Output-Bibliothek

int main() { // Hauptfunktion, der Einstiegspunkt des Programms
    printf("Servus Universe!\n"); // Ausgabe einer Zeichenkette auf dem Terminal
    return 0; // Rückgabewert 0 signalisiert erfolgreiche Ausführung
}
```

**Erklärungen:**

- `#include <stdio.h>`: Dieser Präprozessor-Befehl bindet die Standardbibliothek für Ein- und Ausgabe ein, die Funktionen wie `printf` bereitstellt.
- `int main()`: Die Hauptfunktion, die jedes C-Programm enthält. Die Ausführung beginnt hier.
- `printf("Servus Universe!\n");`: Gibt die Zeichenkette "Servus Universe!" gefolgt von einem Zeilenumbruch auf dem Bildschirm aus.
- `return 0;`: Beendet die `main`-Funktion und gibt 0 zurück, was oft als Indikator für einen erfolgreichen Programmablauf verwendet wird.

### Kompilieren des Programms

```bash
gcc hello.c -o helloworld
```

- **Erklärung**: Der Befehl `gcc` ist der GNU C Compiler. Er übersetzt den Quellcode `hello.c` in eine ausführbare Datei namens `helloworld`.

### Ausführen des Programms

```bash
./helloworld
```

- **Ausgabe**:

  ```
  Servus Universe!
  ```

- **Erklärung**: Das Programm wird gestartet, und die in `printf` angegebene Nachricht wird auf dem Terminal ausgegeben.

## Kommentare in C

- **Einzeilige Kommentare**: Beginnen mit `//` und reichen bis zum Ende der Zeile.
  ```c
  // Dies ist ein einzeiliger Kommentar
  ```
- **Mehrzeilige Kommentare**: Beginnen mit `/*` und enden mit `*/`. Sie können über mehrere Zeilen gehen.
  ```c
  /*
   * Dies ist ein
   * mehrzeiliger Kommentar
   */
  ```

**Warum Kommentare wichtig sind:**

- **Lesbarkeit**: Sie helfen, den Code für andere (und für sich selbst zu einem späteren Zeitpunkt) verständlicher zu machen.
- **Dokumentation**: Erläutern die Funktionsweise von Codeabschnitten oder weisen auf wichtige Details hin.

## Der Präprozessor

- **Funktion**: Bearbeitet den Quellcode vor dem eigentlichen Kompilierungsschritt.
- **Direktiven**: Anweisungen, die mit `#` beginnen.

### Wichtige Präprozessor-Direktiven

- `#include`: Bindet Header-Dateien ein.
  ```c
  #include <stdio.h>
  ```
- `#define`: Definiert Makros oder Konstanten.
  ```c
  #define PI 3.1415
  ```
- `#ifdef` / `#ifndef` / `#endif`: Bedingte Kompilierung.
  ```c
  #ifdef DEBUG
  printf("Debugging Informationen\n");
  #endif
  ```

**Anwendungsfälle:**

- **Modularisierung**: Erleichtert die Organisation von Code in verschiedene Dateien.
- **Plattformunabhängigkeit**: Ermöglicht Anpassungen für verschiedene Betriebssysteme oder Umgebungen.
- **Konstanten**: Verwendet, um feste Werte zu definieren, die im gesamten Programm verwendet werden.

## Funktionen in C

### Aufbau einer Funktion

```c
<Rückgabetyp> <Funktionsname>(<Parameterliste>) {
    // Funktionskörper
}
```

- **Rückgabetyp**: Der Datentyp des Wertes, den die Funktion zurückgibt. Bei `void` gibt die Funktion keinen Wert zurück.
- **Funktionsname**: Eindeutiger Name der Funktion.
- **Parameterliste**: Optional. Variablen, die der Funktion übergeben werden.

### Beispiele

1. **Funktion mit Rückgabewert**

   ```c
   int addiere(int a, int b) {
       return a + b;
   }
   ```

   - **Erklärung**: Die Funktion `addiere` nimmt zwei ganze Zahlen als Parameter und gibt ihre Summe zurück.

2. **Funktion ohne Rückgabewert**

   ```c
   void ausgabe(int x) {
       printf("%i", x);
   }
   ```

   - **Erklärung**: Die Funktion `ausgabe` gibt den übergebenen Wert auf dem Terminal aus und hat keinen Rückgabewert.

### Aufruf von Funktionen

- **Syntax**:
  ```c
  Rückgabewert = Funktionsname(Argumente);
  ```
- **Beispiel**:
  ```c
  int resultat = addiere(5, 7); // resultat erhält den Wert 12
  ```

**Warum Funktionen wichtig sind:**

- **Modularität**: Funktionen ermöglichen es, Code in logische Blöcke zu unterteilen.
- **Wiederverwendbarkeit**: Einmal geschriebene Funktionen können mehrfach verwendet werden.
- **Lesbarkeit**: Verbessern die Struktur und Verständlichkeit des Codes.

## Formatierte Ein- und Ausgabe

### Ausgabe mit `printf`

```c
printf("Das Ergebnis ist %i\n", variable);
```

- **Formatierungszeichen**: Platzhalter, die angeben, wie die nachfolgenden Argumente formatiert werden sollen.

### Wichtige Formatierungsanweisungen

- `%s`: Zeichenkette (String)
- `%c`: Einzelnes Zeichen (Character)
- `%i` oder `%d`: Ganze Zahl (Integer)
- `%f`: Gleitkommazahl (Float)
- `%lf`: Gleitkommazahl mit doppelter Genauigkeit (Double)
- `%x`: Hexadezimaldarstellung
- `%p`: Zeiger (Adresse)
- `%%`: Prozentzeichen

**Beispiel:**

```c
int alter = 25;
printf("Ich bin %i Jahre alt.\n", alter);
```

### Eingabe mit `scanf`

```c
int scanf(const char *format, ...);
```

- **Verwendung**:

  ```c
  int zahl;
  scanf("%i", &zahl);
  ```

  - **Achtung**: Bei `scanf` muss die Adresse der Variablen übergeben werden (mit `&`), damit der eingegebene Wert gespeichert werden kann.

**Hinweise:**

- **Eingabevalidierung**: `scanf` prüft nicht automatisch, ob die Eingabe dem erwarteten Format entspricht. Es ist daher wichtig, Eingaben zu validieren.
- **Bufferüberlauf**: Bei der Eingabe von Zeichenketten kann es zu Speicherproblemen kommen, wenn die Eingabe länger als der bereitgestellte Speicherplatz ist.

## Steuerzeichen (Escape-Sequenzen)

- **Definition**: Spezielle Zeichenfolgen, die nicht druckbare Zeichen oder spezielle Aktionen repräsentieren.
- **Verwendung**: Innerhalb von Zeichenketten, um z. B. Zeilenumbrüche oder Tabs einzufügen.

### Wichtige Steuerzeichen

- `\n`: Neue Zeile (Line Feed)
- `\r`: Wagenrücklauf (Carriage Return)
- `\t`: Horizontaler Tabulator
- `\"`: Doppeltes Anführungszeichen
- `\'`: Einfaches Anführungszeichen
- `\\`: Backslash
- `\0`: Nullzeichen (Ende einer Zeichenkette)

**Beispiel:**

```c
printf("Hallo,\nwelt!\n");
```

- **Ausgabe**:
  ```
  Hallo,
  welt!
  ```

## Variablen und Datentypen

### Allgemeines

- **Statische Typisierung**: Der Datentyp einer Variablen muss bei der Deklaration festgelegt werden und kann nicht geändert werden.
- **Deklaration**: Einführung einer Variablen mit Angabe ihres Typs.
  ```c
  int zahl;
  ```
- **Initialisierung**: Zuweisung eines Wertes bei der Deklaration.
  ```c
  int zahl = 5;
  ```

### Grundlegende Datentypen

| Typ              | Größe (Bytes)           | Wertebereich                                           |
| ---------------- | ----------------------- | ------------------------------------------------------ |
| `char`           | 1                       | -128 bis 127 (oder 0 bis 255, je nach Implementierung) |
| `unsigned char`  | 1                       | 0 bis 255                                              |
| `short`          | 2                       | -32.768 bis 32.767                                     |
| `unsigned short` | 2                       | 0 bis 65.535                                           |
| `int`            | 4                       | -2.147.483.648 bis 2.147.483.647                       |
| `unsigned int`   | 4                       | 0 bis 4.294.967.295                                    |
| `long`           | 8 (auf 64-Bit Systemen) | Sehr großer Wertebereich                               |
| `float`          | 4                       | Ca. ±3,4 × 10³⁸                                        |
| `double`         | 8                       | Ca. ±1,7 × 10³⁰⁸                                       |

**Hinweise:**

- **Plattformabhängigkeit**: Die Größe der Datentypen kann je nach System variieren, insbesondere bei `int`, `long` und `pointer`.
- **Präzision**: Gleitkommazahlen (`float` und `double`) haben begrenzte Genauigkeit und können Rundungsfehler verursachen.

### Beispiel: Variablendeklaration und -initialisierung

```c
int ganzeZahl = 10;
float gleitkommaZahl = 3.14;
char buchstabe = 'A';
```

## Operatoren in C

### Arithmetische Operatoren

- `+`: Addition
- `-`: Subtraktion
- `*`: Multiplikation
- `/`: Division
- `%`: Modulo (Rest der Ganzzahldivision)

**Beispiel:**

```c
int summe = 5 + 3; // summe ist 8
int rest = 10 % 3; // rest ist 1
```

### Zuweisungsoperatoren

- `=`: Zuweisung
- Kombinierte Operatoren: `+=`, `-=`, `*=`, `/=`, `%=`

**Beispiel:**

```c
int a = 5;
a += 3; // a ist jetzt 8
```

### Vergleichsoperatoren

- `==`: Gleichheit
- `!=`: Ungleichheit
- `<`: Kleiner als
- `>`: Größer als
- `<=`: Kleiner oder gleich
- `>=`: Größer oder gleich

**Beispiel:**

```c
if (a == b) {
    // Code, falls a gleich b ist
}
```

### Logische Operatoren

- `&&`: Logisches UND
- `||`: Logisches ODER
- `!`: Logisches NICHT

**Beispiel:**

```c
if (a > 0 && b > 0) {
    // Code, falls a und b beide positiv sind
}
```

### Inkrement- und Dekrementoperatoren

- `++`: Erhöht den Wert einer Variablen um 1
- `--`: Verringert den Wert einer Variablen um 1

**Beispiel:**

```c
int i = 0;
i++; // i ist jetzt 1
```

### Bitweise Operatoren

- `&`: Bitweises UND
- `|`: Bitweises ODER
- `^`: Bitweises exklusives ODER (XOR)
- `~`: Bitweises NICHT
- `<<`: Bitweises Linksverschieben
- `>>`: Bitweises Rechtsverschieben

**Anwendung von Bitoperatoren:**

- **Flags setzen und prüfen**
- **Effiziente Berechnungen**
- **Maskieren von Bits**

**Beispiel:**

```c
unsigned char flags = 0b00001111;
flags |= 0b00100000; // Setzt das fünfte Bit
```

## Zeiger (Pointer)

### Grundkonzepte

- **Definition**: Ein Zeiger ist eine Variable, die die Adresse einer anderen Variable speichert.
- **Deklaration**:
  ```c
  int *p;
  ```
  - `int *p` bedeutet, dass `p` ein Zeiger auf einen `int` ist.

### Wichtige Operatoren

- **Adressoperator `&`**: Liefert die Adresse einer Variablen.
  ```c
  int a = 5;
  int *p = &a; // p speichert die Adresse von a
  ```
- **Dereferenzierungsoperator `*`**: Greift auf den Wert an der Adresse zu, auf die der Zeiger zeigt.
  ```c
  int wert = *p; // wert ist jetzt 5
  ```

### Beispiel

```c
#include <stdio.h>

int main() {
    int a = 42;
    int *pa = &a;

    printf("Wert von a: %d\n", a);
    printf("Adresse von a: %p\n", (void*)&a);
    printf("Wert von pa (Adresse von a): %p\n", (void*)pa);
    printf("Wert an der Adresse, auf die pa zeigt: %d\n", *pa);

    return 0;
}
```

**Erklärungen:**

- **Zeigerarithmetik**: Zeiger können inkrementiert oder dekrementiert werden, wobei sie um die Größe des Typs verschoben werden, auf den sie zeigen.

## Arrays (Felder)

### Grundlagen

- **Definition**: Ein Array ist eine Sammlung von Elementen gleichen Datentyps, die sequenziell im Speicher angeordnet sind.
- **Deklaration**:
  ```c
  int arr[5]; // Ein Array von 5 ganzen Zahlen
  ```
- **Zugriff auf Elemente**:
  ```c
  arr[0] = 10; // Setzt das erste Element auf 10
  int wert = arr[0]; // Liest das erste Element
  ```

### Beziehung zwischen Arrays und Zeigern

- Ein Arrayname ohne Index ist ein Zeiger auf das erste Element des Arrays.
- **Beispiel**:
  ```c
  int *p = arr; // p zeigt auf arr[0]
  ```

### Iteration über ein Array

```c
for (int i = 0; i < 5; i++) {
    printf("Element %d: %d\n", i, arr[i]);
}
```

**Hinweise:**

- **Achtung bei der Arraygröße**: C überprüft nicht automatisch, ob auf gültige Indizes zugegriffen wird. Zugriff außerhalb des Arraybereichs führt zu undefiniertem Verhalten.
- **Mehrdimensionale Arrays**: Arrays können mehrdimensional sein, z. B. `int matrix[3][3];`

## Strukturen (`struct`)

### Verwendung

- **Definition**: Eine Struktur ist ein benutzerdefinierter Datentyp, der mehrere Variablen (Felder) unterschiedlicher Typen enthält.
- **Deklaration und Definition**:

  ```c
  struct Person {
      char name[50];
      int alter;
      float groesse;
  };
  ```

- **Initialisierung**:

  ```c
  struct Person person1 = {"Max Mustermann", 30, 1.80};
  ```

- **Zugriff auf Strukturmitglieder**:

  ```c
  printf("Name: %s\n", person1.name);
  printf("Alter: %d\n", person1.alter);
  ```

### Verwendung von `typedef`

- **Erleichterung**: Mit `typedef` kann ein Alias für den Strukturnamen erstellt werden.

  ```c
  typedef struct {
      char name[50];
      int alter;
      float groesse;
  } Person;

  Person person2 = {"Erika Musterfrau", 28, 1.65};
  ```

**Warum Strukturen wichtig sind:**

- **Organisation von Daten**: Strukturen ermöglichen es, zusammengehörige Daten zu gruppieren.
- **Komplexere Datenmodelle**: Sie sind die Grundlage für komplexe Datenstrukturen wie verknüpfte Listen, Bäume usw.

## Aufzählungen (`enum`)

### Verwendung

- **Definition**: Eine Aufzählung ist ein benutzerdefinierter Datentyp, der eine Liste von benannten Ganzzahlkonstanten definiert.
- **Deklaration**:

  ```c
  enum Wochentag { MONTAG, DIENSTAG, MITTWOCH, DONNERSTAG, FREITAG, SAMSTAG, SONNTAG };
  ```

- **Zuweisung und Verwendung**:

  ```c
  enum Wochentag heute = MITTWOCH;
  if (heute == MITTWOCH) {
      printf("Es ist Bergfest!\n");
  }
  ```

- **Standardwerte**: Standardmäßig beginnen die Werte bei 0 und erhöhen sich um 1. Die Werte können auch explizit gesetzt werden.

  ```c
  enum Status { OK = 0, FEHLER = -1, UNBEKANNT = 99 };
  ```

**Vorteile von Aufzählungen:**

- **Lesbarkeit**: Ersetzen von Zahlenwerten durch aussagekräftige Namen.
- **Wartbarkeit**: Erleichtern Änderungen, da nur die Aufzählung angepasst werden muss.

## Kontrollstrukturen

### Bedingte Anweisungen

#### `if` / `else`

```c
if (Bedingung) {
    // Code, wenn Bedingung wahr ist
} else {
    // Code, wenn Bedingung falsch ist
}
```

**Beispiel:**

```c
if (alter >= 18) {
    printf("Volljährig\n");
} else {
    printf("Minderjährig\n");
}
```

#### `switch` / `case`

- **Verwendung**: Für Mehrfachauswahl basierend auf dem Wert einer Variablen.

```c
switch (ausdruck) {
    case wert1:
        // Code
        break;
    case wert2:
        // Code
        break;
    default:
        // Code
        break;
}
```

**Beispiel:**

```c
int note = 2;

switch (note) {
    case 1:
        printf("Sehr gut\n");
        break;
    case 2:
        printf("Gut\n");
        break;
    case 3:
        printf("Befriedigend\n");
        break;
    default:
        printf("Nicht bestanden\n");
        break;
}
```

### Schleifen

#### `for`-Schleife

- **Syntax**:

  ```c
  for (Initialisierung; Bedingung; Aktualisierung) {
      // Schleifenkörper
  }
  ```

- **Beispiel**:

  ```c
  for (int i = 0; i < 10; i++) {
      printf("%d\n", i);
  }
  ```

#### `while`-Schleife

- **Syntax**:

  ```c
  while (Bedingung) {
      // Schleifenkörper
  }
  ```

- **Beispiel**:

  ```c
  int i = 0;
  while (i < 10) {
      printf("%d\n", i);
      i++;
  }
  ```

#### `do-while`-Schleife

- **Syntax**:

  ```c
  do {
      // Schleifenkörper
  } while (Bedingung);
  ```

- **Beispiel**:

  ```c
  int i = 0;
  do {
      printf("%d\n", i);
      i++;
  } while (i < 10);
  ```

**Unterschiede zwischen `while` und `do-while`:**

- Bei `while` wird die Bedingung am Anfang geprüft. Die Schleife kann also auch kein einziges Mal ausgeführt werden, wenn die Bedingung von Anfang an falsch ist.
- Bei `do-while` wird die Bedingung am Ende geprüft. Die Schleife wird also mindestens einmal ausgeführt.

## Speicherverwaltung

### Stack

- **Beschreibung**: Ein Bereich im Speicher, der für lokale Variablen und Funktionsaufrufe verwendet wird.
- **Eigenschaften**:
  - Automatische Speicherverwaltung.
  - Variablen auf dem Stack existieren nur während der Ausführung der Funktion.

### Heap

- **Beschreibung**: Ein Bereich im Speicher, der für dynamische Speicherverwaltung verwendet wird.
- **Eigenschaften**:
  - Speicher muss manuell angefordert und freigegeben werden.
  - Variablen auf dem Heap existieren, bis sie freigegeben werden oder das Programm endet.

### Dynamische Speicherverwaltung mit `malloc` und `free`

#### Speicher allokieren

```c
void *malloc(size_t size);
```

- **Verwendung**:

  ```c
  int *array = (int *)malloc(10 * sizeof(int));
  ```

- **Hinweise**:
  - `malloc` gibt einen Zeiger auf den Anfang des allokierten Speichers zurück.
  - Wenn nicht genügend Speicher verfügbar ist, gibt `malloc` `NULL` zurück.

#### Speicher freigeben

```c
void free(void *ptr);
```

- **Verwendung**:

  ```c
  free(array);
  ```

- **Wichtig**:
  - Jeder mit `malloc` (oder `calloc`, `realloc`) allokierte Speicher muss mit `free` freigegeben werden, um Speicherlecks zu vermeiden.
  - Nach dem Aufruf von `free` ist der Zeiger ungültig und sollte nicht mehr verwendet werden.

#### Beispiel

```c
int main() {
    int n = 5;
    int *zahlen = (int *)malloc(n * sizeof(int));

    if (zahlen == NULL) {
        printf("Speicher konnte nicht allokiert werden.\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        zahlen[i] = i * 10;
    }

    for (int i = 0; i < n; i++) {
        printf("%d ", zahlen[i]);
    }

    free(zahlen);
    return 0;
}
```

**Erklärungen:**

- **Speicherinitialisierung**: Der mit `malloc` allokierte Speicher ist nicht initialisiert. Die Werte darin sind unbestimmt und sollten vor der Verwendung gesetzt werden.

## Sichtbarkeit und Gültigkeitsbereich

### Globale Variablen

- **Definition**: Variablen, die außerhalb von Funktionen deklariert sind.
- **Sichtbarkeit**: Über das gesamte Programm hinweg verfügbar.
- **Lebensdauer**: Während der gesamten Programmlaufzeit.

### Lokale Variablen

- **Definition**: Variablen, die innerhalb von Funktionen oder Blöcken deklariert sind.
- **Sichtbarkeit**: Nur innerhalb des Blocks oder der Funktion.
- **Lebensdauer**: Von der Deklaration bis zum Ende des Blocks oder der Funktion.

### Beispiel

```c
int globaleVariable = 10; // Globale Variable

void funktion() {
    int lokaleVariable = 5; // Lokale Variable
    printf("%d\n", lokaleVariable);
}

int main() {
    funktion();
    printf("%d\n", globaleVariable);
    // printf("%d\n", lokaleVariable); // Fehler: lokaleVariable ist hier nicht sichtbar
    return 0;
}
```

## Parameterübergabe in Funktionen

### Call by Value (Wertübergabe)

- **Beschreibung**: Eine Kopie des Wertes wird an die Funktion übergeben.
- **Auswirkung**: Änderungen am Parameter innerhalb der Funktion haben keinen Einfluss auf die Originalvariable.

**Beispiel:**

```c
void verdoppeln(int x) {
    x = x * 2;
}

int main() {
    int a = 5;
    verdoppeln(a);
    printf("%d\n", a); // Ausgabe: 5
    return 0;
}
```

### Call by Reference (Referenzübergabe)

- **Beschreibung**: Die Adresse der Variablen wird an die Funktion übergeben.
- **Auswirkung**: Änderungen am Parameter innerhalb der Funktion beeinflussen die Originalvariable.

**Beispiel:**

```c
void verdoppeln(int *x) {
    *x = *x * 2;
}

int main() {
    int a = 5;
    verdoppeln(&a);
    printf("%d\n", a); // Ausgabe: 10
    return 0;
}
```

**Erklärungen:**

- **Zeiger als Parameter**: Um Call by Reference zu simulieren, werden Zeiger verwendet.
- **Vorteile**: Ermöglicht es Funktionen, mehrere Werte zurückzugeben oder große Strukturen effizient zu bearbeiten.

## Rekursion

### Was ist Rekursion?

- **Definition**: Eine Funktion ruft sich selbst auf, um ein Problem zu lösen, indem es in kleinere Teilprobleme zerlegt wird.
- **Voraussetzung**: Es muss eine Abbruchbedingung geben, um endlose Rekursionen zu vermeiden.

### Beispiel: Berechnung der Fibonacci-Zahlen

#### Rekursive Implementierung

```c
long fib_rec(long n) {
    if (n <= 1) {
        return n;
    } else {
        return fib_rec(n - 1) + fib_rec(n - 2);
    }
}
```

**Erklärungen:**

- **Abbruchbedingung**: Wenn `n` kleiner oder gleich 1 ist, wird `n` zurückgegeben.
- **Rekursiver Aufruf**: Die Funktion ruft sich selbst mit den Werten `n - 1` und `n - 2` auf.

#### Iterative Implementierung

```c
long fib_it(long n) {
    long a = 0, b = 1, temp;
    for (long i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
```

**Vergleich:**

- **Effizienz**: Die iterative Version ist in diesem Fall effizienter, da die rekursive Version viele redundante Berechnungen durchführt.
- **Stack Overflow Risiko**: Bei zu vielen rekursiven Aufrufen kann der Stack überlaufen.

## Kommandozeilenparameter

### Hauptfunktion mit Parametern

```c
int main(int argc, char *argv[]) {
    // Code
}
```

- **`argc`**: Anzahl der übergebenen Argumente (Argument Count).
- **`argv`**: Array der Argumente (Argument Vector).

### Verwendung

- **Zugriff auf Argumente**:

  ```c
  for (int i = 0; i < argc; i++) {
      printf("Argument %d: %s\n", i, argv[i]);
  }
  ```

- **Beispielaufruf**:

  ```bash
  ./programm datei.txt 123
  ```

- **Erklärung**:
  - `argv[0]`: Name des Programms (`./programm`)
  - `argv[1]`: Erstes Argument (`datei.txt`)
  - `argv[2]`: Zweites Argument (`123`)

**Anwendungsfälle:**

- **Dateinamen übergeben**
- **Optionen und Flags setzen**
- **Eingabewerte bereitstellen**

## Man-Pages lesen

- **Man-Pages**: Systeminterne Dokumentation unter Unix/Linux-Systemen.

### Verwendung

```bash
man <Thema>
```

- **Beispiel**:

  ```bash
  man 3 printf
  ```

  - **`3`**: Sektion 3, die sich auf Bibliotheksfunktionen bezieht.
  - **`printf`**: Name der Funktion.

### Sektionen

1. Benutzerbefehle
2. Systemaufrufe
3. Bibliotheksfunktionen
4. Geräteknoten
5. Dateiformate und Konventionen
6. Spiele
7. Makropakete und Konventionen
8. Systemadministration

**Tipps:**

- **`man man`**: Zeigt die Man-Page zum Man-Page-System selbst.
- **Suche innerhalb der Man-Page**: Mit `/` gefolgt von dem Suchbegriff.

## Ein- und Ausgabe mit Dateien

### Streams und Dateien

- **Definition**: Ein Stream ist eine abstrakte Verbindung zwischen einem Programm und einer Datenquelle oder -senke, wie einer Datei, einem Gerät oder einem Speicherbereich.
- **Dateityp**: Repräsentiert durch den Typ `FILE` aus der Header-Datei `<stdio.h>`.

### Öffnen und Schließen von Dateien

- **Öffnen einer Datei**:

  ```c
  FILE *fopen(const char *filename, const char *mode);
  ```

  - **Modi**:
    - `"r"`: Lesen
    - `"w"`: Schreiben (Datei wird erstellt oder überschrieben)
    - `"a"`: Anfügen an bestehende Datei
    - `"r+"`: Lesen und Schreiben

- **Schließen einer Datei**:

  ```c
  int fclose(FILE *stream);
  ```

### Lesen und Schreiben

- **Schreiben**:

  ```c
  fprintf(FILE *stream, const char *format, ...);
  ```

- **Lesen**:

  ```c
  fscanf(FILE *stream, const char *format, ...);
  ```

### Beispiel

```c
FILE *datei = fopen("daten.txt", "w");
if (datei != NULL) {
    fprintf(datei, "Hallo Datei!\n");
    fclose(datei);
} else {
    printf("Fehler beim Öffnen der Datei.\n");
}
```

**Erklärungen:**

- **Fehlerprüfung**: Es ist wichtig, zu überprüfen, ob `fopen` erfolgreich war.
- **Pufferung**: Ausgaben werden möglicherweise gepuffert und nicht sofort in die Datei geschrieben. Durch `fclose` wird der Puffer geleert.

### Vordefinierte Streams

- **`stdin`**: Standard-Eingabestrom (z. B. Tastatureingaben)
- **`stdout`**: Standard-Ausgabestrom (z. B. Terminalausgabe)
- **`stderr`**: Standard-Fehlerstrom (für Fehlermeldungen)

### Alternative Funktionen (Low-Level I/O)

- **Systemaufrufe**:

  - `open()`, `close()`, `read()`, `write()`

- **Verwendung von Dateideskriptoren**: Ganzzahlige Werte, die Dateien repräsentieren.

- **Anwendungsfälle**:

  - Erforderlich für spezielle Modi wie nicht-blockierende Ein-/Ausgabe.
  - Mehr Kontrolle über die Ein-/Ausgabevorgänge.

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
