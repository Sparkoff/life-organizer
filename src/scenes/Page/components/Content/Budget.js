import React from 'react'


const getSaving = () => {
	return {
		subTitle: "Économie",
		content: (<p>economie (à implémenter)</p>)
	}
}

const getExpense = () => {
	return {
		subTitle: "Dépenses fixes",
		content: (<p>depenses-fixes (à implémenter)</p>)
	}
}

const getCasual = () => {
	return {
		subTitle: "Occasionnel",
		content: (<p>occasionnel (à implémenter)</p>)
	}
}


export default (subMenu) => {
	switch (subMenu) {
		case "economie":
			subMenu = getSaving()
			break
		case "depenses-fixes":
			subMenu = getExpense()
			break
		case "occasionnel":
			subMenu = getCasual()
			break
		default:
			subMenu = {
				subTitle: "Erreur",
				content: (<p>Le sous-smenu demandé n'existe pas</p>)
			}
	}
	return {
		...subMenu,
		icon: "money",
		title: "Budget"
	}
}
