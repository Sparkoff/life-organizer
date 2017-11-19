import React from 'react'


const getDone = () =>
	(<p>fait (à implémenter)</p>)

const getTodo = () =>
	(<p>a-faire (à implémenter)</p>)

const getCar = () =>
	(<p>voiture (à implémenter)</p>)

const getNote = () =>
	(<p>notes (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "fait":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getDone()
			break
		case "a-faire":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getTodo()
			break
		case "voiture":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getCar()
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
