import { useState } from "react";

export const useFilter = (dataSource: any[]) => {
    const [filtredArr, setFiltredArr] = useState<any[]>(dataSource);

    const newFilter = (term: string) =>{
        if(term === ''){
            setFiltredArr(dataSource);
        }
        else{
            let newArr = [...dataSource.filter((item: any)=> item.label.toLowerCase().includes(term.toLowerCase()))]
            setFiltredArr(newArr);
        }
    }


    return{
        filtredArr,
        newFilter
    };
}
