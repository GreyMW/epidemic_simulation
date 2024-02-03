<script lang="ts">

    import simulation_state from "../simulation/simulation_store";
    import RangeSlider from "./RangeSlider.svelte";

    // $: console.log("From Store " + $simulation_state.population);

</script>

<div class = "container">
    <p>Simulation Controls</p>

    <div class="slider">
        <p>Population&nbsp;</p>
        <p class="slider-value">{$simulation_state.population}</p>
        <RangeSlider bind:value = {$simulation_state.population}/>
    </div>

    <div class="slider">
        <p>R (Basic Reproduction Number)&nbsp;</p>
        <p class="slider-value">{$simulation_state.r_value / 10}</p>
        <RangeSlider bind:value = {$simulation_state.r_value}/>
    </div>

    <div class="slider">
        <p>Social Distancing Strength&nbsp;</p>
        <p class="slider-value">{$simulation_state.social_distancing_factor+ "%"}</p>
        <RangeSlider min={0} bind:value = {$simulation_state.social_distancing_factor}/>
    </div>

    <RangeSlider/>

</div>

<style>
    .container {
        background-color: red;
    }

    .slider {
        display: flex;
    }

    .slider-value {
        width: 25px;
    }
</style>