import Home from './Home'
import Enzyme from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'
import { shallow, mount, ReactWrapper } from 'enzyme'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../../App';
import { Store } from 'redux';

Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureStore([]);

describe('Counter', () => {
  let store: Store;
  let component: ReactWrapper;

  beforeEach(() => {
    store = mockStore(5000000);

    component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('deposits the money', () => {
    component.find('button.deposit').simulate('click');
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'deposit' }]); 
  });

  it('decrements the counter', () => {
    component.find('button.withdraw').simulate('click');
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'withdraw' }]); 
  });
});
