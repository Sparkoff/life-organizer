import React from 'react'


const getRestaurant = () =>
	(<p>restos (à implémenter)</p>)

const getRecipe = () =>
	(<p>recettes (à implémenter)</p>)

const getCouture = () =>
	(<p>couture (à implémenter)</p>)

const getNote = () =>
	(<p>notes (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "restos":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getRestaurant()
			break
		case "recettes":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getRecipe()
			break
		case "couture":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getCouture()
			break
		case "notes":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getNote()
			break
		default:
			pageInfo.subTitle = "Erreur"
			pageInfo.content = (<p>Le sous-menu demandé n'existe pas</p>)
	}
	return pageInfo
}
