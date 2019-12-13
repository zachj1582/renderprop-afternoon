<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll be creating a project similar to what we created in the higher order component project. This one will be written as a render prop. It is important to remember that these are two different patterns to accomplish the same task. In this project we will be building a currency converter that will convert a foreign currency to USD.

## Step 1

### Summary

In this step, we'll set up our file structure to keep things organized.

### Instructions

- `Fork` and `clone` this project
- Run `npm install`
- Inside the `src` folder, create a `Components` folder.
- Open `src/Components`. Create two new Files:
  - CurrencyConverter.js
  - CurrencyDisplay.js

### Solution

<details>

<summary>File Structure</summary>

```
-- src
  -- Components
    -- CurrencyConverter.js
    -- CurrencyDisplay.js
  -- App.css
  -- App.js
  -- index.css
  -- index.js
```

</details>

## Step 2

### Summary

In this step, we'll create the skeleton for our render prop component (CurrencyConverter.js).

### Instructions

- Import React.
- Create a class component called `CurrencyConverter`
- The `CurrencyConverter` component will have some state

<details>

<summary> Detailed Instructions </summary>

<br />

Remember render props are another pattern for cross cutting concerns and making your code reusable, similar to a HOC.

We first want to create a class based component we will call `CurrencyConverter`. We chose a class based component because this will have some state involved.

</details>

### Solution

<details>

<summary> <code> src/Components/CurrencyConverter.js </code> </summary>

```jsx
import React, {Component} from 'react'

class CurrencyConverter extends Component {
  state = {}
  render(){
    return (
      // SOON TO BE JSX
    )
  }
}
```

</details>

## Step 3

### Summary

In this step, we will create the boilerplate for our currency converter. This will include a drop down and buttons to increment and decrement the amount to convert.

### Instructions

	
- Set intial state for this component. We will need three keys: `currencyChosen: false`, `selectedCurrency: 'Select Currency'` and `amount: 0`.

- We will use the `currencyData` array below to map over and dynamically create options inside of a soon to be created `select` element.

```js
const currencyData = [
	{ name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
	{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
	{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
	{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
	{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
]
```

- In the `render`, map over the above array, `currencyData` to dynamically create `<option>` elements for each obect in the array.
- Create a `<select>` element to hold the options created above along with a single default `<option>` with a value of 'Select Currency'.
- Create two `<button>` elements, one should have `+` as it's inner text and the other should be `-`.
- Below the `button`'s, wrap `this.props.render()` in curly braces, passing in the object that represents the selected currency and the `amount` from state

<details>

<summary> Detailed Instructions </summary>

<br />

```js
const currencyData = [
	{ name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
	{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
	{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
	{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
	{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
]
```
- Set some initial state for your component. We will need a `currencyChosen` which will default to `false`, `selectedCurrency` which will default as 'Select Currency' (spelling and capitalization are important here) and finally an `amount` with the default of `0`.
- Copy the `currencyData` array from above and paste it inside of the `render()` code block, but outside of the `return` code block.
- Inside the same code block (inside of `render()` but outside of the `return`), create a `currencyOptions` array that uses `.map()` to map over the `currencyData` array and creates an `<option>` element for each item in the `currencyData` array. Each `<option>` element should have a `key` attribute set to a unique value on the currency object (use the `id`), and a `value` attribute set to the `index` the currency occupies in the array, and should also display the individual currency name as text.
- Inside the `return` code block, create a container div `<div>`. Inside of that `div` create a `<select>` element and another `<div>` element. The `<select>` element should have a `value` attribute that will equal the value of selectedCurrency on state.
- Inside of the `select` element, create a single `<option>` element with an attribute of `value='Select Currency'` and displays 'Select Currency' as the inner text.
- Inside that same `<select>` element, display the `currencyOptions` array (Remember: You must escape the JSX using `{}`).
- Inside the second `<div>` we will create buttons that will increment and decrement the currency amount, one should have `+` as it's inner text and the other should be `-`. The button with the `+` should have a className of `add` and the button with the `-` should have a className of `minus`
- Below the `button` elements, render `this.props.render()` in curly braces. This is the function we will use to display our soon to be created component. The `this.props.render()` function will take two arguments; one which will use `selectedCurrency` from state as the index for selecting an option from the `currencyData` array and the other which will be the value of amount on state.
  </details>

