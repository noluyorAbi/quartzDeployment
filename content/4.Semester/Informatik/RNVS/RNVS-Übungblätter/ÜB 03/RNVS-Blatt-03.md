---
tags:
  - 4semester
  - informatik
  - RNVS
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 8. May 2024, 19:15
date modified: Friday, 14. June 2024, 12:51
---

# Protokollschichtung (H)

> [!info] Aufgabenstellung
> In der Vorlesung haben Sie das Konzept einer Schichtenarchitektur und diverse Modelle kennengelernt. Das Bild zeigt das Internet Referenzmodell. Daneben sehen Sie das Gerüst des ISO-OSI Referenzmodells.

> [!tip]
> Zweck des OSI-Modells ist es, Kommunikation über unterschiedlichste technische Systeme hinweg zu beschreiben und die Weiterentwicklung zu begünstigen. Dazu definiert dieses Modell sieben übereinanderliegende Schichten mit jeweils eng begrenzten Aufgaben

$$
\begin{array}{c}
\textbf{Internet Modell} \\
\begin{array}{|c|}
\hline
\text{Anwendung (5-7)} \\
\hline
\text{Transport (4)} \\
\hline
\text{Vermittlung (3)} \\
\hline
\text{Netzanschluss (1\&2)} \\
\hline
\end{array}
\end{array}
$$

## (a) Vervollständigen Sie die Grafik des OSI-Referenzmodells.

$$
\begin{array}{c}
\textbf{OSI/ISO Modell} \\
\begin{array}{|c|}
\hline
7 Anwendung \\
\hline
6 \ Darstellung \\
\hline
5 \ Kommunikationssteuerung\\
\hline
4 \ Transport \\
\hline
3 \ Vermittlung \\
\hline
2 \ Sicherung\\
\hline
1 \ Bitübertragung\\
\hline
\end{array}
\end{array}
$$

## (b) Geben Sie für jede der 7 Schichten des OSI-Referenzmodells kurz in 2–3 Sätzen an, welche Hauptaufgaben diese in der Datenkommunikation übernimmt. Gibt es Aufgaben, die von mehreren Schichten übernommen werden?

1. **Bitübertragung**:

   - Ist dafür da, mithilfe von mechanischen, physikalischen und funktionalen Medien Verbindungen zu aktivieren, zu deaktivieren, aufrechtzuerhalten und Bits darüber zu übertragen, jeweils über eine Übertragungsart (Analog, Digital, Synchron, Asynchron, Seriell, Parallel).

2. **Sicherungsschicht**:

   - Aufgabe: Zuverlässige und weitgehend fehlerfreie Übertragung zu gewährleisten und den Zugriff auf das Übertragungsmedium zu regeln.
   - Zusammenfassung/Synchronisationsverhalten von Bits zu Blöcken bzw. Frames.
   - Leistungsprotokolle.
   - Fehlerekennung und Fehlerkorrektur (Paritätsbits, BCC, Hammingabstand).

3. **Vermittlungsschicht**:

   - Weitervermittlung von Datenpaketen und Stauvermeidung.
   - Wegwahl und Routing.
   - Verhandlung der [[Dienstgüte]].

4. **Transport**:

   - Auch: Ende-zu-Ende-Kontrolle, Transportkontrolle.
   - Netzunabhängiger Transport von Nachrichten.
   - Sicherstellung einer fehlerfreien Übertragung.
   - Segmentierung des Datenstroms.
   - Stauvermeidung.
     - TCP: verbindungsorientiert.
     - UDP: verbindungslos.

5. **Kommunikationssteuerungsschicht**:

   - Prozesskommunikation zwischen zwei Systemen, um Zusammenbrüche der Sitzung und ähnliche Probleme zu beheben.
   - Stellt hierfür Dienste für organisierten und synchronisierten Datenaustausch zur Verfügung.
   - Es werden Checkpoints eingeführt, bei denen im Fall eines Ausfalls der Transportverbindung wieder synchronisiert werden kann, ohne dass die Übertragung von vorne gestartet werden muss.
   - Arten von Sitzungen:
     - Voll Duplex: Beide Teilnehmer senden und empfangen (auch gleichzeitig).
     - Halb Duplex: Beide Teilnehmer senden und empfangen (aber nicht gleichzeitig).
     - Simplex: Ein Teilnehmer sendet und einer empfängt.

