/**
 * Finds the a component within a component with the data-test attribute css selector
 * @param {JSX.Element} component The component to find the element with attribute
 * @param {string} attr The attribute to use as the query selector to find the element
 * @returns {JSX.Element} A component found within the component with attribute
 */
export function FindByTestAttribute(component, attr) {
    return component.find(`[data-test="${attr}"]`)
}

/**
 * Returns a component populated with the props
 * @param {Object} props The properties to pass to the component
 * @param {JSX.Element} component The component to populate with properties
 */
export function GetComponentWithProps(component, props) {
    return component.props = props
}