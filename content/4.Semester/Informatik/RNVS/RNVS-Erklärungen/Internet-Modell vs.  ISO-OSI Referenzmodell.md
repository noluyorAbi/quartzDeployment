---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[RNVS]]"
Thema: 
Benötigte Zeit: 
date created: Monday, 13. May 2024, 00:10
date modified: Monday, 13. May 2024, 00:16
---

1. **Internet-Modell: gesamte Anwendungssystem ist eine einzige Schicht.**
   - Im Internet-Modell, auch bekannt als TCP/IP-Modell, sind die Anwendungsdienste nicht in mehrere Schichten aufgeteilt, wie es beim OSI-Modell der Fall ist. Stattdessen werden alle Anwendungsdienste und -protokolle (wie HTTP, FTP, SMTP) in einer einzigen Schicht zusammengefasst, die oft als Anwendungsschicht bezeichnet wird. Dies führt zu einer Vereinfachung im Vergleich zum OSI-Modell, das separate Schichten für Darstellung, Sitzung und Anwendung hat.

2. **Funktionen der ISO/OSI-Schichten 5 und 6 sind nicht in einer eigenen Schicht gekapselt, dadurch nicht modifizierbar/ersetzbar, eng an Anwendungen gekoppelt.**
   - Die Sitzungs- (Schicht 5) und Darstellungsschicht (Schicht 6) im OSI-Modell sind im Internet-Modell nicht als separate Schichten vorhanden. Die Funktionen, die in diesen Schichten behandelt werden, wie Sitzungsmanagement und Datenformatierung, sind direkt in den Anwendungen selbst oder teilweise in der Transportebene (TCP/IP) integriert. Dies kann Flexibilität in der Entwicklung und Anpassung von Protokollen einschränken, da Änderungen an diesen Funktionen direkte Eingriffe in die Anwendungslogik oder die Transportprotokolle erfordern.

3. **Es gibt kein allgemeines Sitzungskonzept.**
   - Im Internet-Modell gibt es keine explizite Sitzungsschicht, die Sitzungen zwischen Endnutzer-Anwendungen verwaltet. Das Management von Sitzungen wird entweder von den Anwendungen selbst oder vom Transportprotokoll (wie TCP, das Verbindungen verwaltet) übernommen. Dies kann die Implementierung komplexer Interaktionen zwischen Anwendungen vereinfachen, beschränkt jedoch die universelle Handhabung von Sitzungsaspekten über verschiedene Anwendungen hinweg.

4. **Es besteht keine transparente Anpassung der Darstellung.**
   - Da das Internet-Modell keine spezifische Darstellungsschicht wie das OSI-Modell hat, müssen Anwendungen oft selbst für die Datenformatierung und -codierung sorgen. Dies führt dazu, dass jede Anwendung eigene Mechanismen für solche Funktionen implementieren muss, was zu Inkonsistenzen führen kann und die Interoperabilität zwischen unterschiedlichen Systemen und Plattformen erschwert.
