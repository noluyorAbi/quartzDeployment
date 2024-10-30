---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 30. October 2024, 19:51
date modified: Wednesday, 30. October 2024, 20:30
---

# **Multiple-Choice-Fragen (MC)**

## **1. Einführung in C**

**MC1:** In welchem Jahrzehnt wurde die Programmiersprache C entwickelt?

- A) 1950er
- B) 1960er
- C) 1970er
- D) 1980er

> [!success]- Lösung
>
> - **C) 1970er**: C wurde in den frühen 1970er Jahren von Dennis Ritchie bei Bell Labs entwickelt.

**MC2:** Wofür ist C besonders gut geeignet? (Mehrere Antworten möglich)

- A) Webentwicklung
- B) Betriebssystem- und Embedded-Programmierung
- C) Datenanalyse
- D) Grafikdesign

> [!success]- Lösung
>
> - **B) Betriebssystem- und Embedded-Programmierung**: C bietet niedrige Abstraktionsebenen und hohe Effizienz, ideal für Betriebssysteme und eingebettete Systeme.

## **2. Relevanz von C**

**MC3:** Warum bleibt C auch heute noch eine weit verbreitete Programmiersprache? (Mehrere Antworten möglich)

- A) Sie ist die modernste Sprache
- B) Hohe Leistung und Nähe zur Hardware
- C) Umfangreiche integrierte Bibliotheken
- D) Plattformunabhängigkeit

> [!success]- Lösung
>
> - **B) Hohe Leistung und Nähe zur Hardware**: C ermöglicht effiziente Speicher- und Hardwarekontrolle.
> - **D) Plattformunabhängigkeit**: C-Code kann auf verschiedenen Plattformen kompiliert und ausgeführt werden.

## **3. Grundprinzipien von C**

**MC4:** Welches Prinzip ist für C charakteristisch? (Mehrere Antworten möglich)

- A) Hohe Abstraktion von der Hardware
- B) Effizienz vor Sicherheit
- C) Automatische Fehlerbehandlung
- D) Manuelle Speicherverwaltung

> [!success]- Lösung
>
> - **B) Effizienz vor Sicherheit**: C legt Wert auf schnelle Ausführung und Ressourcenmanagement, bietet jedoch wenige Sicherheitsmechanismen.
> - **D) Manuelle Speicherverwaltung**: Programmierer müssen Speicher explizit verwalten, z.B. mit `malloc` und `free`.

**MC5:** Welche der folgenden Aussagen trifft auf C zu? (Mehrere Antworten möglich)

- A) Es bietet umfangreiche Schutzmechanismen
- B) Der Programmierer hat hohe Kontrolle
- C) Es ist eine rein funktionale Sprache
- D) Es verwendet Garbage Collection

> [!success]- Lösung
>
> - **B) Der Programmierer hat hohe Kontrolle**: C ermöglicht detaillierte Kontrolle über Speicher und Hardware.
> - **D) Es verwendet Garbage Collection**: **Falsch** – C verwendet keine automatische Speicherbereinigung; dies muss manuell erfolgen.

## **4. Literaturhinweise**

**MC6:** Welche Ressource ist am besten geeignet, um C-Programmierung zu erlernen? (Mehrere Antworten möglich)

- A) Ein Roman über Programmierer
- B) Fachbücher und Online-Tutorials
- C) Videospiele
- D) Soziale Medien

> [!success]- Lösung
>
> - **B) Fachbücher und Online-Tutorials**: Diese bieten strukturierte und detaillierte Informationen zur C-Programmierung.

## **5. Hello World Beispiel**

**MC7:** Welches Schlüsselwort wird in C verwendet, um Text auf dem Bildschirm auszugeben?

- A) print
- B) echo
- C) printf
- D) display

> [!success]- Lösung
>
> - **C) printf**: Die Funktion `printf` wird verwendet, um formatierte Ausgaben auf dem Bildschirm darzustellen.

**MC8:** Wie lautet die korrekte Syntax für das "Hello World"-Programm in C? (Mehrere Antworten möglich)

- A) echo("Hello World");
- B) printf("Hello World");
- C) print("Hello World");
- D) display("Hello World");

> [!success]- Lösung
>
> - **B) printf("Hello World");**: Dies ist die korrekte Funktion und Syntax für die Ausgabe von "Hello World" in C.

## **6. Kommentare**

**MC9:** Wie wird ein mehrzeiliger Kommentar in C eingeleitet?

- A) `//`
- B) `/*`
- C) `<!--`
- D) `#`

> [!success]- Lösung
>
> - **B) /\***: Mehrzeilige Kommentare beginnen mit `/*` und enden mit `*/`.

