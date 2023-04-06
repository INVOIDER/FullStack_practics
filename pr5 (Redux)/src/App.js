import {useDispatch, useSelector} from "react-redux";
import './styles/App.css'

function App() {
  const dispatch = useDispatch()
  const is_Pressed = useSelector(state => state.is_pressed)
  console.log(is_Pressed)

  const change_checkbox = ()=>{
      if(is_Pressed === true)
      {
          dispatch({type:"CHECKBOX_OFF"})
      }else
      {
          dispatch({type: "CHECKBOX_ON"})
      }
  }
  return (
    <div className="App">
    <div className={"form"}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nesciunt optio, tempora quidem debitis blanditiis nemo earum, sint sunt architecto deserunt vel impedit cum exercitationem aliquam, doloribus quo enim esse!</p>
        <hr/>
        <div className={"InputBox"}>
        <input type={"checkbox"} onClick={change_checkbox} value={is_Pressed}></input> <span>Я принимаю условия соглашения</span><br/>
        <input type={"submit"} disabled={!is_Pressed}></input>
    </div>
    </div>
</div>
  );
}

export default App;
