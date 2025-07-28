import React, { useState } from 'react';
import { ScrollArea } from './scroll-area';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from './dialog';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageGalleryProps {
    images: string[];
    alt: string;
}

export const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({ images, alt }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const showPrev = openIndex !== null && openIndex > 0;
    const showNext = openIndex !== null && openIndex < images.length - 1;

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (openIndex !== null && openIndex > 0) setOpenIndex(openIndex - 1);
    };
    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (openIndex !== null && openIndex < images.length - 1) setOpenIndex(openIndex + 1);
    };

    return (
        <ScrollArea className="w-full overflow-x-auto">
            <div className="flex gap-4 py-2">
                {images.map((image, index) => (
                    <Dialog key={index} open={openIndex === index} onOpenChange={(open) => setOpenIndex(open ? index : null)}>
                        <DialogTrigger asChild>
                            <img
                                src={image}
                                alt={alt}
                                className="h-80 w-auto rounded-lg cursor-pointer object-contain border shadow-sm transition-transform hover:scale-105"
                                onClick={() => setOpenIndex(index)}
                            />
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl flex flex-col items-center">
                            <div className="flex items-center gap-4">
                                {showPrev && (
                                    <Button variant="ghost" size="icon" onClick={handlePrev} className="self-center">
                                        <ChevronLeft className="w-8 h-8" />
                                    </Button>
                                )}
                                <img
                                    src={images[openIndex ?? 0]}
                                    alt={alt}
                                    className="max-h-[80vh] w-auto object-contain rounded-lg"
                                />
                                {showNext && (
                                    <Button variant="ghost" size="icon" onClick={handleNext} className="self-center">
                                        <ChevronRight className="w-8 h-8" />
                                    </Button>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </ScrollArea>
    );
}; 