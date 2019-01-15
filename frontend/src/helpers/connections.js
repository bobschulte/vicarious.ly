import { connect } from 'react-redux'

// babel redux-react connection decorators

const createConnectionDecorator = function(mapStateToProps, mapDispatchToProps) {
    return descriptor => {
        descriptor.finisher = function(Component) {
            return connect(mapStateToProps, mapDispatchToProps)(Component)
        }
        return descriptor
    }
}