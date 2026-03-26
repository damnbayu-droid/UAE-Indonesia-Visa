'use client';

import { useState } from 'react';
import { LocationContent } from '@/components/LocationPage';

export default function VisaSurabaya() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <LocationContent 
      location="Surabaya" 
      selectedLanguage={selectedLanguage} 
      onLanguageChange={setSelectedLanguage} 
    />
  );
}
