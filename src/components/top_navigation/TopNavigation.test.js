import React from 'react'
import { shallow } from 'enzyme'
import TopNavigation from './TopNavigation'
// These are component helper functions
import FindByTestAttribute from '../component_helpers/FindByTestAttribute'

describe('Top Navigation Component', () => {
    // Store the shallow component in var before each test
    let shallowComponent
    beforeEach(() => {
        shallowComponent = shallow(<TopNavigation></TopNavigation>)
    })

    // Make sure the component renders perfectly  
    it('should render without errors', () => {
        const wrapper = FindByTestAttribute(shallowComponent, 'TopNavigation')
        expect(wrapper.length).toBe(1)
    })
})
