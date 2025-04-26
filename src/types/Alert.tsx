import { ThreatInterface } from "./Threat";

export interface AlertInterface {
  id?: number;
  icon: string;
  title: string;
  count: number;
  threats: ThreatInterface[];
  high_priority?: boolean;
}