**MC10:** Welche der folgenden Optionen ist ein einzeiliger Kommentar in C?

- A) `/*`
- B) `#`
- C) `//`
- D) `--`

> [!success]- Lösung
>
> - **C) //**: Einzeilige Kommentare beginnen mit `//`.

## **7. Präprozessor**

**MC11:** Welche Präprozessor-Direktive wird verwendet, um eine Header-Datei einzubinden?

- A) `#define`
- B) `#include`
- C) `#import`
- D) `#header`

> [!success]- Lösung
>
> - **B) #include**: Diese Direktive bindet Header-Dateien in den Code ein.

**MC12:** Was bewirkt die Direktive `#define` in C? (Mehrere Antworten möglich)

- A) Definiert eine Konstante oder Makro
- B) Importiert eine Bibliothek
- C) Beendet das Programm
- D) Deklariert eine Variable

> [!success]- Lösung
>
> - **A) Definiert eine Konstante oder Makro**: `#define` wird verwendet, um Makros oder Konstanten zu definieren.

## **8. Funktionen**

**MC13:** Wie wird eine Funktion in C definiert?

- A) function myFunc() {}
- B) def myFunc() {}
- C) void myFunc() {}
- D) func myFunc() {}

> [!success]- Lösung
>
> - **C) void myFunc() {}**: Dies ist die korrekte Syntax zur Definition einer Funktion ohne Rückgabewert.

**MC14:** Welche der folgenden Aussagen ist korrekt bezüglich Funktionen in C? (Mehrere Antworten möglich)

- A) Funktionen können keine Rückgabewerte haben
- B) Funktionen müssen immer einen Parameter haben
- C) Funktionen können rekursiv aufgerufen werden
- D) Funktionen werden automatisch parallel ausgeführt

> [!success]- Lösung
>
> - **A) Funktionen können keine Rückgabewerte haben**: Funktionen können `void` sein und keine Rückgabewerte haben.
> - **C) Funktionen können rekursiv aufgerufen werden**: C unterstützt Rekursion.

## **9. Ein-/Ausgabe**

**MC15:** Welches Formatierungszeichen wird in `printf` verwendet, um einen Ganzzahlwert auszugeben?

- A) %f
- B) %d
- C) %s
- D) %c

> [!success]- Lösung
>
> - **B) %d**: `%d` wird für die Ausgabe von Ganzzahlen verwendet.

**MC16:** Welche Funktion wird in C verwendet, um Benutzereingaben zu lesen?

- A) scanf
- B) input
- C) read
- D) get

> [!success]- Lösung
>
> - **A) scanf**: `scanf` wird verwendet, um formatierte Eingaben von der Standardeingabe zu lesen.

## **10. Steuerzeichen**

**MC17:** Was bewirkt das Steuerzeichen `\n` in einem String?

- A) Tabulator
- B) Neue Zeile
- C) Nullterminierung
- D) Rückwärtsschrägstrich

> [!success]- Lösung
>
> - **B) Neue Zeile**: `\n` erzeugt einen Zeilenumbruch.

**MC18:** Welches Steuerzeichen wird verwendet, um einen Tabulator einzufügen?

- A) \n
- B) \t
- C) \0
- D) \\

> [!success]- Lösung
>
> - **B) \t**: `\t` fügt einen Tabulator ein.

## **11. Variablen**

**MC19:** Wie wird eine ganzzahlige Variable in C deklariert?

- A) integer x;
- B) int x;
- C) var x;
- D) number x;

> [!success]- Lösung
>
> - **B) int x;**: Dies ist die korrekte Deklaration einer ganzzahligen Variable in C.

**MC20:** Welche der folgenden Namen entspricht den Namenskonventionen in C? (Mehrere Antworten möglich)

- A) 1variable
- B) my_variable
- C) my-variable
- D) my variable

> [!success]- Lösung
>
> - **B) my_variable**: Unterstriche sind in C-Namen erlaubt.
> - **D) my variable**: **Falsch** – Leerzeichen sind nicht erlaubt.

## **12. Basistypen in C**

**MC21:** Welcher der folgenden ist kein Basistyp in C?

- A) int
- B) float
- C) string
- D) char

> [!success]- Lösung
>
> - **C) string**: C hat keinen eingebauten `string`-Typ; Zeichenketten werden als Arrays von `char` dargestellt.

**MC22:** Welche Aussage über den `char`-Datentyp ist korrekt?

- A) Er belegt 4 Byte Speicher
- B) Er kann Zeichen wie 'a' oder '1' speichern
- C) Er wird für Fließkommazahlen verwendet
- D) Er ist ein komplexer Datentyp

