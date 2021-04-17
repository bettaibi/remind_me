import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { FullPageContainer } from '../../../components/FullPageContainer';
import { useToggleState } from '../../../components/useToggleState';
import { AppState } from '../../../model/app.model';
import { deleteTense, getTenses } from '../../../store/actions/tenses.actions';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';
import { Subject } from '../words/shared/Subject';
import { EditSentences } from './EditSentences';
import { NewSentences } from './NewSentences';
import { useSharedContext } from '../../../Context';
import { Collections, useCache } from '../../../cache';
import { wordContentProps, WordEditProps, WordRemoveProps, wordsProps } from '../words/shared/words.model';
import { ChatSquareQuote } from 'react-bootstrap-icons';
import { SentenceModal } from '../../../model/app.model';

const TensePractise: React.FC = () => {

    const data = useSelector((appState: AppState) => appState.tenses);
    const { dispatch } = useSharedContext();
    const { find, findOneAndUpdate, findOneAndDelete, saveByKey } = useCache(Collections.TENSES);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getTenses(res.data));
            }
            else {
                console.log(res.message);
            }
        })
        .catch(err => console.error(err));
    }, []);


    return (
        <React.Fragment >
            
            <Subject
                title="Add sentences"
                definition="
                    A Note is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewSentences handleToogle={handleToggle} saveByKey = {saveByKey} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={data}>
                {
                    (item) => (
                        <Word word={item} findOneAndUpdate = {findOneAndUpdate} findOneAndDelete = {findOneAndDelete} />
                    )
                }
            </PaginatedFiltrableList>

    </React.Fragment>
    )
}

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
        <React.Fragment>
            {
                word?.sentences && (
                    <React.Fragment>
                        <h6>All Sentences</h6>
                        {
                            word.sentences.map((item: SentenceModal, idx: number) => (
                                <details key={word.id + 'details' + idx}>
                                    <summary style={{outline: 'none'}}>{item.tense}</summary>
                                    <p className="text-secondary mb-2">
                                       "{item.sentence}"
                                    </p>
                                </details>
                            ))
                        }
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
};

const EditItemContainer: React.FC<WordEditProps> = ({ word, findOneAndUpdate }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditSentences word={word} handleToogle={handleToggle} findOneAndUpdate = {findOneAndUpdate} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<WordRemoveProps> = ({word, findOneAndDelete}) => {
    const { dispatch } = useSharedContext();
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try {
            const res = await findOneAndDelete(word.id || '');
            if (res.success) {
                toggleConfirmMessage();
                setTimeout(() => {
                    dispatch(deleteTense(word.id || ''));
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

export default TensePractise;