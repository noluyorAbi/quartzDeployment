---
tags:
  - 5semester
  - medBiom
  - statistik
fach: "[[Einführung medizinische Biometrie]]"
Thema:
Benötigte Zeit:
date created: Wednesday, 23. October 2024, 12:40
date modified: Wednesday, 23. October 2024, 15:27
---

# Grundbegriffe und epidemiologische Maßzahlen

## Schnick Schnack

- Confounding erklärt
  - $\text{Korrelation} \neq \text{Kausalität}$
- Inzidenz erklärt
- Letalität erklärt
- Pyramide der Evidenz
- Die Prävalenz gibt Aufschluss über bestehende Fälle, die Inzidenz hingegen über neu auftretende Fälle

## 1. Definieren Sie folgende Studienarten und diskutieren Sie Vor- und Nachteile.

### a) „Ökologische Studie“

- `Wie viele Fälle einer Krankheit in einer Population?`
- `Auch Korrelationsstudie gennant`
- Eine ökologische Studie untersucht Zusammenhänge auf Bevölkerungsebene, nicht auf individueller Ebene. Sie vergleicht beispielsweise Krankheitsraten zwischen verschiedenen Regionen.

**Vorteile:** Schnell durchführbar und kostengünstig, nützlich für erste Hypothesen.

**Nachteile:** Gefahr des ökologischen Fehlschlusses (_ökologischer Bias_), da keine Aussagen über individuelle Risiken möglich sind. Schwierig Confoundig auszuschließen.

_Erklärung:_ Da Daten auf Gruppenebene erhoben werden, kann man nicht direkt auf individuelle Zusammenhänge schließen.

### b) Klinischer Fallbericht, Fallserie

Ein klinischer Fallbericht beschreibt einen einzelnen Patientenfall detailliert. Eine Fallserie umfasst mehrere Fälle mit ähnlicher Symptomatik.

**Vorteile:** Hilfreich bei der Identifizierung neuer Krankheiten oder Nebenwirkungen. → _Qualitative Aussage möglich_

**Nachteile:** Keine Kontrollgruppe vorhanden, geringe Aussagekraft bezüglich Ursache-Wirkungs-Beziehungen. → _KEINE QUANTITATIVE Aussage möglich_

_Erklärung:_ Ohne Vergleichsgruppe kann man keine generalisierbaren Schlüsse ziehen.

### c) Querschnittsstudie

- `Analysen bzw. Untersuchungen die nur EIN MAL durchgeführt werden`
- `Erhebung aus einer Population`
- `Keine Intervention`
  Erfasst Exposition und Krankheit zu einem bestimmten Zeitpunkt in einer Population.

**Vorteile:**

- Schnell und kostengünstig, liefert Informationen über die Prävalenz von Krankheiten.
- meist große Stichprobe
- Messung der Prävalenz möglich
- "Wie viele Fälle einer Krankheit sind zum zum Zeitpunkt x in einer Population möglich"

**Nachteile:** Kausalitätsaussagen sind nicht möglich, da die zeitliche Abfolge unklar ist. Kein Wissen über Zeiterlauf. Assoziation schwierig zu untersuchen

_Erklärung:_ Da Exposition und Krankheit gleichzeitig erfasst werden, kann man nicht sagen, was zuerst auftrat.

### d) Fall-Kontroll-Studie

Vergleicht Personen mit einer Krankheit (Fälle) mit Personen ohne diese Krankheit (Kontrollen) hinsichtlich früherer Expositionen.

**Vorteile:**

- Geeignet für seltene Krankheiten, relativ schnell und kosteneffektiv.
- retrospektive Beobachtung der Teilnehmer

**Nachteile:**

- Anfällig für Erinnerungsfehler (Recall Bias), keine direkte Berechnung von Inzidenzen möglich.
- Auswahl der Kontrollen ist schwierig
- Repräsentation der Zielpopulation oft mangelhaft

_Erklärung:_ Teilnehmer müssen sich an vergangene Expositionen erinnern, was ungenau sein kann.

### e) Kohortenstudie

Beobachtet eine Gruppe von exponierten und nicht exponierten Personen über die Zeit, um das Auftreten von Krankheiten zu vergleichen.

**Vorteile:**

- Kausalitätsaussagen sind möglich, Inzidenzberechnungen können durchgeführt werden.
- gut für mehrere Expositionen

**Nachteile:**

- Zeit- und kostenintensiv, möglicher Verlust von Teilnehmern (Follow-up-Verlust).

_Erklärung:_ Längere Beobachtungszeiträume erfordern mehr Ressourcen und können zu Ausfällen führen.

### f) Randomisierte kontrollierte Studie (RCT)