> [!success]- Lösung
>
> - **B) Er kann Zeichen wie 'a' oder '1' speichern**: `char` speichert einzelne Zeichen.
> - **A) Er belegt 4 Byte Speicher**: **Falsch** – `char` belegt typischerweise 1 Byte.

## **13. Deklaration vs Definition**

**MC23:** Was ist der Unterschied zwischen Deklaration und Definition in C?

- A) Deklaration reserviert Speicher, Definition nicht
- B) Definition reserviert Speicher, Deklaration nicht
- C) Beide bedeuten dasselbe
- D) Deklaration definiert den Typ, Definition den Wert

> [!success]- Lösung
>
> - **B) Definition reserviert Speicher, Deklaration nicht**: Deklaration informiert den Compiler über den Typ und Namen, während die Definition Speicher reserviert.

**MC24:** Welche der folgenden Zeilen ist eine Definition einer Variable?

- A) extern int x;
- B) int x;
- C) int x;
- D) void func();

> [!success]- Lösung
>
> - **B) int x;**: Dies ist eine Definition, die Speicher für `x` reserviert.
> - **C) int x;**: Wiederholung – ebenfalls eine Definition.

## **14. Operatoren**

**MC25:** Welcher Operator wird für die Addition verwendet?

- A) -
- B) \*
- C) +
- D) /

> [!success]- Lösung
>
> - **C) +**: Der Plus-Operator wird für die Addition verwendet.

**MC26:** Welcher Operator prüft auf Gleichheit?

- A) =
- B) ==
- C) !=
- D) ===

> [!success]- Lösung
>
> - **B) ==**: Der Doppelgleichheitsoperator prüft auf Gleichheit.
> - **D) ===**: **Falsch** – Dieser Operator existiert nicht in C.

## **15. Binäre Flags**

**MC27:** Welche Bitoperation setzt ein bestimmtes Bit auf 1?

- A) AND (&)
- B) OR (|)
- C) XOR (^)
- D) NOT (~)

> [!success]- Lösung
>
> - **B) OR (|)**: Mit der OR-Operation kann ein bestimmtes Bit auf 1 gesetzt werden.

**MC28:** Was bewirkt der Bitshift-Operator `<<` in C?

- A) Verschiebt Bits nach rechts
- B) Verschiebt Bits nach links
- C) Invertiert alle Bits
- D) Setzt alle Bits auf 0

> [!success]- Lösung
>
> - **B) Verschiebt Bits nach links**: `<<` verschiebt die Bits einer Zahl nach links.

## **16. Pointer (Zeiger)**

**MC29:** Was ist ein Pointer in C?

- A) Eine Variable, die einen Wert speichert
- B) Eine Funktion, die eine Adresse speichert
- C) Eine Variable, die eine Speicheradresse speichert
- D) Ein Datentyp für Zeichenketten

> [!success]- Lösung
>
> - **C) Eine Variable, die eine Speicheradresse speichert**: Pointer halten die Adresse einer anderen Variable.

**MC30:** Welches Symbol wird verwendet, um den Wert zu dereferenzieren, auf den ein Pointer zeigt?

- A) &
- B) \*
- C) %
- D) #

> [!success]- Lösung
>
> - **B) \***: Das Dereferenzierungsoperator `*` wird verwendet, um auf den Wert zuzugreifen, auf den der Pointer zeigt.

## **17. Arrays**

**MC31:** Wie wird ein eindimensionales Array von 10 Ganzzahlen in C deklariert?

- A) int array[10];
- B) array int[10];
- C) int[10] array;
- D) array int(10);

> [!success]- Lösung
>
> - **A) int array[10];**: Dies ist die korrekte Syntax zur Deklaration eines Arrays von 10 Ganzzahlen.

**MC32:** Welche Aussage über Arrays in C ist korrekt?

- A) Die Größe eines Arrays kann zur Laufzeit geändert werden
- B) Arrays können nur aus Zeichen bestehen
- C) Arrays sind statische Felder mit fester Größe
- D) Arrays sind automatisch sortiert

> [!success]- Lösung
>
> - **C) Arrays sind statische Felder mit fester Größe**: Die Größe von Arrays wird bei der Deklaration festgelegt und kann zur Laufzeit nicht geändert werden.

## **18. Arrayadressierung**

**MC33:** Wie greift man auf das dritte Element eines Arrays `arr` zu?

- A) arr[2]
- B) arr[3]
- C) arr{3}
- D) arr(2)

> [!success]- Lösung
>
> - **A) arr[2]**: Arrays sind nullbasiert; das dritte Element ist `arr[2]`.

**MC34:** Was ist die Adresse des ersten Elements eines Arrays `arr` gleich?