### Solution

<details>

<summary> <code> src/Components/CurrencyConverter.js </code> </summary>

```jsx
import React, { Component } from 'react'

class CurrencyConverter extends Component {
// GIVE THE COMPONENT AN INITIAL STATE
	state = {
		currencyChosen: false,
		selectedCurrency: 'Select Currency',
		amount: 0
	}

	render() {
		// INITIALIZE A VARIABLE CONTAINING ALL OF THE CURRENCY INFORMATION TO
		// BE USED IN THE THE DROP DOWN SELECTION
		const currencyData = [
			{ name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
			{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
			{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
			{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
			{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
		]
		
		// USE THE MAP METHOD TO DYNAMICALLY CREATE NEW INSTANCES OF THE CURRENCY
		// TO BE INCLUDED IN THE DROP DOWN SELECTION
		const currencyOptions = currencyData.map((currency, index) => (
			<option key={currency.id} value={index}>
				{currency.name}
			</option>
		))
		return (
			<div>
			// RENDERS THE OPTIONS FOR THE DROP DOWN
				<select value={this.state.selectedCurrency}>
					<option value='Select Currency'>Select Currency</option>
					{currencyOptions}
				</select>
				<div>
					<button className='add'>+</button>
					<button className='minus'>-</button>
				</div>
				// THIS FUNCTION CURRENTLY WON'T WORK BUT WILL BE
				// IMPORTANT LATER. REMEMBER THE 1ST ARG WILL BE THE
				// SELECTED CURRENCY INFORMATION AND THE 2ND ARG WILL 
				// BE THE AMOUNT STORED ON STATE
				{this.props.render(
					currencyData[this.state.selectedCurrency],
					this.state.amount
				)}
			</div>
		)
	}
}

```

</details>

## Step 4

### Summary

In this step, we'll create three methods to help us handle user interactions. We will be using the auto-binding (public class field syntax for these methods).

### Instructions

- Using the public class field syntax, create a method that will increment the count of amount on state. Use `setState` via the callback function syntax. Call this method `handleAmountIncrease`.
- Using the public class field syntax, create a method that will decrement the count of amount on state. Use `setState` via the callback function syntax. Call this method `handleAmountDecrease`.
- Using the public class field syntax, create a method that will handle the users selection from the dropdown. You will need to store their selection in a variable we will call `userValue`. This will be used to update the `selectedCurrency` and `currencyChosen` properties on state. Call this method `handleOptionSelect`.
- Assign these functions to the appropriate elements and event handlers.
- Export the function to be used in App.js
- Import the `CurrencyConverter` component into `App` and render it, giving it a `render` prop

<details>

<summary> Detailed Instructions </summary>

<br />

- Let's start off by creating a method that will handle the increase of the amount on state. We will be using the public class field syntax and using `setState` with a callback, rather than a object. The callback will take one parameter, `prevState`. This parameter gives us access to state without modifying it directly. This is an example of a closure! The callback function will need to return an object that will be used to update state (see below).

```jsx
handleAmountIncrease = () => {
	this.setState((prevState) => {
		return {
			amount: prevState.amount + 1
		}
	})
}
```

- Next we will create a method that will handle decreasing the amount on state. We will be using the public class field syntax and using `setState` with a callback for this as well. The callback will take one parameter, `prevState`, that will provide access to state without modifying it directly (see below). 

```jsx
handleAmountDecrease = () => {
	this.setState((prevState) => {
		return {
			amount: prevState.amount - 1
		}
	})
}
```

