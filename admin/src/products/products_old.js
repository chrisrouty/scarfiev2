import React from 'react';
import RichTextInput from 'ra-input-rich-text';
import { 
    Edit,
    List,
    Create,
    Show,
    TabbedShowLayout,
    Tab,
    Datagrid,
    TextField,
    DateInput,
    BooleanField,
    EditButton,
    Button,
    Link,
    ShowButton,
    SimpleForm,
    ReferenceField,
    ReferenceInput,
    ReferenceManyField,
    ImageField,
    TextInput,
    SelectInput,
    BooleanInput,
    NumberInput,
    NumberField, 
    DateField,
    FormTab,
    TabbedForm,
    SaveButton,
} from 'react-admin';

const styles = {
    button: {
      marginTop: '1em'
    }
  };

  const API_URL = 'http://localhost:3000';

//List
export const ProductsList = props => (
    <List {...props}>
        <Datagrid>
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
        </Datagrid>
    </List>
);

//Show
export const ProductShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Information général">
                <NumberField source="id" />
                <TextField source="name" />
                <TextField source="desc" />
                <NumberField source="quantity" />
                <ReferenceField label="Image Default" source="imageIdDefault" reference="images">
                    <ImageField source="url" />
                </ReferenceField>
            </Tab>
            <Tab label="Contenu" path="Contenu">
                <TextField source="name" />
                <TextField source="desc" />
            </Tab>
            <Tab label="Les images associés" path="images">
                <ReferenceManyField
                    reference="product-images"
                    target="productId"
                >
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="productId" />
                        <TextField source="imageId" />
                        <ReferenceField label="URL" source="imageId" reference="images">
                            <ImageField source="url" />
                        </ReferenceField>
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
                <ProductCreateRelationImage_button />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

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
                    <SelectInput optionText="url" />
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

//Create
export const ProductCreate = props => (
    <Create {...props}> 
        <SimpleForm>
            <TextInput source="name" />
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
    >
    
    </Button>
);