import {connect} from "react-redux";

function App(props) {
  const {count, step, dispatch} = props;

  const decrement = ()=>{
    dispatch({type:"DECREMENT"})
  };

  const increment = ()=>{
    dispatch({type:"INCREMENT"})
  }

  const onChange = (event) => {
    dispatch({type:'setStep', newStep: Number(event.target.value)})
  }
  return (
    <div>
      <h1>Current count: {count}</h1>
      <input type="number" value={step} onChange={onChange}/>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

// function mapStateToProps (state) {
//   // return state;
//   return {count: state.count};
// }

// const mapStateToProps = state => {return{count: state.count}};
const mapStateToProps = state => state;

// const withProps = connect(mapStateToProps);
// const ComponentWithProps = withProps(App);
// export default ComponentWithProps;

export default connect(mapStateToProps)(App);