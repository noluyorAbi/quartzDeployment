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

# Flusssteuerung und Staukontrolle

Die Flusssteuerung und Staukontrolle sind zwei wesentliche Mechanismen in Netzwerkprotokollen, die dazu beitragen, die Effizienz und Zuverlässigkeit der Datenübertragung zwischen Computern in einem Netzwerk zu gewährleisten. Diese Techniken sind besonders wichtig in Umgebungen, wo das Risiko von Datenverlust oder Netzwerküberlastung besteht.

## Flusssteuerung
Die Flusssteuerung ist ein Verfahren zur Steuerung der Datenmenge, die zwischen zwei Geräten übertragen wird, um sicherzustellen, dass der Sender nicht mehr Daten sendet, als der Empfänger verarbeiten und bestätigen kann. Ziel ist es, eine Überflutung des Empfängerspeichers zu vermeiden, was zu Datenverlust führen könnte.

- **Ziel**: Sicherstellen, dass der Empfänger nicht mehr Daten empfängt, als er verarbeiten kann, um Überflutung und Datenverlust zu vermeiden.
- **Methoden**:
  - **Schiebefensterverfahren (Sliding Window Protocol)**: Dieses Verfahren verwendet ein Fenster, das auf der Empfängerseite definiert ist, um die Menge der Daten, die gesendet werden können, bevor eine Bestätigung erforderlich ist, zu begrenzen.
  - **Quittungsbasiertes Senden (Acknowledgement Based Sending)**: Hierbei sendet der Empfänger nach dem Empfang einer bestimmten Datenmenge eine Bestätigung zurück zum Sender, der daraufhin die nächsten Daten sendet.
  - **Ratenbasierte Steuerung (Rate Based Control)**: Bei dieser Methode wird die Übertragungsrate basierend auf der aktuellen Netzwerklast oder den Empfängerkapazitäten dynamisch angepasst.

## Staukontrolle
Die Staukontrolle zielt darauf ab, Überlastungen im Netzwerk zu vermeiden. Sie regelt den Datenverkehr, um zu verhindern, dass zu viele Daten gleichzeitig gesendet werden und somit die Netzwerkleistung beeinträchtigen.

- **Ziel**: Reduzierung der Netzwerküberlastung, um hohe Latenzzeiten und Paketverlust zu vermeiden und die Datenübertragungsqualität zu erhalten.
- **Methoden**:
  - **Slow Start**: Eine Technik, bei der die Übertragungsrate von Verbindungen langsam gesteigert wird, beginnend mit einem niedrigen Schwellenwert, der schrittweise erhöht wird, bis ein optimaler Durchsatz erreicht ist oder Paketverlust eintritt.
  - **Congestion Avoidance**: Sobald die Übertragungsrate einen bestimmten Schwellenwert erreicht, wird die Rate so angepasst, dass das Risiko einer Überlastung minimiert wird.
  - **Fast Retransmit**: Diese Technik erkennt verlorene Segmente schneller und fordert eine erneute Übertragung an, ohne auf einen Timeout zu warten.
  - **Fast Recovery**: Nach dem Erkennen eines Paketverlusts reduziert diese Methode die Sendefenstergröße nicht sofort auf Null, sondern halbiert sie, um den Durchsatz zu erhalten und gleichzeitig das Netzwerk zu entlasten.

Die Kombination aus Flusssteuerung und Staukontrolle ermöglicht eine effiziente und zuverlässige Netzwerkkommunikation, indem sie sicherstellt, dass Datenpakete weder verloren gehen noch das Netzwerk überlastet wird. Diese Techniken sind unerlässlich für die Aufrechterhaltung der Leistung und Stabilität von Netzwerken, besonders in hochvolumigen oder dynamischen Umgebungen.