import { useCallback, useState } from 'react';
import classes from './modals.module.scss';
import { Info, X } from 'lucide-react';

interface ModalItem {
  id: number;
  heading: string;
  content: string;
}
const Modals = ({ content }: { content: ModalItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <div className={classes.mainModal}>
      <button onClick={openModal} className={classes.infoButton}>
        <Info />
      </button>
      {isOpen && (
        <div className={classes.backdrop}>
          <div className={classes.dialog}>
            <button className={classes.closeButton} onClick={closeModal}>
              <X />
            </button>
            {content.map((item: ModalItem) => (
              <div key={item.id} className={classes.contentDiv}>
                <h1 className={classes.contentHeading}>{item.heading}</h1>
                <p className={classes.contentPara}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
