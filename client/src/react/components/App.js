import "../styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  handleChangeNew,
  handleSubmitNew,
  handleResetNew
} from "../../redux/actionCreators";

export default function App(props) {
  const nameReducer = useSelector((state) => state.nameReducer);
  const { input, message } = nameReducer;
  // const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleChangeNew(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(handleSubmitNew(input));
  };

  const handleReset = () => {
    dispatch(handleResetNew());
  };

  return (
    <div className="App">
      <input onChange={handleChange} value={input} />
      <button onClick={handleSubmit}>submit</button>
      <button onClick={handleReset}>Reset</button>

      <ol>
        {message.map((e, i) => {
          return <li key={i + 1}>{e}</li>;
        })}
      </ol>
      
    </div>
  );
}

