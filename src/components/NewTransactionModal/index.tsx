import Modal from "react-modal";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen , onRequestClose } : NewTransactionModalProps ) {
    return (
        <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
            <h2>
                Cadastrar transacao
            </h2>
        </Modal>
    )
}
