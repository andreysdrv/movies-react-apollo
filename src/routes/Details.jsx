import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'
import { Movie } from '../components/Movie'

const GET_MOVIE = gql`
	query getMovie($id: Int!) {
		movie(id: $id) {
			title
			medium_cover_image
			description_full
			rating
			language
		}
		suggestions(id: $id) {
			id
			medium_cover_image
			rating
			title
		}
	}
`

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(-45deg, #d754ab, #fd723a);
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
`

const Column = styled.div`
	margin-left: 10px;
	width: 50%;
`

const Poster = styled.div`
	background-image: url(${props => props.bg});
	width: 25%;
	height: 60%;
	background-size: cover;
	background-position: center center;
`

const Title = styled.h1`
	font-size: 65px;
	margin-bottom: 15px;
`
const Subtitle = styled.h4`
	font-size: 35px;
	margin-bottom: 10px;
`
const Description = styled.p`
	font-size: 28px;
`

const Suggestions = styled.div`
	display: flex;
	justify-content: center;
`

const Movies = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 25px;
	width: 60%;
	position: relative;
	top: -50px;
`

const Loading = styled.div`
	font-size: 18px;
	opacity: 0.5;
	font-weight: 500;
	margin-top: 10px;
`

export const Details = () => {
	const { id } = useParams()
	const { loading, data } = useQuery(GET_MOVIE, {
		variables: { id: parseInt(id) },
	})

	return (
		<>
			<Container>
				{loading && <Loading>Загружаем...</Loading>}
				{!loading && data?.movie && (
					<>
						<Column>
							<Title>{data?.movie?.title}</Title>
							<Subtitle>
								{data?.movie?.language} · {data?.movie?.rating}
							</Subtitle>
							<Description>{data?.movie?.description_full}</Description>
						</Column>
						<Poster bg={data?.movie?.medium_cover_image}></Poster>
					</>
				)}
			</Container>
			<Suggestions>
				{!loading && data?.suggestions && (
					<>
						<Subtitle>Похожие фильмы</Subtitle>
						<Movies>
							{data.suggestions.map(movie => (
								<Movie
									key={movie.id}
									id={movie.id}
									bg={movie.medium_cover_image}
								/>
							))}
						</Movies>
					</>
				)}
			</Suggestions>
		</>
	)
}
