import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../components/ConfirmDialog';
import { NewIdiom } from './NewIdom';
import { PaginatedFiltrableList } from '../words/shared/PaginatedFiltrableList';
import { EditIdiom } from './EditIdiom';
import { useToggleState } from '../../../components/useToggleState';
import { Dialog } from '../../../components/Dialog';
import { useSelector } from 'react-redux';
import { AppState } from '../../../model/app.model';
import { deleteIdiom, getIdioms } from '../../../store/actions/idioms.actions';
import { useSharedContext } from '../../../Context';
import { Collections, useCache } from '../../../cache';
import { wordContentProps, WordEditProps, WordRemoveProps, wordsProps } from '../words/shared/words.model';
import { useSnackbar } from '../../../components/Snackbar';

const Idioms: React.FC = () => {

    const idioms = useSelector((appState: AppState) => appState.idioms);
    const { dispatch } = useSharedContext();
    const { find, findOneAndUpdate, findOneAndDelete, saveByKey } = useCache(Collections.IDIOMS);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getIdioms(res.data));
            }
            else {
                console.log(res.message);
            }
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <React.Fragment>

            <NewItemContainer saveByKey = {saveByKey} />

            <PaginatedFiltrableList dataSource={idioms}>
                {
                    (item) => (
                        <Word word={item} findOneAndUpdate = {findOneAndUpdate} findOneAndDelete = {findOneAndDelete} />
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
    const { show, handleHide, handleShow } = useToggleState();
    const {Snackbar, showMsg} = useSnackbar();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleShow}>Update</Button>

            <Dialog show={show} headerText="Edit Idiom" handleClose={handleHide} centered={false}>
                <EditIdiom word={word} handleToogle={handleHide} findOneAndUpdate = {findOneAndUpdate} showMsg = {showMsg} />
            </Dialog>
            <Snackbar />
        </React.Fragment>
    )
};

interface NewItemProps{
    saveByKey: (obj: any, id: string) => any;
}
const NewItemContainer: React.FC<NewItemProps> = ({saveByKey}) => {
    const { show, handleHide, handleShow } = useToggleState();
    const {Snackbar, showMsg} = useSnackbar();

    return (
        <React.Fragment>
            
            <div className="border rounded p-3 bg-light mb-3">
                    <p >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <div className="text-right">
                        <Button variant="primary" size="sm" onClick={handleShow}>New Idiom</Button>
                    </div>
            </div>

            <Dialog show={show} headerText="New Idiom" handleClose={handleHide} centered={false}>
                <NewIdiom handleToogle = {handleHide} saveByKey = {saveByKey} showMsg = {showMsg} />
            </Dialog>
            <Snackbar />
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<WordRemoveProps> = ({word, findOneAndDelete}) => {
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
                    dispatch(deleteIdiom(word.id || ''));
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

export default Idioms;
