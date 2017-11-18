import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'


class Navigation extends Component {

	constructor(props) {
		super(props)
		this.state = { activeItem: '' }
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		const styles = {
			...this.props.style,
			"backgroundColor": "white"
		}

		return (
			<div>
				<Menu fixed='left' vertical style={styles}>
					<Menu.Item header>
						My Life Origanizer
					</Menu.Item>

					<Menu.Item as={Link} to='/' name='home' onClick={this.handleItemClick} >
						Accueil
					</Menu.Item>


					<Menu.Item>
						<Menu.Header>Maison</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Dimensions
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Peintures
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Literie
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Ampoules
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Consommations
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Chat
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Notes
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Pratique</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								À acheter
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								En vacances
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Anniversaire
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Espace extérieur</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Plantations
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								À faire
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Équipement
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Travaux et Entretien</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Fait
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								À faire
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Voiture
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Notes
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Inventaire</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Literie
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Cellier
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Congelateur
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Pharmacie
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Salon
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Notes
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Carnet d'adresses</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Annuaire
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Culture</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Livres
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Films
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Séries
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Concerts - Spectacles
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Notes
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Loisirs</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Restos
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Recettes
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Couture
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Notes
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Perso</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								Résolutions
							</Menu.Item>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								À ne plus faire
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>Budget</Menu.Header>

						<Menu.Menu>
								<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
									Économie
								</Menu.Item>
								<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
									Dépenses fixes
								</Menu.Item>
								<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
									Occasionnel
								</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
					<Menu.Item>
						<Menu.Header>À planifier / Général</Menu.Header>

						<Menu.Menu>
							<Menu.Item as={Link} to='/' name='' active={activeItem === ''} onClick={this.handleItemClick}>
								To do list
							</Menu.Item>
						</Menu.Menu>
					</Menu.Item>
				</Menu>
			</div>
		)
	}
}

export default Navigation
