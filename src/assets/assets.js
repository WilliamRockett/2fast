export default function loadAssets() {
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
}