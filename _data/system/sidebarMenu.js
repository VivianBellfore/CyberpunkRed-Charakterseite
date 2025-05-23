class SidebarMenu extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
			<!-- Das Cyberpunklogo, kann geändert werden. Lege das neue Logo im Ordner "images" ab und ändere hier den Dateinamen und den Typ. -->
			<img src="images/cyberpunk-logo.png" width="240" height="100">
			<a href="Charakterblatt.html">Übersicht</a>
			<!-- "hr" ist ein optischer Trennbalken der in "system/styles.css" definiert ist. -->
			<hr>
			<!-- Hier listen wir Seiten auf, die mit dem Charakterblatt und dem Würfeln zu tun haben. Die Seiten müssen im Ordner "_data" liegen. -->
			<a href="sheet.html">Charakterbogen</a>
			<a href="combat.html">Kampfsystem</a>
			<a href="skills.html">Fertigkeiten</a>
			<hr>
			<!-- Hier listen wir Seiten mit Hintergrundinformationen und der Ausrüstung des Charakters auf. Die Seiten müssen im Ordner "_data" liegen. -->
			<a href="cyberdeck.html">Cyberdeck</a>
			<a href="cyberware.html">Cyberware</a>
			<a href="inventory.html">Inventar</a>
			<a href="contacts.html">Kontakte</a>
			<a href="locations.html">Ortschaften</a>
			<a href="diary.html">Tagebuch</a>
			<a href="shelter.html">Unterkunft</a>
			<hr>
			<!-- Hier können weitere Seiten eingetragen werden. Rollenspezifische Informationen ect. Die Seiten müssen im Ordner "jobs" liegen. -->
			<a href="jobs/meditech.html">MediTech</a>
			<a href="jobs/netrunner.html">Netrunner</a>
			<a href="jobs/rockster.html">Rockster</a>
			<a href="jobs/solo.html">Solo</a>
		`
	}
}

customElements.define('sidebar-menu', SidebarMenu)



class SidebarMenuJobs extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<!-- Das Cyberpunklogo, kann geändert werden. Lege das neue Logo im Ordner "images" ab und ändere hier den Dateinamen und den Typ. -->
			<img src="../images/cyberpunk-logo.png" width="240" height="100">
			<a href="../Charakterblatt.html">Übersicht</a>
			<!-- "hr" ist ein optischer Trennbalken der in "../system/styles.css" definiert ist. -->
			<hr>
			<!-- Hier listen wir Seiten auf, die mit dem Charakterblatt und dem Würfeln zu tun haben. Die Seiten müssen im Ordner "_data" liegen. -->
			<a href="../sheet.html">Charakterbogen</a>
			<a href="../combat.html">Kampfsystem</a>
			<a href="../skills.html">Fertigkeiten</a>
			<hr>
			<!-- Hier listen wir Seiten mit Hintergrundinformationen und der Ausrüstung des Charakters auf. Die Seiten müssen im Ordner "_data" liegen. -->
			<a href="../cyberdeck.html">Cyberdeck</a>
			<a href="../cyberware.html">Cyberware</a>
			<a href="../inventory.html">Inventar</a>
			<a href="../contacts.html">Kontakte</a>
			<a href="../locations.html">Ortschaften</a>
			<a href="../diary.html">Tagebuch</a>
			<a href="../shelter.html">Unterkunft</a>
			<hr>
			<!-- Hier können weitere Seiten eingetragen werden. Rollenspezifische Informationen ect. Die Seiten müssen im Ordner "jobs" liegen. -->
			<a href="meditech.html">MediTech</a>
			<a href="netrunner.html">Netrunner</a>
			<a href="rockster.html">Rockster</a>
			<a href="solo.html">Solo</a>
		`
	}
}

customElements.define('sidebar-menu-jobs', SidebarMenuJobs)