- A) &arr[1]
- B) arr + 1
- C) arr
- D) &arr

> [!success]- Lösung
>
> - **C) arr**: Der Name des Arrays `arr` repräsentiert die Adresse des ersten Elements.

## **19. Strukturen**

**MC35:** Wie definiert man eine Struktur in C?

- A) struct Person { char name[50]; int age; };
- B) class Person { string name; int age; };
- C) structure Person { string name; int age; };
- D) typedef Person { char name[50]; int age; };

> [!success]- Lösung
>
> - **A) struct Person { char name[50]; int age; };**: Dies ist die korrekte Syntax zur Definition einer Struktur.

**MC36:** Wie greift man auf das Feld `age` einer Strukturvariable `p` zu?

- A) p.age
- B) p->age
- C) p[age]
- D) age(p)

> [!success]- Lösung
>
> - **A) p.age**: Bei direkten Strukturvariablen wird der Punktoperator verwendet.
> - **B) p->age**: Bei Zeigern auf Strukturen wird der Pfeiloperator verwendet.

## **20. Aufzählungen (enum)**

**MC37:** Was ist der Standardwert des ersten Elements in einer `enum` in C, wenn kein Wert zugewiesen wird?

- A) 1
- B) -1
- C) 0
- D) Es ist undefiniert

> [!success]- Lösung
>
> - **C) 0**: Ohne explizite Zuordnung beginnt die Zählung bei 0.

**MC38:** Wie deklariert man eine `enum` für Wochentage in C?

- A) enum Wochentag { Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag };
- B) enum Wochentag = { Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag };
- C) enum Wochentag (Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag);
- D) enum Wochentag { "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag" };

> [!success]- Lösung
>
> - **A) enum Wochentag { Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag };**: Dies ist die korrekte Syntax zur Deklaration einer `enum`.

## **21. Vereinigungen (union)**

**MC39:** Was ist eine `union` in C?

- A) Eine Datenstruktur, die nur einen Typ enthält
- B) Eine Datenstruktur, die mehrere Typen im gleichen Speicher speichern kann
- C) Eine spezielle Art von Struktur mit festen Werten
- D) Eine Funktion zur Speicherverwaltung

> [!success]- Lösung
>
> - **B) Eine Datenstruktur, die mehrere Typen im gleichen Speicher speichern kann**: `union` erlaubt die Speicherung verschiedener Datentypen an derselben Speicheradresse.

**MC40:** Wie groß ist der Speicher einer `union`, die ein `int` und ein `float` enthält?

- A) Größe von `int` + Größe von `float`
- B) Größe des größeren Typs
- C) Größe des kleineren Typs
- D) Unabhängig von den enthaltenen Typen

> [!success]- Lösung
>
> - **B) Größe des größeren Typs**: Eine `union` reserviert genug Speicher, um den größten enthaltenen Typ zu speichern.

## **22. Kontrollfluss - if/else**

**MC41:** Welche der folgenden Bedingungen ist korrekt in einer `if`-Anweisung in C?

- A) if (a = 5)
- B) if (a == 5)
- C) if (a === 5)
- D) if (a != 5)

> [!success]- Lösung
>
> - **B) if (a == 5)**: Der Vergleichsoperator `==` wird verwendet, um Gleichheit zu prüfen.
> - **D) if (a != 5)**: Dies ist ebenfalls korrekt für Ungleichheit.

**MC42:** Wie lautet die korrekte Syntax für eine `if-else`-Anweisung in C?

- A) if (Bedingung) { /_ Code _/ } else { /_ Code _/ }
- B) if { Bedingung } else { /_ Code _/ }
- C) if (Bedingung) /_ Code _/ else /_ Code _/
- D) if: (Bedingung) { /_ Code _/ } else: { /_ Code _/ }

> [!success]- Lösung
>
> - **A) if (Bedingung) { /_ Code _/ } else { /_ Code _/ }**: Dies ist die korrekte Syntax.

## **23. Kontrollfluss - switch**

**MC43:** Welche Datenarten können in einer `switch`-Anweisung in C verwendet werden?

- A) Nur Ganzzahlen und Zeichen
- B) Alle Datentypen
- C) Nur Zeichenketten
- D) Nur Fließkommazahlen

> [!success]- Lösung
>
> - **A) Nur Ganzzahlen und Zeichen**: `switch` unterstützt `int`, `char` und ähnliche Typen.

**MC44:** Was bewirkt das `break`-Statement innerhalb eines `case` in einer `switch`-Anweisung?

