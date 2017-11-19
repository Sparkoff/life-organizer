const menuInfos = [{
	title: "Maison", slug: "maison", icon: "home",
	subMenu: [{
		title: "Dimensions", slug: "dims"
	}, {
		title: "Peintures", slug: "ref-peintures"
	}, {
		title: "Literie", slug: "literie"
	}, {
		title: "Ampoules", slug: "ampoules"
	}, {
		title: "Consommations", slug: "consos"
	}, {
		title: "Chat", slug: "chat"
	}, {
		title: "Notes", slug: "notes"
	}]
}, {
	title: "Pratique", slug: "pratique", icon: "pin",
	subMenu: [{
		title: "À acheter", slug: "acheter"
	}, {
		title: "En vacances", slug: "vacances"
	}, {
		title: "Anniversaires", slug: "anniversaires"
	}]
}, {
	title: "Espace extérieur", slug: "jardin", icon: "tree",
	subMenu: [{
		title: "Plantations", slug: "plantations"
	}, {
		title: "À faire", slug: "a-faire"
	}, {
		title: "Équipement", slug: "equipement"
	}]
}, {
	title: "Travaux et Entretien", slug: "travaux-entretien", icon: "wrench",
	subMenu: [{
		title: "Fait", slug: "fait"
	}, {
		title: "À faire", slug: "a-faire"
	}, {
		title: "Voiture", slug: "voiture"
	}, {
		title: "Notes", slug: "notes"
	}]
}, {
	title: "Inventaire", slug: "inventaire", icon: "file text outline",
	subMenu: [{
		title: "Literie", slug: "literie"
	}, {
		title: "Cellier", slug: "cellier"
	}, {
		title: "Congélateur", slug: "congelateur"
	}, {
		title: "Pharmacie", slug: "pharmacie"
	}, {
		title: "Salon", slug: "salon"
	}, {
		title: "Notes", slug: "notes"
	}]
}, {
	title: "Carnet d'adresses", slug: "carnet-d-adresses", icon: "address book outline",
	subMenu: [{
		title: "Annuaire", slug: "annuaire"
	}]
}, {
	title: "Culture", slug: "culture", icon: "book",
	subMenu: [{
		title: "Livres", slug: "livres"
	}, {
		title: "Films", slug: "films"
	}, {
		title: "Séries", slug: "series"
	}, {
		title: "Concerts - Spectacles", slug: "concerts-spectacles"
	}, {
		title: "Notes", slug: "notes"
	}]
}, {
	title: "Loisirs", slug: "loisirs", icon: "cocktail",
	subMenu: [{
		title: "Restos", slug: "restos"
	}, {
		title: "Recettes", slug: "recettes"
	}, {
		title: "Couture", slug: "couture"
	}, {
		title: "Notes", slug: "notes"
	}]
}, {
	title: "Perso", slug: "perso", icon: "user",
	subMenu: [{
		title: "Résolutions", slug: "resolutions"
	}, {
		title: "À ne plus faire", slug: "a-ne-plus-faire"
	}]
}, {
	title: "Budget", slug: "budget", icon: "money",
	subMenu: [{
		title: "Économie", slug: "economie"
	}, {
		title: "Dépenses fixes", slug: "depenses-fixes"
	}, {
		title: "Occasionnel", slug: "occasionnel"
	}]
}, {
	title: "À planifier / Général", slug: "planification", icon: "checked calendar",
	subMenu: [{
		title: "To do list", slug: "liste"
	}]
}]


export const navs = (() => {
	var menus = []
	for (var i = 0; i < menuInfos.length; i++) {
		var menu = {}
		menu.title = menuInfos[i].title
		menu.slug = menuInfos[i].slug
		menu.subMenu = []
		for (var j = 0; j < menuInfos[i].subMenu.length; j++) {
			var subMenu = {}
			subMenu.title = menuInfos[i].subMenu[j].title
			subMenu.slug = menuInfos[i].subMenu[j].slug
			menu.subMenu.push(subMenu)
		}
		menus.push(menu)
	}
	return menus
})()

export const menusBySlug = (() => {
	var menus = {}
	for (var i = 0; i < menuInfos.length; i++) {
		var menu = {}
		menu.title = menuInfos[i].title
		menu.slug = menuInfos[i].slug
		menu.icon = menuInfos[i].icon
		menu.subMenu = {}
		for (var j = 0; j < menuInfos[i].subMenu.length; j++) {
			var subMenu = {}
			subMenu.title = menuInfos[i].subMenu[j].title
			subMenu.slug = menuInfos[i].subMenu[j].slug
			menu.subMenu[subMenu.slug] = subMenu
		}
		menus[menu.slug] = menu
	}
	return menus
})()
