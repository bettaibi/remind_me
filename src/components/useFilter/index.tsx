import { useState } from "react";

export const useFilter = (dataSource: any[]) => {
    const [term, setTerm] = useState<string>('');

    function filterHandler(){
        if(term === ''){
            return [...dataSource];
        }
        else{
            return [...dataSource.filter((item: any)=> item.label.toLowerCase().includes(term.toLowerCase()))];
        }
    }

    return {
        setTerm,
        filterHandler
    };
}
