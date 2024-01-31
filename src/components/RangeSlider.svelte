<script lang="ts">
       export let value: number = 50;
       export let min = 1;
       export let max = 100;

</script>

<input type="range" {min} {max} bind:value={value} >

<style>

</style>