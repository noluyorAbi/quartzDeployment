---
tags:
  - RNVS
  - 4semester
  - informatik
  - Übungsblatt
fach: "[[Rechnernetze und Verteilte Systeme (RNVS)]]"
Thema:
date created: Friday, 19. April 2024, 01:50
date modified: Saturday, 27. April 2024, 00:33
---

# Aufgabe 1: Anforderungen des Internets (H)

> [!note]
> Im Internet macht es den Anschein, also wären alle Geräte unmittelbar miteinander verbunden.

## (a) Angenommen Sie müssen ein Netz entwerfen, in dem jedes Endgerät mit jedem anderen verkabelt ist, d. h. _komplett vermascht_

> [!tip] Formel zur Berechnung der Anzahl von Verbindungen in einem hierarchischen Netzwerk
>
> $$
> \frac{n \cdot (n-1)}{2}
> $$
>
> $$
> =
> $$
>
> $$
> \underset{n=1}{\overset{n-1}{\Sigma}}n
> $$
>
> - **$n \cdot (n-1)$**: Alle möglichen Richtungen der Verbindung zwischen den Geräten (jedes Gerät kann mit jedem anderen verbunden werden).
> - **$\div 2$**: Jede Verbindung zwischen zwei Geräten soll nur einmal gezählt werden, statt zweimal (von A zu B ist dieselbe Verbindung wie von B zu A).

- 8 Teilnehmer?
  - 28 Verbindungen
- 300 Teilnehmer?
  - 44850 Verbindungen
- $N$ Teilnehmer?
  - $\underset{n=1}{\overset{n-1}{\Sigma}}n$ = $\frac{n \cdot (n-1)}{2}$

## (b) Statt dessen sollen jetzt immer maximal fünf Geräte direkt mit einem _Knoten_, aber nicht untereinander, verbunden sein. Maximal fünf dieser Knoten sind wiederum mit einem Knoten verbunden, usw.

> [!tip] Formel zur Berechnung der Anzahl von Verbindungen in einem hierarchischen Netzwerk
>
> $$
> \sum_{i=0}^{h-1} k_i
> $$
>
> - $k_0 = n$: Anzahl der Teilnehmer auf der untersten Ebene (Ebene 0).
> - $k_i = \lceil \frac{k_{i-1}}{k} \rceil$: Anzahl der Knoten auf Ebene $i$, wobei $k$ die maximale Anzahl von Geräten oder Knoten ist, die ein einzelner Knoten verbinden kann.
> - $h$: Anzahl der Ebenen, bestimmt durch die wiederholte Anwendung von $k_i = \lceil \frac{k_{i-1}}{k} \rceil$ bis $k_{h-1} \leq k$.
> - Die Summe läuft über alle Ebenen bis zur vorletzten Ebene, da die Knoten auf jeder Ebene genau eine Verbindung zu einem Knoten auf der nächsten Ebene haben.

**Wie viele Verbindungen benötigt man hier für:**

