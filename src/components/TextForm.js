import React , {useState} from 'react'
import './TextForm.css'
//import App from '../App';

export default function TextForm(props) {
  
  const handleUpCick=()=>{
    console.log('uppercase clicked' +text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleDownCick=()=>{
    console.log('uppercase clicked' +text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClear=()=>{
    console.log('Clear clicked' +text);
    let newText=" ";
    setText(newText);
  }
  const handleCopy=()=>{
    console.log('text copied!');
    var text= document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleSpaces=()=>{
    console.log('remove extra spaces');
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    }
    
  // const handleTitle = () => {
  //   console.log('Title Case' + text);
  //   let newText = toTitleCase(text);
  //   setText(newText);

  const handleOnChange=(event)=>{
    console.log('Changing start');
    setText(event.target.value);
  }
  const [text , setText]= useState('Enter Text Here');
  //setText('new text here') correct way to change test value

 

  return (
    <>
    <div>
        
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
    <h1>{props.heading}</h1>
  
  <textarea className="form-control" onChange={handleOnChange} id="mybox" style={{backgroundColor:props.mode=== 'dark' ? 'grey' : 'white' , color:props.mode === 'dark'  ? 'white' : 'black'}} value={text} rows="8"></textarea>
</div>
<button className='btn btn-primary myClass mx-3' onClick={handleUpCick}> convert Uppercase</button>
<button className='btn btn-primary myClass mx-3' onClick={handleDownCick} > convert Lowercase</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

{/* <button className='btn btn-primary myClass' onClick={handleTitle} > Title Case</button> */}
<button className='btn btn-primary my-3  mx-3 myClass' onClick={handleClear} > Clear Text</button>
<button className='btn btn-primary myClass mx-3' onClick={handleCopy} > Copy Text</button>
<button className='btn btn-primary myClass mx-3' onClick={handleSpaces} >Extra Spaces Filter</button>

</div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1> Text Summary</h1>
      <p>{text.split(" ").length}words and {text.length} character</p>
      <p>{ 0.008 * text.split(" ").length} Minutes Reading time </p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}

