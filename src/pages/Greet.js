import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { Message } from "../components/Message"
export const Greet = () => {
    const [msgName, setMsgName] = useState('')
    const names = {};
    let fullName = "";
    const recInputValue = (val, label) => {
        names[label.toLowerCase()] = val;
        console.log('Names ', names);
        //firstName = val;
        //console.log('First Name is ', firstName);
    }

    const initCap = (currentName) =>
        currentName.charAt(0).toUpperCase() + currentName.substring(1).toLowerCase() + " ";


    const greet = () => {
        for (let key in names) {
            const val = names[key];
            fullName += initCap(val);
        }
        setMsgName('Welcome ' + fullName.trim());
    }

    return (<div>
        <Message myclass="alert-info" msg="Greet App " />
        <Input txtInput={recInputValue} labelValue="First" />
        <Input txtInput={recInputValue} labelValue="Last" />
        <Button operation={greet} labelValue="Greet" myClass="primary" /> &nbsp;
        <Button labelValue="Clear All" myClass="secondary" />
        <Message myclass="alert-success" msg={msgName} />
    </div>)
}