Teilnehmer werden zufällig in Interventions- und Kontrollgruppen aufgeteilt, um den Effekt einer Behandlung zu testen.

**Vorteile:**

- Höchste Evidenzstufe, minimiert Bias durch Randomisierung.
- Verblindung
- Randomisierung

**Nachteile:** Teuer und aufwändig, ethische Einschränkungen können bestehen. Zudem Gefahr von Dropouts.

_Erklärung:_ Randomisierung kontrolliert für bekannte und unbekannte Störfaktoren, aber nicht immer durchführbar.

- [ ] Genaueren Unterschied zwischen f) d) e) recherchieren

## 2. Welche Studiendesigns schlagen Sie zur Untersuchung folgender Fragestellungen vor?

### a) Verursacht erhöhter Blutdruck einen Herzinfarkt?

**Kohortenstudie**, um Personen mit unterschiedlichem Blutdruck über die Zeit zu beobachten und das Auftreten von Herzinfarkten zu vergleichen.

_Erklärung:_ Eine Kohortenstudie kann den zeitlichen Zusammenhang zwischen Blutdruck und Herzinfarkt untersuchen.

### b) Welche Rolle spielt die Haltung von Ziervögeln in der Ätiologie von Lungenkrebs?

- `evtl. auch Kohortenstudie`

**Fall-Kontroll-Studie**, um die Exposition (Ziervogelhaltung) zwischen Lungenkrebspatienten und gesunden Kontrollen zu vergleichen.

_Erklärung:_ Für seltene Krankheiten wie Lungenkrebs ist dieses Design effizient.

### c) Verursacht die berufliche Strahlenexposition von Bergarbeitern in Uran-Bergwerken Lungenkrebs?

**Kohortenstudie**, um die langfristigen Auswirkungen der Strahlenexposition auf die Gesundheit der Bergarbeiter zu untersuchen.

_Erklärung:_ Langzeitbeobachtung ermöglicht das Erfassen von Spätfolgen der Exposition.

### d) Verhindert eine Behandlung mit dem Cholesterinsenker XY erneute Herzinfarkte bei Patienten, die bereits einen Herzinfarkt erlitten haben?

-`Medikamentenforschung ist oftmals RCT`

**Randomisierte kontrollierte Studie (RCT)**, um die Wirksamkeit des Medikaments in einer kontrollierten Umgebung zu testen.

_Erklärung:_ Durch Randomisierung werden Störfaktoren kontrolliert, was valide Ergebnisse liefert.

## 3. Sind folgende Aussagen wahr oder falsch?

### a) Die Prävalenz für eine Erkrankung kann auch mittels einer Fall-Kontroll-Studie bestimmt werden.

**Falsch.** Fall-Kontroll-Studien eignen sich nicht zur Bestimmung der Prävalenz, da die Fälle und Kontrollen vom Forscher vorgegeben werden.

_Erklärung:_ Die Häufigkeit der Krankheit in der Population kann nicht ermittelt werden.

### b) Querschnittsstudien sind geeignet, um Inzidenzen zu berechnen.

**Falsch.** Querschnittsstudien messen die Prävalenz, nicht die Inzidenz.

_Erklärung:_ Sie erfassen Daten zu einem Zeitpunkt, sodass neue Fälle nicht identifiziert werden können.

### c) Ein Arzneimittel wird erst zugelassen, wenn es sich in den Phasen I, II, III, IV der klinischen Studie bewährt hat.

**Falsch.** Die Zulassung erfolgt nach erfolgreicher Phase III; Phase IV Studien finden nach der Zulassung statt.

_Erklärung:_ Phase IV Studien dienen der Überwachung nach Markteinführung.

### d) In Phase I Studien wird die Sicherheit eines neuen Verums anhand von erkrankten Individuen untersucht.

**Falsch.** Phase I Studien werden meist an gesunden Freiwilligen durchgeführt, um die Sicherheit und Verträglichkeit zu testen.

_Erklärung:_ Ziel ist es, die Pharmakokinetik und -dynamik zu verstehen.

## 4. Handelt es sich bei folgenden Angaben um (kumulative) Inzidenz oder Prävalenz?

`Die Prävalenz gibt Aufschluss über bestehende Fälle, die Inzidenz hingegen über neu auftretende Fälle`

### a) Ca. 8,17 von 10.000 waren im Dezember 2009 HIV-positiv.

**Prävalenz**

_Erklärung:_ Die Angabe bezieht sich auf alle bestehenden Fälle zu einem bestimmten Zeitpunkt.

### b) Innerhalb eines Jahres bekommen ca. 3 von 1.000 Kindern zwischen 6 und 16 Asthma.

**Inzidenz**

