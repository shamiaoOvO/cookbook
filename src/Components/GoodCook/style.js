import styled from "styled-components";

export const Title = styled.div`
    line-height: 0.4rem;
    height: 0.4rem;
    background-color: #ffffff;
    font-size: 0.13rem;
    padding-left: 0.1rem;
    color: #c0c0c0;
    margin-top: 0.1rem;
`;

export const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Dl = styled.dl`
    width: calc(50% - 0.1rem);
    background: #fff;
    margin-left: 0.05rem;
    margin-right: 0.05rem;
    margin-bottom: 0.1rem;
    dt {
        img {
            width: 100%;
        }
    }
`;

export const Dd = styled.dd`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.1rem;
    h3 {
        font-size: 0.16rem;
    }
    p {
        font-size: 0.12rem;
        color: #c0c0c0;
        margin-top: 0.08rem;
    }
`;

export const Box = styled.div`
    overflow-x: hidden;
    height: 100vh;
`;

export const HeaderMsg = styled.div`
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
`;

export const TitleMsg = styled.p`
    font-size: 30px;
    font-weight: 700;
`;

export const Like = styled.p`
    color: rgb(174, 174, 174);
    font-size: 18px;
`;

export const LikeIt = styled.div`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    background-color: rgb(255, 107, 15);
    color: #fff;
    font-size: 22px;
    line-height: 50px;
    text-align: center;
    margin-top: 20px;
`;

export const Main = styled.div`
    margin-top: 10px;
    background-color: #fff;
    padding: 25px 15px;
    font-size: 20px;
`;

export const Use = styled.p`
    font-weight: 800;
    margin: 15px 0 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(243, 243, 243);
`;

export const UseList = styled.li`
    display: flex;
    border-bottom: 1px solid rgb(243, 243, 243);
    padding: 10px 15px 10px;
    span {
        flex: 1;
    }
    span:nth-of-type(2) {
        color: rgb(149, 149, 149);
    }
`;

export const Makes = styled.li`
    margin: 20px 0;
    list-style: none;
    p {
        margin-bottom: 5px;
    }
    img {
        width: 100%;
    }
`;
