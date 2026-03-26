'use client';

import { useState } from 'react';
import { LocationContent } from '@/components/LocationPage';

export default function VisaJakarta() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <LocationContent 
      location="Jakarta" 
      selectedLanguage={selectedLanguage} 
      onLanguageChange={setSelectedLanguage} 
    />
  );
}
