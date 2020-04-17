import React from 'react';

import { 
    List,
} from 'react-admin';

//Components
import GridList from './GridList';

//List
export const ProductsList = props => {

    console.log(props);
    return(
    <List {...props}
        sort={{ field: "likes_count", order: "ASC" }}
    >       
        <GridList />

        {/* <Datagrid>
            <NumberField source="id" />
            <ReferenceField label="Image Default" source="imageIdDefault" reference="images">
                <ImageField source="url" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="desc" />
            <NumberField source="quantity" />
            <NumberField source="price" />
            <BooleanField source="state" />
            <NumberField source="likes_count" />
            <DateField source="create_date" />
            <EditButton />
            <ShowButton />
        </Datagrid> */}
    </List>
    );

}

export default ProductsList;

