import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfor) {
        console.error(error, errorInfor);
    }

    render() {
        if(this.state.hasError)
            return <h1>Something was wrong</h1>
        return this.props.children;
    }

}

export default ErrorBoundary;