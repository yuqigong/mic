<template>
    <div class="miui-search">
        <div class="miui-search-area">
            <input type="text" class="miui-input" placeholder="搜索">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
@import '../../stylesheet/all.scss';

.miui-search {
    width: 100%;
    background-color: $blankColor;
    height: r(55);

    .miui-search-area {
        // height: r(55);
        padding: r(10) r(16);

        .miui-input {
            width: 100%;
            height: r(30);
            font-size: r($normalSize);
            line-height: r(30);
            text-indent: r(10);
            color: $secondaryTextColor;
            overflow: hidden;
            text-overflow: ellipsis;
            background-color: #fff;
        }

        input.miui-input::-webkit-input-placeholder,
        textarea.miui-input::-webkit-input-placeholder {
            color: $hintTextColor;
        }
    }

    .miui-search-func {
        position: absolute;
        right: 0;
        text-align: center;
    }
}
</style>
