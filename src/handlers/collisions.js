import constants from '../constants/index.js';

export default function collisions() {
    onCollide('player', 'background', (player) => {
        debug.log('Sortie de route');
    });

    onCollide('player', 'enemy', (player, enemy) => {
        debug.log('Collision avec une autre voiture');
    });
}