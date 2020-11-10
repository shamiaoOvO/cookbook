import styled from "styled-components";

export const Box = styled.div`
    overflow-x: hidden;
    height: 100vh;
`;

export const List = styled.li`
    display: flex;
    border-bottom: 1px solid rgb(243, 243, 243);
    padding: 10px 10px;
    justify-content: flex-start;
    img {
        width: 170px;
    }
    div {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p:nth-of-type(1) {
            font-size: 20px;
        }
        p:nth-of-type(2) {
            font-size: 16px;
            color: rgb(156, 156, 156);
            width: 230px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 7px 0;
        }
        p:nth-of-type(3) {
            font-size: 14px;
            color: rgb(156, 156, 156);
        }
    }
`;
