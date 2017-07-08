import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('Renders a div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
