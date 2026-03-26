'use client';

import { useState } from 'react';
import { LocationContent } from '@/components/LocationPage';

export default function VisaLombok() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <LocationContent 
      location="Lombok" 
      selectedLanguage={selectedLanguage} 
      onLanguageChange={setSelectedLanguage} 
    />
  );
}
