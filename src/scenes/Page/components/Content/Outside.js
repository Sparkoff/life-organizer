import React from 'react'


const getGarden = () =>
	(<p>plantations (à implémenter)</p>)

const getTodo = () =>
	(<p>a-faire (à implémenter)</p>)

const getTool = () =>
	(<p>equipement (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "plantations":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getGarden()
			break
		case "a-faire":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getTodo()
			break
		case "equipement":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getTool()
			break
		default:
			pageInfo.subTitle = "Erreur"
			pageInfo.content = (<p>Le sous-menu demandé n'existe pas</p>)
	}
	return pageInfo
}