- Finally we will create a method that will handle the user selection from the dropdown. We will be using the public class field syntax and using `setState` with a callback for this as well. This method will have an event parameter passed into it and will assign the value from `event.target.value` to a variable we will call `userValue`.
- The `setState` method won't need access to the `prevState` parameter but will still use the callback syntax. In the `setState` method, return a new object that updates `selectedCurrency` and `currencyChosen` on state by setting the value of `selectedCurrency` to the value of the `userValue` variable and the value of `currencyChosen` is determined based on the value of `userValue`. If `userValue` is equal to 'Selected Currency' (punctuation matters here), set the value to `false`, otherwise set to `true`.

```jsx
handleOptionSelect = (event) => {
	const userValue = event.target.value
	this.setState(() => {
		return {
			selectedCurrency: userValue,
			currencyChosen: userValue === 'Select Currency' ? false : true
		}
	})
}
```
	
- The last step is to use these methods in the appropriate locations.
  - Using an `onClick` event listener, connect the `handleAmountIncrease` method to the add button and display a `+` as the button's inner text.
  - Using an `onClick` event listener, connect the `handleAmountDecrease` method to the minus button and display a `-` as the button's inner text.
  - Using an `onChange` event listener, connect the `handleOptionSelect` method to the `select` element.
- We will also export our component so we can use it on `App.js`.
- Make sure you've cleared out all of the boilerplate JSX in App.
- Add an `<h2>` tag with the text 'Render Props' in `App.js` to signal that this is the render prop version of this project. This will help you when you are comparing render props to HOC's later.
- Import and render the new `CurrencyConverter` component in `App.js` below the 'Render Props' `<h2>` element. This Component will receive a prop called `render` which will contain an anonymous arrow function. Remember, this prop can be called anything, but it is common convention to call it `render`. 
- Render the new `CurrencyConverter` component. It will need one prop called `render`. Remember, this prop can be called anything but it is common convention to call it `render`. This prop will contain an anonymous arrow function. Use a fragment as the container div for this component.

</details>

### Solution

<details>

<summary> <code> src/Components/CurrencyConverter.js </code> </summary>

```jsx
import React, { Component } from 'react'

class CurrencyConverter extends Component {
	state = {
		currencyChosen: false,
		selectedCurrency: 'Select Currency',
		amount: 0
	}

	// ADD BOUND handleAmountIncrease FUNCTION
	handleAmountIncrease = () => {
		this.setState((prevState) => {
			return {
				amount: prevState.amount + 1
			}
		})
	}
	
	// ADD BOUND handleAmountDecrease FUNCTION THAT ENSURES THAT AMOUNT
	// ON STATE IS NEVER LESS THAN 0
	handleAmountDecrease = () => {
		return (
			this.state.amount > 0 &&
			this.setState((prevState) => {
				return {
					amount: prevState.amount - 1
				}
			})
		)
	}
	
	// ADD BOUND handleOptionSelect FUNCTION
	handleOptionSelect = (event) => {
		const userValue = event.target.value
		this.setState(() => {
			return {
				selectedCurrency: userValue,
				currencyChosen: userValue === 'Select Currency' ? false : true
			}
		})
	}

	render() {
		const currencyData = [
			{ name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
			{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
			{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
			{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
			{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
		]
		const currencyOptions = currencyData.map((currency, index) => (
			<option key={currency.id} value={index}>
				{currency.name}
			</option>
		))
		return (
			<div>
				<select
					value={this.state.selectedCurrency}
					// ADD ONCHANGE FUNCTION THAT CALLS handleOptionSelect
					onChange={this.handleOptionSelect}>
					<option value='Select Currency'>Select Currency</option>
					{currencyOptions}
				</select>
				<div>
					// ADD ONCLICK FUNCTION THAT CALLS handleAmountIncrease
					<button className='add' onClick={this.handleAmountIncrease}>
						+
					</button>
					// ADD ONCLICK FUNCTION THAT CALLS handleAmountDecrease
					<button className='minus' onClick={this.handleAmountDecrease}>
						-
					</button>
				</div>
				{this.props.render(
					currencyData[this.state.selectedCurrency],
					this.state.amount
				)}
			</div>
		)
	}
}

export default CurrencyConverter
```

