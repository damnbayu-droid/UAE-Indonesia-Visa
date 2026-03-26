'use client';

import { useState } from 'react';
import { LocationContent } from '@/components/LocationPage';

export default function VisaJogja() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <LocationContent 
      location="Jogja" 
      selectedLanguage={selectedLanguage} 
      onLanguageChange={setSelectedLanguage} 
    />
  );
}
