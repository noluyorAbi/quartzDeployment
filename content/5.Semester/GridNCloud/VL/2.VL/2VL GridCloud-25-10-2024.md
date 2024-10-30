---
date created: Wednesday, 30. October 2024, 15:32
date modified: Wednesday, 30. October 2024, 20:29
---

# Vorlesungstranskript: Höchstleistungsrechnen, Grand Challenges und ihre Anwendungen

## Einleitung

In dieser Vorlesung befassen wir uns mit den Herausforderungen und Anwendungen des Höchstleistungsrechnens (High-Performance Computing, HPC). Wir untersuchen, wie HPC dazu beiträgt, einige der größten wissenschaftlichen und gesellschaftlichen Herausforderungen, die sogenannten **Grand Challenges**, zu bewältigen. Anhand konkreter Beispiele wie der Bildgebung des schwarzen Lochs in der Galaxie M87 und umfangreicher Klimasimulationen werden wir die immense Rechenleistung und die Datenmengen diskutieren, die für solche Projekte erforderlich sind.

## Bildgebung des schwarzen Lochs in der Galaxie M87

### Überblick

Das erste Bild eines schwarzen Lochs, genauer gesagt des supermassiven schwarzen Lochs im Zentrum der Galaxie M87, markierte einen Meilenstein in der Astronomie. Obwohl das Bild auf den ersten Blick einfach erscheint—aussieht wie ein verschwommener leuchtender Ring—war der technische und wissenschaftliche Aufwand dahinter enorm.

### Technische Herausforderungen

- **Datenvolumen**: Um das Bild zu erstellen, sammelten Wissenschaftler Daten von acht Radioteleskopen rund um den Globus, die zusammen das sogenannte **Event Horizon Telescope (EHT)** bilden. Die gesammelten Rohdaten umfassten etwa **5 Petabyte**, was 5.000 Terabyte entspricht.

- **Datenübertragung**: Aufgrund der enormen Datenmengen war es unmöglich, die Daten über das Internet zu übertragen. Stattdessen wurden die Daten auf physischen Festplatten gespeichert und per Flugzeug transportiert—ausschlaggebend war hier das "Sneakernet".

- **Synchronisation**: Die Teleskope mussten extrem genau synchronisiert werden, was durch hochpräzise Atomuhren erreicht wurde. Diese Genauigkeit im Nanosekundenbereich war entscheidend, um die Daten korrekt zu kombinieren.

### Rechnerische Anforderungen

- **Datenverarbeitung**: Die Verarbeitung der Daten erforderte erhebliche Rechenressourcen. Spezialisten entwickelten komplexe Algorithmen, um die Daten zu korrelieren und Rauschen zu eliminieren.

- **Supercomputing**: Mehrere Supercomputer weltweit wurden eingesetzt, um die Daten zu verarbeiten. Dies beinhaltete die Verwendung von Hochleistungsrechenzentren wie dem **LRZ** (Leibniz-Rechenzentrum) in München.

### Bedeutung des Ergebnisses

- **Bestätigung der Theorie**: Das Bild lieferte den ersten direkten visuellen Beweis für die Existenz von schwarzen Löchern und bestätigte Vorhersagen der Allgemeinen Relativitätstheorie.

- **Technologischer Fortschritt**: Die Entwicklung neuer Technologien und Methoden im Bereich der Datenverarbeitung und Radioastronomie.

- **Globale Zusammenarbeit**: Das Projekt demonstrierte die Möglichkeiten internationaler Kooperation in der Wissenschaft.

## Höchstleistungsrechnen in der wissenschaftlichen Forschung

### CERN und der Large Hadron Collider (LHC)

#### Datengenerierung und -management

- **Datenproduktion**: Der LHC ist der größte Teilchenbeschleuniger der Welt und erzeugt bei Kollisionen zwischen Protonen enorme Datenmengen—bis zu **1 Petabyte pro Sekunde** an Rohdaten.

- **Echtzeitfilterung**: Da es unmöglich ist, all diese Daten zu speichern, werden sie in Echtzeit gefiltert. Nur etwa **1 Gigabyte pro Sekunde** wird für die langfristige Speicherung ausgewählt.

#### Verteilte Datenverarbeitung

