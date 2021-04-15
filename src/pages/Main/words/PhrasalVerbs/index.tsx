import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewPhrasalVerb } from './NewPhrasalVerb';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditPhrasalVerb } from './EditPhrasalVerb';
import { useToggleState } from '../../../../components/useToggleState';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../model/app.model';
import { deletePhrasalVerb, getPhrasalVerbs } from '../../../../store/actions/phrasalVerb.actions';
import { useSharedContext } from '../../../../Context';
import { useCache, Collections } from '../../../../cache';
import { wordContentProps, WordEditProps, WordRemoveProps, wordsProps } from '../shared/words.model';

const PhrasalVerbs: React.FC = () => {
    const phrasalVerbs = useSelector((appState: AppState) => appState.phrasalVerbs);
    const { dispatch } = useSharedContext();
    const { find, findOneAndUpdate, findOneAndDelete, saveByKey } = useCache(Collections.PHRASALVERBS);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getPhrasalVerbs(res.data));
            }
            else {
                console.log(res.message);
            }
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <React.Fragment>

            <Subject
                title="New Phrasal Verb"
                definition="
                    A noun is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewPhrasalVerb handleToogle={handleToggle} saveByKey = {saveByKey} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={phrasalVerbs}>
                {
                    (item) => (
                        <Word word={item} findOneAndUpdate = {findOneAndUpdate} findOneAndDelete = {findOneAndDelete}  />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

const Word: React.FC<wordsProps> = ({ word, findOneAndUpdate, findOneAndDelete }) => {

    return (
        <React.Fragment>
            <ItemContent word={word} />

            <div className="text-right">
                <EditItemContainer word = {word} findOneAndUpdate = {findOneAndUpdate} />
                <RemoveItemContainer word = {word} findOneAndDelete = {findOneAndDelete} />
            </div>
        </React.Fragment>
    )
}

const ItemContent: React.FC<wordContentProps> = ({ word }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditItemContainer: React.FC<WordEditProps> = ({ word, findOneAndUpdate }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditPhrasalVerb word={word} handleToogle={handleToggle} findOneAndUpdate = {findOneAndUpdate} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<WordRemoveProps> = ({word, findOneAndDelete}) => {
    const { dispatch } = useSharedContext();
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this phrasal verb? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try {
            const res = await findOneAndDelete(word.id || '');
            if (res.success) {
                toggleConfirmMessage();
                setTimeout(() => {
                    dispatch(deletePhrasalVerb(word.id || ''));
                }, 0);
            }
        }
        catch (err) {
            throw err;
        }
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

export default PhrasalVerbs;