import React from 'react';
import { 
    Edit,
    ReferenceInput,
    SimpleForm,
    SelectInput,
} from 'react-admin';

export const ProductImageEdit = props => ( 
    <Edit {...props}> 
        <SimpleForm>
            <ReferenceInput source="productId" reference="products">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="imageId" reference="images">
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm> 
    </Edit>
);

export default ProductImageEdit;