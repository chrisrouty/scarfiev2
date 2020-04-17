import React from 'react';
import { 
    Edit,
    List,
    Create,
    Datagrid,
    TextField,
    ImageField,
    BooleanField,
    EditButton,
    SimpleForm,
    TextInput,
    BooleanInput,
    NumberInput,
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

//Edit
export const ImageEdit = props => (
    <Edit {...props}> 
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="url" />
            <NumberInput source="size" />
            <BooleanInput source="state" />
        </SimpleForm>
    </Edit>
);

export const ImageCreate = props => (
    <Create {...props}> 
        <SimpleForm>
            <TextInput source="title" /> 
            <TextInput source="url" />
            <NumberInput source="size" />
            <BooleanInput source="state" />
        </SimpleForm>
    </Create>
);