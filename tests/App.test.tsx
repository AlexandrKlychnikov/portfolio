import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import App from '../src/components/App';

it('App is rendered', () => {
    // Render App
    const appElement = TestUtils.renderIntoDocument(
        <App/>
    );

    const appNode = ReactDOM.findDOMNode(appElement as unknown as React.ReactInstance);

    expect(appNode.textContent).toBeTruthy();
});
