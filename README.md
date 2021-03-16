# Vue Skeleton 💀

A simple dynamic skeleton component for Vue.js applications.

## Supported Vue.js versions

2.X

## How to install ?
With NPM
```
npm install @neiwad/vue-skeleton
```
With YARN
```
yarn add @neiwad/vue-skeleton
```
## How to use ?
### As a global component
In your main.js
```
import Skeleton from "@neiwad/vue-skeleton"
Vue.component(Skeleton, Skeleton)
```
### As a scoped component
In your view / component
```
<script>
import Skeleton from "@neiwad/vue-skeleton"
export default {
  components: {
    Skeleton
  }
};
</script>
```
## Examples
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

## Next steps
- Add multiple animations
- Create a Vue3 version

## Any issue ?

Feel free to submit an issue [here](https://github.com/NEIWAD/vue-skeleton/issues/new)
