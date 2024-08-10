'use client';

import useModal from '../lib/hooks/useModal';
import MenuModal from './MenuModal';

export default function MeatBallsMenu() {
  const { openModal, closeModal, ModalPortal } = useModal();

  return (
    <div>
      <button
        className="flex flex-row items-center justify-center rounded-full border border-primary p-2 hover:bg-secondary"
        aria-label="메뉴 열기"
        aria-haspopup="true"
        onClick={openModal}
      >
        <span className="sr-only">메뉴</span>
        <div className="flex space-x-1">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary"></span>
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary"></span>
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary"></span>
        </div>
      </button>
      <ModalPortal>
        <MenuModal closeModal={closeModal} />
      </ModalPortal>
    </div>
  );
}
