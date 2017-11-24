import React from 'react'

import getHouse from './House'
import getUseful from './Useful'
import getOutside from './Outside'
import getMaintenance from './Maintenance'
import getStock from './Stock'
import getContact from './Contact'
import getCulture from './Culture'
import getEntertainment from './Entertainment'
import getMyself from './Myself'
import getBudget from './Budget'
import getTodo from './Todo'

import { menusBySlug } from 'config/navigation'


export default (menu, subMenu) => {
	switch (menu) {
		case "maison":
			return getHouse(subMenu, menusBySlug[menu])
		case "pratique":
			return getUseful(subMenu, menusBySlug[menu])
		case "jardin":
			return getOutside(subMenu, menusBySlug[menu])
		case "travaux-entretien":
			return getMaintenance(subMenu, menusBySlug[menu])
		case "inventaire":
			return getStock(subMenu, menusBySlug[menu])
		case "carnet-d-adresses":
			return getContact(subMenu, menusBySlug[menu])
		case "culture":
			return getCulture(subMenu, menusBySlug[menu])
		case "loisirs":
			return getEntertainment(subMenu, menusBySlug[menu])
		case "perso":
			return getMyself(subMenu, menusBySlug[menu])
		case "budget":
			return getBudget(subMenu, menusBySlug[menu])
		case "planification":
			return getTodo(subMenu, menusBySlug[menu])
		default:
			return {
				icon: "close",
				title: "Erreur",
				subTitle: "Menu inconnu",
				content: (<p>Le menu demandé n'existe pas</p>)
			}
	}
}
