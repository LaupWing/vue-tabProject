<template>
    <div>
        {{ welcome }}
        {{ color }}
        {{ routerColor }}
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: ['color', 'routerColor'],
    data() {
        return {
            welcome: 'This is your profile'
        }
    },
    mounted() {
        if (this.routerColor) {

            this.welcome = this.routerColor
        }

    }
}
</script>
