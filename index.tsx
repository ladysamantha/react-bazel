import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from 'react_bazel/lib/HelloComponent';

console.log('hi');

ReactDOM.render(<HelloComponent name="Jim" />, document.getElementById("app") as HTMLElement);
