<template>
    <div :class="['miui-badge','miui-badge-size-'+size, 'miui-badge-role-' + role]" :style="[{'background':color}]">
        {{value}}
    </div>
</template>
<script>
export default {
    name: 'mi-badge',
    data() {
        return {

        };
    },
    created() {
        // console.log(this.color);
        // console.log(this.size);
    },
    directives: {},
    props: {
        value: String,
        color: String,
        size: String,
        role: {
            type: String,
            default: 'primary'
        }
    },
    components: {},
    computed: {},
    methods: {},
    watch: {}
};
</script>
<style lang="sass" scope>
@import "../../stylesheet/all.scss";

.miui-badge {
    display: inline-block;
    vertical-align: top;
    border-radius: r(10);
    text-align: center;
    font-size: r(14);
    padding: 0 6px;
    box-sizing: border-box;
    line-height: 140%;
    max-width: r(160);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: r(2);
}

.miui-badge-role-default {
    background: $contentBaseColor;
    color: $secondaryTextColor;
    border-color: rgba(0, 0, 0, 0.2);
}

.miui-badge-role-primary {
    color: $contentBaseColor;
    background-color: $supportBlue;
    border-color: $supportBlue;
}

.miui-badge-role-success {
    color: $contentBaseColor;
    background-color: $supportGreen;
    border-color: $supportGreen;
}

.miui-badge-role-info {
    color: $contentBaseColor;
    background-color: $supportNavyBlue;
    border-color: $supportNavyBlue;
}

.miui-badge-role-warning {
    color: $contentBaseColor;
    background-color: $supportOrange;
    border-color: $supportOrange;
}

.miui-badge-role-danger {
    color: $contentBaseColor;
    background-color: $supportRed;
    border-color: $supportRed;
}

.miui-badge-role-link {
    font-weight: 400;
    color: $mainTextColor;
    border-radius: 0;
}

.miui-badge-size-small {
    font-size: r(12);
}

.miui-badge-size-big {
    font-size: r(16);
}
</style>
