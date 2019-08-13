import CheckPropTypes from 'check-prop-types';
export const findByTestAttr = (wrapper,dataId) => {
    return wrapper.find(`[data-test="${dataId}"]`)
}
export const checkProp = (component , confirmingProps) => {
    const propError = CheckPropTypes(component.propTypes,confirmingProps,'prop',component.name)
    expect(propError).toBeUndefined()
}