---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 30. October 2024, 20:26
date modified: Wednesday, 30. October 2024, 20:36
---

# Systempraktikum - Eignungsfeststellung, 23.11.2020

---

## **Fragenblock A: Auswahlfragen**

**Hinweis:** Pro Frage kann mehr als eine Antwort richtig sein. Wählen Sie alle richtigen Antworten aus, indem Sie ein "X" in das leere Feld in eckigen Klammern schreiben, so: [X]. Verändern Sie sonst keinen Text in diesem Fragenblock.

Für jede vollständig richtig beantwortete Frage erhalten Sie einen Punkt; für nicht vollständig richtig, gar nicht oder falsch beantwortete Fragen erhalten Sie jeweils 0 Punkte.

---

### **Frage A-C121C521:** Welche Aussagen zu Race Conditions sind richtig?

- [ ] Eine Race Condition bezeichnet den Geschwindigkeits-/Effizienzvergleich zwischen zwei Programmen.
- [ ] Das Ergebnis einer Berechnung hängt davon ab, dass der Benutzer das Programm schnell genug beendet.
- [ ] Das Ergebnis einer Berechnung hängt von der tatsächlichen Ausführungsreihenfolge mehrerer Prozesse/Threads und den enthaltenen Operationen ab.
- [ ] Zur Vermeidung einer Race Condition können bei der Programmerstellung beispielsweise Semaphoren eingesetzt werden.

> [!success]- **Lösung:**
>
> - **Das Ergebnis einer Berechnung hängt von der tatsächlichen Ausführungsreihenfolge mehrerer Prozesse/Threads und den enthaltenen Operationen ab.**
> - **Zur Vermeidung einer Race Condition können bei der Programmerstellung beispielsweise Semaphoren eingesetzt werden.**

**Punkte Frage A-C121C521 (erreichbar 1):**

---

### **Frage A-13752883:** Mittels der folgenden Programmzeile soll Speicher reserviert werden:

```c
//-----------------------------------------------------------------------
buffer = malloc(BUFFERSIZE);
//-----------------------------------------------------------------------
```

Anschließend soll eine Fehlerbehandlung durchgeführt werden. Welche der folgenden Code-Fragmente sind dazu geeignet?

- [ ] Man muss nichts überprüfen, da "malloc(…)" immer den geforderten Speicherplatz liefert.
- [ ] `if (buffer < BUFFERSIZE) { …Fehlerbehandlung… }`
- [ ] `if (free(buffer) > BUFFERSIZE) { …Fehlerbehandlung… }`
- [ ] `if (buffer == NULL) { …Fehlerbehandlung… }`

> [!success]- **Lösung:**
>
> - **`if (buffer == NULL) { …Fehlerbehandlung… }`**: Diese Bedingung prüft, ob `malloc` fehlgeschlagen ist, indem es prüft, ob `buffer` NULL ist.

**Punkte Frage A-13752883 (erreichbar 1):**

---

### **Frage A-B7463FCA:** Welche der folgenden Aussagen zu dynamischer Speicherverwaltung in C sind korrekt?

- [ ] Dynamisch allozierter, nicht mehr referenzierter Speicher wird in C durch den Garbage Collector freigegeben.
- [ ] Dynamischer Speicher wird in C mit Hilfe der Funktion `malloc()` angefordert.
- [ ] Nachdem Speicher mittels `ptr = malloc()` alloziiert wurde, kann die Größe des reservierten Speichers in Bytes mittels `sizeof(ptr)` ermittelt werden.
- [ ] `free(void *ptr)` gibt den Speicherbereich, auf den `ptr` zeigt, wieder frei.

> [!success]- **Lösung:**
>
> - **Dynamischer Speicher wird in C mit Hilfe der Funktion `malloc()` angefordert.**
> - **`free(void *ptr)` gibt den Speicherbereich, auf den `ptr` zeigt, wieder frei.**

**Punkte Frage A-B7463FCA (erreichbar 1):**

---

