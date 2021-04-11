import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { NewIdiom } from './NewIdom';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';
import { EditIdiom } from './EditIdiom';
import { useToggleState } from '../../../components/useToggleState';
import { Dialog } from '../../../components/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, IdiomsModel } from '../../../model/app.model';
import { getIdioms } from '../../../store/actions/idioms.actions';

export const Idioms: React.FC = () => {

    const idioms = useSelector((appState: AppState) => appState.idioms);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        let data: IdiomsModel[] =  [
            {id:'ds', label: 'collaboration', explication:''},
            {id:'ds', label: 'weakness',  explication: '' },
        ];
        dispatch(getIdioms(data));
    }

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}

            <NewItemContainer />

            <PaginatedFiltrableList dataSource={idioms}>
                {
                    (item) => (
                        <Word idiom={item} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

interface IdiomProps {
    idiom: any;
}

const Word: React.FC<IdiomProps> = ({ idiom }) => {

    return (
        <React.Fragment>
            <ItemContent idiom={idiom} />

            <div className="text-right">
                <EditItemContainer idiom = {idiom} />
                <RemoveItemContainer idiom = {idiom} />
            </div>
        </React.Fragment>
    )
}

const ItemContent: React.FC<IdiomProps> = ({ idiom }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditItemContainer: React.FC<IdiomProps> = ({ idiom }) => {
    const { show, handleHide, handleShow } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleShow}>Update</Button>

            <Dialog show={show} headerText="Edit Idiom" handleClose={handleHide} centered={false}>
                <EditIdiom idiom={idiom} handleToogle={handleHide} />
            </Dialog>
        </React.Fragment>
    )
};

const NewItemContainer= () => {
    const { show, handleHide, handleShow } = useToggleState();

    return (
        <React.Fragment>
            
            <div className="border rounded p-3 bg-light mb-3">
                    <p >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <div className="text-right">
                        <Button variant="primary" size="sm" onClick={handleShow}>New Idiom</Button>
                    </div>
            </div>

            <Dialog show={show} headerText="New Idiom" handleClose={handleHide} centered={false}>
                <NewIdiom handleToogle={handleHide} />
            </Dialog>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<IdiomProps> = ({idiom}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this Idiom? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    function onConfirm() {
        console.log("Confirm Clicked");
        toggleConfirmMessage();
    }

    const removeItem = () => {
        toggleConfirmMessage();
    }

    return (
        <React.Fragment>
            <Button variant="danger" size="sm" onClick={removeItem}>Remove</Button>
            <ConfirmDialog />
        </React.Fragment>
    )
}