6. **Darstellungsansicht**:

   - Setzt systemabhängige Darstellung der Daten (z.B. ASCII) in eine unabhängige Form um und ermöglicht somit den syntaktisch korrekten Datenaustausch zwischen unterschiedlichen Systemen.
   - Datenkompression und Verschlüsselung sind auch Teil von Schicht 6.
   - Falls nötig, auch Übersetzer zwischen verschiedenen Datenformaten, indem sie für beide Systeme verständliche Datenformate benutzt.

7. **Anwendungsschicht**:
   - Allgemein verwendbare Dienste werden als Protokoll spezifiziert und standardisiert.
   - Stellt Funktionen für die Anwendungsschicht zur Verfügung.
   - Stellt Verbindung zu den unteren Schichten her.
   - Dateiein- und -ausgabe.
   - Anwendungen selbst gehören nicht zur Schicht.

### Überschneidungen

Zum Beispiel die _Transportschicht_ und _Sicherungsschicht_ sind beide für die Fehlerkennung zuständig, die Sicherungsschicht prüft auf Fehler in der Verbindungsebene und die Transportschicht in der Ende zu Ende Kommunikation

## (c) Nennen und begründen Sie zwei Vorteile und zwei Nachteile, welche sich durch die Verwendung einer [[Schichtenarchitektur]] ergeben (im Gegensatz zu einem einzigen Protokoll für den gesamten Ablauf der Kommunikation).

### Vorteile einer Schichtenarchitektur

- **Modularität**: Änderungen in einer Schicht beeinflussen nicht die anderen Schichten.
- **Standardisierung**: Einfachere Interoperabilität und Kompatibilität zwischen unterschiedlichen Systemen und Technologien.
- **Wiederverwendbarkeit**: Einheitliche Schnittstellen und standardisierte Protokolle fördern die Wiederverwendung von Software und Hardwarekomponenten.

### Nachteile einer Schichtenarchitektur

- **Potenzielle Redundanz**: Manche Funktionen können über mehrere Schichten verteilt sein, was zu Ineffizienzen führen kann.
- **Performance-Overhead**: Jede Schicht fügt ihren eigenen Overhead hinzu, was die Gesamtleistung beeinträchtigen kann.

## (d) Worin liegt der Unterschied zwischen der OSI- und der Internet-Anwendungsschicht? Welche Auswirkungen hat dies auf Applikationen, die sich an dem Internet Modell orientieren?

### [[Internet-Modell vs. ISO-OSI Referenzmodell]]

Das OSI Modell unterteilt die Anwendung von dem IP-Protokoll in 3 Schichten (_Anwendung,Darstellung,Kommunikationssteuerung_)

- **Internet-Modell: gesamte Anwendungssystem ist eine einzige Schicht.**
  - einfachere und simplere Architektur
  - Anwendungen müssen mehr Aufgaben erledigen
  - Erhöhte Komplexität in der Anwendungsentwicklung
  - nicht modifizierbar/ersetzbar
  - eng an Anwendung gekoppelt
- **Es gibt kein allgemeines Sitzungskonzept.**
  - keine Sitzungsschicht die Sitzungen zwischen Endnutzer und Anwendungen verwaltetr
  - wird von Anwendung oder TCP übernommen
- **Es besteht keine transparente Anpassung der Darstellung.**
  - Anwendungen müssen oft selbst für die Datenformatierung und -codierung sorgen. Dies führt dazu, dass jede Anwendung eigene Mechanismen für solche Funktionen implementieren muss, was zu Inkonsistenzen führen kann und die Interoperabilität zwischen unterschiedlichen Systemen und Plattformen erschwert.

---

# Datenpakete in Python (H)

> [!info] Aufgabenstellung
> Gegeben sei eine Funktion mit folgender Signatur, die ein Teil eines Protokolls im ISO/OSI-Modell (und auch des Internet-Modells) der Schicht N in Python implementiert. Sie verschickt bytes an einen in addr_tuple spezifizierten Empfänger.
> <br/> >**Hinweis:** Der Aufruf könnte äquivalent auch in anderen Programmiersprachen erfolgen. Python wurde wegen der einfachen Syntax gewählt.
>
> ```python
> def sendto(bytes, addr_tuple)
> ```
>
> Das folgende Beispiel zeigt einen Aufruf der Funktion. Die Funktion bytes erzeugt ein (in diesem Fall 5 Byte langes) Byte-Array aus dem übergebenen Array.
>
> ```python
> msg = bytes([0x48, 0x65, 0x6c, 0x6c, 0x6f])
> recipient = ("192.168.1.135", 6243)
> sendto(msg, recipient)
> ```

