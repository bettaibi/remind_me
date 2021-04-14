import React, { Dispatch, useEffect } from 'react';
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

export const Verbs: React.FC = () => {

    const verbs = useSelector((state: AppState) => state.verbs);
    const dispatch = useDispatch();
    const { find } = useCache(Collections.VERBS);

    useEffect(() => {
        find().then((res)=>{
            if(res.success){
                dispatch(getVerbs(res.data));
            }
            else{
                console.log(res.message)
            }
        })
        .catch(err => console.error(err))
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
                        <NewVerb dispatch = {dispatch} handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={verbs}>
                {
                    (item) => (
                        <Verb dispatch= {dispatch} verb={item} />
                    )
                }
            </PaginatedFiltrableList>
        </React.Fragment>
    )
};

interface VerbProps {
    verb: VerbModal;
    dispatch: Dispatch<any>;
}

const Verb: React.FC<VerbProps> = ({ verb, dispatch }) => {

    return (
        <React.Fragment>
            <VerbContent verb={verb} />

            <div className="text-right">
                <EditVerbContainer verb = {verb} dispatch = {dispatch} />
                <RemoveVerbContainer verb = {verb} dispatch = {dispatch} />
            </div>
        </React.Fragment>
    )
}

interface VerbContentProps {
    verb: VerbModal;
}
const VerbContent: React.FC<VerbContentProps> = ({ verb }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditVerbContainer: React.FC<VerbProps> = ({ verb, dispatch }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditVerb verb={verb} handleToggle={handleToggle} dispatch = {dispatch} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveVerbContainer: React.FC<VerbProps> = ({verb, dispatch}) => {

    const { findOneAndDelete } = useCache(Collections.VERBS);
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this verb? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try{
            const res = await findOneAndDelete(verb.id || '');
            if(res.success){
                toggleConfirmMessage();
                setTimeout(()=>{
                    dispatch(deleteVerb(verb.id || ''));
                },0);
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