- 8 Teilnehmer?
  - 10 Knoten

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers tags lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2024-04-24T13:50:33.813Z\&quot; agent=\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0\&quot; etag=\&quot;Vq1wb2wpJ-38711b-GO2\&quot; version=\&quot;24.2.8\&quot; type=\&quot;device\&quot;&gt;\n &lt;diagram name=\&quot;Seite-1\&quot; id=\&quot;m4TSJ6fQ5CY7JYnawMut\&quot;&gt;\n &lt;mxGraphModel dx=\&quot;1325\&quot; dy=\&quot;2115\&quot; grid=\&quot;1\&quot; gridSize=\&quot;10\&quot; guides=\&quot;1\&quot; tooltips=\&quot;1\&quot; connect=\&quot;1\&quot; arrows=\&quot;1\&quot; fold=\&quot;1\&quot; page=\&quot;1\&quot; pageScale=\&quot;1\&quot; pageWidth=\&quot;1169\&quot; pageHeight=\&quot;827\&quot; math=\&quot;0\&quot; shadow=\&quot;0\&quot;&gt;\n &lt;root&gt;\n &lt;mxCell id=\&quot;0\&quot; /&gt;\n &lt;mxCell id=\&quot;1\&quot; parent=\&quot;0\&quot; /&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-1\&quot; value=\&quot;Knoten\&quot; style=\&quot;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;622\&quot; y=\&quot;20\&quot; width=\&quot;65\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-2\&quot; value=\&quot;Knoten\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;329\&quot; y=\&quot;122\&quot; width=\&quot;65\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-3\&quot; value=\&quot;Knoten\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;915\&quot; y=\&quot;122\&quot; width=\&quot;65\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-4\&quot; value=\&quot;Teilnehmer\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;20\&quot; y=\&quot;224\&quot; width=\&quot;97\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-5\&quot; value=\&quot;Teilnehmer\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;167\&quot; y=\&quot;224\&quot; width=\&quot;97\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-6\&quot; value=\&quot;Teilnehmer\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;313\&quot; y=\&quot;224\&quot; width=\&quot;97\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-7\&quot; value=\&quot;Teilnehmer\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;460\&quot; y=\&quot;224\&quot; width=\&quot;97\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-8\&quot; value=\&quot;Teilnehmer\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;606\&quot; y=\&quot;224\&quot; width=\&quot;97\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-9\&quot; value=\&quot;Teilnehmer\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;753\&quot; y=\&quot;224\&quot; width=\&quot;97\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-10\&quot; value=\&quot;Teilnehmer\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;899\&quot; y=\&quot;224\&quot; width=\&quot;97\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-11\&quot; value=\&quot;Teilnehmer\&quot; style=\&quot;rounded=1;absoluteArcSize=1;arcSize=14;whiteSpace=wrap;strokeWidth=2;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; vertex=\&quot;1\&quot; parent=\&quot;1\&quot;&gt;\n &lt;mxGeometry x=\&quot;1046\&quot; y=\&quot;224\&quot; width=\&quot;97\&quot; height=\&quot;33\&quot; as=\&quot;geometry\&quot; /&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-12\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=-0.0011658888596754807;exitY=0.6767594265243215;entryX=0.49705528846153846;entryY=-0.0060605713815400095;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-1\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-2\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot;&gt;\n &lt;mxPoint x=\&quot;361\&quot; y=\&quot;88\&quot; /&gt;\n &lt;/Array&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-13\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=0.9967187734750601;exitY=0.6767594265243215;entryX=0.49849759615384615;entryY=-0.0060605713815400095;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-1\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-3\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot;&gt;\n &lt;mxPoint x=\&quot;947\&quot; y=\&quot;88\&quot; /&gt;\n &lt;/Array&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-14\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=-0.0018870427058293269;exitY=0.6706988551427815;entryX=0.49754349226804123;entryY=-0.012121142763080019;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-2\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-4\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot;&gt;\n &lt;mxPoint x=\&quot;68\&quot; y=\&quot;189\&quot; /&gt;\n &lt;/Array&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-15\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=-0.0018870427058293269;exitY=0.8413976524871195;entryX=0.4926304768041237;entryY=-0.012121142763080019;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-2\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-5\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot;&gt;\n &lt;mxPoint x=\&quot;215\&quot; y=\&quot;189\&quot; /&gt;\n &lt;/Array&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-16\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=0.49705528846153846;exitY=1.0060606869784268;entryX=0.49802673969072164;entryY=-0.012121142763080019;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-2\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-6\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot; /&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-17\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=0.9959976196289062;exitY=0.8413976524871195;entryX=0.4931137242268041;entryY=-0.012121142763080019;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-2\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-7\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot;&gt;\n &lt;mxPoint x=\&quot;508\&quot; y=\&quot;189\&quot; /&gt;\n &lt;/Array&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-18\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=0.9959976196289062;exitY=0.6706988551427815;entryX=0.49850998711340205;entryY=-0.012121142763080019;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-2\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-8\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot;&gt;\n &lt;mxPoint x=\&quot;654\&quot; y=\&quot;189\&quot; /&gt;\n &lt;/Array&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-19\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=-0.00044473501352163463;exitY=0.8413976524871195;entryX=0.4935969716494845;entryY=-0.012121142763080019;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-3\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-9\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot;&gt;\n &lt;mxPoint x=\&quot;801\&quot; y=\&quot;189\&quot; /&gt;\n &lt;/Array&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-20\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=0.49849759615384615;exitY=1.0060606869784268;entryX=0.49899323453608246;entryY=-0.012121142763080019;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-3\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-10\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot; /&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;mxCell id=\&quot;YPAxg7wEys1kg9rIgMSj-21\&quot; value=\&quot;1\&quot; style=\&quot;curved=1;startArrow=none;endArrow=block;exitX=0.9974399273212139;exitY=0.8413976524871195;entryX=0.49408021907216493;entryY=-0.012121142763080019;rounded=0;sketch=1;hachureGap=4;jiggle=2;curveFitting=1;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;\&quot; edge=\&quot;1\&quot; parent=\&quot;1\&quot; source=\&quot;YPAxg7wEys1kg9rIgMSj-3\&quot; target=\&quot;YPAxg7wEys1kg9rIgMSj-11\&quot;&gt;\n &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n &lt;Array as=\&quot;points\&quot;&gt;\n &lt;mxPoint x=\&quot;1094\&quot; y=\&quot;189\&quot; /&gt;\n &lt;/Array&gt;\n &lt;/mxGeometry&gt;\n &lt;/mxCell&gt;\n &lt;/root&gt;\n &lt;/mxGraphModel&gt;\n &lt;/diagram&gt;\n&lt;/mxfile&gt;\n&quot;}"></div>
 <script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
