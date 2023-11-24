import React , {useState} from 'react'

export default function TextForm(props) {

    const ChangeUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success","Text is converted to upper case")
    }
    const ChangelowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("success","Text is converted to lower case")
    }
    const clear = (event) =>{       
        setText("")
        props.showAlert("success","Text is Cleared")
    }

    const OnChange = (event) =>{       
        setText(event.target.value)
    }

    const [text,setText] = useState("");
  return (
    <>
    <div>
        <h1 style={{color: props.mode === 'dark'? 'white': 'black'}}>{props.heading} </h1>
        <div className="mb-3">
        <textarea style={{color: props.mode === 'dark'? 'white': 'black',backgroundColor: props.mode === 'dark'? '#001f3f': 'white'}} className="form-control" onChange={OnChange}  value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={ChangeUpCase}>ChangeUpCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={ChangelowerCase}>ConvertToLowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clear}>Clear</button>
        </div>
    </div>
    <div className="container" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h2>Your Text Summary here</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes time to read </p>
        <h3>Preview</h3>
        <p style={{color: props.mode === 'dark'? 'white': 'black'}} >{text.length>0 ?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
