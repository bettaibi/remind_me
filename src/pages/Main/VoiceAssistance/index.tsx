import React, {useState, useEffect, useRef} from 'react';
import { Form } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';

export const VoiceAssistance: React.FC = () => {
    const synthRef  = useRef(window.speechSynthesis);
    const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [text, setText] = useState<string>('Hello, How it is going?');

    useEffect(()=>{
        const EnVoices = synthRef.current
        .getVoices()
        .filter((voice) => voice.lang.includes("en"));

        console.log(EnVoices);
        setVoices(EnVoices);
    }, [])

    const voiceChangeHandler = (e: any) =>{
        try{
            e.preventDefault();
            const index = e.target.value;
            setCurrentVoice(voices[index]);
        }
        catch(err){
            throw err;
        }
    }

    const textChangeHandler = (e: any) =>{
        try{
            e.preventDefault();
            setText(e.target.value);
        }
        catch(err){
            throw err;
        }
    }

    const testHandler = (e: any) =>{
        try{
            e.preventDefault();
            let utterThis: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(text);
            utterThis.voice = currentVoice;
            synthRef.current.speak(utterThis);
        }
        catch(err){
            throw err;
        }
    }

    const saveHandler = (e: any) =>{
        try{
            e.preventDefault();
        }
        catch(err){
            throw err;
        }
    };


    return (
        <Form>
            <div className="bg-secondary p-1 text-light rounded mb-3">
               Your Assistant's voice configuration
            </div>
             <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Voice Text</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write Something to test" value={text}
                onChange={textChangeHandler} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select A Voice</Form.Label>
                <Form.Control as="select" onChange={voiceChangeHandler}>
                    {
                        voices.map((item:SpeechSynthesisVoice, index: number)=>(
                            <option key={'assistance'+index} value={index}>{item.name}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>

            <div className="text-right">
                <button className="btn btn-success mr-3" onClick={testHandler}><span>Test </span>< VolumeUp size="22" /></button>
                <button className="btn btn-primary" onClick={saveHandler}>Save Changes</button>
            </div>
        </Form>
    )
}