- **Computing Grid**: Das CERN nutzt ein weltweit verteiltes Netzwerk von Rechenzentren, das **Worldwide LHC Computing Grid (WLCG)**, um die Daten zu verarbeiten.

  - **Tier-0-Zentrum**: Das Hauptrechenzentrum am CERN in Genf, wo die primäre Datenverarbeitung stattfindet.

  - **Tier-1-Zentren**: 13 große Rechenzentren weltweit, die Daten von Tier-0 erhalten und weiterverarbeiten.

  - **Tier-2-Zentren**: Über 160 kleinere Rechenzentren an Universitäten und Forschungsinstituten für spezialisierte Analysen.

- **Globale Zusammenarbeit**: Mehr als **10.000 Wissenschaftler** aus über 100 Ländern arbeiten gemeinsam an der Datenanalyse.

### Erdbeobachtungsdaten und das DLR

- **Satellitendaten**: Das **Deutsche Zentrum für Luft- und Raumfahrt (DLR)** sammelt kontinuierlich Daten von Erdbeobachtungssatelliten.

- **Speicherung und Verarbeitung**: Diese Daten werden am LRZ gespeichert, wo sie für verschiedene Forschungsprojekte zur Verfügung stehen.

- **Anwendungsbeispiele**:

  - **Klimaforschung**: Analyse langfristiger Klimaveränderungen und Erstellung von Klimamodellen.

  - **Katastrophenmanagement**: Echtzeitüberwachung von Naturkatastrophen wie Erdbeben, Überschwemmungen und Waldbränden.

  - **Landwirtschaft**: Überwachung von Ernteerträgen und Bodenfeuchtigkeit zur Optimierung der Landwirtschaft.

## Klimasimulationen und Extremwetterereignisse

### Überschwemmungen in Deggendorf und die 5b-Wetterlage

- **Definition der 5b-Wetterlage**: Eine spezielle meteorologische Situation, bei der feuchte Luft vom Mittelmeer nach Mitteleuropa strömt und auf kältere Luftmassen trifft. Dies führt zu starken und lang anhaltenden Niederschlägen.

- **Fallstudie Deggendorf 2013**:

  - **Ereignis**: Schwere Überschwemmungen, bei denen Deiche brachen und ganze Ortschaften überflutet wurden.

  - **Auswirkungen**: Schäden in Milliardenhöhe, Evakuierung tausender Menschen und langfristige Auswirkungen auf die Infrastruktur.

- **Herausforderungen in der Vorhersage**:

  - **Komplexität der Modelle**: Um solche Ereignisse vorherzusagen, sind hochauflösende Modelle notwendig, die sowohl atmosphärische als auch hydrologische Prozesse berücksichtigen.

  - **Datenbedarf**: Große Mengen an meteorologischen und geografischen Daten sind erforderlich.

### Klimawandel und Häufigkeit von Extremereignissen

- **Anstieg der Ereignisse**: Statistiken zeigen einen signifikanten Anstieg von Extremwetterereignissen in den letzten Jahrzehnten.

- **Ursachen**: Der Klimawandel führt zu veränderten Wettermustern, erhöhten Temperaturen und veränderten Niederschlagsmustern.

- **Folgen**:

  - **Gesellschaftliche Auswirkungen**: Bedrohung der Lebensmittelversorgung, Gesundheitsrisiken und wirtschaftliche Verluste.

  - **Notwendigkeit der Anpassung**: Städte und Gemeinden müssen ihre Infrastruktur anpassen, um widerstandsfähiger gegen solche Ereignisse zu werden.

### Das CLMEX-Projekt

- **Leitung**: Professor Ralf Ludwig von der LMU München.

- **Zielsetzung**: Untersuchung, wie sich der Klimawandel auf regionale Extremwetterereignisse auswirkt, insbesondere auf die Häufigkeit und Intensität von Überschwemmungen.

- **Methodik**:

  - **Simulationen**: Durchführung von **7.500 Klimasimulationen** mit unterschiedlichen Szenarien und Parametern.

  - **Rechenleistung**: Nutzung von Supercomputern, um die enormen Datenmengen zu verarbeiten.

  - **Datenvolumen**: Insgesamt wurden etwa **0,5 Petabyte** an Daten erzeugt.

