'use client';
import { Crisp } from 'crisp-sdk-web';

import { useEffect } from 'react';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('5c292407-25e6-44c5-81ce-d57ea07101a9');
  }, []);

  return null;
};
