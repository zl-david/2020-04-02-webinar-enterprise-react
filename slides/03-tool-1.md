# 🎨 Prettier

- Prettier is an **automatic** code formatter
- Enforce consistent code style across the whole codebase

In combination with:

- IDE plugin: Automatically format your code on save
- Husky & pretty-quick: Automatically format your code on commit
- _Lightweight_ ESLint rules: Don't let ESLint get in the way of your development speed.

### Side effects of using Prettier

- If it can't be prettified, your code is broken!
  => Shorten "Code to Bug discovery"-feedback loop

- Get used to writing code without taking care of code style yourself!
  Let the tool work for you!
  => Improve code writing speed

### Husky

```shell
yarn add pretty-quick husky
```

package.json

```json
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged"
  }
},
```