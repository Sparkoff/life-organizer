import React from 'react'


const getBed = () =>
	(<p>literie (à implémenter)</p>)

const getCellar = () =>
	(<p>cellier (à implémenter)</p>)

const getFreezer = () =>
	(<p>congelateur (à implémenter)</p>)

const getDrug = () =>
	(<p>pharmacie (à implémenter)</p>)

const getLiving = () =>
	(<p>salon (à implémenter)</p>)

const getNote = () =>
	(<p>notes (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "literie":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getBed()
			break
		case "cellier":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getCellar()
			break
		case "congelateur":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getFreezer()
			break
		case "pharmacie":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getDrug()
			break
		case "salon":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getLiving()
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
