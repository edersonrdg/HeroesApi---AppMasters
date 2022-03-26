import { HeroRepositoryMemory } from '../services/db/repositories/heroRepositoryMemory';

// Create a unique instance class for all application
export const locale = {
  heroRepository: new HeroRepositoryMemory(),
};
