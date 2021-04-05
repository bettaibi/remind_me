import React from 'react';
import { Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewAdverb } from './NewAdverb';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditAdverb } from './EditAdverb';
import { useToggleState } from '../../../../components/useToggleState';

export const Adverbs: React.FC = () => {
    
    const adverbs = [
        { label: 'smartly' },
        { label: 'quickly' },
        { label: 'fluency' },
        { label: 'safety' },
        { label: 'strongly' }
    ];

    return (
        <React.Fragment>
            {/* <WordsLoadingPage /> */}

            <Subject
                title="New Adverb"
                definition="
                    A noun is a word used to identify any of a class of people, places or things.
                ">
                {
                    (handleToggle) => (
                        <NewAdverb handleToogle={handleToggle} />
                    )
                }
            </Subject>

            <PaginatedFiltrableList dataSource={adverbs}>
                {
                    (item) => (
                        <Word adverb={item} />
                    )
                }
            </PaginatedFiltrableList>


        </React.Fragment>
    )
};

interface AdverbProps {
    adverb: any;
}

const Word: React.FC<AdverbProps> = ({ adverb }) => {

    return (
        <React.Fragment>
            <ItemContent adverb={adverb} />

            <div className="text-right">
                <EditItemContainer adverb = {adverb} />
                <RemoveItemContainer adverb = {adverb} />
            </div>
        </React.Fragment>
    )
}

const ItemContent: React.FC<AdverbProps> = ({ adverb }) => {
    return (
        <div>
            content
        </div>
    )
};

const EditItemContainer: React.FC<AdverbProps> = ({ adverb }) => {
    const { handleToggle, show } = useToggleState();

    return (
        <React.Fragment>
            <Button className="mr-2" variant="primary" size="sm" onClick={handleToggle}>Update</Button>

            <FullPageContainer show={show}>
                <EditAdverb adverb={adverb} handleToogle={handleToggle} />
            </FullPageContainer>
        </React.Fragment>
    )
};

const RemoveItemContainer: React.FC<AdverbProps> = ({adverb}) => {

    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this Adverb? This cannot be undone.',
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
