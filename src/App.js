import {useDispatch, useSelector} from "react-redux";
import {increment, decrement,userAddNumber} from "./actions/index.js";
import {Container, Button, Input} from "@material-ui/core";
import {useState} from "react";


function App() {
  const store = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const [userNumber, setNumber] = useState(1)
  return (
      <Container maxWidth="lg">
          <div className="app">
              <h1>{store}</h1>
              <Button variant="contained" color="success" onClick={() => dispatch(increment())}>+</Button>
              <Button variant="contained" color="danger" onClick={() => dispatch(decrement())}>-</Button>
              <br/>
              <br/>
              <Input type="number" value={userNumber} onChange={(e) => setNumber(e.target.value)}/>
              <Button variant="contained" color="primary" onClick={() => dispatch(userAddNumber(userNumber))}>Add your number</Button>
          </div>
      </Container>
  );
}

export default App;
