import sinon from 'sinon'
import { TestStore } from '../redux/utils/index'
import { getProducts } from '../redux/product_list/ProductActions'
import axios from 'axios'
import moxios from 'moxios'

describe('Product Actions', () => {
    describe('Get Products', () => {
        beforeEach(function () {
            // import and pass your custom axios instance to this method
            moxios.install()
        })

        afterEach(function () {
            // import and pass your custom axios instance to this method
            moxios.uninstall()
            sinon.restore()
        })

        it('Should get products', () => {
            const expectedProducts = [{
                _id: 'sndalndlasdasd',
                name: 'nidday',
                imageUrl: 'testurl',
                categories: ['jake', 'blench'],
                active: true,
                createdAt: '01/02/2019'
            }]

            const store = TestStore()

            const productPromise = new Promise((r) => r({
                data: {
                    data: {
                        getProducts: expectedProducts
                    }
                }
            }))

            // const subScriptionTimout = setTimout(() => {}, 10000)

            // const fakeAxios = sinon.fake.returns(productPromise)
            sinon.stub(axios, 'post')
            axios.post.returns(productPromise)

            store.dispatch(getProducts())

            store.subscribe(() => {
                expect(axios.post.called).toBe(true)
                const newState = store.getState()
                expect(newState.products.products).toEqual(expectedProducts)
            })
        })
    })
})

