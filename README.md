# space-invasion

\*\*\*What to do next
1.bullets disappear when fired rapidly - the problem is in the bullet logic - any bullet reacts to any invador - work on the logic
2.bullets logic should be incorporated into the bullet component to simplify interval and to removed unnecessary dom query
33.continue the previous task - try to align machine gun and invader positionX to simplify
3.Life has been taken window appears incorrectly when it is already over
6.invadores should come in different shapes/color each level
7.the game must start slow and become faster each level. levels change after 20 invaders killed
9.implement some cool features like: exploding invaders, invaders giving extra bullets/lives, invaders taking bullets/lives
10.maybe find a cool svg machine gun
11.change the color of the field each level
12.create a window showing that the level has changed
13.optimize the interval process - the function is too long and complicated

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Fast bullet solve the problem of slowliness when there are a lot of elements on board.