### **Frage A-90BB8756:** Gegeben sei der folgende Ausschnitt aus einem C-Programm:

```c
//-----------------------------------------------------------------------
struct s {
  int x;
  int y;
};
//-----------------------------------------------------------------------
```

Mit welcher Zeile lässt sich eine Instanz des so definierten Strukturtyps "s" initialisieren?

- [ ] `s[0] = 1; s[1] = 2;`
- [ ] `struct s s1; s1[x] = 1; s1[y] = 2;`
- [ ] `struct s s1; s1.x = 1; s1.y = 2;`
- [ ] `s1 = new s(1, 2);`

> [!success]- **Lösung:**
>
> - **`struct s s1; s1.x = 1; s1.y = 2;`**: Diese Zeile initialisiert eine Instanz der Struktur `s` und weist den Feldern `x` und `y` Werte zu.

**Punkte Frage A-90BB8756 (erreichbar 1):**

---

### **Frage A-D2A2089B:** Welche Aussagen zu Prozessen sind korrekt?

- [ ] Ein Prozess ist eine ausführbare Datei.
- [ ] Ein Prozess ist ein in Ausführung befindliches Programm.
- [ ] Ein Prozess kann als (temporärer) Eigentümer von Ressourcen aufgefasst werden.
- [ ] Jeder Unix-Prozess ist direkter oder indirekter Nachfahre des `init`-Prozesses (mit Ausnahme von `init` selbst).

> [!success]- **Lösung:**
>
> - **Ein Prozess ist ein in Ausführung befindliches Programm.**
> - **Ein Prozess kann als (temporärer) Eigentümer von Ressourcen aufgefasst werden.**
> - **Jeder Unix-Prozess ist direkter oder indirekter Nachfahre des `init`-Prozesses (mit Ausnahme von `init` selbst).**

**Punkte Frage A-D2A2089B (erreichbar 1):**

---

### **Frage A-B3523D5D:** Welche der folgenden Aussagen zu Strukturen in C sind korrekt?

- [ ] Eine definierte Struktur hat immer eine feste Anzahl an Elementen/Feldern.
- [ ] Elemente einer Struktur können unterschiedlichen Typs sein.
- [ ] Strukturen können nur innerhalb der `main()`-Funktion definiert werden.
- [ ] Strukturen realisieren Objektorientierung in C.

> [!success]- **Lösung:**
>
> - **Eine definierte Struktur hat immer eine feste Anzahl an Elementen/Feldern.**
> - **Elemente einer Struktur können unterschiedlichen Typs sein.**

**Punkte Frage A-B3523D5D (erreichbar 1):**

---

### **Frage A-91A22C1E:** Gegeben sei der folgende Teil aus einem Makefile:

```makefile
prog1: main.c m1.c
      $(CC) $(CFLAGS) -o prog1 main.c m1.c
```

Welche der folgenden Aussagen sind korrekt?

- [ ] `prog1` ist ein Ziel.
- [ ] `main.c` und `m1.c` sind Abhängigkeiten.
- [ ] Vor `$(CC)` muss ein Tabulatorschritt stehen.
- [ ] `CC` und `CFLAGS` sind Variablen, auf deren Werte mittels `$` zugegriffen wird.

> [!success]- **Lösung:**
>
> - **`prog1` ist ein Ziel.**
> - **`main.c` und `m1.c` sind Abhängigkeiten.**
> - **Vor `$(CC)` muss ein Tabulatorschritt stehen.**
> - **`CC` und `CFLAGS` sind Variablen, auf deren Werte mittels `$` zugegriffen wird.**

**Punkte Frage A-91A22C1E (erreichbar 1):**

---

### **Frage A-3EE49807:** Welche der folgenden Aussagen zu den Funktionen der `exec*()`-Familie sind korrekt?

