import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import Button from './ui/Button';

interface ShareButtonProps {
  title: string;
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, url }) => {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } else {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className="flex items-center"
    >
      {shared ? (
        <>
          <Check size={16} className="mr-2" />
          Shared!
        </>
      ) : (
        <>
          <Share2 size={16} className="mr-2" />
          Share
        </>
      )}
    </Button>
  );
};

export default ShareButton;