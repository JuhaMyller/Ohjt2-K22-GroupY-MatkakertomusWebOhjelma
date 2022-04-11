import React, {
  createContext,
  useRef,
  useEffect,
  useReducer,
  useContext,
} from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './Modal.css';
import { AiOutlineClose } from 'react-icons/ai';
import reducer from './ModalReducer';

const ModalContext = createContext();

const initialState = {
  isOpen: false,
  template: null,
  title: '',
  canClose: true,
};

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const root = useRef(null);
  const modal = useRef(null);

  const handleBackDropClick = (event) => {
    if (!state.canClose) return;
    if (modal && modal.current.contains(event.target)) return;
    closeModal();
  };

  const closeModal = () => {
    if (!state.isOpen) return;
    const node = ReactDOM.findDOMNode(modal.current);
    node.classList.toggle('closeModal');
    const timeout = setTimeout(() => {
      dispatch({ type: 'CLOSE_MODAL' });
    }, 300);
    return () => clearTimeout(timeout);
  };
  //options: !template, title, canClose
  const openModal = (options) => {
    if (!options.template) throw new Error(`Modal template is missing`);
    dispatch({ type: 'OPEN_MODAL', payload: { ...options } });
  };

  useEffect(() => {
    root.current = document.createElement('div');
    root.current.id = '__react-modal';
    document.body.appendChild(root.current);
  }, []);

  return (
    <ModalContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
      {root.current &&
        state.isOpen &&
        createPortal(
          <>
            <div onMouseDown={handleBackDropClick} className="backdrop">
              <div ref={modal} className="modal">
                {!state.title && !state.canClose ? null : (
                  <div
                    className={
                      state.title
                        ? 'withTitle titleAndClosebtn'
                        : 'titleAndClosebtn'
                    }
                  >
                    <div className="title">
                      <h2>{state.title}</h2>
                    </div>
                    {state.canClose && (
                      <button onClick={closeModal} className="closeBtn">
                        <AiOutlineClose color={'red'} size={25} />
                      </button>
                    )}
                  </div>
                )}
                {state.template}
              </div>
            </div>
          </>,
          root.current
        )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModalContext = () => {
  return useContext(ModalContext);
};
