import React from 'react';
import { 
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    BooleanInput,
} from 'react-admin';

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

export default ImageEdit;