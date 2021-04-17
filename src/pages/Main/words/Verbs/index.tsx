import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewVerb } from './NewVerb';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditVerb } from './EditVerb';
import { useToggleState } from '../../../../components/useToggleState';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../model/app.model';
import { deleteVerb, getVerbs } from '../../../../store/actions/verb.actions';
import { useCache, Collections } from '../../../../cache';
import { useSharedContext } from '../../../../Context';
import { WordEditProps, WordRemoveProps, wordsProps } from '../shared/words.model';
import WordContent from '../shared/WordContent';

const Verbs: React.FC = () => {
    
    const verbs = useSelector((state: AppState) => state.verbs);
    const { dispatch } = useSharedContext();
    const { find, findOneAndUpdate, findOneAndDelete, saveByKey } = useCache(Collections.VERBS);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getVerbs(res.data));
            }
            else {
                console.log(res.message)
            }
        })
        .catch(err => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>

            <Subject
                title="New Verb"
                definition="
                    A verb is a word to describe an action, state or occurrence, and forming the main part of a sentence.
                ">
                {
                    (handleToggle) => (
                        <NewVerb handleToogle={handleToggle} saveByKey = {saveByKey} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={verbs}>
                {
                    (item) => (
                        <Verb word={item} findOneAndUpdate = {findOneAndUpdate} findOneAndDelete = {findOneAndDelete} />
                    )
                }
            </PaginatedFiltrableList>
        </React.Fragment>
    )
};

const Verb: React.FC<wordsProps> = ({ word, findOneAndDelete, findOneAndUpdate }) => {

    return (
        <React.Fragment>
            <WordContent word={word} />

            <div className="text-right mt-3">
                <EditVerbContainer word={word} findOneAndUpdate = {findOneAndUpdate}/>
                <RemoveVerbContainer word={word} findOneAndDelete = {findOneAndDelete} />
            </div>
        </React.Fragment>
    )
}

const EditVerbContainer: React.FC<WordEditProps> = ({ word, findOneAndUpdate }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditVerb findOneAndUpdate = {findOneAndUpdate} verb={word} handleToggle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveVerbContainer: React.FC<WordRemoveProps> = ({ word, findOneAndDelete}) => {
    const { dispatch } = useSharedContext();
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this verb? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try {
            const res = await findOneAndDelete(word.id || '');
            if (res.success) {
                toggleConfirmMessage();
                setTimeout(() => {
                    dispatch(deleteVerb(word.id || ''));
                }, 0);
            }
        }
        catch (err) {
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

export default Verbs;