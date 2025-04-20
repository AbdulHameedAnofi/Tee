'use client'

import { TicketingHero } from "./components/hero";
import { TicketBlock } from "./components/ticketing";

export default function Ticketing() {
  return (
    <main>
      <TicketingHero />
      <TicketBlock />
    </main>
  );
}
