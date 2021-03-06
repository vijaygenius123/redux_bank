import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import { accountActionCreators }  from "store/actionCreators";

const Account = () => {

    const account = useSelector(state => state.account)
    const dispatch = useDispatch()
    const {withdrawMoney, depositMoney} = bindActionCreators(  accountActionCreators , dispatch)
    return (
        <>
            <h1>Account Balance</h1>
            <p>{account.balance}</p>
            <button className="btn btn-primary m-1" onClick={() => depositMoney(100)}>Deposit</button>
            <button className="btn btn-primary m-1" onClick={() => withdrawMoney(100)}>Withdraw</button>
        </>
    )
}

export default Account;
