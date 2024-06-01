---
created: 2024-03-11 17:10
last modified: 2024-03-12 16:59
tags:
  - DBS
  - Übungsblatt
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 11. March 2024, 17:10
date modified: Tuesday, 16. April 2024, 11:02
---

# Aufgabe 2-1 *Datenbanksysteme – Dateiverwaltungssysteme*

## Erläutern Sie die Vorteile, die Datenbanksysteme gegenüber Dateiverwaltungssystemen durch die [[3 - Ebenenarchitektur]] (Externe, Interne, Konzeptionelle Ebene) besitzen. Insbesondere soll dabei auf folgende Punkte eingegangen werden: [[Unterschiede zwischen Datenbanksystemen und Dateiverwaltungssystemen]]

### a) Erweiterung der abgespeicherten Datensatze um ein Attribute

| Dateiverwaltungssystem                                                                           | Datenbanksystem                                                                                           |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Änderung der Recordstrukturen der Dateien                                                        | Änderung des konzeptionellen Schemas und der internen Ebene                                               |
| → alle betroffenen Anwendungen (die auf die geänderten Dateien zugreifen) müssen geändert werden | → externe Sichten können meist unverändert bleiben (evtl. Müssen einige Benutzersichten verändert werden) |
| → Zeitaufwendig                                                                                  | → Benutzersichten können im Laufe der Zeit angepasst werden                                               |
| → Änderungen nur mir Ankündigung möglich                                                         | → Änderungen können spontan und ohne Wissen der Anwender passieren                                        |

### b) Anlegen eines Index zum schnelleren Zugriff auf die Datensätze

| Dateiverwaltungssystem                                              | Datenbanksystem                                                                                                                                                                     |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zusätzliche Indexdatei muss erstellt und gewartet werden            | Zusätzliche Indexstruktur auf der Internen Ebene                                                                                                                                    |
| → Änderung aller Anwendungsprogramme die diesen Index nutzen wollen | → Anfragebearbeitung wird automatisch von Datenbankmanagementsystem gesteuert uns so fallen keine Änderungen für die Anwendungsprogramme an (aber dennoch schnellere Zugriffzeiten) |

--- 

# Aufgabe 2-2 *Relationales Datenmodell*

Ein Computerspielegeschäft, das sich auf Klassiker spezialisiert hat, bietet Spiele verschiedener Studios zu bestimmten Preisen an. Interessanterweise wird zu jedem Studio auch die Anzahl der Mitarbeiter gespeichert, was einzig der Geschäftsinhaber zu wissen scheint.

Jedes im Sortiment befindliche Spiel ist mit einem Erscheinungsdatum versehen und wurde von genau einem Studio veröffentlicht. Die relevanten Informationen über die verfügbaren Spiele sind in einer Tabelle festgehalten, welche die Attribute Studio, Mitarbeiteranzahl, Spiel, Erscheinungsdatum und Preis umfasst.

Die Tabelle ist wie folgt aufgebaut:

| Studio    | Mitarbeiteranzahl | Spiel                       | Erscheinungsdatum | Preis  |
| --------- | ----------------- | --------------------------- | ----------------- | ------ |
| LucasArts | 45                | The Secret of Monkey Island | 1990              | 49,99  |
| Atari     | 3                 | E.T. the Extra-Terrestrial  | 1982              | 179,99 |
| LucasArts | 45                | Sam & Max Hit the Road      | 1993              | 39,95  |
| Nintendo  | 72                | Super Mario Bros.           | 1985              | 45,99  |
| LucasArts | 45                | Day of the Tentacle         | 1993              | 29,99  |
| Nintendo  | 72                | Super Metroid               | 1985              | 45,99  |

Diese Datenbank dient dazu, einen Überblick über das Angebot des Geschäfts zu behalten und ermöglicht es, schnell Informationen zu den Spielen, deren Preisen und den Studios, die sie entwickelt haben, abzurufen.

## a) Welcher Nachteil ergibt sich, wenn die Tabelle nach obigem Schema gespeichert wird? [[Anomalien in Datenbanksystemen]]

