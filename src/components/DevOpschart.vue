<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Frontendchart',
  extends: Radar,
  data (){
    return {
      data: {
        labels: ["Linux","Git","GitHub","Firebase","AWS"],
        datasets: [
          {
            label: 'Bar Dateset',
            data: [],
            backgroundColor: [
              'rgba(72,61,139,0.65)',
            ],
            borderColor: [
              'rgba(72,61,139,1)',
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
    this.getSkills ()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills () {
      const skills = this.$store.getters.skillName(2)
      this.data.labels =skills
      const scores = this.$store.getters.skillScore(2)
      this.data.datasets[0].data =scores
    }
  }
}
</script>