</details>

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react'
import './App.css'

// IMPORT THE CurrencyConverter COMPONENT
import CurrencyConverter from './Components/CurrencyConverter.js'

class App extends Component {
	render() {
		return (
			<>
				<h2>Render Props</h2>
				// RENDER CurrencyConverter AND GIVE IT A PROP CALLED RENDER WITH A VALUE OF AN EMPTY 
				// CALLBACK FUNCTION
				<CurrencyConverter render={() => {}} />
			</>
		)
	}
}

export default App
```

</details>

## Step 5

### Summary

In this step, we'll write some JSX to display the exchanged currency.

### Instructions

- Staying in `App.js`, pass in two parameters to our `render prop` function; `currencyData` and `amount`. These will represent `currencyData[this.state.selectedCurrency]` and `this.state.amount` in a render function in `CurrencyConverter.js`.
- Return a `<p>` element that will hold the text displaying the amount in US dollars, the name of the currency we are exchanging to, the symbol and the exchanged amount.

<details>

<summary> <code> Detailed Instructions </code> </summary>

<br />

- Take a look at our render prop on the CurrencyConverter Component. It is an anonymous function. We know that functions can return anything and in this case we will be returning some JSX. Before that though, we need to pass in two parameters that will represent our data when we invoke our render prop function in `CurrencyConverter.js`.
- Have our render prop function return a `p` tag.
- The `p` element should show the US Dollar amount, the name of the currency, the symbol and then the amount of the exchanged currency (ex: US Dollar $20.00 - Japanese Yen ¥2272.00).
- In the next step, we will refactor the `p` element JSX into a new component. We will create a new component and pass down the data as a prop. The new component will then be returned from the render prop rather than JSX.

</details>

### Solution

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react'
import './App.css'

import CurrencyConverter from './Components/CurrencyConverter'

class App extends Component {
	render() {
		return (
			<>
				<h2>Render Props</h2>
				<CurrencyConverter
				// PASS IN currencyData AND amount AS ARGS TO THE RENDER FUNCTION
					render={(currencyData, amount) => (
						<p>
						// THE toFixed METHOD DISPLAYS A NUMBER WITH DECIMAL PLACES 
						// EQUAL TO THE ARGUMENT PASSED INTO THE FUNCTION
							US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
							{currencyData.symbol}
							{(amount * currencyData.rate).toFixed(2)}
						</p>
					)}
				/>
			</>
		)
	}
}

export default App
```

</details>

## Step 6

### Summary

In this step, we will refactor the JSX you wrote in `App` in the previous step into a reusable component in `CurrencyDisplay`. We will then replace that JSX with the newly created `CurrencyDisplay` component.

### Instructions

- Create a stateless, functional component in `CurrencyDisplay.js`
- Have it return the JSX that we created in `App`, getting it's values from props
- Replace the JSX returned from the render prop in `App` to be the `CurrencyDisplay` component

<details>

<summary> <code> Detailed Instructions </code> </summary>

<br />

- In `CurrencyDisplay.js` import React. Without having React in scope, we cannot use JSX.
- Create a function expression called `CurrencyDisplay` using arrow function syntax. Have it accept `props` as its only parameter
- Return a `<p>` tag that contains the same JSX as what we have in the `<p>` tag in `App`. Access the `currencyData` and `amount` values off of the `props` object.
- Export `CurrencyDisplay` by default from `CurrencyDisplay.js`
- In `App`, import the `CurrencyDisplay` component from `CurrencyDisplay.js`
- Delete the `<p>` tag being returned by the `render` prop of `CurrencyConverter`. Replace it, returning an instance of the `CurrencyDisplay` component instead. Pass the values of `currencyData` and `amount` received as parameters from the `render` prop callback function to `CurrencyDisplay` through component props through `currencyData` and `amount`.

</details>

### Solution

<details>

<summary> <code> src/Components/CurrencyDisplay.js </code> </summary>

