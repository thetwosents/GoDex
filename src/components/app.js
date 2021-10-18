import React, {lazy, Suspense} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import rootReducer from './redux/reducers/reducers';
import Loader from './design/loader';
import Title from './design/title';
import FilterSection from './pokedex/filter-section/filter-section';
import StatsSection from './pokedex/stats-section/stats-section';
import styled from 'styled-components';

const ARight = styled.a`
	margin-left: auto;
	color: white;
	
	&:hover {
		color: white;
	}
`;

const SpanWhite = styled.span`
	color: white;
`;

const PokedexItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const CenterDiv = styled.div`
	margin-left: auto;
	margin-right: auto;
`;

const MainContainer = styled(Container)`
	padding-bottom: 50px;
`;

const Pokedex = lazy(() => import('./pokedex/Pokedex'));
const store = createStore(rootReducer);
const currentYear = new Date().getFullYear();

const App = () => {
	return (
		<>
			<MainContainer>
				<Row>
					<CenterDiv>
						<Title/>
					</CenterDiv>
				</Row>
				<Provider store={store}>
					<Row>
						<Col xs="6" lg="6" md="6">
							<StatsSection/>
						</Col>
						<Col xs="6" lg="6" md="6">
							<FilterSection/>
						</Col>
					</Row>
					<PokedexItems>
						<Suspense fallback={<Loader/>}>
							<Pokedex/>
						</Suspense>
					</PokedexItems>
				</Provider>
			</MainContainer>
			<Navbar fixed="bottom" bg="dark">
				<SpanWhite>GoDex - 2019 - {currentYear}</SpanWhite>
				<ARight href="https://github.com/joelcancela/GoDex">
					<i className="devicon-github-plain"/> GitHub</ARight>
			</Navbar>
		</>
	);
};

export default App;
