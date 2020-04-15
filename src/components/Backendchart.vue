<script>
import { Radar } from '../../../portforio/node_modules/vue-chartjs';

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
              'rgba(54,162,235,1)',
              'rgba(255,206,86,1)',
              'rgba(75,192,192,1)',
              'rgba(153,102,255,1)',
              'rgba(255,159,64,1)'
            ],
            borderWidth: 1
          },
        ]
      },
      option: {
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