- Mitarbeiterzahl existiert mehrmals in der Tabelle also nötig ([[Anomalien in Datenbanksystemen#Redundanz|Redundanz]])
- Es kann kein Studio existieren ohne Spiel, was nicht der Realität entspricht. Es müssen immer ganze Zeilen eingefügt werden ([[Anomalien in Datenbanksystemen#Einfügeanomalie|Einfügeanomalie]])
- Bei einer Änderung der Mitarbeiteranzahl müssen mehrere Zeilen geändert werden was unnötigen Overhead darstellt. ([[Anomalien in Datenbanksystemen#Änderungsanomalie|Änderungsanomalie]])
- Beim Löschen gehen Informationen verloren die nicht verloren gehen sollten. Bsp. beim löschen von E.T geht auch die Information der Mitarbeiteranzahl von Atari verloren. ([[Anomalien in Datenbanksystemen#Entfernungsanomalie|Entfernungsanomalie]])

## b) LucasArts stellt einen neuen Mitarbeiter ein. Der Geschäftsführer besteht darauf das diese wichtige Information sofort aktualisiert wird. Was ist beim Aktualisieren der Tabelle zu beachten? Welches Problem ergibt sich sonst?

- Da die Mitarbeiteranzahl bei jedem Spiel gespeichert wird muss sie in jeder Zeile wo LucasArts also Studio vertreten ist geändert werden. Das ist unnötige Arbeit welche zu Fehlern und einer inkonsistenten Datenbank führen kann, falls diese Info nicht in jeder Zeile umgeändert wird. Dies nennt man auch [[Anomalien in Datenbanksystemen#Änderungsanomalie|Änderungsanomalie.]]

## c) Niemand kauft das Spiel "E.T. the Extra-Terrestrial", und der Laden nimmt es daher aus seinem Sortiment (und vergräbt es auf einer Müllhalde...). Die entsprechende Zeile wird aus der Tabelle entfernt. Welcher Nachteil entsteht dadurch?

- Es kommt zu einer [[Anomalien in Datenbanksystemen#Entfernungsanomalie|Entfernungsanomalie]], da mehrere Informationen mit der Löschung des Spieles aus der Tabelle hervorkommen. Da E.T das einzige Spiel von ATARI in der Liste ist, verlieren wir zudem ATARI also Studio und deren Mitarbeiterzahl. Beides Sachen welche nur aus Folge gelöscht wurden und nicht weil es das Ziel war.

## d) Welches Problem ergibt sich, wenn ein neues Studios inkl. Mitarbeiteranzahl in die Tabelle eingefügt werden soll, für das noch kein Spiel verkauft wird.

- Es kann kein Studio hinzugefügt werden, was noch kein Spiel veröffentlicht hat, da sonst notwendige Inforamtionen wie Spiel und Erscheinungsdatum in der Zeile fehlen → [[Anomalien in Datenbanksystemen#Einfügeanomalie|Einfügeanomalie]]

## e) Spalten Sie obige Tabelle in mindestens zwei Tabellen auf, so dass die in (a) bis (d) diskutierten Problem und Nachteile vermieden werden. Kennzeichnen Sie hierbei die Schlüssel. Nehmen Sie an, dass alle Namen eindeutig sind. Fuhren Sie keine künstlichen Attribute ein.

### Tabelle Studios

| Studio  (key)  | Mitarbeiteranzahl |
| --------- | ----------------- |
| LucasArts | 45                |
| Atari     | 3                 |
| Nintendo  | 72                |

### Tabelle Spiele

| Studio | Spiel      (key)                 | Erscheinungsatum | Preis |
| ------ | --------------------------- | ---------------- | ----- |
| 1      | The Secret of Monkey Island | 1990             | 49    |
| 2      | E.T. the Extra-Terrestrial  | 1982             | 179   |
| 1      | Sam& Max Hit the Road       | 1983             |       |

---

Also nächstes: [[DBS-Blatt 3]]






<!-- DISQUS SCRIPT COMMENT START -->






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






