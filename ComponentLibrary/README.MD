# Package built for a workshop presentation for ITSector

Made by [Alexandre Gonçalves](https://github.com/AlexandreFPGoncalves/react-component-library-itsector-workshop) and Humberto Vieira
Check the [Repository](https://github.com/AlexandreFPGoncalves/react-component-library-itsector-workshop) !

### Installation

```sh
   npm i react-component-library-itsector-workshop
```

### Usage

```ts
import { useState } from 'react';
import { ButtonComponent } from 'react-component-library-itsector-workshop';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<ButtonComponent
				type="primary"
				onClick={() => setCount((count) => count + 1)}
				label={`count is ${count}`}
			/>
		</>
	);
}

export default App;
```
