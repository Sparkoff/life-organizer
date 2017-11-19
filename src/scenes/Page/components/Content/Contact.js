import React from 'react'


const getContact = () =>
	(<p>carnet-d-adresses (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "carnet-d-adresses":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getContact()
			break
		default:
			pageInfo.subTitle = "Erreur"
			pageInfo.content = (<p>Le sous-menu demandé n'existe pas</p>)
	}
	return pageInfo
}
