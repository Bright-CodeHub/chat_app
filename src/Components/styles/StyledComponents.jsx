import { styled } from "@mui/material";
import { Link as LinkComponent } from 'react-router-dom'
import { black, blackHover, gray, gray3, gray4 } from "../constants/color";

export const VisuallyHiddenInput = styled('input')({
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
})

export const Link = styled(LinkComponent)({
    textDecoration: 'none',
    color: "black",
    padding: '1rem',
    borderRadius: '50px',
    ":hover": {
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
})

export const InputBox = styled('input')({
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    padding: '1.1rem 2.5rem',
    borderRadius: '1.5rem',
    backgroundColor: gray,
})

export const SearchField = styled('input')({
    padding: '1rem 1.2rem',
    border: 'none',
    borderRadius: '1.5rem',
    outline: 'none',
    backgroundColor: gray4,
})

export const CurveButton = styled('button')({
    borderRadius: '1.5rem',
    border: 'none',
    outline: 'none',
    fontSize:'1rem',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: black,
    ":hover": {
        backgroundColor: blackHover
    }
})