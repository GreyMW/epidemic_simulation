<script lang="ts">
    // let value = 50;
    export let bound_value: number;

    $: bound_value, value_changed();
    function value_changed() {
        console.log(bound_value);
    }

</script>

<input type="range" min="1" max="100" bind:value={bound_value} >

<style>

</style>