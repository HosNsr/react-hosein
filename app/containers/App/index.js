import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home 			from '../../containers/Home'
import Login 			from '../../containers/Login'
import Dashboard		from '../../containers/Dashboard'

function App() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Login} />
				<Route path="/dashboard" render={() => (
					<Home>
						<Route exact path="/dashboard" component={Dashboard} />
					</Home>
				)} />
			</div>
		</Router>
	);
}

export default App;