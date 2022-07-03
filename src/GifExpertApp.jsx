import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Marvel']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);

        // setCategories(['Marvel', ...categories]);
        // setCategories( cat => [...cat, 'Marvel'] );
    };

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory= { onAddCategory }
            />
            { 
                categories.map( (category) => ( 
                    <GifGrid 
                        key={ category } 
                        category={category} 
                    />
                ))
            }

        </>
    )
}
