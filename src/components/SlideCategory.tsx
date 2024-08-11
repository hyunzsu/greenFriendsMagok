import CategoryButton from './CategoryButton';
import { communityCategories, noticeCategories } from '@/lib/data/categories';

import { BoardType } from '@/lib/types/types';

type SlideCategoryProps = {
  boardType: BoardType;
};

export default function SlideCategory({ boardType }: SlideCategoryProps) {
  const getCategoriesForBoard = (type: BoardType) => {
    switch (type) {
      case 'community':
        return communityCategories;
      case 'notice':
        return noticeCategories;
      default:
        return [];
    }
  };

  const categories = getCategoriesForBoard(boardType);

  return (
    <div className="scrollbar-hide flex gap-1.5 overflow-x-auto">
      {categories.map((category) => (
        <CategoryButton key={category} label={category} />
      ))}
    </div>
  );
}