![img](./8teilnehmer.drawio.svg)

- 300 Teilnehmer?

  - $\text{Erste Ebene: }300 \div 5 = 60 \ Knoten$
  - Diese 60 Knoten müssen jetzt untereinander noch verbunden werden
  - $\text{Zweite Ebene: }60 \div 5 = 12 \ Knoten$
  - Diese 12 Knoten müssen jetzt untereinander noch verbunden werden
  - $\text{Dritte Ebene: }12 \div 5 = 3 \ Knoten$ **(Es wird immer aufgerundet!)** $\lceil \frac{5}{12}\rceil$
    - $\Longrightarrow 300 +60+12+3 = 375$

- N Teilnehmer: $\frac{5^{e+1}-1}{4}$ auf Ebene $e$
  - Ausgehend von einem Baum, jede Ebene hat $K = 5^e$ Knoten.
  - $K = 1 + 5 + 25 + \ldots + 5^e = \sum_{i=0}^{e} 5^i = \frac{5^{e+1}-1}{4}$
  - Auf $e = 0$ hat nur Kinderknoten, daher noch das $-1$.

In der Formel, die wir verwenden, steht $e$ für die Anzahl der Ebenen in einer Baumstruktur, in der jeder Knoten maximal fünf Kindknoten haben kann. In einem solchen Baum ist jeder Knoten ein Gerät oder ein Teilnehmer, und die Anzahl der Teilnehmer, die in der Struktur untergebracht werden können, wird durch die Formel

$$
\frac{5^{e+1} - 1}{4}
$$

Bestimmt. Dabei bezieht sich $e$ auf die Anzahl der vollständigen Ebenen unterhalb der Wurzel des Baumes. Wenn $e = 0$, dann gibt es nur die Wurzelebene ohne weitere Ebenen darunter. Mit jeder Erhöhung von $e$ um 1 wird eine weitere Ebene hinzugefügt, was die Gesamtanzahl der möglichen Teilnehmer signifikant erhöht, da die Anzahl der Knoten geometrisch mit der Basis 5 zunimmt.

---

# Aufgabe 2: Das Stellenwertsystem (H)

