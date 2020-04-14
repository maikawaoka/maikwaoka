<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillExplain">
      skillskillskillskillsksklskillskillskillskillskillskillskillskillskillskskillskillskillsk
    </div>
    <div id="GitHub">
      <span id="gitHubLabel">
        GitHub:
      </span>
      <span id="gitHubLink">
        <a href="https://github.com/maikawaoka/portfolio">https://github.com/maikawaoka/portfolio
        </a>
      </span>
    </div>
    <canvas id="Front-end.chart" />
  </div>
</template>

<script>
// var ctx = document.getElementById("Front-end.chart");
// var myRadarChart = new Chart(ctx, {
//     type: 'radar',
//     data: {
//       labels: ["HTML", "css", "Javascript", "SCSS", "Vue"],
//       datasets: [{
//         label: 'Front-end',
//         data: [1, 3, 5, 2, 4],
//         backgroundColor: 'RGBA(,0.25)',
//         borderColor: 'RGBA(#fff)',
//         borderWidth: 1,
//         pointBackgroundColor: 'RGB()'
//       },
//       scale: {
//         ticks:{
//           suggestedMin: 1,
//           suggestedMax: 5,
//           stepSize: 5,
//           }
//         }
//       }
//     }
//   });
</script>

<style>
  #skillSection {
    background-color: #a08181;
    width: 100%;
    height: auto;
  }

  #skillTitle {
    color: #000;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-align: center;
  }

  #skillExplain {
    background: #cfc;
    color: #707070;
    font-family: 'Oswald', sans-serif;
    font-size: 12pt;
    word-break: break-all;
    font-weight: bold;
    width: 40%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }

  #GitHub {
    text-align: center;
  }

  #gitHubLabel {
    background: #cfc;
    color: #707070;
    font-family: 'Oswald', sans-serif;
    font-size: 12pt;
    word-break: break-all;
    font-weight: bold;
    width: 40%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }

  #gitHubLink {
    background: #cfc;
    color: #707070;
    font-family: 'Oswald', sans-serif;
    font-size: 12pt;
    word-break: break-all;
    width: 40%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }
</style>