- A) Beendet das gesamte Programm
- B) Überspringt den aktuellen `case`
- C) Verhindert das Durchfallen in den nächsten `case`
- D) Führt den nächsten `case` sofort aus

> [!success]- Lösung
>
> - **C) Verhindert das Durchfallen in den nächsten `case`**: `break` beendet die `switch`-Anweisung nach dem aktuellen `case`.

## **24. Schleifen**

**MC45:** Welche Schleife garantiert mindestens eine Iteration?

- A) for
- B) while
- C) do-while
- D) foreach

> [!success]- Lösung
>
> - **C) do-while**: Eine `do-while`-Schleife führt den Codeblock mindestens einmal aus.

**MC46:** Wie lautet die korrekte Syntax für eine `for`-Schleife in C?

- A) for (int i = 0; i < 10; i++) { /_ Code _/ }
- B) for int i = 0; i < 10; i++ { /_ Code _/ }
- C) for (i = 0; i < 10; i++) /_ Code _/
- D) for i from 0 to 10 { /_ Code _/ }

> [!success]- Lösung
>
> - **A) for (int i = 0; i < 10; i++) { /_ Code _/ }**: Dies ist die korrekte Syntax.

## **25. Speicherverwaltung**

**MC47:** Was ist der Hauptunterschied zwischen Stack und Heap?

- A) Stack ist größer als Heap
- B) Stack verwaltet automatisch Speicher, Heap erfordert manuelle Verwaltung
- C) Heap ist schneller als Stack
- D) Heap wird für lokale Variablen verwendet

> [!success]- Lösung
>
> - **B) Stack verwaltet automatisch Speicher, Heap erfordert manuelle Verwaltung**: Der Stack verwaltet Speicher automatisch bei Funktionsaufrufen, während der Heap manuelle Speicherverwaltung benötigt.

**MC48:** Welche Speicherstruktur wird für lokale Variablen verwendet?

- A) Heap
- B) Stack
- C) Register
- D) Code-Segment

> [!success]- Lösung
>
> - **B) Stack**: Lokale Variablen werden auf dem Stack gespeichert.

## **26. Stack-Funktionsaufruf**

**MC49:** Was wird beim Funktionsaufruf auf dem Stack abgelegt?

- A) Nur der Rückgabewert
- B) Nur die Parameter
- C) Der Stack-Frame, einschließlich Rücksprungadresse und lokale Variablen
- D) Der gesamte Programmcode

> [!success]- Lösung
>
> - **C) Der Stack-Frame, einschließlich Rücksprungadresse und lokale Variablen**: Beim Funktionsaufruf wird ein neuer Stack-Frame erstellt.

**MC50:** Was passiert, wenn eine Funktion aufgerufen wird?

- A) Ein neuer Heap-Block wird erstellt
- B) Ein neuer Stack-Frame wird erstellt
- C) Das Programm wird neu gestartet
- D) Die vorherige Funktion wird gelöscht

> [!success]- Lösung
>
> - **B) Ein neuer Stack-Frame wird erstellt**: Jeder Funktionsaufruf erstellt einen neuen Stack-Frame.

## **27. Dynamischer Speicher**

**MC51:** Welche Funktion wird verwendet, um Speicher im Heap zu reservieren?

- A) malloc
- B) alloc
- C) reserve
- D) create

> [!success]- Lösung
>
> - **A) malloc**: `malloc` reserviert Speicher im Heap.

**MC52:** Wie gibt man dynamisch reservierten Speicher wieder frei?

- A) delete
- B) free
- C) release
- D) remove

> [!success]- Lösung
>
> - **B) free**: `free` gibt den mit `malloc` reservierten Speicher wieder frei.

## **28. Sichtbarkeit von Variablen**

**MC53:** Was bestimmt die Sichtbarkeit einer Variablen in C?

- A) Der Datentyp der Variablen
- B) Der Speicherort (global oder lokal)
- C) Die Größe der Variablen
- D) Der Wert der Variablen

> [!success]- Lösung
>
> - **B) Der Speicherort (global oder lokal)**: Globale Variablen sind überall sichtbar, lokale nur innerhalb ihrer Funktion.

**MC54:** Welche Variable ist innerhalb einer Funktion **nicht** sichtbar?

- A) Lokale Variable
- B) Globale Variable
- C) Variable mit externem Link
- D) Statische Variable außerhalb der Funktion

> [!success]- Lösung
>
> - **D) Statische Variable außerhalb der Funktion**: Statische Variablen außerhalb einer Funktion sind nur innerhalb der Datei sichtbar, nicht innerhalb der Funktion.

## **29. Parameterübergabe**

**MC55:** Was bedeutet Call-by-Value?

