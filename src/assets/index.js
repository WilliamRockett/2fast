// https://www.codeandweb.com/free-sprite-sheet-packer

export function load() {
    loadRoot('src/assets/');
    loadSprite('road_main', '/road_01/road_01_tile_03/layers/road_main.png');
    loadSprite('soil_tile', '/background_tiles/soil_tile.png');
    loadSprite('road_side01', '/road_01/road_01_tile_03/layers/road_side_01.png');
    loadSprite('road_side02', '/road_01/road_01_tile_03/layers/road_side_02.png');
    loadSprite('car_1_0_damage', '/car_1_main_positions/car_1_01.png');
    loadSprite('car_1_1_damage', '/car_1_main_positions/car_1_03.png');
    loadSprite('car_1_broken', '/car_1_main_positions/car_1_05.png');
    loadSprite('car_2_0_damage', '/car_2_main_positions/car_2_01.png');
    loadSprite('car_2_broken', '/car_2_main_positions/car_2_05.png');
    loadSprite('car_3_0_damage', '/car_3_main_positions/car_3_01.png');
    loadSprite('car_3_1_damage', '/car_3_main_positions/car_3_05.png');
    loadSprite('nitro_low', '/car_effects/nitro_low/nitro_low_000.png');
    loadSprite('stop_signal', '/car_effects/stop_signals/stop_signals_000.png');
    loadSprite('jumping_pad', '/game_props_items/Jumping_Pad_02.png');
    loadSprite('label_bar', '/main_ui/hp_bar.png');
    loadSprite('smoke_1', '/car_effects/smoke/smoke_000.png');
    loadSprite('shield', '/game_bonus_items/hp_bonus.png');

    // loadSprite('nitro', '/car_effects/nitro_low/nitro.png', {
    //     sliceX: 200,
    //     sliceY: 427,
    //     anims: {
    //         idle: {
    //             from: 1,
    //             to: 4,
    //             speed: 20,
    //             loop: true
    //         }
    //     }
    // });
}