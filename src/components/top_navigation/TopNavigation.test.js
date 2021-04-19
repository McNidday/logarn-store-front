import React from 'react'
import { mount, shallow } from 'enzyme'
import TopNavigation from './TopNavigation'
// These are component helper functions
import { FindByTestAttribute } from '../component_helpers/helpers'

function getComponent(type, props = {}) {
    switch (type) {
        case 'shallow': return shallow(<TopNavigation {...props}></TopNavigation>)
        default: return mount(<TopNavigation {...props}></TopNavigation>)
    }
}

describe('Top Navigation Component', () => {
    let shallowComponent
    beforeEach(() => {
        shallowComponent = getComponent('shallow')
    })

    it('should render without errors', () => {
        const wrapper = FindByTestAttribute(shallowComponent, 'TopNavigation')
        expect(wrapper.length).toBe(1)
    })

    it('should render the logo', () => {
        const logo = FindByTestAttribute(shallowComponent, 'Logo')
        const logoText = logo.text('LS')
        expect(logoText).toEqual('LS')
        expect(logo.length).toBe(1)
    })

    it('should show login link', () => {
        const text = shallowComponent.text('Login')
        const test = new RegExp(/Login/g)
        const loginText = test.test(text)
        expect(loginText).toBe(true)
    })

    it('should show login link', () => {
        const text = shallowComponent.text('Cart')
        const test = new RegExp(/Cart/g)
        const CartText = test.test(text)
        expect(CartText).toBe(true)
    })
})
