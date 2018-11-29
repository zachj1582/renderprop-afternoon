import React, { Component } from 'react'

class Currency extends Component {
	state = {
		currencyChosen: false,
		selectedCurrency: 'Select Currency',
		amount: 0
	}

	handleOptionSelect = (evt) => {
		const value = evt.target.value
		this.setState(() => {
			return {
				selectedCurrency: value,
				currencyChosen: value === 'Select Currency' ? false : true
			}
		})
	}

	handleAmountIncrease = () => {
		this.setState((prevState) => {
			return {
				amount: (prevState.amount += 1)
			}
		})
	}

	handleAmountDecrease = () => {
		return (
			this.state.amount > 0 &&
			this.setState((prevState) => {
				return {
					amount: (prevState.amount -= 1)
				}
			})
		)
	}
	render() {
		const currencyData = [
			{ name: 'Japanese Yen', symbol: '¥', rate: 113.6 },
			{ name: 'British Pound', symbol: '£', rate: 0.77 },
			{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32 },
			{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41 },
			{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01 }
		]
		const currencyOptions = currencyData.map((currency, index) => (
			<option key={index} value={index}>
				{currency.name}
			</option>
		))
		return (
			<div>
				<select value={this.state.selectedCurrency} onChange={this.handleOptionSelect}>
					<option value='Select Currency'>Select Currency</option>
					{currencyOptions}
				</select>
				<div>
					<button className='add' onClick={this.handleAmountIncrease} disabled={!this.state.currencyChosen}>
						+
					</button>
					<button className='minus' onClick={this.handleAmountDecrease} disabled={!this.state.currencyChosen}>
						-
					</button>
				</div>
				{this.state.currencyChosen ? this.props.render(currencyData[this.state.selectedCurrency], this.state.amount) : <p>Please Select Currency</p>}
			</div>
		)
	}
}

export default Currency