## (a) Interpretieren Sie die an `sendto` übergebenen Argumente als Nutzdaten und Steuerinformationen. Ordnen Sie die Dateneinheiten aus dem Schema der Vorlesung entsprechend zu.

- bytes sind die Nutzdaten (ID) → msg eine nachricht
- addr_tupel die Steuerinformation (ICI) → Adresse und port an den geschickt wird

## (b) Welche Aussage können Sie über die (N)-PDU treffen?

Keine Aussage treffbar, da wir nur die Schnittstelle gegeben haben

Die (N)-PDU besteht aus Nutzdaten (ICI), die das Byte-Array "Hello" enthalten, und Protokollsteuerinformationen (PCI), repräsentiert durch das `addr_tuple` mit IP-Adresse und Port.

<span style="color:red">FRAGE</span>
Frage:: #Frage Soweit ich verstanden habe, ist die Steuerinformation auch die (PCI) nur in einer anderen Schicht. Kann ich dann auch sagen die PDU besteht aus ICI und ID ?

## (c) Die (N+1)-PDU ist in der Variable msg gespeichert. Wie kann sie durch die aus der Vorlesung bekannten Abbildungen zwischen Datenblöcken auf Schicht N bearbeitet werden?

Die (N+1)-PDU in der Variable `msg` wird in Schicht N folgendermaßen verarbeitet:

1. **Segmentierung**: Falls die (N+1)-PDU zu groß ist, wird sie in kleinere (N)-PDUs unterteilt, die dann einzeln übertragen werden.
2. **Blockbildung**: Mehrere kleinere (N)-PDUs werden zu einer größeren (N)-SDU zusammengefasst, um Übertragungs- und Headerkosten zu reduzieren.
3. **Verkettung**: Auf Schicht N-1 werden mehrere (N)-PDUs zu einer größeren Einheit gebündelt, um die Übertragungseffizienz zu steigern.

> [!help] Erklärung
>
> ### Ausführliche Erklärung der Verarbeitung von (N+1)-PDUs in Schicht N
>
> **1. Segmentierung:**
> In Netzwerken gibt es eine maximale Größe für die Datenpakete, die übertragen werden können, bekannt als die maximale Übertragungseinheit (MTU). Wenn eine (N+1)-PDU größer als die MTU ist, kann sie nicht in einem Stück übermittelt werden. Deshalb wird sie in Schicht N in mehrere kleinere (N)-PDUs aufgeteilt, die jeweils die zulässige Größe nicht überschreiten. Jedes dieser kleineren Segmente kann dann separat übertragen werden. Dies ist notwendig, um die Einhaltung der Netzwerkanforderungen zu gewährleisten und um eine effiziente Nutzung der Netzwerkressourcen sicherzustellen.
>
> **2. Blockbildung:**
> Dieser Prozess ist im Grunde das genaue Gegenteil der Segmentierung. Hier werden mehrere kleinere (N)-PDUs zu einer einzigen größeren (N)-SDU (Service Data Unit) zusammengefasst. Diese Methode wird angewandt, um die Anzahl der Übertragungen zu minimieren und die damit verbundenen Overhead-Kosten zu reduzieren. Weniger Übertragungen bedeuten weniger Header und Trailer, was wiederum die Effizienz der Datenübertragung erhöht.
>
> **3. Verkettung:**
> Die Verkettung erfolgt typischerweise auf der darunterliegenden Schicht N-1 und betrifft die Zusammenfassung von mehreren (N)-PDUs zu einer größeren Einheit. Diese Zusammenfassung ist transparent für Schicht N und dient dazu, die Übertragungseffizienz zu verbessern. Indem die Frequenz der notwendigen Übertragungen reduziert wird, können Netzwerkressourcen besser genutzt und Übertragungskosten gesenkt werden.
>
> Diese Prozesse sind essentiell für die effektive und effiziente Handhabung von Datenpaketen in Netzwerken. Sie ermöglichen eine flexible Anpassung an unterschiedliche Netzwerkbedingungen und technische Beschränkungen, was entscheidend ist für die Aufrechterhaltung einer hohen Qualität der Netzwerkdienste.

