import Modal from "react-modal";
import {Container} from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen , onRequestClose } : NewTransactionModalProps ) {
    return (
        <Modal
            onRequestClose={onRequestClose}
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
           <Container>
               <h2>
                   Cadastrar transacao
               </h2>
               <input placeholder="Título"/>
               <input type="number" placeholder="Valor"/>
               <input  placeholder="Categoria"/>
               <button type="submit" >Cadastrar</button>
           </Container>
        </Modal>
    )
}
