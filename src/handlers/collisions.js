export default function collisions() {
    onCollide('player', 'background', (player) => {
        debug.log('Sortie de route');
        player.kill();
    });

    onCollide('player', 'enemy', (player, enemy) => {
        debug.log('Collision avec une autre voiture');
        player.kill();
        enemy.unuse('move');
        enemy.kill();
    });

    onCollide('nitro', 'enemy', (nitro, enemy) => {
        debug.log('Collision nitro / voiture');
        enemy.kill();
    });
}