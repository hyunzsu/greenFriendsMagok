import BackButtonClient from './BackButtonClient';

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = '' }) => {
  return <BackButtonClient className={className} />;
};

export default BackButton;
