import {useState} from 'react'; 

export default function TextUtils(pro) {

    var demo = pro.demo;

    const upperCaseHandler = (event) => {
        setInputText(inputText.toUpperCase());
    }

    const lowerCaseHandler = (event) => {
        setInputText(inputText.toLowerCase());
    }

    const handleOnChange = (event) => {
        setInputText(event.target.value);
    } 

    const clearHandler = (event) => {
        setInputText("");
    }

    const [inputText, setInputText] = useState(demo)    

    return (
        <div className="container mt-3 mb-3">
        <h2>{pro.title}</h2>
        <div className="my-1">
        <textarea className="form-control form-control-lg mt-3 mb-3" type="text" onChange={handleOnChange} placeholder="Input Text Here" value={inputText}></textarea>
        <button type="submit" onClick={upperCaseHandler} className="btn btn-primary m-2 float-right">Change in UPPERCASE</button>
        <button type="submit" onClick={lowerCaseHandler} className="btn btn-primary m-2 float-right">Change in lowercase</button>
        <button type="submit" onClick={clearHandler} className="btn btn-danger m-2 float-right">Clear</button>
        </div>
        <h3>Text Summary</h3>
        <h4>Total Charecter : {inputText.length},  Total Words : {inputText.split(' ').length}</h4>
        </div>
    )
}