## (d) Dekodieren Sie die Nachricht in bytes unter Verwendung der ASCII-Kodierung.

0 x48 , 0 x65 , 0 x6c , 0 x6c , 0 x6f

$$
\begin{array}{|c|c|}
\hline
16^{3} & 16^{2} & 16^{1} & 16^{0}\\
\hline
- & -&4&8\\
\end{array}
$$

$$
\begin{aligned}
16^{1}\cdot4+16^{0}\cdot8 &= 64+8\\
&=72
\end{aligned}
$$

$\Longrightarrow$ 72 in ASCII = "H"

$$
\begin{aligned}
16^{1}\cdot6+16^{0}\cdot5 &= 96+5\\
&=101
\end{aligned}
$$

$\Longrightarrow$ 101 in ASCII = "e"

$$
\begin{aligned}
16^{1}\cdot6+16^{0}\cdot12 &= 96+12\\
&=108
\end{aligned}
$$

$\Longrightarrow$ 108 in ASCII = "l"

$$
\begin{aligned}
16^{1}\cdot6+16^{0}\cdot15 &= 96+15\\
&=111
\end{aligned}
$$

$\Longrightarrow$ 111 in ASCII = "o"

$$
\text{Wort = "Hello"}
$$

**Hinweis:** Das Dekodieren per Hand erleichtern sog. ASCII-Tabellen.

---

# 3. ISO/OSI- und Internetmodell: Kritik

