class SidebarMenu extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
			<!-- Das Cyberpunklogo, kann geändert werden. Lege das neue Logo im Ordner "_data" ab und ändere hier den Dateinamen und den Typ. -->
			<img src="_data/images/cyberpunk-logo.png" width="240" height="100">
			<a href="Charakterblatt.html">Übersicht</a>
			<!-- "hr" ist ein optischer Trennbalken der in "styles.css" definiert ist. -->
			<hr>
			<!-- Hier listen wir Seiten auf, die mit dem Charakterblatt und dem Würfeln zu tun haben. Die Seiten müssen im Ordner "_data" liegen und das "_data/" gehört hier zwingend vor den Dateinamen dazu. -->
			<a href="_data/sheet.html">Charakterbogen</a>
			<a href="_data/combat.html">Kampfsystem</a>
			<hr>
			<!-- Hier listen wir Seiten mit Hintergrundinformationen und der Ausrüstung des Charakters auf. Die Seiten müssen im Ordner "_data" liegen und das "_data/" gehört hier zwingend vor den Dateinamen dazu. -->
			<a href="_data/cyberdeck.html">Cyberdeck</a>
			<a href="_data/cyberware.html">Cyberware</a>
			<a href="_data/inventory.html">Inventar</a>
			<a href="_data/contacts.html">Kontakte</a>
			<a href="_data/locations.html">Ortschaften</a>
			<a href="_data/diary.html">Tagebuch</a>
			<a href="_data/shelter.html">Unterkunft</a>
			<hr>
			<!-- Hier können weitere Seiten eingetragen werden. Rollenspezifische Informationen ect. Die Seiten müssen im Ordner "_data" liegen und das "_data/" gehört hier zwingend vor den Dateinamen dazu. -->
			<a href="_data/netrunner.html">Netrunner</a>
			<a href="_data/meditech.html">MediTech</a>		
		`
	}
}

customElements.define('sidebar-menu', SidebarMenu)