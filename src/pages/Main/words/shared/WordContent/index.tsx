import React from 'react';
import { Badge } from 'react-bootstrap';
import { ChatSquareQuote, VolumeUp } from 'react-bootstrap-icons';
import useAssistant from '../../../../../components/useAssistant';
import { wordContentProps } from '../words.model';

const WordContent: React.FC<wordContentProps> = ({ word }) => {
    const { voiceHandler } = useAssistant();

    const spell = () => {
        voiceHandler(word.label);
    };

    return (
        <React.Fragment>
            <div className="d-flex flex-row justify-content-between mb-1">
                <span className="fw-500">Word</span>

                <div>
                    <span className="mr-2 text-muted">/ {word.spelling} /</span>
                    <span className="text-muted icons" onClick={spell}>
                        <VolumeUp size="20" />
                    </span>
                </div>
            </div>
           
            <div className="mb-2">
                <span className="text-secondary">
                    {word.label} {word?.category ? '('+word.category+')': ''}
                    {word?.comparative ? ', ' + word.comparative: ''}
                    {word?.superlative ? ', ' + word.superlative: ''}
                    {word?.past ? ', ' + word.past: ''}
                    {word?.pastParticipal ? ', ' + word.pastParticipal: ''}
                </span>
            </div>

            <h6 className="text-dark">Definition</h6>
            <p className="text-secondary mb-2">{word.definition}</p>
            <h6>Examples</h6>
                {
                    word.examples.map((item: string, index: number) => (
                        <p key={word.id + 'exmp' + index} className="text-secondary mb-2">
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
                  word?.synonyms &&  word.synonyms[0] !== "" && (
                        <React.Fragment>
                            <h6>Synonyms</h6>
                            <div className="d-flex flex-row flex-wrap">
                                {
                                    word.synonyms.map((synonym: string, i: number) => (
                                        <Badge className="px-3 py-1 mr-2" variant="info" key={word.id + 'synonym' + i}>
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

export default WordContent;