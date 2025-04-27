"use client";
"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { AlertInterface } from "@/types/Alert";
import { ThreatInterface } from "@/types/Threat";
import ignoredAlerts from '@/assets/alerts/ignored.svg';
import closedAlerts from '@/assets/alerts/closed.svg';
import threatAlerts from '@/assets/alerts/threat.svg';
import threatNoneAlerts from '@/assets/alerts/threat-none.svg';
import { threats } from '@/data/threats';


// Define the initial state of alerts
const initialAlerts: AlertInterface[] = [
  {
    id: 1,
    title: 'Ignored Alerts',
    icon: ignoredAlerts,
    count: 200,
    threats: [
      {...threats[0]},
      {...threats[2]},
      {...threats[1]},
      {...threats[2]},
      {...threats[1]},
      {...threats[0]},
      {...threats[1]},
      {...threats[2]},
      {...threats[0]},
      {...threats[1]}
    ]
  },
  {
    id: 2,
    title: 'Wrongly Closed',
    icon: closedAlerts,
    count: 35,
    threats: [
      {...threats[0]},
      {...threats[1]},
      {...threats[2]},
      {...threats[1]},
      {...threats[1]},
      {...threats[2]},
      {...threats[0]},
      {...threats[0]},
      {...threats[2]},
      {...threats[1]}
    ]
  },
  {
    id: 3,
    title: 'Active Threats',
    icon: threatAlerts,
    icon2: threatNoneAlerts,
    high_priority: true,
    count: 5,
    threats: [
      {...threats[0]},
      {...threats[1]},
      {...threats[2]},
      {...threats[1]},
      {...threats[1]}
    ]
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval

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

  // Function to clear all alerts gradually (set count to 0 and clear threats)
  const clearAlerts = () => {
    const totalDuration = 2000; // 2 seconds
    const stepDuration = 5; // Step duration in milliseconds
    const steps = totalDuration / stepDuration;

    let currentStep = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear any existing interval
    }
    
    intervalRef.current = setInterval(() => {
      setAlerts((prevAlerts) => {
        return prevAlerts.map((alert) => {
          if (alert.count > 0) {
            // Decrement count and remove one threat at each step
            const decrementCount = alert.count > 0 ? 1 : 0;
            const newCount = alert.count - decrementCount;
            const newThreats = (alert.threats || []).slice(0, newCount);
            return { ...alert, count: newCount, threats: newThreats };
          }
          return alert;
        });
      });

      currentStep += 1;
      if (currentStep >= steps) {
        clearInterval(intervalRef.current || 0); // Clear the interval when done
        intervalRef.current = null; // Reset the interval reference
        setWithSimbianMode(true); // Prevent new threats after clearing
      }
    }, stepDuration);
  };

  // Function to reset all alerts to initial state
  const resetAlerts = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the ongoing interval
      intervalRef.current = null; // Reset the interval reference
    }

    setAlerts(initialAlerts);
    setWithSimbianMode(false); // Allow new threats to be added again
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