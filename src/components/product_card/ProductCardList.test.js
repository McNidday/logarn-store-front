import React from 'react'
import { mount, shallow, render } from 'enzyme'
import ProductCardList from './ProductCardList'
// These are component helper functions
import { FindByTestAttribute } from '../component_helpers/helpers'
import CheckPropTypes from 'check-prop-types'
import { TestStore } from '../../redux/utils'
// import { Provider } from 'react-redux'

function getComponent(type, props = {}) {
    const component = <ProductCardList store={TestStore()} {...props}></ProductCardList>
    switch (type) {
        case 'shallow': return shallow(component)
        default: return mount(component)
    }
}

describe('Product List Component', () => {
    let shallowComponent
    beforeEach(() => {
        shallowComponent = getComponent('shallow').childAt(0).dive()
    })

    it('should render without errors', () => {
        const wrapper = FindByTestAttribute(shallowComponent, 'ProductCardList')
        expect(wrapper.length).toBe(1)
    })

    it('should have correct prop types', () => {
        const expectedProps = {
            products: [
                {
                    _id: 'kakdaslkdlaksdjlkasjdlad',
                    name: 'nidday',
                    categories: ['awesome', 'jobs', 'grit', 'hardwork']
                }
            ]
        }
        const propsError = CheckPropTypes(ProductCardList.propTypes, expectedProps, 'props', ProductCardList.name)
        expect(propsError).toBeUndefined()
    })
})
