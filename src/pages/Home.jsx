import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from '../components/homepage/navbar/Navbar';
import Jumbotron from '../components/homepage/jumbotron/Jumbotron';
import Search from '../components/homepage/search/Search';
import Service from '../components/homepage/service/Service';
import Offer from '../components/homepage/offer/Offer';
import Contact from '../components/homepage/contact/Contact';
import Footer from '../components/homepage/footer/Footer';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/homepage.css'
import Searched from "../components/homepage/searched/Searched";
import NotFound from "../components/homepage/notfound/NotFound";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Jumbotron />
                <Search />
                {(this.props.onSubmit && this.props.flights.length !== 0) ? <Searched /> :
                    this.props.onSubmit && this.props.flights.length === 0 && <NotFound />}
                <Service />
                <Offer />
                <Contact />
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.flights,
        onSubmit: state.onSubmit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plusCounter: () => dispatch({
            type: actionType.PLUS_COUNTER,
        }),
        minCounter: () => dispatch({
            type: actionType.MIN_COUNTER,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);