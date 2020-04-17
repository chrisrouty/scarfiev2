import React from 'react';
import { 
    List,
    Datagrid, 
    TextField, 
    ReferenceField,
    ImageField
} from 'react-admin';

export const ProductImagesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="productId" reference="products">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="imageId" reference="images">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label="URL" source="imageId" reference="images">
                <ImageField source="url" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export default ProductImagesList;