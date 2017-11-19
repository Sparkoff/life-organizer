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


export default (menu, subMenu) => {
	switch (menu) {
		case "maison":
			return getHouse(subMenu)
		case "pratique":
			return getUseful(subMenu)
		case "jardin":
			return getOutside(subMenu)
		case "travaux-entretien":
			return getMaintenance(subMenu)
		case "inventaire":
			return getStock(subMenu)
		case "carnet-d-adresses":
			return getContact(subMenu)
		case "culture":
			return getCulture(subMenu)
		case "loisirs":
			return getEntertainment(subMenu)
		case "perso":
			return getMyself(subMenu)
		case "budget":
			return getBudget(subMenu)
		case "planification":
			return getTodo(subMenu)
		default:
			return {
				icon: "close",
				title: "Erreur",
				subTitle: "Menu inconnu",
				content: (<p>Le menu demandé n'existe pas</p>)
			}
	}
}
