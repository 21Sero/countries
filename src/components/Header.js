import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';
import {Link} from "react-router-dom";


const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled(Link).attrs({
    to: "/",
})`
  color: var(--colors-text);
  font-size: 25px;
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
  
`
const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme)

    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title> <span style={{color: "red"}}>FI</span><span style={{color: "#0047ab"}}>ND</span><span style={{color: "orange"}}>ER</span></Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px" />
                        ) : (
                            <IoMoon size="14px" />
                        )}{' '}
                        <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
export default Header;