- **Ergebnisse**:

  - **Präzisere Modelle**: Entwicklung von Modellen, die lokale Wetterphänomene besser abbilden können.

  - **Politische Beratung**: Bereitstellung von Daten für Entscheidungsträger, um bessere Strategien zur Klimaanpassung zu entwickeln.

### Technische Herausforderungen

- **Rechenzeit**: Die Durchführung der Simulationen erforderte enorme Rechenressourcen über einen längeren Zeitraum.

- **Datenmanagement**: Speicherung, Zugriff und Analyse der erzeugten Daten stellten logistische Herausforderungen dar.

- **Interdisziplinäre Zusammenarbeit**: Notwendigkeit der Zusammenarbeit zwischen Meteorologen, Hydrologen, Informatikern und anderen Fachbereichen.

## Grand Challenges in der Informatik

### Fundamentale Gleichungen und Modelle

Die Lösung komplexer wissenschaftlicher Probleme basiert oft auf grundlegenden physikalischen Gleichungen, die als **Grand Challenge Equations** bezeichnet werden.

- **Newton'sche Gleichungen**: Beschreiben die Bewegung von Objekten unter dem Einfluss von Kräften; Grundlage für die klassische Mechanik.

- **Poisson-Gleichung**: Zentral in der Elektrodynamik und Gravitationstheorie, beschreibt das Potentialfeld eines gegebenen Dichteverteilers.

- **Maxwell-Gleichungen**: Beschreiben elektrische und magnetische Felder und ihre Wechselwirkungen.

- **Schrödinger-Gleichung**: Fundament der Quantenmechanik, beschreibt die Wellenfunktion eines quantenmechanischen Systems.

- **Navier-Stokes-Gleichungen**: Beschreiben das Fließverhalten von Flüssigkeiten und Gasen; essentiell für Strömungsmechanik und Wettermodelle.

### Rolle der Künstlichen Intelligenz (KI)

- **Datenbasierte Modelle**: KI kann verwendet werden, um Muster in großen Datensätzen zu erkennen und Vorhersagen zu treffen.

- **Ergänzung zu physikalischen Modellen**:

  - **Beschleunigung von Simulationen**: KI kann verwendet werden, um Teile von Simulationen zu beschleunigen, z.B. durch Vorhersage von Ergebnissen basierend auf vorherigen Läufen.

  - **Unsicherheitsquantifizierung**: KI-Modelle können helfen, Unsicherheiten in Simulationen zu quantifizieren und zu reduzieren.

- **Limitierungen**:

  - **Mangel an Interpretierbarkeit**: KI-Modelle können oft nicht die zugrunde liegenden physikalischen Prozesse erklären.

  - **Datenabhängigkeit**: Die Qualität der KI-Vorhersagen hängt stark von der Qualität und Menge der verfügbaren Daten ab.

### Beispiele für KI-Anwendungen

- **Wettervorhersage**: Nutzung von KI, um kurzfristige Wetterereignisse präziser vorherzusagen.

- **Materialwissenschaften**: Vorhersage von Materialeigenschaften basierend auf atomarer Struktur.

- **Medizin**: Diagnose von Krankheiten durch Analyse medizinischer Bilder oder genetischer Daten.

## Globale Herausforderungen und die Rolle der Informatik

### Richard Smalley's Top Ten Probleme der Menschheit

1. **Energie**: Sicherstellung nachhaltiger und sauberer Energiequellen.

2. **Wasser**: Zugang zu sauberem Trinkwasser für alle.

3. **Nahrung**: Beseitigung von Hunger und Verbesserung der Lebensmittelversorgung.

4. **Umwelt**: Schutz der Umwelt und Bekämpfung des Klimawandels.

5. **Armut**: Reduzierung von Armut und Verbesserung der Lebensbedingungen.

6. **Terrorismus und Krieg**: Förderung von Frieden und Sicherheit.

7. **Krankheiten**: Bekämpfung von Krankheiten durch Forschung und Zugang zu medizinischer Versorgung.

8. **Bildung**: Zugang zu qualitativ hochwertiger Bildung für alle.

9. **Demokratie**: Förderung von Freiheit, Gerechtigkeit und Menschenrechten.

10. **Bevölkerungswachstum**: Management des Bevölkerungswachstums und seiner Auswirkungen.

### Beitrag der Informatik