> [!note] Aufgabenstellung
> Das ISO/OSI-Referenzmodell steht seit der Veröffentlichung 1984 immer wieder in der Kritik, was aus E-Mail-Archiven in früheren Newsgroups hervorgeht. Eine interessante FAQ von 1994, in der die Motivation von ISO/OSI sowie auch eine kritische Debatte im Vergleich zum TCP/IP Referenzmodell aufgeführt werden, finden Sie unter folgendem Link:
> [https://www.cl.cam.ac.uk/~mgk25/osi-faq.txt](https://www.cl.cam.ac.uk/~mgk25/osi-faq.txt)
>
> Lesen Sie dieses Dokument und richten Sie ihren Fokus vor allem auf die folgenden Unterkapitel:
>
> 1.  What is OSI?
> 2.  What is the OSI reference model?
> 3.  How are OSI and TCP/IP related?
> 4.  Which is better: TCP/IP or OSI?
> 5.  OSI criticism

## (a) Welche Schichten sind in ISO/OSI besonders umstritten? Warum?

Die Komplexität des OSI-Referenzmodells und der empfundene Mangel an praktischer Relevanz bestimmter Schichten wie der Sitzungs- und Präsentationsschicht werden oft kritisiert. Speziell die Sitzungsschicht wird als überflüssig angesehen, da "the session layer should better be a part of the application layer and isn't of much use at the current position."

## (b) Was sind die wesentlichen Kritikpunkte von ISO/OSI im Vergleich zum Internetmodell?

Die Hauptkritikpunkte am OSI-Modell sind, dass die Protokolle "haven't been tested widely before being standardized" und nicht auf "existing practice in large-scale computer networking (e.g., Arpanet)" basieren. Darüber hinaus sind die OSI-Standards "very expensive and difficult to obtain", und das Modell selbst wird als "too complex" mit "too many layers" kritisiert.

## (c) Was ist aus Ihrer Sicht der Wert des ISO/OSI Modells?

Trotz der Kritik liegt der Wert des OSI-Modells in seinem Ansatz, als "the first successful worldwide attempt to develop a set of comprehensive standards for computer communications" zu dienen, mit dem Ziel, herstellerabhängige Spezifikationen zu ersetzen und weltweit einfache und flexible Computerkommunikation zu ermöglichen.

## (d) Welches Modell sollte Ihrer Meinung nach vornehmlich gelehrt werden?

Angesichts der praktischen Dominanz und der umfangreichen Implementierung von TCP/IP wäre es pragmatisch, sich hauptsächlich auf die Vermittlung dieses Modells zu konzentrieren. Wie im Text erwähnt, "In practice, TCP/IP is much more widely implemented and deployed, so you are much more likely to find TCP/IP products to suit your needs."

---

# 4. Einführung in textbasiertes Arbeiten mit Linux

> [!note] Aufgabenstellung
> Linux bietet eine Vielzahl an Programmen, die der praktischen Veranschaulichung der in der Vorlesung vermittelten Inhalte dienen. Im Rahmen dieser Aufgaben lernen Sie grundlegende Tools kennen. Falls noch nicht geschehen, machen Sie sich daher mit dem grundlegende Umgang der Kommandozeile unter Linux vertraut.

## (a) Melden Sie sich zunächst mit Ihrer Benutzerkennung und Ihrem Passwort an einem Rechner des CIP-Pools an und öffnen Sie eine Konsole. Sollte Sie die Aufgaben von außerhalb des Universitätsgebäudes erledigen wollen, können Sie sich alternativ via SSH von einem beliebigen Rechner Ihrer Wahl einloggen. Voraussetzung ist ein installierter SSH Client. Eine ausführliche Anleitung bietet Ihnen die Seite der Rechnerbetriebsgruppe.

1.  Ermitteln Sie den absoluten Pfad Ihres Home-Verzeichnisses und zeigen Sie dessen Inhalt an!

```zsh
> echo $HOME
> ls
```

2.  Wechseln Sie in das Wurzelverzeichnis und dann zurück in Ihr Home-Verzeichnis!

```zsh
> cd /
> cd
```

3.  Was ist eine „man-Page“? Hinweis: Benutzen Sie den Befehl `man man`!


    - Linux Hilffseite mit wichtigen Commands etc

4.  Mit welchem Parameter zeigt `ls` auch versteckte Dateien an? Hinweis: man-Page: `ls(1)`!

```zsh
> ls -a
```

## (b) Der `ping`-Befehl schickt Anfragen zu dem per Hostname oder IP-Adresse spezifizierten Zielrechner, um festzustellen ob der Zielrechner erreichbar ist. Mit dem Erhalt einer Antwort zeigt ping die RTD (roundtrip delay) an. Beachten Sie die `man-page` des Befehls: (`man ping`).

1. Was versteht man unter roundtrip delay?
   - Roundtrip Delay ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu gelangen und wieder zurück zur Quelle. Dies wird gemessen, um die Verbindungsgeschwindigkeit und -stabilität zu testen.
2. Versuchen Sie den Host `www.nm.ifi.lmu.de` mit dem Programm `ping` zu erreichen! Dabei sollen 10 Anfragen im Abstand von 2 Sekunden und je 100 Bytes Nutzdaten verschickt werden.

```zsh
> ping -c 10 -i 2 -s 100 www.nm.ifi.lmu.de
```

3. Wie sind die einzelnen Spalten in der Ausgabe des `ping`-Befehls zu interpretieren?
   - Die Ausgabe von `ping` enthält Informationen wie die IP-Adresse des Zielrechners, die Zeit jedes einzelnen Ping-Vorgangs (in Millisekunden), und gegebenenfalls Fehlermeldungen.

## (c) Der `traceroute`-Befehl zeigt den Pfad von der Quelle bis zur Senke durch ein Rechnernetz und misst die RTD zu jedem einzelnen Knoten auf diesem Pfad. Beachten Sie die `man-page` des Befehls: (`man traceroute`).

1.  Interpretieren Sie die Ausgabe von `traceroute` zum Zielrechner `www.nm.if.lmu.de`! Welche Informationen beinhaltet die erste Zeile der Ausgabe?
    - Die erste Zeile der Ausgabe von `traceroute` beinhaltet normalerweise die IP-Adresse des Zielrechners und den Hostnamen, falls verfügbar.
2.  In den darauffolgenden Zeilen stehen je drei Werte, meist in Millisekunden angegeben. Wofür stehen diese Werte?
    - Die Werte in Millisekunden in den Zeilen nach der ersten repräsentieren die Roundtrip Delays für jeden einzelnen Hop oder Knotenpunkt auf dem Weg zum Zielrechner.
3.  Die häufige Überprüfung des Pfades zu einem bestimmten Zielrechner mit `traceroute` zeigt manchmal andere Einträge mit einem verschiedenen Pfad. Was kann diese Beobachtung bedeuten?
    - Wenn `traceroute` manchmal unterschiedliche Pfade anzeigt, kann das auf dynamische Routenänderungen im Netzwerk hindeuten, bedingt durch Auslastung, Störungen oder Routenoptimierungen.

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
