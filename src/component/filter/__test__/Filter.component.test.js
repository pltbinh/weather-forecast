import React from 'react';
import renderer from 'react-test-renderer';
import FilterComponent from '../Filter.component';

// Snapshot testing
describe('FilterComponent', () => {
  it('should render correctly', () => {
    // act
    const component = renderer.create(<FilterComponent />);
    const tree = component.toJSON()

    // assert
    expect(tree).toMatchSnapshot()
  });

  it('should display loading state correctly', () => {
    // act
    const component = renderer.create(<FilterComponent loading />);
    const tree = component.toJSON()

    // assert
    expect(tree).toMatchSnapshot()
  });

  it('should display underline text correctly', () => {
    // act
    const component = renderer.create(<FilterComponent underlineText='some text' />);
    const tree = component.toJSON()

    // assert
    expect(tree).toMatchSnapshot()
  });
})