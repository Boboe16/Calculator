import { useReducer, useState } from 'react'
import './App.css';
import OneByFourButtons from './Components/1x4Buttons.js'
import Input from './Components/Input';
import Output from './Components/Output';

function App() {
	var [input, setInput] = useState('')

	function reducer(state, action) {
		try {
			return '=' + eval(action)
		} catch {
			return "Marunong kaba gumamit ng calculator? "
		}
	}

	var [output, dispatchOutput] = useReducer(reducer, '=')

	return (
		<div className="container">
			<div id='InputAndOutput' className='row'>
				<Input value={input} />
				<Output value={output} />
			</div>
			<OneByFourButtons 
				btn1={'C'} btn1OnClick={() => setInput(input = '')}
				btn2={'/'} btn2OnClick={() => setInput(input.concat('/'))}
				btn3={'*'} btn3OnClick={() => setInput(input.concat('*'))}
				btn4={'X'} btn4OnClick={() => setInput(input.slice(0, -1))}
			/>
			<OneByFourButtons 
				btn1={'7'} btn1OnClick={() => setInput(input.concat('7'))}
				btn2={'8'} btn2OnClick={() => setInput(input.concat('8'))}
				btn3={'9'} btn3OnClick={() => setInput(input.concat('9'))}
				btn4={'-'} btn4OnClick={() => setInput(input.concat('-'))}
			/>
			<OneByFourButtons 
				btn1={'4'} btn1OnClick={() => setInput(input.concat('4'))}
				btn2={'5'} btn2OnClick={() => setInput(input.concat('5'))}
				btn3={'6'} btn3OnClick={() => setInput(input.concat('6'))}
				btn4={'+'} btn4OnClick={() => setInput(input.concat('+'))}
			/>
			<OneByFourButtons 
				btn1={'1'} btn1OnClick={() => setInput(input.concat('1'))}
				btn2={'2'} btn2OnClick={() => setInput(input.concat('2'))}
				btn3={'3'} btn3OnClick={() => setInput(input.concat('3'))}
				btn4={'.'} btn4OnClick={() => setInput(input.concat('.'))}
			/>
			<OneByFourButtons 
				btn1={'%'} btn1OnClick={() => setInput(input.concat('%'))}
				btn2={'0'} btn2OnClick={() => setInput(input.concat('0'))}
				btn3={'00'} btn3OnClick={() => setInput(input.concat('00'))}
				btn4={'='} btn4OnClick={() => dispatchOutput(input)}
			/>
		</div> 
	);
}

export default App;
