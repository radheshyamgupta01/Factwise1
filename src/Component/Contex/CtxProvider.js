import React, { useState } from 'react';
import Ctx from './Ctx';

function CtxProvider({ children }) {
    const [modalState, setModalState] = useState({
        isOpen: false,
        idToDelete: null,
      });
     
      const modalHandlerOpener = ({ isOpen, idToDelete }) => {
        setModalState({ isOpen, idToDelete });
      };
  return (
    <Ctx.Provider value={{ modalState, modalHandlerOpener,}}>
      {children}
    </Ctx.Provider>
  );
}

export default CtxProvider;
