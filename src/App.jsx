// eslint-disable-next-line no-unused-vars
import React from "react";
//Copy text to clipboard
function App() {
  var copytext1;
  function copytext() {
    copytext1 = document.getElementById("txt");
    copytext1.select();
    copytext1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copytext1.value);
  }
  return (
    <>
      <input type="text" id="txt" placeholder="Please Enter any dummy text" />
      <button value={copytext1} onClick={copytext}>
        CopyText
      </button>
    </>
  );
}
export default App;
