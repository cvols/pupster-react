import React from "react"
import PropTypes from "prop-types"

export default class Container extends React.Component {
    render() {
        const { fluid, children } = this.props
        
        return (
            <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
        )
    }
}

Container.propTypes = {
    fluid: PropTypes.string,
    children: PropTypes.node
}