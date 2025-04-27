import { ThreatInterface } from "./Threat";

export interface AlertInterface {
  id?: number;
  icon: string;
  icon2?: string;
  title: string;
  count: number;
  high_priority?: boolean;
  threats?: ThreatInterface[]
}