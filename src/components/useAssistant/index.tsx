import { useRef, useState, useEffect} from "react";

function checkVoice(){
    const aVoice = localStorage.getItem('a_voice');
    const defaultVoice = typeof aVoice === 'string'? parseInt(aVoice): 0;
    return defaultVoice;
}

const useAssistant = () =>{
   const synthRef  = useRef(window.speechSynthesis);
   const [currentVoice, setCurrentVoice] = useState<number>(checkVoice);
   const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

   useEffect(()=>{
    const x = setTimeout(()=>{
      const EnVoices = synthRef.current
      .getVoices()
      .filter((voice) => voice.lang.includes("en"));

      setVoices(EnVoices);
    }, 2000);

    return ()=>{clearTimeout(x)}
  }, []);

   const setAssistantVoice = () =>{
     localStorage.setItem('a_voice', currentVoice.toString());
   }
   
   const changeAssistantVoice = (newIndex: number) =>{
    setCurrentVoice(newIndex);
  }

   const voiceHandler = (text: string) => {
        let utterThis: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(text);
        if(currentVoice){
            utterThis.voice = voices[currentVoice];
        }
        synthRef.current.speak(utterThis);
   };

    return {
        currentVoice,
        setAssistantVoice,
        voiceHandler,
        changeAssistantVoice,
        voices
    }
};

export default useAssistant;