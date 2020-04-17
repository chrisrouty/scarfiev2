import React from 'react';
// import RichTextInput from 'ra-input-rich-text';
import { 
    Edit,
    Datagrid,
    TextField,
    EditButton,
    ReferenceField,
    ReferenceInput,
    ReferenceManyField,
    ImageField,
    TextInput,
    SelectInput,
    BooleanInput,
    FormTab,
    TabbedForm,

} from 'react-admin';

//Edit
export const ProductEdit = props => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Détails produit">
                <TextInput source="name" resettable />
                <TextInput source="price" />
                <TextInput source="quantity" />
                <BooleanInput source="state" />
            </FormTab>
            <FormTab label="Contenus">
                <ReferenceInput label="Image Default" source="imageIdDefault" reference="images">
                    <SelectInput optionText="title" /> 
                </ReferenceInput>
                <TextInput source="name" resettable />
                <TextInput source="desc" />
            </FormTab>
            <FormTab label="Déclinaison images" path="image">
                <ReferenceManyField
                    reference="product-images"
                    target="productId"
                >
                    <Datagrid>
                        <TextField source="id" />
                        <ReferenceInput label="Product ID" source="productId" reference="products">
                            <SelectInput optionText="name" />
                        </ReferenceInput>
                        <ReferenceInput label="Image ID" source="imageId" reference="images">
                            <SelectInput optionText="title" />
                        </ReferenceInput>
                        <ReferenceField label="URL" source="imageId" reference="images">
                            <ImageField source="url" />
                        </ReferenceField>
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default ProductEdit;
