export default function collisions() {
    onCollide('player', 'background', (player) => {
        debug.log('Sortie de route');

        player.kill();
    });

    onCollide('player', 'enemy', (player, enemy) => {
        if (!player.isJumping) {
            debug.log('Collision avec une autre voiture');

            player.kill();
            enemy.unuse('move');
            enemy.kill();
        }
    });

    onCollide('player', 'sprinter', (player) => {
        debug.log('Collision avec un sprinter');

        player.kill();
    });

    onCollide('player', 'jumping_pad', (player) => {
        if (!player.isJumping) {
            player.jump();
        }
    });

    onCollide('nitro', 'enemy', (nitro, enemy) => {
        debug.log('Collision nitro / voiture');

        enemy.kill();
        nitro.player.kills++;
    });

    onCollide('enemy', 'jumping_pad', (enemy) => {
        //TODO: rota hitbox
        enemy.kill();
    });

    onCollide('enemy', 'sprinter', (enemy) => {
        enemy.kill();
    });
}