- [ ] Im Erfolgsfall erfolgt nach dem Aufruf einer Funktion aus der `exec*()`-Familie keine Rückkehr zum aufrufenden Prozess.
- [ ] Im Erfolgsfall eines `exec*()`-Aufrufs wird das ursprüngliche Prozess-Image durch ein neues ersetzt.
- [ ] Während `fork()` einen Kindprozess erzeugt, der eine Kopie des aufrufenden Prozesses darstellt, erzeugt ein `exec*()`-Aufruf einen neuen "leeren" Prozess, der keine Attribute vom Aufrufer erbt.
- [ ] Die Funktionen der `exec*()`-Familie terminieren den laufenden Prozess und starten einen neuen.

> [!success]- **Lösung:**
>
> - **Im Erfolgsfall erfolgt nach dem Aufruf einer Funktion aus der `exec*()`-Familie keine Rückkehr zum aufrufenden Prozess.**
> - **Im Erfolgsfall eines `exec*()`-Aufrufs wird das ursprüngliche Prozess-Image durch ein neues ersetzt.**

**Punkte Frage A-3EE49807 (erreichbar 1):**

---

### **Frage A-C91D332A:** Welche Aussagen sind korrekt? Ein Shared-Memory Segment…

- [ ] ist ein vom Betriebssystem verwalteter Speicherbereich.
- [ ] kann von mehreren Prozessen gelesen und beschrieben werden.
- [ ] wird bei allen beteiligten Prozessen an der gleichen virtuellen Adresse eingeblendet.
- [ ] ermöglicht die Kommunikation zwischen Prozessen auf verschiedenen Rechnern/Systemen.

> [!success]- **Lösung:**
>
> - **ist ein vom Betriebssystem verwalteter Speicherbereich.**
> - **kann von mehreren Prozessen gelesen und beschrieben werden.**
> - **wird bei allen beteiligten Prozessen an der gleichen virtuellen Adresse eingeblendet.**

**Punkte Frage A-C91D332A (erreichbar 1):**

---

### **Frage A-D55983D8:** Welche der folgenden Aussagen zur `fork()` Funktion sind korrekt?

- [ ] Der durch `fork()` erzeugte Prozess hat die gleiche Prozess-ID (PID) wie der Vater-Prozess.
- [ ] Terminiert ein Prozess, so werden alle von ihm vorher durch `fork()` erzeugten Prozesse terminiert.
- [ ] `fork()` erzeugt eine Kopie des aufrufenden Prozesses, die sich im Wesentlichen nur durch einen Teil der Einträge im Prozesskontrollblock (PCB) unterscheidet.
- [ ] Durch den Rückgabewert von `fork()` kann zwischen Vater- und Kind-Prozess unterschieden werden.

> [!success]- **Lösung:**
>
> - **`fork()` erzeugt eine Kopie des aufrufenden Prozesses, die sich im Wesentlichen nur durch einen Teil der Einträge im Prozesskontrollblock (PCB) unterscheidet.**
> - **Durch den Rückgabewert von `fork()` kann zwischen Vater- und Kind-Prozess unterschieden werden.**

**Punkte Frage A-D55983D8 (erreichbar 1):**

---

### **Frage A-F9FF1851:** Wofür steht der Aufrufparameter (Flag) `-Wall` des GNU C-Compilers?

- [ ] Aktivierung der Firewall
- [ ] Anzeige sämtlicher Warnungen
- [ ] Übersetzung ohne Linking
- [ ] `-Wall` ist keine gültige Option des GNU C-Compilers

> [!success]- **Lösung:**
>
> - **Anzeige sämtlicher Warnungen**

**Punkte Frage A-F9FF1851 (erreichbar 1):**

---

### **Frage A-DC5B9891:** Gegeben sei der folgende Ausschnitt aus einem C-Programm:

```c
//-----------------------------------------------------------------------
    int a[3] = {7, 9, 11};
    int *x = &a[1];
    printf("%i", *x);
//-----------------------------------------------------------------------
```

Welche Konsolenausgabe wird dadurch erzeugt?

- [ ] 7
- [ ] 9
- [ ] 11
- [ ] Die Anfangsadresse des Arrays `a`.

> [!success]- **Lösung:**
>
> - **9**

