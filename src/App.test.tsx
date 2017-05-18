import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

interface SomeInterface {
  b: string;
}

const a: SomeInterface = 1;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
