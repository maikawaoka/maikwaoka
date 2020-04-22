<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Frontendchart',
  extends: Radar,
  data (){
    return {
      data: {
        labels: ["Java","Ruby","RubyOnRails","MySQL","Python"],
        datasets: [
          {
            label: 'Bar Dateset',
            data: [],
            backgroundColor: [
              'rgba(0,51,151,0.6)',
            ],
            borderColor: [
              'rgba(0,51,151,1)',
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
    this.getSkills
    this.renderChart(this.data, this.options)
  },
  method: {
    getSkill(){
      const skills = this.$store.state.skills
      this.data.labels =skills
    }
  }
}
</script>
