import {
  FC, ReactNode, MouseEvent, useRef,
} from 'react';

interface BodyProps {
  children: ReactNode;
  onClick(): void;
}

const Body: FC<BodyProps> = ({ children, onClick }) => {
  const popupBoxRef = useRef<HTMLDivElement>(null);

  // Handle click
  interface IHandleClick {
    ({ target }: MouseEvent<EventTarget>): false | void;
  }
  const handleClick: IHandleClick = ({ target }) => {
    const popupBoxElement = popupBoxRef.current;

    if (!popupBoxElement?.contains(target as Node)) {
      onClick();
    }
  };

  return (
    <div role="button" tabIndex={ -1 } className="popup__body" onClick={ handleClick } onKeyDown={ undefined }>
      <div className="popup__content">
        <div className="popup__box" ref={ popupBoxRef }>
          <button type="button" className="popup__cross" onClick={ onClick }>
            {null}
          </button>
          <div className="popup__children">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
