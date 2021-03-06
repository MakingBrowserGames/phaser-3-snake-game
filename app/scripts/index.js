/*
 * `app` module
 * ============
 *
 * Provides the game initialization routine.
 */

//  Import configuration and game scenes.
import * as config from './constants/config';
import * as scenes from './scenes';

//  Add all required scenes and boot the game.
export function boot() {
  return Object.entries(scenes).reduce(
    (g, [k, S]) => ((g.scene.add(k, S, k === 'Game'), g)),
    new Phaser.Game(config)
  );
}

boot();
