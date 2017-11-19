import React from 'react'


const getBook = () =>
	(<p>livres (à implémenter)</p>)

const getMovie = () =>
	(<p>films (à implémenter)</p>)

const getTVShow = () =>
	(<p>series (à implémenter)</p>)

const getConcert = () =>
	(<p>concerts-spectacles (à implémenter)</p>)

const getNote = () =>
	(<p>notes (à implémenter)</p>)


export default (subMenu, menuInfos) => {
	let pageInfo = {
		icon: menuInfos.icon,
		title: menuInfos.title
	}
	switch (subMenu) {
		case "livres":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getBook()
			break
		case "films":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getMovie()
			break
		case "series":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getTVShow()
			break
		case "concerts-spectacles":
			pageInfo.subTitle = menuInfos.subMenu[subMenu].title
			pageInfo.content = getConcert()
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
