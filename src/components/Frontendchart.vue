<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Frontendchart',
  extends: Radar,
  data (){
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Bar Dateset',
            data: [
            ],
            backgroundColor: [
              'rgba(165,42,42,0.65)',
            ],
            borderColor: [
              'rgba(165,42,42,1)',
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
    this.getSkills () //getSkilK関数のmetohd内で処理する①！
    this.renderChart(this.data, this.options) //②！①が先に実行されてて数値が出ないと描画できないから
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
