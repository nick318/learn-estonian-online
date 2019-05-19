import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {

    constructor(props) {
        super(props)
        this.state = { error: '' }
    }

    componentDidCatch(error, info) {
        this.setState({ error, info })
    }

    render() {
        const { error, info } = this.state
        if (error) {
            return (
                <div>
                    <h1>Error occurred</h1>
                    <div>{error}</div>
                    <div>{info}</div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
