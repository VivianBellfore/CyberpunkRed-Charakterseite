This is a simple html setup for Cyberpunk Red character.
Sorry this project is completly in german and I currently dont plan to upload an english version.

<br>

# Was ist das hier?
Eine Zusammenstellung von html Seiten die dir eine Übersicht über deinen Charakter geben soll.<br>
Die Seiten enthalten deine Charakterdaten und weitere nützliche Infos zum Pen and Paper Spiel Cyberpunk Red.<br>
Diese Übersicht soll dir beim spielen helfen und du kannst sie auch deiner SL und deinen Mitspielern zeigen.<br>
Hier ist eine meiner Charakterseiten als Beispiel:
![image](https://github.com/user-attachments/assets/38700bad-c946-4863-947e-5fc27bf213eb)<br>

<br>

# Welche Dateien hinzugefügt werden müssen:
1. Charakterbild. Erstelle oder suche dir ein Bild für deinen Charakter und lege es im Ordner "_data/_images" ab.
	Kopiere dir den Namen des Bildes, samt der Dateiendung und trage dieses in der Datei "Charakterblatt.html" in Zeile 27 ein.
	Tausche dazu "CHARAKTERBILD.jpg" mit deiner Datei aus.
2. Charakterbogen. Aus Copyrightgründen können wir das PDF mit dem Charakterbogen nicht mit hochladen.
	Du findest den Charakterbogen auf deutsch hier: https://truant.com/wp-content/uploads/2023/02/CP-Charakterblatt-v2-bearbeitbar.pdf
	Lade dir die PDF herunter, fülle sie aus und lege sie dann in den Ordner "_data" hinein.
	Trage dann in der Datei "sheet.html" den Namen der PDF samt der Endung .pdf in der Zeile 27 ein.
	Tausche dazu "Charakter.pdf" mit deiner Datei aus.
3. Unterkunft. Ändere das Bild für deine Unterkunft und tausche es mit dem Bild im Ordner "_data/_images" namens "Unterkunft.png" aus.
	Das beiliegende Bild wurde mit dieser Webseite erstellt: https://floorplancreator.net/plan/demo und mit Paint.NET bearbeitet.
	Solltest du das Bild umbennen oder es einen anderen Dateityp haben, dann tausche diese in der Datei "shelter.html" in Zeile 27 aus.

<br>

# Paint.NET Ortschaften
Ich habe die .pdn Bilder der Stadtteile hinzugefügt, damit du selbst weitere Einträge dort machen kannst.
Bearbeite die Bilder mit paint.NET und erstelle ein neues png, dass du dann mit dem alten Bild im "_data/images" Ordner austauschen kannst.
Achte darauf das es dann den selben Namen hat, sonst musst du es in der "locations.html" umschreiben.
Falls du das Programm nicht hast, es ist kostenlos: https://www.getpaint.net

<br>

# Passe den Inhalt an
Ändere die Texte im "Charakterblatt.html" und den anderen html Seiten in "_data".
Alles wurde möglichst genau von mir beschrieben. Du kannst nur die Texte und Werte austauschen die bereits existieren oder weitere Informationen hinzufügen.
Bei Fragen und Problemen helfe ich gerne über Discord weiter. Das hier ist mein Server: https://discord.gg/UzuFZjGEef

<br>

# Farbthema anpassen
Ich habe diverse Farbmöglichkeiten im Projekt mit angefügt. Du kannst ganz einfach zwischen diesen wechseln.<br>
Dazu musst du nur in der "system/styles.css" ein paar Zeilen ändern und es wird im ganzen Projekt übernommen!<br>
	1. In der Funktion ":root" findest du die globalen Variablen "--color1" und "--color2". Diese geben mit hex color hashes die Farbvarianten an.<br>
Unter den gesetzten Werten stehen vorbereitete Farbthemen die du nutzen kannst. Wichtig, die Werte dürfen nur einmal vergeben werden, daher sind die anderen Beispiele alle mit /* */ auskommentiert!<br>
	2. In der Funktion ".logo" findest du das hinterlegte Cyberpunk Logo. Hier kannst du die URL zum passendem Farbthema anpassen.

<br><br>

# Kann ich mehr Bilder hinzufügen?
Klar! Lege neue Bilder am besten im Ordner "_data/_images" ab. Du kannst sie dann überall auf den Seiten nutzen indem du folgendes schreibst:<br>
	`<img src="images/deinBild.png" width="240" height="100">`<br>
Die Angaben width="240" height="100" sind die Weite und Höhe des Bildes, angegeben in Pixeln. Damit kannst du das Bild also in der Größe anpassen.


# Kann ich mehr Seiten hinzufügen?
Klar! Erstelle eine neue html (einfach eine Textdatei erstellen und deren Endung von .text auf .html ändern!) und lege diese im Ordner "_data" ab.
Wenn du sie in der Sidebar, dem menü links, anzeigen willst, dann musst du sie in der sidebarMenu.js ( Pfad: _data/system/sidebarMenu.js ) Datei hinzufügen. Das geht so:<br>
	Am Anfang jeder html Seite gibt es das Menü der Sidebar. Dort sind Einträge wie dieser hier zu sehen:<br>
		`<a href="shelter.html">Unterkunft</a>`<br>
	Dort kannst du deine neue Seite mit hinzufügen. Tausche dazu nur den Namen der html und den angezeigten Titel aus:<br>
		`<a href="neueSeite.html">Neue Seite</a>`<br>