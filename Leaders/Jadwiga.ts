import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Polish from '../Polish';

export class Jadwiga extends Leader {
  static civilization(): typeof Civilization {
    return Polish;
  }

  name(): string {
    return 'Jadwiga';
  }
}

export default Jadwiga;
