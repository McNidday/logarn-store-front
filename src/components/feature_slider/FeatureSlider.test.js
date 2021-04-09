import React from 'react'
import { shallow } from 'enzyme'
import TopNavigation from './TopNavigation'
// These are component helper functions
import { FindByTestAttribute, GetComponentWithProps } from '../component_helpers/helpers'
import ProductCardList from './ProductCardList'

describe('Feature Slide Component', () => {
    // Store the shallow component in var before each test
    let shallowComponent, mountComponent
    beforeEach(() => {
        shallowComponent = shallow(<TopNavigation></TopNavigation>)
        mountComponent = mount(<ProductCardList></ProductCardList>)
    })

    // Make sure the component renders perfectly  
    it('should render without errors', () => {
        const wrapper = FindByTestAttribute(shallowComponent, 'ProductList')
        expect(wrapper.length).toBe(1)
    })

    // Make sure the component products render perfectly  
    it('should render products without errors', () => {
        const wrapper = FindByTestAttribute(shallowComponent, 'ProductList')
        expect(wrapper.length).toBe(1)
    })
})
