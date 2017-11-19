import React from 'react'


const getPromise = () =>
	(<p>resolutions (à implémenter)</p>)

const getNotReproduce = () =>
	(<p>a-ne-plus-faire (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "restos":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getPromise()
			break
		case "recettes":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getNotReproduce()
			break
		default:
			pageInfo.subTitle = "Erreur"
			pageInfo.content = (<p>Le sous-menu demandé n'existe pas</p>)
	}
	return pageInfo
}
