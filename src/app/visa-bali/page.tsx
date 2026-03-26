'use client';

import { useState } from 'react';
import { LocationContent } from '@/components/LocationPage';

export default function VisaBali() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <LocationContent 
      location="Bali" 
      selectedLanguage={selectedLanguage} 
      onLanguageChange={setSelectedLanguage} 
    />
  );
}
