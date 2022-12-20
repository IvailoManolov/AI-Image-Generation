import styled from 'styled-components'

export const MainContainer = styled.div`
    background: url("https://images.nightcafe.studio/jobs/TcmcJ1Qcbfxl1g2i7apA/TcmcJ1Qcbfxl1g2i7apA_2x.jpg?tr=w-1600,c-at_max");
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);
    background-size: cover;
    justify-content: center;
    align-items: center;
    caret-color: transparent;
`
export const GlassEffect = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    height:70vh;
    width:30vw;
    background:rgba(255,255,255,0.25);
    box-shadow:0 8px 32px 0 rgba(31,38,135,0.38);
    backdrop-filter:blur(8.5px);
    border-radius:10px;
    color:#fff;
    text-transform:uppercase;
    letter-spacing:0.4rem;
`
export const InitialText = styled.div`
    margin:3rem 0 2rem 0;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    caret-color: gray;
    height:60%;
    width:100%;
    caret-color: transparent;
`
export const ButtonContainer = styled.div`
    margin:1rem 0 2rem 0;
    width:100%;
    caret-color: transparent;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const Horizontal = styled.hr`
    width:90%;
    height:0.3rem;
    border-radius:0.8rem;
    border:none;
    margin:1.5em 0 1rem 0;
    background:linear-gradient(to right, #14163c 0%, #03217b 79%);
    backdrop-filter:blur(25px);
`