- A) Der Wert des Arguments wird kopiert und an die Funktion übergeben
- B) Die Adresse des Arguments wird übergeben
- C) Der Zeiger auf das Argument wird übergeben
- D) Es gibt keinen Unterschied

> [!success]- Lösung
>
> - **A) Der Wert des Arguments wird kopiert und an die Funktion übergeben**: Änderungen am Parameter wirken sich nicht auf das Original aus.

**MC56:** Wie übergibt man einen Parameter per Referenz in C?

- A) Durch Kopieren des Wertes
- B) Durch Übergabe der Adresse des Wertes
- C) Durch Verwendung eines globalen Wertes
- D) C unterstützt keine Referenzübergabe

> [!success]- Lösung
>
> - **B) Durch Übergabe der Adresse des Wertes**: Verwendung von Pointern ermöglicht eine Referenzübergabe.

## **30. Rekursion**

**MC57:** Was ist eine rekursive Funktion?

- A) Eine Funktion, die nur einmal aufgerufen wird
- B) Eine Funktion, die sich selbst aufruft
- C) Eine Funktion ohne Rückgabewert
- D) Eine Funktion mit variabler Parameteranzahl

> [!success]- Lösung
>
> - **B) Eine Funktion, die sich selbst aufruft**: Rekursion bezeichnet das wiederholte Aufrufen derselben Funktion.

**MC58:** Welches Problem kann auftreten, wenn eine rekursive Funktion keine Abbruchbedingung hat?

- A) Compilerfehler
- B) Speicherleck
- C) Stack Overflow
- D) Unendliche Schleife

> [!success]- Lösung
>
> - **C) Stack Overflow**: Ohne Abbruchbedingung kann die Rekursion unendlich tief werden und den Stack überlaufen.

## **31. Programmparameter**

**MC59:** Wie lauten die Parameter der `main`-Funktion in C, die Kommandozeilenargumente akzeptiert?

- A) int main()
- B) int main(int argc, char \*argv[])
- C) void main()
- D) void main(int argc, char argv[])

> [!success]- Lösung
>
> - **B) int main(int argc, char \*argv[])**: Dies ermöglicht den Zugriff auf Kommandozeilenargumente.

**MC60:** Was repräsentiert `argc` in der `main`-Funktion?

- A) Die Anzahl der Zeichen in einem Argument
- B) Die Anzahl der übergebenen Argumente
- C) Das erste Argument
- D) Den Programmnamen

> [!success]- Lösung
>
> - **B) Die Anzahl der übergebenen Argumente**: `argc` zählt die Anzahl der Kommandozeilenargumente.

## **32. Nutzung der Man-Pages**

**MC61:** Was sind Man-Pages in Unix/Linux-Systemen?

- A) Handbücher für Benutzer und Entwickler
- B) Ausführbare Programme
- C) Grafische Benutzeroberflächen
- D) Systemprotokolle

> [!success]- Lösung
>
> - **A) Handbücher für Benutzer und Entwickler**: Man-Pages bieten Dokumentation zu Befehlen und Funktionen.

**MC62:** Wie greift man auf die Man-Page einer Funktion wie `printf` zu?

- A) man printf
- B) help printf
- C) printf --help
- D) info printf

> [!success]- Lösung
>
> - **A) man printf**: Dieser Befehl öffnet die Man-Page für `printf`.

## **33. Ein-/Ausgabe mit Dateien**

**MC63:** Welche Funktion wird verwendet, um eine Datei zum Lesen zu öffnen?

- A) fopen("datei.txt", "w");
- B) fopen("datei.txt", "r");
- C) open("datei.txt", "read");
- D) read("datei.txt");

> [!success]- Lösung
>
> - **B) fopen("datei.txt", "r");**: Der Modus `"r"` öffnet eine Datei zum Lesen.

**MC64:** Wie schließt man eine geöffnete Datei in C?

- A) close(file);
- B) fclose(file);
- C) end(file);
- D) stop(file);

> [!success]- Lösung
>
> - **B) fclose(file);**: `fclose` schließt eine geöffnete Datei.

## **34. Alternative Dateifunktionen**

**MC65:** Welche Funktion wird für Low-Level-Dateizugriffe verwendet?

- A) fopen
- B) write
- C) fprintf
- D) fread

> [!success]- Lösung
>
> - **B) write**: `write` ist eine Low-Level-Funktion für Dateizugriffe.

**MC66:** Welche Funktion dient zum Lesen von Daten in Low-Level-Dateioperationen?

- A) fread
- B) read
- C) getc
- D) scanf

> [!success]- Lösung
>
> - **B) read**: `read` wird für Low-Level-Dateioperationen verwendet.

---

