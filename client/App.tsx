import React from 'react';
import { render } from 'react-dom';
import { JsxElement } from 'typescript';

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Hello World!!!</h1>
    </div>
  );
};

render(<App />, document.querySelector('#root'));

export default App;