- **Simulation und Modellierung**: Hilft bei der Vorhersage und Planung in Bereichen wie Energie, Umwelt und Gesundheit.

- **Datenanalyse**: Verarbeitung großer Datenmengen zur Identifizierung von Trends und Mustern.

- **Technologische Innovation**: Entwicklung neuer Technologien zur Lösung spezifischer Probleme, z.B. in der Medizin oder erneuerbaren Energien.

### Nachhaltige Entwicklungsziele (SDGs) der Vereinten Nationen

- **Übereinstimmung mit Smalley's Liste**: Die SDGs decken viele der identifizierten globalen Herausforderungen ab.

- **Rolle der Informatik**:

  - **Ziel 7**: Bezahlbare und saubere Energie durch intelligente Netze und Effizienzsteigerungen.

  - **Ziel 13**: Klimaschutz durch Überwachung und Modellierung von Emissionen.

  - **Ziel 3**: Gesundheit und Wohlergehen durch Telemedizin und Gesundheitsinformatik.

## Bevölkerungswachstum und dessen Auswirkungen

### Historische Entwicklung

- **1950er Jahre**: Weltbevölkerung von etwa **2,5 Milliarden** Menschen.

- **Aktuelle Situation**: Über **8 Milliarden** Menschen weltweit.

### Prognosen für die Zukunft

- **Wachstumstrends**: Prognosen variieren, aber bis 2100 könnte die Bevölkerung auf **10 bis 11 Milliarden** ansteigen.

- **Regionale Unterschiede**: Das Wachstum konzentriert sich hauptsächlich in Entwicklungsländern, insbesondere in Afrika und Asien.

### Herausforderungen

- **Ressourcenbedarf**: Steigender Bedarf an Nahrung, Wasser und Energie.

- **Umweltbelastung**: Mehr Menschen bedeuten mehr Verbrauch und Abfall, was die Umwelt zusätzlich belastet.

- **Städtisches Wachstum**: Zunahme von Megastädten und die damit verbundenen infrastrukturellen Herausforderungen.

- **Soziale Spannungen**: Potenzielle Konflikte aufgrund von Ungleichheiten und Ressourcenkonflikten.

## Naturkatastrophen und Klimaveränderungen

### Anstieg von Extremereignissen

- **Statistische Daten**: Die Anzahl der Naturkatastrophen hat sich seit den 1980er Jahren mehr als verdreifacht.

- **Arten von Ereignissen**:

  - **Geophysikalisch**: Erdbeben, Vulkanausbrüche.

  - **Meteorologisch**: Hurrikane, Tornados.

  - **Hydrologisch**: Überschwemmungen, Erdrutsche.

  - **Klimatologisch**: Dürreperioden, Hitzewellen.

### Ursachen und Zusammenhänge

- **Klimawandel**: Steigende Temperaturen führen zu veränderten Wetterbedingungen und mehr Energie in der Atmosphäre.

- **Menschliche Aktivitäten**: Entwaldung, Urbanisierung und die Versiegelung von Böden verstärken die Auswirkungen von Naturereignissen.

### Wirtschaftliche Auswirkungen

- **Versicherungsbranche**: Unternehmen wie die **Münchener Rück** analysieren diese Trends für Risikobewertungen und zur Festlegung von Prämien.

- **Schadenskosten**: Anstieg der Kosten für Wiederaufbau und Schadensbegrenzung.

- **Präventionsmaßnahmen**: Investitionen in Infrastruktur und Frühwarnsysteme zur Reduzierung von Schäden.

## Entwicklung von Höchstleistungsrechnern

### Komponenten und Architektur eines Supercomputers

- **Rechenleistung**:

  - **Prozessoren**: Anzahl der Kerne und deren Taktfrequenz.

  - **Beschleuniger**: Nutzung von GPUs (Graphics Processing Units) oder speziellen Beschleunigern wie FPGAs.

- **Speicher**:

  - **Hauptspeicher (RAM)**: Temporärer Speicher für schnelle Datenzugriffe.

  - **Massenspeicher**: Festplatten oder SSDs für langfristige Datenspeicherung.

- **Kommunikationsnetzwerk**:

  - **Interconnects**: Hochgeschwindigkeitsverbindungen zwischen den Knoten zur schnellen Datenübertragung.

  - **Topologie**: Aufbau des Netzwerks, z.B. Fat-Tree, Torus.

