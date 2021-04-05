import React from 'react';
import { useHistory } from 'react-router-dom';

export const ListOfThings: React.FC = () => {
    const history = useHistory();

    const create = () =>{
        history.push('/home/things/new')
    };

    return (
        <React.Fragment >
            <div className="bg-light border rounded p-3">
                Give names to all things inside a picture.
                <div className="text-right mt-2">
                    <button className="btn btn-primary btn-sm" onClick={create}>Create</button>
                </div>
            </div>

            <div className="bg-light border rounded p-3 mt-3">

            </div>
        </React.Fragment>
    )
}
