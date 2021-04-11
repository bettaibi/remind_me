import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewAdjective } from './NewAdjective';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditAdjective } from './EditAdjective';
import { useToggleState } from '../../../../components/useToggleState';
import { useDispatch, useSelector } from 'react-redux';
import { AdjectiveModel, AppState } from '../../../../model/app.model';
import { getAdjectives } from '../../../../store/actions/adjectives.actions';

export const Adjectives: React.FC = () => {
    
    const adjectives = useSelector((appState: AppState) => appState.adjectives);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        let data: AdjectiveModel[] =  [
            {id:'ds',comparative: '', superlative: '', label: 'collaboration',synonyms: [], definition:'',examples:[], translation:'', spelling:'' },
            {id:'ds',comparative: '', superlative: '',  label: 'weakness',synonyms: [], definition:'',examples:[], translation:'', spelling:'' },
        ];
        dispatch(getAdjectives(data));
    }

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}

            <Subject
                title="New Adjective"
                definition="
                    A noun is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewAdjective handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={adjectives}>
                {
                    (item) => (
                        <Word adjective={item} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

interface AdjectiveProps {
    adjective: any;
}

const Word: React.FC<AdjectiveProps> = ({ adjective }) => {

    return (
        <React.Fragment>
            <ItemContent adjective={adjective} />

            <div className="text-right">
                <EditItemContainer adjective = {adjective} />
                <RemoveItemContainer adjective = {adjective} />
            </div>
        </React.Fragment>
    )
}

const ItemContent: React.FC<AdjectiveProps> = ({ adjective }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditItemContainer: React.FC<AdjectiveProps> = ({ adjective }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditAdjective adjective={adjective} handleToogle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<AdjectiveProps> = ({adjective}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this Adjective? This cannot be undone.',
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
