import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImageFromSrc } from '@/utils/backgroundRemoval';
import { Wand2, Loader2 } from 'lucide-react';

interface BackgroundRemovalButtonProps {
  imageSrc: string;
  altText: string;
  onImageProcessed: (processedImageUrl: string) => void;
  className?: string;
}

const BackgroundRemovalButton: React.FC<BackgroundRemovalButtonProps> = ({
  imageSrc,
  altText,
  onImageProcessed,
  className
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);

  const handleRemoveBackground = async () => {
    try {
      setIsProcessing(true);
      
      // Load the image
      const imageElement = await loadImageFromSrc(imageSrc);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      
      // Notify parent component
      onImageProcessed(processedUrl);
      setIsProcessed(true);
      
    } catch (error) {
      console.error('Failed to remove background:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleRemoveBackground}
      disabled={isProcessing || isProcessed}
      className={className}
    >
      {isProcessing ? (
        <>
          <Loader2 className="w-3 h-3 mr-1 animate-spin" />
          Processando...
        </>
      ) : isProcessed ? (
        <>
          <Wand2 className="w-3 h-3 mr-1" />
          Fundo Removido
        </>
      ) : (
        <>
          <Wand2 className="w-3 h-3 mr-1" />
          Remover Fundo
        </>
      )}
    </Button>
  );
};

export default BackgroundRemovalButton;