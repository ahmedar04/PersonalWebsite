import React from 'react';
import type { Metadata } from 'next';
import CreditProDashboard from '../test';

export const metadata: Metadata = {
  title: 'CreditPro | Business Credit Dashboard',
  description: 'Affordable credit ratings and advisory tools for small businesses',
};

export default function DashboardPage() {
  return (
    <main>
      <CreditProDashboard />
    </main>
  );
}