**Punkte Frage A-DC5B9891 (erreichbar 1):**

---

### **Frage A-01177467:** Welche Arten der Parameterübergabe bei Funktionsaufrufen gibt es?

- [ ] Call by reference
- [ ] Call by value
- [ ] Call by heap
- [ ] Call by signal

> [!success]- **Lösung:**
>
> - **Call by reference**
> - **Call by value**

**Punkte Frage A-01177467 (erreichbar 1):**

---

### **Frage A-25D6F62D:** Welche der folgenden Aussagen zu Zombie-Prozessen sind korrekt?

- [ ] Ein Zombie ist ein Prozess, der bereits terminiert ist, aber dessen Rückgabewert nicht abgefragt wurde.
- [ ] Ein Zombie belastet das System, denn er belegt nach wie vor alle Ressourcen, wie z.B. Speicher, Semaphore, geöffnete Dateien.
- [ ] Ein Prozess existiert als Zombie, um auch nach seiner Terminierung dem Vaterprozess seinen Rückgabewert liefern zu können.
- [ ] Ein Zombie, dessen Vater terminiert ist, wird vom `init`-Prozess aufgeräumt.

> [!success]- **Lösung:**
>
> - **Ein Zombie ist ein Prozess, der bereits terminiert ist, aber dessen Rückgabewert nicht abgefragt wurde.**
> - **Ein Prozess existiert als Zombie, um auch nach seiner Terminierung dem Vaterprozess seinen Rückgabewert liefern zu können.**
> - **Ein Zombie, dessen Vater terminiert ist, wird vom `init`-Prozess aufgeräumt.**

**Punkte Frage A-25D6F62D (erreichbar 1):**

---

### **Frage A-DF3979B1:** Es gibt Prozesse, die als Waisen bezeichnet werden. Welche der folgenden Aussagen sind korrekt?

- [ ] Entsteht ein Waise, so wird es vom `init`-Prozess "adoptiert".
- [ ] Waisen belasten ein System nicht, da sie keine Ressourcen mehr belegen.
- [ ] Ein Waise ist ein Prozess, der noch ausgeführt wird, aber dessen Vater bereits terminiert ist.
- [ ] Ein Waise ist ein Prozess, der durch das Scheduling "ausgehungert" wurde.

> [!success]- **Lösung:**
>
> - **Entsteht ein Waise, so wird es vom `init`-Prozess "adoptiert".**
> - **Ein Waise ist ein Prozess, der noch ausgeführt wird, aber dessen Vater bereits terminiert ist.**

**Punkte Frage A-DF3979B1 (erreichbar 1):**

---

### **Frage A-54B3DA74:** Welche der folgenden Aussagen zur Sichtbarkeit in C sind korrekt?

- [ ] Variablen, die innerhalb eines Blocks deklariert sind (d.h. innerhalb von `{…}`), sind auch nur innerhalb dieses Blocks sichtbar.
- [ ] Jede Variable ist in allen Blöcken sichtbar.
- [ ] Nur Variablen des Typs `int` sind lokal, alle anderen Typen sind global sichtbar.
- [ ] Globale Variablen werden durch die Präprozessoranweisung `#define_as_global` realisiert.

> [!success]- **Lösung:**
>
> - **Variablen, die innerhalb eines Blocks deklariert sind (d.h. innerhalb von `{…}`), sind auch nur innerhalb dieses Blocks sichtbar.**

**Punkte Frage A-54B3DA74 (erreichbar 1):**

---

### **Frage A-3E9C2726:** Das Kommando `gcc load.c -o register`

- [ ] ist eine explizite Anweisung an den Lader, alle globalen Variablen in die CPU-Register zu laden.
- [ ] ist ein Aufruf an einen C-Compiler zur Übersetzung des Programms `load.c`.
- [ ] ist ein in C-Programme einbettbarer Assembler-Befehl, der das Laden eines Makros in ein Ausgaberegister (`-o` für output) bewirkt.
- [ ] erzeugt ausschließlich Objektdateien.

