import React, { useEffect } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { useConfirmDialog } from '../../../../components/ConfirmDialog';
import { NewVerb } from './NewVerb';
import { Subject } from '../shared/Subject';
import { PaginatedFiltrableList } from '../shared/PaginatedFiltrableList';
import { FullPageContainer } from '../../../../components/FullPageContainer';
import { EditVerb } from './EditVerb';
import { useToggleState } from '../../../../components/useToggleState';
import { useSelector } from 'react-redux';
import { AppState, VerbModal } from '../../../../model/app.model';
import { deleteVerb, getVerbs } from '../../../../store/actions/verb.actions';
import { useCache, Collections } from '../../../../cache';
import { VolumeUp, ChatSquareQuote } from 'react-bootstrap-icons';
import useAssistant from '../../../../components/useAssistant';
import { useSharedContext } from '../../../../Context';

const Verbs: React.FC = () => {

    const verbs = useSelector((state: AppState) => state.verbs);
    const { dispatch } = useSharedContext();
    const { find } = useCache(Collections.VERBS);

    useEffect(() => {
        find().then((res) => {
            if (res.success) {
                dispatch(getVerbs(res.data));
            }
            else {
                console.log(res.message)
            }
        })
            .catch(err => console.error(err))
    }, []);

    return (
        <React.Fragment>

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
    verb: VerbModal;
}

const Verb: React.FC<VerbProps> = ({ verb }) => {

    return (
        <React.Fragment>
            <VerbContent verb={verb} />

            <div className="text-right mt-3">
                <EditVerbContainer verb={verb} />
                <RemoveVerbContainer verb={verb} />
            </div>
        </React.Fragment>
    )
}

interface VerbContentProps {
    verb: VerbModal;
}
const VerbContent: React.FC<VerbContentProps> = ({ verb }) => {
    const { voiceHandler } = useAssistant();

    const spell = () => {
        voiceHandler(verb.label);
    };

    return (
        <React.Fragment>
            <div className="d-flex flex-row justify-content-between mb-2">
                <div>
                    <div className="mb-1">
                        <span className="mr-2 fw-500">Verb:</span>
                        <span className="text-secondary">{verb.label} ({verb.category})</span>
                    </div>
                    <div className="mb-1">
                        <span className="mr-2 fw-500">Past Simple:</span>
                        <span className="text-secondary">{verb.past}</span>
                    </div>
                    <div className="mb-1">
                        <span className="mr-2 fw-500">Past Participal:</span>
                        <span className="text-secondary">{verb.pastParticipal}</span>
                    </div>
                </div>
                <div>
                    <span className="mr-2 text-muted">/{verb.spelling} /</span>
                    <span className="text-muted icons" onClick={spell}>
                        <VolumeUp size="20" />
                    </span>
                </div>
            </div>
            <h6 className="text-dark">Definition</h6>
            <p className="text-secondary">{verb.definition}</p>
            <h6>Examples</h6>
            {
                verb.examples.map((item: string, index: number) => (
                    <p key={verb.id + 'exmp' + index}>
                        <span className="mr-2">
                            <ChatSquareQuote />
                        </span>
                        {
                            item
                        }
                    </p>
                ))
            }
            {
                verb.synonyms[0] !== "" && (
                    <React.Fragment>
                        <h6>Synonyms</h6>
                        <div className="d-flex flex-row flex-wrap">
                            {
                                verb.synonyms.map((synonym: string, i: number) => (
                                    <Badge className="px-2 py-1 mr-2"  variant="primary" key={verb.id + 'synonym' + i}>
                                        {synonym}
                                    </Badge>
                                ))
                            }
                        </div>  
                    </React.Fragment>
                )
            }

        </React.Fragment>
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

const RemoveVerbContainer: React.FC<VerbProps> = ({ verb }) => {
    const { dispatch } = useSharedContext();
    const { findOneAndDelete } = useCache(Collections.VERBS);
    const { ConfirmDialog, toggleConfirmMessage } = useConfirmDialog({
        message: 'Are you sure you want to remove this verb? This cannot be undone.',
        onConfirmClick: onConfirm
    });

    async function onConfirm() {
        try {
            const res = await findOneAndDelete(verb.id || '');
            if (res.success) {
                toggleConfirmMessage();
                setTimeout(() => {
                    dispatch(deleteVerb(verb.id || ''));
                }, 0);
            }
        }
        catch (err) {
            throw err;
        }
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


export default Verbs;