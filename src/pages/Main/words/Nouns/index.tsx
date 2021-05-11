import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewNoun } from './NewNoun';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditNoun } from './EditNoun';
import { useToggle } from '../../../../components/useToggle';
import { AppState } from '../../../../model/app.model';
import { useSelector } from 'react-redux';
import { deleteNoun, getNouns } from '../../../../store/actions/noun.actions';
import { useSharedContext } from '../../../../Context';
import { Collections, useCache } from '../../../../cache';
import { WordEditProps, WordRemoveProps, wordsProps } from '../shared/words.model';
import WordContent from '../shared/WordContent';

const Nouns: React.FC = () => {
    const nouns = useSelector((appState: AppState) => appState.nouns);
    const { dispatch } = useSharedContext();
    const { find, findOneAndUpdate, findOneAndDelete, saveByKey } = useCache(Collections.NOUNS);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getNouns(res.data));
            }
            else {
                console.log(res.message);
            }
        })
        .catch(err => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>

            <Subject
                title="New Noun"
                definition="
                    A noun is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewNoun handleToogle={handleToggle} saveByKey={saveByKey} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={nouns}>
                {
                    (item) => (
                        <Word word={item} findOneAndUpdate={findOneAndUpdate} findOneAndDelete={findOneAndDelete} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

const Word: React.FC<wordsProps> = ({ word, findOneAndUpdate, findOneAndDelete }) => {

    return (
        <React.Fragment>
            <WordContent word={word} />

            <div className="text-right mt-3">
                <EditItemContainer word={word} findOneAndUpdate={findOneAndUpdate} />
                <RemoveItemContainer word={word} findOneAndDelete={findOneAndDelete} />
            </div>
        </React.Fragment>
    )
}

const EditItemContainer: React.FC<WordEditProps> = ({ word, findOneAndUpdate }) => {
    const { handleToggle, show } = useToggle();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditNoun word={word} handleToogle={handleToggle} findOneAndUpdate={findOneAndUpdate} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<WordRemoveProps> = ({ word, findOneAndDelete }) => {
    const { dispatch } = useSharedContext();
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this word? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try {
            const res = await findOneAndDelete(word.id || '');
            if (res.success) {
                toggleConfirmMessage();
                setTimeout(() => {
                    dispatch(deleteNoun(word.id || ''));
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

export default Nouns;