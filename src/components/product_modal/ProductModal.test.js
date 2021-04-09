import React from 'react'
import { shallow, mount } from 'enzyme'
// These are component helper functions
import { FindByTestAttribute } from '../component_helpers/helpers'

describe('Product Modal', () => {
    // Store the shallow component in var before each test
    let shallowComponent, mountComponent
    beforeEach(() => {
        shallowComponent = shallow(<ProductCardList></ProductCardList>)
    })

    // Make sure the component renders perfectly  
    it('should render without errors', () => {
        const wrapper = FindByTestAttribute(shallowComponent, 'TopNavigation')
        expect(wrapper.length).toBe(1)
    })
})
