import React, {useState} from 'react';
import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";
import {NewTransactionModal} from "./components/NewTransactionModal";

export function App() {

    const [isNewTransactionModalOpen, setIsisNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal () {
        setIsisNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal () {
        setIsisNewTransactionModalOpen(false)
    }
  return (
    <>
     <Header onOpenNewTransaction={handleOpenNewTransactionModal} />
     <Dashboard/>
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
     <GlobalStyle/>
    </>
  );
}


