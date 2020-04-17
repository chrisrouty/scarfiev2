import React from 'react';
import { 
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    NumberInput,
} from 'react-admin';

//Create
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

export default ImageCreate;