> [!success]- **Lösung:**
>
> - **ist ein Aufruf an einen C-Compiler zur Übersetzung des Programms `load.c`.**

**Punkte Frage A-3E9C2726 (erreichbar 1):**

---

### **Frage A-6FA2E9B0:** Gegeben sei die folgende Code-Zeile:

```c
//-----------------------------------------------------------------------
    float dummyFunction(const int *param, long returnValue);
//-----------------------------------------------------------------------
```

Welche Aussagen sind korrekt:

- [ ] Der erste Aufrufparameter ist ein Zeiger/Pointer.
- [ ] Der zweite Aufrufparameter wird durch Wertübergabe (by-value) übergeben.
- [ ] Für den ersten Parameter können nur Konstanten übergeben werden, aber keine Variablen.
- [ ] Die Funktion kann mit keinem, einem oder zwei Parametern aufgerufen werden.

> [!success]- **Lösung:**
>
> - **Der erste Aufrufparameter ist ein Zeiger/Pointer.**
> - **Der zweite Aufrufparameter wird durch Wertübergabe (by-value) übergeben.**

**Punkte Frage A-6FA2E9B0 (erreichbar 1):**

---

### **Frage A-D5D291D4:** Welche der folgenden Aussagen zu Definitionen und Deklarationen sind korrekt?

- [ ] Jede Definition ist auch eine Deklaration.
- [ ] Zwischen Definition und Deklaration besteht kein Unterschied. Beide Begriffe sind synonym.
- [ ] `int a;` ist in C eine Definition.
- [ ] `extern int a;` ist in C eine Definition.

> [!success]- **Lösung:**
>
> - **Jede Definition ist auch eine Deklaration.**
> - **`int a;` ist in C eine Definition.**

**Punkte Frage A-D5D291D4 (erreichbar 1):**

---

### **Frage A-442F34E0:** Was bewirkt die Zuweisung `i = &j;` in nachstehendem Beispiel?

```c
//-----------------------------------------------------------------------
    void main() {
      int *i;
      int j;
      i = &j;
    }
//-----------------------------------------------------------------------
```

- [ ] `j` wird mit `i` binär UND-verknüpft und das Ergebnis in `i` gespeichert.
- [ ] Die Zuweisung existiert nicht in dieser Form und liefert einen Fehler beim Übersetzen.
- [ ] Die Adresse des Speicherbereiches der Variable `j` wird `i` zugewiesen.
- [ ] `i` und `j` haben den gleichen Wert.

> [!success]- **Lösung:**
>
> - **Die Adresse des Speicherbereiches der Variable `j` wird `i` zugewiesen.**

**Punkte Frage A-442F34E0 (erreichbar 1):**

---

## **Fragenblock B: Lückentext**

**Hinweis:** Ergänzen Sie in diesem Fragenblock bitte die im Text durch […] markierten Lücken. Verändern Sie sonst keinen Text in diesem Fragenblock.

---

### **Frage B-73A689B5:**

Ergänzen Sie in nachfolgendem Programmcode die gekennzeichneten Stellen entsprechend der im Quellcode stehenden Kommentare!

```c
-------------------------------------------------------------------
int a=42;
int *ptr1, *ptr2;

// in ptr1 soll die Adresse der Variable a gespeichert werden:

ptr1=&a;

// Prüfen Sie ob ptr1 und ptr2 auf die gleiche Adresse im Speicher
// zeigen:

if(ptr1==ptr2){
}

// Prüfen Sie ob ptr1 auf Speicher zeigt, der den Wert '33' enthält

if( *ptr1 == 33 ) {
}
-------------------------------------------------------------------
```

**Punkte Frage B-73A689B5 (erreichbar 3):**

---

### **Frage B-3DEB039F:**

Wir haben die folgenden Dateien im Projekt und wir möchten die Projektkompilierung mit Makefiles vereinfachen. Ergänzen Sie die Lücken mit entsprechenden Einträgen (Makefile commands)

**Dateien:**

- `main.c`
- `message.c`
- `message.h`

