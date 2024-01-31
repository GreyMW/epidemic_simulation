<script lang="ts">

    import RangeSlider from "./RangeSlider.svelte";

    let population = 10;

    $: console.log("Population: " + population)

</script>

<div class = "container">
    <p>Simulation Controls</p>
    <RangeSlider bound_value={population}/>

</div>

<style>
    .container {
        background-color: red;
    }
</style>