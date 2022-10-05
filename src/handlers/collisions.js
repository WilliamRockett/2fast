export default function collisions() {
    onCollide('player', 'background', (player) => {
        debug.log('Sortie de route');
        player.kill();
    });

    onCollide('player', 'enemy', (player, enemy, collision) => {
        debug.log('Collision avec une autre voiture');
        player.kill();

        enemy.use(sprite('car_2_broken', { width: 87, height: 186 }));
        enemy.unuse('move');
    });
}