```makefile
-------------------------------------------------------------------
CC = gcc

# Linken und ausführbare Datei erzeugen
all: main.o message.o
  $(CC) -o main main.o message.o

main.o: main.c   # Objektdatei erzeugen
  $(CC) -c main.c

message.o: message.c message.h   # Objektdatei erzeugen
  $(CC) -c message.c

clean:   # Objektdateien und ausführbare Datei löschen
  rm -f main.o message.o ./main					rm -f*.o ./main
-------------------------------------------------------------------
```

**Punkte Frage B-3DEB039F (erreichbar 4):**

---

### **Frage B-C3268B90:**

Betrachten Sie den weiter unten stehenden Code eines Programms, das einen Chat zwischen einem Client und einem Server ermöglicht. Beantworten Sie die folgenden Fragen:

**Auf welchem Port erwartet der Server eingehende Verbindungen?**

4711

**In welcher Zeile des Programms nimmt der Server eine eingehende Verbindung mit dem Client entgegen?**

33

**In welcher Zeile des Programms stellt der Client eine Verbindung zum Server her?**

54

**In welcher Zeile des Programms sendet der Client eine Nachricht zum Server?**

65

**In welcher Zeile des Programms wartet der Server auf eine eingehende Nachricht von einem verbundenen Client?**

43

**Die Eingabe eines welchen Schlüsselwortes beendet regulär die Verbindung zwischen Client und Server?**

quit

```c
-------------------------------------------------------------------
     1	#include <sys/types.h>
     2	#include <sys/socket.h>
     3	#include <netinet/in.h>
     4	#include <arpa/inet.h>
     5	#include <unistd.h>
     6	#include <stdlib.h>
     7	#include <stdio.h>
     8	#include <string.h>
     9	#include <stdbool.h>
    10	#define  BUF 256
    11
    12	int main (int argc, char** argv)
    13	{
    14	  printf("Chat\n\n\n");
    15	  char *buffer = (char*) malloc( sizeof(char) * BUF );
    16	  ssize_t size;
    17	  struct sockaddr_in address;
    18	  int sock = socket(PF_INET, SOCK_STREAM, 0);
    19	  int new_socket;
    20	  address.sin_family = AF_INET;
    21	  address.sin_port = htons(4711);
    22
    23	  if (argc < 2) {
    24	    printf("Warte auf Client\n");
    25	    address.sin_addr.s_addr = INADDR_ANY;
    26	    if (bind(sock,(struct sockaddr*) &address,
    27	             sizeof(address)) != 0)
    28	      printf("Port belegt!\n");
    29
    30	    listen(sock, 5);
    31	    struct sockaddr_in client;
    32	    int client_len = sizeof(client);
    33	    new_socket = accept( sock, (struct sockaddr*) &client,
    34	                         (socklen_t*) &client_len);
    35
    36	    if (new_socket > 0)
    37	      printf("Verbindung mit %s hergestellt.\n",
    38	             inet_ntoa(address.sin_addr));
    39	    do {
    40	      printf("Ich: ");
    41	      fgets(buffer,BUF,stdin);
    42	      send(new_socket,buffer,strlen(buffer));
    43	      size = recv(new_socket, buffer, BUF-1, 0);
    44	      if (size > 0) buffer[size]='\0';
    45	      printf("Du: %s",buffer);
    46	    } while (strcmp (buffer, "quit\n")!=0);
    47
    48	    close(new_socket);
    49	    close(sock);
    50	  }
    51	  else {
    52	    sock = socket(AF_INET, SOCK_STREAM, 0);
    53	    inet_aton(argv[1], &address.sin_addr);
    54	    if(connect(sock,(struct sockaddr*) &address,
    55	               sizeof(address)) == 0)
    56	      printf("Verbindung mit %s hergestellt.\n",
    57	             inet_ntoa(address.sin_addr));
    58	    do {
    59	      size = recv(sock, buffer, BUF-1, 0);
    60	      if (size > 0) buffer[size] = '\0';
    61	      printf("Du: %s", buffer);
    62	      if ( strcmp(buffer,"quit\n") ) {
    63	        printf("Ich: ");
    64	        fgets(buffer, BUF, stdin);
    65	        send(sock, buffer, strlen(buffer), 0);
    66	      }
    67	    } while ( strcmp(buffer,"quit\n") != 0 );
    68
    69	    close(sock);
    70	  }
    71
    72	  free(buffer);
    73	  return EXIT_SUCCESS;
    74	}
-------------------------------------------------------------------
```

