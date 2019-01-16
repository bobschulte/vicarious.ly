import React from 'react'
import { Route } from 'react-router'

// babel route decorators........ does 'finisher' need to change to 'finalizer'?
export const route = function(path) {
    return descriptor => {
        descriptor.finisher = component => {
            return class RoutedComponent extends React.Component {
                render() {
                    return <Route exact path={path} component={component} />
                }
            }
        }
        return descriptor
    }
}