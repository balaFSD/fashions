import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
border: 0.05rem solid var(--mainDark);
border-color: ${props => props.cart?'var(--mainYellow)': 'var(--lightBlue)'}
padding: 0.2rem 0.5rem;
border-radius: 0.5rem;
color: var(--mainDark);
cursor: pointer;
margin: 0.2rem 0.5rerm 0.2rem 0;
transistion: all 0.5s ease-in-out;
&:hover{
    background: var(--lightBlue);
    color:var(--mainBlue)
}&:focus{
    outline: none;
}
`;