_Erklärung:_ Es werden neue Fälle innerhalb eines bestimmten Zeitraums angegeben.

### c) Der Anteil von Frauen mit Brustkrebs lag 2008 bei ca. 0,86%.

**Prävalenz**

_Erklärung:_ Es geht um den Anteil aller bestehenden Fälle in der Population.

### d) Der Anteil an Schlaganfällen pro Jahr liegt in Deutschland bei 125 je 100.000 Einwohner.

-`(kummulative) Inzidenz`

**Inzidenz**

_Erklärung:_ Die Zahl der neuen Fälle pro Jahr wird angegeben.

## 5. In einer Kohortenstudie soll im Zeitraum von zehn Jahren untersucht werden, ob die Arbeit am Fließband eines Automobilherstellers mit dem Entstehen einer koronaren Herzerkrankung assoziiert ist. Die Idee dahinter ist, dass der hohe Zeitdruck am Fließband und die gleichzeitig geringe Freiheit bei der Gestaltung der Aufgaben das kardiale Risikoprofil ungünstig beeinflusst. Insgesamt wurden 187 Arbeiter des Automobilherstellers beobachtet. Von allen Arbeitern erkrankten insgesamt 27. Unter den 78 Fließbandarbeitern erkrankten 18.

### a) Erstellen Sie eine Vierfeldertafel.

|                         | Erkrankung (+) | Erkrankung (-) | Gesamt |
| ----------------------- | -------------- | -------------- | ------ |
| Fließbandarbeiter       | 18             | 60             | 78     |
| Nicht-Fließbandarbeiter | 9              | 100            | 109    |
| Gesamt                  | 27             | 160            | 187    |

### b) Berechnen Sie die kumulative Inzidenz für die erkrankten Fließbandarbeiter unter allen über 10 Jahre beobachteten Fließbandarbeitern.

$$
\text{Kumul. Inzidenz} = \frac{18}{78}\times100\% \approx 23.08\%
$$

_Erklärung:_ Anzahl der erkrankten Fließbandarbeiter geteilt durch die Gesamtzahl der Fließbandarbeiter.

### c) Berechnen Sie die kumulative Inzidenz für die erkrankten Arbeiter, die nicht am Fließband arbeiten, unter allen über 10 Jahre beobachteten Nicht-Fließbandarbeitern.

$$
\text{Kumul. Inzidenz} = \frac{9}{109}\times100\% \approx 8.26\%
$$

_Erklärung:_ Anzahl der erkrankten Nicht-Fließbandarbeiter geteilt durch die Gesamtzahl der Nicht-Fließbandarbeiter.

## 6. COVID-19: Statistisch gesehen sterben ca. 0,76 von 100 infizierten Personen in Deutschland an COVID-19. In Deutschland sind im Dezember 2020 690.608 Personen mit einer Infektion gemeldet worden.

### a) Berechnen Sie die krankheitsspezifische Letalität.

$$
\text{Letalität} = \frac{0.76}{100} \times 100\% \approx0.76\%
$$

- Allgemein Letalität:
  $$
  \text{Letalität} = \frac{\text{Anteil der Verstorbenen}}{\text{Gesamtanzahl}}
  $$

_Erklärung:_ Die Letalität ist bereits gegeben und beträgt 0,76%.

### b) Die tatsächliche Anzahl an Verstorbenen beträgt 17.097. Wie können Sie sich die Diskrepanz zwischen der krankheitsspezifischen Letalität und den gemeldeten Todesfällen erklären?

$$
690608 \times \frac{0.76}{100} = 5248.621
$$

Mögliche Untererfassung von Infektionen, Meldeverzögerungen oder unterschiedliche Berechnungsgrundlagen. Infektion wird erst nach Tod festgestellt als Todesgrund → Patient wusste nicht, dass er krank war → höhere Dunkelziffer möglich

_Erklärung:_ Die tatsächliche Anzahl der Infizierten könnte höher sein, wodurch die Letalitätsrate beeinflusst wird.

### c) In manchen Ländern ließ sich über die Sommermonate beobachten, dass tatsächlich deutlich mehr COVID-19-Fälle gemeldet wurden, als es die berichteten Todesfälle impliziert hätten. Überlegen Sie woran das liegen könnte.

- `Neue Coronavariante`
- `Spezifität der Tests schlecht`
- `Besseres Immunsystem im Sommer`

Möglicherweise aufgrund gesteigerter Testkapazitäten, milderer Krankheitsverläufe bei jüngeren Infizierten oder effektiverer Behandlungsmethoden, was zu weniger Todesfällen führt.

_Erklärung:_ Mehr Tests führen zu mehr gemeldeten Fällen, aber nicht unbedingt zu mehr Todesfällen.

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
