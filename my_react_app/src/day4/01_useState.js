import React, { useState } from 'react';

// const MyComponent = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <div>
//       <p>
//         현재 카운터 값은 <b>{value}</b> 입니다.
//       </p>
//       <button onClick={() => setValue(value + 1)}>+1</button>
//       <button onClick={() => setValue(value - 1)}>-1</button>
//     </div>
//   );
// };

class MyComponent extends React.Component {
	state = {
		count: 0
	}

	increment(){
		this.setState({
			count : this.state.count + 1
		})
	}
	
	decrement(){
		this.setState({
			count : this.state.count - 1
		})
	}
	render (){
		return (
    <div>
      <p>
        현재 카운터 값은 <b>{this.state.count}</b> 입니다.
      </p>
      <button onClick={() => this.increment()}>+1</button>
      <button onClick={() => this.decrement()}>-1</button>
    </div>
    );
    }
}
export default MyComponent;