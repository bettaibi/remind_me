import React from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewVerb } from './NewVerb';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditVerb } from './EditVerb';
import { useToggleState } from '../../../../components/useToggleState';

export const Verbs: React.FC = () => {
    
    const verbs = [
        { label: 'take' },
        { label: 'eat' },
        { label: 'manage' },
        { label: 'create' },
        { label: 'remove' },
        { label: 'delete' },
        { label: 'add' },
        { label: 'kill' },
        { label: 'hate' },
        { label: 'revenge' },
        { label: 'put' },
    ];

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
                        <Verb verb={item} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

interface VerbProps {
    verb: any;
}

const Verb: React.FC<VerbProps> = ({ verb }) => {

    return (
        <React.Fragment>
            <VerbContent verb={verb} />

            <div className="text-right">
                <EditVerbContainer verb = {verb} />
                <RemoveVerbContainer verb = {verb} />
            </div>
        </React.Fragment>
    )
}

const VerbContent: React.FC<VerbProps> = ({ verb }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditVerbContainer: React.FC<VerbProps> = ({ verb }) => {
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

const RemoveVerbContainer: React.FC<VerbProps> = ({verb}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this verb? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    function onConfirm() {
        console.log("Confirm Clicked");
        toggleConfirmMessage();
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