### Optimierungskriterien

- **Leistung pro Watt**: Effizienz ist entscheidend, um den Energieverbrauch zu minimieren.

- **Balance zwischen Komponenten**: Ein ausgewogenes System verhindert Flaschenhälse.

- **Anwendungsanforderungen**: Das System sollte auf die spezifischen Bedürfnisse der Nutzer zugeschnitten sein.

### Capability vs. Capacity Computing

- **Capability Computing**:

  - **Definition**: Systeme, die für die Lösung großer, komplexer Probleme optimiert sind.

  - **Beispiel**: Simulation der globalen Klimaerwärmung mit hoher Auflösung.

- **Capacity Computing**:

  - **Definition**: Systeme, die viele kleinere, unabhängige Aufgaben parallel bearbeiten können.

  - **Beispiel**: Verarbeitung von Millionen einzelner genetischer Sequenzen.

## Fallstudie: SuperMUC-NG am Leibniz-Rechenzentrum (LRZ)

### Hintergrund

- **Standort**: Garching bei München, Deutschland.

- **Ziel**: Bereitstellung eines der leistungsfähigsten Supercomputer Europas für Forschung und Wissenschaft.

### Technische Spezifikationen

- **Rechenkerne**: **311.040** Intel Xeon Kerne.

- **Hauptspeicher**: **719 Terabyte** RAM.

- **Speicherkapazität**: **70 Petabyte** Massenspeicher.

- **Leistung**:

  - **Peak Performance**: **26,9 Petaflops**.

  - **Linpack Performance**: **19,5 Petaflops**.

### Designphilosophie

- **Anwendungsorientierung**: Der SuperMUC-NG wurde für ein breites Spektrum an Anwendungen optimiert, nicht nur für Benchmark-Tests.

- **Energieeffizienz**:

  - **Warmwasserkühlung**: Nutzung von **Heißwasserkühlung** bei bis zu 40°C, was die Effizienz steigert und Energie spart.

  - **Abwärmenutzung**: Die abgeführte Wärme wird zur Beheizung von Gebäuden genutzt.

- **Flexibilität**: Unterstützung sowohl von traditionellen HPC-Anwendungen als auch von KI- und Datenanalyse-Workloads.

### Beschaffungsprozess

- **Europäische Ausschreibung**: Transparenter und wettbewerbsorientierter Prozess zur Auswahl des besten Angebots.

- **Anforderungen**:

  - **Leistungsziele**: Klare Vorgaben für Rechenleistung, Energieverbrauch und Speicher.

  - **Vertragsbedingungen**: Detaillierte Vereinbarungen zu Lieferung, Installation, Wartung und Leistungsnachweisen.

- **Auswahlkriterien**:

  - **Technische Eignung**: Fähigkeit, die gestellten Anforderungen zu erfüllen.

  - **Wirtschaftlichkeit**: Gesamtbetriebskosten über die Lebensdauer des Systems.

  - **Innovationsgrad**: Einsatz neuester Technologien und Ansätze.

### Herausforderungen bei der Implementierung

- **Technologische Innovationen**:

  - **Neue Prozessoren**: Integration von Prozessoren der neuesten Generation, die zum Zeitpunkt der Planung noch nicht verfügbar waren.

  - **Netzwerkarchitektur**: Entwicklung einer effizienten Netzwerkstruktur zur Minimierung von Latenzzeiten.

- **Zeitplanung**: Koordination der Lieferung und Installation von Komponenten innerhalb des festgelegten Zeitrahmens.

- **Systemintegration**: Sicherstellung, dass Hardware und Software nahtlos zusammenarbeiten.

### Anwendungen und Nutzer

- **Klimaforschung**: Durchführung komplexer Klimamodelle zur Vorhersage von Wetter- und Klimaveränderungen.

- **Astrophysik**: Simulation der Entstehung und Entwicklung von Galaxien und kosmischen Strukturen.

- **Biowissenschaften**: Proteinstrukturanalysen und Genomsequenzierungen.

- **Ingenieurwissenschaften**: Strömungssimulationen für die Automobil- und Luftfahrtindustrie.

## Anwendungen und Fallbeispiele