> [!note]
> Zahlensysteme bestehen aus einem Alphabet (Ziffern) und einer Menge von Regeln, wie Wörter (Zahlen) gebildet werden. Bei dem in Europa gängigen Stellenwertsystem werden Zahlen von links nach rechts mit den Koeffizienten der Zerlegung in eine Summe von Potenzen einer gewählten Basis, meist 10, aufgeschrieben. Die erste Ziffer ist demnach der Koeffizient der höchsten verwendeten Potenz und mit jeder weiteren Ziffer wird der Exponent um 1 verringert. Ein Komma (,) markiert den Vorzeichenwechsel des Exponenten. Wird kein Vorzeichenwechsel benötigt, so ist der Exponent des letzten Summanden, der Ziffer ganz rechts, stets 0. Die folgende Tabelle zeigt gängige Stellenwertzahlensysteme in der Informatik.
>
> $$
> \begin{array}{|l|l|l|l|l|l|l|l|l|l|l|}
> \hline
> \textbf{Bezeichnung} & \textbf{Basis} & {\textbf{Ziffern (→ aufsteigende Wertigkeit)}} \\
> \hline
> \text{Dezimalsystem} & \text{zehn} & 0 \ | \ 1 \ | \ 2 \ | \ 3 \ | \ 4 \ | \ 5 \ |\ 6 \ | \ 7 \ | \ 8 \ | \ 9 \\
> \text{Oktalsystem} & \text{acht} & 0 \ | \ 1 \ | \ 2 \ | \ 3 \ | \ 4 \ | \ 5 \ | \ 6 \ | \ 7 \ | \ - \ | \ - \\
> \text{Dualsystem/Binärsystem} & \text{zwei} & 0 \ | \ 1 \ | \ - \ | \ - \ | \ - \ | \ - \ | \ - \ | \ - \ | \ - \ | \ - \\
> \hline
> \end{array}
> $$
>
> Tabelle 1: Zahlensysteme werden häufig entsprechend der Mächtigkeit ihres Alphabets benannt.
> Beim Arbeiten mit verschiedenen Zahlensystemen ist es wichtig stets sicherzustellen, dass klar ist, mit welchem Zahlensystem eine Zahl dargestellt wird. Die allgemeine Notation ist die Zahl in runden Klammern und die Basis in Dezimalschreibweise, also Index der abschließenden Klammer. Um zum Beispiel zu verdeutlichen, dass man das Dezimalsystem benutzt, schreibt man $(7)_{10}$.

## (a) Welche Ziffern werden normalerweise für das Hexadezimalsystem verwendet? Schreiben Sie alle mit aufsteigender Wertigkeit auf!

$0→1→2→3→4→5→6→7→8→9→A→B→C→D→E→F$

## (b) Schreiben Sie die Zahlen 2, 4, 8, 10 je im Hexadezimal-, Oktal- und Binärsystem auf!

| Zahl | Hexadezimal | Oktal | Binär |     |
| ---- | ----------- | ----- | ----- | --- |
| 2    | 2           | 2     | 10    |     |
| 4    | 4           | 4     | 100   |     |
| 8    | 8           | 10    | 1000  |     |
| 10   | A           | 12    | 1010  |     |

## (c) Konvertieren Sie die folgenden Zahlen je in das Binärsystem und das Hexadezimalsystem!

- 16

  - Binär:

    $$
    \begin{aligned}
    16 \div 2 &= 8 \quad R \quad 0 \\
    8 \div 2 &= 4 \quad R \quad 0 \\
    4 \div 2 &= 2 \quad R \quad 0 \\
    2 \div 2 &= 1 \quad R \quad 0 \\
    1 \div 2 &= 0 \quad R \quad 1 \\
    \end{aligned}
    \quad\Bigg\uparrow
    $$

    $Binär: \ 10000$

  - Hexadezimal:
    $$
    \begin{aligned}
    16 \div 16 &= 1 \quad R \quad 0 \\
    1 \div 16 &= 0 \quad R \quad 1 \\
    \end{aligned}
    \quad\Bigg\uparrow
    $$
    $Hexadezimal: \ 10$

- 127

  - Binär: 1111111
  - Hexa: 7F

- 168

  - Binär: 10101000
  - Hexa: A8

- 172

  - Binär: 10101100
  - Hexa: AC

- 192

  - Binär: 11000000
  - Hexa: C0

- 255
  - Binär: 11111111
  - Hexa: FF

## (d) Wieviele Stellen hat die Zahl $2^{32} - 1$ in Binärdarstellung? Wieviele davon sind 1 wieviele 0?

> [!warning] Aufgepasst
>
> $$
> \underset{\longrightarrow \ 33 \ Stellen}{(2^{32})_{10}=(1000..)_2}
> $$

$$
\underset{\longrightarrow \ 32 \ Stellen}{(2^{32}-1)_{10}=(1111…)_2}
$$

$2^{32}-1$ hat 32 Stellen, wovon alle 1 sind

---

# 3. Rechnen in unterschiedlichen Zahlensystemen

Die größte Herausforderung beim Arbeiten mit Binärzahlen ist, dass es kaum ein Zahlensystem gibt, bei dem die Anzahl der gültigen Ziffern schneller wächst. Zum Beispiel ist $(100)_{10}$ die kleinste dreistellige (natürliche) Zahl im Dezimalsystem, während ihre Binärdarstellung bereits sieben Stellen benötigt.

