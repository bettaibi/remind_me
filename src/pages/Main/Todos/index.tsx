import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Collections, useCache } from '../../../cache';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { Dialog } from '../../../components/Dialog';
import { useSnackbar } from '../../../components/Snackbar';
import { useToggleState } from '../../../components/useToggleState';
import { useSharedContext } from '../../../Context';
import { AppState } from '../../../model/app.model';
import { deleteTodo, getTodos } from '../../../store/actions/todos.actions';
import { EditTodo } from './EditTodos';
import { NewTodo } from './NewTodo';
import { WordEditProps, WordRemoveProps, wordsProps } from '../words/shared/words.model';
import { VolumeUp } from 'react-bootstrap-icons';
import useAssistant from '../../../components/useAssistant';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';

const Todos: React.FC = () => {
    const todos = useSelector((appState: AppState) => appState.todos);
    const { dispatch } = useSharedContext();
    const { find, findOneAndUpdate, findOneAndDelete, saveByKey } = useCache(Collections.TODOS);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getTodos(res.data));
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
            <AddTodoContainer saveByKey={saveByKey} recordsNumber = {todos.length} />

            <PaginatedFiltrableList dataSource={todos}>
                {
                    (item) => (
                        <Todo word={item} findOneAndUpdate={findOneAndUpdate} findOneAndDelete={findOneAndDelete} />
                    )
                }
            </PaginatedFiltrableList>

        </React.Fragment>
    )
}

const Todo: React.FC<wordsProps> = ({ word, findOneAndUpdate, findOneAndDelete }) => {
    const { voiceHandler } = useAssistant();

    const spellWord = () => {
        try {
            voiceHandler(word.label);
        }
        catch (err) {
            throw err;
        }
    }

    return (
        <React.Fragment>
            <p className="text-secondary">
                {word?.description}
            </p>

            <div className="text-right mt-3">
                <EditItemContainer word={word} findOneAndUpdate={findOneAndUpdate} />
                <RemoveItemContainer word={word} findOneAndDelete={findOneAndDelete} />
                <button className="btn btn-outline-secondary btn-sm ml-2" onClick = {spellWord}>
                    <span className="mr-1">Spell</span>
                    <VolumeUp size="18" />
                </button>
            </div>
        </React.Fragment>
    )
}

interface NewItemProps {
    saveByKey: (obj: any, id: string) => any;
    recordsNumber: number;
}

const AddTodoContainer: React.FC<NewItemProps> = ({ saveByKey, recordsNumber }) => {
    const { show, handleHide, handleShow } = useToggleState();
    const { Snackbar, showMsg } = useSnackbar();

    return (
        <React.Fragment>
            <div className="mb-3 d-flex flex-row justify-content-between align-items-center">
                <span className="text-muted">RESULTS: {recordsNumber}</span>
                <Button onClick={handleShow} size="sm">ADD A NEW TODO</Button>
            </div>

            <Dialog show={show} headerText="New TODO" handleClose={handleHide} centered={false}>
                <NewTodo handleToogle={handleHide} saveByKey={saveByKey} showMsg={showMsg} />
            </Dialog>
            <Snackbar />
        </React.Fragment>
    )
}

const EditItemContainer: React.FC<WordEditProps> = ({ word, findOneAndUpdate }) => {
    const { show, handleHide, handleShow } = useToggleState();
    const { Snackbar, showMsg } = useSnackbar();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleShow}>Update</Button>

            <Dialog show={show} headerText="Edit TODO" handleClose={handleHide} centered={false}>
                <EditTodo word={word} handleToogle={handleHide} findOneAndUpdate={findOneAndUpdate} showMsg={showMsg} />
            </Dialog>
            <Snackbar />
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<WordRemoveProps> = ({ word, findOneAndDelete }) => {
    const { dispatch } = useSharedContext();
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this Idiom? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try {
            const res = await findOneAndDelete(word.id || '');
            if (res.success) {
                toggleConfirmMessage();
                setTimeout(() => {
                    dispatch(deleteTodo(word.id || ''));
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

export default Todos
