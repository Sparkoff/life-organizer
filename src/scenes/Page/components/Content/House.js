import React from 'react'


const getDimension = () =>
	(<p>dims (à implémenter)</p>)

const getPainting = () =>
	(<p>ref-peintures (à implémenter)</p>)

const getBed = () =>
	(<p>literie (à implémenter)</p>)

const getLight = () =>
	(<p>ampoules (à implémenter)</p>)

const getConsumption = () =>
	(<p>consos (à implémenter)</p>)

const getCat = () =>
	(<p>chat (à implémenter)</p>)

const getNote = () =>
	(<p>notes (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "dims":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getDimension()
			break
		case "ref-peintures":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getPainting()
			break
		case "literie":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getBed()
			break
		case "ampoules":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getLight()
			break
		case "consos":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getConsumption()
			break
		case "chat":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getCat()
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