### WISDOM: Virtuelles Screening in der Medikamentenentwicklung

#### Hintergrund

- **Problemstellung**: Entwicklung von Medikamenten gegen vernachlässigte Krankheiten wie Malaria ist zeitaufwändig und kostspielig.

- **Ziel**: Nutzung von Grid-Computing-Ressourcen zur Beschleunigung des virtuellen Screenings von potenziellen Medikamenten.

#### Methodik

- **Molekulares Docking**:

  - **Prinzip**: Simulation der Interaktion zwischen kleinen Molekülen (potenziellen Medikamenten) und Zielproteinen.

  - **Datenbanken**: Nutzung von Bibliotheken mit Millionen von chemischen Verbindungen.

- **Rechenressourcen**:

  - **Verteiltes Rechnen**: Einsatz von ungenutzter Rechenleistung in einem globalen Netzwerk.

  - **Parallelisierung**: Gleichzeitige Verarbeitung von Tausenden von Docking-Simulationen.

#### Ergebnisse

- **Effizienzsteigerung**: Reduktion der benötigten Rechenzeit von Jahren auf Wochen.

- **Kostenersparnis**: Minimierung der finanziellen Aufwendungen für das Screening.

- **Identifizierung von Kandidaten**: Auswahl vielversprechender Verbindungen für weitere Laboranalysen.

#### Bedeutung

- **Beschleunigung der Medikamentenentwicklung**: Schnellerer Übergang von der Theorie zur Praxis.

- **Zugang zu Ressourcen**: Ermöglichung von Forschung in Bereichen mit begrenzten finanziellen Mitteln.

### DREAM: Hydrometeorologische Simulationen

#### Hintergrund

- **Problemstellung**: Schnelle und genaue Vorhersage von Hochwasserereignissen zur Minimierung von Schäden.

- **Ziel**: Entwicklung einer verteilten Infrastruktur zur Simulation von hydrometeorologischen Prozessen in Echtzeit.

#### Methodik

- **Modellkopplung**:

  - **Meteorologische Modelle**: Vorhersage von Niederschlägen und atmosphärischen Bedingungen.

  - **Hydrologische Modelle**: Simulation des Wasserflusses in Flusseinzugsgebieten.

  - **Hydraulische Modelle**: Detailierte Simulation von Wasserbewegungen in Flüssen und Kanälen.

- **Recheninfrastruktur**:

  - **Grid Computing**: Nutzung verteilter Rechenressourcen zur Skalierung der Berechnungen.

  - **Datenintegration**: Echtzeit-Einbindung von Sensordaten zur Aktualisierung der Modelle.

#### Ergebnisse

- **Frühwarnsysteme**: Verbesserte Vorhersagegenauigkeit und frühzeitige Warnungen an Behörden und Bevölkerung.

- **Notfallmanagement**: Unterstützung bei der Planung und Durchführung von Evakuierungen und anderen Schutzmaßnahmen.

- **Langfristige Planung**: Bereitstellung von Daten für die Infrastrukturplanung und Risikobewertung.

#### Herausforderungen

- **Datenverfügbarkeit**: Sicherstellung des Zugriffs auf aktuelle und genaue Daten.

- **Interoperabilität**: Integration verschiedener Modelle und Datenquellen.

- **Skalierbarkeit**: Anpassung der Rechenleistung an die Anforderungen unterschiedlicher Ereignisse.

## Fazit

Das Höchstleistungsrechnen ist ein zentrales Instrument zur Bewältigung der großen wissenschaftlichen und gesellschaftlichen Herausforderungen unserer Zeit. Durch die Kombination von fortschrittlicher Technologie, interdisziplinärer Zusammenarbeit und innovativen Ansätzen können wir komplexe Probleme angehen, von der Klimaforschung über die Medizin bis hin zur Astrophysik. Die fortschreitende Entwicklung von Supercomputern wie dem SuperMUC-NG ermöglicht es, immer detailliertere Modelle zu erstellen und präzisere Vorhersagen zu treffen. Gleichzeitig stellt uns dies vor neue Herausforderungen in Bezug auf Energieeffizienz, Datenmanagement und ethische Überlegungen. Es liegt an uns, diese Technologien verantwortungsvoll einzusetzen, um eine nachhaltige und lebenswerte Zukunft zu gestalten.

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
