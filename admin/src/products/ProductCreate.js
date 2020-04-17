import React from 'react';

import { 
    Create,
    Button,
    Link,
    SimpleForm,
    TextInput,
    BooleanInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

//Create
export const ProductCreate = props => (
    <Create {...props}> 
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Image Default" source="imageIdDefault" reference="images">
                <SelectInput optionText="title" /> 
            </ReferenceInput>
            <TextInput source="desc" />
            <NumberInput source="quantity" />
            <NumberInput source="price" />
            <BooleanInput source="state" />
            <NumberInput source="likes_count" /> 
        </SimpleForm>
    </Create>
);

//Create Relation produit -> Image
export const ProductCreateRelationImage_button = ({ record }) => (
    <Button
        variant="raised"
        component={ Link }
        to={`/product-images/create?productId=${record.id}`}
        label="Ajouter une image"
        title="Ajouter une image"
    />
);

export default ProductCreate;