import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { FullPageContainer } from '../../../components/FullPageContainer';
import { useToggleState } from '../../../components/useToggleState';
import { AppState, VocabularyModal } from '../../../model/app.model';
import { deleteTopic, getTopics } from '../../../store/actions/topic.actions';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';
import { Subject } from '../words/shared/Subject';
import { EditTopic } from './EditTopic';
import { NewTopic } from './NewTopic';
import { useSharedContext } from '../../../Context';
import { Collections, useCache } from '../../../cache';
import { wordContentProps, WordEditProps, WordRemoveProps, wordsProps } from '../words/shared/words.model';
import { ChatSquareQuote } from 'react-bootstrap-icons';

const Topics: React.FC = () => {

    const topics = useSelector((appState: AppState) => appState.topics);
    const { dispatch } = useSharedContext();
    const { find, findOneAndUpdate, findOneAndDelete, saveByKey } = useCache(Collections.TOPICS);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getTopics(res.data));
            }
            else {
                console.log(res.message);
            }
        })
        .catch(err => console.error(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment >

            <Subject
                title="New Topic"
                definition="
                    Hey dude, What's the topic of today ?
                ">
                {
                    (handleToggle) => (
                        <NewTopic handleToogle={handleToggle} saveByKey={saveByKey} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={topics}>
                {
                    (item) => (
                        <Word word={item} findOneAndUpdate={findOneAndUpdate} findOneAndDelete={findOneAndDelete} />
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

            <div className="text-right mt-3">
                <EditItemContainer word={word} findOneAndUpdate={findOneAndUpdate} />
                <RemoveItemContainer word={word} findOneAndDelete={findOneAndDelete} />
            </div>
        </React.Fragment>
    )
}

const ItemContent: React.FC<wordContentProps> = ({ word }) => {

    return (
        <React.Fragment>
            {
                word?.vocabs && (
                    <React.Fragment>
                        <h6>Related Vocabulary</h6>
                        {
                            word.vocabs.map((item: VocabularyModal, idx: number) => (
                                <details key={word.id + 'details' + idx}>
                                    <summary style={{outline: 'none'}}>{item.name}</summary>
                                    <div className="ml-3">
                                    { item.definition &&  <p className="text-secondary">
                                       "{item.definition}"
                                    </p>}
                                    <p>
                                        <span className="mr-2">
                                            <ChatSquareQuote />
                                        </span>
                                        {item.example}
                                    </p>
                                    </div>
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
                <EditTopic word={word} handleToogle={handleToggle} findOneAndUpdate={findOneAndUpdate} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<WordRemoveProps> = ({ word, findOneAndDelete }) => {
    const { dispatch } = useSharedContext();
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this topic? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try {
            const res = await findOneAndDelete(word.id || '');
            if (res.success) {
                toggleConfirmMessage();
                setTimeout(() => {
                    dispatch(deleteTopic(word.id || ''));
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

export default Topics;