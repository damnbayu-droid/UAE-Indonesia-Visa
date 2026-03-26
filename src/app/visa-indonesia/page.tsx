'use client';

import { useState } from 'react';
import { LocationContent } from '@/components/LocationPage';

export default function VisaIndonesia() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <LocationContent 
      location="Indonesia" 
      selectedLanguage={selectedLanguage} 
      onLanguageChange={setSelectedLanguage} 
    />
  );
}
