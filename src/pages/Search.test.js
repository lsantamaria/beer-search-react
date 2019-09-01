import {configure} from 'enzyme';
import React from 'react';
import Search from './Search'
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';


describe('search component tests', () => {
  configure({ adapter: new Adapter() });

  it('should invoke searchBeers function after search click', () => {
    const testMealName = "Fish";
    const searchBeersMock = jest.fn();
    const wrapper = mount(<Search searchBeers={searchBeersMock}/>);
    wrapper.setState({mealName: testMealName});

    wrapper.find('button').at(0).simulate('click');
    expect(searchBeersMock).toHaveBeenCalledWith(testMealName)
  });

//  here we could add more tests for checking component rendering
});
