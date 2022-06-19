import { render, fireEvent, screen, cleanup} from "@testing-library/react";
import Home from "../Home";
import {BrowserRouter as Router} from 'react-router-dom'

afterEach(cleanup);
//test block
test("increment counter", () => {
// render the component on virtual dom
render(<Router>
<Home /></Router>);

//select the elements you want to interact with
const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

//interact with those elements
fireEvent.click(incrementBtn);

//assert the expected result
expect(counter).toHaveTextContent("1");
});

test("decrement counter",()=>{
    render(<Router>
        <Home/>
    </Router>);

    const counter = screen.getByTestId('counter');
    const decrementBtn=screen.getByTestId('decrement');

    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent('-1');
});