**Punkte Frage B-C3268B90 (erreichbar 6):**

---

### **Frage B-CBEC40F1:**

Ergänzen Sie in nachfolgendem Programmcode die gekennzeichneten Stellen entsprechend der im Quellcode stehenden Kommentare!

```c
#include <stdlib.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
  int *i;
  int j=10;

  // Reservieren Sie Speicherplatz für genau eine int-Variable.
  // "i" soll auf den reservierten Speicher zeigen.
  // Verzichten Sie auf eine Fehlerbehandlung.

  i = malloc(sizeof(int));

  // Schreiben Sie Ihre Matrikelnummer in den gerade reservierten Speicher

  *i = 11788320;

  // Weisen Sie j den Inhalt/Wert des zuvor reservierten Speichers zu

  j = *i;

  // Geben Sie den zuvor reservierten Speicher wieder frei

    free(i);

  // Fügen Sie hier eine Wertzuweisung ein, so dass mit nachfolgendem
  // printf-Befehl der Wert von j auf der Standardausgabe ausgegeben wird
	i=&j;


  printf("%i\n", *i);
  return 0;
}
```

**Punkte Frage B-CBEC40F1 (erreichbar 5):**

---

### **Frage B-D1676B96:**

Vervollständigen Sie nachfolgenden Programmcode an den gekennzeichneten Stellen entsprechend der Vorgaben im Quelltext.

```c
-------------------------------------------------------------------
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main (void) {
  int    desc[2], nbytes;
  pid_t  childpid;
  char   string[] = "Hello, world!\n";
  char   readbuffer[80];

  // Pipe erstellen/anlegen (1 Punkt)
  pipe(desc);

  if ((childpid = fork()) == -1) { perror("fork"); exit(1); }

  // prüfen, ob es sich um den Kind-Prozess handelt (1 Punkt)
  if (childpid == 0 ) {

     // Kind-Prozess schließt Leseseite der Pipe (1 Punkt)
    close(desc[0]);

    // Kind-Prozess schreibt "string" in die Pipe (2 Punkte)
    nbytes = sizeof(string);
    write(desc[1], string, nbytes);

    exit(0);
  } else {

    // Vater-Prozess schließt Schreibseite der Pipe (1 Punkt)
    close(desc[1]);

    nbytes = read(desc[0], readbuffer, sizeof(readbuffer));
    printf("Received string: %s", readbuffer);
  }
  return(0);
}
-------------------------------------------------------------------
```

**Punkte Frage B-D1676B96 (erreichbar 6):**

---

## **Fragenblock C: Freitext**

**Hinweis:** Beantworten Sie in diesem Block die Fragen, indem Sie Ihre Antwort an die mit "Antwort:" markierte Stelle und die folgenden Zeilen eintragen. Verändern Sie sonst keinen Text in diesem Fragenblock.

---

### **Frage C-9CB6B1C7:**

Ein Programm verwendet eine einfach verkettete Liste, in der Ganzzahlwerte gespeichert werden wie folgt:

```c
struct lelem {
  int val;
  struct lelem *next; // Zeiger auf nächstes Element oder NULL
};
```

Die Liste wird durch den Zeiger auf das erste Element repräsentiert (head).

Erstellen Sie drei Hilfsfunktionen zur Arbeit mit der Liste:

---

```c
// 1. ermittle die Gesamtanzahl der Elemente:
int list_length(struct lelem *head);
```

---

**Antwort:**

