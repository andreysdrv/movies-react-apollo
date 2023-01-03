import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo'
import { Home } from './routes/Home'
import { Details } from './routes/Details'

const router = createHashRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/:id',
		element: <Details />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</ApolloProvider>
	</React.StrictMode>
)
