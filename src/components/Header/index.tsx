import logoImg from '../../assets/logo.svg'
import { Container, Content } from "./styles";
import Modal from 'react-modal'
import {useState} from "react";

interface HeaderProps {
    onOpenNewTransaction: () => void;
}

export function Header({ onOpenNewTransaction } : HeaderProps) {

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="money"/>
                <button onClick={onOpenNewTransaction} type="button">
                    Nova transacao
                </button>
            </Content>
        </Container>
    )

}
