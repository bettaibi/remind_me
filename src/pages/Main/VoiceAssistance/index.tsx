import React, {useState} from 'react';
import { Form, Alert } from 'react-bootstrap';
import { VolumeUp } from 'react-bootstrap-icons';
import UseAssistant from '../../../components/useAssistant';

const VoiceAssistance: React.FC = () => {
    const { setAssistantVoice, voiceHandler, changeAssistantVoice, currentVoice, voices} = UseAssistant();
    const [text, setText] = useState<string>('Hello, How is it going?');

    const voiceChangeHandler = (e: any) =>{
        try{
            e.preventDefault();
            changeAssistantVoice(e.target.value);
        }
        catch(err){
            throw err;
        }
    }

    const textChangeHandler = (e: any) => {
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
            voiceHandler(text);
        }
        catch(err){
            throw err;
        }
    }

    const saveHandler = (e: any) =>{
        try{
            e.preventDefault();
            setAssistantVoice();
        }
        catch(err){
            throw err;
        }
    };


    return (
        <Form>
            <Alert className=" p-2 mb-3" variant="info">
                Set up your assistance voice configuration
            </Alert>
             <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Voice Text</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write Something to test" value={text}
                onChange={textChangeHandler} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select A Voice</Form.Label>
                <Form.Control as="select" onChange={voiceChangeHandler} value={currentVoice}>
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

export default VoiceAssistance;
