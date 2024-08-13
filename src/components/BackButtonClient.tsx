'use client';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  className?: string;
}

const BackButtonClient: React.FC<BackButtonProps> = ({ className = '' }) => {
  const router = useRouter();

  const handleBack: () => void = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className={`flex items-center py-3 pr-10 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.7867 3L6.21333 12L15.7867 21"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackButtonClient;
