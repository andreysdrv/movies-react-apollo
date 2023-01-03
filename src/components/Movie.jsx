import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	height: 380px;
	width: 100%;
	border-radius: 7px;
	overflow: hidden;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\
	transition: transform .3s;
	&:hover {
		transform: translate(0, -10px);
	}
`
const Poster = styled.div`
	background-image: url(${props => props.bg});
	height: 100%;
	width: 100%;
	background-size: cover;
	background-position: center center;
`

export const Movie = ({ id, bg }) => (
	<Container>
		<Link to={`/${id}`}>
			<Poster bg={bg} />
		</Link>
	</Container>
)
