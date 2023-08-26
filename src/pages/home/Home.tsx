import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state/index'


const Home = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <div
        style={{
          height: '40vh',
          width: '40vw',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <h1>Amount available: {amount}</h1>
        <button onClick={() => withdrawMoney(1000)}>Withdraw 1000</button>
        <button onClick={() => depositMoney(1000)}>Deposit 1000</button>
        <button onClick={() => bankrupt()}>Bankrupt</button>
      </div>
    </div>
  )
}

export default Home
