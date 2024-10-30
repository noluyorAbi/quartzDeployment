---
tags:
  - 5semester
  - Sysprak
  - informatik
fach: "[[Systempraktikum]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 30. October 2024, 19:51
date modified: Wednesday, 30. October 2024, 20:29
---

# **Multiple-Choice-Fragen (MC) und Lückentextfragen (LT)**

## **1. Filedeskriptoren**

**MC1:** Was ist ein Filedeskriptor in C?

- A) Ein Zeichen in einer Zeichenkette
- B) Ein kleiner positiver Integerwert, der Datei-/Prozesszugriffe repräsentiert
- C) Ein spezieller Datentyp für Prozesse
- D) Eine Funktion zur Dateiverwaltung

> [!success]- Lösung
>
> - **B) Ein kleiner positiver Integerwert, der Datei-/Prozesszugriffe repräsentiert**: Filedeskriptoren sind kleine positive Integerwerte, die den Zugriff auf Dateien oder Prozesse ermöglichen.

## **2. Interprozesskommunikation (IPC)**

**LT1:** Die Hauptmechanismen der Interprozesskommunikation (IPC) sind **\_\_\_\_\_\_**, **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **Pipes**, **Shared Memory**, **Sockets**

## **3. Pipes**

**MC2:** Welche Aussage beschreibt Pipes in der Interprozesskommunikation korrekt?

- A) Bidirektionale Kommunikation ohne FIFO-Prinzip
- B) Stream-basierte unidirektionale Kommunikation mit FIFO-Prinzip
- C) Shared Memory für mehrere Prozesse
- D) Netzwerk-IPC mittels TCP/IP

> [!success]- Lösung
>
> - **B) Stream-basierte unidirektionale Kommunikation mit FIFO-Prinzip**: Pipes ermöglichen eine unidirektionale, stream-basierte Kommunikation zwischen Prozessen und folgen dem FIFO-Prinzip.

## **4. Unnamed Pipes**

**LT2:** Unnamed Pipes sind temporäre Pipes, die nur während der Lebensdauer der **\_\_\_\_\_\_** bestehen.

> [!success]- Lösung
>
> - **verwandten Prozesse**

## **5. Pipes (Verwendung)**

**MC3:** Wie werden Filedeskriptoren bei der Nutzung von Pipes an Kindprozesse weitergegeben?

- A) Durch globale Variablen
- B) Durch `fork()` und Kopieren der Filedeskriptoren
- C) Durch Shared Memory
- D) Durch Sockets

> [!success]- Lösung
>
> - **B) Durch `fork()` und Kopieren der Filedeskriptoren**: Bei der Nutzung von Pipes werden Filedeskriptoren oft mittels `fork()` an Kindprozesse weitergegeben.

## **6. Pipes (Beispielcode)**

**LT3:** Ein Beispielcode zur Kommunikation zwischen Eltern- und Kindprozess mittels Pipe würde typischerweise die Funktionen **\_\_\_\_\_\_** und **\_\_\_\_\_\_** verwenden.

> [!success]- Lösung
>
> - **pipe()**, **fork()**

## **7. FIFOs**

**MC4:** Was ist ein FIFO in der Interprozesskommunikation?

- A) Ein unbenannter Pipe
- B) Ein benannter Pipe, der systempersistent ist und wie eine Datei behandelt werden kann
- C) Ein Shared Memory Segment
- D) Ein Socket-Typ

> [!success]- Lösung
>
> - **B) Ein benannter Pipe, der systempersistent ist und wie eine Datei behandelt werden kann**: FIFOs sind benannte Pipes, die systempersistent sind und wie Dateien behandelt werden können.

## **8. Interprozesskommunikation (Wiederholung)**

**LT4:** Verschiedene IPC-Methoden ermöglichen die Kommunikation zwischen Prozessen auf unterschiedlichen **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **Maschinen**

## **9. Shared Memory**

**MC5:** Was ist Shared Memory in der Interprozesskommunikation?

- A) Ein unidirektionaler Pipe
- B) Ein gemeinsamer Speicherbereich für mehrere Prozesse, der Synchronisation erfordert
- C) Ein Netzwerk-IPC mittels Sockets
- D) Eine Funktion zur Prozessverwaltung

> [!success]- Lösung
>
> - **B) Ein gemeinsamer Speicherbereich für mehrere Prozesse, der Synchronisation erfordert**: Shared Memory ermöglicht Prozessen, einen gemeinsamen Speicherbereich zu nutzen, erfordert aber Synchronisation.

## **10. Shared Memory (Funktionsübersicht)**

