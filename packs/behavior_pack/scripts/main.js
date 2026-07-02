import { world } from '@minecraft/server';

world.afterEvents.worldInitialize.subscribe(() => {
  console.warn('[AuroraLite] Behavior Pack initialized');
});
