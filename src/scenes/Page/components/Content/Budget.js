import React from 'react'


const getSaving = () =>
	(<p>economie (à implémenter)</p>)

const getExpense = () =>
	(<p>depenses-fixes (à implémenter)</p>)

const getCasual = () =>
	(<p>occasionnel (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "economie":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getSaving()
			break
		case "depenses-fixes":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getExpense()
			break
		case "occasionnel":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getCasual()
			break
		default:
			pageInfo.subTitle = "Erreur"
			pageInfo.content = (<p>Le sous-menu demandé n'existe pas</p>)
	}
	return pageInfo
}
