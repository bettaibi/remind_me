import React, {useEffect, useState} from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const WordsLoadingPage: React.FC = () => {
    const [mode, setMode] = useState<boolean>(false);

    useEffect(() =>{
        let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setMode(matched);
    }, []);

    return (
        <SkeletonTheme color={mode?'#474c52': ''} highlightColor={mode?'#444': ''}>
            <div className="bg-light border rounded p-3 mb-3">
                <p>
                    <Skeleton count={2} /> 
                </p>
                <div className="text-right">
                    <Skeleton style={{width: '100px', height: '30px'}}/> 
                </div>
            </div>
            <Skeleton style={{height: '30px'}} /> 
            <div className="mt-3 bg-light border rounded p-3">
                <Skeleton />
                <p>
                  <Skeleton count={3} className="w-25 ml-2" /> 
                </p>
                <p>
                  <Skeleton className="w-50" />
                  <Skeleton className="w-75" />
                  <Skeleton className="w-100" />
                </p>
                <div className="text-right">
                    <Skeleton className="mr-2" style={{width: '100px', height: '30px'}}/> 
                    <Skeleton style={{width: '100px', height: '30px'}}/> 
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default WordsLoadingPage;
