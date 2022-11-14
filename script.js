const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626 },
  { note: "Db", key: "S", frequency: 277.183 },
  { note: "D", key: "X", frequency: 293.665 },
  { note: "Eb", key: "D", frequency: 311.127 },
  { note: "E", key: "C", frequency: 329.628 },
  { note: "F", key: "V", frequency: 349.228 },
  { note: "Gb", key: "G", frequency: 369.994 },
  { note: "G", key: "B", frequency: 391.995 },
  { note: "Ab", key: "H", frequency: 415.305 },
  { note: "A", key: "N", frequency: 440 },
  { note: "Bb", key: "J", frequency: 466.164 },
  { note: "B", key: "M", frequency: 493.883 }
]
document.addEventListener('keydown', event=>
{
  if(event.repeat) return // repeat is a proprty of event. If its true it plays until we leave the keyboardkey. So we exit the function to play once
// console.log(event)
// console.log('down')
const keyCode = e.keyCode
const noteDetail = getNoteDetail(keyCode)


})

document.addEventListener('keyup',event=>{

  console.log(event)
  console.log('up')
})

//function to play the frequency


function getNoteDetail(keyBoardKEy){    // we want to get the individual note based on the key we pressed
                                       //key has a code  (code:keyD or keyG. see at console.log(event))
return NOTE_DETAILS.find(note => `key${note.key}` === keyBoardKEy)

}
