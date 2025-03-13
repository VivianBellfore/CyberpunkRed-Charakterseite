This is a simple html setup for Cyberpunk Red character.
Sorry this project is completly in german and I currently dont plan to upload an english version.



# Welche Dateien hinzugefügt werden müssen:
1. Charakterbild. Erstelle oder suche dir ein Bild für deinen Charakter und lege es im Ordner "images" ab.
	Kopiere dir den Namen des Bildes, samt der Dateiendung und trage dieses in der Datei "Charakterblatt.html" in Zeile 47 ein.
	Tausche dazu "CHARAKTERBILD.jpg" mit deiner Datei aus.
2. Charakterbogen. Aus Copyrightgründen können wir das PDF mit dem Charakterbogen nicht mit hochladen.
	Du findest den Charakterbogen auf deutsch hier: https://truant.com/wp-content/uploads/2023/02/CP-Charakterblatt-v2-bearbeitbar.pdf
	Lade dir die PDF herunter, fülle sie aus und lege sie dann in den Ordner "_data" hinein.
	Trage dann in der Datei "sheet.html" den Namen der PDF samt der Endung .pdf in der Zeile 48 ein.
	Tausche dazu "Charakter.pdf" mit deiner Datei aus.
3. Unterkunft. Ändere das Bild für deine Unterkunft und tausche es mit dem Bild im Ordner "images" namens "Unterkunft.png" aus.
	Das beiliegende Bild wurde mit dieser Webseite erstellt: https://floorplancreator.net/plan/demo
	Solltest du das Bild umbennen oder es einen anderen Dateityp haben, dann tausche diese in der Datei "shelter.html" in Zeile 48 aus.



# Paint.NET Ortschaften
Ich habe die .pdn Bilder der Stadtteile hinzugefügt, damit du selbst weitere Einträge dort machen kannst.
Bearbeite die Bilder mit paint.NET und erstelle ein neues png, dass du dann mit dem alten Bild im "images" Ordner austauschen kannst.
Achte darauf das es dann den selben Namen hat, sonst musst du es in der "locations.html" umschreiben.
Falls du das Programm nicht hast, es ist kostenlos: https://www.getpaint.net/



# Passe den Inhalt an
Ändere die Texte im "Charakterblatt.html" und den anderen html Seiten in "_data".
Alles wurde möglichst genau von mir beschrieben. Du kannst nur die Texte und Werte austauschen die bereits existieren oder weitere Informationen hinzufügen.
Bei Fragen und Problemen helfe ich gerne über Discord weiter. Das hier ist mein Server: https://discord.gg/UzuFZjGEef




//FAQ

# Kann ich mehr Bilder hinzufügen?
Klar! Lege neue Bilder am besten im Ordner "images" ab. Du kannst sie dann überall auf den Seiten nutzen indem du folgendes schreibst:
	<img src="images/deinBild.png" width="240" height="100">
Wenn du ein Bild auf der Seite "Charakterblatt.html" hinzufügen willst, musst du noch den "_data" Ordner mit angeben. So:
	<img src="_data/images/deinBild.png" width="240" height="100">
Die Angaben width="240" height="100" sind die Weite und Höhe des Bildes, angegeben in Pixeln. Damit kannst du das Bild also in der Größe anpassen.


# Kann ich mehr Seiten hinzufügen?
Klar! Erstelle eine neue html (einfach eine Textdatei erstellen und deren Endung von .text auf .html ändern!) und lege diese im Ordner "_data" ab.
Wenn du sie in der Sidebar, dem menü links, anzeigen willst, dann musst du sie auf jeder einzelnen html hinzufügen. Das geht so:
	Am Anfang jeder html Seite gibt es das Menü der Sidebar. Dort sind Einträge wie dieser hier zu sehen:
		<a href="shelter.html">Unterkunft</a>
	Dort kannst du deine neue Seite mit hinzufügen. Tausche dazu nur den Namen der html aus:
		<a href="neueSeite.html">Unterkunft</a>
Achte darauf, dass die Startseite "Charakterblatt.html" immer noch die Ordnerangabe "_data" dazu benötigt. Trägst du eine neue Seite dort ein, muss es so aussehen:
	<a href="_data/neueSeite.html">Unterkunft</a>