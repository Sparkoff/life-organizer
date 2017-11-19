import React from 'react'


const getCart = () =>
	(<p>acheter (à implémenter)</p>)

const getHoliday = () =>
	(<p>vacances (à implémenter)</p>)

const getBirthday = () =>
	(<p>anniversaires (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "acheter":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getCart()
			break
		case "vacances":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getHoliday()
			break
		case "anniversaires":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getBirthday()
			break
		default:
			pageInfo.subTitle = "Erreur"
			pageInfo.content = (<p>Le sous-menu demandé n'existe pas</p>)
	}
	return pageInfo
}
