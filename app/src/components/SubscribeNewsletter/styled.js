import styled from "styled-components";

export const Styled = styled.div`
    input[type='text'] {
        padding: 12px;
        border: none;
        border-radius: 5px;
        &:focus{
            outline: none;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        }
    }
`;