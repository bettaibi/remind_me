import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import WordsLoadingPage from '../../pages/Main/words/shared/WordsLoadingPage';

let mode = sessionStorage.getItem('mode');
console.log(mode)

const AppLoading: React.FC = () => {
    const [mode, setMode] = useState<boolean>(false);

    useEffect(() =>{
        let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setMode(matched);
    }, []);

    return (
        <SkeletonTheme color={mode?'#474c52': ''} highlightColor={mode?'#444': ''}>
            <div className="status-bar bg-primary text-light py-1">
                <div className="container d-flex justify-content-between align-items-center h-100">
                    <Skeleton style={{ width: '200px' }} />
                    <Skeleton style={{ width: '60px' }} />
                </div>
            </div>
            <header className="header shadow-sm bg-white">
                <Container className="h-100 w-100 d-flex flex-row justify-content-between align-items-center">
                    <Skeleton width={55} height={35} />
                    <Skeleton width={55} height={35} />
                    <Skeleton width={55} height={35} />
                    <Skeleton width={55} height={35} />
                </Container>
            </header>
            <Container>
                <Row>
                    <Col className="display-xs-none rounded mt-3 mb-3 border py-3 bg-light"
                        sm={4}>
                         <Skeleton/>
                         <div className="py-2 px-3 mx-2 d-flex flex-column">
                            <Skeleton className="w-100 mx-3" count={6} />
                         </div>
                        <div className="py-2">
                            <Skeleton count={2} />
                        </div>
                        <div className="py2">
                            <Skeleton count={2} />
                        </div>
                    </Col>
                    <Col className="mb-3 mt-3">
                       <WordsLoadingPage />
                    </Col>
                </Row>
            </Container>
        </SkeletonTheme>
    )
}

export default AppLoading
