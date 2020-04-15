<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Backendchart',
  extends: Radar,
  data (){
    return {
      data: {
        labels: ["Java", "Ruby", "RubyOnRails"],
        datasets: [
          {
            label: 'Bar Dateset',
            data: [1, 3, 5, 2, 4],
            backgroundColor: [
              'rgba(225,99,132,0.2)',
            ],
            borderColor: [
              'rgba(225,99,132,1)',
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
    this.renderChart(this.date, this.options)
  }
}
</script>
