import { useRef, useState} from "react";

function checkVoice(){
    const aVoice = localStorage.getItem('a_voice');
    const defaultVoice = typeof aVoice === 'string'? JSON.parse(aVoice): null;
    return defaultVoice;
}

const UseAssistant = () =>{
   const synthRef  = useRef(window.speechSynthesis);
   const [currentVoice, setCurrentVoice] = useState(checkVoice);

   console.log(currentVoice)

   const setAssistantVoice = () =>{
     localStorage.setItem('a_voice', JSON.stringify(currentVoice));
   }
   
   const changeAssistantVoice = (newVoice: SpeechSynthesisVoice) =>{
    setCurrentVoice(newVoice);
  }

   const voiceHandler = (text: string) => {
        let utterThis: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(text);
        if(currentVoice){
            utterThis.voice = currentVoice;
        }
        synthRef.current.speak(utterThis);
   };

    return {
        currentVoice,
        setAssistantVoice,
        voiceHandler,
        changeAssistantVoice,
        synthRef
    }
};

export default UseAssistant;