```c
// Rekursive Lösung:
int list_length(struct lelem *head) {
    if(head == NULL) return 0;
    return 1 + list_length(head->next);
}

// Iterative Lösung:
int list_length(struct lelem *head) {
    struct lelem *current = head;
    int counter = 0;
    while (current != NULL) {
        counter++;
        current = current->next;
    }
    return counter;
}
```

---

```c
// 2. füge ein Element am Ende der Liste hinzu
void add_elem(struct lelem *head, int val);
```

---

**Antwort:**

```c
// Erste Lösung:
void add_elem(struct lelem *head, int val) {
    struct lelem* current = head;
    while (current->next != NULL) {
        current = current->next;
    }
    struct lelem *newElem = malloc(sizeof(struct lelem));
    newElem->val = val;
    newElem->next = NULL;
    current->next = newElem;
}

// Zweite Lösung:
void add_elem(struct lelem *head, int val) {
    if(head->next == NULL) {
        struct lelem *last = malloc(sizeof(*last));
        head->next = last;
        last->val = val;
        last->next = NULL;
    } else {
        add_elem(head->next, val);
    }
}
```

---

```c
// 3. lösche das Element, welches auf 'elem' folgt (falls ein solches existiert), gib den Speicher des gelöschten Elements frei
void del_elem(struct lelem *elem);
```

---

**Antwort:**

```c
void del_elem(struct lelem *elem) {
    if(elem->next == NULL) return; // Kein Element zum Löschen
    struct lelem *temp = elem->next;
    elem->next = temp->next;
    free(temp);
}
```

**Punkte Frage C-9CB6B1C7 (erreichbar 10):**

---

### **Frage C-1AC45831:**

Geben Sie die Deklaration einer Funktion an, die folgende Eigenschaften erfüllt:

- Der Rückgabewert der Funktion ist ein `FILE` Pointer
- Der Funktionsname ist Ihr Nachname
- Die Funktion erwartet keine Parameter

**Antwort:** `FILE* [IhrNachname](void);` // `void` hier optional

**Punkte Frage C-1AC45831 (erreichbar 1):**

---

### **Frage C-87982B15:**

Geben Sie die Deklaration einer Funktion an, die folgende Eigenschaften erfüllt:

- Die Funktion gibt keinen Wert zurück
- Der Funktionsname ist Ihr Nachname
- Die Funktion erwartet als ersten Parameter einen Ganzzahlwert, als zweiten Parameter einen Zeiger auf eine doppelt genaue Fließkommazahl

**Antwort:** `void [IhrNachname](int first, double *second);`

**Punkte Frage C-87982B15 (erreichbar 1):**

---

### **Frage C-1E53E263:**

Schreiben Sie ein Programm, welches eine beliebige Anzahl an positiven Ganzzahlwerten auf der Kommandozeile entgegennimmt und das Maximum dieser Zahlen ausgibt.

```bash
$~ ./max 3 9 5  # Liefert die Ausgabe 9
$~ ./max 0 1 2  # Liefert die Ausgabe 2
```

**Antwort:**

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int i, max;
    if(argc > 1) {
        max = atoi(argv[1]);
    }
    else {
        printf("Keine Argumente übergeben!\n");
        return 0;
    }
    for(i = 2; i < argc; ++i){
        int num = atoi(argv[i]);
        if(num > max){
            max = num;
        }
    }
    printf("Größte Zahl ist %d\n", max);
    return 0;
}
```

**Punkte Frage C-1E53E263 (erreichbar 6):**

---

### **Frage C-D31EF298:**

Geben Sie die Definition einer Funktion an, die folgende Eigenschaften erfüllt:

- Die Funktion erwartet zwei Ganzzahlwerte und berechnet deren Summe
- Das Ergebnis wird als Ganzzahlwert zurückgegeben
- Der Name der Funktion sei "sum".

**Antwort:**

```c
#include <stdio.h>
#include <stdlib.h>

int sum(int first, int second) {
    return first + second;
}
```

**Punkte Frage C-D31EF298 (erreichbar 2):**

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
