import React from 'react'

export default function About(props) {
  return (
    <div >
      <div className='container'>
        <h1>About Us</h1>
        TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
        The most eminent features of the website are as follows :
      </div>
      <div style={{backgroundColor: props.mode === "dark"?"gray":"white"}} className="container accordion" id="box">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Analize Your Text
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              It is a Simple Text Analyzer , which mutilates your text, but in a tender way
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Free to use
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              It is completely free to use. No credit cards required. Use as much as you want!!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Browser compatible
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
              It is compatible with all of your favorite browsers.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
