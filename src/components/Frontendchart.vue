<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Frontendchart',
  extends: Radar,
  data (){
    return {
      data: {
        labels: ["HTML", "css", "Javascript", "SCSS", "Vue"],
        datasets: [
          {
            label: 'Bar Dateset',
            data: [3, 4, 2, 1, ],
            backgroundColor: [
              'rgba(102,51,51,0.6)',
            ],
            borderColor: [
              'rgba(102,51,51,1)',
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale: {
          ticks: {
      beginAtZero:true,
      max :5,
      min :0
    }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
