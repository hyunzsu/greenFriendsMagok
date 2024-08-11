import CategoryButton from './CategoryButton';

const categoryArray = ['전체', '잡담', '추천해요', '나눔', '후기', 'Q&A', '함께해요', '도와주세요'];

export default function SlideCategory() {
  return (
    <div className="scrollbar-hide flex gap-1.5 overflow-x-auto">
      {categoryArray.map((category) => (
        <CategoryButton key={category} label={category} />
      ))}
    </div>
  );
}
