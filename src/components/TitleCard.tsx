"use client";

import React from 'react';

interface TitleCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  subtitle,
  description
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
      <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">{subtitle}</h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default TitleCard;