import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const onChangeHandler = (event) => {
      setText(event.target.value);
    }

    const upOnClickHandler = () => {
      let upper=text;
      setText(upper.toUpperCase());
    }

    const loOnClickHandler = () => {
      let lower=text;
      setText(lower.toLowerCase());
    }

    const resetOnClickHandler = () => {
      setText("");
    }

    const capitalizeOnClickHandler = () => {
      let cap=text.charAt(0).toUpperCase()+text.substring(1,text.length).toLowerCase();
      setText(cap);
    }

    const titleCaseOnClickHandler = () => {
      let words=text;
      words=words.toLowerCase();
      words=words.split(' ');
      for(var i=0;i<words.length;i++)
      {
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      words=words.join(' ');
      setText(words);
    }

    const copyHandler =() => {
      let text_temp=document.getElementById("textarea");
      text_temp.select();
      navigator.permissions.query({ name: 'clipboard-read' })
      navigator.clipboard.writeText(text_temp.value);
    }

    const extraSpaceHandler = () => {
      let temp_text=text.split(/[ ]+/);
      setText(temp_text.join(" "));
    }
    
  return (
      <>
        <div className='container my-5'>

          <div className="mb-3">
          <label htmlFor="textarea" className="form-label"><h1>Enter the text to analyze: </h1></label>
          <textarea className="form-control" 
            style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} 
            value = {text} onChange = {onChangeHandler} id="textarea" rows="6"></textarea>
          </div>

          <button className="btn btn-warning mx-2 my-2" onClick={resetOnClickHandler}>Reset</button>

          <button className='btn btn-primary mx-2 my-2' onClick={upOnClickHandler}>Convert to Uppercase</button>

          <button className="btn btn-primary mx-2 my-2" onClick={loOnClickHandler}>Convert to Lowercase</button>

          <button className="btn btn-primary mx-2 my-2" onClick={capitalizeOnClickHandler}>Capitalize sentence</button>

          <button className="btn btn-primary mx-2 my-2" onClick={titleCaseOnClickHandler}>Title Case</button>

          <button className="btn btn-primary mx-2 my-2" onClick={copyHandler}>Copy Text</button>

          <button className="btn btn-primary mx-2 my-2" onClick={extraSpaceHandler}>Remove extra spaces</button>

          <h2 className='my-3'>Text Summary</h2>
          <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
          <p><b>{0.008*text.split(" ").length}</b> Minutes read</p>

          <h3>Text preview</h3>
          <p>{text.length>0?text:"Enter some text in the textbox above to preview it here"}</p>
        </div>
      </>
  )
}