# **Lückentextfragen (LT)**

## **1. Einführung in C**

**LT1:** Die Programmiersprache C wurde in den ****\_\_**** Jahren entwickelt und ist besonders geeignet für die ****\_\_**** und Embedded-Programmierung.

> [!success]- Lösung
>
> - **1970er**, **Betriebssystem-**

## **2. Relevanz von C**

**LT2:** Obwohl C eine ältere Sprache ist, bleibt sie aufgrund ihrer ****\_\_**** und ****\_\_**** weiterhin weit verbreitet.

> [!success]- Lösung
>
> - **Effizienz**, **Nähe zur Hardware**

## **3. Grundprinzipien von C**

**LT3:** In C hat der Programmierer eine hohe ****\_\_**** über den Code, was zu großer ****\_\_**** führt, jedoch auf Kosten der ****\_\_****.

> [!success]- Lösung
>
> - **Kontrolle**, **Leistung**, **Sicherheit**

## **4. Hello World Beispiel**

**LT4:** Das einfachste C-Programm verwendet die Funktion ****\_\_**** zur Ausgabe von Text auf dem Bildschirm.

> [!success]- Lösung
>
> - **printf**

## **5. Kommentare**

**LT5:** Ein einzeiliger Kommentar in C beginnt mit ****\_\_****, während ein mehrzeiliger Kommentar mit **/\*** beginnt und endet.

> [!success]- Lösung
>
> - **//**, **/\***

## **6. Präprozessor**

**LT6:** Die Präprozessor-Direktive ****\_\_**** wird verwendet, um Header-Dateien einzubinden, und ****\_\_**** dient zur Definition von Konstanten oder Makros.

> [!success]- Lösung
>
> - **#include**, **#define**

## **7. Funktionen**

**LT7:** Eine Funktion in C kann einen ****\_\_**** zurückgeben und optional ****\_\_**** entgegennehmen.

> [!success]- Lösung
>
> - **Rückgabewert**, **Parameter**

## **8. Ein-/Ausgabe**

**LT8:** Die Funktion ****\_\_**** wird verwendet, um formatierte Ausgaben zu erzeugen, während ****\_\_**** zur Eingabe von Daten genutzt wird.

> [!success]- Lösung
>
> - **printf**, **scanf**

## **9. Steuerzeichen**

**LT9:** Das Steuerzeichen **\n** erzeugt einen Zeilenumbruch, und **\t** fügt einen Tabulator ein.

> [!success]- Lösung
>
> - **\n**, **\t**

## **10. Variablen**

**LT10:** Variablen in C müssen vor ihrer Verwendung ****\_\_**** werden, wobei der Typ und der ****\_\_**** beachtet werden müssen.

> [!success]- Lösung
>
> - **deklariert**, **Name**

## **11. Basistypen in C**

**LT11:** Die Basistypen in C umfassen unter anderem ****\_\_****, ****\_\_**** und ****\_\_****.

> [!success]- Lösung
>
> - **int**, **float**, **char**

## **12. Deklaration vs Definition**

**LT12:** Eine Deklaration informiert den Compiler über den ****\_\_**** einer Variable, während eine Definition tatsächlich ****\_\_**** Speicher dafür reserviert.

> [!success]- Lösung
>
> - **Typ**, **Speicher**

## **13. Operatoren**

**LT13:** Arithmetische Operatoren wie ****\_\_**** und ****\_\_**** werden verwendet, um mathematische Operationen durchzuführen.

> [!success]- Lösung
>
> - **+**, **-**

## **14. Binäre Flags**

**LT14:** Bitoperationen wie AND (&) und OR (|) werden oft zur Manipulation von ****\_\_**** verwendet, insbesondere bei ****\_\_**** Flags.

> [!success]- Lösung
>
> - **Flags**, **binären**

## **15. Pointer (Zeiger)**

**LT15:** Ein Pointer speichert die ****\_\_**** einer Variablen, und der Dereferenzierungsoperator **\*** wird verwendet, um auf den Wert zuzugreifen.

> [!success]- Lösung
>
> - **Speicheradresse**, **\***

## **16. Arrays**

**LT16:** Ein Array ist ein statisches Feld mit fester ****\_\_**** und kann mehrere ****\_\_**** desselben Typs speichern.

> [!success]- Lösung
>
> - **Größe**, **Elemente**

## **17. Arrayadressierung**

**LT17:** Das dritte Element eines Arrays `arr` wird mit ****\_\_**** angesprochen, und die Adresse des ersten Elements entspricht ****\_\_****.

> [!success]- Lösung
>
> - **arr[2]**, **arr**

## **18. Strukturen**

