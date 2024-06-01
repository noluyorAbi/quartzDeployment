---
created: 2024-03-11 20:30
last modified: 2024-03-11 20:30
tags:
  - DBS
  - Erklaerung
fach: "[[Datenbanksysteme (DBS)]]"
date created: Monday, 11. March 2024, 20:30
date modified: Friday, 5. April 2024, 02:30
---

# Datenbankmanagementsystem (DBMS)

**Ein Datenbankmanagementsystem (DBMS)** ist eine Software, die dazu dient, **Daten in einer strukturierten Form zu speichern, zu organisieren und zu verwalten**. Hier sind einige wichtige Punkte:

- **Datenbank**: Ein DBMS verwaltet eine **Datenbank**, die eine Sammlung von **verknüpften Informationen** darstellt. Diese Informationen können in Tabellen, Dokumenten oder anderen Formaten gespeichert sein.

- **Tabellen**: In einer relationalen Datenbank werden Daten in **Tabellen** organisiert. Jede Tabelle hat **Spalten** (Felder) und **Zeilen** (Datensätze). Zum Beispiel könnte eine Tabelle “Kunden” Spalten wie “Name”, “Address” und “Telefonnummer” haben.

- **Abfragen**: Mit einem DBMS können Benutzer **Abfragen** ausführen, um spezifische Informationen aus der Datenbank abzurufen. Zum Beispiel: “Find alle Kunden, die in München leben.”

- **Integrität und Sicherheit**: Ein DBMS stellt sicher, dass die Daten **konsistent** und **sicher** sind. Es überwacht den Zugriff auf die Daten, um unbefugte Änderungen zu verhindern.

- **Transaktionen**: Wie wir zuvor besprochen haben, sind **Transaktionen** Pakete von Änderungen. Ein DBMS sorgt dafür, dass Transaktionen entweder vollständig durchgeführt oder vollständig rückgängig gemacht werden.

- **Unterschied zwischen DBMS und Datenbank**
  Eine Datenbank ist eine Sammlung organisierter Daten, und das System, das eine Sammlung von Datenbanken verwaltet, wird also Datenbankverwaltungssystem bezeichnet. Die Datenbank enthält die Datensätze, Felder und Zellen von Daten. Das DBMS ist das Werkzeug, mit dem die Daten in der Datenbank bearbeitet werden. Der Begriff Datenbank wird jedoch zunehmend also Abkürzung für Database Management System verwendet. Um die Unterscheidung zu vereinfachen, betrachten Sie das Betriebssystem und die einzelnen Dateien, die im System gespeichert sind. Genauso wie Sie ein Betriebssystem benötigen, um auf Dateien im System zuzugreifen und diese zu ändern, benötigen Sie ein DBMS, um Datenbanken zu bearbeiten, die im Datenbanksystem gespeichert sind.

- **Beispiele für DBMS**: Bekannte DBMS sind **MySQL**, **Oracle**, **Microsoft SQL Server** und **PostgreSQL**.

Insgesamt ist ein DBMS ein unverzichtbares Werkzeug für die effiziente Verwaltung von Daten in Unternehmen und Organisationen.

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
