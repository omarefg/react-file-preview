import React, { Component } from 'react'
import { Error } from './Error'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        const { onError } = this.props
        onError && onError(error, errorInfo)
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children, ErrorComponent } = this.props

        if (hasError) { return <Error ErrorComponent={ErrorComponent}/> }

        return children
    }
}
