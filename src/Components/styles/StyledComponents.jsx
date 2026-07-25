import { styled } from "@mui/material";
import { Link as LinkComponent } from 'react-router-dom'
import { gray } from "../constants/color";

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

