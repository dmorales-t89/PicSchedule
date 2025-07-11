'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BoltBadgeProps {
  variant?: 'white-circle' | 'black-circle';
  className?: string;
  size?: number;
}

export function BoltBadge({ 
  variant = 'black-circle', 
  className,
  size = 40 // Increased default size from 32 to 40
}: BoltBadgeProps) {
  const badgeFile = variant === 'white-circle' 
    ? '/image copy copy.png' 
    : '/image copy.png';

  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block transition-transform hover:scale-110 z-50",
        className
      )}
      title="Built with Bolt.new"
    >
      <Image
        src={badgeFile}
        alt="Built with Bolt.new"
        width={size}
        height={size}
        className="drop-shadow-sm"
      />
    </a>
  );
}