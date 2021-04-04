import React from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewNoun } from './NewNoun';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditNoun } from './EditNoun';
import { useToggleState } from '../../../../components/useToggleState';

export const Nouns: React.FC = () => {
    
    const nouns = [
        { label: 'collaboration' },
        { label: 'weakness' },
        { label: 'sickness' },
        { label: 'performance' },
        { label: 'creativity' },
        { label: 'creation' },
        { label: 'utility' },
        { label: 'happyness' },
        { label: 'skill' }
    ];

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}

            <Subject
                title="New Noun"
                definition="
                    A noun is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewNoun handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={nouns}>
                {
                    (item) => (
                        <Noun noun={item} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

interface NounProps {
    noun: any;
}

const Noun: React.FC<NounProps> = ({ noun }) => {

    return (
        <React.Fragment>
            <NounContent noun={noun} />

            <div className="text-right">
                <EditNounContainer noun = {noun} />
                <RemoveNounContainer noun = {noun} />
            </div>
        </React.Fragment>
    )
}

const NounContent: React.FC<NounProps> = ({ noun }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditNounContainer: React.FC<NounProps> = ({ noun }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditNoun noun={noun} handleToogle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveNounContainer: React.FC<NounProps> = ({noun}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this noun? This cannot be undone.',
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