| Zahlensystem      | Zahl   | multipliziert mit Faktor |            |            |             |             |
| ----------------- | ------ | ------------------------ | ---------- | ---------- | ----------- | ----------- |
|                   |        | $(1)_{10}$               | $(2)_{10}$ | $(8)_{10}$ | $(10)_{10}$ | $(16)_{10}$ |
| **Dezimalsystem** | _zwei_ | 2                        | 4          | 16         | 20          | 32          |
|                   | _acht_ | 8                        | 16         | 64         | 80          | 128         |
| **Oktalsystem**   | _zwei_ | 2                        | 4          | 20         | 24          | 40          |
|                   | _acht_ | 10                       | 20         | 100        | 120         | 200         |

_Tabelle 2: Multiplikation (Zahl) \* (Faktor)_

## **(a)** Tabelle 2 zeigt die Ergebnisse für die Berechnungen $(1, 2, 8, 10, 16) \cdot (2, 8)$ im Dezimal und Oktalsystem. Führen Sie die selbe Rechnung für das Binär- und Hexadezimalsystem durch!

| Zahlensystem      | Zahl   | multipliziert mit Faktor |            |            |             |             |
| ----------------- | ------ | ------------------------ | ---------- | ---------- | ----------- | ----------- |
|                   |        | $(1)_{10}$               | $(2)_{10}$ | $(8)_{10}$ | $(10)_{10}$ | $(16)_{10}$ |
| **Dezimalsystem** | _zwei_ | 2                        | 4          | 16         | 20          | 32          |
|                   | _acht_ | 8                        | 16         | 64         | 80          | 128         |
| **Oktalsystem**   | _zwei_ | 2                        | 4          | 20         | 24          | 40          |
|                   | _acht_ | 10                       | 20         | 100        | 120         | 200         |
| **Binär**         | _zwei_ | 10                       | 100        | 1000       | 10100       | 10000       |
|                   | _acht_ | 1000                     | 10000      | 1000000    | 1010000     | 10000000    |
| **Hexadezimal**   | _zwei_ | 2                        | 4          | 10         | 14          | 20          |
|                   | _acht_ | 8                        | 10         | 100        | 50          | 80          |

## **(b)** Ergebnisse der folgenden Terme im angegebenen Zahlensystem auf…

### I. Als Binärzahl: $2^2$, $2^3$, $2^4$, $2^5$, $2^6$, $2^7$

- 100
- 1000
- 10000
- 100000
- 1000000
- 10000000

### Ii. Als Oktalzahl: $8^2$, $8^3$, $8^4$, $8^5$, $8^6$, $8^7$

- 100
- 1000
- 10000
- 100000
- 1000000
- 10000000

### Iii. Als Dezimalzahl: $10^2$, $10^3$, $10^4$, $10^5$, $10^6$, $10^7$

- 100
- 1000
- 10000
- 100000
- 1000000
- 10000000

### Iv. Als Hexadezimalzahl: $16^2$, $16^3$, $16^4$, $16^5$, $16^6$, $16^7$

- 100
- 1000
- 10000
- 100000
- 1000000
- 10000000

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

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->

<!-- Modal START -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <span id="closeModal" class="close">&times;</span>
    <p class="modal-text">
      If MyUniNotes has been helpful and you’d like to support my efforts, <span class="modal-highlight"> you can contribute with a donation: <a class="modal-dono-link" href="https://paypal.me/myuninotes4u">Donate via PayPal</a> :) </span> Your support will help me continue improving the content, but there is no obligation to donate.
    </p>
    <p class="modal-text">
      <span class="modal-highlight">MyUniNotes is a personal, non-revenue project as I believe in accessible education for everyone.</span> I manage this project alongside my studies, with all materials handwritten by me trying to help others understand challenging concepts.
    </p>
  </div>
</div>

<script>
  // JavaScript to display the modal on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 1
    // Wanted it to load with a adjustable probability for every page load but did not work, as DOM is loaded only once. Therefore now loading it every time website is visited and DOM is loaded.
    const randomNumber = Math.floor(Math.random() * 1) + 1; 
    // console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const modal = document.getElementById('myModal');
        if (modal) {
          modal.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeModal = document.getElementById('closeModal');
      if (closeModal) {
        closeModal.addEventListener('click', function() {
          const modal = document.getElementById('myModal');
          if (modal) {
            modal.classList.remove('show');
          }
        });
      }
    } else {
      // Ensure the modal is hidden if the random number is not 1
      const modal = document.getElementById('myModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  });
</script>
<!-- Modal END -->
