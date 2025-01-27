// import { useContext } from "react"
// import { toInput, toOutput }  from '../App.js';

function Buttons(props) {
	// ut =var putInput = useContext(toInput)
	// var putOutp useContext(toOutput)

    return (
        <div className="row">
			<div className="btn-group me-2" role="group" aria-label="Second group">
				<button 
				type="button" 
				className="col-3 btn btn-dark btn-no-radius" 
				onClick={props.btn1OnClick}>
					{props.btn1}
				</button>
				
				<button 
				type="button" 
				className="col-3 btn btn-dark btn-no-radius" 
				onClick={props.btn2OnClick}>
					{props.btn2}
				</button>

				<button 
				type="button" 
				className="col-3 btn btn-dark btn-no-radius" 
				onClick={props.btn3OnClick}>
					{props.btn3}
				</button>

				<button 
				type="button" 
				className="col-3 btn btn-dark btn-no-radius" 
				onClick={props.btn4OnClick}>
					{props.btn4}
				</button>
			</div>
	  	</div>
    )
}

export default Buttons