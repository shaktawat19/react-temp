import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Home from './Home'
import { actionCreators } from '../../state' // Adjust the import path
import { Store } from 'redux'
import Enzyme from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'
Enzyme.configure({ adapter: new Adapter() })

describe('Home Component', () => {
  const initialState = { bank: 0 } // Initial state for testing
  const mockStore = configureStore()
  let store: Store

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('renders home page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    // check if the "Amount available" text is rendered
    expect(wrapper.find('.amount-title').text()).toContain('Amount available:')
  })

  it('handles deposit button click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    // Simulate clicking the deposit button
    wrapper.find('.deposit').simulate('click')

    // Verify that the depositMoney action creator was called
    expect(actionCreators.depositMoney).toHaveBeenCalledWith(1000)
  })


  //Mock the action creators and state for testing
  jest.mock('../../state', () => ({
    actionCreators: {
      depositMoney: jest.fn(),
      withdrawMoney: jest.fn(),
      bankrupt: jest.fn(),
    },
    State: { bank: 0 }, // State structure here
  }))
})