**LT5:** Die Schritte zur Nutzung von Shared Memory umfassen die Funktionen **\_\_\_\_\_\_**, **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **shmget**, **shmat**, **shmdt**

## **11. Shared Memory (Funktionsdetails)**

**MC6:** Welche Funktion wird verwendet, um einen Shared Memory Segment an den Adressraum eines Prozesses anzuhängen?

- A) shmget
- B) shmat
- C) shmdt
- D) shmctl

> [!success]- Lösung
>
> - **B) shmat**: `shmat` wird verwendet, um einen Shared Memory Segment an den Adressraum eines Prozesses anzuhängen.

## **12. Shared Memory (Trennen)**

**LT6:** Die Speicherdetachierung eines Shared Memory Segments erfolgt mit der Funktion **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **shmdt**

## **13. Kritische Bereiche**

**MC7:** Was sind Race Conditions?

- A) Konflikte in der Dateiverwaltung
- B) Timing-Konflikte in kritischen Bereichen, die zu Inkonsistenzen führen können
- C) Probleme bei der Netzwerkkommunikation
- D) Fehler bei der Speicherzuweisung

> [!success]- Lösung
>
> - **B) Timing-Konflikte in kritischen Bereichen, die zu Inkonsistenzen führen können**: Race Conditions treten auf, wenn mehrere Prozesse auf gemeinsame Ressourcen ohne geeignete Synchronisation zugreifen.

## **14. Semaphoren (Überblick)**

**LT7:** Semaphoren werden verwendet, um den Zugriff auf kritische Bereiche mit **\_\_\_\_\_\_** zu steuern.

> [!success]- Lösung
>
> - **Zählsemaphoren**

## **15. Semaphoren (Mechanismus)**

**MC8:** Wie funktionieren Semaphoren zur Steuerung des Zugriffs auf kritische Bereiche?

- A) Durch gemeinsame Speicherbereiche
- B) Durch Zulassen (wait) und Zurückweisen (post) von Prozessen
- C) Durch unidirektionale Pipes
- D) Durch Netzwerk-IPs

> [!success]- Lösung
>
> - **B) Durch Zulassen (wait) und Zurückweisen (post) von Prozessen**: Semaphoren steuern den Zugriff durch die Operationen `wait` und `post`.

## **16. POSIX-Semaphoren**

**LT8:** POSIX-Semaphoren können benannt oder **\_\_\_\_\_\_** sein und dienen der Synchronisation von Prozessen und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **unbenannt**, **Threads**

## **17. POSIX-Semaphoren (Initialisierung)**

**MC9:** Welche Funktionen werden zur Initialisierung von POSIX-Semaphoren verwendet?

- A) `sem_init` und `sem_open`
- B) `sem_create` und `sem_destroy`
- C) `pthread_create` und `pthread_join`
- D) `sem_start` und `sem_stop`

> [!success]- Lösung
>
> - **A) `sem_init` und `sem_open`**: Diese Funktionen werden verwendet, um POSIX-Semaphoren zu initialisieren.

## **18. POSIX-Semaphoren (Interaktion)**

**LT9:** Die Funktionen **\_\_\_\_\_\_**, **\_\_\_\_\_\_** und **\_\_\_\_\_\_** werden verwendet, um die Kontrolle von POSIX-Semaphoren zu steuern.

> [!success]- Lösung
>
> - **sem_wait**, **sem_trywait**, **sem_post**

## **19. POSIX-Semaphoren (Beispiel)**

**MC10:** Was demonstriert ein Beispielcode mit POSIX-Semaphoren?

- A) Prozessbeendigung
- B) Speicherallokation
- C) Synchronisation zweier Prozesse
- D) Dateiein- und -ausgabe

> [!success]- Lösung
>
> - **C) Synchronisation zweier Prozesse**: Der Beispielcode zeigt, wie POSIX-Semaphoren zur Synchronisation verwendet werden.

## **20. Signale**

**LT10:** Signale sind Mechanismen für Prozesskommunikation mittels numerischer **\_\_\_\_\_\_** wie **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **Signale**, **z.B. SIGINT**

## **21. Signale (Verarbeitung)**

**MC11:** Wie werden Signale im Betriebssystem verarbeitet?

- A) Durch die CPU-Geschwindigkeit
- B) Durch den Betriebssystem-Scheduler
- C) Durch die Festplatte
- D) Durch die Grafikkarte

> [!success]- Lösung
>
> - **B) Durch den Betriebssystem-Scheduler**: Signale werden vom Betriebssystem-Scheduler verarbeitet.

## **22. Ausgewählte Signale**

**LT11:** Wichtige Signale in C sind **\_\_\_\_\_\_**, **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **SIGCHLD**, **SIGINT**, **SIGKILL**

