"use client";
import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import Image from 'next/image';

export const CompanySidebarLogo = () => {
  const { resolvedTheme } = useNextTheme();

  return (
    <Image
      className='mt-0.3 w-45 h-23'
      src={resolvedTheme === "dark" ? '/dashboard-logo.png' : '/prodetect_logo.svg'}
      alt='prodetect_logo'
      width={200}
      height={100}
    />
  );
};
