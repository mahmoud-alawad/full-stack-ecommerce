<script lang="ts" setup>

const { locales, setLocale} = useI18n();
const appLocale = ref(null);

</script>

<template>
    <div>
        <custom-header class="bg-black">
            <div >
                <img src="/favicon.ico" alt="">
            </div>
            <div>
                <select @change="setLocale(<string>appLocale)" v-model="appLocale" class="px-6">
                    <option v-for="lang in locales" :value="lang.code">{{ lang.code }}</option>
                </select>
            </div>
        </custom-header>
        <slot/>
        <custom-footer/>
    </div>
</template>

<style scoped></style>
