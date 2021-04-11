import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewLinkers } from './NewLinkers';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditLinkers } from './EditLinkers';
import { useToggleState } from '../../../../components/useToggleState';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, LinkersModel } from '../../../../model/app.model';
import { getLinkers } from '../../../../store/actions/linkers.actions';

export const Linkers: React.FC = () => {
    const linkers = useSelector((appState: AppState) => appState.linkers);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        let data: LinkersModel[] =  [
            {id:'ds', label: 'collaboration',synonyms: [], definition:'',examples:[], translation:'', spelling:'' },
            {id:'ds', label: 'weakness',synonyms: [], definition:'',examples:[], translation:'', spelling:'' },
        ];
        dispatch(getLinkers(data));
    }

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}

            <Subject
                title="New Linker"
                definition="
                    A noun is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewLinkers handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={linkers}>
                {
                    (item) => (
                        <Word linker={item} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

interface LinkerProps {
    linker: any;
}

const Word: React.FC<LinkerProps> = ({ linker }) => {

    return (
        <React.Fragment>
            <ItemContent linker={linker} />

            <div className="text-right">
                <EditItemContainer linker = {linker} />
                <RemoveItemContainer linker = {linker} />
            </div>
        </React.Fragment>
    )
}

const ItemContent: React.FC<LinkerProps> = ({ linker }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditItemContainer: React.FC<LinkerProps> = ({ linker }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditLinkers linkers={linker} handleToogle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<LinkerProps> = ({linker}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this Linker? This cannot be undone.',
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
