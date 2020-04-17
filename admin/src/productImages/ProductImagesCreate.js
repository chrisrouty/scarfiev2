import React from 'react';
import { 
    Create,
    ReferenceInput,
    SimpleForm,
    SelectInput,
} from 'react-admin';

import { parse } from 'query-string';

export const ProductImageCreate = props => {
    // Read the post_id from the location which is injected by React Router and passed to our component by react-admin automatically
    const { productId: productId_string } = parse(props.location.search);
    const productId = productId_string ? parseInt(productId_string, 10) : '';
    const redirect = productId ? `/posts/${productId}/show/comments` : false;

    return(
        <Create {...props}> 
            <SimpleForm
                defaultValue={{ productId }}
                redirect={redirect}
            >
                <ReferenceInput source="productId" reference="products">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput source="imageId" reference="images"> 
                    <SelectInput optionText="title" />
                </ReferenceInput>
            </SimpleForm> 
        </Create>
    );
};

export default ProductImageCreate;