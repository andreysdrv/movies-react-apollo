import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
	uri:
		import.meta.env.MODE === 'development'
			? 'http://localhost:4000/'
			: 'https://movieql-api.onrender.com/graphql?',
	cache: new InMemoryCache(),
})
