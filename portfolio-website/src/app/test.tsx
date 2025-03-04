'use client';
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  FileText,
  DollarSign,
  CreditCard,
  Briefcase,
  ChevronRight,
  Bell,
  User,
  Settings
} from 'lucide-react';

const CreditProDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data for charts
  const creditScoreHistory = [
    { month: 'Jan', score: 620 },
    { month: 'Feb', score: 635 },
    { month: 'Mar', score: 640 },
    { month: 'Apr', score: 655 },
    { month: 'May', score: 670 },
    { month: 'Jun', score: 685 },
    { month: 'Jul', score: 695 },
    { month: 'Aug', score: 710 },
  ];

  const industryComparison = [
    { metric: 'Debt-to-Income', you: 42, industry: 45 },
    { metric: 'Payment History', you: 85, industry: 80 },
    { metric: 'Credit Mix', you: 75, industry: 70 },
    { metric: 'Credit History', you: 60, industry: 65 },
    { metric: 'New Credit', you: 90, industry: 75 },
  ];

  const creditScoreBreakdown = [
    { name: 'Payment History', value: 35, color: '#4338ca' },
    { name: 'Credit Utilization', value: 30, color: '#6366f1' },
    { name: 'Credit History', value: 15, color: '#818cf8' },
    { name: 'Credit Mix', value: 10, color: '#a5b4fc' },
    { name: 'New Credit', value: 10, color: '#c7d2fe' },
  ];

  // Recommendations data
  const recommendations = [
    {
      id: 1,
      title: 'Reduce Credit Utilization',
      description: 'Your credit utilization is at 65%. Aim to keep it below 30% to improve your score by an estimated 25-40 points.',
      impact: 'high',
      timeframe: 'short-term'
    },
    {
      id: 2,
      title: 'Lengthen Credit History',
      description: 'Keep your oldest accounts open to maintain a longer credit history, which can improve your score over time.',
      impact: 'medium',
      timeframe: 'long-term'
    },
    {
      id: 3,
      title: 'Diversify Credit Mix',
      description: 'Consider adding a different type of credit to your portfolio to demonstrate ability to manage various types of credit.',
      impact: 'medium',
      timeframe: 'medium-term'
    }
  ];

  // Alerts and notifications
  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Late payment detected on Loan #RT-4578',
      date: '2 days ago'
    },
    {
      id: 2,
      type: 'success',
      message: 'Credit score improved by 15 points',
      date: '1 week ago'
    }
  ];

  // Impact colors
  const impactColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-amber-100 text-amber-800',
    low: 'bg-green-100 text-green-800'
  };

  // Timeframe colors
  const timeframeColors = {
    'short-term': 'bg-blue-100 text-blue-800',
    'medium-term': 'bg-purple-100 text-purple-800',
    'long-term': 'bg-indigo-100 text-indigo-800'
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNjE2MjIiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDJhMTggMTggMCAwIDEgMCAzNiAxOCAxOCAwIDAgMSAwLTM2eiIvPjwvZz48L2c+PC9zdmc+')] overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                  <div className="relative flex items-center justify-center bg-white rounded-lg p-1">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
                      <rect x="2" y="8" width="28" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 22V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 15C16 13.3431 17.3431 12 19 12H25C26.6569 12 28 13.3431 28 15V17C28 18.6569 26.6569 20 25 20H19C17.3431 20 16 18.6569 16 17V15Z" fill="currentColor" fillOpacity="0.2"/>
                      <path d="M20 16H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <span className="text-indigo-600 font-bold text-xl tracking-tight">CreditPro</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium">Beta</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`${activeTab === 'dashboard' 
                    ? 'border-indigo-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} 
                    inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition-colors duration-150`}
                >
                  <div className="mr-1.5 text-indigo-500">
                    <TrendingUp size={16} />
                  </div>
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('reports')}
                  className={`${activeTab === 'reports' 
                    ? 'border-indigo-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} 
                    inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition-colors duration-150`}
                >
                  <div className="mr-1.5 text-indigo-500">
                    <FileText size={16} />
                  </div>
                  Reports
                </button>
                <button 
                  onClick={() => setActiveTab('advisory')}
                  className={`${activeTab === 'advisory' 
                    ? 'border-indigo-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} 
                    inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition-colors duration-150`}
                >
                  <div className="mr-1.5 text-indigo-500">
                    <Briefcase size={16} />
                  </div>
                  Advisory
                </button>
                <button 
                  onClick={() => setActiveTab('documents')}
                  className={`${activeTab === 'documents' 
                    ? 'border-indigo-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} 
                    inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition-colors duration-150`}
                >
                  <div className="mr-1.5 text-indigo-500">
                    <FileText size={16} />
                  </div>
                  Documents
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="inline-flex relative mr-3">
                <button className="p-1.5 rounded-lg text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-150 focus:outline-none relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                </button>
              </div>
              <button className="ml-2 p-1.5 rounded-lg text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-150 focus:outline-none">
                <Settings size={20} />
              </button>
              <div className="ml-4 relative flex items-center">
                <div className="relative">
                  <button className="flex text-sm rounded-full ring-2 ring-indigo-100 focus:outline-none">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-medium">
                      AI
                    </div>
                  </button>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-2 hidden md:block">
                  <div className="text-sm font-medium text-gray-700">Acme Inc.</div>
                  <div className="text-xs text-gray-500">Premium Plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <div className="mb-6 bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-500 rounded-xl shadow-xl overflow-hidden">
          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="absolute inset-0 bg-white opacity-5 pattern-grid-lg transform rotate-12"></div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative z-10">
              <div>
                <div className="flex items-center">
                  <div className="mr-3 bg-white bg-opacity-20 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">Welcome back, Acme Inc.</h2>
                </div>
                <p className="mt-3 text-indigo-100 text-sm md:text-base ml-12">
                  Your credit score has improved by <span className="font-semibold text-white">15 points</span> in the last 30 days! You're making excellent progress.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-opacity-90 transition duration-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-indigo-600">
                  Generate Report
                </button>
                <button className="bg-transparent border border-white bg-white bg-opacity-10 text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-20 transition duration-150 focus:outline-none focus:ring-2 focus:ring-white">
                  Set Goals
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Credit Score Card */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-100 md:col-span-1 hover:shadow-xl transition-shadow duration-300">
            <div className="px-5 py-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-3 shadow-md">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                      Credit Score
                      <span className="ml-1.5 bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded">FICO®</span>
                    </dt>
                    <dd>
                      <div className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">710</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <ArrowUpRight className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="sr-only">Increased by</span>
                          15 pts
                        </div>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="mt-6">
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold inline-flex items-center text-indigo-700 mb-1">
                      <span className="mr-1">●</span>
                      FICO® Score Range
                    </div>
                    <div className="text-xs bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded">
                      710 / 850
                    </div>
                  </div>
                  <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gray-100">
                    <div style={{ width: "71%" }} className="shadow-lg rounded-full flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-500 transition-all duration-500 ease-in-out">
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span className="font-medium">300</span>
                    <span className="text-xs flex flex-col items-center">
                      <span className="h-2 w-px bg-gray-400 mb-1"></span>
                      <span>580</span>
                      <span className="text-[10px] text-gray-500 font-medium">Poor</span>
                    </span>
                    <span className="text-xs flex flex-col items-center">
                      <span className="h-2 w-px bg-gray-400 mb-1"></span>
                      <span>670</span>
                      <span className="text-[10px] text-gray-500 font-medium">Fair</span>
                    </span>
                    <span className="text-xs flex flex-col items-center relative">
                      <span className="h-2 w-px bg-gray-400 mb-1"></span>
                      <span className="font-medium">740</span>
                      <span className="text-[10px] text-gray-500 font-medium">Good</span>
                      <span className="absolute -top-4 w-14 h-6 -left-7 flex items-center justify-center">
                        <span className="animate-ping absolute h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative rounded-full h-1.5 w-1.5 bg-indigo-600"></span>
                      </span>
                    </span>
                    <span className="text-xs flex flex-col items-center">
                      <span className="h-2 w-px bg-gray-400 mb-1"></span>
                      <span>800</span>
                      <span className="text-[10px] text-gray-500 font-medium">Excellent</span>
                    </span>
                    <span className="font-medium">850</span>
                  </div>
                </div>
                <div className="mt-4 pt-2 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">Last updated 3 days ago</div>
                    <button className="text-xs text-indigo-600 font-medium hover:text-indigo-800 transition-colors">View History</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Health Card */}
          <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-100 md:col-span-1 hover:shadow-xl transition-shadow duration-300">
            <div className="px-5 py-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3 shadow-md">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                      Financial Health
                      <span className="ml-1.5 bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded">Strong</span>
                    </dt>
                    <dd>
                      <div className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">Good</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          <ArrowUpRight className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                          <span className="sr-only">Improved</span>
                          2 levels
                        </div>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="mt-5">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-medium text-gray-700 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
                      Debt-to-Income Ratio
                    </span>
                    <span className="text-xs font-semibold bg-green-100 text-green-800 px-1.5 py-0.5 rounded">42%</span>
                  </div>
                  <div className="relative h-2 rounded-full overflow-hidden bg-gray-200">
                    <div className="absolute h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  <div className="mt-3 flex justify-between mb-1.5">
                    <span className="text-xs font-medium text-gray-700 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-1.5"></span>
                      Cash Flow Stability
                    </span>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">78%</span>
                  </div>
                  <div className="relative h-2 rounded-full overflow-hidden bg-gray-200">
                    <div className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="mt-4 pt-2 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">Updated today</div>
                    <button className="text-xs text-green-600 font-medium hover:text-green-800 transition-colors">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Rating Card */}
          <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-100 md:col-span-1 hover:shadow-xl transition-shadow duration-300">
            <div className="px-6 py-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 shadow-md">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate flex items-center">
                      Business Credit Rating
                      <span className="ml-1.5 bg-amber-100 text-amber-700 text-xs px-1.5 py-0.5 rounded">Moderate</span>
                    </dt>
                    <dd>
                      <div className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 flex items-baseline">
                          BB+
                          <span className="ml-2 text-sm font-normal text-gray-500">(65/100)</span>
                        </div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-amber-600">
                          <span className="sr-only">Rating</span>
                          Medium Risk
                        </div>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-gray-700">Improvement Target</span>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">BBB-</span>
                  </div>
                  
                  <div className="relative mt-2 h-4 rounded-xl overflow-hidden bg-gray-200">
                    <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500"></div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex">
                      <div className="w-1/3 border-r border-white opacity-30"></div>
                      <div className="w-1/3 border-r border-white opacity-30"></div>
                      <div className="w-1/3"></div>
                    </div>
                  </div>
                  
                  {/* Position markers - separate from the scale for better visibility */}
                  <div className="relative h-6 mt-1">
                    {/* Current position marker */}
                    <div className="absolute left-[65%] top-0 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="flex h-6 w-6 rounded-full bg-blue-500 border-2 border-white justify-center items-center shadow-md">
                        <span className="text-[8px] font-bold text-white">Now</span>
                      </div>
                      <div className="h-3 w-0.5 bg-blue-300 mt-1"></div>
                    </div>
                    
                    {/* Goal position marker */}
                    <div className="absolute left-[78%] top-0 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="flex h-6 w-6 rounded-full bg-white border-2 border-blue-200 justify-center items-center shadow-sm">
                        <span className="text-[8px] font-bold text-gray-600">Goal</span>
                      </div>
                      <div className="h-3 w-0.5 bg-gray-300 mt-1"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 text-center text-xs text-gray-600 mt-2 font-medium">
                    <div>C</div>
                    <div>B</div>
                    <div>BB</div>
                    <div>BBB</div>
                    <div>A</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">Updated 5 days ago</div>
                    <button className="text-xs text-blue-600 font-medium hover:text-blue-800 transition-colors">View Report</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Credit Score Breakdown & Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Credit Score Breakdown */}
          <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 flex items-center">
              <CreditCard className="h-5 w-5 text-indigo-500 mr-2" />
              Credit Score Factors
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                  cx="50%" 
                  cy="50%" 
                  innerRadius="20%" 
                  outerRadius="90%" 
                  data={creditScoreBreakdown} 
                  startAngle={90} 
                  endAngle={-270}
                >
                  <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="value"
                    cornerRadius={8}
                  >
                    {creditScoreBreakdown.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        stroke="none"
                      />
                    ))}
                  </RadialBar>
                  <Tooltip
                    formatter={(value, name, props) => [`${value}%`, props.payload.name]}
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      border: 'none'
                    }}
                  />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    iconSize={10}
                    iconType="circle"
                    formatter={(value, entry) => {
                      return <span style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 12 }}>{entry.payload.name}</span>;
                    }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white shadow rounded-lg border border-gray-100 overflow-hidden md:col-span-2">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-4 py-4">
              <h3 className="text-lg leading-6 font-medium text-white flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                AI-Powered Recommendations
              </h3>
            </div>
            <div className="p-4">
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  {recommendations.map((recommendation) => (
                    <li key={recommendation.id} className="py-4 hover:bg-gray-50 rounded-lg px-3 transition-colors duration-150">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          {recommendation.impact === 'high' ? (
                            <div className="rounded-full bg-red-100 p-2">
                              <AlertCircle className="h-6 w-6 text-red-500" />
                            </div>
                          ) : (
                            <div className="rounded-full bg-indigo-100 p-2">
                              <CheckCircle className="h-6 w-6 text-indigo-500" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">{recommendation.title}</p>
                          <p className="text-sm text-gray-500 mt-1">{recommendation.description}</p>
                          <div className="mt-3 flex">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${impactColors[recommendation.impact]}`}>
                              {recommendation.impact.charAt(0).toUpperCase() + recommendation.impact.slice(1)} Impact
                            </span>
                            <span className={`ml-2 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${timeframeColors[recommendation.timeframe]}`}>
                              {recommendation.timeframe.charAt(0).toUpperCase() + recommendation.timeframe.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <button className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 focus:outline-none">
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="mt-6">
          <div className="bg-white shadow-lg rounded-xl border border-gray-100 divide-y divide-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="px-5 py-4 sm:px-6 flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <Bell className="h-5 w-5 text-indigo-500 mr-2" />
                Recent Alerts
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                2 New
              </span>
            </div>
            <div className="px-5 py-4 sm:p-6">
              <div className="flow-root">
                <ul className="divide-y divide-gray-100">
                  {alerts.map((alert) => (
                    <li key={alert.id} className="py-4 hover:bg-gray-50 px-2 rounded-lg transition-colors duration-150">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {alert.type === 'warning' ? (
                            <div className="rounded-full bg-amber-100 p-2 shadow-sm">
                              <AlertCircle className="h-6 w-6 text-amber-600" />
                            </div>
                          ) : (
                            <div className="rounded-full bg-green-100 p-2 shadow-sm">
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {alert.message}
                          </p>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded mr-2">
                              {alert.date}
                            </span>
                            {alert.type === 'warning' && (
                              <span className="text-xs font-medium text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                                Action Required
                              </span>
                            )}
                          </div>
                        </div>
                        <div>
                          <button className="inline-flex items-center shadow-sm px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                            View
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-2 border-t border-gray-100 flex justify-center">
                <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors inline-flex items-center">
                  View all alerts
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditProDashboard;