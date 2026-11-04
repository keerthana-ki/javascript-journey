# 01 - Variables

| File | Topic |
|------|-------|
| `01-var-let-const.js` | Declaring variables, scope, reassigning, redeclaring |
| `02-hoisting.js` | Hoisting, Temporal Dead Zone, function hoisting |

## Key takeaways

| Keyword | Scope    | Reassign | Redeclare | Hoisting behaviour |
|---------|----------|----------|-----------|--------------------|
| `var`   | Function | Yes      | Yes       | Hoisted as `undefined` |
| `let`   | Block    | Yes      | No        | Hoisted, locked in TDZ |
| `const` | Block    | No       | No        | Hoisted, locked in TDZ |

- `const` objects can still be modified (`user.name = "K"` works); only reassigning the variable is blocked.
- Function declarations are fully hoisted; function expressions and arrow functions are not.
- Best practice: `const` by default, `let` when the value changes, avoid `var`.

## Run

```bash
node 01-variables/01-var-let-const.js
node 01-variables/02-hoisting.js
```
