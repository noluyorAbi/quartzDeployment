---
tags:
  - 4semester
  - informatik
  - RNVS
  - Erklaerung
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema: "[[RNVS-4VL-10-05-2024]]"
Benötigte Zeit: 
date created: Thursday, 9. May 2024, 23:47
date modified: Thursday, 9. May 2024, 23:48
---

# Protokolle

In der Transportschicht sind mehrere Protokolle integriert, die für die Regelung des Datenflusses zwischen verschiedenen Netzwerkschichten entscheidend sind. Die bedeutendsten Protokolle hier sind das Transmission Control Protocol (TCP) und das User Datagram Protocol (UDP), die unterschiedliche Ansätze für die Datenübertragung bieten.

## TCP (Transmission Control Protocol)

TCP ist ein verbindungsorientiertes Protokoll, das auf eine sichere und zuverlässige Datenübermittlung zwischen kommunizierenden Endsystemen ausgerichtet ist. Dieses Protokoll gewährleistet die korrekte Reihenfolge und Vollständigkeit der übertragenen Daten durch eine Reihe von Mechanismen.

### Eigenschaften von TCP
- **Verbindungsorientiert**: Bevor Daten übertragen werden, wird eine Verbindung zwischen den beteiligten Parteien hergestellt.
- **Zuverlässigkeit**: TCP gewährleistet durch den Einsatz von Sequenznummern und Quittungen, dass alle Daten vollständig und in der richtigen Reihenfolge beim Empfänger ankommen. Verlorene oder beschädigte Datenpakete werden neu übertragen.
- **Fluss- und Staukontrolle**: Integrierte Mechanismen regulieren den Datenfluss, um Überlastungen im Netzwerk zu vermeiden und die Datenübertragung effizient zu gestalten.

## UDP (User Datagram Protocol)

Im Gegensatz zu TCP ist UDP ein verbindungsloses Protokoll, das sich durch geringeren Overhead und höhere Übertragungsgeschwindigkeiten auszeichnet, aber weniger Zuverlässigkeit bietet. Es eignet sich besonders für Anwendungen, bei denen Geschwindigkeit wichtiger ist als die fehlerfreie Lieferung der Daten.

### Eigenschaften von UDP
- **Verbindungslos**: Es findet kein vorheriger Verbindungsaufbau statt; Datenpakete, sogenannte Datagramme, werden ohne vorherige Absprache gesendet.
- **Schnell**: Die Abwesenheit eines Verbindungsaufbaus und der damit verbundenen Verwaltungsaufgaben reduziert die Verzögerungen, wodurch die Datenübertragung beschleunigt wird.
- **Unzuverlässig**: UDP bietet keine Mechanismen für die Überprüfung der Ankunft oder Reihenfolge der Daten. Paketverluste und -verzerrungen werden nicht automatisch korrigiert, was zu Dateninkonsistenzen führen kann.

Beide Protokolle, TCP und UDP, spielen eine zentrale Rolle in der modernen Netzwerkkommunikation, indem sie unterschiedliche Bedürfnisse hinsichtlich Geschwindigkeit und Zuverlässigkeit erfüllen.