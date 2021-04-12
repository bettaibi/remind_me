import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewVerb } from './NewVerb';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditVerb } from './EditVerb';
import { useToggleState } from '../../../../components/useToggleState';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, VerbModal } from '../../../../model/app.model';
import { deleteVerb, getVerbs } from '../../../../store/actions/verb.actions';
import { useCache, Collections } from '../../../../cache';
import { useSnackbar } from '../../../../components/Snackbar';

export const Verbs: React.FC = () => {
    const verbs = useSelector((state: AppState)=> state.verbs);
    const dispatch = useDispatch();
    const { find } = useCache(Collections.VERBS);
    const { Snackbar, showMsg } = useSnackbar();
    console.log("ddd")
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await find();
                console.log(res)
                if(res.success){
                    dispatch(getVerbs(res.data));
                }
                else{
                    console.log(res.message)
                }
            }
            catch(err){
                throw err;
            }
        }
        
        fetchData();
    }, []);

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}

            <Subject
                title="New Verb"
                definition="
                    A verb is a word to describe an action, state or occurrence, and forming the main part of a sentence.
                ">
                {
                    (handleToggle) => (
                        <NewVerb handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={verbs}>
                {
                    (item) => (
                        <Verb verb={item} showMsg = {showMsg} />
                    )
                }
            </PaginatedFiltrableList>

             <Snackbar />
        </React.Fragment>
    )
};

interface VerbProps {
    verb: VerbModal;
    showMsg: (title: string, message: string, type?: any) => void;
}

const Verb: React.FC<VerbProps> = ({ verb, showMsg }) => {

    return (
        <React.Fragment>
            <VerbContent verb={verb} showMsg = {showMsg} />

            <div className="text-right">
                <EditVerbContainer verb = {verb} showMsg = {showMsg} />
                <RemoveVerbContainer verb = {verb} showMsg = {showMsg} />
            </div>
        </React.Fragment>
    )
}

const VerbContent: React.FC<VerbProps> = ({ verb, showMsg }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditVerbContainer: React.FC<VerbProps> = ({ verb, showMsg }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditVerb verb={verb} handleToggle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveVerbContainer: React.FC<VerbProps> = ({verb, showMsg}) => {
    const { findOneAndDelete } = useCache(Collections.VERBS);
    const dispatch = useDispatch();
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this verb? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try{
            const res = await findOneAndDelete(verb.id || '');
            if(res.success){
                showMsg('Verb removed', 'A verb has been successfully removed');
                dispatch(deleteVerb(verb.id || ''));
                toggleConfirmMessage();
            }
            else{
                showMsg('Failed to remove', res.message, 'danger');
            }
        }
        catch(err){
            throw err;
        }
    }

    const removeVerb = () => {
        toggleConfirmMessage();
    }

    return (
        <React.Fragment>
            <Button variant="danger" size="sm" onClick={removeVerb}>Remove</Button>
            <ConfirmDialog />
        </React.Fragment>
    )
}
