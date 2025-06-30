import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import {
  TrendingUp,
  People,
  ShoppingCart,
  BugReport
} from '@mui/icons-material';

const MetricCard = ({ title, value, icon, color, bgColor }) => (
  <Card sx={{ 
    height: '120px',
    backgroundColor: bgColor,
    border: 'none',
    boxShadow: 'none'
  }}>
    <CardContent sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textAlign: 'center'
    }}>
      <Box sx={{ 
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '50%',
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 1
      }}>
        {React.cloneElement(icon, { sx: { color: color, fontSize: 20 } })}
      </Box>
      <Typography variant="h4" sx={{ 
        fontWeight: 'bold', 
        color: '#333',
        mb: 0.5
      }}>
        {value}
      </Typography>
      <Typography variant="body2" sx={{ 
        color: '#666',
        fontSize: '12px'
      }}>
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const LineChartPlaceholder = () => (
  <Paper sx={{ 
    p: 3, 
    height: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
        Website Visits
      </Typography>
      <Typography variant="body2" sx={{ color: '#666' }}>
        (+43%) than last year
      </Typography>
    </Box>
    
    <Box sx={{ 
      display: 'flex', 
      gap: 2, 
      mb: 2,
      justifyContent: 'center'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box sx={{ 
          width: 8, 
          height: 8, 
          borderRadius: '50%', 
          backgroundColor: '#4CAF50' 
        }} />
        <Typography variant="caption">Team A</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box sx={{ 
          width: 8, 
          height: 8, 
          borderRadius: '50%', 
          backgroundColor: '#FFC107' 
        }} />
        <Typography variant="caption">Team B</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box sx={{ 
          width: 8, 
          height: 8, 
          borderRadius: '50%', 
          backgroundColor: '#2196F3' 
        }} />
        <Typography variant="caption">Team C</Typography>
      </Box>
    </Box>

    <Box sx={{ 
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9fa',
      borderRadius: 1,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Simulated line chart with CSS */}
      <svg width="100%" height="100%" viewBox="0 0 400 150">
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#e0e0e0" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Team A line (green) */}
        <polyline
          fill="none"
          stroke="#4CAF50"
          strokeWidth="2"
          points="20,120 60,100 100,80 140,90 180,70 220,60 260,50 300,45 340,40 380,35"
        />
        
        {/* Team B line (yellow) */}
        <polyline
          fill="none"
          stroke="#FFC107"
          strokeWidth="2"
          points="20,100 60,110 100,95 140,105 180,85 220,90 260,75 300,80 340,70 380,65"
        />
        
        {/* Team C line (blue) */}
        <polyline
          fill="none"
          stroke="#2196F3"
          strokeWidth="2"
          points="20,130 60,125 100,115 140,110 180,100 220,95 260,85 300,75 340,65 380,55"
        />
      </svg>
    </Box>
  </Paper>
);

const PieChartPlaceholder = () => (
  <Paper sx={{ 
    p: 3, 
    height: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
      Current Visits
    </Typography>
    
    <Box sx={{ 
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      {/* Simulated pie chart */}
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="transparent"
          stroke="#f44336"
          strokeWidth="40"
          strokeDasharray="125.6 251.2"
          strokeDashoffset="0"
          transform="rotate(-90 100 100)"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="transparent"
          stroke="#4CAF50"
          strokeWidth="40"
          strokeDasharray="94.2 282.6"
          strokeDashoffset="-125.6"
          transform="rotate(-90 100 100)"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="transparent"
          stroke="#2196F3"
          strokeWidth="40"
          strokeDasharray="62.8 314"
          strokeDashoffset="-219.8"
          transform="rotate(-90 100 100)"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="transparent"
          stroke="#FFC107"
          strokeWidth="40"
          strokeDasharray="31.4 345.4"
          strokeDashoffset="-282.6"
          transform="rotate(-90 100 100)"
        />
      </svg>
      
      {/* Percentage labels */}
      <Box sx={{ 
        position: 'absolute',
        top: '20%',
        right: '15%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        38%
      </Box>
      <Box sx={{ 
        position: 'absolute',
        bottom: '25%',
        right: '25%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        22%
      </Box>
      <Box sx={{ 
        position: 'absolute',
        bottom: '30%',
        left: '20%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        30%
      </Box>
      <Box sx={{ 
        position: 'absolute',
        top: '25%',
        left: '30%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        10%
      </Box>
    </Box>
  </Paper>
);

export default function Dashboard() {
  const metrics = [
    {
      title: 'Weekly Sales',
      value: '714k',
      icon: <TrendingUp />,
      color: '#2e7d32',
      bgColor: '#c8e6c9'
    },
    {
      title: 'New Users',
      value: '1.35m',
      icon: <People />,
      color: '#1565c0',
      bgColor: '#bbdefb'
    },
    {
      title: 'Item Orders',
      value: '172m',
      icon: <ShoppingCart />,
      color: '#ef6c00',
      bgColor: '#ffe0b2'
    },
    {
      title: 'Bug Reports',
      value: '234',
      icon: <BugReport />,
      color: '#c62828',
      bgColor: '#ffcdd2'
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Metric Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MetricCard {...metric} />
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <LineChartPlaceholder />
        </Grid>
        <Grid item xs={12} md={4}>
          <PieChartPlaceholder />
        </Grid>
      </Grid>
    </Box>
  );
}