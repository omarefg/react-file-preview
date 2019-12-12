import styled from 'styled-components'

export const PdfMenuStyles = styled.span`
    .buttons-container {
        padding: 0 30px;
        margin: 10px 0;
        display: flex;
        justify-content: center;
    }

    .button {
        margin: 0 5px;
        padding: 8px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        outline: none;
        font-size: 1.1em;
    }

    .button:hover {
        background-color: rgba(221, 221, 221, .5);
    }

    .input {
        width: 25px;
        border-radius: 5px;
        border: 0;
        background: #dddddd;
        outline: none;
        padding: 8px;
        margin: 0 5px;
        font-weight: bold;
    }
`