```jsx
import React from 'react'

// CREATE A FUNCTIONAL COMPONENT THAT RECEIVES PROPS AS A PARAMETER
const CurrencyDisplay = (props) => (
	// THEN, COPY THE <p> CODE FROM THE APP COMPONENT AND UPDATE THE amount AND
	// currencyData VALUES TO REFLECT HOW THE VALUES ARE RECIEVED THROUGH PROPS
	<p>
		US Dollar ${props.amount.toFixed(2)} - {props.currencyData.name}{' '}
		{props.currencyData.symbol}
		{(props.amount * props.currencyData.rate).toFixed(2)}
	</p>
)

export default CurrencyDisplay
```

</details>

<details>

<summary> <code> src/App.js </code> </summary>

```jsx
import React, { Component } from 'react'
import './App.css'

import CurrencyConverter from './Components/CurrencyConverter'
import CurrencyDisplay from './Components/CurrencyDisplay'

class App extends Component {
	render() {
		return (
			<>
				<h2>Render Props</h2>
				<CurrencyConverter
					render={(currencyData, amount) => (
					// REPLACE THE <p> ELEMENT WITH THE CurrencyDisplay COMPONENT
					// AND PASS THE currencyData AND amount VALUES TO THE COMPONENT
					// USING COMPONENT PROPS
						<CurrencyDisplay currencyData={currencyData} amount={amount} />
					)}
				/>
			</>
		)
	}
}

export default App
```

</details>

## Step 7

### Summary

You may have noticed by now that our project doesn't run yet and we are getting an error `Cannot read 'name' of undefined`. Take a moment and think to yourself: What might be causing this problem?

The problem is happening because we are trying to display our data before we have anything selected from the dropdown. In this step we will conditionally render text if the user hasn't selected an option from the dropdown.

### Instructions

- Inside of `CurrencyConverter.js`, look to the return statement and find where we are invoking `this.props.render`. We will need to conditionally render this function only if a user has selected something from the dropdown. If the user has not, we will display the text `Please Select Currency`.

<details>

<summary> Detailed Instructions </summary>

<br />

Head down to the return of the `CurrencyConverter` component. Here we will use a ternary to determine if our user has selected something from the dropdown. Luckily on state we have a key of `currencyChosen` which is a boolean. Use this to determine if we should display the result of invoking `this.props.render` or if we should display the text `Please Select Currency`.

</details>

### Solution

<details>

<summary> <code> src/Components/CurrencyConverter.js </code> </summary>

```jsx
import React, { Component } from 'react'
import CurrencyDisplay from './CurrencyDisplay'

class CurrencyConverter extends Component {
	state = {
		currencyChosen: false,
		selectedCurrency: 'Select Currency',
		amount: 0
	}

	
	handleOptionSelect = (event) => {
		const userValue = event.target.value
		this.setState(() => {
			return {
				selectedCurrency: userValue,
				currencyChosen: userValue === 'Select Currency' ? false : true
			}
		})
	}
	// OTHER STEPS
	render() {
		// OTHER STEPS
		return (
			<div>
				{/*OTHER STEPS*/}
				// CREATE A TERNARY TO DETERMINE WHAT TO DISPLAY DEPENDING ON WHETHER
				// A CURRENCY HAS BEEN SELECTED OR NOT
				{this.state.currencyChosen ? (
				{this.state.currencyChosen ? (
					this.props.render(
						currencyData[this.state.selectedCurrency],
						this.state.amount
					)
				) : (
					<p>Please Select Currency</p>
				)}
			</div>
		)
	}
}

export default CurrencyConverter
```

</details>

## Black Diamond ◆

### Summary

This step is meant to stretch what you know and combine your knowledge. The first part of the black diamond is to make it so the user cannot go lower than 0. The second part of the challenge is to disable the buttons until an option from the dropdown has been selected.

The final challenge of the black diamond is to make it so every time a user selects a new currency it outputs a new currency display card rather than updating the same card each time.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
