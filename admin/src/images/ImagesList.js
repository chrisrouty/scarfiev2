import React from 'react';
import { 
    List,
    Datagrid,
    TextField,
    ImageField,
    BooleanField,
    EditButton,
    NumberField
} from 'react-admin';

//List
export const ImagesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="url" />
            <NumberField source="size" />
            <BooleanField source="state" />
            <EditButton />
        </Datagrid>
    </List>
);

export default ImagesList;