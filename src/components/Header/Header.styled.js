import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 16px;
  max-width: 1280px;
`;

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--tex-logout-color);
  text-transform: capitalize;
`;

export const User = styled.p`
  padding: 0 12px 0 0;
  position: relative;
  &::after {
    content: '';
    display: block;
    top: -4px;
    right: 0;
    height: 30px;
    border: 1px solid var(--tex-logout-color);
    position: absolute;
  }
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const Button = styled.a`
  display: flex;
  gap: 8px;
  padding: 0 0 0 12px;
`;
