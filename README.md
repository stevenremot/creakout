# Creakout

A circular breakout game written with Pharo and Amber.

Try a running version at https://stevenremot.github.io/creakout/

![Screenshot of the game](./screenshots/simple.png)

## Commands

- left and right: move the pads
- up: shoot the ball

When the game is finished, press any key to restart.

## Advancement

Basic gameplay is working, with two levels. Nothing extravagant for now.

### Possible improvements

- Add more levels
- Add more gameplay elements (bonus, extra lives, moving bricks...)

## How to install

Clone this repository.

### Pharo

In monticello, add the folder `repository` as a filetree
repository. You can then import the source in your image.

Run the game by doing `CreakoutMorphic start`

### Amber

Install amber as explained in the [repository README](https://lolg.it/amber/amber).

Go to the `web` folder, and run `amber serve`.

## Development workflow

The package `Creakout` is shared between the Pharo and the Amber version. Any change to it should be done in Pharo, then imported in Amber by:

1. Fileing out the `Creakout` package
2. Running `amberc Creakout.st`
3. Moving `Creakout.js` in `web/src`

On Pharo, `Creakout-Morphic` represents the integration of the game in Morphic.

On Amber, `CreakoutWeb` represents the integration of the game in Amber.

`Creakout-Compat` is responsible for abstracting differences between Pharo and Amber. You can find in this package classes that acts as adapters, or classes / standard class methods that are implemented in Pharo and not in Amber.

## Known issues

- Random freezes on Pharo 5 (apparently solved in Pharo 6)
- The keys aren't properly mapped on Mac OS

