import { useReducer } from "react"



interface Counter{
  acc:number,
  step:number
}

enum CounterActions{
  INCREASE_STEP_BY_ONE='INCREASE_STEP_BY_ONE',
  DECREASE_STEP_BY_ONE='DECREASE_STEP_BY_ONE',
  INCREASE_COUNT_BY_ONE='INCREASE_COUNT_BY_ONE',
  INCREASE_COUNT_BY_VALUE='INCREASE_COUNT_BY_VALUE',
  DECREASE_COUNT_BY_VALUE='DECREASE_COUNT_BY_VALUE',
  DECREASE_COUNT_BY_ONE='DECREASE_COUNT_BY_ONE',
  REST_COUNT='REST_COUNT',
  REST_STEP='REST_STEP',
}

interface CountAction{
  payload?:Counter
  type:CounterActions
}

function Home() {
  const initialValue = {
    acc:0,
    step:1
  }

  const CounterReducer = (state:Counter,action:CountAction)=>{

    switch(action.type){
      
      case CounterActions.INCREASE_COUNT_BY_ONE:
      return {...state,acc:state.acc+1}
      case CounterActions.INCREASE_COUNT_BY_VALUE:
      return {...state,acc:state.acc+state.step}

      case CounterActions.DECREASE_COUNT_BY_ONE:
        if(state.acc===0) return {...state,acc:0};

       return {...state,acc:state.acc-1}

      case CounterActions.DECREASE_COUNT_BY_VALUE:
        if(state.acc - state.step<=0) return {...state,acc:0};
      return {...state,acc:state.acc-state.step}

      case CounterActions.REST_COUNT:
      return {...state,acc:0}

      case CounterActions.REST_STEP:
      return {...state,step:0}

      case CounterActions.INCREASE_STEP_BY_ONE:
      return {...state,step:state.step+1}
      case CounterActions.DECREASE_STEP_BY_ONE:
        return {...state,step:state.step-1}


      default: return initialValue;
  
    }

  }
  const[state,dispatch] = useReducer(CounterReducer,initialValue)


  return (
    <div className=' text-white flex flex-col gap-4  w-full h-[500px] overflow-hidden justify-center items-center '>
      <div className=" flex flex-row gap-7">
        <button  className=" bg-white p-4 min-h-5 min-w-5 text-2xl text-black" 
        onClick={()=>dispatch({type:CounterActions.INCREASE_COUNT_BY_VALUE })}>+</button>
        <div  className=" h-5 text-black text-3xl px-4 py-8 bg-white flex justify-center items-center "  >{state.acc} </div>

        <button  className=" bg-white p-4 min-h-5 min-w-5 text-2xl text-black"
        onClick={()=>dispatch({type:CounterActions.DECREASE_COUNT_BY_VALUE })}>-</button>

        </div>
        <div className=" flex flex-row gap-7">
        <button  className=" bg-white p-4 min-h-5 min-w-5 text-2xl text-black" 
        onClick={()=>dispatch({type:CounterActions.INCREASE_STEP_BY_ONE })}>+</button>
        <div  className=" h-5 text-black text-3xl px-4 py-8 bg-white flex justify-center items-center "  >{state.step} </div>

        <button  className=" bg-white p-4 min-h-5 min-w-5 text-2xl text-black"
        onClick={()=>dispatch({type:CounterActions.DECREASE_STEP_BY_ONE })}>-</button>

        </div>

      
    </div>
  )
}

export default Home
