interface LivingEntity {
  healthPoint: number;
}
type MagicalEntity = {
  manaPoint: number;
};

// type magicalCreature = {
//   healthPoint: number;
//   manaPoint: number;
// };

// intersection
type magicalCreature = LivingEntity & MagicalEntity;
