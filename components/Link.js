import Router from 'next/router';
import styled from 'styled-components';


function onClickHandler (href) {
  return (e) => {
    e.preventDefault()
    Router.push(href)
  }
}
const Anchor = styled.a`
  text-decoration:none;
  cursor:pointer;

  &:hover{
      text-decoration:underline;
  }
`;

const Link = ({ children, href }) => (
  <Anchor href={href} onClick={onClickHandler(href)}>
    {children}
  </Anchor>
)

export default Link
