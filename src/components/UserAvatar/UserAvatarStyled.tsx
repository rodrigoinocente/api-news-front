import styled from "styled-components";

export const UserAvatarContiner = styled.div<{ size?: string }>`

img {
    width: ${({ size }) => size};
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    }
`