## **23. Signale und Kindprozesse**

**MC12:** Wie vererben Kindprozesse Signal-Handler des Elternprozesses?

- A) Kindprozesse haben eigene Signal-Handler
- B) Kindprozesse erben die Signal-Handler des Elternprozesses
- C) Signal-Handler werden nicht vererbt
- D) Nur bestimmte Signale werden vererbt

> [!success]- Lösung
>
> - **B) Kindprozesse erben die Signal-Handler des Elternprozesses**: Kindprozesse übernehmen die Signal-Handler des Elternprozesses.

## **24. Signalkonzept (C-Standard)**

**LT12:** Signal-Handler werden registriert und Signale werden gesendet mit **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **signal**, **kill**

## **25. Signale (Beispiel)**

**MC13:** Was demonstriert ein Beispielcode zur Verwendung von Signal-Handlern?

- A) Prozessbeendigung
- B) Speicherverwaltung
- C) Signalbehandlung
- D) Netzwerkkommunikation

> [!success]- Lösung
>
> - **C) Signalbehandlung**: Der Beispielcode zeigt die Verwendung von Signal-Handlern zur Behandlung von Signalen.

## **26. Signalkonzept (POSIX)**

**LT13:** POSIX-Signalkonzepte erweitern die Signalsteuerung mit **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **sigaction**, **Signalmengen**

## **27. POSIX Signale (Signalsets)**

**MC14:** Welche Funktionen werden verwendet, um ein Signalset zu verwalten?

- A) `sigemptyset`, `sigaddset`
- B) `signal`, `kill`
- C) `sigaction`, `sigprocmask`
- D) `pthread_create`, `pthread_join`

> [!success]- Lösung
>
> - **A) `sigemptyset`, `sigaddset`**: Diese Funktionen werden zur Verwaltung von Signalsets verwendet.

## **28. POSIX Signale (Reaktion)**

**LT14:** Mit `sigaction` kann man Reaktionen auf Signale definieren durch die Festlegung von **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **Signal-Handler**

## **29. Sockets**

**MC15:** Welche Socket-Typen werden in der Netzwerk-IPC verwendet?

- A) `SOCK_STREAM` und `SOCK_DGRAM`
- B) `SOCK_SEQPACKET` und `SOCK_RAW`
- C) `SOCK_UNIX` und `SOCK_INET`
- D) `SOCK_HTTP` und `SOCK_FTP`

> [!success]- Lösung
>
> - **A) `SOCK_STREAM` und `SOCK_DGRAM`**: Diese sind die häufig verwendeten Socket-Typen für TCP und UDP Kommunikation.

## **30. Socket-Domänen**

**LT15:** Protokollfamilien wie **\_\_\_\_\_\_** und **\_\_\_\_\_\_** werden verwendet, um unterschiedliche Kommunikationsarten in Sockets zu ermöglichen.

> [!success]- Lösung
>
> - **PF_INET**, **PF_UNIX**

## **31. Sockets in der Internet-Domäne**

**MC16:** Welche Struktur wird für IPv4-Adressen in der Internet-Domäne von Sockets verwendet?

- A) `sockaddr_in`
- B) `sockaddr_un`
- C) `sockaddr_in6`
- D) `sockaddr_addr`

> [!success]- Lösung
>
> - **A) `sockaddr_in`**: Diese Struktur wird für IPv4-Adressen verwendet.

## **32. Sockets (Systemaufrufe)**

**LT16:** Wichtige Systemaufrufe für einen Server-Socket sind **\_\_\_\_\_\_**, **\_\_\_\_\_\_**, **\_\_\_\_\_\_** und **\_\_\_\_\_\_**.

> [!success]- Lösung
>
> - **socket**, **bind**, **listen**, **accept**

## **33. Iterativer Socket-Server (Beispiel)**

**MC17:** Was macht ein iterativer Socket-Server in C?

- A) Er akzeptiert nur eine Verbindung und beendet sich
- B) Er akzeptiert mehrere Verbindungen nacheinander in einer Schleife
- C) Er verwendet Threads zur gleichzeitigen Verarbeitung
- D) Er kommuniziert nur mit einem Client gleichzeitig

> [!success]- Lösung
>
> - **B) Er akzeptiert mehrere Verbindungen nacheinander in einer Schleife**: Ein iterativer Socket-Server akzeptiert Verbindungen in einer Schleife.

## **34. Weiterführende Informationen**

**LT17:** Für weiterführende Informationen über Prozesse, IPC, Semaphoren und Sockets sollte man auf **\_\_\_\_\_\_** verweisen.

> [!success]- Lösung
>
> - **weitere Ressourcen**

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
