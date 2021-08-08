import {useSelector} from "react-redux";

const Account = () => {

    const account = useSelector(state => state.account)

    return (
        <>
            <h1>Account Balance</h1>
            <p>{account.balance}</p>
        </>
    )
}

export default Account;
