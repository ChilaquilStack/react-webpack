import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Home = ({children}) => (
    <div className="Home">
        {children}
    </div>
);

Home.propTypes = {
    children: PropTypes.node.isRequired
}

export default Home;