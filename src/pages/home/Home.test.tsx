import renderer from 'react-test-renderer'
import Home from './Home'
import Enzyme from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('Home component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Home />)

    // Check if the component renders a specific element
    expect(wrapper.contains(<h1>HOME PAGE</h1>)).toBe(true)

    // Check if the component contains a specific class
    expect(wrapper.find('.my-class')).toHaveLength(1)
  })
})
