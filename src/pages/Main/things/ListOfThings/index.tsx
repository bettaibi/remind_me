import React from 'react';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import { PicThingsModel } from '../../../../model/app.model';

import pic from '../../../../assets/img/exp.jpg';
import { FilrableGrid } from '../../words/shared/FilrableGrid';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';

export const ListOfThings: React.FC = () => {
    const history = useHistory();

    const things: PicThingsModel[] = [
        { label: 'Recipe', picture: pic, things: [] },
        { label: 'salad', picture: pic, things: [] },
        { label: 'garlic', picture: pic, things: [] },
        { label: 'onions', picture: pic, things: [] },
        { label: 'Recipe', picture: pic, things: [] },
        { label: 'salad', picture: pic, things: [] },
        { label: 'garlic', picture: pic, things: [] },
        { label: 'onions', picture: pic, things: [] },
        { label: 'Recipe', picture: pic, things: [] },
        { label: 'salad', picture: pic, things: [] },
        { label: 'garlic', picture: pic, things: [] },
        { label: 'onions', picture: pic, things: [] },
    ];

    const create = () => {
        history.push('/home/things/new')
    };

    return (
        <React.Fragment >
            <div className="bg-light border rounded p-3">
                Give names to all things inside a picture.
                <div className="text-right mt-2">
                    <button className="btn btn-primary btn-sm" onClick={create}>
                        Create
                    </button>
                </div>
            </div>

            <Things dataSource={things} />
        </React.Fragment>
    )
}

interface ThingsProps {
    dataSource: PicThingsModel[];
}

const Things: React.FC<ThingsProps> = ({ dataSource }) => {

    return (
        <FilrableGrid dataSource = {dataSource}>
            {
                (item) => (
                    <Thing thing={item} />
                )
            }
        </FilrableGrid>
    )
}

interface ThingProp {
    thing: PicThingsModel;
}

const Thing: React.FC<ThingProp> = ({ thing }) => {

    return (
        <React.Fragment>
            <div className="pic-container rounded overflow-hidden" style={{backgroundColor: 'lightgray'}}>
                <img src={thing.picture} alt="thing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="pic-actions">
                   <RemoveContainer thing = {thing} />
                </div>
            </div>
        </React.Fragment>
    )
}

const RemoveContainer: React.FC<ThingProp> = ({thing}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this Pic? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    function onConfirm() {
        console.log("Confirm Clicked");
        toggleConfirmMessage();
    }

    return (
        <React.Fragment>
             <Button variant="light" className="rounded-circle d-flex "  onClick={toggleConfirmMessage}
                    style={{width: '40px', height:'40px'}}>
                        <Trash className="align-self-center" size="22" />
             </Button>
            <ConfirmDialog />
        </React.Fragment>
    )
}


