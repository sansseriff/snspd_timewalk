<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import { onMount } from "svelte";
  import { randomNormal } from "d3-random";
  import { diff, re, round } from "mathjs";

  // import * as bbokeh from "@bokeh/bokehjs"

  // console.log(bbokeh)

  interface JsonData {
    x: number[];
    y: number[];
  }

  interface WaveformData {
    sliding_pulse: number[];
    existing_waveform: number[];
    current_waveform: number[];
  }

  let jsonData;

  async function loadJsonData(): Promise<JsonData> {
    const response = await fetch("./peacoq_pulse_extended.json");
    return await response.json();
  }

  function rollArray<T>(arr: T[], n: number): T[] {
    arr.unshift(...arr.splice(-n));
    return arr;
  }

  function createRandomArray(n: number, p: number): number[] {
    const arr = new Array(n);
    const rand = randomNormal(0, p);
    for (let i = 0; i < n; i++) {
      arr[i] = rand();
    }
    return arr;
  }

  loadJsonData();

  onMount(async () => {
    const jsonData = await loadJsonData();
    make_graph(jsonData);
  });

  var scope = null;
  var scope_inset = null;

  function update_graph(waveformData: WaveformData, idx: number) {
    for (let i = 0; i < waveformData.existing_waveform.length; i++) {
      if (i - idx < 0 || i - idx > waveformData.sliding_pulse.length) {
        waveformData.current_waveform[i] = waveformData.existing_waveform[i];
      } else {
        waveformData.current_waveform[i] =
          waveformData.existing_waveform[i] +
          waveformData.sliding_pulse[i - idx];
      }
    }

    return waveformData;
  }

  function make_graph(json_data: JsonData) {
    let waveformData: WaveformData = {
      sliding_pulse: json_data.y.slice(),
      existing_waveform: json_data.y.slice(),
      current_waveform: json_data.y.slice(),
    };

    let pulse_offset = createRandomArray(1300, 0.2);

    waveformData.existing_waveform.splice(
      -pulse_offset.length,
      pulse_offset.length
    );
    waveformData.existing_waveform.unshift(...pulse_offset);

    let data = new Bokeh.ColumnDataSource({
      data: {
        x: json_data.x.map((value) => value - 3200 + 84),
        y: waveformData.current_waveform,
      },
    });

    const ToolTips = { index: "$index", "(x,y)": "($x,$y)" };
    var custom_tooltips = [
      ["X", "@x"],
      ["Y", "@y"],
    ];
    // var custom_hover = new Bokeh.HoverTool({
    //   tooltips: custom_tooltips,
    //   mode: "mouse",
    // });
    scope = new Bokeh.Plotting.figure({
      // title: "Example of random data",
      // tools: "pan,wheel_zoom,box_zoom,reset,save",
      tools: "",
      // toolbar: {logo: null},
      //tools: "",
      // sizing_mode: "stretch_both",
      sizing_mode: "stretch_width",
      height: 600,
      width: 2000,
      x_range: [-1000, 1000],
      y_range: [-80, 300],
    });

    scope.toolbar.logo = null;

    scope_inset = new Bokeh.Plotting.figure({
      tools: "",
      // sizing_mode: "stretch_width",
      height: 300,
      width: 300,
      x_range: [-1, 1],
      y_range: [150-100, 150+100],
    });
    scope_inset.toolbar.logo = null;

    // scope.add_tools(custom_hover);

    const line_1 = scope.line(
      { field: "x" },
      { field: "y" },
      {
        source: data,
        line_width: 3,
        line_color: "#5185c2",
      }
    );

    const line_inset = scope_inset.line(
      { field: "x" },
      { field: "y" },
      {
        source: data,
        line_width: 3,
        line_color: "#5185c2",
      }
    );

    // let rect_data = new Bokeh.ColumnDataSource({
    //   data: {
    //     x: 0,
    //     y: 100,
    //   },
    // });

    const rectangle = scope.rect({
      x: 0,
      y: 150,
      width: 16,
      height: 200,
      alpha: 0.1,
      line_color: "red",
      line_alpha: 1,
    });

    const arrow = new Bokeh.Arrow({
      x_start: 0,
      y_start: 150,
      x_end: 0,
      y_end: 0,
      line_color: "red",
      line_alpha: 1,
      line_width: 3,
      line_cap: "round",
      end: new Bokeh.NormalHead({line_color:"red", fill_color: "red", size: 15}),
    });

    scope_inset.add_layout(arrow);

    const doc = new Bokeh.Document();
    doc.add_root(scope);
    doc.add_root(scope_inset);

    Bokeh.embed.add_document_standalone(doc, document.getElementById("plot"));
    // Bokeh.embed.add_document_standalone(doc_inset, document.getElementById("plot-inset"));

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

    update_graph(waveformData, 0);
    

    setTimeout(() => {
      let figures = document.querySelectorAll(".bk-Figure");
      let rel = figures[0];
      let abs = figures[1];
      let targetRect = rel.getBoundingClientRect();


      abs.style.top = targetRect.top + "px";
      abs.style.left = targetRect.left +  2*targetRect.width/3+ "px";
      abs.style.width = targetRect.width/3 + "px";
      abs.style.height = targetRect.height/2 + "px";
    }, 20);


    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function () {
      output.innerHTML = this.value;

      var idx = Math.round(this.value);
      waveformData = update_graph(waveformData, idx);
      data.data.y = waveformData.current_waveform;
      data.change.emit();
    };
  }
</script>


<div class="container">
  <div id="plot" />
  <div id="plot-inset" />
  <div class="slidecontainer">
    <input
      type="range"
      min="1"
      max="2000"
      value="0"
      class="slider"
      id="myRange"
    />
  </div>
  <div id="demo" />
</div>

<style>
  #plot-inset {
    position: absolute;
    top: 10%;
    left: 80%;
    z-index: 9999;
    /* width: 700px; */
  }

  /* select the second instance of class bk-figure */
  :global(#plot div:nth-of-type(2)) {
    position: absolute;
    top: 10%;
    left: 80%;
    z-index: 9999;
    /* width: 700px; */
  }

  .container {
    margin: 10rem 20rem;
  }
  .slidecontainer {
    width: 100%; /* Width of the outside container */
    padding-top: 5rem;
  }

  /* The slider itself */
  .slider {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
    transition: opacity 0.2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #04aa6d; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  .slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #04aa6d; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
</style>
