# Vue Skeleton 💀

A simple dynamic skeleton component for Vue.js applications.

## Supported Vue.js versions

2.X

## How to install ?

```
npm install @neiwad/vue-skeleton
```

## How to use ?

```
<Skeleton width="50%" height="80%" />
```

```
<Skeleton width="100px" height="45px" borderRadius="40px" color="#f4f5f6" />
```

## Props

| Name         | Type    | Default |
| ------------ | ------- | ------- |
| Color        | String  | #E0E0E0 |
| Width        | String  | 100     |
| Height       | String  | 100     |
| Rounded      | Boolean | false   |
| BorderRadius | String  | 8       |

- Width and Height without _px_ or _%_ are set with _px_ by default.
- Rounded overwrites BorderRadius.

## Any issue ?

Feel free to submit an issue [here](https://github.com/NEIWAD/vue-skeleton/issues/new)
