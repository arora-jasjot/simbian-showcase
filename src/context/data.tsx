"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AlertInterface } from "@/types/Alert";
import { ThreatInterface } from "@/types/Threat";
import ignoredAlerts from '@/assets/alerts/ignored.svg';
import closedAlerts from '@/assets/alerts/closed.svg';
import threatAlerts from '@/assets/alerts/threat.svg';
import threatNoneAlerts from '@/assets/alerts/threat-none.svg';
import { threats } from '@/data/threats';

// Helper function to get random threats
const getRandomThreats = (length: number): ThreatInterface[] => {
  const result: ThreatInterface[] = [];
  const _length = length > 10 ? 10 : length;
  for (let i = 0; i < _length; i++) {
    const randomIndex = Math.floor(Math.random() * threats.length);
    result.push(threats[randomIndex]);
  }
  return result.slice(0, 10);
};

// Define the initial state of alerts
const initialAlerts: AlertInterface[] = [
  {
    id: 1,
    title: 'Ignored Alerts',
    icon: ignoredAlerts,
    count: 200,
    threats: getRandomThreats(200),
  },
  {
    id: 2,
    title: 'Wrongly Closed',
    icon: closedAlerts,
    count: 35,
    threats: getRandomThreats(35),
  },
  {
    id: 3,
    title: 'Active Threats',
    icon: threatAlerts,
    icon2: threatNoneAlerts,
    high_priority: true,
    count: 5,
    threats: getRandomThreats(5),
  },
];

// Create a context with the shape of the alerts
const AlertContext = createContext<{
  alerts: AlertInterface[];
  setAlerts: React.Dispatch<React.SetStateAction<AlertInterface[]>>;
  clearAlerts: () => void;
  resetAlerts: () => void;
}>({
  alerts: initialAlerts,
  setAlerts: () => {},
  clearAlerts: () => {},
  resetAlerts: () => {},
});

// Create a provider component to wrap the app and provide the alerts
interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alerts, setAlerts] = useState<AlertInterface[]>(initialAlerts);
  const [withSimbianMode, setWithSimbianMode] = useState(false);
  
  // Helper function to add a random threat to the Active Threats alert
  const addRandomThreat = () => {
    if (!withSimbianMode) {
      const randomIndex = Math.floor(Math.random() * threats.length);
      const newThreat = threats[randomIndex];
  
      setAlerts((prevAlerts) => {
        return prevAlerts.map((alert) => {
          if (alert.id === 3) {
            return { 
              ...alert, 
              count: alert.count + 1, 
              threats: alert.count < 10 ? [...(alert.threats || []), newThreat] : [...(alert.threats || [])]
            };
          }
          return alert;
        });
      });
    }
  };

  // Function to clear all alerts (set count to 0 and clear threats)
  const clearAlerts = () => {
    setAlerts((prevAlerts) => {
      return prevAlerts.map((alert) => {
        return { ...alert, count: 0, threats: [] }; // Reset count to 0 and clear threats
      });
    });
    setWithSimbianMode(true); // This will prevent new threats from being added
  };
  
  // Function to reset all alerts to initial state
  const resetAlerts = () => {
    setAlerts(initialAlerts);
    setWithSimbianMode(false); // This will allow new threats to be added again
  };

  // Use useEffect to set up the interval for increasing Active Threats
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!withSimbianMode) {
      interval = setInterval(() => {
        addRandomThreat(); // Increment count and add a random threat
      }, 5000);
    }
    // Clear the interval when the component is unmounted or SimbianMode is enabled
    return () => clearInterval(interval);
  }, [withSimbianMode]); // Run the effect whenever withSimbianMode changes

  return (
    <AlertContext.Provider value={{ alerts, setAlerts, clearAlerts, resetAlerts }}>
      {children}
    </AlertContext.Provider>
  );
};

// Create a custom hook to use the context in other components
export const useAlerts = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlerts must be used within an AlertProvider");
  }
  return context;
};