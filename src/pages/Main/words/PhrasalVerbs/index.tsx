import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewPhrasalVerb } from './NewPhrasalVerb';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditPhrasalVerb } from './EditPhrasalVerb';
import { useToggleState } from '../../../../components/useToggleState';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, PhrasalModel } from '../../../../model/app.model';
import { getPhrasalVerbs } from '../../../../store/actions/phrasalVerb.actions';

export const PhrasalVerbs: React.FC = () => {
    const phrasalVerbs = useSelector((appState: AppState) => appState.phrasalVerbs);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        let data: PhrasalModel[] =  [
            {id:'ds', label: 'give up', definition:'',examples:[], translation:'', spelling:'' },
            {id:'ds', label: 'figure out', definition:'',examples:[], translation:'', spelling:'' },
        ];
        dispatch(getPhrasalVerbs(data));
    }

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}

            <Subject
                title="New Phrasal Verb"
                definition="
                    A noun is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewPhrasalVerb handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={phrasalVerbs}>
                {
                    (item) => (
                        <Word phrasalVerb={item} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

interface PhrasalVerbProps {
    phrasalVerb: any;
}

const Word: React.FC<PhrasalVerbProps> = ({ phrasalVerb }) => {

    return (
        <React.Fragment>
            <ItemContent phrasalVerb={phrasalVerb} />

            <div className="text-right">
                <EditItemContainer phrasalVerb = {phrasalVerb} />
                <RemoveItemContainer phrasalVerb = {phrasalVerb} />
            </div>
        </React.Fragment>
    )
}

const ItemContent: React.FC<PhrasalVerbProps> = ({ phrasalVerb }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditItemContainer: React.FC<PhrasalVerbProps> = ({ phrasalVerb }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditPhrasalVerb phrasalVerb={phrasalVerb} handleToogle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<PhrasalVerbProps> = ({phrasalVerb}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this phrasal verb? This cannot be undone.',
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