**LT18:** Eine Struktur in C wird mit dem Schlüsselwort ****\_\_**** definiert und kann verschiedene ****\_\_**** unterschiedlicher Typen enthalten.

> [!success]- Lösung
>
> - **struct**, **Mitglieder**

## **19. Aufzählungen (enum)**

**LT19:** In einer `enum` beginnt der erste Wert standardmäßig bei ****\_\_****, es sei denn, ein anderer Wert wird explizit zugewiesen.

> [!success]- Lösung
>
> - **0**

## **20. Vereinigungen (union)**

**LT20:** Eine `union` speichert verschiedene Datentypen im ****\_\_**** Speicherbereich, sodass zu einem Zeitpunkt nur ****\_\_**** Typ verwendet werden kann.

> [!success]- Lösung
>
> - **gleichen**, **ein**

## **21. Kontrollfluss - if/else**

**LT21:** Eine `if`-Anweisung führt den Codeblock nur aus, wenn die ****\_\_**** wahr ist, andernfalls kann ein ****\_\_****-Block ausgeführt werden.

> [!success]- Lösung
>
> - **Bedingung**, **else**

## **22. Kontrollfluss - switch**

**LT22:** Die `switch`-Anweisung ermöglicht die Fallunterscheidung basierend auf dem Wert einer ****\_\_**** und verwendet Schlüsselwörter wie ****\_\_**** und ****\_\_****.

> [!success]- Lösung
>
> - **Ausdrucks**, **case**, **break**

## **23. Schleifen**

**LT23:** Die drei Hauptschleifen in C sind `for`, `while` und ****\_\_****, wobei jede ihre eigenen Einsatzszenarien hat.

> [!success]- Lösung
>
> - **do-while**

## **24. Speicherverwaltung**

**LT24:** Der ****\_\_**** verwaltet automatisch Speicher für lokale Variablen, während der ****\_\_**** Speicher für dynamisch allokierte Daten bereitstellt.

> [!success]- Lösung
>
> - **Stack**, **Heap**

## **25. Stack-Funktionsaufruf**

**LT25:** Beim Aufruf einer Funktion wird ein neuer ****\_\_**** auf dem Stack erstellt, der Informationen wie Rücksprungadresse und ****\_\_**** enthält.

> [!success]- Lösung
>
> - **Stack-Frame**, **lokale Variablen**

## **26. Dynamischer Speicher**

**LT26:** Speicher, der mit `malloc` reserviert wurde, muss mit ****\_\_**** wieder freigegeben werden, um Speicherlecks zu vermeiden.

> [!success]- Lösung
>
> - **free**

## **27. Sichtbarkeit von Variablen**

**LT27:** Globale Variablen sind im gesamten Programm sichtbar, während lokale Variablen nur innerhalb des ****\_\_**** sichtbar sind.

> [!success]- Lösung
>
> - **Funktion**

## **28. Parameterübergabe**

**LT28:** Call-by-Value übergibt eine ****\_\_**** des Wertes an die Funktion, während Call-by-Reference die ****\_\_**** übergibt.

> [!success]- Lösung
>
> - **Kopie**, **Adresse**

## **29. Rekursion**

**LT29:** Rekursion wird verwendet, wenn eine Funktion sich selbst aufruft, typischerweise mit einer ****\_\_**** Bedingung zur Beendigung.

> [!success]- Lösung
>
> - **Abbruch**

## **30. Programmparameter**

**LT30:** Kommandozeilenargumente werden an die `main`-Funktion übergeben durch die Parameter ****\_\_**** und ****\_\_****.

> [!success]- Lösung
>
> - **argc**, **argv**

## **31. Nutzung der Man-Pages**

**LT31:** Man-Pages bieten detaillierte Informationen und Anleitungen zu Befehlen und Funktionen, und können mit dem Befehl ****\_\_**** aufgerufen werden.

> [!success]- Lösung
>
> - **man**

## **32. Ein-/Ausgabe mit Dateien**

**LT32:** Um eine Datei zum Schreiben zu öffnen, verwendet man die Funktion ****\_\_**** mit dem Modus **"**\_\_**"**.

> [!success]- Lösung
>
> - **fopen**, **"w"**

## **33. Alternative Dateifunktionen**

**LT33:** Low-Level-Dateifunktionen wie `open` und `write` bieten mehr ****\_\_**** im Vergleich zu Standard-I/O-Funktionen wie `fopen` und `fread`.

> [!success]- Lösung
>
> - **Kontrolle**

---

Viel Erfolg bei deinem Eignungstest! Wenn du weitere Fragen hast oder zusätzliche Unterstützung benötigst, stehe ich gerne zur Verfügung.

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
