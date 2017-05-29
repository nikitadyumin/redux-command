# redux-command

## API
### example

```
import {commandMiddleware, commandCreator} from 'redux-command';
const store = createStore(
    reducer,
    applyMiddleware(commandMiddleware)
);

const command = commandCreator(state => Promise.resolve(state));

store.dispatch(command()).then(result => console.log(result));
```