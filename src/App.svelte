<script lang="ts">
    import SimulationCanvas from "./components/SimulationCanvas.svelte";
    import "./app.css";
    import SimulationControls from "./components/SimulationControls.svelte";

    let left_pane_menu = "Controls";
</script>

<div class="container">
    <div class="left-pane">
        {#if left_pane_menu === "Statistics"}
            <p>Statistics menu</p>
        {:else if left_pane_menu === "Controls"}
            <SimulationControls/>
        {/if}
    </div>
    <div class="right-pane">
        <SimulationCanvas/>
    </div>
</div>




<style>
    .container {
        display: flex;
    }
    .left-pane {
        width: 50vw;
        height: 100vh;
        background-color: grey;
    }

    .right-pane {
        width: 50vw;
        height: 100vh;
        background-color: antiquewhite;
    }
</style>
